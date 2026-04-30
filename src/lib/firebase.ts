import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, collection, query, limit, getDocsFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Standard Error Handler
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  const jsonError = JSON.stringify(errInfo);
  console.error('Firestore Error: ', jsonError);
  throw new Error(jsonError);
}

// Connection state
let isConnected = true;
export const getFirebaseStatus = () => isConnected;

// Validation check - CRITICAL: Call getFromServer to test the connection on boot
async function testConnection() {
  try {
    // Use 'products' which has 'allow list: if true' in rules
    const q = query(collection(db, 'products'), limit(1));
    await getDocsFromServer(q);
    console.log('Successfully connected to Firestore');
    isConnected = true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes('the client is offline') || errorMessage.includes('unavailable')) {
      console.error("Please check your Firebase configuration. The Cloud Firestore backend is currently unreachable.");
      isConnected = false;
    } else if (errorMessage.includes('permission-denied')) {
      console.log('Firebase connected (Permission Denied for test, but reached server)');
      isConnected = true;
    } else {
      console.warn("Initial connection test result:", error);
    }
  }
}
testConnection();

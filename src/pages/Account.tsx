import React, { useState } from 'react';
import { useAuth } from '../lib/AuthProvider';
import { auth, db, handleFirestoreError, OperationType } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { LogIn, LogOut, Package, Shield, CreditCard, Building2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { UserRole } from '../types';

export default function Account() {
  const { user, profile, loading } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      
      const profilePath = `users/${result.user.uid}`;
      try {
        const docRef = doc(db, 'users', result.user.uid);
        const docSnap = await getDoc(docRef);
        
        if (!docSnap.exists()) {
          await setDoc(docRef, {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName || 'Hardware Specialist',
            role: UserRole.CONSUMER,
            createdAt: new Date().toISOString()
          });
        }
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, profilePath);
      }
    } catch (error: any) {
      setAuthError(error.message);
    }
  };

  const handleLogout = () => signOut(auth);

  if (loading) return <div className="flex min-h-[60vh] items-center justify-center bg-slate-50 text-slate-400">Initializing Secure Channel...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {!user ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white py-24 text-center shadow-sm">
            <div className="mb-6 rounded-full bg-brand-secondary/10 p-4 text-brand-secondary">
              <LogIn className="h-12 w-12" />
            </div>
            <h1 className="font-display text-4xl font-bold text-slate-900">SECURE PORTAL ACCESS</h1>
            <p className="mt-4 text-slate-500">Login to manage your enterprise orders and bulk RFQs.</p>
            {authError && <p className="mt-4 text-xs text-red-500">{authError}</p>}
            <button 
              onClick={handleLogin}
              className="mt-10 rounded-lg bg-brand-secondary px-12 py-4 font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-secondary/20"
            >
              Sign in with Google
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-brand-secondary ring-4 ring-brand-secondary/10">
                  <img src={user.photoURL || ''} alt="" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h1 className="font-display text-3xl font-bold text-slate-900">{user.displayName}</h1>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-brand-secondary px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                      {profile?.role || 'Guest'}
                    </span>
                    <span className="text-xs text-slate-500">{user.email}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="h-4 w-4" /> End Session
              </button>
            </header>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { label: 'Active Orders', icon: Package, value: '0' },
                { label: 'RFQ History', icon: Shield, value: '0' },
                { label: 'Credit Balance', icon: CreditCard, value: '₹0' },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <stat.icon className="h-5 w-5 text-brand-secondary" />
                    <span className="text-xs text-slate-400 uppercase">Stat</span>
                  </div>
                  <p className="font-display text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
                <Building2 className="h-6 w-6 text-brand-secondary" />
                <h2 className="font-display text-xl font-bold uppercase italic tracking-tighter text-slate-900">Business profile</h2>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company Name</label>
                  <p className="mt-1 font-medium text-slate-700">{profile?.companyName || 'Not configured'}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">GST Number</label>
                  <p className="mt-1 font-medium text-slate-700">{profile?.gstNumber || 'Not configured'}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Account Type</label>
                  <p className="mt-1 font-medium capitalize text-slate-700">{profile?.role || 'Personal'}</p>
                </div>
              </div>
              <button className="mt-10 rounded-lg border border-brand-secondary bg-brand-secondary/5 px-8 py-3 text-xs font-bold text-brand-secondary transition-colors hover:bg-brand-secondary hover:text-white">
                Upgrade to Business Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { getFirebaseStatus } from '../lib/firebase';
import { AlertTriangle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FirebaseStatusBanner() {
  const [isOffline, setIsOffline] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check status after a short delay to allow testConnection to run
    const timer = setTimeout(() => {
      if (!getFirebaseStatus()) {
        setIsOffline(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOffline || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-red-500 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <p className="text-sm font-medium">
                <span className="font-bold">Database Offline:</span> Could not reach the Cloud Firestore backend. Please check your project configuration or wait a moment.
              </p>
            </div>
            <button 
              onClick={() => setDismissed(true)}
              className="rounded-md p-1 hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

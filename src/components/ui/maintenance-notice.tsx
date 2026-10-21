'use client';

import { useState, useSyncExternalStore } from 'react';

import { buttonVariants } from './button';

const STORAGE_KEY = 'maintenance_notice_dismissed';

const subscribe = (callback: () => void) => {
   window.addEventListener('storage', callback);
   return () => window.removeEventListener('storage', callback);
};

export function MaintenanceNotice() {
   const [closed, setClosed] = useState(false);
   // Only show if not already dismissed; never render on the server
   const dismissed = useSyncExternalStore(
      subscribe,
      () => localStorage.getItem(STORAGE_KEY) !== null,
      () => true,
   );

   const handleClose = () => {
      setClosed(true);
      localStorage.setItem(STORAGE_KEY, '1');
   };

   if (dismissed || closed) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
         <div className="w-full max-w-sm border border-primary bg-bg-main p-8 text-center shadow-xl">
            <div className="mb-4 font-mono text-3xl font-bold text-primary">
               Maintenance Notice
            </div>
            <div className="mb-6 font-mono text-base text-gray-300">
               This site is currently under maintenance and active development.
               <br />
               Some features may not work as expected.
            </div>
            <button
               className={buttonVariants({
                  variant: 'outlineSecondary',
                  size: 'lg',
                  class: 'w-full',
               })}
               onClick={handleClose}
            >
               Continue to site
            </button>
         </div>
      </div>
   );
}

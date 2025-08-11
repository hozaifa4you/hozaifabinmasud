'use client';

import { useEffect, useState } from 'react';

import { buttonVariants } from './button';

export function MaintenanceNotice() {
   const [open, setOpen] = useState(false);

   useEffect(() => {
      // Only show if not already dismissed
      if (
         typeof window !== 'undefined' &&
         !localStorage.getItem('maintenance_notice_dismissed')
      ) {
         setOpen(true);
      }
   }, []);

   const handleClose = () => {
      setOpen(false);
      localStorage.setItem('maintenance_notice_dismissed', '1');
   };

   if (!open) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
         <div className="bg-bg-main border-primary w-full max-w-sm border p-8 text-center shadow-xl">
            <div className="text-primary mb-4 font-mono text-3xl font-bold">
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

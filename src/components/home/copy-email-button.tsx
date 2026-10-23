'use client';

import { useEffect, useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CopyEmailButton = ({
   email,
   label = email,
   className,
}: {
   email: string;
   /** Visible text before copying; the address itself by default */
   label?: string;
   className?: string;
}) => {
   const [copied, setCopied] = useState(false);

   useEffect(() => {
      if (!copied) return;
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
   }, [copied]);

   const copy = async () => {
      try {
         await navigator.clipboard.writeText(email);
         setCopied(true);
      } catch {
         // Clipboard blocked (insecure context or permissions): fall back to mail
         window.location.href = `mailto:${email}`;
      }
   };

   return (
      <button
         type="button"
         onClick={copy}
         aria-label={`Copy email address ${email}`}
         className={cn(
            buttonVariants({ variant: 'ghost', size: 'lg' }),
            'font-mono text-sm',
            className,
         )}
      >
         {copied ? (
            <LuCheck aria-hidden className="animate-acknowledge text-success" />
         ) : (
            <LuCopy aria-hidden />
         )}
         <span>{copied ? 'Copied' : label}</span>
         <span className="sr-only" aria-live="polite">
            {copied ? 'Email address copied' : ''}
         </span>
      </button>
   );
};

export { CopyEmailButton };

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';
import { LuArrowRight, LuCircleX } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import { displayPath, getQuickFixes, PageTarget } from '@/lib/nearest-page';
import { cn } from '@/lib/utils';

// Offered when nothing matches, in this order
const FALLBACKS = ['Workspace', 'projects/', 'contact'];

const subscribe = () => () => {};

/**
 * The broken path as one problem, and the nearest real pages as its fixes.
 * One prerendered 404 serves every missing path, so the path is read after
 * hydration. A dynamic root 404 is not an option: Next then sends an empty
 * error shell and renders it in the browser only.
 */
const ProblemsPanel = ({ targets }: { targets: PageTarget[] }) => {
   const pathname = usePathname();
   const hydrated = useSyncExternalStore(
      subscribe,
      () => true,
      () => false,
   );
   const path = hydrated && pathname ? displayPath(pathname) : null;
   const [best, ...others] = getQuickFixes(path, targets, FALLBACKS);
   // Only a real path is set as code; the fallback is words
   const pathText = (className: string) =>
      path ? (
         <code className={cn('font-mono wrap-anywhere', className)}>
            {path}
         </code>
      ) : (
         'this address'
      );

   return (
      <>
         <p className="mt-4 max-w-[60ch] text-lead text-pretty">
            Nothing lives at {pathText('text-strong')}.
         </p>

         <section
            aria-labelledby="problems-title"
            className="mt-8 border border-line bg-bg-sunken sm:mt-10"
         >
            <div className="flex h-10 border-b border-line">
               <h2
                  id="problems-title"
                  className="-mb-px flex items-center gap-2 border-r border-line bg-bg-main px-4 font-mono text-xs text-strong"
               >
                  problems
                  <span className="border border-danger/40 bg-danger/10 px-1.5 leading-5 text-danger">
                     <span className="sr-only">: </span>1
                  </span>
               </h2>
            </div>

            {/* The icon leads the sentence's first line however long the path */}
            <p className="grid grid-cols-[1rem_minmax(0,1fr)_auto] items-start gap-x-3 border-b border-line px-4 py-4 text-control text-strong sm:px-5">
               <LuCircleX aria-hidden className="mt-0.75 size-4 text-danger" />
               <span>Cannot resolve {pathText('text-sm')}</span>
               <span className="mt-px font-mono text-ui text-muted">404</span>
            </p>

            <p
               id="fixes-title"
               className="px-4 pt-4 pb-2 font-mono text-xs text-primary-soft sm:px-5"
            >
               quick fixes
            </p>
            <ul aria-labelledby="fixes-title">
               {/* The best fix: the one filled action on the page */}
               <li className="grid gap-x-5 gap-y-1 border-y border-l border-y-line border-l-primary bg-bg-raised px-4 py-4 sm:grid-cols-[10rem_minmax(0,1fr)_auto] sm:items-center sm:px-5">
                  <span className="font-mono text-sm wrap-anywhere text-strong">
                     {best.key}
                  </span>
                  <span className="text-control text-pretty text-strong">
                     {best.note}
                  </span>
                  <Link
                     href={best.href}
                     className={cn(
                        buttonVariants({ variant: 'primary', size: 'lg' }),
                        'group mt-3 justify-self-start sm:mt-0',
                     )}
                  >
                     {best.key === 'Workspace'
                        ? 'Back to the workspace'
                        : `Open ${best.key}`}
                     <LuArrowRight
                        aria-hidden
                        className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
                     />
                  </Link>
               </li>
               {others.map((fix) => (
                  <li
                     key={fix.key}
                     className="group relative grid grid-cols-[minmax(0,1fr)_1rem] items-center gap-x-5 gap-y-1 border-b border-l border-b-line border-l-transparent px-4 py-3.5 transition-colors duration-200 ease-out-expo last:border-b-0 hover:bg-bg-raised/50 sm:min-h-14 sm:grid-cols-[10rem_minmax(0,1fr)_1rem] sm:px-5 sm:py-0"
                  >
                     <Link
                        href={fix.href}
                        className="font-mono text-sm wrap-anywhere text-strong after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-primary"
                     >
                        {fix.key}
                     </Link>
                     <span className="col-start-1 text-control text-pretty sm:col-start-2 sm:row-start-1">
                        {fix.note}
                     </span>
                     <LuArrowRight
                        aria-hidden
                        className="col-start-2 row-span-2 row-start-1 size-4 text-muted transition duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:text-strong sm:col-start-3 sm:row-span-1"
                     />
                  </li>
               ))}
            </ul>
         </section>
      </>
   );
};

export { ProblemsPanel };

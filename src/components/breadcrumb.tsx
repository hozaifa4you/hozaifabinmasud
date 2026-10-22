import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type BreadcrumbItem = {
   title: string;
   href: string;
   /** View transition types for the navigation, e.g. ['nav-back'] */
   transitionTypes?: string[];
};

interface BreadcrumbProps {
   title?: string;
   subtitle?: string | ReactNode;
   items?: BreadcrumbItem[];
   size?: 'sm' | 'md' | 'lg';
}

/** The path back up the site; the last item is the current page. */
const BreadcrumbNav = ({
   items,
   className,
}: {
   items: BreadcrumbItem[];
   className?: string;
}) => (
   <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-y-1 font-mono text-sm text-muted">
         <li aria-hidden className="mr-2 text-primary">
            /
         </li>
         {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
               <li key={item.title} className="flex items-center">
                  {isCurrent ? (
                     <span
                        aria-current="page"
                        className="font-medium text-strong"
                     >
                        {item.title}
                     </span>
                  ) : (
                     <Link
                        href={item.href}
                        transitionTypes={item.transitionTypes}
                        className="transition-colors hover:text-strong"
                     >
                        {item.title}
                     </Link>
                  )}
                  {!isCurrent && (
                     <span aria-hidden className="mx-2 text-line-strong">
                        /
                     </span>
                  )}
               </li>
            );
         })}
      </ol>
   </nav>
);

const Breadcrumb = ({
   title,
   subtitle,
   items,
   size = 'lg',
}: BreadcrumbProps) => {
   return (
      <section className="container mt-8 lg:mt-12">
         <div className="mb-6 lg:mb-8">
            {/* Main breadcrumb navigation */}
            {items && items.length > 0 && (
               <BreadcrumbNav items={items} className="mb-4" />
            )}

            {/* Page title */}
            {title && (
               <h1
                  className={cn(
                     'font-mono leading-tight font-bold text-white',
                     {
                        'text-3xl lg:text-4xl xl:text-5xl': size === 'lg',
                        'text-2xl lg:text-3xl': size === 'md',
                        'text-xl lg:text-2xl': size === 'sm',
                     },
                  )}
               >
                  <span className="text-primary">#</span>
                  {title}
               </h1>
            )}

            {/* Subtitle */}
            {subtitle && (
               <div className="mt-4 max-w-3xl">
                  <p className="text-base leading-relaxed text-muted lg:text-lg">
                     {subtitle}
                  </p>
               </div>
            )}
         </div>
      </section>
   );
};

export { Breadcrumb, BreadcrumbNav };

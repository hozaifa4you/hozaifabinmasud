import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type BreadcrumbItem = {
   title: string;
   href: string;
};

interface BreadcrumbProps {
   title?: string;
   subtitle?: string | ReactNode;
   items?: BreadcrumbItem[];
   size?: 'sm' | 'md' | 'lg';
}

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
               <nav className="mb-4">
                  <div className="flex items-center space-x-2 font-mono text-sm text-muted">
                     {items.map((item, index) => (
                        <div key={index} className="flex items-center">
                           {index === 0 && (
                              <span className="mr-2 text-primary">/</span>
                           )}
                           <Link
                              href={item.href}
                              className={cn(
                                 index === items.length - 1
                                    ? 'font-medium text-white'
                                    : 'text-muted transition-colors hover:text-strong',
                              )}
                           >
                              {item.title}
                           </Link>
                           {index < items.length - 1 && (
                              <span className="mx-2 text-line-strong">/</span>
                           )}
                        </div>
                     ))}
                  </div>
               </nav>
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

export { Breadcrumb };

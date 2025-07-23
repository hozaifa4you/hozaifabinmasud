import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BreadcrumbProps {
   title: ReactNode;
   subtitle?: string | ReactNode;
   size?: 'sm' | 'md' | 'lg';
}

const Breadcrumb = ({ title, subtitle, size = 'lg' }: BreadcrumbProps) => {
   return (
      <section className="container my-6">
         <h1
            className={cn('font-semibold text-white', {
               'text-[26px] md:text-[28px] lg:text-[32px]': size === 'lg',
               'text-[26px]': size === 'md',
               'text-[20px]': size === 'sm',
            })}
         >
            <span className="text-primary">/</span>
            {title}
         </h1>
         {subtitle && <h2>{subtitle}</h2>}
      </section>
   );
};

export { Breadcrumb };

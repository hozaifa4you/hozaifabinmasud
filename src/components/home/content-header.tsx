import Link from 'next/link';

import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

interface ContentHeaderProps {
   maxLineWidth?: string;
   text: string;
   navigateUrl?: string;
   buttonText?: React.ReactNode;
   size?: 'sm' | 'lg' | 'md';
   count?: number;
}

const ContentHeader = ({
   text,
   maxLineWidth = 'max-w-[510px]',
   buttonText,
   navigateUrl,
   size = 'lg',
   count,
}: ContentHeaderProps) => {
   return (
      <div className="flex items-center gap-5">
         <div className="w-full">
            <div className="flex items-center gap-4">
               <h2
                  className={cn('font-semibold text-strong', {
                     'text-headline': size === 'lg',
                     'text-2xl': size === 'md',
                     'text-xl': size === 'sm',
                  })}
               >
                  <span className="text-primary">#</span>
                  {text}
                  {count && <sup className="text-primary">{count}+</sup>}
               </h2>
               <span
                  className={`bg-primary ${maxLineWidth} block h-px w-full`}
               ></span>
            </div>
         </div>

         {navigateUrl && (
            <div>
               <Link
                  className={buttonVariants({
                     variant: 'link',
                     size: 'default',
                  })}
                  href={navigateUrl}
               >
                  {buttonText}
               </Link>
            </div>
         )}
      </div>
   );
};

export { ContentHeader };

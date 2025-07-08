import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

interface ContentHeaderProps {
   maxLineWidth?: string;
   text: string;
   navigateUrl?: string;
   buttonText?: React.ReactNode;
   size?: 'sm' | 'lg' | 'md';
}

const ContentHeader = ({
   text,
   maxLineWidth = 'max-w-[510px]',
   buttonText,
   navigateUrl,
   size = 'lg',
}: ContentHeaderProps) => {
   return (
      <div className="flex">
         <div className="w-full">
            <div className="flex items-center gap-4">
               <h2
                  className={cn('font-medium', {
                     'text-[32px]': size === 'lg',
                     'text-[26px]': size === 'md',
                     'text-[20px]': size === 'sm',
                  })}
               >
                  <span className="text-primary">#</span>
                  {text}
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

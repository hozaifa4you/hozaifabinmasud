import Link from 'next/link';
import { buttonVariants } from '../ui/button';

interface ContentHeaderProps {
   maxLineWidth?: string;
   text: string;
   navigateUrl?: string;
   buttonText?: React.ReactNode;
}

const ContentHeader = ({
   text,
   maxLineWidth = 'max-w-[510px]',
   buttonText,
   navigateUrl,
}: ContentHeaderProps) => {
   return (
      <div className="flex">
         <div className="w-full">
            <div className="flex items-center gap-4">
               <h2 className="text-[32px] font-medium">
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
                  {buttonText} <span>~~{'>'}</span>
               </Link>
            </div>
         )}
      </div>
   );
};

export { ContentHeader };

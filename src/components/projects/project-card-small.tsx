import Link from 'next/link';

import { SmallProjectType } from '@/lib/data';

import { buttonVariants } from '../ui/button';

const ProjectCardSmall = ({
   link,
   shortDesc,
   slug,
   tags,
   title,
}: SmallProjectType) => {
   return (
      <div className="border-text w-full border">
         <div className="border-b-text border-b p-2">
            <span className="block max-w-full truncate text-sm">
               {tags.join(', ')}
            </span>
         </div>
         <div className="flex flex-wrap gap-0.5 p-4">
            <h4 className="mb-4 text-2xl font-medium">
               <Link
                  className="hover:text-primary text-white transition-all duration-200 ease-in-out"
                  href={`/projects/${slug}`}
               >
                  {title}
               </Link>
            </h4>

            <p className="mb-4">{shortDesc}</p>

            <Link
               className={buttonVariants({ variant: 'outline' })}
               href={link.url}
            >
               {link.title}
            </Link>
         </div>
      </div>
   );
};

export { ProjectCardSmall };

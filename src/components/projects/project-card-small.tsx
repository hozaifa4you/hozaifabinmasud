import Link from 'next/link';

import { buttonVariants } from '../ui/button';
import { SmallProjectType } from '@/lib/data/projects';

const ProjectCardSmall = ({
   link,
   shortDesc,
   slug,
   tags,
   title,
}: SmallProjectType) => {
   return (
      <div className="w-full border border-text">
         <div className="border-b border-b-text p-2">
            <span className="block max-w-full truncate text-sm">
               {tags.join(', ')}
            </span>
         </div>
         <div className="flex flex-wrap gap-0.5 p-4">
            <h4 className="mb-4 text-2xl font-medium">
               <Link
                  className="text-white transition-all duration-200 ease-in-out hover:text-primary"
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

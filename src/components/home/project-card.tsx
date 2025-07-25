import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { ProjectType } from '@/lib/mock-data';

const ProjectCard = ({
   image,
   shortDesc,
   slug,
   status,
   technologies,
   title,
}: ProjectType) => {
   return (
      <Link
         href={`/projects/${slug}`}
         className="border-text hover:border-primary group border transition-colors duration-200 ease-in-out"
      >
         <div>
            <Image
               src={image}
               alt={title}
               width={330}
               height={200}
               className="h-[200px] w-full object-cover object-center"
            />
         </div>
         <div>
            <div className="border-y-text border-y px-1 py-1.5">
               {technologies.join(', ')}
            </div>

            <div className="p-4">
               <h3 className="text-text-secondary text-2xl font-medium transition-all duration-200 ease-in-out group-hover:underline">
                  {title}
               </h3>
               <p className="py-4">{shortDesc}</p>

               <Link href={`/products/${slug}`}>
                  <Button variant="outline">
                     {status} {'<'}~{'>'}
                  </Button>
               </Link>
            </div>
         </div>
      </Link>
   );
};

export { ProjectCard };

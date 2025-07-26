import Link from 'next/link';

import { FaGithub } from 'react-icons/fa6';

import { ProjectType } from '@/lib/mock-data';

const ResumeProjectCard = ({
   technologies,
   title,
   website,
   slug,
   code,
}: ProjectType) => {
   return (
      <div className="border-text border">
         <div className="border-b-text flex items-center justify-between gap-5 border-b p-2 text-white">
            <h4 className="text-lg font-semibold transition-transform duration-150 ease-in-out hover:underline">
               <Link href={`/projects/${slug}`}>{title}</Link>
            </h4>
            <span>{website}</span>
         </div>
         <div className="border-b-text border-b p-2">
            {technologies.join(' ')}
         </div>

         <div className="p-2">
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Doloremque vero expedita maiores quae ipsum praesentium quidem
               dicta voluptatum placeat ratione?
            </p>

            <div className="mt-4">
               <Link href={code} className="flex items-center gap-1">
                  <FaGithub className="mr-1 inline" />
                  {code}
               </Link>
            </div>
         </div>
      </div>
   );
};

export { ResumeProjectCard };

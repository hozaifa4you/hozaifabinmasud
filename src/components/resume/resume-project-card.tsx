import Link from 'next/link';
import { FaCode, FaGithub } from 'react-icons/fa6';
import { GoArchive } from 'react-icons/go';
import { HiOutlineStatusOnline } from 'react-icons/hi';

import { ProjectType } from '@/lib/data/projects';

const ResumeProjectCard = ({
   technologies,
   title,
   website,
   slug,
   code,
   status,
   shortDesc,
}: ProjectType) => {
   return (
      <div className="border border-text">
         <div className="flex items-center justify-between gap-5 border-b border-b-text p-2 text-white">
            <h4 className="text-lg font-semibold transition-transform duration-150 ease-in-out hover:underline">
               <Link href={`/projects/${slug}`}>{title}</Link>
            </h4>
            <span>{website}</span>
         </div>
         <div className="border-b border-b-text p-2">
            {technologies.join(' ')}
         </div>

         <div className="p-2">
            <p>{shortDesc}</p>

            <div className="mt-4 flex items-center gap-4">
               {status === 'live' && (
                  <Link
                     href={`https://${website}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-1 capitalize"
                  >
                     <HiOutlineStatusOnline /> {status}
                  </Link>
               )}

               {status !== 'live' && (
                  <span className="flex items-center gap-1 capitalize">
                     {status === 'archive' && <GoArchive />}{' '}
                     {status === 'developing' && <FaCode />} {status}
                  </span>
               )}

               {code && (
                  <Link
                     href={`https://${code.host}.com/${code.repo}`}
                     className="flex items-center gap-1"
                  >
                     <FaGithub className="mr-1 inline" />
                     {code.repo}
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export { ResumeProjectCard };

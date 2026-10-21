import Link from 'next/link';
import { FaCode, FaGithub } from 'react-icons/fa6';
import { GoArchive } from 'react-icons/go';
import { HiOutlineStatusOnline } from 'react-icons/hi';

import { getProjectLink, ProjectType } from '@/lib/data/projects';
import { cn } from '@/lib/utils';

const ResumeProjectCard = ({
   technologies,
   title,
   website,
   slug,
   code,
   status,
   shortDesc,
}: ProjectType) => {
   const link = getProjectLink({ slug, status, website });

   return (
      <div className="border border-text">
         <div className="flex items-center justify-between gap-5 border-b border-b-text p-2 text-white">
            <h4
               className={cn(
                  'text-lg font-semibold transition-transform duration-150 ease-in-out',
                  link && 'hover:underline',
               )}
            >
               {link ? (
                  <Link
                     href={link.href}
                     target={link.external ? '_blank' : undefined}
                     rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                     {title}
                  </Link>
               ) : (
                  title
               )}
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

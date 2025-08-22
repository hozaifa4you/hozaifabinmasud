import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';
import { BiBuilding } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa6';
import { GoArchive } from 'react-icons/go';

import { Tooltip } from '../ui/tooltip';
import { Button, buttonVariants } from '@/components/ui/button';
import { ProjectType } from '@/lib/data/projects';

const ProjectCard = ({
   image,
   shortDesc,
   slug,
   status,
   technologies,
   title,
   website,
   code,
   owner,
}: ProjectType) => {
   return (
      <div className="border-text hover:border-primary group border transition-colors duration-200 ease-in-out">
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
                  <Link href={`/projects/${slug}`}>{title}</Link>
                  <AiOutlineLink className="inline size-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100" />
               </h3>
               <p className="py-4">{shortDesc}</p>

               {owner && (
                  <Tooltip content={`Under ${owner.type}`}>
                     <Link
                        href={owner.website ? `https://${owner.website}` : '#'}
                        className="mb-5 flex items-center gap-2.5 font-semibold text-white"
                     >
                        <BiBuilding /> {owner.name}
                     </Link>
                  </Tooltip>
               )}

               <div className="flex items-center gap-3">
                  {status === 'live' && (
                     <Link
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Button variant="outline" className="capitalize">
                           {status} {'<'}~{'>'}
                        </Button>
                     </Link>
                  )}

                  {status !== 'live' && (
                     <span
                        className={buttonVariants({
                           class: 'flex items-center gap-1 capitalize',
                        })}
                     >
                        {status === 'archive' && <GoArchive />}{' '}
                        {status === 'developing' && <FaCode />} {status}
                     </span>
                  )}

                  {code && (
                     <Link
                        href={`https://${code.host}.com/${code.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Button variant="outline" className="capitalize">
                           Code {'<'}~{'>'}
                        </Button>
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export { ProjectCard };

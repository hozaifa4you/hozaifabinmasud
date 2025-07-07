import { Breadcrumb } from '@/components/breadcrumb';
import { buttonVariants } from '@/components/ui/button';
import { projectDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import {
   FaExternalLinkAlt,
   FaRegCalendar,
   FaRegClock,
   FaUsersCog,
} from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';

const ProjectDetailsPage = () => {
   const project = projectDetails[0];

   return (
      <>
         <Breadcrumb title={project.title} subtitle="Project Details" />

         <section className="relative">
            <div className="container">
               <div className="border-text grid gap-4 border xl:grid-cols-8">
                  <div className="p-4 xl:col-span-6">
                     <Image
                        src={project.mainImage}
                        alt={project.title}
                        width={200}
                        height={200}
                        quality={100}
                        className="h-auto max-h-[380px] w-full object-cover object-center"
                     />

                     <div className="mt-4 flex items-center gap-5">
                        <div className="flex items-center gap-1.5">
                           <FaRegCalendar className="text-primary" />{' '}
                           <span>
                              <span className="text-primary">@</span>
                              {project.designation
                                 .toLowerCase()
                                 .replaceAll(' ', '_')}
                           </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                           <FaRegClock className="text-primary" />
                           <span>
                              <span className="text-primary">@</span>
                              {project.duration
                                 .toLowerCase()
                                 .replaceAll(' ', '_')}
                           </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                           <FaUsersCog className="text-primary" />
                           <span>
                              <span className="text-primary">@</span>
                              {project.teamMembers
                                 .toLowerCase()
                                 .replaceAll(' ', '_')}
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="xl:col-span-2">
                     <div className="space-y-4 p-4">
                        <Link
                           className={buttonVariants({
                              variant: 'outlineSecondary',
                              className: 'w-full',
                              size: 'lg',
                           })}
                           href={project.liveUrl}
                        >
                           <FaExternalLinkAlt className="size-4" /> Live Url
                        </Link>

                        <Link
                           className={buttonVariants({
                              variant: 'secondary',
                              className: 'w-full',
                              size: 'lg',
                           })}
                           href={project?.sourceCode ?? ''}
                        >
                           <LuGithub className="size-4" /> Source Code
                        </Link>
                     </div>
                  </div>
               </div>

               {/*  */}

               <div className="mt-4 grid gap-4 xl:grid-cols-3">
                  <div className="xl:col-span-2">
                     <div className="grid w-full gap-4">
                        <div className="border-text border p-4">
                           <p>
                              <strong>
                                 <span className="text-primary">@</span>Details:
                              </strong>{' '}
                              {project.description}
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="border-text border xl:col-span-1">
                     <div className="grid w-full gap-4">
                        <div className="border-text border p-4">
                           <h4>Project Details</h4>

                           <ul>
                              <li>
                                 <span>Role</span>
                                 <span>{project.designation}</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ProjectDetailsPage;

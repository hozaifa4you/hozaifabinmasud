import Image from 'next/image';
import Link from 'next/link';
import { LuGithub, LuLinkedin, LuMail, LuMapPin, LuSend } from 'react-icons/lu';
import { TbWorldWww } from 'react-icons/tb';

import { BoxWithTitle } from '@/components/box-with-title';
import { ResumeEducationCard } from '@/components/resume/resume-education-card';
import { ResumeProjectCard } from '@/components/resume/resume-project-card';
import { ResumeTrainingCard } from '@/components/resume/resume-training-card';
import { ResumeWorkCard } from '@/components/resume/resume-work-card';
import { buttonVariants } from '@/components/ui/button';
import { LogoSvg } from '@/components/ui/icons';
import { appConfig } from '@/config/app.config';
import { works } from '@/lib/data';
import { educationData, trainingData } from '@/lib/education-data';
import { projects } from '@/lib/mock-data';
import { calculateYearsFromDate } from '@/lib/utils';

const basicInfo = [
   {
      Icon: LuGithub,
      label: appConfig.GITHUB_USERNAME,
      url: `https://github.com/${appConfig.GITHUB_USERNAME}`,
   },
   {
      Icon: LuMapPin,
      label: appConfig.ADDRESS,
   },
   {
      Icon: LuMail,
      label: appConfig.EMAIL,
      url: `mailto:${appConfig.EMAIL}`,
   },
   {
      Icon: LuLinkedin,
      label: appConfig.LINKEDIN_USERNAME,
      url: `https://linkeding/in/${appConfig.LINKEDIN_USERNAME}`,
   },
   {
      Icon: LuSend,
      label: appConfig.PHONE,
      url: `tell:${appConfig.PHONE}`,
   },
   {
      Icon: TbWorldWww,
      label: appConfig.WEBSITE,
      url: `https://${appConfig.WEBSITE}`,
   },
];

const ResumePage = () => {
   return (
      <main>
         <div className="container max-w-[1000px] p-10">
            {/* header */}
            <div className="mb-10 grid gap-5 md:grid-cols-2">
               <div>
                  <h1 className="text-text-secondary flex items-center gap-1 text-[26px] font-semibold">
                     <Image
                        src="/assets/logo.svg"
                        alt={appConfig.APP_NAME}
                        width={26}
                        height={26}
                        className="mr-4 size-[26px] object-contain"
                     />
                     <span>{appConfig.AUTHOR}</span>
                  </h1>

                  <p className="text-primary mt-2.5 text-base font-medium">
                     {appConfig.DESIGNATION}
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                     <Link
                        href="/download-cv"
                        className={buttonVariants({
                           variant: 'outlineSecondary',
                        })}
                        download
                     >
                        Download CV
                     </Link>
                     <Link
                        href="/customize-cv-download"
                        className={buttonVariants({
                           variant: 'default',
                        })}
                        download
                     >
                        Customize CV
                     </Link>
                  </div>
               </div>
               <div>
                  <div className="flex flex-wrap items-center justify-end gap-2.5">
                     {basicInfo.map((info) => (
                        <Link
                           key={info.label}
                           href={info.url ?? '#'}
                           className="border-text text-text hover:border-primary hover:text-primary flex items-center gap-1.5 border px-1.5 py-1 transition-colors duration-150 ease-in-out"
                           target="_blank"
                           referrerPolicy="no-referrer"
                        >
                           <info.Icon className="size-3.5" /> {info.label}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>

            {/* summary */}
            <BoxWithTitle
               title={
                  <h4 className="text-text-secondary text-base font-medium">
                     Summary
                  </h4>
               }
               content={
                  <p>
                     Self-motivated and highly reliable front-end developer.
                     With experience in project development, and great
                     communication skills
                  </p>
               }
            />

            <div className="mt-4 grid gap-4 md:grid-cols-3">
               <div className="space-y-4 md:col-span-2">
                  <div className="border-text flex items-center justify-between border p-2">
                     <h3
                        className="font-semibold text-white"
                        title="3.9 years experiences"
                     >
                        Works
                     </h3>
                     <Link href="/works" className="text-primary font-medium">
                        {calculateYearsFromDate('01/8/2021')} years -{'>'}
                     </Link>
                  </div>

                  <div className="relative w-full space-y-4">
                     {works.map((work) => (
                        <ResumeWorkCard key={work.id} {...work} />
                     ))}

                     <div className="bg-text absolute inset-y-0 left-12 -z-10 w-px"></div>
                  </div>

                  <div className="border-text flex items-center justify-between border p-2">
                     <h3
                        className="font-semibold text-white"
                        title="3.9 years experiences"
                     >
                        Projects
                     </h3>
                     <Link
                        href="/projects"
                        className="text-primary font-medium"
                     >
                        23+ projects -{'>'}
                     </Link>
                  </div>

                  <div className="space-y-4">
                     {projects.slice(0, 2).map((project) => (
                        <ResumeProjectCard key={project.id} {...project} />
                     ))}
                  </div>
               </div>

               <div className="md:col-span-1">
                  <div className="w-full space-y-4">
                     <BoxWithTitle
                        title={
                           <h4 className="text-text-secondary text-base font-medium">
                              Languages
                           </h4>
                        }
                        content={
                           <ul className="space-y-2.5">
                              <li className="flex items-center justify-between gap-2.5">
                                 <span className="font-medium">Bangla</span>
                                 <span className="text-primary">Native</span>
                              </li>
                              <li className="flex items-center justify-between gap-2.5">
                                 <span className="font-medium">English</span>
                                 <span className="text-primary">
                                    Conversational
                                 </span>
                              </li>
                              <li className="flex items-center justify-between gap-2.5">
                                 <span className="font-medium">Hindi</span>
                                 <span className="text-primary">
                                    Conversational
                                 </span>
                              </li>
                              <li className="flex items-center justify-between gap-2.5">
                                 <span className="font-medium">Chinese</span>
                                 <span className="text-primary">Seeking</span>
                              </li>
                           </ul>
                        }
                     />

                     <BoxWithTitle
                        title={
                           <h4 className="text-text-secondary text-base font-medium">
                              Programmings
                           </h4>
                        }
                        content={
                           <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                              <span>JavaScript</span>
                              <span>TypeScript</span>
                              <span>PHP</span>
                              <span>Go Lang</span>
                              <span>MQL4/MQL5</span>
                              <span>C/C++</span>
                              <span>Embedding System</span>
                           </div>
                        }
                     />

                     <BoxWithTitle
                        title={
                           <h4 className="text-text-secondary text-base font-medium">
                              Skills
                           </h4>
                        }
                        content={
                           <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                              <span>NodeJs</span>
                              <span>ExpressJs</span>
                              <span>ReactJs</span>
                              <span>NextJs</span>
                              <span>Laravel</span>
                              <span>MongoDB</span>
                              <span>MySQL</span>
                              <span>PostgreSQL</span>
                              <span>Redis</span>
                              <span>Socket.io</span>
                           </div>
                        }
                     />

                     <BoxWithTitle
                        title={
                           <h4 className="text-text-secondary text-base font-medium">
                              Tools
                           </h4>
                        }
                        content={
                           <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                              <span>Git/GitHub</span>
                              <span>DevOps</span>
                              <span>Embedding System</span>
                           </div>
                        }
                     />

                     <div className="mt-14 flex h-full w-full items-center justify-center">
                        <LogoSvg />
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
               <div className="space-y-4">
                  <div className="border-text mt-4 flex items-center justify-between border p-2">
                     <h3
                        className="font-semibold text-white"
                        title="3.9 years experiences"
                     >
                        Academic
                     </h3>
                     <Link href="/works" className="text-primary font-medium">
                        9+ educations -{'>'}
                     </Link>
                  </div>
                  {educationData.splice(0, 2).map((edu, index) => (
                     <ResumeEducationCard
                        key={index}
                        degree={edu.degree}
                        description={edu.description}
                        duration={edu.duration}
                        grade={edu.grade}
                        institution={edu.institution}
                     />
                  ))}
               </div>
               <div className="space-y-4">
                  <div className="border-text mt-4 flex items-center justify-between border p-2">
                     <h3
                        className="font-semibold text-white"
                        title="3.9 years experiences"
                     >
                        Trainings
                     </h3>
                     <Link href="/works" className="text-primary font-medium">
                        15+ trainings -{'>'}
                     </Link>
                  </div>
                  {trainingData.slice(0, 2).map((training, index) => (
                     <ResumeTrainingCard
                        key={index}
                        completedDate={training.completedDate}
                        duration={training.duration}
                        platform={training.platform}
                        provider={training.provider}
                        skills={training.skills}
                        title={training.title}
                     />
                  ))}
               </div>
            </div>
         </div>
      </main>
   );
};

export default ResumePage;

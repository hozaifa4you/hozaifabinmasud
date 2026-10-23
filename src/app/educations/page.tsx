import { Metadata } from 'next';

import { BreadcrumbNav } from '@/components/breadcrumb';
import { DirectionalPage } from '@/components/directional-page';
import { DemoMark } from '@/components/education/demo-mark';
import {
   CommitDate,
   CommitRow,
   CommitRows,
   CommitTitle,
   EmptyLog,
   InlineList,
   InProgressPill,
   LogCommit,
} from '@/components/education/learning-log';
import { LearningTabs } from '@/components/education/learning-tabs';
import { HiringClose } from '@/components/projects/hiring-close';
import { getEducation, hasEducationContent } from '@/lib/data/education';
import { qualificationOf, yearsOf } from '@/lib/education-view';
import { cn } from '@/lib/utils';

export const generateMetadata = (): Metadata => ({
   title: 'Education',
   description:
      "Hozaifa's education, newest first: each qualification with its institution, result and details.",
   alternates: { canonical: '/educations' },
   ...(getEducation().length === 0 && { robots: { index: false } }),
});

const EducationsPage = () => {
   const education = getEducation();

   return (
      <DirectionalPage>
         <article className="container pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28">
            <header>
               <BreadcrumbNav
                  items={[
                     {
                        href: hasEducationContent() ? '/#education' : '/',
                        title: 'Workspace',
                        transitionTypes: ['nav-back'],
                     },
                     { href: '/educations', title: 'education' },
                  ]}
               />
               <h1 className="mt-5 text-display font-semibold text-strong sm:mt-6">
                  Education
               </h1>
               <p className="mt-4 max-w-[60ch] text-lead text-pretty">
                  Every qualification, newest first, with its institution,
                  result and details.
               </p>
               <LearningTabs current="education" />
            </header>

            {education.length > 0 ? (
               <ol
                  aria-label="Qualifications, newest first"
                  className="mt-10 lg:mt-14"
               >
                  {education.map((entry) => (
                     <LogCommit
                        key={`${entry.degree}-${entry.start}`}
                        inProgress={entry.ongoing}
                     >
                        <CommitDate>
                           <span>{yearsOf(entry)}</span>
                           {entry.ongoing && <InProgressPill />}
                           {entry.demo && <DemoMark />}
                        </CommitDate>
                        <CommitTitle>
                           {qualificationOf(entry)}{' '}
                           {/* A short name stays whole; a full name may wrap */}
                           <span
                              className={cn(
                                 'font-normal text-muted',
                                 entry.institutionShort && 'whitespace-nowrap',
                              )}
                           >
                              at{' '}
                              {entry.institutionShort ?? entry.institution}
                           </span>
                        </CommitTitle>
                        <CommitRows>
                           <CommitRow term="where">
                              {entry.institution}, {entry.city}
                              {entry.awardedBy && (
                                 <span className="mt-0.5 block text-control text-muted">
                                    {entry.awardedBy}
                                 </span>
                              )}
                           </CommitRow>
                           {entry.result && (
                              <CommitRow term="result">
                                 <span className="font-mono text-sm">
                                    {entry.result}
                                 </span>
                              </CommitRow>
                           )}
                           {entry.courses?.length ? (
                              <CommitRow term="courses">
                                 <InlineList items={entry.courses} />
                              </CommitRow>
                           ) : null}
                           {entry.projects?.length ? (
                              <CommitRow term="projects">
                                 <ul className="space-y-1">
                                    {entry.projects.map((project) => (
                                       <li key={project}>{project}</li>
                                    ))}
                                 </ul>
                              </CommitRow>
                           ) : null}
                           {entry.achievements?.length ? (
                              <CommitRow term="achievements">
                                 <ul className="space-y-1">
                                    {entry.achievements.map((achievement) => (
                                       <li key={achievement}>{achievement}</li>
                                    ))}
                                 </ul>
                              </CommitRow>
                           ) : null}
                        </CommitRows>
                     </LogCommit>
                  ))}
               </ol>
            ) : (
               <EmptyLog>Education details are being added.</EmptyLog>
            )}

            <HiringClose line="I build web products end to end, from the API to the interface." />
         </article>
      </DirectionalPage>
   );
};

export default EducationsPage;

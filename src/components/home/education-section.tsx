import Link from 'next/link';
import { LuArrowRight, LuArrowUpRight } from 'react-icons/lu';

import { DemoMark } from '@/components/education/demo-mark';
import { SectionHeading } from '@/components/home/section-heading';
import { getEducation, getTrainings } from '@/lib/data/education';
import { completedOf, qualificationOf, yearsOf } from '@/lib/education-view';

// The homepage shows the latest few; /trainings lists them all
const TRAINING_LIMIT = 4;

const InProgress = () => (
   <span className="inline-flex items-center gap-1.5 text-warning">
      <span aria-hidden className="size-1.5 rounded-full bg-warning" />
      in progress
   </span>
);

const EducationSection = () => {
   const education = getEducation();
   const trainings = getTrainings();
   // Hidden until there is something real to show
   if (education.length === 0 && trainings.length === 0) return null;

   return (
      <section
         id="education"
         aria-labelledby="education-title"
         className="container py-14 lg:py-20"
      >
         <SectionHeading
            id="education-title"
            file="education.md"
            title="Education & training"
            link={{ href: '/educations', label: 'Full details' }}
         />

         <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {education.length > 0 && (
               <div>
                  <h3 className="font-mono text-sm text-primary-soft">
                     education
                  </h3>
                  <ol className="mt-3 border-t border-line">
                     {education.map((entry) => (
                        <li
                           key={`${entry.degree}-${entry.start}`}
                           className="border-b border-line py-5"
                        >
                           <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-ui text-muted">
                              <span>{yearsOf(entry)}</span>
                              {entry.ongoing && <InProgress />}
                              {entry.demo && <DemoMark />}
                           </p>
                           <h4 className="mt-2 text-xl leading-snug font-semibold text-balance text-strong">
                              {qualificationOf(entry)}
                           </h4>
                           <p className="mt-1 text-control text-pretty">
                              {entry.institution}, {entry.city}
                           </p>
                           {entry.awardedBy && (
                              <p className="mt-0.5 text-control text-pretty text-muted">
                                 {entry.awardedBy}
                              </p>
                           )}
                           {entry.result && (
                              <p className="mt-2 font-mono text-ui text-strong">
                                 {entry.result}
                              </p>
                           )}
                        </li>
                     ))}
                  </ol>
               </div>
            )}

            {trainings.length > 0 && (
               <div>
                  <h3 className="font-mono text-sm text-primary-soft">
                     training
                  </h3>
                  <ol className="mt-3 border-t border-line">
                     {trainings.slice(0, TRAINING_LIMIT).map((training) => {
                        const completed = completedOf(training);
                        return (
                           <li
                              key={training.title}
                              className="border-b border-line py-5"
                           >
                              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-ui text-muted">
                                 {completed ? (
                                    <span>
                                       completed{' '}
                                       <time dateTime={training.completed}>
                                          {completed}
                                       </time>
                                    </span>
                                 ) : (
                                    <InProgress />
                                 )}
                                 {training.demo && <DemoMark />}
                              </p>
                              <h4 className="mt-2 text-xl leading-snug font-semibold text-balance text-strong">
                                 {training.title}
                              </h4>
                              <p className="mt-1 text-control">
                                 {training.provider} · {training.platform}
                              </p>
                              <p className="mt-2 font-mono text-ui text-muted">
                                 <span className="sr-only">Skills: </span>
                                 {training.skills.join(' · ')}
                              </p>
                              {/* A demo link would verify nothing */}
                              {training.certificateUrl && !training.demo && (
                                 <a
                                    href={training.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-strong underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info"
                                 >
                                    Verify certificate
                                    <LuArrowUpRight
                                       aria-hidden
                                       className="size-4 text-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                    <span className="sr-only">
                                       (opens in a new tab)
                                    </span>
                                 </a>
                              )}
                           </li>
                        );
                     })}
                  </ol>
                  <Link
                     href="/trainings"
                     className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors duration-200 hover:text-strong"
                  >
                     {trainings.length > TRAINING_LIMIT
                        ? `All ${trainings.length} trainings`
                        : 'All trainings'}
                     <LuArrowRight
                        aria-hidden
                        className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
                     />
                  </Link>
               </div>
            )}
         </div>
      </section>
   );
};

export { EducationSection };

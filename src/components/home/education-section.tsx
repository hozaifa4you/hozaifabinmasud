import Link from 'next/link';
import { LuArrowRight, LuArrowUpRight } from 'react-icons/lu';

import { DemoMark } from '@/components/education/demo-mark';
import { InlineList } from '@/components/education/learning-log';
import { SectionHeading } from '@/components/home/section-heading';
import {
   getEducation,
   getLearningHref,
   getTrainings,
} from '@/lib/data/education';
import {
   byOf,
   completedOf,
   qualificationOf,
   yearsOf,
} from '@/lib/education-view';
import { cn } from '@/lib/utils';

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
   const href = getLearningHref();
   if (!href) return null;
   // The title names only what is published
   const title =
      education.length > 0 && trainings.length > 0
         ? 'Education & training'
         : education.length > 0
           ? 'Education'
           : 'Training';
   // One list alone spans the section and needs no key under the title
   const alone = education.length === 0 || trainings.length === 0;

   return (
      <section
         id="education"
         aria-labelledby="education-title"
         className="depth-in container py-14 lg:py-20"
      >
         <SectionHeading
            id="education-title"
            file="education.md"
            title={title}
            link={{ href, label: 'Full details' }}
         />

         <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {education.length > 0 && (
               <div className={cn(alone && 'lg:col-span-2')}>
                  <h3
                     className={cn(
                        'font-mono text-sm text-primary-soft',
                        alone && 'sr-only',
                     )}
                  >
                     education
                  </h3>
                  <ol
                     className={cn(
                        'border-t border-line',
                        alone ? 'lg:grid lg:grid-cols-2 lg:gap-x-16' : 'mt-3',
                     )}
                  >
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
               <div className={cn(alone && 'lg:col-span-2')}>
                  <h3
                     className={cn(
                        'font-mono text-sm text-primary-soft',
                        alone && 'sr-only',
                     )}
                  >
                     training
                  </h3>
                  <ol
                     className={cn(
                        'border-t border-line',
                        alone ? 'lg:grid lg:grid-cols-2 lg:gap-x-16' : 'mt-3',
                     )}
                  >
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
                                 {byOf(training)}
                              </p>
                              {training.skills?.length ? (
                                 <div className="mt-2 font-mono text-ui text-muted">
                                    <span className="sr-only">Skills: </span>
                                    <InlineList items={training.skills} />
                                 </div>
                              ) : null}
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
                  {/* With training alone, the heading's link already leads there */}
                  {href !== '/trainings' && (
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
                  )}
               </div>
            )}
         </div>
      </section>
   );
};

export { EducationSection };

import { LuArrowUpRight } from 'react-icons/lu';

import { SectionHeading } from '@/components/home/section-heading';
import { getSkillName, getWorkHistory } from '@/lib/profile';
import { cn } from '@/lib/utils';

const WorkLog = () => {
   const history = getWorkHistory();

   return (
      <section
         id="work"
         aria-labelledby="work-title"
         className="depth-in container py-14 lg:py-20"
      >
         <SectionHeading
            id="work-title"
            file="work.log"
            title="Experience"
            link={{ href: '/works', label: 'Full history' }}
         />

         {/* A git log: newest commit on top, the current role is HEAD */}
         <ol className="mt-10 max-w-3xl">
            {history.map((work) => (
               <li
                  key={work.id}
                  className="group relative grid grid-cols-[20px_minmax(0,1fr)] gap-x-5 pb-12 last:pb-0 sm:gap-x-7"
               >
                  {/* Rail and commit node */}
                  <span
                     aria-hidden
                     className="absolute top-3 bottom-0 left-[9.5px] w-px bg-line group-last:hidden"
                  />
                  <span
                     aria-hidden
                     className={cn(
                        'relative mt-1.5 size-5 rounded-full border-[5px] border-bg-main',
                        work.isCurrent
                           ? 'bg-success ring-1 ring-success/50'
                           : 'bg-line-strong ring-1 ring-line',
                     )}
                  />

                  <div className="min-w-0">
                     <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted">
                        <span>
                           <time dateTime={work.startIso}>
                              {work.startLabel}
                           </time>
                           {' – '}
                           {work.endIso ? (
                              <time dateTime={work.endIso}>
                                 {work.endLabel}
                              </time>
                           ) : (
                              work.endLabel
                           )}
                        </span>
                        <span aria-hidden>·</span>
                        <span>{work.span}</span>
                        {work.isCurrent && (
                           <span className="border border-success/40 bg-success/10 px-1.5 text-xs leading-5 text-success">
                              HEAD
                           </span>
                        )}
                     </p>

                     <h3 className="mt-2 text-xl leading-snug font-semibold text-strong sm:text-2xl">
                        {work.title}
                        <span className="font-normal text-muted"> at </span>
                        <a
                           href={`https://${work.website}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group inline-flex items-center gap-1 underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info"
                        >
                           {work.company}
                           <LuArrowUpRight
                              aria-hidden
                              className="size-4 text-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                           />
                           <span className="sr-only">(opens in a new tab)</span>
                        </a>
                     </h3>
                     <p className="mt-1 text-sm text-muted">{work.type}</p>

                     <p className="mt-4 max-w-[65ch] leading-relaxed text-pretty">
                        {work.responsibilities}
                     </p>

                     <ul
                        aria-label="Technologies used"
                        className="mt-4 flex flex-wrap gap-2"
                     >
                        {work.skills.map((skill) => (
                           <li
                              key={skill}
                              className="border border-line bg-bg-raised px-2 py-0.5 font-mono text-xs text-text"
                           >
                              {getSkillName(skill)}
                           </li>
                        ))}
                     </ul>
                  </div>
               </li>
            ))}
         </ol>
      </section>
   );
};

export { WorkLog };

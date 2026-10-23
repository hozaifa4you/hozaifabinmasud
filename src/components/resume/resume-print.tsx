import { ReactNode } from 'react';

export type ResumeData = {
   name: string;
   label: string;
   summary: string;
   availability: string;
   contact: string[];
   work: {
      position: string;
      company: string;
      dates: string;
      summary: string;
      built: string[];
      stack: string[];
   }[];
   education: {
      qualification: string;
      institution: string;
      dates: string;
      result: string | null;
      demo: boolean;
   }[];
   trainings: {
      title: string;
      by: string;
      date: string;
      url: string | null;
      demo: boolean;
   }[];
   projects: {
      name: string;
      description: string;
      url: string | null;
      stack: string[];
   }[];
   skills: { name: string; items: string[] }[];
   languages: { language: string; fluency: string }[];
};

const Section = ({
   title,
   children,
}: {
   title: string;
   children: ReactNode;
}) => (
   <section className="mt-5">
      <h2 className="break-after-avoid border-b border-black/30 pb-1 text-sm font-semibold tracking-wide uppercase">
         {title}
      </h2>
      <div className="mt-2 space-y-3">{children}</div>
   </section>
);

/**
 * The same resume as a conventional CV, black on white. Hidden on screen and
 * shown only in print, so Print / Save as PDF gives a plain A4 page.
 */
const ResumePrint = ({ data }: { data: ResumeData }) => (
   <div className="hidden text-sm leading-relaxed text-black print:block">
      <h1 className="text-2xl font-semibold">{data.name}</h1>
      <p className="mt-0.5">
         {data.label} · {data.availability}
      </p>
      <p className="mt-1 text-xs">{data.contact.join(' · ')}</p>
      <p className="mt-3">{data.summary}</p>

      <Section title="Experience">
         {data.work.map((work) => (
            <div
               key={work.company + work.position}
               className="break-inside-avoid"
            >
               <p className="flex justify-between gap-4">
                  <span className="font-semibold">
                     {work.position}, {work.company}
                  </span>
                  <span className="shrink-0">{work.dates}</span>
               </p>
               <p>{work.summary}</p>
               {work.built.length > 0 && (
                  <p className="text-xs">Built: {work.built.join(', ')}</p>
               )}
               <p className="text-xs">Stack: {work.stack.join(', ')}</p>
            </div>
         ))}
      </Section>

      {/* Sample entries only print off production, and say so */}
      {data.education.length > 0 && (
         <Section title="Education">
            {data.education.map((entry) => (
               <div
                  key={entry.qualification + entry.dates}
                  className="break-inside-avoid"
               >
                  <p className="flex justify-between gap-4">
                     <span>
                        <span className="font-semibold">
                           {entry.qualification}
                        </span>
                        {entry.demo && ' (demo)'}
                     </span>
                     <span className="shrink-0">{entry.dates}</span>
                  </p>
                  <p>{entry.institution}</p>
                  {entry.result && (
                     <p className="text-xs">Result: {entry.result}</p>
                  )}
               </div>
            ))}
         </Section>
      )}

      {data.trainings.length > 0 && (
         <Section title="Training">
            {data.trainings.map((training) => (
               <div
                  key={training.title + training.date}
                  className="break-inside-avoid"
               >
                  <p className="flex justify-between gap-4">
                     <span>
                        <span className="font-semibold">{training.title}</span>,{' '}
                        {training.by}
                        {training.demo && ' (demo)'}
                     </span>
                     <span className="shrink-0">{training.date}</span>
                  </p>
                  {training.url && (
                     <p className="text-xs">Verify: {training.url}</p>
                  )}
               </div>
            ))}
         </Section>
      )}

      <Section title="Selected projects">
         {data.projects.map((project) => (
            <div key={project.name} className="break-inside-avoid">
               <p>
                  <span className="font-semibold">{project.name}</span>
                  {project.url && (
                     <span className="text-xs"> · {project.url}</span>
                  )}
               </p>
               <p>{project.description}</p>
               <p className="text-xs">{project.stack.join(', ')}</p>
            </div>
         ))}
      </Section>

      <Section title="Skills">
         <dl className="grid grid-cols-[11rem_1fr] gap-x-3 gap-y-1">
            {data.skills.map((group) => (
               <div key={group.name} className="contents break-inside-avoid">
                  <dt className="font-semibold">{group.name}</dt>
                  <dd>{group.items.join(', ')}</dd>
               </div>
            ))}
         </dl>
      </Section>

      <Section title="Languages">
         <p>
            {data.languages
               .map(({ language, fluency }) => `${language} (${fluency})`)
               .join(', ')}
         </p>
      </Section>
   </div>
);

export { ResumePrint };

import { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { LuArrowUpRight, LuDownload } from 'react-icons/lu';

import { BreadcrumbNav } from '@/components/breadcrumb';
import { DirectionalPage } from '@/components/directional-page';
import { HiringClose } from '@/components/projects/hiring-close';
import { PrintButton } from '@/components/resume/print-button';
import { ResumeData, ResumePrint } from '@/components/resume/resume-print';
import { buttonVariants } from '@/components/ui/button';
import { appConfig } from '@/config/app.config';
import { ABOUT_INTRO } from '@/lib/data/about';
import { languages } from '@/lib/data/languages';
import { projects } from '@/lib/data/projects';
import { skillGroups } from '@/lib/data/skills';
import { getSocialLinks, RESUME_PDF } from '@/lib/links';
import { getSkillName, getWorkHistory } from '@/lib/profile';
import { getProjectsBuiltAt, toProjectView } from '@/lib/project-view';

export const metadata: Metadata = {
   title: 'Resume',
   description:
      "Hozaifa's resume: experience, selected projects, skills and languages, with a PDF and a print-ready page.",
};

// Role lengths are computed from dates; refresh daily
export const revalidate = 86400;

const AVAILABILITY = 'Open to full-time roles';

const linkClass =
   'underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info';

/** An appendix section: a headline on a hairline rule, then its entries */
const Appendix = ({
   id,
   title,
   children,
}: {
   id: string;
   title: string;
   children: ReactNode;
}) => (
   <section aria-labelledby={id}>
      <h2
         id={id}
         className="border-b border-line pb-3 text-headline font-semibold text-strong"
      >
         {title}
      </h2>
      <div className="mt-6">{children}</div>
   </section>
);

const ResumePage = () => {
   const history = getWorkHistory();
   const socials = getSocialLinks();
   // Live projects make the selection; the directory holds the rest
   const selected = projects
      .filter((project) => project.status === 'live')
      .map(toProjectView);
   const website = `https://${appConfig.WEBSITE}`;

   const contact: { key: string; value: ReactNode }[] = [
      {
         key: 'status',
         value: (
            <span className="inline-flex items-center gap-2 text-success">
               <span aria-hidden className="size-2 rounded-full bg-success" />
               {AVAILABILITY}
            </span>
         ),
      },
      {
         key: 'email',
         value: (
            <a href={`mailto:${appConfig.EMAIL}`} className={linkClass}>
               {appConfig.EMAIL}
            </a>
         ),
      },
      {
         key: 'phone',
         value: (
            <a href={`tel:${appConfig.PHONE}`} className={linkClass}>
               {appConfig.PHONE}
            </a>
         ),
      },
      {
         key: 'website',
         value: (
            <a
               href={website}
               target="_blank"
               rel="noopener noreferrer"
               className={linkClass}
            >
               {appConfig.WEBSITE}
               <span className="sr-only"> (opens in a new tab)</span>
            </a>
         ),
      },
      ...socials.map((social) => ({
         key: social.name.toLowerCase(),
         value: (
            <a
               href={social.href}
               target="_blank"
               rel="noopener noreferrer"
               className={linkClass}
            >
               {social.handle}
               <span className="sr-only"> (opens in a new tab)</span>
            </a>
         ),
      })),
      { key: 'based', value: `${appConfig.ADDRESS} · GMT+6` },
   ];

   const printData: ResumeData = {
      name: appConfig.AUTHOR,
      label: appConfig.DESIGNATION,
      summary: ABOUT_INTRO,
      availability: AVAILABILITY,
      contact: [
         appConfig.EMAIL,
         appConfig.PHONE,
         appConfig.WEBSITE,
         ...socials.map((social) =>
            social.href.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, ''),
         ),
         appConfig.ADDRESS,
      ],
      work: history.map((work) => ({
         position: work.title,
         company: work.company,
         dates: `${work.startLabel} – ${work.endLabel} (${work.span})`,
         summary: work.responsibilities,
         built: getProjectsBuiltAt(work.company).map(
            (project) => project.title,
         ),
         stack: work.skills.map(getSkillName),
      })),
      projects: selected.map((project) => ({
         name: project.title,
         description: project.description,
         url: project.liveUrl?.replace(/^https:\/\//, '') ?? null,
         stack: project.technologies,
      })),
      skills: skillGroups.map((group) => ({
         name: group.label,
         items: group.items,
      })),
      languages,
   };

   return (
      <DirectionalPage>
         <article className="container pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28 print:max-w-none print:p-0">
            <div className="print:hidden">
               <BreadcrumbNav
                  items={[
                     {
                        href: '/',
                        title: 'Workspace',
                        transitionTypes: ['nav-back'],
                     },
                     { href: '/resume', title: 'resume' },
                  ]}
               />

               {/* The card: who he is and every way to act, in one pane */}
               <section
                  aria-labelledby="resume-name"
                  className="mt-6 grid border border-line bg-bg-sunken sm:mt-8 lg:grid-cols-[minmax(0,1fr)_23rem]"
               >
                  <div className="p-6 sm:p-8 lg:border-r lg:border-line">
                     <h1
                        id="resume-name"
                        className="text-display font-semibold text-balance text-strong"
                     >
                        {appConfig.AUTHOR}
                     </h1>
                     <p className="mt-2 text-lead">{appConfig.DESIGNATION}</p>
                     <p className="mt-5 max-w-[60ch] text-body text-pretty text-strong">
                        {ABOUT_INTRO}
                     </p>
                     <div className="mt-6 flex flex-wrap gap-3">
                        <a
                           href={RESUME_PDF}
                           download
                           className={buttonVariants({
                              variant: 'primary',
                              size: 'lg',
                           })}
                        >
                           <LuDownload aria-hidden />
                           Resume.pdf
                        </a>
                        <PrintButton />
                     </div>
                  </div>
                  <dl className="border-t border-line lg:border-t-0">
                     {contact.map((row) => (
                        <div
                           key={row.key}
                           className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-x-4 border-b border-line px-6 py-3.5 last:border-b-0 sm:px-8"
                        >
                           <dt className="font-mono text-xs text-primary-soft">
                              {row.key}
                           </dt>
                           <dd className="text-control wrap-break-word text-strong">
                              {row.value}
                           </dd>
                        </div>
                     ))}
                  </dl>
               </section>

               {/* The appendix: plain CV sections, two columns from lg */}
               <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
                  <Appendix id="resume-experience" title="Experience">
                     <div className="space-y-8">
                        {history.map((work) => {
                           const built = getProjectsBuiltAt(work.company);
                           return (
                              <div key={work.id}>
                                 <h3 className="text-xl leading-snug font-semibold text-strong">
                                    {work.title}{' '}
                                    <span className="font-normal whitespace-nowrap text-muted">
                                       at{' '}
                                       <a
                                          href={`https://${work.website}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className={`group inline-flex items-center gap-1 text-strong ${linkClass}`}
                                       >
                                          {work.company}
                                          <LuArrowUpRight
                                             aria-hidden
                                             className="size-4 text-muted"
                                          />
                                          <span className="sr-only">
                                             (opens in a new tab)
                                          </span>
                                       </a>
                                    </span>
                                 </h3>
                                 <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-ui">
                                    {work.isCurrent && (
                                       <span className="border border-success/40 bg-success/10 px-1.5 text-xs leading-5 text-success">
                                          current
                                       </span>
                                    )}
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
                                    <span aria-hidden className="text-muted">
                                       ·
                                    </span>
                                    <span>{work.span}</span>
                                 </p>
                                 <p className="mt-3 text-body text-pretty">
                                    {work.responsibilities}
                                 </p>
                                 {built.length > 0 && (
                                    <p className="mt-3 text-control text-pretty">
                                       <span className="mr-2 font-mono text-xs text-primary-soft">
                                          built
                                       </span>
                                       {built.map((project, index) => (
                                          <span key={project.slug}>
                                             <Link
                                                href={project.href}
                                                className={`text-strong ${linkClass}`}
                                             >
                                                {project.title}
                                             </Link>
                                             {index < built.length - 1 && ', '}
                                          </span>
                                       ))}
                                    </p>
                                 )}
                                 <p className="mt-3 font-mono text-ui text-muted">
                                    <span className="sr-only">Stack: </span>
                                    {work.skills.map(getSkillName).join(' · ')}
                                 </p>
                              </div>
                           );
                        })}
                     </div>
                  </Appendix>

                  <Appendix id="resume-projects" title="Selected projects">
                     <ul className="space-y-6">
                        {selected.map((project) => (
                           <li key={project.slug}>
                              <h3 className="text-xl leading-snug font-semibold text-strong">
                                 <Link
                                    href={
                                       project.caseStudyUrl ??
                                       `/projects#${project.slug}`
                                    }
                                    className={linkClass}
                                 >
                                    {project.title}
                                 </Link>
                              </h3>
                              {project.context && (
                                 <p className="mt-1 text-control text-muted">
                                    {project.context}
                                 </p>
                              )}
                              <p className="mt-2 text-body text-pretty">
                                 {project.description}
                              </p>
                              <p className="mt-2 font-mono text-ui text-muted">
                                 {project.technologies.join(' · ')}
                              </p>
                           </li>
                        ))}
                     </ul>
                     <p className="mt-6 font-mono text-sm">
                        <Link
                           href="/projects"
                           className={`text-strong ${linkClass}`}
                        >
                           All projects
                        </Link>
                     </p>
                  </Appendix>

                  <Appendix id="resume-skills" title="Skills">
                     <dl className="border-t border-line">
                        {skillGroups.map((group) => (
                           <div
                              key={group.key}
                              className="grid gap-1 border-b border-line py-3 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4"
                           >
                              <dt className="font-mono text-sm text-primary-soft sm:pt-0.5">
                                 {group.key}
                              </dt>
                              <dd className="text-control text-pretty text-strong">
                                 {group.items.join(', ')}
                              </dd>
                           </div>
                        ))}
                     </dl>
                  </Appendix>

                  <Appendix id="resume-languages" title="Languages">
                     <dl className="border-t border-line">
                        {languages.map(({ language, fluency }) => (
                           <div
                              key={language}
                              className="grid grid-cols-[10rem_minmax(0,1fr)] gap-4 border-b border-line py-3"
                           >
                              <dt className="text-control text-strong">
                                 {language}
                              </dt>
                              <dd className="text-control text-muted">
                                 {fluency}
                              </dd>
                           </div>
                        ))}
                     </dl>
                  </Appendix>
               </div>

               <HiringClose
                  line="I build web products end to end, from the API to the interface."
                  resume={false}
               />
            </div>

            <ResumePrint data={printData} />
         </article>
      </DirectionalPage>
   );
};

export default ResumePage;

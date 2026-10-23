import { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

import { BreadcrumbNav } from '@/components/breadcrumb';
import { DirectionalPage } from '@/components/directional-page';
import { HiringClose } from '@/components/projects/hiring-close';
import { TechIcon } from '@/components/tech-icon';
import {
   getExperienceYears,
   getFirstWorkYear,
   getSkillName,
   getWorkHistory,
} from '@/lib/profile';
import { getProjectsBuiltAt } from '@/lib/project-view';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
   title: 'Work history',
   description:
      'Every role Hozaifa has held: what he did, what he built there and the stack, newest first.',
};

export const revalidate = 86400;

const STATUS = {
   live: { label: 'live', text: 'text-success', dot: 'bg-success' },
   developing: {
      label: 'in development',
      text: 'text-warning',
      dot: 'bg-warning',
   },
   archive: { label: 'archived', text: 'text-muted', dot: 'bg-muted' },
};

const listFormat = new Intl.ListFormat('en-GB', {
   style: 'long',
   type: 'conjunction',
});

const EntryRow = ({
   term,
   children,
}: {
   term: string;
   children: ReactNode;
}) => (
   <div className="grid gap-2 border-b border-line py-4 sm:grid-cols-[8.75rem_minmax(0,1fr)] sm:gap-6">
      <dt className="font-mono text-sm text-primary-soft sm:pt-0.5">{term}</dt>
      <dd className="min-w-0">{children}</dd>
   </div>
);

const WorksPage = () => {
   const history = getWorkHistory();
   const companies = new Set(history.map((work) => work.company));
   const builtSummary = history
      .map((work) => ({
         company: work.company,
         count: getProjectsBuiltAt(work.company).length,
      }))
      .filter((entry) => entry.count > 0)
      .map(({ company, count }) => `${count} projects built at ${company}`);
   const summary = `${getExperienceYears()} years across ${companies.size} ${
      companies.size === 1 ? 'company' : 'companies'
   }${builtSummary.length > 0 ? `, with ${listFormat.format(builtSummary)}` : ''}.`;

   return (
      <DirectionalPage>
         <article className="container pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28">
            <header>
               <BreadcrumbNav
                  items={[
                     {
                        href: '/#work',
                        title: 'Workspace',
                        transitionTypes: ['nav-back'],
                     },
                     { href: '/works', title: 'works' },
                  ]}
               />
               <h1 className="mt-5 text-display font-semibold text-strong sm:mt-6">
                  Work history
               </h1>
               <p className="mt-3 max-w-[50ch] text-lead text-pretty">
                  {summary}
               </p>

               <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-y border-line py-2.5 font-mono text-ui sm:mt-8">
                  <div>
                     <dt className="sr-only">Availability</dt>
                     <dd className="flex items-center gap-2 text-success">
                        <span
                           aria-hidden
                           className="size-2 rounded-full bg-success"
                        />
                        Open to full-time roles
                     </dd>
                  </div>
                  <div>
                     <dt className="sr-only">Working since</dt>
                     <dd>since {getFirstWorkYear()}</dd>
                  </div>
                  <div>
                     <dt className="sr-only">Roles</dt>
                     <dd>
                        {history.length}{' '}
                        {history.length === 1 ? 'role' : 'roles'}
                     </dd>
                  </div>
                  <div>
                     <dt className="sr-only">Location</dt>
                     <dd>Bangladesh · GMT+6</dd>
                  </div>
               </dl>
            </header>

            {/* A changelog of roles, newest first */}
            {history.map((work, index) => {
               const built = getProjectsBuiltAt(work.company);
               const titleId = `role-${work.id}`;
               return (
                  <section
                     key={work.id}
                     aria-labelledby={titleId}
                     className={cn(
                        index === 0 ? 'mt-12 lg:mt-14' : 'mt-14 lg:mt-20',
                     )}
                  >
                     <div className="flex flex-col gap-2 border-b border-line pb-4">
                        <h2
                           id={titleId}
                           className="text-headline font-semibold text-strong"
                        >
                           {work.title}{' '}
                           <span className="font-normal whitespace-nowrap text-muted">
                              at{' '}
                              <a
                                 href={`https://${work.website}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="group inline-flex items-center gap-1 text-strong underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info"
                              >
                                 {work.company}
                                 <LuArrowUpRight
                                    aria-hidden
                                    className="size-5 text-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                 />
                                 <span className="sr-only">
                                    (opens in a new tab)
                                 </span>
                              </a>
                           </span>
                        </h2>
                        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-ui">
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
                     </div>

                     <dl>
                        <EntryRow term="did">
                           <p className="max-w-[65ch] text-body text-pretty">
                              {work.responsibilities}
                           </p>
                        </EntryRow>
                        <EntryRow term="built">
                           {built.length > 0 ? (
                              <ul className="grid gap-x-8 gap-y-2.5 font-mono text-ui sm:grid-cols-2 lg:grid-cols-3">
                                 {built.map(({ slug, status, href }) => (
                                    <li
                                       key={slug}
                                       className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5"
                                    >
                                       <Link
                                          href={href}
                                          className="text-strong underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info"
                                       >
                                          {slug}
                                       </Link>
                                       {status ? (
                                          <span
                                             className={cn(
                                                'inline-flex items-center gap-1.5',
                                                STATUS[status].text,
                                             )}
                                          >
                                             <span
                                                aria-hidden
                                                className={cn(
                                                   'size-1.5 rounded-full',
                                                   STATUS[status].dot,
                                                )}
                                             />
                                             {STATUS[status].label}
                                          </span>
                                       ) : (
                                          <span className="text-muted">
                                             small project
                                          </span>
                                       )}
                                    </li>
                                 ))}
                              </ul>
                           ) : (
                              <p className="text-control text-muted">
                                 No projects listed for this role
                              </p>
                           )}
                        </EntryRow>
                        <EntryRow term="stack">
                           <ul className="flex flex-wrap gap-2">
                              {work.skills.map((skill) => {
                                 const name = getSkillName(skill);
                                 return (
                                    <li
                                       key={skill}
                                       className="inline-flex items-center gap-1.5 border border-line bg-bg-raised px-2 py-1 font-mono text-xs text-text"
                                    >
                                       <TechIcon
                                          name={name}
                                          className="size-4"
                                       />
                                       {name}
                                    </li>
                                 );
                              })}
                           </ul>
                        </EntryRow>
                        <EntryRow term="where">
                           <p className="text-control">
                              {work.type} · {work.location}
                           </p>
                        </EntryRow>
                     </dl>
                  </section>
               );
            })}

            <HiringClose line="I build web products end to end, from the API to the interface." />
         </article>
      </DirectionalPage>
   );
};

export default WorksPage;

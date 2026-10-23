import { Metadata } from 'next';
import { ViewTransition } from 'react';

import { BreadcrumbNav } from '@/components/breadcrumb';
import { DirectionalPage } from '@/components/directional-page';
import { HiringClose } from '@/components/projects/hiring-close';
import {
   DirectoryEntry,
   ProjectDirectory,
   StackCount,
} from '@/components/projects/project-directory';
import { projects, ProjectType, smallProjects } from '@/lib/data/projects';
import { toProjectView, toSmallProjectView } from '@/lib/project-view';

export const metadata: Metadata = {
   title: 'Projects',
   description:
      'Every project Hozaifa has built: screenshots, status, stack and links, filterable by technology.',
};

const listFormat = new Intl.ListFormat('en-GB', {
   style: 'long',
   type: 'conjunction',
});
type Owner = NonNullable<ProjectType['owner']>;

// "11 projects: 9 at Namespace IT, 1 for Uppercodes Soft and 1 of my own."
const describeProjects = () => {
   const owners: Owner[] = [
      ...projects.flatMap((project) => (project.owner ? [project.owner] : [])),
      ...smallProjects.map((project) => project.owner as Owner),
   ];
   const groups = new Map<string, number>();
   for (const owner of owners) {
      const phrase =
         owner.type === 'Personal' || owner.type === 'Self'
            ? 'of my own'
            : owner.type === 'Employment'
              ? `at ${owner.name}`
              : `for ${owner.name}`;
      groups.set(phrase, (groups.get(phrase) ?? 0) + 1);
   }
   const parts = [...groups].map(([phrase, count]) => `${count} ${phrase}`);
   const total = projects.length + smallProjects.length;

   return `${total} projects: ${listFormat.format(parts)}.`;
};

const STATUS_SUMMARY: {
   status: ProjectType['status'];
   label: string;
   className: string;
   dot: string;
}[] = [
   {
      status: 'live',
      label: 'live',
      className: 'text-success',
      dot: 'bg-success',
   },
   {
      status: 'developing',
      label: 'in development',
      className: 'text-warning',
      dot: 'bg-warning',
   },
   {
      status: 'archive',
      label: 'archived',
      className: 'text-muted',
      dot: 'bg-muted',
   },
];

type Props = {
   searchParams: Promise<{ stack?: string | string[] }>;
};

const ProjectsPage = async ({ searchParams }: Props) => {
   const entries: DirectoryEntry[] = [
      ...projects.map(toProjectView),
      ...smallProjects.map(toSmallProjectView),
   ];

   // Every technology with how many projects use it, most used first
   const counts = new Map<string, number>();
   for (const entry of entries) {
      for (const name of entry.uses) {
         counts.set(name, (counts.get(name) ?? 0) + 1);
      }
   }
   const stack: StackCount[] = [...counts]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

   // A shared ?stack= link renders filtered from the first paint
   const { stack: requested } = await searchParams;
   const initialStack =
      typeof requested === 'string' &&
      stack.some((tech) => tech.name === requested)
         ? requested
         : null;

   return (
      <DirectionalPage>
         <div className="container pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28">
            <header>
               <BreadcrumbNav
                  items={[
                     {
                        href: '/#projects',
                        title: 'Workspace',
                        transitionTypes: ['nav-back'],
                     },
                     { href: '/projects', title: 'projects' },
                  ]}
               />
               <h1 className="mt-5 text-display font-semibold text-strong sm:mt-6">
                  Projects
               </h1>
               <p className="mt-3 max-w-[50ch] text-lead text-pretty">
                  {describeProjects()}
               </p>

               <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-y border-line py-2.5 font-mono text-ui sm:mt-8">
                  {STATUS_SUMMARY.map(({ status, label, className, dot }) => {
                     const count = projects.filter(
                        (project) => project.status === status,
                     ).length;
                     if (count === 0) return null;
                     return (
                        <div key={status}>
                           <dt className="sr-only">{label}</dt>
                           <dd
                              className={`flex items-center gap-2 ${className}`}
                           >
                              <span
                                 aria-hidden
                                 className={`size-2 rounded-full ${dot}`}
                              />
                              {count} {label}
                           </dd>
                        </div>
                     );
                  })}
                  {/* Small projects have no status; counted so the line adds up */}
                  {smallProjects.length > 0 && (
                     <div className="text-muted">
                        <dt className="sr-only">small projects</dt>
                        <dd>
                           {smallProjects.length} small project
                           {smallProjects.length === 1 ? '' : 's'}
                        </dd>
                     </div>
                  )}
               </dl>
            </header>

            <ProjectDirectory
               entries={entries}
               stack={stack}
               initialStack={initialStack}
            />

            {/* When a filter shortens the list, the close glides up with it */}
            <ViewTransition default="none" update="dir-row-move">
               <HiringClose line="I build web products like these end to end, from the API to the interface." />
            </ViewTransition>
         </div>
      </DirectionalPage>
   );
};

export default ProjectsPage;

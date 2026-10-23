import Link from 'next/link';
import { ViewTransition } from 'react';

import { SectionHeading } from '@/components/home/section-heading';
import { TechIcon } from '@/components/tech-icon';
import { projects, smallProjects } from '@/lib/data/projects';
import { stackGroups } from '@/lib/data/stack';
import { toProjectView, toSmallProjectView } from '@/lib/project-view';
import { techTransitionName } from '@/lib/utils';

// Counted the way the projects directory counts its filter
const projectCounts = () => {
   const counts = new Map<string, number>();
   for (const view of [
      ...projects.map(toProjectView),
      ...smallProjects.map(toSmallProjectView),
   ])
      for (const name of view.uses)
         counts.set(name, (counts.get(name) ?? 0) + 1);
   return counts;
};

const StackSection = () => {
   const counts = projectCounts();

   return (
      <section
         id="stack"
         aria-labelledby="stack-title"
         className="depth-in container py-14 lg:py-20"
      >
         <SectionHeading
            id="stack-title"
            file="stack"
            title="Tools I build with"
            link={{ href: '/about-me', label: 'Full skill list' }}
         />

         <dl className="mt-10 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-5">
            {stackGroups.map((group) => (
               <div
                  key={group.key}
                  className="border-r border-b border-line p-5 transition-colors duration-300 ease-out-expo hover:bg-bg-raised sm:p-6 sm:last:col-span-2 lg:last:col-span-1"
               >
                  <dt className="font-mono text-sm text-primary-soft">
                     {group.key}
                  </dt>
                  <dd className="mt-3">
                     <ul className="flex flex-wrap gap-x-5 gap-y-2.5 text-control text-strong lg:flex-col">
                        {group.items.map((item) => {
                           const count = counts.get(item) ?? 0;
                           const name = (
                              <span className="inline-flex items-center gap-2.5">
                                 <TechIcon name={item} />
                                 {item}
                              </span>
                           );
                           return (
                              <li key={item} className="flex items-center">
                                 {count > 0 ? (
                                    <Link
                                       href={`/projects?stack=${encodeURIComponent(item)}`}
                                       transitionTypes={['nav-forward']}
                                       className="group inline-flex items-center gap-2 decoration-info underline-offset-4 transition-colors duration-200 hover:text-info hover:underline"
                                    >
                                       <ViewTransition
                                          name={techTransitionName(item)}
                                          share={{
                                             'nav-forward': 'tech-morph',
                                             default: 'none',
                                          }}
                                          default="none"
                                       >
                                          {name}
                                       </ViewTransition>
                                       <span className="font-mono text-xs text-muted no-underline transition-colors duration-200 group-hover:text-text">
                                          {count}
                                          <span className="sr-only">
                                             {count === 1
                                                ? ' project'
                                                : ' projects'}
                                          </span>
                                       </span>
                                    </Link>
                                 ) : (
                                    name
                                 )}
                              </li>
                           );
                        })}
                     </ul>
                  </dd>
               </div>
            ))}
         </dl>
      </section>
   );
};

export { StackSection };

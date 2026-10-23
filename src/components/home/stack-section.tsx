import { SectionHeading } from '@/components/home/section-heading';
import { TechIcon } from '@/components/tech-icon';
import { stackGroups } from '@/lib/data/stack';

const StackSection = () => {
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
                        {group.items.map((item) => (
                           <li key={item} className="flex items-center gap-2.5">
                              <TechIcon name={item} />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </dd>
               </div>
            ))}
         </dl>
      </section>
   );
};

export { StackSection };

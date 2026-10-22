import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

import { SectionHeading } from '@/components/home/section-heading';
import { buttonVariants } from '@/components/ui/button';
import { ABOUT_INTRO, getAboutStory } from '@/lib/data/about';
import { projectDetails } from '@/lib/data/project-details';

// Facts the hero's status bar doesn't already show
const getFacts = () => {
   const caseStudy = projectDetails[0];
   return [
      {
         term: 'builds',
         value: 'AI chat over documents, natural-language data queries, AI planning tools and learning platforms',
      },
      ...(caseStudy
         ? [
              {
                 term: 'case_study',
                 value: caseStudy.title.split(' - ')[0],
                 detail: `${caseStudy.duration} with ${caseStudy.teamSize}, as ${caseStudy.role.toLowerCase()}`,
                 href: `/projects/${caseStudy.slug}`,
              },
           ]
         : []),
      { term: 'works_with', value: 'On-site product teams in Dhaka' },
   ];
};

const AboutSection = () => {
   const facts = getFacts();

   return (
      <section
         id="about"
         aria-labelledby="about-title"
         className="container py-14 lg:py-20"
      >
         <SectionHeading id="about-title" file="about.md" title="About me" />

         <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
            <div className="max-w-[65ch] space-y-5 text-body text-pretty">
               <p className="text-strong">{ABOUT_INTRO}</p>
               <p>{getAboutStory()}</p>
               <Link
                  href="/about-me"
                  className={buttonVariants({ variant: 'default', size: 'lg' })}
               >
                  More about me
                  <LuArrowRight aria-hidden />
               </Link>
            </div>

            <dl className="self-start border border-line bg-bg-sunken">
               {facts.map((fact) => (
                  <div
                     key={fact.term}
                     className="grid gap-1.5 border-b border-line px-5 py-4 last:border-b-0"
                  >
                     <dt className="font-mono text-xs text-primary-soft">
                        {fact.term}
                     </dt>
                     <dd className="text-control text-strong">
                        {'href' in fact && fact.href ? (
                           <Link
                              href={fact.href}
                              className="group inline-flex items-center gap-1 underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info"
                           >
                              {fact.value}
                              <LuArrowRight
                                 aria-hidden
                                 className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
                              />
                           </Link>
                        ) : (
                           fact.value
                        )}
                        {'detail' in fact && fact.detail && (
                           <span className="mt-1 block text-sm text-muted">
                              {fact.detail}
                           </span>
                        )}
                     </dd>
                  </div>
               ))}
            </dl>
         </div>
      </section>
   );
};

export { AboutSection };

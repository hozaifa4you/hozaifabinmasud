import { LuArrowUpRight } from 'react-icons/lu';

import { ContactForm } from '@/components/about-me/contact-form';
import { CopyEmailButton } from '@/components/home/copy-email-button';
import { SectionHeading } from '@/components/home/section-heading';
import { appConfig } from '@/config/app.config';
import { getContactChannels } from '@/lib/links';
import { cn } from '@/lib/utils';

const ContactSection = () => {
   const email = appConfig.EMAIL;
   const channels = getContactChannels();

   return (
      <section
         id="contact"
         aria-labelledby="contact-title"
         className="container py-14 lg:py-20"
      >
         <SectionHeading
            id="contact-title"
            file="contact"
            title="Let's work together"
         />

         <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] lg:gap-14">
            <div>
               <p className="max-w-[44ch] text-body text-pretty text-strong">
                  Hiring for a full-time role, or want to talk about something
                  I&apos;ve built? Send a message here or reach me directly, and
                  I&apos;ll reply by email.
               </p>

               <div className="mt-8 border border-line bg-bg-sunken">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-5 py-3">
                     <a
                        href={`mailto:${email}`}
                        className="font-mono text-sm text-strong underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info"
                     >
                        {email}
                     </a>
                     <CopyEmailButton
                        email={email}
                        className="-mr-3 h-9 px-3 [&>span:first-of-type]:hidden"
                     />
                  </div>
                  <ul className="font-mono text-sm">
                     {channels.map((channel) => (
                        <li
                           key={channel.label}
                           className="border-b border-line last:border-b-0"
                        >
                           <a
                              href={channel.href}
                              {...(channel.external
                                 ? {
                                      target: '_blank',
                                      rel: 'noopener noreferrer',
                                   }
                                 : {})}
                              className="group grid grid-cols-[92px_minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 transition-colors duration-200 hover:bg-bg-raised"
                           >
                              <span className="text-xs text-primary-soft">
                                 {channel.label}
                              </span>
                              <span
                                 className={cn(
                                    'truncate text-strong',
                                    channel.prose && 'font-sans text-control',
                                 )}
                              >
                                 {channel.value}
                              </span>
                              <LuArrowUpRight
                                 aria-hidden
                                 className="size-4 text-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-strong"
                              />
                              {channel.external && (
                                 <span className="sr-only">
                                    (opens in a new tab)
                                 </span>
                              )}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="border border-line p-5 sm:p-8">
               <ContactForm />
            </div>
         </div>
      </section>
   );
};

export { ContactSection };

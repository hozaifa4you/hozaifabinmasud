import { Metadata } from 'next';
import { ReactNode } from 'react';
import { LuArrowUpRight, LuDownload } from 'react-icons/lu';

import { ContactForm } from '@/components/about-me/contact-form';
import { BreadcrumbNav } from '@/components/breadcrumb';
import { LocalTime } from '@/components/contact/local-time';
import { DirectionalPage } from '@/components/directional-page';
import { CopyEmailButton } from '@/components/home/copy-email-button';
import { appConfig } from '@/config/app.config';
import { getContactChannels, RESUME_PDF } from '@/lib/links';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
   title: 'Contact',
   description:
      'Reach Hozaifa: send a message from this page, or use email, phone, WhatsApp, LinkedIn or GitHub. Open to full-time roles.',
};

// One column template for the header and every row, so no column moves
const COLUMNS =
   'grid-cols-[5rem_minmax(0,1fr)_2.5rem] sm:grid-cols-[5rem_minmax(0,1fr)_6rem] lg:grid-cols-[10rem_minmax(0,1fr)_10rem_6rem]';

const ROW =
   'grid items-center gap-x-3 px-3 py-3.5 sm:gap-x-4 lg:h-14 lg:gap-x-5 lg:px-4 lg:py-0';

const arrowClass =
   'size-4 justify-self-end text-muted transition duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-strong';

/** A channel row: the whole row is the link, its trailing slot an icon or action */
const ChannelRow = ({
   label,
   value,
   opens,
   href,
   external,
   download,
   prose,
   action,
}: {
   label: string;
   value: string;
   opens: string;
   href: string;
   external?: boolean;
   download?: boolean;
   prose?: boolean;
   action?: ReactNode;
}) => (
   <li
      className={cn(
         'group relative border-b border-l border-b-line border-l-transparent transition-colors duration-200 ease-out-expo hover:bg-bg-raised/50',
         ROW,
         COLUMNS,
      )}
   >
      <span className="font-mono text-sm text-primary-soft">{label}</span>
      <a
         href={href}
         download={download || undefined}
         {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
         className={cn(
            // The row is the target: its overlay takes the clicks and the focus ring
            'wrap-break-word text-strong after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-primary',
            prose ? 'text-control' : 'font-mono text-sm',
         )}
      >
         {value}
         {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
      <span className="hidden font-mono text-ui text-muted lg:block">
         {opens}
      </span>
      {action ??
         (download ? (
            <LuDownload aria-hidden className={arrowClass} />
         ) : (
            <LuArrowUpRight aria-hidden className={arrowClass} />
         ))}
   </li>
);

// Where an outbound row leads, as its host
const hostOf = (href: string) => new URL(href).hostname.replace(/^www\./, '');

const ContactPage = () => {
   const email = appConfig.EMAIL;
   const channels = getContactChannels();

   return (
      <DirectionalPage>
         <article className="container pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28">
            <header>
               <BreadcrumbNav
                  items={[
                     {
                        href: '/',
                        title: 'Workspace',
                        transitionTypes: ['nav-back'],
                     },
                     { href: '/contact', title: 'contact' },
                  ]}
               />
               <h1 className="mt-5 text-display font-semibold text-strong sm:mt-6">
                  Contact
               </h1>
               <p className="mt-4 max-w-[60ch] text-lead text-pretty">
                  Hiring for a full-time role? Write here or pick a channel.
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
                     <dt className="sr-only">Local time</dt>
                     <dd>
                        <LocalTime /> in Bangladesh · GMT+6
                     </dd>
                  </div>
                  <div>
                     <dt className="sr-only">Replies</dt>
                     <dd>replies by email</dd>
                  </div>
               </dl>
            </header>

            {/* Every way to reach me, one row each; the message row is open */}
            <section
               aria-labelledby="channels-title"
               className="mt-8 border-t border-line lg:mt-10"
            >
               <h2 id="channels-title" className="sr-only">
                  Ways to reach me
               </h2>
               <div
                  aria-hidden
                  className={cn(
                     'hidden h-9 items-center gap-x-5 border-b border-l border-b-line border-l-transparent px-4 font-mono text-xs text-muted lg:grid',
                     COLUMNS,
                  )}
               >
                  <span>channel</span>
                  <span>value</span>
                  <span>opens</span>
               </div>

               <ul>
                  <li className="border-b border-l border-b-line border-l-primary bg-bg-raised">
                     <div className={cn(ROW, COLUMNS)}>
                        <span className="font-mono text-sm text-primary-soft">
                           message
                        </span>
                        <span className="col-span-2 text-control text-strong lg:col-span-1">
                           Write to me from this page
                        </span>
                        <span className="hidden font-mono text-ui text-muted lg:block">
                           this page
                        </span>
                     </div>
                     <div className="px-3 pt-2 pb-7 lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-x-5 lg:px-4 lg:pb-8">
                        {/* A container, so the form lays out by the width it gets */}
                        <div className="@container lg:col-start-2">
                           <ContactForm recipient={appConfig.APP_NAME_SHORT} />
                        </div>
                     </div>
                  </li>

                  <ChannelRow
                     label="email"
                     value={email}
                     opens="mail app"
                     href={`mailto:${email}`}
                     action={
                        <CopyEmailButton
                           email={email}
                           label="copy"
                           className="relative z-10 -mr-3 h-9 justify-self-end px-3 max-sm:[&>span:first-of-type]:hidden"
                        />
                     }
                  />
                  {channels.map((channel) => (
                     <ChannelRow
                        key={channel.label}
                        label={channel.label}
                        value={channel.value}
                        opens={channel.external ? hostOf(channel.href) : 'call'}
                        href={channel.href}
                        external={channel.external}
                        prose={channel.prose}
                     />
                  ))}
                  <ChannelRow
                     label="resume"
                     value={RESUME_PDF.slice(1)}
                     opens="download"
                     href={RESUME_PDF}
                     download
                  />
               </ul>
            </section>
         </article>
      </DirectionalPage>
   );
};

export default ContactPage;

import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight, LuDownload } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';
import { getSocialLinks, RESUME_PDF } from '@/lib/links';
import { cn } from '@/lib/utils';

const pages = [
   { label: 'Projects', href: '/projects' },
   { label: 'Experience', href: '/works' },
   { label: 'About', href: '/about-me' },
   { label: 'Resume', href: '/resume' },
   { label: 'Contact', href: '/contact' },
];

const linkClassName =
   'text-sm text-text transition-colors duration-200 hover:text-strong';

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="mt-8 border-t border-line bg-bg-sunken print:hidden">
         <div className="container grid gap-10 py-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div>
               <Link
                  href="/"
                  className="inline-flex items-center gap-2.5 font-semibold text-strong"
               >
                  <Image
                     src="/assets/logo.svg"
                     alt=""
                     width={20}
                     height={20}
                     className="size-5"
                  />
                  {siteConfig.name}
               </Link>
               <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-pretty">
                  Full-stack developer building web applications end to end,
                  with AI features shipped in production.
               </p>
               <a
                  href={RESUME_PDF}
                  download
                  className={cn(
                     buttonVariants({ variant: 'default', size: 'sm' }),
                     'mt-6 font-mono',
                  )}
               >
                  <LuDownload aria-hidden />
                  resume.pdf
               </a>
            </div>

            <nav aria-label="Footer">
               <p className="font-mono text-xs text-primary-soft">pages</p>
               <ul className="mt-4 grid gap-2.5">
                  {pages.map((page) => (
                     <li key={page.href}>
                        <Link href={page.href} className={linkClassName}>
                           {page.label}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>

            <div>
               <p className="font-mono text-xs text-primary-soft">elsewhere</p>
               <ul className="mt-4 grid gap-2.5">
                  {getSocialLinks().map((social) => (
                     <li key={social.name}>
                        <a
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={cn(
                              linkClassName,
                              'group inline-flex items-center gap-1',
                           )}
                        >
                           {social.name}
                           <LuArrowUpRight
                              aria-hidden
                              className="size-3.5 text-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                           />
                           <span className="sr-only">(opens in a new tab)</span>
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <div className="border-t border-line">
            <div className="container flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4 text-xs text-muted">
               <span>
                  &copy; {currentYear} {siteConfig.name}
               </span>
               <span>Built with Next.js and Tailwind CSS</span>
            </div>
         </div>
      </footer>
   );
};

export { Footer };

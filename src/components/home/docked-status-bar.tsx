'use client';

import { useEffect, useState } from 'react';
import { LuDownload, LuFileText, LuMail } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import { useActiveSection } from '@/hooks/use-active-section';
import { RESUME_PDF } from '@/lib/links';
import { cn } from '@/lib/utils';

// Section id -> the workspace file it opens
const FILES: Record<string, string> = {
   projects: 'projects/',
   work: 'work.log',
   education: 'education.md',
   stack: 'stack',
   about: 'about.md',
};

/**
 * The hero's status bar, docked to the bottom of the screen once the hero has
 * scrolled away: the file being read, reading progress and the two actions.
 */
const DockedStatusBar = ({ email }: { email: string }) => {
   const [isDocked, setIsDocked] = useState(false);
   const activeId = useActiveSection(['home', ...Object.keys(FILES)], true);
   const file = (activeId && FILES[activeId]) || 'README.md';

   // Dock after the hero's own status bar leaves the top. Undock once the
   // contact section arrives: its own channels take over from there
   useEffect(() => {
      const heroStatus = document.getElementById('hero-status');
      const endings = [
         document.getElementById('contact'),
         document.querySelector('footer'),
      ].filter((el): el is HTMLElement => el !== null);
      if (!heroStatus) return;

      let heroPassed = false;
      const reachedEndings = new Set<Element>();
      const update = () => setIsDocked(heroPassed && reachedEndings.size === 0);

      const heroObserver = new IntersectionObserver(
         ([entry]) => {
            heroPassed =
               !entry.isIntersecting &&
               entry.boundingClientRect.top < (entry.rootBounds?.top ?? 0);
            update();
         },
         // Hidden under the sticky header counts as scrolled away
         { rootMargin: '-64px 0px 0px 0px' },
      );
      const endingObserver = new IntersectionObserver(
         (entries) => {
            for (const entry of entries) {
               if (entry.isIntersecting) reachedEndings.add(entry.target);
               else reachedEndings.delete(entry.target);
            }
            update();
         },
         // An ending counts once it reaches the upper part of the screen
         { rootMargin: '0px 0px -40% 0px' },
      );
      heroObserver.observe(heroStatus);
      endings.forEach((el) => endingObserver.observe(el));
      return () => {
         heroObserver.disconnect();
         endingObserver.disconnect();
      };
   }, []);

   return (
      <aside
         aria-label="Reading status"
         inert={!isDocked}
         className={cn(
            'fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg-sunken pb-[env(safe-area-inset-bottom)] transition-[translate,opacity] duration-500 ease-out-expo',
            isDocked
               ? 'translate-y-0 opacity-100'
               : 'pointer-events-none translate-y-full opacity-0',
         )}
      >
         {/* Scroll-driven reading progress on the bar's top edge */}
         <span
            aria-hidden
            className="read-progress absolute inset-x-0 -top-px h-px bg-primary"
         />
         <div className="container flex h-14 items-center justify-between gap-4 sm:h-12">
            <span className="flex min-w-0 items-center gap-2 font-mono text-xs text-strong">
               <LuFileText
                  aria-hidden
                  className="size-3.5 shrink-0 text-primary"
               />
               <span className="truncate">{file}</span>
            </span>
            <span className="hidden items-center gap-2 font-mono text-xs text-success md:inline-flex">
               <span aria-hidden className="size-2 rounded-full bg-success" />
               Open to full-time roles
            </span>
            <div className="flex shrink-0 items-center gap-2">
               <a
                  href={`mailto:${email}`}
                  className={cn(
                     buttonVariants({ variant: 'default', size: 'sm' }),
                     'max-sm:h-10',
                  )}
               >
                  <LuMail aria-hidden />
                  Email me
               </a>
               {/* The desktop header already offers resume.pdf */}
               <a
                  href={RESUME_PDF}
                  download
                  className={cn(
                     buttonVariants({ variant: 'default', size: 'sm' }),
                     'max-sm:h-10 lg:hidden',
                  )}
               >
                  <LuDownload aria-hidden />
                  Resume
               </a>
            </div>
         </div>
      </aside>
   );
};

export { DockedStatusBar };

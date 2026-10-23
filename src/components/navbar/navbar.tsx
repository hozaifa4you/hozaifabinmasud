'use client';

import Link from 'next/link';
import {
   useCallback,
   useEffect,
   useLayoutEffect,
   useRef,
   useState,
} from 'react';
import { LuDownload, LuMenu, LuX } from 'react-icons/lu';

import { ResponsiveMenu } from './responsive-menu';
import { Logo } from '@/components/navbar/logo';
import { buttonVariants } from '@/components/ui/button';
import { useActiveSection } from '@/hooks/use-active-section';
import { currentOf, useMenu } from '@/hooks/use-menu';
import { RESUME_PDF } from '@/lib/links';
import { cn } from '@/lib/utils';

const Navbar = ({ educationHref }: { educationHref: string | null }) => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleRef = useRef<HTMLButtonElement>(null);
   const { items, isHomePage } = useMenu(educationHref);
   // The hero is observed too, so no nav item is active at the top of the page
   const activeId = useActiveSection(
      [
         'home',
         ...items.flatMap((item) => (item.sectionId ? [item.sectionId] : [])),
      ],
      isHomePage,
   );
   // On the homepage's first screen the hero explorer is the navigation;
   // the header links appear once it scrolls away
   const linksHidden = isHomePage && (activeId === null || activeId === 'home');
   const activeHref = items.find(
      (item) => currentOf(item, activeId) !== undefined,
   )?.href;
   const navRef = useRef<HTMLElement>(null);
   const indicatorRef = useRef<HTMLSpanElement>(null);
   const placedRef = useRef(false);

   // One underline glides to the current item; a resize re-places it at once
   useLayoutEffect(() => {
      const nav = navRef.current;
      const indicator = indicatorRef.current;
      if (!nav || !indicator) return;
      const place = (animate: boolean) => {
         const link = activeHref
            ? nav.querySelector<HTMLElement>(`ul a[href="${activeHref}"]`)
            : null;
         if (!link) {
            indicator.style.opacity = '0';
            return;
         }
         indicator.style.transition =
            animate && placedRef.current ? '' : 'none';
         indicator.style.opacity = '1';
         indicator.style.transform = `translateX(${link.offsetLeft + 12}px)`;
         indicator.style.width = `${link.offsetWidth - 24}px`;
         placedRef.current = true;
      };
      place(true);
      let isFirstReport = true;
      const observer = new ResizeObserver(() => {
         if (isFirstReport) {
            isFirstReport = false;
            return;
         }
         place(false);
      });
      observer.observe(nav);
      return () => observer.disconnect();
   }, [activeHref]);

   useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 8);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   // Escape and the toggle return focus to the button; following a link does not
   const closeMenu = useCallback(() => {
      setIsMenuOpen(false);
      toggleRef.current?.focus();
   }, []);
   const navigateFromMenu = useCallback(() => setIsMenuOpen(false), []);

   return (
      <header
         // Anchors the header while page content slides in view transitions
         style={{ viewTransitionName: 'site-header' }}
         className={cn(
            'sticky top-0 z-50 border-b bg-bg-main transition-colors duration-300 ease-out-expo print:hidden',
            isScrolled || isMenuOpen ? 'border-line' : 'border-transparent',
         )}
      >
         <div className="container flex h-16 items-center justify-between gap-6">
            <Logo />

            <nav
               ref={navRef}
               aria-label="Primary"
               className="relative hidden items-center lg:flex"
            >
               <ul
                  className={cn(
                     'flex items-center transition-[opacity,visibility] duration-300 ease-out-expo',
                     linksHidden && 'invisible opacity-0',
                  )}
               >
                  {items.map((item) => {
                     const current = currentOf(item, activeId);
                     const isActive = current !== undefined;
                     return (
                        <li key={item.href}>
                           <Link
                              href={item.href}
                              aria-current={current}
                              className={cn(
                                 'relative inline-flex h-10 items-center px-3 font-mono text-sm transition-colors duration-200 hover:text-strong',
                                 isActive ? 'text-strong' : 'text-text',
                              )}
                           >
                              {item.name}
                           </Link>
                        </li>
                     );
                  })}
               </ul>
               <span
                  ref={indicatorRef}
                  aria-hidden
                  className="pointer-events-none absolute bottom-1 left-0 h-px bg-primary opacity-0 transition-[transform,width,opacity] duration-300 ease-out-expo"
               />
               <a
                  href={RESUME_PDF}
                  download
                  className={cn(
                     buttonVariants({ variant: 'default', size: 'sm' }),
                     'ml-4 font-mono',
                  )}
               >
                  <LuDownload aria-hidden />
                  resume.pdf
               </a>
            </nav>

            <button
               ref={toggleRef}
               type="button"
               aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
               aria-expanded={isMenuOpen}
               aria-controls="mobile-menu"
               onClick={() => setIsMenuOpen((open) => !open)}
               className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'size-11 lg:hidden [&_svg]:size-5',
               )}
            >
               {isMenuOpen ? <LuX aria-hidden /> : <LuMenu aria-hidden />}
            </button>
         </div>

         <ResponsiveMenu
            id="mobile-menu"
            isOpen={isMenuOpen}
            onClose={closeMenu}
            onNavigate={navigateFromMenu}
            items={items}
            activeId={activeId}
         />
      </header>
   );
};

export { Navbar };

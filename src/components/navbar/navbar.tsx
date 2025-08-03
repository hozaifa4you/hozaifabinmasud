'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbBrandFiverr } from 'react-icons/tb';

import { ResponsiveMenu } from './responsive-menu';
import { Logo } from '@/components/navbar/logo';
import { appConfig } from '@/config/app.config';
import { useMenu } from '@/hooks/use-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
   const [isSticky, setIsSticky] = useState(false);
   const { lgMenu, mdMenu, mobileMenu } = useMenu();
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsSticky(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <header
         id="home"
         className={cn('sticky top-0', {
            'bg-bg-main shadow-primary z-40 pb-2.5 shadow-xs': isSticky,
         })}
      >
         <div className="relative container flex items-center justify-between gap-4 pt-8">
            <Logo />

            <nav className="flex items-center gap-8">
               <menu className="flex items-center gap-5">
                  {lgMenu.items.map((item) => (
                     <li
                        key={item.id}
                        className="group hidden transition duration-200 ease-in-out lg:block"
                     >
                        <Link href={item.link}>
                           <span className="text-primary group-hover:font-medium">
                              {item.sign}
                           </span>
                           <span className="group-hover:font-medium group-hover:text-white">
                              {item.name}
                           </span>
                        </Link>
                     </li>
                  ))}

                  {mdMenu.items.map((item) => (
                     <li
                        key={item.id}
                        className="group hidden transition duration-200 ease-in-out md:block lg:hidden"
                     >
                        <Link href={item.link}>
                           <span className="text-primary group-hover:font-medium">
                              {item.sign}
                           </span>
                           <span className="group-hover:font-medium group-hover:text-white">
                              {item.name}
                           </span>
                        </Link>
                     </li>
                  ))}

                  {mobileMenu.items.map((item) => (
                     <li
                        key={item.id}
                        className="group transition duration-200 ease-in-out md:hidden"
                     >
                        <Link href={item.link}>
                           <span className="text-primary group-hover:font-medium">
                              {item.sign}
                           </span>
                           <span className="group-hover:font-medium group-hover:text-white">
                              {item.name}
                           </span>
                        </Link>
                     </li>
                  ))}
               </menu>

               <button
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className="cursor-pointer lg:hidden"
               >
                  <GiHamburgerMenu className="size-5" />
               </button>
            </nav>

            <div className="fixed top-0 left-5 hidden w-5 flex-col justify-center gap-3 lg:flex">
               <div className="bg-text mx-auto h-[190px] w-px"></div>
               <div>
                  <ul className="flex flex-col gap-2">
                     <li>
                        <Link
                           href={`https://github.com/${appConfig.GITHUB_USERNAME}`}
                           target="_blank"
                        >
                           <FaGithub className="h-5 w-5" />
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={`https://www.linkedin.com/in/${appConfig.LINKEDIN_USERNAME}/`}
                           target="_blank"
                        >
                           <FaLinkedin className="size-5" />
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={`https://www.fiverr.com/${appConfig.FIVERR_USERNAME}`}
                           target="_blank"
                        >
                           <TbBrandFiverr className="size-5" />
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={`https://www.upwork.com/freelancers/~${appConfig.UPWORK_USERNAME}?mp_source=share`}
                           target="_blank"
                        >
                           <FaUpwork className="size-5" />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            <ResponsiveMenu
               isOpen={isMobileMenuOpen}
               setIsOpen={setIsMobileMenuOpen}
               items={mobileMenu.responsiveItems ?? []}
            />
         </div>
      </header>
   );
};

export { Navbar };

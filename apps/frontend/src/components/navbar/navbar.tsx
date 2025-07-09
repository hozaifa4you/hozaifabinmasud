'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { FaUpwork } from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';
import { useMenu } from '@/hooks/use-menu';
import { GiHamburgerMenu } from 'react-icons/gi';

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
         className={cn('sticky top-0', { 'bg-bg-main z-40 pb-2.5': isSticky })}
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

               <button className="cursor-pointer lg:hidden">
                  <GiHamburgerMenu className="size-5" />
               </button>
            </nav>

            <div className="fixed top-0 left-5 hidden w-5 flex-col justify-center gap-3 lg:flex">
               <div className="bg-text mx-auto h-[190px] w-px"></div>
               <div>
                  <ul className="flex flex-col gap-2">
                     <li>
                        <Link
                           href="https://github.com/hozaifa4you"
                           target="_blank"
                        >
                           <FaGithub className="sie-5" />
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="https://www.linkedin.com/in/hozaifa-bin-masud-4b7835244/"
                           target="_blank"
                        >
                           <FaLinkedin className="sie-5" />
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="https://www.fiverr.com/hozaifa4you"
                           target="_blank"
                        >
                           <TbBrandFiverr className="size-5" />
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="https://www.upwork.com/freelancers/~01361961bd46c0b936?mp_source=share"
                           target="_blank"
                        >
                           <FaUpwork className="size-5" />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </header>
   );
};

export { Navbar };

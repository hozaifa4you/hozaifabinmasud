'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { FaUpwork } from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';
import { useMenu } from '@/hooks/use-menu';

const Navbar = () => {
   const [isSticky, setIsSticky] = useState(false);
   const menuItems = useMenu();

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
         <div className="container flex items-center justify-between gap-4 pt-8">
            <Logo />

            <menu className="flex items-center gap-8">
               {menuItems.map((item) => (
                  <li
                     key={item.id}
                     className="group transition duration-200 ease-in-out"
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

            <div className="fixed top-0 left-5 flex w-5 flex-col justify-center gap-3">
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

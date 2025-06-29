import Link from 'next/link';
import { Logo } from './logo';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const menuItems = [
   { id: 1, name: 'home', sign: '#', link: '#home' },
   { id: 2, name: 'works', sign: '#', link: '#works' },
   { id: 3, name: 'about-me', sign: '#', link: '#about-me' },
   { id: 4, name: 'contacts', sign: '#', link: '#contacts' },
];

const Navbar = () => {
   return (
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
                     <Link href="https://x.com/yousuf4you" target="_blank">
                        <FaXTwitter className="sie-5" />
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export { Navbar };

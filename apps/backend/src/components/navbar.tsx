import Link from 'next/link';
import { Logo } from './logo';

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

         <div className="fixed top-0 left-4 w-5">
            <div className="h- w-px"></div>
         </div>
      </div>
   );
};

export { Navbar };

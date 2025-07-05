import { usePathname } from 'next/navigation';

export interface MenuItems {
   id: number;
   name: string;
   sign: string;
   link: string;
}

const useMenu = () => {
   const pathname = usePathname();

   const homeMenu: MenuItems[] = [
      { id: 1, name: 'home', sign: '#', link: '#home' },
      { id: 2, name: 'skills', sign: '#', link: '#skills' },
      { id: 3, name: 'works', sign: '#', link: '#works' },
      { id: 6, name: 'edu-&-training', sign: '#', link: '#edu' },
      { id: 4, name: 'about-me', sign: '#', link: '#about-me' },
      { id: 5, name: 'contact', sign: '#', link: '#contacts' },
   ];

   const commonMenuItems: MenuItems[] = [
      { id: 1, name: 'home', sign: '#', link: '/' },
      { id: 3, name: 'works', sign: '#', link: '/works' },
      { id: 6, name: 'edu-&-training', sign: '#', link: '/educations' },
      { id: 4, name: 'about-me', sign: '#', link: '/about-me' },
      { id: 5, name: 'contact', sign: '#', link: '/contact' },
   ];

   const menuItems = pathname === '/' ? homeMenu : commonMenuItems;

   return menuItems;
};

export { useMenu };

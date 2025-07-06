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
      { id: 2, name: 'projects', sign: '@', link: '#projects' },
      { id: 3, name: 'skills', sign: '#', link: '#skills' },
      { id: 4, name: 'works', sign: '#', link: '#works' },
      { id: 5, name: 'edu-&-training', sign: '#', link: '#edu' },
      { id: 6, name: 'about-me', sign: '#', link: '#about-me' },
      { id: 7, name: 'contact', sign: '#', link: '#contacts' },
   ];

   const commonMenuItems: MenuItems[] = [
      { id: 1, name: 'home', sign: '#', link: '/' },
      { id: 2, name: 'projects', sign: '@', link: '/projects' },
      { id: 3, name: 'works', sign: '#', link: '/works' },
      { id: 4, name: 'edu-&-training', sign: '#', link: '/educations' },
      { id: 5, name: 'about-me', sign: '#', link: '/about-me' },
      { id: 6, name: 'contact', sign: '#', link: '/contact' },
   ];

   const menuItems = pathname === '/' ? homeMenu : commonMenuItems;

   return menuItems;
};

export { useMenu };

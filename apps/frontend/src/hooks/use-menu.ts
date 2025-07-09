import { usePathname } from 'next/navigation';

export interface MenuItem {
   id: number;
   name: string;
   sign: string;
   link: string;
}

export interface MenuItems {
   items: MenuItem[];
   responsiveItems?: MenuItem[];
}

const useMenu = () => {
   const pathname = usePathname();

   const homeLgMenuItems: MenuItems = {
      items: [
         { id: 1, name: 'home', sign: '#', link: '#home' },
         { id: 2, name: 'projects', sign: '#', link: '#projects' },
         { id: 3, name: 'skills', sign: '#', link: '#skills' },
         { id: 4, name: 'works', sign: '#', link: '#works' },
         { id: 5, name: 'edu-&-training', sign: '#', link: '#edu' },
         { id: 6, name: 'about-me', sign: '#', link: '#about-me' },
         { id: 7, name: 'contact', sign: '#', link: '#contacts' },
      ],
   };

   const commonLgMenuItems: MenuItems = {
      items: [
         { id: 1, name: 'home', sign: '#', link: '/' },
         { id: 2, name: 'projects', sign: '#', link: '/projects' },
         { id: 3, name: 'works', sign: '#', link: '/works' },
         { id: 4, name: 'edu-&-training', sign: '#', link: '/educations' },
         { id: 5, name: 'about-me', sign: '#', link: '/about-me' },
         { id: 6, name: 'contact', sign: '#', link: '/contact' },
      ],
   };

   const homeMdMenuItems: MenuItems = {
      items: [
         { id: 1, name: 'home', sign: '#', link: '#home' },
         { id: 2, name: 'projects', sign: '#', link: '#projects' },
         { id: 3, name: 'skills', sign: '#', link: '#skills' },
         { id: 4, name: 'works', sign: '#', link: '#works' },
         { id: 5, name: 'edu-&-training', sign: '#', link: '#edu' },
      ],
      responsiveItems: [
         { id: 6, name: 'about-me', sign: '#', link: '#about-me' },
         { id: 7, name: 'contact', sign: '#', link: '#contacts' },
      ],
   };

   const commonMdMenuItems: MenuItems = {
      items: [
         { id: 1, name: 'home', sign: '#', link: '/' },
         { id: 2, name: 'projects', sign: '#', link: '/projects' },
         { id: 3, name: 'works', sign: '#', link: '/works' },
         { id: 4, name: 'edu-&-training', sign: '#', link: '/educations' },
         { id: 5, name: 'about-me', sign: '#', link: '/about-me' },
      ],
      responsiveItems: [
         { id: 6, name: 'contact', sign: '#', link: '/contact' },
      ],
   };

   const homeMobileMenuItems: MenuItems = {
      items: [{ id: 1, link: '/resume', name: 'download-resume', sign: '@' }],
      responsiveItems: [
         { id: 1, name: 'home', sign: '#', link: '#home' },
         { id: 2, name: 'projects', sign: '#', link: '#projects' },
         { id: 3, name: 'skills', sign: '#', link: '#skills' },
         { id: 4, name: 'works', sign: '#', link: '#works' },
         { id: 5, name: 'edu-&-training', sign: '#', link: '#edu' },
         { id: 6, name: 'about-me', sign: '#', link: '#about-me' },
         { id: 7, name: 'contact', sign: '#', link: '#contacts' },
      ],
   };

   const commonMobileMenuItems: MenuItems = {
      items: [{ id: 1, link: '/resume', name: 'download-resume', sign: '@' }],
      responsiveItems: [
         { id: 1, name: 'home', sign: '#', link: '/' },
         { id: 2, name: 'projects', sign: '#', link: '/projects' },
         { id: 3, name: 'works', sign: '#', link: '/works' },
         { id: 4, name: 'edu-&-training', sign: '#', link: '/educations' },
         { id: 5, name: 'about-me', sign: '#', link: '/about-me' },
         { id: 6, name: 'contact', sign: '#', link: '/contact' },
      ],
   };

   const lgMenuItems = pathname === '/' ? homeLgMenuItems : commonLgMenuItems;
   const mdMenuItems = pathname === '/' ? homeMdMenuItems : commonMdMenuItems;
   const mobileMenuItems =
      pathname === '/' ? homeMobileMenuItems : commonMobileMenuItems;

   return {
      lgMenu: lgMenuItems,
      mdMenu: mdMenuItems,
      mobileMenu: mobileMenuItems,
   };
};

export { useMenu };

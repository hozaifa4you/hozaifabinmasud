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

// Base menu items used across different layouts
const BASE_MENU_ITEMS = [
   { name: 'home', link: '' },
   { name: 'projects', link: 'projects' },
   { name: 'works', link: 'works' },
   { name: 'edu-&-training', link: 'educations' },
   { name: 'about-me', link: 'about-me' },
   { name: 'contact', link: 'contact' },
];

// Special items just for home page
const HOME_ADDITIONAL_ITEMS = [{ name: 'skills', link: 'skills' }];

const useMenu = () => {
   const pathname = usePathname();
   const isHomePage = pathname === '/';

   // Helper function to generate menu items based on page type
   const generateMenuItems = (
      items: typeof BASE_MENU_ITEMS,
      isHash = false,
   ) => {
      return items.map((item, idx) => ({
         id: idx + 1,
         name: item.name,
         sign: '#',
         link: isHash
            ? `#${item.link === '' ? 'home' : item.link}`
            : `/${item.link}`,
      }));
   };

   // Generate menu items based on current page
   const getItems = (isHome: boolean) => {
      const items = [...BASE_MENU_ITEMS];

      // For homepage, add skills after projects
      if (isHome) {
         items.splice(2, 0, HOME_ADDITIONAL_ITEMS[0]);
      }

      return generateMenuItems(items, isHome);
   };

   // Common resume download item for mobile
   const resumeItem = [
      { id: 1, link: '/resume', name: 'download-resume', sign: '@' },
   ];

   // Generate specific menu configurations
   const homeMenuItems = getItems(true);
   const commonMenuItems = getItems(false);

   // Create menu structure
   const lgMenuItems = {
      items: isHomePage ? homeMenuItems : commonMenuItems,
   };

   const mdMenuItems = {
      items: isHomePage
         ? homeMenuItems.slice(0, 5)
         : commonMenuItems.slice(0, 5),
      responsiveItems: isHomePage
         ? homeMenuItems.slice(5)
         : commonMenuItems.slice(5),
   };

   const mobileMenuItems = {
      items: resumeItem,
      responsiveItems: isHomePage ? homeMenuItems : commonMenuItems,
   };

   return {
      lgMenu: lgMenuItems,
      mdMenu: mdMenuItems,
      mobileMenu: mobileMenuItems,
   };
};

export { useMenu };

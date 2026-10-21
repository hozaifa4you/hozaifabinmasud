import { usePathname } from 'next/navigation';

export interface MenuItem {
   /** Workspace file name shown as the label */
   name: string;
   href: string;
   /** Section id on the homepage, used for the active state */
   sectionId?: string;
}

// The site reads as a workspace: every nav item is one of its files
const SECTIONS = [
   { name: 'projects/', sectionId: 'projects', page: '/projects' },
   { name: 'work.log', sectionId: 'work', page: '/works' },
   { name: 'stack', sectionId: 'stack', page: '/#stack' },
   { name: 'about.md', sectionId: 'about', page: '/about-me' },
   { name: 'contact', sectionId: 'contact', page: '/contact' },
];

const useMenu = () => {
   const pathname = usePathname();
   const isHomePage = pathname === '/';

   const items: MenuItem[] = SECTIONS.map((section) =>
      isHomePage
         ? {
              name: section.name,
              href: `#${section.sectionId}`,
              sectionId: section.sectionId,
           }
         : { name: section.name, href: section.page },
   );

   return { items, isHomePage };
};

export { useMenu };

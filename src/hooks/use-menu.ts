import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

export interface MenuItem {
   /** Workspace file name shown as the label */
   name: string;
   href: string;
   /** Section id on the homepage, used for the active state */
   sectionId?: string;
   /** Off the homepage: the route is this item's page or below it */
   isCurrentPage?: boolean;
}

// Homepage items follow the scroll position; elsewhere the route decides
export const currentOf = (item: MenuItem, activeId: string | null) => {
   if (item.sectionId) {
      return item.sectionId === activeId ? 'location' : undefined;
   }
   return item.isCurrentPage ? 'page' : undefined;
};

// The site reads as a workspace: every nav item is one of its files.
// `segments` are the routes that make an item current off the homepage.
const SECTIONS = [
   {
      name: 'projects/',
      sectionId: 'projects',
      page: '/projects',
      segments: ['projects'],
   },
   { name: 'work.log', sectionId: 'work', page: '/works', segments: ['works'] },
   {
      name: 'education.md',
      sectionId: 'education',
      page: '/educations',
      segments: ['educations', 'trainings'],
   },
   { name: 'stack', sectionId: 'stack', page: '/#stack', segments: [] },
   {
      name: 'about.md',
      sectionId: 'about',
      page: '/about-me',
      segments: ['about-me'],
   },
   {
      name: 'contact',
      sectionId: 'contact',
      page: '/contact',
      segments: ['contact'],
   },
];

/** `showEducation`: there are education entries to show (server-decided) */
const useMenu = (showEducation: boolean) => {
   const pathname = usePathname();
   const isHomePage = pathname === '/';
   // The route segment, not the pathname: the one prerendered 404 serves every
   // missing path, and its segment is the same on the server and the client
   const segment = useSelectedLayoutSegment();

   const items: MenuItem[] = SECTIONS.filter(
      (section) => showEducation || section.sectionId !== 'education',
   ).map((section) =>
      isHomePage
         ? {
              name: section.name,
              href: `#${section.sectionId}`,
              sectionId: section.sectionId,
           }
         : {
              name: section.name,
              href: section.page,
              isCurrentPage:
                 segment !== null && section.segments.includes(segment),
           },
   );

   return { items, isHomePage };
};

export { useMenu };

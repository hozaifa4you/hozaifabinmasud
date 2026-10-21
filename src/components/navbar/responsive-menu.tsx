import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { LuArrowRight, LuDownload } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import { MenuItem } from '@/hooks/use-menu';
import { RESUME_PDF } from '@/lib/links';
import { cn } from '@/lib/utils';

interface ResponsiveMenuProps {
   id: string;
   isOpen: boolean;
   onClose: () => void;
   onNavigate: () => void;
   items: MenuItem[];
   activeId: string | null;
}

const ResponsiveMenu = ({
   id,
   isOpen,
   onClose,
   onNavigate,
   items,
   activeId,
}: ResponsiveMenuProps) => {
   const firstLinkRef = useRef<HTMLAnchorElement>(null);

   useEffect(() => {
      if (!isOpen) return;

      firstLinkRef.current?.focus();
      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKeyDown);

      // Keep the page behind the panel from scrolling
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
         document.body.style.overflow = previousOverflow;
      };
   }, [isOpen, onClose]);

   return (
      <div
         id={id}
         inert={!isOpen}
         className={cn(
            'fixed inset-x-0 top-16 bottom-0 z-40 border-t border-line bg-bg-sunken transition-[opacity,translate] duration-300 ease-out-expo lg:hidden',
            isOpen
               ? 'translate-y-0 opacity-100'
               : 'pointer-events-none -translate-y-2 opacity-0',
         )}
      >
         <nav
            aria-label="Mobile"
            className="container flex h-full flex-col py-6"
         >
            <ul>
               {items.map((item, index) => (
                  <li key={item.href}>
                     <Link
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        onClick={onNavigate}
                        aria-current={
                           item.sectionId === activeId ? 'location' : undefined
                        }
                        className="flex h-14 items-center justify-between border-b border-line font-mono text-lg text-strong transition-colors hover:text-primary-soft aria-[current=location]:text-primary-soft"
                     >
                        {item.name}
                        <LuArrowRight
                           aria-hidden
                           className="size-4 text-muted"
                        />
                     </Link>
                  </li>
               ))}
            </ul>
            <a
               href={RESUME_PDF}
               download
               onClick={onNavigate}
               className={cn(
                  buttonVariants({ variant: 'primary', size: 'xl' }),
                  'mt-8',
               )}
            >
               <LuDownload aria-hidden />
               Download resume (PDF)
            </a>
         </nav>
      </div>
   );
};

export { ResponsiveMenu };

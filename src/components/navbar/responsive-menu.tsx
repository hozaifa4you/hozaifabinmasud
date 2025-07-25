import { Dispatch, SetStateAction } from 'react';

import Link from 'next/link';

import { FaX } from 'react-icons/fa6';

import { Logo } from '@/components/navbar/logo';
import { Button } from '@/components/ui/button';

import { MenuItem } from '@/hooks/use-menu';

import { cn } from '@/lib/utils';

interface ResponsiveMenuProps {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   items: MenuItem[];
}

const ResponsiveMenu = ({ isOpen, setIsOpen, items }: ResponsiveMenuProps) => {
   return (
      <div
         className={cn(
            'bg-bg-main shadow-primary fixed inset-x-0 top-0 -z-50 w-full -translate-y-96 transform opacity-0 shadow-2xs transition-all duration-150 ease-in-out',
            {
               'z-50 translate-y-0 opacity-100': isOpen,
            },
         )}
      >
         <div className="w-full p-4">
            <div className="flex items-center justify-between gap-5">
               <Logo />
               <Button
                  onClick={() => setIsOpen(false)}
                  size="icon"
                  variant="outline"
               >
                  <FaX />
               </Button>
            </div>

            <menu className="mt-8 grid gap-5 text-lg font-medium">
               {items.map((item) => (
                  <li key={item.id}>
                     <Link
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className="transform transition-all duration-200 ease-in-out hover:scale-105 hover:text-white"
                     >
                        <span className="text-primary">{item.sign}</span>
                        {item.name}
                     </Link>
                  </li>
               ))}
            </menu>
         </div>
      </div>
   );
};

export { ResponsiveMenu };

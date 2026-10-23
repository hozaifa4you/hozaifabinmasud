'use client';

import { IconType } from 'react-icons';
import {
   LuBraces,
   LuFileDown,
   LuFileText,
   LuFolderOpen,
   LuSend,
} from 'react-icons/lu';

import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';

// Icons travel from the server as keys; components can't be serialized
const ICONS = {
   doc: LuFileText,
   folder: LuFolderOpen,
   data: LuBraces,
   send: LuSend,
   download: LuFileDown,
} satisfies Record<string, IconType>;

export type ExplorerEntry = {
   name: string;
   href: string;
   icon: keyof typeof ICONS;
   /** Homepage section this file opens; drives the active highlight */
   sectionId?: string;
   download?: boolean;
   children?: { name: string; href: string }[];
};

// Staggers the one-time "window assembles" entrance
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

const WorkspaceExplorer = ({ entries }: { entries: ExplorerEntry[] }) => {
   const activeId =
      useActiveSection(
         entries.flatMap((entry) => (entry.sectionId ? [entry.sectionId] : [])),
         true,
      ) ?? 'home';

   return (
      <nav
         aria-label="Workspace files"
         className="hidden border-r border-line bg-bg-sunken py-4 lg:block"
      >
         <p className="px-4 pb-3 font-mono text-xs tracking-[0.08em] text-muted uppercase">
            Explorer
         </p>
         <ul data-depth="6" className="font-mono text-ui">
            {entries.map((entry, index) => {
               const Icon = ICONS[entry.icon];
               const isOpen = entry.sectionId === activeId;
               return (
                  <li
                     key={entry.name}
                     className="animate-rise"
                     style={delay(140 + index * 45)}
                  >
                     <a
                        href={entry.href}
                        download={entry.download || undefined}
                        aria-current={isOpen ? 'location' : undefined}
                        className={cn(
                           'flex h-8 items-center gap-2 px-4 transition-colors duration-200 hover:bg-bg-raised hover:text-strong',
                           isOpen ? 'bg-bg-raised text-strong' : 'text-text',
                        )}
                     >
                        <Icon
                           aria-hidden
                           className={cn(
                              'size-4 shrink-0 transition-colors duration-200',
                              isOpen ? 'text-primary' : 'text-muted',
                           )}
                        />
                        {entry.name}
                     </a>
                     {entry.children && (
                        <ul>
                           {entry.children.map((child) => (
                              <li key={child.name}>
                                 <a
                                    href={child.href}
                                    className="flex h-7 items-center truncate pr-4 pl-10 text-muted transition-colors duration-200 hover:bg-bg-raised hover:text-strong"
                                 >
                                    {child.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     )}
                  </li>
               );
            })}
         </ul>
      </nav>
   );
};

export { WorkspaceExplorer };

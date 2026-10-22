'use client';

import Image from 'next/image';
import { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react';
import { LuChevronLeft, LuChevronRight, LuX } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type Screen = { path: string; alt: string; caption?: string };

type ScreenViewerProps = {
   screens: Screen[];
   /** The open screen, or null while the viewer is closed */
   index: number | null;
   onIndexChange: (index: number) => void;
   onClose: () => void;
   label: string;
};

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Screens at full size in a native modal dialog: the browser supplies the top
 * layer, focus trap, Escape and focus return; arrow keys step through.
 */
const ScreenViewer = ({
   screens,
   index,
   onIndexChange,
   onClose,
   label,
}: ScreenViewerProps) => {
   const dialogRef = useRef<HTMLDialogElement>(null);
   const isOpen = index !== null;

   useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      if (isOpen && !dialog.open) dialog.showModal();
      if (!isOpen && dialog.open) dialog.close();
   }, [isOpen]);

   const step = (by: number) => {
      if (index === null) return;
      onIndexChange((index + by + screens.length) % screens.length);
   };

   const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
   };

   // A click on the backdrop or the empty frame around the screen closes
   const handleClick = (event: MouseEvent<HTMLElement>) => {
      if (event.target === event.currentTarget) onClose();
   };

   const screen = index === null ? null : screens[index];
   const control = cn(
      buttonVariants({ variant: 'default', size: 'icon' }),
      'size-11 bg-bg-sunken [&_svg]:size-5',
   );

   return (
      <dialog
         ref={dialogRef}
         aria-label={`${label} screens`}
         onClose={onClose}
         onKeyDown={handleKeyDown}
         onClick={handleClick}
         className="m-0 size-full max-h-none max-w-none border-0 bg-transparent p-0 text-text opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 ease-out-expo backdrop:bg-bg-sunken open:flex open:opacity-100 starting:open:opacity-0"
      >
         {screen && index !== null && (
            <div
               onClick={handleClick}
               className="container flex w-full flex-col py-4 sm:py-6"
            >
               <div className="flex items-center justify-between gap-4">
                  <p
                     className="font-mono text-sm text-muted"
                     aria-live="polite"
                  >
                     <span className="text-strong">{pad(index + 1)}</span>
                     {' / '}
                     {pad(screens.length)}
                  </p>
                  <button
                     type="button"
                     onClick={onClose}
                     aria-label="Close"
                     className={control}
                  >
                     <LuX aria-hidden />
                  </button>
               </div>

               <figure className="my-4 flex min-h-0 flex-1 flex-col gap-4 sm:my-6">
                  <div className="relative min-h-0 flex-1">
                     <Image
                        key={screen.path}
                        src={screen.path}
                        alt={screen.alt}
                        fill
                        sizes="(min-width: 1120px) 1120px, 100vw"
                        className="animate-wipe object-contain"
                     />
                  </div>
                  {screen.caption && (
                     <figcaption className="mx-auto max-w-[65ch] text-center text-body text-pretty text-strong">
                        {screen.caption}
                     </figcaption>
                  )}
               </figure>

               {screens.length > 1 && (
                  <div className="flex items-center justify-center gap-3">
                     <button
                        type="button"
                        onClick={() => step(-1)}
                        aria-label="Previous screen"
                        className={control}
                     >
                        <LuChevronLeft aria-hidden />
                     </button>
                     <button
                        type="button"
                        onClick={() => step(1)}
                        aria-label="Next screen"
                        className={control}
                     >
                        <LuChevronRight aria-hidden />
                     </button>
                  </div>
               )}
            </div>
         )}
      </dialog>
   );
};

export { ScreenViewer };

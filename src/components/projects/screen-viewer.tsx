'use client';

import Image from 'next/image';
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { LuChevronLeft, LuChevronRight, LuX } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type Screen = {
   path: string;
   alt: string;
   caption?: string;
   /** The `sizes` its thumbnail on the page uses: that file is already
    * loaded, so it stands in while the full-size one arrives */
   thumbSizes?: string;
};

type ScreenViewerProps = {
   screens: Screen[];
   /** The open screen, or null while the viewer is closed */
   index: number | null;
   onIndexChange: (index: number) => void;
   onClose: () => void;
   /** The dialog's accessible name, e.g. 'Aionlinecourse screens' */
   label: string;
   /** The thumbnail a screen opens from and returns to, when it is on the page */
   originOf?: (index: number) => HTMLElement | null;
};

/** A screen's thumbnail on the page, marked data-screen-index="<index>" */
export const screenOrigin = (index: number) =>
   document.querySelector<HTMLElement>(`[data-screen-index="${index}"]`);

const pad = (n: number) => String(n).padStart(2, '0');
const EASE_OUT_EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)';

const prefersStill = () =>
   window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * The transform that puts the stage's contained image exactly over the
 * thumbnail: the image is centred in the stage (object-contain), and the
 * thumbnail shows the whole image at the same aspect
 */
const transformFrom = (stage: HTMLElement, origin: HTMLElement) => {
   const image = origin.querySelector('img');
   if (!image?.naturalWidth) return null;
   const aspect = image.naturalWidth / image.naturalHeight;
   const box = stage.getBoundingClientRect();
   const from = origin.getBoundingClientRect();
   const width = Math.min(box.width, box.height * aspect);
   if (!width || !from.width) return null;
   const dx = from.left + from.width / 2 - (box.left + box.width / 2);
   const dy = from.top + from.height / 2 - (box.top + box.height / 2);
   return `translate(${dx}px, ${dy}px) scale(${from.width / width})`;
};

/** Whether any of the thumbnail is in view, so the return trip lands on it */
const inView = (element: HTMLElement) => {
   const rect = element.getBoundingClientRect();
   return rect.bottom > 0 && rect.top < window.innerHeight;
};

/**
 * Screens at full size in a native modal dialog: the browser supplies the top
 * layer, focus trap and focus return; arrow keys step through. A screen grows
 * out of its thumbnail when the viewer opens and shrinks back into it when it
 * closes; stepping slides the next screen in from the side it comes from.
 */
const ScreenViewer = ({
   screens,
   index,
   onIndexChange,
   onClose,
   label,
   originOf,
}: ScreenViewerProps) => {
   const dialogRef = useRef<HTMLDialogElement>(null);
   const stageRef = useRef<HTMLDivElement>(null);
   const closingRef = useRef(false);
   // 1 after "next", -1 after "previous", 0 when the viewer has just opened
   const [direction, setDirection] = useState(0);
   const isOpen = index !== null;

   useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      if (isOpen && !dialog.open) {
         delete dialog.dataset.closing;
         dialog.showModal();
         closingRef.current = false;
         // Grow out of the thumbnail it was opened from
         const stage = stageRef.current;
         const origin = index !== null ? originOf?.(index) : null;
         const from = stage && origin ? transformFrom(stage, origin) : null;
         if (stage && from && !prefersStill()) {
            stage.animate([{ transform: from }, { transform: 'none' }], {
               duration: 520,
               easing: EASE_OUT_EXPO,
            });
         }
      }
      if (!isOpen && dialog.open) dialog.close();
      // A step changes the index while the dialog is open: nothing to do here
   }, [isOpen, index, originOf]);

   /** Shrinks the screen back into its thumbnail, then closes */
   const requestClose = () => {
      if (closingRef.current) return;
      closingRef.current = true;
      setDirection(0);
      // The backdrop and controls fade so the thumbnail shows as it lands
      if (dialogRef.current) dialogRef.current.dataset.closing = '';
      const stage = stageRef.current;
      const origin = index !== null ? originOf?.(index) : null;
      const to =
         stage && origin && inView(origin) && !prefersStill()
            ? transformFrom(stage, origin)
            : null;
      if (!stage || !to) {
         onClose();
         return;
      }
      stage
         .animate([{ transform: 'none' }, { transform: to }], {
            duration: 300,
            easing: 'cubic-bezier(0.7, 0, 0.84, 0)',
            fill: 'forwards',
         })
         .finished.then(
            () => onClose(),
            () => onClose(),
         );
   };

   const step = (by: number) => {
      if (index === null) return;
      setDirection(by);
      onIndexChange((index + by + screens.length) % screens.length);
   };

   const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
   };

   // A click on the backdrop or the empty frame around the screen closes
   const handleClick = (event: MouseEvent<HTMLElement>) => {
      if (event.target === event.currentTarget) requestClose();
   };

   const screen = index === null ? null : screens[index];
   const control = cn(
      buttonVariants({ variant: 'default', size: 'icon' }),
      'size-11 bg-bg-sunken [&_svg]:size-5',
   );

   return (
      <dialog
         ref={dialogRef}
         aria-label={label}
         onClose={onClose}
         // Escape shrinks the screen home first, like the close button
         onCancel={(event) => {
            event.preventDefault();
            requestClose();
         }}
         onKeyDown={handleKeyDown}
         onClick={handleClick}
         className="screen-viewer m-0 size-full max-h-none max-w-none border-0 bg-transparent p-0 text-text opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 ease-out-expo open:flex open:opacity-100 starting:open:opacity-0"
      >
         {screen && index !== null && (
            <div
               onClick={handleClick}
               className="container flex w-full flex-col py-4 sm:py-6"
            >
               <div className="viewer-chrome flex items-center justify-between gap-4">
                  {/* A count of one tells the reader nothing */}
                  {screens.length > 1 && (
                     <p
                        className="font-mono text-sm text-muted"
                        aria-live="polite"
                     >
                        <span className="text-strong">{pad(index + 1)}</span>
                        {' / '}
                        {pad(screens.length)}
                     </p>
                  )}
                  <button
                     type="button"
                     onClick={requestClose}
                     aria-label="Close"
                     className={cn(control, 'ml-auto')}
                  >
                     <LuX aria-hidden />
                  </button>
               </div>

               <figure className="my-4 flex min-h-0 flex-1 flex-col gap-4 sm:my-6">
                  <div ref={stageRef} className="relative min-h-0 flex-1">
                     {/* Keyed per screen so a step replays its slide */}
                     <div
                        key={screen.path}
                        className={cn(
                           'absolute inset-0',
                           direction > 0 && 'animate-screen-next',
                           direction < 0 && 'animate-screen-prev',
                        )}
                     >
                        {screen.thumbSizes && (
                           <Image
                              src={screen.path}
                              alt=""
                              aria-hidden
                              fill
                              sizes={screen.thumbSizes}
                              className="object-contain"
                           />
                        )}
                        <Image
                           src={screen.path}
                           alt={screen.alt}
                           fill
                           sizes="(min-width: 1120px) 1120px, 100vw"
                           className="object-contain"
                        />
                     </div>
                  </div>
                  {screen.caption && (
                     <figcaption className="viewer-chrome mx-auto max-w-[65ch] text-center text-body text-pretty text-strong">
                        {screen.caption}
                     </figcaption>
                  )}
               </figure>

               {screens.length > 1 && (
                  <div className="viewer-chrome flex items-center justify-center gap-3">
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

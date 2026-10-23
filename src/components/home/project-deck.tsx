'use client';

import { useEffect, useRef } from 'react';

import type { Deck } from '@/lib/project-deck';
import type { ProjectView } from '@/lib/project-view';

/** How far the deck reaches above the screenshot, in px */
const DECK_RISE = 44;

// One deck for the page: the explorer's panel remounts on every selection,
// and the deck carries over so cards glide between slots instead of resetting
let deck: Deck | null = null;
let loading: Promise<Deck | null> | null = null;

const loadDeck = (projects: ProjectView[]) => {
   loading ??= import('@/lib/project-deck').then(({ createDeck }) => {
      const css = getComputedStyle(document.documentElement);
      const color = (name: string) => css.getPropertyValue(name).trim();
      deck = createDeck(
         projects.map(({ slug, image }) => ({ slug, image })),
         {
            bg: color('--color-bg-main'),
            line: color('--color-line'),
            sunken: color('--color-bg-sunken'),
            lineStrong: color('--color-line-strong'),
            muted: color('--color-muted'),
         },
         window.matchMedia('(prefers-reduced-motion: reduce)').matches,
         DECK_RISE,
      );
      return deck;
   });
   return loading;
};

/** The pointer's eased position over the screenshot, from its TiltSurface */
export const tiltDeck = (x: number, y: number) => deck?.tilt(x, y);
/** A mouse over the screenshot fans the deck */
export const fanDeck = (on: boolean) => {
   if (window.matchMedia('(hover: hover) and (pointer: fine)').matches)
      deck?.hover(on);
};

type ProjectDeckProps = {
   projects: ProjectView[];
   selectedIndex: number;
   onSelect: (index: number) => void;
};

/**
 * The projects after the chosen one, standing back in depth behind its
 * screenshot (three.js, loaded once the projects are near). Decoration for
 * the eye only: the tabs remain the way to choose, so it is hidden from
 * assistive tech. Below md, or without WebGL, nothing renders.
 */
const ProjectDeck = ({
   projects,
   selectedIndex,
   onSelect,
}: ProjectDeckProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const onSelectRef = useRef(onSelect);

   useEffect(() => {
      onSelectRef.current = onSelect;
   });

   useEffect(() => {
      const container = containerRef.current;
      if (!container || !window.matchMedia('(min-width: 768px)').matches)
         return;

      let cancelled = false;
      let attached: Deck | null = null;
      const start = () =>
         loadDeck(projects).then((ready) => {
            if (cancelled || !ready) return;
            ready.onPick((index) => onSelectRef.current(index));
            ready.attach(container);
            ready.select(selectedIndex);
            attached = ready;
         });

      // Load three.js only when the projects come near the viewport
      let observer: IntersectionObserver | null = null;
      if (deck) {
         start();
      } else {
         observer = new IntersectionObserver(
            (entries) => {
               if (entries.some((entry) => entry.isIntersecting)) {
                  observer?.disconnect();
                  start();
               }
            },
            { rootMargin: '600px 0px' },
         );
         observer.observe(container);
      }

      return () => {
         cancelled = true;
         observer?.disconnect();
         attached?.detach(container);
      };
   }, [projects, selectedIndex]);

   return (
      <div
         ref={containerRef}
         aria-hidden
         className="absolute inset-x-0 bottom-0 hidden md:block"
         style={{ top: -DECK_RISE }}
      />
   );
};

export { ProjectDeck };

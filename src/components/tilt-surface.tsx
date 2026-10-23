'use client';

import { ComponentProps, PointerEvent, useEffect, useRef } from 'react';

type TiltSurfaceProps = ComponentProps<'div'> & {
   /** Largest tilt in degrees, reached at the surface's edge */
   max?: number;
   /** Perspective distance in px; shorter reads deeper */
   depth?: number;
};

// Only a mouse tilts the surface: touch scrolls, and reduced motion stays still
const TILT_QUERY =
   '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

// How far each frame closes on the pointer: low enough to glide
const EASE = 0.12;

/**
 * Turns its contents toward the mouse in perspective, flat panes and all, and
 * eases back when the pointer leaves. Descendants marked data-depth="<px>"
 * drift that far with the pointer, so layers read at different depths. The
 * outer box never moves, so the pointer is measured against a steady frame.
 */
const TiltSurface = ({
   max = 4,
   depth = 1400,
   className,
   children,
   ...props
}: TiltSurfaceProps) => {
   const planeRef = useRef<HTMLDivElement>(null);
   const layersRef = useRef<HTMLElement[]>([]);
   const frameRef = useRef(0);
   const current = useRef({ x: 0, y: 0 });
   const target = useRef({ x: 0, y: 0 });

   useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

   const paint = () => {
      const plane = planeRef.current;
      if (!plane) return;
      const now = current.current;
      const goal = target.current;
      now.x += (goal.x - now.x) * EASE;
      now.y += (goal.y - now.y) * EASE;

      const settled =
         Math.abs(goal.x - now.x) < 0.0005 && Math.abs(goal.y - now.y) < 0.0005;
      if (settled) {
         now.x = goal.x;
         now.y = goal.y;
      }

      // x and y run from -0.5 to 0.5: the side under the pointer comes forward
      const resting = settled && now.x === 0 && now.y === 0;
      plane.style.transform = resting
         ? ''
         : `perspective(${depth}px) rotateX(${(now.y * 2 * max).toFixed(3)}deg) rotateY(${(now.x * -2 * max).toFixed(3)}deg)`;
      // Promoted only while moving: once it settles, even at a held angle,
      // the browser re-rasterizes the text crisp in that pose
      plane.style.willChange = settled ? '' : 'transform';
      for (const layer of layersRef.current) {
         const offset = Number(layer.dataset.depth) || 0;
         layer.style.translate = resting
            ? ''
            : `${(now.x * offset).toFixed(2)}px ${(now.y * offset).toFixed(2)}px`;
      }

      frameRef.current = settled ? 0 : requestAnimationFrame(paint);
   };

   const run = () => {
      if (!frameRef.current) frameRef.current = requestAnimationFrame(paint);
   };

   const handleEnter = (event: PointerEvent<HTMLDivElement>) => {
      props.onPointerEnter?.(event);
      layersRef.current = Array.from(
         planeRef.current?.querySelectorAll<HTMLElement>('[data-depth]') ?? [],
      );
   };

   const handleMove = (event: PointerEvent<HTMLDivElement>) => {
      props.onPointerMove?.(event);
      if (
         event.pointerType !== 'mouse' ||
         !window.matchMedia(TILT_QUERY).matches
      )
         return;
      const rect = event.currentTarget.getBoundingClientRect();
      target.current = {
         x: (event.clientX - rect.left) / rect.width - 0.5,
         y: (event.clientY - rect.top) / rect.height - 0.5,
      };
      run();
   };

   const handleLeave = (event: PointerEvent<HTMLDivElement>) => {
      props.onPointerLeave?.(event);
      target.current = { x: 0, y: 0 };
      run();
   };

   return (
      <div
         {...props}
         className={className}
         onPointerEnter={handleEnter}
         onPointerMove={handleMove}
         onPointerLeave={handleLeave}
      >
         <div ref={planeRef} className="h-full">
            {children}
         </div>
      </div>
   );
};

export { TiltSurface };

import { useEffect, useState } from 'react';

/** Tracks which of the given section ids sits in the middle of the viewport. */
const useActiveSection = (ids: string[], enabled: boolean) => {
   const [active, setActive] = useState<string | null>(null);
   const idsKey = ids.join(',');

   useEffect(() => {
      if (!enabled) return;

      const elements = idsKey
         .split(',')
         .map((id) => document.getElementById(id))
         .filter((el): el is HTMLElement => el !== null);

      const observer = new IntersectionObserver(
         (entries) => {
            for (const entry of entries) {
               if (entry.isIntersecting) setActive(entry.target.id);
            }
         },
         // A thin band across the middle of the screen decides the winner
         { rootMargin: '-45% 0px -50% 0px' },
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
   }, [idsKey, enabled]);

   return enabled ? active : null;
};

export { useActiveSection };

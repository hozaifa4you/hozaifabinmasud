/** A real page the 404 can point a broken path to */
export interface PageTarget {
   /** Its workspace name in the fix row: a file name or a project slug */
   key: string;
   href: string;
   /** One line on what is there */
   note: string;
   /** Path segments that should lead here */
   names: string[];
}

// Edit distance, kept to two rows
const distance = (a: string, b: string) => {
   let previous = Array.from({ length: b.length + 1 }, (_, j) => j);
   for (let i = 1; i <= a.length; i++) {
      const current = [i];
      for (let j = 1; j <= b.length; j++) {
         current[j] = Math.min(
            previous[j] + 1,
            current[j - 1] + 1,
            previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
         );
      }
      previous = current;
   }
   return previous[b.length];
};

const similarity = (a: string, b: string) =>
   1 - distance(a, b) / Math.max(a.length, b.length, 1);

const segmentsOf = (path: string) => {
   let decoded = path;
   try {
      decoded = decodeURIComponent(path);
   } catch {
      // A malformed escape: match on the raw path
   }
   return decoded
      .toLowerCase()
      .split('/')
      .map((segment) => segment.replace(/\.(html?|php|aspx?)$/, '').trim())
      .filter(Boolean);
};

const MATCH = 0.6;
const FIX_COUNT = 3;

/**
 * The quick fixes for a path that resolved nowhere: the closest targets by
 * edit distance against each segment (the last segment counts most), then
 * the fallbacks, always FIX_COUNT long. Without a path, only the fallbacks.
 */
export const getQuickFixes = (
   path: string | null,
   targets: PageTarget[],
   fallbacks: string[],
) => {
   const segments = path ? segmentsOf(path) : [];
   const matches = targets
      .map((target) => {
         let score = 0;
         segments.forEach((segment, index) => {
            const weight = index === segments.length - 1 ? 1 : 0.85;
            for (const name of target.names) {
               score = Math.max(score, similarity(segment, name) * weight);
            }
         });
         return { target, score };
      })
      .filter(({ score }) => score >= MATCH)
      .sort((a, b) => b.score - a.score)
      .map(({ target }) => target);

   const fixes: PageTarget[] = [];
   const fallbackTargets = fallbacks.flatMap(
      (key) => targets.find((target) => target.key === key) ?? [],
   );
   for (const target of [...matches, ...fallbackTargets]) {
      if (fixes.length === FIX_COUNT) break;
      if (!fixes.includes(target)) fixes.push(target);
   }
   return fixes;
};

/** The path as typed, for display */
export const displayPath = (path: string) => {
   try {
      return decodeURIComponent(path);
   } catch {
      return path;
   }
};

import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// The theme's named type scale (globals.css). Unknown `text-*` classes read as
// colours, so without this `text-ui` and a text colour cancel each other out
const twMerge = extendTailwindMerge({
   extend: {
      classGroups: {
         'font-size': [
            {
               text: ['ui', 'control', 'body', 'lead', 'headline', 'display'],
            },
         ],
      },
   },
});

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function calculateYearsFromDate(dateStr: string) {
   const [day, month, year] = dateStr.split('/').map(Number);
   const startDate = new Date(year, month - 1, day);
   const now = new Date();

   let months =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

   if (now.getDate() < startDate.getDate()) {
      months -= 1;
   }

   const yearsWithDecimal = months / 12;

   return yearsWithDecimal.toFixed(1);
}

const HTML_ESCAPES: Record<string, string> = {
   '&': '&amp;',
   '<': '&lt;',
   '>': '&gt;',
   '"': '&quot;',
   "'": '&#39;',
};

export function escapeHtml(value: string) {
   return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

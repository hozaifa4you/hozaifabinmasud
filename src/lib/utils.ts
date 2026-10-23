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

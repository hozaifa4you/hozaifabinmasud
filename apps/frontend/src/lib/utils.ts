import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

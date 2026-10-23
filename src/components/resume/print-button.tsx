'use client';

import { LuPrinter } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/** Prints the page; the print stylesheet turns it into a plain A4 CV */
const PrintButton = ({ className }: { className?: string }) => (
   <button
      type="button"
      onClick={() => window.print()}
      className={cn(
         buttonVariants({ variant: 'default', size: 'lg' }),
         className,
      )}
   >
      <LuPrinter aria-hidden />
      Print
   </button>
);

export { PrintButton };

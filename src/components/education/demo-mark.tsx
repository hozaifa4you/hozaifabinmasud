import { cn } from '@/lib/utils';

/**
 * Marks a sample education or training entry wherever it shows. Demo entries
 * never reach the production site, so this is only seen locally and on
 * previews, where it tells the owner which entries still need real details.
 */
const DemoMark = ({ className }: { className?: string }) => (
   <span
      className={cn(
         'border border-muted/40 bg-muted/10 px-1.5 font-mono text-xs leading-5 text-muted',
         className,
      )}
   >
      demo
   </span>
);

export { DemoMark };

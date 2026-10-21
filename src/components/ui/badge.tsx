import { cn } from '@/lib/utils';

/** Static, non-interactive tag. Colours follow the syntax roles in DESIGN.md. */
export const Badge = ({
   text,
   variant = 'default',
}: {
   text: string;
   variant?: 'default' | 'accent' | 'gradient' | 'active' | 'done';
}) => (
   <span
      className={cn(
         'inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-xs leading-5',
         {
            'border-primary/40 bg-primary/10 text-primary-soft':
               variant === 'default' || variant === 'gradient',
            'border-info/40 bg-info/10 text-info': variant === 'accent',
            'border-success/40 bg-success/10 text-success':
               variant === 'active',
            'border-line bg-bg-raised text-text': variant === 'done',
         },
      )}
   >
      {variant === 'active' && (
         <span aria-hidden className="size-1.5 rounded-full bg-success" />
      )}
      {text}
   </span>
);

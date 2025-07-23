import { cn } from '@/lib/utils';

export const Badge = ({
   text,
   variant = 'default',
}: {
   text: string;
   variant?: 'default' | 'accent' | 'gradient' | 'active' | 'done';
}) => (
   <span
      className={cn(
         'inline-flex cursor-pointer items-center rounded-full px-3 py-1 text-xs font-medium duration-200 not-only-of-type:transition-all hover:scale-105',
         {
            'bg-primary/15 text-primary': variant === 'default',
            'border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300':
               variant === 'accent',
            'border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300':
               variant === 'gradient',
            'border border-emerald-500/30 bg-emerald-500/20 text-emerald-300':
               variant === 'active',
            'border border-blue-500/30 bg-blue-500/20 text-blue-300':
               variant === 'done',
         },
      )}
   >
      {variant === 'active' && (
         <span className="mr-1 block size-1.5 animate-pulse rounded-full bg-emerald-500"></span>
      )}{' '}
      {text}
   </span>
);

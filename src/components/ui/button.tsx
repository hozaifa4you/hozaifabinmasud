import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const buttonVariants = cva(
   'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 border font-medium leading-none whitespace-nowrap transition-[color,background-color,border-color] duration-200 ease-out-expo select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
   {
      variants: {
         variant: {
            // Filled orchid: the single primary action in a view
            primary:
               'border-primary bg-primary text-primary-ink hover:border-primary-soft hover:bg-primary-soft',
            // Neutral frame for secondary actions
            default:
               'border-line-strong bg-transparent text-strong hover:border-text hover:bg-bg-raised',
            secondary:
               'border-line bg-bg-raised text-strong hover:border-line-strong',
            // Orchid frame: an accented secondary action
            outline:
               'border-primary bg-transparent text-strong hover:bg-primary/15',
            outlineSecondary: 'border-primary bg-primary/15 text-strong',
            ghost: 'border-transparent bg-transparent text-text hover:bg-bg-raised hover:text-strong',
            link: 'border-transparent bg-transparent text-strong underline-offset-4 hover:text-primary-soft hover:underline',
         },
         size: {
            sm: 'h-8 px-3 text-sm',
            default: 'h-10 px-4 text-control',
            lg: 'h-11 px-5 text-base',
            xl: 'h-12 px-6 text-base',
            icon: 'size-10',
            'icon-sm': 'size-8',
         },
      },
      defaultVariants: {
         variant: 'default',
         size: 'default',
      },
   },
);

const Button = ({
   type = 'button',
   children,
   className,
   size,
   variant,
   ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) => {
   return (
      <button
         type={type}
         className={cn(buttonVariants({ variant, size, className }))}
         {...props}
      >
         {children}
      </button>
   );
};

export { Button };

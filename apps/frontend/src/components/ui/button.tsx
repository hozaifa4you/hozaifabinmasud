import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
   'inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 border font-medium leading-none text-base transition-all duration-300 ease-in-out outline-0 cursor-pointer max-h-[37px]',
   {
      variants: {
         variant: {
            default:
               'bg-transparent shadow-xs border-text text-text hover:text-white hover:border-white hover:bg-text/20',
            secondary:
               'shadow-xs border-text text-text hover:text-white hover:border-white bg-text/20',
            outline: 'border-primary text-white hover:bg-primary/20',
            outlineSecondary: 'border-primary text-white bg-primary/20',
            link: 'border-none text-white hover:text-primary',
         },
         size: {
            default: '',
            lg: 'py-4',
            xl: 'py-5',
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

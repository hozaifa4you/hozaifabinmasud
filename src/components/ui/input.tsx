import React, { InputHTMLAttributes, useId } from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   label: React.ReactNode;
   /** Shown under the field and linked with aria-describedby */
   error?: string;
   className?: string;
   containerClassName?: string;
}

export const fieldClassName =
   'block w-full border border-line-strong bg-bg-sunken px-3 text-control text-strong transition-colors duration-200 ease-out-expo placeholder:text-muted hover:border-text focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none aria-invalid:border-danger aria-invalid:focus:ring-danger';

const Input = ({
   label,
   error,
   className,
   containerClassName,
   id,
   type = 'text',
   ...rest
}: InputProps) => {
   const generatedId = useId();
   const inputId = id ?? generatedId;
   const errorId = `${inputId}-error`;

   return (
      <div className={cn('grid gap-2', containerClassName)}>
         <label htmlFor={inputId} className="text-sm font-medium text-strong">
            {label}
         </label>
         <input
            {...rest}
            type={type}
            id={inputId}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : rest['aria-describedby']}
            className={cn(fieldClassName, 'h-11', className)}
         />
         {/* Keyed on the message, so a new one wipes in as the field turns red */}
         {error && (
            <p
               key={error}
               id={errorId}
               className="animate-wipe text-sm text-danger"
            >
               {error}
            </p>
         )}
      </div>
   );
};

export { Input };

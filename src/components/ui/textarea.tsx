import { TextareaHTMLAttributes, useId } from 'react';

import { fieldClassName } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   label: React.ReactNode;
   /** Shown under the field and linked with aria-describedby */
   error?: string;
   className?: string;
   containerClassName?: string;
}

export const Textarea = ({
   label,
   error,
   className,
   containerClassName,
   id,
   rows = 5,
   ...rest
}: TextareaProps) => {
   const generatedId = useId();
   const textareaId = id ?? generatedId;
   const errorId = `${textareaId}-error`;

   return (
      <div className={cn('grid gap-2', containerClassName)}>
         <label
            htmlFor={textareaId}
            className="text-sm font-medium text-strong"
         >
            {label}
         </label>
         <textarea
            {...rest}
            id={textareaId}
            rows={rows}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : rest['aria-describedby']}
            className={cn(fieldClassName, 'py-2.5 leading-relaxed', className)}
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

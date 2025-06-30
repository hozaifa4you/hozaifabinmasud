import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   label: React.ReactNode;
   className?: string;
   containerClassName?: string;
}

export const Textarea = ({
   label,
   className,
   containerClassName,
   ...rest
}: TextareaProps) => {
   return (
      <div className={`relative ${containerClassName}`}>
         <textarea
            {...rest}
            id="floating_outlined"
            className={`peer border-text text-text block w-full appearance-none border-1 bg-transparent px-2.5 pt-4 pb-2.5 text-sm focus:border-white focus:ring-0 focus:outline-none ${className}`}
            placeholder=" "
            rows={4}
         />
         <label
            htmlFor="floating_outlined"
            className="bg-bg-main text-text absolute start-1 top-1.5 z-10 origin-[0] scale-100 transform px-2 duration-300 peer-focus:-translate-y-4 peer-focus:scale-100 peer-focus:px-2 peer-focus:font-medium peer-focus:text-white"
         >
            {label}
         </label>
      </div>
   );
};

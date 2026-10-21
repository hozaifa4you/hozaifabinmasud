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
            className={`peer block w-full appearance-none border-1 border-text bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-text focus:border-white focus:ring-0 focus:outline-none ${className}`}
            placeholder=" "
            rows={4}
         />
         <label
            htmlFor="floating_outlined"
            className="absolute inset-s-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-bg-main px-2 text-text duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-100 peer-focus:px-2 peer-focus:font-medium peer-focus:text-white"
         >
            {label}
         </label>
      </div>
   );
};

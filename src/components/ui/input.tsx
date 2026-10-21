import React, { InputHTMLAttributes, useId } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   label: React.ReactNode;
   className?: string;
   containerClassName?: string;
}

const Input = ({
   label,
   className,
   containerClassName,
   id,
   type = 'text',
   ...rest
}: InputProps) => {
   const generatedId = useId();
   const inputId = id ?? generatedId;

   return (
      <div className={`relative ${containerClassName}`}>
         <input
            {...rest}
            type={type}
            id={inputId}
            className={`peer block w-full appearance-none border-1 border-text bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-text focus:border-white focus:ring-0 focus:outline-none ${className}`}
            placeholder=" "
         />
         <label
            htmlFor={inputId}
            className="absolute inset-s-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-bg-main px-2 text-text duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-100 peer-focus:px-2 peer-focus:font-medium peer-focus:text-white"
         >
            {label}
         </label>
      </div>
   );
};

export { Input };

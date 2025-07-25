'use client';

import { useState } from 'react';

interface TooltipProps {
   content: string;
   children: React.ReactNode;
   position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
   const [isVisible, setIsVisible] = useState(false);

   const positionClasses = {
      top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
   };

   const arrowClasses = {
      top: 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
      bottom:
         'bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
      left: 'left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
      right: 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent',
   };

   return (
      <div
         className="relative inline-block"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}
      >
         {children}

         <div
            className={`tooltip-content absolute z-40 px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out ${positionClasses[position]} ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'} `}
            style={{
               backgroundColor: 'var(--color-bg-main)',
               color: 'var(--color-text)',
               border: '1px solid var(--color-text)',
               boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
               minWidth: 'max-content',
               maxWidth: '200px',
            }}
         >
            {content}

            {/* Improved Arrow */}
            <div
               className={`absolute ${arrowClasses[position]}`}
               style={{
                  width: 0,
                  height: 0,
                  ...(position === 'top' && {
                     borderLeft: '8px solid transparent',
                     borderRight: '8px solid transparent',
                     borderTop: '8px solid var(--color-text)',
                     top: '100%',
                     left: '50%',
                     transform: 'translateX(-50%)',
                  }),
                  ...(position === 'bottom' && {
                     borderLeft: '8px solid transparent',
                     borderRight: '8px solid transparent',
                     borderBottom: '8px solid var(--color-text)',
                     bottom: '100%',
                     left: '50%',
                     transform: 'translateX(-50%)',
                  }),
                  ...(position === 'left' && {
                     borderTop: '8px solid transparent',
                     borderBottom: '8px solid transparent',
                     borderLeft: '8px solid var(--color-text)',
                     left: '100%',
                     top: '50%',
                     transform: 'translateY(-50%)',
                  }),
                  ...(position === 'right' && {
                     borderTop: '8px solid transparent',
                     borderBottom: '8px solid transparent',
                     borderRight: '8px solid var(--color-text)',
                     right: '100%',
                     top: '50%',
                     transform: 'translateY(-50%)',
                  }),
               }}
            />

            {/* Inner arrow for better definition */}
            <div
               className={`absolute ${arrowClasses[position]}`}
               style={{
                  width: 0,
                  height: 0,
                  ...(position === 'top' && {
                     borderLeft: '6px solid transparent',
                     borderRight: '6px solid transparent',
                     borderTop: '6px solid var(--color-bg-main)',
                     top: '100%',
                     left: '50%',
                     transform: 'translateX(-50%) translateY(-1px)',
                  }),
                  ...(position === 'bottom' && {
                     borderLeft: '6px solid transparent',
                     borderRight: '6px solid transparent',
                     borderBottom: '6px solid var(--color-bg-main)',
                     bottom: '100%',
                     left: '50%',
                     transform: 'translateX(-50%) translateY(1px)',
                  }),
                  ...(position === 'left' && {
                     borderTop: '6px solid transparent',
                     borderBottom: '6px solid transparent',
                     borderLeft: '6px solid var(--color-bg-main)',
                     left: '100%',
                     top: '50%',
                     transform: 'translateY(-50%) translateX(-1px)',
                  }),
                  ...(position === 'right' && {
                     borderTop: '6px solid transparent',
                     borderBottom: '6px solid transparent',
                     borderRight: '6px solid var(--color-bg-main)',
                     right: '100%',
                     top: '50%',
                     transform: 'translateY(-50%) translateX(1px)',
                  }),
               }}
            />
         </div>
      </div>
   );
}

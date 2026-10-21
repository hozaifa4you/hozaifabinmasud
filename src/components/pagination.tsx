'use client';

import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';

import { Button } from './ui/button';

interface PaginationProps {
   isLoading?: boolean;
   onPageChange?: () => void;
}

const Pagination = ({ isLoading = false }: PaginationProps) => {
   const [loading, setLoading] = useState(isLoading);

   const startLoading = () => {
      setLoading(true);
   };

   useEffect(() => {
      let timeout: NodeJS.Timeout;

      if (loading) {
         timeout = setTimeout(() => {
            setLoading(false);
         }, 3000);
      }

      return () => clearTimeout(timeout);
   }, [loading]);

   return (
      <div className="my-10 flex justify-center">
         {loading ? (
            <button
               className="flex items-center space-x-2 border border-primary bg-primary/10 px-4 py-2 text-white"
               disabled
            >
               <FaSpinner className="h-4 w-4 animate-spin text-primary" />
               <span>
                  <span className="text-primary">@</span>loading...
               </span>
            </button>
         ) : (
            <Button
               onClick={startLoading}
               className="!gap-0"
               variant="outlineSecondary"
            >
               <span className="text-primary">#</span>load_more
            </Button>
         )}
      </div>
   );
};

export { Pagination };

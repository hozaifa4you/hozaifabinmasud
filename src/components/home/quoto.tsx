import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Quote = () => {
   return (
      <div className="m-auto w-full max-w-[725px] px-2.5">
         <div className="relative w-full border border-text bg-transparent p-4 md:p-6 lg:p-8">
            <span className="text-lg leading-none font-medium md:text-xl">
               Turning coffee into clean code — one bug at a time...
            </span>

            <span className="absolute -top-3.5 left-2.5 flex h-7 w-10 items-center justify-center bg-bg-main">
               <FaQuoteLeft />
            </span>
            <span className="absolute right-2.5 -bottom-3.5 flex h-7 w-10 items-center justify-center bg-bg-main">
               <FaQuoteRight />
            </span>
         </div>
         <span className="ml-auto block size-fit border border-t-0 border-text p-3 text-lg md:p-4 md:text-xl">
            - Dr. AI
         </span>
      </div>
   );
};

export { Quote };

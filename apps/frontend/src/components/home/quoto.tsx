import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Quote = () => {
   return (
      <div className="m-auto w-full max-w-[725px]">
         <div className="border-text relative w-full border bg-transparent p-8">
            <span className="text-xl leading-none font-medium">
               Turning coffee into clean code — one bug at a time...
            </span>

            <span className="bg-bg-main absolute -top-3.5 left-2.5 flex h-7 w-10 items-center justify-center">
               <FaQuoteLeft />
            </span>
            <span className="bg-bg-main absolute right-2.5 -bottom-3.5 flex h-7 w-10 items-center justify-center">
               <FaQuoteRight />
            </span>
         </div>
         <span className="border-text ml-auto block size-fit border border-t-0 p-4 text-xl">
            - Dr. AI
         </span>
      </div>
   );
};

export { Quote };

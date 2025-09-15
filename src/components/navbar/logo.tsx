import Image from 'next/image';
import Link from 'next/link';

import { appConfig } from '@/config/app.config';

const Logo = () => {
   return (
      <Link
         href="/"
         className="group inline-flex shrink-0 items-center gap-3 transition-transform duration-200 hover:scale-105"
      >
         <div className="relative">
            <div className="bg-primary/20 absolute inset-0 rounded-lg blur-sm transition-all duration-200 group-hover:blur-md"></div>
            <div className="border-primary/30 bg-primary/10 group-hover:bg-primary/20 relative rounded-lg border p-2 transition-colors duration-200">
               <Image
                  src="/assets/logo.svg"
                  alt="Logo"
                  className="size-5 object-contain object-center transition-transform duration-200 group-hover:scale-110"
                  width={20}
                  height={20}
                  quality={100}
               />
            </div>
         </div>
         <span className="group-hover:text-primary font-mono text-xl font-bold text-white transition-colors duration-200">
            <span className="text-primary">[</span>
            {appConfig.NEXT_PUBLIC_FIRST_NAME}
            <span className="text-primary">]</span>
         </span>
      </Link>
   );
};

export { Logo };

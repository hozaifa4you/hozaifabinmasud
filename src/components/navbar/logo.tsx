import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/config/site.config';

const Logo = () => {
   return (
      <Link
         href="/"
         className="group inline-flex shrink-0 items-center gap-2.5 text-strong"
      >
         <Image
            src="/assets/logo.svg"
            alt=""
            width={22}
            height={22}
            className="size-5.5 transition-transform duration-300 ease-out-expo group-hover:rotate-90"
         />
         <span className="text-lg font-semibold tracking-tight">
            {siteConfig.firstName}
         </span>
         <span className="sr-only">, home</span>
      </Link>
   );
};

export { Logo };

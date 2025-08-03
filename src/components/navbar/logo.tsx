import Image from 'next/image';
import Link from 'next/link';

import { appConfig } from '@/config/app.config';

const Logo = () => {
   return (
      <Link href="/" className="inline-flex items-center gap-2">
         <Image
            src="/assets/logo.svg"
            alt="#"
            className="size-4 object-contain object-center"
            width={16}
            height={16}
            quality={100}
         />
         <span className="text-base font-bold text-white">
            {appConfig.FIRST_NAME}
         </span>
      </Link>
   );
};

export { Logo };

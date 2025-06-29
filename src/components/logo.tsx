import Image from "next/image";
import Link from "next/link";

const Logo = () => {
   return (
      <Link href="/" className="inline-flex gap-2 items-center">
         <Image
            src="/assets/logo.svg"
            alt="Hozaifa Bin Masud"
            className="size-4 object-contain object-center"
            width={16}
            height={16}
            quality={100}
         />
         <span className="text-base font-bold text-white">Hozaifa</span>
      </Link>
   );
};

export { Logo };

import { funFacts } from '@/lib/data';
import Image from 'next/image';
import { DotGridLarge, SquareBox } from '../ui/icons';

const FunFactSection = () => {
   return (
      <section className="section-padding relative mb-10">
         <div className="container">
            <h4 className="text-[32px] font-medium text-white">
               <span className="text-primary">#</span>my-fun-facts
            </h4>

            <div className="grid grid-cols-3 gap-5">
               <div className="mt-5 flex flex-wrap gap-4 xl:col-span-2">
                  {funFacts.map((fact) => (
                     <p
                        className="border-text border p-2 leading-none"
                        key={fact.id}
                     >
                        {fact.text}
                     </p>
                  ))}
               </div>

               <div className="xl:col-span-1">
                  <Image
                     src="/assets/logo-box.svg"
                     alt="Logo Box"
                     width={180}
                     height={170}
                  />
               </div>
            </div>
         </div>

         <DotGridLarge className="absolute top-1/3 right-0" />
         <SquareBox className="absolute top-1/2 left-0 rotate-180" />
      </section>
   );
};

export { FunFactSection };

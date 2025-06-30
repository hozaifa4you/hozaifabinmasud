import { ProductType } from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const ProductCard = ({
   image,
   shortDesc,
   slug,
   status,
   technologies,
   title,
}: ProductType) => {
   return (
      <div className="border-text border">
         <div>
            <Image
               src={image}
               alt={title}
               width={330}
               height={200}
               className="h-[200px] w-full object-cover object-center"
            />
         </div>
         <div>
            <div className="border-y-text border-y px-1 py-1.5">
               {technologies.join(', ')}
            </div>

            <div className="p-4">
               <h3 className="text-text-secondary text-2xl font-medium">
                  {title}
               </h3>
               <p className="py-4">{shortDesc}</p>

               <Link href={`/products/${slug}`}>
                  <Button variant="outline">
                     {status} {'<'}~{'>'}
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export { ProductCard };

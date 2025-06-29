import { products } from '@/lib/data';
import { ContentHeader } from './content-header';
import { ProductCard } from './product-card';
import { DotGridIcon, SquareIcon } from '../ui/icons';

const ProductsSection = () => {
   return (
      <section className="relative">
         <div className="section-padding container">
            <ContentHeader
               text="products"
               maxLineWidth="max-w-[510px]"
               buttonText="View All"
               navigateUrl="/products"
            />

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
               {products.map((product) => (
                  <ProductCard {...product} key={product.id} />
               ))}
            </div>
         </div>

         <SquareIcon className="absolute top-1/2 right-0" />
         <DotGridIcon className="absolute top-1/3 -left-12" />
      </section>
   );
};

export { ProductsSection };

import Link from 'next/link';

export type BreadcrumbItem = {
   title: string;
   href: string;
   /** View transition types for the navigation, e.g. ['nav-back'] */
   transitionTypes?: string[];
};

/** The path back up the site; the last item is the current page. */
const BreadcrumbNav = ({
   items,
   className,
}: {
   items: BreadcrumbItem[];
   className?: string;
}) => (
   <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-y-1 font-mono text-sm text-muted">
         {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
               <li key={item.title} className="flex items-center">
                  {isCurrent ? (
                     <span
                        aria-current="page"
                        className="font-medium text-strong"
                     >
                        {item.title}
                     </span>
                  ) : (
                     <Link
                        href={item.href}
                        transitionTypes={item.transitionTypes}
                        className="transition-colors hover:text-strong"
                     >
                        {item.title}
                     </Link>
                  )}
                  {!isCurrent && (
                     <span aria-hidden className="mx-2 text-line-strong">
                        /
                     </span>
                  )}
               </li>
            );
         })}
      </ol>
   </nav>
);

export { BreadcrumbNav };

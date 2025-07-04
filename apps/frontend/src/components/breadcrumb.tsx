interface BreadcrumbProps {
   title: string;
   subtitle?: string;
}

const Breadcrumb = ({ title, subtitle }: BreadcrumbProps) => {
   return (
      <section className="container my-6">
         <h1 className="text-[32px] font-semibold text-white">
            <span className="text-primary">/</span>
            {title}
         </h1>
         {subtitle && <h2>{subtitle}</h2>}
      </section>
   );
};

export { Breadcrumb };

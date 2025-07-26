import { PropsWithChildren } from 'react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar/navbar';

const Layout = ({ children }: PropsWithChildren) => {
   return (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   );
};

export default Layout;

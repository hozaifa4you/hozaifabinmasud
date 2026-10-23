import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Fira_Code, Fira_Sans } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar/navbar';
import { appConfig } from '@/config/app.config';
import { getLearningHref } from '@/lib/data/education';
import '@/styles/globals.css';

export const metadata: Metadata = {
   title: appConfig.APP_NAME,
   description: `${appConfig.APP_NAME_SHORT} is a full-stack developer who builds web applications end to end and ships AI features in production. Explore projects, work history and the stack behind them.`,
};

const firaSans = Fira_Sans({
   subsets: ['latin'],
   variable: '--font-fira-sans',
   weight: ['400', '500', '600', '700'],
});

const firaCode = Fira_Code({
   subsets: ['latin'],
   variable: '--font-fira-code',
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html
         lang="en"
         data-scroll-behavior="smooth"
         className={`${firaSans.variable} ${firaCode.variable}`}
      >
         <body className="bg-bg-main font-sans text-text antialiased">
            <a
               href="#main"
               className="fixed top-3 left-3 z-60 -translate-y-20 bg-primary px-4 py-2 font-medium text-primary-ink transition-transform focus-visible:translate-y-0 print:hidden"
            >
               Skip to content
            </a>
            <Navbar educationHref={getLearningHref()} />
            <main id="main">{children}</main>
            <Footer />
            <Analytics />
            <SpeedInsights />
         </body>
      </html>
   );
}

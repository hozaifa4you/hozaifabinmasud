import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar/navbar';
import { MaintenanceNotice } from '@/components/ui/maintenance-notice';
import { appConfig } from '@/config/app.config';
import '@/styles/globals.css';

export const metadata: Metadata = {
   title: appConfig.APP_NAME,
   description: `${appConfig.APP_NAME_SHORT} is a skilled full stack developer specializing in building modern, scalable web applications. Explore projects, skills, and expertise in frontend and backend development.`,
};

const firaCode = Fira_Code({
   subsets: ['latin'],
   variable: '--font-main',
   weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" data-scroll-behavior="smooth">
         <body
            className={`bg-bg-main text-text antialiased ${firaCode.className}`}
         >
            <Navbar />
            {/* Maintenance notice for first-time visitors */}
            <MaintenanceNotice />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
         </body>
      </html>
   );
}

import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar/navbar';

import '@/styles/globals.css';

export const metadata: Metadata = {
   title: 'Hozaifa Bin Masud - Full Stack Developer',
   description:
      'Hozaifa Bin Masud is a skilled full stack developer specializing in building modern, scalable web applications. Explore projects, skills, and expertise in frontend and backend development.',
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
      <html lang="en">
         <body
            className={`bg-bg-main text-text antialiased ${firaCode.className}`}
         >
            <Navbar />
            {children}
            <Analytics />
            <Footer />
         </body>
      </html>
   );
}

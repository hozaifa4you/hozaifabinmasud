import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Fira_Code, Fira_Sans } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar/navbar';
import { siteConfig } from '@/config/site.config';
import { getLearningHref } from '@/lib/data/education';
import { siteDescription, siteUrl } from '@/lib/seo';
import '@/styles/globals.css';

// Pages don't set `openGraph`: Next fills its title and description from the
// page's, and a page's own `openGraph` would replace this whole object
export const metadata: Metadata = {
   metadataBase: new URL(siteUrl),
   title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
   description: siteDescription,
   applicationName: siteConfig.name,
   authors: [{ name: siteConfig.name, url: siteUrl }],
   creator: siteConfig.name,
   openGraph: { type: 'website', siteName: siteConfig.name, locale: 'en_US' },
   twitter: { card: 'summary_large_image' },
   robots: {
      googleBot: { 'max-image-preview': 'large', 'max-snippet': -1 },
   },
};

export const viewport: Viewport = {
   themeColor: '#282c33',
   colorScheme: 'dark',
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

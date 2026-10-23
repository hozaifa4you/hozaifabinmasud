import type { Metadata } from 'next';

import { DirectionalPage } from '@/components/directional-page';
import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';
import { DockedStatusBar } from '@/components/home/docked-status-bar';
import { EducationSection } from '@/components/home/education-section';
import { ProjectsSection } from '@/components/home/projects-section';
import { StackSection } from '@/components/home/stack-section';
import { WorkLog } from '@/components/home/work-log';
import { WorkspaceHero } from '@/components/home/workspace-hero';
import { homeJsonLd, toJsonLd } from '@/lib/seo';

// Experience years and role durations are computed from dates; refresh daily
export const revalidate = 86400;

export const metadata: Metadata = {
   alternates: { canonical: '/' },
};

const Home = () => {
   return (
      <>
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: toJsonLd(homeJsonLd()) }}
         />
         <DirectionalPage>
            <WorkspaceHero />
            <ProjectsSection />
            <WorkLog />
            <EducationSection />
            <StackSection />
            <AboutSection />
            <ContactSection />
         </DirectionalPage>
         <DockedStatusBar />
      </>
   );
};

export default Home;

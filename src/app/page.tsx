import { DirectionalPage } from '@/components/directional-page';
import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';
import { DockedStatusBar } from '@/components/home/docked-status-bar';
import { ProjectsSection } from '@/components/home/projects-section';
import { StackSection } from '@/components/home/stack-section';
import { WorkLog } from '@/components/home/work-log';
import { WorkspaceHero } from '@/components/home/workspace-hero';
import { appConfig } from '@/config/app.config';

// Experience years and role durations are computed from dates; refresh daily
export const revalidate = 86400;

const Home = () => {
   return (
      <>
         <DirectionalPage>
            <WorkspaceHero />
            <ProjectsSection />
            <WorkLog />
            <StackSection />
            <AboutSection />
            <ContactSection />
         </DirectionalPage>
         <DockedStatusBar email={appConfig.EMAIL} />
      </>
   );
};

export default Home;

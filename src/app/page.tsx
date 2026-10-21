import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';
import { ProjectsSection } from '@/components/home/projects-section';
import { StackSection } from '@/components/home/stack-section';
import { WorkLog } from '@/components/home/work-log';
import { WorkspaceHero } from '@/components/home/workspace-hero';

// Experience years and role durations are computed from dates; refresh daily
export const revalidate = 86400;

const Home = () => {
   return (
      <>
         <WorkspaceHero />
         <ProjectsSection />
         <WorkLog />
         <StackSection />
         <AboutSection />
         <ContactSection />
      </>
   );
};

export default Home;

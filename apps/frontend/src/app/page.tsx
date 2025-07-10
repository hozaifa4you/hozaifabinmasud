import { AboutMeSection } from '@/components/home/about-me-section';
import { ContactSection } from '@/components/home/contact-section';
import { EducationTrainingSectionV2 } from '@/components/home/education-section-v2';
import { HeroSection } from '@/components/home/hero-section';
import { ProjectsSection } from '@/components/home/projects-section';
import { SkillsSection } from '@/components/home/skills-section';
import { StatsGrid } from '@/components/home/stats-grid';
import { WorksSection } from '@/components/home/works-section';
import { educationStats } from '@/lib/education-data';

const Home = () => {
   return (
      <>
         <HeroSection />
         <ProjectsSection />
         <WorksSection />
         <SkillsSection />
         <EducationTrainingSectionV2 />
         <StatsGrid stats={educationStats} />
         <AboutMeSection />
         <ContactSection />
      </>
   );
};

export default Home;

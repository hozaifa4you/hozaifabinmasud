import { AboutMeSection } from '@/components/home/about-me-section';
import { ContactSection } from '@/components/home/contact-section';
import { EducationNTraining } from '@/components/home/education-section';
import { HeroSection } from '@/components/home/hero-section';
import { ProductsSection } from '@/components/home/products-section';
import { SkillsSection } from '@/components/home/skills-section';

const Home = () => {
   return (
      <>
         <HeroSection />
         <ProductsSection />
         <SkillsSection />
         <EducationNTraining />
         <AboutMeSection />
         <ContactSection />
      </>
   );
};

export default Home;

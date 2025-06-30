import { AboutMeSection } from '@/components/home/about-me';
import { ContactSection } from '@/components/home/contact-section';
import { HeroSection } from '@/components/home/hero-section';
import { ProductsSection } from '@/components/home/products-section';
import { SkillsSection } from '@/components/home/skills-section';

const Home = () => {
   return (
      <>
         <HeroSection />
         <ProductsSection />
         <SkillsSection />
         <AboutMeSection />
         <ContactSection />
      </>
   );
};

export default Home;

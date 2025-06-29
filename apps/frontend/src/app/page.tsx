import { AboutMeSection } from '@/components/home/about-me';
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
      </>
   );
};

export default Home;

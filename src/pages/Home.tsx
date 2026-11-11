import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Differentials } from '../components/sections/Differentials';
import { CatalogPreview } from '../components/sections/CatalogPreview';
import { ColorMatchService } from '../components/sections/ColorMatchService';
import { Brands } from '../components/sections/Brands';
import { Promotions } from '../components/sections/Promotions';
import { Location } from '../components/sections/Location';
import { ContactSection } from '../components/sections/ContactSection';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Differentials />
      <CatalogPreview />
      <ColorMatchService />
      <Brands />
      <Promotions />
      <Location />
      <ContactSection />
    </>
  );
}

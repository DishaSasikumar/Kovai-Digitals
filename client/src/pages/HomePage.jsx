import Hero from '../components/sections/Hero.jsx';
import MarqueeStrip from '../components/MarqueeStrip.jsx';
import About from '../components/sections/About.jsx';
import Services from '../components/sections/Services.jsx';
import GalleryStrip from '../components/sections/GalleryStrip.jsx';
import Clients from '../components/sections/Clients.jsx';
import ReviewsSection from '../components/sections/ReviewsSection.jsx';
import Contact from '../components/sections/Contact.jsx';
import Reach from '../components/sections/Reach.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <About />
      <Services />
      <GalleryStrip />
      <Clients />
      <ReviewsSection />
      <Contact />
      <Reach />
    </>
  );
}

import { Outlet } from 'react-router-dom';
import { useCallback, useState } from 'react';
import Navbar from './Navbar.jsx';
import MobileNav from './MobileNav.jsx';
import Footer from './Footer.jsx';
import ScrollProgress from './ScrollProgress.jsx';
import Preloader from './Preloader.jsx';
import AmbientBackground from './AmbientBackground.jsx';
import CustomCursor from './CustomCursor.jsx';
import ParticleField from './ParticleField.jsx';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useRevealOnScroll();

  const toggleMobile = useCallback(() => {
    setMobileOpen((o) => !o);
  }, []);

  return (
    <>
      <div id="cur" aria-hidden />
      <div id="cur2" aria-hidden />
      <CustomCursor />
      <AmbientBackground />
      <ParticleField />
      <div id="scroll-prog" />
      <Preloader />
      <ScrollProgress />
      <Navbar mobileOpen={mobileOpen} onToggleMobile={toggleMobile} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        className="float-wa"
        href="https://wa.me/919843318431?text=Hi%20Kovai%20Digitals,%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </>
  );
}

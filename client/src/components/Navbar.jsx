import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo.jsx';

const links = [
  { to: '/#home', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/#gallery', label: 'Gallery' },
  { to: '/#reviews', label: 'Reviews' },
  { to: '/#contact', label: 'Contact' },
];

function hashActive(to, pathname, hash) {
  if (!to.includes('#')) return false;
  const [, h] = to.split('#');
  if (pathname !== '/') return false;
  const current = hash || '';
  return current === `#${h}` || (to === '/#home' && !current);
}

export default function Navbar({ mobileOpen, onToggleMobile }) {
  const [sticky, setSticky] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className={sticky ? 'sticky' : undefined}>
      <Link to="/" className="nav-logo" onClick={() => mobileOpen && onToggleMobile()}>
        <BrandLogo className="nav-logo-img" width={80} height={80} />
        <div className="nav-brand">
          <div className="nav-name">Kovai Digital Projectors</div>
          <div className="nav-since">Since 2003 · Coimbatore</div>
        </div>
      </Link>

      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <a href={to} className={hashActive(to, pathname, hash) ? 'active' : ''}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="nav-cta"
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          if (mobileOpen) onToggleMobile();
        }}
      >
        Get a Quote
      </button>

      <button
        type="button"
        className="nav-menu-btn"
        id="menuBtn"
        aria-expanded={mobileOpen}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        onClick={onToggleMobile}
      >
        <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'} />
      </button>
    </nav>
  );
}

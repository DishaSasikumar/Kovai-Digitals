import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const links = [
  { to: '/#home', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#services', label: 'Expertise' },
  { to: '/#gallery', label: 'Gallery' },
  { to: '/#reviews', label: 'Reviews' },
  { to: '/#contact', label: 'Contact' },
];

export default function MobileNav({ open, onClose }) {
  const { pathname, hash } = useLocation();
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 900px)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open && isMobile ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, isMobile]);

  useEffect(() => {
    if (open) onClose();
  }, [pathname, hash, open, onClose]);

  if (!isMobile) return null;

  return (
    <div className={`mobile-nav${open ? ' open' : ''}`} id="mobileNav" aria-hidden={!open}>
      <button type="button" className="mobile-close" onClick={onClose} aria-label="Close menu">
        <i className="fas fa-times" />
      </button>
      {links.map(({ to, label }) => (
        <a key={to} href={to} onClick={onClose}>
          {label}
        </a>
      ))}
    </div>
  );
}

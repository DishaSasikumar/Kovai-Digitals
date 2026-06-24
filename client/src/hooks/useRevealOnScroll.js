import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Mirrors Kovai static IntersectionObserver for .reveal / .reveal-l / .reveal-r → .in
 */
export default function useRevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
    if (!nodes.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}

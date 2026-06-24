import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return undefined;

    const cur = document.getElementById('cur');
    const cur2 = document.getElementById('cur2');
    if (!cur || !cur2) return undefined;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;
    };

    const tick = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cur2.style.left = `${cx}px`;
      cur2.style.top = `${cy}px`;
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}

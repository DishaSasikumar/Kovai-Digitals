import { useEffect, useState } from 'react';

/**
 * When active: animates toward target without ever showing 0.
 * When inactive: null (caller shows "—").
 */
export default function useRollNumber(target, active) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (!active) {
      setValue(null);
      return undefined;
    }

    let raf;
    let start = null;
    const duration = 1700;

    const tick = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      let display = Math.round(eased * target);

      if (p >= 1) {
        display = target;
      } else {
        if (display === 0) display = 1;
        else if (display >= target) display = Math.max(1, target - 1);
      }

      setValue(display);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);

  return value;
}

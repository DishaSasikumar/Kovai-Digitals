import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo.jsx';

export default function Preloader() {
  const [out, setOut] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOut(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="preloader" className={out ? 'out' : ''} aria-hidden={out}>
      <div className="pl-wrap">
        <div className="pl-ring" aria-hidden />
        <div className="pl-inner">
          <BrandLogo className="pl-logo-img" width={64} height={64} />
        </div>
      </div>
      <div className="pl-text">KOVAI DIGITAL</div>
      <div className="pl-bar" aria-hidden>
        <div className="pl-fill" />
      </div>
    </div>
  );
}

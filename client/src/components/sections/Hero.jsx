import { useEffect, useRef, useState } from 'react';
import { heroCorporateImage } from '../../data/siteContent.js';
import useRollNumber from '../../hooks/useRollNumber.js';

/** Rolls 0→target while visible; "—" off-screen, "…" during first ticks (never shows 0). */
function StatNumberScroll({ target, suffix = '+', active }) {
  const n = useRollNumber(target, active);
  if (!active) {
    return <span className="stat-num-pending">—</span>;
  }
  if (n === null) {
    return <span className="stat-num-pending stat-num-pending--pulse">…</span>;
  }
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

export default function Hero() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => setStatsVisible(entry.isIntersecting),
      { threshold: 0.22, rootMargin: '0px 0px -6% 0px' }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden />
      <div className="hero-img-bg" aria-hidden />
      <div className="hero-overlay" aria-hidden />
      <div className="hero-gradient-veil" aria-hidden />
      <div className="hero-grid" aria-hidden />
      <div className="orb orb1" aria-hidden />
      <div className="orb orb2" aria-hidden />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="dot" />
          Coimbatore&apos;s Premier Event Company Since 2003
        </div>
        <h1 className="hero-h1">
          <span className="line-s">A to Z Interior & Corporate</span>
          <span className="line-teal">Fabrication</span>
          <span className="line-w">Experts</span>
        </h1>
        <p className="hero-sub">
          From concept to completion — we create extraordinary spaces, events, and brand experiences that
          leave lasting impressions across Tamil Nadu.
        </p>
        <div className="hero-btns">
          <button
            type="button"
            className="btn-teal"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fas fa-images" /> View Our Work
          </button>
          <a
            href="https://wa.me/919843318431?text=Hi%20Kovai%20Digitals,%20I%20am%20interested%20in%20your%20event%20organization%20services."
            className="btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp" /> WhatsApp Us
          </a>
        </div>
        <div
          ref={statsRef}
          className={`hero-stats hero-stats--centered${statsVisible ? ' hero-stats--live' : ''}`}
        >
          <div className="h-stat">
            <div className="h-stat-n" data-target="20">
              <StatNumberScroll target={20} active={statsVisible} />
            </div>
            <div className="h-stat-l">Years of Excellence</div>
          </div>
          <div className="h-stat">
            <div className="h-stat-n" data-target="500">
              <StatNumberScroll target={500} active={statsVisible} />
            </div>
            <div className="h-stat-l">Events Delivered</div>
          </div>
          <div className="h-stat h-stat--az">
            <div className="h-stat-n">A–Z</div>
            <div className="h-stat-l">Complete Solutions</div>
          </div>
          <div className="h-stat">
            <div className="h-stat-n" data-target="100">
              <StatNumberScroll target={100} active={statsVisible} />
            </div>
            <div className="h-stat-l">Happy Clients</div>
          </div>
        </div>
      </div>
      <div className="hero-frame">
        <img
          className="hero-frame-img"
          src={heroCorporateImage}
          alt="Corporate conference with professional stage lighting and audience"
          width={1600}
          height={2000}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

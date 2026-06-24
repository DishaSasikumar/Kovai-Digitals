import { Link } from 'react-router-dom';
import { expertise } from '../../data/siteContent.js';

export default function Services() {
  return (
    <section className="services sec-pad" id="services">
      <div className="services-header reveal">
        <div>
          <div className="sec-lbl">What We Do</div>
          <h2 className="sec-title">
            Our <em>Expertise</em>
          </h2>
        </div>
        <p className="sec-sub">
          Tap a category to open its dedicated gallery — add your own shoots and reels whenever you are
          ready.
        </p>
      </div>
      <div className="services-grid">
        {expertise.map((ex, i) => (
          <Link
            key={ex.slug}
            to={`/gallery/${ex.slug}`}
            className="svc reveal"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="svc-top-line" aria-hidden />
            <div className="svc-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="svc-icon">
              <i className={`fas ${ex.icon}`} />
            </div>
            <h3 className="svc-title">{ex.title}</h3>
            <p className="svc-desc">{ex.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

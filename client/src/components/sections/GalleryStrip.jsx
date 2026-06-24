import { galleryTiles } from '../../data/siteAssets.js';

export default function GalleryStrip() {
  return (
    <section className="gallery sec-pad" id="gallery">
      <div className="gallery-header reveal">
        <div className="sec-lbl">Our Work</div>
        <h2 className="sec-title">
          Signature <em>Gallery</em>
        </h2>
      </div>
      <div className="gal-grid reveal">
        {galleryTiles.map((t) => (
          <div key={t.src} className="gi">
            <img src={t.src} alt={t.label} width={1200} height={900} loading="lazy" decoding="async" />
            <div className="gi-overlay">
              <div>
                <div className="gi-label">{t.label}</div>
                <div className="gi-sub">{t.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

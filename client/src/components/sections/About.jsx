import { aboutImage } from '../../data/siteContent.js';

export default function About() {
  return (
    <section className="about sec-pad reveal-l" id="about">
      <div className="about-inner">
        <div className="about-visual reveal-l">
          <img
            className="about-main-img"
            src={aboutImage}
            alt="Corporate event audience and presentation"
            width={1600}
            height={1100}
            loading="lazy"
            decoding="async"
          />
          <div className="about-float1">
            <div className="af1-n">2003</div>
            <div className="af1-l">Established</div>
          </div>
          <div className="about-float2">
            <div className="af2-row">
              <div className="af2-dot" />
              <div className="af2-txt">Coimbatore</div>
            </div>
            <div className="af2-big">Trusted by 100+</div>
          </div>
        </div>
        <div className="about-text reveal-r">
          <div className="sec-lbl">Our Story</div>
          <h2 className="sec-title">
            Two Decades of <em>Crafting</em> Memories
          </h2>
          <p className="sec-sub">
            Founded in 2003 in Maniakaranpalayam, Coimbatore, Kovai Digital Projectors has grown into Tamil
            Nadu&apos;s most trusted full-service event fabrication company. We deliver A-to-Z interior
            corporate setups, stage designs, and event productions — with precision and passion.
          </p>
          <div className="about-pills">
            <span className="pill">A-Z Fabrication</span>
            <span className="pill">Interior Design</span>
            <span className="pill">LED Walls</span>
            <span className="pill">Stage Setup</span>
            <span className="pill">Corporate Events</span>
            <span className="pill">Pan-Tamil Nadu</span>
          </div>
          <div className="team-cards">
            <div className="tc">
              <div className="tc-role">Founder &amp; Proprietor</div>
              <div className="tc-name">Sasikumar</div>
            </div>
            <div className="tc">
              <div className="tc-role">Managing Director</div>
              <div className="tc-name">Vijayalakshmi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const WA_URL =
  'https://wa.me/919843318431?text=Hi%20Kovai%20Digitals,%20I%20am%20interested%20in%20your%20event%20organization%20services.%20Could%20you%20please%20provide%20more%20information?';

export default function Reach() {
  return (
    <section className="reach sec-pad" id="reach">
      <div className="reveal reach-head">
        <div className="sec-lbl reach-sec-lbl">
          <span className="reach-lbl-line" />
          Reach Us
        </div>
        <h2 className="sec-title">
          Find Us &amp; <em>Connect</em>
        </h2>
        <p className="sec-sub reach-head-sub">Message us on WhatsApp for instant quotes, site visits, and event planning.</p>
      </div>

      <div className="reach-inner">
        <div className="wa-connect-card reveal-l">
          <div className="wa-connect-glow" aria-hidden />
          <div className="wa-connect-inner">
            <div className="wa-icon-wrap">
              <span className="wa-pulse wa-pulse--1" aria-hidden />
              <span className="wa-pulse wa-pulse--2" aria-hidden />
              <i className="fab fa-whatsapp wa-icon" />
            </div>
            <p className="wa-connect-eyebrow">Fastest response</p>
            <h3 className="wa-connect-title">Chat on WhatsApp</h3>
            <p className="wa-connect-desc">
              Share your event date, venue, and guest count — our team replies within minutes during business hours.
            </p>
            <ul className="wa-connect-perks">
              <li>
                <i className="fas fa-bolt" /> Instant replies
              </li>
              <li>
                <i className="fas fa-calendar-check" /> Free consultation
              </li>
              <li>
                <i className="fas fa-headset" /> 24/7 event support
              </li>
            </ul>
            <a href={WA_URL} className="wa-connect-btn" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp" />
              Start WhatsApp Chat
              <i className="fas fa-arrow-right wa-connect-arrow" />
            </a>
            <p className="wa-connect-phone">
              Or call <a href="tel:+919843318431">+91 98433 18431</a>
            </p>
          </div>
        </div>

        <div className="map-box reveal-r">
          <iframe
            title="Kovai Digital Projectors on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.912794168515!2d76.96538009999999!3d11.045164900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c158e66e2f%3A0x418faa5008d539a7!2sKovai%20Digital%20Projectors!5e0!3m2!1sen!2sin!4v1741276943010!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

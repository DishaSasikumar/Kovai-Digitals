import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <BrandLogo className="footer-logo-img" width={72} height={72} />
          <p>
            Coimbatore&apos;s trusted A–Z interior &amp; corporate fabrication experts since 2003. We build
            extraordinary events and spaces.
          </p>
          <div className="socials">
            <a className="soc" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="soc" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a className="soc" href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
            <a className="soc" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link to="/#home">Home</Link>
            </li>
            <li>
              <Link to="/#services">Services</Link>
            </li>
            <li>
              <Link to="/#about">About Us</Link>
            </li>
            <li>
              <Link to="/#gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/#reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li>
              <Link to="/#services">LED Wall Rental</Link>
            </li>
            <li>
              <Link to="/#services">Rental Appliances</Link>
            </li>
            <li>
              <Link to="/#services">Premium Furniture</Link>
            </li>
            <li>
              <Link to="/#services">LED TVs</Link>
            </li>
            <li>
              <Link to="/gallery/others">Miscellaneous · Others</Link>
            </li>
            <li>
              <Link to="/#services">Event Solutions</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact Info</h5>
          <ul>
            <li>
              <a href="tel:+919843318431">
                <i className="fas fa-phone" style={{ marginRight: 6, color: 'var(--teal)', fontSize: 11 }} />
                +91 98433 18431
              </a>
            </li>
            <li>
              <a href="tel:+919047018431">
                <i className="fas fa-phone" style={{ marginRight: 6, color: 'var(--teal)', fontSize: 11 }} />
                +91 90470 18431
              </a>
            </li>
            <li>
              <a href="mailto:sasi_kovaidigital@yahoo.com" style={{ fontSize: 12, textTransform: 'none' }}>
                <i className="fas fa-envelope" style={{ marginRight: 6, color: 'var(--teal)', fontSize: 11 }} />
                sasi_kovaidigital@yahoo.com
              </a>
            </li>
            <li>
              <Link to="/#contact">
                <i className="fas fa-map-marker-alt" style={{ marginRight: 6, color: 'var(--teal)', fontSize: 11 }} />
                Maniakaranpalayam, CBE — 641006
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom footer-bottom--centered">
        <div className="fc">
          © 2026 <span>Kovai Digital Projectors</span>. All rights reserved. Est. <span>2003</span> · Coimbatore,
          Tamil Nadu.
        </div>
        <div className="fc">
          Founder: <span>Sasikumar</span> · MD: <span>Vijayalakshmi</span>
        </div>
      </div>
    </footer>
  );
}

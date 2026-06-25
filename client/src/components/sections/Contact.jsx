import React from 'react';

const serviceOptions = [
  'LED Wall Rental',
  'Rental Appliances',
  'Premium Furniture',
  'LED TV Rental',
  'Interior Fabrication',
  'Complete Event Solution',
  'Others',
];

export default function Contact() {


 

  return (
    <section className="contact sec-pad" id="contact">
      <div className="contact-inner">
        <div className="reveal-l">
          <div className="sec-lbl">Get in Touch</div>
          <h2 className="sec-title">
            Let&apos;s Plan Your <em>Event</em>
          </h2>
          <p className="sec-sub">
            Share dates, venue, and approximate audience size — we&apos;ll respond with options and a clear
            estimate. We&apos;re based in Coimbatore and serve clients across Tamil Nadu.
          </p>
          <p className="sec-sub contact-enquiry-note">
            When you send an enquiry, your details are saved to our dashboard and WhatsApp opens with a
            pre-filled message so you can confirm instantly.
          </p>
          <div className="contact-info">
            <div className="ci">
              <div className="ci-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>
                <div className="ci-label">Address</div>
                <div className="ci-val">
                  Maniakaranpalayam, Coimbatore,
                  <br />
                  Tamil Nadu — 641 006
                </div>
              </div>
            </div>
            <div className="ci">
              <div className="ci-icon">
                <i className="fas fa-phone" />
              </div>
              <div>
                <div className="ci-label">Phone</div>
                <div className="ci-val">
                  <a href="tel:+919843318431">+91 98433 18431</a>
                  <br />
                  <a href="tel:+919047018431">+91 90470 18431</a>
                </div>
              </div>
            </div>
            <div className="ci">
              <div className="ci-icon">
                <i className="fas fa-envelope" />
              </div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-val">
                  <a href="mailto:sasi_kovaidigital@yahoo.com">sasi_kovaidigital@yahoo.com</a>
                  <br />
                  <a href="mailto:demono_viji@yahoo.com">demono_viji@yahoo.com</a>
                </div>
              </div>
            </div>
            <div className="ci">
              <div className="ci-icon">
                <i className="fas fa-clock" />
              </div>
              <div>
                <div className="ci-label">Hours</div>
                <div className="ci-val">
                  Monday — Saturday: 9:00 AM — 7:00 PM
                  <br />
                  24/7 Event Support*
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="contact-form reveal-r">
  <div className="cf-title">Contact Us</div>

  <p>
    For bookings and enquiries, please contact us directly:
  </p>

  <div className="contact-direct">
    <p>
      📞 <a href="tel:+919843318431">+91 98433 18431</a>
    </p>

    <p>
      📞 <a href="tel:+919047018431">+91 90470 18431</a>
    </p>

    <p>
      ✉️ <a href="mailto:sasi_kovaidigital@yahoo.com">
        sasi_kovaidigital@yahoo.com
      </a>
    </p>

    <p>
      ✉️ <a href="mailto:demono_viji@yahoo.com">
        demono_viji@yahoo.com
      </a>
    </p>
  </div>
</div>
      </div>
    </section>
  );
}

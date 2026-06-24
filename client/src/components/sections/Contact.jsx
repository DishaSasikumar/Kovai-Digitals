import { useState } from 'react';
import { buildEnquiryWhatsAppUrl } from '../../lib/whatsapp.js';

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
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const form = e.target;
    const payload = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      service: form.service.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Could not send enquiry. Please try WhatsApp or call us.');
      }

      const waUrl = buildEnquiryWhatsAppUrl(payload);
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      setSent(true);
      form.reset();
      window.setTimeout(() => setSent(false), 6000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please call +91 98433 18431.');
    } finally {
      setSubmitting(false);
    }
  }

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

        <form className="contact-form reveal-r" onSubmit={handleSubmit}>
          <div className="cf-title">Send an Enquiry</div>
          <div className="form-row">
            <div className="fg">
              <label htmlFor="c-name">Your Name</label>
              <input id="c-name" name="name" type="text" placeholder="Full Name" required autoComplete="name" />
            </div>
            <div className="fg">
              <label htmlFor="c-phone">Phone</label>
              <input id="c-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required autoComplete="tel" />
            </div>
          </div>
          <div className="fg">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" placeholder="your@email.com" required autoComplete="email" />
          </div>
          <div className="fg">
            <label htmlFor="c-svc">Service Required</label>
            <select id="c-svc" name="service" defaultValue="">
              <option value="">Select a Service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="fg">
            <label htmlFor="c-msg">Message</label>
            <textarea
              id="c-msg"
              name="message"
              required
              placeholder="Tell us about your event — venue, date, audience size, requirements…"
            />
          </div>
          {error ? <p className="contact-form-err">{error}</p> : null}
          <button type="submit" className="btn-submit" id="submitBtn" disabled={submitting}>
            {submitting
              ? 'Sending…'
              : sent
                ? '✓ Saved — WhatsApp opened'
                : 'Send Enquiry →'}
          </button>
        </form>
      </div>
    </section>
  );
}

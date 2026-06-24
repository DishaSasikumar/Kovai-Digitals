export const WHATSAPP_NUMBER = '919843318431';

export function buildEnquiryWhatsAppUrl({ name, phone, email, service, message }) {
  const lines = [
    'New enquiry — Kovai Digital Projectors website',
    '',
    `Name: ${name}`,
    phone ? `Phone: ${phone}` : null,
    `Email: ${email}`,
    service ? `Service: ${service}` : null,
    '',
    `Message: ${message}`,
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

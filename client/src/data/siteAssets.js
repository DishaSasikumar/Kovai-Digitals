/**
 * Replace files under client/public/images/ — keep the same paths below.
 *
 * HOME PAGE
 *   /images/logo.png
 *   /images/hero.jpg
 *   /images/about.jpg
 *   /images/gallery/gallery1.jpg … gallery6.jpeg
 *
 * EXPERTISE (/gallery/:slug) — one folder per category:
 *   /images/expertise/<slug>/01.jpg, 02.jpg, …
 *   /images/expertise/<slug>/03.mp4 + 03-poster.jpg (poster = video thumbnail)
 */

export const logoUrl = '/images/logo.png';
export const heroCorporateImage = '/images/hero.jpg';
export const aboutImage = '/images/about.jpg';

export const galleryTiles = [
  { src: '/images/gallery/gallery1.jpg', label: 'Get Togethers', sub: 'Stage · LED · Furniture' },
  { src: '/images/gallery/gallery2.jpg', label: 'Corporate Meet', sub: 'Queue Manager · Interior Setup' },
  { src: '/images/gallery/gallery3.jpg', label: 'Premium Event', sub: 'Full A–Z Fabrication' },
  { src: '/images/gallery/gallery4.jpeg', label: 'Event Gallery', sub: 'Seating & Furniture' },
  { src: '/images/gallery/gallery5.jpeg', label: 'Statue Inaugration', sub: 'Product Reveal Setup · Automation' },
  { src: '/images/gallery/gallery6.png', label: 'School Event', sub: 'Full venue setup' },
];

/** Local path helper for expertise media */
const E = (slug, file) => `/images/expertise/${slug}/${file}`;

export const expertiseGalleries = {
  'premium-furniture': {
    title: 'Premium Furniture',
    intro: 'Executive seating, modular lounges, and bespoke furniture for conferences and galas.',
    items: [
      { type: 'image', src: E('premium-furniture', '01.jpg'), caption: 'Conference lounge layout' },
      { type: 'image', src: E('premium-furniture', '02.jpg'), caption: 'Corporate seating setup' },
      { type: 'image', src: E('premium-furniture', '08.png'), caption: 'Two Seater Black Sofas' },
      { type: 'image', src: E('premium-furniture', '10.png'), caption: 'Two Seater White Sofas' },
      { type: 'image', src: E('premium-furniture', '04.png'), caption: 'Premium Wooden Teapoi' }, 
      { type: 'image', src: E('premium-furniture', '05.jpg'), caption: 'Resort Wedding Setup' },
         { type: 'image', src: E('premium-furniture', '03.png'), caption: 'Premium Black Chairs' },
      {
        type: 'video',
        src: E('premium-furniture', '03.mp4'),
        poster: E('premium-furniture', '03-poster.jpg'),
        caption: 'Furniture showcase',
      },
      { type: 'image', src: E('premium-furniture', '06.png'), caption: 'Event seating detail' },
    ],
  },
  'led-wall-systems': {
    title: 'LED Tvs & LED Wall Systems',
    intro: 'Indoor LED stages, keynotes, and immersive brand experiences.',
    items: [
       { type: 'image', src: E('led-wall-systems', '04.jpeg'), caption: 'LED Wall' },
      { type: 'image', src: E('led-wall-systems', '01.jpg'), caption: 'LED backdrop on stage' },
       { type: 'image', src: E('led-wall-systems', '03.jpeg'), caption: 'LED Wall' },
        { type: 'image', src: E('led-wall-systems', '05.jpeg'), caption: 'LED Wall' },
         { type: 'image', src: E('led-wall-systems', '02.jpg'), caption: 'LED Tv' },
      {
        type: 'video',
        src: E('led-wall-systems', '02.mp4'),
        poster: E('led-wall-systems', '02-poster.jpg'),
        caption: 'LED wall in action',
      },
     
    ],
  },
  'rental-appliances': {
    title: 'Rental Appliances',
    intro: 'Projectors, sound, and event appliances available on rent for your venue.',
    items: [
      { type: 'image', src: E('rental-appliances', '01.png'), caption: 'Audio setup' },
      { type: 'image', src: E('rental-appliances', '02.png'), caption: 'Air Cooler' },
      { type: 'image', src: E('rental-appliances', '03.png'), caption: 'Refridgerator' },
      { type: 'image', src: E('rental-appliances', '04.jpg'), caption: 'Air Cooler' },
      {
        type: 'video',
        src: E('rental-appliances', '03.mp4'),
        poster: E('rental-appliances', '03-poster.jpg'),
        caption: 'Appliance showcase',
      },
       { type: 'image', src: E('rental-appliances', '05.png'), caption: 'Upright Beverage freezer' },
        { type: 'image', src: E('rental-appliances', '06.png'), caption: 'Double Door Deep Freezer' },
         { type: 'image', src: E('rental-appliances', '07.png'), caption: 'Microwave Oven' },
          { type: 'image', src: E('rental-appliances', '08.png'), caption: 'Digital Standee' },
    ],
  },
  'led-tvs': {
    title: 'Unveiling setups',
    intro: 'Digital signage, sponsor loops, and breakout displays.',
    items: [
      
      { type: 'image', src: E('led-tvs', '01.jpeg'), caption: 'Automatic Room setup Red' },
      { type: 'image', src: E('led-tvs', '02.jpeg'), caption: 'Automatic Room setup Outdoor Red' },
      { type: 'image', src: E('led-tvs', '03.jpeg'), caption: 'Automatic Room setup Blue' },
      { type: 'image', src: E('led-tvs', '04.jpeg'), caption: 'Automatic Frontage View Setup' },
      {
        type: 'video',
        src: E('led-tvs', '03.mp4'),
        poster: E('led-tvs', '03-poster.jpg'),
        caption: 'Display content loop',
      },
    ],
  },
  others: {
    title: 'Miscellaneous · Others',
    intro:
      'Catch-all gallery for miscellaneous work — add photos and videos here when they do not belong under Furniture, LED, TVs, rentals, or full event solutions.',
    items: [
      { type: 'image', src: E('others', '01.png'), caption: '360 degree selfie booth' },
      { type: 'image', src: E('others', '02.png'), caption: 'Podium' },
      { type: 'image', src: E('others', '03.png'), caption: 'Coffee Machine' },
      {
        type: 'video',
        src: E('others', '04.mp4'),
        poster: E('others', '04-poster.jpg'),
        caption: 'Video 1',
      },
      { type: 'image', src: E('others', '04.png'), caption: 'Mannequin' },
      {
        type: 'video',
        src: E('others', '06.mp4'),
        poster: E('others', '06-poster.jpg'),
        caption: 'Video 2',
      },
      { type: 'image', src: E('others', '07.jpg'), caption: 'Gallery item 5' },
      { type: 'image', src: E('others', '08.jpg'), caption: 'Gallery item 6' },
    ],
  },
  'complete-event-solutions': {
    title: 'Complete Event Solutions',
    intro: 'End-to-end production — creative, technical, and on-site crew.',
    items: [
      { type: 'image', src: E('complete-event-solutions', '08.jpeg'), caption: 'Corporate Summit' },
      { type: 'image', src: E('complete-event-solutions', '05.jpeg'), caption: 'Amaran Movie promotion' },
      { type: 'image', src: E('complete-event-solutions', '01.jpg'), caption: 'Annual Day Event' },
      { type: 'image', src: E('complete-event-solutions', '02.jpg'), caption: 'Partial Anirudh concert' },
      {
        type: 'video',
        src: E('complete-event-solutions', '03.mp4'),
        poster: E('complete-event-solutions', '03-poster.jpg'),
        caption: 'Event highlight reel',
      },
      { type: 'image', src: E('complete-event-solutions', '04.jpg'), caption: 'Partial Vijay Antony concert' },
      { type: 'image', src: E('complete-event-solutions', '10.png'), caption: 'Corporate Summit' },
      { type: 'image', src: E('complete-event-solutions', '06.png'), caption: 'Corporate Summit' },
    ],
  },
};

export const galleries = expertiseGalleries;

export function getGallery(slug) {
  return galleries[slug] || null;
}

/** Owner reference — all replaceable asset paths */
export const imagePlacements = [
  { id: 'logo', label: 'Logo', path: logoUrl, locations: 'Navbar, preloader, footer' },
  { id: 'hero', label: 'Hero image', path: heroCorporateImage, locations: 'Home hero (right panel)' },
  { id: 'about', label: 'About image', path: aboutImage, locations: 'About section' },
  ...galleryTiles.map((t, i) => ({
    id: `gallery-${i + 1}`,
    label: t.label,
    path: t.src,
    locations: 'Home signature gallery',
  })),
  ...Object.entries(expertiseGalleries).flatMap(([slug, g]) =>
    g.items.map((item, i) => ({
      id: `${slug}-${i + 1}`,
      label: `${g.title} — ${item.caption}`,
      path: item.src,
      locations: `/gallery/${slug}`,
      ...(item.poster ? { poster: item.poster } : {}),
    }))
  ),
];

/** Shown when the API is offline or returns no rows */
export const clientReviews = [
  {
    id: 'client-1',
    name: 'Saravanan',
    role: 'Delighted Customer',
    rating: 5,
    text:
      'Kovai Digital Projectors exceeded all our expectations! Their attention to detail and creative event planning made our annual function absolutely magical. The LED wall setup was flawless.',
  },
  {
    id: 'client-2',
    name: 'Rajeev',
    role: 'Satisfied Client',
    rating: 5,
    text:
      'Outstanding service for our corporate event! The team handled everything professionally, from AV equipment to stage setup. Their technical expertise made the entire process seamless.',
  },
  {
    id: 'client-3',
    name: 'Nimesh',
    role: 'Happy Customer',
    rating: 5,
    text:
      "We chose Kovai Digitals for our daughter's engagement. The projector setup and sound system were perfect, and their decoration team created a beautiful ambiance.",
  },
  {
    id: 'client-4',
    name: 'Aashiq',
    role: 'Repeat Customer',
    rating: 5,
    text:
      "Nth time working with them — they've maintained excellent standards! Furniture and LED arrangements for our family function were perfect. Always punctual and professional.",
  },
];

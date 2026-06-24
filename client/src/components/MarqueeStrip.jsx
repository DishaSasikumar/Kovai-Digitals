const ITEMS = [
  'LED Wall Rentals',
  'Projectors',
  'Premium Furniture',
  'Interior Fabrication',
  'Rental Appliances',
  'Others',
  '360° Photo Booth',
  'LED TVs',
  'Sound Systems',
  'Corporate Events',
  'Stage Design',
];

export default function MarqueeStrip() {
  const cells = ITEMS.map((label) => (
    <span key={label}>{label}</span>
  ));
  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        <div className="marquee-track">{cells}</div>
        <div className="marquee-track" aria-hidden>
          {cells}
        </div>
      </div>
    </div>
  );
}

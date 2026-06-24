const NAMES = [
  'Ashok Leyland',
  'TVS Motors',
  'E2E Networks',
  'Hotel Residency',
  'CODISSIA',
  'SIP Academy',
  'AIT Coimbatore',
  'Little Indians',
  'PSG Group',
  'KG Hospital',
];

export default function Clients() {
  const doubled = [...NAMES, ...NAMES];
  const row = doubled.map((name, i) => (
    <div key={`${name}-${i}`} className="client-box">
      {name}
    </div>
  ));
  return (
    <section className="clients" id="clients">
      <div className="clients-header reveal">
        <div className="sec-lbl">Our Clients</div>
        <h2 className="sec-title">
          Trusted by <em>Industry Leaders</em>
        </h2>
      </div>
      <div className="client-track-wrap reveal">
        <div className="client-track">{row}</div>
      </div>
    </section>
  );
}

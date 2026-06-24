/** Site-wide subtle animated gradient layer (behind content, above base bg). */
export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden>
      <div className="ambient-mesh" />
      <div className="ambient-orb ambient-orb--teal" />
      <div className="ambient-orb ambient-orb--gold" />
      <div className="ambient-orb ambient-orb--deep" />
      <div className="ambient-shimmer" />
    </div>
  );
}

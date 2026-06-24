export default function LogoMark({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c9a7" />
          <stop offset="100%" stopColor="#00a88a" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0d1218" stroke="url(#lg)" strokeWidth="2" />
      <path
        d="M20 44V20h6l8 14V20h6v24h-6l-8-14v14z"
        fill="url(#lg)"
        opacity="0.95"
      />
    </svg>
  );
}

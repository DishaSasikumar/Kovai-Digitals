import { logoUrl } from '../data/siteAssets.js';

export default function BrandLogo({ className = '', width, height }) {
  return (
    <img
      src={logoUrl}
      alt="Kovai Digital Projectors"
      className={className}
      width={width}
      height={height}
      decoding="async"
    />
  );
}

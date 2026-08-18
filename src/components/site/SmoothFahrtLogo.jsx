import { useId } from "react";

/**
 * SmoothFahrt brand monogram — an intertwined "SF" mark where the top bar of
 * the F extends into an arrow pointing up and to the right. Rendered with the
 * brand teal gradient on a transparent background (no white plate).
 */
export default function SmoothFahrtLogo({ className = "h-9 w-9" }) {
  const gid = `sfGrad-${useId()}`;
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SmoothFahrt Logo"
    >
      <defs>
        <linearGradient id={gid} x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00C8B3" />
          <stop offset="0.5" stopColor="#00A69C" />
          <stop offset="1" stopColor="#005F73" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* S */}
        <path d="M27 14 C14 14 14 27 25 30 C36 33 36 47 20 47" />
        {/* F vertical */}
        <path d="M37 14 L37 46" />
        {/* F middle bar */}
        <path d="M37 26 L47 26" />
        {/* F top bar extending into an up-right arrow */}
        <path d="M37 14 L55 6" />
        <path d="M55 6 L48 6" />
        <path d="M55 6 L55 13" />
      </g>
    </svg>
  );
}
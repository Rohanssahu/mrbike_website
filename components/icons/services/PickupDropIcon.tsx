import type { SVGProps } from "react";

/** Pickup & Drop — a service van with a bidirectional arrow for the two-way trip. */
export function PickupDropIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <g id="van">
        <rect x="3" y="10" width="11" height="6" rx="1" />
        <path d="M14 11 L16.3 11 L19 14 V16 H14 Z" />
        <circle cx="7" cy="17.3" r="1.6" />
        <circle cx="14.5" cy="17.3" r="1.6" />
      </g>
      <g id="swap-arrows">
        <line x1="20" y1="3" x2="20" y2="9" />
        <path d="M18 5 L20 3 L22 5" />
        <path d="M18 7 L20 9 L22 7" />
      </g>
    </svg>
  );
}

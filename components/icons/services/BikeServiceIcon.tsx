import type { SVGProps } from "react";

/** Full Bike Service — motorcycle silhouette with a service wrench across the frame. */
export function BikeServiceIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="bike">
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M6 18 L9 10 L15 10 L18 18" />
        <path d="M9 10 L13 7.5 L16 10" />
        <line x1="6" y1="16.2" x2="6" y2="19.8" />
        <line x1="4.2" y1="18" x2="7.8" y2="18" />
        <line x1="18" y1="16.2" x2="18" y2="19.8" />
        <line x1="16.2" y1="18" x2="19.8" y2="18" />
      </g>
      <g id="wrench">
        <line x1="9.5" y1="15.5" x2="14.5" y2="10.5" strokeWidth={2.25} />
        <circle cx="9.2" cy="15.8" r="1.5" />
        <circle cx="14.8" cy="10.2" r="1.5" />
      </g>
    </svg>
  );
}

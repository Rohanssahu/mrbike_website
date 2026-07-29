import type { SVGProps } from "react";

/** Bike Repair — a wrench and a screwdriver crossed over a bolt. */
export function BikeRepairIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="bolt">
        <circle cx="12" cy="12" r="2.4" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
      </g>
      <g id="wrench">
        <line x1="6" y1="18" x2="10.3" y2="13.7" strokeWidth={2.1} />
        <circle cx="5.6" cy="18.4" r="1.6" />
      </g>
      <g id="screwdriver">
        <line x1="18" y1="6" x2="13.7" y2="10.3" strokeWidth={2.1} />
        <path d="M17 5 L19.2 4.4 L19.6 6.6 L18 8" />
      </g>
    </svg>
  );
}

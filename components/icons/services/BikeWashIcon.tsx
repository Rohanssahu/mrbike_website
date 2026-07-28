import type { SVGProps } from "react";

/** Bike Wash — a spoked wheel surrounded by suds bubbles and a water drop. */
export function BikeWashIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="wheel">
        <circle cx="10" cy="14" r="5.5" />
        <circle cx="10" cy="14" r="1.3" />
        <line x1="10" y1="9.2" x2="10" y2="18.8" />
        <line x1="4.7" y1="14" x2="15.3" y2="14" />
        <line x1="6.9" y1="10.9" x2="13.1" y2="17.1" />
        <line x1="6.9" y1="17.1" x2="13.1" y2="10.9" />
      </g>
      <g id="suds">
        <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="19.5" cy="9.5" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
        <path
          d="M18.3 15c-1 1.3-1.9 2.1-1.9 3.2a1.9 1.9 0 0 0 3.8 0c0-1.1-0.9-1.9-1.9-3.2Z"
          fill="currentColor"
          stroke="none"
        />
      </g>
    </svg>
  );
}

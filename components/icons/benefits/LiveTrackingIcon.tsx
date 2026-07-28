import type { SVGProps } from "react";

/** Live Tracking — a location pin broadcasting live signal waves, like a GPS ping. */
export function LiveTrackingIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="signal">
        <path d="M9 7.5 A4 4 0 0 1 15 7.5" />
        <path d="M7 5.5 A6.5 6.5 0 0 1 17 5.5" />
      </g>
      <g id="pin">
        <path d="M12 21 C12 21 18 15.2 18 10.3 A6 6 0 0 0 6 10.3 C6 15.2 12 21 12 21 Z" />
        <circle cx="12" cy="10.3" r="1.8" />
      </g>
    </svg>
  );
}

import type { SVGProps } from "react";

/** Chain Cleaning — overlapping bike-chain links with a cleaning-fluid droplet. */
export function ChainCleaningIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="chain">
        <ellipse cx="6.5" cy="16" rx="2.6" ry="1.6" transform="rotate(-40 6.5 16)" />
        <ellipse cx="10.3" cy="12.3" rx="2.6" ry="1.6" transform="rotate(-40 10.3 12.3)" />
        <ellipse cx="14.1" cy="8.6" rx="2.6" ry="1.6" transform="rotate(-40 14.1 8.6)" />
      </g>
      <g id="droplet">
        <path
          d="M18 14.2c-1 1.3-1.8 2.1-1.8 3.1a1.8 1.8 0 0 0 3.6 0c0-1-0.8-1.8-1.8-3.1Z"
          fill="currentColor"
          stroke="none"
        />
      </g>
    </svg>
  );
}

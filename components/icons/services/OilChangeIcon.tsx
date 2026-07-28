import type { SVGProps } from "react";

/** Oil Change — an oil canister with spout, handle, and a dripping drop. */
export function OilChangeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="can">
        <rect x="7" y="9" width="8" height="11" rx="1.5" />
        <path d="M8 9 L6 5.5 L9 5" />
        <path d="M13 9 V6.5 A1 1 0 0 1 15 6.5 V9" />
        <line x1="7" y1="13.5" x2="15" y2="13.5" />
      </g>
      <g id="drop">
        <path
          d="M6 14.5c-1 1.6-2 2.6-2 3.8a2 2 0 0 0 4 0c0-1.2-1-2.2-2-3.8Z"
          fill="currentColor"
          stroke="none"
        />
      </g>
    </svg>
  );
}

import type { SVGProps } from "react";

/** Emergency Breakdown — a hazard triangle with an exclamation mark and flash marks. */
export function EmergencyBreakdownIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="triangle">
        <path d="M12 3.5 L21 19.5 L3 19.5 Z" />
        <line x1="12" y1="9.5" x2="12" y2="14" />
        <circle cx="12" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
      </g>
      <g id="flash">
        <line x1="4" y1="3" x2="5.5" y2="4.5" />
        <line x1="20" y1="3" x2="18.5" y2="4.5" />
      </g>
    </svg>
  );
}

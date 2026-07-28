import type { SVGProps } from "react";

/** Digital Service History — a clipboard log with a clock badge for the permanent record. */
export function DigitalServiceHistoryIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="clipboard">
        <rect x="5" y="4" width="12" height="16" rx="1.5" />
        <rect x="8.5" y="2.5" width="5" height="3" rx="1" />
        <line x1="7.5" y1="9" x2="12.5" y2="9" />
        <line x1="7.5" y1="12" x2="12.5" y2="12" />
        <line x1="7.5" y1="15" x2="10.5" y2="15" />
      </g>
      <g id="clock-badge">
        <circle cx="17.5" cy="16.5" r="4" />
        <path d="M17.5 14.5 V16.5 L19 17.5" strokeWidth={1.4} />
      </g>
    </svg>
  );
}

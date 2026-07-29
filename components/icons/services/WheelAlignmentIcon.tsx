import type { SVGProps } from "react";

/** Wheel Alignment — a wheel with a centering crosshair and correction arrows. */
export function WheelAlignmentIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <line x1="12" y1="4.5" x2="12" y2="7.2" />
      <line x1="12" y1="16.8" x2="12" y2="19.5" />
      <path d="M17.5 8 L19.5 6.5 M19.5 6.5 L19.9 8.7 M19.5 6.5 L17.3 6.1" />
      <path d="M6.5 16 L4.5 17.5 M4.5 17.5 L4.1 15.3 M4.5 17.5 L6.7 17.9" />
    </svg>
  );
}

import type { SVGProps } from "react";

/** Verified Mechanics — a shield holding a wrench, standing in for a vetted mechanic. */
export function VerifiedMechanicsIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="shield">
        <path d="M12 3 L19 5.5 V11 C19 16 16 19.5 12 20.5 C8 19.5 5 16 5 11 V5.5 Z" />
      </g>
      <g id="wrench">
        <line x1="9.3" y1="14.5" x2="14" y2="9.5" strokeWidth={1.8} />
        <circle cx="9" cy="14.8" r="1.2" />
        <circle cx="14.3" cy="9.2" r="1.2" />
      </g>
    </svg>
  );
}

import type { SVGProps } from "react";

/** Tyre Replacement — an old tyre swapped out for a new one, linked by a swap arrow. */
export function TyreReplacementIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <circle cx="6.5" cy="9" r="4" opacity="0.45" />
      <circle cx="17.5" cy="15" r="4" />
      <circle cx="17.5" cy="15" r="1.2" fill="currentColor" stroke="none" />
      <path d="M10.8 12.8 C12 14.4 12 15.6 11 17" />
      <path d="M11.3 15.2 L11 17 L9.3 16.4" />
    </svg>
  );
}

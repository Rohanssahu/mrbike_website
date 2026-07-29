import type { SVGProps } from "react";

/** Premium Service — a shield with a star, signaling an elevated service tier. */
export function PremiumServiceIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M12 3 L19 5.5 V11 C19 15.5 16 18.8 12 20.5 C8 18.8 5 15.5 5 11 V5.5 Z" />
      <path d="M12 8 L13.1 10.4 L15.7 10.7 L13.8 12.5 L14.3 15.1 L12 13.8 L9.7 15.1 L10.2 12.5 L8.3 10.7 L10.9 10.4 Z" />
    </svg>
  );
}

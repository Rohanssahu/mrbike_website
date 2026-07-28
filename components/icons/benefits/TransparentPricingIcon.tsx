import type { SVGProps } from "react";

/** Transparent Pricing — an itemized receipt with a rupee mark: no hidden charges. */
export function TransparentPricingIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="receipt">
        <path d="M6 3 H18 V18 L16.5 19.5 L15 18 L13.5 19.5 L12 18 L10.5 19.5 L9 18 L7.5 19.5 L6 18 Z" />
        <line x1="8.3" y1="7" x2="15.7" y2="7" />
        <line x1="8.3" y1="10" x2="15.7" y2="10" />
        <line x1="8.3" y1="13" x2="13" y2="13" />
      </g>
      <g id="rupee">
        <path d="M12.5 14.3 H15.9 M12.5 15.6 H15.9 M13.4 14.3 L15.9 19.3" strokeWidth={1.3} />
      </g>
    </svg>
  );
}

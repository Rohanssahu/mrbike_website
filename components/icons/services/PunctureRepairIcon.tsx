import type { SVGProps } from "react";

/** Puncture Repair — a treaded tyre with a patch marking the repaired spot. */
export function PunctureRepairIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="tire">
        <circle cx="11" cy="13" r="6" />
        <circle cx="11" cy="13" r="2" />
        <line x1="17" y1="13" x2="18.2" y2="13" />
        <line x1="14" y1="7.8" x2="14.6" y2="6.76" />
        <line x1="8" y1="7.8" x2="7.4" y2="6.76" />
        <line x1="5" y1="13" x2="3.8" y2="13" />
        <line x1="8" y1="18.2" x2="7.4" y2="19.24" />
        <line x1="14" y1="18.2" x2="14.6" y2="19.24" />
      </g>
      <g id="patch">
        <circle cx="17.5" cy="8" r="1.6" />
        <line x1="16.5" y1="7" x2="18.5" y2="9" />
        <line x1="18.5" y1="7" x2="16.5" y2="9" />
      </g>
    </svg>
  );
}

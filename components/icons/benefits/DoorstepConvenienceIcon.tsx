import type { SVGProps } from "react";

/** Doorstep Convenience — a house with a location pin at the door: service comes to you. */
export function DoorstepConvenienceIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g id="house">
        <path d="M5 12 L12 5 L19 12" />
        <path d="M5 12 V20 H19 V12" />
      </g>
      <g id="pin">
        <path d="M12 14.2c-1.7 0-3 1.3-3 3c0 2.2 3 4.8 3 4.8s3-2.6 3-4.8c0-1.7-1.3-3-3-3Z" />
        <circle cx="12" cy="17.2" r="1" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

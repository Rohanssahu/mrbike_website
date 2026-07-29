import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const badgeClasses =
  "flex h-14 items-center gap-2.5 rounded-xl border border-white/10 bg-black px-4 text-white transition-transform hover:scale-[1.03] aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:hover:scale-100";

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id="play-glyph-gradient" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00d2ff" />
          <stop offset="0.4" stopColor="#00f076" />
          <stop offset="0.7" stopColor="#ffcf00" />
          <stop offset="1" stopColor="#f74a5c" />
        </linearGradient>
      </defs>
      <path
        d="M4 3.3a1 1 0 0 1 1.53-.85l14 8.7a1 1 0 0 1 0 1.7l-14 8.7A1 1 0 0 1 4 20.7V3.3Z"
        fill="url(#play-glyph-gradient)"
      />
    </svg>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0 fill-white" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.417 2.16-1.25 3.06-.938 1.02-2.06 1.55-3.24 1.46-.062-1.12.41-2.19 1.24-3.06.938-1.02 2.19-1.6 3.25-1.46ZM20.1 17.03c-.42.98-.92 1.9-1.5 2.76-.85 1.24-1.55 2.1-2.09 2.57-.85.78-1.75 1.18-2.72 1.2-.7 0-1.53-.2-2.5-.6-.97-.4-1.85-.6-2.65-.6-.83 0-1.74.2-2.73.6-1 .4-1.8.61-2.42.63-.92.04-1.85-.37-2.77-1.24-.58-.5-1.31-1.4-2.19-2.7-.94-1.4-1.71-3.02-2.32-4.86-.64-1.98-.96-3.9-.96-5.75 0-2.12.46-3.95 1.37-5.47.72-1.22 1.68-2.19 2.87-2.89 1.2-.7 2.5-1.06 3.9-1.09.75 0 1.72.23 2.94.69 1.21.46 1.99.7 2.33.7.25 0 1.11-.27 2.56-.81 1.37-.5 2.53-.71 3.47-.63 2.56.21 4.49 1.22 5.76 3.04-2.29 1.39-3.43 3.34-3.41 5.83.02 1.94.72 3.55 2.1 4.83.62.6 1.32 1.06 2.09 1.38-.17.49-.35.96-.55 1.41Z" />
    </svg>
  );
}

interface BadgeProps {
  href: string;
  eyebrow: string;
  label: string;
  glyph: ReactNode;
  className?: string;
}

function StoreBadge({ href, eyebrow, label, glyph, className }: BadgeProps) {
  const isLive = Boolean(href);
  return (
    <a
      href={isLive ? href : undefined}
      target={isLive ? "_blank" : undefined}
      rel={isLive ? "noopener noreferrer" : undefined}
      aria-disabled={!isLive}
      aria-label={isLive ? label : `${label} — coming soon`}
      className={cn(badgeClasses, className)}
    >
      {glyph}
      <span className="flex flex-col leading-none">
        <span className="text-[0.65rem] tracking-wide text-white/70">
          {isLive ? eyebrow : "COMING SOON ON"}
        </span>
        <span className="font-heading text-base font-semibold">{label}</span>
      </span>
    </a>
  );
}

/** Official-style Play Store / App Store badges, linking to the real store listings once published. */
export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <StoreBadge
        href={siteConfig.android.url}
        eyebrow="GET IT ON"
        label="Google Play"
        glyph={<PlayGlyph />}
      />
      <StoreBadge
        href={siteConfig.ios.url}
        eyebrow="Download on the"
        label="App Store"
        glyph={<AppleGlyph />}
      />
    </div>
  );
}

"use client";

import { MapPinIcon, PhoneIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface TopStripProps {
  coverageText: string;
  phoneDisplay: string;
  phoneHref: string;
}

/**
 * Thin gold-tinted strip above the main navbar. Client-only so it can
 * collapse away on scroll, keeping just the main navbar sticky once the
 * page is no longer at the top (avoids eating vertical space while reading).
 */
export function TopStrip({ coverageText, phoneDisplay, phoneHref }: TopStripProps) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Hysteresis (collapse at 64px, expand at 16px) prevents an infinite
    // flicker loop: collapsing shrinks the header, and browser scroll
    // anchoring compensates by nudging scrollY back down, which would
    // instantly re-expand it at a single threshold.
    const onScroll = () => {
      setCollapsed((prev) => {
        if (prev) return window.scrollY > 16;
        return window.scrollY > 64;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`w-full overflow-hidden bg-primary/10 transition-[max-height,opacity] duration-300 ${
        collapsed ? "max-h-0 opacity-0" : "max-h-8 opacity-100"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-[22px] py-[5px]">
        <p className="hidden items-center gap-1 text-[10.5px] text-primary sm:flex">
          <MapPinIcon className="size-3 shrink-0" aria-hidden="true" />
          <span>{coverageText}</span>
        </p>

        <p className="ml-auto flex items-center gap-1 text-[10.5px] text-white/65">
          <PhoneIcon className="size-3 shrink-0" aria-hidden="true" />
          <a href={phoneHref} className="hover:text-white">
            Help: {phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}

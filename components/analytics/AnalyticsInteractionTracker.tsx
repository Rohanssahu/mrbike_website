"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const DOWNLOAD_EXTENSIONS =
  /\.(pdf|docx?|xlsx?|pptx?|zip|rar|7z|apk|dmg|exe|csv|txt|mp3|mp4|mov|avi)$/i;
const SCROLL_THRESHOLDS = [25, 50, 75, 90];

function linkTextOf(anchor: HTMLAnchorElement) {
  return anchor.textContent?.trim().slice(0, 100) || anchor.href;
}

/**
 * One delegated listener set for the whole app (mounted once in the root
 * layout) instead of per-component handlers — new links/forms anywhere in
 * the tree get tracked automatically without extra wiring.
 */
export function AnalyticsInteractionTracker() {
  const pathname = usePathname();
  const scrolledThresholds = useRef<Set<number>>(new Set());

  useEffect(() => {
    scrolledThresholds.current = new Set();
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      const isDownload =
        anchor.hasAttribute("download") || DOWNLOAD_EXTENSIONS.test(url.pathname);
      if (isDownload) {
        sendGAEvent("event", "file_download", {
          file_name: url.pathname.split("/").pop() || url.pathname,
          file_extension: (url.pathname.split(".").pop() || "").toLowerCase(),
          link_url: url.href,
          link_text: linkTextOf(anchor),
        });
        return;
      }

      const isOutbound = url.hostname !== window.location.hostname;
      if (isOutbound) {
        sendGAEvent("event", "click", {
          link_url: url.href,
          link_domain: url.hostname,
          link_text: linkTextOf(anchor),
          outbound: true,
        });
      }
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      sendGAEvent("event", "form_submit", {
        form_id: form.id || undefined,
        form_name: form.getAttribute("name") || undefined,
        form_destination: form.action || undefined,
      });
    }

    function handleScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const percentScrolled = Math.round((window.scrollY / scrollableHeight) * 100);
      for (const threshold of SCROLL_THRESHOLDS) {
        if (percentScrolled >= threshold && !scrolledThresholds.current.has(threshold)) {
          scrolledThresholds.current.add(threshold);
          sendGAEvent("event", "scroll", { percent_scrolled: threshold });
        }
      }
    }

    let scrollTicking = false;
    function onScroll() {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(() => {
        handleScroll();
        scrollTicking = false;
      });
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit, true);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit, true);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}

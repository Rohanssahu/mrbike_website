"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const SEARCH_QUERY_PARAMS = ["q", "search", "query", "s"];
const DEBOUNCE_MS = 400;

/**
 * gtag's own `config` call already fires the initial page_view, so the
 * first render here is skipped — this only tracks the client-side route
 * changes App Router doesn't reload the page for. Debounced because
 * `BlogSearch` mirrors keystrokes into the `q` param via `router.replace`.
 */
export function AnalyticsRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeout = window.setTimeout(() => {
      const query = searchParams.toString();
      const page_path = query ? `${pathname}?${query}` : pathname;

      sendGAEvent("event", "page_view", {
        page_path,
        page_location: window.location.href,
        page_title: document.title,
      });

      const searchTerm = SEARCH_QUERY_PARAMS.map((key) => searchParams.get(key)).find(
        (value) => !!value,
      );
      if (searchTerm) {
        sendGAEvent("event", "search", { search_term: searchTerm });
      }
    }, DEBOUNCE_MS);

    return () => window.clearTimeout(timeout);
  }, [pathname, searchParams]);

  return null;
}

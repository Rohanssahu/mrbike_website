import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";

import { env } from "@/config/env";

import { AnalyticsInteractionTracker } from "./AnalyticsInteractionTracker";
import { AnalyticsRouteTracker } from "./AnalyticsRouteTracker";

/**
 * Production-only GA4 wiring (Vercel preview/dev traffic should never hit
 * real analytics — see docs/production-deployment-checklist.md). No-op
 * entirely when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is unset, so local/preview
 * environments don't need a real ID to build.
 */
export function Analytics() {
  if (process.env.NODE_ENV !== "production" || !env.gaMeasurementId) {
    return null;
  }

  return (
    <>
      <GoogleAnalytics gaId={env.gaMeasurementId} />
      <Suspense fallback={null}>
        <AnalyticsRouteTracker />
      </Suspense>
      <AnalyticsInteractionTracker />
    </>
  );
}

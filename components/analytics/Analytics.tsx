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
  const gaEnabled = Boolean(env.gaMeasurementId);
  const clarityEnabled = Boolean(env.clarityProjectId);

  if (process.env.NODE_ENV !== "production" || (!gaEnabled && !clarityEnabled)) {
    return null;
  }

  return (
    <>
      {gaEnabled ? <GoogleAnalytics gaId={env.gaMeasurementId} /> : null}
      {gaEnabled ? (
        <Suspense fallback={null}>
          <AnalyticsRouteTracker />
        </Suspense>
      ) : null}
      <AnalyticsInteractionTracker gaEnabled={gaEnabled} clarityEnabled={clarityEnabled} />
    </>
  );
}

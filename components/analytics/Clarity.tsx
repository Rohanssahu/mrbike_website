import Script from "next/script";

import { env } from "@/config/env";

/**
 * Production-only Microsoft Clarity wiring (same rationale as `Analytics`:
 * preview/dev traffic shouldn't hit real session-recording). No-op entirely
 * when `NEXT_PUBLIC_CLARITY_PROJECT_ID` is unset. Loaded `afterInteractive`
 * so it never delays hydration or blocks Core Web Vitals.
 */
export function Clarity() {
  if (process.env.NODE_ENV !== "production" || !env.clarityProjectId) {
    return null;
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${env.clarityProjectId}");`}
    </Script>
  );
}

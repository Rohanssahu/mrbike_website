# Production Deployment Checklist

Companion to `docs/phase-4-direction-change.md`. Tracks the operational
steps needed to take mrbikedoctor.com live, separate from the site's own
code readiness (see Phase 5F audit notes for that).

## Domain & Hosting

- [ ] Domain (`mrbikedoctor.com`) DNS points at the hosting provider
- [ ] SSL certificate issued and auto-renewing (Vercel handles this
      automatically once DNS is correctly pointed — verify the padlock on
      the live domain, not just `*.vercel.app`)
- [ ] `www` vs. apex domain redirect decided and configured (one canonical
      host — matches `NEXT_PUBLIC_SITE_URL`)

## Vercel Environment Variables

Set for the Production environment (values already have safe local
fallbacks in `config/env.ts`, but Production should set them explicitly
rather than relying on fallbacks):

- [ ] `NEXT_PUBLIC_SITE_URL` — the real production domain, no trailing slash
- [ ] `NEXT_PUBLIC_IOS_APP_URL` — once the App Store listing is live
- [ ] `NEXT_PUBLIC_ANDROID_APP_URL` — once the Play Store listing is live
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL`
- [ ] `NEXT_PUBLIC_CONTACT_PHONE`
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` (see Analytics below)
- [ ] `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (see Search Console below)

## App Store Listings

- [ ] Play Store URL live and set as `NEXT_PUBLIC_ANDROID_APP_URL` — until
      then, `/download` and every "Download App" CTA correctly show a
      disabled "Coming Soon" state rather than a dead link
- [ ] App Store URL live and set as `NEXT_PUBLIC_IOS_APP_URL` (if/when iOS
      ships)

## Search Console & Indexing

- [ ] Site verified in Google Search Console (via
      `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` or DNS verification)
- [ ] Sitemap (`https://mrbikedoctor.com/sitemap.xml`) submitted in Search
      Console
- [ ] `robots.txt` (`https://mrbikedoctor.com/robots.txt`) reviewed on the
      live domain — confirms it references the live sitemap URL, not a
      preview/staging one
- [ ] Site verified in Bing Webmaster Tools; sitemap submitted there too
- [ ] Request indexing for `/`, `/about`, `/services`, `/brands`, `/cities`,
      `/blog` once live, rather than waiting for organic crawl
- [ ] Re-check indexing status ~1–2 weeks post-launch (Search Console
      Coverage report) — confirm no unexpected `noindex`/blocked pages

## Analytics & Tagging

- [ ] Google Analytics 4 property created, measurement ID set
- [ ] Google Tag Manager container set up (optional — only if GA4 config
      grows complex enough to want a tag layer instead of direct gtag.js)
- [ ] Confirm analytics only loads in production (not on every preview
      deploy, to avoid polluting real analytics with test traffic)

## Performance

- [ ] Run Lighthouse (mobile + desktop) against the live production URL,
      not localhost — hosting/CDN latency affects real scores
- [ ] Confirm Core Web Vitals (LCP, CLS, INP) are in the "Good" range on
      key pages: `/`, a service detail page, a blog article
- [ ] Spot-check a few pages in Chrome DevTools' Network tab on throttled
      3G/4G to confirm acceptable load time

## Content / Business Readiness

(Cross-reference the Phase 5F/production-cleanup findings — these block a
*complete*, not a *technically working*, launch.)

- [ ] Legal pages (`/privacy-policy`, `/terms-and-conditions`,
      `/delete-account`) replaced with real, counsel-reviewed content —
      currently marked "Pending Legal Review"
- [ ] Real customer reviews wired in (Play Store export or backend data) —
      `/` currently shows an honest "Coming Soon" state
- [ ] Remaining `TodoPlaceholder` content on `/about` (mission, vision,
      values, timeline) and `/about/founder` (biography, origin story,
      vision, message) replaced with real copy
- [ ] Five app screenshots pulled for containing visible personal data
      (`home.png`, `profile.png`, `booking-list.png`, `booking-details.png`,
      `help-support.png`) replaced with clean/masked versions to restore
      the full app-showcase journey
- [ ] Verified production metrics (bikes serviced, app rating, response
      time, verified-mechanic count) added once real numbers exist — these
      were removed rather than shown as placeholders in the homepage hero

## Final Sign-off

- [ ] Full `next build` passes with zero errors/warnings on the exact
      commit being deployed
- [ ] Manual click-through of primary nav, footer, and at least one page
      per route family (service, brand, model, city, area, blog category,
      blog post) on the live preview URL before promoting to production

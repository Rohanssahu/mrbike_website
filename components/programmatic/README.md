# Programmatic SEO templates (Phase 4 §17, Phase 7)

Templates for the combinatorial page patterns Section 16's location hierarchy
implies — `{Brand} Service in {City}` and `{Service} in {City}` — prepared
per this phase's "templates only, do not generate pages" instruction.

**Status: not wired to any `app/` route.** `Service`, `Brand`, `Model`,
`City`, and `Area` templates already exist as real routes
(`/services/[service]`, `/brands/[brand]`, `/brands/[brand]/[model]`,
`/cities/[city]`, `/cities/[city]/[area]`). `BrandCityTemplate` and
`ServiceCityTemplate` here are the one-join-deeper combination templates,
built the same way, but deliberately not connected to a route yet.

## Why nothing is generated today

`eligibility.ts` implements Section 17's data-driven generation rule:
a combo page is only eligible once there's real, distinct backing content
for that *exact* combination (a FAQ tagged `brand:{slug}+city:{slug}` or
`service:{slug}+city:{slug}`, currently none exist in
`components/faq/mock-data.ts`). Generating pages from brand × city or
service × city cross products without that would be the classic doorway-
page anti-pattern the direction doc explicitly warns against.

## How to go live for a real combination

1. Add a genuinely combo-specific FAQ (or testimonial/local stat) tagged
   `brand:{slug}+city:{slug}` (or the service equivalent).
2. Create `app/(marketing)/brands/[brand]/in/[city]/page.tsx` (or the
   service equivalent), with `generateStaticParams` sourced from
   `getEligibleBrandCityCombos()` / `getEligibleServiceCityCombos()`.
3. Render `BrandCityTemplate` / `ServiceCityTemplate`, passing the matched
   FAQs.

This mirrors exactly how `/cities/[city]/[area]` and `/brands/[brand]/[model]`
already work — one template, many records, gated by real data.

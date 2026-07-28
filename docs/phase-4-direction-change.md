# MR Bike Doctor — Direction Change: Content, SEO & App-Growth Site (Phase 4)

Status: Approved direction change, pending implementation. No UI or code is
produced in this document — it redefines scope, sitemap, homepage structure,
and content model. It **supersedes** the booking-platform parts of
[Phase 2](phase-2-blueprint.md), [Phase 2.5](phase-2.5-content-architecture.md),
and [Phase 3](phase-3-homepage-ux.md); everything not called out below as
removed or changed still stands.

## Section 1 — The change

The website is **not** a booking platform and must never attempt to replace
the mobile app. Its only jobs from here on:

- Rank on Google for service-intent searches (bike service, doorstep bike
  service, bike mechanic/repair, engine oil change, bike maintenance, etc.)
  in every city the business operates.
- Build brand credibility (company story, founder, values, real content).
- Convert every visitor toward **downloading the app** — that's where all
  booking, pricing, tracking, and payment happens.

Nothing on the site should ask a visitor to check availability, get a quote,
or complete a transaction. Every path that used to end in "book" now ends in
"download the app" or "learn more."

## Section 2 — What's removed, and where it currently lives

This is the concrete map from the old (approved) architecture to the new
one, so nothing gets missed when Phase 5 (implementation) touches the code.

| Removed concept | Currently defined in | Currently built as | Disposition |
| --- | --- | --- | --- |
| Serviceability widget (location check, Available/Coming Soon/Paused states) | Phase 2 §13, Phase 2.5 §1/§10, Phase 3 §2/§4 | `components/home/Serviceability/*`, wired into `app/(marketing)/page.tsx` | Delete entirely. No location-gated availability check anywhere on the site. |
| "Book Now" CTA (hero, service cards, widget, footer, sticky mobile bar) | Phase 2 §4/§6, Phase 3 §3/§5 | `Hero.tsx`, `PopularServices`/`ServiceCard.tsx`, `Serviceability.tsx` | Delete. No button on the site says "Book Now" or opens a booking flow. |
| Garage booking / marketplace flow, Featured Garages | Phase 2 §12, Phase 2.5 §1 (`Garage` entity), Phase 3 §2 | `components/home/FeaturedGarages/*` | Delete the homepage section and the `Garage` entity's booking-facing role. See Section 9 for what (if anything) survives. |
| Pricing page + cost estimator / pricing calculator | Phase 2 §3 (`/pricing`), §11 | Not yet built | Delete from sitemap. No price calculator, no per-brand/model cost tool. |
| Appointment / "How It Works" as a booking sequence (request → matched → mechanic arrives → pay) | Phase 2 §4, Phase 3 §2 | `components/home/HowItWorks/*` | Repurpose only — becomes an **informational** "how the app works" explainer (see Section 4), not a website flow. No step is clickable/actionable on the website. |
| Website checkout / payment mentions | Phase 2 §1 (trust signals: "secure payment options") | Not built | Delete. Payment is exclusively an in-app concept; the website never mentions it as something that happens on the site. |
| Waitlist Lead capture ("Notify Me") | Phase 2 §8/§13, Phase 2.5 §1 | `components/home/Serviceability/NotifyMeForm.tsx` | Delete along with Serviceability. |
| Partner / garage-acquisition funnel (`/partner`, Partner Application entity) | Phase 2 §3/§12, Phase 2.5 §1 | Not yet built | Out of scope for this direction. Not part of the new sitemap (Section 3). If a B2B garage-partner funnel is wanted later, it's a separate, explicit decision — not part of the consumer SEO/brand site. |
| `/offers` (promo codes) | Phase 2 §3 | Not yet built | Delete from sitemap. Offers/promotions are an in-app/app-store-campaign concern, not a website page. |
| Booking-verified Review entity (`bookingId` required) | Phase 2.5 §1/§3, Phase 2 §14 | Not yet built | Simplify — see Section 9. Reviews still exist as trust content but aren't modeled around a website booking event. |

Everything else already approved — SEO keyword strategy (Phase 2 §5), image
architecture (Phase 2.5 §5), URL/slug conventions (Phase 2.5 §6/§11), CMS
strategy (Phase 2.5 §8), and JSON-LD foundation (`seo/json-ld.ts`) — is
unaffected and carries forward as-is.

## Section 3 — New sitemap

Replaces Phase 2 §3 in full.

```
/                                   Home
/about                              About MR Bike Doctor
/about/founder                      Meet the Founder
/services                           Services (hub / index)
/services/[service]                 Individual service — informational, not bookable
/brands                             Supported Bike Brands (hub / index)
/brands/[brand]                     Brand page
/brands/[brand]/[model]             Model page (Phase 2 §10 content survives — informational only)
/cities                             Cities We Serve (hub / index)
/cities/[city]                      City page
/cities/[city]/[area]               Area page
/blog                               Blog index — the primary SEO engine
/blog/[category]                    Category archive
/blog/[category]/[slug]             Individual article
/faq                                FAQs
/contact                            Contact
/download                           Download App
/privacy-policy
/delete-account
/terms-and-conditions
/sitemap.xml, /robots.txt           (existing, technical — unchanged)
```

Dropped from the old sitemap entirely: `/pricing`, `/partner`,
`/partner/thank-you`, `/careers`, `/careers/[role]`, `/reviews` (standalone —
reviews now live embedded on relevant pages, not a dedicated hub),
`/offers`, `/press`, `/refund-cancellation-policy` (only relevant if the
website itself processed refunds; it doesn't), `/support` (booking/tracking
help belongs in-app; general questions route to `/contact` or `/faq`),
`/near-me` (was a resolver entry point for the serviceability system, now
gone).

City and Area pages, and Brand and Model pages, stay as dynamic
data-driven routes (Phase 2.5's core principle: a new city or brand is a
content change, not a code change) — they just drop every
booking/serviceability/pricing module and keep only the informational and
SEO-relevant content (local description, supported services, brand/model
maintenance info, FAQs, blog cross-links).

## Section 4 — New homepage structure

Replaces Phase 3 §2 in full.

```
Header
  ↓
Hero
  ↓
Services (informational)
  ↓
How the App Works
  ↓
Why Choose MR Bike Doctor
  ↓
Trust & Numbers band
  ↓
Supported Bike Brands
  ↓
Cities We Serve
  ↓
Customer Reviews
  ↓
Blog (latest articles)
  ↓
FAQs
  ↓
Download App (final CTA)
  ↓
Footer
```

| Section | Change from Phase 3 |
| --- | --- |
| Hero | Drops the Serviceability widget entirely (no longer sits under the Hero). CTA row becomes Primary: `Download App`, Secondary: `Explore Services`. No location input, no "Check Service Near You." |
| Services | Renamed from "Popular Services"; cards describe the service (what it is, what's involved) and link to `/services/[service]`. CTA per card: `Learn More`. No price preview, no "Book Now." |
| How the App Works | Renamed from "How It Works." Explains the in-app flow (open app → request service → mechanic arrives → pay in app) as **information about the app**, framed to justify the download, not as a website action sequence. Nothing in this section is clickable as a flow — it's copy + a Download CTA at the end. |
| Why Choose Us | Unchanged in spirit — differentiation copy. |
| Trust & Numbers band | Stats reframed off booking metrics: app rating (from Play Store), verified mechanics, cities covered, brands supported. Drops "Bookings Completed" as a website-displayed metric tied to a live booking counter (it can still appear as a static, editorially-updated trust stat if the business wants a big number, but it's not sourced from a live booking system the website queries). |
| Brands We Service | Unchanged — still serves brand-search intent. |
| Cities We Serve | Unchanged — still the internal-linking/local-SEO backbone. |
| Featured Garages | **Removed.** Garage marketplace browsing was inherently a pre-booking step; with no booking on the site, there's no reason to surface individual garage listings on the homepage. |
| Customer Reviews | Kept, reframed as general trust content (star rating + testimonial text), no longer required to be tied to a verified in-app `bookingId` for website display purposes — see Section 9. |
| Become a Partner | **Removed** (Section 2). |
| Blog | Promoted higher in the order (was position 13, now earlier) since it's now the primary SEO engine, not an afterthought. |
| FAQs | Unchanged in purpose — objection-handling and long-tail SEO surface. |
| Download App | Becomes the **final, dedicated conversion section** as well as the sitewide CTA target — every other CTA on the page ultimately funnels here. |

## Section 5 — CTA rules

- **No "Book Now" anywhere on the website** — not in the header, hero,
  service cards, footer, or a sticky mobile bar.
- **Primary CTA sitewide:** `Download App`, linking to the Play Store (App
  Store once live), present in the header, hero, and footer at minimum.
- **Secondary CTA:** `Explore Services` (homepage) or a page-appropriate
  "Learn More" / "Read More" (service, brand, city, blog pages).
- Every page — not just the homepage — should include at least one Download
  App prompt (header nav button + one in-content placement), per the
  original brief's "every page should naturally encourage app download."
- Contact/WhatsApp/phone can still appear on `/contact` as a way to reach
  the company (support, press, general inquiries) — that's a company-contact
  channel, not a booking or quote-request flow, so it's fine to keep.

## Section 6 — About page

New page, `/about`. Sections:

- **Company Story** — how and why MR Bike Doctor started.
- **Mission** — the problem being solved, one paragraph.
- **Vision** — where the company is going (city expansion, category
  leadership).
- **Values** — a short list (3–5), each with one line of explanation.
- **Timeline** — key milestones (founding, first city launch, app launch,
  each new city), as a simple chronological list/strip.
- **Achievements** — notable numbers or recognitions (cities live, app
  rating, mechanics onboarded) framed as editorial trust content, not a
  live-queried stat.
- **Founder teaser** — a short excerpt + photo + "Meet the Founder" link
  into the dedicated page (Section 7), not the full bio duplicated here.
- **Company culture** — a short section on how the team/mechanic network
  operates (verification, training, standards).

## Section 7 — Founder page

New dedicated page, `/about/founder` (linked from `/about` and optionally
the footer).

- **Photo** — placeholder until a real asset exists; treated as a required
  field on the entity (Phase 2.5 §5's "alt text mandatory" rule applies
  here too).
- **Biography** — background, how they came to start the company.
- **Experience** — relevant prior work/industry experience.
- **Vision** — the founder's personal take on where the company/industry is
  headed (distinct from the company-level Vision on `/about` — this is
  personal voice, not company copy).
- **Message** — a short, direct note to visitors/customers.
- **Social links** — LinkedIn/Twitter/etc., optional per-link.

Content-model note: this is a small, mostly-singleton entity (like the
Legal Page pattern in Phase 2.5 §1) — one Founder record with the fields
above, not a repeating collection, since there's one founder section today.

## Section 8 — Blog: the primary SEO engine

The blog was previously one homepage section among many (Phase 2 §4 item
12); it's now the site's main growth lever and needs to be designed for
volume from day one.

- **Scale target:** designed to comfortably hold hundreds of articles
  without restructuring — this is exactly what the existing Category +
  Blog Post + related-entity model (Phase 2.5 §1/§3) already supports; no
  new entity is needed, just sustained content production against it.
- **Category set** carries forward from Phase 2 §5 (Maintenance Tips,
  Seasonal Care, Brand Guides, City Guides, Riding Safety, Battery & EV
  Care, Cost Guides) — still valid since these map to real search intent,
  none of them assume booking.
- **Cost Guides** category changes meaning slightly: since there's no
  in-app-adjacent `/pricing` page to link into anymore (Section 2), cost
  articles ("How much does a full bike service cost?") stand on their own
  as informational content and link to the relevant `/services/[service]`
  page and the Download App CTA, not to a pricing/estimator tool.
  they replace.
- **Internal linking** (Phase 2 §17) still applies — every post
  cross-links to the brand/model/city/service page it supports — this
  content-marketing engine is the intended replacement for the two links
  removed from the old model (pricing pages, garage pages).
- **Example titles** (from the brief, all still valid, none imply booking):
  "How Often Should You Change Bike Engine Oil?", "Best Bike Service in
  Hyderabad", "Doorstep Bike Service Guide", "Battery Replacement Guide",
  "Monsoon Bike Care Tips", "Honda Shine Maintenance Guide", "Royal
  Enfield Service Schedule."
- **Symptom entity** (Phase 2.5 §1, "bike won't start"-style content):
  kept, but its resolution target changes — it no longer maps to "nearest
  available Garage" (Phase 2 §18), only to the relevant Service page and
  a Download App CTA, consistent with removing garage/booking resolution
  sitewide.

## Section 9 — Content model changes

Amends Phase 2.5 Sections 1 and 3. Only entities that change are listed;
everything else in Phase 2.5 (City, Area, Brand, Bike Model, Service, FAQ,
Blog Post, Category, Legal Page, App Download config) carries forward
unchanged.

| Entity | Change |
| --- | --- |
| **Garage** | Demoted from a public, SEO-indexed, bookable marketplace listing to, at most, internal/ops data. No `/garage/[slug]` page, no homepage surfacing. If garage count or verification is ever worth stating publicly, it's a static stat on `/about` (Section 6), not a live entity-backed page. |
| **Review** | Drops the hard `bookingId`-required constraint for website display. Reviews shown on the site are curated trust content (rating + text + author + optional entity tag) — still real, still tagged to Service/Brand/Model/City where relevant for on-page relevance, but the source-of-truth booking proof requirement (previously what made the trust claim "defensible") is no longer enforceable from the website's own data since the website has no booking data. Sourcing real reviews (e.g., pulled from the Play Store listing, or curated from in-app data by the ops team) becomes an editorial/ops process rather than a website-verified one. |
| **Offer** | Removed — was scoped to Service/Brand/Model/City for `/offers` and in-app campaigns; with `/offers` gone, this has no page to power. In-app promos remain an app-only concern. |
| **Partner Application** | Removed — no `/partner` funnel in this direction (Section 2). |
| **Waitlist Lead** | Removed — was captured exclusively through the Serviceability widget's "Notify Me," which no longer exists. |
| **Founder** | New singleton entity (Section 7): `photoImageId`, `name`, `title`, `biography`, `experience`, `vision`, `message`, `socialLinks[]`, `seo`. |
| **About Page content** | New singleton entity (Section 6) holding the story/mission/vision/values/timeline/achievements/culture fields, following the same `seo` embed pattern as everything else (Phase 2.5 §4). |

Section 2 (Content Relationships) and Section 4 (SEO Content Model) from
Phase 2.5 are otherwise unchanged — the polymorphic Review/FAQ pattern, the
inheritance rules for `seo`, and the reusable `seo` object shape all still
apply exactly as written.

## Section 10 — Schema / structured data changes

Amends Phase 2 §15. `Offer` schema is dropped (no `/offers`, no per-service
bookable offer). `SearchAction` on the homepage stays if it powers on-site
content search (blog/services/brands), not a booking search. Everything
else — `Organization`, `WebSite`, `LocalBusiness` on City/Area pages,
`Service` (informational, not transactional), `FAQPage`, `BreadcrumbList`,
`Review`/`AggregateRating`, `SoftwareApplication`/`MobileApplication` on
`/download`, `Article`/`BlogPosting` on blog posts — carries forward
unchanged.

## Section 11 — Revised website goals

Replaces Phase 2 §2's priority ranking:

1. **SEO / Google search visibility** — rank for bike service, doorstep
   bike service, bike mechanic/repair, oil change, maintenance queries, per
   city served.
2. **App downloads** — the single conversion action the entire site points
   toward.
3. **Brand credibility** — About/Founder/company content that makes a
   stranger trust the app enough to install it.
4. **Content marketing / blog authority** — the sustained engine behind
   goal 1, designed for long-term compounding organic growth.

Explicitly **not** a goal anymore: lead generation via call/WhatsApp
booking requests, garage-partner acquisition, or any on-site transaction.

## Section 12 — Component/code impact (for Phase 5 planning)

Existing homepage components already built under `components/home/`,
mapped to their disposition — informational only, no code changes made
here:

| Component | Disposition |
| --- | --- |
| `Hero` | Rework copy/CTAs (Section 4/5); drop the Serviceability card overlap layout. |
| `Serviceability/*` (incl. `NotifyMeForm.tsx`) | Delete entirely. |
| `PopularServices`/`ServiceCard.tsx` | Rework: drop price preview and Book Now CTA; keep icon/name/description, CTA becomes Learn More. |
| `HowItWorks`/`TimelineStep.tsx` | Rework copy to describe the app flow, not a website action sequence. |
| `WhyChooseUs` | Keep, minor copy check for any booking-flavored claims. |
| `TrustBand` | Rework stat set (Section 4). |
| `BrandsWeService` | Keep as-is. |
| `CitiesWeServe` | Keep as-is. |
| `FeaturedGarages/*` | Delete entirely. |
| `CustomerReviews`/`ReviewCard.tsx` | Keep, drop the strict booking-verification framing from any copy/labels. |
| `app/(marketing)/page.tsx` | Re-sequence per Section 4; new sections (Blog teaser, FAQs, Download App, and the new About/Founder pages) still need to be built — unchanged from Phase 3's original scope note, just re-ordered. |
| `constants/navigation.ts` | Update `MAIN_NAV_LINKS` to match Section 3's sitemap (drop Pricing; add About, Blog already present, Contact, Download). |
| `components/layout/Footer.tsx` | When the full sitemap footer is built (already flagged as a later phase in its own comment), it should follow Section 3's sitemap, not Phase 2 §3. |

## Section 13 — Future implementation plan (Phase 5+)

Sequenced so SEO-critical, low-effort pages ship first:

1. **Phase 5A — Homepage rework:** apply Section 4's structure and Section
   5's CTA rules to the existing homepage; delete Serviceability and
   Featured Garages; update nav (Section 12).
2. **Phase 5B — About & Founder:** build `/about` and `/about/founder`
   against Sections 6/7 — pure content pages, no dynamic data dependency,
   fast to ship and immediately useful for brand-credibility SEO.
3. **Phase 5C — Services, Brands, Cities (informational versions):** bring
   `/services/[service]`, `/brands/[brand]`, `/brands/[brand]/[model]`,
   `/cities/[city]`, `/cities/[city]/[area]` online per the Phase 2.5 data
   model, stripped of any booking/pricing/serviceability module.
4. **Phase 5D — Blog platform:** stand up `/blog`, `/blog/[category]`,
   `/blog/[category]/[slug]` against the Category/Blog Post model (Section
   8), and start sustained content production — this is the long-term
   growth engine and should start as early as the data model allows.
5. **Phase 5E — FAQ, Contact, Download, Legal:** round out `/faq`,
   `/contact`, `/download`, `/privacy-policy`, `/terms-and-conditions`,
   `/delete-account` — mostly static, low-risk, and required for app-store
   compliance regardless of everything else.

Every phase above builds against the entity shapes in Phase 2.5 (as
amended by Section 9) — the "adding a city/brand/service/post is a data
change, not a code change" principle is unchanged by this direction shift,
only the transactional layer on top of that data is removed.

## Next step

Pending approval of this document, Phase 5 begins: implementation, starting
with 5A (homepage rework) and 5B (About/Founder), per Section 13.

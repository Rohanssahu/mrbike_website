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

---

---

## Revision 1 — Added Sections (14–21)

Sections 1–13 above are unchanged and approved. The sections below extend
this document with the architecture needed to make MR Bike Doctor an
authoritative knowledge source for bike servicing — discoverable by
traditional search **and** AI answer engines — and to prove the site can
scale to a large multi-city, multi-brand, high-volume-content footprint
without another architectural revision. Nothing here reopens Sections 1–13;
it plugs into them at the points noted inline. This revision does not touch
the approved sitemap (Section 3) — every new page type below is either an
existing route pattern applied more deeply, or content that lives inside
`/blog` and `/about` rather than a new top-level route.

## Section 14 — GEO + AI Search Strategy

"GEO" here means Generative Engine Optimization: being the source ChatGPT,
Gemini, Claude, Perplexity, and Google AI Overviews actually cite or quote
when a user asks a bike-service question in natural language, not just a
page that ranks in ten blue links. The mechanics overlap heavily with SEO
already planned (Sections 5/15 of Phase 2, Phase 2.5 §4/§9), but AI engines
reward a few things specifically that a links-and-keywords strategy doesn't
automatically produce:

- **Structured answers.** Every article and every FAQ answer opens with a
  self-contained, 2–4 sentence direct answer *before* elaboration —
  "answer-first" format. An LLM lifting a paragraph out of context needs
  that paragraph to already be the complete answer, not a sentence that
  depends on "as discussed above."
- **Question-based content.** Headings and FAQ entries phrased the way a
  person actually asks an AI assistant ("How often should I change my
  bike's engine oil in Hyderabad's heat?"), not the way a person types
  into a search box ("bike engine oil change frequency"). Both phrasings
  matter, but AI-search demands the former explicitly.
- **Comparison articles.** A dedicated content shape — Mineral vs.
  Semi-Synthetic vs. Full-Synthetic Oil, Doorstep vs. Garage Service, cost
  comparisons across brands — built as scannable tables. Tables are the
  single most reliably extractable format across every major AI engine.
- **Step-by-step guides.** Ordered, numbered steps (backed by `HowTo`
  schema, Section 14's schema list below) for anything procedural — "How
  to check your bike's chain tension," "How to prep your bike for a long
  ride." AI engines parse and quote ordered lists cleanly.
- **Expert articles.** Content authored or reviewed by a named, credentialed
  person — the Founder (Section 7) or a named lead mechanic — with an
  explicit byline and `author`/`reviewedBy` schema. This is an EEAT signal
  (Section 19) that AI engines increasingly weight when deciding which
  source to trust enough to cite.
- **FAQ architecture.** Every Content Hub (Section 15), service, brand, and
  model page carries a scoped FAQ block using the existing polymorphic
  `FAQ` entity (Phase 2.5 §1) — each answer written as a standalone
  extractable unit, never referencing "the section above."
- **Schema strategy.** Extends Phase 2 §15's schema table with
  AI-search-relevant types: `HowTo` (step-by-step guides), `Article` with
  explicit `author`/`reviewedBy` pointing at the Founder/expert entity, and
  `speakable` markup on FAQ/answer blocks (originally a voice-search
  signal, now also read by several AI-answer crawlers as a hint toward the
  most quotable passage on a page).
- **Internal linking.** Topic-cluster linking (Section 15) so both
  crawlers and LLM retrieval pipelines can trace "this article belongs to
  the Engine Oil topic, which belongs to the Maintenance domain" —
  topical depth is itself a discoverability signal, not just a UX nicety.
- **Entity relationships.** Structured data should mark up real-world
  entities, not just page text — `Organization` (MR Bike Doctor), `Place`
  (each City/Area), `Person` (the Founder), and brand names referenced as
  named entities consistently across pages — so AI knowledge graphs learn
  to associate "MR Bike Doctor" with "bike service," "Hyderabad," and
  specific brand names as connected facts, not coincidental keyword
  overlap.

**The goal stated plainly:** when someone asks an AI assistant "how often
should I service my Royal Enfield" or "is doorstep bike service reliable,"
MR Bike Doctor's content should be the thing the assistant paraphrases or
links to — the site becomes a citable authority, not just a search result.

## Section 15 — Content Hub Strategy

Isolated blog posts (Phase 2 §5 categories, Section 8 above) still exist,
but every major topic additionally gets organized into a **Content Hub** —
one pillar page that aggregates and links every related piece of content
on that topic, matching the structure:

```
Engine Oil
  ↓
Oil Change Guide (pillar)
  ↓
Oil Types · Oil Change Cost · When to Change Oil ·
Best Oil for Royal Enfield (cluster articles)
  ↓
Related FAQs
  ↓
Related Services
  ↓
Download App
```

**No new route family.** To honor the approved sitemap (Section 3), a hub
pillar page is simply a `Blog Post` record with `isPillar: true` and a
`clusterPostIds[]` field listing the related articles in order — it lives
at the same `/blog/[category]/[slug]` URL every other article uses. Cluster
articles are ordinary `Blog Post` records that additionally set
`hubId` back to their pillar. No new top-level page type, no sitemap
change — just two additive fields on the existing Blog Post entity (Phase
2.5 §3).

**What a hub page contains, beyond a normal article:** the pillar
introduction/overview content, an ordered table of contents linking every
cluster article, a rollup of FAQs tagged to that topic (via the existing
`FAQ.tags` polymorphic field, Phase 2.5 §3), a "Related Services" block
linking to the `/services/[service]` page(s) the topic maps to, and a
Download App CTA at the end — exactly the flow diagrammed above.

**Which topics become hubs:** any topic with 4+ planned articles is a hub
candidate — Engine Oil, Battery, Brakes, Chain & Drivetrain, Puncture &
Tyres, Bike Wash & Detailing, Monsoon Care, Summer Care, per-major-brand
maintenance (Royal Enfield, Honda, TVS, …). A topic with only one or two
planned articles stays a plain category article until it earns a hub.

**Why this over flat categories alone:** categories (Phase 2 §5) group
content by broad type ("Maintenance Tips"); hubs group content by *topic*
regardless of category, which is what lets a single pillar page like "Oil
Change Guide" pull in a cost article, a timing article, and a brand-
specific article that might otherwise sit in three different categories
with no page tying them together — this is also what Section 14's
"topical depth" signal and Section 18's authority pages are built on top
of.

## Section 16 — Location SEO Hierarchy

Extends the geography model in Phase 2.5 §1/§2 with one new tier and an
explicit combinatorial chain down to the model level:

```
Country
  ↓
State
  ↓
City
  ↓
Area
  ↓
Service
  ↓
Brand
  ↓
Bike Model
```

Example chain: Bike Service Hyderabad → Bike Service Gachibowli → Royal
Enfield Service Gachibowli → Bullet Service Gachibowli.

**What's new here versus Phase 2.5:** a **State** tier is added above City
(City currently has no parent in Phase 2.5 §1/§3 — this adds one:
`stateId` on the City entity, `Country` assumed singleton/implicit for now
since the business is India-only). Everything below City — Area, Service,
Brand, Bike Model — already exists in Phase 2.5's model; what's new is the
explicit expectation that these tiers **combine** into pages (Section 17)
rather than each tier only having its own standalone page.

**Aliases.** Colloquial names need to resolve to the canonical entity
without creating duplicate content — "Bullet" is the common name for
certain Royal Enfield models. Add an `aliases[]` field to `Brand` and
`Bike Model` (Phase 2.5 §3); an alias resolves (redirects, per the Section
6 redirect-record pattern in Phase 2.5) to the canonical Model page rather
than getting its own duplicate page — so "Bullet Service Gachibowli" and
"Royal Enfield Classic Service Gachibowli" are the same underlying page if
"Bullet" is an alias of that model, but a genuinely distinct page if it
refers to a genuinely distinct model line.

**Internal linking:** every page in the chain links up (Area → City →
State) and down (City → its Areas, Brand → its Models) per the existing
internal-linking graph (Phase 2 §17), plus sideways at the combination
level per Section 17 below — a Brand+Area page links to the plain Area
page, the plain Brand/Model page, and the relevant Service page.

## Section 17 — Programmatic SEO

Scalable, data-driven page generation for the combinatorial patterns the
Location SEO hierarchy (Section 16) implies:

```
{Brand} Service
{Model} Service
{Service} in {City}
{Service} in {Area}
{Brand} Service in {City}
{Brand} Service in {Area}
```

**Generation rule — data-driven, never speculative.** These pages are
*not* generated for every mathematical combination of the underlying sets
(that produces the classic "doorway page" anti-pattern and both search
engines and AI crawlers penalize thin, near-duplicate combinatorial pages
harder than they used to). A combinatorial page is only generated when the
combination has enough real, distinct backing data to fill it — concretely:
a `{Brand} Service in {Area}` page generates only once that Brand has
actual active coverage (services offered, at least one real
testimonial/FAQ tagged to that combination, or a locally-relevant stat) in
that Area, not simply because both records exist independently.

**No duplicated content, concretely.** Each combinatorial template pulls
from existing entities only — `Service`, `City`, `Area`, `Brand`, `Bike
Model` (Phase 2.5 §3) — and must inject genuinely unique content per the
Phase 2 §7 uniqueness floor: a local availability note, a brand-specific
local stat, an area-specific FAQ pulled via the polymorphic `FAQ.tags`
field, and area+brand-tagged reviews if any exist. Where two combinatorial
URLs would otherwise be near-identical (e.g., a Brand with only one
relevant Model in a small Area), the thinner page carries a canonical tag
pointing at the stronger, more complete page rather than both being
independently indexed.

**Implementation shape:** one template per combination pattern (not one
per instance) reading from a query over the existing Section 3-defined
entities — the same "one template, many records" principle already
governing `/cities/[city]/[area]` and `/brands/[brand]/[model]`
(Phase 2.5 §12), just one join deeper.

## Section 18 — Authority Pages

A distinct content type: long-form, evergreen, comprehensive guides that
aren't scoped to one service/brand/city and are built to be the definitive
page on their topic — the pages most likely to earn backlinks, direct
navigation, and AI-engine citations over the long run.

Examples: "Best Bike Service in India," "Complete Bike Maintenance Guide,"
"Bike Service Cost Guide," "Royal Enfield Maintenance Guide," "Honda Bike
Care Guide," "Monsoon Bike Care," "Summer Bike Care," "Long Ride
Preparation."

**Relationship to Content Hubs (Section 15):** some authority pages *are*
hub pillar pages at a higher level of abstraction — "Complete Bike
Maintenance Guide" can sit above the Engine Oil, Battery, and Brakes hubs
as a hub-of-hubs, linking into each. Others are standalone and
city/brand-agnostic by design — "Best Bike Service in India" is a broad
authority piece that doesn't belong to any single hub, but should link out
to the relevant City pages (Section 16) as supporting evidence.

**"Bike Service Cost Guide" specifically replaces the old pricing-
calculator concept removed in Section 2** — it's a content guide (typical
price ranges, what drives cost, how to compare quotes) rather than an
interactive tool, consistent with this document's rule that the website
never runs a transactional/calculator feature.

**No new route family**, same as Section 15 — authority pages are Blog
Post records (an "Authority Guides" category, or the pillar flag from
Section 15), not a new top-level path.

**Elevated linking:** because these pages carry disproportionate SEO/GEO
value, they get explicit priority placement — footer links, homepage
cross-links, and a `boost` value set high in the search index schema
already defined for this purpose (Phase 2.5 §9's `boost` field) — plus a
cross-link from every service/city/brand page whose topic they cover.

## Section 19 — Trust Architecture (EEAT)

Reusable trust-building content sections, extending the About/Founder
architecture (Sections 6/7) with pieces specifically aimed at Google's and
AI engines' EEAT (Experience, Expertise, Authoritativeness,
Trustworthiness) evaluation:

| Section | What it covers | EEAT dimension |
| --- | --- | --- |
| Founder Story | Already defined (Section 7) | Expertise, Trustworthiness |
| Company Journey | Already defined as the About page Timeline (Section 6) — cross-referenced, not duplicated | Experience |
| Workshop Standards | New — describes mechanic training, tooling, and quality standards used across the mechanic network | Expertise, Trustworthiness |
| Verified Partner Process | New — explains *how* a mechanic/garage becomes verified, as informational content only (no individual garage listing, per Section 9's removal of public Garage pages) | Trustworthiness |
| Quality Checklist | New — the actual checklist followed during a service, published as content; doubles as both a trust signal and its own piece of concrete, quotable, AI-search-friendly content (Section 14) | Trustworthiness, Expertise |
| Service Process | Distinct from "How the App Works" (Section 4, which explains app UX) — this describes the physical quality/process side of a service visit | Experience, Trustworthiness |
| Customer Stories | New, lightweight content type — a longer-form single-customer narrative, distinct from the short `Review` entity (Phase 2.5 §1); optionally includes a named customer and photo | Experience, Trustworthiness |
| Media Mentions | Press logos/links — the function the old `/press` page (Phase 2 §3) would have served, folded into `/about` as a section rather than a new route, consistent with not redesigning the sitemap | Authoritativeness |
| Certificates | Real training/business certifications displayed as trust badges | Trustworthiness, Authoritativeness |

These live on `/about` (extending Section 6) or as linked sub-sections,
not as new top-level routes — same "no sitemap redesign" constraint as
Sections 15 and 18.

## Section 20 — Content Scaling Headroom

A explicit checkpoint against the target scale: **100 cities, 5,000 areas,
100 bike models, 100+ services, 10,000 blog articles, unlimited SEO
landing pages** — confirming what's already sufficient and naming the one
real ceiling worth planning for now.

- **Cities/Areas (100 / 5,000):** already a pure data-entry operation
  under the Phase 2.5 §12 migration pattern (add a record, `sitemap.ts`
  and internal linking pick it up automatically) — no architectural
  change needed, this is exactly the scale that pattern was designed for.
- **Bike Models (100):** already namespaced per-Brand (Phase 2.5 §11,
  `model_{brand}-{model}` IDs) — trivial at this scale.
- **Services (100+):** flat records today; no structural stretch.
- **Blog articles (10,000):** this is where the CMS-migration trigger
  (Phase 2.5 §8) stops being hypothetical. A concrete, numeric addition to
  that trigger: migrate off flat MDX/JSON once past roughly 500–1,000
  published posts, or once non-engineers are authoring regularly —
  whichever comes first — since a flat file directory becomes an
  editorial bottleneck long before 10,000 files is a technical problem
  for the framework itself.
- **Unlimited SEO landing pages:** bounded by Section 17's data-driven
  generation rule and doorway-page guardrail — "unlimited" means "as many
  as have real distinct backing content," not a raw page-count target to
  hit artificially.
- **Search index and sitemap generation** (Phase 2.5 §9, `app/sitemap.ts`)
  are already designed to scale by record count rather than by code — 
  confirmed sufficient for all of the above with no changes.
- **One real ceiling to flag now:** the XML sitemap protocol's own limits
  (50,000 URLs / 50MB per sitemap file). At the upper end of this scale
  target, `app/sitemap.ts` will need to produce a **sitemap index** (several
  chunked sitemap files referenced from one index file) rather than a
  single flat file. Worth naming now, even though far from a near-term
  concern, so it isn't a surprise later.

## Section 21 — Future Backend Integration

**Current state:** content-first, as established in Phase 2.5 §8 —
Cities, Areas, Garages (now internal-only, Section 9), Services, Reviews,
Ratings, and Blogs are sourced from structured JSON/MDX files or curated
editorially.

**Future state:** the same entities sourced live from the MR Bike Doctor
backend/app's own data — real garage/mechanic coverage counts, real
aggregate ratings, live city/area launch status — instead of editorially
maintained website copy.

**Why the frontend doesn't need to change.** Every page already reads
content through a "fetch a record by slug/id" access pattern (Phase 2.5
§8's explicit design intent) rather than importing JSON files directly in
components. That means the migration path is: name a thin data-access
layer explicitly — functions like `getCityBySlug()`, `getServiceBySlug()`,
`getReviewsForEntity()` — that today reads local content records and later
calls the backend's API, returning the exact same shape (Phase 2.5 §3's
field reference) either way. Swapping what's behind that interface (flat
file → CMS → live backend API) is a data-layer change; no page component,
template, or route is touched. This is the same non-negotiable already
established for the CMS-migration trigger in Phase 2.5 §8 — this section
just names the next hop after it.

**Reviews/Ratings specifically:** curated editorially under this direction
change (Section 9, since the website has no booking event of its own to
source a verified review from). Once backend integration lands, real
aggregate ratings and review text get pulled the same way the app already
does — reconnecting to the original "one source of truth" principle
(Phase 2 §13, Phase 2.5 §10) that this direction change had to loosen only
temporarily for Reviews.

**Garages specifically:** even though Garage has no public page (Section
9), backend integration should still sync garage/mechanic records
internally so that stats shown on the site — "verified mechanics" count on
the Trust Band (Section 4), city/area coverage counts — are real and live
once integrated, not editorially typed numbers standing in for them.

**Migration is additive, staged, never a rewrite:** flat files today →
headless CMS at the Phase 2.5 §8 trigger (sharpened by Section 20's
numeric threshold) → direct backend API integration once the mobile
backend exposes read endpoints for these entities — each stage swaps the
data source under the same access-layer interface, with the frontend
templates built in Phase 5 untouched by any of it.

## Master architecture status

With Sections 1–21, this document is the complete master architecture for
the MR Bike Doctor website ahead of implementation: business direction and
scope (§1–2), sitemap and homepage (§3–5), About/Founder (§6–7), the blog
and GEO/content-hub/authority-page SEO system (§8, §14–15, §18), the full
location and programmatic SEO model (§16–17), the content and schema model
(§9–10, §20–21), trust/EEAT architecture (§19), goals (§11), and the code
and phased-implementation plan (§12–13). Phase 5 implementation should
treat this document, in full, as its spec.

# MR Bike Doctor — Website Blueprint (Phase 2)

Status: Draft, pending approval. No UI or code is produced in this phase —
this document is the foundation for Phase 3 (Homepage UI & Development).

---

## Section 1 — Business Understanding

### Who is our customer?

MR Bike Doctor serves five overlapping customer segments, all currently
concentrated in Hyderabad:

1. **Daily commuters** — salaried professionals and students who rely on
   their bike/scooter for daily transport and cannot afford the downtime of
   a garage visit during work hours.
2. **Multi-bike households** — families managing 2+ vehicles (e.g. a Honda
   Activa for a spouse and a Royal Enfield for the primary rider), who want
   one account and one service history for all of them.
3. **Emergency situations** — riders stranded with a breakdown, flat
   battery, or puncture, usually searching on mobile with high urgency and
   low brand loyalty (whoever answers first wins).
4. **Brand loyalists** — owners of Royal Enfield, Honda, TVS, Yamaha, Bajaj,
   Hero, and similar, who search by brand because they believe (rightly or
   wrongly) that generic mechanics don't understand their bike.
5. **Remote bookers** — adult children or family members booking service
   for a parent's or relative's bike in another part of the city (or
   country), where doorstep service and live tracking substitute for the
   requester's own presence.

### What problems are we solving?

- **Time cost.** Dropping a bike at a garage and waiting, or returning
  later, costs an hour or more that most urban riders don't have.
- **Trust deficit.** Traditional garages are opaque about what was actually
  replaced, what genuinely needed fixing, and why the bill is what it is.
- **Price opacity.** Pricing is negotiated verbally and varies mechanic to
  mechanic, making it impossible to know if a quote is fair before agreeing.
- **No record.** Paper bills get lost; there's no persistent history of
  what was done to a bike, when, or by whom — which matters for warranty,
  resale, and simply remembering when the last service was.
- **Discovery is hard.** Finding a garage that is nearby, open, trustworthy,
  and good with a specific brand currently means asking around or trusting
  an unfamiliar Google listing.
- **Emergencies have no reliable channel.** A breakdown at night or on a
  highway has no dependable, fast-response option today.

### Why will users choose MR Bike Doctor?

- The mechanic comes to them — home, office, or roadside — instead of the
  reverse.
- Prices are shown before booking, not negotiated after the work is done.
- Every mechanic/garage on the platform is verified, and every job is
  trackable live, the way a food or cab order is.
- Every service produces a digital invoice and adds to a permanent,
  per-bike service history.
- One account handles every bike a household owns.

### What makes us different?

MR Bike Doctor is not "a garage with a website" and not purely a
directory/aggregator either — it's a **hybrid marketplace with a
doorstep-first default**: users can request a mechanic to come to them, or
browse and compare nearby garages when they'd rather go in. Most
competitors pick one model; offering both, under one trusted brand, with
tracking/wallet/history layered on top, is the differentiator. The
secondary differentiator is architecture: the platform is built
city-first but designed to expand without being rebuilt — Hyderabad is a
launch market, not a ceiling.

### What trust signals should be visible?

- Verified-mechanic / background-checked badge
- Transparent, itemized pricing shown before confirmation
- Star rating aggregated from real completed bookings + review count
- Live order tracking (map + status, same mental model as food delivery)
- Digital invoice and warranty terms on parts/labor
- Secure payment options (UPI, cards, wallet) with visible logos
- A running counter of bikes serviced / cities live / average response time
- Real customer photos/testimonials, not stock imagery
- A visible, staffed support channel (phone + WhatsApp), not just a form
- Data-privacy assurance, given the app stores vehicle and location data

---

## Section 2 — Website Goals

Ranked by priority, since they compete for the same homepage real estate:

1. **App downloads.** The transaction happens in the app, not the website.
   The website's core job is to convert an anonymous searcher into an app
   install. Every other goal is subordinate to this one on the homepage.
2. **Organic SEO / local search dominance.** This is the acquisition
   channel with the best long-term unit economics (near-zero marginal
   cost per lead once ranked), and it's the explicit mandate for this
   project. Winning "bike service near me" / "bike service hyderabad" and
   brand-specific queries is the single biggest lever available to the
   website.
3. **Lead generation (call / WhatsApp).** Not everyone who lands on the
   site is ready to install an app. A lower-friction path (tap to call,
   tap to WhatsApp) captures intent-heavy, install-reluctant traffic,
   particularly for emergency and first-time-visitor searches.
4. **Garage partner acquisition.** Growth into new areas and cities is
   bottlenecked by supply (verified garages/mechanics), not just demand.
   The website needs its own funnel for garage owners to apply.
5. **Customer trust / brand credibility.** Before a stranger installs an
   app that will know where their vehicle is and hold their payment
   details, the website has to look and read like a serious, safe company.
6. **Brand awareness.** A byproduct of ranking well and reading well — not
   pursued directly, but supported by consistent presence across
   service/brand/city content.

---

## Section 3 — Website Information Architecture

Full sitemap. Everything under `/cities`, `/brands`, and `/services` is a
**dynamic, data-driven route** (one template, many data records) so that
adding a new city, brand, or service later never requires new pages or
new code — only new content (see Section 8).

```
/                                   Home
/about                              About Us
/how-it-works                       How It Works
/pricing                            Pricing (transparent, ranges by service)
/download                           Download App (store badges, QR, screenshots)
/partner                            Partner With Us (garage/mechanic signup)
/partner/thank-you                  Success page after partner application
/careers                            Careers
/careers/[role]                     Individual role posting

/services                           Services (hub / index)
/services/bike-service              Full bike service / general servicing
/services/doorstep-repair           Doorstep bike repair
/services/oil-change                Oil change
/services/battery-replacement       Battery replacement
/services/brake-service             Brake service
/services/chain-cleaning            Chain cleaning & lubrication
/services/bike-wash                 Bike wash / detailing
/services/pickup-drop               Pickup & drop
/services/emergency-breakdown       Emergency breakdown assistance
/services/puncture-repair           Puncture repair

/cities                              Cities (hub / index) — coverage map
/cities/hyderabad                    City page (live)
/cities/hyderabad/[area]             Area page, e.g.:
  /cities/hyderabad/gachibowli
  /cities/hyderabad/kondapur
  /cities/hyderabad/madhapur
  /cities/hyderabad/hitech-city
  /cities/hyderabad/kukatpally
  /cities/hyderabad/banjara-hills
  /cities/hyderabad/jubilee-hills
  /cities/hyderabad/secunderabad
  /cities/hyderabad/miyapur
  /cities/hyderabad/lb-nagar
/cities/[future-city]                "Coming soon" template with waitlist
                                      capture — see Section 8

/brands                              Brands (hub / index)
/brands/royal-enfield
/brands/honda
/brands/tvs
/brands/yamaha
/brands/bajaj
/brands/hero
/brands/suzuki
/brands/ktm

/blog                                Blog index
/blog/[category]                     Category archive
/blog/[category]/[slug]              Individual article
  Categories: Maintenance Tips, Seasonal Care, Brand Guides, City Guides,
  Riding Safety, Battery & EV Care, Cost Guides

/reviews                             Testimonials / social proof (optional
                                      standalone; also embedded elsewhere)
/faq                                 FAQs (indexed, schema-marked)
/contact                             Contact Us
/support                             Help Center (booking issues, tracking,
                                      account/app help — distinct from
                                      /contact, which is sales/general)

/privacy-policy
/terms-and-conditions
/refund-cancellation-policy
/delete-account                      Required for Play Store/App Store
                                      account-deletion policy compliance

/offers                              Active promo codes / seasonal offers
/press                               Media mentions (future, stubbed early)

/thank-you                           Generic post-form-submission success
/404                                 Not found

(existing, technical) /sitemap.xml, /robots.txt — already wired to
config/site.ts per the Phase 1 foundation.
```

**Rationale for less obvious inclusions:**

- `/delete-account` is a hard App Store/Play Store requirement once the app
  handles account data — must exist before submission, not added later.
- `/support` vs `/contact`: separating "I have a problem with a booking"
  from "I want to talk to sales/press/partnerships" keeps both funnels
  clean and lets support content (tracking help, refund status) be indexed
  independently from sales content.
- `/cities/[future-city]` "coming soon" pages let the site start ranking
  and capturing demand (email/WhatsApp waitlist) in a city _before_
  operations are ready there — see Section 8.
- `/offers` exists mainly to give app-install campaigns and repeat-usage
  incentives a canonical, linkable page rather than living only inside the
  app.

---

## Section 4 — Homepage Content Architecture

Sections in order, with the reasoning for each. No UI/visual design implied
— this is content sequencing only.

1. **Header / Navigation (persistent)** — Services, Cities, Brands,
   Pricing, How It Works, Blog, Partner, Download App (primary button).
   Not a "section" but sets the information hierarchy for everything below.

2. **Hero** — One sentence value proposition ("Doorstep bike service,
   booked in a minute"), a city selector, and the primary CTA (Download
   App), with a secondary CTA (Book a Service / WhatsApp us). This is the
   only content 100% of visitors see; it must state the value prop and
   give an immediate action for both install-ready and install-reluctant
   visitors.

3. **Trust / Stats bar** — bikes serviced, cities live, average rating,
   average response time. Placed immediately after the hero because trust
   is the biggest barrier to both "install this app" and "give a stranger
   my bike," and it should be resolved before the visitor scrolls into
   detail.

4. **Services grid** — the 9–10 core services as scannable tiles linking to
   their own pages. Lets a visitor who arrived for one specific need (e.g.
   "battery replacement") self-identify immediately, and is a primary
   internal-linking hub into the service pages that carry SEO weight.

5. **How It Works** — a short, literal sequence (this is one of the few
   places a numbered 1-2-3-4 step treatment is justified, because the
   content genuinely is an ordered process): request → get matched/quoted →
   mechanic arrives → pay & get digital invoice. Exists to kill the "how
   does this even work" hesitation before asking for an install.

6. **Why Choose Us / Features** — verified mechanics, live tracking,
   transparent pricing, digital service history, wallet. This is where the
   differentiation from "just a local mechanic" is made explicit, since the
   hero doesn't have room to argue the case, only state it.

7. **Brands We Service** — logo/grid of Royal Enfield, Honda, TVS, Yamaha,
   Bajaj, Hero, etc., linking to brand pages. Directly serves brand-name
   search intent and reassures brand loyalists (Section 1) that their
   specific bike is understood, not just "bikes in general."

8. **Areas / Cities We Serve** — Hyderabad + its serviced neighborhoods,
   linking into city/area pages. This is the internal-linking backbone for
   local SEO (Section 5) and should visually communicate "we are actually
   local here," not just present in a generic sense.

9. **Pricing preview** — representative price ranges for 3–4 popular
   services with a link to the full pricing page. Price transparency is a
   named trust signal (Section 1); showing a number, even a range, on the
   homepage converts better than making visitors hunt for it.

10. **App showcase / Download App** — screenshots, store badges (App
    Store + Play Store), QR code for desktop visitors. This is the
    conversion moment for Goal #1 (Section 2) and deserves its own full
    section rather than being folded into the hero.

11. **Customer testimonials / reviews** — real names, real bikes, star
    ratings. Placed after the product has been explained (sections 4–10)
    so it's read as confirmation, not a cold claim.

12. **Blog / tips teaser** — 3–4 recent articles. Signals an active,
    maintained business (freshness is an SEO ranking factor) and gives
    return visitors and search traffic landing on articles a path back into
    services/cities.

13. **Partner With Us teaser** — short strip aimed at garage owners/
    mechanics, separate from the customer-facing content above it. Serves
    Goal #4 (Section 2) without competing with the primary customer funnel
    for attention.

14. **FAQs** — 6–8 of the highest-intent questions (pricing, coverage
    areas, how doorstep service works, cancellation). Directly supports
    featured-snippet SEO opportunities and reduces pre-install objections.

15. **Final CTA banner** — one last, unambiguous download/book prompt
    before the footer, for visitors who scrolled the whole page without
    converting on an earlier CTA.

16. **Footer** — full sitemap links (services, cities, brands, blog
    categories), legal links, contact info, social links. This is the
    single most important element for crawl coverage: it's the one place
    every deep page (every city, every brand, every service) is linked
    from the homepage, which matters enormously for how search engines
    discover and weight the site.

---

## Section 5 — SEO Architecture

### Primary keywords

`bike service near me` · `bike repair near me` · `bike service hyderabad`
· `bike mechanic hyderabad` · `doorstep bike service` · `on-demand bike
service` · `bike service app`

### Secondary keywords

`royal enfield service` · `honda bike service` · `tvs bike service` ·
`yamaha bike service` · `bike wash` · `oil change` · `battery replacement`
· `brake service` · `chain cleaning` · `bike puncture repair` · `bike
pickup and drop` · `emergency bike repair` · `two wheeler service`

### Long-tail keywords (highest-converting, lowest-competition tier)

- "best bike service center in gachibowli"
- "royal enfield classic 350 service cost hyderabad"
- "doorstep bike service near kondapur"
- "bike battery replacement price hyderabad"
- "how much does a full bike service cost"
- "emergency bike breakdown assistance hyderabad night"
- "bike service at home hyderabad"
- "[brand] [model] service interval / cost"

### Local SEO

- Google Business Profile as a service-area business for Hyderabad at
  launch; one profile per city added as operations expand.
- Consistent NAP (name/address/phone) across the site, GBP, and any
  directory listings.
- `LocalBusiness` and `Service` structured data on every city and service
  page.
- Embedded coverage-area map and area-specific testimonials on city pages.
- Deliberate targeting of "near me" intent via page copy, not just meta
  tags — area pages exist specifically to catch geo-qualified queries a
  single city page can't rank for.

### City pages (`/cities/[city]`)

Unique per city: named coverage areas, local response-time stat, local
testimonials, local partner-garage count, and (for not-yet-live cities) an
honest "launching soon" framing with waitlist capture instead of pretending
service already exists there.

### Area pages (`/cities/[city]/[area]`)

Unique per area: nearest landmark/pincode framing, area-specific mechanic
availability, area-specific testimonials, estimated arrival time from
that area. These exist to catch hyperlocal queries ("bike mechanic
gachibowli") that a city-wide page is too broad to rank for.

### Brand pages (`/brands/[brand]`)

Unique per brand: model-wise service intervals and indicative pricing,
brand-specific common issues, and explicit "multi-brand, not
brand-exclusive" framing where relevant, since some searchers specifically
worry a generic mechanic won't understand their bike.

### Service pages (`/services/[service]`)

Unique per service: problem framing, process specific to that job,
indicative price range, service-specific FAQs, and links to 2–3 related
services (e.g. Chain Cleaning ↔ Oil Change ↔ Bike Wash).

### Blog categories

Maintenance Tips · Seasonal Care (monsoon/summer bike care) · Brand Guides
· City Guides · Riding Safety · Battery & EV Care · Cost Guides. Each
category is chosen to funnel into a specific page type: Brand Guides link
into `/brands/*`, City Guides into `/cities/*`, Cost Guides into
`/pricing` and `/services/*`.

### Future expansion strategy

The keyword and page architecture above is written generically
("[city]", "[area]", "[brand]", "[service]") specifically so it scales by
adding data records, not by redesigning the site — detailed in Section 8.

---

## Section 6 — Conversion Strategy

### Funnel model

Awareness (organic search) → Interest (service/city/brand landing page) →
Consideration (pricing, reviews, FAQ) → Action (install or call/WhatsApp)
→ Retention (blog return visits, offers, in-app notifications — outside
website scope but the website should feed it via `/offers` and email/
WhatsApp capture).

### CTA placement

A CTA appears after every major homepage section (never only at the top),
on every service/city/brand/blog page, and persistently in a mobile sticky
bottom bar. Deep content pages (blog articles, area pages) get inline CTAs
relevant to what they're about — a "battery replacement" article links to
the Battery Replacement service page and its own booking CTA, not a
generic homepage link.

### Download buttons

3–5 on the homepage: hero, app-showcase section, sticky mobile bar,
final CTA banner, and footer. More than that starts to read as
desperate/spammy; fewer than three under-serves visitors who scroll past
the hero without converting. Both store badges plus a QR code (for
desktop visitors who'll otherwise have to search the store manually)
appear together wherever a download CTA is shown.

### Encouraging installs specifically

- Every non-app CTA (call, WhatsApp) is a **fallback**, not an equal
  option — copy and placement should make the app the default suggestion,
  with click-to-call/WhatsApp positioned as "prefer to just call us?"
  rather than presented as an equally weighted first choice.
- WhatsApp Business as a low-friction bridge channel is explicitly
  recommended for the Hyderabad launch phase, before app habit exists in
  the market — it captures leads that would otherwise bounce rather than
  install an app for a single, possibly one-off, need.
- Trust elements (rating, verified badge, guarantee language) should sit
  directly adjacent to CTAs, not just elsewhere on the page — friction at
  the point of action is what actually suppresses conversion.

---

## Section 7 — Content Strategy

### Pages requiring genuinely unique content

Every city page, every area page, every brand page, every service page,
and every blog post. This is the largest content-production surface on the
site and the one most at risk of thin/duplicate content if treated as a
template with only the place-name swapped.

### Pages that must never be near-duplicates of each other

City pages, area pages, and brand pages are the highest risk category
specifically because they're generated from a shared template — a search
engine (and a human) can tell instantly if "Gachibowli" and "Kondapur"
differ only in the H1. Each page needs a genuinely distinct intro,
distinct local/brand details, and distinct testimonials — not just a
mail-merged name swap. As a working floor: each page should carry enough
unique, meaningful content (roughly 600–800+ words of substance, not
padding) that removing the place/brand name would still leave a
recognizably different page.

### How city pages should differ

Local coverage-area list, local response-time and partner-garage stats,
city-specific testimonials, city-specific hero framing (a launched city
reads as "we're here"; a not-yet-launched city reads honestly as
"launching soon, join the waitlist" — never faked as already live).

### How area pages should differ

Landmark/pincode-level framing, area-specific mechanic availability and
ETA, area-specific testimonials — deliberately more hyperlocal and more
narrowly scoped than the city page above it in the hierarchy.

### How service pages should differ

Each is written around the actual problem it solves (a puncture is an
urgent, often roadside need; an oil change is routine maintenance; brake
service is a safety concern) — the tone, urgency framing, and FAQs should
reflect that the underlying customer need is different, not just relabel
the same template copy per service.

### Editorial ownership

Blog content should be planned as keyword-cluster-driven (each article
written to rank for a specific long-tail query and to internally link into
the service/brand/city page it supports), not as a generic company-news
blog.

---

## Section 8 — Future Roadmap

The website must be able to grow **Hyderabad → Telangana/nearby → major
South Indian metros → pan-India top-20 → long-tail tier-2/3 cities**
without changing its architecture — only its data.

### How the architecture supports this

- `/cities/[city]/[area]`, `/brands/[brand]`, and `/services/[service]`
  are single templates driven by content records (CMS entries or
  structured JSON/MDX), not one hand-built page per city/brand/service.
  Launching a new city is a content-entry task, not an engineering task.
- New cities can exist on the site _before_ operations are ready there,
  using the "coming soon + waitlist" pattern (Section 5/7) — this lets SEO
  and demand-capture start accruing in a market ahead of the ops team's
  actual launch date, rather than the two being sequential.
- Phase gating should be operational-readiness-driven (partner-garage
  density in a given city), not SEO-opportunity-driven — the pattern above
  means SEO no longer has to wait for ops, but ops readiness still gates
  when a city flips from "coming soon" to "live."

### Suggested phase sequence

1. **Phase A (current):** Hyderabad, fully live, with area-level pages for
   its major neighborhoods.
2. **Phase B:** nearby Telangana/AP cities, using the same city-page
   template with genuinely distinct local content per Section 7.
3. **Phase C:** major South Indian metros (Bengaluru, Chennai, etc.).
4. **Phase D:** pan-India top-20 cities by two-wheeler density.
5. **Phase E:** long-tail tier-2/3 cities via a templated,
   content-record-driven rollout once the operations model is proven
   enough to support low-touch launches.

### Recommendation for Phase 3+

Model city/area/brand/service content as structured data (CMS or JSON/MDX
records) from the start, even while Hyderabad is the only live city —
retrofitting this after hand-building a handful of one-off pages is far
more expensive than building the data-driven pattern once and populating
it with one city's worth of records today.

---

---

## Revision 1 — Added Sections (9–18)

Sections 1–8 above are unchanged and approved. The sections below extend
the same blueprint with architecture that was missing: hyperlocal "near
me" search, model-level SEO, cost content, garage profile pages,
real-time serviceability, a structured review model, expanded schema, the
underlying content data model, an explicit internal-linking strategy, and
a forward path to AI-powered search. Nothing here replaces Sections 1–8;
it plugs into them at the points noted inline.

## Section 9 — "Near Me" SEO Strategy

The instinct with "near me" queries is to build a page per phrase
(`/bike-service-near-me`, `/mechanic-near-me`, `/puncture-repair-near-me`
…). That's a trap: it's the exact combinatorial, templated-duplicate
problem Section 7 already warns against, and modern Google resolves "near
me" by re-ranking _existing_ local content against the searcher's actual
location rather than rewarding pages that merely contain the words "near
me." The strategy below treats "near me" as a **resolution layer on top
of the Section 3 sitemap**, not a new page family.

### URL structure

No dedicated `/[service]-near-me` URLs. One lightweight entry hub,
`/near-me`, exists purely to catch the literal query and immediately
resolve the visitor into the real answer — a `/cities/[city]/[area]` page
or a service page personalized to their area. The area and service pages
themselves _are_ the near-me landing pages; they just get a location-aware
layer added to them (below).

### Landing pages

Every `/cities/[city]/[area]` page gets a **"Services near you in
[Area]"** module (all services, area-localized CTAs). Every
`/services/[service]` page gets a **"Near you"** module that inserts the
visitor's resolved area into its copy and CTA (e.g. "Book a puncture
repair near Gachibowli"). This reuses the existing pages instead of
minting new ones per phrase.

### Metadata strategy

Titles lean on real geo signals rather than keyword-stuffing "near me":

- Service page: `{Service} at Home in {City} | Doorstep Bike Service Near You — MR Bike Doctor`
- Area page: `Bike Service in {Area}, {City} — Doorstep Mechanic Near You`

`geo.placename` / `geo.position` meta tags and `LocalBusiness.areaServed`
schema (Section 15) carry the actual proximity signal Google uses; the
literal phrase is secondary.

### Internal linking

A persistent location control in the header (same component described in
Section 13) personalizes internal links sitewide once a location is set —
"Services near you" stops pointing at a generic hub and points at the
visitor's resolved area page.

### Dynamic location detection

Browser Geolocation API first (with a permission prompt), silent
IP-geolocation fallback if declined, and a manual "Enter your location"
search box as an explicit override. The resolved location is cached
client-side and drives three things at once: near-me personalization
here, serviceability status (Section 13), and which garages are
surfaced (Section 12) — one resolver, three consumers.

### Future scalability

Because resolution runs against the same city/area data records from
Section 3/16, every new city or area added to that data automatically
gains "near me" coverage. No near-me-specific page is ever hand-built.

## Section 10 — Bike Model SEO (Brand → Model)

Extends the existing `/brands/[brand]` pages one level deeper:
`/brands/[brand]/[model]` — e.g. `/brands/honda/activa-6g`,
`/brands/royal-enfield/classic-350`, `/brands/ktm/390-duke`. This is the
same hub-then-record pattern already used for `/cities/[city]/[area]`; a
brand page becomes a hub listing its model pages, exactly as a city page
is a hub listing its area pages.

**Model page content:** model-specific service schedule/intervals, common
issues for that model, typical price range per service _for that model_
(feeds Section 11), and — importantly — only the services actually
relevant to it (chain cleaning doesn't apply to a CVT scooter like the
Activa; a model page should filter the service list, not show all ten
services generically).

**Why it matters:** this unlocks a large, high-intent, low-competition
long-tail keyword surface directly extending Section 5 — "activa 6g
service cost," "classic 350 service interval," "390 duke oil change" — all
searches a brand-only page is too broad to rank for.

**Cross-linking:** model pages link to the filtered relevant service
pages, to garages that actually service that model (Section 12), and to
"Brand Guides" blog posts about that specific model. The content-
uniqueness floor from Section 7 applies here exactly as it does to
area pages — model pages need real, distinct content, not brand copy with
the model name swapped in.

## Section 11 — Service Cost Pages

"Bike service cost" and "oil change cost" are a distinct search intent
from "book a bike service" — price research before a decision, not
booking-ready intent. The trap here is building a near-duplicate
`/pricing/[service]` page alongside the existing `/services/[service]`
page — the two would cannibalize each other in search results.

**Resolution:** cost content lives _inside_ each existing
`/services/[service]` page as a mandatory "How much does this cost"
section — a price table, the factors that move price, and a cost
comparison across brands/models (linking into Section 10's model pages).
The existing `/pricing` hub (Section 3) becomes the aggregator: a
full cross-service comparison table, each row deep-linking to its
service page's cost section, rather than a competing page per service.

**High-value addition:** because generic "bike service cost" queries
(brand/model-agnostic) are high volume, `/pricing` itself should carry an
interactive **cost estimator** (select brand + model + service → an
indicative price) — a strong on-page content asset and a lead-gen device,
since giving the visitor their estimate is a natural place to ask for a
phone number.

Cost data should be a field on the Service record itself (per Section 16),
scoped by brand/model where price varies, so `/pricing` and every service
page read from one number, never two.

## Section 12 — Garage Profile Pages

A new hub, `/garage/[garage-slug]`, sitting alongside `/brands` and
`/cities` in the Section 3 sitemap. Each profile: name, address/map,
opening hours, verified badge, aggregate rating + review count (Section
14), photo gallery, supported brands (linking to Section 10's brand
pages), services offered (linking to Section 3's service pages), and its
city/area breadcrumb.

This is the website's public, SEO-indexable mirror of the app's "find
nearby garages / compare services" feature named in the original project
brief — real, named local businesses are a far stronger local-relevance
signal than editorial area-page copy alone.

**Internal linking:** every `/cities/[city]/[area]` page gets a "Garages
in [Area]" module linking to these profiles — one of the highest-value
links in the whole site graph (Section 17).

**Operational note:** unlike city/area/brand/model pages, garage pages are
sourced from live partner data, not editorial content — when a garage
partner is approved through `/partner` (Section 2, Goal #4), its profile
page should be created automatically. That closes a loop worth naming
explicitly: **more approved partners → more garage pages → more
hyperlocal long-tail coverage → more organic leads → justifies more
partner acquisition spend.**

## Section 13 — Real-Time Serviceability

The website must call the **same serviceability system the app uses** —
not a parallel, website-only check — so "is this bike serviceable at my
location" only ever has one source of truth.

**UX:** the same location control from Section 9 ("Enter Location" with
autocomplete, or "Use Current Location"). On resolution, the shared
serviceability API returns one of three states:

| State                  | What the visitor sees                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Available**          | Routed straight into the live `/cities/[city]/[area]` content from Section 3                                |
| **Coming Soon**        | The waitlist-pattern page already defined in Section 8                                                      |
| **Temporarily Paused** | The same coming-soon template, with a status flag, explaining a temporary pause and an expected-return note |

"Temporarily Paused" deliberately reuses the Coming Soon template with a
flag rather than becoming a fourth page type — consistent with the
data-driven-template principle running through this whole document.

Both non-available states offer **Notify Me** (captures phone/email +
resolved location into the same waitlist feeding Section 8's pre-launch
demand capture and Section 2's lead-gen goal) and **Change Location**.

This control lives at header level, not on one dedicated page — a visitor
browsing `/services/battery-replacement` from an unserviceable area should
see a location-aware banner in place of the generic booking CTA,
everywhere on the site.

## Section 14 — Review Strategy

Move past flat, sitewide testimonials (as loosely scoped in Section 1 and
Section 4) to a **structured review entity** tagged against Service,
Brand, Model, Garage, City, and Area simultaneously — a single review
("Oil change on my Activa 6G at XYZ Garage in Gachibowli was great") is
naturally a Service review, a Model review, a Garage review, _and_ an
Area review at once.

This lets every page type in the sitemap pull a real, filtered, relevant
set of reviews instead of the same generic testimonials repeated
everywhere — one of the cheapest available sources of the genuinely
unique content Section 7 requires per templated page.

Aggregate ratings roll up at every level (per service, per brand, per
garage, etc.), feeding `AggregateRating` schema at each corresponding page
(Section 15). **Only reviews tied to a verified, completed in-app booking
are eligible** — there is no open review-submission form on the website —
which is what makes the trust signal from Section 1 actually true rather
than just claimed. The existing `/reviews` page (Section 3) becomes a
filterable index across these dimensions rather than a static wall of
quotes.

## Section 15 — Advanced Schema

Extends the `LocalBusiness`/`Service` schema already scoped in Section 5,
mapped explicitly to page type:

| Schema                                  | Where                                                       |
| --------------------------------------- | ----------------------------------------------------------- |
| Organization, WebSite, SearchAction     | Homepage / root layout                                      |
| LocalBusiness (+ GeoCoordinates)        | Every City/Area page, every Garage page                     |
| Service / Offer                         | Every Service page, per brand/model where price varies      |
| FAQPage                                 | Any page carrying an FAQ block                              |
| BreadcrumbList                          | Every nested page — service, city/area, brand/model, garage |
| Review, AggregateRating                 | Garage, Service, Brand, Model, City, Area pages             |
| SoftwareApplication / MobileApplication | `/download`                                                 |
| Article, BlogPosting                    | Every blog post                                             |
| ImageObject, VideoObject                | Garage galleries, blog media, explainer video if produced   |

All of it should come out of one schema-builder module extending the
`seo/json-ld.ts` foundation already built in Phase 1 — fed by the content
data model in Section 16 — rather than hand-authored per page.

## Section 16 — Content Database (Data Model)

The conceptual entities the site runs on, and how they relate — not a
literal DB schema, just the shape a headless CMS or structured content
layer needs to support:

- **City** → has many **Area**
- **Area** → belongs to City; has many **Garage**
- **Brand** → has many **Model**
- **Garage** → belongs to Area/City; supports many Brands; offers many Services
- **Service** → has a price range, optionally scoped per Brand/Model (Section 11)
- **Review** → tagged to any combination of Service, Brand, Model, Garage, City, Area (Section 14)
- **FAQ** → tagged to one or more page types/entities
- **Blog Post** → tagged to a category, optionally linked to specific entities
- **Offer** → belongs to a Service, optionally scoped to Brand/Model
- **Waitlist Lead** → belongs to a City/Area that isn't live yet (Section 13)

This is the concrete version of the CMS recommendation already made in
Section 8 — the content model _is_ this entity list. None of it needs to
be fully populated before Phase 3; Hyderabad can launch on a handful of
records. But Phase 3's homepage components should be built against this
shape (a `ServiceCard` component takes a Service record shaped like this)
rather than hardcoded copy that needs re-templating later.

## Section 17 — Internal Linking Strategy

Not a strict linear chain every page follows, but a **linking graph**
driven by the entity relationships in Section 16, with authority flowing
in three directions:

1. **Broad, from the top** — homepage and footer link out to every hub
   (Services, Cities, Brands, Garage discovery).
2. **Down, hub to record** — each hub links to its children (a service
   hub to its service pages, a city to its areas, a brand to its models).
3. **Sideways, by real relationship** — leaf pages cross-link to entities
   they're _actually_ connected to through data, not generic sitewide
   links: a model page links to garages that actually service that model;
   an area page links to garages actually located there and to
   neighboring areas in the same city.

Every deep page carries a breadcrumb up its hierarchy (Home → Cities →
Hyderabad → Gachibowli), a Download App CTA, 2–3 Related Blog links pulled
by shared tag/category, and an FAQ block specific to that page's entity
type — never the same sitewide FAQ list repeated verbatim.

The governing rule: link relevance is generated from the real data graph
in Section 16, not manually curated by content writers — so as cities,
garages, and models are added, the internal linking graph grows correctly
on its own, with no editorial upkeep required.

## Section 18 — Future AI Search

Two separate things worth planning for now, neither requiring an
architecture change later:

**On-site conversational search.** A natural-language entry point ("My
bike won't start") maps free text to a small **symptom → cause → service**
taxonomy (a new content type: Symptom), then resolves to the matching
Service page plus the nearest available Garage, using the same
location/serviceability resolver from Section 13 — with an Emergency
Breakdown Assistance path if urgency is high. This taxonomy is worth
authoring _now_, as ordinary FAQ/blog content ("Bike won't start? Here's
why") that already ranks for these queries today and doubles as the
mapping data for the AI feature later.

**Off-site answer-engine optimization.** AI answer engines (Google AI
Overviews, ChatGPT, Perplexity, etc.) lean on exactly the same signals
already planned here: structured data (Section 15), short extractable
direct-answer content (the FAQ formatting already in use), and consistent
entity data (NAP, Organization schema). The SEO work in Sections 5, 9, and
15 isn't at risk of being made obsolete by AI search — it's the same
foundation either way.

Nothing above requires touching the sitemap or page templates already
defined — it's additive: one new Symptom entity in Section 16, and a
search UI to build later on top of the resolver and schema layers already
planned.

---

## Next step

Pending approval of this document (Sections 1–18), Phase 3 begins:
Homepage UI & Development, built against the sitemap (Section 3, extended
by Sections 10 and 12), section order (Section 4), content rules (Section
7), and the data model (Section 16) defined above.

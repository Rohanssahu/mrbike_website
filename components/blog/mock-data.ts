export interface CategoryRecord {
  id: string;
  slug: string;
  name: string;
  description: string;
}

/**
 * Category set carries forward from the approved direction change (Phase 4
 * §8) — these map to real search intent and aren't specific to any one
 * article.
 */
export const BLOG_CATEGORIES: CategoryRecord[] = [
  {
    id: "category_maintenance-tips",
    slug: "maintenance-tips",
    name: "Maintenance Tips",
    description: "Practical, how-to advice for keeping a bike running well between services.",
  },
  {
    id: "category_seasonal-care",
    slug: "seasonal-care",
    name: "Seasonal Care",
    description: "How weather — monsoon, summer, winter — affects a bike and what to check for.",
  },
  {
    id: "category_brand-guides",
    slug: "brand-guides",
    name: "Brand Guides",
    description: "Model-specific maintenance guidance for the brands MR Bike Doctor services.",
  },
  {
    id: "category_city-guides",
    slug: "city-guides",
    name: "City Guides",
    description: "What doorstep bike service looks like in each city MR Bike Doctor serves.",
  },
  {
    id: "category_riding-safety",
    slug: "riding-safety",
    name: "Riding Safety",
    description: "Checks and habits that keep a ride safer, not just the bike healthier.",
  },
  {
    id: "category_battery-ev-care",
    slug: "battery-ev-care",
    name: "Battery & EV Care",
    description: "Battery health, charging habits, and EV-specific maintenance.",
  },
  {
    id: "category_cost-guides",
    slug: "cost-guides",
    name: "Cost Guides",
    description: "What drives the cost of common bike services, explained plainly.",
  },
];

export interface BlogPostSection {
  id: string;
  heading: string;
  body: string[];
}

export interface BlogFaqEntry {
  question: string;
  answer: string;
}

export interface BlogPostRecord {
  id: string;
  slug: string;
  categorySlug: string;
  /** Every sample article is explicitly marked so it's never mistaken for production content. */
  title: string;
  excerpt: string;
  author: { name: string };
  /** Static ISO date — editorial content, not a live-queried field. */
  publishedAt: string;
  tags: string[];
  isFeatured?: boolean;
  sections: BlogPostSection[];
  faqs?: BlogFaqEntry[];
  relatedServiceSlugs?: string[];
  relatedBrandSlugs?: string[];
  relatedCitySlugs?: string[];
}

/**
 * Placeholder articles only — validates the blog UI (Phase 4 §8/§13 item 4).
 * Every title is prefixed "[Sample]" so it reads as obviously non-production
 * at a glance. Content here is generic, widely-known bike-maintenance
 * knowledge (or copy already established elsewhere in this codebase, e.g.
 * "verified mechanics," "transparent pricing shown in the app") — never a
 * fabricated MR Bike Doctor business fact, history, or statistic. The array
 * shape (flat records + category FK) is the same pattern already scaled to
 * hundreds of records elsewhere in this codebase (Services/Brands/Cities),
 * so adding article #10 or #10,000 is a data change, not an architecture
 * change (Phase 4 §20).
 */
export const BLOG_POSTS: BlogPostRecord[] = [
  {
    id: "post_engine-oil-change-frequency",
    slug: "how-often-change-bike-engine-oil",
    categorySlug: "maintenance-tips",
    title: "[Sample] How Often Should You Change Bike Engine Oil?",
    excerpt:
      "A quick, practical answer to one of the most common bike maintenance questions — plus what changes it.",
    author: { name: "MR Bike Doctor Team" },
    publishedAt: "2026-06-01",
    tags: ["engine oil", "maintenance", "oil change"],
    sections: [
      {
        id: "quick-answer",
        heading: "The Quick Answer",
        body: [
          "Most bikes need an engine oil change every 2,500–3,000 km, or roughly every 3 months of regular riding — whichever comes first. Some newer or synthetic-oil-friendly engines can stretch this further, so it's worth checking the manufacturer's recommendation for your specific model.",
          "If you ride mostly short trips, in heavy traffic, or in dusty conditions, lean toward the shorter end of that range.",
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why Oil Changes Matter",
        body: [
          "Engine oil lubricates moving parts, carries away heat, and picks up small metal particles as the engine wears. Old oil loses its ability to do all three, which is what eventually shows up as rough idling, more engine noise, or reduced mileage.",
        ],
      },
      {
        id: "signs-you-need-one",
        heading: "Signs You're Overdue",
        body: [
          "Darker, gritty-looking oil on the dipstick, a burning smell, louder engine noise, or a noticeable dip in fuel efficiency are all signs it's time — don't wait for a warning light that may never come on a simpler bike.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use any engine oil brand?",
        answer:
          "Stick to the oil grade and viscosity your bike's manual recommends — the brand matters less than matching the spec.",
      },
      {
        question: "Does a bike that's rarely ridden still need oil changes?",
        answer:
          "Yes — oil degrades over time even without use, so a time-based change interval still applies to bikes that sit for long stretches.",
      },
    ],
    relatedServiceSlugs: ["oil-change", "bike-service"],
    relatedCitySlugs: ["hyderabad"],
  },
  {
    id: "post_doorstep-bike-service-guide",
    slug: "doorstep-bike-service-guide",
    categorySlug: "maintenance-tips",
    title: "[Sample] Doorstep Bike Service Guide",
    excerpt:
      "What doorstep bike servicing actually involves, and how it compares to a traditional garage visit.",
    author: { name: "MR Bike Doctor Team" },
    publishedAt: "2026-06-10",
    tags: ["doorstep service", "convenience", "guide"],
    isFeatured: true,
    sections: [
      {
        id: "what-is-it",
        heading: "What Doorstep Service Means",
        body: [
          "Doorstep bike service brings a mechanic to your home, office, or wherever your bike is parked, instead of you riding it to a workshop and waiting around.",
          "It works well for routine jobs — oil changes, general servicing, battery checks — that don't need heavy workshop equipment.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How It Works",
        body: [
          "A rider requests a service through the MR Bike Doctor app, a verified mechanic is assigned, and the service happens on the spot at the rider's location.",
        ],
      },
      {
        id: "when-a-workshop-still-helps",
        heading: "When a Workshop Still Helps",
        body: [
          "Some jobs — major part replacements, paint work, frame repairs — are better suited to a workshop with the right tools. For those, pickup & drop covers the gap without requiring the rider to travel.",
        ],
      },
    ],
    relatedServiceSlugs: ["doorstep-repair", "pickup-drop", "bike-service"],
  },
  {
    id: "post_monsoon-bike-care-tips",
    slug: "monsoon-bike-care-tips",
    categorySlug: "seasonal-care",
    title: "[Sample] Monsoon Bike Care Tips",
    excerpt: "A few checks that matter more once the rain starts.",
    author: { name: "MR Bike Doctor Team" },
    publishedAt: "2026-06-18",
    tags: ["monsoon", "seasonal care", "maintenance"],
    sections: [
      {
        id: "before-the-rain",
        heading: "Before the Rain Sets In",
        body: [
          "Check tyre tread depth — worn tyres lose grip fast on wet roads — and make sure the chain is clean and lubricated, since road grime mixed with rainwater accelerates wear.",
        ],
      },
      {
        id: "during-monsoon",
        heading: "During the Season",
        body: [
          "Rinse off mud and grit after riding through standing water, and avoid parking in water for long periods, since it can work into electricals and bearings.",
        ],
      },
      {
        id: "watch-for",
        heading: "What to Watch For",
        body: [
          "Spongy brakes, a flickering headlight, or a chain that sounds gritty even after cleaning are common monsoon-season symptoms worth getting checked.",
        ],
      },
    ],
    relatedServiceSlugs: ["chain-cleaning", "brake-service", "bike-wash"],
  },
  {
    id: "post_re-classic-350-maintenance-guide",
    slug: "royal-enfield-classic-350-maintenance-guide",
    categorySlug: "brand-guides",
    title: "[Sample] Royal Enfield Classic 350 Maintenance Guide",
    excerpt: "General upkeep points for the Classic 350's air-cooled single-cylinder engine.",
    author: { name: "MR Bike Doctor Team" },
    publishedAt: "2026-06-25",
    tags: ["royal enfield", "classic 350", "brand guide"],
    sections: [
      {
        id: "engine-care",
        heading: "Engine & Oil",
        body: [
          "The Classic 350's air-cooled engine runs warmer than a liquid-cooled equivalent, so sticking to the recommended oil change interval matters more than on some other bikes.",
        ],
      },
      {
        id: "chain-and-drivetrain",
        heading: "Chain & Drivetrain",
        body: [
          "Regular chain cleaning and lubrication helps offset the extra vibration typical of a single-cylinder engine.",
        ],
      },
    ],
    relatedBrandSlugs: ["royal-enfield"],
    relatedServiceSlugs: ["oil-change", "chain-cleaning"],
  },
  {
    id: "post_honda-shine-maintenance-guide",
    slug: "honda-shine-maintenance-guide",
    categorySlug: "brand-guides",
    title: "[Sample] Honda Shine Maintenance Guide",
    excerpt: "What keeps a commuter-focused bike like the Shine running efficiently.",
    author: { name: "MR Bike Doctor Team" },
    publishedAt: "2026-07-02",
    tags: ["honda", "shine", "brand guide"],
    sections: [
      {
        id: "everyday-checks",
        heading: "Everyday Checks",
        body: [
          "Since the Shine is typically ridden daily for commuting, tyre pressure and brake feel are worth a quick check every couple of weeks rather than saved for a scheduled service.",
        ],
      },
      {
        id: "service-rhythm",
        heading: "Keeping a Service Rhythm",
        body: [
          "A commuter bike covers distance quickly — tracking kilometers rather than calendar time is usually the better way to time its next service.",
        ],
      },
    ],
    relatedBrandSlugs: ["honda"],
    relatedServiceSlugs: ["bike-service", "brake-service"],
  },
  {
    id: "post_best-bike-service-hyderabad",
    slug: "best-bike-service-in-hyderabad",
    categorySlug: "city-guides",
    title: "[Sample] Best Bike Service in Hyderabad",
    excerpt:
      "What to look for in a bike service provider in Hyderabad, and where MR Bike Doctor currently operates.",
    author: { name: "MR Bike Doctor Team" },
    publishedAt: "2026-07-08",
    tags: ["hyderabad", "city guide"],
    sections: [
      {
        id: "what-to-look-for",
        heading: "What to Look For",
        body: [
          "A trustworthy bike service in Hyderabad should offer verified mechanics, transparent pricing shown before the job starts, and some form of service record you can refer back to.",
        ],
      },
      {
        id: "mr-bike-doctor-in-hyderabad",
        heading: "MR Bike Doctor in Hyderabad",
        body: [
          "MR Bike Doctor currently operates in select areas of Hyderabad, with doorstep servicing booked through the app.",
        ],
      },
    ],
    relatedCitySlugs: ["hyderabad"],
    relatedServiceSlugs: ["bike-service"],
  },
  {
    id: "post_pre-ride-safety-checklist",
    slug: "pre-ride-safety-checklist",
    categorySlug: "riding-safety",
    title: "[Sample] Pre-Ride Safety Checklist for Riders",
    excerpt: "A short checklist worth running through before any ride, not just long ones.",
    author: { name: "MR Bike Doctor Team" },
    publishedAt: "2026-07-14",
    tags: ["safety", "checklist", "riding tips"],
    sections: [
      {
        id: "the-checklist",
        heading: "The Checklist",
        body: [
          "Tyre pressure and visible tread, both brakes (front and rear) responding firmly, headlight and indicators working, chain not visibly loose or dry, and mirrors properly adjusted.",
        ],
      },
      {
        id: "why-it-takes-two-minutes",
        heading: "Why It's Worth Two Minutes",
        body: [
          "Most of these checks take seconds and catch the kind of small issue — a soft tyre, a dim brake light — that's easy to miss until it becomes a bigger problem on the road.",
        ],
      },
    ],
    relatedServiceSlugs: ["brake-service", "puncture-repair"],
  },
  {
    id: "post_battery-replacement-signs",
    slug: "battery-replacement-signs",
    categorySlug: "battery-ev-care",
    title: "[Sample] Battery Replacement Guide: Signs Your Bike Battery Is Dying",
    excerpt: "The warning signs that usually show up before a battery fails completely.",
    author: { name: "MR Bike Doctor Team" },
    publishedAt: "2026-07-19",
    tags: ["battery", "electrical", "maintenance"],
    sections: [
      {
        id: "warning-signs",
        heading: "Warning Signs",
        body: [
          "Slower cranking on startup, dimmer headlights at idle, and needing a kick-start or push-start more often are the classic signs a battery is on its way out.",
        ],
      },
      {
        id: "what-shortens-battery-life",
        heading: "What Shortens Battery Life",
        body: [
          "Long periods of the bike sitting unused, frequent short rides that don't fully recharge the battery, and corroded terminals all shorten a battery's usable life.",
        ],
      },
    ],
    relatedServiceSlugs: ["battery-replacement"],
  },
  {
    id: "post_bike-service-cost-factors",
    slug: "what-affects-bike-service-cost",
    categorySlug: "cost-guides",
    title: "[Sample] What Affects the Cost of a Bike Service?",
    excerpt: "The factors that typically move a bike service quote up or down.",
    author: { name: "MR Bike Doctor Team" },
    publishedAt: "2026-07-24",
    tags: ["cost", "pricing", "service"],
    sections: [
      {
        id: "main-factors",
        heading: "The Main Factors",
        body: [
          "The type of service (a quick oil change vs. a full multi-point service), whether parts need replacing, and the bike's engine size or complexity all affect the final cost.",
        ],
      },
      {
        id: "getting-transparent-pricing",
        heading: "Getting Transparent Pricing",
        body: [
          "The MR Bike Doctor app shows pricing upfront before you confirm a booking, so there's no back-and-forth negotiation once the mechanic arrives.",
        ],
      },
    ],
    relatedServiceSlugs: ["bike-service", "oil-change"],
  },
];

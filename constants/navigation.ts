export interface NavLink {
  label: string;
  href: string;
}

/** Primary header nav — mirrors the sitemap hubs from the approved Phase 2 blueprint. */
export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Cities", href: "/cities" },
  { label: "Brands", href: "/brands" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Blog", href: "/blog" },
];

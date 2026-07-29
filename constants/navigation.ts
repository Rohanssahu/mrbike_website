export interface NavLink {
  label: string;
  href: string;
}

/** Primary header nav — mirrors the sitemap hubs from the approved Phase 4 direction change. */
export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "Cities", href: "/cities" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

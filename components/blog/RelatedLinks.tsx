import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { getAllBrands, getAllCities, getAllServices } from "@/lib/content";

interface RelatedLinksProps {
  serviceSlugs?: string[];
  brandSlugs?: string[];
  citySlugs?: string[];
}

/** Internal links from an article out to the relevant Service/Brand/City/FAQ pages (Phase 4 §8). */
export function RelatedLinks({ serviceSlugs = [], brandSlugs = [], citySlugs = [] }: RelatedLinksProps) {
  const links = [
    ...getAllServices()
      .filter((s) => serviceSlugs.includes(s.slug))
      .map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
    ...getAllBrands()
      .filter((b) => brandSlugs.includes(b.slug))
      .map((b) => ({ label: `${b.name} Service`, href: `/brands/${b.slug}` })),
    ...getAllCities()
      .filter((c) => citySlugs.includes(c.slug))
      .map((c) => ({ label: `Bike Service in ${c.name}`, href: `/cities/${c.slug}` })),
    { label: "Frequently Asked Questions", href: "/faq" },
  ];

  return (
    <div className="border-border bg-muted/30 rounded-xl border p-5">
      <h2 className="text-foreground mb-3 text-sm font-semibold">Keep Reading</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-primary flex items-center gap-1.5 text-sm"
            >
              <ArrowRight className="size-3.5" aria-hidden="true" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

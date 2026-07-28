import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/** Visible breadcrumb trail. Pair with `breadcrumbSchema()` (seo/json-ld.ts) for the matching structured data. */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-muted-foreground text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-foreground font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="focus-visible:ring-ring/50 rounded-xs outline-none hover:text-foreground focus-visible:ring-3"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="size-3.5" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

import Link from "next/link";

import { cn } from "@/lib/utils";

import { BLOG_CATEGORIES, BLOG_POSTS } from "./mock-data";

interface CategoryChipsProps {
  activeCategorySlug?: string;
  className?: string;
}

/**
 * Category browse chips. Only links to categories that currently have at
 * least one published post — an empty category archive would be a thin,
 * dead-end page (same guardrail used for city/area pages, Phase 4 §17).
 */
export function CategoryChips({ activeCategorySlug, className }: CategoryChipsProps) {
  const categoriesWithPosts = BLOG_CATEGORIES.filter((category) =>
    BLOG_POSTS.some((post) => post.categorySlug === category.slug),
  );

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {categoriesWithPosts.map((category) => {
        const isActive = category.slug === activeCategorySlug;
        return (
          <Link
            key={category.id}
            href={`/blog/${category.slug}`}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary/40",
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}

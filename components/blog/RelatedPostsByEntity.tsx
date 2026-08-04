import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { getAllPosts, getPostsByEntityTag } from "@/lib/content/blog";

import { PostCard } from "./PostCard";

type RelatedField = "relatedServiceSlugs" | "relatedBrandSlugs" | "relatedCitySlugs";

interface RelatedPostsByEntityProps {
  field: RelatedField;
  slug: string;
  limit?: number;
}

/**
 * Related-articles block for entity pages (Service/Brand/City), queried
 * from the shared blog pool by tag rather than each page authoring its own
 * blog list — same "one content pool, reused everywhere" principle as the
 * FAQ engine (Phase 4 §8's internal-linking requirement).
 */
export function RelatedPostsByEntity({ field, slug, limit = 3 }: RelatedPostsByEntityProps) {
  const taggedPosts = getPostsByEntityTag(field, slug, limit);
  const generalServicePosts = getPostsByEntityTag("relatedServiceSlugs", "bike-service", limit);
  const generalBrandPosts = getAllPosts()
    .filter((post) => post.categorySlug === "brand-guides")
    .slice(0, limit);
  const posts =
    field === "relatedServiceSlugs" && taggedPosts.length === 0
      ? generalServicePosts.length > 0
        ? generalServicePosts
        : getAllPosts().slice(0, limit)
      : field === "relatedBrandSlugs" && taggedPosts.length === 0
        ? generalBrandPosts
        : taggedPosts;

  return <RelatedGuides posts={posts} title="Related Bike Service Guides" renderCard={PostCard} />;
}

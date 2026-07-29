import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { getPostsByEntityTag } from "@/lib/content/blog";

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
  const posts = getPostsByEntityTag(field, slug, limit);

  return <RelatedGuides posts={posts} title="Related Articles" renderCard={PostCard} />;
}

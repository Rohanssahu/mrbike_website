import { BLOG_POSTS, type BlogPostRecord } from "./mock-data";
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
  const posts: BlogPostRecord[] = BLOG_POSTS.filter((post) => post[field]?.includes(slug)).slice(
    0,
    limit,
  );

  if (posts.length === 0) return null;

  return (
    <div>
      <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">Related Articles</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

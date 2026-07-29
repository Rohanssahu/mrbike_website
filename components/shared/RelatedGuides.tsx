import type { ComponentType } from "react";

interface GuideLike {
  id: string;
}

interface RelatedGuidesProps<T extends GuideLike> {
  posts: T[];
  title?: string;
  /** Card renderer — callers pass `PostCard` (components/blog) so this stays blog-agnostic. */
  renderCard: ComponentType<{ post: T }>;
}

/**
 * Generic "Related Guides" EEAT block (Phase 4 §14/§19) — a titled grid of
 * content cards. `RelatedPostsByEntity` and `RelatedArticles` (both
 * components/blog) render through this instead of duplicating the same
 * heading+grid markup, so entity pages and blog pages share one visual and
 * semantic shape for "more to read."
 */
export function RelatedGuides<T extends GuideLike>({
  posts,
  title = "Related Guides",
  renderCard: CardComponent,
}: RelatedGuidesProps<T>) {
  if (posts.length === 0) return null;

  return (
    <div>
      <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <CardComponent key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

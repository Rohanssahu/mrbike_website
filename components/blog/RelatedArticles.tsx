import type { BlogPostRecord } from "./mock-data";
import { PostCard } from "./PostCard";

interface RelatedArticlesProps {
  posts: BlogPostRecord[];
}

/** Same-category articles, excluding the one currently being read. */
export function RelatedArticles({ posts }: RelatedArticlesProps) {
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

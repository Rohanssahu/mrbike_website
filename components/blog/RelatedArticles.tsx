import { RelatedGuides } from "@/components/shared/RelatedGuides";

import type { BlogPostRecord } from "./mock-data";
import { PostCard } from "./PostCard";

interface RelatedArticlesProps {
  posts: BlogPostRecord[];
}

/** Same-category articles, excluding the one currently being read. */
export function RelatedArticles({ posts }: RelatedArticlesProps) {
  return <RelatedGuides posts={posts} title="Related Articles" renderCard={PostCard} />;
}

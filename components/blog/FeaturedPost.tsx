import { Clock } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { BLOG_CATEGORIES, type BlogPostRecord } from "./mock-data";
import { estimateReadingTime, formatPublishedDate } from "./utils";

interface FeaturedPostProps {
  post: BlogPostRecord;
}

/** Large hero tile for the current featured article on the /blog hub. */
export function FeaturedPost({ post }: FeaturedPostProps) {
  const category = BLOG_CATEGORIES.find((c) => c.slug === post.categorySlug);

  return (
    <div className="border-border bg-card flex flex-col gap-4 rounded-2xl border p-8 md:p-10">
      <div className="flex items-center gap-2">
        <Badge>Featured</Badge>
        {category && <Badge variant="outline">{category.name}</Badge>}
      </div>

      <h2 className="font-heading text-foreground text-2xl font-bold sm:text-3xl">{post.title}</h2>
      <p className="text-muted-foreground max-w-2xl text-lg">{post.excerpt}</p>

      <div className="text-muted-foreground flex items-center gap-3 text-sm">
        <span>{post.author.name}</span>
        <span aria-hidden="true">·</span>
        <span>{formatPublishedDate(post.publishedAt)}</span>
        <span aria-hidden="true">·</span>
        <span className="flex items-center gap-1">
          <Clock className="size-3.5" aria-hidden="true" />
          {estimateReadingTime(post.sections)} min read
        </span>
      </div>

      <div>
        <Button
          nativeButton={false}
          render={<Link href={`/blog/${post.categorySlug}/${post.slug}`} />}
        >
          Read Article
        </Button>
      </div>
    </div>
  );
}

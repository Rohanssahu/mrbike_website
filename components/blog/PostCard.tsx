import { Clock } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { BLOG_CATEGORIES, type BlogPostRecord } from "./mock-data";
import { estimateReadingTime, formatPublishedDate } from "./utils";

interface PostCardProps {
  post: BlogPostRecord;
  className?: string;
}

/** A single scannable article tile for hub, category, and related-article grids. */
export function PostCard({ post, className }: PostCardProps) {
  const category = BLOG_CATEGORIES.find((c) => c.slug === post.categorySlug);

  return (
    <Card className={cn("h-full transition-all hover:-translate-y-0.5 hover:shadow-md", className)}>
      <CardContent className="flex h-full flex-col gap-3">
        {category && <Badge variant="outline">{category.name}</Badge>}

        <div className="flex flex-1 flex-col gap-1.5">
          <h3 className="font-heading text-foreground text-base font-semibold">
            <Link
              href={`/blog/${post.categorySlug}/${post.slug}`}
              className="focus-visible:ring-ring/50 rounded-xs outline-none hover:underline focus-visible:ring-3"
            >
              {post.title}
            </Link>
          </h3>
          <p className="text-muted-foreground text-sm">{post.excerpt}</p>
        </div>

        <div className="text-muted-foreground flex items-center gap-3 text-xs">
          <span>{formatPublishedDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" />
            {estimateReadingTime(post.sections)} min read
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

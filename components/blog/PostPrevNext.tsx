import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import type { BlogPostRecord } from "./mock-data";

interface PostPrevNextProps {
  previous: BlogPostRecord | null;
  next: BlogPostRecord | null;
}

/** Previous/next navigation within the current article's category. */
export function PostPrevNext({ previous, next }: PostPrevNextProps) {
  if (!previous && !next) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {previous ? (
        <Link
          href={`/blog/${previous.categorySlug}/${previous.slug}`}
          className="border-border bg-card hover:border-primary/40 flex flex-col gap-1 rounded-xl border p-4"
        >
          <span className="text-muted-foreground flex items-center gap-1 text-xs">
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Previous
          </span>
          <span className="font-heading text-foreground text-sm font-semibold">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/blog/${next.categorySlug}/${next.slug}`}
          className={cn(
            "border-border bg-card hover:border-primary/40 flex flex-col gap-1 rounded-xl border p-4 sm:text-right",
          )}
        >
          <span className="text-muted-foreground flex items-center gap-1 text-xs sm:justify-end">
            Next
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </span>
          <span className="font-heading text-foreground text-sm font-semibold">{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

import { Clock, User } from "lucide-react";

import { formatPublishedDate } from "./utils";

interface AuthorBylineProps {
  authorName: string;
  publishedAt: string;
  readingTimeMinutes: number;
}

/** Author + published date + reading time row shown under an article's title. */
export function AuthorByline({ authorName, publishedAt, readingTimeMinutes }: AuthorBylineProps) {
  return (
    <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
      <span className="flex items-center gap-1.5">
        <User className="size-4" aria-hidden="true" />
        {authorName}
      </span>
      <span>{formatPublishedDate(publishedAt)}</span>
      <span className="flex items-center gap-1.5">
        <Clock className="size-4" aria-hidden="true" />
        {readingTimeMinutes} min read
      </span>
    </div>
  );
}

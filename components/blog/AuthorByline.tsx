import { User } from "lucide-react";

import { LastUpdated } from "@/components/shared/LastUpdated";
import { ReadingTime } from "@/components/shared/ReadingTime";

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
      <LastUpdated date={publishedAt} label="Published" />
      <ReadingTime minutes={readingTimeMinutes} />
    </div>
  );
}

import { Tag } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface PostTagsProps {
  tags: string[];
}

/** Tag chips shown under an article. */
export function PostTags({ tags }: PostTagsProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tag className="text-muted-foreground size-4" aria-hidden="true" />
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
        </Badge>
      ))}
    </div>
  );
}

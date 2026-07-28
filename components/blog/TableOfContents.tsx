import { List } from "lucide-react";

import type { BlogPostSection } from "./mock-data";

interface TableOfContentsProps {
  sections: BlogPostSection[];
}

/** Anchor-link outline of an article's sections. */
export function TableOfContents({ sections }: TableOfContentsProps) {
  if (sections.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="border-border bg-muted/30 rounded-xl border p-5">
      <div className="text-foreground mb-3 flex items-center gap-2 text-sm font-semibold">
        <List className="size-4" aria-hidden="true" />
        On this page
      </div>
      <ol className="flex flex-col gap-2 text-sm">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-muted-foreground hover:text-foreground">
              {index + 1}. {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

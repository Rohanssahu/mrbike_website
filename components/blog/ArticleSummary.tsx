import { ListChecks } from "lucide-react";

import type { BlogPostRecord } from "./mock-data";

/** Answer-first summary and section map for readers, search engines, and AI extraction. */
export function ArticleSummary({ post }: { post: BlogPostRecord }) {
  return (
    <div
      className="border-primary/30 bg-primary/5 rounded-xl border p-5"
      aria-labelledby="article-summary-heading"
    >
      <h2
        id="article-summary-heading"
        className="font-heading text-foreground flex items-center gap-2 text-lg font-semibold"
      >
        <ListChecks className="text-primary size-5" aria-hidden="true" /> Article summary
      </h2>
      <p data-speakable="article-summary" className="text-muted-foreground mt-3 leading-relaxed">
        {post.excerpt}
      </p>
      <h3 className="text-foreground mt-4 text-sm font-semibold">In this guide</h3>
      <ul className="text-muted-foreground mt-2 grid gap-1.5 text-sm sm:grid-cols-2">
        {post.sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="hover:text-primary hover:underline">
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

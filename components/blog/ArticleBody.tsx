import { ComparisonTable } from "@/components/shared/ComparisonTable";

import type { BlogPostSection } from "./mock-data";

interface ArticleBodyProps {
  sections: BlogPostSection[];
}

/** Renders an article's sections with anchor ids matching the Table of Contents. */
export function ArticleBody({ sections }: ArticleBodyProps) {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="font-heading text-foreground mb-3 text-xl font-semibold">
            {section.heading}
          </h2>
          <div className="flex flex-col gap-3">
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {section.table && (
            <div className="mt-4">
              <ComparisonTable columns={section.table.columns} rows={section.table.rows} />
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

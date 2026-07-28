import type { BlogPostSection } from "./mock-data";

const WORDS_PER_MINUTE = 200;

/** Estimated reading time in whole minutes, computed from the post's actual body text. */
export function estimateReadingTime(sections: BlogPostSection[]): number {
  const wordCount = sections.reduce(
    (total, section) => total + section.body.join(" ").split(/\s+/).filter(Boolean).length,
    0,
  );
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

export function formatPublishedDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

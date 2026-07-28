"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";

import type { BlogPostRecord } from "./mock-data";
import { PostCard } from "./PostCard";

interface BlogSearchProps {
  posts: BlogPostRecord[];
}

/** Client-side search over the already-loaded post list — matches title, excerpt, and tags. */
export function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return posts;

    return posts.filter((post) => {
      const haystack = [post.title, post.excerpt, ...post.tags].join(" ").toLowerCase();
      return haystack.includes(normalized);
    });
  }, [posts, query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative max-w-md">
        <Search
          className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
          aria-hidden="true"
        />
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles..."
          aria-label="Search articles"
          className="pl-9"
        />
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-sm">No articles match &ldquo;{query}&rdquo;.</p>
      )}
    </div>
  );
}

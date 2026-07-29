"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";

import type { BlogPostRecord } from "./mock-data";
import { PostCard } from "./PostCard";

interface BlogSearchProps {
  posts: BlogPostRecord[];
}

/**
 * Client-side search over the already-loaded post list — matches title,
 * excerpt, and tags. The query is mirrored into the URL's `q` param (no
 * navigation, just history state) so `/blog?q=...` is a real, shareable
 * search result — the thing that makes `websiteSchema()`'s `SearchAction`
 * (Phase 4 §10, Phase 7) an honest structured-data claim rather than a
 * schema pointing at a client-only widget with no matching URL.
 */
export function BlogSearch({ posts }: BlogSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return posts;

    return posts.filter((post) => {
      const haystack = [post.title, post.excerpt, ...post.tags].join(" ").toLowerCase();
      return haystack.includes(normalized);
    });
  }, [posts, query]);

  function handleQueryChange(value: string) {
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  }

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
          onChange={(event) => handleQueryChange(event.target.value)}
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

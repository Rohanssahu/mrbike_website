import { Clock } from "lucide-react";

interface ReadingTimeProps {
  minutes: number;
}

/** EEAT reading-time indicator (Phase 4 §14/§19) — reused by `AuthorByline` and any other long-form content shape. */
export function ReadingTime({ minutes }: ReadingTimeProps) {
  return (
    <span className="flex items-center gap-1.5">
      <Clock className="size-4" aria-hidden="true" />
      {minutes} min read
    </span>
  );
}

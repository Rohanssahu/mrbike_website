import { ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface VerifiedBadgeProps {
  label?: string;
  className?: string;
}

/** Reusable "verified" indicator — background-checked mechanics, verified garages, etc. */
export function VerifiedBadge({ label = "Verified", className }: VerifiedBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("border-success/30 bg-success/15 text-success gap-1", className)}
    >
      <ShieldCheck className="size-3.5" aria-hidden="true" />
      {label}
    </Badge>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

import { MAIN_NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";

/** Desktop primary nav. A client component only because active-state highlighting needs the current path. */
export function Navigation({ className, ...props }: ComponentProps<"nav">) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={cn("items-center gap-1", className)} {...props}>
      {MAIN_NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors",
              isActive && "bg-muted text-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

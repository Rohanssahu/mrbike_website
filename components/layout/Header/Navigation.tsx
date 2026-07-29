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
    <nav aria-label="Primary" className={cn("items-center gap-2", className)} {...props}>
      {MAIN_NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative rounded-lg px-3 py-1.5 text-sm font-bold text-white/80 transition-colors hover:text-white",
              isActive && "text-white",
            )}
          >
            {link.label}
            {isActive && (
              <span
                aria-hidden="true"
                className="bg-primary absolute bottom-0 left-1/2 size-1 -translate-x-1/2 translate-y-1.5 rounded-full"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

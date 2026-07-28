"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MAIN_NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";

/** Sheet-based mobile menu: nav links + the same Download App CTA as the desktop header. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu" />}
      >
        <MenuIcon aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {MAIN_NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <SheetClose
                key={link.href}
                nativeButton={false}
                render={<Link href={link.href} />}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-foreground hover:bg-muted flex min-h-11 items-center rounded-lg px-3 text-sm font-medium",
                  isActive && "bg-muted",
                )}
              >
                {link.label}
              </SheetClose>
            );
          })}
        </nav>

        <SheetFooter className="gap-2">
          <SheetClose
            nativeButton={false}
            render={<Link href="/download" />}
            className={cn(buttonVariants({ variant: "default" }), "h-11 w-full")}
          >
            Download App
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/config/site";
import logo from "@/assets/brand/logo.png";

import { MobileNav } from "./MobileNav";
import { Navigation } from "./Navigation";

/**
 * Sticky, translucent header. Server component: the only interactive parts
 * (active nav state, mobile menu) are isolated into their own client islands.
 */
export function Header() {
  return (
    <header className="border-border/60 bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-heading text-foreground flex shrink-0 items-center gap-2 text-lg font-semibold"
          aria-label={`${siteConfig.name} — home`}
        >
          <Image
            src={logo}
            alt={`${siteConfig.name} logo`}
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-lg"
            priority
          />
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <Navigation className="hidden lg:flex" />

        <div className="hidden items-center gap-2 lg:flex">
          <Button nativeButton={false} render={<Link href="/download" />}>
            Download App
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}

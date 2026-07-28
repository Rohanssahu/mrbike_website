import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/config/site";

/**
 * Minimal placeholder footer for Phase 4A. The full sitemap footer
 * (services/cities/brands/blog links) is a separate homepage section
 * scoped for a later phase — this only closes out the page shell.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 bg-muted/30 border-t">
      <Container className="text-muted-foreground flex flex-col items-center justify-between gap-4 py-10 text-sm sm:flex-row">
        <p>
          &copy; {year} {siteConfig.legalName}. All rights reserved.
        </p>
        <nav aria-label="Legal" className="flex items-center gap-4">
          <Link href="/privacy-policy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-foreground">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
      </Container>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { GooglePlayBadge } from "@/components/shared/StoreBadges";
import { siteConfig } from "@/config/site";
import logo from "@/assets/brand/logo.png";

/**
 * Minimal placeholder footer for Phase 4A. The full sitemap footer
 * (services/cities/brands/blog links) is a separate homepage section
 * scoped for a later phase — this only closes out the page shell. Carries
 * the sitewide Download App CTA per Phase 4 §5 ("every page — not just the
 * homepage — should include at least one Download App prompt").
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 bg-muted/30 border-t">
      <Container className="flex flex-col items-center gap-6 py-10">
        <Image src={logo} alt={`${siteConfig.name} logo`} width={48} height={48} className="size-12 rounded-lg" />

        <GooglePlayBadge />

        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:w-full sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/faq" className="hover:text-foreground">
              FAQs
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/delete-account" className="hover:text-foreground">
              Delete Account
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

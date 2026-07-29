import { ExternalLinkIcon, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { GooglePlayBadge } from "@/components/shared/StoreBadges";
import { siteConfig } from "@/config/site";
import { MAIN_NAV_LINKS } from "@/constants/navigation";
import { getAllServices } from "@/lib/content/services";
import userAppIcon from "@/assets/userappscreenshot/user_app_logo.png";
import partnerAppIcon from "@/assets/delerappscreenshot/deler_logo_app.png";
import siteLogo from "@/assets/websiteLog.png";

const FOOTER_SERVICES = getAllServices().slice(0, 5);

const QUICK_LINKS = [...MAIN_NAV_LINKS, { label: "FAQs", href: "/faq" }];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-and-conditions" },
  { label: "Delete Account", href: "/delete-account" },
];

/**
 * Full sitemap footer — brand/services/quick-links/contact columns, plus the
 * sitewide Download App CTA (required on every page per Phase 4 §5).
 */
export function Footer() {
  const year = new Date().getFullYear();
  const phoneHref = `tel:${siteConfig.contactPhone.replace(/[^+\d]/g, "")}`;
  const address = siteConfig.address;

  return (
    <footer className="bg-background border-border/60 border-t">
      <div className="from-primary via-accent to-primary h-1 w-full bg-gradient-to-r" aria-hidden="true" />

      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} — home`}>
              <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                <Image src={siteLogo} alt="" className="size-full object-cover" />
              </span>
              <span className="font-heading text-lg font-semibold text-white">{siteConfig.name}</span>
            </Link>

            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              {siteConfig.description}
            </p>

            {siteConfig.social.length > 0 && (
              <ul className="flex flex-wrap gap-3 pt-1">
                {siteConfig.social.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border/60 text-muted-foreground hover:border-primary hover:text-primary flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors"
                    >
                      {link.name}
                      <ExternalLinkIcon className="size-3" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Our Services */}
          <nav aria-label="Services" className="lg:col-span-2">
            <h3 className="font-heading text-sm font-semibold text-white">Our Services</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary text-sm font-medium hover:underline">
                  View all services
                </Link>
              </li>
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Quick links" className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold text-white">Contact Info</h3>
            <ul className="text-muted-foreground mt-4 flex flex-col gap-3 text-sm">
              {address && (
                <li className="flex items-start gap-2.5">
                  <MapPin className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>
                    {address.streetAddress}, {address.addressLocality}, {address.addressRegion}{" "}
                    {address.postalCode}
                  </span>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <Phone className="text-primary size-4 shrink-0" aria-hidden="true" />
                <a href={phoneHref} className="hover:text-primary transition-colors">
                  {siteConfig.contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="text-primary size-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-primary transition-colors">
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>

            {siteConfig.social.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {siteConfig.social.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="border-border/60 text-muted-foreground hover:border-primary hover:text-primary flex size-9 items-center justify-center rounded-full border transition-colors"
                    >
                      <SocialIcon name={link.name} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Download App CTA */}
            <div className="mt-8 flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={userAppIcon}
                    alt={`${siteConfig.name} customer app icon`}
                    width={40}
                    height={40}
                    className="size-10 rounded-xl"
                  />
                  <span className="font-heading text-sm font-semibold text-white">{siteConfig.name}</span>
                </div>
                <GooglePlayBadge />
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={partnerAppIcon}
                    alt={`${siteConfig.name} Partner app icon`}
                    width={40}
                    height={40}
                    className="size-10 rounded-xl"
                  />
                  <span className="font-heading text-sm font-semibold text-white">{siteConfig.name} Partner</span>
                </div>
                <GooglePlayBadge href={siteConfig.partnerAndroid.url} eyebrow="INTERNAL TESTING ON" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-border/60 text-muted-foreground mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

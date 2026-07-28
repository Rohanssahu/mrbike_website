import { Section } from "@/components/shared/Section";

const HEADING_ID = "blog-hero-heading";

/** /blog hub hero — the site's primary SEO engine (Phase 4 §8). */
export function BlogHero() {
  return (
    <Section className="pb-0 md:pb-0" aria-labelledby={HEADING_ID}>
      <div className="max-w-3xl">
        <p className="text-primary text-sm font-semibold">Blog</p>
        <h1 id={HEADING_ID} className="font-heading text-foreground mt-2 text-4xl font-bold sm:text-5xl">
          Bike Maintenance Guides & Tips
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Practical, no-nonsense advice on keeping your bike running — from oil changes to
          brand-specific maintenance guides.
        </p>
      </div>
    </Section>
  );
}

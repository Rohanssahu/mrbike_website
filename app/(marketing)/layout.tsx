import type { ReactNode } from "react";

import { Footer, Header } from "@/components/layout";

/** Shared chrome for every marketing page: skip link, sticky header, footer. */
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="bg-background text-foreground sr-only rounded-lg px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Analytics, Clarity } from "@/components/analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { fontSans } from "@/lib/fonts";
import { websiteSchema } from "@/seo/json-ld";
import { defaultMetadata } from "@/seo/metadata";
import "@/styles/globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body className="antialiased">
        <JsonLd schema={websiteSchema({ path: "/blog", queryParam: "q" })} />
        {children}
        <Analytics />
        <Clarity />
      </body>
    </html>
  );
}

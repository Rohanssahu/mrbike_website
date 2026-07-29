import type { Metadata } from "next";
import { Analytics, Clarity } from "@/components/analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { fontMono, fontSans } from "@/lib/fonts";
import { organizationSchema, websiteSchema } from "@/seo/json-ld";
import { defaultMetadata } from "@/seo/metadata";
import "@/styles/globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <JsonLd schema={[organizationSchema(), websiteSchema({ path: "/blog", queryParam: "q" })]} />
        {children}
        <Analytics />
        <Clarity />
      </body>
    </html>
  );
}

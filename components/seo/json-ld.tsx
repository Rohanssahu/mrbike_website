import type { JsonLdSchema } from "@/seo/json-ld";

export function JsonLd({ schema }: { schema: JsonLdSchema | JsonLdSchema[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

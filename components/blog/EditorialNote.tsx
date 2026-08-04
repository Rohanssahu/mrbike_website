import Link from "next/link";

/** Transparent authorship and scope statement without an unsupported expert-review claim. */
export function EditorialNote() {
  return (
    <div className="border-border bg-muted/30 rounded-xl border p-5 text-sm">
      <h2 className="text-foreground font-semibold">How this guide was prepared</h2>
      <p className="text-muted-foreground mt-2 leading-relaxed">
        The MR Bike Doctor Team writes practical educational guidance from established maintenance
        principles and the sources listed below. Model-specific specifications and schedules should
        always be verified in the owner&rsquo;s manual. Learn more about{" "}
        <Link href="/about" className="text-primary hover:underline">
          MR Bike Doctor
        </Link>
        .
      </p>
    </div>
  );
}

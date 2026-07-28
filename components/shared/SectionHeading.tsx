import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Id applied to the heading so the parent `<section>` can reference it via `aria-labelledby`. */
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Eyebrow + title + description header shared by every homepage section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Badge variant="outline">{eyebrow}</Badge>}
      <h2 id={id} className="font-heading text-foreground text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-muted-foreground max-w-2xl text-lg">{description}</p>}
    </div>
  );
}

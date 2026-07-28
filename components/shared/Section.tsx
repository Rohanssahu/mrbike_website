import type { ComponentProps, ElementType } from "react";

import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentProps<"section"> {
  /** Renders a different landmark element (e.g. "div") when the section shouldn't be a `<section>`. */
  as?: ElementType;
  containerClassName?: string;
}

/** Standard vertical rhythm + centered container shared by every homepage section. */
export function Section({
  as: Element = "section",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <Element className={cn("py-16 md:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </Element>
  );
}

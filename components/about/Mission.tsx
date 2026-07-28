import Image from "next/image";

import technologyIllustration from "@/assets/illustrations/about/technology-illustration.svg";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "mission-heading";

/** Mission (Phase 4 §6) — the problem being solved, owner-supplied. */
export function Mission() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr]">
        <div>
          <SectionHeading id={HEADING_ID} eyebrow="Mission" title="Why MR Bike Doctor exists" />
          <div className="mt-6 max-w-3xl">
            <TodoPlaceholder what="company mission" />
          </div>
        </div>

        <Image
          src={technologyIllustration}
          alt=""
          aria-hidden="true"
          className="mx-auto w-full max-w-sm lg:max-w-none"
        />
      </div>
    </Section>
  );
}

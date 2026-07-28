import Image from "next/image";

import login from "@/assets/app-screenshots/login.png";
import otp from "@/assets/app-screenshots/otp.png";
import { ScrollGrid } from "@/components/shared/ScrollGrid";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "app-screenshots-heading";

const SCREENSHOTS = [
  { id: "login", src: login, alt: "MR Bike Doctor app — sign-in screen" },
  { id: "otp", src: otp, alt: "MR Bike Doctor app — OTP verification screen" },
];

/**
 * A Look Inside the App. Deliberately limited to screenshots with no
 * personal data visible — several other captured screenshots show a real
 * name, phone number, home address, or vehicle plate from a test account
 * and are intentionally excluded here (see summary to the owner).
 */
export function ScreenshotGallery() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="Preview" title="A Look Inside the App" />

      <ScrollGrid gridCols="sm:grid-cols-2" className="mt-10 sm:justify-start">
        {SCREENSHOTS.map((screenshot) => (
          <li key={screenshot.id} className="flex w-48 shrink-0 snap-start sm:w-56">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              className="w-full rounded-2xl border"
            />
          </li>
        ))}
      </ScrollGrid>
    </Section>
  );
}

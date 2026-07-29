import Image from "next/image";

import dealerLogin from "@/assets/dealer-app-screenshots/login.png";
import dealerOtp from "@/assets/dealer-app-screenshots/otp.png";
import userLogin from "@/assets/app-screenshots/login.png";
import userOtp from "@/assets/app-screenshots/otp.png";
import { ScrollGrid } from "@/components/shared/ScrollGrid";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "app-screenshots-heading";

const SCREENSHOT_GROUPS = [
  {
    id: "user",
    label: "Customer App",
    screenshots: [
      { id: "user-login", src: userLogin, alt: "MR Bike Doctor customer app — sign-in screen" },
      { id: "user-otp", src: userOtp, alt: "MR Bike Doctor customer app — OTP verification screen" },
    ],
  },
  {
    id: "dealer",
    label: "Dealer App",
    screenshots: [
      { id: "dealer-login", src: dealerLogin, alt: "MR Bike Doctor Partner app — sign-in screen" },
      { id: "dealer-otp", src: dealerOtp, alt: "MR Bike Doctor Partner app — OTP verification screen" },
    ],
  },
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

      <div className="mt-10 flex flex-col gap-10">
        {SCREENSHOT_GROUPS.map((group) => (
          <div key={group.id}>
            <h3 className="text-foreground text-lg font-semibold">{group.label}</h3>

            <ScrollGrid gridCols="sm:grid-cols-2" className="mt-4 sm:justify-start">
              {group.screenshots.map((screenshot) => (
                <li key={screenshot.id} className="flex w-48 shrink-0 snap-start sm:w-56">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full rounded-2xl border"
                  />
                </li>
              ))}
            </ScrollGrid>
          </div>
        ))}
      </div>
    </Section>
  );
}

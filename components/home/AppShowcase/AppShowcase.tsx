import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { APP_SCREENS } from "./mock-data";
import { ScreenCard } from "./ScreenCard";

const HEADING_ID = "app-showcase-heading";

/**
 * Experience the MR Bike Doctor App (homepage) — a real, end-to-end walk
 * through the shipped app (sign in → set location → browse → track a
 * booking → get help → manage your profile), built entirely from actual
 * app screenshots. No mockups: every frame here is a real screen.
 */
export function AppShowcase() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Experience the App"
        title="See the MR Bike Doctor app in action"
        description="From signing in to tracking your mechanic's arrival — here's exactly what doorstep bike service looks like inside the app."
      />

      <ul className="mt-10 flex snap-x [scrollbar-width:none] gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
        {APP_SCREENS.map((screen, index) => (
          <ScreenCard key={screen.id} screen={screen} index={index} />
        ))}
      </ul>

      <div className="mt-4 flex justify-center">
        <Button size="lg" className="h-11 px-5" nativeButton={false} render={<Link href="/download" />}>
          Download the App
        </Button>
      </div>
    </Section>
  );
}

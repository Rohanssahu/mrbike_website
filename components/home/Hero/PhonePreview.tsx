import Image from "next/image";

import customerHome from "@/assets/app-screenshots/home.png";
import customerLogin from "@/assets/app-screenshots/login.png";
import { siteConfig } from "@/config/site";

/** Static customer-app preview; animation and partner assets are intentionally excluded from the hero bundle. */
export function PhonePreview() {
  const sizes = "(min-width: 1024px) 192px, (min-width: 640px) 160px, 128px";

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex w-full max-w-sm flex-col items-center gap-4 py-6"
    >
      <div className="bg-primary/25 absolute inset-x-6 top-1/2 -z-10 h-64 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="relative flex items-center justify-center">
        <div className="translate-y-6 -rotate-6 sm:translate-y-8">
          <Image
            src={customerLogin}
            alt=""
            sizes={sizes}
            quality={70}
            className="h-auto w-32 drop-shadow-2xl sm:w-40 lg:w-48"
          />
        </div>

        <div className="z-10 -ml-8 -translate-y-6 rotate-6 sm:-ml-10 sm:-translate-y-8 lg:-ml-12">
          <Image
            src={customerHome}
            alt=""
            sizes={sizes}
            quality={70}
            className="h-auto w-32 drop-shadow-2xl sm:w-40 lg:w-48"
          />
        </div>
      </div>

      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white ring-1 ring-white/10 backdrop-blur-sm">
        {siteConfig.name}
      </span>
    </div>
  );
}

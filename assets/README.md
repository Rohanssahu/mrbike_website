# assets

Bundler-optimized static assets (SVGs/images imported directly into
components via `import logo from "@/assets/..."`), as opposed to `public/`,
which serves files verbatim at a fixed URL.

Real brand assets, sourced from the actual MR Bike Doctor mobile app
(`mybikeuser/`) rather than generated placeholders:

- `brand/logo.png` — the canonical MR Bike Doctor logo, resized from the
  shipped app's 2048×2048 icon master (`mybikeuser/src/assets/MyBikeUser_appicon.png`).
  Used in the header, footer, and as the source for every generated favicon/
  app-icon file (`app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`,
  `public/icons/`).
- `brand/feature-graphic.jpg` — the app's Play Store feature graphic, used
  in `DownloadAppCta`.
- `app-screenshots/` — real screenshots from the shipped app (login, OTP,
  location picker, home, booking list, booking details, help & support,
  profile), used by the homepage `AppShowcase` carousel.
- `icons/` — feature-grid icons reused from the app's own icon set
  (`mybikeuser/src/assets/icons/`), used by the homepage `AppFeatures` grid.

The original loosely-named source drops (`userlog.png`, `MyBikeUser_appicon
copy.png`, `userappscreenshot/`, etc.) are left in place untouched in case
they're still wanted, but nothing in the app imports them directly anymore —
everything reads from the organized folders above.

`patner log.png` / `partner app .png` are the Partner/Provider app's
branding, not the consumer app — unused here since the website doesn't have
a partner-facing funnel (see `docs/phase-4-direction-change.md` §2).

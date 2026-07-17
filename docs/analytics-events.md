# Website analytics — event contract (GA4)

Scope: **loudreader.io only**. The LoudReader app has no web analytics — the
app's pipeline is TelemetryDeck + Sentry, documented in the app repo. Never
blur that line: the privacy positioning depends on it, and the consent banner
and `/privacy` page both promise it.

Implementation: `components/analytics/Analytics.tsx`, mounted from
`app/layout.tsx`. **This file is the contract** — if you touch the island,
update this doc in the same change, and never rename an event or dimension
that has already collected data (GA4 data is not retro-sliceable).

## How loading works (two gates)

1. **Env gate** — the island renders only when `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   is set at build time (Vercel → Project → Settings → Environment Variables).
   No var → zero analytics code ships. Local dev has no var, so local clicks
   can never pollute production data.
2. **Consent gate** — Google Consent Mode v2, *basic* implementation:
   `gtag.js` is only injected after the visitor clicks **Allow** in the
   banner. Decline (or no answer) = zero requests to Google — deliberately
   stricter than "advanced" consent mode (no cookieless pings), because a
   privacy-branded site must show a clean network tab after Decline.
   - Choice persists in `localStorage["lr-analytics-consent"]`
     (`granted` / `denied`).
   - Revocation: "Reset analytics choice" button on `/privacy` clears the key
     and reloads, re-showing the banner.
   - All ad-related consent signals (`ad_storage`, `ad_user_data`,
     `ad_personalization`) are **permanently denied**, and
     `allow_google_signals` / `allow_ad_personalization_signals` are false.

Consequence to remember when reading numbers: **all counts are
consenting-visitors only.** CTR ratios (store_click / page_view) stay
meaningful because both numerator and denominator come from the same
consenting population; absolute visit counts undercount reality.

## Events

| Event | Fired by | When | Parameters |
|---|---|---|---|
| `page_view` | `Analytics.tsx` (manual) | Every App Router pathname change, plus once when GA boots (initial load or the moment consent is granted) | `page_path`, `page_location`, `page_title` |
| `store_click` | `Analytics.tsx` (site-wide delegated click listener) | Any click on any `<a>` whose href contains `apps.apple.com` — every App Store badge/CTA on every page, incl. the invite page's redeem link | `source`, `page_path` |
| `invite_view` | `app/i/[ref]/InviteView.tsx` | Invite page mounted | `ref`, `code` |
| `code_reveal` | `InviteView.tsx` | Visitor reveals/copies the offer code | `ref`, `code` |
| `redeem_click` | `InviteView.tsx` | Click on the redeem link (iOS visitors) | `ref`, `code` |
| `download_click` | `InviteView.tsx` | Click on the invite page's App Store badge | `ref`, `code` |

Notes:

- **Page components must send events through the exported `track()` helper in
  `Analytics.tsx`, never `window.gtag` directly.** The helper buffers events
  fired before gtag boots (a page's mount effect runs before the island's
  effect, so mount-time `window.gtag?.()` calls silently no-op — this killed
  `invite_view` entirely until 2026-07-17) and flushes them after
  `gtag('config', …)` once consent is granted. Buffered events from visitors
  who never grant consent are never sent, so the consent gate holds.
- `send_page_view: false` is set in `gtag('config', …)`; page views are sent
  manually so App Router client navigations are counted exactly once.
  **GA4 Enhanced Measurement's "Page changes based on browser history events"
  must stay OFF** (see MANUAL_CHECKLIST) or every navigation double-counts.
- On the invite page, a redeem/badge click fires **both** the legacy
  `redeem_click`/`download_click` (with `ref` attribution) and `store_click`
  (so site-wide CTR includes invites). This is intentional; don't "fix" it.
- QR-code scans (`QrFallback`, invite QR) are **invisible to web analytics** —
  the phone goes straight to Apple. Desktop-Windows/Linux CTR will therefore
  read low; reconcile against App Store Connect instead (below).

### `store_click` details (the #1 KPI feeder)

- **`source`** comes from the nearest `data-store-source` attribute on or
  above the anchor; fallback is `inline` (bare App Store links inside body
  copy). Current values — treat as a frozen reporting contract, add new ones
  but never rename:

  | source | Where |
  |---|---|
  | `home-hero` | Home page hero badge (`app/HomeClient.tsx`) |
  | `home-cta-footer` | Home page bottom "Start listening." badge |
  | `store-cta` | The shared end-of-page `<StoreCta />` block on money pages, blog articles, and `/listen` catalog pages |
  | `invite-redeem` | `/i/[ref]` redeem-offer link |
  | `invite-download` | `/i/[ref]` App Store badge |
  | `inline` | Any unlabeled App Store link (fallback) |

- **De-duplication:** first click per `(page_path, source)` per browser
  session counts; repeats are swallowed via a
  `sessionStorage["lr-store-click:<path>:<source>"]` guard. Combined with the
  single delegated listener (no per-component handlers to duplicate on
  re-render), re-renders and double-clicks cannot poison CTR.
- **Adding a new CTA:** nothing to wire — any `apps.apple.com` anchor is
  tracked automatically. Just add `data-store-source="your-label"` (kebab-case,
  stable) if you want it distinguishable from `inline`, and list it here.

## Dimensions / GA4 setup (one-time, manual — see margent/MANUAL_CHECKLIST.md)

- Custom dimensions (event-scoped) to register in GA4 Admin → Custom
  definitions: `source`, `page_path` (for non-default reports), `ref`, `code`.
- Mark `store_click` as a **key event** (GA4's conversion).
- Per-page store-click CTR = `store_click` count / `page_view` count per
  `page_path`. This ratio is the ranking metric for deciding which pages get
  expanded (GROWTH_PROMPT C4/C5); the monthly procedure lives in
  `margent/RUNBOOK_MONTHLY_LOOP.md`.

## Weekly reconcile against App Store Connect

Web CTR only measures intent up to the Apple hand-off. Once a week
(Europe/Warsaw time, pick a fixed weekday so weeks are comparable):

1. In GA4 (Reports → Engagement → Events, or the GA4 MCP), pull the last full
   Mon–Sun week: total `store_click`, split by `page_path` and `source`.
2. In App Store Connect → Analytics → Metrics, same date range: **product
   page views**, **total downloads** (first-time + redownloads shown
   separately), and conversion rate. Source type "App referrer" / web referrer
   breakdown shows how much arrived from the site.
3. Record three ratios in a running log (append to this file or a sheet):
   - `store_click` → ASC product page views (Apple sees more than we do:
     QR scans, declined-consent visitors, App Store search — expect ASC ≥ web).
   - ASC product page views → downloads (Apple-side conversion; if this drops,
     the store listing—not the website—is the problem).
   - `store_click` → downloads (end-to-end; the number that justifies pages).
4. Divergence rules of thumb: web `store_click` up but downloads flat → store
   listing or pricing friction; downloads up but `store_click` flat → growth
   is coming from App Store search/browse, not the site — don't credit the
   pages.

Remember both series undercount differently (consent on the web side; Apple
only attributes opted-in devices in some ASC reports). Track **trends and
ratios**, not absolutes.

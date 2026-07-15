import { APP_STORE_URL } from "./site";
import QrFallback from "./QrFallback";

/**
 * Platform-aware App Store CTA (server component).
 *
 * The badge is a plain server-rendered <a> to the App Store, so it works for
 * every visitor and every crawler, never a dead-end button, no JS required.
 * <QrFallback /> is a small client leaf that additionally shows a scannable
 * QR code, but only for visitors on non-Apple desktops (Windows/Linux), where
 * clicking through to apps.apple.com can't install anything.
 *
 * `source` becomes the store_click event's source dimension (read via the
 * data-store-source attribute by the site-wide delegated listener in
 * components/analytics/Analytics.tsx). The default "store-cta" is fine for
 * the standard end-of-page block, since page path already disambiguates pages;
 * only override when one page has MULTIPLE store CTAs to tell apart.
 * Contract: docs/analytics-events.md.
 */
export default function StoreCta({
  headline = "Try LoudReader free",
  subline = "No account, no sign-up. Unlimited listening on the free tier.",
  source = "store-cta",
  icon = "apple",
}: {
  headline?: string;
  subline?: string;
  source?: string;
  /**
   * Badge glyph. "apple" is the standard Apple mark. "play" swaps in a play
   * triangle to read as "listen" for the top-of-page CTA — the label still
   * says App Store, so the button remains honest: it opens the App Store, it
   * is NOT an in-browser player.
   */
  icon?: "apple" | "play";
}) {
  return (
    <section className="rounded-2xl bg-gray-50/70 border border-gray-200/70 p-8 md:p-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2">
        {headline}
      </h2>
      <p className="text-gray-500 mb-6 max-w-md mx-auto">{subline}</p>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-store-source={source}
        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-[14px] bg-black text-white shadow-lg shadow-black/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
      >
        {icon === "play" ? (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        )}
        <span className="flex flex-col items-start -space-y-0.5">
          <span className="text-[10px] font-normal leading-tight opacity-80">Download on the</span>
          <span className="text-lg font-semibold leading-tight tracking-tight">App Store</span>
        </span>
      </a>
      <QrFallback url={APP_STORE_URL} />
      <p className="text-xs text-gray-400 mt-5">
        Free download for Mac and iPhone &middot; works on iPad too
      </p>
    </section>
  );
}

// Shared, verified product facts for money pages.
// Single source of truth. Money pages import from here so every page phrases
// the differentiators IDENTICALLY (AI answer engines echo consistent phrasing).
//
// Do NOT edit these strings casually: they must stay in sync with the App Store
// listing, the home page JSON-LD (app/page.tsx), and public/llms.txt.

export const APP_NAME = "LoudReader";
export const SITE_URL = "https://loudreader.io";
export const APP_STORE_URL = "https://apps.apple.com/app/loudreader/id6758149478";
export const SUPPORT_EMAIL = "jeremi@loudreader.io";

/**
 * The three differentiators. Use these VERBATIM in page copy. Consistency
 * across pages is deliberate and load-bearing for AI answer engines.
 */
export const DIFFERENTIATORS = {
  private: "fully on-device and private, your library never leaves your device",
  voices: "natural offline voices",
  native: "native Mac and iPhone apps",
} as const;

/**
 * Pricing facts, verifiable against the App Store listing and loudreader.io.
 * If pricing changes in App Store Connect, update HERE and every money page
 * stays correct.
 */
export const PRICING = {
  free: "Free. Unlimited listening on every book, cover to cover. No account, no word quota.",
  premiumMonthly: "$7.99/month",
  premiumYearly: "$49.99/year",
  premiumLifetime: "$199.99 one-time (lifetime)",
  premiumFeatures:
    "all 8 AI voices, playback speed (0.3x to 3.0x), sleep timer, ambient soundscapes, and notes & highlights",
} as const;

/** System requirements, from the App Store listing. */
export const REQUIREMENTS =
  "iOS 18.0+, iPadOS 18.0+, macOS 15.0+ (Apple Silicon)";

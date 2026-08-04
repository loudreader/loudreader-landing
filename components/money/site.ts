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
 * The voice roster, read out of the shipping app rather than remembered.
 * Source of truth: the studio voice enum in the app (roster + language map)
 * and the free-tier voice enum. Audited 2026-08-04 against 1.06.
 *
 * Engine and model names are deliberately absent from this repo: nothing that
 * ships to a reader should name the models behind the voices.
 *
 * Counting rule: 23 = 11 English + 4 Spanish + one each for German, French,
 * Italian, Dutch, Polish, Portuguese and Danish/Swedish. Two QA references
 * (David, Golden) exist in the enum, never reach a user, and are NOT counted.
 */
export const VOICES = {
  /** The headline number. Use this phrasing verbatim. */
  headline: "23 studio narrators across 10 languages",
  /** For English-market pages where the language spread is not the point. */
  english: "11 English studio voices",
  /** What Premium unlocks, phrased as a noun for feature lists. */
  premium: "all 23 studio narrators across 10 languages",
  /** What a free user keeps after the trial. */
  free: "one natural offline voice, with unlimited listening",
  /**
   * The picker is lazy by language: non-English narrators appear once there is
   * a book in that language in the library. Say this whenever the copy could
   * be read as "23 names in one list".
   */
  lazyLanguages:
    "narrators for a language appear once you have a book in that language",
  languageList:
    "English, Spanish, German, French, Italian, Dutch, Polish, Portuguese, Swedish and Danish",
} as const;

/**
 * On-device voice cloning (Voice Studio), shipping since 2026-07-28. The site
 * was silent about it for a full release; it is the strongest thing we can say
 * that no cloud competitor can match on privacy grounds.
 */
export const CLONING = {
  short: "clone your own voice on device",
  long:
    "Read one paragraph aloud — about thirty seconds — and LoudReader builds a narrator from it. The recording, the model and the voice never leave your device, and deleting the voice deletes the files.",
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
    "all 23 studio narrators across 10 languages, on-device voice cloning, playback speed (0.3x to 3.0x), sleep timer, ambient soundscapes, and notes & highlights",
} as const;

/** System requirements, from the App Store listing. */
export const REQUIREMENTS =
  "iOS 18.0+, iPadOS 18.0+, macOS 15.0+ (Apple Silicon)";

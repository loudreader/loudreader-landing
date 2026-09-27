// Shared facts checked against shipping LoudReader 1.12 (release_v1.12,
// 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0) and Apple's live US lookup on
// 2026-09-28. See docs/product-facts-2026-09-28.md for exact source evidence.
// Keep app facts separate from the Loudkit framework and agent companion.

export const APP_NAME = "LoudReader";
export const SITE_URL = "https://loudreader.io";
export const APP_STORE_URL = "https://apps.apple.com/app/loudreader/id6758149478";
export const SUPPORT_EMAIL = "jeremi@loudreader.io";
export const DEVELOPER = "Jeremi Podlasek";

export const DIFFERENTIATORS = {
  private: "speech is generated on your device; books are not uploaded for narration",
  voices: "natural offline voices",
  native: "runs on iPhone and iPad, and on Apple Silicon Macs as an iPad app",
} as const;

export const MAC = {
  precise:
    "LoudReader is an iPhone and iPad app. On compatible Apple Silicon Macs it runs through Apple's iPad-app compatibility mode, rather than as a separate native macOS application.",
} as const;

export const VOICES = {
  headline: "23 studio narrators across 10 languages",
  english: "11 English studio voices",
  premium: "all available studio narrators across 10 languages",
  free: "a free English voice selection, with unlimited book listening",
  lazyLanguages:
    "the voice list follows languages in your library or languages you choose in Settings",
  languageList:
    "English, Spanish, German, French, Italian, Dutch, Polish, Portuguese, Swedish and Danish",
  availability: "Available voices depend on your device; check the in-app voice list.",
} as const;

// VoiceEnrollment uses a roughly ten-second recording. Trial creation allowance
// is three clones; existing clones lock after the all-voices allowance expires.
export const CLONING = {
  short: "clone your own voice on device",
  long:
    "Record about ten seconds of clear speech to create a narrator on your device. Use your own voice or a recording you have permission to use. Voice files are stored locally, and deleting a clone removes its saved files.",
  trial:
    "You can create up to three voice clones during the all-voices trial. Continued use after the trial requires Premium.",
} as const;

// SubscriptionManager retains the chosen lighter English voice (Stella or Rio)
// plus Bella on supported devices. Do not describe this as any one of 23 voices.
export const FREE_TIER = {
  trial: "every available voice free for your first 8 hours of listening",
  afterTrial:
    "afterwards, keep a free English voice selection and unlimited book listening",
  full:
    "Try every available voice for your first 8 hours of listening. Afterwards, keep a free English voice selection and unlimited book listening. No LoudReader account or word quota.",
  choice:
    "Choose Stella or Rio as your free English voice; supported devices also keep Bella.",
} as const;

// These are the US App Store listing's prices, not a universal storefront price.
// Notes, highlights, normal offline listening and the share extension are free.
export const PRICING = {
  free: `Free book listening. ${FREE_TIER.full}`,
  premiumMonthly: "US$7.99/month",
  premiumYearly: "US$49.99/year",
  premiumLifetime: "US$199.99 one-time (lifetime)",
  premiumFeatures:
    "every available narrator, continued voice cloning, playback speed (0.3x to 3.0x), sleep timer, ambient soundscapes, unlimited article saving and uncapped batch imports",
} as const;

export const LIBRARY = {
  gutenberg: "browse 70,000+ Project Gutenberg titles, subject to local copyright",
  curated: "100+ curated classics on the home shelf",
} as const;

export const FEATURES = {
  highlighting: "word-by-word highlighting synced to the narration",
  imports: "DRM-free EPUBs, PDFs and saved web articles",
  ocr: "on-device text recognition for scanned PDFs, with results depending on the document",
  onDevice: "speech is generated on your device, so books already on the device can be narrated offline",
  speed: "Premium playback speed from 0.3x to 3.0x",
} as const;

// SettingsSheet.showsUsageStatisticsChoice is false in release 1.12. The SDK
// wrapper's comment about a visible opt-out is stale; do not repeat it in copy.
export const PRIVACY = {
  summary:
    "Speech and text recognition run locally. The app also sends crash/performance diagnostics and usage analytics. Version 1.12 has no visible in-app switch for these diagnostics and analytics; website analytics consent is separate.",
} as const;

export const REQUIREMENTS =
  "iOS 18.0+, iPadOS 18.0+, macOS 15.0+ on a compatible Apple Silicon Mac; voice availability depends on the device";

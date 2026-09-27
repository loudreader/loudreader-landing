import { CLONING, FREE_TIER, PRICING, VOICES } from "@/components/money/site";

// Single source of truth for FAQ content.
// Rendered server-side on /faq AND emitted as FAQPage JSON-LD. Keep both in sync by editing only this file.
export const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I add my own books?",
        a: "Import DRM-free EPUBs and PDFs from Files, or share them to LoudReader from another app. You can also save web articles using a link or the share extension. Scanned PDFs use on-device text recognition; results depend on the scan and layout, and OCR processes up to 300 pages per import. Password-protected PDFs are not supported.",
      },
      {
        q: "Where do the free books come from?",
        a: "LoudReader lets you browse and download over 70,000 Project Gutenberg classics. Downloading needs an internet connection; once a book is in your library, narration works offline. These titles are public domain in the United States, but copyright rules differ by country. The curated starter shelf is separate from the full online catalogue.",
      },
      {
        q: "Do I need an account to use the app?",
        a: "No LoudReader account is required to import books and listen. An Apple ID is used for App Store downloads and purchases.",
      },
    ],
  },
  {
    category: "Listening & Reading",
    questions: [
      {
        q: "How does the text-to-speech work?",
        a: "LoudReader generates speech directly on your device. Your book text is not uploaded to a speech server for narration. This is separate from the app's network features and diagnostics, explained in the privacy answers below.",
      },
      {
        q: "Can I read and listen at the same time?",
        a: "Yes. Words are highlighted as narration plays, so you can follow the text while listening and find your place when you switch between reading and listening.",
      },
      {
        q: "Which voices are available?",
        a: `${VOICES.headline}: 11 in English, four in Spanish, and one each in German, French, Italian, Dutch, Polish, Portuguese, Swedish and Danish. ${VOICES.availability} In the picker, ${VOICES.lazyLanguages}. ${FREE_TIER.full} ${FREE_TIER.choice} Premium unlocks the full selection available on your device.`,
      },
      {
        q: "Can LoudReader read books in languages other than English?",
        a: `The studio roster covers ${VOICES.languageList}. Narrator availability depends on your device. You can select reading languages in Settings as well as importing books in those languages. Speech is generated locally.`,
      },
      {
        q: "Can I use my own voice?",
        a: `Yes. ${CLONING.long} You can create up to three voices during the all-voices allowance. Premium removes that creation quota. Existing cloned voices remain stored but lock after the allowance ends unless you have Premium.`,
      },
      {
        q: "Does it work without internet?",
        a: "Books already on your device can be narrated offline. Installation, downloading books or articles, purchases and diagnostics use the network. Before travelling, open the app and test your chosen book and voice in airplane mode so you know the needed resources are available.",
      },
    ],
  },
  {
    category: "Premium & Pricing",
    questions: [
      {
        q: "What do I get for free?",
        a: `Unlimited book listening and individual book imports, notes and highlights, word-following highlighting, and access to Project Gutenberg browsing are free. ${FREE_TIER.full} Free use also includes up to 30 saved articles and five bulk-import actions; those are separate from individual book imports.`,
      },
      {
        q: "What does Premium add?",
        a: `Premium includes ${PRICING.premiumFeatures}. Notes and highlights are also available free. US pricing is ${PRICING.premiumMonthly}, ${PRICING.premiumYearly}, or ${PRICING.premiumLifetime}; prices can vary by storefront. An eligible subscriber's introductory offer is separate from the eight-hour voice allowance.`,
      },
      {
        q: "How do I manage or cancel my subscription?",
        a: "Go to Settings → Your Name → Subscriptions on your device. Apple handles all billing - you can upgrade, downgrade, or cancel anytime.",
      },
      {
        q: "How do I request a refund?",
        a: "Refunds are handled by Apple. Visit reportaproblem.apple.com to request a refund for any purchase.",
      },
    ],
  },
  {
    category: "Privacy & Data",
    questions: [
      {
        q: "Is my data private?",
        a: "Speech generation and scanned-document text recognition happen on your device. Your books are not uploaded to a speech server for narration. The app also sends crash and performance diagnostics through Sentry and usage analytics through TelemetryDeck. Local speech processing does not mean the app collects no data; see the privacy policy for details.",
      },
      {
        q: "Does the app phone home?",
        a: "Yes. Book and article downloads, App Store purchases, crash and performance diagnostics, and usage analytics can involve network requests. Narrating a book already on your device does not require a speech service. Version 1.12 does not expose an in-app usage-analytics switch; the website's cookie controls apply to the website, not the app.",
      },
    ],
  },
];

/**
 * Stable anchor for one question, so other pages can link straight at it
 * (/faq#can-i-use-my-own-voice). Derived from the question text rather than a
 * hand-kept id list: an anchor that silently stops matching its question is
 * worse than no anchor, and this one cannot drift.
 *
 * Editing a question's wording DOES change its anchor. Grep for the old slug
 * before you reword one.
 */
export function faqAnchor(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

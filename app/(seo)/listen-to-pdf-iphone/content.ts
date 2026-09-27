// LoudReader product facts refreshed against release_v1.12 on 2026-09-28.
// See docs/product-facts-2026-09-28.md. Older third-party check dates below remain unchanged.
// Local content constants for /listen-to-pdf-iphone.
// One page = one file pair (page.tsx + content.ts) + meta.json.
// See docs/money-page-contract.md for the contract.
//
// FACT PROVENANCE. Every non-LoudReader claim below was checked on 2026-07-14:
//   - https://support.apple.com/guide/iphone/iph96b214f0/ios
//     (Apple iPhone User Guide: "Hear iPhone speak the screen, selected text,
//     and typing feedback" confirms Spoken Content / Speak Selection /
//     Speak Screen exist as built-in iOS features. Steps described on this
//     page (Settings > Accessibility > Spoken Content; two-finger swipe down
//     from the top of the screen for Speak Screen; on-screen speech
//     controller) follow that guide.)
// LoudReader claims verified against components/money/site.ts, the App Store
// listing, and the app source (background audio + lock-screen controls:
// UIBackgroundModes "audio" in Info.plist + MPRemoteCommandCenter in
// PlayerService.swift; PDF import reads the PDF's embedded text layer. See
// PDFImportPipeline.swift in 1.12 uses PDFKit text extraction and Apple Vision OCR.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER, PRICING, PRIVACY, VOICES } from "@/components/money/site";

export const SLUG = "listen-to-pdf-iphone";

export const LAST_UPDATED = "2026-09-28";
export const FACTS_CHECKED_NOTE =
  "LoudReader 1.12 product facts checked September 28, 2026; iOS Spoken Content facts checked against Apple's iPhone User Guide (support.apple.com) on July 14, 2026";

export const PAGE_TITLE = "How to Listen to a PDF on iPhone (Free & Offline)";
export const PAGE_DESCRIPTION =
  "Two ways to listen to a PDF on your iPhone: LoudReader reads supported PDFs aloud with natural offline voices and no word quota, or use the built-in Speak Screen. Step-by-step guide.";

export const H1 = "How to listen to a PDF on your iPhone";

export const COMPARISON_COLUMNS = ["LoudReader", "iOS Speak Screen (built in)"];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "How you start it",
    cells: [
      "Share the PDF to LoudReader once, then press play anytime",
      "Enable in Settings → Accessibility → Spoken Content, then swipe down from the top of the screen with two fingers",
    ],
  },
  {
    label: "Voices",
    cells: [
      `${VOICES.headline}. ${VOICES.availability}`,
      "System voices (Siri and other Apple voices)",
    ],
  },
  {
    label: "Keeps your place",
    cells: [
      "Yes. Every PDF lives in your library and resumes where you left off",
      "No. It reads the current screen, with no library or saved position",
    ],
  },
  {
    label: "Word-by-word highlighting",
    cells: [
      "Yes, each word highlights in sync with the narration",
      "Optional highlighting via the Highlight Content setting",
    ],
  },
  {
    label: "Screen locked / in your pocket",
    cells: [
      "Yes, playback continues in the background with lock-screen controls",
      "Designed to speak what is on the screen",
    ],
  },
  {
    label: "Works offline",
    cells: [
      "100%. All speech is generated on your iPhone",
      "Yes, speech is generated on-device",
    ],
  },
  {
    label: "Privacy",
    cells: [
      "Local speech synthesis; diagnostics and usage analytics also run",
      "On-device (it is an iOS accessibility feature)",
    ],
  },
  {
    label: "Price",
    cells: [
      `Free book listening. ${FREE_TIER.full} Premium ${PRICING.premiumMonthly} in the US`,
      "Free, included with iOS",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "How do I get a PDF into LoudReader on my iPhone?",
    a: "Share the PDF from Files, Mail or Safari to LoudReader, or use its import button. Wait for import and any text recognition to finish, then open the document and press Play.",
  },
  {
    q: "Can I listen to a PDF on my iPhone for free?",
    a: `Yes. Book and PDF listening has no word quota and needs no LoudReader account. ${FREE_TIER.full}`,
  },
  {
    q: "Does listening to a PDF work offline, like on a plane?",
    a: "Yes, after the document and required voice resources are on your device. Speech is generated locally. Test the chosen PDF and voice without connectivity before travelling.",
  },
  {
    q: "Can I keep listening with the screen locked?",
    a: "Yes. LoudReader keeps playing in the background with the screen off, and you get play/pause and skip controls on the lock screen, just like a music or podcast app.",
  },
  {
    q: "Can my iPhone read a scanned PDF aloud?",
    a: "LoudReader 1.12 can recognise text locally in image-based PDFs. It attempts OCR when much of a document lacks text, with up to 300 OCR pages per import. Legibility and layout affect results; check the imported text and any partial-import message before relying on it.",
  },
  {
    q: "Is it private to listen to a confidential PDF this way?",
    a: `The PDF is not uploaded to a speech service for narration. ${PRIVACY.summary} Check your organisation’s requirements before importing sensitive work documents.`,
  },
];

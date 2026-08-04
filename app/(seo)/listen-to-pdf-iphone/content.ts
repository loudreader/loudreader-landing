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
// PDFImportPipeline.swift, which uses PDFKit text extraction, no OCR).

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const SLUG = "listen-to-pdf-iphone";

export const LAST_UPDATED = "2026-07-14";
export const FACTS_CHECKED_NOTE =
  "iOS Spoken Content facts checked against Apple's iPhone User Guide (support.apple.com) on July 14, 2026";

export const PAGE_TITLE = "How to Listen to a PDF on iPhone (Free & Offline)";
export const PAGE_DESCRIPTION =
  "Two ways to listen to a PDF on your iPhone: LoudReader reads any PDF aloud with natural offline voices and no word quota, or use the built-in Speak Screen. Step-by-step guide.";

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
      "23 natural offline voices across 10 languages, generated on-device",
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
      "Fully on-device, your library never leaves your device",
      "On-device (it is an iOS accessibility feature)",
    ],
  },
  {
    label: "Price",
    cells: [
      "Free, with unlimited listening and no word quota; Premium from $7.99/month for all voices and speed control",
      "Free, included with iOS",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "How do I get a PDF into LoudReader on my iPhone?",
    a: "Open the PDF in the Files app, Mail, Safari, or any app with a share button, tap Share, and choose LoudReader. You can also use the import button inside the app. The PDF appears in your library instantly, ready to play.",
  },
  {
    q: "Can I listen to a PDF on my iPhone for free?",
    a: "Yes. LoudReader's free tier includes unlimited listening on every document, cover to cover, with no word quota and no account. iOS also includes Speak Screen for free under Settings → Accessibility → Spoken Content.",
  },
  {
    q: "Does listening to a PDF work offline, like on a plane?",
    a: "Yes, 100%. LoudReader generates all speech on your iPhone in real time, so it works with zero connectivity, airplane mode included.",
  },
  {
    q: "Can I keep listening with the screen locked?",
    a: "Yes. LoudReader keeps playing in the background with the screen off, and you get play/pause and skip controls on the lock screen, just like a music or podcast app.",
  },
  {
    q: "Can my iPhone read a scanned PDF aloud?",
    a: "Only if the PDF has a text layer. LoudReader reads the text embedded in the PDF; a scan that is just photographs of pages has no text to read. Run the scan through an OCR tool first, then import the result.",
  },
  {
    q: "Is it private to listen to a confidential PDF this way?",
    a: "With LoudReader, yes. The app is fully on-device and private, your library never leaves your device. The PDF is never uploaded anywhere, there is no account, and the app works with the network switched off.",
  },
];

// Local content constants for /listen-to-articles-mac.
// One page = one file pair (page.tsx + content.ts) + meta.json.
// See docs/money-page-contract.md for the contract.
//
// FACT PROVENANCE, checked on 2026-07-14:
//   - https://support.apple.com/guide/mac-help/mh27448/mac
//     (Apple macOS User Guide: "Have your Mac speak text that's on the
//     screen". System Settings → Accessibility → Read & Speak (Spoken
//     Content on earlier macOS), default Speak-selection shortcut
//     Option-Esc, on-screen controller with rate control, selectable
//     voices, optional word/sentence highlighting.)
//   - LoudReader article flow verified against the app source: paste or
//     share an article link, the readable text is extracted and saved as
//     an item in the library, read aloud by the same on-device engine
//     (BookImportService.importLink + ArticleImportPipeline). Extraction
//     requires fetching the article once; narration itself is generated
//     on-device. Paywalled/login-gated pages may fail to extract (the app
//     has explicit failure/retry handling for this).
//   - No cloud sync exists in the app (no CloudKit/iCloud entitlements), so
//     libraries are per-device, stated honestly below.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const SLUG = "listen-to-articles-mac";

export const LAST_UPDATED = "2026-07-14";
export const FACTS_CHECKED_NOTE =
  "macOS Spoken Content facts checked against Apple's macOS User Guide (support.apple.com) on July 14, 2026";

export const PAGE_TITLE = "How to Listen to Articles on Your Mac";
export const PAGE_DESCRIPTION =
  "Paste any article link into LoudReader and your Mac reads it aloud with natural offline voices, clutter stripped and place saved. Or use the built-in Spoken Content shortcut.";

export const H1 = "How to listen to articles on your Mac";

export const COMPARISON_COLUMNS = ["LoudReader", "macOS Spoken Content (built in)"];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "How you start it",
    cells: [
      "Paste the article's link into LoudReader (or share it to the app)",
      "Select the text on the page, press Option + Esc",
    ],
  },
  {
    label: "Ads & clutter",
    cells: [
      "Stripped. LoudReader extracts the readable article text before reading",
      "Reads exactly what you select, so you do the selecting around the clutter",
    ],
  },
  {
    label: "Library & resume",
    cells: [
      "Yes, articles are saved alongside your books and resume where you stopped",
      "No, nothing is saved",
    ],
  },
  {
    label: "Voices",
    cells: [
      "8 natural offline voices with word-by-word highlighting",
      "System voices; optional highlighting while speaking",
    ],
  },
  {
    label: "Works offline",
    cells: [
      "Narration is 100% on-device; the article itself is fetched once when you add it",
      "Yes, speech is generated on your Mac",
    ],
  },
  {
    label: "Privacy",
    cells: [
      "Fully on-device and private, your library never leaves your device",
      "On-device (a macOS accessibility feature)",
    ],
  },
  {
    label: "Price",
    cells: [
      "Free, with unlimited listening and no word quota; Premium from $7.99/month",
      "Free, included with macOS",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "How do I add an article to LoudReader on my Mac?",
    a: "Copy the article's link and paste it into LoudReader's link import, or share the page to the app. LoudReader fetches the page once, pulls out the readable text (no menus, ads, or comment sections), and saves it to your library, ready to play.",
  },
  {
    q: "Can my Mac read a webpage aloud without any app?",
    a: "Yes. Enable Spoken Content under System Settings → Accessibility (Read & Speak on the latest macOS), then select the article text in Safari and press Option + Esc. It's free and built in, but it reads exactly what you select and keeps no queue or reading position.",
  },
  {
    q: "Does LoudReader work with paywalled articles?",
    a: "Usually not. If a page needs a login to show its text, LoudReader's extractor can't reach the article body, and the import fails with a clear error. Freely accessible pages like blogs, documentation, newsletters, and most news articles work well.",
  },
  {
    q: "Do articles count against a word limit?",
    a: "No. LoudReader has no word quota on any tier. The speech engine runs on your Mac, so there's nothing to meter. Listen to your whole backlog.",
  },
  {
    q: "Is listening to articles private?",
    a: "Yes. The only network request is fetching the article you asked for. The narration itself is generated on-device. LoudReader is fully on-device and private, your library never leaves your device, and it requires no account.",
  },
  {
    q: "Can I listen to the same article on my iPhone?",
    a: "LoudReader runs on iPhone too, with the same paste-or-share flow and background playback. One honest note: because everything stays on-device by design, libraries don't sync through a cloud, so add the article on the device you plan to listen on.",
  },
];

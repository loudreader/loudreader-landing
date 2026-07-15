// FACT PROVENANCE. Every claim verified on 2026-07-14 against:
//   - AO3 download flow: archiveofourown.org/faq/downloading-fanworks (the
//     Download button near the top of every work page offers AZW3, EPUB,
//     MOBI, PDF, and HTML; no account needed; multi-chapter works download
//     as one file). Cross-checked against ao3wiki.com/guides/download-fics/.
//   - Royal Road: royalroad.com has no official EPUB download button; offline
//     chapter downloads are a feature of their Premium subscription inside
//     their own app. Third-party tools (WebToEpub browser extension) are how
//     readers commonly package Royal Road stories as EPUBs.
//   - EPUB/PDF import: LoudReader_mac Info.plist declares CFBundleDocumentTypes
//     for org.idpf.epub-container and com.adobe.pdf with
//     LSSupportsOpeningDocumentsInPlace, so EPUBs open from the Files app /
//     "Open in" flows; AddContentSheet.swift has "Import EPUB/PDF File".
//   - URL/article import: LinkImportSheet.swift ("Drop in a URL and LoudReader
//     will fetch and add it to your library"). Free tier caps article reads
//     and saves at 30 each (SubscriptionManager.swift, SubscriptionAccess.swift).
//     Imported EPUB books are NOT capped (baseFreeFraction = 1.0,
//     canImportBook always true).
//   - Word-by-word highlighting: ReaderStylesheet.swift (.tts-word-highlight)
//     + Engines/HighlightSchedule.swift. Not premium-gated.
//   - Offline playback / privacy: all TTS runs on-device (no cloud TTS in the
//     app); background audio via Info.plist UIBackgroundModes = ["audio"].
//   - Speed control 0.3x to 3.0x is Premium: components/money/site.ts PRICING.
// Claims you may NOT make until verified: CarPlay; reading DRM'd files;
// languages other than English; any official Royal Road EPUB export.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How do I download a fanfic from AO3 as an EPUB?",
    a: "Open the work on archiveofourown.org and look for the Download button near the top of the page. It offers EPUB, PDF, MOBI, AZW3, and HTML, so choose EPUB. You do not need an AO3 account, and a multi-chapter fic downloads as a single file with every chapter in order.",
  },
  {
    q: "Can I listen to fanfiction offline?",
    a: "Yes. Once the EPUB is imported into LoudReader, the narration is generated entirely on your device, so there is no stream to drop. Listening works on the subway, on a plane, and in airplane mode, with playback continuing while the screen is locked.",
  },
  {
    q: "Does anyone see what I import into LoudReader?",
    a: "No. LoudReader is fully on-device and private, your library never leaves your device. There is no account, no upload, and no server that ever receives your files, so nobody sees which fics, ships, or tags you read.",
  },
  {
    q: "Can I speed up or slow down fanfic narration?",
    a: "Playback speed control from 0.3x to 3.0x is part of LoudReader Premium; the free tier plays at normal speed. Everything else in this guide (importing EPUBs, word-by-word highlighting, offline listening) works on the free tier with no word quota.",
  },
  {
    q: "Does this work for Royal Road and other web fiction?",
    a: "Partly. Royal Road has no official EPUB download button, and offline chapters are a feature of its own Premium app, so readers typically use a third-party tool such as the WebToEpub browser extension to package a story as an EPUB, which then imports into LoudReader like any other book. You can also paste a chapter URL into LoudReader and it fetches the page as an article, though the free tier caps articles while imported EPUB books are unlimited.",
  },
];

// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files via the Share sheet and the
//     built-in file picker. MOBI is not listed as a supported import format
//     in the app's Info.plist UTImportedTypeDeclarations or in
//     DocumentPicker.swift.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts
//     (single source of truth, synced with the App Store listing).
//   - DRM removal is NOT a feature of LoudReader. The article explicitly
//     says so and directs users toward Calibre for DRM-free MOBI files only.
// Claims you may NOT make: LoudReader opening MOBI directly, any DRM
// circumvention capability.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can LoudReader open MOBI files directly?",
    a: "No. LoudReader imports EPUB and PDF files. MOBI is not a supported import format. You need to convert the MOBI file to EPUB first using a tool like Calibre (free, open source), then import the EPUB into LoudReader.",
  },
  {
    q: "What about Kindle books I bought on Amazon? Will those work?",
    a: "Almost certainly not. Books you buy on Amazon are wrapped in Kindle DRM, which prevents any app other than a Kindle app or device from opening them. LoudReader does not and cannot remove DRM. If you have DRM-free MOBI files, say from a publisher like Tor that sells DRM-free ebooks, or from public domain sources like Project Gutenberg, those convert cleanly to EPUB in Calibre and then LoudReader reads them aloud.",
  },
  {
    q: "How do I convert a MOBI file to EPUB so I can listen to it?",
    a: "Install Calibre (free, open source, available on Mac and Windows). Add your DRM-free MOBI file to Calibre, select it, click Convert Books, pick EPUB as the output format, and click OK. The conversion takes seconds for a typical book. Once you have the EPUB, open it with LoudReader on your iPhone or Mac and press play.",
  },
  {
    q: "Can I listen to MOBI files offline?",
    a: "Once converted to EPUB and imported into LoudReader, yes. LoudReader is fully on-device and private, your library never leaves your device, and all voices run locally. No internet connection is needed for playback.",
  },
  {
    q: "Is the converted EPUB audio quality the same as a commercial audiobook?",
    a: "It is a different experience. A commercial audiobook has a human narrator and production values. A converted MOBI file read by LoudReader uses natural neural text-to-speech voices. The voices sound good and are clear enough for long listening sessions, but they are not a human performance. Whether that matters depends on what you are listening to and why.",
  },
];

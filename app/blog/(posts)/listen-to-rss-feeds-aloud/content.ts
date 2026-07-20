// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. There is no RSS reader, no
//     URL paste field, and no feed subscription feature.
//   - The workflow described (open article in Safari Reader, export as
//     PDF, import into LoudReader) is the honest route.
//   - RSS readers with built-in TTS (like Voice Dream Reader on iOS, which
//     does support RSS feeds) are mentioned as alternative options.
//   - NetNewsWire and Reeder are mentioned as popular RSS readers. These
//     are well-known apps with publicly verifiable feature sets.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: RSS feed integration in LoudReader, automatic
// article fetching.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader have built-in RSS support?",
    a: "No. LoudReader imports EPUB and PDF files. There is no RSS reader, no feed subscription, and no URL paste field. To listen to an RSS article, open it in Safari, use Reader view to get clean text, export as PDF, and import the PDF into LoudReader.",
  },
  {
    q: "Is there any RSS reader that reads articles aloud directly?",
    a: "A few RSS readers on iOS have built-in text-to-speech. Voice Dream Reader can import RSS feeds and read articles aloud. NetNewsWire and Reeder do not have TTS built in, but you can use iOS Speak Screen (swipe down with two fingers) to read articles in those apps. The voice is the system accessibility voice. If you want natural voices and offline listening with place bookmarking, the PDF export workflow with LoudReader is the alternative.",
  },
  {
    q: "Can I batch-listen to my RSS queue?",
    a: "Yes, but you do the batching manually. Open each article in Safari Reader, export as PDF, and save to a folder. When you have a batch, import them all into LoudReader and listen through them in sequence. There is no automatic batching, but the manual queue works and keeps everything on your device.",
  },
  {
    q: "Does this workflow work in airplane mode?",
    a: "Once the PDFs are imported into LoudReader, yes. The app is fully on-device and private, your library never leaves your device, and all voices run locally on your iPhone or Mac. Load up a batch of articles before a flight, switch to airplane mode, and listen through the entire queue with no connection.",
  },
  {
    q: "Which RSS reader should I use as the front end for this workflow?",
    a: "Any RSS reader that opens articles in Safari works. NetNewsWire is free, open source, native on Mac and iPhone, and private (no tracking, no account). Reeder has a polished interface and good feed management. Both open articles in Safari with one tap, which is where the export-and-import workflow picks up.",
  },
];

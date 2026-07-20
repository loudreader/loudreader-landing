// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. There is no Google Docs
//     integration, no OAuth flow, and no live document sync of any kind.
//   - The workflow described (download as PDF or EPUB from Google Docs,
//     import into LoudReader) is the honest and only route.
//   - Google Docs' own built-in accessibility features (ChromeVox, screen
//     reader support) are not part of this article's scope and are mentioned
//     only as alternative options.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: live Google Docs integration, Chrome extension,
// real-time sync.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does Google Docs have a built-in read-aloud tool?",
    a: "Not a proper text-to-speech reader with voices you would want to listen to for more than a few sentences. Google Docs does support screen readers like ChromeVox for accessibility, which will read the document aloud in a robotic voice while you navigate. But there is no one-button 'read this doc aloud with a natural voice' feature. For that, you export the doc and use a dedicated text-to-speech app like LoudReader.",
  },
  {
    q: "Why export to PDF anyway instead of using a browser extension?",
    a: "Browser extensions add trackers, run in the cloud, and often stop working when Google Docs updates its interface. Exporting to PDF means your document is a finished snapshot on your device, and the reading happens offline with no browser tab open. LoudReader is fully on-device and private, your library never leaves your device, so you can listen even when you close the laptop and put your phone in your pocket.",
  },
  {
    q: "Can I edit the Google Doc while listening to the previous version?",
    a: "Yes, and this is actually the workflow that works best. Export the doc at the start of a proofreading session, import the PDF into LoudReader, and listen while you have the original doc open in a separate window. Make edits as you hear problems. When you want to re-check a section, re-export and re-import.",
  },
  {
    q: "Which export format sounds better in LoudReader, PDF or EPUB?",
    a: "For Google Docs, EPUB usually sounds better. Google Docs exports EPUB with clean semantic markup (headings, paragraphs, lists) which LoudReader uses to pace the speech naturally. PDF exports from Google Docs sometimes carry over page margins and headers that make the reading flow less smooth. If both are available, try EPUB first.",
  },
  {
    q: "Does this work on a Chromebook?",
    a: "LoudReader runs natively on iPhone and Mac (Apple Silicon), not on Chrome OS. On a Chromebook, you can still export the Google Doc as EPUB or PDF and send the file to your iPhone, then listen there. Or you can use the built-in ChromeVox screen reader if you only need a quick read-back and do not mind the robotic voice.",
  },
];

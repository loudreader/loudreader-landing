// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. There is no email client
//     integration, no Mail app extension, no IMAP/POP3 support, and no
//     Gmail/Outlook API connection.
//   - The honest workflow described (save email as PDF from the Mail app,
//     then import into LoudReader) is the actual route.
//   - Apple Mail's "Export as PDF" feature on Mac (File then Export as
//     PDF) and the iPhone print-to-PDF gesture are standard system
//     features verifiable on any Apple device.
//   - The claim that LoudReader is fully on-device is verified: no text
//     is sent to a server for processing. This matters for confidential
//     email content.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: email client integration, inbox sync, mail
// plugin.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can LoudReader connect to my email inbox?",
    a: "No. LoudReader imports EPUB and PDF files. It does not connect to any email service, has no Mail app extension, and does not read from an inbox. The workflow is manual: you save an email as a PDF from your mail app, then import that PDF into LoudReader.",
  },
  {
    q: "Why not just use my mail app's built-in text-to-speech?",
    a: "On iPhone, you can use iOS Speak Screen (two-finger swipe down) to read an email aloud. It works, but the voice is the system accessibility voice, it reads everything on screen including interface buttons, and it stops if you switch apps or lock the screen. For a quick scan of a short email, that is enough. For a detailed, multi-page email or a long thread, LoudReader gives you natural voices, remembers your place, and keeps playing with the screen locked.",
  },
  {
    q: "Is it safe to export confidential emails as PDFs?",
    a: "The PDF export itself is a local operation on your device. Once you import the PDF into LoudReader, it stays there. LoudReader is fully on-device and private, your library never leaves your device. The app has no account, no cloud sync, and no analytics. The PDF exists on your device in two places: your Files app and LoudReader's library. Delete it from either when you are done. Compare this to forwarding an email to a cloud text-to-speech service, which uploads the content to someone else's server. For confidential documents, the manual PDF route is the private one.",
  },
  {
    q: "Can I listen to an entire email thread?",
    a: "If you export the thread as a single PDF, yes. Apple Mail on Mac lets you select multiple messages and export them together. The PDF shows the messages in order, with sender names and timestamps. LoudReader reads through the thread from oldest to newest. Quoted replies appear as indented text, which the TTS voice reads inline with the rest of the content. The result is readable but not always easy to follow because there is no audio cue distinguishing the original message from a reply.",
  },
  {
    q: "What about email newsletters? Can those be listened to?",
    a: "Yes, and newsletters are actually a better fit for this workflow than personal emails. Most email newsletters are long-form text with simple formatting, and they export cleanly as PDFs. Save the newsletter as a PDF, import it into LoudReader, and you have an offline, private version that reads aloud with natural voices. This is an alternative to opening the newsletter in a browser for the export-and-import workflow described in the guide for listening to Substack and RSS feeds.",
  },
];

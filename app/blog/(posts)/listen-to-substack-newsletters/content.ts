// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. There is no Substack
//     integration, no RSS reader, and no email inbox connection.
//   - The workflow described (open in Safari Reader, export as PDF,
//     import into LoudReader) is the honest route.
//   - Substack's own audio narrations (where the author records a reading)
//     are noted as a separate feature within Substack itself. No claim is
//     made that LoudReader can access these.
//   - Subscriber-only content honesty: paywalled posts export the paywall
//     message, not the article text, unless you are logged in as a
//     subscriber when you export.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: Substack app integration, email inbox sync.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does Substack have a built-in audio feature for newsletters?",
    a: "Some Substack writers record their own audio narrations and embed a player in the post. That is a human recording done by the author, not text-to-speech. If the author recorded it, you will see a play button at the top of the post. But most Substack posts are text-only, and Substack does not provide a text-to-speech button on the platform.",
  },
  {
    q: "Can I listen to subscriber-only posts?",
    a: "Yes, if you are a paying subscriber. Open the newsletter post in Safari while logged into your Substack account, use Reader view to get clean text, and export as PDF. The PDF captures whatever text is visible, so you must be logged in to see subscriber content. If you are not logged in, the PDF exports the paywall message, not the article.",
  },
  {
    q: "Do I need to open each newsletter in a browser?",
    a: "Yes. The workflow is manual: open the post, export as PDF, import into LoudReader. There is no automatic feed, no email integration, and no browser extension that sends Substack posts to the app. If you subscribe to many newsletters, the export step adds up. Whether that is worth it depends on how much you want to listen versus read.",
  },
  {
    q: "Can I listen to my newsletter queue offline?",
    a: "Once you export the posts as PDFs and import them into LoudReader, yes. LoudReader is fully on-device and private, your library never leaves your device, and all voices run locally. Playback works with no internet connection. Queue up a batch of newsletters, go offline, and listen through them like a custom podcast episode.",
  },
  {
    q: "Does the TTS voice handle newsletter formatting well?",
    a: "Substack newsletters tend to be straightforward prose with occasional bullet points and subheadings. LoudReader reads these naturally because the format is simpler than a book or a technical document. Images get skipped (no audio), but captions and alt text get read. Embedded tweets, charts, and other rich embeds produce nothing audible unless the author described them in the surrounding text.",
  },
  {
    q: "What about the Substack app? Can I listen there?",
    a: "The Substack app does not have text-to-speech built in. On iOS, you can use the system-wide Speak Screen feature (swipe down with two fingers from the top of the screen when a post is open), which reads the text with the system accessibility voice. It works but reads everything on screen, including interface buttons and labels. It is functional, not pleasant, and it stops if you switch apps or lock the screen.",
  },
];

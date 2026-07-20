// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. There is no Medium
//     integration, no URL paste field, and no browser extension.
//   - The workflow described (open in Safari Reader, export as PDF,
//     import into LoudReader) is the honest route.
//   - Medium's own audio feature (authors recording narrations) is
//     mentioned as an existing but rare feature. Medium's member-only
//     paywall is described accurately: non-members see a truncated article
//     with a signup prompt, and the PDF export captures whatever is
//     visible on the page.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: Medium integration, paywall bypass, member
// article access.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does Medium have a built-in listen feature?",
    a: "Medium added audio narrations in 2020, but only for articles where the author recorded a reading themselves. When an article has audio, a 'Listen' button appears at the top of the page next to the bookmark icon. Most Medium articles do not have this. For text-only articles, Medium provides no text-to-speech option.",
  },
  {
    q: "Can I listen to member-only Medium articles?",
    a: "Only if you have a Medium membership and you are logged in when you export. Medium articles behind the paywall show a truncated preview to non-members. When you export the page as PDF, you get whatever is visible: the full article if you are a logged-in member, or the paywall preview if you are not. LoudReader does not bypass Medium's paywall.",
  },
  {
    q: "How do I export a Medium article for listening?",
    a: "Open the article in Safari on iPhone or Mac. Tap the Reader button in the address bar to strip ads, claps, and the Medium sidebar. Then export as PDF: on Mac, File then Export as PDF. On iPhone, share button, Print, pinch outward to open as PDF, save to Files or share to LoudReader. Import the PDF into LoudReader and press play.",
  },
  {
    q: "Does the TTS voice handle Medium's formatting well?",
    a: "Medium articles are mostly straightforward prose with occasional images and pull quotes. Safari Reader strips the Medium interface but preserves headings, paragraphs, and blockquotes. LoudReader reads these naturally. Embedded tweets, charts, and other rich media produce no audio. Captions get read, which helps for images.",
  },
  {
    q: "Can I build a Medium reading queue to listen offline?",
    a: "Yes. Bookmark articles in Medium or save them to a reading list. When you have a batch, open each one in Safari Reader, export as PDF, and import into LoudReader. The PDFs are offline files. LoudReader is fully on-device and private, your library never leaves your device, so you can listen through your queue without an internet connection.",
  },
  {
    q: "What about the Medium app? Can I listen there?",
    a: "The Medium app does not have text-to-speech. On iOS, you can use the system Speak Screen feature (two-finger swipe down) to read articles aloud in the app. The voice is the system accessibility voice, it reads interface elements along with the text, and it stops if you lock the screen. For a short article, it is functional. For a long read, the PDF export approach with LoudReader gives you natural voices and offline playback.",
  },
];

// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. There is no Wikipedia
//     integration, no URL paste field, and no built-in browser.
//   - The workflow described (Wikipedia's own "Download as PDF" link,
//     available in the left sidebar or under Tools, then import into
//     LoudReader) is the honest route.
//   - Wikipedia's built-in spoken articles project (en.wikipedia.org/wiki/
//     Wikipedia:Spoken_articles) is mentioned as a complementary resource
//     but not something LoudReader provides.
//   - The claim that Wikipedia pages print cleanly as PDFs is verifiable
//     by trying it on any Wikipedia article page.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: Wikipedia integration in the app, live article
// fetching.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does Wikipedia have a built-in listen feature?",
    a: "Not a text-to-speech one. Wikipedia has a Spoken Articles project where volunteers record themselves reading articles aloud. About 2,000 articles have human recordings, mostly in English. These are real people talking, not TTS. For the other 6 million English articles, there is no audio option at all. You need to export the article and use a text-to-speech app.",
  },
  {
    q: "How do I export a Wikipedia article as a PDF?",
    a: "On the desktop Wikipedia site, scroll to the left sidebar and look for 'Print/export'. Click 'Download as PDF'. Wikipedia renders a clean PDF with the article text and the main images. No ads, no sidebars, no talk page. Save the PDF and import it into LoudReader. On mobile, the 'Download as PDF' link is usually under the Tools section at the bottom of the page.",
  },
  {
    q: "Will the TTS voice pronounce technical terms and foreign names correctly?",
    a: "Sometimes yes, sometimes no. Wikipedia articles are full of technical vocabulary, place names, and foreign-language terms. The neural voices in LoudReader handle common English words well, but they can stumble on obscure scientific terms or non-English names. The article text is still read clearly enough to follow, but you will notice mispronounced words in a dense technical article. This is a limitation of every text-to-speech engine.",
  },
  {
    q: "Can I listen to Wikipedia articles offline?",
    a: "Yes. Download the article as a PDF while you are online, import it into LoudReader, and from that point on it is an offline file. LoudReader is fully on-device and private, your library never leaves your device, and the voices run locally. Build a queue of PDFs before you go offline and listen through them anywhere.",
  },
  {
    q: "How do I handle the citation brackets in Wikipedia text?",
    a: "Citation numbers in brackets like [1], [23], and [47] get read aloud by the TTS voice. For a long article, hearing 'bracket one bracket' every few sentences is distracting. Wikipedia exports include the citation brackets by default. One workaround: before exporting, click the 'Printable version' link in the sidebar instead of 'Download as PDF'. The printable version often strips citation brackets. The result is not perfect, but it is cleaner for listening.",
  },
  {
    q: "Is this useful for studying or research?",
    a: "Yes, and in two ways. First, listening to a Wikipedia article before reading it closely gives you a structural overview. You hear the flow of the topic, the main sections, and the key terms without getting stuck on details. Second, listening while looking at diagrams, maps, or timelines on a separate device combines two input channels. You hear the explanation and see the visual at the same time, which helps retention for many learners.",
  },
];

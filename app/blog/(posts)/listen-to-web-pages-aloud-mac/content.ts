// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. There is no URL paste field,
//     no built-in web view, and no browser extension.
//   - The honest workflow described (use Safari Reader, export as PDF,
//     import into LoudReader) is the actual route.
//   - Safari's built-in "Listen to Page" (Spoken Content) feature exists
//     in macOS 15+ and is described accurately: it uses the system
//     accessibility voice and reads in a floating window. The tradeoff is
//     presented honestly, not dismissed.
//   - Paywall honesty: the article concedes that paywalled pages export as
//     the paywall overlay, not the article text. No workaround is claimed.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: browser extension, URL paste feature, paywall
// bypass.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can Safari read web pages aloud without any extra app?",
    a: "Yes. In Safari on a Mac running macOS 15+, select the text you want to hear, right-click, and choose Speech, then Start Speaking. Or press Option+Esc to start and stop the system voice. The voice is the one set in System Settings under Accessibility, Spoken Content. It works, and it is free, but the voice is the system accessibility voice and there is no bookmarking, speed control beyond one global slider, or offline queue. It reads what is on screen right now and that is all it does.",
  },
  {
    q: "Why would I use a separate app instead of Safari's built-in reader?",
    a: "If you only want a few paragraphs read once and you are fine with the system voice, Safari's built-in option does the job. If you want natural voices, speed control from 0.3x to 3.0x, sleep timer, place bookmarking, and the ability to queue up several articles and listen offline, a dedicated app adds those things. Different tools for different needs.",
  },
  {
    q: "Does LoudReader import web pages directly from a URL?",
    a: "No. LoudReader imports EPUB and PDF files. There is no URL paste field and no browser extension. The workflow is: open the article in Safari, use Reader view to get clean text, export as PDF, and import that PDF into LoudReader.",
  },
  {
    q: "What about paywalled articles? Can I listen to those?",
    a: "No, not with this workflow. When you export a paywalled page as PDF, the PDF contains the paywall overlay, not the article text. If you have a subscription to the publication, log in first in Safari, then open the full article and export it. The export captures whatever is visible on the page. If the paywall blocks the text, the export is just the paywall.",
  },
  {
    q: "Can I listen to web pages offline on my Mac?",
    a: "Yes, once the article is saved as a PDF and imported into LoudReader. The app is fully on-device and private, your library never leaves your device, and all voices run locally on your Mac's Apple Silicon chip. No internet connection needed after import.",
  },
  {
    q: "Does this approach strip ads and sidebars from the article?",
    a: "Safari's Reader view does, which is why the article recommends using it before exporting. Reader view strips navigation, ads, sidebars, and most non-article content, leaving just the headline, body text, and images. Export from Reader view and you get a clean, ad-free PDF that sounds natural when read aloud.",
  },
];

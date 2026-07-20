// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. Kindle formats (AZW3, KFX,
//     MOBI) are not supported, and the app has no DRM circumvention code.
//   - The Kindle app's own text-to-speech feature (Screen Reader on iOS,
//     Alexa integration) is mentioned accurately as an ecosystem feature,
//     not as something LoudReader does.
//   - The honest claim: if you own DRM-free ebooks (Tor, Baen, public
//     domain, self-published), conversion to EPUB via Calibre works and
//     LoudReader reads the result. For Kindle Store purchases with DRM,
//     the answer is no.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: LoudReader removing DRM, any Kindle integration.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can I convert Kindle books I bought on Amazon to audio?",
    a: "Almost always no. Kindle books from the Amazon store are encrypted with DRM that ties the file to your Kindle device or app. LoudReader does not and cannot remove that DRM. No third-party text-to-speech app can open a DRM-locked Kindle file. The Kindle app itself can sometimes read books aloud through iOS Screen Reader or Alexa integration, but that is a feature of the Kindle ecosystem, not a file conversion.",
  },
  {
    q: "What Kindle books can be converted?",
    a: "Books you bought DRM-free. Some publishers sell ebooks without DRM (Tor Books is the most prominent example), and those files convert cleanly when you download them in a standard format. Public domain books downloaded from Project Gutenberg or similar sources are DRM-free by definition and convert without issues. Self-published books you bought directly from an author are usually DRM-free too. If you are not sure, try opening the file in Calibre: if Calibre can display the text, it is DRM-free.",
  },
  {
    q: "How does the Kindle app's own text-to-speech work?",
    a: "On iOS, you can enable Speak Screen in Accessibility settings (Settings, Accessibility, Spoken Content, Speak Screen). When a Kindle book is open, swipe down with two fingers and iOS reads the screen aloud with the system voice. This is not a Kindle feature per se, it is an iOS accessibility feature that works in any app. It reads everything on screen, including page numbers and interface elements, so the experience is rougher than a dedicated reader. On Alexa devices, you can ask Alexa to read supported Kindle books aloud, but only books where the publisher has enabled that permission on the Amazon listing.",
  },
  {
    q: "What is the step-by-step path for my DRM-free ebooks?",
    a: "Download the DRM-free ebook in EPUB format if the store offers it. If you only have the Kindle format (MOBI, AZW3), use Calibre to convert it to EPUB. Open the EPUB in LoudReader on your iPhone or Mac. Press play. LoudReader reads the book aloud with natural neural voices, remembers your place, and works offline. The app is fully on-device and private, your library never leaves your device.",
  },
  {
    q: "Will the TTS narration be as good as a human audiobook narrator?",
    a: "No. A human narrator interprets the text, does distinct voices for characters, and brings performance skill to the recording. A text-to-speech voice reads the text clearly and naturally but does not perform it. For books where the writing itself carries the experience (non-fiction, essays, technical books), the TTS voice is more than adequate. For fiction where character voices and emotional delivery matter, a human-narrated audiobook is a better experience if one exists for that title.",
  },
];

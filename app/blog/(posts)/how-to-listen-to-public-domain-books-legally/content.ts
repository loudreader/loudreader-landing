// FACT PROVENANCE. Verified on 2026-08-24:
//   - Project Gutenberg's own stated practice, that it publishes ebooks
//     whose U.S. copyright has expired or that were explicitly released
//     into the public domain: https://www.gutenberg.org/policy/permission.html
//     and https://www.gutenberg.org/help/copyright.html (Gutenberg's own
//     copyright FAQ, which also states that copyright rules differ outside
//     the U.S. and that non-U.S. readers are responsible for checking their
//     own country's law).
//   - LoudReader claims: built-in Project Gutenberg catalog (70,000+ books),
//     fully on-device narration generated live with no exported audio file,
//     from components/money/site.ts and the sibling article
//     app/blog/(posts)/project-gutenberg-audiobooks.
// This article is deliberately NOT legal advice. It states what Project
// Gutenberg itself says about its clearance process, and is explicit that
// copyright law varies by country and that redistributing or selling a
// generated recording is a different question from listening to it
// privately. No statute is cited, no jurisdiction-specific claim is made,
// and the FAQ answers repeat that hedge rather than resolve it.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is it legal to listen to public domain audiobooks?",
    a: "Generally yes. A public domain book has no active copyright restricting who can read it, copy it, or turn it into another format, including audio. Project Gutenberg, the largest source of these texts, only publishes books it has determined are in the public domain in the United States. This is general information, not legal advice, and copyright rules differ by country.",
  },
  {
    q: "How does Project Gutenberg decide a book is public domain?",
    a: "Gutenberg checks U.S. copyright status before publishing a book, using expiration rules (works from before a certain date, or where the copyright term has run out) and cases where a rights holder explicitly released a work. It publishes the outcome of that check, not a blanket claim that every book is free everywhere in the world.",
  },
  {
    q: "Is a public domain book in the U.S. also public domain in my country?",
    a: "Not necessarily. Copyright terms and rules vary by country, and a work that's public domain in the United States can still be under copyright somewhere else, or vice versa. If you're outside the U.S. and it matters for your use, that's a question for your own country's law, not something this article can settle for you.",
  },
  {
    q: "Can I generate my own audio reading of a public domain book?",
    a: "If the text itself is public domain, generating a personal audio reading of it for your own listening doesn't run into the text's copyright, because there's no copyright on the text left to run into. LoudReader does exactly this: it reads the book aloud live, on your device, and doesn't save or export an audio file. Whether you can share, sell, or republish a recording you make is a separate question this article isn't answering.",
  },
  {
    q: "Does Project Gutenberg's public domain status cover fan recordings and TTS apps too?",
    a: "The public domain status applies to the underlying text. A specific recording, whether a volunteer narration or a synthetic reading, is a separate piece of work from the text it's based on, and different projects (Gutenberg's own text files, LibriVox's volunteer recordings, an app like LoudReader) each have their own terms for how their specific output can be used. Read the terms of whichever one you're using if you plan to do more than listen privately.",
  },
];

// FACT PROVENANCE. Every app-behavior and roster claim verified on 2026-08-24
// against:
//   - data/voices.ts (VOICE_LANGUAGES, ALL_VOICES): 23 narrators across 10
//     languages, each clip on /voices is the narrator reading in their own
//     language (per app/voices/page.tsx's own doc comment), audited
//     2026-08-20.
//   - components/money/site.ts (VOICES, DIFFERENTIATORS): synthesis runs
//     entirely on-device, no audio is generated in the cloud or uploaded.
//   - components/money/site.ts (CLONING): on-device voice cloning from about
//     ten seconds of speech.
// No engine or model names appear anywhere in this file, per
// components/money/site.ts.
// The honest limitation stated in this article, that on-device synthetic
// narration has not closed the gap with a performed human audiobook on
// dramatic range (distinct character voices, full emotional performance),
// is a general, non-quantified claim about the category. No benchmark,
// study, or specific percentage is cited for it anywhere in this file.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What does offline text-to-speech actually sound like?",
    a: "Closer to a calm, competent human reading aloud than to the flat robotic voices most people remember from older screen readers. It's not a performed audiobook: it doesn't do distinct character voices or the full emotional range a trained narrator brings to a scene. The only honest way to know is to hear it, which is why LoudReader puts every narrator on /voices instead of describing them.",
  },
  {
    q: "Does offline mean lower quality than a cloud-based voice?",
    a: "Not necessarily. LoudReader's narration runs entirely on your device rather than being generated in the cloud, and the quality bar for the samples on /voices is the same bar you'll hear in the app. Running on-device is a privacy and reliability choice (no upload, no connection needed), not a quality compromise.",
  },
  {
    q: "Can synthetic narration handle a full novel, or just short text?",
    a: "It can read a full novel start to finish, and that's most of what it's used for. What it doesn't do is vary its performance the way a human narrator does across hundreds of pages, distinct voices per character, building tension into a climax. It reads the whole book competently and consistently, which is a different thing from performing it.",
  },
  {
    q: "Is there a real gap between offline TTS and a professionally narrated audiobook?",
    a: "Yes, and it's worth saying plainly. A performed audiobook by a skilled human narrator still does things synthetic voices don't: distinct character voices, comic timing, the kind of emotional shading that comes from a person interpreting the text. On-device narration is best understood as a way to make any book listenable, not as a replacement for a great performance of the ones that already have one.",
  },
  {
    q: "Can I hear a sample before downloading the app?",
    a: "Yes. Every narrator on /voices plays right in your browser, no download or account required. It's the same voice quality you get inside the app.",
  },
  {
    q: "Does the sound quality differ by language?",
    a: "The samples on /voices are each narrator reading in their own language, so you're hearing the real thing rather than an English voice with an accent layered on. English has the widest roster at 11 voices; most other languages have exactly one narrator, so there's less to compare there, but the same quality bar applies.",
  },
];

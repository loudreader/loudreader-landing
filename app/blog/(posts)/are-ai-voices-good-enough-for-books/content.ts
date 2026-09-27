// FACT PROVENANCE — editorial refresh 2026-09-27; availability alignment 2026-09-28:
//   - Canonical shipping release_v1.12 audit: 23 studio narrators are device-dependent;
//     FREE_TIER uses current limited English selection after the eight-hour allowance.
//     Shipping source: VoiceRegistry.swift, DeviceCapability.swift, SubscriptionManager.swift
//     at release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0); source audit, not runtime testing.
//   - components/money/site.ts: current LoudReader roster (23 studio voices,
//     10 languages), local processing, free-tier wording, platforms, and
//     documented app-source provenance. No new app runtime audit claimed.
//   - data/voices.ts and app/voices/page.tsx: browser voice samples.
//   - https://loudkit.loudreader.io/ and https://loudkit.loudreader.io/agents/,
//     checked alongside loudkit/README.md and site/src/pages/agents.astro:
//     separate framework and agents developer preview, not reading-app
//     features. Only these general claims are made here.
// The listening checklist is editorial advice, not a listener study. Removed
// unsupported claims about blind tests, what "most readers" notice, model
// training-set sizes, and universal cloud/local or AI/human quality rankings.
// Do not add MOS scores, testimonials, or claims of indistinguishable speech
// without a real, relevant study. The prior future-dated provenance comment
// (2026-11-01) was erroneous; meta.json preserves the true publishedAt.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  {
    q: "Can an AI voice work for a whole book?",
    a: "It can, but whether you enjoy it depends on the voice, book, and your preferences. Try a full chapter with representative names, numbers, and dialogue. A short greeting is not enough to judge long-form listening.",
  },
  {
    q: "What should I listen for when comparing voices?",
    a: "Check pronunciation, pauses, pace, and consistency on the same passage. Then listen for longer and notice whether you can follow the meaning comfortably. Use your normal headphones and reading setting.",
  },
  {
    q: "Can AI narration replace a human-recorded audiobook?",
    a: "Text to speech is useful when you want to listen to text you already have. A recorded audiobook offers a specific narrator's performance, including choices about characters and timing. You can prefer different approaches for different books.",
  },
  {
    q: "Does cloud or on-device processing tell me which voice sounds better?",
    a: "No. Quality depends on the model, voice, language, and passage. Compare the outputs you would actually use. This article does not report a controlled listener study or claim that local and cloud voices are indistinguishable.",
  },
  {
    q: "How many voices can I try in LoudReader?",
    a: `LoudReader’s studio roster has 23 narrators across 10 languages, with availability depending on your device. Speech is generated locally. You can hear the roster at /voices. ${FREE_TIER.full} Premium keeps the full selection supported by your device available after the trial.`,
  },
];

// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). Pricing and features from
// components/money/site.ts (single source of truth).
// Claims about competing apps and TTS voice quality are general descriptions
// based on publicly available information as of late 2026.
// No invented stats, voice quality studies, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can any TTS voice sound like a real person?",
    a: "The best modern neural voices can sound extremely close to a human reading aloud, especially for non-fiction and informational content. They handle pacing, sentence flow, and basic expression well. But they do not perform. A narrated novel with character voices and emotional range is still beyond what TTS does. It reads; it does not act.",
  },
  {
    q: "Does 'natural' mean the same thing across apps?",
    a: "No. Every app picks its own voices and voice engine. Some use cloud processing for richer expressiveness. Others use on-device engines that are slightly less expressive but work offline and cost nothing per word. 'Natural' is a marketing word, not a technical standard. The only reliable way to judge is to listen.",
  },
  {
    q: "Do free apps have natural-sounding voices?",
    a: "It depends. Apple's built-in Spoken Content voices have improved dramatically and sound natural for short-form listening. LoudReader's free tier includes one natural offline voice good enough for full books. Cloud-based apps like Speechify and NaturalReader offer higher-quality natural voices in their paid tiers.",
  },
  {
    q: "Why do cloud-based voices sometimes sound better?",
    a: "Cloud servers have more processing power and can run larger, more complex voice models. They can add subtle expressiveness that on-device engines skip to stay efficient. The trade-off is that cloud voices need internet, your text leaves your device, and the developer pays per word, which is why those apps tend to have word quotas.",
  },
  {
    q: "Do I need premium voices for book-length listening?",
    a: "Not necessarily. LoudReader's free voice is a neural voice optimized for reading. Many users listen to full novels with it comfortably. Premium add more voices and let you pick the one that fits your taste best, but the free voice is not a robotic placeholder. It is a real, natural-sounding voice.",
  },
];
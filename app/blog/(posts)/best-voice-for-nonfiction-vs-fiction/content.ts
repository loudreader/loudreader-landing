// FACT PROVENANCE — editorial revision 2026-09-28; publication stays2026-09-29.
// - LoudReader release_v1.12 source audit: VoiceRegistry/ChatterboxVoice roster,
//   ReaderView voice selection, ReadingLanguagesSheet, SubscriptionManager and
//   PaywallReason: current free selection, hardware limits, actual paid controls.
// - data/voices.ts and /voices: official narrator samples for shortlisting.
// The comparison checklist is suggested editorial practice, not a reported
// listening test or research conclusion. Removed the earlier claim that advice
// came from using the app; no such test record was available in this review.
// No scientific genre-to-voice rule, guaranteed comprehension/fatigue benefit,
// per-book setting retention, no-telemetry assertion or Premium-only notes claim.
import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";
export const FAQS: Faq[] = [
  { q: "Is there one best TTS voice for nonfiction?", a: "No. Try voices on the numbers, names and sentence structures your book contains. Choose a voice and rate that you can follow comfortably rather than relying on a genre label." },
  { q: "Do I need a different voice for fiction?", a: "No. Compare a dialogue passage if you are considering a change, but using one favourite voice for different genres is reasonable. Synthetic narration does not automatically provide distinct voices for every character." },
  { q: "How do I compare voices rather than their descriptions?", a: "Play the same passage in a few candidates at comparable volume and rate. Note pronunciation, pauses and comfort, then try your preferred voice for a longer section. Treat the result as your own preference, not a universal ranking." },
  { q: "Are all LoudReader studio voices available on every device?", a: "No. The roster contains 23 studio narrators across 10 languages, but device capability and entitlement affect which are available. Language settings and books in your library affect the languages shown." },
  { q: "Can I try the voices before subscribing?", a: FREE_TIER.full },
];

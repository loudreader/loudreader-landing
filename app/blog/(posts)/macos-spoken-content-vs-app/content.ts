// FACT PROVENANCE — checked 2026-09-28.
// Apple primary documentation:
// - https://support.apple.com/en-gb/guide/mac-help/mh27448/26/mac/26:
//   Read & Speak, default Option-Esc, highlighting and controller/rate/navigation.
// - https://support.apple.com/en-gb/guide/mac-help/mh27448/15.0/mac/15.0:
//   older Spoken Content name; highlighting/controller also existed there.
// - https://support.apple.com/en-gb/guide/mac-help/spch638/26/mac/26:
//   system voice/settings and distinction from VoiceOver.
// LoudReader: shipping release_v1.12 source audit, 2026-09-28:
// EPUB/PDF+article imports, local OCR, iPad compatibility mode on Mac,
// current free voice selection, actual Premium gates (notes not gated),
// no automatic device sync, diagnostics and usage analytics alongside local TTS.
// Removed incorrect no-highlighting and forced-global-speed claims about macOS,
// unverified per-book speed retention, universal app support, playback-stop
// assertion, native-Mac implication and unsupported quality/learning benefits.
// Evaluation steps are suggestions; this editorial review did not runtime-test them.
import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  { q: "Is Mac Speak Selection free?", a: "Yes, it is built into macOS. Enable it in Accessibility settings under Read & Speak, or Spoken Content on older versions. The default shortcut is Option–Esc; your configured shortcut may differ." },
  { q: "Does built-in Mac speech highlight words?", a: "Yes. Speak Selection can highlight words, sentences or both. Its controller also offers playback and rate controls. These are not features that require buying a separate reader." },
  { q: "Can I use Speak Selection for a long document?", a: "Yes, if the document's app exposes suitable text. Whether a reading app is more convenient depends on how you navigate, organise and resume the document across sessions, not an arbitrary length limit." },
  { q: "Is LoudReader a native Mac app?", a: "No. Compatible Apple Silicon Macs run the iPad app in Apple's compatibility mode. Try the interface and available voices on your device before choosing it for a Mac-specific workflow." },
  { q: "Are LoudReader's notes and highlighting Premium-only?", a: "No. Notes and highlighting are available without Premium. Paid controls include adjustable playback speed and the sleep timer, alongside expanded voice access and other features." },
];

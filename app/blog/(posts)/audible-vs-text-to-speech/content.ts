// FACT PROVENANCE — editorial review 2026-09-28.
// Official sources checked:
// - https://help.audible.com/s/article/cancel-membership?language=en_US:
//   purchased/credit titles retained; included catalogue access differs.
// - https://help.audible.com/s/article/before-you-cancel-your-audible-membership?language=en_US:
//   monthly selections and credits are different entitlements; plans vary.
// - https://help.libbyapp.com/en-us/6289.htm: library borrowing, holds, mobile downloads.
// LoudReader facts: components/money/site.ts and root's 2026-09-28 app-source audit.
// No price arithmetic, catalogue-size claim, narration-quality ranking, all-books
// promise, blanket ownership/legal conclusion, or no-telemetry assertion retained.
import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";
export const FAQS: Faq[] = [
  { q: "Can TTS replace a recorded audiobook?", a: "It can provide a way to hear readable text, but it is a different experience from a recorded performance. Compare the particular narrator and TTS voice on material you want to finish; there is no universal winner for every listener or genre." },
  { q: "Do I lose purchased Audible books if I cancel?", a: "Audible says titles purchased with money or credits remain accessible after cancellation. Included subscription titles and monthly selections can have different access rules, so check the help page for your regional plan." },
  { q: "Can I import Audible downloads into LoudReader?", a: "No. LoudReader is a text reader, not an Audible audio player. Use a supported DRM-free text file that you are entitled to read; purchasing an audiobook does not supply such a file." },
  { q: "Does text to speech make every book available?", a: "No. You need a supported, accessible text file. DRM, unavailable digital editions and difficult document layouts can prevent a useful result. TTS creates speech from text; it does not grant access to a book." },
  { q: "Can I try LoudReader without a subscription?", a: FREE_TIER.full },
];

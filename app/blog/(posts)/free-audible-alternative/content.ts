// FACT PROVENANCE — refreshed 2026-09-28; official sources checked:
// - https://help.libbyapp.com/en-us/6289.htm: card, loans, holds, mobile downloads.
// - https://theloop.hoopladigital.com/support/articles/getting-started/borrow-flex-titles-for-popular-books/:
//   Instant allowance vs Flex holds; catalogue varies by library.
// - https://librivox.org/pages/public-domain/: US basis; overseas status differs.
// - https://wiki.librivox.org/index.php/Recording_%26_Text_Policies: solo/collaborative editions.
// - https://www.gutenberg.org/help/copyright.html: edition/territory restrictions.
// App claims use shared current FREE_TIER and the 2026-09-28 app-source audit.
// Removed unsupported 20,000 recording count, full-catalogue availability,
// blanket DRM assertions about every Kindle book/third-party reader, and
// no-telemetry privacy claims. No invented production-cost ratio or voice test.
import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";
export const FAQS: Faq[] = [
  { q: "Is there a free way to listen without Audible?", a: "Check library audiobook services available to your membership, volunteer recordings on LibriVox, and free TTS tiers for supported text files you already have. They provide different catalogues and access rules; none gives you every Audible title." },
  { q: "Do all library audiobooks have waiting lists?", a: "No. Availability depends on the service, title and library. Libby can use holds when copies are unavailable. Hoopla Instant titles have no title waitlist but use an allowance, while Hoopla Flex titles can have holds." },
  { q: "Can I import my Audible library into LoudReader?", a: "No. Audible recordings are not readable ebook files. LoudReader reads supported DRM-free text files and does not remove store protection or import an Audible account." },
  { q: "Are all LibriVox books free to use everywhere?", a: "LibriVox bases its public-domain policy on the United States. Outside the US, check the particular work and translation under your local rules before downloading." },
  { q: "Does LoudReader remain free after the voice trial?", a: FREE_TIER.full },
];

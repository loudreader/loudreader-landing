// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - macOS Spoken Content is a built-in accessibility feature in
//     macOS 15+. Its capabilities and limitations are described
//     accurately based on the feature as it ships. Option+Esc triggers
//     speak-selection; the voice, speed, and other settings are in
//     System Settings, Accessibility, Spoken Content.
//   - LoudReader's feature set is verified against the app:
//     eight neural voices, speed 0.3x to 3.0x, sleep timer, word
//     highlighting, place bookmarking, ambient soundscapes, notes and
//     highlights. All run on-device via the Neural Engine.
//   - The comparison is honest: Spoken Content wins on zero setup and
//     zero cost for short passages. LoudReader wins on voice quality,
//     bookmarking, and long-form reading. Neither is presented as
//     universally better.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: Spoken Content being unusable (it works fine
// for its intended use case); LoudReader having features it does not.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is macOS Spoken Content free?",
    a: "Yes. Spoken Content is built into macOS and costs nothing. Go to System Settings, Accessibility, Spoken Content, and enable 'Speak selection'. Select text anywhere on your Mac and press Option+Esc to hear it. The voice and speed are configurable in the same settings panel. It is a system-wide feature with no paywall and no account.",
  },
  {
    q: "Can macOS Spoken Content read an entire book aloud?",
    a: "Technically yes, but it is a rough experience. You select all the text in a document, press Option+Esc, and it reads until it finishes or you stop it. There is no bookmarking: if you close the document or restart your Mac, you find your place manually. The voice is the same system voice used for everything, and the speed is one global slider. For books, this becomes frustrating within the first chapter.",
  },
  {
    q: "Does LoudReader use the same voices as macOS Spoken Content?",
    a: "No. LoudReader includes its own neural voices optimized for long-form reading. These run on the Mac's Neural Engine and are not the same voices as the system accessibility voices. macOS Spoken Content can use Apple's downloaded neural voices (Samantha, Daniel, etc.), but you get one voice globally. LoudReader gives you 23 studio narrators and lets you switch per book.",
  },
  {
    q: "When should I use Spoken Content instead of LoudReader?",
    a: "Use Spoken Content when you need a paragraph read right now and do not want to open another app. Select the text, Option+Esc, done. It is the right tool for quick proofreading checks, confirming a sentence, or hearing a short passage from a web page. Use LoudReader when the content is long, when you care about voice quality, when you want to pause and resume later, or when you are stepping away from the screen entirely.",
  },
  {
    q: "Can LoudReader do everything Spoken Content does?",
    a: "No, and that is an honest distinction. Spoken Content is system-wide: it works in any app, on any selected text, without opening a separate program. LoudReader only reads EPUBs and PDFs that you import into it. If you want to hear a sentence in a Slack message or a paragraph in a spreadsheet, Spoken Content is the tool. LoudReader is for books, documents, and files you are willing to import.",
  },
];

// FACT PROVENANCE — checked 2026-09-28.
// - https://wiki.librivox.org/index.php/Recording_%26_Text_Policies:
//   solo/collaborative projects and multiple recordings of a work.
// - https://librivox.org/pages/public-domain/: US basis; local status elsewhere.
// - https://www.gutenberg.org/help/copyright.html: territory/edition cautions.
// - https://marhamilresearch4.blob.core.windows.net/gutenberg-public/Website/index.html:
//   official Gutenberg/Microsoft/MIT synthetic audiobook collection.
// - https://www.microsoft.com/en/customers/story/1646266241611394912-project-gutenberg-nonprofit-azure-synapse-analytics-azure-ai-services:
//   generated recordings distributed as MP3s.
// App claims: current shared constants and shipping release_v1.12 source audit
// dated 2026-09-28. No all-catalogue claim, stale English-only assertion,
// numerical catalogue comparison, automatic sync or blanket privacy guarantee.
// No third-party recordings were auditioned in this editorial review.
import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";
export const COMPARISON_COLUMNS = ["LibriVox", "LoudReader", "Gutenberg Open Audiobooks"];
export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Starting material", cells: ["Choose an existing volunteer recording", "Import a supported ebook or download an available catalogue title", "Choose an existing synthetic recording"] },
  { label: "Voice choice", cells: ["Choose between available editions/readers", "Select an available in-app voice", "Voice belongs to the recording"] },
  { label: "Listening workflow", cells: ["Download audio for a compatible player", "Read and listen to text inside the app", "Use the collection's audio downloads or distribution links"] },
  { label: "Check first", cells: ["Solo/collaborative credits, edition and local rights", "Text quality, device/voice access and local rights", "Title availability, audio sample and local rights"] },
];
export const FAQS: Faq[] = [
  { q: "Does every LibriVox book change narrators?", a: "No. Solo projects use one reader, while collaborative projects can use different readers by chapter. Check the credits and samples; there may be several recordings of the same work." },
  { q: "Is an AI voice necessarily better than a volunteer recording?", a: "No. Compare the actual readings. A familiar voice, clear pronunciation, expressive interpretation or convenient text highlighting may matter differently to different listeners." },
  { q: "Does LoudReader include the same catalogue as LibriVox?", a: "No. LoudReader reads text files and offers Project Gutenberg discovery, while LibriVox provides existing recordings. The collections overlap but are not identical; check the particular title, language and edition." },
  { q: "Is a text reader the same as downloading an audiobook?", a: "No. A text reader generates speech from readable text in the app. If you need a finished audio file for another player, choose a source and format that explicitly supports that workflow." },
  { q: "Can I keep listening to LoudReader for free?", a: FREE_TIER.full },
];

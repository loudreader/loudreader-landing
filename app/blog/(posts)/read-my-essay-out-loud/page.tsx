import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>Start with the read-aloud tool already available in your writing environment. Microsoft Word has Read Aloud, and macOS can speak selected text. If you prefer a separate listening copy, export the essay as a PDF and import it into a compatible reader such as LoudReader. Listen once for the argument, then review sentences that need work. Audio does not check facts, grammar rules or citations for you, and an exported PDF will not reflect later edits unless you replace it.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="Use listening to review the argument; use the page to verify details." />
      <QuestionSection question="What can you use without a new app?"><p>In a supported Word version, <a href="https://support.microsoft.com/en-us/word/listen-to-your-word-documents" className="text-loudBlue hover:underline">Microsoft’s Read Aloud instructions</a> explain how to start document playback. On current macOS, <a href="https://support.apple.com/en-gb/guide/mac-help/mh27448/mac" className="text-loudBlue hover:underline">Apple’s Read & Speak guide</a> covers speaking a selection; older versions may label the settings Spoken Content.</p><p>These can be enough for an editing pass. Choose a separate reader if its file handling, saved position or voice options fit your workflow better, not because every built-in tool is limited to a paragraph. Disclosure: this guide is published by LoudReader’s developer.</p></QuestionSection>
      <QuestionSection question="What should the first listening pass ask?"><p>Listen for the argument rather than stopping at every awkward word. After the introduction, can you state the claim? Does each paragraph explain why it follows from the previous one? Mark places where a new example or term arrives without context.</p><p>Keep a small list of structural changes. Finish the section before rewriting it, unless the problem makes the rest impossible to assess. This is a suggested editorial method, not a claim that listening automatically improves a grade.</p></QuestionSection>
      <QuestionSection question="How do you make a separate copy in LoudReader?"><ol className="list-decimal pl-6 space-y-2"><li>Save the latest essay in your editor, then use its export or download command to create a PDF.</li><li>Name the file with a version or date and import it into LoudReader.</li><li>Check the first paragraph and a page with footnotes against the source.</li><li>Listen and record changes in the editable original.</li><li>Export again before checking revised passages; the imported file is a snapshot.</li></ol><p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> accepts supported DRM-free EPUBs and PDFs rather than native DOCX files. LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. There is no automatic library or reading-position sync between your devices.</p></QuestionSection>
      <QuestionSection question="What should the sentence-level pass cover?"><ul className="list-disc pl-6 space-y-2"><li>Repeated words or ideas that add no useful emphasis.</li><li>A sentence whose subject or point becomes hard to follow.</li><li>Transitions that do not explain the connection between claims.</li><li>Terms introduced without definitions or examples.</li><li>A quotation that is not connected to the paragraph’s argument.</li></ul><p>Check the actual text before deciding that a strange sound is a writing error. It may be an abbreviation, extraction issue or mispronunciation. Conversely, “their” and “there” can sound the same, so audio is not a substitute for checking spelling and meaning.</p></QuestionSection>
      <QuestionSection question="What about private or sensitive essays?"><p>LoudReader generates speech locally without uploading the essay to a speech service. It also includes Sentry diagnostics and TelemetryDeck analytics; usage analytics is on by default in release 1.12 with no in-app off switch. Check how you exported, transferred and backed up the file as well.</p><p>For applications or coursework, follow the relevant rules about tools and confidentiality. Listening to your own words is distinct from asking a system to generate or rewrite the essay.</p></QuestionSection>
      <QuestionSection question="What should you check before submitting?"><p>Read the final exported version visually. Check the word count requirement, names, citations, quotation accuracy, headings and formatting. Confirm that it contains your latest revisions and is the file you intend to submit.</p><p>The longer <Link href="/blog/proofread-by-listening" className="text-loudBlue hover:underline">proofreading workflow</Link> covers managing listening copies across revisions.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a separate listening copy" subline="Export the essay, review it by ear, and keep edits in your original document." />
    </ArticleLayout>
  );
}

import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>It is easy to read the sentence you intended when you know a draft well. A listening pass gives you another way to inspect the wording, especially missing words, repetitions and awkward joins after an edit. It will not catch everything: “their” and “there” sound alike, punctuation may be silent, and a speech engine may mispronounce or normalise text. Combine listening with a visual check and your editor’s spelling tools. Work through a short section at a time and fix errors in the source document, then play the revised sentence again.</p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="Listen for wording; look for spelling, punctuation and layout." />

      <QuestionSection question="Why do familiar drafts need a different checking pass?">
        <p>When the argument is familiar, it is tempting to skim straight to the next point. Slow the task down and give it a narrow purpose: this pass checks wording, not whether the whole essay is persuasive. The <a href="https://writingcenter.unc.edu/tips-and-tools/editing-and-proofreading/" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">UNC Writing Center’s proofreading guide</a> recommends reading every word carefully, including reading aloud, and checking different kinds of errors separately.</p><p>You do not need an explanation about a particular brain circuit to use the technique. The practical test is whether a second presentation helps you notice something you skipped on the first pass.</p>
      </QuestionSection>

      <QuestionSection question="Which errors are worth listening for?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Missing small words:</strong> “Send draft to editor” may be intentional in a note but incomplete in the sentence you meant to write.</li>
          <li><strong>Repeated words or phrases:</strong> a duplicated “the”, or the same transition used twice after moving a paragraph.</li>
          <li><strong>Broken joins:</strong> a sentence whose beginning and ending no longer fit after revision.</li>
          <li><strong>Unclear references:</strong> “this”, “it” or “they” without an obvious thing or person to refer to.</li>
        </ul><p>Treat an odd sound as a flag to inspect the text, not proof that the writing is wrong. A voice can stumble over an acronym that is perfectly correct.</p>
      </QuestionSection>

      <QuestionSection question="What will an audio pass miss?">
        <p>Homophones, capital letters, many punctuation choices, citation formatting and page layout need your eyes. Numbers deserve a separate check: a voice reading “fifteen” fluently does not establish that the intended value was 15 rather than 50. Verify names and quotations against their sources.</p><p>Spelling and grammar tools are useful alongside listening, but review their suggestions rather than accepting all changes. None of these checks establishes the factual accuracy of the document.</p>
      </QuestionSection>

      <QuestionSection question="How do I run a short, repeatable pass?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Finish the structural edit first. Choose one page or section for the wording check.</li>
          <li>Read it aloud yourself or use a text-to-speech tool. Keep the original text available.</li>
          <li>Pause at a suspicious phrase and mark the exact issue, such as “missing verb” or “wrong name”.</li>
          <li>Make the change in the master document, not only in a disposable listening copy.</li>
          <li>Replay the revised sentence with the sentence before and after it. Then do a final visual pass for the things speech cannot show.</li>
        </ol><p>For a longer workflow, see <Link href="/blog/proofread-by-listening" className="text-loudBlue hover:underline">proofreading by listening</Link>. A novel needs additional scene and pacing decisions; those belong in <Link href="/blog/hear-your-novel-read-aloud" className="text-loudBlue hover:underline">the manuscript listening pass</Link>.</p>
      </QuestionSection>

      <QuestionSection question="How can I use LoudReader for the listening copy?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> can read an exported DRM-free EPUB or PDF with the text visible. Its word-following highlight helps locate the passage being spoken. Check that the export preserved paragraph order; a faulty PDF extraction can create an error that is not in your draft.</p><p>Narration is generated on the device without uploading the manuscript to a speech server. The app also uses crash/performance diagnostics and usage analytics, which are enabled by default; version 1.12 has no visible switch for usage analytics. For confidential work, follow the rules that apply to your document rather than treating offline playback as a security audit.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}

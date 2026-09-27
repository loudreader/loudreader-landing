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
        <p>A manuscript listening pass is useful when you give it one job at a time. First listen for the shape of a scene: who wants what, where the conversation changes direction and whether the ending earns its place. On a later pass, inspect repeated wording and sentence joins with the text visible. Keep a chapter-and-phrase issue log and make changes in your master manuscript. A synthetic narrator can reveal a passage you want to revisit, but it is not an editor: awkward delivery may come from the voice or the export rather than your writing.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Mark the passage and the question. Make the edit in your master draft." />

      <QuestionSection question="What is different about listening to a whole novel?">
        <p>A typo check looks closely at individual words. A novel pass also asks what the reader is being asked to remember over time. Use the recording’s forward movement to notice places where you want context, where a name has not appeared for several chapters or where a scene seems to end twice.</p><p>These are prompts for your judgement, not defects the software detects. A deliberate repetition, unusual rhythm or withholding of information may be exactly what the novel needs.</p>
      </QuestionSection>

      <QuestionSection question="How do I prepare a reliable listening copy?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Export a dated EPUB or PDF from your writing tool. Keep the editable manuscript as the source of truth.</li>
          <li>Test the beginning, middle and end. Check scene breaks, italics, dialogue punctuation and any footnotes in the listening copy.</li>
          <li>Listen to a short passage while looking at the master draft. If words or order differ, fix the export before reviewing the prose.</li>
          <li>Name the copy with a revision date so you do not accidentally listen to yesterday’s draft after changing a scene.</li>
        </ol><p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> imports DRM-free EPUBs and PDFs; it does not edit a Scrivener project or Word document in place. For PDF problems, use <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">the PDF listening guide</Link>.</p>
      </QuestionSection>

      <QuestionSection question="What should the first pass record?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Orientation:</strong> the chapter and a distinctive phrase you can search later.</li>
          <li><strong>The question:</strong> “Who is speaking here?” or “Why has the goal changed?” is more useful than “bad scene”.</li>
          <li><strong>The scale:</strong> mark a sentence issue separately from a structural issue.</li>
          <li><strong>A possible explanation:</strong> note whether it might be a narration or extraction problem before rewriting.</li>
        </ul><p>Let the scene finish if you can follow it. Constantly rewriting the first paragraph makes it hard to hear the whole exchange. If you prefer to fix immediately, work in small scenes and replay each one after revision.</p>
      </QuestionSection>

      <QuestionSection question="How should I judge dialogue and pacing?">
        <p>Listen for ambiguous speakers, repeated greetings, exposition nobody in the scene would need, and turns in the conversation that arrive without a response. Then read the passage yourself with its intended expression. The contrast helps separate wording from a flat or unusual synthetic delivery.</p><p>A narrator’s pause is not a universal rule for your punctuation. Nor does a scene feeling slow during a tired walk establish that it is too long. Recheck important decisions in a focused read or with a human reader before cutting.</p>
      </QuestionSection>

      <QuestionSection question="What should I check before importing an unpublished draft?">
        <p>Choose a tool whose processing and data policy suit the manuscript’s requirements. LoudReader generates narration locally rather than uploading the book to a speech server. It also sends crash/performance diagnostics and usage analytics; usage analytics is enabled by default, and version 1.12 has no visible switch to disable it. Offline playback alone does not prove that an application never makes network requests.</p><p>For work under a contract or confidentiality agreement, follow its actual requirements. See <Link href="/private-text-to-speech-no-cloud" className="text-loudBlue hover:underline">the local-speech privacy explanation</Link> for the distinction between narration and other app services.</p>
      </QuestionSection>

      <QuestionSection question="When is the listening pass finished?">
        <p>After you have reviewed the issue log, make the chosen changes in the master document and replay the changed passages in context. Keep unresolved structural questions for your next edit or beta reader. A completed audio pass does not certify the manuscript as error-free.</p><p>For the final wording check, use <Link href="/blog/catch-typos-in-your-own-writing" className="text-loudBlue hover:underline">the typo-checking pass</Link>. You can change voices if that helps you attend to the text, but there is no requirement to listen to the entire novel multiple times.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}

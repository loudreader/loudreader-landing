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
        <p>Text-to-speech can support a research reading workflow when each listening session has a defined output. Use it to become familiar with a paper’s question, revisit prose you have already read or collect issues for a focused review. Keep the PDF version and citation details, flag what needs visual inspection, then return to the source before relying on a claim. A narrated paper is not automatically a reviewed paper. LoudReader is a general reader with local speech and PDF OCR, not a reference manager, evidence checker or replacement for close reading.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="A useful listening pass ends with a question you can check." />

      <QuestionSection question="How should I organise a listening queue?">
        <p>Start with the question your reading is meant to answer. Put a small number of relevant papers in the active queue and give each an intended pass: orientation, reread or close review. A large folder of unlabelled PDFs makes it easy to confuse collecting papers with examining them.</p><ul className="list-disc pl-6 space-y-2">
          <li><strong>Orientation:</strong> What problem is the paper addressing, and is it relevant to my question?</li>
          <li><strong>Reread:</strong> What argument or detail do I want to refresh?</li>
          <li><strong>Close review:</strong> Which method, comparison, figure or limitation needs direct inspection?</li>
        </ul><p>Audio may suit the first two. The third generally needs the document and other evidence available, even if you also use narration.</p>
      </QuestionSection>

      <QuestionSection question="What belongs in a note from a listening pass?">
        <p>Record the paper identifier or citation, version/date, section or page, a short claim in your own words and the next check it requires. For example: “Results p. 6: improvement claimed over baseline; inspect Table 2 and the evaluation setup.” That is more actionable than marking the entire paper as read.</p><p>Separate what the authors say from your interpretation. If you may quote a line, return to the original wording later. A spoken phrase can be misheard, and PDF extraction can omit the qualification attached to it.</p>
      </QuestionSection>

      <QuestionSection question="How do I prepare a PDF without losing track of the source?">
        <p>Keep the original in your reference workflow and import a listening copy into <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>. Check a sample, column transitions, figures and the document ending. The app can attempt local OCR on scans, with a 300-page OCR limit per import, but recognition and reading order still need review.</p><p>The detailed <Link href="/blog/listen-to-research-papers" className="text-loudBlue hover:underline">paper import checklist</Link> covers those checks. A successful import is not evidence that equations, tables and citations were represented faithfully.</p>
      </QuestionSection>

      <QuestionSection question="What should stay in my reference manager?">
        <p>Keep bibliographic records, source links, version history and final research notes in the system you use for the project. LoudReader does not provide automatic integration with Zotero, Mendeley or EndNote. It also does not automatically sync its library or reading position between devices.</p><p>Notes and highlights in LoudReader are free. Treat them as reading aids; transfer or restate the important findings in your research notes and verify them against the source. Do not assume an in-app highlight appears in the original PDF or another application.</p>
      </QuestionSection>

      <QuestionSection question="How should I choose playback speed?">
        <p>Choose it by the task and whether you can explain the passage afterwards. Faster playback is not evidence that you have extracted the contribution correctly. If unfamiliar terminology, a long argument or a numerical result requires replays, pause and inspect the text instead of pushing through.</p><p>LoudReader’s speed control is Premium. No papers-per-commute or percentage reduction in a reading backlog is promised here. The useful output is a better next question or a verified note, not the number of audio minutes completed.</p>
      </QuestionSection>

      <QuestionSection question="What should I check for confidential material and devices?">
        <p>For a review copy or unpublished draft, follow the applicable journal and institutional rules. LoudReader generates speech and OCR locally, but includes crash/performance diagnostics and usage analytics. Usage analytics is enabled by default, and version 1.12 has no visible switch to disable it. This does not constitute an independent confidentiality or compliance certification.</p><p>The app runs on iPhone and iPad and can run on compatible Apple Silicon Macs as an iPad app. Keep a source version and passage reference when moving between devices; do not expect automatic handoff. See <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">what local speech means</Link> for the architecture boundary.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}

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
      <Tldr><p>Use text to speech as a second view of a draft. Export a dated copy, check that the text was extracted in the right order, then listen with the original document open. Pause to mark a repetition, missing word or awkward transition, and make the change in your writing tool. The imported copy does not update when you edit the original, so export it again before checking revisions. Finish with a visual pass for spelling, punctuation, layout and citations that audio cannot reliably reveal.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="Keep the editable draft and the dated listening copy distinct." />
      <QuestionSection question="What should you listen for?"><p>Give the session one job. A sentence-level pass can focus on repeated words, awkward joins and unnecessarily long clauses. A later flow pass can ask whether paragraphs follow each other clearly. Trying to solve structure, grammar and typography at once makes it hard to record useful changes.</p><p>Listening can make a familiar passage feel different, but it does not guarantee that a mistake becomes audible. Homophones, punctuation and a missing negative may be misheard or overlooked; speech systems can also normalise numbers and abbreviations. The written source remains the reference.</p></QuestionSection>
      <QuestionSection question="How do you prepare a reliable listening copy?"><ol className="list-decimal pl-6 space-y-2"><li>Save the working draft, then export a PDF or EPUB if your writing tool supports it.</li><li>Include a date or version in the filename so it cannot be confused with an earlier export.</li><li>Import the copy into your reader and compare a paragraph against the original.</li><li>Check a page with headings, footnotes or columns for reading-order problems.</li><li>Keep your editable source open separately; changes belong there.</li></ol><p>In <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, supported file imports are DRM-free EPUB and PDF. OCR is available for scans, but for your own draft a clean text export avoids introducing recognition errors.</p></QuestionSection>
      <QuestionSection question="What does the pause-and-fix loop look like?"><p>Listen to a paragraph, pause when something needs attention, and record the exact phrase plus the proposed change. If you make the edit immediately, remember that the old imported copy still contains the old sentence. Resume for the rest of that pass, then re-export for a revision check.</p><p>Notes and highlights in LoudReader are free. They can help mark a passage, but they are not tracked changes in Word, Google Docs or another source editor. Keep one authoritative draft.</p></QuestionSection>
      <QuestionSection question="What pace and voice should you choose?"><p>Start at a comfortable normal pace. Slow down or repeat a passage if details are difficult to hear; there is no established best multiplier for everyone. LoudReader’s speed control is Premium. A slower setting is optional, not a requirement for a useful proofreading session.</p><p>Use a voice you can follow without concentrating on its delivery. Check names or specialist terminology visually when the voice sounds uncertain. Take a break when you stop noticing what is being said.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <QuestionSection question="How should you handle an unpublished draft?"><p>Speech is generated on device. That does not mean the whole app is network-free: LoudReader uses Sentry crash diagnostics and TelemetryDeck analytics. File transfers, device backups and any services you use before importing are separate parts of the workflow. Version 1.12 has analytics enabled by default without an in-app off switch. Check the <Link href="/privacy" className="text-loudBlue hover:underline">privacy information</Link> and any employer or publisher rules before importing sensitive material.</p><p>LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. Offline playback is useful, but switching off Wi-Fi is not a complete privacy audit.</p></QuestionSection>
      <QuestionSection question="What should the final pass cover?"><p>Return to the page for punctuation, homophones, references, formatting and any change whose meaning matters. Read the revised sentence in context. A voice that sounds fluent is not certifying the accuracy of the writing.</p><p>For a broader manuscript revision plan, see <Link href="/blog/text-to-speech-for-writers" className="text-loudBlue hover:underline">using TTS across a writing project</Link>. For a short submission, <Link href="/blog/read-my-essay-out-loud" className="text-loudBlue hover:underline">the essay listening workflow</Link> focuses on argument and final checks.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Give a draft a listening pass" subline="Export, listen, edit the source, then re-export to check the changes." />
    </ArticleLayout>
  );
}

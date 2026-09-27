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
      <Tldr>
        <p>Text-to-speech lets you hear a document without continuously looking at it. That can be useful when you want to reduce screen viewing, but an audio app does not diagnose or treat the cause of eye discomfort. Plan breaks as well as listening: the <a href="https://www.nei.nih.gov/eye-health-information/healthy-vision/how-eyes-work/keep-your-eyes-healthy" className="text-loudBlue hover:underline">National Eye Institute advises looking about 20 feet away for 20 seconds every 20 minutes</a> of computer use. Listening to a report while continuing to scroll another screen defeats the practical aim. Choose an audio task that lets you look away, and stop working entirely when that is the break you need.</p>
      </Tldr>
      <ArticleIllustration variant="devices" caption="A useful audio break lets you stop looking at the document." />
      <QuestionSection question="What does switching to audio actually change?">
        <p>It removes the need to inspect the document for the duration of that passage. It does not establish why your eyes feel uncomfortable, whether your glasses prescription is suitable or whether a medical condition is involved.</p>
        <p>The <a href="https://aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain" className="text-loudBlue hover:underline">American Academy of Ophthalmology describes discomfort associated with prolonged device use</a> and discusses changes such as breaks and screen adjustments. A text-to-speech app is one way to change an activity; it is not evidence that symptoms will resolve after a set number of listening minutes.</p>
        <p>If discomfort persists or keeps returning, <a href="https://www.nhs.uk/symptoms/dry-eyes/" className="text-loudBlue hover:underline">seek advice from an eye-care professional</a>. Audio should not become a reason to ignore pain or a change in your vision.</p>
      </QuestionSection>
      <QuestionSection question="Which work tasks can move away from the screen?">
        <p>Continuous prose is a useful candidate: a draft report, background article or explanatory section. Review a sample first so you know whether it makes sense without its layout.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Suitable for a trial:</strong> an article or report section whose argument is explained in ordinary sentences.</li>
          <li><strong>Keep the page available:</strong> charts, tables, equations and references to a figure you need to inspect.</li>
          <li><strong>Keep a visual verification pass:</strong> financial figures, contractual wording or other material where an extraction or pronunciation error could matter.</li>
        </ul>
        <p>If a document continually sends you back to the screen, choose another task for the listening break. A different format does not automatically make every document suitable for audio.</p>
      </QuestionSection>
      <QuestionSection question="How do you try one listening break?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose a short document or section you are allowed to use in the reader.</li>
          <li>Import a supported file and check the extracted text and reading order.</li>
          <li>Start playback and establish where pause and resume are before looking away.</li>
          <li>Put the display out of use for the listening period. Do not replace reading with phone scrolling.</li>
          <li>Pause when you need a note or a figure, or when you would prefer a complete break from work.</li>
        </ol>
        <p>This is a practical trial, not a ten-minute relief protocol. Notice whether the workflow is comfortable and useful without turning symptoms into a measure of how much more work you can finish.</p>
      </QuestionSection>
      <QuestionSection question="Where does LoudReader fit?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> reads supported DRM-free EPUBs and PDFs and can continue narration with an iPhone or iPad locked. Compatible Apple Silicon Macs can run its iPad build; it is not a separate native Mac application. For a long report, the <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF guide</Link> explains the import path.</p>
        <p>{FREE_TIER.full} The sleep timer, soundscapes and speed control from 0.3x to 3.0x require Premium. A particular voice or speed is a preference, not a medical setting. Choose something you can follow without straining to keep up.</p>
        <p>Speech and PDF text recognition run locally, so a book is not uploaded to a speech server for narration. The app also sends diagnostics and analytics. For work documents, follow your organisation&apos;s software and information-handling policies rather than treating local speech as an automatic approval to import anything.</p>
      </QuestionSection>
      <QuestionSection question="What about reading after work?">
        <p>A workday break and an evening book need not use the same routine. During work, you may need to return to figures or take notes. In the evening, you might prefer continuous audio with no text visible at all.</p>
        <p>The <Link href="/blog/read-aloud-for-visual-fatigue" className="text-loudBlue hover:underline">evening read-aloud routine</Link> covers preparing a book, using lock-screen controls and stopping when listening also feels like effort.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try listening to one suitable document" subline="Check the file, start narration and put the screen away. Take complete breaks when you need them." />
    </ArticleLayout>
  );
}

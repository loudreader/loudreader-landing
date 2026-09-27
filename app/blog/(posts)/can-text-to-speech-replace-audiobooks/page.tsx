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
      <Tldr><p>Text to speech can replace a recorded audiobook for some listening tasks, especially reading a draft, document or ebook for which you do not have an audio edition. It does not reproduce a particular actor’s performance, full-cast production or author-read memoir. Start with the text and experience you want: do you need this exact file spoken, or do you want a particular recording? Neither format has to replace the other throughout your library. A short sample is more informative than a claim that one always sounds better.</p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="A particular performance and a reading of your own file serve different needs." />
      <QuestionSection question="When does the recording matter?"><p>A narrator can shape a scene through timing, accents and deliberate interpretation across the story. Music, multiple actors and an author’s own delivery may be part of the reason you choose that edition. Replacing it with TTS changes the experience even when the words are the same.</p><p>Check whether the recording is abridged and whether its translator matches your text. If you need to discuss a passage by page or quotation, a different edition can be more significant than the choice between recorded and synthetic audio.</p></QuestionSection>
      <QuestionSection question="When is TTS especially useful?"><p>TTS can speak a file that was never prepared as an audiobook: your own manuscript, an authorised review copy, a course handout or a compatible ebook. You can also choose a different available voice without searching for another production. This is flexibility, not evidence that every book lacks a recording.</p><p>For example, <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> reads supported DRM-free EPUBs and PDFs. LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. It is a reader, not a word processor or a full-cast production tool. The <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">ebook listening guide</Link> covers its import flow.</p></QuestionSection>
      <QuestionSection question="What can go wrong when a file becomes speech?"><p>The voice can mispronounce names, misread abbreviations or make a quotation’s tone unclear. PDF extraction can mix columns, footnotes and headers; OCR adds another possible source of mistakes. Start with a representative passage, including a page with the formatting you expect to use.</p><p>A long technical table, equation or visual argument may need the page alongside it. Listening is an option for engaging with the text, not a guarantee that every part becomes understandable as audio.</p></QuestionSection>
      <QuestionSection question="How should you compare the cost?"><p>Compare what you will actually use: a library loan, an individual audiobook, a subscription allowance, a built-in system voice or an app plan. Avoid assuming that one model is always cheaper. Check current terms in your region and whether access ends when a subscription does.</p><p>{FREE_TIER.full}</p><p>LoudReader’s speed control and broader Premium features are separate from unlimited listening in the eligible free voice. Notes and highlights are free. Check the in-app purchase screen for your local price.</p></QuestionSection>
      <QuestionSection question="Can you mix the two approaches?"><p>Yes. Keep a favourite recording for the books where the production matters, and use TTS for compatible files you want to hear. Downloaded recordings and prepared on-device voices can both support offline listening; offline access is not unique to one format.</p><p>For a specific title, try a few minutes of each at a comfortable pace. Compare how well you follow the passage and whether the voice remains pleasant to you. There is no requirement to select one format permanently.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own text with a local voice" subline="Import a supported DRM-free EPUB or PDF and try a short section first." />
    </ArticleLayout>
  );
}

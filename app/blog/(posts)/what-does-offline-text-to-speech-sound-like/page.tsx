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
      <Tldr><p>There is no single “offline TTS sound”. It depends on the voice, language, model, hardware and text. Listen to a sample first, then test a representative passage in the app you plan to use. LoudReader’s voice page plays sample recordings in your browser; it does not run the app’s speech engine there. A clip is a starting point for choosing a voice, while your own book reveals pronunciation, phrasing and how the reader handles longer passages.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="Hear a sample, then compare it with your own text." />
      <QuestionSection question="Where can you hear an example?"><p>Open <Link href="/voices" className="text-loudBlue hover:underline">LoudReader’s voice samples</Link> and try a voice in the language you intend to read. Compare more than the opening sentence. Listen to the pace, pauses and pronunciation, then decide whether the delivery suits your taste.</p><p>The app has 23 studio narrators across ten languages where supported. Availability depends on the device, so do not assume that every voice shown on the website appears on every iPhone, iPad or compatible Mac. Check the available choices in your installation.</p></QuestionSection>
      <QuestionSection question="What should you test with your own book?"><ol className="list-decimal pl-6 space-y-2"><li>Choose ordinary prose plus a paragraph containing names or specialist terms.</li><li>Include dialogue, dates or abbreviations if the book uses them.</li><li>Follow the text while listening to distinguish pronunciation errors from extraction errors.</li><li>Try a longer section and a chapter transition.</li><li>Check the voice again without a connection once the book and resources are ready.</li></ol><p>A clear sample does not guarantee correct speech for every document. A scan may introduce OCR mistakes, and a PDF can contain text in an unexpected order. These are part of the listening result even when the voice itself sounds pleasant.</p></QuestionSection>
      <QuestionSection question="Does offline processing lower or improve quality?"><p>The processing location alone does not settle that question. Compare particular voices on your material. The model and its implementation can affect quality, speed and device requirements; “local” is not a quality score.</p><p>What local speech does mean in LoudReader is that the book is not sent to a speech server for narration. The app still has network features, diagnostics and usage analytics. The <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">on-device explanation</Link> separates local generation from broader app behaviour.</p></QuestionSection>
      <QuestionSection question="How is it different from a performed audiobook?"><p>A recorded production captures a particular interpretation: its narrator, pacing, direction and sometimes a cast or music. A TTS reader speaks the supplied text using its available voices. You may prefer either experience for a given book.</p><p>Do not expect a general reader to reproduce the performance of a favourite actor or assign every character a directed part. Equally, do not infer that every synthetic voice behaves identically. Judge the concrete output you are considering.</p></QuestionSection>
      <QuestionSection question="What if none of the samples suits you?"><p>Try another available voice or a different reading format. <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> also has Voice Studio for on-device cloning from about ten seconds of permissioned speech. Trial users can create up to three clones during the all-voices allowance; continued clone access and uncapped creation require Premium. Results are not guaranteed to match a professional performance.</p><p>LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. Cloning should use your own voice or a voice you have permission to use. It is an option to explore, not a promise that any narrator can be recreated.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Sample a voice before choosing it" subline="Check the available voices on your device and listen to a passage you care about." />
    </ArticleLayout>
  );
}

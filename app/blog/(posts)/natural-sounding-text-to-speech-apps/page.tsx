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
      <Tldr><p>Choose a text-to-speech app by listening to text you actually read, on the device and in the language you intend to use. A polished demo does not tell you how it will handle your character names, abbreviations or PDF. Compare a short representative passage, then a longer session with the same voice. Where speech is generated—locally or on a server—is a separate question from whether you like its sound. “Natural” is a description to test, not a guarantee of accurate or enjoyable narration.</p><p>Disclosure: this guide is published by LoudReader’s developer. LoudReader is one option to sample, not the result of an independent app ranking.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="Use the same representative text when you compare voices." />
      <QuestionSection question="What should you listen for?"><ul className="list-disc pl-6 space-y-2"><li>Phrasing: do pauses and emphasis make the sentence easy to follow?</li><li>Pronunciation: try proper names, unfamiliar terms and mixed-language passages you actually encounter.</li><li>Numbers: check dates, percentages, initials and abbreviations against the written text.</li><li>Continuity: listen across paragraph and chapter boundaries, not just one sentence.</li><li>Comfort: decide whether you personally want to spend longer with that voice.</li></ul><p>A voice can sound smooth while saying the wrong thing. Keep intelligibility and fidelity separate from how pleasant its tone is.</p></QuestionSection>
      <QuestionSection question="How do you make a fair comparison?"><p>Use the same short passage in each app, where file access permits, and start at a similar pace and volume. Include a paragraph of dialogue and one with the kinds of numbers or names relevant to your reading. Avoid choosing a winner from one app’s best demo and another app’s difficult PDF.</p><p>Then test a longer passage. You may notice repeated phrasing, poor chapter transitions or a voice you tire of. This is a personal comparison, not a scientific benchmark or proof that other listeners will agree.</p></QuestionSection>
      <QuestionSection question="Does cloud processing automatically sound better?"><p>No general ranking follows from the location of processing alone. The particular model, voice, language, device and text matter. Check whether a service offers downloaded audio or local voices before assuming it always needs a connection.</p><p>Local speech generation can avoid uploading book text for narration. It does not tell you whether the surrounding app collects diagnostics, uses analytics or downloads resources. Our <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">on-device speech guide</Link> explains that distinction.</p></QuestionSection>
      <QuestionSection question="How can you try LoudReader?"><p>Start with the <Link href="/voices" className="text-loudBlue hover:underline">voice samples</Link>, then test your own supported EPUB or PDF inside the app. Website clips are sample recordings played in the browser; they are not the app’s speech engine running in your browser. Results with your own text can differ.</p><p>LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. The app offers 23 studio narrators across ten languages where supported, with availability depending on hardware. The free choices are not the same as the complete studio roster.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <QuestionSection question="When is paying for a voice worthwhile?"><p>Pay when you have tested the voice or feature you want and its access terms fit your use. Check the language, your device, offline behaviour, allowances and storefront price. A free option that suits your reading may be enough.</p><p>In <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, speed control and the full available narrator selection are Premium features. Notes and highlights are free. If a passage sounds wrong, first check extraction and pronunciation; a higher-priced tier cannot guarantee that the source text is being read correctly.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Hear the samples, then try your own text" subline="Voice preference is personal. Check the app’s available voices on your device." />
    </ArticleLayout>
  );
}

import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>You can listen to Adventures of Huckleberry Finn through a free volunteer recording or have the ebook read aloud. <a href="https://www.gutenberg.org/ebooks/76" className="text-loudBlue hover:underline">Gutenberg ebook 76</a> provides the English text and is listed as public domain in the USA. The US listing does not establish availability in other countries. LoudReader’s <Link href="/listen/adventures-of-huckleberry-finn" className="text-loudBlue hover:underline">catalogue sample</Link> demonstrates generated speech from the book. Before choosing it, try a passage of dialogue: Twain’s written dialect is a particular challenge for text-to-speech. The original also contains racist language and depictions of slavery; an unadapted reading carries that language into the audio.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="The text’s dialect and historical language need an edition-aware choice." />

      <QuestionSection question="How does a reading handle Huck’s and Jim’s speech?"><p>The spelling on the page is part of Twain’s characterisation. A synthetic voice can mispronounce an unusual spelling, place emphasis oddly, or make two voices sound alike. We have not established that every dialect passage is rendered accurately, so an opening clip should be the start of your check, not a guarantee.</p><p>Read and listen to the same short exchange. If the audio changes how you understand a sentence, return to the text. For a class, an annotated edition may explain historical wording; text-to-speech does not provide that context automatically.</p></QuestionSection>

      <QuestionSection question="Is there a human recording I can compare?"><p>Yes. <a href="https://librivox.org/the-adventures-of-huckleberry-finn-by-mark-twain/" className="text-loudBlue hover:underline">LibriVox lists a volunteer recording</a> with downloadable sections. Preview it and check the listed readers and text source. Other recordings may be solo readings, collaborative readings or adaptations; a human voice does not by itself tell you which format you are getting.</p><p>For shared listening, review the text first, especially if children are involved. Do not assume that a familiar school-book title means the recording has been adapted or that offensive historical terms have been removed. Choose the edition that fits the discussion you intend to have.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for Adventures of Huckleberry Finn. Check the title and edition before downloading. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <QuestionSection question="How do you plan a longer read?"><p>The catalogue estimate is about 11.5 hours, derived from text length. It is not a measured duration for every narrator. Break the book into chapter-sized sessions and check the next chapter heading when you return. This is more reliable than lining up two different recordings by timestamp.</p><p>If you want to hear the same version you are studying, <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import your supported DRM-free ebook</Link> instead of switching editions mid-book. Retain your assigned print or digital text for quotations and page references.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

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
        <p>The book to look for is L. Frank Baum’s The Wonderful Wizard of Oz. <Link href="/listen/the-wonderful-wizard-of-oz" className="text-loudBlue hover:underline">LoudReader’s catalogue entry</Link> points to <a href="https://www.gutenberg.org/ebooks/55" className="text-loudBlue hover:underline">Gutenberg ebook 55</a>; Gutenberg also directs readers to the improved <a href="https://www.gutenberg.org/ebooks/43936" className="text-loudBlue hover:underline">edition 43936</a> with W. W. Denslow credited as illustrator. These English ebooks are listed as public domain in the USA. The US listing does not establish availability in other countries. You can listen with a synthetic reading in LoudReader or use a volunteer recording. Either way, choose the novel edition deliberately: a book reading is different from a film or stage adaptation.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Baum’s novel has its own chapter order and illustrated editions." />

      <QuestionSection question="Which Gutenberg edition should you use?"><p>The catalogue sample and built-in entry use ebook 55. Its Gutenberg page points to ebook 43936 as an improved edition. If you want that version, inspect its illustrated EPUB and import it separately into a compatible reading app. We have not compared every line between the two files.</p><p>Keep the illustrations available if you are reading alongside a child. Hearing the prose does not describe all the visual information in a picture. When comparing an audio edition, check whether it reads Baum’s novel or an adaptation with a similar title.</p></QuestionSection>

      <QuestionSection question="What is different about listening to the novel?"><p>Follow the chapter list in the book rather than expecting an adaptation’s scene order. The novel gives each stage of Dorothy’s journey its own space. A familiar character or place does not mean the wording or sequence will match the version you remember.</p><p>For shared listening, try one chapter before deciding on a longer session. A story’s age or reputation is not a substitute for checking whether its language, peril and pacing suit the particular listener. Pause to look at a picture or discuss a confusing passage when that helps.</p></QuestionSection>

      <QuestionSection question="Can you choose a free human recording?"><p>Yes. <a href="https://librivox.org/wonderful-wizard-of-oz-version-9-by-l-frank-baum/" className="text-loudBlue hover:underline">LibriVox’s version 9</a> lists a volunteer reading with downloadable sections. Preview the narrator on that page. LoudReader’s website sample instead demonstrates synthetic speech from the ebook, and the app reads in your selected voice.</p><p>The catalogue estimate of about 4.5 hours is based on text length. It is not the duration of that LibriVox recording or any film. Choose a recording by its edition and sample, then use its own runtime when planning a journey.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for The Wonderful Wizard of Oz. Use ebook 55 from the catalogue or import ebook 43936 if you want the illustrated alternative. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <QuestionSection question="How do you keep your own edition?"><p>If you have a supported DRM-free EPUB, you can <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import it for listening</Link> without switching to the catalogue text. Check the title page and contents first. Do not assume a commercial adaptation or later Oz collection contains this same novel unchanged.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

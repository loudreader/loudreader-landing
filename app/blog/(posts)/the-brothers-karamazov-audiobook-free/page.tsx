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
        <p>The free English text linked by LoudReader is Constance Garnett’s translation of The Brothers Karamazov, <a href="https://www.gutenberg.org/ebooks/28054" className="text-loudBlue hover:underline">Gutenberg ebook 28054</a>. Gutenberg lists that edition as public domain in the USA. The US listing does not establish availability in other countries. This detail matters: a different translation can sound and read differently, even when the cover title is identical. LoudReader generates speech from the ebook rather than supplying an actor’s recording. Hear the <Link href="/listen/the-brothers-karamazov" className="text-loudBlue hover:underline">opening sample</Link> and inspect the translation before committing to a long reading.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Choose the translation first; choose the listening pace second." />

      <QuestionSection question="Which translation will you hear?"><p>The Gutenberg record explicitly credits Constance Garnett. It is not a modern translation simply made free by Dostoyevsky’s age. Check the translator on any recording or ebook you compare. If your book group is using another translation, shared chapter titles may help you navigate, but individual phrases can differ.</p><p>If you have a supported DRM-free copy of the translation you want, <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import your own EPUB or PDF</Link> instead. Do not choose an unidentified file on the assumption that all English versions are interchangeable. Use your chosen edition consistently for quotations.</p></QuestionSection>

      <QuestionSection question="How do you keep track of names while listening?"><p>Make a short name list as characters appear, using the spellings in your edition. Russian names can appear in several forms, and an unfamiliar spoken name is easier to place when you have seen it written. Avoid a detailed plot guide if you want to keep the story’s revelations intact.</p><p>When a passage becomes difficult to follow, pause and look at the text rather than merely increasing the speed. LoudReader highlights the spoken words. That can help locate the current sentence, but it does not explain an argument or guarantee that every Russian name is pronounced as you expect.</p></QuestionSection>

      <QuestionSection question="How do you plan a book of this length?"><p>The catalogue’s roughly 38 hours is a text-length estimate for this entry, not a measured performance. Use it as a broad commitment rather than a promise. Choose manageable chapter or section boundaries and note where you stop, particularly if you alternate with a print copy.</p><p>Try both narrative and a sustained dialogue before settling on a voice. A sample of the opening cannot tell you how comfortable that delivery will feel for every kind of passage. There is no need to finish on a prescribed schedule; repeated passages are part of a long read, not a failure of it.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for The Brothers Karamazov. Check that the edition credits Constance Garnett if you want the catalogue’s translation. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

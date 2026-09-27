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
        <p>Before choosing a free Gulliver’s Travels audiobook, check which edition it reads. The <Link href="/listen/gullivers-travels" className="text-loudBlue hover:underline">LoudReader catalogue entry</Link> points to <a href="https://www.gutenberg.org/ebooks/17157" className="text-loudBlue hover:underline">Gutenberg ebook 17157</a>, an abridged school edition edited by Thomas M. Balliet. It contains the Lilliput and Brobdingnag voyages, not all four. For the four-voyage text, start with <a href="https://www.gutenberg.org/ebooks/829" className="text-loudBlue hover:underline">Gutenberg ebook 829</a>. Both are English ebooks that a text-to-speech app can read; neither listing is itself a human audiobook recording. Gutenberg marks these editions public domain in the USA. The US listing does not establish availability in other countries.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="With Gulliver, the contents page matters more than the cover title." />

      <QuestionSection question="What is missing from the catalogue edition?"><p>Ebook 17157 is explicitly labelled an abridged school edition. Its contents cover the voyages to Lilliput and Brobdingnag, and the editor’s preface describes omissions and changes to the wording. Calling it the complete novel would be misleading, even if an app reads every word in that file.</p><p>It can still suit a reader deliberately looking for those two adventures. The important thing is to make that choice knowingly. For a course or a book group discussing the later satire, it is the wrong file.</p></QuestionSection>

      <QuestionSection question="How do you get all four voyages?"><p>Open <a href="https://www.gutenberg.org/ebooks/829" className="text-loudBlue hover:underline">ebook 829’s download page</a> and select EPUB. Its contents include Lilliput, Brobdingnag, the voyage that includes Laputa, and the country of the Houyhnhnms. Import that EPUB into your reading app and check the four parts appear before starting.</p><p>If you already have an assigned edition, a supported DRM-free EPUB is another option. Use <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">the ebook import guide</Link> for the workflow. Match the actual text rather than assuming every file with Swift’s title is interchangeable.</p></QuestionSection>

      <QuestionSection question="Will a synthetic voice suit Swift’s satire?"><p>Try a passage of Gulliver’s formal narration, then one with unfamiliar place names. Long sentences and invented names can expose awkward phrasing that a short opening sample misses. If you are using the book for study, keep the printed wording visible when a sentence sounds puzzling.</p><p>Do not choose purely by total hours. The catalogue’s approximately six-hour estimate belongs to the abridged entry and must not be used to plan the four-voyage edition. A short runtime can be a clue to check the contents, but it is not proof of an abridgment on its own.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for Gulliver’s Travels. Choose ebook 17157 only if you want the school abridgment; import ebook 829 separately for all four voyages. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

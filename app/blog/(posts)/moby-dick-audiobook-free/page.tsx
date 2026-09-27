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
        <p>There are free text and audio routes into Moby-Dick. <Link href="/listen/moby-dick" className="text-loudBlue hover:underline">LoudReader’s catalogue entry</Link> uses <a href="https://www.gutenberg.org/ebooks/2701" className="text-loudBlue hover:underline">Gutenberg ebook 2701</a> and generates speech from its text. Gutenberg also links a <a href="https://www.gutenberg.org/ebooks/28794" className="text-loudBlue hover:underline">human audio performance</a> and recommends <a href="https://www.gutenberg.org/ebooks/15" className="text-loudBlue hover:underline">ebook 15</a> as its preferred text edition. These entries are listed as public domain in the USA. The US listing does not establish availability in other countries. Choose the text or recording first, then plan the listening time. A familiar title does not mean every digital edition has the same corrections or audio performance.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="For a long novel, choose the edition as carefully as the voice." />

      <QuestionSection question="Which free text should you choose?"><p>The existing LoudReader catalogue link is ebook 2701. Gutenberg’s own edition note points readers to ebook 15, based on the first American edition, as the strongest of its three text versions. That is a reason to inspect ebook 15 if textual accuracy matters to you; it is not a claim that we have compared every line ourselves.</p><p>Download the preferred EPUB and <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import it into LoudReader</Link> if you want that version. If you are following an assigned edition, keep it for page references. Chapter titles are more useful than page numbers when moving between an ebook and a printed copy.</p></QuestionSection>

      <QuestionSection question="Where is the free recorded audiobook?"><p><a href="https://www.gutenberg.org/ebooks/28794" className="text-loudBlue hover:underline">Gutenberg’s human audio entry 28794</a> provides audio downloads, including MP3. This is a separate recording, not audio exported by LoudReader. Its files and section divisions are the things to check if you want a recording for an existing audio player.</p><p>With generated speech, you choose a supported ebook and an available voice. With a recording, the reader’s pacing and interpretation are fixed in the file. Both can be worth sampling. Do not assume every recorded version is a full-cast drama or that every synthetic reading handles nautical vocabulary equally well.</p></QuestionSection>

      <QuestionSection question="How do you listen through the changes of style?"><p>Moby-Dick moves between narrative, conversation and extended discussions of whales and whaling. If you expect an uninterrupted chase, those shifts can be disorienting. Treat the chapter title as a signpost and pause at a boundary when a session ends, rather than assuming each chapter advances the voyage in the same way.</p><p>The catalogue’s 23.5-hour estimate is calculated from text length, not a measured recording. Use it as a rough budget. After a first session, decide whether the voice suits both narrative and explanatory passages; the opening alone cannot test that.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for Moby Dick. Use the built-in entry for ebook 2701, or import ebook 15 yourself after checking its download page. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

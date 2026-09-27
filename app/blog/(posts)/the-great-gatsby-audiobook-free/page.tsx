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
        <p><a href="https://www.gutenberg.org/ebooks/64317" className="text-loudBlue hover:underline">Project Gutenberg ebook 64317</a> offers F. Scott Fitzgerald’s The Great Gatsby in English, listed as public domain in the USA. The US listing does not establish availability in other countries. LoudReader can read that text aloud from its catalogue, using speech generated on your device. The <Link href="/listen/the-great-gatsby" className="text-loudBlue hover:underline">Gatsby catalogue page</Link> has a short opening sample. A free ebook is different from a particular actor’s audiobook or a film soundtrack: decide whether you want the text read aloud or a specific performance, and check the edition details of the option you choose.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Start with the text edition, then preview the narration." />

      <QuestionSection question="What does the free Gutenberg edition include?"><p>It provides the English novel as an ebook. Its catalogue entry identifies Fitzgerald as author and records the text’s publication source. That gives you a specific file to evaluate; it does not establish that every modern edition, translation or recording with the same title is freely available.</p><p>If you are outside the United States, a US catalogue label is not a worldwide availability promise. If you are reading for a class, also check whether you need an introduction, annotations or a particular pagination. Those materials are not automatically part of the older text.</p></QuestionSection>

      <QuestionSection question="What should you test in a voice sample?"><p>Nick Carraway’s account moves between observation, conversation and reflection. Try a section containing dialogue after the opening. Listen for sentence boundaries and names, and decide whether you can follow who is speaking without relying on a cast of different voices.</p><p>LoudReader uses a synthetic voice rather than an actor’s interpretation. The sample is a useful preview, not evidence that every line has been manually checked. If a particular recorded performance is the reason you want the audiobook, search for that edition through its publisher or your library instead.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for The Great Gatsby. Check the title and edition before downloading. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <QuestionSection question="Can it help with a reading assignment?"><p>Listening can be another way to move through the text, but keep your assigned edition for quotations and page numbers. Mark the chapter and the first few words of passages you want to discuss. This works across versions more reliably than copying an audio timestamp.</p><p>The catalogue estimates around 5.5 hours from text length. That is not an exact runtime or a guarantee that the book fits a particular journey. For the practical steps of using your own course copy, see <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">the ebook-to-speech guide</Link>. Use a supported DRM-free file and check its contents before starting.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

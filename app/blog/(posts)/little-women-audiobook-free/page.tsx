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
        <p>A free reading of Little Women should begin with an edition check. <a href="https://www.gutenberg.org/ebooks/37106" className="text-loudBlue hover:underline">Gutenberg ebook 37106</a>, the edition linked by <Link href="/listen/little-women" className="text-loudBlue hover:underline">LoudReader’s Little Women page</Link>, includes Part First and Part Second, ending at chapter 47. It is listed as public domain in the USA. The US listing does not establish availability in other countries. LoudReader can read that ebook aloud with a synthetic voice. Its opening sample lets you preview the delivery, but the full reading happens in the app after download. If you already have a particular recording in mind, compare its contents as well as its narrator.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Check both parts before committing to the March sisters’ whole story." />

      <QuestionSection question="Does this edition include both parts?"><p>Yes. The linked ebook’s contents run from the March sisters’ early chapters through Part Second. The break comes after chapter 23, with chapter 24 beginning the second part. That is a useful checkpoint when comparing an audio edition whose cover simply says Little Women.</p><p>Some files are selections or adaptations. Inspect their chapter list instead of deciding from the cover or runtime alone. If you are matching a school copy or a family read-along, check that its contents cover the same material before choosing the audio.</p></QuestionSection>

      <QuestionSection question="How do you choose a voice for a long family story?"><p>Sample conversation as well as description. You will spend time with exchanges among Meg, Jo, Beth and Amy, so choose a voice you find easy to follow across several speakers. LoudReader uses the synthetic voice you select; it does not turn the ebook into a cast performance.</p><p>The fact that a voice sounds pleasant in a short opening does not settle a twenty-hour choice. Listen for a longer stretch before committing. If a particular human reader’s interpretation is what you want, use a recorded edition and check that it includes both parts.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for Little Women. The catalogue entry uses Gutenberg ebook 37106; compare its contents with any edition you are reading alongside it. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <QuestionSection question="How much listening time should you set aside?"><p>LoudReader’s approximate 20.5-hour figure comes from the text length of this edition. It is a planning estimate, not a timed performance. A chapter at a time is an easier commitment to judge than an assumed daily listening target. At the transition between the two parts, decide whether you want to pause or continue.</p><p>If you are exploring other older novels, <Link href="/blog/project-gutenberg-audiobooks" className="text-loudBlue hover:underline">the Gutenberg listening guide</Link> explains how to choose an ebook or a recording. For this book, the useful first decision is whether you want the entire two-part story or a deliberately shorter adaptation.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

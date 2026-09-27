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
        <p>For a free text of Dracula, start with <a href="https://www.gutenberg.org/ebooks/345" className="text-loudBlue hover:underline">Project Gutenberg ebook 345</a>, Bram Stoker’s English novel, listed as public domain in the USA. The US listing does not establish availability in other countries. LoudReader can download that text from its catalogue and read it aloud on your device. This is generated speech, rather than a cast performing the diaries and letters. Hear the <Link href="/listen/dracula" className="text-loudBlue hover:underline">opening sample</Link> before choosing a voice. For this particular book, keeping track of who is writing each document matters as much as the sound of the narrator.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Dates and document headings help you follow Dracula’s changing viewpoints." />

      <QuestionSection question="How do you keep track of the different narrators?"><p>Dracula moves between journals, correspondence and other documents. Treat a heading as part of the story: it tells you whose account you are hearing and when it was written. A change of speaker may happen within a chapter, so a chapter boundary is not the only place to pay attention.</p><p>If you return after a few days, revisit the latest document heading before resuming. That is often more useful than replaying an arbitrary minute. Keep a small list of the names you have met if they are blending together; you do not need a spoiler-filled plot summary to do this.</p></QuestionSection>

      <QuestionSection question="Should you choose a single voice or a cast?"><p>LoudReader reads the selected text in your chosen synthetic voice. It does not assign an actor to each correspondent. A recorded edition may use one reader, several readers or a dramatised script; check the listing instead of treating all human audiobooks as full-cast productions.</p><p>For comparison, sample a passage with a document change. Ask whether you can hear the heading clearly and follow the next speaker. Dramatisation can be enjoyable, but if you need Stoker’s text for study, check that the recording is unabridged rather than a radio adaptation.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for Dracula. Check the title and edition before downloading. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <QuestionSection question="How much time should you allow?"><p>The LoudReader catalogue gives a rough 16.5-hour estimate based on text length. It is not a measured recording length or a guarantee for your chosen voice. Pauses and playback speed change the result. Plan by chapters or documents first, then use your own first session to estimate the time you need.</p><p>For a commute, finish setup before travelling and leave the text view for when you are stationary. Our <Link href="/blog/listen-to-books-while-driving" className="text-loudBlue hover:underline">car-listening setup guide</Link> covers the practical preparation. On foot or at home, reading a heading on screen can help you rejoin the story without guessing who is speaking.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

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
        <p>You can hear Lewis Carroll’s Alice’s Adventures in Wonderland through a volunteer recording or by having its ebook read aloud. <a href="https://www.gutenberg.org/ebooks/11" className="text-loudBlue hover:underline">Project Gutenberg ebook 11</a> supplies the English text and lists it as public domain in the USA. The US listing does not establish availability in other countries. LoudReader offers the text in its catalogue and reads it with a synthetic voice. The <Link href="/listen/alices-adventures-in-wonderland" className="text-loudBlue hover:underline">Alice listening page</Link> has an opening sample. If the comic delivery matters most to you, compare that with a human recording before choosing how to listen.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Carroll’s wordplay is worth checking in both print and sound." />

      <QuestionSection question="Which Alice book are you getting?"><p>Look for the full title Alice’s Adventures in Wonderland. A collection called Alice in Wonderland may contain this story, its sequel, or an adaptation. The Gutenberg entry linked here is the first book; do not assume it includes Through the Looking-Glass.</p><p>For a class or a reading group, compare the chapter headings with your assigned copy. An illustrated edition and an ebook can place the same passage on different pages. Record the chapter and a few opening words when you want to return to a passage.</p></QuestionSection>

      <QuestionSection question="What should you listen for in a sample?"><p>Try some dialogue and a poem as well as the opening narration. Carroll uses sound, pauses and double meanings; a voice that suits ordinary prose may put an unexpected emphasis on a joke. A short sample cannot establish how the whole book will sound.</p><p>The Mouse’s tale is also a visual joke: its shape on the page is part of the experience. Keep the text nearby for passages like this. LoudReader highlights spoken words, but hearing the words alone does not reproduce typography or illustrations. Text-to-speech is useful for following the writing; it does not supply an explanation of a pun.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for Alice’s Adventures in Wonderland. Check the title and edition before downloading. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <QuestionSection question="Where is a free human reading?"><p><a href="https://librivox.org/alices-adventures-in-wonderland-by-lewis-carroll-5" className="text-loudBlue hover:underline">LibriVox’s Alice’s Adventures in Wonderland, version 4</a> is a volunteer recording with downloadable audio. Its catalogue page lists the reader and sections. Listen to a section before downloading the whole recording; choose according to the voice you prefer, rather than assuming a free recording has one particular style.</p><p>Use a recording if you want a fixed performance you can keep in an audio player. Use <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">ebook text-to-speech</Link> if you want to listen to an editable choice of text edition and follow the words on screen. These are two ways to enjoy the book, not a quality ranking.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

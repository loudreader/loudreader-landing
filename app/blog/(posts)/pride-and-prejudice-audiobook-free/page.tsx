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
        <p><a href="https://www.gutenberg.org/ebooks/1342" className="text-loudBlue hover:underline">Project Gutenberg ebook 1342</a> provides Jane Austen’s Pride and Prejudice in English and lists it as public domain in the USA. The US listing does not establish availability in other countries. You can have that text read aloud in LoudReader, which generates speech on your device, or choose a separately recorded audiobook. The <Link href="/listen/pride-and-prejudice" className="text-loudBlue hover:underline">LoudReader sample</Link> previews its synthetic delivery. If you are reading for a course or book group, start by matching the text edition; if you are listening for pleasure, try a conversation scene before settling on the voice.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Austen’s conversations reward a voice you can follow comfortably." />

      <QuestionSection question="What matters when choosing a reading of Austen?"><p>Dialogue often carries the point of a scene. In a sample, listen for whether you can distinguish who is speaking from the wording and punctuation, without depending on separate character voices. A synthetic reading uses your selected voice; a human recording may use subtle changes in delivery, but need not be a dramatisation.</p><p>Do not judge only from the familiar opening. Try a conversation with several participants or a letter embedded in the story. The question is whether that reading helps you follow the text, not whether it meets a universal standard of naturalness.</p></QuestionSection>

      <QuestionSection question="Will it match the copy I am studying?"><p>The linked Gutenberg text is one edition of the novel. Page numbers, notes and introductions will differ from a classroom paperback. Use the chapter number and opening words to locate a passage, then take page citations from the edition your course requires.</p><p>If the exact ebook is available to you as a supported DRM-free EPUB or PDF, you can <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import that copy</Link> instead. A locked ebook from another reading platform is not automatically transferable. A free older text also does not include a modern editor’s commentary by default.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for Pride and Prejudice. Check the title and edition before downloading. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <QuestionSection question="How long should you plan to listen?"><p>The catalogue’s estimate of about 14.5 hours comes from text length, not a timed recording. Voices, pauses and speed settings affect duration. Work out a plan after listening to a chapter, rather than assuming every chapter or commute will take the same time.</p><p>For a reading group, agree on the next chapter boundary instead of an audio timestamp. Different performances and text-to-speech voices will not reach a passage at the same time. Keeping a note of the last chapter you completed also makes switching between print and audio less confusing.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

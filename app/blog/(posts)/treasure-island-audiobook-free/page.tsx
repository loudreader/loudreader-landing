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
        <p>For a free Treasure Island reading, you can choose recorded audio or speech generated from an ebook. <a href="https://www.gutenberg.org/ebooks/120" className="text-loudBlue hover:underline">Gutenberg ebook 120</a> provides Robert Louis Stevenson’s English text and lists it as public domain in the USA. The US listing does not establish availability in other countries. LoudReader offers that text in its catalogue, with an <Link href="/listen/treasure-island" className="text-loudBlue hover:underline">opening sample</Link> on the website. There is also a free LibriVox dramatic reading. Compare a passage before deciding: the difference here is the reading format you prefer, not whether one option alone gives you access to the story.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Choose a cast performance or follow Stevenson’s text in a single selected voice." />

      <QuestionSection question="Where is a free dramatic reading?"><p><a href="https://librivox.org/treasure-island-dramatic-reading-by-robert-louis-stevenson/" className="text-loudBlue hover:underline">LibriVox’s Treasure Island, version 3</a> is explicitly labelled a dramatic reading. Its page lists the sections and participants and provides audio downloads. That is a concrete option if hearing different character voices is part of the appeal for you.</p><p>Preview a section with dialogue and check the format before downloading. A dramatic reading, a solo reading and an adapted audio play can all appear under the same novel title. Their labels and contents matter more than a promise that one is the best narrator.</p></QuestionSection>

      <QuestionSection question="What should you watch for when following the ebook?"><p>Much of the story is told by Jim Hawkins, but the narrative temporarily passes to Dr Livesey. The chapter heading announces that change. If you hear the same synthetic voice throughout, the words in that heading are your cue that the viewpoint has moved.</p><p>Keep the text available when a nautical term or an unfamiliar name catches you out. Looking at a word can resolve a confusing pronunciation without replaying the whole scene. A generated reading follows the selected text; it does not supply a glossary or explain the ship’s layout.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for Treasure Island. Check the title and edition before downloading. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <QuestionSection question="How do you plan the listening time?"><p>The catalogue estimates about 7.5 hours from text length. A recorded cast performance or a different voice can take a different amount of time, so do not use that number to compare completeness. Check the contents and edition details instead.</p><p>For travel, prepare the book and voice before you leave and try playback. If you already own a supported DRM-free illustrated edition, <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import that ebook</Link> to listen from it. Audio does not replace a map or illustration, so keep those visible when they help you follow the action.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

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
        <p>The free text linked by LoudReader is an English translation of Gaston Leroux’s The Phantom of the Opera, <a href="https://www.gutenberg.org/ebooks/175" className="text-loudBlue hover:underline">Gutenberg ebook 175</a>. It is the novel, not the musical’s songs or script. Gutenberg lists this edition as public domain in the USA. The US listing does not establish availability in other countries. LoudReader reads the ebook with generated speech; you can preview it on the <Link href="/listen/the-phantom-of-the-opera" className="text-loudBlue hover:underline">Phantom listening page</Link>. If you want the original French or a specific modern translation, select that edition separately rather than relying on the familiar English title.</p>
        <p className="text-sm">This guide is published by LoudReader, the developer of the reading app described below.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="The English novel and the stage musical are different listening choices." />

      <QuestionSection question="Which version is the catalogue using?"><p>Gutenberg identifies ebook 175 as an English translation. Its record does not name a translator, so we do not attribute one here. It should not be described as Leroux’s original French wording or assumed to match a modern English edition line for line.</p><p>For an assigned translation, use a supported DRM-free ebook of that version. Our <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">ebook listening guide</Link> explains how to import it. Compare the prologue and chapter list before settling into the reading; the title alone does not establish edition equivalence.</p></QuestionSection>

      <QuestionSection question="What should you expect if you know the musical?"><p>The novel opens with an investigator-style account and uses testimony and documents to develop its mystery. Expect prose narration, not songs, orchestration or the musical’s scene order. The linked text has a prologue, numbered chapters, an epilogue and additional material about the opera house.</p><p>For a first listen, avoid treating an adaptation’s plot as a chapter guide. Follow the novel’s own headings and stop at a natural section break. If you lose track of who is recounting an event, look at the surrounding text rather than trying to match it to a remembered scene.</p></QuestionSection>

      <QuestionSection question="How does the synthetic reading work?"><p>LoudReader generates speech in the voice you select. It does not sing passages or automatically cast Christine, Raoul and the Phantom as separate performers. Try names and a dialogue passage as well as the opening; pronunciation and emphasis can vary.</p><p>The catalogue’s approximately 9.5 hours is a text-length estimate for this English entry. It does not describe the length of the musical, the French novel in another voice, or every recorded translation. Compare runtime only after confirming which version each service is offering.</p></QuestionSection>

      <QuestionSection question="How do you listen in LoudReader?"><p>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader from the App Store</a> on iPhone or iPad. The iPad app also runs on compatible Apple Silicon Macs. Search the Gutenberg catalogue for The Phantom of the Opera. The catalogue’s ebook 175 is in English; import a different supported edition separately if that is what you want. Download the book and the voice you want while connected, then start playback.</p><p>{FREE_TIER.full} Premium adds features including playback speed from 0.3x to 3.0x and a sleep timer.</p><p>For offline listening, finish those downloads and try a chapter before leaving. Speech is generated on your device; catalogue browsing and downloads need a connection. The website sample is a preview, not the full audiobook.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook in LoudReader" subline="Preview a voice, choose your edition and download before listening offline." />
    </ArticleLayout>
  );
}

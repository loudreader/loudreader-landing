import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import Disclosure from "@/components/blog/Disclosure";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function PeterPanAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>A free text-to-speech reading of <em>Peter Pan</em> starts with the right book: J. M. Barrie’s <em>Peter and Wendy</em>, rather than a film script or a shortened picture book. <a href="https://www.gutenberg.org/ebooks/16" className="text-loudBlue hover:underline">Project Gutenberg lists the English novel as ebook #16</a> and marks it public domain in the United States. The UK has a special Peter Pan royalty arrangement, so that US listing is not a worldwide clearance. LoudReader can read an eligible downloaded text with a synthetic voice. It does not supply a cast recording of Peter, Wendy and Hook. The <Link href="/listen/peter-pan" className="text-loudBlue hover:underline">Peter Pan sample</Link> lets you hear the voice before choosing this route.</p><Disclosure /></Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Barrie’s novel and an audiobook adaptation are different editions to choose between." />

      <QuestionSection question="Which Peter Pan book is this?"><p>This guide refers to <em>Peter and Wendy</em>, the novel published in 1911. The <a href="https://www.gosh.nhs.uk/about-us/our-history/peter-pan-at-great-ormond-street-hospital/" className="text-loudBlue hover:underline">Great Ormond Street Hospital history</a> distinguishes it from the earlier play and <em>Peter Pan in Kensington Gardens</em>. Matching the title matters: a recording labelled simply “Peter Pan” might be a dramatisation, an abridgement or a reading of the novel.</p><p>Barrie’s narrator comments on the action as well as telling it. Keep those passages if you want the novel rather than a plot summary. For a family listen, preview the text as well as the voice: the original includes violence and dated portrayals that an adaptation may change. An old children’s-book label does not tell you whether it suits a particular child.</p></QuestionSection>

      <QuestionSection question="What is different about Peter Pan in the UK?"><p><a href="https://neverlandofficial.com/discover/peter-pan-copyright/" className="text-loudBlue hover:underline">GOSH Charity’s official copyright guidance</a> describes continuing UK royalty rights covering uses including publications, ebooks and audiobooks.</p><p>For a UK listening copy, choose a provider whose edition is offered for your territory. If you intend to publish, distribute or perform a version, use the contact and licensing guidance from GOSH. In other countries, check the edition and local rules before using a US download.</p></QuestionSection>

      <QuestionSection question="How do you choose between text-to-speech and a recording?"><p>A synthetic reading speaks the written text. A human narration can interpret the narrator’s asides and the exchanges between children and adults; a dramatisation may instead alter the text and add music or a cast. Compare the edition and the opening sample, not just the title or whether an option is free.</p><p>The <Link href="/listen/peter-pan" className="text-loudBlue hover:underline">LoudReader catalog sample</Link> demonstrates one voice, not every voice or every passage. Listen long enough to decide whether its pacing suits you. Total listening time depends on the edition, voice and playback speed; this is not a fixed-length studio recording.</p></QuestionSection>

      <QuestionSection question="How do you prepare a copy in LoudReader?"><p>LoudReader is an iPhone and iPad app; its iPad build also runs on compatible Apple Silicon Macs.</p><ol className="list-decimal pl-6 space-y-2"><li>Choose a copy you may use in your location. Check that it is the novel <em>Peter and Wendy</em>.</li><li>Install <a href="https://apps.apple.com/app/loudreader/id6758149478" className="text-loudBlue hover:underline">LoudReader</a> and find the book in the Gutenberg catalog, or import your permitted DRM-free EPUB.</li><li>Download the book and any required voice resources while connected. The catalog entry itself is not a preinstalled book.</li><li>Play a passage before a family listening session. For offline use, check that the downloaded book and selected voice play before travelling.</li></ol><p>{FREE_TIER.full}</p><p>The <Link href="/voices" className="text-loudBlue hover:underline">voice guide</Link> explains the available narrators. Premium adds features such as playback speed control and the sleep timer; those are separate from free listening.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Preview a reading of Peter and Wendy" subline="Try the voice, then choose the edition you want to read." />
    </ArticleLayout>
  );
}

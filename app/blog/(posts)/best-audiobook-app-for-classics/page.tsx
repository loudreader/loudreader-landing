import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>Start with the edition you want, then choose how to hear it. A LibriVox recording offers a volunteer performance; a commercial audiobook may offer a particular narrator or translation; a text-to-speech reader can speak a compatible ebook you supply. None is automatically the best choice for every classic. Sample the opening, check whether the recording is abridged, and compare the translator as carefully as the narrator. For downloads, check the rights of that specific edition in your country.</p><p>Disclosure: this guide is published by the developer of LoudReader, one of the options discussed below.</p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Choose the edition first, then the voice that suits it." />
      <QuestionSection question="What should you check before choosing an app?"><p>Write down the title, author, translator where relevant, and whether you want an unabridged edition. Two listings with the same cover title may contain different translations, introductions or cuts. A recording of an old translation will not necessarily match a recent printed copy used by your book club.</p><p>Then decide what matters for this reading: a particular performance, following the exact text you own, or listening without a connection. These requirements give you a more useful comparison than the size of an app’s catalogue.</p></QuestionSection>
      <QuestionSection question="When is a LibriVox recording a good starting point?"><p><a href="https://librivox.org/" className="text-loudBlue hover:underline">LibriVox</a> is a volunteer audiobook project. Try an opening chapter and another from later in the book; check whether one person reads the whole work or the reader changes between chapters. Sound levels and delivery can differ between recordings.</p><p>Its copyright policy is based on US law. See <a href="https://wiki.librivox.org/index.php/Copyright_and_Public_Domain" className="text-loudBlue hover:underline">LibriVox’s copyright guidance</a> before treating availability there as worldwide clearance. A free download is still a specific edition, not every translation of a title.</p></QuestionSection>
      <QuestionSection question="When is text to speech useful for a classic?"><p>TTS is useful when you want a particular available ebook read aloud or cannot find a recording you enjoy. <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> imports supported DRM-free EPUBs and PDFs and includes a Gutenberg browser. Search for the title you want rather than assuming every edition is included. LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs.</p><p>Once the book and required voice resources are available on the device, narration works offline. Downloads and web imports still need a connection.</p><p>{FREE_TIER.full}</p><p>Try the first chapter before committing: older spelling, verse, stage directions and footnotes can sound awkward. An EPUB with clear chapter structure is usually easier to navigate than an elaborate scanned edition.</p></QuestionSection>
      <QuestionSection question="When should you choose a commercial audiobook?"><p>Choose one when you value its particular narrator, production or translation. Listen to a sample, check the credits, and compare the duration with other unabridged versions. Also check your library’s catalogue before buying; access depends on your library and location.</p><p>The public-domain status of an underlying novel does not make a new recording freely reusable. The text and recording are separate things. <a href="https://www.gov.uk/government/publications/copyright-notice-duration-of-copyright-term/copyright-notice-duration-of-copyright-term" className="text-loudBlue hover:underline">The UK Intellectual Property Office’s duration guidance</a> also explains that a translation can have its own copyright.</p></QuestionSection>
      <QuestionSection question="What is a sensible way to try the options?"><ol className="list-decimal pl-6 space-y-2"><li>Choose one short chapter in the edition you intend to read.</li><li>Sample a volunteer or commercial recording, then a TTS voice with the same text if available.</li><li>Check names, dialogue, chapter navigation and whether you still enjoy the voice after several minutes.</li><li>Download what you need before travelling, and keep the edition details with the file.</li></ol><p>Our <Link href="/listen" className="text-loudBlue hover:underline">curated classics shelf</Link> is a place to find titles. Project Gutenberg’s <a href="https://www.gutenberg.org/policy/permission.html" className="text-loudBlue hover:underline">permissions guidance</a> explains why readers outside the US must check local rights.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a classic in your chosen voice" subline="Browse the classics shelf, check the edition, and sample a chapter." />
    </ArticleLayout>
  );
}

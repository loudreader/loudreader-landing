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
      <Tldr><p>A missing Audible listing does not prove that no audiobook exists. Start by checking the author, alternate title, edition and your regional store, then look at the publisher’s page and your library catalogue. If there is no recording you can access, text to speech may be useful with a supported ebook you are entitled to use. It will not unlock a protected Kindle file or produce the same performance as a recorded edition. Work through the searches below before buying another copy.</p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Search for the edition before assuming the recording is missing." />
      <QuestionSection question="Could the recording exist under another listing?"><p>Search the author’s name as well as the title. Look for a subtitle, a renamed regional edition, a collection containing the work, and abridged versus unabridged versions. For translated books, search the translator too. A collection may contain the story you want without using its title on the cover.</p><p>Audible documents regional availability errors in its <a href="https://help.audible.co.uk/s/article/understand-error-codes?language=en_GB" className="text-loudBlue hover:underline">official troubleshooting guide</a>. Check that you are using the right marketplace for your account. Contact support if a purchase has disappeared; do not assume that buying it again is the answer.</p></QuestionSection>
      <QuestionSection question="Where should you look next?"><ol className="list-decimal pl-6 space-y-2"><li>Check the author’s or publisher’s official site for an audio edition and its credited narrator.</li><li>Search your own library’s digital catalogue. Ask a librarian about availability or purchase suggestions; a service’s general catalogue is not your library’s holdings.</li><li>For older works, search LibriVox and compare the exact edition. Its US-based rights policy does not clear every title worldwide.</li><li>If nothing turns up, ask the publisher whether audio is planned. A request is useful information, not a promise of a release.</li></ol><p>This sequence distinguishes a search problem, an access problem and a genuinely missing recording.</p></QuestionSection>
      <QuestionSection question="Can you listen to the ebook instead?"><p>If you have a compatible DRM-free EPUB or PDF, <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> can generate narration from its text. LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. Import a short section first, especially for textbooks or unusual layouts. PDFs may need OCR; tables, equations and footnotes still deserve a visual check.</p><p>This is a reading workflow, not an audiobook purchase or a downloadable recording. The <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import walkthrough</Link> explains the setup. A licence, subscription or purchase does not necessarily give you an unrestricted file to import.</p></QuestionSection>
      <QuestionSection question="What if the title is a classic?"><p>Search the title in Gutenberg or our <Link href="/listen" className="text-loudBlue hover:underline">classics shelf</Link>, then inspect the ebook’s source and translator. Gutenberg’s <a href="https://www.gutenberg.org/policy/permission.html" className="text-loudBlue hover:underline">permissions page</a> makes clear that its availability is based on US rules; confirm the relevant rights where you are. A modern introduction or translation may have separate restrictions.</p></QuestionSection>
      <QuestionSection question="What should you expect from synthetic narration?"><p>Listen to dialogue, unfamiliar names and punctuation before deciding. You may like the voice for a whole book, or you may prefer the particular interpretation of a human narrator. TTS also exposes extraction problems: a badly ordered PDF will not become clearer simply because it is spoken.</p><p>Once the book and required voice resources are available on the device, narration works offline. Downloads and web imports still need a connection.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Listen to a compatible ebook" subline="Import your own supported file and check a sample before a long session." />
    </ArticleLayout>
  );
}

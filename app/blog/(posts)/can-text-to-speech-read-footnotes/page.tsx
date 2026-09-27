import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);
export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>
        Footnotes and tables need more than reading every character in
        order. In supported EPUB markup, LoudReader removes common note
        markers from speech, keeps access to recognised notes beside their
        references, and collects notes for an end section. Structured data
        tables remain available visually and are excluded from linear
        narration; some tables used for prose layout are read as paragraphs.
        These are document-processing rules, not a guarantee that every
        publisher’s notes or every PDF will behave identically. For an
        annotated text, check a note and a table before relying on the
        listening version.
      </p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Continuous narration and access to supporting material are different jobs." />
      <QuestionSection question="What happens to an EPUB footnote?">
        <p>A reference marker in the middle of a sentence can interrupt
        the reading. LoudReader filters common bracketed or numbered markers
        from the spoken text. When it recognises a structured footnote and
        can resolve the reference, the reading view provides a control to
        open the note beside that reference.</p>
        <p>The app also collects recognised footnote text and appends a
        Notes section as it reaches the end of the book’s reading flow.
        That does not establish that every note in every file was found:
        nonstandard markup, unresolved references and a PDF’s flattened
        layout can change what is available.</p>
        <p>For study, open one early note and compare it with the source.
        If a citation matters to the argument, follow it when you encounter
        it rather than waiting until the end of a long book.</p>
      </QuestionSection>
      <QuestionSection question="Are tables deleted or spoken cell by cell?">
        <p>In structured content, ordinary data tables are preserved for
        visual inspection and marked as not read aloud. That avoids turning
        a grid of measurements into an unexplained stream of numbers while
        keeping the table available in the reading view.</p>
        <p>Some books use table markup to lay out continuous prose. The
        app uses heuristics to identify those cases and unwrap them into
        paragraphs; dialogue layouts have their own handling. These checks
        are useful, but they cannot infer every author’s intention.</p>
        <p>A PDF can be different. If its table has already become separate
        text lines during extraction, the original row and column structure
        may not be available to the later filter. Review the source table
        whenever you need a precise value or comparison.</p>
      </QuestionSection>
      <QuestionSection question="Do chapter headings and page furniture get read?">
        <p>A heading can carry content or merely repeat navigation. The
        filter treats web articles and books differently: navigation and
        page furniture are removed from web content, while book headers
        can contain meaningful chapter titles and dates.</p>
        <p>PDF import has separate extraction and repeated-header handling.
        If a running title or page number keeps interrupting speech, compare
        the imported text with the original PDF. A cleaner EPUB from the
        publisher may be more useful than repeatedly listening around a
        difficult page layout.</p>
      </QuestionSection>
      <QuestionSection question="What happens to references such as 'on page 12'?">
        <p>Speech normalisation can rephrase page pointers and remove
        certain numbered figure asides. For example, a recognised “on page”
        reference may become “as mentioned earlier”. These changes make a
        spoken sentence flow differently from its written source.</p>
        <p>They do not explain the referenced figure. When following an
        argument closely, keep the original page and cross-reference
        available. A fluent replacement phrase is not evidence that the
        visual information has been included in the narration.</p>
      </QuestionSection>
      <QuestionSection question="What changes for scanned PDFs?">
        <p>LoudReader now includes on-device OCR for image-based PDFs.
        Recognition can recover prose from a legible scan, but it does
        not guarantee semantic footnote links or the structure of a table.
        Blurred superscripts and tiny print are particularly worth checking.</p>
        <p>The <Link href="/blog/listen-to-scanned-pdf-books" className="text-loudBlue hover:underline">scanned-PDF guide</Link>{" "}
        explains recognition limits. For file choices, see <Link href="/blog/what-file-formats-can-be-read-aloud" className="text-loudBlue hover:underline">supported import formats</Link>.{" "}
        <Link href="/" className="text-loudBlue hover:underline"> LoudReader</Link>{" "}
        generates speech locally; an annotated source still deserves a
        visual check alongside listening.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}

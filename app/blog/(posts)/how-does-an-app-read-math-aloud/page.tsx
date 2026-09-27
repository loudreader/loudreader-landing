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
        An equation needs structure for a useful spoken reading. In an
        EPUB containing MathML, LoudReader can turn a fraction, exponent
        or root into a phrase such as “one over two” or “x squared”.
        Its rules cover a subset of mathematical notation with English
        and Spanish wording. An image of the same equation is a different
        input: local OCR can recognise text in a scanned PDF, but it does
        not reconstruct a reliable MathML expression. Keep the original
        notation available and check a representative formula before using
        speech to study a mathematical text.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="The structure of an equation matters as much as the symbols it contains." />
      <QuestionSection question="Why is ordinary text extraction insufficient for math?">
        <p>Consider the difference between “x two” and “x squared”. The
        same two characters can describe a variable followed by a number
        or a variable raised to a power. A superscript’s position conveys
        information that can disappear when a page is reduced to text.</p>
        <p>Fractions and nested roots create similar problems: the listener
        needs to know where each expression begins and ends. MathML stores
        relationships such as numerator, denominator and exponent so an
        application can describe them explicitly. The presence of an EPUB
        extension alone does not guarantee that a publisher used MathML.</p>
      </QuestionSection>
      <QuestionSection question="Which structures does LoudReader handle?">
        <p>The app’s renderer implements a limited set of speech rules,
        described in its source as a subset of ClearSpeak. Examples include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Fractions:</strong> short terms use an “over” form; compound expressions can identify the numerator and denominator.</li>
          <li><strong>Roots:</strong> square roots and supported nth-root structures receive spoken descriptions.</li>
          <li><strong>Powers:</strong> 2 and 3 have squared and cubed wording; other powers use an explicit exponent phrase.</li>
          <li><strong>Subscripts and bounds:</strong> supported elements identify subscripts and lower or upper limits.</li>
          <li><strong>Operators and symbols:</strong> common operators, Greek letters and set symbols have word mappings.</li>
        </ul>
        <p>These examples describe supported rule paths, not a claim of
        complete mathematical coverage. The renderer uses English by
        default and has a Spanish word table; the app’s broader voice
        language selection does not imply equivalent equation rules in
        every language.</p>
      </QuestionSection>
      <QuestionSection question="Can a publisher supply the spoken description?">
        <p>Yes. A nonempty, plain-language <code>alttext</code> value on
        a MathML element is preferred when it does not look like raw TeX.
        That lets an appropriately prepared file supply its own wording.
        It is not general support for opening a LaTeX source document.</p>
        <p>When a structure is unsupported, the renderer may fall back
        to available text. That fallback can still be incomplete or
        ambiguous. Hearing something instead of silence does not establish
        that the equation’s meaning survived.</p>
      </QuestionSection>
      <QuestionSection question="Will I see the original typeset formula during playback?">
        <p>In this conversion path, the MathML element becomes the spoken
        sentence in LoudReader’s reading content. Do not expect the
        original mathematical typesetting alongside every spoken phrase.
        Keep a source EPUB viewer or the original document available when
        visual notation is important.</p>
        <p>For a worked problem, pause at each equation and compare the
        spoken interpretation with the source. Check signs, powers and
        the scope of a denominator before carrying the result into the
        next step.</p>
      </QuestionSection>
      <QuestionSection question="What about equations in PDFs and scans?">
        <p>A normal PDF often provides positioned characters rather
        than MathML. A scanned page initially provides pixels. LoudReader’s
        local OCR can recover readable text from scans, but that is not
        a specialised equation recogniser and does not establish fraction
        bars, matrices or nested expressions reliably.</p>
        <p>For a formula-heavy textbook, ask whether a structured
        accessible edition is available, and review the notation visually
        where possible. The <Link href="/blog/listen-to-scanned-pdf-books" className="text-loudBlue hover:underline">scanned-PDF guide</Link>{" "}
        covers ordinary text recognition; the <Link href="/blog/can-text-to-speech-read-footnotes" className="text-loudBlue hover:underline">footnotes and tables guide</Link>{" "}
        covers other parts of a technical document that need separate
        treatment.</p>
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>{" "}
        can help with the prose surrounding an argument. It should not
        be treated as a guarantee of accessible navigation through every
        mathematical structure or as a check of the mathematics itself.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}

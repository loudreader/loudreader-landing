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

export default function HowDoesAnAppReadMathAloudArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Most text-to-speech readers either delete equations outright or spell
          out raw symbols, which is close to unusable. <strong>LoudReader</strong>{" "}
          does neither: it parses the structure of a MathML equation and speaks
          it the way a person would say it aloud, using rules based on
          ClearSpeak, the same family of rules behind screen-reader math
          support. A fraction becomes &ldquo;one over two,&rdquo; an exponent of
          2 becomes &ldquo;squared,&rdquo; a square root becomes &ldquo;the
          square root of&rdquo; whatever sits under it, and a sum with bounds
          becomes &ldquo;from X to Y.&rdquo; If a publisher already wrote a
          spoken description into the file, LoudReader uses that instead of its
          own rules. This works on real MathML markup in EPUB books with STEM
          content, in English and Spanish. It does not work on equations that
          exist only as pictures, such as in a scanned math textbook PDF,
          because there is no text there to parse in the first place.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="An equation becomes a sentence, not a string of symbols."
      />

      <QuestionSection question="What's wrong with the naive way of reading math aloud?">
        <p>
          The simplest possible approach to an equation is to read its
          characters in order: &ldquo;a two plus b two equals c two&rdquo;
          for the Pythagorean theorem. That is technically true and
          practically useless, because it throws away the structure that
          makes the equation mean something. A person reading the same
          equation out loud says &ldquo;a squared plus b squared equals c
          squared,&rdquo; and the difference is not cosmetic. It is the whole
          content.
        </p>
        <p>
          The other common approach is worse: many readers simply delete{" "}
          <code>&lt;math&gt;</code> elements the same way they delete{" "}
          <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> tags,
          because math markup does not look like prose. Every equation in the
          book vanishes silently, with no indication anything was skipped.
        </p>
      </QuestionSection>

      <QuestionSection question="How does LoudReader actually read an equation?">
        <p>
          It parses the equation&apos;s MathML structure and walks it the way
          a person would read the math itself, following a set of rules based
          on ClearSpeak, one of the established rule sets behind screen-reader
          and accessibility math support (the other well-known one is
          MathSpeak). Specifically, LoudReader implements the &ldquo;how a
          person would actually say it out loud&rdquo; variant, not the more
          verbose form built for step-by-step navigation.
        </p>
        <p>Concretely, this covers:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Fractions.</strong> A simple
            one is spoken plainly, like &ldquo;one over two.&rdquo; A longer
            or nested one is spoken as &ldquo;the fraction with numerator...
            and denominator...&rdquo; so the boundary of each part stays
            audible.
          </li>
          <li>
            <strong className="text-gray-900">Roots.</strong> A square root
            becomes &ldquo;the square root of...&rdquo;, and an nth root
            becomes &ldquo;the [ordinal] root of...&rdquo;, like &ldquo;the
            cube root of.&rdquo;
          </li>
          <li>
            <strong className="text-gray-900">Exponents and subscripts.</strong>{" "}
            An exponent of 2 is spoken as &ldquo;squared&rdquo; and an
            exponent of 3 as &ldquo;cubed,&rdquo; matching how people
            actually talk. Any other exponent becomes &ldquo;to the power
            of,&rdquo; and a subscript becomes &ldquo;sub.&rdquo;
          </li>
          <li>
            <strong className="text-gray-900">Sums, products, and integrals with bounds.</strong>{" "}
            A summation with a lower and upper bound is read as &ldquo;from
            X to Y,&rdquo; keeping the range intact instead of dropping it.
          </li>
          <li>
            <strong className="text-gray-900">Operators, Greek letters, and symbols.</strong>{" "}
            Plus, minus, times, equals, the inequality signs, and common
            Greek letters and set symbols are each mapped to a spoken word,
            rather than left as unpronounceable characters.
          </li>
        </ul>
        <p>
          One more detail matters: if the book&apos;s own file already
          carries a publisher-written description of the equation, LoudReader
          uses that instead of generating its own. An author&apos;s or
          publisher&apos;s own phrasing beats a rule set every time it is
          available.
        </p>
      </QuestionSection>

      <QuestionSection question="Does the text on screen match what's spoken?">
        <p>
          Yes, and this is a deliberate trade-off rather than an accident.
          LoudReader&apos;s reading view does not render the book&apos;s raw
          HTML directly; it rebuilds each page from the sentences it is about
          to speak. That means showing the original MathML markup on screen
          would produce broken-looking tokens rather than a real equation, so
          instead the equation is replaced everywhere, on screen and in
          narration, with the same readable sentence: &ldquo;a squared plus b
          squared equals c squared.&rdquo; You are not looking at typeset
          math notation while it plays, you are reading the same words being
          spoken.
        </p>
      </QuestionSection>

      <QuestionSection question="What happens when an equation doesn't match a known rule?">
        <p>
          It falls back rather than fails. If part of an equation does not
          match any of the structural rules above, LoudReader falls back to
          reading the raw text content of that piece instead of skipping it
          silently or producing nothing at all. A less elegant reading still
          beats a missing one, and that is the design intent behind the
          fallback: completeness matters more than polish on the rare
          equation the rules don&apos;t fully cover.
        </p>
      </QuestionSection>

      <QuestionSection question="What are the real limits?">
        <p>
          Two, stated plainly. First, math speech is built out for English
          and Spanish; other languages LoudReader reads normally do not
          currently have the same equation rules behind them. Second, this
          works on real MathML markup, the structured math tags that EPUB
          books with STEM content typically carry, not on equations that
          exist only as pictures. If a math textbook is a scanned PDF, the
          equations are images, and there is no text for LoudReader, or any
          text-to-speech reader, to parse until that page has gone through
          OCR, which LoudReader does not do. The same limit applies to any{" "}
          <Link
            href="/blog/what-file-formats-can-be-read-aloud"
            className="text-loudBlue hover:underline"
          >
            image-only PDF
          </Link>
          , math or otherwise.
        </p>
        <p>
          For books and PDFs with real text and real MathML,{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          on Mac and iPhone reads them with natural offline voices, fully
          on-device and private, your library never leaves your device. A
          STEM textbook is exactly the kind of document you might not want
          leaving your machine in the first place.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Equations spoken as sentences, not symbols"
        subline="LoudReader reads MathML equations in EPUBs and PDFs the way a person would say them aloud, fully offline."
      />
    </ArticleLayout>
  );
}

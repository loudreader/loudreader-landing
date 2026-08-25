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

export default function CanTextToSpeechReadFootnotesArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Footnotes, tables, and headers are the parts of a book that were
          designed for a page, not a sentence, so a text-to-speech reader has
          to decide what to do with each one instead of just reading top to
          bottom. <strong>LoudReader</strong> strips the little reference
          number out of the sentence it interrupts, collects the note text as
          it goes, and reads every footnote in the book as a numbered
          &ldquo;Notes&rdquo; section once you reach the end, so nothing is
          skipped and nothing derails a sentence either. Ordinary data tables
          get removed rather than read cell by cell, because a grid read aloud
          is close to noise, though a table that is actually prose laid out in
          columns gets unwrapped and read as text. Chapter headers stay in for
          books and get stripped in web articles, because the same tag means
          two different things in each. The honest gap: a scanned, image-only
          PDF has no text to read at all until it has been through OCR, which
          LoudReader does not do.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Footnotes, tables, and headers each get handled differently, not deleted wholesale."
      />

      <QuestionSection question="What actually happens to footnotes?">
        <p>
          The naive approach is to read the little reference number exactly
          where it sits. Try that once and you hear why nobody ships it:
          &ldquo;the treaty was signed one in 1848&rdquo; is worse than
          useless, because the &ldquo;one&rdquo; sounds like part of the
          sentence, not a pointer to a note.
        </p>
        <p>
          LoudReader takes the reference marker out of the sentence entirely,
          whatever shape it takes: a superscript number, <code>[1]</code>,{" "}
          <code>(1)</code>, or a dagger symbol. At the same time, it reads the
          book&apos;s actual footnote list (the one an EPUB marks up as{" "}
          <code>epub:type=&quot;footnotes&quot;</code>) and keeps the note
          text rather than throwing it away. Those notes accumulate, chapter
          by chapter, and once the narration reaches the very end of the
          book, LoudReader appends everything it collected as a numbered
          &ldquo;Notes&rdquo; section and reads it. Every footnote in the book
          gets spoken, in order, exactly once. It just happens after the
          story, not in the middle of the sentence it was attached to.
        </p>
      </QuestionSection>

      <QuestionSection question="What happens to tables?">
        <p>
          Most tables in a book or PDF are genuinely tabular: rows of
          numbers, a comparison grid, a schedule. Reading that aloud cell by
          cell (&ldquo;row one, column one, twelve; column two, forty
          seven&rdquo;) turns structured information into noise, so
          LoudReader removes ordinary data tables from the spoken content by
          default rather than narrating them.
        </p>
        <p>
          There is one deliberate exception. Some books use table markup for
          layout, not data. A public-domain edition of a philosophical text
          might lay out numbered propositions in a two-column table purely to
          align them on the page. LoudReader checks whether a table looks
          like a handful of long cells (prose) rather than many short ones
          (data), and if it looks like prose, it unwraps the table into
          ordinary paragraphs and reads them, instead of silently deleting a
          chunk of the actual book.
        </p>
      </QuestionSection>

      <QuestionSection question="Do headers and running titles get read aloud?">
        <p>
          This is where a reader has to know the difference between a book
          and a web page, because the same HTML tag means different things in
          each. A <code>&lt;header&gt;</code> on a news site is almost always
          navigation and site furniture, the stuff you&apos;d want stripped
          before narration starts. A <code>&lt;header&gt;</code> inside a
          Standard Ebooks or Project Gutenberg book is often the chapter
          title itself, or, in a poetry collection, the poem&apos;s dateline.
          Stripping it there deletes real content, not clutter.
        </p>
        <p>
          LoudReader treats the two cases differently on purpose: web
          articles get header, footer, nav, and sidebar elements stripped as
          page furniture, while books keep them, because the chapter title
          living in that tag is exactly what you want spoken. The same
          distinction applies to license boilerplate at the front of a
          Project Gutenberg file, the release-date and permissions text that
          nobody wants read aloud before chapter one starts. That gets cut
          before playback begins.
        </p>
      </QuestionSection>

      <QuestionSection question="What about 'see page 12' or 'as shown in Figure 3.2'?">
        <p>
          Page numbers and figure references are written for a reader holding
          a physical book, and they mean nothing spoken aloud out of context.
          LoudReader rewrites phrases like &ldquo;as shown on page 12&rdquo;
          into something that still makes sense as audio, such as &ldquo;as
          mentioned earlier,&rdquo; but only in the spoken version of the
          sentence. What you see on screen, if you&apos;re following along
          with the highlighted text, is untouched: the printed page number
          stays exactly as the author wrote it. Only the audio gets adjusted
          for the fact that it has no page to point to.
        </p>
      </QuestionSection>

      <QuestionSection question="Why does this matter more for a textbook than a novel?">
        <p>
          A novel&apos;s occasional footnote is rarely load-bearing. A
          textbook, an annotated classic, or an academic PDF is a different
          case: the footnotes often carry citations, translator&apos;s notes,
          or clarifications you actually need to follow the argument. If a
          reader deletes footnote markers and never speaks the note text
          anywhere, you lose real content and have no way to know it
          happened, which is a much bigger problem than a slightly awkward
          reading. Getting interrupted mid-sentence by a citation number is
          also its own kind of cost if you&apos;re already working hard to
          hold a long sentence in your head, which is exactly the situation
          for a lot of readers who rely on text to speech in the first place.
          Moving the note to a Notes section at the end keeps the sentence
          intact and still gets you the citation.
        </p>
      </QuestionSection>

      <QuestionSection question="What does text to speech still get wrong or skip?">
        <p>
          Two honest limits are worth stating plainly, in line with how{" "}
          <Link
            href="/blog/what-file-formats-can-be-read-aloud"
            className="text-loudBlue hover:underline"
          >
            file-format support
          </Link>{" "}
          works generally. First, a scanned PDF, meaning one made of page
          images rather than a real text layer, has nothing for LoudReader or
          any text-to-speech reader to read until it has gone through OCR.
          LoudReader does not include an OCR step, so an image-only PDF stays
          silent. A PDF exported from Word, or one that already has a text
          layer, works normally. Second, tables that are genuinely data (a
          spreadsheet pasted into a report, a schedule with many columns) are
          skipped rather than mangled, on the theory that skipping a table you
          can still see on screen beats reading it as a wall of disconnected
          numbers.
        </p>
        <p>
          If you deal with dense academic PDFs specifically, the same
          filtering runs on{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          for Mac and iPhone, and the app is fully on-device and private,
          your library never leaves your device, so a paper you&apos;re
          annotating never has to go through anyone else&apos;s server to be
          read to you.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Footnotes read, not skipped"
        subline="LoudReader reads EPUBs and PDFs aloud, footnotes and all, fully on-device with natural offline voices."
      />
    </ArticleLayout>
  );
}

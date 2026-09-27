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
        LoudReader does not open a Markdown file directly. Render the
        document to EPUB or PDF, inspect the output, then import it. EPUB
        is a useful first choice for prose; PDF is convenient when your
        writing app already exports it. Render the Markdown rather than
        printing its source so headings and links become document content
        instead of punctuation. Keep the original file open for corrections:
        the listening copy does not sync back to your notes or repository.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="Render the prose, listen to a snapshot, and make changes in the source." />
      <QuestionSection question="What is the simplest conversion route?">
        <p>If your editor has a PDF or EPUB export, start there. Export
        from the rendered preview rather than the raw source. Choose a
        simple single-column layout and open the result to check that the
        text is present, especially around headings and lists.</p>
        <p>For a command-line route, Pandoc can create an EPUB:</p>
        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm"><code>pandoc draft.md -o draft.epub</code></pre>
        <p>Pandoc can also produce PDF, but its default PDF route requires
        a separate LaTeX engine. EPUB avoids that extra PDF dependency.
        See the <a href="https://pandoc.org/MANUAL.html" className="text-loudBlue hover:underline">Pandoc manual</a>{" "}
        for supported readers, writers and PDF engines.</p>
        <p>These are example conversion commands, not a claim that every
        Markdown extension has identical output. Notes using custom embeds,
        plugins or application-specific links may need that application’s
        own export.</p>
      </QuestionSection>
      <QuestionSection question="How do I turn the result into a listening draft?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Save the Markdown source and export a clearly named version.</li>
          <li>Inspect the EPUB or PDF for a missing section, raw markup or unwanted front matter.</li>
          <li>Import it into <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> and play a short passage.</li>
          <li>Keep the source file open. Pause and edit there when you notice a problem.</li>
          <li>Export again when you need to hear the revised version.</li>
        </ol>
        <p>LoudReader runs on iPhone and iPad, and as an iPad app on
        compatible Apple Silicon Macs. There is no live Markdown repository
        connection. If you keep several listening exports, include a date
        or version in the title so you do not review the wrong draft.</p>
      </QuestionSection>
      <QuestionSection question="What needs special handling in technical documentation?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Code:</strong> syntax and indentation have meaning that ordinary narration may not convey. Inspect code visually and run the relevant checks.</li>
          <li><strong>Tables:</strong> an EPUB table and a PDF’s flattened table can be handled differently. Do not rely on audio alone for row-to-column relationships.</li>
          <li><strong>Images:</strong> captions may be present, but alt text is not guaranteed to survive every export path. Put an essential explanation in ordinary prose.</li>
          <li><strong>Links:</strong> descriptive link text gives the listener more context than “here”. Keep the original document available to follow the destination.</li>
          <li><strong>Front matter:</strong> confirm that configuration fields have not appeared as paragraphs at the beginning.</li>
        </ul>
        <p>A document full of executable examples is not best reviewed
        entirely by ear. Listen to the explanations and transitions, then
        review the examples with the tools used to validate them.</p>
      </QuestionSection>
      <QuestionSection question="How can listening help with a prose draft?">
        <p>Choose one purpose for the pass: sentence rhythm, repeated
        explanations, unexplained terminology or transitions between
        sections. Mark the places you want to revisit rather than trying
        to repair every issue without pausing.</p>
        <p>A sentence can sound smooth and still contain a wrong number
        or broken link. Use listening alongside a visual pass and whatever
        technical checks the document needs. The <Link href="/blog/proofread-by-listening" className="text-loudBlue hover:underline">proofreading guide</Link>{" "}
        offers a broader review workflow, while <Link href="/blog/catch-typos-in-your-own-writing" className="text-loudBlue hover:underline">the typo-checking guide</Link>{" "}
        focuses on surface errors.</p>
      </QuestionSection>
      <QuestionSection question="Can unpublished notes stay local during narration?">
        <p>Rendering with local tools and using LoudReader’s local speech
        engine avoids uploading the document to a speech server for
        narration. Your editor’s sync settings and any file-transfer service
        are separate. LoudReader includes diagnostics and usage analytics,
        so this is not a promise of zero network activity.</p>
        <p>After import, try the chosen voice without a connection before
        planning an offline session. Keep the editable Markdown as your
        source of truth and remove unneeded exports when the review is done.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}

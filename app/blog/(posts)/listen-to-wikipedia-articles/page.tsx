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
        To listen to a Wikipedia article in LoudReader, try importing its
        URL first. A PDF from Wikipedia’s download tool or your browser is
        another route. Check the saved text before listening: infoboxes,
        reference lists and tables are not the same as continuous prose.
        Keep the original article open when a diagram or citation matters,
        and record the version or access date for research notes. Narration
        provides another way to read a source; it does not verify the
        source’s claims or replace its references.
      </p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Listen to the prose and keep the source available for figures and citations." />
      <QuestionSection question="How do I save a Wikipedia article for listening?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the article and copy its URL.</li>
          <li>Choose <strong>Paste a Link</strong> in <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, or share the link to the app.</li>
          <li>Compare the imported headings and final paragraph with the source.</li>
          <li>If the extraction is not useful, try Wikipedia’s Download as PDF tool or a browser PDF export, then import that file.</li>
        </ol>
        <p>Wikipedia’s <a href="https://en.wikipedia.org/wiki/Help:Download_as_PDF" className="text-loudBlue hover:underline">PDF download help</a>{" "}
        describes its export option. The location of the tool depends on
        the site layout; use the desktop view if the control is not visible
        in your mobile layout. Inspect the PDF instead of assuming every
        interactive element or large table is preserved.</p>
        <p>LoudReader runs on iPhone and iPad, and as an iPad app on compatible
        Apple Silicon Macs. See <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF listening on iPhone</Link>{" "}
        for the file-import workflow.</p>
      </QuestionSection>
      <QuestionSection question="What happens to citations, tables and infoboxes?">
        <p>The answer depends on the imported representation. Structured
        article HTML can identify a data table; a PDF can flatten the same
        table into lines whose relationships are harder to recover.
        LoudReader’s structured reader preserves data tables visually and
        excludes them from linear narration. A PDF may instead produce a
        sequence of labels and values.</p>
        <p>Common citation-number markers are filtered from speech, but
        that is not a guarantee that every reference format will disappear
        or that every source will be narrated usefully. Do not rely on
        hearing “[12]” to know which evidence supports a claim. Follow the
        actual reference in Wikipedia when you need it.</p>
        <p>For an infobox full of dates or measurements, inspect the original.
        A smoothly spoken sentence does not tell you whether a value belonged
        to the column beside it. Keep images, maps and equations as visual
        checks rather than expecting speech to reconstruct them.</p>
      </QuestionSection>
      <QuestionSection question="How can I use this for research without losing the source?">
        <p>Begin with a question you want the article to answer. Listen to
        the relevant section, write down what remains unclear, and follow
        the cited primary sources. Treat an overview as the beginning of
        research, not the final authority for a technical, medical or
        historical claim.</p>
        <p>Keep the article title, URL and access date with your notes. If
        version precision matters, use a permanent revision link from the
        article’s history. A saved reading copy does not automatically
        update when editors correct the live page.</p>
        <p>Listening while looking at a map or diagram is a practical way
        to keep the visual reference available. It is not a promise of
        better memory or comprehension; pause and check your understanding
        as you would with any other reading method.</p>
      </QuestionSection>
      <QuestionSection question="What if technical terms are pronounced strangely?">
        <p>Names, abbreviations and specialist vocabulary may not sound as
        expected. Compare the written term with what you heard, especially
        when a pronunciation changes the apparent meaning. Try a voice
        appropriate to the article’s language, but do not assume that a
        fluent delivery establishes technical accuracy.</p>
        <p>If you are preparing for an exam or presenting the material to
        others, verify the terminology from a subject-specific source. The
        listening copy is a convenience, not a pronunciation dictionary.</p>
      </QuestionSection>
      <QuestionSection question="Can I prepare a small offline study queue?">
        <p>Yes. Choose a few related articles, check their imports, and test
        your selected voice without a connection. Fetching new pages still
        needs internet access. Unlimited article saving is Premium after
        the free allowance.</p>
        <p>LoudReader generates speech on device, but also includes
        diagnostics and usage analytics. Keep that distinction in mind when
        choosing a workflow. For a broader collection of web sources, the{" "}
        <Link href="/blog/listen-to-rss-feeds-aloud" className="text-loudBlue hover:underline">RSS listening guide</Link>{" "}
        explains a manually selected article queue.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}

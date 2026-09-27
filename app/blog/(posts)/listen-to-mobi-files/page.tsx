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
        LoudReader does not import MOBI files directly. If you have an
        older DRM-free MOBI ebook, convert a copy to EPUB, inspect the
        result, then import it into LoudReader. calibre is one tool that
        supports that conversion. If your store already offers an EPUB,
        use it instead. A conversion does not remove DRM, and the MOBI
        extension alone does not tell you whether a file is protected.
        This guide is for an existing ebook collection, not for extracting
        arbitrary titles from a Kindle account.
      </p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Keep the original MOBI and check a converted EPUB before listening." />
      <QuestionSection question="What should I check before converting?">
        <p>First, return to the original download source. You may already
        have an EPUB alongside the MOBI, or the publisher may offer one now.
        That avoids another conversion and gives you a cleaner starting point
        if the old file has damaged formatting.</p>
        <p>Keep your original file unchanged. Work with a copy and make sure
        you know which book and edition it contains. A filename like
        <code> book-final.mobi</code> is not enough to identify a revised
        translation, an abridgement or a sample.</p>
        <p>If the file is protected or cannot be opened, do not assume
        conversion will solve it. LoudReader has no DRM-removal feature.</p>
      </QuestionSection>
      <QuestionSection question="How do I convert the file with calibre?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Add the DRM-free MOBI to calibre.</li>
          <li>Select it and choose <strong>Convert books</strong>.</li>
          <li>Set the output format to EPUB and run the conversion.</li>
          <li>Open the generated EPUB and inspect its chapter list and text.</li>
          <li>Save the EPUB where your listening device can access it, then import it into LoudReader.</li>
        </ol>
        <p>calibre lists MOBI as an input format and EPUB as an output in
        its <a href="https://manual.calibre-ebook.com/faq.html#what-formats-does-calibre-support-conversion-to-from" className="text-loudBlue hover:underline">format documentation</a>.
        Keep the first attempt simple; only change conversion settings in
        response to a problem you can actually see.</p>
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>{" "}
        runs on iPhone and iPad, and as an iPad app on compatible Apple
        Silicon Macs. Once the EPUB is imported, choose a voice and compare
        a spoken paragraph with the displayed text.</p>
      </QuestionSection>
      <QuestionSection question="What can go wrong in an older ebook conversion?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Repeated contents pages:</strong> check where the actual first chapter begins.</li>
          <li><strong>Missing breaks:</strong> a heading joined to a paragraph can produce an odd spoken transition.</li>
          <li><strong>Broken characters:</strong> unexpected symbols in the text will not be repaired merely by choosing another voice.</li>
          <li><strong>Complex material:</strong> tables, equations and footnotes need separate checks.</li>
        </ul>
        <p>Sample the beginning, a middle chapter and the end. If a defect
        appears in the converted EPUB before LoudReader sees it, fix the
        conversion or obtain a better source. If the EPUB looks correct
        but an imported passage differs, keep that example when reporting
        the problem.</p>
      </QuestionSection>
      <QuestionSection question="What about books in my Kindle account?">
        <p>Some purchased titles now offer publisher-enabled DRM-free EPUB
        or PDF downloads; others do not. Check the available options for
        the specific title. The separate <Link href="/blog/convert-kindle-books-to-audio" className="text-loudBlue hover:underline">Kindle listening guide</Link>{" "}
        explains the current download route and its limits.</p>
        <p>A file cached by the Kindle app is not automatically a portable
        ebook. Renaming it to EPUB does not convert it, and purchasing the
        title does not create an MP3 recording. Keep file access, conversion
        and narration as three separate questions.</p>
      </QuestionSection>
      <QuestionSection question="What should I expect from the listening result?">
        <p>This is generated speech from the imported text. A converted
        file will not acquire a performed cast of characters or editorial
        corrections. Preview the voice on your own material and decide
        whether it suits the book.</p>
        <p>LoudReader generates speech locally. Prepare the book and
        selected voice, then try playback without a connection before
        travelling. The <Link href="/read-epub-aloud-mac" className="text-loudBlue hover:underline">EPUB listening guide</Link>{" "}
        covers the supported Mac workflow. Keep the original ebook until
        you are satisfied with the conversion and import.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}

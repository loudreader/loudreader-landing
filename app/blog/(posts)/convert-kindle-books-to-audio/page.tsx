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
        Some Kindle purchases can be read in another app; others cannot. Start
        by checking whether Amazon offers an EPUB or PDF download for your
        particular book. Import an available, DRM-free file into LoudReader
        and it can generate speech locally. A book that only opens inside
        Kindle is a different case: LoudReader has no Kindle account connection
        and does not remove DRM. Buying an ebook also does not automatically
        give you an audiobook recording. This guide separates getting a
        usable text file from choosing how to listen to it.
      </p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="First check the available file. Then choose the listening app." />
      <QuestionSection question="What changed for Kindle downloads in 2026?">
        <p>Amazon now permits verified purchasers to download EPUB and PDF
        versions of books whose publishers have explicitly enabled DRM-free
        downloads. Borrowed Kindle Unlimited titles are excluded, and an
        older DRM-free title may still need its publisher to enable the option.
        Check the book in Manage Your Content and Devices; availability is
        specific to the title. See <a href="https://kdp.amazon.com/en_US/help/topic/GDDXGH9VR22ACM8U" className="text-loudBlue hover:underline">Amazon’s current DRM and download guidance</a>.</p>
        <p>This is why neither “every Kindle book is locked” nor “any Kindle
        book can be exported” is useful advice. Work from the download actually
        offered for your copy. You do not need a converter if you can already
        obtain a supported EPUB.</p>
      </QuestionSection>
      <QuestionSection question="How do I get a supported file into LoudReader?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Find the purchased title in your account and check its available download options.</li>
          <li>If EPUB is available, save that file. A text-based PDF is another supported option.</li>
          <li>Keep a copy of the original download, then use LoudReader’s file importer to add it.</li>
          <li>Check the opening paragraph and one later chapter before settling into the book.</li>
        </ol>
        <p>LoudReader runs on iPhone and iPad, and as an iPad app on compatible
        Apple Silicon Macs. Speech is generated on your device. Import and try
        the book with your chosen voice before relying on offline playback.
        The <Link href="/read-epub-aloud-mac" className="text-loudBlue hover:underline">EPUB listening guide</Link>{" "}
        covers the reader side of the workflow.</p>
      </QuestionSection>
      <QuestionSection question="What if I already have an older MOBI file?">
        <p>A DRM-free MOBI or AZW3 file can be converted to EPUB with calibre.
        Its <a href="https://manual.calibre-ebook.com/faq.html#what-formats-does-calibre-support-conversion-to-from" className="text-loudBlue hover:underline">supported-format list</a>{" "}
        covers both formats. Conversion changes the container; it does not
        grant access to an encrypted book. If the original publisher offers
        an EPUB, prefer that copy to converting an older download.</p>
        <p>For an existing collection, follow the separate <Link href="/blog/listen-to-mobi-files" className="text-loudBlue hover:underline">MOBI conversion walkthrough</Link>.
        Keep the original until you have checked chapter order, punctuation,
        and a passage containing any unusual formatting.</p>
      </QuestionSection>
      <QuestionSection question="What can I do when no usable file is available?">
        <p>Check the listening or accessibility options available in your
        Kindle app or device, or look for an authorised audiobook edition.
        Those routes keep the book within a service that can open it. This
        article does not promise that every Kindle title or device has the
        same read-aloud controls.</p>
        <p>Downloading a book for offline use inside Kindle is not the same
        as receiving a portable EPUB. Nor does changing a filename extension
        convert a protected file. If LoudReader reports a protected or
        unsupported book, return to the store’s available formats rather
        than repeatedly reimporting it.</p>
      </QuestionSection>
      <QuestionSection question="Will this create a narrated audiobook?">
        <p>The result here is in-app text-to-speech playback. It is not a
        purchase of a studio recording, and this workflow does not promise
        an MP3 export. A performed audiobook may be the better choice when
        you particularly want a narrator’s interpretation. TTS is useful
        when you want to hear the text in a supported ebook you already have.</p>
        <p>We make <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>.
        Try a sample of your own book before choosing a listening tool; voice
        preference and the quality of the source file matter more than a
        format label alone.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}

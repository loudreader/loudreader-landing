import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function ListenToMobiFilesArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          MOBI is an older Kindle ebook format, and it comes with a hard split.
          If your MOBI file has DRM (the digital lock Amazon puts on almost all
          its books), no text-to-speech app can open it, including{" "}
          <strong>LoudReader</strong>. If your MOBI file is DRM-free (public
          domain books, some self-published titles, ebooks from DRM-free
          publishers like Tor), the path is straightforward: convert the MOBI
          to EPUB with free software like Calibre, then import the EPUB into
          LoudReader on your iPhone or Mac. LoudReader reads the EPUB aloud
          with natural offline voices and remembers your place. It is fully
          on-device and private, your library never leaves your device, so you
          can listen offline without an account.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="MOBI to EPUB to audio. The conversion step is the only extra work."
      />

      <QuestionSection question="What is a MOBI file and where does it come from?">
        <p>
          MOBI was the native ebook format for early Amazon Kindle devices and
          apps. Amazon replaced MOBI with newer formats (AZW3, KFX) over the
          last decade, but you still encounter MOBI files if you have an old
          ebook collection, bought books from smaller ebook stores that used
          the format, or downloaded public domain books years ago. The format
          itself is a container for text and metadata, and on its own it is
          fine.
        </p>
        <p>
          The real issue is DRM. Most MOBI files from commercial sources are
          encrypted with Amazon&apos;s DRM, which ties the file to a specific
          Kindle device or account. No third-party app can open a DRM-locked
          MOBI file, and LoudReader is no exception.
        </p>
      </QuestionSection>

      <QuestionSection question="Which MOBI files can I actually listen to?">
        <p>
          DRM-free MOBI files. These come from a few specific places:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Project Gutenberg and other public domain collections.</strong>{" "}
            Many older Gutenberg downloads include a MOBI option alongside EPUB
            and plain text. These are DRM-free by definition.
          </li>
          <li>
            <strong className="text-gray-900">DRM-free publishers.</strong>{" "}
            Tor Books, Baen, and a growing number of smaller presses sell
            ebooks without DRM. If you bought a MOBI file from one of them, it
            converts cleanly.
          </li>
          <li>
            <strong className="text-gray-900">Self-published books.</strong>{" "}
            Authors who distribute their own ebooks often provide DRM-free
            MOBI files directly to readers.
          </li>
          <li>
            <strong className="text-gray-900">Calibre conversions you did yourself.</strong>{" "}
            If you previously converted a DRM-free ebook into MOBI for an old
            Kindle, you can convert it right back to EPUB.
          </li>
        </ul>
        <p>
          If you are not sure whether a file has DRM, try opening it in
          Calibre. If Calibre can load and display the text, the file is
          DRM-free and you can convert it.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I convert DRM-free MOBI to EPUB?">
        <p>
          The tool for this is Calibre, a free and open-source ebook manager
          that runs on Mac, Windows, and Linux. The workflow is quick:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Install Calibre and add your DRM-free MOBI file to its library.</li>
          <li>Select the book, then click <strong>Convert Books</strong>.</li>
          <li>
            In the output format dropdown, pick <strong>EPUB</strong>. The
            default conversion settings are fine for most books.
          </li>
          <li>Click OK. Calibre converts the file.</li>
          <li>
            Save the resulting EPUB to your iCloud Drive, Files app, or email
            it to yourself so you can open it on your iPhone or Mac.
          </li>
        </ol>
        <p>
          Once you have the EPUB, open it in{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          on your iPhone or Mac. The app imports it with one tap, and from
          that point the workflow is the same as any other book. Press play and
          it reads aloud with natural offline voices. If you want the full
          walkthrough from import to listening, see{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What about the Kindle books I already bought?">
        <p>
          This is the honest answer that most how-to guides skip: if you bought
          a book from the Kindle Store, it has DRM, and you cannot listen to it
          in LoudReader or any other text-to-speech app. Amazon encrypts Kindle
          books so they only open inside a Kindle app or on a Kindle device.
          LoudReader does not and will not break DRM.
        </p>
        <p>
          There is a narrow exception worth mentioning. Some Kindle books have
          the publisher&apos;s text-to-speech permission flag enabled, which
          lets the Kindle app itself read the book aloud through Accessibility
          features or Alexa. That is a feature of the Kindle ecosystem, not
          something a third-party app can do with the file. If listening to
          your Kindle library matters to you, check individual book pages on
          Amazon: they sometimes list whether text-to-speech is enabled for
          that title.
        </p>
        <p>
          If you own the book as a DRM-free EPUB from a different store, or if
          it is a public domain title, the conversion path above works and{" "}
          <Link
            href="/read-epub-aloud-mac"
            className="text-loudBlue hover:underline"
          >
            LoudReader reads EPUB aloud
          </Link>{" "}
          with no extra steps.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Import your DRM-free books and press play"
        subline="LoudReader reads EPUB and PDF aloud with natural offline voices. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}

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

export default function ConvertKindleBooksToAudioArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The honest answer: most Kindle books cannot be converted to audio
          with any third-party app because they have DRM, a digital lock that
          ties the file to the Kindle ecosystem. If you own DRM-free ebooks
          (from publishers like Tor, public domain sources, or self-published
          authors), the path works: convert the file to EPUB with free software
          like Calibre, then import into <strong>LoudReader</strong> on your
          iPhone or Mac. LoudReader reads the EPUB aloud with natural offline
          voices and remembers your place. It is fully on-device and private,
          your library never leaves your device. There is no Kindle
          integration, no DRM removal, and no magic workaround. The DRM wall is
          real, and this article does not pretend otherwise.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="DRM-free ebooks convert cleanly. DRM-locked ones stay locked. That is the honest split."
      />

      <QuestionSection question="Why can't I convert my Kindle books to audio?">
        <p>
          Because Amazon encrypts them. Every Kindle book you buy from the
          Amazon store is wrapped in DRM (Digital Rights Management) that
          restricts which apps and devices can open the file. The file itself
          lives on your Kindle or in your Kindle app, but you cannot open it
          in any other app, including LoudReader, Calibre, or any text-to-speech
          tool. This is not a technical limitation that an app could overcome
          with a clever update. It is a legal and cryptographic lock.
        </p>
        <p>
          Amazon does this for the same reason every ebook store does: to keep
          you inside their ecosystem. It is the same reason an Apple Books
          purchase does not open in Kindle, and vice versa. DRM is the
          furniture of the ebook business, and everyone who sells ebooks has
          to live with it.
        </p>
      </QuestionSection>

      <QuestionSection question="Which ebooks can I actually convert?">
        <p>
          DRM-free ebooks. Here is where you find them:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Tor Books.</strong> Tor, the
            largest science fiction and fantasy publisher, sells all its ebooks
            DRM-free across every store. If you bought a Tor ebook from Amazon,
            it downloads without DRM and can be converted.
          </li>
          <li>
            <strong className="text-gray-900">Project Gutenberg.</strong> Over
            70,000 public domain classics, all DRM-free. LoudReader has
            built-in access to the full Gutenberg catalog, so you do not even
            need to convert these. Just open the app and pick a book.
          </li>
          <li>
            <strong className="text-gray-900">Other DRM-free publishers.</strong>{" "}
            Baen Books, some academic presses, and a growing number of
            independent publishers sell DRM-free. Their store pages usually say
            so clearly.
          </li>
          <li>
            <strong className="text-gray-900">Self-published books.</strong>{" "}
            If you buy directly from an author, the file is almost always
            DRM-free. Authors who sell through their own websites typically
            send EPUB or PDF files that open anywhere.
          </li>
        </ul>
        <p>
          If you are not sure whether a file has DRM, the simplest test: try
          opening it in Calibre. If Calibre can load and display the text, the
          file is unlocked and you can convert it to EPUB.
        </p>
      </QuestionSection>

      <QuestionSection question="What is the Kindle app's built-in text-to-speech option?">
        <p>
          The Kindle app on iOS does not have its own text-to-speech button.
          What people are usually thinking of is one of two things:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">iOS Speak Screen.</strong> Go
            to Settings, Accessibility, Spoken Content, and enable Speak
            Screen. When a Kindle book is open, swipe down with two fingers
            from the top of the screen. iOS reads everything on screen aloud
            with the system voice, including page numbers and menu text. It
            works, it is free, and it sounds like a robot reading a book with
            the interface labels mixed in. Useful for a few pages, not for
            chapters.
          </li>
          <li>
            <strong className="text-gray-900">Alexa read-aloud.</strong> Some
            Kindle books support &quot;Alexa, read my book&quot; on Echo
            devices. The publisher has to enable this permission on the
            Amazon listing, and not all books have it. It reads with a
            standard Alexa voice, which is better than Speak Screen but still
            not a natural reading voice.
          </li>
        </ul>
        <p>
          Both options are limited to the Kindle ecosystem. Neither gives you a
          file you can take to another app.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I convert DRM-free ebooks for LoudReader?">
        <p>
          If you know your ebook is DRM-free, here is the path:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Download the ebook.</strong> If
            you bought it on Amazon, go to Your Content and Devices, find the
            book, and under More Actions pick Download and Transfer via USB.
            Amazon delivers a file you can open in Calibre. If you bought from
            another store that gives you EPUB directly, skip to step 3.
          </li>
          <li>
            <strong className="text-gray-900">Convert to EPUB if needed.</strong>{" "}
            Open Calibre, add the file, select it, click Convert Books, pick
            EPUB as the output format, and click OK. Calibre handles MOBI,
            AZW3, and several other formats.
          </li>
          <li>
            <strong className="text-gray-900">Import into LoudReader.</strong>{" "}
            Open the EPUB in LoudReader on your iPhone or Mac. The app reads
            the book aloud with natural offline voices, remembers your place,
            and works with the screen locked.{" "}
            <Link
              href="/turn-any-book-into-an-audiobook"
              className="text-loudBlue hover:underline"
            >
              Full instructions for the import and playback setup
            </Link>{" "}
            are on the money page.
          </li>
        </ol>
        <p>
          If this all sounds like a lot of steps, it is because of DRM, not
          because of LoudReader. When the file is DRM-free, the conversion is a
          single click in Calibre and the import is a single tap in LoudReader.
          The friction comes from the lock, not from the tools.
        </p>
      </QuestionSection>

      <QuestionSection question="Is a TTS reading any good compared to a real audiobook?">
        <p>
          They are different products for different needs, and neither replaces
          the other:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Human-narrated audiobooks</strong>{" "}
            are performances. A skilled narrator does character voices, paces
            the drama, and interprets the text the way an actor interprets a
            script. For fiction, especially dialogue-heavy fiction, this
            matters a lot. The cost reflects the production.
          </li>
          <li>
            <strong className="text-gray-900">Text-to-speech readings</strong>{" "}
            are clear, consistent, and work for any DRM-free book that exists
            in text form. The voices are natural and pleasant enough for hours
            of listening, but they do not perform. For non-fiction, technical
            books, essays, and reference material, this is often fine, and
            sometimes preferable because the delivery is neutral.
          </li>
        </ul>
        <p>
          If a book has a great human recording, buy it. If it does not, or if
          you already own the ebook, TTS turns your reading list into a
          listening list.{" "}
          <Link
            href="/read-epub-aloud-mac"
            className="text-loudBlue hover:underline"
          >
            LoudReader reads EPUB aloud on Mac
          </Link>{" "}
          the same way it does on iPhone.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Read your DRM-free ebooks aloud"
        subline="Import EPUBs into LoudReader and press play. Natural offline voices, no account, fully private."
      />
    </ArticleLayout>
  );
}

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

export default function CanIListenToEbooksIAlreadyOwnArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The honest answer up front: it depends on where the ebook came from,
          not on the app you use. If the file is <strong>DRM-free</strong>, an
          EPUB or PDF you actually hold with no copy protection wrapped around
          it, <strong>LoudReader</strong> reads it aloud with{" "}
          natural offline voices, fully on-device and private, your library
          never leaves your device. If it&apos;s a purchase from the Kindle
          Store, most Kobo purchases, most Apple Books purchases, or a library
          loan through Libby, it&apos;s almost certainly locked with DRM, and
          no reading app, LoudReader included, can open a DRM-locked file. The
          quick way to check any file: try opening it in Calibre (free). If
          Calibre shows the text, it&apos;s DRM-free and LoudReader can read
          it. If Calibre balks, it&apos;s locked, and the fix is finding or
          buying that title DRM-free, not breaking the lock.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="DRM-free means the file is actually yours to open anywhere."
      />

      <QuestionSection question="Why can't every app just read any ebook you own?">
        <p>
          Because owning an ebook and owning the file are two different
          things. When you buy a book from the Kindle Store, Kobo, or Apple
          Books, you&apos;re usually buying a license to read it inside that
          store&apos;s own app, and the file itself is encrypted (DRM) so
          nothing else can open it. That&apos;s a deliberate design by the
          seller, not a technical accident, and it means the file works in one
          place: the app tied to the store you bought it from. LoudReader has
          no code anywhere in the app that breaks that encryption, and it
          never will. Bypassing DRM you don&apos;t have explicit permission to
          bypass raises real legal questions depending on where you live, and
          that&apos;s not a line worth quietly crossing on a reader&apos;s
          behalf.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you actually check if a file is DRM-free?">
        <p>
          Open it in <strong className="text-gray-900">Calibre</strong>, a
          free, open-source ebook manager. If Calibre can display the
          book&apos;s text, the file has no DRM and you&apos;re free to
          convert or move it as you like. If Calibre refuses to open it, or
          shows an error about encryption, the file is locked. That single
          test tells you more than guessing from where you bought it, because
          the same store sells some titles with DRM and some without.
        </p>
        <p>
          As a rough guide: anything downloaded as a plain .epub straight from
          a publisher&apos;s own site, from{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            Project Gutenberg
          </Link>
          , or from a store that advertises DRM-free sales (Tor Books and Baen
          are the best-known examples) is very likely clean. Anything
          downloaded through the Kindle app, the Kobo app, or most library
          loan apps is very likely locked.
        </p>
      </QuestionSection>

      <QuestionSection question="What ebooks am I likely to already own that will work?">
        <p>
          More than you&apos;d guess. Public-domain classics are DRM-free by
          definition, and LoudReader has{" "}
          <strong className="text-gray-900">70,000+ Project Gutenberg</strong>{" "}
          books built in already, no import needed at all. If you write, your
          own manuscripts and drafts are obviously yours to import and hear
          read back, which is one of the more common reasons people reach for
          a reader like this in the first place. Self-published books bought
          directly from an author&apos;s own site are usually DRM-free too.
          Once a file passes the Calibre check, importing it into LoudReader
          works exactly like{" "}
          <Link
            href="/blog/what-file-formats-can-be-read-aloud"
            className="text-loudBlue hover:underline"
          >
            any other EPUB or PDF
          </Link>
          : import it, press play.
        </p>
      </QuestionSection>

      <QuestionSection question="What if the specific ebook I own turns out to be locked?">
        <p>
          You have a few real options, none of which involve breaking the
          lock. Check whether the same title exists DRM-free from the
          publisher directly, common for older backlist titles and anything
          public domain. Check the store&apos;s own app for a built-in
          accessibility or read-aloud feature, several already have one; on
          iOS, the system-wide Speak Screen accessibility feature also works
          inside any app, including a locked Kindle book, though it reads
          everything on screen rather than just the book text. Or accept that
          this particular title calls for an actual audiobook, a fundamentally
          different, professionally narrated product, through a service like
          Audible or your library.
        </p>
        <p>
          If your library book was borrowed through a DRM system like Adobe
          DRM (the one Libby uses), the same limit applies, and it&apos;s
          worth knowing before you spend time hunting for a workaround: the
          full mechanics are covered in{" "}
          <Link
            href="/blog/convert-kindle-books-to-audio"
            className="text-loudBlue hover:underline"
          >
            converting Kindle books to audio
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try it on a DRM-free ebook you own"
        subline="Import the file, or start with a Gutenberg classic already in the app. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}

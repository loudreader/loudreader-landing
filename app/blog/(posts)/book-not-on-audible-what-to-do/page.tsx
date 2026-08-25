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

export default function BookNotOnAudibleArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          A book missing from Audible almost always means nobody has recorded
          and licensed an audio edition of it, not that anything is wrong with
          the book. Audible's catalog runs on licensing deals with publishers,
          and most backlist titles, self-published books, academic texts, and
          public-domain classics never get one. Two honest workarounds exist.
          Check a library app like Libby for a recording somebody else already
          made, or turn the book you already have into an audiobook yourself.{" "}
          <strong>LoudReader</strong> reads any DRM-free EPUB or PDF aloud with{" "}
          natural offline voices, fully on-device and private, your library
          never leaves your device. It also has 70,000+ Project Gutenberg
          classics built in for free, browsable at{" "}
          <Link href="/listen" className="text-loudBlue hover:underline">
            /listen
          </Link>
          . If your missing title is a public-domain classic, there's a good
          chance it's already there.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="No audiobook edition yet? Your ebook can become one."
      />

      <QuestionSection question="Why isn't the book you want on Audible?">
        <p>
          Audible is a commercial catalog, and every title on it exists
          because a publisher paid to record it and license the recording.
          That is a real cost and a real bet, so publishers make it selectively.
          Bestsellers and backlist classics with proven demand get recorded.
          Most other books, the long tail of self-published novels, academic
          and technical books, niche non-fiction, out-of-print titles, and
          older public-domain works, don't clear that bar. The book existing
          and the book being commercially worth narrating are two different
          things, and the gap between them is enormous.
        </p>
        <p>
          There is no reader-facing way to request a title on Audible. Whether
          a book gets recorded depends on a publisher's decision, not on how
          many people want to listen to it.
        </p>
      </QuestionSection>

      <QuestionSection question="What should you actually do when a book isn't there?">
        <p>Three real options, roughly in the order worth trying:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Check a library app.</strong>{" "}
            Libby and Hoopla borrow audiobooks free with a library card, and
            their catalogs overlap with Audible's less than you'd expect. A
            title Audible skipped sometimes has a library recording anyway.
          </li>
          <li>
            <strong className="text-gray-900">Check LibriVox, for public domain.</strong>{" "}
            If the book is old enough to be public domain, LibriVox has
            volunteer-narrated recordings of thousands of classics, free.
            Quality varies by volunteer, but it's a real audiobook made by a
            person.
          </li>
          <li>
            <strong className="text-gray-900">Read the ebook aloud yourself.</strong>{" "}
            If you already own the book as a DRM-free EPUB or PDF, or it's
            public domain, a text-to-speech reader turns the file itself into
            listenable audio. This is the option that works for{" "}
            <em>any</em> book, because it doesn't depend on someone else
            having recorded it first.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="How does turning an ebook into an audiobook actually work?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          reads any DRM-free EPUB or PDF aloud with natural offline voices.
          There's no conversion step and no separate audio file to download:
          you import the book, press play, and it starts narrating right
          there. It highlights each word as it reads and remembers your exact
          spot, so the file behaves like an audiobook from the first page.
          The full walkthrough, including how imports work, is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
        <p>
          The catch is DRM. A book still locked to a specific reader app, like
          a DRM-protected Kindle title, can't be opened by any outside tool,
          LoudReader included. This works for files you already have as plain
          EPUB or PDF: self-published books, manuscripts, review copies, and
          any ebook store that ships DRM-free files.
        </p>
      </QuestionSection>

      <QuestionSection question="What if the missing book is a classic?">
        <p>
          This is the easy case. LoudReader has 70,000+ Project Gutenberg
          books built in, browsable by title at{" "}
          <Link href="/listen" className="text-loudBlue hover:underline">
            /listen
          </Link>
          . These are public-domain classics that never needed a licensing
          deal in the first place, and Audible's gaps in this category are
          often just books nobody bothered to record commercially. Search the
          catalog before assuming a classic isn't available anywhere.
        </p>
      </QuestionSection>

      <QuestionSection question="Is a synthetic narration as good as a real audiobook narrator?">
        <p>
          Honestly, not always. A skilled human narrator doing distinct
          character voices and pacing a thriller for tension is doing
          something a text-to-speech voice isn't trying to replicate. For a
          book you're excited about and willing to wait or pay for, a
          performed audiobook can be worth it.
        </p>
        <p>
          But that comparison only matters for the small slice of books that
          get performed at all. For the much larger pile that will never be
          recorded, natural offline voices reading the real text is the
          difference between listening to the book this week and never
          listening to it.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Stop waiting for the audiobook that might never come"
        subline="Import any DRM-free EPUB or PDF, or browse 70,000+ free classics. No account."
      />
    </ArticleLayout>
  );
}

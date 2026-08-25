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

export default function BrothersKaramazovAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The Brothers Karamazov is public domain, so a free audiobook of it
          already exists, you just have to generate it. <strong>LoudReader</strong>{" "}
          (native Mac and iPhone apps) reads the full Constance Garnett
          translation aloud with a natural offline voice, free, with no word
          limit and no time trial. One honest note up front: this is a
          synthetic voice reading Dostoyevsky&apos;s text on your device, not
          a professional actor&apos;s performance. It runs about 38 hours,
          based on the novel&apos;s roughly 340,000 words. Open the{" "}
          <Link
            href="/listen/the-brothers-karamazov"
            className="text-loudBlue hover:underline"
          >
            The Brothers Karamazov catalog page
          </Link>{" "}
          to hear a sample first, then get the app, import the book (it&apos;s
          already built into LoudReader&apos;s Gutenberg catalog), and press
          play.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="A public-domain text becomes a spoken audiobook, on your device."
      />

      <QuestionSection question="Where can you actually listen to The Brothers Karamazov for free?">
        <p>
          Fyodor Dostoyevsky died in 1881, which means the novel has been out
          of copyright for well over a century. Project Gutenberg carries the
          Constance Garnett translation as ebook #28054, and that same text is
          what most free digital editions of the book use. The gap is that a
          Gutenberg text file is silent. Someone still has to read it to you.
        </p>
        <p>
          That&apos;s what{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          does. The book is already in the app&apos;s built-in library of
          70,000+ free Gutenberg titles, so there&apos;s no file to hunt down
          and no conversion step. You open the app, find The Brothers
          Karamazov, and press play. You can hear what the voice actually
          sounds like first on the{" "}
          <Link
            href="/listen/the-brothers-karamazov"
            className="text-loudBlue hover:underline"
          >
            The Brothers Karamazov page
          </Link>
          , which has a rendered sample.
        </p>
      </QuestionSection>

      <QuestionSection question="Is it a real narrator, or a robot voice?">
        <p>
          Neither word is quite right, so here&apos;s the honest answer.
          LoudReader&apos;s voices are synthetic, not recordings of a human
          actor, but they aren&apos;t the flat, choppy text-to-speech you
          might remember from a decade ago either. They&apos;re{" "}
          {"natural offline voices"}, generated live on your device as you
          listen, with no separate audio files to download or manage.
        </p>
        <p>
          What that means for a 900-page novel like this one: you get a
          single, consistent narrator reading Dmitri&apos;s outbursts, Ivan&apos;s
          arguments, and Father Zosima&apos;s sermons in the same voice,
          because that&apos;s how text-to-speech works. It&apos;s not doing
          separate character voices. If a full-cast dramatization matters to
          you more than getting the whole book read for free right now, a
          commercial audiobook edition will do that and this won&apos;t. What
          LoudReader gives you instead is the complete, unabridged text,
          narrated on demand, at no cost.
        </p>
      </QuestionSection>

      <QuestionSection question="How long is the listen, and how do you get through it?">
        <p>
          The Brothers Karamazov runs about 38 hours as audio, an estimate
          based on its roughly 340,000 words. That puts it among the longest
          books most people ever listen to, well past most audiobook
          runtimes and closer to binging a full drama series. Realistically,
          you&apos;re listening over weeks, not a weekend.
        </p>
        <p>
          A few things make that easier. LoudReader remembers your exact
          place in the book, so picking it back up after a few days off costs
          nothing. Word-by-word highlighting tracks along as it reads, which
          helps during the novel&apos;s densest passages, the courtroom
          scenes and the Grand Inquisitor chapter especially, where losing
          the thread for a sentence can cost you a paragraph of argument.
          And Premium adds speed control from 0.3x to 3.0x, so once you&apos;re
          used to the voice you can push the pace on the parts that read
          slower than they need to.
        </p>
      </QuestionSection>

      <QuestionSection question="What do you need to start listening right now?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Get{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>
            . It&apos;s free, with no account required.
          </li>
          <li>
            Open the built-in Gutenberg catalog inside the app and search for
            The Brothers Karamazov. No file to download, no conversion.
          </li>
          <li>
            Press play. The app is {" "}
            {"fully on-device and private, your library never leaves your device"},
            so the whole 38 hours plays without needing a connection once
            the book is loaded.
          </li>
          <li>
            If you already own a different translation as an EPUB or PDF,
            import that instead. LoudReader reads any DRM-free file you give
            it, not just the built-in catalog. The full walkthrough is in{" "}
            <Link
              href="/turn-any-book-into-an-audiobook"
              className="text-loudBlue hover:underline"
            >
              how to turn any book into an audiobook
            </Link>
            .
          </li>
        </ol>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start The Brothers Karamazov tonight"
        subline="It's already in LoudReader's free Gutenberg library. Import nothing, just press play."
      />
    </ArticleLayout>
  );
}

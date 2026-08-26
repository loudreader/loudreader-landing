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

export default function WutheringHeightsAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Wuthering Heights is public domain, so a free audiobook always
          exists and you can be listening in a couple of minutes. The honest
          tradeoff is that the fast free option is a synthetic voice reading
          Emily Bronte&apos;s actual text, not a performed audiobook with a
          trained human narrator. <strong>LoudReader</strong> (iPhone, iPad, and Mac) already has Wuthering Heights in its 70,000+
          Project Gutenberg catalog, so there&apos;s no file to hunt down or
          convert. Open the book, press play, and it reads aloud with natural
          offline voices, free with unlimited listening and no account.
          Before you install anything, hear a real rendered sample on the{" "}
          <Link
            href="/listen/wuthering-heights"
            className="text-loudBlue hover:underline"
          >
            Wuthering Heights catalog page
          </Link>
          .
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Wuthering Heights, read aloud from the Gutenberg text."
      />

      <QuestionSection question="Is there a free Wuthering Heights audiobook?">
        <p>
          Yes, and it&apos;s a straightforward yes. Emily Bronte published
          Wuthering Heights in 1847, and its copyright expired long ago, so
          the full text sits in the public domain everywhere. Project
          Gutenberg hosts it free, and a text-to-speech app can read that
          exact text aloud without licensing anything from anyone.
        </p>
        <p>
          That&apos;s a different situation than hunting down a pirated copy
          of a commercial recording, which is the usual shortcut people mean
          by &ldquo;free audiobook.&rdquo; Wuthering Heights doesn&apos;t need
          it. The text is genuinely, permanently free to read aloud, in full.
        </p>
      </QuestionSection>

      <QuestionSection question="What does a free Wuthering Heights audiobook actually sound like?">
        <p>
          It&apos;s a synthetic voice reading the real Gutenberg text, not a
          performed recording by a professional narrator. LoudReader&apos;s
          voices are natural offline voices, not the flat, robotic
          text-to-speech you might remember from years ago, and they get
          through the novel&apos;s shifting narrators, Lockwood&apos;s
          framing chapters and Nelly Dean&apos;s long retelling, without
          losing the thread. What it doesn&apos;t do is act the dialogue the
          way a trained narrator would, shifting for Heathcliff&apos;s
          bitterness or Catherine&apos;s restlessness. It reads what&apos;s
          on the page, clearly and consistently.
        </p>
        <p>
          You can check that for yourself before deciding anything. The{" "}
          <Link
            href="/listen/wuthering-heights"
            className="text-loudBlue hover:underline"
          >
            Wuthering Heights catalog page
          </Link>{" "}
          plays a short rendered sample of the opening right in your browser,
          no install required.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I listen to Wuthering Heights free right now?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Play the sample on the{" "}
            <Link
              href="/listen/wuthering-heights"
              className="text-loudBlue hover:underline"
            >
              Wuthering Heights catalog page
            </Link>{" "}
            to hear the voice.
          </li>
          <li>
            Download{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            on your Mac or iPhone. Free, no account.
          </li>
          <li>
            Open the built-in Gutenberg catalog and search for Wuthering
            Heights. It&apos;s already there, nothing to import.
          </li>
          <li>
            Press play. The current sentence and word highlight as it reads,
            and your place saves automatically if you stop partway through a
            chapter.
          </li>
        </ol>
        <p>
          If you already own a specific edition as an EPUB or PDF, you can
          import that instead, but with the book built into the catalog,
          most readers won&apos;t need to.
        </p>
      </QuestionSection>

      <QuestionSection question="What if you want a human narrator instead?">
        <p>
          Fair preference. <Link href="/blog/librivox-alternative" className="text-loudBlue hover:underline">LibriVox</Link> has volunteer-read, human-narrated
          recordings of Wuthering Heights free as MP3 downloads. Reader
          quality varies since anyone can volunteer, but it&apos;s a real
          human performance, and LoudReader isn&apos;t trying to replace
          that. What it offers instead is instant access to any of the
          70,000+ Gutenberg titles, not only the ones that happened to get a
          volunteer recording, plus word-by-word highlighting and offline
          playback on the same book.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start Wuthering Heights in under a minute"
        subline="It's already in the built-in Gutenberg catalog. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}

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

export default function CrimeAndPunishmentAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Crime and Punishment is public domain, so a free audiobook always
          exists and you can start it in a couple of minutes. One honest
          note up front: the fast free option is a synthetic voice reading
          Dostoyevsky&apos;s actual text, not a performed audiobook with a
          trained human narrator. <strong>LoudReader</strong> (native Mac and
          iPhone apps) already has Crime and Punishment in its 70,000+ Project
          Gutenberg catalog, so there&apos;s no file to hunt down or convert.
          Open the book, press play, and it reads aloud with natural offline
          voices, free with unlimited listening and no account. Before you
          install anything, you can hear a real rendered sample on the{" "}
          <Link
            href="/listen/crime-and-punishment"
            className="text-loudBlue hover:underline"
          >
            Crime and Punishment catalog page
          </Link>
          .
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Crime and Punishment, read aloud from the Gutenberg text."
      />

      <QuestionSection question="Is there a free Crime and Punishment audiobook?">
        <p>
          Yes, and there&apos;s no gray area about it. Fyodor Dostoyevsky
          published Crime and Punishment in 1866, and its copyright expired
          long ago, so the English text sits in the public domain everywhere.
          Project Gutenberg hosts it free, and a text-to-speech app can read
          that exact text aloud without licensing anything from anyone.
        </p>
        <p>
          That&apos;s a different situation than hunting down a pirated copy
          of a commercial audiobook, which is the usual shortcut people mean
          when they search for a free audiobook. Crime and Punishment
          doesn&apos;t need that shortcut. The text is genuinely, permanently
          free to read aloud, in full.
        </p>
      </QuestionSection>

      <QuestionSection question="What does a free Crime and Punishment audiobook actually sound like?">
        <p>
          It&apos;s a synthetic voice reading the real Gutenberg text, not a
          performed recording by a professional narrator, and that&apos;s
          worth knowing before you press play. LoudReader&apos;s voices are
          natural offline voices, not the flat, robotic text-to-speech you
          might remember from years ago, and they get through
          Dostoyevsky&apos;s long interior monologues and dense paragraphs
          without losing the thread. What it doesn&apos;t do is act the
          dialogue the way a trained narrator would, shifting between
          Raskolnikov&apos;s spiraling thoughts and Porfiry&apos;s calm
          interrogation. It reads what&apos;s on the page, clearly and
          consistently.
        </p>
        <p>
          You can check that for yourself before deciding anything. The{" "}
          <Link
            href="/listen/crime-and-punishment"
            className="text-loudBlue hover:underline"
          >
            Crime and Punishment catalog page
          </Link>{" "}
          plays a short rendered sample of the opening right in your browser,
          no install required.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I listen to Crime and Punishment free right now?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Play the sample on the{" "}
            <Link
              href="/listen/crime-and-punishment"
              className="text-loudBlue hover:underline"
            >
              Crime and Punishment catalog page
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
            Open the built-in Gutenberg catalog and search for Crime and
            Punishment. It&apos;s already there, nothing to import.
          </li>
          <li>
            Press play. The current sentence and word highlight as it reads,
            and your place saves automatically if you stop partway through a
            chapter.
          </li>
        </ol>
        <p>
          If you already own a specific translation as an EPUB or PDF, you
          can import that instead, but with the book built into the catalog,
          most readers won&apos;t need to.
        </p>
      </QuestionSection>

      <QuestionSection question="What if you want a human narrator instead?">
        <p>
          That&apos;s a fair preference. <Link href="/blog/librivox-alternative" className="text-loudBlue hover:underline">LibriVox</Link> has volunteer-read,
          human-narrated recordings of Crime and Punishment free as MP3
          downloads, and reader quality varies since anyone can volunteer,
          but it&apos;s a real human performance. LoudReader isn&apos;t
          trying to replace that. What it offers instead is instant access
          to any of the 70,000+ Gutenberg titles, not only the ones that
          happened to get a volunteer recording, plus word-by-word
          highlighting and offline playback on the same book.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start Crime and Punishment in under a minute"
        subline="It's already in the built-in Gutenberg catalog. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}

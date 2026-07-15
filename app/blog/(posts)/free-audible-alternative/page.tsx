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

export default function FreeAudibleAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          There are three genuinely free alternatives to Audible, and they
          cover different situations. <strong>Library apps</strong> (Libby,
          Hoopla) lend professionally narrated audiobooks free with a library
          card. <strong>LibriVox</strong> offers 20,000+ volunteer-read
          recordings of public-domain classics. And{" "}
          <strong>LoudReader</strong> covers everything else: it turns any
          DRM-free EPUB or PDF you already own into an audiobook with natural
          offline voices (unlimited listening, no credits, no subscription, no
          account), and ships with 70,000+ free Project Gutenberg classics
          built in. It&apos;s fully on-device and private, your library never
          leaves your device. The honest catch: none of these gets you
          Audible&apos;s catalog. DRM-locked purchases stay locked, and a
          great human narrator is still a performance TTS doesn&apos;t
          replace.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="The books you already own are the free audiobook catalog nobody talks about."
      />

      <QuestionSection question="What are the genuinely free alternatives to Audible?">
        <p>
          Skip the listicles padded with free trials. If &quot;free&quot;
          means <em>actually free</em>, there are three routes, and each is
          best at something different:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">
              Library apps (Libby, Hoopla).
            </strong>{" "}
            Borrow real, professionally narrated audiobooks free with a
            library card. The catalog depends on your library system and
            popular titles often have waiting lists. But when the book you
            want is available, this is the best free listening there is.
          </li>
          <li>
            <strong className="text-gray-900">LibriVox.</strong> Over 20,000
            volunteer-read recordings of public-domain books, free to
            download and keep. Narration quality varies recording to
            recording. It&apos;s a volunteer project and proud of it.
          </li>
          <li>
            <strong className="text-gray-900">LoudReader.</strong> A
            different idea entirely: instead of finding a recording, it reads
            the book itself. Import any DRM-free EPUB or PDF and natural
            offline voices narrate it in real time, with word-by-word
            highlighting. Free means unlimited listening on every book, cover
            to cover, with no credits and no monthly cap.
          </li>
        </ul>
        <p>
          These complement each other. Use the library for new bestsellers,
          LibriVox when you want a human voice on a classic, and{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          for every book that has no audiobook edition at all.
        </p>
      </QuestionSection>

      <QuestionSection question="Why are audiobooks so expensive?">
        <p>
          Because every commercial audiobook is a produced recording. A
          narrator performs the entire book in a studio, and each finished
          hour of audio carries more hours of recording, editing, and
          proofing behind it. A long novel is a serious production, and the
          price reflects that. Audiobooks are expensive for the same reason
          films are more expensive to make than scripts.
        </p>
        <p>
          That economics also explains the gap free listeners keep hitting:
          publishers only record books they expect to sell. Backlist titles,
          technical books, niche non-fiction, self-published novels, and most
          public-domain classics never get a recording. No store can sell you
          an audiobook that was never made. That is exactly the gap
          text-to-speech fills, by generating the narration from the text
          instead of waiting for a production.
        </p>
      </QuestionSection>

      <QuestionSection question="How does LoudReader turn books you already own into audiobooks?">
        <p>
          LoudReader is one of the few{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            native Mac and iPhone apps
          </Link>{" "}
          built around this idea: import the file, press play. There&apos;s no
          conversion step and no audio files to manage. The narration is
          generated live on your device by natural offline voices, each word
          highlighted as it&apos;s read, your place remembered across sessions.
          Because everything runs locally, it&apos;s fully on-device and
          private, your library never leaves your device, and playback works in
          airplane mode.
        </p>
        <p>
          You have two free sources of books: any DRM-free EPUB or PDF you
          already own (shared from Files, Safari, or Mail), and the built-in
          Project Gutenberg catalog of 70,000+ public-domain classics. Browse
          by genre, download, listen. The step-by-step walkthrough is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What can't a free Audible alternative do?">
        <p>The honest limits, so you know them before you switch:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">
              No Audible or Kindle catalog.
            </strong>{" "}
            DRM-locked purchases can only be opened by the store that sold
            them. LoudReader can&apos;t import them, and neither can any other
            legitimate reader.
          </li>
          <li>
            <strong className="text-gray-900">
              A human narrator is still a performance.
            </strong>{" "}
            Modern neural voices are natural enough to disappear into the
            story, but if a professional recording of your book exists and
            narration-as-art matters to you, buy it.
          </li>
          <li>
            <strong className="text-gray-900">
              Some LoudReader features are Premium.
            </strong>{" "}
            The free tier is unlimited listening with the default voice
            (every voice is free for your first 8 hours). All 8 AI voices,
            playback speed control, the sleep timer, ambient soundscapes, and
            notes &amp; highlights are Premium. Details are on the{" "}
            <Link href="/faq" className="text-loudBlue hover:underline">
              FAQ page
            </Link>
            .
          </li>
        </ul>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your bookshelf is already an audiobook library"
        subline="Import any EPUB or PDF, or pick from 70,000+ free classics. Unlimited listening, no credits, no account."
      />
    </ArticleLayout>
  );
}

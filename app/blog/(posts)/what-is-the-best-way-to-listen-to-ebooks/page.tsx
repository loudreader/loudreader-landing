import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function WhatIsTheBestWayToListenToEbooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          There are three routes to listening to ebooks, and they serve
          different needs. Official audiobooks (Audible, Apple Books, Libby)
          give you professional human narration but only for books that got a
          recording. Text-to-speech apps like <strong>LoudReader</strong>{" "}
          (native Mac and iPhone apps) turn any DRM-free EPUB or PDF into an
          audiobook instantly with natural offline voices, fully on-device and
          private, your library never leaves your device. Built-in system
          tools (Spoken Content on Mac and iPhone) are free and basic but lack
          book-specific features like place-saving and word highlighting. The
          best way depends on what books you have and what you value most:
          performance quality, universality, or cost.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="Three routes to audio: official recordings, TTS apps, and built-in tools."
      />

      <QuestionSection question="What are my options for listening to ebooks?">
        <p>
          Three categories, each with different trade-offs:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Official audiobooks.</strong>{" "}
            Professionally recorded human narration, sold through stores like
            Audible and Apple Books or borrowed through library apps like Libby
            and Hoopla. Best quality by far, but only available for a fraction
            of all books, and you pay per book or through a subscription.
          </li>
          <li>
            <strong className="text-gray-900">Text-to-speech apps.</strong>{" "}
            Apps that read any text aloud using AI voices. Works on any
            DRM-free EPUB or PDF you own. No recording needs to exist. Quality
            is good enough for hours of listening, especially for non-fiction.
            Free options exist (LoudReader's unlimited free tier), with premium
            voices and features available for a subscription or one-time
            purchase.
          </li>
          <li>
            <strong className="text-gray-900">Built-in system tools.</strong>{" "}
            macOS and iOS have Spoken Content, a built-in feature that reads
            selected text aloud. Free, works offline, but limited: no
            place-saving across sessions, no EPUB navigation, no word
            highlighting, and the voices are older and less natural than modern
            neural TTS. Fine in a pinch, but not a great book-listening
            experience.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="When should you buy the official audiobook?">
        <p>
          When the book has one, and the performance matters. A great narrator
          does not just read a book. They interpret it. They give characters
          distinct voices, modulate emotion, and use timing for dramatic
          effect. For literary fiction, beloved series, and books where the
          listening experience is part of the enjoyment, a professional
          recording is worth the money.
        </p>
        <p>
          The trade-off: most books do not have audiobook editions. Backlist
          titles, niche non-fiction, self-published works, academic books, and
          your own EPUBs and PDFs were never recorded. If your reading list
          skews toward these, the audiobook store is not an option. That is
          where TTS apps earn their keep.
        </p>
      </QuestionSection>

      <QuestionSection question="When is a TTS app the better choice?">
        <p>
          TTS apps win when universality matters more than performance quality.
          Any DRM-free EPUB or PDF becomes an audiobook in seconds. No waiting
          for a recording to exist. No paying per book. No managing audio
          files. The voice is generated live on your device from the text.
          Modern neural TTS voices are natural enough that for non-fiction and
          most fiction, the listening experience is genuinely good.
        </p>
        <p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          is built for this use case. Import any EPUB or PDF, or pick from
          70,000+ free Project Gutenberg classics, and press play. Natural
          offline voices run fully on-device and private, your library never
          leaves your device. The free tier gives you unlimited listening with
          one voice. Speed control from 0.3x to 3.0x, all 8 voices, sleep
          timer, soundscapes, and notes are part of {PRICING.premiumMonthly}{" "}
          Premium.
        </p>
      </QuestionSection>

      <QuestionSection question="What about borrowing audiobooks from the library?">
        <p>
          Library apps like Libby and Hoopla are fantastic if your local
          library has a good digital collection. You borrow audiobooks for
          free with a library card, listen in their app, and they return
          automatically. The limitations: availability depends on your
          library's catalog and budget, popular titles often have waiting
          lists, and you are still limited to books that got a recording.
        </p>
        <p>
          Library apps pair well with TTS readers. Use Libby for the
          bestsellers that got a recording. Use LoudReader for everything else.
          Together they cover more books than either alone.
        </p>
      </QuestionSection>

      <QuestionSection question="How do built-in tools compare to dedicated apps?">
        <p>
          Every Mac and iPhone has Spoken Content, a system-level feature that
          reads selected text aloud. It is free, works offline, and requires
          zero setup beyond enabling it in Accessibility settings. For reading
          a short article or a single web page, it does the job.
        </p>
        <p>
          For book-length listening, the gaps are significant. Spoken Content
          does not save your place across sessions. It does not navigate EPUB
          chapters. It does not highlight words as it reads. The voices are
          older, less natural, and were designed for accessibility use cases,
          not immersive reading. A dedicated app like LoudReader handles all of
          these: place-saving, EPUB and PDF navigation, word-by-word
          highlighting, and natural offline voices running on Apple Silicon's
          Neural Engine. The difference between a system tool and a
          purpose-built reader is the difference between functional and
          enjoyable.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="The best way to listen to any ebook"
        subline="Import any EPUB or PDF and press play. Natural offline voices, free unlimited listening, no account."
      />
    </ArticleLayout>
  );
}
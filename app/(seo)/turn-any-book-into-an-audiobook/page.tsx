import type { Metadata } from "next";
import Link from "next/link";

import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import LastUpdated from "@/components/money/LastUpdated";
import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import {
  COMPARISON_COLUMNS,
  COMPARISON_ROWS,
  FACTS_CHECKED_NOTE,
  FAQS,
  H1,
  LAST_UPDATED,
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  SLUG,
} from "./content";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: { url: `/${SLUG}`, title: PAGE_TITLE, description: PAGE_DESCRIPTION },
};

export default function TurnAnyBookIntoAnAudiobookPage() {
  return (
    <MoneyPageLayout>
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
          {H1}
        </h1>
        <LastUpdated date={LAST_UPDATED} note={FACTS_CHECKED_NOTE} />
      </header>

      <Tldr>
        <p>
          You can turn any book you own into an audiobook in about a minute,
          with no file conversion and no waiting for a narrator. Install{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps), import the
          book (any DRM-free EPUB or PDF), and press play: natural offline
          voices read it aloud in real time while each word highlights on the
          page. There&apos;s nothing to export and no MP3 files to manage. The
          app narrates the actual book and remembers your place. It&apos;s
          fully on-device and private, your library never leaves your device.
          The free tier includes unlimited listening on every book, cover to
          cover, plus 70,000+ free Project Gutenberg classics built in. Two
          honest limits: DRM-locked purchases (like Kindle books) can&apos;t be
          imported, and a human narrator&apos;s performance is still better
          art.
        </p>
      </Tldr>

      <QuestionSection question="How do I turn a book into an audiobook?">
        <ol className="list-decimal pl-6 space-y-2">
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
            on your Mac (macOS 15+, Apple Silicon) or iPhone (iOS 18+). Free,
            no account.
          </li>
          <li>
            Import the book: share an EPUB or PDF to LoudReader from the
            Files app, Safari, or Mail, or use the import button inside the
            app.
          </li>
          <li>
            Press <strong>play</strong>. A natural offline voice narrates the
            book while each word highlights in the text.
          </li>
        </ol>
        <p>
          That&apos;s the whole process. The book behaves like an audiobook
          from then on: playback continues with the screen locked on iPhone,
          your position is saved automatically, and on Premium you can switch
          among all 23 studio narrators and adjust speed from 0.3x to 3.0x.
        </p>
      </QuestionSection>

      <QuestionSection question="Do I need to convert the book into audio files first?">
        <p>
          No, and this is the part most people expect to be harder than it is.
          Older workflows meant running an ebook through a converter to
          produce hours of MP3 files, then loading those into a player.
          LoudReader skips all of it: the text-to-speech engine generates the
          narration live, on your device, as you listen.
        </p>
        <p>
          Real-time narration is genuinely better than exported audio files.
          The text and audio stay together (so you get word-by-word
          highlighting and can switch between reading and listening
          mid-chapter), you can change the voice or speed at any moment, and a
          12-hour book takes zero storage beyond the book itself.
        </p>
      </QuestionSection>

      <QuestionSection question="What about books I bought on Kindle or Apple Books?">
        <p>
          The honest answer: store-bought ebooks are usually locked with DRM,
          and LoudReader can&apos;t open DRM-protected files. It reads
          standard, DRM-free EPUBs and PDFs, the formats you get from DRM-free
          stores, direct-from-author sales, technical publishers, your own
          documents, and public-domain libraries. Any legitimate
          text-to-speech reader has the same limitation.
        </p>
        <p>
          The good news is how much DRM-free reading exists. LoudReader ships
          with the entire Project Gutenberg catalog (70,000+ classics, free),
          and many publishers and authors sell EPUBs without DRM precisely so
          you can read them in the app of your choice.
        </p>
      </QuestionSection>

      <QuestionSection question="How does TTS narration compare with a real audiobook?">
        <ComparisonTable
          caption="Comparison of listening to a book with LoudReader's real-time text to speech versus buying a professionally narrated audiobook"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          The concession worth making plainly: a great human narrator is a
          performance, and no TTS engine matches that yet. If the audiobook
          you want exists and narration is part of the joy for you, buy it.
          LoudReader&apos;s case is different. Most books never get recorded at
          all, and for those, a natural offline voice is the difference
          between a book you listen to and a book you never get to.
        </p>
      </QuestionSection>

      <QuestionSection question="How long will my book take to listen to?">
        <p>
          Divide the word count by the narration pace. At about 150 words per
          minute, a comfortable listening speed, a 90,000-word novel runs
          roughly 10 hours and a 40,000-word novella about 4.5 hours. With
          Premium&apos;s speed control you can push that up to 3.0x once your
          ear adjusts, which turns the same novel into an afternoon.
        </p>
      </QuestionSection>

      <QuestionSection question="Is it private to listen to my own books this way?">
        <p>
          Completely. LoudReader is fully on-device and private, your library
          never leaves your device. The speech engine runs locally, so nothing
          you read is uploaded, and the app works in airplane mode.
          There&apos;s no account and no sign-up. That extends beyond novels:
          manuscripts, contracts, and work documents get the same treatment.
          See{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>{" "}
          for details, or the{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          for the two-minute read. And if the book you want to hear is a PDF
          on your phone, the{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            listen to a PDF on iPhone
          </Link>{" "}
          guide walks through it.
        </p>
      </QuestionSection>

      <QuestionSection question="What does it cost?">
        <p>
          The free tier is the audiobook part: unlimited listening on every
          book, cover to cover, with no word quota, an unlimited library,
          word-by-word highlighting, and the full Project Gutenberg catalog.
          Every voice is free for your first 8 hours; after that, free users
          keep the default voice. Premium adds all 23 studio narrators, playback speed
          (0.3x to 3.0x), a sleep timer, ambient soundscapes, and notes
          &amp; highlights for $7.99/month, $49.99/year, or $199.99 once,
          yours for life. Details in the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">
            FAQ
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn your first book into an audiobook now"
        subline="Import any EPUB or PDF and press play. Free, on-device, no account, no word quota."
      />
    </MoneyPageLayout>
  );
}

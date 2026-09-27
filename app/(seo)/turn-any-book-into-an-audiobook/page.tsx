import type { Metadata } from "next";
import Link from "next/link";

import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import LastUpdated from "@/components/money/LastUpdated";
import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, FREE_TIER, MAC, PRICING, PRIVACY, VOICES } from "@/components/money/site";

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
          You can listen to a supported DRM-free ebook without first exporting
          a separate audiobook file. Install{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac), import the
          book (any DRM-free EPUB or PDF), and press play: natural offline
          voices read it aloud in real time while each word highlights on the
          page. There&apos;s nothing to export and no MP3 files to manage. The
          app narrates the actual book and remembers your place. The book is not uploaded to a speech service for narration.
          The free tier includes unlimited listening on every book, cover to
          cover, plus in-app browsing and downloading of 70,000+ Project Gutenberg titles, subject to local copyright. Two
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
          among the studio narrators available on your device and adjust speed from 0.3x to 3.0x.
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
          Real-time narration keeps the reading controls tied to the text.
          The text and audio stay together (so you get word-by-word
          highlighting and can switch between reading and listening
          mid-chapter). You can choose an available voice; playback-speed control is Premium. The app generates speech as needed, and voice resources and cached audio still use storage.
        </p>
      </QuestionSection>

      <QuestionSection question="What about books I bought on Kindle or Apple Books?">
        <p>
          The honest answer: store-bought ebooks are usually locked with DRM,
          and LoudReader can&apos;t open DRM-protected files. It reads
          standard, DRM-free EPUBs and PDFs, the formats you get from DRM-free
          stores, direct-from-author sales, technical publishers, your own
          documents, and public-domain libraries. Check the store app’s own reading and accessibility features for protected purchases.
        </p>
        <p>
          LoudReader’s catalog lets you browse and download 70,000+ Project Gutenberg titles, subject to local copyright. Many publishers and authors also sell EPUBs without DRM so you can use a compatible reader of your choice.
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
        <p>Narration is generated locally, without uploading the book to a speech service. {PRIVACY.summary}</p>
        <p>The <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link> explains diagnostics and analytics. For PDF import, see the <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">iPhone PDF guide</Link>.</p>
      </QuestionSection>

      <QuestionSection question="What does it cost?">
        <p>{FREE_TIER.full} Individual book imports, notes and highlights are free.</p>
        <p>Premium adds {PRICING.premiumFeatures}. US prices are {PRICING.premiumMonthly}, {PRICING.premiumYearly} or {PRICING.premiumLifetime}; storefront prices may vary. See the <Link href="/faq" className="text-loudBlue hover:underline">FAQ</Link>.</p>
      </QuestionSection>

      <p>{MAC.precise} {VOICES.availability}</p>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn your first book into an audiobook now"
        subline="Import a supported DRM-free EPUB or PDF and press play. Free, on-device, no account, no word quota."
      />
    </MoneyPageLayout>
  );
}

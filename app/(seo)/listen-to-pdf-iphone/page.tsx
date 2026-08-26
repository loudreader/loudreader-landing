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

export default function ListenToPdfIphonePage() {
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
          To listen to a PDF on your iPhone, open it in a text-to-speech app.
          Download <strong>LoudReader</strong> free from the App Store, share
          the PDF to LoudReader from the Files app, Mail, or Safari, and press
          play. Natural offline voices read the PDF aloud with word-by-word
          highlighting, the app remembers your place, and playback keeps going
          with the screen locked. It&apos;s fully on-device and private, your
          library never leaves your device, and the free tier has no word
          quota, so a 400-page PDF costs nothing to hear cover to cover.
          iPhones also have a built-in option: Settings → Accessibility →
          Spoken Content → Speak Screen, then swipe down from the top of the
          screen with two fingers. It&apos;s free and works in any app, but it
          keeps no library and no reading position.
        </p>
      </Tldr>

      <QuestionSection question="What's the fastest way to listen to a PDF on iPhone?">
        <p>
          Four steps, about a minute total:
        </p>
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
            (free, no account or sign-up).
          </li>
          <li>
            Find your PDF (in the Files app, a Mail attachment, or a download
            in Safari) and tap the <strong>Share</strong> button.
          </li>
          <li>
            Choose <strong>LoudReader</strong> from the share sheet. The PDF
            lands in your library instantly.
          </li>
          <li>
            Open it and press <strong>play</strong>. A natural offline voice
            reads the document aloud while each word highlights on the page.
          </li>
        </ol>
        <p>
          From then on the PDF stays in your library. LoudReader remembers
          exactly where you stopped, and you can keep listening with the
          screen locked, with full playback controls on the lock screen, like
          a podcast app for your own documents. And because LoudReader ships
          on iPhone, iPad, and Apple Silicon Macs, the same share-and-play workflow
          works on your Mac too.
        </p>
      </QuestionSection>

      <QuestionSection question="Can my iPhone read a PDF aloud without any extra app?">
        <p>
          Yes. iOS ships with an accessibility feature called Spoken Content.
          Turn it on under <strong>Settings → Accessibility → Spoken
          Content</strong>, enable <strong>Speak Screen</strong>, then open
          your PDF and swipe down from the top of the screen with two
          fingers. Your iPhone reads what&apos;s on the screen, and an
          on-screen controller lets you adjust the speaking rate.
        </p>
        <p>
          It&apos;s genuinely useful, and free, but it&apos;s a screen reader
          rather than a reading app. It speaks what&apos;s currently visible,
          it keeps no library, and it won&apos;t remember where you were in a
          300-page PDF tomorrow. For a quick paragraph it&apos;s perfect. For
          reading whole documents or books by ear, a dedicated reader is the
          better tool.
        </p>
      </QuestionSection>

      <QuestionSection question="How does LoudReader compare with the built-in Speak Screen?">
        <ComparisonTable
          caption="Comparison of LoudReader and the built-in iOS Speak Screen feature for listening to PDFs on iPhone"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          The short version: Speak Screen is a free, built-in convenience for
          reading the screen in front of you. LoudReader is built for
          long-form listening, with a library that keeps your place, natural
          offline voices, and background playback with no word quota.
        </p>
      </QuestionSection>

      <QuestionSection question="Will it work with scanned PDFs?">
        <p>
          Only if the PDF contains actual text. LoudReader reads the text
          layer embedded in the PDF, the same text you can select and copy.
          A scanned PDF that&apos;s just photographs of pages has no text
          layer, so there&apos;s nothing to read aloud. If your scan came from
          an OCR app or scanner software that adds a text layer, it&apos;ll
          work. If not, run it through an OCR tool first and import the result.
        </p>
      </QuestionSection>

      <QuestionSection question="Is it private to listen to my PDFs this way?">
        <p>
          With LoudReader, completely. The app is fully on-device and private,
          your library never leaves your device. Every word of speech is
          generated locally on your iPhone, so the app works in airplane mode,
          and a confidential PDF (a contract, a medical report, an unpublished
          manuscript) is read aloud without ever being uploaded anywhere.
          There&apos;s no account and nothing to sign up for, and the{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          is short because there&apos;s almost nothing to disclose. If privacy
          is your main concern, see our closer look at{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What does it cost to listen to PDFs on iPhone?">
        <p>
          Nothing, for the core experience. LoudReader&apos;s free tier
          includes unlimited listening on every PDF and book cover to cover,
          an unlimited library, word-by-word highlighting, and the built-in
          Project Gutenberg catalog of 70,000+ free classics. Every voice is
          free for your first 8 hours; after that, free users keep the
          default voice.
        </p>
        <p>
          Premium adds all 23 studio narrators plus playback speed (0.3x to 3.0x), a
          sleep timer, ambient soundscapes, and notes &amp; highlights, for
          $7.99/month, $49.99/year, or $199.99 once (lifetime). All billing
          goes through Apple. Full breakdown in the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">
            FAQ
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Listen to your first PDF in the next minute"
        subline="Share any PDF to LoudReader and press play. Free, offline, no account, no word quota."
      />
    </MoneyPageLayout>
  );
}

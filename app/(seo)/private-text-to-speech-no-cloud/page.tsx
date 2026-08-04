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

export default function PrivateTextToSpeechNoCloudPage() {
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
          Private text to speech means the audio is generated on your own
          device, so your text is never uploaded to anyone&apos;s server.
          With any cloud TTS service, every sentence you listen to must be
          transmitted to the provider to be synthesized. With on-device TTS,
          nothing leaves your machine. <strong>LoudReader</strong> is a
          text-to-speech reader for Mac and iPhone built exactly this way:
          it&apos;s fully on-device and private, your library never leaves
          your device, it requires no account, and it reads EPUBs, PDFs, and
          articles aloud with natural offline voices. The proof is simple:
          turn on airplane mode and it keeps reading. That matters most for
          what you actually read, like contracts, medical records, unpublished
          manuscripts, and client documents.
        </p>
      </Tldr>

      <QuestionSection question="What makes a text-to-speech app private?">
        <p>
          Four things, and they&apos;re checkable rather than promises:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>On-device synthesis.</strong> The speech engine runs on
            your own hardware. If the voices work with the network off, your
            text isn&apos;t being sent out to be spoken.
          </li>
          <li>
            <strong>No account.</strong> An app that never asks who you are
            can&apos;t tie your reading to an identity. LoudReader has no
            sign-up, no login, and no profile.
          </li>
          <li>
            <strong>No content collection.</strong> LoudReader collects no
            personal data. Books, notes, highlights, and reading progress
            stay on your device. The{" "}
            <Link href="/privacy" className="text-loudBlue hover:underline">
              privacy policy
            </Link>{" "}
            is two minutes long because there&apos;s almost nothing to
            disclose.
          </li>
          <li>
            <strong>Minimal network surface.</strong> The only network
            requests LoudReader makes are downloads you ask for: free books
            from the Project Gutenberg catalog, or an article link you paste
            in.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Why does cloud text to speech expose your documents?">
        <p>
          It isn&apos;t malice, it&apos;s architecture. A cloud TTS service
          synthesizes speech on its own servers, which means your text has to
          travel there. That&apos;s unavoidable physics of the design: to hear
          a contract read aloud by a cloud voice, you send the contract. What
          happens next depends on each provider&apos;s terms (retention,
          logging, processing location), which you have to read, trust, and
          re-check every time they change.
        </p>
        <p>
          On-device TTS removes the question instead of answering it.
          There&apos;s no server-side copy to worry about because there&apos;s
          no server-side anything. For a novel this may not matter much; for a
          medical report, an unpublished manuscript, or a client&apos;s legal
          brief, it&apos;s the whole decision.
        </p>
      </QuestionSection>

      <QuestionSection question="How can I test whether TTS is really on-device?">
        <p>
          The airplane-mode test: switch off all connectivity and press play.
          An app that keeps narrating with no connection is generating speech
          locally, and there&apos;s no way to fake that. An app that stops,
          errors, or degrades is calling home to synthesize. LoudReader passes
          this test on both Mac and iPhone. It&apos;s the fastest honest answer
          to &ldquo;is my text being uploaded?&rdquo; that exists.
        </p>
      </QuestionSection>

      <QuestionSection question="How does on-device TTS compare with cloud TTS?">
        <ComparisonTable
          caption="Comparison of on-device text to speech (LoudReader) with typical cloud text-to-speech services on privacy, offline use, and breadth"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          For a concrete, fact-checked example of the cloud column (pricing,
          word metering, sign-in requirements), see the{" "}
          <Link
            href="/speechify-alternative-for-mac"
            className="text-loudBlue hover:underline"
          >
            LoudReader vs Speechify comparison
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What is LoudReader?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          turns any EPUB, PDF, or article into an audiobook with natural
          offline voices, as native Mac and iPhone apps. Import a document
          and press play: a neural voice reads while each word highlights in
          the text, and your place is saved automatically. The free tier
          includes unlimited listening on every book, cover to cover, with no
          word quota. Private reading shouldn&apos;t be the expensive option.
          It also ships with 70,000+ free Project Gutenberg classics, and the
          same on-device narration works for{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            PDFs on your iPhone
          </Link>{" "}
          and{" "}
          <Link
            href="/listen-to-articles-mac"
            className="text-loudBlue hover:underline"
          >
            articles on your Mac
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What do you give up by going no-cloud?">
        <p>
          An honest accounting, because the trade-off is real:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Languages and voice variety.</strong> Cloud services
            generally offer dozens of languages and huge voice catalogs.
            LoudReader has 23 natural offline narrators across 10 languages,
            plus any voice you clone from your own on the device.
          </li>
          <li>
            <strong>Hardware.</strong> Running a neural engine locally takes
            modern silicon: LoudReader needs an Apple Silicon Mac (macOS 15+)
            or an iPhone/iPad on iOS 18+. Cloud TTS runs on anything with a
            browser.
          </li>
          <li>
            <strong>Extras.</strong> The cloud suites have AI summaries, voice
            cloning, and browser extensions. LoudReader deliberately
            doesn&apos;t.
          </li>
        </ul>
        <p>
          If those outweigh privacy for your use, a cloud service is the
          rational choice. If what you read is sensitive, or you just dislike
          your reading being someone else&apos;s data, no-cloud is the only
          architecture that settles the question.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Text to speech that never phones home"
        subline="Fully on-device narration for books, PDFs, and articles. No account, no uploads, no word quota."
      />
    </MoneyPageLayout>
  );
}

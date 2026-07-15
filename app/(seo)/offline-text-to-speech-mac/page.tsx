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

export default function OfflineTextToSpeechMacPage() {
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
          Your Mac can do text to speech completely offline, two ways. Built
          in: open <strong>System Settings → Accessibility → Read &amp;
          Speak</strong> (called Spoken Content on earlier macOS), turn on
          &ldquo;Speak selection&rdquo;, then select any text and press{" "}
          <strong>Option + Esc</strong>. It works in every app, no internet
          needed. For long-form listening (whole books, PDFs, and articles
          with a library, resume, and word-by-word highlighting) use{" "}
          <strong>LoudReader</strong>, a native Mac app whose neural
          text-to-speech engine runs entirely on your Mac, with natural
          offline voices that sound like an audiobook rather than a screen
          reader. LoudReader is fully on-device and private, your library
          never leaves your device, needs no account, and its free tier
          includes unlimited listening with no word quota.
        </p>
      </Tldr>

      <QuestionSection question="Does macOS have built-in offline text to speech?">
        <p>
          Yes, and it&apos;s better than most people realize. Under{" "}
          <strong>System Settings → Accessibility → Read &amp; Speak</strong>{" "}
          (labelled Spoken Content on earlier versions of macOS), enable{" "}
          <strong>Speak selection</strong>. From then on, select any text in
          any app and press <strong>Option + Esc</strong>, and your Mac reads
          it aloud. An on-screen controller can appear with pause and
          speaking-rate controls, you can choose among the system voices (and
          download more), and words or sentences can highlight as they&apos;re
          spoken. There&apos;s even a <code>say</code> command in Terminal if
          you like your text-to-speech scriptable.
        </p>
        <p>
          All of it runs on your Mac, no cloud and no account. For a paragraph,
          an email, or a quick proofread by ear, the built-in feature is
          exactly the right tool.
        </p>
      </QuestionSection>

      <QuestionSection question="Where does the built-in feature fall short?">
        <p>
          At length. Spoken Content speaks the text you select, and that&apos;s
          all it does: there&apos;s no library, no reading position, and no
          sense of a document. Listening to a 300-page book means selecting
          text over and over and remembering where you stopped yourself. The
          system voices are also built for utility, clear but noticeably
          synthetic over a multi-hour listen.
        </p>
        <p>
          That&apos;s the gap a dedicated reader fills. It treats text to
          speech as a way to actually read books and documents by ear, rather
          than as an accessibility shortcut.
        </p>
      </QuestionSection>

      <QuestionSection question="What is LoudReader?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          turns any EPUB, PDF, or article into an audiobook with natural
          offline voices. It ships as native Mac and iPhone apps, not a web
          wrapper, and every word of speech is generated on your device by a
          modern neural TTS engine. It&apos;s fully on-device and private, your
          library never leaves your device. There&apos;s no account and no
          sign-up.
        </p>
        <p>
          Import a book and press play: the voice reads while each word
          highlights in the text, your place is saved automatically, and a
          built-in catalog offers 70,000+ free Project Gutenberg classics.
          The free tier includes unlimited listening on every book, cover to
          cover, with no word quota, and the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">
            FAQ
          </Link>{" "}
          has the full free-vs-Premium breakdown.
        </p>
      </QuestionSection>

      <QuestionSection question="How do LoudReader and macOS Spoken Content compare?">
        <ComparisonTable
          caption="Comparison of LoudReader and the built-in macOS Spoken Content feature for offline text to speech"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          They&apos;re not really rivals. Spoken Content is the right tool for
          a selected paragraph, and LoudReader is the right tool when the thing
          you want to hear is a book, a long PDF, or your article backlog. Many
          people use both.
        </p>
      </QuestionSection>

      <QuestionSection question="Why does offline matter for text to speech?">
        <p>
          Three reasons, in increasing order of importance:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>It works everywhere.</strong> Planes, trains, tethered
            laptops, flaky hotel Wi-Fi: narration generated on your own
            machine can&apos;t buffer or drop out.
          </li>
          <li>
            <strong>No quotas.</strong> Cloud TTS services meter usage
            because synthesis costs them server time. When the engine runs on
            your Mac, there&apos;s nothing to meter, and LoudReader has no word
            limits on any tier.
          </li>
          <li>
            <strong>Privacy.</strong> Offline synthesis means your text is
            never transmitted to anyone. What you read stays yours. See{" "}
            <Link
              href="/private-text-to-speech-no-cloud"
              className="text-loudBlue hover:underline"
            >
              private text to speech with no cloud
            </Link>{" "}
            for the full argument, and the{" "}
            <Link href="/privacy" className="text-loudBlue hover:underline">
              privacy policy
            </Link>{" "}
            for what LoudReader does (almost nothing) with data.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What do I need to run LoudReader on a Mac?">
        <p>
          An Apple Silicon Mac (M1 or newer) running macOS 15 or later. The
          neural voices lean on Apple Silicon&apos;s machine-learning
          hardware. To be straight about it: if you have an Intel Mac,
          LoudReader won&apos;t run, and the built-in Spoken Content feature is
          your offline option. On iPhone and iPad, LoudReader needs iOS or
          iPadOS 18+. Download{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader from the App Store
          </a>{" "}
          free, with no account and no card required. If you&apos;re weighing
          cloud alternatives too, our{" "}
          <Link
            href="/speechify-alternative-for-mac"
            className="text-loudBlue hover:underline"
          >
            Speechify comparison
          </Link>{" "}
          covers that decision honestly.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Natural offline voices for your Mac"
        subline="Books, PDFs, and articles read aloud, fully on-device, no account, no word quota."
      />
    </MoneyPageLayout>
  );
}

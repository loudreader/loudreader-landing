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

export default function ListenToArticlesMacPage() {
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
          The quickest way to listen to an article on your Mac: copy the
          article&apos;s link and paste it into <strong>LoudReader</strong>.
          The app pulls out the readable text (no menus, ads, or comment
          sections), saves it to your library, and reads it aloud with
          natural offline voices and word-by-word highlighting, remembering
          where you stopped. It&apos;s fully on-device and private, your
          library never leaves your device; the only network request is
          fetching the article you asked for. macOS also has a built-in
          option: enable &ldquo;Speak selection&rdquo; under System Settings →
          Accessibility, select the article text in Safari, and press
          Option + Esc. It&apos;s free and works everywhere, but it reads
          exactly what you select and keeps no queue or reading position.
        </p>
      </Tldr>

      <QuestionSection question="What's the easiest way to listen to an article on a Mac?">
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
            (free, no account, macOS 15+ on Apple Silicon).
          </li>
          <li>
            Copy the link of any article, from Safari, a newsletter, Slack,
            wherever.
          </li>
          <li>
            Paste it into LoudReader&apos;s link import (the app even offers
            to import a link it finds on your clipboard).
          </li>
          <li>
            Press <strong>play</strong>. The article is read aloud in a
            clean, clutter-free view with each word highlighted as it is
            spoken.
          </li>
        </ol>
        <p>
          The article stays in your library like a book: your position is
          saved, and a 6,000-word longread becomes something you can finish
          while making dinner instead of a tab you keep meaning to get back
          to.
        </p>
      </QuestionSection>

      <QuestionSection question="Can Safari read articles aloud by itself?">
        <p>
          macOS can, in any app including Safari. Turn on{" "}
          <strong>Speak selection</strong> under System Settings →
          Accessibility (labelled Read &amp; Speak on the latest macOS,
          Spoken Content earlier), then select the article text and press{" "}
          <strong>Option + Esc</strong>. Your Mac reads the selection with a
          system voice, an on-screen controller offers pause and rate
          controls, and optional highlighting follows along.
        </p>
        <p>
          It&apos;s a solid built-in tool, with built-in-tool limits: you
          select the text yourself (navigation, captions, and ads included if
          you grab them), nothing is saved, and there&apos;s no notion of an
          article queue or a reading position. For one paragraph it&apos;s
          unbeatable; for a reading backlog it gets tedious.
        </p>
      </QuestionSection>

      <QuestionSection question="How do the two options compare?">
        <ComparisonTable
          caption="Comparison of LoudReader and the built-in macOS Spoken Content feature for listening to web articles"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
      </QuestionSection>

      <QuestionSection question="What happens to the ads and page clutter?">
        <p>
          LoudReader extracts the article before reading it, the same idea as
          Safari&apos;s Reader view. When you paste a link, the app fetches
          the page once, isolates the actual article text, and saves that
          clean version to your library alongside your books. The voice reads
          the writing, not the cookie banner. Extraction isn&apos;t magic,
          though: unusually structured pages can fail to parse, and the app
          will tell you and let you retry rather than read garbage.
        </p>
      </QuestionSection>

      <QuestionSection question="Is listening to articles this way private?">
        <p>
          Yes, with one honest nuance. Fetching an article obviously
          contacts the site you got it from, once, when you add it. From
          that point everything is local. LoudReader is fully on-device and
          private, your library never leaves your device, and the narration
          is generated by natural offline voices running on your Mac, not on
          a server. No account, no reading history in anyone else&apos;s
          hands; the{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          is a two-minute read. If that architecture is what brought you
          here, the full write-up is{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What are the honest limits?">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Paywalls.</strong> If a page needs a login to show its
            text, the extractor can&apos;t reach the article body and the
            import fails with a clear error.
          </li>
          <li>
            <strong>English voices only</strong>, for now, and more languages
            are coming.
          </li>
          <li>
            <strong>No cloud sync.</strong> Libraries are per-device by
            design (that&apos;s what keeps them private), so add an article on
            the device you plan to listen on.
          </li>
          <li>
            <strong>Apple Silicon required</strong> on the Mac (macOS 15+);
            on an Intel Mac, the built-in Spoken Content feature is your
            option.
          </li>
        </ul>
        <p>
          LoudReader ships as native Mac and iPhone apps, and beyond articles
          it handles books and documents too. See{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            turning any book into an audiobook
          </Link>{" "}
          or the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">
            FAQ
          </Link>{" "}
          for the full picture.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn your reading backlog into a playlist"
        subline="Paste a link, press play. Natural offline voices, no account, no word quota."
      />
    </MoneyPageLayout>
  );
}

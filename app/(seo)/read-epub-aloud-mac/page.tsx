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

export default function ReadEpubAloudMacPage() {
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
          There are three ways to read an EPUB aloud on a Mac. The quickest is
          a dedicated reader app. <strong>LoudReader</strong> opens any
          DRM-free EPUB and reads it with natural offline voices and
          word-by-word highlighting. It&apos;s fully on-device and private,
          your library never leaves your device, and listening is free and
          unlimited with no account. Second, macOS has a free built-in option:
          turn on Speak selection in System Settings → Accessibility, select
          some text, and press Option-Esc. That&apos;s fine for a paragraph
          and clumsy for a whole book. Third, cloud apps like Speechify
          ($29/month Premium) and ElevenReader (browser-only on a Mac) also
          work, but they involve accounts, subscriptions, and uploading your
          book. Exact steps for all three, and a comparison table, are below.
        </p>
      </Tldr>

      <QuestionSection question="What's the fastest way to read an EPUB aloud on a Mac?">
        <p>
          Use an app built for it. LoudReader runs on iPhone, iPad, and Apple Silicon Macs and turns any EPUB or PDF into an audiobook in three steps:
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
            (macOS 15+ on Apple Silicon). No account or sign-up. The app never
            asks for an email address.
          </li>
          <li>
            Import your EPUB. Open it with LoudReader or use the import button,
            and it lands in your library instantly.
          </li>
          <li>
            Press play. A natural offline voice reads the book while each
            word highlights in the text, and your position is saved so you
            can pick up where you stopped.
          </li>
        </ol>
        <p>
          Everything happens on your Mac. LoudReader is fully on-device and
          private, your library never leaves your device, and listening is
          unlimited on the free tier with no word quota. The details are in
          the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">FAQ</Link>.
        </p>
      </QuestionSection>

      <QuestionSection question="Can my Mac read an EPUB aloud for free, without any apps?">
        <p>
          Yes. macOS includes an accessibility feature called{" "}
          <strong>Speak selection</strong> that speaks any text on screen:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Open <strong>System Settings → Accessibility → Read &amp;
            Speak</strong> and turn on <strong>Speak selection</strong>.
          </li>
          <li>Open your EPUB in any app that displays its text, and select a passage.</li>
          <li>
            Press <strong>Option-Esc</strong>. Your Mac speaks the selection;
            if nothing is selected, it speaks the available text in the
            current window. An optional onscreen controller lets you change
            the speaking rate, skip sentences, and pause.
          </li>
        </ol>
        <p>
          This is genuinely useful, and it&apos;s free. For a paragraph or an
          article, it may be all you need. Its limits show up with books:
          there&apos;s no library, no saved reading position, and no
          press-play-and-listen flow. You select text and trigger it as you
          go. Think of it as text-to-speech for what&apos;s on your screen, not
          a way to listen to a novel.
        </p>
      </QuestionSection>

      <QuestionSection question="What about cloud text-to-speech apps?">
        <p>
          The third route is a cloud reading service. Speechify has a
          dedicated Mac app (sign-in required, English US/UK) with text
          highlighting; Premium is $29/month, discounted 60% when billed
          annually. ElevenReader has no Mac app, so on a Mac you use it in the
          browser. Its free plan is metered at 10 hours of text-to-audio per
          month, and the $11/month Ultra plan adds unlimited imports and
          offline downloads. Both offer far more voices and languages than any
          offline app: 1000+ voices each, with Speechify covering 60+
          languages.
        </p>
        <p>
          The trade-off is structural. These are cloud services, so you create
          an account and your book is uploaded to be converted or synced. For
          public-domain classics that hardly matters. For a manuscript, a
          contract, or anything confidential, it might matter a great deal. If
          you&apos;re weighing this category seriously, see our honest
          comparison of{" "}
          <Link
            href="/loudreader-vs-speechify"
            className="text-loudBlue hover:underline"
          >
            LoudReader vs Speechify
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How do the three options compare?">
        <ComparisonTable
          caption="Comparison of ways to read an EPUB aloud on a Mac: LoudReader, macOS Speak selection, and cloud TTS apps"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          The short version: Speak selection is the free built-in tool for
          occasional passages, cloud apps offer the widest voice and language
          choice, and LoudReader is the option built for actually listening to
          books, privately and offline with no limits.
        </p>
      </QuestionSection>

      <QuestionSection question="Will DRM-protected EPUBs work?">
        <p>
          No, and being honest here saves you a frustrating afternoon. Books
          bought from stores that apply DRM (like Apple Books or Kindle
          purchases) are locked to the store&apos;s own apps, and no
          third-party reader can open them, LoudReader included. What works
          everywhere are DRM-free EPUBs: Project Gutenberg titles, purchases
          from DRM-free stores, and files you own outright.
        </p>
        <p>
          LoudReader leans into this: it ships with the entire Project
          Gutenberg catalog built in, 70,000+ public-domain classics you can
          download and listen to for free, no account needed.
        </p>
      </QuestionSection>

      <QuestionSection question="Can I listen on my iPhone too?">
        <p>
          Yes. LoudReader runs on iPhone, iPad, and Apple Silicon Macs (iPad too, with
          iOS 18+), so the same EPUB-to-audiobook workflow travels with you.
          And because all speech is generated on-device, it keeps working on a
          plane or in the subway with zero connectivity. Learn more about the
          app on the{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader home page
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Read any EPUB aloud on your Mac"
        subline="Natural offline voices, word-by-word highlighting, unlimited free listening. No account."
      />
    </MoneyPageLayout>
  );
}

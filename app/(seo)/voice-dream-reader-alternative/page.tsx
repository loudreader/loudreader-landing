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

export default function VoiceDreamReaderAlternativePage() {
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
          <strong>LoudReader</strong> is a Voice Dream Reader alternative
          built around modern on-device AI speech. It turns any EPUB or PDF
          into an audiobook with natural offline voices and word-by-word
          highlighting, and it's fully on-device and private, your library
          never leaves your device. There's no account and no quota. The free
          tier includes unlimited listening on every book, cover to cover.
          Premium costs $7.99/month, $49.99/year, or $199.99 once, compared
          with Voice Dream&apos;s $79.99/year subscription for new users,
          introduced in May 2024. LoudReader runs on iPhone, iPad, and Apple Silicon Macs.
          Choose Voice Dream Reader instead if you rely on Bookshare or DAISY,
          read Word or PowerPoint files, want an Apple Watch app, or need its
          30 languages and deep accessibility toolkit.
        </p>
      </Tldr>

      <QuestionSection question="Why look for a Voice Dream Reader alternative?">
        <p>
          Voice Dream Reader is one of the most respected reading apps ever
          made. It won a 2021 Apple Design Award and earned a devoted
          following in the accessibility community. Two things send people
          looking elsewhere. The first is pricing: in May 2024, Voice Dream
          switched new users to a subscription at a regular price of
          $79.99/year. (To its credit, after community feedback it let
          existing one-time purchasers keep their features at no additional
          cost, but if you're new, the subscription is the deal on the
          table.) The second is voice technology: Voice Dream&apos;s catalog
          of 200+ premium voices comes from classic text-to-speech vendors
          such as Acapela, a generation older than today&apos;s neural AI
          voices.
        </p>
        <p>
          If you want modern-sounding narration for books at a lower price, and
          you don&apos;t need the full accessibility toolkit, a newer, more
          focused reader can serve you better.
        </p>
      </QuestionSection>

      <QuestionSection question="What is LoudReader?">
        <p>
          LoudReader turns any EPUB, PDF, or Project Gutenberg classic into an
          audiobook with natural offline voices. It runs on iPhone, iPad, and Apple Silicon Macs, not a web wrapper, and every word of speech is generated
          on your device by a modern neural TTS engine. LoudReader is fully
          on-device and private, your library never leaves your device. There's
          no account and no sign-up. The app never even asks for an email
          address.
        </p>
        <p>
          As the voice reads, each word highlights in the text so your eyes
          and ears stay in sync, the same read-along experience Voice Dream
          users know. A built-in catalog offers 70,000+ free public-domain
          books from Project Gutenberg. LoudReader is made by a solo
          developer, and the free tier is genuinely usable: unlimited
          listening on every book, cover to cover. See the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">FAQ</Link>{" "}
          for the full free-vs-Premium breakdown.
        </p>
      </QuestionSection>

      <QuestionSection question="How do LoudReader and Voice Dream Reader compare?">
        <ComparisonTable
          caption="Feature and pricing comparison of LoudReader and Voice Dream Reader"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          The short version: LoudReader wins on price, modern voice quality,
          and zero-account privacy. Voice Dream Reader wins on format
          breadth, languages, and its accessibility toolkit, a lead built
          over more than a decade.
        </p>
      </QuestionSection>

      <QuestionSection question="What is Voice Dream Reader still better at?">
        <p>
          A genuinely honest list, because Voice Dream has earned it:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Accessibility heritage.</strong> Voice Dream is an
            accessibility institution: Bookshare integration, DAISY text and
            audio support, a pronunciation dictionary, and recognition
            including a 2021 Apple Design Award. LoudReader does not claim
            that mantle.
          </li>
          <li>
            <strong>Format breadth.</strong> Word, PowerPoint, DAISY, web
            pages, and plain text, alongside PDF and EPUB. LoudReader reads
            EPUB and PDF.
          </li>
          <li>
            <strong>Languages and voice count.</strong> 200+ premium voices
            across 30 languages, versus LoudReader&apos;s 8 English voices.
          </li>
          <li>
            <strong>Ecosystem extras.</strong> A companion Apple Watch app,
            a Safari extension, iCloud library sync, and document scanning
            with OCR (via Voice Dream Scanner).
          </li>
          <li>
            <strong>Track record.</strong> Voice Dream has served blind,
            low-vision, and dyslexic readers for many years; that trust is
            real and it matters.
          </li>
        </ul>
        <p>
          If any of those is central to how you read, stay with Voice Dream
          Reader. It remains an excellent app.
        </p>
      </QuestionSection>

      <QuestionSection question="How much does each app cost?">
        <p>
          <strong>Voice Dream Reader:</strong> the app is a free download
          with built-in iOS voices; the full experience is a subscription at
          a regular price of $79.99/year, which covers the iOS and Mac apps,
          all premium voices, and unlimited listening. Long-time customers
          who bought the app before May 2024 keep its existing features
          without paying again.
        </p>
        <p>
          <strong>LoudReader:</strong> the free tier includes unlimited
          listening on every book cover to cover, an unlimited library,
          word-by-word highlighting, the full Project Gutenberg catalog, and
          every voice free for your first 8 hours (after that you keep the
          default voice). Premium adds all 23 studio narrators plus playback speed
          (0.3x to 3.0x), a sleep timer, ambient soundscapes, and notes &amp;
          highlights. That's $7.99/month, $49.99/year, or $199.99 once, yours
          for life. Year for year, that's $30 less than Voice Dream&apos;s
          regular price, and the lifetime option means you can stop paying
          entirely. All billing goes through Apple.
        </p>
      </QuestionSection>

      <QuestionSection question="Is LoudReader private and offline like Voice Dream?">
        <p>
          Both apps work offline. Voice Dream states plainly that it does not
          require an internet connection, and LoudReader generates every word
          of speech on your Mac or iPhone in real time. LoudReader goes one
          step further on privacy: there's no account at all, and the app
          collects no personal data. Your books, notes, highlights, and
          reading progress stay on your device; the only network requests are
          downloads you ask for from the free Project Gutenberg catalog. The{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          is two minutes long because there is almost nothing to disclose.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I try LoudReader?">
        <p>
          Download{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader from the App Store
          </a>{" "}
          (macOS 15+ on Apple Silicon, or iOS 18+ on iPhone and iPad), open
          any EPUB or PDF, or grab a free classic from the built-in catalog,
          and press play. No account, no subscription required to listen, no
          card required. If you're also weighing the bigger cloud apps, see
          our comparison of{" "}
          <Link
            href="/loudreader-vs-speechify"
            className="text-loudBlue hover:underline"
          >
            LoudReader vs Speechify
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try the modern Voice Dream alternative"
        subline="Natural offline voices, unlimited free listening, no account. Runs on iPhone, iPad, and Apple Silicon Macs."
      />
    </MoneyPageLayout>
  );
}

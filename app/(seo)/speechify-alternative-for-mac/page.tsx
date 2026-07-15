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

export default function SpeechifyAlternativeForMacPage() {
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
          <strong>LoudReader</strong> is a Speechify alternative for Mac and
          iPhone that does one thing: it turns the books and documents you
          already own into audiobooks. It's fully on-device and private, your
          library never leaves your device, and it reads any EPUB or PDF aloud
          with natural offline voices and word-by-word highlighting. There's no
          account, no sign-up, and no word quota. The free tier includes
          unlimited listening on every book, cover to cover. Premium costs
          $7.99/month, $49.99/year, or $199.99 once, versus Speechify Premium at
          $29/month. Choose Speechify instead if you need 60+ languages, 1000+
          voices, Android or Windows apps, or AI summaries.
        </p>
      </Tldr>

      <QuestionSection question="Why look for a Speechify alternative on your Mac?">
        <p>
          Speechify is the biggest name in text-to-speech, and for good reason.
          It's built as a cloud AI suite, though, and that shows up in a few
          places. First, price: Speechify Premium is advertised at $29 per
          month (about 60% less if you commit to a year). Second, metering: even
          on Premium, listening with the premium voices counts against a monthly
          word allowance. Speechify guarantees 1,000,000 words per month for
          2026, with a contractual baseline of 150,000 words per month after
          that. A long novel can run 150,000+ words, so heavy book listeners can
          actually feel that ceiling. Third, the cloud itself: the Mac app
          requires signing in, and documents flow through cloud integrations.
        </p>
        <p>
          If what you mostly want is <em>books read aloud on a Mac</em>, and not
          voice typing, AI podcasts, or a Chrome extension, you're paying for a
          lot of suite you may never use.
        </p>
      </QuestionSection>

      <QuestionSection question="What is LoudReader?">
        <p>
          LoudReader turns any EPUB, PDF, or Project Gutenberg classic into an
          audiobook with natural offline voices. It ships as native Mac and
          iPhone apps, not a web wrapper, and every word of speech is generated
          on your device. LoudReader is fully on-device and private, your
          library never leaves your device. There's no account and no sign-up.
          The app never even asks for an email address.
        </p>
        <p>
          As the voice reads, each word highlights in the text so your eyes
          and ears stay in sync. A built-in catalog offers 70,000+ free
          public-domain books from Project Gutenberg. LoudReader is made by a
          solo developer, and the free tier is genuinely usable: unlimited
          listening on every book, cover to cover, with no word quota. See
          the <Link href="/faq" className="text-loudBlue hover:underline">FAQ</Link>{" "}
          for the full free-vs-Premium breakdown.
        </p>
      </QuestionSection>

      <QuestionSection question="How do LoudReader and Speechify compare on Mac?">
        <ComparisonTable
          caption="Feature and pricing comparison of LoudReader and Speechify for Mac users"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          The short version: LoudReader wins on privacy, price, offline use,
          and unlimited long-form listening. Speechify wins on breadth:
          languages, voice variety, platforms, and AI features.
        </p>
      </QuestionSection>

      <QuestionSection question="What is Speechify still better at?">
        <p>
          An honest list, because it matters for the decision:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Languages.</strong> Speechify offers 60+ languages;
            LoudReader is currently English only (more are coming).
          </li>
          <li>
            <strong>Voice variety.</strong> 1000+ voices on Speechify Premium,
            including celebrity voices, versus LoudReader&apos;s 8 natural
            offline voices.
          </li>
          <li>
            <strong>Platform breadth.</strong> Speechify runs on Android,
            Windows (via web), and in Chrome as an extension. LoudReader is
            Apple-only, and the Mac app needs Apple Silicon (macOS 15+), so
            Intel Mac owners are out of luck.
          </li>
          <li>
            <strong>Beyond reading.</strong> Scanning physical books with your
            camera, AI summaries and chats, voice typing, AI podcasts. None
            of that exists in LoudReader, by design.
          </li>
        </ul>
        <p>
          If any of those is a must-have, Speechify (or another cloud suite)
          is the right call, and no comparison table should talk you out of
          it.
        </p>
      </QuestionSection>

      <QuestionSection question="How much does each app cost?">
        <p>
          <strong>Speechify:</strong> the free plan includes 10 standard
          voices at up to 1.5x speed. Premium is advertised at $29/month, with
          a 60% discount when billed annually, and premium-voice listening is
          metered by the monthly word allowance described above. There's no
          one-time purchase option.
        </p>
        <p>
          <strong>LoudReader:</strong> the free tier includes unlimited
          listening on every book cover to cover, an unlimited library,
          word-by-word highlighting, the full Project Gutenberg catalog, and
          every voice free for your first 8 hours (after that you keep the
          default voice). Premium adds all 8 AI voices plus playback speed
          (0.3x to 3.0x), a sleep timer, ambient soundscapes, and notes &amp;
          highlights. That's $7.99/month, $49.99/year, or $199.99 once, yours
          for life. All billing goes through Apple.
        </p>
      </QuestionSection>

      <QuestionSection question="Is LoudReader really private?">
        <p>
          Yes, and verifiably so. Because the text-to-speech engine runs
          entirely on your device, the app works with the network switched
          off. LoudReader collects no personal data. Your books, notes,
          highlights, and reading progress stay on your Mac or iPhone. The
          only network requests the app makes are downloads you ask for from
          the free Project Gutenberg catalog. The{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          is two minutes long because there's almost nothing to disclose.
        </p>
        <p>
          That matters most for what you read: contracts, medical documents,
          manuscripts, unpublished drafts. With LoudReader, a confidential PDF
          is read aloud without ever being uploaded anywhere.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I try LoudReader on my Mac?">
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
          and press play. No account, no trial countdown on listening, no card
          required.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try the private Speechify alternative"
        subline="Free unlimited listening, no account, no word quota. Native Mac and iPhone apps."
      />
    </MoneyPageLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import LastUpdated from "@/components/money/LastUpdated";
import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, CLONING, DIFFERENTIATORS, FREE_TIER, MAC, PRICING, PRIVACY, VOICES } from "@/components/money/site";

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
          already own into audiobooks. It reads DRM-free EPUBs and PDFs with
          on-device speech and word-by-word highlighting. Books are not
          uploaded for narration. {MAC.precise} {FREE_TIER.full} Premium
          costs {PRICING.premiumMonthly}, {PRICING.premiumYearly}, or
          {" "}{PRICING.premiumLifetime} on the US App Store, versus Speechify
          Premium at $29/month. Choose Speechify instead if you need 60+ languages, 1000+
          voices, Android or Windows apps, or AI summaries.
        </p>
      </Tldr>

      <QuestionSection question="Why look for a Speechify alternative on your Mac?">
        <p>
          Speechify is the biggest name in text-to-speech, and for good reason.
          It&apos;s built as a cloud AI suite, though, and that shows up in a few
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
          voice typing, AI podcasts, or a Chrome extension, you&apos;re paying for a
          lot of suite you may never use.
        </p>
      </QuestionSection>

      <QuestionSection question="What is LoudReader?">
        <p>
          LoudReader reads DRM-free EPUBs, PDFs and saved web articles using
          natural offline voices. {MAC.precise} Speech is generated locally,
          and books are not uploaded for narration. No LoudReader account is
          required to import and listen.
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
          LoudReader offers on-device narration, unlimited book listening
          and a lower listed subscription price. Speechify offers more
          languages, voice variety, platforms and AI features.
        </p>
      </QuestionSection>

      <QuestionSection question="What is Speechify still better at?">
        <p>
          An honest list, because it matters for the decision:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Languages.</strong> Speechify offers 60+ languages.
            LoudReader&apos;s studio roster covers 10. {VOICES.availability}
          </li>
          <li>
            <strong>Voice variety.</strong> 1000+ voices on Speechify Premium,
            including celebrity voices, versus LoudReader&apos;s
            {" "}{VOICES.headline}. {VOICES.availability}
          </li>
          <li>
            <strong>Platform breadth.</strong> Speechify runs on Android,
            Windows (via web), and in Chrome as an extension. LoudReader is
            Apple-only; on Mac it is the iPad app running on Apple Silicon
            (macOS 15+), so Intel Mac owners are out of luck.
          </li>
          <li>
            <strong>Beyond reading.</strong> Speechify offers camera scanning,
            AI summaries and chats, voice typing and AI podcasts. LoudReader
            also has camera and scanned-PDF text recognition, but does not
            offer that broader AI suite.
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
          metered by the monthly word allowance described above. There&apos;s no
          one-time purchase option.
        </p>
        <p>
          <strong>LoudReader:</strong> {FREE_TIER.full} {FREE_TIER.choice}{" "}
          Notes, highlights and word-by-word read-along are available free.
          Premium adds {PRICING.premiumFeatures}. {CLONING.trial}{" "}
          Prices on the US App Store are {PRICING.premiumMonthly},{" "}
          {PRICING.premiumYearly}, or {PRICING.premiumLifetime}; other
          storefronts may differ. Billing goes through Apple.
        </p>
      </QuestionSection>

      <QuestionSection question="Is LoudReader really private?">
        <p>
          LoudReader generates narration on your device, without uploading
          books to a speech server. Books already on the device can be
          narrated offline, and no LoudReader account is required to import
          and listen.
        </p>
        <p>
          {PRIVACY.summary} Usage analytics is enabled by default. Downloads
          and purchases also use the network. The{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          explains the distinction between local speech processing and the
          app&apos;s diagnostics and analytics.
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
          a DRM-free EPUB or PDF, or grab a free classic from the built-in catalog,
          and press play. No account, no trial countdown on listening, no card
          required.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try the private Speechify alternative"
        subline={`${FREE_TIER.full} LoudReader ${DIFFERENTIATORS.native}.`}
      />
    </MoneyPageLayout>
  );
}

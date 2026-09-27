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

export default function LoudReaderVsSpeechifyPage() {
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
          <strong>LoudReader</strong> and <strong>Speechify</strong> solve
          different problems. Speechify is a cloud AI suite: 1000+ voices, 60+
          languages, AI summaries and podcasts, apps on nearly every platform,
          for $29/month, with premium-voice listening metered by a monthly word
          allowance. LoudReader is a focused reader for books and documents.
          Speech is generated on your device; books are not uploaded for
          narration. {FREE_TIER.full} Premium is {PRICING.premiumMonthly},{" "}
          {PRICING.premiumYearly}, or {PRICING.premiumLifetime} on the US App
          Store. Pick Speechify for breadth and languages; pick LoudReader
          for local, unlimited book listening. {MAC.precise} Full
          disclosure: this page is written by LoudReader&apos;s developer, so
          the table below sticks to facts you can verify.
        </p>
      </Tldr>

      <QuestionSection question="What is the core difference between LoudReader and Speechify?">
        <p>
          Scope. Speechify set out to be everything voice: text-to-speech in
          60+ languages, celebrity voices, AI summaries and chats, voice
          typing, AI podcasts, cloud storage integrations, and apps for iOS,
          Android, the web, Chrome, and Mac. LoudReader set out to do one
          thing: turn the books and documents you already own into
          audiobooks, entirely on your device. Every word of speech is
          generated locally with natural offline voices, each word highlights
          as it is read, and books already on the device can be narrated offline.
        </p>
        <p>
          That single design decision, on-device instead of cloud, drives
          almost every row in the comparison below: pricing, privacy, word
          limits, offline behavior, and also the honest downsides, like fewer
          voices and fewer languages.
        </p>
      </QuestionSection>

      <QuestionSection question="How do LoudReader and Speechify compare feature by feature?">
        <ComparisonTable
          caption="Feature and pricing comparison of LoudReader and Speechify"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          LoudReader offers on-device narration, unlimited book listening
          and a lower listed subscription price. Speechify offers more
          languages, voice variety, platforms and AI features.
        </p>
      </QuestionSection>

      <QuestionSection question="How much do LoudReader and Speechify cost?">
        <p>
          <strong>Speechify:</strong> the free plan includes 10 standard
          voices, which Speechify&apos;s own pricing page describes as
          &quot;robotic sounding,&quot; at speeds up to 1.5x. Premium is
          advertised at $29/month, with a 60% discount when billed annually.
          Premium-voice listening is metered: Speechify guarantees 1,000,000
          words per month through the end of 2026, with a contractual
          baseline of 150,000 words per month after that. A long novel can
          run past 150,000 words, so heavy book listeners can feel that
          ceiling. There&apos;s no one-time purchase.
        </p>
        <p>
          <strong>LoudReader:</strong> {FREE_TIER.full} {FREE_TIER.choice}{" "}
          Notes, highlights and word-by-word read-along are available free.
          Premium adds {PRICING.premiumFeatures}. {CLONING.trial}{" "}
          Prices on the US App Store are {PRICING.premiumMonthly},{" "}
          {PRICING.premiumYearly}, or {PRICING.premiumLifetime}; other
          storefronts may differ. Billing goes through Apple. The full breakdown is in
          the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">FAQ</Link>.
        </p>
      </QuestionSection>

      <QuestionSection question="Which app is more private?">
        <p>
          LoudReader generates speech locally and does not upload books to a
          speech server for narration. No LoudReader account is required to
          import and listen. That does not mean the app has no telemetry.
        </p>
        <p>
          {PRIVACY.summary} Usage analytics is enabled by default. Downloads
          and purchases also use the network. Read the{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          for details. Speechify is cloud-based by design: sign-in, cloud
          voices and cloud storage integrations are part of how it works.
        </p>
      </QuestionSection>

      <QuestionSection question="When is Speechify the better choice?">
        <p>Honestly, in quite a few situations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>You need a language we don&apos;t cover.</strong> Speechify
            offers 60+ languages. LoudReader&apos;s studio roster covers
            {" "}{VOICES.languageList}. {VOICES.availability} If yours is not
            on that list, Speechify has broader language coverage.
          </li>
          <li>
            <strong>You want voice variety.</strong> 1000+ voices including
            celebrity voices, versus LoudReader&apos;s {VOICES.headline}.
            {" "}{VOICES.availability} {CLONING.trial}
          </li>
          <li>
            <strong>You&apos;re not all-in on Apple.</strong> Speechify runs on
            Android, in any browser, and as a Chrome extension. LoudReader
            requires macOS 15+ on Apple Silicon or iOS 18+.
          </li>
          <li>
            <strong>You want the AI suite.</strong> Speechify offers scanning
            physical books, AI summaries and chats, voice typing and AI podcasts.
            LoudReader also supports on-device camera and scanned-PDF text
            recognition, but does not offer that broader AI suite.
          </li>
        </ul>
        <p>
          If those describe you, Speechify is the right tool, and you can
          stop reading here.
        </p>
      </QuestionSection>

      <QuestionSection question="When is LoudReader the better choice?">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>You listen to whole books.</strong> No word quota on any
            tier. The free tier alone covers unlimited cover-to-cover
            listening.
          </li>
          <li>
            <strong>You want local narration.</strong> Your books are not
            uploaded to a speech server to be read aloud.
          </li>
          <li>
            <strong>You listen offline.</strong> Planes, subways, dead zones.
            Books already on the device can be narrated offline. Test your
            desired voice and book before travel.
          </li>
          <li>
            <strong>You dislike subscriptions.</strong> $199.99 once, yours
            for life, or a free tier you can genuinely live on.
          </li>
          <li>
            <strong>You use Apple devices.</strong> {MAC.precise} Narration
            includes word-by-word highlighting.
          </li>
        </ul>
        <p>
          Mac-focused and weighing alternatives more broadly? See{" "}
          <Link
            href="/speechify-alternative-for-mac"
            className="text-loudBlue hover:underline"
          >
            the best Speechify alternative for Mac
          </Link>
          .
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
          a DRM-free EPUB or PDF, or grab a free classic from the built-in catalog,
          and press play. No account, no trial countdown on listening, no
          card required.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try LoudReader free"
        subline={`${FREE_TIER.full} LoudReader ${DIFFERENTIATORS.native}.`}
      />
    </MoneyPageLayout>
  );
}

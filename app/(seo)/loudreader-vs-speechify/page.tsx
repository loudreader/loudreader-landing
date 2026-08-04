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
          It's fully on-device and private, your library never leaves your
          device, with natural offline voices, no account, and no word quota.
          Its free tier includes unlimited listening on every book, cover to
          cover; Premium is $7.99/month, $49.99/year, or $199.99 once. Pick
          Speechify for breadth and languages; pick LoudReader for private,
          unlimited, long-form listening on native Mac and iPhone apps. Full
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
          as it is read, and the app works with the network switched off.
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
          The short version: LoudReader wins on privacy, price, offline use,
          and unlimited long-form listening. Speechify wins on breadth:
          languages, voice variety, platforms, and AI features.
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
          ceiling. There's no one-time purchase.
        </p>
        <p>
          <strong>LoudReader:</strong> the free tier includes unlimited
          listening on every book cover to cover, an unlimited library,
          word-by-word highlighting, the full Project Gutenberg catalog, and
          every voice free for your first 8 hours (after that you keep the
          default voice). Premium adds all 23 studio narrators plus playback speed
          (0.3x to 3.0x), a sleep timer, ambient soundscapes, and notes &amp;
          highlights. That's $7.99/month, $49.99/year, or $199.99 once, yours
          for life. All billing goes through Apple. The full breakdown is in
          the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">FAQ</Link>.
        </p>
      </QuestionSection>

      <QuestionSection question="Which app is more private?">
        <p>
          LoudReader, and the difference is structural rather than a policy
          promise. Because the text-to-speech engine runs entirely on your
          device, the app functions with the network switched off; there is
          nothing to upload and no account to attach data to. Your books,
          notes, highlights, and reading progress stay on your Mac or iPhone.
          The only network requests are downloads you ask for from the free
          Project Gutenberg catalog. The{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          is two minutes long because there is almost nothing to disclose.
          Speechify is cloud-based by design: sign-in, cloud voices, and
          cloud storage integrations are part of how it works.
        </p>
        <p>
          For a confidential contract, a medical document, or an unpublished
          manuscript, &quot;read aloud without being uploaded anywhere&quot;
          is the whole ballgame.
        </p>
      </QuestionSection>

      <QuestionSection question="When is Speechify the better choice?">
        <p>Honestly, in quite a few situations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>You need a language we don&apos;t cover.</strong> Speechify
            offers 60+ languages. LoudReader has 10 — English, Spanish, German,
            French, Italian, Dutch, Polish, Portuguese, Swedish and Danish —
            each with a narrator recorded in that language. If yours is not on
            that list, Speechify wins outright.
          </li>
          <li>
            <strong>You want voice variety.</strong> 1000+ voices including
            celebrity voices, versus LoudReader&apos;s 23 natural offline
            narrators (plus any voice you clone from your own).
          </li>
          <li>
            <strong>You&apos;re not all-in on Apple.</strong> Speechify runs on
            Android, in any browser, and as a Chrome extension. LoudReader
            requires macOS 15+ on Apple Silicon or iOS 18+.
          </li>
          <li>
            <strong>You want the AI suite.</strong> Scanning physical books,
            AI summaries and chats, voice typing, AI podcasts. LoudReader
            has none of that, by design.
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
            <strong>You care where your files go.</strong> Fully on-device,
            no account, no upload.
          </li>
          <li>
            <strong>You listen offline.</strong> Planes, subways, dead zones.
            Speech is generated locally, so connectivity never matters.
          </li>
          <li>
            <strong>You dislike subscriptions.</strong> $199.99 once, yours
            for life, or a free tier you can genuinely live on.
          </li>
          <li>
            <strong>You live on Mac and iPhone.</strong> Native Mac and
            iPhone apps, built for long-form reading with word-by-word
            highlighting.
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
          any EPUB or PDF, or grab a free classic from the built-in catalog,
          and press play. No account, no trial countdown on listening, no
          card required.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try LoudReader free"
        subline="Unlimited listening, no account, no word quota. Native Mac and iPhone apps."
      />
    </MoneyPageLayout>
  );
}

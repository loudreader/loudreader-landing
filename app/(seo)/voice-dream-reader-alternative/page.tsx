import type { Metadata } from "next";
import Link from "next/link";

import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import LastUpdated from "@/components/money/LastUpdated";
import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, CLONING, FREE_TIER, MAC, PRICING, PRIVACY, VOICES } from "@/components/money/site";

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
          built around on-device AI speech. It narrates DRM-free EPUBs and PDFs
          with natural offline voices and word-by-word highlighting, without
          uploading books to a speech server. {FREE_TIER.full} Premium costs{" "}
          {PRICING.premiumMonthly}, {PRICING.premiumYearly}, or{" "}
          {PRICING.premiumLifetime}, with prices varying by storefront. The July 14
          comparison lists Voice Dream&apos;s $79.99/year subscription for new
          users, introduced in May 2024. {MAC.precise}{" "}
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
          cost, but if you&apos;re new, the subscription is the deal on the
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
          LoudReader narrates DRM-free EPUBs, PDFs and saved web articles using
          speech generated on your device. Scanned PDFs use on-device text
          recognition, with results depending on the scan and layout. {MAC.precise}{" "}
          No LoudReader account is required to import books and listen.
        </p>
        <p>
          As the voice reads, each word highlights in the text so your eyes
          and ears stay in sync, the same read-along experience Voice Dream
          users know. A built-in catalog lets you browse and download 70,000+
          Project Gutenberg books, subject to local copyright. LoudReader is
          made by a solo developer. {FREE_TIER.full} See the{" "}
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
          LoudReader offers local neural narration and free book listening
          without a LoudReader account. Voice Dream Reader offers a broader
          range of formats and languages, with an established accessibility
          toolkit. Listen to a sample of each before choosing a voice.
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
            DRM-free EPUBs and PDFs, including on-device text recognition for
            scanned PDFs, plus saved web articles. OCR results vary by document.
          </li>
          <li>
            <strong>Languages and voice count.</strong> 200+ premium voices
            across 30 languages, versus LoudReader&apos;s {VOICES.headline}.{" "}
            {VOICES.availability} Languages can be selected in Settings.
          </li>
          <li>
            <strong>Ecosystem extras.</strong> A companion Apple Watch app,
            a Safari extension, iCloud library sync, and document scanning
            with OCR (via Voice Dream Scanner). LoudReader also has on-device
            OCR, but does not automatically sync libraries or reading positions
            between devices.
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
          <strong>LoudReader:</strong> {FREE_TIER.full} {FREE_TIER.choice}{" "}
          Word-by-word highlighting, notes and highlights are available without
          Premium. You can browse and download Project Gutenberg classics,
          subject to local copyright. Premium adds {PRICING.premiumFeatures}.
          It costs {PRICING.premiumMonthly}, {PRICING.premiumYearly}, or{" "}
          {PRICING.premiumLifetime}; prices vary by storefront. {CLONING.trial}{" "}
          All billing goes through Apple.
        </p>
      </QuestionSection>

      <QuestionSection question="Is LoudReader private and offline like Voice Dream?">
        <p>
          Both apps support offline listening. Voice Dream states that it does
          not require an internet connection. LoudReader narrates books already
          on your device offline without uploading them to a speech server.
          Install and open the app, then test your chosen book and voice before
          travelling. See the{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          for details.
        </p>
        <p>
          {PRIVACY.summary} Usage analytics is enabled by default. Installation,
          purchases and book or article downloads
          also need network access. Local narration does not mean the entire app
          never connects to the internet.
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
          (iOS 18+ on iPhone and iPad, or the compatible iPad app on Apple Silicon
          Macs with macOS 15+), import a DRM-free EPUB or PDF, or download a
          classic from the built-in catalog, and press play. No LoudReader
          account or payment is required to start listening. If you&apos;re also
          weighing the bigger cloud apps, see
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
        subline="Natural offline narration with a free English voice selection. iPhone, iPad, and compatible Apple Silicon Macs via the iPad app."
      />
    </MoneyPageLayout>
  );
}

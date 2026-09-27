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

export default function ElevenReaderAlternativePage() {
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
          <strong>LoudReader</strong> is an ElevenReader alternative for people
          who want books narrated on their device without uploading them to a
          speech server. It reads DRM-free EPUBs and PDFs with natural offline
          voices and word-by-word highlighting. {FREE_TIER.full} In the July 14
          comparison, ElevenReader&apos;s free plan caps text-to-audio at 10
          hours per month and unlimited listening on your own imports requires
          Ultra at $11/month. {MAC.precise} Choose ElevenReader instead if you want
          1,000+ cloud voices, 30+ languages, a premium audiobook store, or
          Android support.
        </p>
      </Tldr>

      <QuestionSection question="Why look for an ElevenReader alternative?">
        <p>
          ElevenReader is a strong product backed by ElevenLabs&apos; voice
          technology, but it&apos;s built as a cloud service, and that shows up in a
          few places. First, uploads: their own pitch is &quot;simply upload and
          press play,&quot; so your PDFs, EPUBs, and articles are converted to
          audio in the cloud, not on your device. Second, metering: the free
          plan includes 10 hours of text-to-audio per month, which ElevenLabs
          itself describes as about a 400-page book. That&apos;s fine for casual use
          and tight if you actually listen to books. Removing the cap on your
          own imports means Ultra at $11/month or $99/year. Third, platforms:
          there are iOS and Android apps, a web app, and a Chrome extension, but
          no Mac app, and you must create an account before you can listen at
          all.
        </p>
        <p>
          If what you mostly want is <em>your own books read aloud, privately,
          on a Mac and iPhone</em>, and not an AI audio platform, those are
          three good reasons to look around.
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
          and ears stay in sync. A built-in catalog lets you browse and download
          70,000+ Project Gutenberg books, subject to local copyright. LoudReader
          is made by a solo developer. {FREE_TIER.full} See the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">FAQ</Link>{" "}
          for the full free-vs-Premium breakdown.
        </p>
      </QuestionSection>

      <QuestionSection question="How do LoudReader and ElevenReader compare?">
        <ComparisonTable
          caption="Feature and pricing comparison of LoudReader and ElevenReader"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          LoudReader offers local narration, unlimited free book listening and
          iPad-app compatibility on Apple Silicon Macs. ElevenReader offers
          a broader voice catalog, more languages, an audiobook store and
          support beyond Apple devices.
        </p>
      </QuestionSection>

      <QuestionSection question="What is ElevenReader still better at?">
        <p>An honest list, because it matters for the decision:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Voice variety.</strong> 1,000+ voices, including licensed
            &quot;Iconic&quot; celebrity voices and custom voices you can
            design from a text prompt. LoudReader offers {VOICES.headline}.{" "}
            {VOICES.availability}
          </li>
          <li>
            <strong>Languages.</strong> ElevenReader supports 30+ languages.
            LoudReader&apos;s studio roster covers 10; availability depends on
            the device. Languages can be selected in Settings.
          </li>
          <li>
            <strong>Audiobook store.</strong> Ultra includes access to a
            200,000+ premium audiobook and eBook library. LoudReader&apos;s
            built-in catalog is public-domain classics from Project Gutenberg.
          </li>
          <li>
            <strong>Platform reach.</strong> ElevenReader runs on Android and
            in any browser. LoudReader is Apple-only; its iPad app runs on
            compatible Apple Silicon Macs with macOS 15+.
          </li>
          <li>
            <strong>AI extras.</strong> GenFM turns your content into
            AI-hosted podcasts. Nothing like that exists in LoudReader, by
            design.
          </li>
        </ul>
        <p>
          If any of those is a must-have, ElevenReader is the right call, and
          no comparison table should talk you out of it.
        </p>
      </QuestionSection>

      <QuestionSection question="How much does each app cost?">
        <p>
          <strong>ElevenReader:</strong> the free plan includes 10 hours of
          text-to-audio per month, 1,000+ voices, and thousands of free
          classic audiobooks. Ultra costs $11/month, or $99/year (about
          $8.25/month billed annually), and adds unlimited text-to-audio on
          your imports, the premium audiobook library, offline downloads, and
          custom voice creation. There is no one-time purchase option.
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

      <QuestionSection question="What happens to your files in each app?">
        <p>
          ElevenReader is a cloud reader: you upload a file or paste a link,
          ElevenLabs converts it to audio, and your library syncs through your
          account. LoudReader narrates books already on your device offline;
          books are not uploaded to a speech server for narration. It does not
          automatically sync your library or reading position between devices.
          See the{" "}
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
          account or payment is required to start listening.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try the private ElevenReader alternative"
        subline="Unlimited free book listening with a free English voice selection. iPhone, iPad, and compatible Apple Silicon Macs via the iPad app."
      />
    </MoneyPageLayout>
  );
}

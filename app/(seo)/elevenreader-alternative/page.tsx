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
          who want their books read aloud without uploading them. It's fully
          on-device and private, your library never leaves your device, and it
          turns any EPUB or PDF into an audiobook with natural offline voices
          and word-by-word highlighting. There's no account and no listening
          meter. The free tier includes unlimited listening on every book, cover
          to cover, while ElevenReader&apos;s free plan caps text-to-audio at 10
          hours per month and unlimited listening on your own imports requires
          Ultra at $11/month. LoudReader also ships native Mac and iPhone apps;
          ElevenReader has no Mac app. Choose ElevenReader instead if you want
          1,000+ cloud voices, 30+ languages, a premium audiobook store, or
          Android support.
        </p>
      </Tldr>

      <QuestionSection question="Why look for an ElevenReader alternative?">
        <p>
          ElevenReader is a strong product backed by ElevenLabs&apos; voice
          technology, but it's built as a cloud service, and that shows up in a
          few places. First, uploads: their own pitch is &quot;simply upload and
          press play,&quot; so your PDFs, EPUBs, and articles are converted to
          audio in the cloud, not on your device. Second, metering: the free
          plan includes 10 hours of text-to-audio per month, which ElevenLabs
          itself describes as about a 400-page book. That's fine for casual use
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
          listening on every book, cover to cover, with no quota. See the{" "}
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
          The short version: LoudReader wins on privacy, unlimited free
          listening, offline use, and having a real Mac app. ElevenReader
          wins on voice variety, languages, its audiobook store, and platform
          reach beyond Apple devices.
        </p>
      </QuestionSection>

      <QuestionSection question="What is ElevenReader still better at?">
        <p>An honest list, because it matters for the decision:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Voice variety.</strong> 1,000+ voices, including licensed
            &quot;Iconic&quot; celebrity voices and custom voices you can
            design from a text prompt. LoudReader offers 23 natural offline
            voices.
          </li>
          <li>
            <strong>Languages.</strong> ElevenReader supports 30+ languages.
            LoudReader covers 10, each with its own native narrator.
          </li>
          <li>
            <strong>Audiobook store.</strong> Ultra includes access to a
            200,000+ premium audiobook and eBook library. LoudReader&apos;s
            built-in catalog is public-domain classics from Project Gutenberg.
          </li>
          <li>
            <strong>Platform reach.</strong> ElevenReader runs on Android and
            in any browser. LoudReader is Apple-only, and the Mac app needs
            Apple Silicon (macOS 15+).
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
          <strong>LoudReader:</strong> the free tier includes unlimited
          listening on every book cover to cover, an unlimited library,
          word-by-word highlighting, the full Project Gutenberg catalog, and
          every voice free for your first 8 hours (after that you keep the
          default voice). Premium adds all 23 studio narrators plus playback speed
          (0.3x to 3.0x), a sleep timer, ambient soundscapes, and notes &amp;
          highlights. That's $7.99/month, $49.99/year, or $199.99 once, yours
          for life. All billing goes through Apple.
        </p>
      </QuestionSection>

      <QuestionSection question="What happens to your files in each app?">
        <p>
          This is the deepest difference between the two. ElevenReader is a
          cloud reader: you upload a file or paste a link, ElevenLabs converts
          it to audio, and your library syncs through your account. LoudReader
          generates every word of speech on your Mac or iPhone, so it works with
          the network switched off, and the app collects no personal data.
          Your books, notes, highlights, and reading progress stay on your
          device; the only network requests are downloads you ask for from
          the free Project Gutenberg catalog. The{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            privacy policy
          </Link>{" "}
          is two minutes long because there is almost nothing to disclose.
        </p>
        <p>
          That matters most for what you read: contracts, medical documents,
          manuscripts, unpublished drafts. With LoudReader, a confidential PDF
          is read aloud without ever being uploaded anywhere.
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
          and press play. No account, no upload, no card required.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try the private ElevenReader alternative"
        subline="Unlimited free listening, no upload, no account. Native Mac and iPhone apps."
      />
    </MoneyPageLayout>
  );
}

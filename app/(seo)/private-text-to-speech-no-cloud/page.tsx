import type { Metadata } from "next";
import Link from "next/link";

import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import LastUpdated from "@/components/money/LastUpdated";
import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER, MAC, PRIVACY, VOICES } from "@/components/money/site";

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

export default function PrivateTextToSpeechNoCloudPage() {
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
          Private text to speech means the audio is generated on your own
          device, without uploading your text to a speech provider for narration.
          With any cloud TTS service, every sentence you listen to must be
          transmitted to the provider to be synthesized. With on-device TTS,
          text does not need to be sent to a speech provider. <strong>LoudReader</strong> is a
          text-to-speech reader for Mac and iPhone built exactly this way:
          speech is generated locally without a book upload. It requires no account and reads EPUBs, PDFs, and
          articles aloud with natural offline voices. Once content and voices are ready, narration can work offline. That matters most for
          what you actually read, like contracts, medical records, unpublished
          manuscripts, and client documents.
        </p>
      </Tldr>

      <QuestionSection question="What makes a text-to-speech app private?">
        <p>Separate the speech engine from the rest of the app. Local synthesis avoids uploading your text for narration; it does not mean an application makes no network requests.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Speech processing.</strong> LoudReader generates narration and recognises scanned text on your device.</li>
          <li><strong>Account.</strong> No LoudReader account is required. That does not establish that an app collects no data.</li>
          <li><strong>Diagnostics.</strong> {PRIVACY.summary}</li>
          <li><strong>Downloads.</strong> Getting a book, saving a web article or making a purchase uses a connection.</li>
        </ul>
        <p>The <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link> describes these flows.</p>
      </QuestionSection>

      <QuestionSection question="Why does cloud text to speech expose your documents?">
        <p>
          It isn&apos;t malice, it&apos;s architecture. A cloud TTS service
          synthesizes speech on its own servers, which means your text has to
          travel there. That&apos;s unavoidable physics of the design: to hear
          a contract read aloud by a cloud voice, you send the contract. What
          happens next depends on each provider&apos;s terms (retention,
          logging, processing location), which you have to read, trust, and
          re-check every time they change.
        </p>
        <p>
          On-device TTS removes the question instead of answering it.
          There is no speech-service copy of your document, but an app may still use external services for other purposes. For a novel this may not matter much; for a
          medical report, an unpublished manuscript, or a client&apos;s legal
          brief, it&apos;s the whole decision.
        </p>
      </QuestionSection>

      <QuestionSection question="How can I test whether TTS is really on-device?">
        <p>Download the voice resources, disconnect, and try a passage that has not already been rendered. That checks whether the app can generate new speech offline.</p>
        <p>Offline playback alone is not proof of local synthesis: downloaded cloud audio also plays without a connection. It also says nothing about analytics sent when connectivity returns. Check the architecture and privacy disclosures separately.</p>
      </QuestionSection>

      <QuestionSection question="How does on-device TTS compare with cloud TTS?">
        <ComparisonTable
          caption="Comparison of on-device text to speech (LoudReader) with typical cloud text-to-speech services on privacy, offline use, and breadth"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
        <p>
          For a concrete, fact-checked example of the cloud column (pricing,
          word metering, sign-in requirements), see the{" "}
          <Link
            href="/speechify-alternative-for-mac"
            className="text-loudBlue hover:underline"
          >
            LoudReader vs Speechify comparison
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What is LoudReader?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          turns any EPUB, PDF, or article into an audiobook with natural
          offline voices, on iPhone, iPad, and Apple Silicon Macs. Import a document
          and press play: a neural voice reads while each word highlights in
          the text, and your place is saved automatically. The free tier
          includes unlimited listening on every book, cover to cover, with no
          word quota. Private reading shouldn&apos;t be the expensive option.
          Its built-in catalog lets you browse and download 70,000+ Project Gutenberg titles, subject to local copyright, and the
          same on-device narration works for{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            PDFs on your iPhone
          </Link>{" "}
          and{" "}
          <Link
            href="/listen-to-articles-mac"
            className="text-loudBlue hover:underline"
          >
            articles on your Mac
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What do you give up by going no-cloud?">
        <p>
          An honest accounting, because the trade-off is real:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Languages and voice variety.</strong> Cloud services
            generally offer dozens of languages and huge voice catalogs.
            LoudReader has 23 natural offline narrators across 10 languages,
            plus any voice you clone from your own on the device.
          </li>
          <li>
            <strong>Hardware.</strong> Running a neural engine locally takes
            modern silicon: LoudReader needs an Apple Silicon Mac (macOS 15+)
            or an iPhone/iPad on iOS 18+. Cloud TTS runs on anything with a
            browser.
          </li>
          <li>
            <strong>Extras.</strong> Some cloud suites offer AI summaries and browser extensions. LoudReader focuses on reading and also includes on-device voice cloning, with a three-clone trial allowance.
          </li>
        </ul>
        <p>
          Choose according to the documents, voices and controls you need. Local synthesis avoids a speech-provider upload; assess diagnostics, storage and your organisation’s requirements separately.
        </p>
      </QuestionSection>

      <p>{MAC.precise} {VOICES.availability}</p>
      <p>{FREE_TIER.full}</p>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Speech generated on your own device"
        subline="Local narration for books, PDFs, and saved articles. No LoudReader account or book-listening word quota."
      />
    </MoneyPageLayout>
  );
}

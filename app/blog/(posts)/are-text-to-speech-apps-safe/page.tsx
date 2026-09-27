import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function AreTextToSpeechAppsSafeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          A text-to-speech app needs the text you want it to read, but it does
          not always need to send that text to a server. Start by checking
          where narration happens, then look separately at document storage,
          analytics and account features. <strong>Local speech is a useful
          privacy property, not a complete security guarantee.</strong> A
          cloud service may be suitable when its terms and your requirements
          agree; an offline app may still contact diagnostic services.
          LoudReader generates speech locally and sends usage analytics and
          crash/performance diagnostics. This guide explains what to check
          before importing a personal or work document, and what an offline
          playback test can actually establish.
        </p>
      </Tldr>

      <ArticleIllustration variant="offline" caption="Check narration, storage and diagnostics separately." />

      <QuestionSection question="Does text to speech upload the whole document?">
        <p>
          Cloud speech generation sends the text being synthesised to a
          service. Depending on the product, that might be a sentence, a
          chapter, or an uploaded document. Do not assume every service keeps
          a permanent copy of the entire file: its processing and retention
          policy should explain that. Some apps offer both local and cloud
          voices, so check the voice you actually selected.
        </p>
        <p>
          With on-device synthesis, the speech model can turn text into audio
          locally. Other features may still upload documents for syncing,
          conversion or backup. Ask about those features as well as the
          voice. The same distinction applies to a scanned PDF: finding text
          in an image and reading that text aloud are separate operations.
        </p>
      </QuestionSection>

      <QuestionSection question="What should you check before importing a file?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Processing:</strong> which features send text, document images or audio to a service?</li>
          <li><strong>Storage:</strong> is content kept only for processing, saved to an account, or included in backups?</li>
          <li><strong>Other uses:</strong> does the provider describe analytics, model improvement and third-party recipients separately?</li>
          <li><strong>Controls:</strong> can you remove uploaded content, disable optional collection and close an account?</li>
          <li><strong>Device access:</strong> do requested permissions fit the feature, such as camera access for scanning?</li>
        </ol>
        <p>
          Apple&apos;s <a href="https://support.apple.com/en-gb/102399" className="text-loudBlue hover:underline">App Store privacy information</a>
          {" "}is supplied by developers. It is a useful starting point alongside
          the full policy, rather than independent proof of every behaviour.
          A short policy is not inherently better than a detailed one. If a
          point matters to your use and is unclear, ask the provider before
          supplying the document.
        </p>
      </QuestionSection>

      <QuestionSection question="Does airplane mode prove an app is private?">
        <p>
          No. It can show that a particular passage plays without a current
          connection. Audio may have been cached earlier, and an app may
          queue diagnostic events to send later. Failure offline can also
          mean a missing voice download or a licence check; it does not prove
          your document was uploaded.
        </p>
        <p>
          For a useful availability check, install the app and desired voice,
          disconnect Wi-Fi and cellular, then import a new, non-sensitive
          local file and try several sections. Treat the result as evidence
          about that workflow. On iPhone and iPad, Apple&apos;s{" "}
          <a href="https://support.apple.com/en-gb/102188" className="text-loudBlue hover:underline">App Privacy Report</a>
          {" "}can show contacted domains, but a domain list alone does not tell
          you the contents of each request.
        </p>
      </QuestionSection>

      <QuestionSection question="How does LoudReader handle these questions?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>
          {" "}imports books into local app storage and generates narration on
          the device. It is an iPhone and iPad app that also runs on compatible
          Apple Silicon Macs as an iPad app. No LoudReader account is required.
          This removes a speech-server upload from the reading workflow.
        </p>
        <p>
          It does not remove every network connection. Version 1.12 sends
          TelemetryDeck usage analytics, enabled by default, and Sentry crash
          and performance diagnostics. Its Settings screen does not currently
          expose an analytics switch. The app is designed to exclude reading
          text from those reports and scrubs diagnostic paths and URLs; that
          is not a promise that software can never contain a privacy defect.
          Downloads and App Store purchases involve other services too.
        </p>
        <p>
          Read the <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link>
          {" "}for the disclosure, and use the{" "}
          <Link href="/blog/listen-to-confidential-documents" className="text-loudBlue hover:underline">confidential-document checklist</Link>
          {" "}when device permissions, backups and where you listen matter as
          much as speech generation.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Read with speech generated on your device" subline="Import a non-sensitive sample first and check the voice, document layout and privacy settings for your workflow." />
    </ArticleLayout>
  );
}

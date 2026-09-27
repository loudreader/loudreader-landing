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

export default function WhatHappensToYourDataArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader processes imported books and generates speech on your
          device. It does not upload a book to a speech service for narration.
          It also uses <strong>TelemetryDeck for usage analytics and Sentry
          for crash and performance diagnostics</strong>. Analytics is on by
          default; version 1.12 does not expose an analytics switch in
          Settings. Downloads and App Store purchases involve network
          services too. Those are different kinds of data handling, and
          &ldquo;on-device&rdquo; should not blur them together. This account
          was checked against release 1.12 on 28 September 2026; it describes
          the source configuration, not an independent capture and audit of
          all traffic from the installed app.
        </p>
      </Tldr>

      <ArticleIllustration variant="offline" caption="Local reading content and external diagnostic services are separate parts of the app." />

      <QuestionSection question="Which parts of reading happen locally?">
        <p>
          Imported EPUB and PDF files are processed into the app&apos;s local
          library, and speech is generated on the device. The current app
          also uses local text recognition for scanned PDFs. Reading an
          existing book therefore does not require a speech-server request
          for each passage.
        </p>
        <p>
          This is a narrower claim than saying that no copy of a book can
          ever exist elsewhere. Your source may be in iCloud Drive or an email
          attachment; device backup settings are another consideration.
          LoudReader has no automatic library or reading-position sync
          between devices. Removing a library item does not remove originals
          from those other places.
        </p>
      </QuestionSection>

      <QuestionSection question="What does usage analytics describe?">
        <p>
          The app uses TelemetryDeck to count feature usage and reliability
          events. Examples include opening a book, importing a file with a
          format and source category, starting playback and ending a listening
          session. Session statistics can include a duration range, playback
          speed and the speech engine used. The analytics SDK also supplies
          app and device context such as app version, operating-system version
          and platform.
        </p>
        <p>
          The reviewed event definitions are designed not to include book
          titles or reading text. That does not make them &ldquo;no
          data&rdquo;: they still describe how the app is used. Analytics is
          enabled by default. Release 1.12 contains an internal opt-out
          preference, but the user-facing switch is hidden. There is no
          Settings action we can currently tell a reader to use to turn it
          off. We do not treat the existence of unused toggle code as a
          shipping privacy control.
        </p>
      </QuestionSection>

      <QuestionSection question="What is sent for crashes and performance?">
        <p>
          Sentry is a separate diagnostic channel. It helps identify crashes,
          app hangs, memory pressure and performance problems using information
          such as stack traces, app/device context and diagnostic measurements.
          It is active in the release build and has no separate in-app switch.
          Turning off a usage-analytics preference, where a future version
          offers one, would not by itself disable this channel.
        </p>
        <p>
          The release configuration disables default personal-information
          collection, screenshot attachments and session replay. It also
          disables automatic file and network tracing. Error reports and
          diagnostic breadcrumbs pass through filters intended to remove
          file paths and filenames, reduce web addresses to the host and
          remove query details that might disclose a search or article.
        </p>
        <p>
          These are safeguards, not an assurance that no unexpected value
          could ever reach a diagnostic report. Pattern filters cannot
          recognise every possible book title. Avoiding reading content in
          the event definitions and keeping those safeguards reviewed both
          matter. We have not independently audited all transmitted payloads
          for this article.
        </p>
      </QuestionSection>

      <QuestionSection question="What other activity can contact a service?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Getting content:</strong> fetching a catalogue book or saving an article requests content from the relevant service or website. The destination necessarily receives the request for that resource.</li>
          <li><strong>Getting resources:</strong> installation, updates or resources needed by a selected feature can require downloads. Test the desired book and voice offline before relying on them away from a connection.</li>
          <li><strong>Purchases:</strong> buying or restoring Premium uses Apple&apos;s App Store services. A LoudReader account is not required, but Apple&apos;s purchase account still applies.</li>
          <li><strong>Diagnostics:</strong> analytics and reliability reporting operate separately from whether a new document is being fetched.</li>
        </ul>
        <p>
          This list explains the main categories; it is not a packet-by-packet
          inventory of every system request. A website&apos;s data handling
          when you fetch an article is also separate from LoudReader&apos;s
          local narration of the resulting text.
        </p>
      </QuestionSection>

      <QuestionSection question="What can you check for yourself?">
        <p>
          Start with the current <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link>
          {" "}and app version. On iPhone and iPad, Apple&apos;s{" "}
          <a href="https://support.apple.com/en-gb/102188" className="text-loudBlue hover:underline">App Privacy Report</a>
          {" "}can show contacted domains. It does not show the full contents of
          requests, so a connection alone does not establish that a book was
          uploaded—or that the request contained nothing sensitive.
        </p>
        <p>
          Disconnecting connectivity can check offline availability, but
          cannot establish what happened earlier or what may be delivered
          later. For a general evaluation use the{" "}
          <Link href="/blog/are-text-to-speech-apps-safe" className="text-loudBlue hover:underline">TTS privacy checklist</Link>.
          If your requirement is no external diagnostics, the current
          LoudReader configuration does not offer that guarantee. Knowing
          that limitation is part of choosing the right reading workflow.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Local speech, with a clear data disclosure" subline="LoudReader narrates books on your device. Review its analytics and diagnostic practices alongside that benefit." />
    </ArticleLayout>
  );
}

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

export default function NoAccountArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          You can import and listen in <strong>LoudReader without creating a
          LoudReader account</strong>: there is no email-and-password sign-up
          for the reader. That is useful if you want to open a book without
          managing another login. It does not mean every service is
          anonymous, that the app collects no diagnostics, or that App Store
          purchases are account-free. Books and reading positions do not
          automatically sync between devices. This guide separates those
          questions so you know what to expect before moving a library onto
          your phone, iPad or compatible Apple Silicon Mac.
        </p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Import and listen without creating a separate LoudReader login." />

      <QuestionSection question="What can you do without signing up?">
        <p>
          Install <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>,
          {" "}import a supported DRM-free EPUB or PDF and start listening.
          There is no LoudReader profile to create or email address to verify.
          The iPhone and iPad app can also run on Apple Silicon Macs through
          Apple&apos;s iPad compatibility mode.
        </p>
        <p>
          Account requirements and payment limits are separate. The first
          eight hours of listening let you try every available voice. After
          that, unlimited book listening remains available with a free English
          voice selection: Stella or Rio, plus Bella on supported devices.
          Premium unlocks additional features and voices; skipping a sign-up
          does not mean all features are permanently free.
        </p>
      </QuestionSection>

      <QuestionSection question="Does no login mean no data collection?">
        <p>
          No. An app can send usage events and diagnostic information without
          collecting an email address or running its own account service.
          In LoudReader 1.12, TelemetryDeck usage analytics is on by default and
          Sentry collects crash/performance diagnostics. The Settings screen
          does not currently expose the usage-statistics switch. These
          systems are designed to exclude the text you read; they are still
          separate services involved in using the app.
        </p>
        <p>
          <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">On-device narration</Link>
          {" "}means your book is not uploaded to a speech server to create the
          voice. It does not describe all network activity. Consult the{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link>
          {" "}if data collection is the reason you want to avoid accounts.
        </p>
      </QuestionSection>

      <QuestionSection question="Will my book and reading position follow me to another device?">
        <p>
          No automatic library or reading-position sync is currently offered.
          Import the book separately on each device and keep track of your
          place when switching. Opening a source file from iCloud Drive is
          different from syncing the app&apos;s library: having the EPUB in
          Files on two devices does not transfer LoudReader&apos;s reading
          position between them.
        </p>
        <p>
          This is the app&apos;s current feature set, not a technical rule
          that every app without a separate login must lack sync. Likewise,
          no library-sync feature does not mean your device has no backup.
          Check device backup settings and retain your original books before
          changing or replacing a device.
        </p>
      </QuestionSection>

      <QuestionSection question="How do purchases work without a LoudReader account?">
        <p>
          Premium uses Apple&apos;s in-app purchase system. Your Apple Account
          used for the App Store is separate from a LoudReader login. To
          recover an eligible purchase, use the app&apos;s restore option and
          the same Apple Account that made the purchase. Apple explains the
          process in its <a href="https://support.apple.com/en-gb/108096" className="text-loudBlue hover:underline">purchase restoration guide</a>.
        </p>
        <p>
          Restoring Premium restores the entitlement, not your books or your
          place in them. If you are moving to another device, plan the library
          transfer separately. That distinction avoids the surprise of a
          successfully restored purchase alongside an empty reading library.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Start listening without another login" subline="No LoudReader account required. Try the voices, then keep free English listening after the eight-hour voice allowance." />
    </ArticleLayout>
  );
}

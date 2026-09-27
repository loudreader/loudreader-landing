"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONSENT_STORAGE_KEY } from "@/components/analytics/Analytics";

/** Clear the stored website-analytics consent choice and re-show the banner. */
function resetAnalyticsConsent() {
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // Storage unavailable — nothing stored, nothing to reset.
  }
  window.location.reload();
}

export default function PrivacyPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Header */}
      <motion.section
        className="text-center py-16 md:py-24 px-6 w-full bg-gradient-to-b from-softBeige via-white to-softBeige"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="LoudReader Logo"
              width={80}
              height={80}
              className="mx-auto mb-6 drop-shadow-lg hover:scale-105 transition-transform"
            />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: 28 September 2026
          </p>
        </div>
      </motion.section>

      {/* Content */}
      <section className="w-full bg-white py-16 md:py-20 px-6 border-t border-gray-100">
        <motion.div
          className="max-w-3xl mx-auto prose prose-gray prose-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What this policy covers</h2>
              <p>
                This policy describes the LoudReader app and the loudreader.io website. <strong>LoudReader generates speech on your device.</strong> Your reading library and voice processing are separate from the app&apos;s usage analytics and technical diagnostics, which send information to the services described below.
              </p>
              <p className="mt-4">
                You do not need a LoudReader account to read or listen. That does not mean the app collects no data: the current app uses TelemetryDeck for product analytics and Sentry for reliability and performance diagnostics. Website analytics have a separate consent choice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your library and voice processing</h2>
              <p>
                Imported books, notes, highlights, reading progress and cached audio are stored on your device. Text-to-speech and voice cloning run locally; they do not require uploading your book text or voice recording to a speech service. Downloaded content and installed voices can be used without an internet connection.
              </p>
              <p className="mt-4">
                If you choose to share or export content, the destination you select handles that copy. Files you import from a cloud-storage provider are also subject to that provider&apos;s practices. Local speech processing does not change the behaviour of those separate services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product analytics in the app</h2>
              <p>
                We use TelemetryDeck to understand feature use and identify problems. Signals include app launches, imports, playback starts and completions, approximate listening-duration ranges, playback speed, voice or engine selection, feature interactions, purchase-flow events and error categories. Custom cloned voices are reported as a shared category, not by their individual name or identifier. These product events do not include book titles, book text, notes or voice recordings.
              </p>
              <p className="mt-4">
                The SDK also includes technical information such as device model, operating-system and app versions, language and locale, display and accessibility settings, session information and a hashed identifier used to count usage. Hashing an identifier is different from collecting no information. See <a href="https://telemetrydeck.com/docs/guides/privacy-faq/" className="underline">TelemetryDeck&apos;s privacy information</a> for its processing practices.
              </p>
              <p className="mt-4">
                <strong>Product analytics are enabled by default. Version 1.12 does not expose an in-app switch to turn them off.</strong> A previously stored opt-out preference is still honoured. When such a preference applies, it suppresses new usage signals; events already queued or in transit can still be delivered. The website consent banner does not control app analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Crash and performance diagnostics</h2>
              <p>
                We use Sentry to investigate crashes, errors, app hangs, memory problems and performance. Diagnostics can include stack traces, app-session information, device and operating-system details, app version, memory measurements, technical breadcrumbs and sampled performance traces and profiles. They are enabled in the app and have no separate in-app off switch in version 1.12.
              </p>
              <p className="mt-4">
                The release app disables Sentry&apos;s default personally identifying data option, screenshots, session replay, file-operation tracing and network-request tracing. It also applies filters to diagnostic messages and breadcrumbs to remove file paths and book filenames and to reduce URLs to their host. These measures limit diagnostic content; they are not a claim that no data is sent. See <a href="https://docs.sentry.io/platforms/apple/data-management/data-collected/" className="underline">Sentry&apos;s data-collection documentation</a> and <a href="https://sentry.io/privacy/" className="underline">privacy policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Downloads and external websites</h2>
              <p>
                Browsing the public-book catalogue connects to Gutendex. Downloading a book or opening an article connects to the relevant content host, such as Project Gutenberg or the article&apos;s publisher. These requests reveal your network address and the resource requested to the service receiving them. Downloading voice models also requires a network connection.
              </p>
              <p className="mt-4">
                Those providers handle their own requests under their own policies. Local narration does not make browsing, purchases or downloads offline.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Purchases</h2>
              <p>
                Apple handles App Store purchases and subscriptions. The app uses Apple&apos;s StoreKit transaction and entitlement information to determine access, including product, transaction and subscription-status information. We do not collect your payment-card details through the app. Apple describes its processing in <a href="https://www.apple.com/legal/privacy/data/en/app-store/" className="underline">App Store &amp; Privacy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Website analytics and browser storage</h2>
              <p>
                On loudreader.io, Google Analytics loads only after you choose Allow in the website banner. It measures page visits, App Store link clicks and other website interactions. Google Analytics uses cookies and processes information such as page URLs, referral information, browser and device details, approximate location and a browser identifier. Google Signals and advertising-personalisation signals are disabled in our website configuration. See <a href="https://support.google.com/analytics/answer/11593727?hl=en" className="underline">Google&apos;s description of Analytics data collection</a>.
              </p>
              <p className="mt-4">
                If you decline or have not made a choice, our analytics component does not load the Google Analytics script or send analytics requests to Google. Your choice is stored in your browser. This controls website analytics only; it does not change TelemetryDeck or Sentry in the app, or prevent the requests needed to serve the website itself.
              </p>
              <p className="mt-4">
                The button below clears your saved website choice and reloads the page so you can choose again. Choosing Decline prevents Google Analytics from loading on that visit and subsequent visits using the saved choice. It does not delete reports already sent or existing analytics cookies; you can remove stored cookies through your browser settings.
              </p>
              <button
                onClick={resetAnalyticsConsent}
                className="mt-2 px-4 py-2 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Reset analytics choice
              </button>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Support messages</h2>
              <p>
                If you email us or send a bug report, we receive your email address and the information you send, which may include diagnostic details or screenshots. Review your message and attachments before sending, especially if they show reading material or other personal information. We use this information to respond and investigate the issue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing your data</h2>
              <p>
                You can delete books and notes within the app and clear cached audio in Settings. Removing local content does not retract diagnostic events or support messages already sent. Copies you have exported, backed up or shared must be managed separately through the service or device holding them.
              </p>
              <p className="mt-4">
                Analytics, diagnostics, purchases and support involve services outside your device. Their processing and storage can take place in other countries. The provider links above explain their practices; local narration is not a guarantee that every app or website interaction stays on your device or within your country.
              </p>
              <p className="mt-4">
                For privacy questions or requests concerning access, correction or deletion, contact us below. The options available depend on the data involved and applicable law. Please do not send book files or voice recordings to make a privacy request unless they are necessary to explain it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy updates and contact</h2>
              <p>
                We update this page when the practices described here change and show the revision date at the top. For questions about this policy, contact <a href="mailto:jeremi@loudreader.io" className="underline">jeremi@loudreader.io</a>.
              </p>
            </section>

          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/terms" className="hover:text-gray-900 transition-colors">
                Terms of Use
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo2.png"
                alt="LoudReader"
                width={32}
                height={32}
                className="opacity-80"
              />
              <span className="text-gray-600 text-sm">
                © {new Date().getFullYear()} LoudReader. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

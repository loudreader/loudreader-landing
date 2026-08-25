// FACT PROVENANCE. Every claim in this article was verified on 2026-08-24
// against the LoudReader app source (LoudReader_mac repo, main branch), one
// level more concrete than the two related pages it deliberately does not
// repeat (app/blog/(posts)/are-text-to-speech-apps-safe and
// app/(seo)/private-text-to-speech-no-cloud, both already read and used as
// the baseline this article has to exceed):
//   - Book/document content and speech synthesis: no server round-trip.
//     TTS engines run locally on-device (per the existing verified claim on
//     the private-TTS money page and are-text-to-speech-apps-safe); imported
//     files are stored in the app's local container
//     (BookImportService.swift, FileManager .documentDirectory, per the
//     existing verified claim). This article does not re-verify that, it
//     builds on it.
//   - What DOES leave the device, named specifically, which neither existing
//     page enumerates:
//     1. Anonymous product analytics via TelemetryDeck
//        (LoudReader/Analytics.swift). The file's own doc comment states:
//        "All signals are privacy-safe, no PII, titles, or content is
//        sent." Every signal funnels through one choke point, `send(_:
//        parameters:)`, which is the single enforcement point for opt-out.
//        Example signal names read directly from the source: App.updated,
//        Content.bookOpened, Content.articleOpened, Action.bookImported
//        (parameter: file format, e.g. "epub", not a filename or title),
//        Playback.started/completed (parameter: content type, not title),
//        Navigation.tabViewed, Reader.sleepTimerSet (parameter: minutes).
//        None of these signal definitions take a book title, author, file
//        path, or document text as a parameter.
//        Default state: ON. User control: a single toggle in Settings ->
//        Privacy, "Share Anonymous Usage Statistics"
//        (SettingsSheet.swift, bound to Analytics.setEnabled). The toggle's
//        own in-app footer text: "Anonymous feature-usage counts only,
//        never book titles, files, or anything you read. Your library and
//        listening stay on this device either way."
//     2. Crash and error reports via Sentry (LoudReader/LoudReaderApp.swift,
//        LoudReader/ErrorReporting.swift). Always on; there is no
//        user-facing toggle for this channel specifically (only the
//        Analytics/TelemetryDeck toggle exists in Settings). What is sent:
//        crash traces, a bounded [module, kind] fingerprint per defect
//        (e.g. "tts", "low_memory"), device memory stats, and scrubbed
//        text. A `SentryScrubber` (defined in ErrorReporting.swift) runs on
//        every event and breadcrumb via `beforeSend`/`beforeBreadcrumb`
//        before it leaves the device, specifically to strip file paths and
//        URLs; the code's own privacy-invariant comment: "book titles,
//        filenames, file paths, and URLs never leave the device... call
//        sites must not interpolate titles into messages in the first
//        place. The scrubber can only catch patterns (paths, URLs, file
//        extensions), not arbitrary title strings." Several Sentry SDK
//        features that would otherwise leak reading content are explicitly
//        disabled, per inline comments in LoudReaderApp.swift:
//          - enableCaptureFailedRequests = false, because failed-request
//            events "carry full request URLs (article/Gutenberg URLs
//            reveal what the user reads)".
//          - enableFileIOTracing = false, because "File I/O spans carry
//            absolute file paths (library contents)" and the scrubber
//            "can't reach span descriptions".
//          - enableNetworkTracing = false, because auto network spans
//            "carry the full request URL" and the scrubber can't reach
//            span payloads; network breadcrumbs stay on but are reduced to
//            host only, stripping query strings ("user-typed Gutenberg
//            searches").
//          - sessionReplay.sessionSampleRate = 0 and onErrorSampleRate = 0,
//            with the comment "Session replay records the screen, i.e.
//            book text."
//        A prior removal is recorded in the source as direct evidence of
//        this policy in practice: a code comment in LoudReaderApp.swift
//        states Firebase/GoogleAppMeasurement was removed entirely on
//        2026-08-09 after it was found writing roughly 1 GB to disk in a
//        production MetricKit exception despite the app "never logg[ing] a
//        single Analytics event" through it, i.e. an unused SDK was
//        producing its own background disk activity, so it was deleted
//        rather than configured around.
//     3. Content downloads the user explicitly triggers: the Project
//        Gutenberg catalog (per the existing verified claim on the
//        private-TTS money page, source ProjectGutenbergService.swift) and
//        article links a user pastes in. These carry the URL or search term
//        requested, which is why the Sentry integrations above are
//        specifically hardened against leaking those same URLs into a
//        crash report as a side channel.
//   - Pricing and differentiator facts from components/money/site.ts.
// Claims you may NOT make: that Sentry crash reporting has its own opt-out
// toggle (it does not, only Analytics/TelemetryDeck does); that book
// content, titles, or full file paths are ever included in a crash or
// analytics event (the scrubber and the parameter lists both rule this
// out, but only for what call sites actually pass, and the code comment
// itself concedes the scrubber cannot catch an arbitrary title string typed
// into a message by mistake, which is why the invariant is enforced at the
// call site rather than only in the scrubber).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does text to speech send my documents to a server?",
    a: "Not if the app generates speech on-device, which is how LoudReader is built. The book or PDF you're listening to is stored locally and read locally; it is never uploaded anywhere to be synthesized. What can leave the device is separate from your reading content: anonymous usage analytics and crash reports.",
  },
  {
    q: "What network requests does LoudReader actually make?",
    a: "Three kinds. First, downloads you ask for: a free book from the Project Gutenberg catalog, or an article link you paste in. Second, anonymous product-usage signals like 'a book was opened' or 'the sleep timer was set', with no title, filename, or document text attached, sent through TelemetryDeck. Third, crash and error reports through Sentry, which are scrubbed of file paths and URLs before they leave the device.",
  },
  {
    q: "Can I turn off analytics in a text-to-speech app?",
    a: "In LoudReader, yes, with one toggle. Settings > Privacy has a single switch, 'Share Anonymous Usage Statistics', on by default, that stops all TelemetryDeck signals when turned off. There is no separate toggle for crash reporting specifically; that channel stays on, but it is built to exclude book titles, filenames, and file paths by design.",
  },
  {
    q: "Do crash reports from a text-to-speech app include what I was reading?",
    a: "In LoudReader's case, the app is built specifically to prevent that. A scrubbing step strips file paths and URLs from every crash report before it's sent, and several crash-reporting features that would otherwise capture screen content, file paths, or full request URLs (like session replay and network request tracing) are turned off entirely rather than merely filtered.",
  },
  {
    q: "How do I know an app's privacy claims match what the code actually does?",
    a: "You generally can't, unless the source is available or the vendor documents specifics rather than generalities. Most privacy claims are policy promises you have to trust. This article was written by reading LoudReader's actual source code (analytics signal definitions, crash-reporting configuration, and the scrubbing logic) rather than restating its privacy policy.",
  },
];

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
          Your book or document never leaves the device with{" "}
          <strong>LoudReader</strong>: it&apos;s fully on-device and private,
          your library never leaves your device, and speech is generated
          locally. But &ldquo;no cloud&rdquo; and &ldquo;zero network
          requests&rdquo; are not the same claim, and the honest answer names
          exactly what does travel. Three things: content you explicitly
          download, like a free Project Gutenberg book or a pasted article
          link; anonymous usage signals (a book was opened, the sleep timer
          was set) with no title, filename, or document text attached, which
          you can turn off with one Settings toggle; and crash reports, which
          stay on with no separate toggle but are scrubbed of file paths and
          URLs before they leave the device, with several crash-reporting
          features that would otherwise capture screen content or full
          request URLs turned off entirely rather than filtered. None of
          those three carries what you actually read.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Three kinds of network request, and what each one does and doesn't carry."
      />

      <QuestionSection question="What does 'your data never leaves the device' actually mean?">
        <p>
          It means the content you&apos;re listening to and the speech
          generated from it stay local. Your book, PDF, or article is stored
          on your device, and the voice reading it is synthesized on your
          device, with no upload step in between. That part is the core
          privacy claim and it is real. What it does not mean, in LoudReader
          or in any real app, is that the app makes zero network requests of
          any kind. An app that never talks to a server can&apos;t check for
          updates, fetch a free book, or tell its developer that a crash
          happened. The honest question isn&apos;t whether any network
          request exists, it&apos;s which ones do and what they carry.
        </p>
      </QuestionSection>

      <QuestionSection question="What downloads does LoudReader make on your behalf?">
        <p>
          Only what you ask for. Two categories: fetching a book from the
          70,000-plus title Project Gutenberg catalog built into the app, and
          fetching an article when you paste in a link. Both are requests you
          triggered, for content you chose, and both are the same kind of
          network activity any reading app makes when you tell it to go get
          something. Nothing about your existing library, your listening
          history, or the documents already on your device triggers a request
          on its own.
        </p>
      </QuestionSection>

      <QuestionSection question="What does 'anonymous usage statistics' actually send?">
        <p>
          Named, bounded events, not free text. LoudReader&apos;s analytics
          layer sends signals like &ldquo;a book was opened,&rdquo;
          &ldquo;an item was imported&rdquo; (with the file format, such as
          EPUB, attached, not a filename), &ldquo;playback started&rdquo;
          (with a content type, not a title), or &ldquo;the sleep timer was
          set to N minutes.&rdquo; Every one of these event definitions takes
          a fixed, small set of parameters chosen in advance. None of them
          takes a book title, an author name, a file path, or any of the text
          you&apos;re actually reading as a parameter, because the event
          shapes simply don&apos;t have a field for it.
        </p>
        <p>
          This is on by default, and it is also the one channel with a real
          switch: Settings &gt; Privacy has a single toggle,
          &ldquo;Share Anonymous Usage Statistics.&rdquo; Turning it off stops
          every one of these signals immediately, and the app&apos;s own
          description of the toggle states plainly that it covers
          &ldquo;feature-usage counts only, never book titles, files, or
          anything you read.&rdquo;
        </p>
      </QuestionSection>

      <QuestionSection question="What about crash reports? Do they see what I was reading?">
        <p>
          This is the channel most privacy write-ups skip, because it&apos;s
          the one that sounds like it should be riskiest: a crash report can,
          in a badly built app, include the last URL fetched, a file path, or
          even a screenshot of what was on screen. LoudReader&apos;s crash
          reporting has no separate opt-out toggle of its own; it stays on so
          the developer can find and fix real defects. What it does not do is
          send those risky details in the first place, and that&apos;s a
          design choice rather than an accident:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Every crash and error report passes through a scrubbing step
            before it leaves the device, specifically built to strip file
            paths and URLs.
          </li>
          <li>
            Failed network requests are deliberately excluded from crash
            reporting, because a failed request&apos;s own event would
            otherwise carry the full URL, which could reveal what article or
            book you were fetching.
          </li>
          <li>
            File-access tracing is turned off entirely, because those events
            carry absolute file paths, which is another way your library
            contents could otherwise leak into a report.
          </li>
          <li>
            Network request tracing is off, for the same reason: the raw URL
            of every request would otherwise be attached.
          </li>
          <li>
            Session replay, the feature that would record your screen for
            debugging, is set to record nothing, ever, because a replay of
            the screen is a replay of the book text on it.
          </li>
        </ul>
        <p>
          One more thing worth knowing, because it shows the policy holding
          up under real pressure rather than just existing on paper: an
          earlier version of the app shipped Firebase, and it was removed
          entirely after the app never actually used it for analytics, yet it
          was still writing close to a gigabyte to disk in the background.
          Rather than configure around an SDK doing something unaccounted
          for, it was deleted.
        </p>
      </QuestionSection>

      <QuestionSection question="How does this compare with a cloud text-to-speech app?">
        <p>
          A cloud TTS service has to transmit your text to generate the
          voice, full stop, because the model runs on its servers. That is
          architecture, not a choice a privacy toggle can undo. LoudReader
          never has that requirement in the first place, so the only things
          that can leave the device are the three named above: your own
          downloads, opt-out usage counts with no content in them, and
          scrubbed crash reports. For the full architectural comparison and
          the airplane-mode test that proves synthesis is local, see{" "}
          <Link
            href="/blog/are-text-to-speech-apps-safe"
            className="text-loudBlue hover:underline"
          >
            are text-to-speech apps safe
          </Link>{" "}
          and{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>
          . This article goes one level deeper than both: it names exactly
          what the handful of remaining network requests are, beyond the fact
          that your content stays local, and states what each one does and
          doesn&apos;t carry.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Every network request, accounted for"
        subline="LoudReader reads books and PDFs fully on-device. Downloads are the ones you ask for, and everything else is scrubbed or off by default."
      />
    </ArticleLayout>
  );
}

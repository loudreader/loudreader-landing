import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function TextToSpeechForLowVisionArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          This guide is honest about what text-to-speech can and cannot do
          for low-vision readers. LoudReader is not a screen reader. It does
          not read menus, buttons, or system interfaces. What it does is
          read the books, articles, and documents you import into it.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) turns any
          DRM-free EPUB or PDF into spoken audio with natural offline voices,
          highlighting each word as it goes. It is fully on-device and
          private, your library never leaves your device. No account, no
          uploads, no cloud. The free tier gives unlimited listening on every
          book with no word quota. All 23 studio narrators are free to try for the first
          8 hours. It is a reading tool for books, not a replacement for
          VoiceOver or dedicated assistive technology. If you need a screen
          reader, your device already has one built in. If you want to listen
          to a book, this guide covers the practical path.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="Listen on whatever device is nearby. iPhone, iPad, or Mac: same library, same voices."
      />

      <QuestionSection question="Is text-to-speech a screen reader?">
        <p>
          No, and the distinction matters. A screen reader like Apple's
          VoiceOver reads everything on your screen: app icons, settings
          menus, notification banners, web page navigation, and system
          dialogs. It is the tool you use to operate your device when you
          cannot see the interface.
        </p>
        <p>
          A text-to-speech app like LoudReader reads the content of documents
          you import into it. It reads your EPUB novel, your PDF article, your
          downloaded book. It does not help you open apps, configure settings,
          or navigate your phone. Both types of tool are useful, but they solve
          different problems. You would not use a book reader to check your
          email, and you would not use a screen reader just to listen to a
          novel.
        </p>
        <p>
          The honest recommendation: use your device's built-in screen reader
          (VoiceOver on iPhone and iPad, or the built-in screen reader on Mac)
          for system navigation. Use a TTS reader like LoudReader for the
          reading itself. They complement each other rather than compete.
        </p>
      </QuestionSection>

      <QuestionSection question="What can I actually read with LoudReader?">
        <p>
          Three categories of content, all imported locally:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">
              EPUB and PDF files you own.
            </strong>{" "}
            Books bought outside of Kindle and Apple Books ecosystems
            generally come as DRM-free EPUBs or PDFs. Import them into
            LoudReader through the Share sheet or file picker, and the app
            reads them aloud. This includes technical books, self-published
            novels, and documents saved as PDF.
          </li>
          <li>
            <strong className="text-gray-900">
              70,000+ free classic books.
            </strong>{" "}
            Project Gutenberg's catalog is built into the app. No import
            needed, just pick a title and press play. These are public-domain
            works: Austen, Dickens, Dostoevsky, and tens of thousands more.
          </li>
          <li>
            <strong className="text-gray-900">
              Articles and personal documents.
            </strong>{" "}
            Save a web article as PDF, import it, and listen. Family members
            can send you documents the same way. If it is a PDF with
            selectable text, LoudReader can read it.
          </li>
        </ul>
        <p>
          For a full walkthrough of turning your existing books into audio,
          see{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How do I use LoudReader if I cannot see the screen well?">
        <p>
          The core interaction is simple enough that visual precision is not
          required. Import a book (through the Share sheet from another app,
          which you may already navigate with VoiceOver), then press play.
          That is the whole loop. Playback continues with the screen locked,
          and the lock screen gives you large play, pause, and skip controls
          that are easier to hit than navigating inside an app.
        </p>
        <p>
          Features that matter for low-vision use:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Lock-screen controls.</strong>{" "}
            Play, pause, and skip forward or back 15 seconds. No need to
            open the phone or find the right button in the app.
          </li>
          <li>
            <strong className="text-gray-900">Word-by-word highlighting.</strong>{" "}
            The current word is lit on screen. If you have partial vision,
            the highlight is a reference point that tells you exactly where
            the narration is.
          </li>
          <li>
            <strong className="text-gray-900">Voice selection.</strong>{" "}
            Pick the clearest voice for extended listening. All 23 studio narrators
            are free to try for the first 8 hours. After that, one voice
            stays free and Premium includes the rest.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What about speed control?">
        <p>
          Speed matters more for audio-only reading than it does for
          dual-channel reading. Slower speeds (0.8x to 1.0x) give you more
          time to process each sentence, which helps with dense material or
          if you are new to listening instead of reading. Faster speeds work
          for re-reading or lighter material.
        </p>
        <p>
          In LoudReader, speed control from 0.3x to 3.0x is a Premium
          feature; the free tier plays at normal speed. The full range
          includes genuinely slow speeds that are useful for careful
          listening, not just fast speeds for skimming.
        </p>
      </QuestionSection>

      <QuestionSection question="Does this work with VoiceOver?">
        <p>
          LoudReader uses standard iOS and macOS interface elements that are
          compatible with VoiceOver, but the app itself is not a screen
          reader and we do not claim accessibility certification. If you
          navigate your phone with VoiceOver, you should be able to import
          books and control playback. The lock-screen controls are standard
          iOS media controls and work with the system's existing
          accessibility features.
        </p>
        <p>
          For readers with dyslexia, the word-by-word highlighting and
          dual-channel reading mechanics overlap with what helps there. We
          covered that in{" "}
          <Link
            href="/blog/text-to-speech-dyslexia"
            className="text-loudBlue hover:underline"
          >
            text to speech for dyslexia
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Listen to your books, no screen required"
        subline="Import any EPUB or PDF and press play. Lock-screen controls, natural voices, and nothing leaves your device. Free, no account."
      />
    </ArticleLayout>
  );
}

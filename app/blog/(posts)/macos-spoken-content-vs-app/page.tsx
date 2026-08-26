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

export default function MacosSpokenContentVsAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          macOS Spoken Content (select text, Option+Esc) is free, built in, and
          works in any app. It is the right tool for reading a paragraph or
          checking a sentence. For books and long documents, a dedicated app
          like <strong>LoudReader</strong> (iPhone, iPad, and Mac) adds
          what Spoken Content lacks: natural voices designed for long reading,
          place bookmarking, per-book speed control from 0.3x to 3.0x, word
          highlighting, and a sleep timer. LoudReader is fully on-device and
          private, your library never leaves your device. Neither tool is
          universally better. Spoken Content wins on speed and convenience for
          short text. LoudReader wins on quality and features for anything
          longer than a few paragraphs.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="Spoken Content is the free, built-in option. LoudReader adds voices and bookmarking for long reading."
      />

      <QuestionSection question="What is macOS Spoken Content?">
        <p>
          Spoken Content is an accessibility feature built into macOS. It has
          been there for over a decade. Go to System Settings, Accessibility,
          Spoken Content, and you will find three main options:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Speak selection.</strong>{" "}
            Select text anywhere, in any app, and press Option+Esc. The Mac
            reads the selection aloud with the system voice. This is the
            feature most people mean when they say &quot;Mac text-to-speech.&quot;
          </li>
          <li>
            <strong className="text-gray-900">Speak item under the pointer.</strong>{" "}
            Hold a modifier key (usually Control) and hover over text. The Mac
            reads the text under the cursor. Useful for quickly checking a word
            or sentence without selecting it.
          </li>
          <li>
            <strong className="text-gray-900">Speak typing feedback.</strong>{" "}
            The Mac reads each character or word as you type. This is an
            accessibility feature for people who need audio confirmation of
            their typing.
          </li>
        </ul>
        <p>
          The voice and speed are set in the same preferences panel. You can
          download additional voices from Apple (Samantha, Daniel, Alex, and
          several others), and some are neural-quality. The speed slider
          applies to everything Spoken Content reads, with no per-document
          override.
        </p>
      </QuestionSection>

      <QuestionSection question="What does Spoken Content do well?">
        <p>
          A lot, and it is worth listing because many articles about TTS apps
          pretend the built-in option is useless. It is not:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Zero setup.</strong> Enable it
            once in System Settings and it works forever, in every app, on
            every Mac running macOS. No download, no account, no import step.
          </li>
          <li>
            <strong className="text-gray-900">System-wide.</strong> It reads
            selected text in Safari, Mail, Pages, Preview, Terminal, Slack,
            and every other app. There is no format restriction and no file
            to import.
          </li>
          <li>
            <strong className="text-gray-900">Completely free.</strong> No
            trial, no subscription, no premium tier. The voices Apple ships are
            included with macOS.
          </li>
          <li>
            <strong className="text-gray-900">Good for short, quick reads.</strong>{" "}
            Checking a paragraph you just wrote, confirming a quote, hearing a
            single sentence from a web page. Spoken Content is instant and does
            not pull you out of what you are doing.
          </li>
        </ul>
        <p>
          For these use cases, Spoken Content is the right tool and a dedicated
          app would be overkill. The article is not going to pretend otherwise.
        </p>
      </QuestionSection>

      <QuestionSection question="Where does Spoken Content fall short for reading books?">
        <p>
          The feature was designed for accessibility, not for reading books.
          The gaps become obvious the first time you try to use it for a novel
          or a long document:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">No bookmarking.</strong>{" "}
            Spoken Content reads the selected text and stops. There is no
            concept of &quot;where you left off.&quot; If you close a document
            or restart your Mac, you must find your place manually. For a book,
            this is a dealbreaker within the first chapter.
          </li>
          <li>
            <strong className="text-gray-900">One voice, one speed for everything.</strong>{" "}
            If you want a different voice for fiction and non-fiction, you
            change it in System Settings each time. If you want to slow down
            for a dense section, you open System Settings and adjust the global
            slider. There is no per-book or per-document voice or speed
            setting.
          </li>
          <li>
            <strong className="text-gray-900">No sleep timer.</strong>{" "}
            Spoken Content reads until you stop it or the text runs out. If
            you fall asleep listening to a book, it plays all night.
          </li>
          <li>
            <strong className="text-gray-900">No word highlighting.</strong>{" "}
            Spoken Content reads the words but does not highlight them visually.
            For people who want to follow along or who benefit from dual-channel
            input, this is a missing piece.
          </li>
          <li>
            <strong className="text-gray-900">Stops on window change.</strong>{" "}
            If you switch windows or the text scrolls out of view, Spoken
            Content often stops. It reads what is selected on screen right now,
            and it does not follow the content when the view changes.
          </li>
        </ul>
        <p>
          These are not bugs. They are design decisions made for a tool whose
          job is to read selected text aloud on demand. A book player is a
          different thing, and a dedicated app is designed for that job.
        </p>
      </QuestionSection>

      <QuestionSection question="What does a dedicated app add?">
        <p>
          A dedicated read-aloud app like{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          is built for the use case Spoken Content was not designed for:
          reading books, long articles, and documents from start to finish.
          Here is what it adds:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Place bookmarking.</strong>{" "}
            Close the app, restart your Mac, open the book, and it opens to the
            exact sentence where you stopped. This works across days and
            sessions. It is the single feature that makes the difference
            between a tool and a player.
          </li>
          <li>
            <strong className="text-gray-900">Eight neural voices.</strong>{" "}
            Pick a different voice for each book. Switch on the fly without
            opening System Settings. The voices run on the Mac's Neural Engine
            and are optimized for long reading sessions.
          </li>
          <li>
            <strong className="text-gray-900">Per-book speed control.</strong>{" "}
            Set 1.5x for light non-fiction and 1.0x for dense technical text.
            Speed ranges from 0.3x to 3.0x, and each book remembers its own
            setting.
          </li>
          <li>
            <strong className="text-gray-900">Sleep timer.</strong>{" "}
            Set the app to stop after 15, 30, or 60 minutes. Useful for
            bedtime listening without waking up to a book that is still
            playing chapters later.
          </li>
          <li>
            <strong className="text-gray-900">Word highlighting.</strong>{" "}
            Each word lights up as it is spoken. This helps with focus,
            comprehension, and language learning. Combined with speed control,
            it makes dense text easier to follow.
          </li>
          <li>
            <strong className="text-gray-900">Ambient soundscapes.</strong>{" "}
            Optional background sounds (rain, white noise, etc.) layered under
            the narration. Some people find this helps with focus or masks
            background noise.
          </li>
        </ul>
        <p>
          All of this runs on-device. LoudReader is fully on-device and
          private, your library never leaves your device. Spoken Content is
          also on-device. Neither tool sends your text to a server. For more
          on the Mac reading workflow, see{" "}
          <Link
            href="/read-epub-aloud-mac"
            className="text-loudBlue hover:underline"
          >
            reading EPUB aloud on Mac
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="When should I pick one over the other?">
        <p>
          The honest decision tree, without pretending one tool beats the other
          in every situation:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Use Spoken Content when:</strong>{" "}
            you need a paragraph read right now, the text is in an app you
            cannot or do not want to export from, the passage is short (under a
            few minutes of audio), or you are proofreading a single sentence
            you just wrote.
          </li>
          <li>
            <strong className="text-gray-900">Use LoudReader when:</strong>{" "}
            the content is a book, a long article, or a document you plan to
            return to over multiple sessions, you care about voice quality,
            you want bookmarking, you need speed control per book, or you are
            stepping away from the screen entirely and want playback to
            continue in the background.
          </li>
        </ul>
        <p>
          The two tools complement each other. Most people who read a lot on
          Mac end up using both: Spoken Content for quick checks, LoudReader
          for sustained reading. That is not a failure of either tool. It is
          using the right tool for the right job.
        </p>
        <p>
          If you care about the offline angle specifically, see{" "}
          <Link
            href="/offline-text-to-speech-mac"
            className="text-loudBlue hover:underline"
          >
            offline text-to-speech on Mac
          </Link>
          , which compares more than just the built-in option.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Give your Mac a proper reading voice"
        subline="Import EPUBs and PDFs into LoudReader for natural voices, bookmarking, and offline playback. Free tier available."
      />
    </ArticleLayout>
  );
}

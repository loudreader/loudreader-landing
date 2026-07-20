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

export default function ReadBooksAloudOnIpadArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          An iPad is the best screen for following along while a book is read
          aloud. <strong>LoudReader</strong> (native Mac and iPhone apps, also
          runs on iPad) reads EPUBs and PDFs with natural offline voices and
          highlights each word as it is spoken. The larger display makes word
          highlighting genuinely useful, and Split View lets you take notes on
          one side while listening on the other. The app is fully on-device and
          private, your library never leaves your device, so it works offline
          with no account. Import a book from the Files app, Safari, or
          anywhere with a Share button, press play, and follow along on the big
          screen. The free tier includes unlimited listening with a standard
          voice.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="The iPad screen makes word highlighting useful. Follow along while the voice reads."
      />

      <QuestionSection question="Why use an iPad for read-aloud instead of an iPhone?">
        <p>
          The iPad does not read books differently than an iPhone. The voice is
          the same, the import is the same, and the playback is the same. What
          changes is the experience of following along visually:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Word highlighting works better.</strong>{" "}
            On an iPhone, highlighted words are small and easy to miss on a
            fast scroll. On an iPad, the text is larger and the highlighting
            is easier to track. You can set a faster playback speed and still
            follow every word.
          </li>
          <li>
            <strong className="text-gray-900">Split View multitasking.</strong>{" "}
            Keep LoudReader open on the left with the book playing. On the
            right, open Notes, a browser, or another PDF. This is the study
            setup that iPads were designed for, and it works well for
            read-and-listen sessions.
          </li>
          <li>
            <strong className="text-gray-900">Library browsing.</strong>{" "}
            Managing a collection of imported books feels more natural on a
            larger display. The cover grid, the book list, and the import
            workflow all benefit from the extra space.
          </li>
          <li>
            <strong className="text-gray-900">Less eye strain.</strong>{" "}
            Reading on a phone screen for an hour strains the eyes more than
            reading on an iPad at a comfortable distance. For long study
            sessions or reading marathons, the iPad is the kinder screen.
          </li>
        </ul>
        <p>
          If you mainly listen with the screen off (walking, driving,
          exercising), the iPhone is the better device because it fits in a
          pocket. The iPad is for sessions where you want to see the text
          while you hear it.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I start reading aloud on an iPad?">
        <p>
          The setup is the same as on iPhone, with one extra multitasking
          benefit:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Download{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            on your iPad. It runs on iPadOS 18.0 or later.
          </li>
          <li>
            Import a book. Tap the import button and pick an EPUB or PDF from
            the Files app, or share a file to LoudReader from Safari, Mail, or
            any app with a Share button. You can also browse the built-in
            Project Gutenberg catalog with over 70,000 free classics.
          </li>
          <li>
            Press play. The voice starts reading, and each word highlights in
            sync. You can adjust the text size, pick a voice, and set the
            speed.
          </li>
          <li>
            Optionally, open Split View. Swipe up from the bottom to reveal
            the dock, drag another app (Notes, Safari) to the side of the
            screen, and you have LoudReader on one half and your notes on the
            other. Playback continues uninterrupted.
          </li>
        </ol>
        <p>
          For the full walkthrough, see{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          , which covers import and playback on all devices.
        </p>
      </QuestionSection>

      <QuestionSection question="Is iPad read-aloud useful for studying?">
        <p>
          Yes, and there is a reason backed by how learning works. When you
          hear a word and see it highlighted at the same time, your brain
          processes the information through two channels: auditory and visual.
          This dual-channel input helps with encoding and retention, and it is
          one of the reasons read-along tools are used in literacy and language
          learning.
        </p>
        <p>
          On an iPad, this dual-channel approach is practical in several study
          scenarios:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Textbooks and research papers.</strong>{" "}
            Import a PDF textbook chapter, set the voice to a comfortable
            speed, and follow along with the highlighting. When you hit a
            diagram or table, pause and study it on screen, then resume. The
            combination of listening and looking keeps you engaged in a way
            that silent reading sometimes fails to do after the first few
            pages.
          </li>
          <li>
            <strong className="text-gray-900">Split View note-taking.</strong>{" "}
            Listen in LoudReader on the left half of the screen. Take
            handwritten notes in a note-taking app on the right half. You
            capture key points without needing to pause, and you build study
            notes as you go.
          </li>
          <li>
            <strong className="text-gray-900">Proofreading your own writing.</strong>{" "}
            Export your draft as a PDF, import into LoudReader on iPad, and
            listen while following the text. The larger screen lets you see
            more context around each sentence, which helps you catch structural
            problems as well as word-level errors.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What are the limits of reading aloud on iPad?">
        <p>
          The honest list:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">The iPad is bulky for portable listening.</strong>{" "}
            If you listen while walking, exercising, or doing chores, an
            iPhone in your pocket is the better form factor. The iPad is for
            stationary listening with the screen visible.
          </li>
          <li>
            <strong className="text-gray-900">DRM-locked books still do not work.</strong>{" "}
            The device does not change the DRM situation. Kindle books with
            DRM, Apple Books purchases, and other locked files will not import
            into LoudReader on iPad any more than they will on iPhone or Mac.
          </li>
          <li>
            <strong className="text-gray-900">Stage Manager is supported, but the app is not optimized for an external display.</strong>{" "}
            You can run LoudReader in Stage Manager on an external monitor,
            and playback works, but the reading interface is designed for a
            touchscreen, not a large desktop display with a mouse.
          </li>
        </ul>
        <p>
          If the reading format matters more than the screen, the{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            guide to listening to PDFs on iPhone
          </Link>{" "}
          covers import and playback on the smaller screen. The same app does
          the same thing on both devices.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your iPad, now a read-along machine"
        subline="Import any EPUB or PDF, press play, and follow the highlighted words on the big screen. Natural voices, offline, no account."
      />
    </ArticleLayout>
  );
}

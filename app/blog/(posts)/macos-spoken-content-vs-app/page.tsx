import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import Disclosure from "@/components/blog/Disclosure";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function MacosSpokenContentVsAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Try your Mac&apos;s built-in speech before buying a reading app. Speak
          Selection can read accessible text in the current app, highlight words
          or sentences, and show a controller for rate, pause and navigation.
          Newer macOS versions call its settings Read &amp; Speak; older versions
          use Spoken Content. A dedicated reader becomes useful when you want
          to import books, keep a library and return to a saved reading position.
          LoudReader offers that workflow as an iPad app running on compatible
          Apple Silicon Macs. The decision is about your reading routine and
          required controls, not a guarantee that paid voices sound better.
        </p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="devices" caption="Hear selected text in the current app, or keep books in a dedicated reading library." />

      <QuestionSection question="How do I turn on the Mac’s built-in reader?">
        <p>
          Open System Settings → Accessibility → Read &amp; Speak, then enable
          Speak Selection. On older macOS versions, look for Spoken Content.
          Select some text and press the configured shortcut; the default is
          Option–Esc. Apple&apos;s <a href="https://support.apple.com/en-gb/guide/mac-help/mh27448/26/mac/26" className="text-loudBlue hover:underline">Speak Selection instructions</a>{" "}
          show the settings for your OS version.
        </p>
        <p>
          Turn on its controller and choose word or sentence highlighting if
          you want to follow along. You can adjust the rate or pause from the
          controller. These features are part of the built-in tool; you do not
          need another app merely to get highlighting or a speed control.
        </p>
        <p>
          Start with a paragraph in an app you use daily. If it is not read,
          check whether you can select the text and whether the app exposes it
          to accessibility features. A screenshot or image-only PDF may not
          provide selectable text. Moving the same passage to a plain text
          document is a useful way to separate a source-app problem from a
          speech-setting problem.
        </p>
      </QuestionSection>

      <QuestionSection question="When is the built-in option enough?">
        <p>
          It is convenient for checking a draft email, listening to a paragraph
          from a page, or hearing wording you are editing. The material is already
          open, so exporting a file and organising a second library may add work
          without solving a problem. Try it on a longer section too; short
          passages are a useful starting point, not a hard limit.
        </p>
        <p>
          Apple&apos;s <a href="https://support.apple.com/en-gb/guide/mac-help/spch638/26/mac/26" className="text-loudBlue hover:underline">Read &amp; Speak settings guide</a>{" "}
          also covers voice choice and other speech options. Available voices
          and settings depend on the OS and language. Try an appropriate voice
          and rate before deciding that the built-in sound cannot work for you.
          Keep the distinction between Speak Selection and VoiceOver: the latter
          is a screen reader for navigating the interface as well as reading it.
        </p>
        <p>
          If that covers your routine, keep using it. A separate reader should
          earn its place by making a repeated task easier. “Dedicated app” does
          not mean a better choice for every document or every accessibility
          need.
        </p>
      </QuestionSection>

      <QuestionSection question="What changes when I want to finish a whole book?">
        <p>
          Think beyond the next passage: how will you reopen the same book
          tomorrow, find the chapter you meant to hear, and keep notes beside
          it? Speak Selection operates on text exposed by the current app. It
          does not itself create an imported bookshelf; the app holding the
          document determines how you organise it and return to a place.
        </p>
        <p>
          A reading app brings those tasks into one workflow. Before choosing
          one, import a representative book, listen for a while, close it and
          reopen it. Check the saved position and chapter navigation. Try your
          keyboard or assistive controls as well as the mouse. A feature being
          listed does not tell you whether that workflow is comfortable on
          your particular Mac.
        </p>
        <p>
          For PDFs, inspect a page with columns, footnotes or a table. If the
          extracted text is in the wrong order, changing voices will not fix it.
          A simpler edition or corrected text may help more than another player.
          Our <Link href="/read-epub-aloud-mac" className="text-loudBlue hover:underline">EPUB reading guide</Link>{" "}
          covers the file-based approach.
        </p>
      </QuestionSection>

      <QuestionSection question="What does LoudReader add, and what are its limits?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>{" "}
          imports DRM-free EPUBs and PDFs and saves web articles. It provides
          a reading library, saved position and word-following highlighting.
          Scanned PDFs can go through on-device text recognition, although
          legibility and layout affect the result. It does not read every
          selected item in every Mac app, remove ebook DRM or automatically
          synchronise its library between your devices.
        </p>
        <p>
          {FREE_TIER.full} Premium adds access to every available narrator,
          adjustable speed from 0.3× to 3.0×, a sleep timer, soundscapes and
          unlimited article saving. Notes and highlights are not exclusive
          Premium features. Studio voice availability depends on hardware;
          test the voices shown on your actual device.
        </p>
        <p>
          On Mac this is the iPad app in Apple&apos;s compatibility mode, not
          a separate native macOS application. Speech is generated locally and
          books are not uploaded for narration. The app also has crash/performance
          diagnostics and usage analytics, so local speech should not be read
          as a promise that it never communicates with a server. See the{" "}
          <Link href="/offline-text-to-speech-mac" className="text-loudBlue hover:underline">offline Mac guide</Link>{" "}
          for preparation before listening without a connection.
        </p>
      </QuestionSection>

      <QuestionSection question="How can I choose without paying for a feature I already have?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Try the built-in reader on your real material, including its highlighting and controller.</li>
          <li>Write down the missing task: a book library, reliable resumption, document import or a particular listening control.</li>
          <li>Test a candidate app on that task, with your keyboard, headphones and files.</li>
          <li>Check which features remain available after a trial and the local purchase terms.</li>
        </ol>
        <p>
          You can also keep both workflows: selected-text speech while editing,
          and a book app for a reading queue. There is no need to move every
          paragraph into a library just because you use one for books.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a reading library for your longer documents" subline="Import a supported file and check the saved-place workflow on your own Mac." />
    </ArticleLayout>
  );
}

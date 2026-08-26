import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function VoiceAloudReaderAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          @Voice Aloud Reader is one of the best TTS apps on Android. It
          reads EPUBs and PDFs offline, has deep customization, and does
          not require an account. If you are looking for an alternative
          because you moved from Android to iPhone, or because you want a
          Mac app too, <strong>LoudReader</strong> (iPhone, iPad, and Mac) is the closest match. It is fully on-device and private,
          your library never leaves your device, with natural offline
          voices and a free tier that provides {PRICING.free} The honest
          caveat: if you are on Android and just want a different app,
          LoudReader is not the answer. It does not exist on Android and
          will not.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="If Mac and iPhone are your devices, LoudReader fits."
      />

      <QuestionSection question="What is @Voice Aloud Reader, and why do people love it?">
        <p>
          @Voice Aloud Reader has been around on Android for years. It is
          one of the few apps that does text-to-speech right: offline
          processing, no account, deep customization of voice and speed,
          support for EPUB and PDF files, and a free version that is
          actually usable. It has a loyal user base for good reason.
        </p>
        <p>
          The app also reads web pages, clipboard content, and plain text
          files. It has granular controls over pronunciation, pauses, and
          voice settings. For Android users who want a powerful,
          privacy-respecting TTS reader, @Voice is often the top
          recommendation on forums like Reddit.
        </p>
      </QuestionSection>

      <QuestionSection question="Why would an @Voice user look for an alternative?">
        <p>
          The main reason is switching platforms. If you move from an
          Android phone to an iPhone, @Voice stops being available to you.
          There is no iOS version. Your EPUB library follows you, but the
          app that read them aloud does not.
        </p>
        <p>
          Some Android users also look for an alternative because they want
          a desktop companion app. @Voice is mobile-only. If you read at
          your computer and want the same app with the same voices and the
          same place in your book, you need something that spans both
          device types.
        </p>
        <p>
          A third reason is voice quality. @Voice relies on the system TTS
          engine on your Android device. The voices available depend on
          what your phone manufacturer includes. On some phones the voices
          are perfectly fine; on others they sound robotic. You cannot
          upgrade the voices within @Voice itself.
        </p>
      </QuestionSection>

      <QuestionSection question="How does LoudReader compare to @Voice?">
        <p>
          The two apps share a lot of DNA. Both are offline-first with no
          account requirement. Both focus on EPUB and PDF reading. Both
          give you a free tier that is not a crippled demo. Both respect
          your privacy by keeping everything on your device.
        </p>
        <p>
          LoudReader adds a few things @Voice does not have. A curated set
          of natural offline voices that sound better than most system TTS
          engines, and you can upgrade them through Premium. It runs on Mac
          as well as iPhone and iPad, so your library and place carry across
          desktop and phone. A
          built-in catalog of 70,000+ free Project Gutenberg classics: open
          the app, pick a book, start listening, no import step needed.
        </p>
        <p>
          LoudReader also supports{" "}
          <Link href="/read-epub-aloud-mac" className="text-loudBlue hover:underline">
            reading EPUBs aloud on Mac
          </Link>{" "}
          and{" "}
          <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">
            listening to PDFs on iPhone
          </Link>
          , which @Voice does not cover since it has no desktop or iOS
          version.
        </p>
      </QuestionSection>

      <QuestionSection question="What does @Voice do better?">
        <p>
          @Voice has deeper customization. The pronunciation dictionary,
          regex-based text replacements, and per-document voice settings
          are more granular than what LoudReader offers. If you are the
          kind of person who likes to fine-tune everything, @Voice gives
          you more knobs.
        </p>
        <p>
          @Voice reads more formats directly: plain text, HTML files, and
          clipboard content alongside EPUB and PDF. LoudReader is focused
          on books (EPUB and PDF). For web articles, you save as PDF first.
        </p>
        <p>
          @Voice is on Android. If that is your platform, there is no
          contest; LoudReader simply is not available to you. The honest
          advice is to stick with @Voice or try other Android-native TTS
          readers.
        </p>
      </QuestionSection>

      <QuestionSection question="What if you are moving from Android to iPhone?">
        <p>
          If you are switching from Android to iPhone and want an app that
          feels like home, LoudReader is the closest spiritual equivalent
          to @Voice on the Apple side. Same philosophy: offline, private,
          no account, free tier that works. Better voices. Mac app included.
        </p>
        <p>
          Moving your EPUB and PDF files is straightforward. They are
          standard file formats. Transfer them through any method that gets
          files onto your iPhone: AirDrop from a Mac, iCloud Drive, email
          them to yourself, or use a cloud storage app. Once the files are
          on your device, share them to LoudReader and they appear in your
          library.
        </p>
        <p>
          LoudReader is fully on-device and private, your library never
          leaves your device. The natural offline voices sound great, and
          the app remembers your place in every book. It is a clean start
          on a new platform with an app built natively for it.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your EPUBs, your iPhone, your privacy"
        subline="Move your library to LoudReader. Natural voices, no account, free tier with no limits."
      />
    </ArticleLayout>
  );
}
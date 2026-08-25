import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, REQUIREMENTS } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function TextToSpeechOnMacAndIphoneArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> is a native app on both Mac and iPhone,
          not a phone app stretched onto a laptop screen. Both versions import
          the same EPUB and PDF files, read them aloud with the same 23
          studio narrators, and offer the same Premium features for one
          subscription. What does not carry over is the library itself.
          LoudReader has no account and no iCloud sync, so each device keeps
          its own local books and its own reading position, and a voice you
          clone on one device stays on that device. It is fully on-device and
          private, your library never leaves your device, which is the same
          reason nothing quietly syncs between your Mac and your iPhone. The
          Mac app needs macOS 15 on Apple Silicon; an Intel Mac cannot run it.
          There is no CarPlay integration, so in the car the app just plays
          through whatever your iPhone is already connected to.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="One app, two native builds, the same voices on each."
      />

      <QuestionSection question="What actually carries over between the Mac app and the iPhone app?">
        <p>
          The parts that make the app useful are identical on both. Import
          any DRM-free EPUB or PDF on either device and it reads aloud with
          natural offline voices, follows along with synced highlighting, and
          remembers your place while you listen. The voice roster is the same
          list on both platforms: 23 studio narrators across 10 languages,
          with{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            the full roster and audio samples
          </Link>{" "}
          on the site. Premium is one subscription that adds the same
          things everywhere it applies: all 23 narrators, on-device voice
          cloning, playback speed from 0.3x to 3.0x, sleep timer, ambient
          soundscapes, and notes and highlights.
        </p>
        <p>
          What does not carry over is anything tied to a specific device&apos;s
          storage. Your library, the books you have imported and their
          reading position, lives locally on the device where you added them.
        </p>
      </QuestionSection>

      <QuestionSection question="Why doesn't the library sync between Mac and iPhone?">
        <p>
          Because there is no account to sync it through. LoudReader does not
          ask for a login, and it has no iCloud sync built in, which is the
          same design choice behind{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            keeping everything on-device
          </Link>
          . Nothing about a book you import ever leaves the device it is on,
          which also means nothing about it moves to another device on its
          own. If you want to read the same book on your Mac and your iPhone,
          you import the file on each one. Your progress on the Mac and your
          progress on the iPhone are two separate bookmarks, not one shared
          bookmark.
        </p>
        <p>
          The same rule applies to a cloned voice. Voice cloning happens
          entirely on the device where you record it, and the resulting voice
          model stays there. A voice you build on your iPhone will not show
          up in the voice picker on your Mac. If you want the same custom
          narrator on both devices, you record it twice.
        </p>
      </QuestionSection>

      <QuestionSection question="What are the actual system requirements?">
        <p>
          LoudReader requires {REQUIREMENTS}. You can{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            get it from the App Store
          </a>{" "}
          on either device. The Apple Silicon requirement on Mac is worth
          being blunt about: an Intel Mac, even a recent one running the
          latest macOS, cannot install the app. The on-device voices need the
          neural hardware Apple Silicon has and an Intel chip does not.
        </p>
        <p>
          The upside of that requirement is the same on both devices: no
          server does the work of turning your text into speech. The
          synthesis runs locally on the chip in front of you, which is why
          the app plays back in a subway tunnel or on a flight exactly as
          well as it does on a fast home connection. That is a deliberate
          trade, hardware requirements in exchange for privacy and offline
          reliability, and the phone and the laptop both get the same deal.
        </p>
      </QuestionSection>

      <QuestionSection question="Does LoudReader work with CarPlay?">
        <p>
          No, not as a dedicated integration. There is no CarPlay app screen
          today. In the car, LoudReader behaves like any other audio app on
          your iPhone: connect over Bluetooth or a cable the way you would
          for music or a podcast, then control playback from the lock screen
          or your car&apos;s own buttons. Background playback and lock-screen
          controls work normally; a CarPlay-specific interface just is not
          part of the app yet.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Native on Mac and iPhone, honest about the gap between them"
        subline={`Download for ${REQUIREMENTS}. Free, on-device, no account.`}
      />
    </ArticleLayout>
  );
}

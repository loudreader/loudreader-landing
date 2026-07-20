import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, PRICING, REQUIREMENTS } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function TextToSpeechAppleSiliconArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Every Apple Silicon chip (M1 through M4) has a dedicated Neural
          Engine, a processor designed for machine learning tasks like voice
          generation. This is what makes high-quality, offline text-to-speech
          possible without a cloud server. <strong>LoudReader</strong> (native
          Mac and iPhone apps) uses the Neural Engine to generate natural
          voices entirely on your device. It is fully on-device and private,
          your library never leaves your device. No internet connection is
          needed, no text is sent to a server, and no account is required.
          Intel Macs lack the Neural Engine and are not supported
          ({REQUIREMENTS}). The free tier includes unlimited listening with a
          standard voice. Premium ({PRICING.premiumMonthly}) unlocks all eight
          neural voices, speed from 0.3x to 3.0x, a sleep timer, ambient
          soundscapes, and notes.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="The Neural Engine on Apple Silicon runs voice models locally. No cloud, no latency, no privacy tradeoff."
      />

      <QuestionSection question="Why does the chip matter for text-to-speech?">
        <p>
          For most of the last decade, high-quality text-to-speech required a
          server. The voice models were too computationally heavy to run on a
          consumer device, so apps sent your text to a cloud server, which
          generated the audio and streamed it back. This gave you good voices
          at the cost of privacy, offline reliability, and latency.
        </p>
        <p>
          Apple Silicon changed that, and the Neural Engine is the reason. The
          M1 chip (2020) included a 16-core Neural Engine capable of 11
          trillion operations per second, dedicated to machine learning. The
          M2, M3, and M4 increased that capacity. For text-to-speech, this
          means a chip on your desk or in your pocket can run the same class of
          neural voice models that used to require a data center.
        </p>
        <p>
          The practical upshot: a MacBook Air with an M1 chip can generate
          natural-sounding voices locally, offline, with no server involved.
          Intel Macs from 2019 and earlier cannot do this at the same quality
          level because they lack the dedicated ML hardware. They either use
          simpler voices or depend on a cloud service.
        </p>
      </QuestionSection>

      <QuestionSection question="How does LoudReader use Apple Silicon?">
        <p>
          LoudReader is built specifically for Apple Silicon. It is a native
          Mac app that uses the Neural Engine for every voice it generates.
          There are three practical benefits:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Eight neural voices, all local.</strong>{" "}
            The voices are included in the app download and run on the Neural
            Engine. You do not download voice packs separately, and you do not
            need WiFi for the voices to work. Premium unlocks all eight. The
            free tier includes a standard voice that also runs on-device.
          </li>
          <li>
            <strong className="text-gray-900">Instant playback.</strong>{" "}
            Press play and the voice starts immediately. There is no round
            trip to a server, no buffering, and no latency spike when your
            connection is slow. The text-to-speech pipeline lives entirely
            inside the app and the chip.
          </li>
          <li>
            <strong className="text-gray-900">Privacy by design.</strong>{" "}
            LoudReader is fully on-device and private, your library never
            leaves your device. The app has no account, no analytics, and no
            cloud processing. The text you are reading stays on the chip that
            is reading it. For anyone reading confidential documents, this is
            the difference between a tool you can use and a tool you cannot.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Is on-device TTS on Apple Silicon as good as cloud TTS?">
        <p>
          The honest answer: it depends on the implementation. A well-built
          on-device voice model running on the Neural Engine can sound very
          close to a cloud voice. The Neural Engine has enough compute to run
          sophisticated models. But cloud services have an advantage: they can
          run much larger models on server GPUs, and their voices can be more
          expressive in theory.
        </p>
        <p>
          In practice, the difference is often smaller than you would expect.
          LoudReader's neural voices are clear, natural, and comfortable for
          hours of listening. Speechify's cloud voices are slightly more
          expressive, but the difference is marginal for most people. The
          tradeoff is not really about voice quality at this point. It is
          about privacy, offline reliability, and latency. On-device wins all
          three. Cloud wins on raw model size, which matters less as on-device
          hardware improves.
        </p>
        <p>
          If you want to hear the difference yourself, the test is simple:
          download LoudReader (free), listen to a passage, then try a
          cloud-based app with the same text. Your ears will tell you which
          voice you prefer. For more on the offline vs. cloud comparison, see{" "}
          <Link
            href="/blog/are-offline-voices-as-good-as-cloud"
            className="text-loudBlue hover:underline"
          >
            are offline voices as good as cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What if I have an Intel Mac?">
        <p>
          LoudReader requires Apple Silicon ({REQUIREMENTS}) and will not run
          on an Intel Mac. If you have an Intel Mac and want a read-aloud app,
          your options are:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">macOS Spoken Content (built-in, free).</strong>{" "}
            Works on Intel Macs with the system voice. Good for short passages.
            No bookmarking or reading features.
          </li>
          <li>
            <strong className="text-gray-900">Cloud-based apps.</strong>{" "}
            Speechify, NaturalReader, and others run on Intel Macs through a
            browser or Electron wrapper and stream voices from their servers.
            You trade privacy and offline reliability for voice quality.
          </li>
          <li>
            <strong className="text-gray-900">Use an iPhone or iPad.</strong>{" "}
            All iPhones from the iPhone 8 and newer, and all iPads from 2018
            and newer, have a Neural Engine. LoudReader runs on any iPhone or
            iPad with iOS 18+, and it includes the same voices and features
            as the Mac version.
          </li>
        </ul>
        <p>
          For more on the Mac privacy angle,{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text-to-speech with no cloud
          </Link>{" "}
          covers why on-device processing matters.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear what Apple Silicon can do with your books"
        subline="LoudReader uses the Neural Engine for natural voices that run entirely on your device. Private, offline, no account."
      />
    </ArticleLayout>
  );
}

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

export default function TextToSpeechAirplaneModeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Cloud-based text-to-speech apps stop working the moment you switch to
          airplane mode because they need a server to generate audio.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) runs
          entirely on your device. The voices are built in, the processing
          happens on the Neural Engine, and the library lives on your phone. It
          is fully on-device and private, your library never leaves your
          device. Import your books before the flight, enable airplane mode,
          and listen for the entire trip. No WiFi, no cellular, no account. The
          free tier includes unlimited listening with a standard voice. Premium
          adds all eight neural voices, speed control from 0.3x to 3.0x, a
          sleep timer, ambient soundscapes, and notes.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Import before you board. Airplane mode does not touch LoudReader."
      />

      <QuestionSection question="Why do most TTS apps fail in airplane mode?">
        <p>
          There are two kinds of text-to-speech apps, and only one survives a
          flight:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Cloud-based apps.</strong> When
            you press play, the app sends your text to a remote server. The
            server runs a high-quality voice model, generates the audio, and
            streams it back. This gives you the best possible voice quality,
            but it requires a constant internet connection. In airplane mode,
            the server is unreachable. The app either shows a loading spinner
            forever or plays nothing at all.
          </li>
          <li>
            <strong className="text-gray-900">On-device apps.</strong> The
            voice model lives inside the app and runs on your phone or
            laptop's processor. No text is sent anywhere. No audio is
            streamed. The app works the same at 35,000 feet as it does on the
            ground, because it never needed a connection in the first place.
          </li>
        </ul>
        <p>
          The distinction is not always obvious from the App Store listing.
          Many apps call themselves &quot;offline&quot; but still require a
          connection for voice generation, caching, or license checks. The only
          way to be sure is to test it: enable airplane mode, press play. If
          audio comes out, the app is genuinely offline.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I prepare LoudReader for a flight?">
        <p>
          The prep takes a few minutes and there is no last-minute scramble for
          WiFi at the gate:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Import your books while online.</strong>{" "}
            Add EPUBs and PDFs from your Files app, iCloud Drive, or any other
            source. Browse the built-in Project Gutenberg catalog (70,000+
            free classics) and download the ones you want. Gutenberg browsing
            requires internet, so do this before you leave.
          </li>
          <li>
            <strong className="text-gray-900">Test playback.</strong> Open
            each book, press play for a few seconds, and confirm it reads
            correctly. Catching an import issue at home is better than
            discovering a blank book at cruising altitude.
          </li>
          <li>
            <strong className="text-gray-900">Charge your phone.</strong>{" "}
            If your flight has no power outlets, a full battery gives you
            many hours of listening with the screen off. Airplane mode saves
            additional battery by disabling the radios.
          </li>
          <li>
            <strong className="text-gray-900">Enable airplane mode and press play.</strong>{" "}
            That is it. No offline mode toggle, no downloaded voice packs, no
            pre-caching step. LoudReader's voices are part of the app install.
          </li>
        </ol>
        <p>
          If you share a flight with someone who watches you do this and asks
          how, the{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            guide to turning any book into an audiobook
          </Link>{" "}
          covers the full import-and-play workflow.
        </p>
      </QuestionSection>

      <QuestionSection question="Does airplane mode affect voice quality?">
        <p>
          No. This is a common question because many apps degrade their quality
          when offline, falling back to a robotic backup voice. LoudReader's
          neural voices are the same voices online and offline because they
          always run on your device. The Neural Engine on Apple Silicon chips
          handles the voice generation, and it does not care whether the WiFi
          radio is on or off.
        </p>
        <p>
          The tradeoff is that on-device voices use storage space and
          processing power, which is why many apps choose to run them in the
          cloud instead. LoudReader includes the voices in the app download,
          and the app is larger than a cloud-only reader as a result. The
          benefit is that quality is consistent everywhere: on a plane, in a
          subway tunnel, in a rural area with no signal, and at home on WiFi.
        </p>
      </QuestionSection>

      <QuestionSection question="What about other offline scenarios besides flying?">
        <p>
          The airplane test is a good proxy for any situation where the
          internet is unreliable or unavailable:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Subways and tunnels.</strong>{" "}
            Your commute probably has dead zones. Cloud-based TTS drops out in
            every one of them. On-device TTS does not notice.
          </li>
          <li>
            <strong className="text-gray-900">Rural areas and road trips.</strong>{" "}
            Long stretches of highway with no cell coverage. An on-device
            reader keeps the book going while the streaming apps buffer into
            silence.
          </li>
          <li>
            <strong className="text-gray-900">International travel without a data plan.</strong>{" "}
            Roaming data is expensive and often slow. Load your books at home
            on WiFi and listen offline for the entire trip.
          </li>
          <li>
            <strong className="text-gray-900">Privacy-sensitive situations.</strong>{" "}
            If you do not want your reading activity visible to any network or
            service, airplane mode plus an on-device reader is the most private
            setup available. See{" "}
            <Link
              href="/blog/text-to-speech-without-internet-iphone"
              className="text-loudBlue hover:underline"
            >
              text-to-speech without internet on iPhone
            </Link>{" "}
            for the privacy details.
          </li>
        </ul>
        <p>
          For a broader look at offline reading on Mac,{" "}
          <Link
            href="/offline-text-to-speech-mac"
            className="text-loudBlue hover:underline"
          >
            offline text-to-speech on Mac
          </Link>{" "}
          covers the desktop side.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your flight just got a lot more interesting"
        subline="Import your books before you board. LoudReader works in airplane mode, no WiFi needed. Natural voices, fully offline."
      />
    </ArticleLayout>
  );
}

import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, DIFFERENTIATORS } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function HowMuchStorageDoOfflineVoicesNeedArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Offline voices have to live on your device to work without a
          network connection, so yes, they take up storage, and no, that
          storage doesn't get topped off with surprise downloads later. In
          LoudReader, every voice model ships bundled inside the app itself.
          The app is written to never touch the network for speech models at
          all, so there's no per-voice download the first time you try a new
          narrator and nothing quietly fetching data in the background while
          you read. There's no exact megabyte figure for the full 23-voice
          set published here, because giving you a made-up number would be
          worse than giving you none. What's verified and worth knowing: the
          app copies its bundled models into an on-device cache on first
          launch (a one-time local copy, not a download), and{" "}
          <strong>on-device voice cloning specifically needs about 170 MB</strong>{" "}
          of enrollment-only models just to build a clone from your
          recording, models that exist only to make the voice, not to speak
          with it. It all runs {DIFFERENTIATORS.private}.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Bundled with the app, not fetched over the network."
      />

      <QuestionSection question="Do offline text to speech voices take up storage?">
        <p>
          Yes, structurally they have to. A voice that works without an
          internet connection needs its speech model sitting on your device
          already, because there's nowhere else for the app to pull it from
          mid-sentence. That's the tradeoff offline voices make: some upfront
          storage, in exchange for never needing a connection to read to
          you. A cloud-based reader avoids that storage cost, but pays for
          it every time you listen, sending your text out and audio back
          over the network. LoudReader is built for the offline side of
          that tradeoff:{" "}
          <Link
            href="/offline-text-to-speech-mac"
            className="text-loudBlue hover:underline"
          >
            natural offline voices
          </Link>{" "}
          that don't need a live connection once the app is installed.
        </p>
      </QuestionSection>

      <QuestionSection question="Do voices download separately, or come with the app?">
        <p>
          They come with the app. LoudReader's voice models ship bundled
          inside the install itself, not as a set of per-voice downloads you
          trigger the first time you try each narrator. That's a deliberate
          choice in how the app is built: it forces an offline flag on for
          its speech engine before anything else loads, so a missing model
          file throws a clear error instead of quietly reaching out to the
          network to fetch it. In practice that means nothing downloads in
          the background while you're reading in a coffee shop or on a
          plane, and switching narrators mid-book doesn't cost you any data.
        </p>
        <p>
          The picker itself only shows narrators for a language once you
          have a book in that language, which keeps the voice list from
          being 23 names deep the first time you open it. Worth being clear
          about: that's a UI decision, not a storage trick. Every voice
          model is already sitting on your device the moment you install
          the app, whether or not its language's narrators are currently
          showing in the picker.
        </p>
      </QuestionSection>

      <QuestionSection question="What happens to storage the first time you open the app?">
        <p>
          On first launch, LoudReader copies its bundled speech-model files
          from the read-only app package into a working cache folder on
          your device, so the speech engine always reads from one known
          location instead of hunting through the app bundle every time. It
          is a local, one-time copy operation, not a network download, and
          it doesn't repeat on every launch once it's done. If you ever see
          your phone's storage settings for LoudReader look larger than the
          App Store's listed install size, this copy is the honest reason
          why, not a bug and not a hidden download.
        </p>
      </QuestionSection>

      <QuestionSection question="Does voice cloning use extra storage?">
        <p>
          Setting up{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            on-device voice cloning
          </a>{" "}
          needs its own set of models, separate from the ones that speak in
          the built-in narrator voices. LoudReader's enrollment models, the
          ones that turn a short recording of your voice into a narrator,
          come to about 170 MB. They only run while you're making a clone.
          Once the recording is processed, the app unloads them and they
          have no further job until you record another voice.
        </p>
        <p>
          The honest part: those 170 MB currently ship inside every install,
          whether you ever use voice cloning or not. Packaging them
          as an optional download instead of a bundled one is a known gap,
          not a finished feature, because on-demand delivery is handled by
          the App Store and can't be fully tested in a local build. If
          you're a privacy-conscious user who never plans to clone a voice,
          it's fair to know that storage is there either way, at least for
          now.
        </p>
      </QuestionSection>

      <QuestionSection question="How much storage does LoudReader actually take?">
        <p>
          No exact number for the full app, or for the complete 23-voice
          narrator set, appears in this article, because none has been
          verified closely enough to state with confidence, and a guessed
          figure would be worse than an honest gap. What is verified: voices
          don't grow your storage use over time the way a streaming app's
          cache can, since there's no per-voice download and no
          incrementally-fetched language pack. The storage cost is mostly
          paid once, at install, not metered out as you use the app. For the
          exact current figure, the App Store listing itself is the
          authoritative source, updated automatically whenever the app
          changes, which this article isn't.
        </p>
        <p>
          If storage is the whole reason you're weighing offline against
          cloud text to speech, it helps to read the full tradeoff:{" "}
          <Link
            href="/blog/on-device-text-to-speech-explained"
            className="text-loudBlue hover:underline"
          >
            what on-device text to speech actually means
          </Link>{" "}
          covers the mechanics beyond just storage, including why{" "}
          {DIFFERENTIATORS.native} matter for keeping everything local in
          the first place.
        </p>
      </QuestionSection>

      <ArticleIllustration
        variant="devices"
        caption="Installed once, then no per-voice downloads after that."
      />

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Voices that live on your device, not in the cloud"
        subline="No per-voice downloads, no network fetch for speech, fully on-device and private, your library never leaves your device."
      />
    </ArticleLayout>
  );
}

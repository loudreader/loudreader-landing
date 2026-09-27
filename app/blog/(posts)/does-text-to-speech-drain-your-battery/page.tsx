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

export default function DoesTextToSpeechDrainYourBatteryArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Yes: generating speech and playing audio both use battery. How much
          depends on the phone, voice model, screen, audio output and other
          activity. There is no measured LoudReader battery benchmark behind this
          article, so we cannot promise a number of listening hours or say it
          outlasts cloud readers. The useful question is whether your normal
          listening session leaves enough charge for the rest of your day. You
          can check that on your own iPhone without guessing which component
          consumes the most power.
        </p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="Measure a normal listening session on the phone you actually use." />

      <QuestionSection question="What work is the phone doing while it reads?">
        <p>
          An on-device reader turns new text into audio, then plays it. A recorded
          audiobook already has the audio, although playback still needs power.
          Voice models and playback implementations differ, so that distinction
          alone does not tell you the battery percentage each app will use.
        </p>
        <p>
          LoudReader can reuse generated audio from its local cache. That may
          avoid generating the same passage again, but the cache has a limit and
          older entries can be removed. Replaying a chapter is not guaranteed to
          be free of synthesis, nor to cost exactly the same as a podcast.
        </p>
      </QuestionSection>

      <QuestionSection question="Is offline speech always more efficient than cloud speech?">
        <p>
          No universal winner follows from those labels. Local speech uses the
          phone for generation; cloud speech moves that work to a server but
          requires audio transfers. A service may download in batches or cache
          audio, so it need not stream continuously throughout every listen.
          Compare actual sessions, not an assumed ranking of screen, radio and
          processor power.
        </p>
        <p>
          In <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>,
          narration is generated on the device, without uploading the book to a
          speech server. Downloads and other app services can still use the
          network. Local narration is an architectural fact, not proof of better
          battery life.
        </p>
      </QuestionSection>

      <QuestionSection question="How can I check the battery cost on my iPhone?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Note your battery level, voice, playback speed and audio output.</li>
          <li>Listen for a normal session, with the screen locked if that is how you usually listen.</li>
          <li>Open Settings → Battery afterwards and inspect the usage for that period. Apple explains the available views in its <a href="https://support.apple.com/en-gb/102432" className="text-loudBlue hover:underline">battery usage guide</a>.</li>
          <li>Repeat under similar conditions before drawing a conclusion. Charging, navigation or a video call during one session makes it a poor comparison.</li>
        </ol>
        <p>
          Record whether you were hearing new text or replaying a cached passage.
          A single short sample is useful for spotting a problem, but is not a
          reliable forecast for an entire day.
        </p>
      </QuestionSection>

      <QuestionSection question="What should I change first?">
        <p>
          Start by locking the screen when you do not need to follow the words.
          LoudReader supports <Link href="/blog/read-aloud-screen-off-iphone" className="text-loudBlue hover:underline">screen-off playback</Link>.
          If you keep the display on, use comfortable brightness: Apple recommends
          dimming it or using auto-brightness to conserve energy in its <a href="https://support.apple.com/en-gb/109351" className="text-loudBlue hover:underline">display settings guide</a>.
        </p>
        <p>
          Pause when you finish listening. For bedtime, LoudReader&apos;s Premium
          sleep timer can stop playback for you. If usage still seems unusual,
          check whether it coincides with a particular voice or other app
          activity, and include those details in a support report.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Put your listening setup to the test" subline="Try a short book session with local speech and the screen locked." />
    </ArticleLayout>
  );
}

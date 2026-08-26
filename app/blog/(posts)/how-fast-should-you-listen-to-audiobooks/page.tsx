import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function HowFastShouldYouListenToAudiobooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The short answer: 1.25x to 1.5x is safe for most people and most
          books. Comprehension starts to drop measurably above 2x, and by 3x
          you are skimming by ear. But the real answer is that content
          complexity matters more than the number on the dial. A light novel at
          1.5x is fine; dense non-fiction at 1.2x can lose you.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) gives you
          speed control from 0.3x to 3.0x with natural offline voices, so you
          can find your personal sweet spot per book. It is fully on-device and
          private, your library never leaves your device. Speed control is part
          of {PRICING.premiumMonthly} Premium; the free tier plays at normal
          speed with unlimited listening.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Finding your speed sweet spot: fast enough to stay engaged, slow enough to absorb."
      />

      <QuestionSection question="Why does faster speed sometimes feel better?">
        <p>
          Because your brain craves the pace it can handle. At 1x, a typical
          narrator speaks at about 150 words per minute. Most people read
          silently at 200 to 300 words per minute, depending on the material.
          So 1x can feel slow, like the voice is dragging behind your thoughts.
          Bumping to 1.25x or 1.5x closes that gap between listening pace and
          thinking pace, and the result is that the book feels more engaging,
          not rushed.
        </p>
        <p>
          The sweet spot is where your brain stops noticing the speed. Below
          it, your mind wanders because the input is too slow. Above it, your
          mind scrambles to keep up. The number varies by person and by book,
          but for most people it lands somewhere between 1.25x and 1.75x for
          familiar content types.
        </p>
      </QuestionSection>

      <QuestionSection question="When does faster speed start costing you?">
        <p>
          Research in cognitive psychology has found a pretty consistent
          pattern. At 1.25x to 1.5x, comprehension holds up well for narrative
          and informational content. Past 2x, comprehension begins to drop
          measurably for most listeners. By 3x, you are getting the gist at
          best.
        </p>
        <p>
          But those are averages across many people and many types of content.
          Your personal cutoff depends on three things: how familiar you are
          with the subject, how complex the language is, and how much you care
          about every detail. A re-read of a favorite novel at 2x might work.
          A dense philosophy book at 1.3x might not. The honest rule is to
          notice when you start rewinding. That is your brain telling you the
          speed cost is real.
        </p>
      </QuestionSection>

      <QuestionSection question="Does text-to-speech handle high speeds differently?">
        <p>
          TTS can be less forgiving at high speeds than human narration, and
          the reason is prosody. A human narrator uses natural pauses, emphasis
          changes, and phrasing that carry meaning even when sped up. Those
          cues help your brain chunk sentences into digestible pieces. Neural
          TTS voices sound natural at normal speed, but their prosody is
          generated algorithmically and can compress in ways that make fast
          speech harder to follow than the same speed on a human recording.
        </p>
        <p>
          The practical takeaway: if you are using LoudReader's natural offline
          voices, start conservative. 1.25x is a safe starting point. Nudge up
          slowly and pay attention to whether you are still catching full
          sentences or just keywords. LoudReader Premium gives you fine-grained
          control from 0.3x to 3.0x, so you are never locked into a fixed
          increment.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you find your personal speed per book?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Start at 1x for the first chapter. Get a baseline feel for the
            narrator or voice.
          </li>
          <li>
            Nudge to 1.25x. If you can summarize what just happened without
            effort, go to 1.5x.
          </li>
          <li>
            Keep nudging until you catch yourself rewinding or realizing you
            missed a paragraph. Back off one step.
          </li>
          <li>
            Adjust per chapter. Action scenes and dialogue can handle more
            speed than dense exposition or world-building.
          </li>
          <li>
            For learning or study, stay at 1x. The extra processing time is
            worth more than the saved minutes.
          </li>
        </ol>
        <p>
          Your speed is not a fixed setting. It varies by book, by chapter,
          and even by time of day. The point is having the control to adjust
          it, not locking in a number and sticking to it forever.
        </p>
      </QuestionSection>

      <QuestionSection question="What about listening slower than 1x?">
        <p>
          Slower speeds have their place too. If you are listening in a noisy
          environment, learning a new language, or working through dense
          technical material, dropping to 0.8x or 0.9x gives your brain the
          extra processing time it needs. It is also useful for savoring
          particularly beautiful prose: slowing a passage to 0.8x can make it
          feel like a reading, not a race. LoudReader Premium covers the full
          range from 0.3x to 3.0x, so you have the full toolkit.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Find your speed on any book"
        subline="Natural offline voices, speed control from 0.3x to 3.0x, and unlimited listening on the free tier."
      />
    </ArticleLayout>
  );
}
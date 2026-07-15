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

export default function FallAsleepToAudiobooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Falling asleep to audiobooks works well if you run it as a system
          instead of just pressing play. The system has three rules.{" "}
          <strong>Always set a sleep timer</strong> so the book stops on its
          own and your place stays findable.{" "}
          <strong>Pick bedtime-safe books</strong>, familiar re-reads and slow
          classics, not thrillers you&apos;ll fight sleep to follow.{" "}
          <strong>Keep the setup friction-free</strong>: screen locked, volume
          low, nothing to fiddle with in the dark. In{" "}
          <strong>LoudReader</strong>, the sleep timer (15, 30, or 60 minutes)
          pauses playback when it runs out, keeping your exact place, and
          ambient soundscapes (Rain, Fireplace, Ocean Waves) can play softly
          under the narration. Both are Premium features. The listening itself
          is free and unlimited, fully on-device and private, your library
          never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Narration that fades out on a timer, instead of playing until 4 a.m."
      />

      <QuestionSection question="Why do audiobooks help some people fall asleep?">
        <p>
          No science will be claimed here, just the pattern many listeners
          describe. A voice reading a story gives a racing mind exactly one
          thing to follow, which crowds out the to-do lists and replayed
          conversations that keep you staring at the ceiling. It&apos;s
          screen-free, so you&apos;re not ending the day with a bright display.
          And for a lot of people it lands somewhere deeper: being read to
          sleep is one of the oldest bedtime rituals there is, and it still
          works on adults.
        </p>
        <p>
          The failure mode is just as well known: you drift off in chapter
          four and wake to the narrator wrapping up chapter eleven. The rest
          of this guide is about preventing that.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you not lose your place when you fall asleep?">
        <p>
          Sleep timer discipline. It sounds obvious and it&apos;s the entire
          trick:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Set the timer every single night</strong>, before your
            head hits the pillow, not &quot;if I feel myself drifting.&quot;
            You won&apos;t feel yourself drifting. That&apos;s what drifting is.
          </li>
          <li>
            <strong>Size it to how fast you fall asleep.</strong> Quick to
            drop off? 15 minutes. Need longer to wind down? 30 or 60. Worst
            case, the book runs one timer-length past you.
          </li>
          <li>
            <strong>Let the timer do the stopping.</strong> When
            LoudReader&apos;s timer runs out, playback pauses on its own. The
            book is parked exactly where the narration stopped, place kept.
          </li>
          <li>
            <strong>Skip back on waking.</strong> Next evening, jump back a
            few minutes before your last remembered scene. With a
            timer-bounded overshoot, re-finding your place takes a minute,
            not a search through three chapters.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="Which books work best at bedtime?">
        <p>
          Bedtime listening has its own taste. What many sleep-listeners
          converge on:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Familiar re-reads.</strong> A
            book you already know is the classic choice, because nothing
            important can be missed, so your brain is free to let go.
          </li>
          <li>
            <strong className="text-gray-900">
              Slow, steady classics.
            </strong>{" "}
            Long descriptive passages and unhurried plots (think Austen,
            Trollope, travel writing) make gentle bedtime material. LoudReader
            has 70,000+ free Project Gutenberg classics built in, which is a
            deep well of exactly this.
          </li>
          <li>
            <strong className="text-gray-900">
              Not the gripping stuff.
            </strong>{" "}
            Thrillers and page-turners at bedtime are self-defeating: if the
            book is doing its job, you&apos;re fighting sleep to find out what
            happens. Save those for the commute.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="How do LoudReader's sleep timer and soundscapes work?">
        <p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          is a text-to-speech reader with natural offline voices. It reads
          any DRM-free EPUB or PDF (and those built-in classics) as an
          audiobook, on{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            native Mac and iPhone apps
          </Link>
          . For bedtime specifically:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Sleep timer:</strong> 15, 30,
            or 60 minutes, set from the player. When it runs out, playback
            pauses and your place is kept. Narration continues with the
            screen locked, so the phone stays face-down on the nightstand.
          </li>
          <li>
            <strong className="text-gray-900">Ambient soundscapes:</strong>{" "}
            Rain, Fireplace, or Ocean Waves playing softly under the
            narration, so the pauses between sentences don&apos;t open into the
            kind of silence that snaps you back awake.
          </li>
        </ul>
        <p>
          Honest pricing note: both features are part of Premium
          ($7.99/month, $49.99/year, or $199.99 once), along with all 8 AI
          voices, playback speed, and notes &amp; highlights. The core
          experience is free, with no account and no quota: unlimited
          listening on every book, cover to cover. The full breakdown is on
          the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">
            FAQ page
          </Link>
          . And because everything runs locally, your nightstand listening is
          fully on-device and private, your library never leaves your device.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="End the day with a book, not a screen"
        subline="Natural offline voices read you to sleep, free, unlimited, no account. Sleep timer and soundscapes in Premium."
      />
    </ArticleLayout>
  );
}

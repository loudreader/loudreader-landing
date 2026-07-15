import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function SlowDownAudiobookSpeedArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The internet is full of advice about listening to audiobooks
          faster. This is about the opposite dial. For language learners,
          dense material, and anything you actually want to retain,{" "}
          <strong>slowing down is the power feature</strong>. Comprehension
          collapses the moment narration outruns your processing, and no
          productivity trick survives not understanding the book. Most apps
          barely let you slow down at all. Audible&apos;s floor is 0.5x and
          Apple Books stops at 0.75x. <strong>LoudReader</strong> goes down
          to <strong>0.3x</strong> with the voice&apos;s natural pitch
          intact. Honest note: speed control is a Premium feature
          ($7.99/month, $49.99/year, or $199.99 once), and the free tier
          plays at normal speed with unlimited listening.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="The right speed is the one where every word lands."
      />

      <QuestionSection question="Why is everyone telling you to listen faster?">
        <p>
          Because for the people writing that advice, it works. A fluent
          listener replaying a familiar genre in their native language has
          comprehension to spare, so spending it on speed is rational, and a
          podcast habit at 1.5x really does clear more of a backlog. The
          advice fails when it gets universalized. Speed-listening guides
          quietly assume your bottleneck is time. For someone learning
          English, reading dense nonfiction, or meeting hard new ideas, the
          bottleneck is <em>processing</em>, and turning the speed up just
          moves the collapse earlier. Listening isn&apos;t like reading. You
          can&apos;t glance back at a sentence that lost you. It&apos;s
          simply gone.
        </p>
      </QuestionSection>

      <QuestionSection question="What does slowing down actually give you?">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Word boundaries.</strong>{" "}
            Connected speech blurs where words start and end, which is the
            hardest part of listening in a language you are learning. Slower
            narration puts the seams back.
          </li>
          <li>
            <strong className="text-gray-900">Processing headroom.</strong>{" "}
            Unfamiliar vocabulary and long sentences take real time to parse.
            Slower playback pays that cost once per sentence instead of
            making you rewind and pay it twice.
          </li>
          <li>
            <strong className="text-gray-900">Every word, not the gist.</strong>{" "}
            At a comfortable speed you follow the plot. At a deliberately
            slow one you catch the grammar, the articles, the prepositions,
            the parts learners are trying to absorb.
          </li>
          <li>
            <strong className="text-gray-900">Less rewinding.</strong> The
            slow listen that lands the first time is faster than the quick
            listen you replay three times.
          </li>
        </ul>
        <p>
          Slowing down pairs naturally with reading along, eyes on the text
          while the voice speaks it. That combination, and the research
          behind it, is the subject of{" "}
          <Link
            href="/blog/learn-english-by-listening-to-books"
            className="text-loudBlue hover:underline"
          >
            learn English by listening to books
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How slow can popular apps actually go?">
        <p>
          Nobody advertises this, but mainstream audiobook apps are built
          for the speed-up crowd, and their floors show it.{" "}
          <a
            href="https://help.audible.com/s/article/set-narration-speed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Audible&apos;s narration speed
          </a>{" "}
          ranges from 0.5x to 3.5x, and{" "}
          <a
            href="https://support.apple.com/guide/books/listen-to-audiobooks-ibks9a460640/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Apple Books
          </a>{" "}
          bottoms out at 0.75x. Both are fine floors for native-speed
          listeners, and too high for syllable-level listening practice.
        </p>
        <ComparisonTable
          caption="Playback speed ranges: LoudReader vs Audible vs Apple Books"
          columns={["LoudReader", "Audible", "Apple Books"]}
          rows={[
            {
              label: "Slowest speed",
              cells: ["0.3x (Premium)", "0.5x", "0.75x"],
            },
            {
              label: "Fastest speed",
              cells: ["3.0x", "3.5x", "2x"],
            },
            {
              label: "Adjustment",
              cells: [
                "Continuous slider",
                "0.05 steps",
                "0.25 steps",
              ],
            },
          ]}
        />
        <p>
          Fair concessions: Audible&apos;s 3.5x ceiling is higher than
          LoudReader&apos;s, its 0.05 stepping is genuinely fine-grained, and
          both apps play professionally narrated recordings, which is a
          different product from reading your own books aloud. The comparison
          is about the floor, and at the floor LoudReader is in a different
          range. 0.3x is slow enough to shadow sentences aloud, take
          dictation, or walk through a dense passage word by highlighted
          word.
        </p>
      </QuestionSection>

      <QuestionSection question="Does slowing the audio make the voice sound wrong?">
        <p>
          The old fear, that slowing it down turns the narrator into a
          groaning tape deck, comes from speed changes that shifted pitch.
          LoudReader keeps the voice at its natural pitch at any speed. At
          0.5x the narration just becomes more deliberate, like a patient
          teacher, not deeper or robotic. And because the narration is
          generated on your device with natural offline voices, slow
          playback costs nothing extra. No buffering, no streaming penalty.
          It is fully on-device and private, your library never leaves your
          device, so 0.3x in airplane mode works exactly like 0.3x at home.
        </p>
      </QuestionSection>

      <QuestionSection question="When should you speed back up?">
        <p>
          Slow is a tool, not an identity. The signal to move up is boredom
          without confusion. When you follow every sentence with ease and
          your mind starts to wander, the speed is leaving comprehension on
          the table. A simple ladder:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Start where every word lands. For learners that may be well below 1x.</li>
          <li>Raise the speed one notch when you stop rewinding entirely.</li>
          <li>Drop back down for new authors, dense chapters, or late-night listening.</li>
          <li>Re-listens and familiar genres can run fast. That is where 2x belongs.</li>
        </ol>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          turns any DRM-free EPUB or PDF into listening material for this,
          with word-by-word highlighting so slow listening doubles as
          reading practice. Try it{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            free on the App Store
          </a>
          . The speed slider is there when you outgrow 1x in either
          direction.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Listen at the speed you understand"
        subline="From 0.3x for word-by-word practice to 3.0x for re-reads. Free to start, no account."
      />
    </ArticleLayout>
  );
}

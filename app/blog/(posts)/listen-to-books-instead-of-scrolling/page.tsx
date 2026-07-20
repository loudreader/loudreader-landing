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

export default function ListenToBooksInsteadOfScrollingArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Scrolling is easy and books are hard, but that equation is about
          friction, not value. A feed loads in one tap and asks for nothing. A
          book asks you to sit still and focus. The habit swap that actually
          sticks is making a book just as convenient: one tap, one press, the
          chapter starts.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads any
          DRM-free EPUB or PDF aloud with natural offline voices, fully
          on-device and private, your library never leaves your device. Open the
          app instead of your feed, press play, lock the screen. The book runs.
          Your thumb has nothing to scroll. Fifteen minutes of scrolling becomes
          fifteen minutes of chapter. The swap is one decision, made once per
          trigger moment, and the math on how each one feels afterward does the
          rest of the persuading.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="One tap opens a feed. One tap opens a chapter. Which one leaves you with something?"
      />

      <QuestionSection question="Why is scrolling so much easier than reading?">
        <p>
          Because it was designed to be. Social feeds, news apps, and short-form
          video platforms are built around variable rewards and zero friction.
          You open the app and content is already there. You scroll and more
          content appears. There is no start-up cost and no attention
          commitment. The feed asks for nothing and gives you tiny hits of
          novelty in return.
        </p>
        <p>
          A book, by contrast, asks you to initiate. You have to decide to read,
          find the book, find your place, and then give it sustained attention
          before it starts to pay off. The value is much higher on the other
          side, but the entry cost is steeper. The swap that works is lowering
          the book&apos;s entry cost until it is as close to the feed&apos;s as
          possible.
        </p>
      </QuestionSection>

      <QuestionSection question="What is the one-trigger habit swap?">
        <p>
          Do not try to replace all scrolling with books. That is a resolution,
          not a system, and resolutions fail. Instead, pick one trigger moment.
          A specific time of day or situation where you reliably reach for your
          phone to scroll. The ten minutes on the couch after dinner. The
          five-minute wait for coffee to brew. The moment you sit down on the
          bus.
        </p>
        <p>
          The swap has two steps and one rule:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            When the trigger moment arrives, open{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader
            </a>{" "}
            instead of your feed app.
          </li>
          <li>
            Press <strong>play</strong>. Do not decide which book. Do not
            browse. The book you are currently reading is already open to your
            place. One press resumes it.
          </li>
        </ol>
        <p>
          The rule: do not open the feed app for the duration of the trigger
          moment. That is it. One trigger, one swap, one press. The book takes
          over from there.
        </p>
      </QuestionSection>

      <QuestionSection question="What makes the swap actually stick?">
        <p>
          The feeling afterward. After 15 minutes of scrolling, you close the
          app and the time is gone. Nothing remains. After 15 minutes of a
          chapter, you close the app and you have moved through something. A
          scene, an argument, a paragraph that will stay with you.
        </p>
        <p>
          The contrast between those two post-session feelings is what makes the
          swap stick over time. It is not discipline. It is noticing which one
          leaves you with something and which one does not. After a few days of
          the swap, the feed starts to feel like a worse deal. The book becomes
          the obvious choice because it actually delivers.
        </p>
        <p>
          If you want to build the reading side into a stronger habit,{" "}
          <Link
            href="/blog/how-to-build-a-reading-habit"
            className="text-loudBlue hover:underline"
          >
            how to build a reading habit
          </Link>{" "}
          walks through the full system.
        </p>
      </QuestionSection>

      <QuestionSection question="What if I want to scroll and listen at different times?">
        <p>
          That is the realistic version. Nobody replaces all scrolling with all
          books. The goal is to claim back specific slots, not to overhaul your
          entire relationship with your phone overnight. The trigger-moment swap
          gives you reading time every day without asking you to become a
          different person.
        </p>
        <p>
          Over time, what tends to happen is that the book slot grows naturally
          because it feels better than the feed slot. You start the swap for the
          after-dinner couch moment and two weeks later you are doing it on the
          lunch walk too. Not because you forced it. Because a chapter turned
          out to be more satisfying than a scroll and you wanted more of that
          feeling.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you listen while doing something else to resist the scroll urge?">
        <p>
          Yes, and this is one of the strongest defenses against mindless
          scrolling. Put a book on while you fold laundry, clean, or cook. Your
          hands are occupied, your ears are engaged, and the phone is across the
          room playing audio with the screen locked. You cannot scroll because
          the phone is not in your hand. The book fills the mental space the
          feed normally occupies, and your hands are too busy to reach for
          anything.
        </p>
        <p>
          LoudReader makes this easy because playback continues with the screen
          locked. The lock screen shows play, pause, and 15-second skip, and the
          voices run fully on-device and private, your library never leaves your
          device. No internet needed. The phone can sit on the other side of the
          room while the chapter runs through a Bluetooth speaker.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Swap the scroll for a chapter"
        subline="Open a book instead of a feed. Free unlimited listening, no account, one press."
      />
    </ArticleLayout>
  );
}

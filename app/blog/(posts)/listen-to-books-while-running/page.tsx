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

export default function ListenToBooksWhileRunningArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Running with an audiobook is different from running with music. Music
          sets a beat and disappears. A book pulls you forward through
          something: a chapter, an argument, a world.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads any
          DRM-free EPUB or PDF aloud with natural offline voices. It is fully
          on-device and private, your library never leaves your device, so no
          data plan is needed mid-run. The voices work in airplane mode, in
          rural stretches, and anywhere your route goes. Lock-screen controls
          and your headphone button handle pause and resume. Start the book
          before you lace up, press play, and your weekly mileage doubles as
          reading time.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Your stride is your reading pace. No data, no stream, no signal needed."
      />

      <QuestionSection question="Why listen to books instead of music on a run?">
        <p>
          Music and books serve different runs. Music works for intervals,
          sprints, and high-effort sessions where you need a beat to push
          against. Books work for steady runs, long runs, and recovery runs
          where your body is on autopilot and your mind has room.
        </p>
        <p>
          The practical difference: a one-hour run with music is an hour of
          running. A one-hour run with a book is an hour of running plus a
          chapter you did not have to schedule any other time for. If you are
          already logging miles and struggling to log pages, combining them
          solves a calendar problem without adding minutes to your day.
        </p>
      </QuestionSection>

      <QuestionSection question="What kind of books actually work while running?">
        <p>
          Plot-driven fiction is the strongest candidate. Thrillers, mysteries,
          fast-moving fantasy and sci-fi, narrative history, and memoirs. The
          story pulls you forward the same way the road does. If the book has a
          momentum of its own, it pairs with the momentum of the run instead of
          fighting it.
        </p>
        <p>
          What tends to not work: dense philosophy, technical manuals, anything
          that requires you to stop and think or flip back to a previous
          passage. Your brain at a 9-minute-mile pace processes differently than
          your brain in a chair. Choose books that reward continuous forward
          attention.
        </p>
      </QuestionSection>

      <QuestionSection question="Why does offline matter on a run?">
        <p>
          Three reasons, all of them practical:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">No data burn.</strong> Streaming
            audiobooks eat mobile data for the length of your run. An on-device
            reader uses zero.
          </li>
          <li>
            <strong className="text-gray-900">No dead-zone dropouts.</strong>{" "}
            Parks, trails, and rural routes can have patchy coverage. A streamed
            audiobook stutters or stops. An on-device voice does not care.
          </li>
          <li>
            <strong className="text-gray-900">Airplane mode.</strong> Running in
            airplane mode saves battery, silences notifications, and keeps you
            in the book. LoudReader works because the voices are local. It is
            fully on-device and private, your library never leaves your device.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="How do you set it up before a run?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Get{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            on your iPhone. Free, no account.
          </li>
          <li>
            Import any DRM-free EPUB or PDF. If you do not have a file ready,
            pick one of the 70,000+ free Project Gutenberg classics built right
            in.
          </li>
          <li>
            Connect your earbuds or headphones before you start running. Test
            the volume at a level that lets you hear your surroundings.
          </li>
          <li>
            Press <strong>play</strong>, lock the screen, and tuck the phone
            into an armband or zippered pocket. Run.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="How do you control playback mid-stride?">
        <p>
          The less you touch the phone, the smoother the run. Two options, both
          hands-free:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Headphone button.</strong> A
            single tap on most earbud or headphone controls pauses the book. Tap
            again to resume. That is it. You never break stride for playback.
          </li>
          <li>
            <strong className="text-gray-900">Lock screen.</strong> If you need
            to skip back 15 seconds because you missed something, pull the phone
            out long enough to tap the skip-back button on the lock screen. It
            does not require unlocking the phone.
          </li>
        </ul>
        <p>
          A good practical tip: set everything before the run. Voice, volume,
          speed, book. Then the only controls you need mid-run are play and
          pause.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn your run into reading time"
        subline="Import any EPUB or PDF, press play, and go. Free, offline, no account needed."
      />
    </ArticleLayout>
  );
}

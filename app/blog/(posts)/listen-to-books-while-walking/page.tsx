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

export default function ListenToBooksWhileWalkingArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Walking is the easiest way to fit books into your day because you are
          already doing it. The daily dog walk, the lunch loop around the block,
          the stroll after dinner. Those minutes add up, and your ears are free
          the whole time.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) turns any
          DRM-free EPUB or PDF into an audiobook with natural offline voices. It
          is fully on-device and private, your library never leaves your device,
          so playback works on trails, in parks with spotty signal, and anywhere
          you walk. Your phone stays in your pocket. The lock screen gives you
          play, pause, and 15-second skip, and your headphone button handles the
          rest. Walk, listen, and your reading list shrinks one mile at a time.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="Your walk is reading time. Pocket the phone and press play."
      />

      <QuestionSection question="Why turn your walk into reading time?">
        <p>
          Most people walk every day and barely notice the minutes. A 20-minute
          lunch walk, a 15-minute dog loop, another 15 minutes in the evening.
          That is nearly an hour of movement with nothing occupying your ears
          except maybe music or a podcast. Substituting a book turns that same
          hour into reading you did not have to schedule.
        </p>
        <p>
          The real win is not the hour itself. It is that walking-and-listening
          does not compete with anything else. You were going to walk anyway.
          Now you finish a chapter while you do it. No extra time carved out of
          the day, no trade-off between exercise and reading. The walk stays the
          walk. The book fits into the gaps your eyes could not use.
        </p>
      </QuestionSection>

      <QuestionSection question="What kind of setup works best on a walk?">
        <p>
          Simpler is better. The less you touch your phone mid-walk, the more
          you stay in the book and aware of your surroundings.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Download{" "}
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
            Import any DRM-free EPUB or PDF, or pick one of the 70,000+ free
            Project Gutenberg classics built in.
          </li>
          <li>
            Connect your headphones or earbuds. A single earbud in one ear
            keeps you aware of traffic and your surroundings.
          </li>
          <li>
            Press <strong>play</strong>, lock the screen, put the phone in your
            pocket, and walk.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="How do you control playback without touching your phone?">
        <p>
          Three ways, ranked by how much they keep you in the walk instead of on
          a screen:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Headphone button.</strong> Most
            earbuds and headphones have a single button. Tap once to pause,
            once to resume. That is the whole interface and it is the best one.
          </li>
          <li>
            <strong className="text-gray-900">Lock screen controls.</strong> If
            you do pull your phone out, the lock screen shows play, pause, and
            15-second skip. You never need to unlock it.
          </li>
          <li>
            <strong className="text-gray-900">15-second skip back.</strong> If
            a loud truck, a chatty neighbor, or a stray thought made you miss a
            sentence, tap skip back. No re-finding your place.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What if you lose signal on a trail or in a park?">
        <p>
          It does not matter. LoudReader&apos;s voices run entirely on your
          iPhone. There is no stream to drop, no audio file to pre-download, and
          no cloud dependency of any kind. The app is fully on-device and
          private, your library never leaves your device, so playback continues
          through the deepest patch of trees and the deadest dead zone on your
          route. The only thing a dropped signal means is that your messages
          will wait. Your book will not.
        </p>
      </QuestionSection>

      <ArticleIllustration
        variant="waveform"
        caption="Battery and a book. That's all you need."
      />

      <QuestionSection question="What kind of books work best on a walk?">
        <p>
          Narrative-driven books tend to be the easiest to follow while you are
          moving. Fiction of any kind, memoirs, narrative history and narrative
          non-fiction, and any writing that tells a story rather than builds an
          argument. The thread pulls you forward without demanding you stop and
          think through a diagram.
        </p>
        <p>
          Dense textbooks, reference-heavy non-fiction, and anything that relies
          on tables or figures is tougher. You cannot flip back to check a chart
          while walking, and stopping to re-read a passage means pausing your
          walk. Save those for desk reading. Use your walks for the books that
          work best at a steady forward pace.
        </p>
        <p>
          For more on picking the right material, see{" "}
          <Link
            href="/blog/how-fast-should-you-listen-to-audiobooks"
            className="text-loudBlue hover:underline"
          >
            how fast should you listen to audiobooks
          </Link>{" "}
          and the guide on{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            turning any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn your walk into a chapter"
        subline="Import any EPUB or PDF, press play, and walk. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}

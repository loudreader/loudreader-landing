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

export default function ListenToBooksAtTheGymArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The gym is prime dead time for reading: your body is busy but your
          mind has room on every steady cardio session, warm-up, and cool-down.
          An audiobook turns that hour into a workout plus a chapter, no extra
          scheduling required.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads any
          DRM-free EPUB or PDF aloud with natural offline voices. It is fully
          on-device and private, your library never leaves your device, so gym
          WiFi that requires a sign-in or a dead zone in the locker room makes
          no difference. Import your book, connect your earbuds, press play, and
          lock the screen. The lock screen and your headphone button handle
          pause and resume between sets. Your reading list and your workout log
          both get longer.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Cardio and chapters. Your gym hour just became reading time."
      />

      <QuestionSection question="Does listening while lifting actually work?">
        <p>
          It depends on the lift and your approach. Steady-state cardio is the
          natural fit: treadmill, elliptical, stationary bike, stair climber.
          Your body goes on autopilot and your brain follows the book. For
          lifting, the honest answer is mixed. Rest periods between sets are
          perfect for a few sentences. During the set itself, especially on
          heavy compounds like squats or deadlifts, your attention belongs on
          form, not on the narrator.
        </p>
        <p>
          The practical split that works for a lot of gym listeners: music for
          the heavy sets, then switch to the book during warm-up, cardio, rest
          periods, and cool-down. You do not have to choose between the two for
          the whole session.
        </p>
      </QuestionSection>

      <QuestionSection question="Why does an on-device reader beat streaming at the gym?">
        <p>
          Gym audio setups are surprisingly hostile to streaming. Shared WiFi
          that requires a captive portal sign-in every visit. Dead zones in
          locker rooms and stairwells. Cellular congestion in a busy gym.
          Streaming an audiobook through all of that means dropouts and
          buffering.
        </p>
        <p>
          LoudReader sidesteps all of it. The voices run entirely on your
          iPhone. The app is fully on-device and private, your library never
          leaves your device, and playback does not care about gym WiFi,
          cellular dead zones, or airplane mode. Import your books once at home
          and they are ready every session.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you set it up for a gym session?">
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
            on your iPhone. Free, no account needed.
          </li>
          <li>
            Import any DRM-free EPUB or PDF, or grab a free classic from the
            70,000+ built-in Project Gutenberg library.
          </li>
          <li>
            Connect your earbuds or headphones, the kind that stay put through
            movement. Over-ear noise cancelling works for cardio. Sweat-resistant
            buds work for everything.
          </li>
          <li>
            Press <strong>play</strong>, lock the screen, and put the phone on
            the treadmill tray or in your pocket.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="How do you manage playback between sets?">
        <p>
          The headphone button is your best tool at the gym. A single tap pauses
          the book when you start a set. A single tap resumes it when you
          finish. You never touch the phone. The book waits exactly where you
          left it.
        </p>
        <p>
          The lock screen gives you more if you need it: play, pause, and
          15-second skip. If you missed a sentence during a heavy rep or a
          particularly loud gym speaker announcement, tap skip back and catch
          it. Most headphones with an inline remote have the same play/pause
          function.
        </p>
        <p>
          One practical note: if your headphones support skip-forward and
          skip-back through double or triple taps, those may or may not map to
          LoudReader&apos;s controls depending on the headphone model. The safe
          bet is single-tap play/pause, which works universally.
        </p>
      </QuestionSection>

      <QuestionSection question="What kind of books pair well with a workout?">
        <p>
          Fast-paced fiction is the strongest gym pairing. Thrillers, sci-fi,
          action-heavy fantasy, and any book with a propulsive plot. The
          energy of the story matches the energy of the workout. Narrative
          non-fiction in the vein of popular history and true crime works well
          too.
        </p>
        <p>
          What tends to not work: dense academic texts, technical manuals,
          anything that asks you to stop and mentally re-read a passage. Your
          brain at the gym is not your brain at a desk. If you want to dig into
          something heavy, save it for{" "}
          <Link
            href="/blog/best-playback-speed-for-comprehension"
            className="text-loudBlue hover:underline"
          >
            focused listening sessions
          </Link>
          . Use the gym for books that reward momentum.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your workout is reading time now"
        subline="Import any EPUB or PDF and press play. Free unlimited listening, no account, fully offline."
      />
    </ArticleLayout>
  );
}

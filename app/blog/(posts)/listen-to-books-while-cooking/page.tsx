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

export default function ListenToBooksWhileCookingArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Cooking is hands-on work that leaves your ears completely free. Dinner
          prep, baking, meal prepping for the week. Those 30 to 60 minutes every
          evening are prime reading time your eyes could never use.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) turns any
          DRM-free EPUB or PDF into an audiobook with natural offline voices,
          fully on-device and private, your library never leaves your device. A
          Bluetooth speaker on the counter or a pair of earbuds is all you need.
          Press play, lock the screen, and let the book run while you chop,
          stir, and wash. The lock screen and headphone button handle pause
          without you touching the screen. One press pauses the book when the
          pan needs your full attention. Kitchen time becomes reading time and
          dinner still gets made.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="The kitchen counter is a reading nook. Phone stays locked, speaker does the work."
      />

      <QuestionSection question="Why does cooking pair so well with audiobooks?">
        <p>
          Cooking is repetitive manual work that mostly runs on habit. Chopping
          vegetables, stirring a pot, monitoring a timer. Your hands know what
          to do and your brain has bandwidth to spare. The same cannot be said
          for new recipes or multi-step dishes that require constant attention,
          but the everyday cooking that fills most weeknights is the perfect
          audiobook backdrop.
        </p>
        <p>
          The time adds up fast. If you cook dinner five nights a week and spend
          an average of 40 minutes in the kitchen each time, that is over three
          hours of potential listening every week. Three hours is a solid chunk
          of a novel or a healthy portion of a non-fiction book. You were going
          to be in the kitchen anyway.
        </p>
      </QuestionSection>

      <QuestionSection question="What is the best audio setup for the kitchen?">
        <p>
          A small Bluetooth speaker is the right tool. Place it on a counter or
          on top of the fridge, away from splashes and spills, and the narration
          fills the room. You do not wear anything, so you can hear timers, the
          sizzle of a pan, and someone calling from the other room.
        </p>
        <p>
          Earbuds work too, but they isolate you from kitchen sounds that matter.
          The oven timer, the boiling pot, the knock at the door. If you go the
          earbud route, keep one ear open or use a transparency mode so you stay
          aware of what is happening around you.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you set up LoudReader before cooking?">
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
            Project Gutenberg classics built right in.
          </li>
          <li>
            Connect to your Bluetooth speaker, set the volume, and press{" "}
            <strong>play</strong>.
          </li>
          <li>
            Lock the screen and put the phone on a counter away from water and
            heat. The book keeps playing. Your hands stay on the food.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="How do you handle the noisy moments in the kitchen?">
        <p>
          Kitchens are loud in bursts, not continuously. The blender runs for 30
          seconds. The vent hood hums while you sear. Water runs while you wash
          greens. The pattern that works is simple:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Pause before the loud part.</strong>{" "}
            Tap the speaker or headphone button once. The book pauses at the
            current word.
          </li>
          <li>
            <strong className="text-gray-900">Resume after.</strong> Tap again.
            The narration picks up exactly where you left it.
          </li>
          <li>
            <strong className="text-gray-900">Skip back if you missed
            something.</strong> The lock screen has a 15-second skip-back button.
            If a sizzling pan drowned out the narrator for a few seconds, tap it
            and catch what you lost.
          </li>
        </ul>
        <p>
          Grouping noisy prep steps helps too. Blend everything at once, sear
          everything at once, then settle into the quieter simmering and
          stirring phase where the book runs uninterrupted.
        </p>
      </QuestionSection>

      <QuestionSection question="What kind of books work best in the kitchen?">
        <p>
          Light narrative is the sweet spot. Fiction that does not demand heavy
          concentration, memoirs, food writing (fittingly), popular science,
          history that tells a story rather than arguing a thesis. Books where
          missing thirty seconds while you drain pasta does not lose you the
          thread.
        </p>
        <p>
          Complex non-fiction that builds a dense argument, textbooks, and
          anything that expects you to stop and mentally re-read a paragraph are
          harder. Your attention splits between the recipe and the reasoning. If
          you want to take notes or mark passages for later, that is what{" "}
          <Link
            href="/blog/read-and-listen-at-the-same-time"
            className="text-loudBlue hover:underline"
          >
            reading and listening at the same time
          </Link>{" "}
          is for. Kitchen listening is for books that flow forward.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Dinner and a chapter, every night"
        subline="Import any EPUB or PDF, connect a speaker, and cook. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}

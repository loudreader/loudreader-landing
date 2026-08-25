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

export default function RemembersYourPlaceArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> saves your place automatically, down to
          the exact sentence, with nothing to press and no bookmark to set.
          As you read or listen, the app writes your position continuously,
          and it saves once more the moment you close the book as a backup.
          Reopen it later, on the same device, and playback or reading picks
          up from that sentence, not the top of the chapter. This matters more
          than it sounds like it should if losing your spot mid-page breaks
          your concentration or makes you reread the same paragraph three
          times. There's no manual "add bookmark" button because the app is
          always tracking where you are. It runs fully on-device and private,
          your library never leaves your device, and every saved position with
          it. The one honest limit: there's no account, so a saved spot
          doesn't sync between your iPhone and your Mac. Each device tracks
          its own copy.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Close the book anywhere. It picks up from the same sentence."
      />

      <QuestionSection question="How does LoudReader save your place?">
        <p>
          It happens in the background as you go. Every time your position in
          the book changes, from scrolling, reading, or listening,
          LoudReader records it. While playback is running, it tracks the
          specific sentence being read, not just the chapter or page. Close
          the book and it saves once more as a final check, so even closing
          the app mid-sentence doesn't cost you your place.
        </p>
        <p>
          There's no separate step for this. You don't tap a bookmark icon or
          confirm anything. The saving is the normal behavior of the app, not
          a feature you turn on.
        </p>
      </QuestionSection>

      <QuestionSection question="Does it remember the sentence or just the general area?">
        <p>
          The sentence. When you reopen a book, LoudReader resumes from the
          exact sentence you were last on, not an approximate spot in the
          chapter. If you had it playing aloud, the narration restarts from
          that sentence. If you were reading with the words highlighted as
          they're spoken, that's where the highlight picks back up.
        </p>
        <p>
          This is the detail that matters if you use text-to-speech to stay
          oriented in a book while your attention drifts. Landing back at the
          top of a long chapter after a break means re-listening to material
          you already heard, or losing track of where the new part starts.
          Landing on the exact sentence removes that friction entirely.
        </p>
      </QuestionSection>

      <QuestionSection question="What happens if I switch between reading and listening?">
        <p>
          Position tracking isn't tied to one mode. You can follow along with
          text-to-speech playing, read silently and scroll through the page,
          or switch back and forth between the two in one sitting, and the
          same saved position carries across. Position is one continuous
          thread through the book, not something reset when you change how
          you're consuming it.
        </p>
      </QuestionSection>

      <QuestionSection question="Why doesn't it need a manual bookmark button?">
        <p>
          Because a manual bookmark asks you to remember to use it, which is
          exactly the kind of extra step that's easy to skip when you're
          closing an app on the way to something else. LoudReader treats
          "where you stopped" as information the app should already have, not
          a thing you have to record yourself. If your attention gets pulled
          away mid-sentence with no warning, which happens constantly with
          real reading, the app has already saved your place before you
          thought to save it.
        </p>
        <p>
          This pairs with a broader piece of LoudReader's approach: turning
          any book into something you can pick up and put down freely. If you
          haven't set it up yet, the walkthrough is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What are the honest limits?">
        <p>
          One real one: LoudReader has no account and no server. It's{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            fully on-device and private
          </Link>
          , your library never leaves your device. The tradeoff is that a
          saved position doesn't sync between devices. Start a book on your
          iPhone and open the same file on your Mac, and the Mac tracks its
          own progress separately, because there's no cloud account
          connecting the two. If you read on one device at a time, this
          doesn't come up. If you switch mid-book between phone and laptop,
          it's worth knowing upfront rather than discovering it by losing
          your spot.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Never lose your place again"
        subline="LoudReader tracks your exact sentence automatically, on-device, no account needed."
      />
    </ArticleLayout>
  );
}

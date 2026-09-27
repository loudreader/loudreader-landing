import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import Tldr from "@/components/money/Tldr";
import StoreCta from "@/components/money/StoreCta";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>For bedtime listening, make it easy to stop and easy to find your place tomorrow. Choose a book you are happy to leave mid-chapter, note where you start, set a timer and put the screen away. In LoudReader, the Premium sleep timer offers 15, 30 or 60 minutes and pauses narration at the cutoff. It saves the playback position, not the moment you fell asleep, so you may still need to rewind. Audio is an optional evening routine: if following the story keeps you awake or becomes another task to finish, turn it off.</p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="The timer saves a stopping point, not the moment you drift off." />

      <QuestionSection question="What should I set before turning out the light?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Pick the book and starting passage before you settle down. Avoid spending the listening slot browsing for something to play.</li>
          <li>Choose a comfortable low volume and a speaker or headphones that suit your situation. Respect anyone sharing the room.</li>
          <li>Set the timer before playback becomes background sound. Check the timer indicator rather than assuming it remembered yesterday’s setting.</li>
          <li>Make a mental note or bookmark of the starting chapter. Lock the screen and leave the controls alone unless you need to pause.</li>
        </ol><p>This is a way to manage playback, not a treatment for sleep problems or a promise that a voice will make you fall asleep.</p>
      </QuestionSection>

      <QuestionSection question="Does a sleep timer save the last thing I heard?">
        <p>No. The app knows when playback pauses; it does not know when your attention drifted. If you start a 30-minute timer and stop following the story after ten minutes, there may be another twenty minutes to revisit. A shorter timer reduces that possible gap.</p><p>On returning, look for the last scene or heading you recognise and replay from there. If you repeatedly lose a large section, shorten the timer or choose a familiar book where missing a passage is less frustrating.</p>
      </QuestionSection>

      <QuestionSection question="Which books are worth trying at bedtime?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>A familiar reread:</strong> you already know the plot and can leave without resolving the next twist.</li>
          <li><strong>A short essay or self-contained chapter:</strong> a visible stopping point makes the session easier to bound.</li>
          <li><strong>A book with a voice you find comfortable:</strong> test the actual recording or TTS voice; a genre label alone will not tell you how it feels.</li>
        </ul><p>There is no universal bedtime genre. A thriller may be relaxing for one person and impossible to stop for another. Keep demanding study material for a session where you intend to remember it.</p>
      </QuestionSection>

      <QuestionSection question="What does LoudReader provide for this setup?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> reads imported DRM-free EPUBs and PDFs, with narration generated on the device. On iPhone, it can continue with the screen locked. The sleep timer is Premium; the current options are 15, 30 and 60 minutes, after which playback pauses.</p><p>Premium also includes optional Rain, Fireplace and Ocean Waves soundscapes. They are a preference, not a sleep aid we have clinically evaluated. Start with plain narration before adding another sound. Notes and highlights do not require Premium.</p><p>Try every available voice for your first 8 hours of listening. Afterwards, a free English voice selection remains available with unlimited book listening. Current purchase options are listed in the app and depend on your storefront; see the <Link href="/faq" className="text-loudBlue hover:underline">LoudReader FAQ</Link> for the feature split.</p>
      </QuestionSection>

      <QuestionSection question="What if I want a screen break rather than sleep?">
        <p>You can listen sitting up, stop at a chapter boundary and return to the rest of your evening. There is no need to turn every audio session into a bedtime routine. The <Link href="/blog/reduce-screen-time-with-audiobooks" className="text-loudBlue hover:underline">screen-off listening guide</Link> focuses on that goal, while <Link href="/blog/too-tired-to-read" className="text-loudBlue hover:underline">too tired to read</Link> helps choose between listening briefly and stopping for the night.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Keep bedtime listening easy to stop" subline="Try a familiar book. Sleep timer and soundscapes are Premium features." />
    </ArticleLayout>
  );
}

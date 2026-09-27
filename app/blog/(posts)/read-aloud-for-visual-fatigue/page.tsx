import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>If you want to continue a book after a day on screens, listening lets you put the page down. Set up the chapter and audio controls while you are comfortable, then lock the screen and listen for as long as you want. You do not need to follow the highlight for the entire session. This is a change in how you access the book, not a treatment for eye symptoms or a requirement to squeeze more reading into the evening. If you are too tired to follow the story, stopping is a reasonable choice too. The routine below is about making audio easy to use when you choose it.</p>
      </Tldr>
      <ArticleIllustration variant="offline" caption="Prepare the chapter first, then let the screen stay off." />
      <QuestionSection question="How do you prepare an evening listening session?">
        <p>A small amount of setup can keep the session from becoming another stretch of browsing. Choose the book before you settle down, open the chapter and check the volume. If headphones are uncomfortable, try a speaker in a setting where that will not disturb others.</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the book where you want to start. Check that a newly imported file reads in the correct order.</li>
          <li>Pick a voice you can follow comfortably. A short sample is enough to decide what to try first.</li>
          <li>Start playback, then lock the phone or tablet and put it within reach.</li>
          <li>Try pause and resume once using the lock-screen controls so you know where to return.</li>
          <li>Stop at a convenient point, or use a sleep timer if your player includes one.</li>
        </ol>
        <p>A familiar book or an uncomplicated section may suit an evening when you do not want demanding material. If you keep missing the plot, choose something else or leave the book for another day.</p>
      </QuestionSection>
      <QuestionSection question="Do you have to read along to get something from the book?">
        <p>No. Highlighting is useful when you want to find a word or rejoin the text, but following it means continuing to look at the screen. Audio-only playback is the more direct choice when your aim is to spend less time looking at text.</p>
        <p>You can switch between modes without treating one as the proper way to read. Keep a reference book or diagram-heavy chapter for a time when you can look at it; choose continuous prose for a session when the screen is put away. Our <Link href="/blog/can-you-learn-from-audiobooks" className="text-loudBlue hover:underline">guide to learning from audio</Link> covers that distinction for study material.</p>
      </QuestionSection>
      <QuestionSection question="What can LoudReader do in this routine?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> narrates supported DRM-free EPUBs and PDFs, with playback continuing when an iPhone or iPad is locked. It is an iPhone and iPad app; compatible Apple Silicon Macs can run the iPad build. Check your chosen device, file and voice before planning an offline session.</p>
        <p>{FREE_TIER.full} The sleep timer, adjustable speed from 0.3x to 3.0x and ambient soundscapes require Premium. They are optional controls, not features you must buy to put the screen away. Narration runs locally, while app diagnostics and analytics are separate.</p>
        <p>If you use a timer, remember that it stops playback after the chosen interval, not at the moment you fall asleep. You may still need to go back to the last passage you remember. A quieter voice or background sound is a preference to test, not a proven sleep or eye-health benefit.</p>
      </QuestionSection>
      <QuestionSection question="What if your eyes still feel uncomfortable?">
        <p>Do not assume that every symptom after screen use has the same cause. The <a href="https://www.nei.nih.gov/eye-health-information/healthy-vision/how-eyes-work/keep-your-eyes-healthy" className="text-loudBlue hover:underline">National Eye Institute recommends regular breaks from computer viewing</a>. Audio can help you choose an activity without a visible page, but it does not replace appropriate eye care.</p>
        <p>If discomfort keeps returning, <a href="https://www.nhs.uk/symptoms/dry-eyes/" className="text-loudBlue hover:underline">seek appropriate eye-care advice</a> rather than relying on a reading app to fix it. For screen-break planning and the distinction between listening and treatment, see <Link href="/blog/text-to-speech-for-eye-strain" className="text-loudBlue hover:underline">text to speech and eye strain</Link>.</p>
      </QuestionSection>
      <QuestionSection question="How do you keep this from becoming another productivity target?">
        <p>Decide what you want from the evening: a story, a quiet stretch without a screen, or simply rest. Finishing a chapter is optional. You can pause mid-page, skip a night or return to print when you prefer it.</p>
        <p>If both reading and listening feel like work, the relevant choice is not a faster app or a different voice. Put the book aside. The point of having an audio option is to give you a choice, not to turn every tired moment into another reading session.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Keep a screen-off reading option" subline="Set up a supported book, start playback and use your phone’s lock-screen controls." />
    </ArticleLayout>
  );
}

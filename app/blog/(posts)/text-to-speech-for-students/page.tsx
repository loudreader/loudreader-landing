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

export default function TextToSpeechForStudentsArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          A semester of reading is a marathon, not a sprint, and your eyes
          cannot run it alone. Text-to-speech turns the reading list into
          something you can consume while walking between classes, doing
          chores, or giving your eyes a break after a long screen day.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads any
          DRM-free EPUB or PDF aloud with natural offline voices while
          highlighting each word, so you can follow along or just listen. It
          is fully on-device and private, your library never leaves your
          device, which means it works in the library basement, on the bus
          with no signal, and anywhere else your phone goes. The free tier
          covers unlimited listening on every book with no word quota. Pick a
          textbook chapter, press play, and see if dual-channel reading keeps
          you locked in longer than eyes-only ever did.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Listening while following highlighted text: two channels are harder to drift from than one."
      />

      <QuestionSection question="Why do students burn out on reading?">
        <p>
          The volume is the problem. A full course load can assign hundreds of
          pages a week across textbooks, papers, and primary sources. Silent
          reading is slow, tiring, and demands a dedicated block of seated
          focus. After the third hour, comprehension drops and re-reading
          creeps in. The stack does not shrink, but your ability to process it
          does.
        </p>
        <p>
          Text-to-speech gives you a second way in. Instead of sitting down
          for every reading session, you can listen during the pockets of time
          that already exist in a student day: the walk to campus, the
          treadmill at the gym, the hour between classes when you would
          otherwise scroll your phone. The book moves at a steady pace, and
          your attention moves with it.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you combine listening and reading for better retention?">
        <p>
          Dual-channel reading (listening while following the highlighted
          text) is the sweet spot for dense material. Your eyes track the
          words as the voice speaks them, and the moving highlight gives you
          an instant anchor if your attention drifts. This is not just a
          comfort feature, a 2018 meta-analysis found moderate comprehension
          gains from text-to-speech read-aloud tools for students with reading
          disabilities, and the mechanic works for anyone who has ever zoned
          out three paragraphs into a textbook.
        </p>
        <p>
          In{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>
          , word-by-word highlighting is free on every book with no quota or
          time limit. Press play and follow the highlight. When your eyes get
          tired, lock the screen and keep listening. The two modes reinforce
          each other, and you can switch between them as your energy and
          environment dictate. For a deeper look at the mechanics behind this,
          see our guide on{" "}
          <Link
            href="/blog/read-and-listen-at-the-same-time"
            className="text-loudBlue hover:underline"
          >
            reading and listening at the same time
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What is the best way to handle textbook PDFs?">
        <p>
          Most textbook PDFs and journal articles work right away. Import the
          file into LoudReader, and the app reads the text aloud with natural
          offline voices. The key requirement: the PDF needs selectable text.
          Modern textbooks, course readers, and journal preprints are almost
          always text-based and work fine. Old scanned pages with no text
          layer will not.
        </p>
        <p>
          The workflow that saves the most time: import the week's readings on
          Sunday, listen to the lighter chapters during the week, and save the
          dense theory sections for a dual-channel session with the text open.
          Speed control from 0.3x to 3.0x (a Premium feature) lets you skim
          review material fast and slow down for new concepts. The full
          walkthrough is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Does listening work with ADHD or focus issues?">
        <p>
          It often does, for a mechanical reason rather than a medical one.
          Silent reading asks one attention channel to do everything. When
          that channel glitches, the page does not notice and your eyes keep
          sliding. A voice sets the pace externally: it does not stall, so you
          cannot silently re-read the same sentence four times without
          realizing it. The word-by-word highlighting gives you an instant way
          back after a drift, no backwards scan required.
        </p>
        <p>
          We covered this in detail in our guide to{" "}
          <Link
            href="/blog/text-to-speech-adhd"
            className="text-loudBlue hover:underline"
          >
            text to speech for ADHD
          </Link>
          . The short version: it is not a clinical claim, it is a practical
          test. One real chapter, dual-channel, and you will know whether the
          format works for your attention.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you make TTS part of a real study workflow?">
        <p>
          The habit that sticks: assign listening to specific parts of your
          day so it becomes automatic rather than a decision you have to make.
          The walk to campus gets one paper. The gym session gets a textbook
          chapter at 1.3x. The post-dinner wind-down gets the novel for your
          literature elective. The readings you were going to do anyway simply
          happen in a different format.
        </p>
        <p>
          For note-taking, LoudReader Premium includes highlights you can mark
          during playback and return to later. Many students keep a separate
          notes app open and pause the audio when they hit something worth
          capturing, using the lock-screen controls for quick
          pause-and-resume.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn your reading list into a listening list"
        subline="Import your textbooks, papers, and assigned books. Press play. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}

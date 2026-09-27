import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function LoudkitVoiceNotesForAgentsArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>Your agent, now with a voice.</strong> Loudkit for agents is
          a free, open-source developer preview for adding local speech to the
          agent you already use. The Loudkit Voice companion pairs Loudkit
          text-to-speech with Parakeet transcription on an Apple Silicon Mac.
          The aim is simple: send a voice note, let your agent use its existing
          memory and tools, and hear its reply in the same conversation.
          Local speech and Hermes/OpenClaw provider code have been tested;
          delivery through real messenger accounts still needs validation.
          There is no access request. You can read the source, hear the voices,
          and give your agent the setup guide today.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Speak a thought. Let your agent work. Hear the answer."
      />

      <QuestionSection question="Why give your everyday agent a voice?">
        <p>
          Some thoughts arrive before you can type them neatly. A question
          while you make coffee. An idea you want to say out loud. A long
          answer you would rather listen to. Voice notes make room for those
          moments without asking you to keep looking at a screen.
        </p>
        <p>
          We want talking to your agent to feel as easy as sending a message
          to a buddy. You keep the agent you chose, with the context and tools
          you have already given it. Loudkit supplies the speech layer. Your
          agent still decides how to answer and which actions need approval.
        </p>
        <p>
          This follows the idea behind <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>:
          make useful things easier to listen to. Our{" "}
          <Link href="/blog/introducing-loudkit" className="text-loudBlue hover:underline">
            Loudkit framework announcement
          </Link>{" "}
          covers the speech toolkit for developers. This companion puts it
          to work in conversations with an existing agent.
        </p>
      </QuestionSection>

      <QuestionSection question="What happens to a voice note?">
        <p>
          With a compatible connection configured, the companion transcribes
          incoming audio with Parakeet, passes the text to your agent, and
          turns its reply into speech with Loudkit. The messenger connection
          is responsible for returning that audio to the right conversation.
        </p>
        <p>
          Speech generation and transcription run on your Mac after the
          models are downloaded. Your agent&apos;s language model and the
          messenger may still use cloud services. Local speech does not make
          the whole conversation offline, or change those services&apos;
          privacy policies.
        </p>
        <p>
          For Hermes and OpenClaw, the preferred route is to configure their
          speech providers while keeping the existing bot, sessions, memory,
          tools and permissions. Other agents need a suitable CLI, API or
          active inbox integration. Compatibility depends on the actual
          interface your agent exposes.
        </p>
      </QuestionSection>

      <QuestionSection question="What can you try in this preview?">
        <p>
          Real audio has been generated and transcribed locally. We have also
          tested pinned Hermes and OpenClaw speech-provider code against the
          local service. Those checks establish that the speech pieces can
          talk to one another. They do not establish that a complete bot has
          received and answered a voice note through a live messenger account.
        </p>
        <p>
          The repository includes adapters for Telegram, Discord, WhatsApp
          Business Cloud API, Slack and BlueBubbles/iMessage. They have protocol
          tests; real account delivery remains to be checked. WhatsApp uses
          its Business API, not a personal-account QR login. See the{" "}
          <a
            href="https://github.com/loudreader/loudkit-voice#what-has-been-tested"
            className="text-loudBlue hover:underline"
          >
            published verification scope
          </a>{" "}
          before choosing a connection.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you get started with your agent?">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong className="text-gray-900">Listen first.</strong> The{" "}
            <a href="https://loudkit.loudreader.io/agents/" className="text-loudBlue hover:underline">
              Loudkit for agents page
            </a>{" "}
            has voice samples and a ready-to-copy setup prompt.
          </li>
          <li>
            <strong className="text-gray-900">Give your agent the guide.</strong>{" "}
            Share the{" "}
            <a href="https://loudkit.loudreader.io/agents/llms.txt" className="text-loudBlue hover:underline">
              agent setup instructions
            </a>{" "}
            and ask it to check your agent version, messenger and speech host.
            The current runtime needs an Apple Silicon Mac, Python
            3.12–3.13, uv, FFmpeg and at least 20 GB of free disk space.
            The initial model download is about 3 GB.
          </li>
          <li>
            <strong className="text-gray-900">Verify one small conversation.</strong>{" "}
            Start with a working text reply, then local speech. Finally, try
            a harmless voice note in your chosen chat and confirm that the
            reply arrives and plays. Treat that last step as part of setup.
          </li>
        </ol>
        <p>
          OpenClaw users can also install the{" "}
          <a href="https://clawhub.ai/pepinu/skills/loudkit-voice" className="text-loudBlue hover:underline">
            Loudkit Voice setup skill on ClawHub
          </a>{" "}
          (version 0.1.1). It helps the agent follow this process; installing
          instructions does not install or start the speech runtime.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <section className="rounded-2xl border border-loudBlue/25 bg-loudBlue/5 p-6 md:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">
          Give your agent a voice
        </h2>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-5">
          Hear the samples, inspect the code, and try the preview with your
          own agent. No Loudkit account or waiting list.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://loudkit.loudreader.io/agents/"
            className="inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
          >
            Meet Loudkit for agents
          </a>
          <a
            href="https://github.com/loudreader/loudkit-voice"
            className="text-sm font-medium text-loudBlue hover:underline"
          >
            Explore the open-source companion
          </a>
        </div>
      </section>
    </ArticleLayout>
  );
}

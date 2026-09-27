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
      <Tldr><p>For a train or bus commute, prepare the book before leaving, test it without a connection, and choose a section you can pause at transfers. Audio can be useful when holding a book is awkward, but you do not need to listen through every announcement or walk between stops. Keep the controls familiar and leave yourself a chapter heading or note for the return journey. This guide is mainly for passengers; driving requires its own attention and hands-free setup.</p></Tldr>
      <ArticleIllustration variant="offline" caption="Prepare the book before you board; pause for the journey around you." />
      <QuestionSection question="How much listening time do you actually have?"><p>Count the part of the journey where you can comfortably follow a book, not the entire door-to-door trip. A thirty-minute ride may include announcements, conversations and stops. Try one week before treating the commute as a fixed number of books per year.</p><p>If you commute thirty minutes each way on five days, the full travel time is five hours weekly. That is only an upper bound for listening in this example. It is fine to spend some of it resting or looking out of the window.</p></QuestionSection>
      <QuestionSection question="How do you prepare for tunnels and unreliable signal?"><ol className="list-decimal pl-6 space-y-2"><li>Download the recording, or import the ebook into your TTS app.</li><li>If the selected voice needs resources, let them download before leaving.</li><li>Open the actual title and try a brief offline playback check.</li><li>Make sure you know where the pause and rewind controls are.</li><li>Charge your phone and keep enough space for the downloads you intend to use.</li></ol><p>Offline playback is available in many audiobook workflows. The difference with local TTS is that speech can be generated from the stored text, rather than requiring a complete recorded audiobook file.</p></QuestionSection>
      <QuestionSection question="How can LoudReader read your own ebook on the journey?"><p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> imports supported DRM-free EPUBs and PDFs. LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. On iPhone, playback can continue with the screen locked, and standard media controls support pause and resume.</p><p>Check difficult PDFs before travelling: columns, tables and scanned pages can need more attention than ordinary prose. Once the book and required voice resources are available on the device, narration works offline. Downloads and web imports still need a connection.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <QuestionSection question="What happens at transfers or interruptions?"><p>Pause for announcements, navigation and crossings. Resume when you are settled. Do not assume that low volume or a particular headphone design eliminates distraction. If you missed a section, revisit it after boarding rather than trying to repair your place while moving through a crowd.</p><p>For a book with many similar names or technical references, keep a brief note of the chapter and main point. If you need to inspect a map or table, wait until you can look at it properly.</p></QuestionSection>
      <QuestionSection question="Can you switch between the page and audio?"><p>A TTS reader displays the same imported text it narrates, so it can be convenient to read seated and listen at another point. That does not imply cross-device position synchronisation. With separate audio and print editions, compare the chapter and translator before switching.</p><p>For longer travel, prepare extra books before departure and follow the transport operator’s instructions about devices. Our <Link href="/blog/text-to-speech-without-internet-iphone" className="text-loudBlue hover:underline">offline iPhone guide</Link> covers preparation in more detail.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Bring your own reading to the commute" subline="Import a compatible ebook and prepare its voice before leaving." />
    </ArticleLayout>
  );
}

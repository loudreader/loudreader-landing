import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
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
        <p>For a flight, the important question is whether your chosen book and voice work without a connection. A local speech engine can generate new audio offline; a cloud-based app may instead play audio you prepared and downloaded earlier. Both can be useful, but they need different preparation. LoudReader narrates imported books on the device. Before travelling, open the app, prepare the voice you want, import your books and test a fresh passage with Wi-Fi and cellular disconnected. Do this before boarding, not after the aircraft door closes. Offline playback says something about availability; it does not prove that an app never sends diagnostics when it reconnects.</p>
      </Tldr>
      <ArticleIllustration variant="offline" caption="Check the book, voice and headphones before boarding." />
      <QuestionSection question="What needs to be ready before I leave?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>The actual file.</strong> A book title in a cloud drive is not enough if its contents have not downloaded.</li>
          <li><strong>A working voice.</strong> Open the selected narrator and wait for any setup to finish. Do not assume a newly installed app has every resource ready.</li>
          <li><strong>An entitlement that works.</strong> If a narrator or control depends on Premium, check it before losing the connection.</li>
          <li><strong>Your audio route.</strong> Pair the headphones you plan to use and check their charge as well as the phone&apos;s.</li>
        </ul>
        <p>Keep an alternative book ready if one document has an awkward layout. A scan can contain recognition errors even when it imports successfully.</p>
      </QuestionSection>
      <QuestionSection question="How do I make a useful offline test?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Import the book and start narration while you still have internet access.</li>
          <li>Disconnect Wi-Fi and cellular. Airplane mode can leave or allow Wi-Fi enabled, so check the actual connection state.</li>
          <li>Jump to a passage you have not played. This helps distinguish fresh local generation from previously cached audio.</li>
          <li>Lock the phone, listen briefly and test pause/resume with your headphones.</li>
          <li>Reopen the book and make sure you can find your place.</li>
        </ol>
        <p>This is a readiness check for your setup, not a certification of every feature. For a phone-focused introduction, see <Link href="/blog/text-to-speech-without-internet-iphone" className="text-loudBlue hover:underline">offline text to speech on iPhone</Link>.</p>
      </QuestionSection>
      <QuestionSection question="What can LoudReader do during the flight?">
        <p>It can generate speech from ready, imported books without a speech server. Word highlighting and local progress do not require downloading a new book. The available narrator does not become a different model simply because you disconnected.</p>
        <p>{FREE_TIER.full} Premium features, such as adjustable speed and the sleep timer, remain subject to your purchase state and device support. Downloading books or articles, making purchases and restoring purchases are tasks to handle while connected.</p>
      </QuestionSection>
      <QuestionSection question="What about an app that normally uses cloud voices?">
        <p>Check whether it offers complete audio downloads or advance generation. If it does, confirm the entire chapter or book is available offline; hearing the first few seconds could mean only the opening is cached. A downloaded recording does not need a live speech service to play.</p>
        <p>Do not choose between local and cloud tools on the word “offline” alone. Ask whether you can change the text or voice while disconnected, how much audio you must prepare, and how much storage the download uses.</p>
      </QuestionSection>
      <QuestionSection question="What can still interrupt listening?">
        <p>A flat battery, disconnected headphones, an unreadable document or an audio interruption can stop playback even when the speech engine is local. We have not published a flight-length battery benchmark. Charge your devices, test a representative listening session and allow for other phone use.</p>
        <p>Follow the crew&apos;s instructions for devices and headphones. When connectivity returns, other app services may resume: LoudReader 1.12 includes crash diagnostics and usage analytics enabled by default. Our <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link> explains that separately from local narration. If you need to import a book for the first time, use the <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">file-import walkthrough</Link> before travelling.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Prepare your next listen" subline="Import a book and test the voice offline before your trip." />
    </ArticleLayout>
  );
}

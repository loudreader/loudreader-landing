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

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>Choose and test your audio while safely parked, then put the phone away before driving. Use an audiobook recording or a TTS reader for a compatible ebook, and pause whenever the story competes with attention to the road. LoudReader can generate narration on an iPhone and play through its connected audio output with the screen locked. It has no dedicated CarPlay interface. Bluetooth controls depend on the vehicle and connection, so test them first. Offline playback is useful on a route with poor signal, but neither hands-free controls nor a familiar road makes listening free of distraction.</p>
      </Tldr>

      <ArticleIllustration variant="drive" caption="Choose the book and test the controls while safely parked." />

      <QuestionSection question="Should I use a recording or text-to-speech?">
        <p>A recording is convenient when you already have the audiobook in your usual player. TTS is another route when you have an accessible ebook, including one without a recording you want to use. Pick the option whose playback and controls you understand before the journey.</p><p>For LoudReader, use a DRM-free EPUB or PDF and inspect its first pages at home. A complex layout or mispronounced name is something to resolve before driving, not a reason to open the reader in traffic. The <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import guide</Link> covers this step.</p>
      </QuestionSection>

      <QuestionSection question="What should I check while safely parked?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the book and set a comfortable voice, pace and volume. Choose material you can leave unfinished if the road needs your attention.</li>
          <li>Connect the iPhone to the car audio and verify which output is active. Test a short passage.</li>
          <li>Test pause on the vehicle’s supported media control. Standard Bluetooth commands can work, but exact buttons and skip behaviour vary.</li>
          <li>Lock the phone and put it away. Check that narration continues before setting off.</li>
          <li>If playback needs troubleshooting during the trip, leave it paused until you are safely parked again.</li>
        </ol><p>LoudReader supports background audio and system media controls. Those do not amount to a dedicated CarPlay app or a promise that every car displays the same controls.</p>
      </QuestionSection>

      <QuestionSection question="How do I prepare for a route with no signal?">
        <p>Install and open the app, import the book and load the voice before travelling. While still parked, disable your connection briefly and test the exact book and voice you intend to use. Local synthesis means an existing, ready-to-use book does not need a speech stream from a server.</p><p>Downloads, purchases and other services may need a connection. “Offline narration” does not mean the entire application never uses the network. Keep enough battery for the journey and any other phone functions you need.</p>
      </QuestionSection>

      <QuestionSection question="Can I use the lock screen while driving?">
        <p>Keep the phone out of your hands. In the UK, <a href="https://www.gov.uk/using-mobile-phones-when-driving-the-law" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK guidance</a> says holding and using a phone while driving is illegal, including at traffic lights and in queues. A locked screen or offline mode does not create an exemption. Hands-free use also does not remove the duty to stay in control.</p><p>Rules vary by country and region, so check the official guidance where you drive. For this setup, make phone changes only when safely parked. If even a supported car control would distract you, leave it alone and stop listening when you can do so safely.</p>
      </QuestionSection>

      <QuestionSection question="What if the book needs too much attention?">
        <p>Pause it. Complex junctions, poor conditions, navigation decisions or a demanding story are reasons to prioritise the road. Do not increase speed or choose denser material just because a route is familiar. Missing a passage is inconsequential compared with missing something on the road.</p><p>For listening without the driving task, consider <Link href="/blog/listen-to-books-while-walking" className="text-loudBlue hover:underline">a suitable walk</Link> or a quiet break. <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> saves a playback position so the book can wait until a better moment.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}

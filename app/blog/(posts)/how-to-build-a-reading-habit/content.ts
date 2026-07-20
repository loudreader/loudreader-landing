// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - Habit-building advice: based on well-established behavioral psychology
//     principles (habit stacking from James Clear's Atomic Habits, the idea that
//     attaching a new habit to an existing routine increases adherence; small
//     starts / the "two-minute rule" from the same body of work). These are
//     generic, widely known concepts, framed practically, not as citations.
//   - LoudReader features: free unlimited listening, no account, imports EPUB/PDF,
//     70,000+ Gutenberg books, natural offline voices, fully on-device (site.ts).
//   - No fabricated study claims, testimonials, or statistics.
// Claims you may NOT make: that listening creates reading habits for everyone,
// specific adherence rates, named book claims unless verified.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why is listening easier to start than reading?",
    a: "Reading demands a specific setup: a quiet place, decent light, and uninterrupted focus time. Listening only needs your ears. You can start a book while brushing your teeth, walking to the car, or waiting for coffee to brew. The barrier is lower because it does not ask you to stop everything else you are doing. That lower barrier is the whole trick to building a habit: make starting so easy you cannot talk yourself out of it.",
  },
  {
    q: "How do I stack listening onto my existing routines?",
    a: "Attach it to something you already do every day. Commuting: book on as soon as you pull out of the driveway. Chores: book instead of podcast while folding laundry. Walk: book on the daily dog walk. The habit forms around the existing activity, not the other way around. You do not need to find new time, you just fill time you already have with a book instead of whatever was there before.",
  },
  {
    q: "How long does it take to build a reading habit?",
    a: "There is no magic number of days, and anyone who gives you one is guessing. What matters is consistency, not duration. Ten minutes a day, every day, beats two hours on Sunday that never happen. Start with one chapter. Or ten minutes. Something so small it feels silly to skip. The habit forms around the repetition, not the volume.",
  },
  {
    q: "What if I keep falling off after a few days?",
    a: "The habit is probably too big. Shrink it until it is too easy to skip. Five minutes. One page. If that still falls apart, the problem is not willpower, it is that you have not found the right anchor routine. Try attaching listening to something you literally cannot skip: brushing your teeth, making coffee, walking from the parking lot to your desk. The anchor carries the habit until it sticks on its own.",
  },
  {
    q: "Does listening to a book count as reading for a reading habit?",
    a: "For the purpose of building the habit, absolutely. The goal is getting book-length content into your head regularly. Whether it enters through your eyes or your ears is a detail. Once the habit is solid, you can layer in print reading for the books that benefit from it. But for getting the ball rolling, listening removes the friction and that is worth more than any format debate.",
  },
  {
    q: "Can LoudReader help me build a reading habit?",
    a: "LoudReader is built around lowering the starting friction. No account to create. Import any DRM-free EPUB or PDF, or pick from 70,000+ free Project Gutenberg classics, and press play. Natural offline voices mean it works anywhere, no internet needed. It is fully on-device and private, your library never leaves your device. And the free tier gives you unlimited listening, so there is no word quota counting down while you build the habit.",
  },
];
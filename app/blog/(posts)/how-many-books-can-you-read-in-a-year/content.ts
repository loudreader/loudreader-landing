// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - All calculations are labeled as rough math/estimates, not promises.
//     Average audiobook length of ~9 hours is a commonly cited industry figure
//     (most novels run 8 to 12 hours at 1x). Commute math is simple arithmetic:
//     30 min each way x 5 days x 52 weeks = 260 hours. At 1x and 9-hour average,
//     260/9 = ~29 books. At 1.5x effective rate, effective hours = 260 * 1.5 = 390;
//     390/9 = ~43 books. These are illustrative, not guaranteed outcomes.
//   - No fabricated testimonials, statistics, or promises.
//   - LoudReader speed range: 0.3x to 3.0x (Premium feature, site.ts PRICING).
//     Free tier plays at normal speed.
// Claims you may NOT make: that any specific number of books is achievable,
// that listening is equivalent to reading for all purposes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How many books can the average person read in a year?",
    a: "There is no single number, but the math gives you a range. If you commute 30 minutes each way, five days a week, that is 5 hours of listening per week, or about 260 hours per year. At 1x speed with an average audiobook running about 9 hours, that is roughly 29 books per year. At 1.5x speed, your effective time becomes about 390 hours, or roughly 43 books. Add in chores, walks, and gym sessions and the number climbs further. These are rough estimates, not guarantees.",
  },
  {
    q: "Does listening speed really add that many books?",
    a: "It adds up. Going from 1x to 1.5x effectively gives you 50 percent more reading time from the same minutes. That turns a 9-hour book into a 6-hour listen. Over a year of commuting, that difference alone is 10 to 15 extra books. The trade-off is comprehension, covered in our guide to playback speed and comprehension, but for light fiction and familiar non-fiction, 1.5x is a free upgrade.",
  },
  {
    q: "What counts as reading time?",
    a: "Driving to work. Folding laundry. Walking the dog. Cooking dinner. Exercise. Any chunk of time where your body is busy but your mind is free. Most people have at least an hour of this kind of time per day that they currently fill with music or podcasts. Stacking books into those slots instead is how the numbers climb without finding extra hours in the day.",
  },
  {
    q: "How long is an average book in listening hours?",
    a: "Most novels run about 8 to 12 hours at 1x speed. Shorter non-fiction books land around 5 to 7 hours. Epic fantasy doorstops can hit 30 to 40 hours. These are rough ranges, but they give you a useful mental model: a typical book is about one week of commuting at 1x, or 3 to 4 days at 1.5x.",
  },
  {
    q: "Is it realistic to listen to a book a week?",
    a: "Math-wise, yes. A book a week at an average of 9 hours means you need about 9 hours of listening per week. A 30-minute-each-way commute already gives you 5 hours. Add one hour of chores or walking per day on weekends and you are there. The harder part is finding books that keep your attention and making the habit stick, which is why we wrote a separate guide on building a reading habit.",
  },
  {
    q: "Do these numbers apply to dense non-fiction too?",
    a: "Less so. Dense non-fiction often needs slower speeds for comprehension, and some passages you will want to reread or take notes on. A 9-hour dense history book might effectively take 12 hours of real time because you slow down, pause, and go back. For light fiction and narrative non-fiction, the math holds up. For heavy material, give yourself more time.",
  },
];
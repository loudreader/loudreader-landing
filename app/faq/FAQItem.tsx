"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Interactive accordion leaf. The answer is ALWAYS in the DOM (collapsed via
// height animation, `initial={false}`) so search engines and AI crawlers that
// don't execute JavaScript still see the full Q&A in the server-rendered HTML.
export default function FAQItem({
  q,
  a,
  id,
}: {
  q: string;
  a: string;
  /** Anchor target, so /faq#<slug> lands on this question. */
  id?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div id={id} className="border-b border-gray-100 last:border-0 scroll-mt-24">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-medium text-gray-900 pr-4 group-hover:text-loudBlue transition-colors">
          {q}
        </span>
        <span
          className={`text-gray-400 text-xl shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="text-gray-500 leading-relaxed pb-5 pr-8">{a}</p>
      </motion.div>
    </div>
  );
}

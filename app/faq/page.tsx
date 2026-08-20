import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faqAnchor, faqs } from "./faq-data";
import FAQItem from "./FAQItem";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about LoudReader: importing EPUB and PDF books, on-device text-to-speech, offline listening, voices, Premium pricing, and privacy.",
  alternates: { canonical: "/faq" },
};

// FAQPage structured data, generated from the same data that renders the page.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((category) =>
    category.questions.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="text-center py-16 md:py-24 px-6 w-full bg-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="LoudReader Logo"
              width={64}
              height={64}
              className="mx-auto mb-6 hover:scale-105 transition-transform"
            />
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know about LoudReader.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full py-12 md:py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="text-sm font-semibold text-loudBlue uppercase tracking-widest mb-4">
                {category.category}
              </h2>
              <div className="bg-gray-50/50 rounded-2xl px-6">
                {category.questions.map((faq) => (
                  <FAQItem key={faq.q} id={faqAnchor(faq.q)} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions? */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-lg">
            Still have questions?{" "}
            <a
              href="mailto:jeremi@loudreader.io"
              className="text-loudBlue hover:underline font-medium"
            >
              Get in touch
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo2.png" alt="LoudReader" width={32} height={32} className="opacity-80" />
            <span className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} LoudReader
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/releases" className="hover:text-gray-900 transition-colors">Release Notes</Link>
            <Link href="/support" className="hover:text-gray-900 transition-colors">Support</Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

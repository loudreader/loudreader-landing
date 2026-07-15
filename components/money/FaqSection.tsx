export type Faq = {
  q: string;
  /** Plain text only. This string is emitted verbatim into FAQPage JSON-LD. */
  a: string;
};

/**
 * FAQ section (server component).
 * Renders visible Q&As AND emits FAQPage JSON-LD from the SAME data, so the
 * markup can never drift from the structured data.
 * Answers must be plain-text strings (no JSX) for exactly that reason.
 */
export default function FaqSection({
  title = "Frequently asked questions",
  faqs,
}: {
  title?: string;
  faqs: Faq[];
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-6">
        {title}
      </h2>
      <div className="bg-gray-50/50 rounded-2xl px-6 divide-y divide-gray-200/70">
        {faqs.map((faq) => (
          <div key={faq.q} className="py-5">
            <h3 className="text-[17px] font-semibold text-gray-900 mb-2">
              {faq.q}
            </h3>
            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

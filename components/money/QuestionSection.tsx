/**
 * A question-form H2 section (server component).
 * `question` should be phrased as a real question a searcher would ask, since
 * question-form H2s are quotable by AI answer engines.
 */
export default function QuestionSection({
  question,
  id,
  children,
}: {
  question: string;
  /** Optional anchor id; defaults to a slug of the question. */
  id?: string;
  children: React.ReactNode;
}) {
  const anchor =
    id ??
    question
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  return (
    <section id={anchor}>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
        {question}
      </h2>
      <div className="text-gray-600 text-[17px] leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

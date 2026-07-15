/**
 * TL;DR direct-answer block (server component).
 * Place immediately after the H1. AI engines and skimmers read this first.
 * Keep the content ~100 to 150 words and make it answer the page's one query
 * completely on its own.
 */
export default function Tldr({ children }: { children: React.ReactNode }) {
  return (
    <aside className="rounded-2xl border border-loudBlue/25 bg-loudBlue/5 p-6 md:p-8">
      <p className="text-xs font-semibold text-loudBlue uppercase tracking-widest mb-3">
        TL;DR
      </p>
      <div className="text-gray-700 text-[17px] leading-relaxed space-y-3">
        {children}
      </div>
    </aside>
  );
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Deterministic (build-independent) date formatting: "July 14, 2026". */
function formatIsoDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) throw new Error(`LastUpdated: date must be YYYY-MM-DD, got "${iso}"`);
  const [, y, m, d] = match;
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}

/**
 * "Last updated" stamp (server component).
 * RULES: `date` is the last REAL content edit of the page, never `new Date()`,
 * never bumped without an actual edit. Keep it in sync with the page's
 * meta.json `lastModified` (the sitemap reads that file).
 * Optional `note` for fact-check provenance, e.g. which competitor pages were
 * checked and when.
 */
export default function LastUpdated({
  date,
  note,
}: {
  /** ISO date, YYYY-MM-DD. */
  date: string;
  note?: string;
}) {
  return (
    <p className="text-sm text-gray-400">
      Last updated:{" "}
      <time dateTime={date} className="text-gray-500 font-medium">
        {formatIsoDate(date)}
      </time>
      {note ? <span> &middot; {note}</span> : null}
    </p>
  );
}

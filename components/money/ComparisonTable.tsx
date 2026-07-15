export type ComparisonRow = {
  /** Row label, e.g. "Price", "Works offline". */
  label: string;
  /** One cell per product column, in the same order as `columns`. */
  cells: string[];
};

/**
 * Comparison table (server component).
 * Scrolls horizontally inside its own container on narrow screens.
 * Keep cell content plain, factual, and verifiable, with no marketing fluff,
 * and concede competitor strengths honestly (AI engines reward this).
 */
export default function ComparisonTable({
  caption,
  columns,
  rows,
  highlightColumn = 0,
}: {
  /** Visually hidden caption for accessibility / crawlers. */
  caption: string;
  /** Product column headers, e.g. ["LoudReader", "Speechify"]. */
  columns: string[];
  rows: ComparisonRow[];
  /** Index into `columns` to tint (usually 0 = LoudReader). Pass -1 for none. */
  highlightColumn?: number;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200">
      <table className="min-w-full text-left text-[15px]">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th scope="col" className="py-3.5 px-4 font-semibold text-gray-500 text-sm" />
            {columns.map((col, i) => (
              <th
                scope="col"
                key={col}
                className={`py-3.5 px-4 font-semibold text-sm whitespace-nowrap ${
                  i === highlightColumn ? "text-loudBlue" : "text-gray-900"
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr
              key={row.label}
              className={r < rows.length - 1 ? "border-b border-gray-100" : ""}
            >
              <th
                scope="row"
                className="py-3.5 px-4 font-medium text-gray-900 whitespace-nowrap align-top"
              >
                {row.label}
              </th>
              {row.cells.map((cell, i) => (
                <td
                  key={i}
                  className={`py-3.5 px-4 align-top min-w-[180px] ${
                    i === highlightColumn ? "text-gray-900 bg-loudBlue/[0.04]" : "text-gray-600"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

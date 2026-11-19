/**
 * A sourced comparison table inside an article section.
 *
 * Plain HTML table so search engines and screen readers get real rows and
 * headers. On a phone it scrolls inside its own frame rather than pushing the
 * page sideways.
 */
export interface ArticleTable {
  caption: string;
  columns: string[];
  /** First cell of each row is the row header. */
  rows: string[][];
  note?: string;
}

export default function DataTable({ table }: { table: ArticleTable }) {
  return (
    <figure className="mt-8">
      <div className="overflow-x-auto rounded-lg border border-[var(--bpg-border)]">
        <table className="w-full min-w-[40rem] border-collapse text-left text-[0.92rem] leading-snug">
          <caption className="caption-top px-4 pt-4 pb-3 text-left text-[0.9rem] font-semibold text-[var(--bpg-ink)]">
            {table.caption}
          </caption>
          <thead>
            <tr className="border-y border-[var(--bpg-border)] bg-[var(--bpg-sand)]">
              {table.columns.map((c) => (
                <th key={c} scope="col" className="px-4 py-2.5 font-semibold text-[var(--bpg-ink)]">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r) => (
              <tr key={r[0]} className="border-b border-[var(--bpg-border)] last:border-b-0 align-top">
                {r.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="px-4 py-3 font-semibold text-[var(--bpg-ink)]">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className="px-4 py-3 text-[#26384A]">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <figcaption className="mt-3 text-[0.85rem] leading-relaxed text-[var(--bpg-muted)]">{table.note}</figcaption>}
    </figure>
  );
}

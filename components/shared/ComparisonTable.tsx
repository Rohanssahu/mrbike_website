interface ComparisonTableProps {
  caption?: string;
  columns: string[];
  rows: Array<{ label: string; values: string[] }>;
}

/**
 * A scannable comparison table — the single most reliably extractable
 * format across AI answer engines (Phase 4 §14). Used for anything with a
 * natural side-by-side shape: service tiers, brand service intervals,
 * oil-type comparisons, etc.
 */
export function ComparisonTable({ caption, columns, rows }: ComparisonTableProps) {
  return (
    <div className="border-border overflow-x-auto rounded-xl border">
      <table className="w-full min-w-[480px] border-collapse text-sm">
        {caption && <caption className="text-muted-foreground p-3 text-left text-xs">{caption}</caption>}
        <thead>
          <tr className="border-border bg-muted/40 border-b text-left">
            <th className="p-3 font-semibold" scope="col" />
            {columns.map((column) => (
              <th key={column} className="text-foreground p-3 font-semibold" scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-border not-last:border-b">
              <th className="text-foreground p-3 text-left font-medium" scope="row">
                {row.label}
              </th>
              {row.values.map((value, index) => (
                <td key={`${row.label}-${columns[index]}`} className="text-muted-foreground p-3">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

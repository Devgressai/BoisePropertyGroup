import Link from "next/link";
import { INLINE_LINK } from "./inline-syntax";

/** Renders a body string, turning [label](/path) into an internal link. */
export default function Inline({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    out.push(
      <Link
        key={`${i}-${m[2]}`}
        href={m[2]}
        className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-accent)] decoration-2 underline-offset-4 hover:decoration-[var(--bpg-ink)]"
      >
        {m[1]}
      </Link>,
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

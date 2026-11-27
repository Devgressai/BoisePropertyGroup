"""Place a wave-8 additions.json into its page: python3 scripts/research/apply-additions.py <folder>"""
import json, sys
J = lambda x: json.dumps(x, ensure_ascii=False)
d = f"research/funnel-2026-11/{sys.argv[1]}"
a = json.load(open(f"{d}/additions.json"))
p = f"src/data/{a['file']}"
s = open(p).read()
key = f'  {J(a["page"])}: {{\n' if a["file"] == "guide-content.ts" else f'slug: {J(a["page"])},'
start = s.index(key)
nxt = min([x for x in (s.find('\n  "', start + 10), s.find('\n  {\n    slug: "', start + 10)) if x > 0] or [len(s)])
def render(sec):
    b = "".join(f"          {J(x)},\n" for x in sec["body"])
    c = f'        claims: [{", ".join(J(x) for x in sec.get("claims") or [])}],\n' if sec.get("claims") else ""
    return f"      {{\n        heading: {J(sec['heading'])},\n        body: [\n{b}        ],\n{c}      }},\n"
chain = {}
for sec in a["sections"]:
    after = chain.get(sec["insertAfter"], sec["insertAfter"])
    blk = s[start:nxt]
    if after:
        h = blk.index(f"heading: {J(after)},")
        at = start + blk.index("\n      },\n", h) + len("\n      },\n")
    else:
        heads = [i for i in range(len(blk)) if blk.startswith("heading: ", i)]
        closer = [i for i in heads if any(k in blk[i:i+120] for k in ("Where we fit", "with us", "Selling occupied, in practice"))]
        h = closer[-1] if closer else None
        at = start + blk.rindex("      {\n", 0, h) if h is not None else start + blk.rindex("\n    ],\n") + 1
    r = render(sec); s = s[:at] + r + s[at:]; nxt += len(r)
    chain[sec["insertAfter"]] = sec["heading"]
open(p, "w").write(s)
print(f"{a['page']}: +{len(a['sections'])} sections")

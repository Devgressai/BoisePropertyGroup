/**
 * Minimal TypeScript data-module loader.
 *
 * Sierra's src/data/*.ts files are pure data, but two of them GENERATE their
 * arrays from topic definitions and helper functions, so scraping them with a
 * regex would under-report the real route set. Instead we strip the type
 * annotations and execute the module.
 *
 * Sierra is READ-ONLY. Nothing here writes, and no file outside src/data is
 * ever opened.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const cache = new Map();

/** Remove `interface X { ... }` blocks by tracking brace depth. */
function removeInterfaceBlocks(src) {
  const re = /^[ \t]*(?:export\s+)?interface\s+\w+[^{]*\{/gm;
  let out = src;
  for (;;) {
    re.lastIndex = 0;
    const m = re.exec(out);
    if (!m) break;
    let i = m.index + m[0].length;
    let depth = 1;
    while (i < out.length && depth > 0) {
      const c = out[i];
      if (c === "{") depth++;
      else if (c === "}") depth--;
      i++;
    }
    out = out.slice(0, m.index) + out.slice(i);
  }
  return out;
}

export function stripTypes(src) {
  let s = src;
  s = s.replace(/^[ \t]*import\s+type\s+[^;]+;[ \t]*$/gm, "");
  s = s.replace(/^[ \t]*import\s+[^;]+;[ \t]*$/gm, "");
  s = removeInterfaceBlocks(s);
  // Type aliases, incl. multi-line unions ending in `;`
  s = s.replace(/^[ \t]*(?:export\s+)?type\s+\w+(?:<[^=]*>)?\s*=[\s\S]*?;[ \t]*$/gm, "");
  // `const x: Foo[] = ` / `const x: Record<string, Bar> = `
  // `const X: { a: string; b: T[] }[] = ` — the type may contain ; and braces,
  // so allow balanced brace groups but stop at the `= ` that starts the value.
  s = s.replace(/\b(const|let|var)\s+([A-Za-z_$][\w$]*)\s*:\s*(?:\{[^{}]*\}|[^={};])+=\s/g, "$1 $2 = ");
  // Declaration with a type but no initializer: `let best: Situation | undefined;`
  s = s.replace(/\b(const|let|var)\s+([A-Za-z_$][\w$]*)\s*:\s*(?:\{[^{}]*\}|[^={};])+;/g, "$1 $2;");
  // Arrow / function param annotations: (place: string) =>
  s = s.replace(/\(\s*([A-Za-z_$][\w$]*)\s*:\s*[^),]+\)\s*=>/g, "($1) =>");
  s = s.replace(/\(\s*([A-Za-z_$][\w$]*)\s*:\s*[^),]+,\s*([A-Za-z_$][\w$]*)\s*:\s*[^),]+\)\s*=>/g, "($1, $2) =>");
  // function foo(a: T, b: U): R {
  s = s.replace(/function\s+([A-Za-z_$][\w$]*)\s*\(([^)]*)\)\s*:\s*[^\n]*\{/g, (_m, name, params) => {
    const p = params.split(",").map((x) => x.split(":")[0].trim()).filter(Boolean).join(", ");
    return `function ${name}(${p}) {`;
  });
  // Generic type arguments on constructors: new Map<string, SeoPage>( -> new Map(
  s = s.replace(/(\bnew\s+[A-Za-z_$][\w$.]*)\s*<[^;()<>]*(?:<[^<>]*>[^;()<>]*)?>\s*\(/g, "$1(");
  // Return-type annotations, including ones containing braces:
  //   ): { href: string; label: string }[] {   ->   ) {
  // Greedy to the LAST brace on the line, which is always the body opener.
  s = s.replace(/\)\s*:\s*[^\n]*\{[ \t]*$/gm, ") {");
  // Non-null assertions: bySlug.get(s)! -> bySlug.get(s)
  // Lookahead excludes '=' so !== and != are untouched.
  s = s.replace(/([\w$)\]])!(?=\s*(?:[;,)\].\n]|[-+*/%](?!=)))/g, "$1");
  // Type assertions: `... as SeoPage[]` / `as Map<string, X>`
  s = s.replace(/\s+as\s+[A-Za-z_$][\w$.]*(?:<[^<>]*>)?(?:\[\])*(?=\s*[;,)\]\n])/g, "");
  s = s.replace(/\s+as\s+const\b/g, "");
  s = s.replace(/\s+satisfies\s+[A-Za-z_$][\w$.<>\[\]| ]*/g, "");
  s = s.replace(/^[ \t]*export\s+/gm, "");
  return s;
}

/** Parse `import { a, b as c } from "./x";` — value imports only. */
function parseImports(src) {
  const out = [];
  const re = /^[ \t]*import\s+\{([^}]+)\}\s+from\s+["']([^"']+)["'];/gm;
  let m;
  while ((m = re.exec(src))) {
    if (/^\s*import\s+type/.test(m[0])) continue;
    const names = m[1]
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x && !x.startsWith("type "))
      .map((x) => {
        const [orig, alias] = x.split(/\s+as\s+/).map((y) => y.trim());
        return { orig, alias: alias || orig };
      });
    out.push({ names, from: m[2] });
  }
  return out;
}

export function loadTsModule(absPath) {
  const key = resolve(absPath);
  if (cache.has(key)) return cache.get(key);
  cache.set(key, {}); // cycle guard

  const raw = readFileSync(key, "utf8");
  const imports = parseImports(raw);

  const injected = {};
  for (const imp of imports) {
    let spec = imp.from;
    let depPath;
    if (spec.startsWith("@/")) {
      // Resolve the "@/..." path alias against the owning src/ root.
      const srcRoot = key.slice(0, key.indexOf("/src/") + 5);
      if (!srcRoot || !key.includes("/src/")) continue;
      depPath = resolve(srcRoot, spec.slice(2));
    } else if (spec.startsWith(".")) {
      depPath = resolve(dirname(key), spec);
    } else {
      continue; // bare package specifier — not data
    }
    if (!depPath.endsWith(".ts")) {
      const asFile = depPath + ".ts";
      const asIndex = depPath + "/index.ts";
      depPath = existsSync(asFile) ? asFile : existsSync(asIndex) ? asIndex : asFile;
    }
    let dep;
    try {
      dep = loadTsModule(depPath);
    } catch {
      continue;
    }
    for (const n of imp.names) injected[n.alias] = dep[n.orig];
  }

  const body = stripTypes(raw);
  const injectedNames = Object.keys(injected);
  const src = `
    ${injectedNames.map((n) => `const ${n} = __inj[${JSON.stringify(n)}];`).join("\n")}
    ${body}
    return (typeof __collect === "function") ? __collect() : (() => {
      const out = {};
      ${extractTopLevelNames(body)
        .map((n) => `try { out[${JSON.stringify(n)}] = ${n}; } catch {}`)
        .join("\n")}
      return out;
    })();
  `;
  let exports;
  try {
    exports = new Function("__inj", src)(injected);
  } catch (err) {
    throw new Error(`load failed for ${key}: ${err.message}`);
  }
  cache.set(key, exports);
  return exports;
}

function extractTopLevelNames(body) {
  const names = new Set();
  const re = /^(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)/gm;
  let m;
  while ((m = re.exec(body))) names.add(m[1]);
  return [...names];
}

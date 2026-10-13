// Static QA: node scripts/qa-check.mjs  (no dependencies)
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
const files = [];
const walk = (d) => { for (const n of readdirSync(d)) { const p = join(d, n); statSync(p).isDirectory() ? walk(p) : /\.(jsx?|mjs)$/.test(n) && files.push(p); } };
["app", "components", "lib"].forEach(walk);
const src = Object.fromEntries(files.map((f) => [f, readFileSync(f, "utf8")]));
const fails = [];
const check = (ok, msg) => { console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`); if (!ok) fails.push(msg); };

const aff = src["lib/affiliate-links.js"];
const urls = aff.match(/"https:\/\/www\.pazomaracing\.com[^"]*"/g) || [];
check(urls.length === 10, `10 supplied affiliate URLs present (found ${urls.length})`);
check(urls.every((u) => (u.match(/ref=BUITHANH/g) || []).length === 1), "every supplied URL has exactly one ref=BUITHANH");
const leaks = files.filter((f) => f !== "lib/affiliate-links.js" && /https:\/\/www\.pazomaracing\.com\/(collections|\?ref)/.test(src[f]));
check(!leaks.length, `affiliate URLs live only in lib/affiliate-links.js ${leaks.join(",")}`);
const cta = src["components/AffiliateCTA.jsx"];
check(/target="_blank"/.test(cta) && /rel="noopener noreferrer"/.test(cta), "AffiliateCTA enforces target=_blank + rel=noopener noreferrer");
const nav = files.filter((f) => /router\.(push|replace)|window\.location|window\.open/.test(src[f]));
check(!nav.length, `no JS navigation for external links ${nav.join(",")}`);
const bad = [];
for (const f of files) for (const m of src[f].match(/<a\s[^>]*>/g) || []) {
  if (/href="https?:/.test(m) && !(/target="_blank"/.test(m) && /rel="noopener noreferrer"/.test(m))) bad.push(f);
  if (/href="#"/.test(m)) bad.push(f + " (href=#)");
}
check(!bad.length, `every literal external <a> has both new-tab attributes, no href="#" ${bad.join(",")}`);
check(!files.some((f) => /LetBricks|VERIFIED_SOURCE|VERIFIED_OR_|example\.com/i.test(src[f])), "no foreign-project names or placeholder strings");
const pages = src["app/page.jsx"];
check((pages.match(/<AffiliateCTA/g) || []).length >= 4, "page uses AffiliateCTA for all CTAs");
check(!/<a\s[^>]*pazomaracing\.com/.test(pages), "no hardcoded merchant anchors in page");
console.log(fails.length ? `\n${fails.length} FAILED` : "\nALL STATIC CHECKS PASSED");
process.exit(fails.length ? 1 : 0);

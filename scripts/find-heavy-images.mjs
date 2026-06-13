import fs from 'fs';
import path from 'path';

const files = [];
function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else files.push(p);
  }
}
walk('src');
const code = files
  .filter((f) => /\.(jsx?|json)$/.test(f))
  .map((f) => fs.readFileSync(f, 'utf8'))
  .join('\n');
const html = fs.readFileSync('index.html', 'utf8');
const haystack = code + '\n' + html;

const pub = [];
function walkPub(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walkPub(p);
    else pub.push({ p, size: s.size });
  }
}
walkPub('public');

const results = [];
for (const { p, size } of pub) {
  if (!/\.(png|jpe?g)$/i.test(p)) continue;
  if (size < 150000) continue;
  const rel = '/' + path.relative('public', p).split(path.sep).join('/');
  const enc = encodeURI(rel);
  const base = path.basename(p);
  const used =
    haystack.includes(rel) ||
    haystack.includes(enc) ||
    haystack.includes(base) ||
    haystack.includes(encodeURIComponent(base));
  if (used) results.push({ rel, kb: Math.round(size / 1024) });
}
results.sort((a, b) => b.kb - a.kb);
for (const r of results) console.log(String(r.kb).padStart(5) + 'KB  ' + r.rel);
console.log('\nTotal:', results.length, 'imágenes');

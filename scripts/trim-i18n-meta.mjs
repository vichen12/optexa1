/* Acorta metaTitle (≤60) y metaDesc (≤158) en los 3 locales y en
   articulosData.js, recortando en límite de palabra. El chino se omite
   para metaDesc (50 chars CJK ≈ 150 latinos; no se trunca en Google). */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function trim(str, max, isCJK) {
  if (str.length <= max) return str;
  let cut = str.slice(0, max);
  if (!isCJK) {
    const sp = cut.lastIndexOf(' ');
    if (sp > max * 0.6) cut = cut.slice(0, sp);
  }
  return cut.replace(/[\s,;:.\-–—|·]+$/, '');
}

// Normaliza sufijo de título largo y trunca
function fixTitle(t) {
  let nt = t.replace(/ \| STOKA Argentina$/, ' | STOKA');
  if (nt.length > 60) nt = trim(nt, 60, /[一-鿿]/.test(nt));
  return nt;
}

// Recorre recursivamente un objeto y acorta cualquier metaTitle/metaDesc
function walk(obj, lang) {
  let n = 0;
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (v && typeof v === 'object') {
      n += walk(v, lang);
    } else if (typeof v === 'string') {
      if (k === 'metaTitle' && v.length > 60) {
        const nv = fixTitle(v);
        if (nv !== v) { obj[k] = nv; n++; }
      }
      if (k === 'metaDesc' && lang !== 'zh' && v.length > 158) {
        const nv = trim(v, 158, false);
        if (nv !== v) { obj[k] = nv; n++; }
      }
    }
  }
  return n;
}

// 1) Locales i18n
for (const lang of ['es', 'en', 'zh']) {
  const file = join('src/i18n/locales', `${lang}.json`);
  const json = JSON.parse(readFileSync(file, 'utf8'));
  const n = walk(json, lang);
  writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`✓ ${lang}.json — ${n} metas acortadas`);
}

// 2) articulosData.js (metaTitle/metaDesc en español, dentro de strings JS)
const af = 'src/data/articulosData.js';
let asrc = readFileSync(af, 'utf8');
const { ARTICULOS } = await import('../src/data/articulosData.js');
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
let an = 0;
for (const a of ARTICULOS) {
  if (a.metaTitle && a.metaTitle.length > 60) {
    const nv = fixTitle(a.metaTitle);
    if (nv !== a.metaTitle && new RegExp(esc(a.metaTitle)).test(asrc)) {
      asrc = asrc.replace(new RegExp(esc(a.metaTitle)), nv); an++;
    }
  }
  if (a.metaDesc && a.metaDesc.length > 158) {
    const nv = trim(a.metaDesc, 158, false);
    if (nv !== a.metaDesc && new RegExp(esc(a.metaDesc)).test(asrc)) {
      asrc = asrc.replace(new RegExp(esc(a.metaDesc)), nv); an++;
    }
  }
}
writeFileSync(af, asrc, 'utf8');
console.log(`✓ articulosData.js — ${an} metas acortadas`);

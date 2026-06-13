/* Acorta metaTitle (≤60) y metaDesc (≤158) de productos en productosData.js
   para que no se trunquen en los resultados de Google. Edita el archivo
   fuente reemplazando solo los strings que exceden, recortando en límite
   de palabra (sin cortar palabras a la mitad). */
import { readFileSync, writeFileSync } from 'fs';

const FILE = 'src/data/productosData.js';
let src = readFileSync(FILE, 'utf8');

const { PRODUCTOS } = await import('../src/data/productosData.js');

function trim(str, max) {
  if (str.length <= max) return str;
  // recortar en el último espacio antes de max, sin dejar puntuación colgando
  let cut = str.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  if (lastSpace > max * 0.6) cut = cut.slice(0, lastSpace);
  return cut.replace(/[\s,;:.\-–—|]+$/, '');
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let titlesFixed = 0;
let descsFixed = 0;

for (const k of Object.keys(PRODUCTOS)) {
  const p = PRODUCTOS[k];

  // 1) Título: primero normalizar sufijo, luego truncar si sigue largo
  if (p.metaTitle) {
    let nt = p.metaTitle.replace(/ \| STOKA Argentina$/, ' | STOKA');
    if (nt.length > 60) nt = trim(nt, 60);
    if (nt !== p.metaTitle) {
      // reemplazo exacto del string original en el fuente (1ª ocurrencia)
      const re = new RegExp(escapeRe(p.metaTitle));
      if (re.test(src)) { src = src.replace(re, nt); titlesFixed++; }
    }
  }

  // 2) Descripción: truncar a 158
  if (p.metaDesc && p.metaDesc.length > 158) {
    const nd = trim(p.metaDesc, 158);
    if (nd !== p.metaDesc) {
      const re = new RegExp(escapeRe(p.metaDesc));
      if (re.test(src)) { src = src.replace(re, nd); descsFixed++; }
    }
  }
}

writeFileSync(FILE, src, 'utf8');
console.log(`✓ productosData.js — ${titlesFixed} títulos y ${descsFixed} descripciones acortados`);

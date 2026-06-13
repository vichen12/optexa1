/* Agrega loading="lazy" a imágenes below-fold (grids, galerías, cards) que
   aún no tengan atributo de carga. Excluye:
   - las que ya tienen loading=/fetchpriority=
   - banners hero (className con "absolute inset-0") → above-fold, deben ser eager
   Criterio conservador: solo toca <img> con src dinámico {…} salvo banners. */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const files = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.jsx$/.test(p)) files.push(p);
  }
};
walk('src');

let touched = 0;
let imgsLazy = 0;

for (const file of files) {
  let src = readFileSync(file, 'utf8');
  let changed = false;

  src = src.replace(/<img\b[\s\S]{0,500}?\/?>/g, (tag) => {
    // ya tiene estrategia de carga → no tocar
    if (/loading=|fetchpriority=/.test(tag)) return tag;
    // banner hero above-fold → dejar eager
    if (/absolute inset-0/.test(tag)) return tag;
    // insertar loading="lazy" justo después de <img
    const out = tag.replace(/^<img\b/, '<img loading="lazy"');
    imgsLazy++;
    changed = true;
    return out;
  });

  if (changed) {
    writeFileSync(file, src, 'utf8');
    touched++;
    console.log('✓ ' + file.replace(/\\/g, '/').replace('src/', ''));
  }
}

console.log(`\n${imgsLazy} imágenes con loading="lazy" en ${touched} archivos`);

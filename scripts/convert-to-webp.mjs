/* Convierte imágenes pesadas (PNG/JPG fotográficas) a WebP con ffmpeg,
   reescribe las referencias en src/ + index.html, y borra el original.
   Los logos con transparencia se quedan en PNG (no se listan acá). */
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Rutas relativas a public/ (sin slash inicial)
const TARGETS = [
  'productos-delie/industrias/cadena-frio.png',
  'productos-delie/industrias/farmaceutica.png',
  'industria-logistica-3pl.png',
  'industria-ecommerce-retail.png',
  'industrias-banner.png',
  'productos-delie/industrias/manufactura.png',
  'productos-delie/industrias/alimentos-bebidas.png',
  'productos-delie/industrias/mineria.png',
  'bandera4-cropped.jpg',
  'catalogo-banner-asrs.jpeg',
  'gxo-2023.jpg',
  'productos-delie/robots-manipulacion/Robot de transporte-de cuatro vías-con doble estación/dual-station-tote-four-way-shuttle-robot-1.png',
];

// Archivos de código a reescribir
const srcFiles = [];
function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(jsx?|json)$/.test(p)) srcFiles.push(p);
  }
}
walk('src');
srcFiles.push('index.html');

const fileCache = new Map(
  srcFiles.map((f) => [f, fs.readFileSync(f, 'utf8')])
);

let converted = 0;
let savedBytes = 0;

for (const rel of TARGETS) {
  const abs = path.join('public', rel);
  if (!fs.existsSync(abs)) {
    console.log('SKIP (no existe):', rel);
    continue;
  }
  const webpRel = rel.replace(/\.(png|jpe?g)$/i, '.webp');
  const webpAbs = path.join('public', webpRel);

  const before = fs.statSync(abs).size;
  // -q:v 80 buen balance calidad/peso; -compression_level 6 mejor compresión
  execFileSync('ffmpeg', [
    '-y', '-i', abs,
    '-c:v', 'libwebp', '-q:v', '80', '-compression_level', '6',
    webpAbs,
  ], { stdio: 'pipe' });
  const after = fs.statSync(webpAbs).size;
  savedBytes += before - after;
  converted++;
  console.log(
    `✓ ${rel}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`
  );

  // Reescribir referencias: barra inicial + variantes URL-encoded
  const variants = new Set();
  const add = (p) => {
    variants.add('/' + p);
    variants.add('/' + encodeURI(p));
    // encodeURI no toca paréntesis; cubrir basename con encodeURIComponent
    const dir = path.dirname(p);
    const base = path.basename(p);
    if (dir !== '.') {
      variants.add('/' + encodeURI(dir) + '/' + encodeURIComponent(base));
    }
  };
  add(rel);

  for (const [file, content] of fileCache) {
    let updated = content;
    for (const v of variants) {
      if (updated.includes(v)) {
        const target = v.replace(/\.(png|jpe?g)$/i, '.webp');
        updated = updated.split(v).join(target);
      }
    }
    if (updated !== content) fileCache.set(file, updated);
  }

  // Borrar el original
  fs.unlinkSync(abs);
}

// Persistir cambios de código
for (const [file, content] of fileCache) {
  if (content !== fs.readFileSync(file, 'utf8')) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('  ↳ actualizado', file);
  }
}

console.log(
  `\n${converted} imágenes convertidas · ${(savedBytes / 1024 / 1024).toFixed(1)}MB ahorrados`
);

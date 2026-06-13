/* Migra 5 páginas que usaban <Helmet> sin canonical/hreflang a <SeoHead>,
   que añade canonical + hreflang + OG automáticamente. */
import { readFileSync, writeFileSync } from 'fs';

const PAGES = [
  { file: 'src/pages/CatalogPage.jsx', tkey: '`${ns}.metaTitle`', dkey: '`${ns}.metaDesc`', base: '/catalogo' },
  { file: 'src/pages/ComoTrabajamosPage.jsx', tkey: '`${ns}.metaTitle`', dkey: '`${ns}.metaDesc`', base: '/como-trabajamos' },
  { file: 'src/pages/ContactPage.jsx', tkey: "'pages.contactPage.metaTitle'", dkey: "'pages.contactPage.metaDesc'", base: '/contacto' },
  { file: 'src/pages/IndustriasPage.jsx', tkey: '`${ns}.metaTitle`', dkey: '`${ns}.metaDesc`', base: '/industrias' },
  { file: 'src/pages/NosotrosPage.jsx', tkey: '`${ns}.metaTitle`', dkey: '`${ns}.metaDesc`', base: '/nosotros' },
];

for (const { file, tkey, dkey, base } of PAGES) {
  let src = readFileSync(file, 'utf8');

  // 1) Import de SeoHead (ruta relativa según profundidad)
  const depth = file.split('/').length - 2; // src/pages/X.jsx → 1 ; src/pages/catalogo/X → 2
  const rel = '../'.repeat(depth) + 'lib/SeoHead';
  if (!src.includes('SeoHead')) {
    // insertar tras el import de Helmet
    src = src.replace(
      /(import \{ Helmet \} from 'react-helmet-async';\n)/,
      `$1import { SeoHead } from '${rel}';\n`
    );
  }

  // 2) Reemplazar el bloque <Helmet> SEO por <SeoHead>
  const helmetBlock = new RegExp(
    `<Helmet>\\s*` +
    `<title>\\{t\\(${tkey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)\\}</title>\\s*` +
    `<meta name="description" content=\\{t\\(${dkey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)\\} />\\s*` +
    `<meta name="robots" content="index, follow" />\\s*` +
    `</Helmet>`
  );

  const seoHead =
    `<SeoHead\n` +
    `        title={t(${tkey})}\n` +
    `        description={t(${dkey})}\n` +
    `        basePath={'${base}'}\n` +
    `      />`;

  if (helmetBlock.test(src)) {
    src = src.replace(helmetBlock, seoHead);
    writeFileSync(file, src, 'utf8');
    console.log(`✓ ${file}`);
  } else {
    console.log(`✗ ${file} — bloque Helmet no coincidió (revisar manual)`);
  }
}

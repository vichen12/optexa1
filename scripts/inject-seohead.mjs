/**
 * inject-seohead.mjs
 *
 * For each target JSX page:
 *   1. Adds `import { SeoHead } from '../../lib/SeoHead';` (or `../lib/SeoHead`)
 *   2. Replaces the <Helmet> SEO block (title + description + og:title + og:description
 *      + og:url + robots + canonical) with a single <SeoHead ... /> call.
 *   3. Keeps any extra <Helmet> children that carry ld+json schemas.
 *
 * Run: node scripts/inject-seohead.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Helpers ────────────────────────────────────────────────────────────────

function relImport(filePath, libFile) {
  const fileDir = dirname(filePath);
  const libPath = resolve(ROOT, 'src/lib', libFile);
  let rel = relative(fileDir, libPath).replace(/\\/g, '/');
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel.replace(/\.jsx$/, '');
}

function addImport(src, filePath) {
  if (src.includes('SeoHead')) return src; // already added
  const importLine = `import { SeoHead } from '${relImport(filePath, 'SeoHead.jsx')}';`;

  // Insert after the last consecutive import line
  const lines = src.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trimStart().startsWith('import ')) lastImportIdx = i;
  }
  lines.splice(lastImportIdx + 1, 0, importLine);
  return lines.join('\n');
}

// ── Per-page configs ────────────────────────────────────────────────────────
// Each entry describes how to build the <SeoHead> call.
// title / description: the expression already used in the existing <Helmet>
// ogImage: optional
// basePath: for dynamic pages only

const PAGES = [
  {
    file: 'src/pages/SolucionesPage.jsx',
    title: `t('pages.soluciones.metaTitle')`,
    description: `t('pages.soluciones.metaDesc')`,
  },
  {
    file: 'src/pages/AlternativaDeliePage.jsx',
    title: `t('pages.alternativeDelie.metaTitle')`,
    description: `t('pages.alternativeDelie.metaDesc')`,
  },
  {
    file: 'src/pages/AlternativaEconomicaASRSPage.jsx',
    title: `t('pages.alternativaEconomica.metaTitle')`,
    description: `t('pages.alternativaEconomica.metaDesc')`,
  },
  {
    file: 'src/pages/BeneficiosFiscalesPage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
  },
  {
    file: 'src/pages/CasosDeExitoPage.jsx',
    title: `t('pages.casosDeExito.metaTitle')`,
    description: `t('pages.casosDeExito.metaDesc')`,
  },
  {
    file: 'src/pages/ChilePage.jsx',
    title: `t('pages.chile.metaTitle')`,
    description: `t('pages.chile.metaDesc')`,
  },
  {
    file: 'src/pages/IndustriaDetailPage.jsx',
    title: `data.metaTitle`,
    description: `data.metaDesc`,
    basePath: `\`/industrias/\${data.slug}\``,
  },
  {
    file: 'src/pages/catalogo/AutoStoreAlternativaPage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/catalogo/asrs/autostore-alternativa'`,
  },
  {
    file: 'src/pages/catalogo/CatalogoASRSPage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/catalogo/asrs'`,
  },
  {
    file: 'src/pages/catalogo/CatalogoRobotsPage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/catalogo/robots-manipulacion'`,
  },
  {
    file: 'src/pages/catalogo/CatalogoSoftwarePage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/catalogo/software'`,
  },
  {
    file: 'src/pages/catalogo/CatalogoTransportePage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/catalogo/equipo-transporte'`,
  },
  {
    file: 'src/pages/catalogo/CatalogoVerticalPage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/catalogo/almacenamiento-vertical'`,
  },
  {
    file: 'src/pages/catalogo/ProductoPage.jsx',
    title: `data.metaTitle`,
    description: `data.metaDesc`,
    ogImage: `data.heroImg`,
    basePath: `\`/catalogo/\${data.categoria}/\${data.slug}\``,
  },
  {
    file: 'src/pages/recursos/ArticuloPage.jsx',
    title: `art.metaTitle`,
    description: `art.metaDesc`,
    ogImage: `\`https://www.stokagroup.com\${art.heroImg}\``,
    basePath: `\`/recursos/\${art.slug}\``,
  },
  {
    file: 'src/pages/recursos/ComparadorPage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/recursos/comparador-sistemas'`,
  },
  {
    file: 'src/pages/recursos/GlosarioPage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/recursos/glosario'`,
  },
  {
    file: 'src/pages/recursos/RecursosHub.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/recursos'`,
  },
  {
    file: 'src/pages/recursos/ROIPage.jsx',
    title: `p('metaTitle')`,
    description: `p('metaDesc')`,
    basePath: `'/recursos/roi-automatizacion'`,
  },
];

// ── Regex-based Helmet replacer ─────────────────────────────────────────────

function buildSeoHead({ title, description, ogImage, basePath }) {
  const props = [
    `title={${title}}`,
    `description={${description}}`,
  ];
  if (ogImage) props.push(`ogImage={${ogImage}}`);
  if (basePath) props.push(`basePath={${basePath}}`);
  return `<SeoHead\n        ${props.join('\n        ')}\n      />`;
}

// Removes from <Helmet> the lines that SeoHead now handles.
// Keeps ld+json scripts and any other extra tags.
// Returns the new file content.
function processFile(filePath, cfg) {
  let src = readFileSync(filePath, 'utf-8');

  // 1. Add SeoHead import
  src = addImport(src, filePath);

  // 2. Find the <Helmet> block and rewrite it
  // Match opening <Helmet> ... </Helmet>
  const helmetRe = /(<Helmet[^>]*>)([\s\S]*?)(<\/Helmet>)/g;
  src = src.replace(helmetRe, (match, open, inner, close) => {
    // Strip the tags SeoHead handles
    const stripped = inner
      .replace(/<title[^>]*>[\s\S]*?<\/title>\n?/g, '')
      .replace(/<meta\s+name="description"[^/]*/g, m => m.endsWith('/>') ? '' : '')
      .replace(/<meta\s+name="description"[^>]*\/>\n?/g, '')
      .replace(/<meta\s+property="og:title"[^>]*\/>\n?/g, '')
      .replace(/<meta\s+property="og:description"[^>]*\/>\n?/g, '')
      .replace(/<meta\s+property="og:url"[^>]*\/>\n?/g, '')
      .replace(/<meta\s+property="og:image"[^>]*\/>\n?/g, '')
      .replace(/<meta\s+property="og:type"[^>]*\/>\n?/g, '')
      .replace(/<meta\s+name="robots"[^>]*\/>\n?/g, '')
      .replace(/<link\s+rel="canonical"[^>]*\/>\n?/g, '')
      .replace(/<link\s+rel="alternate"[^>]*\/>\n?/g, '');

    const remaining = stripped.trim();
    const seoHead = buildSeoHead(cfg);

    if (!remaining) {
      // Nothing left in <Helmet> — replace entirely with <SeoHead>
      return seoHead;
    }

    // Schemas remain — keep a lean <Helmet> for them only
    return `${seoHead}\n      ${open}\n        ${remaining}\n      ${close}`;
  });

  return src;
}

// ── Main ────────────────────────────────────────────────────────────────────

let updated = 0;
for (const cfg of PAGES) {
  const filePath = resolve(ROOT, cfg.file);
  try {
    const newSrc = processFile(filePath, cfg);
    writeFileSync(filePath, newSrc, 'utf-8');
    console.log(`✓ ${cfg.file}`);
    updated++;
  } catch (e) {
    console.error(`✗ ${cfg.file}: ${e.message}`);
  }
}

console.log(`\n✅ ${updated}/${PAGES.length} files updated`);

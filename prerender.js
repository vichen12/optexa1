import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, 'dist');

// Rutas estáticas + landings dinámicas conocidas
const STATIC_ROUTES = [
  '/',
  '/soluciones',
  '/catalogo',
  '/catalogo/asrs',
  '/catalogo/robots-manipulacion',
  '/catalogo/almacenamiento-vertical',
  '/catalogo/equipo-transporte',
  '/catalogo/software',
  '/industrias',
  '/beneficios-fiscales',
  '/como-trabajamos',
  '/nosotros',
  '/contacto',
  '/delie-argentina',
  '/alternativa-economica-asrs',
  '/casos-de-exito',
  '/recursos',
  '/recursos/glosario',
  '/recursos/comparador-sistemas',
  '/recursos/roi-automatizacion',
  '/catalogo/asrs/autostore-alternativa',
  '/chile',
];

// Rutas dinámicas derivadas de los datos — así nunca se desincronizan
// al agregar productos, artículos o industrias.
// productosData/articulosData son JS de datos puros (sin JSX) → importables en Node.
const { PRODUCTOS } = await import('./src/data/productosData.js');
// ALL_ARTICULO_SLUGS incluye los artículos originales + los del Sprint 2 (multiidioma).
const { ALL_ARTICULO_SLUGS } = await import('./src/data/articulosData.js');

// Slugs de industria: leídos del JSON i18n (sin tocar el componente JSX).
const esLocale = JSON.parse(
  readFileSync(join(__dirname, 'src/i18n/locales/es.json'), 'utf-8')
);
const INDUSTRY_SLUGS = Object.keys(esLocale.pages.industrias.industriesList);

const PRODUCT_ROUTES = Object.keys(PRODUCTOS).map((k) => `/catalogo/${k}`);
const ARTICLE_ROUTES = ALL_ARTICULO_SLUGS.map((slug) => `/recursos/${slug}`);
const INDUSTRY_ROUTES = INDUSTRY_SLUGS.map((s) => `/industrias/${s}`);

const ROUTES = [
  ...STATIC_ROUTES,
  ...INDUSTRY_ROUTES,
  ...PRODUCT_ROUTES,
  ...ARTICLE_ROUTES,
];

console.log(
  `[prerender] Rutas: ${STATIC_ROUTES.length} estáticas + ${INDUSTRY_ROUTES.length} industrias + ${PRODUCT_ROUTES.length} productos + ${ARTICLE_ROUTES.length} artículos = ${ROUTES.length} × 3 idiomas`
);

const LANGS = ['es', 'en', 'zh'];

// Import the SSR bundle built by: vite build --ssr src/App.ssr.jsx --outDir dist/ssr
const { render } = await import('./dist/ssr/App.ssr.js');

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

let ok = 0;
let errors = 0;

for (const lang of LANGS) {
  for (const route of ROUTES) {
    const url =
      lang === 'es' ? route : `/${lang}${route === '/' ? '' : route}`;
    try {
      const { html, helmet } = await render(url);

      let page = template;

      // 0. Set the correct lang attribute for this language version
      page = page.replace('<html lang="es">', `<html lang="${lang}">`);

      // 1. Inject rendered HTML into root div
      page = page.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // 2. Replace the generic <title> with the route-specific one
      if (helmet?.title) {
        page = page.replace(/<title>[^<]*<\/title>/, helmet.title.toString());
      }

      // 2b. Quitar del template estático las meta que el helmet sobreescribe
      // por página (description, og:*, twitter:*), para no duplicar tags.
      const metaStr = helmet?.meta?.toString() ?? '';
      const dedupe = [
        { test: /name="description"/, re: /\s*<meta name="description"[^>]*>/ },
        { test: /property="og:type"/, re: /\s*<meta property="og:type"[^>]*>/ },
        { test: /property="og:site_name"/, re: /\s*<meta property="og:site_name"[^>]*>/ },
        { test: /property="og:image"[^:]/, re: /\s*<meta property="og:image" [^>]*>/ },
        { test: /name="twitter:card"/, re: /\s*<meta name="twitter:card"[^>]*>/ },
        { test: /name="twitter:image"/, re: /\s*<meta name="twitter:image"[^>]*>/ },
      ];
      for (const { test, re } of dedupe) {
        if (test.test(metaStr)) page = page.replace(re, '');
      }

      // 3. Inject meta, link, and script (JSON-LD) tags from helmet before </head>
      const headTags = [
        helmet?.meta?.toString() ?? '',
        helmet?.link?.toString() ?? '',
        helmet?.script?.toString() ?? '',
      ]
        .filter((s) => s.trim().length > 0)
        .join('\n    ');

      if (headTags) {
        page = page.replace('</head>', `    ${headTags}\n  </head>`);
      }

      // 4. Write to dist/[url]/index.html (or dist/index.html for root)
      const outPath =
        url === '/'
          ? join(DIST, 'index.html')
          : join(DIST, url.slice(1), 'index.html');

      const outDir = dirname(outPath);
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      writeFileSync(outPath, page, 'utf-8');

      console.log(`[prerender] ✅ ${url}`);
      ok++;
    } catch (err) {
      console.error(`[prerender] ❌ ${url} — ${err.message}`);
      console.error(err.stack);
      errors++;
    }
  }
}

console.log(`\n[prerender] Listo. ${ok} OK / ${errors} errores.`);
if (errors > 0) process.exit(1);

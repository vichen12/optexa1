import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, 'dist');

const ROUTES = [
  '/',
  '/soluciones',
  '/catalogo',
  '/catalogo/asrs',
  '/catalogo/robots-manipulacion',
  '/catalogo/almacenamiento-vertical',
  '/catalogo/equipo-transporte',
  '/catalogo/software',
  '/industrias',
  '/industrias/e-commerce-retail',
  '/industrias/logistica-3pl',
  '/industrias/manufactura',
  '/industrias/alimentos-bebidas',
  '/industrias/farmaceutica',
  '/industrias/mineria-oil-gas',
  '/industrias/cadena-frio',
  '/catalogo/asrs/unit-load',
  '/catalogo/asrs/miniload',
  '/catalogo/asrs/shuttle',
  '/catalogo/asrs/camara-frio',
  '/catalogo/robots-manipulacion/paletizado',
  '/catalogo/robots-manipulacion/picking',
  '/catalogo/robots-manipulacion/agv-amr',
  '/catalogo/almacenamiento-vertical/vlm',
  '/catalogo/almacenamiento-vertical/carruseles',
  '/catalogo/equipo-transporte/transportadores',
  '/catalogo/equipo-transporte/sorters',
  '/catalogo/software/wms',
  '/catalogo/software/wcs',
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
  '/recursos/que-es-un-sistema-asrs',
  '/recursos/cuanto-cuesta-automatizar-almacen',
  '/recursos/transelevador-vs-shuttle',
  '/recursos/rimi-2026-automatizacion',
  '/recursos/agv-vs-amr',
  '/recursos/wms-vs-wcs',
  '/recursos/automatizacion-bodegas-chile',
  '/recursos/asrs-vs-autostore',
  '/recursos/que-es-un-transelevador',
  '/recursos/que-es-un-wms',
  '/recursos/roi-automatizacion',
  '/catalogo/asrs/autostore-alternativa',
  '/chile',
];

// Import the SSR bundle built by: vite build --ssr src/App.ssr.jsx --outDir dist/ssr
const { render } = await import('./dist/ssr/App.ssr.js');

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

let ok = 0;
let errors = 0;

for (const route of ROUTES) {
  try {
    const { html, helmet } = render(route);

    let page = template;

    // 1. Inject rendered HTML into root div
    page = page.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // 2. Replace the generic <title> with the route-specific one
    if (helmet?.title) {
      page = page.replace(/<title>[^<]*<\/title>/, helmet.title.toString());
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

    // 4. Write to dist/[route]/index.html (or dist/index.html for root)
    const outPath =
      route === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route.slice(1), 'index.html');

    const outDir = dirname(outPath);
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
    writeFileSync(outPath, page, 'utf-8');

    console.log(`[prerender] ✅ ${route}`);
    ok++;
  } catch (err) {
    console.error(`[prerender] ❌ ${route} — ${err.message}`);
    console.error(err.stack);
    errors++;
  }
}

console.log(`\n[prerender] Listo. ${ok} OK / ${errors} errores.`);
if (errors > 0) process.exit(1);

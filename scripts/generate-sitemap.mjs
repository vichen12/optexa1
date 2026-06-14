/* Genera public/sitemap.xml desde las mismas rutas que el prerender,
   con alternates hreflang (es/en/zh/x-default) por URL. Sincronizado con
   los datos: al agregar un producto/artículo, el sitemap se actualiza solo. */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BASE = 'https://www.stokagroup.com';
const TODAY = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES = [
  '/', '/soluciones', '/catalogo', '/catalogo/asrs',
  '/catalogo/robots-manipulacion', '/catalogo/almacenamiento-vertical',
  '/catalogo/equipo-transporte', '/catalogo/software', '/industrias',
  '/beneficios-fiscales', '/como-trabajamos', '/nosotros', '/contacto',
  '/delie-argentina', '/alternativa-economica-asrs', '/casos-de-exito',
  '/recursos', '/recursos/glosario', '/recursos/comparador-sistemas',
  '/recursos/roi-automatizacion', '/catalogo/asrs/autostore-alternativa',
  '/chile',
  '/automatizacion-almacenes-buenos-aires',
  '/automatizacion-almacenes-mendoza',
  '/automatizacion-almacenes-cordoba',
  '/automatizacion-almacenes-rosario',
];

const { PRODUCTOS } = await import('../src/data/productosData.js');
const { ALL_ARTICULO_SLUGS } = await import('../src/data/articulosData.js');
const esLocale = JSON.parse(
  readFileSync(join(ROOT, 'src/i18n/locales/es.json'), 'utf-8')
);
const INDUSTRY_SLUGS = Object.keys(esLocale.pages.industrias.industriesList);

const ROUTES = [
  ...STATIC_ROUTES,
  ...INDUSTRY_SLUGS.map((s) => `/industrias/${s}`),
  ...Object.keys(PRODUCTOS).map((k) => `/catalogo/${k}`),
  ...ALL_ARTICULO_SLUGS.map((slug) => `/recursos/${slug}`),
];

// Prioridad/frecuencia por tipo de página
function meta(route) {
  if (route === '/') return { freq: 'weekly', prio: '1.0' };
  if (route === '/soluciones' || route === '/catalogo' || route === '/industrias')
    return { freq: 'weekly', prio: '0.9' };
  if (route.startsWith('/automatizacion-almacenes-'))
    return { freq: 'monthly', prio: '0.8' }; // zona geográfica
  if (route.startsWith('/catalogo/') && route.split('/').length === 4)
    return { freq: 'monthly', prio: '0.7' }; // producto
  if (route.startsWith('/recursos/')) return { freq: 'monthly', prio: '0.6' };
  return { freq: 'monthly', prio: '0.8' };
}

const enc = (s) =>
  s.split('/').map((seg) => encodeURIComponent(seg)).join('/');

function urlBlock(route) {
  const path = route === '/' ? '' : enc(route);
  const es = `${BASE}${path || '/'}`;
  const en = `${BASE}/en${path}`;
  const zh = `${BASE}/zh${path}`;
  const { freq, prio } = meta(route);
  return `  <url>
    <loc>${es}</loc>
    <lastmod>${TODAY}</lastmod><changefreq>${freq}</changefreq><priority>${prio}</priority>
    <xhtml:link rel="alternate" hreflang="es"        href="${es}"/>
    <xhtml:link rel="alternate" hreflang="en"        href="${en}"/>
    <xhtml:link rel="alternate" hreflang="zh"        href="${zh}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${es}"/>
  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

${ROUTES.map(urlBlock).join('\n')}
</urlset>
`;

const out = join(ROOT, 'public/sitemap.xml');
writeFileSync(out, xml, 'utf-8');
console.log(`✓ sitemap.xml — ${ROUTES.length} URLs (× 3 idiomas vía hreflang)`);

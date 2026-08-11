/* Mapa de slugs por idioma. La versión ES es la canónica; EN y ZH comparten
   slugs en inglés (los caracteres CJK en URLs se percent-encodean y quedan
   ilegibles, por eso el estándar en sitios B2B chinos es slug en inglés).
   Los slugs de PRODUCTOS y ARTÍCULOS no se traducen: son IDs de contenido
   estables (los de producto ya están en inglés). Un segmento que no figura
   en el mapa pasa sin cambios; los segmentos ':param' nunca se tocan. */

export const SEG_ES_TO_LOC = {
  // Secciones
  'catalogo': 'catalog',
  'robots-manipulacion': 'handling-robots',
  'almacenamiento-vertical': 'vertical-storage',
  'equipo-transporte': 'transport-equipment',
  'autostore-alternativa': 'autostore-alternative',
  'soluciones': 'solutions',
  'industrias': 'industries',
  'beneficios-fiscales': 'tax-benefits',
  'como-trabajamos': 'how-we-work',
  'nosotros': 'about-us',
  'contacto': 'contact',
  'tecnologia-asrs': 'asrs-technology',
  'preguntas-frecuentes': 'faq',
  'alternativa-economica-asrs': 'affordable-asrs-alternative',
  'casos-de-exito': 'case-studies',
  'recursos': 'resources',
  'glosario': 'glossary',
  'comparador-sistemas': 'system-comparator',
  'roi-automatizacion': 'automation-roi',
  // Zonas
  'automatizacion-almacenes-buenos-aires': 'warehouse-automation-buenos-aires',
  'automatizacion-almacenes-mendoza': 'warehouse-automation-mendoza',
  'automatizacion-almacenes-cordoba': 'warehouse-automation-cordoba',
  'automatizacion-almacenes-rosario': 'warehouse-automation-rosario',
  // Industrias
  'logistica-3pl': '3pl-logistics',
  'manufactura': 'manufacturing',
  'alimentos-bebidas': 'food-beverage',
  'farmaceutica': 'pharmaceutical',
  'mineria-oil-gas': 'mining-oil-gas',
  'cadena-frio': 'cold-chain',
};

export const SEG_LOC_TO_ES = Object.fromEntries(
  Object.entries(SEG_ES_TO_LOC).map(([es, loc]) => [loc, es])
);

const mapSegs = (path, dict) =>
  path.split('/').map(s => (s.startsWith(':') ? s : (dict[s] || s))).join('/');

/** Ruta ES (sin prefijo de idioma) → ruta localizada. En ES devuelve igual. */
export function localizePath(path, lang) {
  if (lang === 'es' || !path) return path;
  return mapSegs(path, SEG_ES_TO_LOC);
}

/** Ruta localizada (sin prefijo de idioma) → ruta ES canónica. */
export function delocalizePath(path) {
  if (!path) return path;
  return mapSegs(path, SEG_LOC_TO_ES);
}

/** Un solo segmento localizado → segmento ES ('handling-robots' → 'robots-manipulacion'). */
export function delocalizeSegment(seg) {
  return SEG_LOC_TO_ES[seg] || seg;
}

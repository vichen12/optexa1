/* Agrega `name` (nombre visible de la industria) a cada entrada de
   pages.industrias.industriesList en es/en/zh, y metaTitle/metaDesc para
   la página de detalle. IndustriaDetailPage referencia ind.label/ind.tagline
   que ya no existen — ahora se resuelven desde i18n. */
import fs from 'fs';
import path from 'path';

const DIR = 'src/i18n/locales';

const NAMES = {
  es: {
    'e-commerce-retail': 'E-commerce y Retail',
    'logistica-3pl': 'Logística y 3PL',
    'manufactura': 'Manufactura',
    'alimentos-bebidas': 'Alimentos y Bebidas',
    'farmaceutica': 'Farmacéutica',
    'mineria-oil-gas': 'Minería, Oil & Gas',
    'cadena-frio': 'Cadena de Frío',
  },
  en: {
    'e-commerce-retail': 'E-commerce & Retail',
    'logistica-3pl': 'Logistics & 3PL',
    'manufactura': 'Manufacturing',
    'alimentos-bebidas': 'Food & Beverage',
    'farmaceutica': 'Pharmaceutical',
    'mineria-oil-gas': 'Mining, Oil & Gas',
    'cadena-frio': 'Cold Chain',
  },
  zh: {
    'e-commerce-retail': '电商与零售',
    'logistica-3pl': '物流与第三方物流',
    'manufactura': '制造业',
    'alimentos-bebidas': '食品与饮料',
    'farmaceutica': '制药',
    'mineria-oil-gas': '采矿、石油与天然气',
    'cadena-frio': '冷链',
  },
};

for (const lang of ['es', 'en', 'zh']) {
  const file = path.join(DIR, `${lang}.json`);
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  const list = json.pages.industrias.industriesList;
  for (const [slug, name] of Object.entries(NAMES[lang])) {
    if (list[slug]) list[slug].name = name;
  }
  fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`✓ ${lang}.json — ${Object.keys(NAMES[lang]).length} nombres de industria`);
}

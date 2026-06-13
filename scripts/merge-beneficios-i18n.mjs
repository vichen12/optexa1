/* Mergea ES/EN/ZH en pages.beneficiosFiscales de cada locale, conservando
   las claves existentes (metaTitle, metaDesc, breadcrumb, form*, mapa*, col*,
   rimiTable*, faqH2, formH2, etc.). */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { ES } from './i18n-beneficios-es.mjs';
import { EN } from './i18n-beneficios-en.mjs';
import { ZH } from './i18n-beneficios-zh.mjs';

const map = { es: ES, en: EN, zh: ZH };

for (const lang of ['es', 'en', 'zh']) {
  const file = join('src/i18n/locales', `${lang}.json`);
  const json = JSON.parse(readFileSync(file, 'utf8'));
  json.pages = json.pages || {};
  json.pages.beneficiosFiscales = json.pages.beneficiosFiscales || {};
  Object.assign(json.pages.beneficiosFiscales, map[lang]);
  writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  const n = Object.keys(map[lang]).length;
  console.log(`✓ ${lang}.json — +${n} claves en pages.beneficiosFiscales`);
}

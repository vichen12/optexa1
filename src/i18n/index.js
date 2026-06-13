import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';

const getLangFromPath = () => {
  if (typeof window === 'undefined') return 'es';
  const path = window.location.pathname;
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  if (path === '/zh' || path.startsWith('/zh/')) return 'zh';
  return 'es';
};

/* Solo es.json va en el bundle inicial; en/zh se cargan on-demand
   como chunks separados (~100KB menos cada uno). */
const LOCALE_LOADERS = {
  en: () => import('./locales/en.json'),
  zh: () => import('./locales/zh.json'),
};

const loadLocale = async (lng) => {
  const loader = LOCALE_LOADERS[lng];
  if (loader && !i18next.hasResourceBundle(lng, 'translation')) {
    const mod = await loader();
    i18next.addResourceBundle(lng, 'translation', mod.default, true, true);
  }
};

const initialLang = getLangFromPath();

i18next
  .use(initReactI18next)
  .init({
    lng: initialLang,
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    react: { bindI18n: 'languageChanged loaded', bindI18nStore: 'added' },
    resources: {
      es: { translation: es },
    },
  });

/* Interceptar cambios de idioma para cargar el bundle antes de cambiar */
const originalChangeLanguage = i18next.changeLanguage.bind(i18next);
i18next.changeLanguage = async (lng, ...args) => {
  if (lng) await loadLocale(lng);
  return originalChangeLanguage(lng, ...args);
};

/* Promise que resuelve cuando el idioma inicial está listo para renderizar */
export const i18nReady =
  initialLang === 'es'
    ? Promise.resolve()
    : loadLocale(initialLang).then(() => originalChangeLanguage(initialLang));

export default i18next;

/* i18n init for SSR/prerender — all locales bundled statically so any
   language can be rendered synchronously with changeLanguage(). */
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';
import zh from './locales/zh.json';

i18next
  .use(initReactI18next)
  .init({
    lng: 'es',
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    resources: {
      es: { translation: es },
      en: { translation: en },
      zh: { translation: zh },
    },
  });

export default i18next;

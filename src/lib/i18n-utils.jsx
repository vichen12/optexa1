import { useTranslation } from 'react-i18next';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.stokagroup.com';
const LANGS = ['es', 'en', 'zh'];

export function useLangPath() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (path) => {
    // Defensa: garantizar que el path empiece con '/' (un argumento sin barra
    // produciría /enXxx en EN/ZH → 404).
    const p = typeof path === 'string' && path.startsWith('/') ? path : `/${path || ''}`;
    if (lang === 'es') return p;
    // La home '/' debe quedar como '/en' (no '/en/'): con cleanUrls de Vercel,
    // '/en/' redirige 308 a '/en'. Se quita la barra final del prefijo de idioma.
    return p === '/' ? `/${lang}` : `/${lang}${p}`;
  };
}

export function useLangNavigate() {
  const navigate = useNavigate();
  const langPath = useLangPath();
  return (path, options) => navigate(langPath(path), options);
}

export function LangLink({ to, children, ...props }) {
  const langPath = useLangPath();
  return (
    <Link to={langPath(to)} {...props}>
      {children}
    </Link>
  );
}

/**
 * Returns { canonical, hreflangs } for the current page.
 * canonical  — absolute URL for the current language version
 * hreflangs  — array of { lang, url } for all 3 language versions
 *
 * Pass `basePath` explicitly for dynamic pages (e.g. "/catalogo/asrs/unit-load").
 * If omitted, it is derived from the current location.
 */
export function useSeoUrls(basePath) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lang = i18n.language;

  // Strip the /en or /zh prefix to get the canonical Spanish path
  const rawPath = basePath ?? location.pathname;
  const spanishPath = rawPath
    .replace(/^\/en(\/|$)/, '/')
    .replace(/^\/zh(\/|$)/, '/')
    .replace(/\/$/, '') || '/';

  const urlFor = (l) =>
    l === 'es'
      ? `${BASE_URL}${spanishPath === '/' ? '' : spanishPath}`
      : `${BASE_URL}/${l}${spanishPath === '/' ? '' : spanishPath}`;

  const canonical = urlFor(lang);
  const hreflangs = [
    ...LANGS.map((l) => ({ lang: l, url: urlFor(l) })),
    { lang: 'x-default', url: urlFor('es') },
  ];

  return { canonical, hreflangs };
}

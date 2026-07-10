import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { LangLink } from '../lib/i18n-utils';

const FOOTER_LANGS = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
];

/* URL equivalente de la página actual en otro idioma (link estático rastreable). */
const buildLangHref = (pathname, code) => {
  let p = pathname;
  if (p.startsWith('/en')) p = p.slice(3) || '/';
  else if (p.startsWith('/zh')) p = p.slice(3) || '/';
  if (!p.startsWith('/')) p = '/' + p;
  return code === 'es' ? p : `/${code}${p === '/' ? '' : p}`;
};

const CATALOGO_PATHS = [
  { key: 'asrs',      href: '/catalogo/asrs' },
  { key: 'robots',    href: '/catalogo/robots-manipulacion' },
  { key: 'vertical',  href: '/catalogo/almacenamiento-vertical' },
  { key: 'transport', href: '/catalogo/equipo-transporte' },
  { key: 'software',  href: '/catalogo/software' },
];

const INDUSTRIAS_PATHS = [
  { key: 'ecommerce',     href: '/industrias/e-commerce-retail' },
  { key: 'logistics',     href: '/industrias/logistica-3pl' },
  { key: 'manufacturing', href: '/industrias/manufactura' },
  { key: 'food',          href: '/industrias/alimentos-bebidas' },
  { key: 'pharma',        href: '/industrias/farmaceutica' },
  { key: 'mining',        href: '/industrias/mineria-oil-gas' },
  { key: 'cold',          href: '/industrias/cadena-frio' },
];

const RECURSOS_PATHS = [
  { key: 'roi',        href: '/recursos/roi-automatizacion' },
  { key: 'comparator', href: '/recursos/comparador-sistemas' },
  { key: 'blog',       href: '/recursos' },
  { key: 'cases',      href: '/casos-de-exito' },
  { key: 'glossary',   href: '/recursos/glosario' },
];

const EMPRESA_PATHS = [
  { key: 'about',       href: '/nosotros' },
  { key: 'howWeWork',   href: '/como-trabajamos' },
  { key: 'taxBenefits', href: '/beneficios-fiscales' },
  { key: 'contact',     href: '/contacto' },
  { key: 'delie',       href: '/delie-argentina' },
  { key: 'chile',       href: '/chile' },
];

const ZONA_PATHS = [
  { key: 'buenosAires', href: '/automatizacion-almacenes-buenos-aires' },
  { key: 'cordoba',     href: '/automatizacion-almacenes-cordoba' },
  { key: 'rosario',     href: '/automatizacion-almacenes-rosario' },
  { key: 'mendoza',     href: '/automatizacion-almacenes-mendoza' },
];

const MAPS_EMBED = "https://maps.google.com/maps?q=Carril+Rodr%C3%ADguez+Pe%C3%B1a+35+Maip%C3%BA+Mendoza+Argentina&output=embed";
const MAPS_LINK  = "https://maps.google.com/maps?q=Carril+Rodr%C3%ADguez+Pe%C3%B1a+35+Maip%C3%BA+Mendoza+Argentina";

function FooterLinkGroup({ title, items, ns }) {
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-gray-900 text-[10px] font-black uppercase tracking-[0.3em] mb-4">{title}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <LangLink
              to={item.href}
              className="flex items-center gap-1.5 text-gray-500 hover:text-cyan-600 transition-colors text-sm group"
            >
              <svg viewBox="0 0 6 10" className="w-2.5 shrink-0 text-gray-300 group-hover:text-cyan-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t(`footer.${ns}.${item.key}`)}
            </LangLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 z-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 40%, #f8fafc 70%, #e0f2fe 100%)' }}>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <p className="text-[18vw] font-black italic tracking-tighter leading-none text-cyan-400/10 whitespace-nowrap">
          STOKA
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10 relative">

        <div className="flex flex-col lg:flex-row gap-10 mb-10">

          {/* BRAND */}
          <div className="space-y-4 lg:w-64 shrink-0">
            <img
              src="/stoka_deliecn_logo_sin_fondo.webp"
              alt="Logo STOKA — Aliado estratégico de DELIE en Argentina"
              width="224" height="118"
              loading="lazy"
              className="w-56 h-auto object-contain"
            />
            <p className="text-gray-500 text-sm leading-relaxed">{t('footer.tagline')}</p>
            <div className="space-y-2">
              <a href="tel:+5492615886671" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <Phone size={13} className="text-cyan-500 shrink-0" />
                +54 9 2615 88-6671
              </a>
              <a href="tel:+5492612071048" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <Phone size={13} className="text-cyan-500 shrink-0" />
                +54 9 261 207-1048
              </a>
              <a href="mailto:contacto@stokagroup.com" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <Mail size={13} className="text-cyan-500 shrink-0" />
                contacto@stokagroup.com
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <MapPin size={13} className="text-cyan-500 shrink-0" />
                Carril Rodríguez Peña 35, Maipú
              </a>
            </div>
          </div>

          {/* LINK GROUPS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
            <FooterLinkGroup title={t('footer.catalog')}    items={CATALOGO_PATHS}   ns="catalogLinks" />
            <FooterLinkGroup title={t('footer.industries')} items={INDUSTRIAS_PATHS} ns="industriesLinks" />
            <FooterLinkGroup title={t('footer.resources')}  items={RECURSOS_PATHS}   ns="resourcesLinks" />
            <FooterLinkGroup title={t('footer.company')}    items={EMPRESA_PATHS}    ns="companyLinks" />
          </div>
        </div>

        {/* COBERTURA / ZONAS */}
        <div className="mb-8 pt-6 border-t border-gray-200">
          <p className="text-gray-900 text-[10px] font-black uppercase tracking-[0.3em] mb-4">{t('footer.coverage')}</p>
          <div className="flex flex-wrap gap-2">
            {ZONA_PATHS.map((z) => (
              <LangLink
                key={z.href}
                to={z.href}
                className="inline-flex items-center gap-1.5 text-gray-500 hover:text-cyan-600 bg-white border border-gray-200 hover:border-cyan-300 transition-colors text-xs rounded-full px-3 py-1.5"
              >
                <MapPin size={11} className="text-cyan-500 shrink-0" />
                {t(`footer.zonaLinks.${z.key}`)}
              </LangLink>
            ))}
          </div>
        </div>

        {/* MAP */}
        <div className="mb-8">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">{t('footer.location')}</p>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: '160px' }}>
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="160"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stoka ubicación"
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        {/* Selector de idioma estático (links reales rastreables por Googlebot) */}
        <nav aria-label={t('nav.language')} className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px]">
          {FOOTER_LANGS.map((l) => (
            <a
              key={l.code}
              href={buildLangHref(location.pathname, l.code)}
              hrefLang={l.code}
              lang={l.code}
              aria-current={i18n.language === l.code ? 'true' : undefined}
              className={i18n.language === l.code ? 'font-bold text-cyan-600' : 'text-gray-400 hover:text-cyan-600 transition-colors'}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400">
          <span>{t('footer.copyright', { year })}</span>
          <span>{t('footer.address')}</span>
        </div>
      </div>
    </footer>
  );
};

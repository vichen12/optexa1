import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLangNavigate } from '../lib/i18n-utils';

const seg = (s) => s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@ ]/gu, c => encodeURIComponent(c)).replace(/ /g, '%20');
const img = (cat, prod, file) => `/productos-delie/${cat}/${seg(prod)}/${file}`;

const CATEGORIES = [
  {
    id: 'estanterias',
    descKey: 'asrsDesc',
    label: 'AS/RS',
    count: 12,
    image: '/n2025120811423550745.webp',
    href: '/catalogo/asrs',
  },
  {
    id: 'vertical',
    descKey: 'verticalDesc',
    label: 'Almacenamiento vertical',
    count: 2,
    image: img('almacenamiento-vertical', 'Carrusel vertical inteligente para almacenamiento automatizado de alta-densidad', '2025112714330825019.webp'),
    href: '/catalogo/almacenamiento-vertical',
  },
  {
    id: 'robots',
    descKey: 'robotsDesc',
    label: 'Robots de manipulación',
    count: 14,
    image: img('robots-manipulacion', 'Robot lanzadera de cuatro direcciones-para paletas', 'pallet-four-way-shuttle-robotb829c.webp'),
    href: '/catalogo/robots-manipulacion',
  },
  {
    id: 'transport',
    descKey: 'transportDesc',
    label: 'Equipo de transporte',
    count: 10,
    image: img('equipo-transporte', 'Transportador de cadena', 'chain-conveyor9e540.webp'),
    href: '/catalogo/equipo-transporte',
  },
  {
    id: 'sistema',
    descKey: 'softwareDesc',
    label: 'Software inteligente',
    count: 6,
    image: img('software-inteligente', '(WMS) Sistema de gestión de almacenes', '2025112715331054f3e.webp'),
    href: '/catalogo/software',
  },
];

export const CatalogPreview = () => {
  const { t } = useTranslation();
  const langNavigate = useLangNavigate();

  const goTo = (href) => {
    langNavigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 px-6 z-20 bg-slate-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">
            {t('catalog.tag')}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              {t('catalog.h2_a')}{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
              >
                {t('catalog.h2_b')}
              </span>
            </h2>
            <button
              onClick={() => langNavigate('/catalogo')}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors group"
            >
              {t('catalog.viewAll')}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.id}
              onClick={() => goTo(cat.href)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ outline: 'none' }}
              className={[
                'relative text-left rounded-2xl overflow-hidden border border-white/10',
                'hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300 group',
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : '',
              ].join(' ')}
            >
              <div className="aspect-video overflow-hidden bg-gray-200">
                <img loading="lazy"
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  onError={(ev) => { ev.currentTarget.style.opacity = '0'; }}
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-white font-bold text-base leading-tight">{cat.label}</h3>
                  <span className="shrink-0 text-[11px] font-mono text-cyan-300 bg-cyan-400/15 border border-cyan-400/25 px-2 py-0.5 rounded-full mt-0.5">
                    {cat.count}
                  </span>
                </div>
                <p className="text-white/55 text-xs leading-relaxed mb-3">{t(`catalog.categories.${cat.descKey}`)}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 group-hover:gap-2.5 transition-all">
                  {t('catalog.viewProducts')} <ArrowRight size={12} />
                </span>
              </div>
            </motion.button>
          ))}

          {/* YouTube DELIE card */}
          <motion.a
            href="https://www.youtube.com/@DELIECN"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: CATEGORIES.length * 0.07 }}
            className="relative text-left rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/40 transition-all duration-300 group"
          >
            <div className="aspect-video flex items-center justify-center bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-slate-700 to-slate-900" />
              <img loading="lazy" src="/image.png" alt="DELIE en YouTube — Instalaciones reales y casos de uso globales" className="relative z-10 w-32 object-contain" style={{ filter: 'brightness(1.1) saturate(1.2)' }} />
              <div className="absolute top-3 right-3 w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-bold text-base leading-tight mb-1">{t('catalog.youtube.title')}</h3>
              <p className="text-white/55 text-xs leading-relaxed mb-3">{t('catalog.youtube.desc')}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 group-hover:gap-2.5 transition-all">
                {t('catalog.youtube.cta')} <ArrowRight size={12} />
              </span>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

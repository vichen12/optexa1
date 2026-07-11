import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Truck, Cog, UtensilsCrossed, FlaskConical, HardHat, Snowflake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLangNavigate } from '../lib/i18n-utils';

const INDUSTRIES = [
  { slug: 'e-commerce-retail',  descKey: 'ecommerceDesc',     label: 'E-commerce & Retail',   icon: ShoppingBag,     image: '/industria-ecommerce-retail.webp' },
  { slug: 'logistica-3pl',      descKey: 'logisticsDesc',     label: 'Logística 3PL',         icon: Truck,           image: '/industria-logistica-3pl.webp' },
  { slug: 'manufactura',        descKey: 'manufacturingDesc', label: 'Manufactura Industrial', icon: Cog,             image: '/productos-delie/industrias/manufactura.webp' },
  { slug: 'alimentos-bebidas',  descKey: 'foodDesc',          label: 'Alimentos & Bebidas',   icon: UtensilsCrossed, image: '/productos-delie/industrias/alimentos-bebidas.webp' },
  { slug: 'farmaceutica',       descKey: 'pharmaDesc',        label: 'Farmacéutica',          icon: FlaskConical,    image: '/productos-delie/industrias/farmaceutica.webp' },
  { slug: 'mineria-oil-gas',    descKey: 'miningDesc',        label: 'Minería & Oil & Gas',   icon: HardHat,         image: '/productos-delie/industrias/mineria.webp' },
  { slug: 'cadena-frio',        descKey: 'coldDesc',          label: 'Cadena de Frío',        icon: Snowflake,       image: '/productos-delie/industrias/cadena-frio.webp' },
];

export const IndustriasPreview = () => {
  const { t } = useTranslation();
  const langNavigate = useLangNavigate();

  return (
    <section className="relative py-24 px-6 z-20 bg-slate-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">
            {t('industries.tag')}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              {t('industries.h2_a')}{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
              >
                {t('industries.h2_b')}
              </span>
            </h2>
            <button
              onClick={() => langNavigate('/industrias')}
              style={{ outline: 'none' }}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors group"
            >
              {t('industries.viewAll')}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.button
              key={ind.slug}
              onClick={() => langNavigate(`/industrias/${ind.slug}`)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              style={{ outline: 'none' }}
              className="relative text-left rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 group bg-white"
            >
              <div className="h-36 overflow-hidden bg-gray-100 relative">
                <img loading="lazy"
                  src={ind.image}
                  alt={t(`industries.labels.${ind.descKey.replace('Desc', '')}`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(ev) => { ev.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent" />
                <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <ind.icon size={14} className="text-cyan-300" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-gray-900 font-bold text-sm leading-tight mb-1">{t(`industries.labels.${ind.descKey.replace('Desc', '')}`)}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t(`industries.items.${ind.descKey}`)}</p>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-cyan-500 font-semibold group-hover:gap-2 transition-all">
                  {t('industries.viewSolutions')} <ArrowRight size={10} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

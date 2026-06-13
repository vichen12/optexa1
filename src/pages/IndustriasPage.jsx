import { useEffect } from 'react';
import { SeoHead } from '../lib/SeoHead';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { ArrowRight, ShoppingBag, Truck, Cog, UtensilsCrossed, FlaskConical, HardHat, Snowflake, Zap, Shield, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLangNavigate } from '../lib/i18n-utils';

export const INDUSTRIES = [
  { slug: 'e-commerce-retail',  icon: ShoppingBag,     image: '/industria-ecommerce-retail.webp',                      stats: [{ v: '3x', l: 'Picking' }, { v: '99.9%', l: 'Exactitud' }, { v: '-60%', l: 'Labor' }] },
  { slug: 'logistica-3pl',      icon: Truck,           image: '/industria-logistica-3pl.webp',                          stats: [{ v: '40%', l: 'Menos espacio' }, { v: '5x', l: 'Densidad' }, { v: '24/7', l: 'Operación' }] },
  { slug: 'manufactura',        icon: Cog,             image: '/productos-delie/industrias/manufactura.webp',           stats: [{ v: '-35%', l: 'Búsqueda' }, { v: '100%', l: 'Trazabilidad' }, { v: '+20%', l: 'OEE' }] },
  { slug: 'alimentos-bebidas',  icon: UtensilsCrossed, image: '/productos-delie/industrias/alimentos-bebidas.webp',     stats: [{ v: 'FIFO', l: 'Garantizado' }, { v: '100%', l: 'Trazabilidad' }, { v: 'GS1', l: 'Compatible' }] },
  { slug: 'farmaceutica',       icon: FlaskConical,    image: '/productos-delie/industrias/farmaceutica.webp',          stats: [{ v: 'GMP', l: 'Compliant' }, { v: 'FEFO', l: 'Automático' }, { v: '21 CFR', l: 'Compatible' }] },
  { slug: 'mineria-oil-gas',    icon: HardHat,         image: '/productos-delie/industrias/mineria.webp',               stats: [{ v: '0', l: 'Errores' }, { v: '-30%', l: 'Stock' }, { v: '24/7', l: 'Disponibilidad' }] },
  { slug: 'cadena-frio',        icon: Snowflake,       image: '/productos-delie/industrias/cadena-frio.webp',           stats: [{ v: '-30°C', l: 'Temp. mín.' }, { v: '0', l: 'Personal exp.' }, { v: '+50%', l: 'Uso cámara' }] },
];

const PILLAR_ICONS = [Zap, Shield, TrendingUp];

export const IndustriasPage = () => {
  const { t } = useTranslation();
  const langNavigate = useLangNavigate();
  const ns = 'pages.industrias';

  const pillars = t(`${ns}.pillars`, { returnObjects: true });
  const industriesList = t(`${ns}.industriesList`, { returnObjects: true });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SeoHead
        title={t(`${ns}.metaTitle`)}
        description={t(`${ns}.metaDesc`)}
        basePath={'/industrias'}
      />
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-90 flex items-end overflow-hidden">
        <img src="/industrias-banner.webp" alt="Industrias STOKA — automatización ASRS por sector"
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">{t(`${ns}.heroTag`)}</p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              {t(`${ns}.heroH1_a`)}<br /><span className="text-cyan-400">{t(`${ns}.heroH1_b`)}</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              {t(`${ns}.heroSub`)}
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { value: '7',      label: t(`${ns}.heroStats.industries`) },
                { value: '+1.000', label: t(`${ns}.heroStats.projects`) },
                { value: '24/7',   label: t(`${ns}.heroStats.operation`) },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-black text-white italic">{s.value}</span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* PILARES */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
          {Array.isArray(pillars) && pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-sm mb-1">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-2">{t(`${ns}.sectorTag`)}</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">{t(`${ns}.sectorH2`)}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => {
              const info = industriesList?.[ind.slug] || {};
              return (
                <motion.button
                  key={ind.slug}
                  onClick={() => langNavigate(`/industrias/${ind.slug}`)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ outline: 'none' }}
                  className="relative text-left rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-52 relative overflow-hidden">
                    <img src={ind.image} alt={info.tagline || ind.slug}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <ind.icon size={16} className="text-cyan-400" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={16} className="text-cyan-400" />
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex gap-3">
                      {ind.stats.map((s, j) => (
                        <div key={j}>
                          <p className="text-cyan-400 font-black text-sm leading-none">{s.v}</p>
                          <p className="text-gray-400 text-[10px]">{s.l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 border-t-0 rounded-b-2xl px-5 py-4 group-hover:border-cyan-300 transition-colors">
                    <h3 className="text-gray-900 font-black text-sm uppercase tracking-tight mb-1">{info.tagline}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{info.desc}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">{t(`${ns}.ctaTag`)}</p>
          <h2 className="text-white text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4">
            {t(`${ns}.ctaH2_a`)} <span className="text-cyan-400">{t(`${ns}.ctaH2_b`)}</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">{t(`${ns}.ctaSub`)}</p>
          <button onClick={() => langNavigate('/contacto')} style={{ outline: 'none' }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
            {t(`${ns}.ctaBtn`)} <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

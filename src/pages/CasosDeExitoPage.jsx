import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Factory, Pill, Snowflake, FlaskConical, Cog, Shield, Thermometer, Building2, UtensilsCrossed,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { LangLink } from '../lib/i18n-utils';
import { SeoHead } from '../lib/SeoHead';

const CASO_ICONS = {
  'alfombras-tailandia': Factory,
  'licores-china': UtensilsCrossed,
  'farmaceutica-tcm': Pill,
  'farmaceutica-temperatura': Thermometer,
  'quimica-sulfato': FlaskConical,
  'quimica-peligrosos': Shield,
  'titanio': Cog,
  'lubricantes': Factory,
  'manufactura-gran-escala': Building2,
};

function CasoCard({ caso, t }) {
  const [open, setOpen] = useState(false);
  const Icon = CASO_ICONS[caso.id] || Factory;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-sm transition-all"
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 bg-cyan-50 border border-cyan-200 rounded-xl flex items-center justify-center shrink-0">
              <Icon size={16} className="text-cyan-500" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest leading-tight">{caso.industria}</p>
              <p className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                <MapPin size={10} className="shrink-0" />{caso.ubicacion}
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-base font-black text-gray-900 mb-1 leading-tight">{caso.titulo}</h3>
        <p className="text-xs text-gray-400 font-medium mb-3">{caso.empresa}</p>
        <p className="text-[11px] text-gray-400 font-mono mb-4">{caso.sistema}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{caso.resumen}</p>

        <div className="grid grid-cols-3 gap-2 mb-5">
          {caso.metricas.map((m, j) => (
            <div key={j} className="bg-white border border-gray-200 rounded-xl px-3 py-3 text-center">
              <p className="text-sm font-black text-gray-900 leading-tight mb-0.5">{m.val}</p>
              <p className="text-[10px] text-gray-400 leading-tight">{m.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {caso.tecnologias.map((tech, j) => (
            <span key={j} className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1 bg-white">
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-xs font-bold text-cyan-600 hover:text-cyan-500 transition-colors"
        >
          <span>{open ? t('pages.casosDeExito.hideRelevance') : t('pages.casosDeExito.showRelevance')}</span>
          <ChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="px-6 md:px-8 pb-6 pt-3 border-t border-gray-200 bg-cyan-50/50">
          <p className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest mb-2">{t('pages.casosDeExito.relevanceLabel')}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{caso.relevancia}</p>
        </div>
      )}
    </motion.article>
  );
}

export const CasosDeExitoPage = () => {
  const { t } = useTranslation();
  const ns = 'pages.casosDeExito';
  const canonical = 'https://www.stokagroup.com/casos-de-exito';

  const stats = t(`${ns}.stats`, { returnObjects: true });
  const casos = t(`${ns}.casos`, { returnObjects: true });
  const trustItems = t(`${ns}.trustItems`, { returnObjects: true });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t(`${ns}.breadcrumbHome`), "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": t(`${ns}.breadcrumb`), "item": canonical },
    ],
  };

  return (
    <div className="min-h-screen text-gray-900">
      <SeoHead
        title={t('pages.casosDeExito.metaTitle')}
        description={t('pages.casosDeExito.metaDesc')}
      />
      <Helmet>
                                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-slate-950 pt-36 pb-20 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <LangLink to="/" className="hover:text-cyan-400 transition-colors">{t(`${ns}.breadcrumbHome`)}</LangLink>
              <span>/</span>
              <span className="text-gray-300">{t(`${ns}.breadcrumb`)}</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-5">
              {t(`${ns}.heroTag`)}
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
              {t(`${ns}.heroH1_a`)}<br />
              <span className="text-cyan-400">{t(`${ns}.heroH1_b`)}</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-10">
              {t(`${ns}.heroSub`)}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Array.isArray(stats) && stats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-center">
                  <p className="text-2xl font-black text-cyan-400 leading-none mb-1">{s.num}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Casos */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.portfolioTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">
            {t(`${ns}.portfolioH2`)}
          </h2>
          <div className="space-y-5">
            {Array.isArray(casos) && casos.map((caso) => (
              <CasoCard key={caso.id} caso={caso} t={t} />
            ))}
          </div>
          <p className="text-gray-400 text-[11px] mt-6 leading-relaxed">
            {t(`${ns}.portfolioNote`)}
          </p>
        </div>
      </section>

      {/* Por qué confiar */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.trustTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{t(`${ns}.trustH2`)}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {Array.isArray(trustItems) && trustItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6">
                <CheckCircle size={18} className="text-cyan-500 mb-4" />
                <h3 className="font-black text-gray-900 text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4">{t(`${ns}.ctaTag`)}</p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-5">
            {t(`${ns}.ctaH2_a`)}<br />
            <span className="text-cyan-500">{t(`${ns}.ctaH2_b`)}</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {t(`${ns}.ctaSub`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LangLink to="/contacto"
              className="flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-black text-sm uppercase tracking-widest rounded-xl transition-colors shadow-[0_4px_20px_rgba(6,182,212,0.25)]">
              {t(`${ns}.ctaBtnPrimary`)} <ArrowRight size={14} />
            </LangLink>
            <LangLink to="/catalogo"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              {t(`${ns}.ctaBtnSecondary`)}
            </LangLink>
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

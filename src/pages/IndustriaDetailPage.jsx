import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { INDUSTRIES } from './IndustriasPage';
import { ArrowRight, ArrowLeft, CheckCircle, X, ChevronRight } from 'lucide-react';
import { LangLink, useLangNavigate } from '../lib/i18n-utils';
import { SeoHead } from '../lib/SeoHead';

/* Solo datos NO traducibles, resueltos por índice contra el i18n
   (pages.industriaDetail.data.<slug>): valores de stats y URLs de producto.
   Todo el texto vive en i18n con traducción real es/en/zh. */
const INDUSTRY_MEDIA = {
  'e-commerce-retail': {
    statValues: ['3x', '99.9%', '-60%', '5x'],
    productUrls: ['/catalogo/asrs/shuttle', '/catalogo/asrs/miniload', '/catalogo/robots-manipulacion/picking', '/catalogo/software/wms'],
  },
  'logistica-3pl': {
    statValues: ['40%', '5x', '24/7', '-45%'],
    productUrls: ['/catalogo/asrs/miniload', '/catalogo/asrs/shuttle', '/catalogo/software/wms', '/catalogo/equipo-transporte/transportadores'],
  },
  manufactura: {
    statValues: ['-35%', '100%', '+20%', '-25%'],
    productUrls: ['/catalogo/asrs/unit-load', '/catalogo/asrs/miniload', '/catalogo/software/wcs', '/catalogo/equipo-transporte/transportadores'],
  },
  'alimentos-bebidas': {
    statValues: ['FIFO', '0', 'GS1', 'FSSC'],
    productUrls: ['/catalogo/asrs/camara-frio', '/catalogo/software/wms', '/catalogo/equipo-transporte/transportadores', '/catalogo/almacenamiento-vertical/vlm'],
  },
  farmaceutica: {
    statValues: ['GMP', 'FEFO', 'IQ/OQ/PQ', '100%'],
    productUrls: ['/catalogo/asrs/camara-frio', '/catalogo/asrs/miniload', '/catalogo/software/wms', '/catalogo/almacenamiento-vertical/vlm'],
  },
  'mineria-oil-gas': {
    statValues: ['0', '-30%', '24/7', '<2min'],
    productUrls: ['/catalogo/almacenamiento-vertical/vlm', '/catalogo/almacenamiento-vertical/carruseles', '/catalogo/software/wms', '/catalogo/asrs/unit-load'],
  },
  'cadena-frio': {
    statValues: ['-30°C', '0', '+50%', '-40%'],
    productUrls: ['/catalogo/asrs/camara-frio', '/catalogo/asrs/shuttle', '/catalogo/software/wms', '/catalogo/asrs/unit-load'],
  },
};


export const IndustriaDetailPage = () => {
  const { slug } = useParams();
  const langNavigate = useLangNavigate();
  const { t, i18n } = useTranslation();
  const media = INDUSTRY_MEDIA[slug];
  const ind = INDUSTRIES.find(i => i.slug === slug);

  /* Contenido traducido (es/en/zh) resuelto desde i18n, fusionado por índice
     con los datos no traducibles (valores de stats, URLs de producto). */
  const content = t(`pages.industriaDetail.data.${slug}`, { returnObjects: true });
  const c = (media && content && typeof content === 'object') ? content : null;

  const data = c ? {
    hero: c.hero,
    description: c.description,
    highlight: c.highlight,
    benefits: c.benefits,
    challenges: c.challenges,
    solutions: c.solutions,
    stats: c.stats.map((s, i) => ({ value: media.statValues[i], label: s.label })),
    products: c.products.map((p, i) => ({ name: p.name, url: media.productUrls[i] })),
  } : null;
  const faq = c ? c.faq : null;
  const seoText = c ? c.seo : null;

  /* Etiquetas visibles resueltas desde i18n (industriesList[slug]) */
  const industriesList = t('pages.industrias.industriesList', { returnObjects: true }) || {};
  const info = industriesList[slug] || {};
  const label = info.name || '';
  const tagline = info.tagline || '';
  const desc = info.desc || '';
  const metaTitle = c ? c.metaTitle : `Automatización ASRS para ${label} — STOKA`;
  const metaDesc = c ? c.metaDesc : desc;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!data || !ind) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400 mb-4">{t('pages.industriaDetail.notFound')}</p>
        <button onClick={() => langNavigate('/industrias')} className="text-cyan-500 underline">
          {t('pages.industriaDetail.viewAll')}
        </button>
      </div>
    </div>
  );

  const otherIndustries = INDUSTRIES.filter(i => i.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SeoHead
        title={metaTitle}
        description={metaDesc}
        basePath={`/industrias/${slug}`}
      />
      <Helmet>
                                        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": t('pages.industriaDetail.breadcrumbHome'), "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": t('pages.industriaDetail.breadcrumbIndustrias'), "item": "https://www.stokagroup.com/industrias" },
            { "@type": "ListItem", "position": 3, "name": label, "item": `https://www.stokagroup.com/industrias/${slug}` },
          ],
        })}</script>
        {faq && <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": i18n.language,
          "mainEntity": faq.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a },
          })),
        })}</script>}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": metaTitle,
          "description": metaDesc,
          "inLanguage": i18n.language,
          "provider": { "@id": "https://www.stokagroup.com/#organization" },
          "areaServed": [{ "@type": "Country", "name": "Argentina" }, { "@type": "Country", "name": "Chile" }],
          "serviceType": "Sistemas ASRS — Automatización de Almacenes por Industria",
          "url": `https://www.stokagroup.com/industrias/${slug}`,
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[55vh] min-h-90 flex items-end overflow-hidden">
        <img src={ind.image} alt={label}
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <button onClick={() => langNavigate('/industrias')} style={{ outline: 'none' }}
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-xs mb-5">
              <ArrowLeft size={13} /> {t('pages.industriaDetail.backToAll')}
            </button>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <ind.icon size={16} className="text-cyan-400" />
              </div>
              <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em]">{label}</p>
            </div>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black italic uppercase leading-[1.1] tracking-tight max-w-3xl">
              {data.hero}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="text-center py-4">
              <p className="text-3xl md:text-4xl font-black text-cyan-500 leading-none mb-1">{s.value}</p>
              <p className="text-gray-400 text-xs uppercase tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
              {t('pages.industriaDetail.challengeLabel')}
            </p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight">{tagline}</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* HIGHLIGHT BANNER */}
      <section className="bg-slate-900 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 text-xl md:text-2xl font-black italic leading-relaxed">{data.highlight}</p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
            {t('pages.industriaDetail.whyAutomate')}
          </p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">
            {t('pages.industriaDetail.keyBenefits')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mb-4" />
                <h3 className="font-black text-gray-900 text-sm mb-2">{b.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESAFÍOS VS SOLUCIONES */}
      <section className="py-14 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-8">
            {t('pages.industriaDetail.beforeAfter')}
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-red-500/10 border border-red-400/20 rounded-2xl p-7">
              <p className="text-[10px] font-mono text-red-400 tracking-[0.4em] uppercase mb-5">
                {t('pages.industriaDetail.withoutAutomation')}
              </p>
              <div className="space-y-3.5">
                {data.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} className="text-red-400" />
                    </div>
                    <p className="text-red-300 text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-7">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase mb-5">
                {t('pages.industriaDetail.withStoka')}
              </p>
              <div className="space-y-3.5">
                {data.solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={11} className="text-cyan-400" />
                    </div>
                    <p className="text-cyan-300 text-sm leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO EXTENDIDO */}
      {seoText && (
        <section className="py-14 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
              {t('pages.industriaDetail.automationContext')}
            </p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-6">
              {t('pages.industriaDetail.automationH2', { industry: label.toLowerCase() })}
            </h2>
            <div className="grid md:grid-cols-[3fr_1fr] gap-10 items-start">
              <div className="space-y-4">
                {seoText.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="space-y-3">
                {data.stats.map((s, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                    <p className="text-2xl font-black text-cyan-500 leading-none mb-0.5">{s.value}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PRODUCTOS RECOMENDADOS */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
            {t('pages.industriaDetail.recommendedTag')}
          </p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">
            {t('pages.industriaDetail.recommendedH2')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {data.products.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <LangLink to={p.url}
                  className="flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-cyan-300 hover:shadow-sm transition-all group w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                    <p className="text-gray-700 text-sm font-medium group-hover:text-cyan-600 transition-colors">{p.name}</p>
                  </div>
                  <ChevronRight size={15} className="text-gray-300 group-hover:text-cyan-500 transition-colors shrink-0" />
                </LangLink>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <LangLink to="/catalogo"
              className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-600 font-semibold transition-colors">
              {t('pages.industriaDetail.viewCatalog')} <ArrowRight size={14} />
            </LangLink>
            <LangLink to="/beneficios-fiscales"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors border border-gray-200 rounded-lg px-4 py-2 hover:border-cyan-300 bg-white">
              {t('pages.industriaDetail.taxBenefits')} →
            </LangLink>
            <LangLink to="/casos-de-exito"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors border border-gray-200 rounded-lg px-4 py-2 hover:border-cyan-300 bg-white">
              {t('pages.industriaDetail.successCases')} →
            </LangLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq && (
        <section className="py-14 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
              {t('pages.industriaDetail.faqTag')}
            </p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">
              {t('pages.industriaDetail.faqH2')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faq.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                  <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTRAS INDUSTRIAS */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
            {t('pages.industriaDetail.exploreMore')}
          </p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">
            {t('pages.industriaDetail.otherIndustries')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherIndustries.map((oi, i) => {
              const oiInfo = industriesList[oi.slug] || {};
              return (
              <motion.button key={oi.slug} onClick={() => langNavigate(`/industrias/${oi.slug}`)}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ outline: 'none' }}
                className="relative text-left rounded-2xl overflow-hidden group h-40 shadow-sm hover:shadow-md transition-all">
                <img src={oi.image} alt={oiInfo.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-black text-sm uppercase tracking-tight leading-tight">{oiInfo.name}</h3>
                  <p className="text-gray-300 text-xs mt-0.5 opacity-80">{oiInfo.tagline}</p>
                </div>
              </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">
            {t('pages.industriaDetail.ctaTag')}
          </p>
          <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-4">
            {t('pages.industriaDetail.ctaH2_a')}<br />
            <span className="text-cyan-400">{t('pages.industriaDetail.ctaH2_b')}</span>
          </h2>
          <p className="text-gray-400 text-base mb-8">{t('pages.industriaDetail.ctaSub')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LangLink to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              {t('pages.industriaDetail.ctaBtn')} <ArrowRight size={14} />
            </LangLink>
            <button onClick={() => langNavigate('/catalogo')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all">
              {t('pages.industriaDetail.viewCatalogBtn')}
            </button>
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Globe, TrendingDown, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { LangLink } from '../lib/i18n-utils';
import { SeoHead } from '../lib/SeoHead';

const WHY_ICONS = [Globe, Clock, TrendingDown];

const PRODUCT_HREFS = [
  '/catalogo/asrs/unit-load',
  '/catalogo/asrs/shuttle',
  '/catalogo/asrs/miniload',
  '/catalogo/asrs',
];

const PRODUCT_IMGS = [
  '/productos-delie/asrs/Estanterías para grúa apiladora de paletas/pallet-stacker-crane-racking598c7.webp',
  '/productos-delie/asrs/Estanterías robóticas con lanzadera para palés/pallet-shuttle-robot-racking13c59.webp',
  '/productos-delie/asrs/Estanterías Miniload/miniload-rackinga0ea0.webp',
  '/productos-delie/asrs/Transelevador Grúa + Estantería Robot Lanzadera/pallet-stacker-crane-shuttle-robot-racking89e90.webp',
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-900 font-semibold text-sm">{q}</span>
        <ChevronDown size={16} className={`text-gray-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

export const AlternativaEconomicaASRSPage = () => {
  const { t } = useTranslation();
  const ns = 'pages.alternativaEconomica';

  const heroStats = t(`${ns}.heroStats`, { returnObjects: true });
  const whyCosts = t(`${ns}.whyCosts`, { returnObjects: true });
  const comparison = t(`${ns}.comparison`, { returnObjects: true });
  const products = t(`${ns}.products`, { returnObjects: true });
  const tcoStats = t(`${ns}.tcoStats`, { returnObjects: true });
  const faq = t(`${ns}.faq`, { returnObjects: true });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const canonical = 'https://www.stokagroup.com/alternativa-economica-asrs';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t(`${ns}.breadcrumbHome`), item: 'https://www.stokagroup.com/' },
      { '@type': 'ListItem', position: 2, name: t(`${ns}.breadcrumb`), item: canonical },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Array.isArray(faq) ? faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })) : [],
  };

  return (
    <div className="min-h-screen text-gray-900">
      <SeoHead
        title={t('pages.alternativaEconomica.metaTitle')}
        description={t('pages.alternativaEconomica.metaDesc')}
      />
      <Helmet>
                                                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="bg-zinc-950 pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <LangLink to="/" className="hover:text-cyan-400 transition-colors">{t(`${ns}.breadcrumbHome`)}</LangLink>
              <span>/</span>
              <span className="text-slate-400">{t(`${ns}.breadcrumb`)}</span>
            </nav>
            <span className="inline-block text-[10px] font-mono text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-[0.3em] mb-6">
              {t(`${ns}.heroTag`)}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none text-white mb-6">
              {t(`${ns}.heroH1_a`)}<br />{t(`${ns}.heroH1_b`)}<br /><span className="text-cyan-400">{t(`${ns}.heroH1_c`)}</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              {t(`${ns}.heroSub`)}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {Array.isArray(heroStats) && heroStats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-center">
                  <p className="text-xl font-black text-cyan-400 leading-none mb-1">{s.n}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide leading-tight">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <LangLink to="/contacto"
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm">
                {t(`${ns}.heroBtnPrimary`)} <ArrowRight size={14} />
              </LangLink>
              <LangLink to="/catalogo"
                className="border border-slate-600 hover:border-cyan-400/40 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-colors text-sm">
                {t(`${ns}.heroBtnSecondary`)}
              </LangLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-linear-to-l from-zinc-950 via-transparent to-transparent z-10 pointer-events-none rounded-2xl" />
            <img
              src="/productos-delie/asrs/Transelevador Grúa + Estantería Robot Lanzadera/pallet-stacker-crane-shuttle-robot-racking89e90.webp"
              alt="Sistema ASRS DELIE transelevador y shuttle — implementación Argentina"
              className="w-full h-125 object-cover rounded-2xl"
              loading="eager"
            />
            <div className="absolute bottom-5 left-5 z-20 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
              <p className="text-white text-xs font-bold">Transelevador + Pallet Shuttle DELIE</p>
              <p className="text-slate-400 text-[10px]">Sistema combinado Unit-Load / alta densidad</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POR QUÉ CUESTA MÁS */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.whyTag`)}</p>
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
              {t(`${ns}.whyH2`)}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {Array.isArray(whyCosts) && whyCosts.map((c, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-cyan-500" />
                  </div>
                  <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">{t(`${ns}.comparisonTag`)}</p>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
              {t(`${ns}.comparisonH2`)}
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              {t(`${ns}.comparisonSub`)}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-2">
            <div />
            <div className="bg-cyan-400 rounded-xl px-4 py-3 flex items-center justify-center">
              <img loading="lazy" src="/image.webp" alt="DELIE" className="h-5 object-contain" />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">{t(`${ns}.comparisonColOther`)}</p>
            </div>
          </div>

          {Array.isArray(comparison) && comparison.map((row, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="grid grid-cols-3 gap-3 mb-2">
              <div className={`flex items-center px-4 py-3 rounded-xl ${i % 2 === 0 ? 'bg-white/5' : 'bg-white/3'}`}>
                <span className="text-slate-300 text-xs font-medium">{row.label}</span>
              </div>
              <div className={`flex items-center justify-center rounded-xl px-4 py-3 border ${i % 2 === 0 ? 'bg-cyan-400/10 border-cyan-400/20' : 'bg-cyan-400/5 border-cyan-400/10'}`}>
                <CheckCircle2 size={20} className="text-cyan-400" />
              </div>
              <div className={`flex items-center justify-center rounded-xl px-4 py-3 border ${i % 2 === 0 ? 'bg-white/5 border-white/10' : 'bg-white/3 border-white/5'}`}>
                {row.europeo === true
                  ? <CheckCircle2 size={20} className="text-green-400" />
                  : row.europeo === 'parcial'
                    ? <span className="text-yellow-400 text-[10px] font-bold">{t(`${ns}.comparisonPartial`)}</span>
                    : <XCircle size={20} className="text-red-400/70" />
                }
              </div>
            </motion.div>
          ))}

          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-slate-500 text-xs leading-relaxed">
              {t(`${ns}.comparisonNote`)}
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.productsTag`)}</p>
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
              {t(`${ns}.productsH2`)}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.isArray(products) && products.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <LangLink to={PRODUCT_HREFS[i]}
                  className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-md transition-all">
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <img
                      src={PRODUCT_IMGS[i]}
                      alt={`${p.name} — sistema ASRS DELIE Argentina`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-cyan-500 px-2 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{p.name}</h3>
                    <div className="flex flex-col gap-1">
                      {Array.isArray(p.specs) && p.specs.map((s, j) => (
                        <span key={j} className="text-[10px] text-gray-500 flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-cyan-400 rounded-full shrink-0" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </LangLink>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <LangLink to="/catalogo"
              className="inline-flex items-center gap-2 text-cyan-500 font-bold text-sm hover:text-cyan-400 transition-colors">
              {t(`${ns}.productsViewAll`)} <ArrowRight size={14} />
            </LangLink>
          </div>
        </div>
      </section>

      {/* TCO CALLOUT */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">{t(`${ns}.tcoTag`)}</p>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-tight text-white mb-5">
                {t(`${ns}.tcoH2_a`)}<br />{t(`${ns}.tcoH2_b`)}<br /><span className="text-cyan-400">{t(`${ns}.tcoH2_c`)}</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                {t(`${ns}.tcoSub`)}
              </p>
              <LangLink to="/beneficios-fiscales"
                className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold hover:text-cyan-300 transition-colors">
                {t(`${ns}.tcoLinkLabel`)} <ArrowRight size={14} />
              </LangLink>
            </motion.div>

            <div className="flex flex-col gap-4">
              {Array.isArray(tcoStats) && tcoStats.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-5 hover:border-cyan-400/30 transition-colors">
                  <div className="text-2xl font-black text-cyan-400 leading-none whitespace-nowrap">{s.num}</div>
                  <div className="w-px h-10 bg-white/10 shrink-0" />
                  <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3 text-center">{t(`${ns}.faqTag`)}</p>
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter text-center mb-10">
            {t(`${ns}.faqH2`)}
          </h2>
          <div className="space-y-3">
            {Array.isArray(faq) && faq.map((f, i) => <FAQItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

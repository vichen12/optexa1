import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, X, Globe, Thermometer, Layers, Cpu, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { LangLink, useLangNavigate } from '../lib/i18n-utils';
import { SeoHead } from '../lib/SeoHead';

const CAPACIDAD_ICONS = [Layers, Cpu, Globe, Thermometer];

export const AlternativaDeliePage = () => {
  const { t } = useTranslation();
  const langNavigate = useLangNavigate();
  const ns = 'pages.delie';

  const metrics = t(`${ns}.metrics`, { returnObjects: true });
  const capacidades = t(`${ns}.capacidades`, { returnObjects: true });
  const globalStats = t(`${ns}.globalStats`, { returnObjects: true });
  const whyItems = t(`${ns}.whyItems`, { returnObjects: true });
  const comparativa = t(`${ns}.comparativa`, { returnObjects: true });
  const faq = t(`${ns}.faq`, { returnObjects: true });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <SeoHead
        title={t('pages.alternativeDelie.metaTitle')}
        description={t('pages.alternativeDelie.metaDesc')}
      />
      <Helmet>
                                                <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": t(`${ns}.breadcrumbHome`), "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": t(`${ns}.breadcrumb`), "item": "https://www.stokagroup.com/delie-argentina" },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": Array.isArray(faq) ? faq.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a },
          })) : [],
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="bg-white pt-36 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <motion.div className="flex-1 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                <button onClick={() => langNavigate('/')} className="hover:text-cyan-500 transition-colors">{t(`${ns}.breadcrumbHome`)}</button>
                <span>/</span>
                <span className="text-gray-600">{t(`${ns}.breadcrumb`)}</span>
              </nav>

              <div className="w-12 h-1 bg-cyan-500 mb-6" />

              <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                {t(`${ns}.heroTag`)}
              </p>

              <h1 className="text-slate-900 text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                {t(`${ns}.heroH1_a`)}<br />
                <span className="text-cyan-500">{t(`${ns}.heroH1_b`)}</span>
              </h1>

              <p className="text-gray-500 text-base leading-relaxed mb-10">
                {t(`${ns}.heroSub`)}
              </p>

              <div className="w-full h-[1px] bg-gray-100 mb-8" />

              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {Array.isArray(metrics) && metrics.map((m, i) => (
                  <div key={i}>
                    <p className="text-2xl font-black italic text-slate-900 leading-none mb-1">{m.value}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-auto flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-full max-w-[360px] bg-slate-50 border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center aspect-[4/3]">
                <img loading="lazy"
                  src="/image.png"
                  alt="DELIE Logo"
                  className="w-full h-auto object-contain max-h-[140px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.capacidadesTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-2">{t(`${ns}.capacidadesH2`)}</h2>
          <p className="text-gray-400 text-sm mb-10">{t(`${ns}.capacidadesSub`)}</p>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {Array.isArray(capacidades) && capacidades.map((c, i) => {
              const Icon = CAPACIDAD_ICONS[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-cyan-500" />
                  </div>
                  <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-slate-900 rounded-2xl p-7">
            <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.35em] mb-3">{t(`${ns}.globalTag`)}</p>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold mb-4">
              <Globe size={14} />
              <span>{t(`${ns}.globalPresence`)}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.isArray(globalStats) && globalStats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-black text-cyan-400 leading-none mb-1">{s.value}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ CON SOPORTE LOCAL */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.whyTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">{t(`${ns}.whyH2`)}</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {Array.isArray(whyItems) && whyItems.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 text-sm mb-1">{r.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6">
            <p className="text-cyan-700 text-[10px] font-black uppercase tracking-[0.35em] mb-2">{t(`${ns}.tcoTag`)}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{t(`${ns}.tcoText`)}</p>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.comparativaTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">{t(`${ns}.comparativaH2`)}</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left font-black text-xs uppercase tracking-wide w-1/2">{t(`${ns}.comparativaColAspect`)}</th>
                  <th className="px-6 py-4 text-center font-black text-xs uppercase tracking-wide text-cyan-400">{t(`${ns}.comparativaColDelie`)}</th>
                  <th className="px-6 py-4 text-center font-black text-xs uppercase tracking-wide text-gray-400">{t(`${ns}.comparativaColOther`)}</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(comparativa) && comparativa.map((row, i) => (
                  <motion.tr key={i}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-semibold border-r border-gray-100">{row.aspecto}</td>
                    <td className="px-6 py-4 text-center">
                      {row.delie === true
                        ? <CheckCircle size={18} className="text-cyan-500 mx-auto" />
                        : row.delie === false
                          ? <X size={18} className="text-red-400 mx-auto" />
                          : <span className="font-bold text-cyan-600 text-xs">{row.delie}</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.otro === true
                        ? <CheckCircle size={18} className="text-gray-400 mx-auto" />
                        : row.otro === false
                          ? <X size={18} className="text-red-400 mx-auto" />
                          : <span className="text-gray-500 text-xs">{row.otro}</span>}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-4">{t(`${ns}.comparativaNote`)}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.faqTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{t(`${ns}.faqH2`)}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Array.isArray(faq) && faq.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

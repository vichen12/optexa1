import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Search, FileText, Wrench, HeadphonesIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { LangLink } from '../lib/i18n-utils';
import { SeoHead } from '../lib/SeoHead';

const METODOLOGIA_ICONS = [Search, FileText, Wrench, HeadphonesIcon];

export const SolucionesPage = () => {
  const { t } = useTranslation();
  const ns = 'pages.soluciones';

  const faq = t(`${ns}.faq`, { returnObjects: true });
  const problemas = t(`${ns}.problemas`, { returnObjects: true });
  const metodologia = t(`${ns}.metodologia`, { returnObjects: true });
  const casosUso = t(`${ns}.casosUso`, { returnObjects: true });
  const whyItems = t(`${ns}.whyItems`, { returnObjects: true });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SeoHead
        title={t('pages.soluciones.metaTitle')}
        description={t('pages.soluciones.metaDesc')}
      />
      <Helmet>
                                                <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": t(`${ns}.breadcrumbHome`), "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": t(`${ns}.breadcrumb`), "item": "https://www.stokagroup.com/soluciones" },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": Array.isArray(faq) ? faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })) : [],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Soluciones ASRS Llave en Mano — STOKA Argentina",
          "description": "Diseño, suministro, instalación e integración de sistemas ASRS llave en mano en Argentina y Chile.",
          "provider": { "@id": "https://www.stokagroup.com/#organization" },
          "areaServed": [{ "@type": "Country", "name": "Argentina" }, { "@type": "Country", "name": "Chile" }],
          "serviceType": "Integración ASRS Llave en Mano",
          "url": "https://www.stokagroup.com/soluciones"
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
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
            <div className="flex flex-wrap gap-4">
              <LangLink to="/contacto"
                className="flex items-center gap-2 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors shadow-[0_4px_20px_rgba(6,182,212,0.35)]">
                {t(`${ns}.heroBtnPrimary`)} <ArrowRight size={14} />
              </LangLink>
              <LangLink to="/catalogo"
                className="flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 hover:bg-white/15 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors">
                {t(`${ns}.heroBtnSecondary`)}
              </LangLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.problemasTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">{t(`${ns}.problemasH2`)}</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {Array.isArray(problemas) && problemas.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                <span className="text-[10px] font-black text-gray-300 font-mono">//{p.num}</span>
                <h3 className="font-black text-gray-900 text-base uppercase tracking-tight mt-2 mb-2">{p.problema}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.descripcion}</p>
                <div className="flex items-start gap-2 bg-cyan-50 border border-cyan-100 rounded-xl p-3 mb-4">
                  <CheckCircle size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-xs leading-relaxed">{p.solucion}</p>
                </div>
                <LangLink to={p.link} className="text-xs font-bold text-cyan-600 hover:text-cyan-500 flex items-center gap-1 transition-colors">
                  {p.linkLabel} <ArrowRight size={12} />
                </LangLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.metodologiaTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">{t(`${ns}.metodologiaH2`)}</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {Array.isArray(metodologia) && metodologia.map((m, i) => {
              const Icon = METODOLOGIA_ICONS[i];
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-300 font-mono mb-1">{t(`${ns}.stepLabel`)} {m.paso}</p>
                      <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{m.titulo}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 bg-slate-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.35em] mb-1">{t(`${ns}.ctaTag`)}</p>
              <p className="text-white font-black text-lg leading-tight">{t(`${ns}.ctaBannerTitle`)}</p>
              <p className="text-gray-400 text-xs mt-1">{t(`${ns}.ctaBannerSub`)}</p>
            </div>
            <LangLink to="/contacto"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors shrink-0">
              {t(`${ns}.ctaBannerBtn`)} <ArrowRight size={13} />
            </LangLink>
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.casosTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-3">{t(`${ns}.casosH2`)}</h2>
          <p className="text-gray-400 text-sm mb-10">{t(`${ns}.casosSub`)}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(casosUso) && casosUso.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 transition-all">
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{c.operacion}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {Array.isArray(c.soluciones) && c.soluciones.map((s) => (
                    <span key={s} className="text-[10px] font-bold text-cyan-600 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full">{s}</span>
                  ))}
                </div>
                <LangLink to={c.industria} className="text-[11px] font-bold text-gray-400 hover:text-cyan-500 flex items-center gap-1 transition-colors">
                  {t(`${ns}.casosViewSolution`)} <ArrowRight size={11} />
                </LangLink>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <LangLink to="/industrias" className="text-sm font-bold text-cyan-600 hover:text-cyan-500 flex items-center gap-1.5 justify-center transition-colors">
              {t(`${ns}.casosViewAll`)} <ArrowRight size={14} />
            </LangLink>
          </div>
        </div>
      </section>

      {/* POR QUÉ STOKA */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.whyTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">{t(`${ns}.whyH2`)}</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {Array.isArray(whyItems) && whyItems.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
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

          <div className="flex flex-wrap gap-3">
            <LangLink to="/como-trabajamos" className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
              {t(`${ns}.linkHowWeWork`)}
            </LangLink>
            <LangLink to="/casos-de-exito" className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
              {t(`${ns}.linkCases`)}
            </LangLink>
            <LangLink to="/catalogo" className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
              {t(`${ns}.linkCatalog`)}
            </LangLink>
            <LangLink to="/beneficios-fiscales" className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
              {t(`${ns}.linkFiscal`)}
            </LangLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3 text-center">{t(`${ns}.faqTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter text-center mb-10">{t(`${ns}.faqH2`)}</h2>
          <div className="space-y-3">
            {Array.isArray(faq) && faq.map((f, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                  <span className="text-gray-900 font-semibold text-sm">{f.q}</span>
                  <span className="text-gray-400 text-lg font-light shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {f.a}
                </div>
              </details>
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

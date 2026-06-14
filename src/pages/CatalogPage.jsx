import { useEffect } from 'react';
import { SeoHead } from '../lib/SeoHead';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { ProductCatalog } from '../components/ProductCatalog';
import { WppFloat } from '../components/WppFloat';
import { useTranslation } from 'react-i18next';

export const CatalogPage = () => {
  const { t } = useTranslation();
  const ns = 'pages.catalog';
  const faq = t(`${ns}.faq`, { returnObjects: true });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SeoHead
        title={t(`${ns}.metaTitle`)}
        description={t(`${ns}.metaDesc`)}
        basePath={'/catalogo'}
      />
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-90 flex items-end overflow-hidden">
        <img
          src="/catalogo-banner-asrs.webp"
          alt="Almacén automatizado STOKA"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">
              {t(`${ns}.heroTag`)}
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              {t(`${ns}.heroH1_a`)}<br />
              <span className="text-cyan-400">{t(`${ns}.heroH1_b`)}</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              {t(`${ns}.heroSub`)}
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { value: '5',      label: t(`${ns}.stats.categories`) },
                { value: '+60',    label: t(`${ns}.stats.products`) },
                { value: '+1.000', label: t(`${ns}.stats.projects`) },
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

      {/* CATALOG */}
      <ProductCatalog />

      {/* Vocabulario / contexto SEO */}
      <section className="bg-gray-50 py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-500 text-sm leading-relaxed text-center">{t(`${ns}.vocabPara`)}</p>
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

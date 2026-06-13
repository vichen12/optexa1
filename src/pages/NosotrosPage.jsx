import { useEffect } from 'react';
import { SeoHead } from '../lib/SeoHead';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { Globe, Target, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LangLink } from '../lib/i18n-utils';

const VALUE_ICONS = [Target, Shield, Zap, Globe];

export const NosotrosPage = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const ns = 'pages.nosotros';
  const values = t(`${ns}.values`, { returnObjects: true });
  const requirements = t(`${ns}.requirements`, { returnObjects: true });

  const DELIE_STATS = [
    { value: '2003',   label: t(`${ns}.delieStats.founded`) },
    { value: '+1.000', label: t(`${ns}.delieStats.installations`) },
    { value: '+30',    label: t(`${ns}.delieStats.countries`) },
    { value: '40m',    label: t(`${ns}.delieStats.height`) },
  ];

  return (
    <div className="min-h-screen text-gray-900">
      <SeoHead
        title={t(`${ns}.metaTitle`)}
        description={t(`${ns}.metaDesc`)}
        basePath={'/nosotros'}
      />
      <Navbar />

      {/* HERO */}
      <section className="bg-white pt-40 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <LangLink to="/" className="hover:text-cyan-500 transition-colors">{t('pages.breadcrumb.home')}</LangLink>
              <span>/</span>
              <span className="text-gray-600">{t(`${ns}.breadcrumb`)}</span>
            </nav>
            <div className="w-12 h-1 bg-cyan-500 mb-8 rounded-full" />
            <p className="text-gray-400 text-[11px] font-black uppercase tracking-[0.4em] mb-5">{t(`${ns}.whoWeAre`)}</p>
            <h1 className="text-gray-900 text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8">
              {t(`${ns}.h1_a`)}<br />
              <span className="text-cyan-500">{t(`${ns}.h1_b`)}</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl leading-relaxed mb-12">
              {t(`${ns}.tagline`)}
            </p>
            <div className="flex flex-wrap gap-10 border-t border-gray-100 pt-10">
              {[
                { value: '+1.000', label: t(`${ns}.stats.installations`) },
                { value: '+30',    label: t(`${ns}.stats.countries`) },
                { value: '100%',   label: t(`${ns}.stats.local`) },
                { value: '2003',   label: t(`${ns}.stats.founded`) },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-gray-900 text-3xl font-black italic leading-none mb-1">{s.value}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex flex-col items-center gap-4 mt-8">
            <div className="border border-gray-100 rounded-2xl px-10 py-8 bg-gray-50 flex flex-col items-center gap-4 shadow-sm">
              <img loading="lazy" src="/image.png" alt="DELIE — Fabricante de sistemas ASRS" className="w-56 object-contain" />
              <div className="w-8 h-px bg-gray-300" />
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em] text-center leading-relaxed">
                {t(`${ns}.officialRep`)}<br />{t(`${ns}.officialRepCountry`)}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="bg-slate-900 py-20 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-12">
            <div>
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">{t(`${ns}.missionTag`)}</p>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">
                {t(`${ns}.missionH2`)}
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{t(`${ns}.missionPara`)}</p>
          </div>

          <blockquote className="border-l-4 border-cyan-500 pl-6 py-1 mb-12">
            <p className="text-white text-lg italic leading-relaxed">{t(`${ns}.quote`)}</p>
          </blockquote>

          <div className="mb-10">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-5">{t(`${ns}.requirementsTag`)}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {Array.isArray(requirements) && requirements.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-400/30 transition-colors">
                  <p className="text-white text-sm font-bold mb-1">{r.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.35em] mb-3">{t(`${ns}.delieTag`)}</p>
            <p className="text-gray-300 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t(`${ns}.deliePara`) }} />
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.valuesTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">{t(`${ns}.valuesH2`)}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {Array.isArray(values) && values.map((v, i) => {
              const Icon = VALUE_ICONS[i] || Globe;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-cyan-500" />
                  </div>
                  <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIE */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img loading="lazy" src="/image.png" alt="DELIE — Fabricante de sistemas ASRS" className="h-10 object-contain mb-5" />
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">{t(`${ns}.ourManufacturer`)}</p>
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-tight text-white mb-5">
              {t(`${ns}.delieH2_a`)}<br /><span className="text-cyan-400">{t(`${ns}.delieH2_b`)}</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">{t(`${ns}.deliePara2`)}</p>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
              <Globe size={14} />
              <span>{t(`${ns}.delieRegions`)}</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {DELIE_STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-colors">
                <p className="text-3xl font-black text-cyan-400 leading-none mb-2">{s.value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">{s.label}</p>
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

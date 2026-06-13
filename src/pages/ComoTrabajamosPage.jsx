import { useEffect } from 'react';
import { SeoHead } from '../lib/SeoHead';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { Search, FileText, Cpu, Wrench, Rocket, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LangLink, useLangNavigate } from '../lib/i18n-utils';

const STEP_ICONS = [Search, FileText, Cpu, Wrench, Rocket, HeadphonesIcon];

const isDark = (i) => i % 2 !== 0;

export const ComoTrabajamosPage = () => {
  const { t } = useTranslation();
  const langNavigate = useLangNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const ns = 'pages.howWeWork';
  const steps = t(`${ns}.steps`, { returnObjects: true });

  return (
    <div className="min-h-screen text-gray-900">
      <SeoHead
        title={t(`${ns}.metaTitle`)}
        description={t(`${ns}.metaDesc`)}
        basePath={'/como-trabajamos'}
      />
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-90 flex items-end overflow-hidden">
        <img
          src="/gxo-2023.webp"
          alt="Almacén automatizado STOKA"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <LangLink to="/" className="hover:text-cyan-400 transition-colors">{t('pages.breadcrumb.home')}</LangLink>
              <span>/</span>
              <span className="text-slate-400">{t(`${ns}.breadcrumb`)}</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-4">
              {t(`${ns}.methodologyTag`)}
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[1.05] mb-5">
              {t(`${ns}.h1_a`)}<br />
              <span className="text-cyan-400">{t(`${ns}.h1_b`)}</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              {t(`${ns}.intro`)}
            </p>
            <div className="flex flex-wrap gap-3">
              {Array.isArray(steps) && steps.map((s, i) => {
                const Icon = STEP_ICONS[i];
                return (
                  <span key={i} className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                    <Icon size={12} className="text-cyan-400" />
                    {s.tag}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* STEPS */}
      {Array.isArray(steps) && steps.map((s, i) => {
        const dark = isDark(i);
        const Icon = STEP_ICONS[i];
        return (
          <section key={i} className={`py-20 px-6 border-b ${dark ? 'bg-slate-900 border-white/5' : 'bg-white border-gray-100'}`}>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className="grid md:grid-cols-[200px_1fr] gap-10 items-start"
              >
                <div className="flex flex-col gap-4">
                  <span className={`text-[88px] font-black italic leading-none select-none ${dark ? 'text-white/8' : 'text-gray-100'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${dark ? 'bg-cyan-400/10 border-cyan-400/20' : 'bg-cyan-50 border-cyan-200'}`}>
                    <Icon size={24} className={dark ? 'text-cyan-400' : 'text-cyan-500'} />
                  </div>
                  <div>
                    <span className={`inline-block text-[11px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full ${dark ? 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-600'}`}>
                      {s.tag}
                    </span>
                    <p className={`text-xs mt-2 font-mono ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{s.subtitle}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-5 ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {s.title}
                  </h2>
                  <p className={`text-base leading-relaxed mb-8 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {s.detail}
                  </p>
                  <div className={`border-t pt-6 space-y-3 ${dark ? 'border-white/8' : 'border-gray-100'}`}>
                    {Array.isArray(s.logs) && s.logs.map((log, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle size={15} className={`mt-0.5 shrink-0 ${dark ? 'text-cyan-400' : 'text-cyan-500'}`} />
                        <p className={`text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{log}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4">{t(`${ns}.readyTag`)}</p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-5">
            {t(`${ns}.readyH2_a`)}<br />
            <span className="text-cyan-500">{t(`${ns}.readyH2_b`)}</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {t(`${ns}.readyPara`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => langNavigate('/contacto')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              {t(`${ns}.btn1`)} <ArrowRight size={14} />
            </button>
            <button onClick={() => langNavigate('/catalogo')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              {t(`${ns}.btn2`)}
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

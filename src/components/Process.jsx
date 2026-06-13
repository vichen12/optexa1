import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Search, FileText, Cpu, Wrench, Rocket, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { useLangNavigate } from '../lib/i18n-utils';

const ICONS = [Search, FileText, Cpu, Wrench, Rocket, HeadphonesIcon];

export const Process = () => {
  const { t } = useTranslation();
  const langNavigate = useLangNavigate();

  const STEPS = [
    { tag: '01', icon: ICONS[0], title: t('process.steps.s1title'), sub: t('process.steps.s1sub') },
    { tag: '02', icon: ICONS[1], title: t('process.steps.s2title'), sub: t('process.steps.s2sub') },
    { tag: '03', icon: ICONS[2], title: t('process.steps.s3title'), sub: t('process.steps.s3sub') },
    { tag: '04', icon: ICONS[3], title: t('process.steps.s4title'), sub: t('process.steps.s4sub') },
    { tag: '05', icon: ICONS[4], title: t('process.steps.s5title'), sub: t('process.steps.s5sub') },
    { tag: '06', icon: ICONS[5], title: t('process.steps.s6title'), sub: t('process.steps.s6sub') },
  ];

  return (
    <section id="proceso" className="py-24 px-6 bg-slate-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">{t('process.tag')}</p>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              {t('process.h2_a')}{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
              >
                {t('process.h2_b')}
              </span>
            </h2>
          </div>
          <button
            onClick={() => langNavigate('/como-trabajamos')}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors group shrink-0"
          >
            {t('process.viewFull')}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute z-0 bg-white/10"
            style={{ top: '28px', left: 'calc(100% / 12)', right: 'calc(100% / 12)', height: '1px' }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center z-10"
              >
                <div className="relative w-14 h-14 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center mb-4">
                  <step.icon size={20} className="text-cyan-400" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cyan-500 text-white text-[9px] font-black flex items-center justify-center leading-none">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-white font-black text-xs uppercase tracking-tight leading-tight mb-1">
                  {step.title}
                </h3>
                <p className="text-white/35 text-[10px] leading-tight">{step.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => langNavigate('/como-trabajamos')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all"
          >
            {t('process.viewDetail')}
            <ArrowRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

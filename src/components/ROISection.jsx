import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, Layers3, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ICONS = [TrendingUp, Target, Layers3, Clock];
const VALUES = ['40%', '99.9%', '3x', '18–36'];

export const ROISection = () => {
  const { t } = useTranslation();

  const METRICS = [
    { icon: ICONS[0], value: VALUES[0], label: t('roi.metrics.costLabel'),     desc: t('roi.metrics.costDesc') },
    { icon: ICONS[1], value: VALUES[1], label: t('roi.metrics.accuracyLabel'), desc: t('roi.metrics.accuracyDesc') },
    { icon: ICONS[2], value: VALUES[2], label: t('roi.metrics.densityLabel'),  desc: t('roi.metrics.densityDesc') },
    { icon: ICONS[3], value: VALUES[3], label: t('roi.metrics.paybackLabel'),  desc: t('roi.metrics.paybackDesc') },
  ];

  return (
    <section className="relative py-24 px-6 z-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 text-center">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
            {t('roi.tag')}
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
            {t('roi.h2_a')}{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
            >
              {t('roi.h2_b')}
            </span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t('roi.sub')}
          </p>
        </div>

        {/* CONCRETE EXAMPLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10"
        >
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.4em] uppercase mb-6">{t('roi.exampleTag')}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">{t('roi.space')}</p>
              <div className="flex items-center justify-center gap-3">
                <div>
                  <p className="text-3xl font-black text-slate-300 line-through leading-none">10.000</p>
                  <p className="text-[11px] text-slate-400 mt-1">{t('roi.before')}</p>
                </div>
                <ArrowRight size={18} className="text-cyan-500 shrink-0" />
                <div>
                  <p className="text-3xl font-black text-slate-900 leading-none">1.500</p>
                  <p className="text-[11px] text-slate-500 mt-1">{t('roi.after')}</p>
                </div>
              </div>
              <div className="mt-4 inline-block px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full">
                <p className="text-[11px] font-bold text-cyan-600">{t('roi.spaceSaving')}</p>
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">{t('roi.rentSaving')}</p>
              <p className="text-4xl font-black text-slate-900 leading-none">USD 68.000</p>
              <p className="text-[11px] text-slate-400 mt-2">{t('roi.perMonth')}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full">
                <p className="text-[11px] font-bold text-emerald-600">USD 816.000 / {t('roi.perMonth').includes('año') ? 'año' : 'year'}</p>
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">{t('roi.payback')}</p>
              <p className="text-4xl font-black text-slate-900 leading-none">18–36</p>
              <p className="text-[11px] text-slate-400 mt-2">{t('roi.months')}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full">
                <p className="text-[11px] font-bold text-cyan-600">{t('roi.noExpand')}</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm"
            dangerouslySetInnerHTML={{ __html: t('roi.note') }}
          />
        </motion.div>

        {/* Metric cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto mb-4">
                <m.icon size={22} className="text-cyan-500" />
              </div>
              <p className="text-4xl font-black text-slate-900 leading-none mb-2">{m.value}</p>
              <p className="text-slate-700 font-bold text-sm uppercase tracking-tight mb-3">{m.label}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

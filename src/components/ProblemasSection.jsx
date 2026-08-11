import { motion } from 'framer-motion';
import { Building2, HardHat, Truck, Maximize2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LangLink } from '../lib/i18n-utils';

const ICONS = [Building2, HardHat, Truck, Maximize2];

export const ProblemasSection = () => {
  const { t } = useTranslation();

  const options = t('home.decision.options', { returnObjects: true });
  const list = Array.isArray(options) ? options : [];
  if (list.length === 0) return null;

  return (
    <section className="relative py-24 px-6 z-20 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">
            {t('home.decision.tag')}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-5">
            {t('home.decision.h2_a')}<br />
            <span className="text-cyan-400">{t('home.decision.h2_b')}</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            {t('home.decision.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {list.map((card, i) => {
            const Icon = ICONS[i] || Building2;
            const destacada = i === list.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={[
                  'group flex flex-col rounded-2xl border p-7 transition-all duration-300',
                  destacada
                    ? 'border-cyan-400/60 bg-cyan-400/[0.07] shadow-[0_0_32px_rgba(34,211,238,0.12)]'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/25',
                ].join(' ')}
              >
                <div className={[
                  'w-12 h-12 rounded-xl border flex items-center justify-center mb-6',
                  destacada ? 'bg-cyan-400/20 border-cyan-400/50' : 'bg-white/5 border-white/15',
                ].join(' ')}>
                  <Icon size={22} className={destacada ? 'text-cyan-300' : 'text-white/60'} />
                </div>
                <h3 className="text-white font-black text-base uppercase tracking-tight mb-2">{card.title}</h3>
                <p className={[
                  'text-sm font-bold mb-4',
                  destacada ? 'text-cyan-300' : 'text-white/70',
                ].join(' ')}>{card.cost}</p>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{card.body}</p>
                {card.note ? (
                  <p className="text-white/30 text-[11px] leading-snug mt-5 pt-4 border-t border-white/10">{card.note}</p>
                ) : null}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <p className="text-white/70 text-base leading-relaxed max-w-2xl">
            {t('home.decision.closing')}
          </p>
          <LangLink
            to="/recursos/roi-automatizacion"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 shrink-0 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors"
          >
            {t('home.decision.cta')} <ArrowRight size={14} />
          </LangLink>
        </div>
      </div>
    </section>
  );
};

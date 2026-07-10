import { motion } from 'framer-motion';
import { Layers3, Clock, CircleDollarSign, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LangLink } from '../lib/i18n-utils';

const ICONS = [Layers3, Clock, CircleDollarSign];

export const ProblemasSection = () => {
  const { t, i18n } = useTranslation();

  /* Solo español en esta fase. EN/ZH se suman en la réplica de idiomas
     (Sprint 4); hasta entonces esta sección no se muestra en /en ni /zh
     para no filtrar texto ES por el fallbackLng. */
  if (i18n.language !== 'es') return null;

  const cards = t('home.problemas.cards', { returnObjects: true });
  const list = Array.isArray(cards) ? cards : [];
  if (list.length === 0) return null;

  return (
    <section className="relative py-24 px-6 z-20 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">
            {t('home.problemas.tag')}
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-5">
            {t('home.problemas.h2')}
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            {t('home.problemas.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {list.map((card, i) => {
            const Icon = ICONS[i] || Layers3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-black text-lg uppercase tracking-tight mb-3">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{card.body}</p>
                <LangLink
                  to={card.to}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:gap-2.5 transition-all"
                >
                  {card.linkLabel} <ArrowRight size={13} />
                </LangLink>
              </motion.div>
            );
          })}
        </div>

        <p className="text-white/40 text-sm mt-8 max-w-3xl">
          ¿No sabés por dónde empezar? Entendé qué es un{' '}
          <LangLink to="/recursos/que-es-un-transelevador" className="font-semibold text-cyan-400 underline underline-offset-2 hover:text-cyan-300">transelevador</LangLink>{' '}
          y cómo automatiza tu depósito.
        </p>
      </div>
    </section>
  );
};

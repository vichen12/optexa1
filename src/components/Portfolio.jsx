import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export const Portfolio = () => {
  const [active, setActive] = useState(0);
  const { t, lang } = useLanguage();
  const s = t.services;
  const items = s.items;
  const ctaLabel = lang === 'zh' ? '咨询方案' : lang === 'en' ? 'Request proposal' : 'Consultar solución';

  return (
    <section id="soluciones" className="relative py-28 px-6 z-20 bg-transparent">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">{s.badge}</p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            {s.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {s.titleGrad}
            </span>
          </h2>
        </div>

        {/* TABS */}
        <div className="flex justify-center gap-2 mb-10">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all duration-200 ${
                active === i
                  ? i === 0
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400'
                    : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                  : 'bg-transparent border-white/8 text-white/35 hover:border-white/20 hover:text-white/60'
              }`}
            >
              {item.id} — {item.subtitle}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
              <div className="relative aspect-[4/3] group">
                <img
                  src={items[active].image}
                  alt={items[active].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/80 via-transparent to-transparent" />

                {/* Floating stat */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className={`text-4xl font-black leading-none ${active === 0 ? 'text-cyan-400' : 'text-emerald-400'}`}>
                      {items[active].specs[0].val}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{items[active].specs[0].label}</p>
                  </div>
                  <div className={`px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm border ${active === 0 ? 'border-cyan-500/30' : 'border-emerald-500/30'}`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${active === 0 ? 'text-cyan-400' : 'text-emerald-400'}`}>
                      {items[active].gain}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                {items[active].title}
              </h3>

              <p className="text-white/55 text-base leading-relaxed mb-8 font-light">
                {items[active].description}
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {items[active].specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/4 border border-white/6 rounded-xl px-4 py-3">
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${active === 0 ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
                    <div>
                      <p className="text-[9px] text-white/30 uppercase tracking-widest">{spec.label}</p>
                      <p className="text-sm font-bold text-white">{spec.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pain -> Gain */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-1.5 shrink-0" />
                  <p className="text-white/40 text-xs leading-relaxed">{items[active].pain}</p>
                </div>
                <div className={`flex items-start gap-3 p-4 rounded-xl ${active === 0 ? 'bg-cyan-500/5 border border-cyan-500/15' : 'bg-emerald-500/5 border border-emerald-500/15'}`}>
                  <CheckCircle size={14} className={`mt-0.5 shrink-0 ${active === 0 ? 'text-cyan-400' : 'text-emerald-400'}`} />
                  <p className={`text-sm font-bold italic leading-relaxed ${active === 0 ? 'text-cyan-300' : 'text-emerald-300'}`}>{items[active].gain}</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all group ${
                  active === 0
                    ? 'bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 hover:bg-cyan-500/20'
                    : 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20'
                }`}
              >
                {ctaLabel}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

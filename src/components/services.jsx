import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export const Services = () => {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section
      id="servicios"
      className="relative py-28 px-6 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">{s.badge}</p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            {s.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {s.titleGrad}
            </span>
          </h2>
        </div>

        {/* FEATURE ROWS */}
        <div className="flex flex-col gap-20">
          {s.items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
              >
                {/* IMAGEN */}
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
                  <div className="relative aspect-[4/3] group">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Badge sobre imagen */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                      <span className={`text-[10px] font-black uppercase tracking-widest text-${item.color}-400`}>
                        {item.id} — {item.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* TEXTO */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/55 text-base leading-relaxed mb-8 font-light">
                    {item.description}
                  </p>

                  {/* Specs como bullets */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/4 border border-white/6 rounded-xl px-4 py-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${item.color}-400 shrink-0`} />
                        <div>
                          <p className="text-[9px] text-white/30 uppercase tracking-widest">{spec.label}</p>
                          <p className="text-sm font-bold text-white">{spec.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Impacto */}
                  <div className={`flex items-start gap-3 p-4 rounded-xl bg-${item.color}-500/5 border border-${item.color}-500/15`}>
                    <CheckCircle size={16} className={`text-${item.color}-400 mt-0.5 shrink-0`} />
                    <p className={`text-sm font-bold text-${item.color}-300 italic leading-relaxed`}>{item.gain}</p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

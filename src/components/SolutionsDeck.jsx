import { motion } from "framer-motion";
import { Warehouse, BarChart3, CheckCircle } from "lucide-react";
import { useLanguage } from "../lib/i18n";

const CARD_META = [
  {
    icon: Warehouse,
    stat: "+400%",
    statLabel: { es: "más capacidad", en: "more capacity", zh: "容量提升" },
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: BarChart3,
    stat: "−65%",
    statLabel: { es: "errores de picking", en: "picking errors", zh: "拣货错误减少" },
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
];

export const SolutionsDeck = () => {
  const { t, lang } = useLanguage();
  const s = t.solutions;

  return (
    <section
      id="soluciones"
      className="relative py-28 px-6 z-20 bg-transparent"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">{s.badge}</p>
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
          {s.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {s.titleGrad}
          </span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {s.cards.map((card, index) => {
          const meta = CARD_META[index];
          const Icon = meta.icon;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.45 }}
              className="group bg-[#02040a]/80 border border-white/8 rounded-2xl overflow-hidden hover:border-white/16 transition-all duration-300 shadow-xl"
            >
              {/* Imagen superior */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={meta.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[40%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/60 to-transparent" />

                {/* Stat flotante sobre imagen */}
                <div className="absolute bottom-4 left-5 flex items-end gap-3">
                  <p className="text-4xl font-black text-white leading-none">{meta.stat}</p>
                  <p className="text-white/50 text-sm mb-1 font-medium">{meta.statLabel[lang]}</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{card.title}</h3>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-6">{card.gainDesc}</p>

                {/* Bullet de desafío/solución simplificado */}
                <div className="space-y-2 border-t border-white/5 pt-5">
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-1.5 shrink-0" />
                    <p className="text-white/35 text-xs leading-relaxed">{card.painDesc}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                    <p className="text-white/70 text-xs font-medium leading-relaxed">{card.gainTitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

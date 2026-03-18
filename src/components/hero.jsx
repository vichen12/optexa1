import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, X, Activity } from "lucide-react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../lib/i18n";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const h = t.hero;

  useEffect(() => {
    document.title = "STOKA | Tecnología ASRS — Mendoza, Argentina";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content",
        "Comercializamos e implementamos sistemas ASRS — tecnología de almacenamiento automatizado para operaciones industriales. Mendoza, Argentina."
      );
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center bg-transparent pt-20 pb-0 overflow-hidden px-6"
    >
      {/* MAIN CONTENT */}
      <div className="mt-20 max-w-4xl mx-auto relative z-10 w-full text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm"
        >
          <Activity size={12} className="text-stoka-cyan animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.35em] text-black/60 font-bold uppercase">
            {h.badge}
          </span>
        </motion.div>

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[108px] font-black italic leading-[0.9] tracking-tighter text-[#0f172a]">
            {h.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stoka-cyan to-blue-600">
              {h.title2}
            </span>
          </h1>

          <div className="text-3xl md:text-4xl lg:text-5xl font-black italic text-slate-700 tracking-tighter mt-3 h-[1.2em]">
            <Typewriter
              options={{
                strings: h.typewriter,
                autoStart: true,
                loop: true,
                cursor: "_",
              }}
            />
          </div>
        </motion.div>

        {/* DESCRIPCIÓN */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-slate-700/80 max-w-2xl mx-auto font-normal leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: h.desc }}
        />

        {/* BOTONES */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contacto"
            className="group flex items-center gap-3 px-9 py-4 bg-slate-950 rounded-xl transition-all duration-300 hover:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.3)] border border-white/10 hover:border-stoka-cyan/40"
          >
            <span className="text-white font-black uppercase tracking-[0.25em] text-[12px]">
              {h.cta1}
            </span>
            <ArrowRight size={14} className="text-stoka-cyan" />
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-black/10 rounded-xl hover:border-stoka-cyan/40 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center group-hover:bg-stoka-cyan transition-all duration-300 shrink-0">
              <Play size={13} fill="currentColor" className="text-stoka-cyan group-hover:text-black transition-colors ml-0.5" />
            </div>
            <span className="text-[12px] font-black text-slate-900 uppercase tracking-[0.2em]">
              {h.cta2}
            </span>
          </button>
        </motion.div>

      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-2xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 z-[110] w-10 h-10 flex items-center justify-center bg-black/60 text-white rounded-full hover:bg-stoka-cyan transition-all"
              >
                <X size={20} />
              </button>
              <video
                src="/bannervideo1.mp4"
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const STATS = [
  { value: "1.000+",   label: "Instalaciones ASRS globales" },
  { value: "10+ años", label: "Experiencia DELIE" },
  { value: "30–50%",   label: "Más económico que Europa" },
  { value: "CE · ISO", label: "Certificación industrial" },
];

export const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Optexa — Automatización de Almacenes DELIE en Argentina";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Representantes oficiales exclusivos de DELIE en Argentina. Sistemas ASRS, robots y software WMS/WCS. 30–50% más económico que soluciones europeas.");
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-0 overflow-hidden px-6 bg-slate-900"
    >
      {/* VIDEO BG */}
      <video
        src="/bannervideo1.mp4"
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro — legibilidad del texto */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Gradiente superior — navbar siempre legible */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-linear-to-b from-black/50 to-transparent pointer-events-none" />

      {/* CONTENT */}
      <div className="mt-16 max-w-5xl mx-auto relative z-10 w-full text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.35em] text-cyan-300 font-bold uppercase">
            Representación Oficial DELIE · Argentina
          </span>
        </motion.div>

        {/* H1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[86px] font-black italic leading-[0.92] tracking-tighter text-white">
            Automatización<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to right, #22d3ee, #60a5fa)" }}
            >
              de almacenes DELIE
            </span>
            <br />en Argentina.
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Tecnología de clase mundial, precio accesible. Sistemas ASRS, robots y software
          para empresas que necesitan operar mejor sin pagar precios europeos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contacto"
            className="group flex items-center gap-3 px-9 py-4 bg-cyan-500 rounded-xl transition-all duration-300 hover:bg-cyan-400 shadow-[0_4px_24px_rgba(6,182,212,0.4)]"
          >
            <span className="text-white font-black uppercase tracking-[0.2em] text-[12px]">
              Solicitar consulta técnica
            </span>
            <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" />
          </a>
          <button
            onClick={() => navigate("/soluciones")}
            className="group flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/25 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-[12px] font-black text-white uppercase tracking-[0.2em]">
              Ver catálogo de soluciones
            </span>
            <ChevronRight size={14} className="text-white/60 group-hover:text-white transition-colors" />
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/15"
        >
          {STATS.map((s, i) => (
            <div key={i} className="bg-white/8 backdrop-blur-sm px-5 py-4 text-center">
              <p className="text-xl font-black text-cyan-300 leading-none mb-1">{s.value}</p>
              <p className="text-[11px] text-white/55 leading-tight">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

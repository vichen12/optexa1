import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const STATS = [
  { value: "1.000+",   label: "Instalaciones ASRS globales" },
  { value: "15+ años", label: "Trayectoria DELIE" },
  { value: "30–50%",   label: "Más económico que Europa" },
  { value: "CE · ISO", label: "Certificación industrial" },
];

export const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sistemas ASRS y Automatización de Almacenes en Argentina | STOKA";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Sistemas ASRS, robots y software WMS/WCS para automatización de almacenes en Argentina. Tecnología DELIE, integración local STOKA. 30-50% más económico que Europa.");
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col items-center justify-center pt-20 px-6 bg-slate-900"
    >
      {/* BG — imagen en mobile, video en desktop */}
      <div className="absolute inset-0 overflow-hidden">
        {/* MOBILE: imagen estática (evita descargar el video en mobile) */}
        <img
          src="/bannervideo1-poster.jpg"
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          width="1920" height="1080"
          className="block md:hidden w-full h-full object-cover"
        />
        {/* DESKTOP: video */}
        <video
          src="/bannervideo1-compressed.mp4"
          poster="/bannervideo1-poster.jpg"
          autoPlay muted loop playsInline
          width="1920" height="1080"
          className="hidden md:block w-full h-full object-cover"
        >
          <track kind="captions" src="" label="Sin audio" default />
        </video>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-linear-to-b from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* CONTENT — centrado verticalmente */}
      <div className="max-w-5xl mx-auto relative z-10 w-full text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.35em] text-cyan-300 font-bold uppercase">
            Representación Oficial DELIE · Argentina
          </span>
        </motion.div>

        {/* DELIE logo */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-5"
        >
          <img
            src="/image.png"
            alt="Sistemas ASRS DELIE para automatización de almacenes industriales"
            width="400" height="51"
            className="h-10 object-contain mx-auto"
            style={{ filter: 'brightness(1.1) saturate(1.2)' }}
          />
        </motion.div>

        {/* H1 */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic leading-[0.95] tracking-tighter text-white">
            Automatización<br />
            de almacenes con<br />
            <span className="text-cyan-400">
              tecnología DELIE
            </span>
            <br />en Argentina.
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-lg text-white/75 max-w-2xl mx-auto font-light leading-relaxed mb-8"
        >
          Tecnología de clase mundial, precio accesible. Sistemas ASRS, robots y software
          para empresas que necesitan operar mejor sin pagar precios europeos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm', { detail: {} }))}
            style={{ outline: 'none' }}
            className="group flex items-center gap-3 px-9 py-4 bg-cyan-500 rounded-xl transition-all duration-300 hover:bg-cyan-400 shadow-[0_4px_24px_rgba(6,182,212,0.4)]"
          >
            <span className="text-white font-black uppercase tracking-[0.2em] text-[12px]">
              Solicitar consulta técnica
            </span>
            <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
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
      </div>

      {/* Stats bar — pegada al fondo siempre visible */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border-t border-white/15"
      >
        {STATS.map((s, i) => (
          <div key={i} className="bg-black/30 backdrop-blur-sm px-5 py-5 text-center">
            <p className="text-xl font-black text-cyan-300 leading-none mb-1">{s.value}</p>
            <p className="text-[11px] text-white/55 leading-tight">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

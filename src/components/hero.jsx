import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X, Cpu, Zap, Activity, Box } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center bg-transparent pt-20 pb-0 overflow-hidden px-6">
      
      {/* ESTRUCTURA 100% TRANSPARENTE 
          Respetamos el fondo de orbes de tu App.jsx.
          Usamos colores de texto "Steel/Dark" para contraste máximo.
      */}

      <div className="max-w-6xl mx-auto relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Badge HUD Superior */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-10 flex items-center gap-3 px-4 py-1.5 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm"
        >
          <Activity size={12} className="text-optexa-cyan animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.4em] text-black/60 font-black uppercase">
            Mendoza, Argentina
          </span>
        </motion.div>

        {/* TÍTULO PRINCIPAL: Qué hacemos (Contraste Asegurado) */}
        <div className="relative mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black italic leading-[0.9] tracking-tighter text-[#0f172a] drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
            SOLUCIONES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-optexa-cyan to-blue-600">
              ASRS & ROBÓTICA
            </span>
          </h1>
          
          <div className="text-3xl md:text-5xl lg:text-6xl font-black italic text-slate-800 tracking-tighter mt-2 h-[1.2em]">
            <Typewriter
              options={{
                strings: ['LOGÍSTICA INTELIGENTE.', 'ALMACENAMIENTO AUTÓNOMO.', 'PRECISIÓN INDUSTRIAL.'],
                autoStart: true, loop: true, cursor: '_'
              }}
            />
          </div>
        </div>

        {/* Párrafo Explicativo */}
        <p className="text-lg md:text-2xl text-slate-900/80 max-w-3xl mx-auto font-bold leading-relaxed mb-12">
          Optimizamos tu empresa con ingeniería de alta precisión. <br />
          <span className="text-slate-700 font-light italic text-xl tracking-wide">Implementamos celdas robóticas y sistemas SS ASRS de vanguardia.</span>
        </p>

        {/* BOTONES TECNOLÓGICOS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-4 mb-20">
          
          <a 
  href="#contacto"
  className="group relative px-10 py-5 bg-slate-950/90 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.2)] border border-white/5"
>
  {/* --- EFECTO DE LUZ PERIMETRAL (PLASMA) --- */}
  {/* Esta es la luz que recorre el borde del botón de forma fluida */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-[-500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#22d3ee_180deg,transparent_210deg,transparent_360deg)]" />
  </div>

  {/* Relleno interno para tapar el centro del gradiente y que solo se vea el borde */}
  <div className="absolute inset-[2px] bg-slate-950 rounded-[10px] z-0 group-hover:bg-slate-900 transition-colors duration-500" />

  {/* --- CONTENIDO --- */}
  <div className="relative z-10 flex items-center gap-4">
    <span className="text-white font-black uppercase tracking-[0.3em] text-[11px] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      Cotizar Proyecto
    </span>
    
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-optexa-cyan transition-all duration-500">
      <ArrowRight size={14} className="text-white group-hover:text-black transition-colors translate-x-0 group-hover:translate-x-0.5" />
    </div>
  </div>

  {/* Brillo ambiental sutil */}
  <div className="absolute -inset-1 bg-optexa-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Definición de la animación de rotación si no la tenés en tu tailwind.config */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `}} />
</a>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-5 px-8 py-4 bg-white/10 backdrop-blur-md border border-black/10 rounded-2xl hover:border-optexa-cyan/50 transition-all duration-500 shadow-xl"
          >
            <div className="relative w-14 h-14 flex items-center justify-center">
              {/* Anillo de radar rotatorio */}
              <div className="absolute inset-0 border-2 border-dashed border-optexa-cyan/40 rounded-full animate-[spin_8s_linear_infinite]" />
              <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center group-hover:bg-optexa-cyan transition-all duration-300">
                <Play size={16} fill="currentColor" className="text-optexa-cyan group-hover:text-black transition-colors ml-1" />
              </div>
            </div>
            <div className="text-left">
              <span className="block text-[9px] font-mono text-optexa-cyan font-black uppercase tracking-[0.3em] mb-0.5">Multimedia</span>
              <span className="block text-[12px] font-black text-slate-900 uppercase tracking-[0.2em]">Ver Tecnología</span>
            </div>
          </button>
        </div>

        {/* BARRA HUD (Estilo Cápsula) */}
   
      </div>

      {/* --- MODAL DE VIDEO (MUDO OBLIGATORIO) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-2xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video rounded-[40px] overflow-hidden border border-white/10 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-8 right-8 z-[110] w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-optexa-cyan transition-all"
              >
                <X size={24} />
              </button>

              {/* VIDEO SIN POSIBILIDAD DE AUDIO:
                  - Eliminamos 'controls' (el usuario no puede mutear/desmutear).
                  - Forzamos 'muted'.
                  - Agregamos 'loop' para que la tecnología se vea constante.
              */}
              <video 
                src="/bannervideo1.mp4" 
                className="w-full h-full object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
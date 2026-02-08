import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { 
  Scan, Workflow, Bot, Network, Terminal, ChevronRight, Cpu, Zap, Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  { 
    id: 1, 
    code: "PHASE_01",
    tag: "INPUT DATA",
    title: "Auditoría In-Situ", 
    desc: "Escaneo y digitalización industrial.", 
    detail: "Despliegue de unidades LiDAR terrestres y drones para generar una nube de puntos 3D de alta densidad. Mapeamos la realidad física con precisión submilimétrica.",
    logs: ["> Inicializando LiDAR array...", "> Nube de puntos: 15M pts.", "> Mapeo de obstáculos: OK."],
    icon: Scan,
    color: "cyan",
  },
  { 
    id: 2, 
    code: "PHASE_02",
    tag: "NEURAL CORE",
    title: "Gemelo Digital", 
    desc: "Simulación cuántica de procesos.", 
    detail: "Creamos un entorno virtual idéntico (Digital Twin). Usamos IA para simular millones de escenarios logísticos y encontrar la configuración óptima antes de invertir.",
    logs: ["> Compilando Digital Twin...", "> Ejecutando Simulación v4.2...", "> Optimizando flujos: 98%."],
    icon: Workflow,
    color: "fuchsia",
  },
  { 
    id: 3, 
    code: "PHASE_03",
    tag: "HARDWARE DEPLOY",
    title: "Despliegue Táctico", 
    desc: "Integración física y robótica.", 
    detail: "Bajada a tierra. Instalación de la flota robótica, servidores de borde (Edge Computing) e integración del WCS con tu ERP mediante APIs de baja latencia.",
    logs: ["> Desplegando red Mesh 5G...", "> Calibrando flota AGV...", "> Enlace ERP: Estable."],
    icon: Bot,
    color: "emerald",
  },
  { 
    id: 4, 
    code: "PHASE_04",
    tag: "HYPER EVOLUTION",
    title: "Red Neuronal Viva", 
    desc: "Aprendizaje continuo y Machine Learning.", 
    detail: "El sistema no es estático. Nuestra IA central monitorea patrones en tiempo real y re-entrena los algoritmos de navegación automáticamente cada noche.",
    logs: ["> Core IA: Online.", "> Ciclo de Re-entrenamiento: OK.", "> Predicción de demanda: Activa."],
    icon: Network,
    color: "violet",
  },
];

const tiltOptions = {
    reverse: false,
    max: 12,
    perspective: 1200,
    scale: 1.01,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

export const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  const activeColor = steps[activeStep-1].color;

  return (
    <section 
      id="proceso" 
      aria-label="Metodología de trabajo de Optexa"
      className="py-32 px-4 relative z-10 overflow-hidden bg-transparent"
    >
      {/* --- SCHEMA.ORG (JSON-LD) --- */}
      {/* Esto es invisible para el usuario pero Google lo usa para mostrar los pasos en el buscador */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Proceso de Automatización Industrial Optexa",
          "description": "Metodología de 4 fases para la implementación de robótica y sistemas ASRS.",
          "step": steps.map(s => ({
            "@type": "HowToStep",
            "name": s.title,
            "text": s.detail
          }))
        })}
      </script>

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <header className="text-center mb-24 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#050a14]/80 border border-cyan-500/50 mb-6 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.2)]">
             <Terminal size={14} className="text-cyan-400 animate-pulse" />
             <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-[0.3em] font-bold">Protocolo de Ejecución v5.0</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_5px_10px_rgba(0,0,0,1)]">
            El Camino a la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 animate-gradient-x font-outline-2">
              Automatización
            </span>
          </h2>
        </header>
        
        {/* --- GRID INTERACTIVO --- */}
        <div className="relative mb-20" role="list">
          
          <div className="hidden md:block absolute top-14 left-[12%] w-[76%] h-[4px] bg-white/10 rounded-full overflow-hidden backdrop-blur-md">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          </div>
          
          <motion.div 
            className="hidden md:block absolute top-14 left-[12%] h-[4px] rounded-full z-0"
            style={{ 
                background: `linear-gradient(90deg, var(--${activeColor}-500), var(--${activeColor}-300))`,
                boxShadow: `0 0 20px var(--${activeColor}-500), 0 0 40px var(--${activeColor}-500)`
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${((activeStep - 1) / (steps.length - 1)) * 76}%` }}
            transition={{ duration: 0.6, ease: "circOut" }}
          >
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white blur-[2px]" style={{ boxShadow: `0 0 20px var(--${activeColor}-400)` }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const isActive = activeStep === step.id;
              
              return (
                <article 
                    key={step.id} 
                    role="listitem"
                    className="relative group perspective-card"
                    onMouseEnter={() => setActiveStep(step.id)}
                >
                  <div className={cn(
                     "absolute -inset-4 rounded-[2.5rem] opacity-30 blur-2xl transition-all duration-700 group-hover:opacity-60 group-hover:blur-3xl pointer-events-none",
                     isActive ? "opacity-70 blur-3xl" : ""
                  )}
                  style={{ background: `radial-gradient(circle, var(--${step.color}-600) 0%, transparent 70%)` }}
                  />

                  <Tilt options={tiltOptions} className="h-full">
                    <motion.div 
                        className={cn(
                            "flex flex-col p-8 rounded-[2rem] border-2 transition-all duration-500 h-full cursor-pointer relative overflow-hidden backdrop-blur-xl z-20",
                            isActive 
                                ? `bg-[#030610]/90 border-${step.color}-500`
                                : `bg-[#030610]/60 border-white/10 hover:border-${step.color}-500/50`
                        )}
                        whileHover={{ y: -8, scale: 1.02 }}
                    >
                        <div className="absolute inset-0 opacity-[0.07] bg-[url('/circuit-board.svg')] bg-cover pointer-events-none mix-blend-overlay" />

                        <div className="flex justify-between items-start mb-10 relative z-10">
                           <div className={cn(
                              "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border relative overflow-hidden group-hover:shadow-[0_0_30px_currentColor]",
                              isActive 
                                ? `bg-${step.color}-500/20 text-${step.color}-300 border-${step.color}-400 shadow-[0_0_40px_var(--${step.color}-500)]` 
                                : `bg-white/5 text-white/50 border-white/10 text-${step.color}-400/50`
                           )}>
                              <step.icon size={28} className="relative z-10" aria-hidden="true" />
                              <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-30 animate-[shimmer_3s_infinite]", `from-transparent via-${step.color}-300 to-transparent`)} />
                           </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <span className={cn(
                               "text-[10px] font-black tracking-[0.3em] uppercase mb-3 block transition-colors flex items-center gap-2",
                               isActive ? `text-${step.color}-300` : `text-${step.color}-600/70`
                            )}>
                               <Sparkles size={10} /> {step.tag}
                            </span>
                            <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-3 drop-shadow-md">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-300 font-medium leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                        
                        {isActive && (
                            <div className={`absolute top-0 left-0 w-full h-[3px] bg-${step.color}-400 shadow-[0_0_20px_currentColor] animate-[scan_2.5s_ease-in-out_infinite] opacity-70 z-30`} />
                        )}

                    </motion.div>
                  </Tilt>
                  
                  {i !== steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
                      <ChevronRight size={24} className="rotate-90" aria-hidden="true" />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* --- CONSOLA TERMINAL "MAINFRAME" --- */}
        <aside className="mt-24 mx-auto max-w-5xl relative z-20" aria-label="Detalles técnicos de la fase activa">
            <div 
              className="absolute -inset-4 blur-3xl opacity-40 transition-all duration-700"
              style={{ background: `radial-gradient(circle, var(--${activeColor}-600) 0%, transparent 70%)` }}
            />

            <div className="bg-[#020408]/80 backdrop-blur-xl rounded-2xl border-2 border-white/10 overflow-hidden shadow-2xl relative z-10"
                 style={{ borderColor: `var(--${activeColor}-900)` }}
            >
                <div className="absolute top-0 left-4 w-20 h-[2px]" style={{ backgroundColor: `var(--${activeColor}-500)` }} />
                <div className="absolute bottom-0 right-4 w-20 h-[2px]" style={{ backgroundColor: `var(--${activeColor}-500)` }} />

                <div className="bg-[#080d18]/80 px-6 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-${activeColor}-500/10 border border-${activeColor}-500/30`}>
                            <Terminal size={14} className={`text-${activeColor}-400`} />
                            <span className="text-[10px] font-mono text-white uppercase tracking-widest font-bold">Optexa_Core // Live_Data_Stream</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono text-${activeColor}-400 animate-pulse`}>PROCESSING...</span>
                    </div>
                </div>

                <div className="p-8 md:p-10 font-mono text-sm min-h-[200px] flex items-center relative z-10 bg-[#050912]/60">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_3px,3px_100%] opacity-30" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full relative z-20"
                        >
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                <div className="shrink-0 relative">
                                   <div className={`absolute inset-0 border-2 border-${activeColor}-500/30 rounded-full animate-[spin_10s_linear_infinite]`} />
                                   <div className={`w-24 h-24 rounded-full bg-${activeColor}-950/50 border-2 border-${activeColor}-400/50 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_30px_var(--${activeColor}-500)] backdrop-blur-md`}>
                                      <Cpu size={32} className={`text-${activeColor}-300 animate-pulse relative z-10`} />
                                      <span className={`text-[9px] font-bold text-${activeColor}-300 mt-1 relative z-10 tracking-widest`}>ACTIVE</span>
                                   </div>
                                </div>

                                <div className="flex-grow">
                                    <h4 className={`text-xl font-black text-white uppercase mb-2 flex items-center gap-3`}>
                                       {steps[activeStep-1].title}
                                    </h4>
                                    <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                                        {steps[activeStep-1].detail}
                                    </p>
                                    
                                    <div className="flex flex-col gap-1.5 text-xs text-gray-500 font-mono border-t border-white/10 pt-4 bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                                       {steps[activeStep-1].logs.map((log, idx) => (
                                          <motion.span 
                                            key={idx}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex items-center gap-2 font-medium"
                                          >
                                             <span className={`text-${activeColor}-400 font-bold`}>{">_"}</span> 
                                             <span className={idx === steps[activeStep-1].logs.length -1 ? "text-white animate-pulse" : "text-gray-400"}>
                                                {log}
                                             </span>
                                          </motion.span>
                                       ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </aside>

      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --cyan-500: #06b6d4; --cyan-600: #0891b2; --cyan-900: #164e63;
          --fuchsia-500: #d946ef; --fuchsia-600: #c026d3; --fuchsia-900: #701a75;
          --emerald-500: #10b981; --emerald-600: #059669; --emerald-900: #064e3b;
          --violet-500: #8b5cf6; --violet-600: #7c3aed; --violet-900: #4c1d95;
        }
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
        .font-outline-2 { -webkit-text-stroke: 1px rgba(255,255,255,0.1); }
      `}} />
    </section>
  );
};
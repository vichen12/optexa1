import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Search, PenTool, Rocket, Headphones, ArrowRight, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  { 
    id: 1, 
    code: "PHASE_01",
    title: "Diagnóstico", 
    desc: "Escaneo láser de instalaciones.", 
    detail: "Ejecutando mapeo LiDAR del depósito. Identificando cuellos de botella en el flujo actual.",
    icon: Search,
    color: "text-blue-400",
    border: "group-hover:border-blue-500",
    shadow: "group-hover:shadow-blue-500/50"
  },
  { 
    id: 2, 
    code: "PHASE_02",
    title: "Ingeniería", 
    desc: "Simulación de rutas IA.", 
    detail: "Compilando algoritmos de enjambre. Optimizando trayectorias para reducir tiempos de viaje en un 40%.",
    icon: PenTool,
    color: "text-cyan-400",
    border: "group-hover:border-cyan-500",
    shadow: "group-hover:shadow-cyan-500/50"
  },
  { 
    id: 3, 
    code: "PHASE_03",
    title: "Despliegue", 
    desc: "Instalación física en 48hs.", 
    detail: "Despliegue de unidades AGV. Calibración de sensores y sincronización con el Core OS.",
    icon: Rocket,
    color: "text-indigo-400",
    border: "group-hover:border-indigo-500",
    shadow: "group-hover:shadow-indigo-500/50"
  },
  { 
    id: 4, 
    code: "PHASE_04",
    title: "Evolución", 
    desc: "Mejora continua vía OTA.", 
    detail: "Sistema en línea. Monitoreo predictivo activado. Recibiendo actualizaciones de IA automáticas.",
    icon: Headphones,
    color: "text-purple-400",
    border: "group-hover:border-purple-500",
    shadow: "group-hover:shadow-purple-500/50"
  },
];

// Configuración Tilt
const tiltOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0); // 0 significa ninguno o el primero

  return (
    <section className="py-32 px-6 relative z-10 bg-transparent overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-optexa-cyan/30 mb-4">
             <Terminal size={12} className="text-optexa-cyan" />
             <span className="text-[10px] font-mono text-optexa-cyan uppercase tracking-widest">Protocolo de Ejecución</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-optexa-dark leading-none">
            TU CAMINO A LA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-optexa-main to-optexa-cyan">
              AUTOMATIZACIÓN
            </span>
          </h2>
        </div>
        
        {/* --- GRID INTERACTIVO --- */}
        <div className="relative">
          
          {/* Línea conectora de fondo (Pista) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full" />
          
          {/* Línea conectora ACTIVA (Barra de progreso) */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-optexa-main to-optexa-cyan -translate-y-1/2 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] z-0"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const isActive = activeStep === step.id; // ¿Está seleccionado?
              const isPast = activeStep > step.id;     // ¿Ya pasamos por aquí?

              return (
                <div 
                    key={step.id} 
                    className="relative"
                    onMouseEnter={() => setActiveStep(step.id)}
                >
                  <Tilt options={tiltOptions} className="h-full">
                    <motion.div 
                        className={cn(
                            "flex flex-col items-center text-center p-6 rounded-3xl border-2 transition-all duration-300 h-full cursor-pointer relative overflow-hidden group",
                            // Estilos Condicionales
                            isActive 
                                ? `bg-[#092a53]/80 backdrop-blur-xl border-${step.color.split('-')[1]}-500 shadow-[0_0_30px_rgba(0,0,0,0.4)]`
                                : "bg-white/10 backdrop-blur-sm border-white/10 hover:bg-[#092a53]/60"
                        )}
                        whileHover={{ y: -10 }}
                    >
                        {/* Efecto de 'Scan' cuando está activo */}
                        {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-[scan_1.5s_linear_infinite]" />
                        )}

                        {/* ID Code pequeño */}
                        <span className="absolute top-4 right-4 text-[10px] font-mono font-bold text-white/30 group-hover:text-white/60">
                            {step.code}
                        </span>

                        {/* ÍCONO */}
                        <div className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 relative",
                            isActive ? "scale-110 bg-white/10" : "bg-white/5 grayscale group-hover:grayscale-0"
                        )}>
                            <step.icon size={32} className={cn("transition-colors", isActive ? step.color : "text-white")} />
                            
                            {/* Checkmark si ya pasamos este paso */}
                            {isPast && (
                                <div className="absolute -top-2 -right-2 bg-green-500 text-black rounded-full p-1 shadow-lg">
                                    <CheckCircle2 size={12} />
                                </div>
                            )}
                        </div>

                        {/* Textos */}
                        <h3 className={cn(
                            "text-xl font-black uppercase tracking-tight mb-2 transition-colors",
                            isActive ? "text-white" : "text-optexa-dark group-hover:text-white"
                        )}>
                            {step.title}
                        </h3>
                        <p className={cn(
                            "text-sm font-medium leading-relaxed transition-colors",
                            isActive ? "text-blue-100" : "text-gray-500 group-hover:text-gray-400"
                        )}>
                            {step.desc}
                        </p>

                        {/* Botón fake "Ver más" que aparece en hover */}
                        <div className={cn(
                            "mt-6 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                            step.color
                        )}>
                            Inspeccionar <ChevronRight size={12} />
                        </div>

                    </motion.div>
                  </Tilt>
                  
                  {/* Flecha conectora móvil */}
                  {i !== steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-optexa-dark/30 animate-bounce">
                      <ArrowRight size={20} className="rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* --- CONSOLA TERMINAL INTERACTIVA --- */}
        <div className="mt-16 mx-auto max-w-3xl">
            <div className="bg-[#020410] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative">
                {/* Header Terminal */}
                <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/10">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 ml-2">Optexa_System_Log.exe</span>
                </div>

                {/* Cuerpo Terminal */}
                <div className="p-6 font-mono text-sm h-[120px] flex items-center">
                    <AnimatePresence mode="wait">
                        {activeStep ? (
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-start gap-3">
                                    <ChevronRight className={cn("mt-1 shrink-0 animate-pulse", steps[activeStep-1].color)} size={16} />
                                    <div>
                                        <span className={cn("font-bold block mb-1", steps[activeStep-1].color)}>
                                            {">>"} DETECTANDO FASE {activeStep}: {steps[activeStep-1].title.toUpperCase()}...
                                        </span>
                                        <p className="text-gray-300 typing-effect">
                                            {steps[activeStep-1].detail}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }}
                                className="text-gray-600 flex items-center gap-2"
                            >
                                <span className="animate-pulse">_</span>
                                Esperando interacción del usuario... Mueva el cursor sobre las fases.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Grid decorativo de fondo */}
                <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5 pointer-events-none mix-blend-overlay" />
            </div>
        </div>

      </div>
    </section>
  );
};
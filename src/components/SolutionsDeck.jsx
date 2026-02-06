import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Coffee, Cpu, ArrowUpRight, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const solutions = [
  {
    id: 1,
    title: "LOGÍSTICA",
    category: "Industrial",
    description: "Tus depósitos operando solos. AGVs de carga pesada que mueven pallets de 1200kg sin descanso.",
    stats: [
      { label: "Carga", val: "1.2T" },
      { label: "Velocidad", val: "3m/s" },
      { label: "Altura", val: "12m" }
    ],
    color: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "HOSPITALITY",
    category: "Servicios",
    description: "Mozos robots que no se cansan. Llevan platos, traen cuentas y sorprenden a tus clientes.",
    stats: [
      { label: "Batería", val: "18hs" },
      { label: "Sensores", val: "LiDAR" },
      { label: "Payload", val: "40kg" }
    ],
    color: "bg-cyan-500",
    image: "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "SOFTWARE IA",
    category: "Control",
    description: "El cerebro de la operación. Controlá toda tu flota en tiempo real desde una tablet.",
    stats: [
      { label: "Cloud", val: "AWS" },
      { label: "Update", val: "OTA" },
      { label: "Uptime", val: "99%" }
    ],
    color: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  }
];

export const SolutionsDeck = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="soluciones" className="py-24 px-4 bg-transparent relative z-10">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-optexa-dark/10 mb-4 shadow-sm">
           <Zap size={14} className="text-optexa-cyan" fill="currentColor"/>
           <span className="text-[10px] font-black text-optexa-dark tracking-[0.2em] uppercase">Tecnología propietaria</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-optexa-dark leading-[0.9]">
          POTENCIA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-optexa-main to-optexa-cyan">
            ILIMITADA
          </span>
        </h2>
      </div>

      {/* EL MAZO (DECK) */}
      <div className="max-w-7xl mx-auto h-[600px] flex flex-col md:flex-row gap-3 px-2">
        {solutions.map((item) => {
          const isActive = active === item.id;
          
          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActive(item.id)}
              onHoverStart={() => setActive(item.id)}
              className={cn(
                "relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group shadow-2xl",
                // Lógica de expansión: El activo es mucho más grande
                isActive ? "flex-[4]" : "flex-[1] opacity-80 hover:opacity-100 grayscale hover:grayscale-0",
                "h-full min-h-[100px]"
              )}
            >
              
              {/* --- 1. IMAGEN DE FONDO --- */}
              <div 
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-transform duration-1000",
                  isActive ? "scale-105" : "scale-100"
                )}
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* --- 2. CAPA OSCURA (Para que se lea el texto) --- */}
              <div className={cn(
                "absolute inset-0 transition-colors duration-500",
                isActive ? "bg-optexa-dark/80" : "bg-optexa-dark/60 hover:bg-optexa-dark/40"
              )} />

              {/* --- 3. CONTENIDO --- */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between overflow-hidden">
                
                {/* CABECERA DE TARJETA */}
                <div className="flex justify-between items-start">
                  <div className={cn(
                    "px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-300",
                    isActive ? "bg-white text-black border-white" : "bg-black/30 text-white border-white/20"
                  )}>
                    0{item.id} — {item.category}
                  </div>
                  
                  <div className={cn(
                    "p-3 rounded-full bg-white/10 backdrop-blur-md transition-all duration-300",
                    isActive ? "rotate-45 bg-optexa-cyan text-black" : "text-white"
                  )}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* --- ESTADO CERRADO: TÍTULO GIGANTE VERTICAL --- */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-6xl md:text-8xl font-black text-white/20 uppercase tracking-widest -rotate-90 whitespace-nowrap select-none group-hover:text-white/40 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                )}

                {/* --- ESTADO ABIERTO: INFO COMPLETA --- */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="relative z-10"
                    >
                      {/* Título Principal */}
                      <h3 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase italic leading-none drop-shadow-lg">
                        {item.title}
                      </h3>
                      
                      {/* Línea decorativa de color */}
                      <div className={cn("w-20 h-2 mb-6 rounded-full", item.color)} />

                      <p className="text-xl text-gray-200 max-w-lg mb-8 font-medium leading-relaxed">
                        {item.description}
                      </p>

                      {/* STATS (Estilo Ficha Técnica) */}
                      <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                        {item.stats.map((stat, i) => (
                          <div key={i}>
                            <p className="text-xs text-optexa-cyan uppercase font-bold tracking-wider mb-1">
                              {stat.label}
                            </p>
                            <p className="text-3xl font-black text-white font-mono">
                              {stat.val}
                            </p>
                          </div>
                        ))}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
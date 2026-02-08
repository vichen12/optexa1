import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Coffee, Cpu, Activity, AlertOctagon, CheckCircle2, ArrowRight } from 'lucide-react';

const solutions = [
  {
    id: "asrs-tech",
    title: "TECNOLOGÍA ASRS",
    painTitle: "DEPÓSITOS INEFICIENTES",
    painDesc: "Más volumen significa más metros, más gente y más errores. El depósito crece en costos, no en eficiencia.",
    gainTitle: "DENSIDAD MÁXIMA AUTOMATIZADA",
    gainDesc: "Automatización vertical que multiplica capacidad sin ampliar superficie. Picking preciso, trazabilidad total y operación continua 24/7.",
    icon: Box,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    color: "from-cyan-500 via-blue-500 to-purple-600",
    alt: "Optimización de depósitos industriales con ASRS en Mendoza"
  },
  {
    id: "service-robotics",
    title: "ROBÓTICA DE SERVICIO",
    painTitle: "COLAPSO EN HORA PICO",
    painDesc: "Mozos sobrepasados, pedidos que llegan fríos y mala experiencia del cliente por falta de personal.",
    gainTitle: "FLOTA DE ATENCIÓN PERFECTA",
    gainDesc: "Robots que cargan 40kg y nunca se cansan. Tu personal se enfoca en vender y sonreír, los robots en cargar y llevar.",
    icon: Coffee,
    img: "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?q=80&w=2070&auto=format&fit=crop",
    color: "from-fuchsia-500 via-pink-500 to-orange-500",
    alt: "Robots de servicio para gastronomía y hotelería en Argentina"
  },
  {
    id: "optexa-ai",
    title: "OPTEXA AI",
    painTitle: "GESTIÓN A CIEGAS",
    painDesc: "No sabés dónde están tus activos ni qué está fallando hasta que es tarde. Decisiones basadas en intuición, no en datos.",
    gainTitle: "OMNISCIENCIA OPERATIVA",
    gainDesc: "Panel de control total. IA que predice fallas antes de que ocurran y optimiza rutas en tiempo real.",
    icon: Cpu,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    color: "from-emerald-400 via-green-500 to-teal-500",
    alt: "Inteligencia artificial aplicada a la logística industrial"
  }
];

export const SolutionsDeck = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section 
      id="soluciones" 
      aria-label="Soluciones de Automatización Optexa"
      className="relative py-32 px-6 z-20 overflow-hidden bg-transparent"
    >
      
      {/* --- INYECCIÓN DE SCHEMA (Invisible para el usuario) --- */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Soluciones Industriales Optexa",
          "description": "Transformación de problemas logísticos en activos mediante robótica y ASRS.",
          "itemListElement": solutions.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Service",
              "name": s.title,
              "description": s.gainDesc
            }
          }))
        })}
      </script>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-20 text-center relative z-10">
         <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            TRANSFORMAMOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 animate-gradient-x font-outline-2">PROBLEMAS EN ACTIVOS</span>
         </h2>
      </div>

      {/* --- GRID DE MARKETING --- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 perspective-1000 z-10 relative" role="list">
        
        {solutions.map((item, index) => (
          <motion.article
            key={item.id}
            role="listitem"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="group relative h-[700px] perspective-card cursor-default"
          >
            {/* Borde de Neón Giratorio */}
            <div className={`absolute -inset-[2px] rounded-[32px] bg-gradient-to-r ${item.color} opacity-30 group-hover:opacity-100 blur-sm transition-opacity duration-700 animate-spin-slow`} />
            
            {/* TARJETA DE VIDRIO */}
            <div className="relative h-full bg-[#02040a]/80 backdrop-blur-xl rounded-[30px] overflow-hidden flex flex-col border border-white/10 group-hover:border-transparent transition-all duration-500 z-10 shadow-2xl">
              
              {/* IMAGEN DE FONDO CON ROL SEO */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                <div 
                  role="img"
                  aria-label={item.alt}
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/90 to-transparent" />
              </div>

              {/* HEADER CARD */}
              <div className="relative z-20 p-8 flex items-start justify-between">
                <header>
                  <h3 className="text-4xl font-black text-white italic tracking-tighter leading-[0.9] drop-shadow-lg">
                    {item.title}
                  </h3>
                </header>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white" aria-hidden="true">
                  <item.icon size={24} />
                </div>
              </div>

              {/* ZONA DE MARKETING (PROBLEMA VS SOLUCIÓN) */}
              <div className="relative z-20 px-8 flex-grow flex flex-col gap-4">
                
                {/* 🔴 EL PROBLEMA */}
                <div className="bg-red-950/20 border-l-2 border-red-500/50 p-5 rounded-r-xl backdrop-blur-sm group-hover:bg-red-950/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2 text-red-400">
                    <AlertOctagon size={14} />
                    <span className="text-[10px] font-black tracking-widest uppercase">El Desafío</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-tight">{item.painTitle}</h4>
                  <p className="text-xs text-red-100/70 font-mono leading-relaxed">
                    "{item.painDesc}"
                  </p>
                </div>

                {/* FLECHA */}
                <div className="self-center" aria-hidden="true">
                  <ArrowRight className="text-white/20 rotate-90" size={20} />
                </div>

                {/* 🟢 LA SOLUCIÓN OPTEXA */}
                <div className="bg-cyan-950/20 border-l-2 border-cyan-400/50 p-5 rounded-r-xl backdrop-blur-sm group-hover:bg-cyan-950/30 transition-colors flex-grow">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <CheckCircle2 size={14} />
                    <span className="text-[10px] font-black tracking-widest uppercase">Solución de Ingeniería</span>
                  </div>
                  <h4 className="text-lg font-black text-white mb-2 uppercase italic tracking-tight">{item.gainTitle}</h4>
                  <p className="text-sm text-cyan-100/80 font-medium leading-relaxed">
                    {item.gainDesc}
                  </p>
                </div>

              </div>

              {/* BARRA DE PROGRESO DE HOVER */}
              <footer className="relative z-20 p-6 mt-auto">
                 <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} w-0 group-hover:w-full transition-all duration-1000 ease-out`} 
                      role="progressbar"
                      aria-valuenow={hovered === index ? 100 : 0}
                    />
                 </div>
              </footer>

            </div>
          </motion.article>
        ))}

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        .font-outline-2 { -webkit-text-stroke: 1px rgba(255,255,255,0.1); }
      `}} />

    </section>
  );
};
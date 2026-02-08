import { motion } from 'framer-motion';
import { 
  Box, Coffee, Cpu, Activity, 
  Terminal, Maximize, Ruler, Zap, ShieldCheck, Wifi, Database, ScanLine, Sparkles, Combine
} from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    id: "01",
    title: "ASRS INDUSTRIAL",
    subtitle: "ALMACENAMIENTO AUTOMATIZADO",
    description: "Sistema de transelevadores de doble profundidad. Eliminamos los pasillos de maniobra para utilizar la altura total de la nave industrial hasta 40 metros. Integra sistemas KERS para eficiencia energética.",
    pain: "COSTOS FIJOS ELEVADOS Y LÍMITE DE ALTURA.",
    gain: "OPERACIÓN 'LIGHTS-OUT'. DENSIDAD +400%.",
    alt: "Sistema de almacenamiento automatizado ASRS Optexa en Mendoza",
    specs: [
      { label: "Altura", val: "45m" },
      { label: "Carga", val: "1.5T" },
      { label: "Ciclos", val: "60/h" },
      { label: "KERS", val: "-30%" },
    ],
    techStack: ["Siemens S7", "Profinet", "SICK PL-d"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    color: "cyan",
    colorHex: "#22d3ee" // Para inline styles si Tailwind JIT falla en dinámicos
  },
  {
    id: "02",
    title: "FLOTA ROBÓTICA",
    subtitle: "NAVEGACIÓN NATURAL AMR & AGV",
    description: "Robots móviles autónomos sin infraestructura de cables. Utilizan vSLAM y LiDAR 3D para mapear el entorno industrial dinámicamente. La flota opera como un enjambre coordinado mediante IA.",
    pain: "FLUJOS RÍGIDOS Y DEPENDENCIA MANUAL.",
    gain: "ESCALABILIDAD INSTANTÁNEA Y RUTAS DINÁMICAS.",
    alt: "Flota de robots autónomos AMR y AGV para logística 4.0",
    specs: [
      { label: "Nav", val: "vSLAM" },
      { label: "Safety", val: "LiDAR" },
      { label: "Bat", val: "18hs" },
      { label: "Carga", val: "2Ton" },
    ],
    techStack: ["ROS 2", "NVIDIA", "5G Mesh"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    color: "fuchsia",
    colorHex: "#e879f9"
  },
  {
    id: "03",
    title: "OPTEXA LABS",
    subtitle: "INGENIERÍA & CONSULTORÍA",
    description: "Análisis dimensional y auditoría técnica in-situ. Estudiamos flujos logísticos y calculamos picos de demanda para diseñar el layout exacto de tu próxima planta automatizada.",
    pain: "INVERSIONES A CIEGAS Y SOBREDIMENSIONAMIENTO.",
    gain: "AUDITORÍA TÉCNICA Y DIMENSIONAMIENTO EXACTO.",
    alt: "Consultoría de ingeniería industrial y simulación de flujos Optexa",
    specs: [
      { label: "Método", val: "Flujos" },
      { label: "Entrega", val: "CAD 3D" },
      { label: "Diseño", val: "Custom" },
      { label: "Valid", val: "Simula" },
    ],
    techStack: ["Recomendaciones", "Simulación", "Cálculo"],
    image: "/OPTEXACONFONDOBLANCO.png", 
    color: "emerald",
    colorHex: "#34d399"
  }
];

export const Services = () => {
  return (
    <section 
      id="servicios" 
      aria-label="Nuestros Servicios de Ingeniería y Robótica"
      className="relative py-24 px-4 md:px-8 overflow-hidden bg-transparent"
    >
      
      {/* --- SCHEMA.ORG JSON-LD --- */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Automatización Industrial",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Optexa"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Catálogo de Robótica y ASRS",
            "itemListElement": services.map(s => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": s.title,
                "description": s.description
              }
            }))
          }
        })}
      </script>

      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* --- HEADER --- */}
        <header className="mb-32 flex flex-col items-center text-center">
           <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
             Ingeniería <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 animate-gradient-x font-outline-2">Integral</span>
           </h2>
        </header>

        {/* --- GRID DE SERVICIOS --- */}
        <div className="flex flex-col gap-28">
          
          {services.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <article 
                key={item.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-20 items-center relative group/section`}
              >
                
                {/* 1. VISUAL (IMAGEN) */}
                <figure className="w-full lg:w-1/2 relative perspective-card">
                   <div 
                      className="absolute -inset-2 rounded-2xl opacity-50 group-hover/section:opacity-100 transition-opacity duration-700 blur-md animate-spin-slow" 
                      style={{ background: `linear-gradient(to right, ${item.colorHex}66, transparent)` }}
                   />
                   
                   <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#050a10] border border-white/10 shadow-2xl z-10">
                      <img 
                        src={item.image} 
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/section:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      
                      {/* Efecto Scanner en Imagen */}
                      <div className={cn("absolute top-0 left-0 w-full h-[2px] shadow-[0_0_15px_currentColor] animate-[scan_4s_linear_infinite] opacity-40", `bg-${item.color}-400 text-${item.color}-400`)} />
                   </div>
                </figure>

                {/* 2. PANEL DE TEXTO "MATERIAL CUÁNTICO" */}
                <div className="w-full lg:w-1/2 relative group/hud z-10">
                   <div className="relative rounded-[2.5rem] overflow-hidden p-[1px]">
                      
                      {/* BORDE LÍQUIDO ACTIVO */}
                      <div 
                        className="absolute inset-0 opacity-30 group-hover/hud:opacity-100 blur-sm transition-all duration-700 animate-gradient-x"
                        style={{ background: `linear-gradient(to right, ${item.colorHex}, rgba(255,255,255,0.2), ${item.colorHex})` }}
                      />
                      
                      <div className="relative h-full bg-[#030508] rounded-[2.5rem] p-8 md:p-10 overflow-hidden">
                         <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay z-0" />

                         <div className="relative z-20">
                           <header className="mb-6 flex justify-between items-start">
                               <div>
                                  <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-2 drop-shadow-lg">
                                    {item.title}
                                  </h3>
                                  <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
                                    {item.subtitle}
                                  </p>
                               </div>
                               <div className={cn(
                                 "hidden md:flex p-3 rounded-xl border border-white/10 bg-white/5",
                                 `text-${item.color}-400`
                               )}>
                                  <Sparkles size={24} />
                               </div>
                           </header>

                           <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                             {item.description}
                           </p>

                           {/* Problema vs Solución - Optimizamos para keywords industriales */}
                           <div className="space-y-3 mb-8 bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm relative overflow-hidden">
                               <div className="flex gap-3 items-start relative z-10">
                                   <span className="text-[10px] font-black text-red-500 uppercase tracking-widest mt-0.5 min-w-[60px]">DESAFÍO:</span>
                                   <p className="text-xs text-gray-300 font-mono leading-tight opacity-80">"{item.pain}"</p>
                               </div>
                               <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
                               <div className="flex gap-3 items-start relative z-10 pt-2">
                                   <span className={cn("text-[10px] font-black uppercase tracking-widest mt-0.5 min-w-[60px]", `text-${item.color}-400`)}>IMPACTO:</span>
                                   <p className="text-sm font-bold text-white italic leading-tight">{item.gain}</p>
                               </div>
                           </div>

                           {/* Grilla de Datos Técnicos */}
                           <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                               {item.specs.map((spec, i) => (
                                 <div key={i}>
                                     <p className="text-[9px] font-mono text-gray-500 uppercase mb-0.5">{spec.label}</p>
                                     <p className="text-base font-bold text-white tracking-tight">{spec.val}</p>
                                 </div>
                               ))}
                           </div>

                           <footer className="mt-6 flex flex-wrap gap-2">
                               {item.techStack.map((tech, i) => (
                                 <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-mono text-gray-400 uppercase rounded">
                                     {tech}
                                 </span>
                               ))}
                           </footer>
                         </div>
                      </div>
                   </div>
                </div>

              </article>
            );
          })}

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: -5%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 105%; opacity: 0; }
        }
        .animate-spin-slow { animation: spin 15s linear infinite; }
        .font-outline-2 { -webkit-text-stroke: 1px rgba(255,255,255,0.1); }
      `}} />
    </section>
  );
};
import { motion } from 'framer-motion';
import { 
  Box, Coffee, Cpu, Activity, 
  Terminal, Maximize, Ruler, Zap, ShieldCheck, Wifi, Database, ScanLine, Sparkles, Combine
} from 'lucide-react';

const services = [
  {
    id: "01",
    title: "ASRS INDUSTRIAL",
    subtitle: "ALMACENAMIENTO AUTOMATIZADO",
    description: "Sistema de transelevadores de doble profundidad. Eliminamos los pasillos de maniobra para utilizar la altura total de la nave (hasta 40m). Integra sistemas KERS para devolver energía a la red.",
    pain: "COSTOS FIJOS ELEVADOS Y LÍMITE DE ALTURA.",
    gain: "OPERACIÓN 'LIGHTS-OUT'. DENSIDAD +400%.",
    specs: [
      { label: "Altura", val: "45m" },
      { label: "Carga", val: "1.5T" },
      { label: "Ciclos", val: "60/h" },
      { label: "KERS", val: "-30%" },
    ],
    techStack: ["Siemens S7", "Profinet", "SICK PL-d"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    color: "cyan"
  },
  {
    id: "02",
    title: "FLOTA ROBÓTICA",
    subtitle: "NAVEGACIÓN NATURAL AMR & AGV",
    description: "Robots móviles sin cables ni cintas. Utilizan vSLAM y LiDAR 3D para mapear el entorno dinámicamente. La flota opera como un enjambre coordinado.",
    pain: "FLUJOS RÍGIDOS Y DEPENDENCIA MANUAL.",
    gain: "ESCALABILIDAD INSTANTÁNEA Y RUTAS DINÁMICAS.",
    specs: [
      { label: "Nav", val: "vSLAM" },
      { label: "Safety", val: "LiDAR" },
      { label: "Bat", val: "18hs" },
      { label: "Carga", val: "2Ton" },
    ],
    techStack: ["ROS 2", "NVIDIA", "5G Mesh"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    color: "fuchsia"
  },
  {
    id: "03",
    title: "OPTEXA LABS",
    subtitle: "INGENIERÍA & CONSULTORÍA",
    description: "Análisis dimensional in-situ. Estudiamos tus flujos, medimos tu mix de productos y calculamos tus picos de demanda para diseñar el layout exacto.",
    pain: "INVERSIONES A CIEGAS Y SOBREDIMENSIONAMIENTO.",
    gain: "AUDITORÍA TÉCNICA Y DIMENSIONAMIENTO EXACTO.",
    specs: [
      { label: "Método", val: "Flujos" },
      { label: "Entrega", val: "CAD 3D" },
      { label: "Diseño", val: "Custom" },
      { label: "Valid", val: "Simula" },
    ],
    techStack: ["Recomendaciones", "Simulación", "Cálculo"],
    image: "./OPTEXACONFONDOBLANCO.png",
    color: "emerald"
  }
];

export const Services = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      
      {/* FONDO DECORATIVO GLOBAL SUTIL */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* --- HEADER --- */}
        <div className="mb-32 flex flex-col items-center text-center">
          
           <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
             Ingeniería <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 animate-gradient-x font-outline-2">Integral</span>
           </h2>
        </div>

        {/* --- SECCIONES ABIERTAS --- */}
        <div className="flex flex-col gap-28">
          
          {services.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-20 items-center relative group/section`}
              >
                
                {/* 1. IMAGEN (VISUAL) - AHORA SIEMPRE CLARA */}
                <div className="w-full lg:w-1/2 relative perspective-card">
                   {/* Borde de Energía Giratorio en la Imagen */}
                   <div className={`absolute -inset-2 bg-gradient-to-r from-${item.color}-500/40 to-transparent rounded-2xl opacity-50 group-hover/section:opacity-100 transition-opacity duration-700 blur-md animate-spin-slow`} />
                   
                   <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#050a10] border border-white/10 shadow-2xl z-10">
                      {/* IMAGEN: Se eliminó la opacidad reducida, ahora siempre está al 100% */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover/section:scale-105"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      {/* Overlay muy sutil solo para contraste de textos, no oscurece la foto */}
                      <div className="absolute inset-0 bg-black/20" />
                      
                      {/* Interferencia Digital sutil */}
                      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

                     
                   </div>
                </div>

                {/* 2. EL PANEL DE TEXTO "MATERIAL CUÁNTICO" (Sin cambios) */}
                <div className="w-full lg:w-1/2 relative group/hud z-10">
                   
                   <div className="relative rounded-[2.5rem] overflow-hidden p-[1px]">
                      
                      {/* A. BORDE LÍQUIDO ACTIVO */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-500 via-white/20 to-${item.color}-500 opacity-30 group-hover/hud:opacity-100 blur-sm transition-all duration-700 animate-gradient-x`} />
                      
                      {/* B. EL MATERIAL DEL FONDO */}
                      <div className="relative h-full bg-[#030508] rounded-[2.5rem] p-8 md:p-10 overflow-hidden">
                         
                         {/* B1. Textura de Metal Líquido Oscuro (Base) */}
                         <div className="absolute inset-0 opacity-40 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />

                         {/* B2. Ruido Digital Táctil (Textura) */}
                         <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay z-0" />
                         
                         {/* B3. Reflejos de Luz Dinámicos (Movimiento interno) */}
                         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30 mix-blend-color-dodge">
                            <div className={`absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent animate-[spin_20s_linear_infinite]`} />
                         </div>

                         {/* B4. Reacción de Energía al Hover */}
                         <div className={`absolute inset-0 bg-gradient-to-tr from-${item.color}-900/0 via-${item.color}-900/20 to-${item.color}-900/0 opacity-0 group-hover/hud:opacity-100 transition-all duration-700 z-0 mix-blend-screen`} />


                         {/* --- CONTENIDO DEL PANEL (TEXTO) --- */}
                         <div className="relative z-20">
                           {/* Header */}
                           <div className="mb-6 flex justify-between items-start">
                               <div>
                               
                                  <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-2 drop-shadow-lg">
                                    {item.title}
                                  </h3>
                                  <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
                                    {item.subtitle}
                                  </p>
                               </div>
                               {/* Icono de la tecnología que brilla */}
                               <div className={`hidden md:flex p-3 rounded-xl border border-${item.color}-500/20 bg-${item.color}-500/5 text-${item.color}-400 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover/hud:shadow-[0_0_20px_rgba(${item.color === 'cyan' ? '34,211,238' : item.color === 'fuchsia' ? '232,121,249' : '52,211,153'},0.4)] transition-shadow`}>
                                  <Sparkles size={24} />
                               </div>
                           </div>

                           {/* Descripción */}
                           <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                             {item.description}
                           </p>

                           {/* Problema vs Solución */}
                           <div className="space-y-3 mb-8 bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm relative overflow-hidden">
                               <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent opacity-50 pointer-events-none" />
                               <div className="flex gap-3 items-start relative z-10">
                                   <span className="text-[10px] font-black text-red-500 uppercase tracking-widest mt-0.5 min-w-[60px]">PROBLEMA:</span>
                                   <p className="text-xs text-gray-300 font-mono leading-tight opacity-80">"{item.pain}"</p>
                               </div>
                               <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
                               <div className="flex gap-3 items-start relative z-10 pt-2">
                                   <span className={`text-[10px] font-black text-${item.color}-400 uppercase tracking-widest mt-0.5 min-w-[60px]`}>SOLUCIÓN:</span>
                                   <p className="text-sm font-bold text-white italic leading-tight">{item.gain}</p>
                               </div>
                           </div>

                           {/* Grilla de Specs */}
                           <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                               {item.specs.map((spec, i) => (
                                 <div key={i}>
                                     <p className="text-[9px] font-mono text-gray-500 uppercase mb-0.5">{spec.label}</p>
                                     <p className="text-base font-bold text-white tracking-tight">{spec.val}</p>
                                 </div>
                               ))}
                           </div>

                           {/* Tech Stack */}
                           <div className="mt-6 flex flex-wrap gap-2">
                               {item.techStack.map((tech, i) => (
                                 <span key={i} className="px-2 py-1 bg-black/30 border border-white/10 text-[9px] font-mono text-gray-400 uppercase rounded hover:bg-white/10 hover:text-white transition-colors hover:border-white/30">
                                     {tech}
                                 </span>
                               ))}
                           </div>
                         </div>

                      </div>
                   </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow { animation: spin 15s linear infinite; }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .font-outline-2 { -webkit-text-stroke: 1px rgba(255,255,255,0.1); }
      `}} />
    </section>
  );
};
import { Tilt } from 'react-tilt';
import { Fade } from "react-awesome-reveal";
import { Box, Coffee, Cpu, ArrowUpRight, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

// Configuración del Tilt para efecto 3D Parallax
const defaultOptions = {
    reverse: false,
    max: 15,            // Menos inclinación para que sea más elegante
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

const TechCard = ({ title, subtitle, icon: Icon, color, image, index }) => (
  <Tilt options={defaultOptions} className="h-full">
    {/* Contenedor Principal: Cristal Oscuro Premium */}
    <div className="relative h-full rounded-[2rem] bg-[#092a53]/90 backdrop-blur-xl border border-white/10 overflow-hidden group shadow-2xl hover:shadow-[0_20px_50px_rgba(9,42,83,0.5)] transition-all duration-500">
      
      {/* 1. IMAGEN SUPERIOR CON OVERLAY */}
      <div className="h-48 w-full relative overflow-hidden">
        <div className={cn("absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110", image)} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092a53] to-transparent" />
        
        {/* Número Gigante de Fondo */}
        <div className="absolute top-2 right-4 text-8xl font-black text-white/5 select-none font-mono">
            0{index}
        </div>
      </div>

      {/* 2. ICONO FLOTANTE (Efecto 3D) */}
      <div className="absolute top-36 left-8 transform translate-z-10">
        <div className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-md group-hover:scale-110 transition-transform duration-500",
            "bg-[#092a53] text-white" // Fondo sólido para tapar la imagen
        )}>
            <Icon size={32} className={cn("transition-colors duration-300", color)} />
        </div>
      </div>

      {/* 3. CONTENIDO TEXTO */}
      <div className="p-8 pt-10 mt-2 relative z-10">
        {/* Badge de Estado */}
        <div className="absolute top-10 right-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
            <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">System Ready</span>
        </div>

        <h3 className="text-3xl font-black text-white mb-3 uppercase italic tracking-tight group-hover:text-optexa-cyan transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 font-medium text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
          {subtitle}
        </p>

        {/* Botón CTA que aparece */}
        <div className="flex items-center gap-2 text-optexa-cyan text-sm font-bold uppercase tracking-wider group/btn cursor-pointer">
            Ver Detalles
            <div className="p-1 rounded-full bg-optexa-cyan/10 group-hover/btn:bg-optexa-cyan group-hover/btn:text-black transition-all">
                <ArrowUpRight size={16} />
            </div>
        </div>
      </div>

      {/* Borde Brillante en Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-optexa-cyan/30 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
    </div>
  </Tilt>
);

export const Showcase = () => {
  return (
    // IMPORTANTE: bg-transparent para ver el fondo animado global
    <section className="py-24 px-6 relative z-10 bg-transparent">
      
      <div className="max-w-7xl mx-auto">
        {/* HEADER MEJORADO */}
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-optexa-dark/10 mb-6 shadow-sm">
                <Zap size={14} className="text-optexa-main" fill="currentColor"/>
                <span className="text-xs font-black text-optexa-dark tracking-[0.2em] uppercase">Tecnología propietaria</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-optexa-dark leading-none mb-6">
                INGENIERÍA DE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-optexa-main to-optexa-cyan">
                    PRECISIÓN ABSOLUTA
                </span>
            </h2>
            <p className="text-gray-600 text-lg font-medium">
                Hardware robusto diseñado para entornos exigentes. 
                Cada unidad está conectada a nuestra red neural central.
            </p>
        </div>

        {/* GRID DE TARJETAS */}
        <Fade cascade damping={0.1} direction="up" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
            
            <TechCard 
              index="1"
              title="Stock-Bot X1" 
              subtitle="El caballo de batalla. Levanta 1.2 toneladas a 5 metros de altura. Navegación láser sin guías."
              icon={Box}
              color="text-optexa-cyan"
              image="bg-[url('https://images.unsplash.com/photo-1535372910742-d281c790c5a5?q=80&w=2076&auto=format&fit=crop')]"
            />

            <TechCard 
              index="2"
              title="Waiter-Pro" 
              subtitle="Interacción humana redefinida. 4 bandejas inteligentes, evasión de obstáculos y pagos integrados."
              icon={Coffee}
              color="text-pink-400"
              image="bg-[url('https://plus.unsplash.com/premium_photo-1682124651258-410b252453e3?q=80&w=2070&auto=format&fit=crop')]"
            />

            <TechCard 
              index="3"
              title="Optexa Core" 
              subtitle="La mente colmena. Controla flotas mixtas, optimiza rutas en tiempo real y predice fallas."
              icon={Cpu}
              color="text-purple-400"
              image="bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop')]"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};
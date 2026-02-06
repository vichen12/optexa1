import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Box, Coffee, Cpu, ArrowUpRight, Crosshair, Activity, ScanLine, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

// Configuración del efecto 3D (Suave y elegante)
const tiltOptions = {
    reverse: false,
    max: 15,        // Un poco más de ángulo para que se note el 3D
    perspective: 1000,
    scale: 1.02,    // Pequeño zoom al pasar el mouse
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

// --- COMPONENTE DE TARJETA TECH 3D ---
const TechCard = ({ title, subtitle, icon: Icon, image, className, delay, accentColor }) => {
  // Extraemos el color base (ej: "cyan-400") para usarlo en sombras dinámicas
  const colorClass = accentColor.replace('border-', ''); 

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn("h-full relative z-10", className)}
    >
      {/* 1. WRAPPER TILT (Hace la magia 3D) */}
      <Tilt options={tiltOptions} className="h-full w-full">
        
        <div className={cn(
            "relative h-full w-full rounded-[2rem] overflow-hidden group transition-all duration-500",
            // FONDO DE CRISTAL: Importante el backdrop-blur y la opacidad baja para ver el fondo global
            "bg-[#092a53]/40 backdrop-blur-xl border border-white/10", 
            // HOVER: El borde se ilumina del color del acento
            `hover:border-${colorClass} hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]`
        )}>

          {/* 2. IMAGEN DE FONDO (Mezclada con el cristal) */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70"
            style={{ backgroundImage: `url(${image})` }}
          />
          
          {/* 3. CAPA DE CIRCUITO (Textura Tech) */}
          <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10 mix-blend-soft-light pointer-events-none" />

          {/* 4. SCANLINE (Línea de luz que baja) */}
          <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 animate-[scan_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-100" />

          {/* 5. ESQUINAS HUD (Detalle militar/tech) */}
          <div className={cn("absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 transition-colors duration-300 z-20 opacity-50 group-hover:opacity-100", accentColor)} />
          <div className={cn("absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 transition-colors duration-300 z-20 opacity-50 group-hover:opacity-100", accentColor)} />

          {/* 6. CONTENIDO */}
          <div className="relative z-30 h-full flex flex-col justify-between p-8">
            
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-white group-hover:bg-white group-hover:text-[#092a53] transition-all duration-300 shadow-lg">
                <Icon size={24} />
              </div>
              
              {/* Badge de estado */}
              <div className="flex items-center gap-2 px-2 py-1 bg-black/40 rounded border border-white/5 backdrop-blur-sm">
                <Activity size={10} className={cn("animate-pulse", accentColor.replace('border-', 'text-'))} />
                <span className="text-[10px] font-mono text-white/60 tracking-wider">ONLINE</span>
              </div>
            </div>

            {/* Body */}
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tight leading-none drop-shadow-md group-hover:translate-x-1 transition-transform">
                {title}
              </h3>
              <p className="text-blue-100/90 text-sm font-medium border-l-2 border-white/20 pl-4 mb-6 leading-relaxed group-hover:text-white transition-colors">
                {subtitle}
              </p>
              
              <button className={cn(
                "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 group-hover:gap-4",
                accentColor.replace('border-', 'text-')
              )}>
                Ver Specs <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Glow interior al hacer hover */}
          <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr",
              `from-${colorClass} to-transparent`
          )} />
        </div>
      </Tilt>
    </motion.div>
  );
};

// --- SECCIÓN PRINCIPAL ---
export const Services = () => {
  return (
    // IMPORTANTE: bg-transparent para que se vea tu fondo animado global
    <section id="servicios" className="py-32 px-6 relative z-10 bg-transparent overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER DE SECCIÓN */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
               <Crosshair size={16} className="text-optexa-cyan animate-[spin_10s_linear_infinite]" />
               <span className="text-optexa-cyan font-mono text-xs tracking-[0.3em] uppercase">
                 Matriz de Hardware v3.0
               </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-optexa-dark leading-none">
              ECOSISTEMA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-optexa-main to-optexa-cyan">
                AUTÓNOMO
              </span>
            </h2>
          </div>
          
          <div className="hidden md:block text-right">
             <div className="flex items-center gap-3 text-optexa-dark/70 font-bold font-mono bg-white/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/50">
                <ScanLine size={18} className="animate-pulse text-green-600"/>
                SYSTEM STATUS: <span className="text-green-600">OPERATIONAL</span>
             </div>
          </div>
        </div>

        {/* --- GRID AVANZADO --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          {/* 1. TARJETA PRINCIPAL (LOGÍSTICA) - FOTO ARREGLADA */}
          <TechCard 
            title="Logística Pesada"
            subtitle="AGVs industriales capaces de mover 1.2 toneladas con precisión milimétrica en oscuridad total."
            icon={Box}
            // Foto de depósito automatizado real
            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            className="md:col-span-8 md:row-span-2 min-h-[400px]"
            delay={0.1}
            accentColor="border-cyan-400"
          />

          {/* 2. TARJETA SECUNDARIA (MOZOS) */}
          <TechCard 
            title="Service Bots"
            subtitle="Interacción humana fluida y entrega rápida."
            icon={Coffee}
            image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
            className="md:col-span-4 md:row-span-1 min-h-[280px]"
            delay={0.2}
            accentColor="border-pink-500"
          />

          {/* 3. TARJETA TERCIARIA (SOFTWARE) */}
          <TechCard 
            title="Core IA"
            subtitle="Control de enjambre centralizado."
            icon={Cpu}
            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            className="md:col-span-4 md:row-span-1 min-h-[280px]"
            delay={0.3}
            accentColor="border-violet-500"
          />

        </div>
      </div>
    </section>
  );
};
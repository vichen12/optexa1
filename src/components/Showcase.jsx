import { useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { Fade } from "react-awesome-reveal";
import { Box, Coffee, Cpu, ArrowUpRight, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

const TechCard = ({ title, subtitle, icon: Icon, color, image, index, seoDesc }) => (
  <article className="h-full"> {/* Cambiado a article para SEO */}
    <Tilt options={defaultOptions} className="h-full">
      <div className="relative h-full rounded-[2rem] bg-[#092a53]/90 backdrop-blur-xl border border-white/10 overflow-hidden group shadow-2xl hover:shadow-[0_20px_50px_rgba(9,42,83,0.5)] transition-all duration-500">
        
        {/* 1. IMAGEN CON IDENTIFICACIÓN PARA BOTS */}
        <div className="h-48 w-full relative overflow-hidden">
          <div 
            role="img" 
            aria-label={seoDesc} // Descripción para Google Imágenes
            className={cn("absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110", image)} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092a53] to-transparent" />
          
          <div className="absolute top-2 right-4 text-8xl font-black text-white/5 select-none font-mono">
              0{index}
          </div>
        </div>

        {/* 2. ICONO */}
        <div className="absolute top-36 left-8 transform translate-z-10">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-md group-hover:scale-110 transition-transform duration-500 bg-[#092a53] text-white">
              <Icon size={32} className={cn("transition-colors duration-300", color)} />
          </div>
        </div>

        {/* 3. CONTENIDO TEXTO */}
        <div className="p-8 pt-10 mt-2 relative z-10">
          <div className="absolute top-10 right-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
              <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">Operativo</span>
          </div>

          <h3 className="text-3xl font-black text-white mb-3 uppercase italic tracking-tight group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-300 font-medium text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
            {subtitle}
          </p>

          <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wider group/btn cursor-pointer">
              Especificaciones Técnicas
              <div className="p-1 rounded-full bg-cyan-400/10 group-hover/btn:bg-cyan-400 group-hover/btn:text-black transition-all">
                  <ArrowUpRight size={16} />
              </div>
          </div>
        </div>

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
      </div>
    </Tilt>
  </article>
);

export const Showcase = () => {
  // SEO DATA para inyectar en el motor de búsqueda
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Stock-Bot X1",
        "description": "Robot autónomo de almacén con capacidad de 1.2 toneladas."
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Waiter-Pro",
        "description": "Robot de servicio inteligente para interacción humana."
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Optexa Core",
        "description": "Software de control de flotas mixtas mediante inteligencia artificial."
      }
    ]
  };

  return (
    <section 
      id="showcase" 
      aria-label="Catálogo de Tecnología Optexa"
      className="py-24 px-6 relative z-10 bg-transparent"
    >
      {/* Inyección de Schema invisible para Google */}
      <script type="application/ld+json">
        {JSON.stringify(productsSchema)}
      </script>

      <div className="max-w-7xl mx-auto">
        <header className="mb-20 md:text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10 mb-6 shadow-sm">
                <Zap size={14} className="text-cyan-400" fill="currentColor"/>
                <span className="text-xs font-black text-white/70 tracking-[0.2em] uppercase">Tecnología propietaria</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-6">
                HARDWARE DE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    PRECISIÓN ABSOLUTA
                </span>
            </h2>
            <p className="text-gray-400 text-lg font-medium">
                Unidades robustas diseñadas en Argentina para entornos industriales exigentes. 
                Sincronización total con el ecosistema digital Optexa.
            </p>
        </header>

        <Fade cascade damping={0.1} direction="up" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
            
            <TechCard 
              index="1"
              title="Stock-Bot X1" 
              subtitle="Optimización logística: Levanta 1.2 toneladas a 5 metros. Navegación láser autónoma sin guías físicas."
              seoDesc="Robot autónomo AGV para almacenes industriales Mendoza"
              icon={Box}
              color="text-cyan-400"
              image="bg-[url('https://images.unsplash.com/photo-1535372910742-d281c790c5a5?q=80&w=2076&auto=format&fit=crop')]"
            />

            <TechCard 
              index="2"
              title="Waiter-Pro" 
              subtitle="Robótica de servicio: Interacción humana, evasión de obstáculos y sistema de pagos integrado."
              seoDesc="Robot asistente para gastronomía y hotelería"
              icon={Coffee}
              color="text-pink-400"
              image="bg-[url('https://plus.unsplash.com/premium_photo-1682124651258-410b252453e3?q=80&w=2070&auto=format&fit=crop')]"
            />

            <TechCard 
              index="3"
              title="Optexa Core" 
              subtitle="Inteligencia central: Gestión de flotas, optimización de rutas mediante IA y predicción de fallos."
              seoDesc="Software de control logístico y redes neurales"
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
import { cn } from '../lib/utils';
import { Box, ShieldCheck, Activity } from 'lucide-react';

const companiesRow1 = [
  { name: "AMAZON ROBOTICS", category: "E-commerce" },
  { name: "WALMART", category: "Retail" },
  { name: "MERCADO LIBRE", category: "Logística" },
  { name: "DHL SUPPLY", category: "Distribución" },
  { name: "FEDEX", category: "Logística" },
  { name: "OCADO", category: "Smart Storage" },
  { name: "ALIBABA", category: "E-commerce" }
];

const companiesRow2 = [
  { name: "LA ANÓNIMA", category: "Retail AR" },
  { name: "TOYOTA", category: "Automotriz" },
  { name: "SIEMENS", category: "Ingeniería" },
  { name: "NESTLÉ", category: "Consumo Masivo" },
  { name: "ARCOR", category: "Industria AR" },
  { name: "UNILEVER", category: "Global" },
  { name: "COCA-COLA", category: "Distribución" }
];

const CompanyTag = ({ name, inverse = false }) => (
  <div 
    role="listitem"
    aria-label={`Sistemas ASRS aplicados en ${name}`}
    className={cn(
      "flex items-center gap-5 px-8 py-4 mx-4 rounded-xl border-2 uppercase transition-all hover:scale-105 cursor-default group",
      inverse 
        ? "border-slate-950 text-slate-950 bg-white/90 shadow-[4px_4px_0px_#000000]" 
        : "border-white/20 text-white bg-slate-950/90 backdrop-blur-md shadow-[4px_4px_0px_#22d3ee]"
    )}
  >
    <div className="flex gap-[2px] h-8 opacity-30 group-hover:opacity-100 transition-opacity" aria-hidden="true">
      <div className="w-[4px] bg-current h-full" />
      <div className="w-[1px] bg-current h-full" />
      <div className="w-[2px] bg-current h-full" />
    </div>

    <div className="flex flex-col items-start leading-none">
    
      <span className="font-black tracking-tighter text-2xl italic">{name}</span>
    </div>
  </div>
);

export const TrustedBy = () => {
  return (
    <section 
      className="relative pt-10 pb-20 overflow-hidden bg-transparent z-20"
      aria-labelledby="trusted-by-title"
    >
      <div className="max-w-4xl mx-auto mb-16 px-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-3 text-cyan-500 font-mono text-[10px] font-bold tracking-[0.5em] uppercase">
          <Activity size={14} className="animate-pulse" />
          <span>Validación de Industria 4.0</span>
        </div>
        
       
         <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
             EL ESTÁNDAR DE LOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 animate-gradient-x font-outline-2">LÍDERES GLOBALES.</span>
           </h2>
      </div>

      {/* --- CINTAS DE MOVIMIENTO RÁPIDO --- */}
      <div className="-rotate-1 transform scale-105 origin-center" role="list">
        
        {/* FILA 1: Velocidad aumentada a 15s */}
        <div className="flex bg-cyan-400/20 backdrop-blur-sm py-10 mb-8 border-y border-slate-950/5">
          <div className="flex animate-[scroll_15s_linear_infinite] hover:[animation-play-state:paused]">
            {[...companiesRow1, ...companiesRow1].map((c, i) => (
              <CompanyTag key={i} name={c.name}  inverse={true} />
            ))}
          </div>
        </div>

        {/* FILA 2: Velocidad aumentada a 20s */}
        <div className="flex bg-slate-950 py-10 border-y border-white/5 shadow-2xl">
          <div className="flex animate-[scroll-reverse_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...companiesRow2, ...companiesRow2].map((c, i) => (
              <CompanyTag key={i} name={c.name}  inverse={false} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        /* Clases de animación con tiempos reducidos para mayor velocidad */
        .animate-scroll { animation: scroll 15s linear infinite; }
        .animate-scroll-reverse { animation: scroll-reverse 20s linear infinite; }
      `}} />
    </section>
  );
};
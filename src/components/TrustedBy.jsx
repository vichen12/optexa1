import { cn } from '../lib/utils';
import { Box, ShieldCheck } from 'lucide-react';

// SEO: Listas de empresas como datos constantes para facilitar el rastreo
const companiesRow1 = [
  "AMAZON ROBOTICS", "WALMART", "MERCADO LIBRE", "DHL SUPPLY", 
  "TARGET", "ALIBABA", "FEDEX", "OCADO", "RAKUTEN"
];

const companiesRow2 = [
  "LA ANÓNIMA", "TOYOTA", "LA PIAMONTESA", "COCA-COLA", 
  "NESTLÉ", "SIEMENS", "BMW", "ARCOR", "UNILEVER"
];

const CompanyTag = ({ name, inverse = false }) => (
  <div 
    role="listitem"
    title={`Empresa operando con tecnología ASRS: ${name}`}
    className={cn(
      "flex items-center gap-5 px-8 py-4 mx-4 rounded-xl border-2 uppercase transition-all hover:scale-110 cursor-default",
      inverse 
        ? "border-slate-950 text-slate-950 bg-white/90 shadow-[6px_6px_0px_#000000]" 
        : "border-white text-white bg-slate-950/90 backdrop-blur-md shadow-[6px_6px_0px_#22d3ee]"
    )}
  >
    {/* Código de barras técnico (Decorativo pero con significado semántico) */}
    <div className="flex gap-[2px] h-8 opacity-30" aria-hidden="true">
      <div className="w-[4px] bg-current h-full" />
      <div className="w-[1px] bg-current h-full" />
      <div className="w-[2px] bg-current h-full" />
    </div>

    <div className="flex flex-col items-start leading-none">
      {/* SEO KEYWORD: Refuerza el estado del sistema en cada tag */}
      <span className={cn(
        "text-[8px] font-mono font-black tracking-[0.2em] mb-1.5",
        inverse ? "text-slate-500" : "text-optexa-cyan"
      )}>
      </span>
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
      {/* --- SEO HEADER: Metadata técnica invisible pero indexable --- */}
      <div className="sr-only">
        <h2>Líderes globales en logística inteligente y robótica ASRS</h2>
        <p>Optexa provee tecnología de almacenamiento automatizado utilizada por las empresas más eficientes del mundo.</p>
      </div>

      <div className="max-w-4xl mx-auto mb-16 px-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-3 text-optexa-cyan font-mono text-[10px] font-bold tracking-[0.5em] uppercase">
          <Box size={14} className="animate-pulse" />
          <span>Infraestructura Global ASRS</span>
        </div>
        
        {/* SEO: H2 con degradado cian para legibilidad sobre orbes */}
        <h2 
          id="trusted-by-title"
          className="text-4xl md:text-5xl font-black italic text-slate-950 tracking-tighter drop-shadow-sm"
        >
          LAS EMPRESAS QUE YA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-optexa-cyan to-blue-600 px-4 py-1">
            OPERAN CON ASRS.
          </span>
        </h2>
        
        <p className="text-slate-800/60 font-medium text-lg italic">
          No es el futuro, es el estándar actual de los <strong>líderes en eficiencia logística</strong>.
        </p>
      </div>

      {/* --- CONTENEDOR DE CINTAS --- */}
      <div className="-rotate-2 transform scale-105 origin-center" role="list">
        
        {/* FILA 1: Retail & Global Logistics */}
        <div 
          className="flex bg-optexa-cyan/30 backdrop-blur-sm py-8 mb-10 border-y-2 border-slate-950/10"
          aria-label="Marcas de retail y logística global con sistemas robóticos"
        >
          <div className="flex animate-[scroll_25s_linear_infinite]">
            {[...companiesRow1, ...companiesRow1].map((company, i) => (
              <CompanyTag key={i} name={company} inverse={true} />
            ))}
          </div>
        </div>

        {/* FILA 2: Industria & Consumo Masivo */}
        <div 
          className="flex bg-slate-950/95 backdrop-blur-xl py-8 border-y-2 border-white/10"
          aria-label="Marcas industriales y de consumo masivo con almacenamiento automatizado"
        >
          <div className="flex animate-[scroll-reverse_30s_linear_infinite]">
            {[...companiesRow2, ...companiesRow2].map((company, i) => (
              <CompanyTag key={i} name={company} inverse={false} />
            ))}
          </div>
        </div>
      </div>

      {/* SEO FOOTER: Validación de industria */}
      <div className="mt-16 flex justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
         <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-slate-950" />
            <span className="text-[10px] font-mono font-bold text-slate-950 uppercase tracking-widest">
              Standard Compliance 2026
            </span>
         </div>
      </div>
    </section>
  );
};
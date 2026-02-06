import { cn } from '../lib/utils';

// Fila 1: Retail & Logística Global
const companiesRow1 = [
  "AMAZON ROBOTICS", "WALMART", "MERCADO LIBRE", "DHL SUPPLY", 
  "TARGET", "ALIBABA", "FEDEX", "OCADO", "RAKUTEN"
];

// Fila 2: Industria, Alimentos y Local (Lo que pediste)
const companiesRow2 = [
  "LA ANÓNIMA", "TOYOTA", "LA PIAMONTESA", "COCA-COLA", 
  "NESTLÉ", "SIEMENS", "BMW", "ARCOR", "UNILEVER"
];

const CompanyTag = ({ name, inverse = false }) => (
  <div className={cn(
    "flex items-center gap-3 px-6 py-2 mx-4 rounded-lg border-2 uppercase font-black tracking-tighter text-2xl whitespace-nowrap transition-all hover:scale-110 cursor-default",
    inverse 
      ? "border-optexa-dark text-optexa-dark bg-white/80 hover:bg-white shadow-[4px_4px_0px_#092a53]" 
      : "border-white text-white bg-optexa-dark/20 hover:bg-optexa-dark hover:shadow-[4px_4px_0px_#ffffff]"
  )}>
    {/* Simulamos un código de barras chiquito al lado del nombre */}
    <div className="flex gap-[2px] h-4 opacity-50">
      <div className="w-[2px] bg-current h-full" />
      <div className="w-[1px] bg-current h-full" />
      <div className="w-[3px] bg-current h-full" />
      <div className="w-[1px] bg-current h-full" />
    </div>
    {name}
  </div>
);

export const TrustedBy = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-transparent z-20">
      
      {/* Título flotante integrado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-optexa-dark text-white px-4 py-1 rounded-b-xl font-bold text-xs tracking-[0.3em] uppercase z-30 shadow-lg">
        Ecosistema ASRS Global
      </div>

      {/* Contenedor rotado para dar efecto "Divertido/Innovador" */}
      <div className="-rotate-2 transform scale-105 origin-center">
        
        {/* --- FILA 1 (Va hacia la IZQUIERDA) --- */}
        <div className="flex bg-optexa-cyan/10 backdrop-blur-md py-4 mb-6 border-y border-optexa-dark/10 shadow-lg">
          <div className="flex animate-[scroll_20s_linear_infinite]">
            {[...companiesRow1, ...companiesRow1, ...companiesRow1].map((company, i) => (
              <CompanyTag key={i} name={company} inverse={true} />
            ))}
          </div>
        </div>

        {/* --- FILA 2 (Va hacia la DERECHA - Reverse) --- */}
        <div className="flex bg-optexa-dark py-4 border-y border-white/20 shadow-xl">
          <div className="flex animate-[scroll-reverse_25s_linear_infinite]">
            {[...companiesRow2, ...companiesRow2, ...companiesRow2].map((company, i) => (
              <CompanyTag key={i} name={company} inverse={false} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
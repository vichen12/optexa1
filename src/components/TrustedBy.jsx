import { cn } from '../lib/utils';
import { Activity } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const companiesRow1 = [
  { name: "AMAZON ROBOTICS" },
  { name: "WALMART" },
  { name: "MERCADO LIBRE" },
  { name: "DHL SUPPLY" },
  { name: "FEDEX" },
  { name: "OCADO" },
  { name: "ALIBABA" },
];

const companiesRow2 = [
  { name: "PEPSI CO" },
  { name: "TOYOTA" },
  { name: "SIEMENS" },
  { name: "NESTLÉ" },
  { name: "JD.COM" },
  { name: "UNILEVER" },
  { name: "COCA-COLA" },
];

const CompanyTag = ({ name, inverse = false }) => (
  <div
    role="listitem"
    className={cn(
      "flex items-center gap-5 px-8 py-4 mx-4 rounded-xl border-2 uppercase transition-all hover:scale-105 cursor-default",
      inverse
        ? "border-slate-950 text-slate-950 bg-white/90 shadow-[4px_4px_0px_#000000]"
        : "border-white/20 text-white bg-slate-950/90 backdrop-blur-md shadow-[4px_4px_0px_#22d3ee]"
    )}
  >
    <div className="flex gap-[2px] h-8 opacity-30" aria-hidden="true">
      <div className="w-[4px] bg-current h-full" />
      <div className="w-[1px] bg-current h-full" />
      <div className="w-[2px] bg-current h-full" />
    </div>
    <span className="font-black tracking-tighter text-2xl italic">{name}</span>
  </div>
);

export const TrustedBy = () => {
  const { t, lang } = useLanguage();
  const tb = t.trustedBy;

  return (
    <section
      className="relative pt-16 pb-20 overflow-hidden bg-transparent z-20"
      aria-labelledby="trusted-by-title"
    >
      <div className="max-w-6xl mx-auto mb-12 px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-cyan-500 font-mono text-[10px] font-bold tracking-[0.5em] uppercase mb-4">
              <Activity size={14} className="animate-pulse" />
              <span>{tb.badge}</span>
            </div>
            <h2 id="trusted-by-title" className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              {tb.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 animate-gradient-x">
                {tb.titleGrad}
              </span>
            </h2>
          </div>
          <div className="md:text-right shrink-0 max-w-xs pb-1">
            <p className="text-white/40 text-sm font-light italic leading-relaxed">{tb.subtitle}</p>
          </div>
        </div>
        <div className="mt-8 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
      </div>

      <div className="-rotate-1 transform scale-105 origin-center" role="list">
        <div className="flex bg-cyan-400/20 backdrop-blur-sm py-10 mb-8 border-y border-slate-950/5">
          <div className="flex animate-[scroll_15s_linear_infinite] hover:[animation-play-state:paused]">
            {[...companiesRow1, ...companiesRow1].map((c, i) => (
              <CompanyTag key={i} name={c.name} inverse={true} />
            ))}
          </div>
        </div>

        <div className="flex bg-slate-950 py-10 border-y border-white/5 shadow-2xl">
          <div className="flex animate-[scroll-reverse_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...companiesRow2, ...companiesRow2].map((c, i) => (
              <CompanyTag key={i} name={c.name} inverse={false} />
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
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 5s ease infinite; }
        .font-outline-2 { -webkit-text-stroke: 1px rgba(255,255,255,0.1); }
      `}} />
    </section>
  );
};

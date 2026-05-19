import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, Cog, UtensilsCrossed, FlaskConical, HardHat, Snowflake } from 'lucide-react';

const INDUSTRIES = [
  { slug: 'ecommerce',        label: 'E-commerce & Retail',    icon: ShoppingBag,    desc: 'Velocidad, exactitud y capacidad para el pico de demanda.' },
  { slug: 'logistica-3pl',    label: 'Logística 3PL',          icon: Truck,          desc: 'Multicliente, multiproducto. Máxima flexibilidad operativa.' },
  { slug: 'manufactura',      label: 'Manufactura Industrial', icon: Cog,            desc: 'Just-in-time y kanban automatizado para producción.' },
  { slug: 'alimentos-bebidas',label: 'Alimentos & Bebidas',    icon: UtensilsCrossed,desc: 'FIFO garantizado y trazabilidad total por lote.' },
  { slug: 'farmaceutica',     label: 'Farmacéutica',           icon: FlaskConical,   desc: 'GMP, FIFO/FEFO y temperatura controlada certificada.' },
  { slug: 'mineria-oil-gas',  label: 'Minería & Oil & Gas',    icon: HardHat,        desc: 'Repuestos críticos disponibles 24/7 sin errores.' },
  { slug: 'cadena-frio',      label: 'Cadena de Frío',         icon: Snowflake,      desc: 'Robots que operan a -30°C sin exposición de personal.' },
];

export const IndustriasPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 z-20 bg-zinc-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">
            Sectores que automatizamos
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Industrias que{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
              >
                atendemos
              </span>
            </h2>
            <button
              onClick={() => navigate('/industrias')}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors group"
            >
              Ver todas las industrias
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.button
              key={ind.slug}
              onClick={() => navigate(`/industrias/${ind.slug}`)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              style={{ outline: 'none' }}
              className="relative text-left p-5 rounded-2xl border border-white/8 hover:border-cyan-400/40 hover:bg-zinc-900 transition-all duration-300 group bg-zinc-900/50"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:bg-cyan-400/15 transition-colors">
                <ind.icon size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-sm leading-tight mb-1.5">{ind.label}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{ind.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-[11px] text-white/25 group-hover:text-cyan-400 transition-colors">
                Ver soluciones <ArrowRight size={10} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, Cog, UtensilsCrossed, FlaskConical, HardHat, Snowflake } from 'lucide-react';

const INDUSTRIES = [
  { slug: 'e-commerce-retail',  label: 'E-commerce & Retail',   icon: ShoppingBag,     desc: 'Velocidad, exactitud y capacidad para el pico de demanda.', image: '/industria-ecommerce-retail.png' },
  { slug: 'logistica-3pl',      label: 'Logística 3PL',         icon: Truck,           desc: 'Multicliente, multiproducto. Máxima flexibilidad operativa.', image: '/industria-logistica-3pl.png' },
  { slug: 'manufactura',        label: 'Manufactura Industrial', icon: Cog,             desc: 'Just-in-time y kanban automatizado para producción.', image: '/productos-delie/industrias/manufactura.png' },
  { slug: 'alimentos-bebidas',  label: 'Alimentos & Bebidas',   icon: UtensilsCrossed, desc: 'FIFO garantizado y trazabilidad total por lote.', image: '/productos-delie/industrias/alimentos-bebidas.png' },
  { slug: 'farmaceutica',       label: 'Farmacéutica',          icon: FlaskConical,    desc: 'GMP, FIFO/FEFO y temperatura controlada certificada.', image: '/productos-delie/industrias/farmaceutica.png' },
  { slug: 'mineria-oil-gas',    label: 'Minería & Oil & Gas',   icon: HardHat,         desc: 'Repuestos críticos disponibles 24/7 sin errores.', image: '/productos-delie/industrias/mineria.png' },
  { slug: 'cadena-frio',        label: 'Cadena de Frío',        icon: Snowflake,       desc: 'Robots que operan a -30°C sin exposición de personal.', image: '/productos-delie/industrias/cadena-frio.png' },
];

export const IndustriasPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 z-20 bg-slate-900 border-t border-white/5">
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
              style={{ outline: 'none' }}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-cyan-400 transition-colors group"
            >
              Ver todas las industrias
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.button
              key={ind.slug}
              onClick={() => navigate(`/industrias/${ind.slug}`)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              style={{ outline: 'none' }}
              className="relative text-left rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 group bg-white"
            >
              {/* Photo */}
              <div className="h-36 overflow-hidden bg-gray-100 relative">
                <img
                  src={ind.image}
                  alt={ind.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(ev) => { ev.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent" />
                <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <ind.icon size={14} className="text-cyan-300" />
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-gray-900 font-bold text-sm leading-tight mb-1">{ind.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{ind.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-cyan-500 font-semibold group-hover:gap-2 transition-all">
                  Ver soluciones <ArrowRight size={10} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

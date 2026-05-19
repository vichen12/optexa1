import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WppFloat } from '../components/WppFloat';
import { ArrowRight, ShoppingBag, Truck, Cog, UtensilsCrossed, FlaskConical, HardHat, Snowflake } from 'lucide-react';

const INDUSTRIES = [
  { slug: 'ecommerce',         label: 'E-commerce & Retail',    icon: ShoppingBag,    tagline: 'Velocidad y exactitud para el pico de demanda.',  desc: 'Automatizá el fulfillment y triplicá la capacidad de picking en el mismo espacio.', stats: [{ v: '3x', l: 'Velocidad de picking' }, { v: '99.9%', l: 'Exactitud' }, { v: '-60%', l: 'Costo de labor' }] },
  { slug: 'logistica-3pl',     label: 'Logística 3PL',          icon: Truck,          tagline: 'Multicliente, multiproducto. Máxima flexibilidad.',  desc: 'Operá múltiples clientes en el mismo almacén con slots dinámicos.', stats: [{ v: '40%', l: 'Reducción espacio' }, { v: '5x', l: 'Densidad' }, { v: '24/7', l: 'Operación' }] },
  { slug: 'manufactura',       label: 'Manufactura Industrial', icon: Cog,            tagline: 'Just-in-time y kanban automatizado.',                desc: 'Sincronizá el almacén de insumos con la línea de producción.', stats: [{ v: '-35%', l: 'Tiempo búsqueda' }, { v: '100%', l: 'Trazabilidad' }, { v: '+20%', l: 'OEE' }] },
  { slug: 'alimentos-bebidas', label: 'Alimentos & Bebidas',    icon: UtensilsCrossed,tagline: 'FIFO garantizado. Trazabilidad total.',               desc: 'FIFO automático, trazabilidad de lote en tiempo real e integración ERP.', stats: [{ v: 'FIFO', l: 'Garantizado' }, { v: '100%', l: 'Trazabilidad' }, { v: 'GS1', l: 'Compatible' }] },
  { slug: 'farmaceutica',      label: 'Farmacéutica',           icon: FlaskConical,   tagline: 'GMP, FEFO y temperatura controlada.',                desc: 'Cumplimiento GMP, FEFO automático y acceso controlado por usuario.', stats: [{ v: 'GMP', l: 'Compliant' }, { v: 'FEFO', l: 'Automático' }, { v: '21 CFR', l: 'Compatible' }] },
  { slug: 'mineria-oil-gas',   label: 'Minería & Oil & Gas',    icon: HardHat,        tagline: 'Repuestos críticos disponibles 24/7.',               desc: 'Gestioná miles de repuestos con disponibilidad 24/7 y cero errores.', stats: [{ v: '0', l: 'Errores despacho' }, { v: '-30%', l: 'Stock seg.' }, { v: '24/7', l: 'Disponibilidad' }] },
  { slug: 'cadena-frio',       label: 'Cadena de Frío',         icon: Snowflake,      tagline: 'Robots que operan a -30°C sin exposición.',          desc: 'Eliminá la exposición del personal a temperaturas extremas con automatización.', stats: [{ v: '-30°C', l: 'Temp. mínima' }, { v: '0', l: 'Personal expuesto' }, { v: '+50%', l: 'Uso cámara' }] },
];

export const IndustriasPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Industrias — Automatización ASRS por sector | Optexa Argentina';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="pt-28">

        <section className="py-20 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">Sectores que automatizamos</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Soluciones para{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
                  tu industria
                </span>
              </h1>
              <p className="text-white/60 text-xl max-w-3xl font-light leading-relaxed">
                Cada sector tiene sus propios desafíos de almacenamiento. Conocé cómo la tecnología DELIE resuelve los problemas específicos de tu industria.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 px-6 pb-24 bg-zinc-900 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <motion.button key={ind.slug} onClick={() => navigate(`/industrias/${ind.slug}`)}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ outline: 'none' }}
                className="relative text-left bg-zinc-950 border border-white/8 rounded-2xl p-7 hover:border-cyan-400/35 transition-all duration-300 group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/15 transition-colors">
                      <ind.icon size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-black text-base leading-tight">{ind.label}</h3>
                      <p className="text-white/35 text-xs mt-0.5">{ind.tagline}</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-white/35 group-hover:text-cyan-400 transition-colors mt-1 shrink-0" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{ind.desc}</p>
                <div className="flex gap-4">
                  {ind.stats.map((s, j) => (
                    <div key={j} className="text-center">
                      <p className="text-lg font-black text-cyan-400 leading-none">{s.v}</p>
                      <p className="text-[10px] text-white/35 mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      </main>
      <WppFloat />
      <Footer />
    </div>
  );
};

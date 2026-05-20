import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { ArrowRight, ShoppingBag, Truck, Cog, UtensilsCrossed, FlaskConical, HardHat, Snowflake, Zap, Shield, TrendingUp } from 'lucide-react';

export const INDUSTRIES = [
  {
    slug: 'ecommerce',
    label: 'E-commerce & Retail',
    icon: ShoppingBag,
    tagline: 'Velocidad y exactitud para el pico de demanda.',
    desc: 'Triplicá la velocidad de picking y escalá sin contratar personal en fechas clave como Black Friday o CyberMonday.',
    image: '/ECOMMERCE.png',
    stats: [{ v: '3x', l: 'Picking' }, { v: '99.9%', l: 'Exactitud' }, { v: '-60%', l: 'Labor' }],
  },
  {
    slug: 'logistica-3pl',
    label: 'Logística 3PL',
    icon: Truck,
    tagline: 'Multicliente, multiproducto. Máxima flexibilidad.',
    desc: 'Operá múltiples clientes en el mismo almacén con slots dinámicos y reportes en tiempo real por cliente.',
    image: '/Logística 3PL.png',
    stats: [{ v: '40%', l: 'Menos espacio' }, { v: '5x', l: 'Densidad' }, { v: '24/7', l: 'Operación' }],
  },
  {
    slug: 'manufactura',
    label: 'Manufactura Industrial',
    icon: Cog,
    tagline: 'Just-in-time y kanban automatizado.',
    desc: 'Sincronizá el almacén de insumos con tu línea de producción y eliminá paradas por falta de materiales.',
    image: '/productos deliecn/industrias que atendemos/Manufactura de Precisión.png',
    stats: [{ v: '-35%', l: 'Búsqueda' }, { v: '100%', l: 'Trazabilidad' }, { v: '+20%', l: 'OEE' }],
  },
  {
    slug: 'alimentos-bebidas',
    label: 'Alimentos & Bebidas',
    icon: UtensilsCrossed,
    tagline: 'FIFO garantizado. Trazabilidad total.',
    desc: 'FIFO automático, trazabilidad de lote en tiempo real y alertas de vencimiento para cero mermas.',
    image: '/productos deliecn/industrias que atendemos/Alimentos y Bebidas.png',
    stats: [{ v: 'FIFO', l: 'Garantizado' }, { v: '100%', l: 'Trazabilidad' }, { v: 'GS1', l: 'Compatible' }],
  },
  {
    slug: 'farmaceutica',
    label: 'Farmacéutica',
    icon: FlaskConical,
    tagline: 'GMP, FEFO y temperatura controlada.',
    desc: 'Cumplimiento GMP, FEFO automático y audit trail completo para ANMAT, FDA y normativas internacionales.',
    image: '/productos deliecn/industrias que atendemos/Farmacéutica.png',
    stats: [{ v: 'GMP', l: 'Compliant' }, { v: 'FEFO', l: 'Automático' }, { v: '21 CFR', l: 'Compatible' }],
  },
  {
    slug: 'mineria-oil-gas',
    label: 'Minería & Oil & Gas',
    icon: HardHat,
    tagline: 'Repuestos críticos disponibles 24/7.',
    desc: 'Localizá cualquier repuesto en segundos y eliminá paradas de equipo por stock no encontrado.',
    image: '/productos deliecn/industrias que atendemos/mineria.png',
    stats: [{ v: '0', l: 'Errores' }, { v: '-30%', l: 'Stock' }, { v: '24/7', l: 'Disponibilidad' }],
  },
  {
    slug: 'cadena-frio',
    label: 'Cadena de Frío',
    icon: Snowflake,
    tagline: 'Robots que operan a -30°C sin exposición.',
    desc: 'Maximizá cada m³ de cámara frigorífica mientras eliminás la exposición del personal al frío extremo.',
    image: '/productos deliecn/industrias que atendemos/Cadena de Frío.png',
    stats: [{ v: '-30°C', l: 'Temp. mín.' }, { v: '0', l: 'Personal exp.' }, { v: '+50%', l: 'Uso cámara' }],
  },
];

const PILLARS = [
  { icon: Zap, title: 'Implementación local', desc: 'Ingeniería, instalación y soporte en Argentina. Sin esperar tiempos de fábrica.' },
  { icon: Shield, title: 'Certificado ISO 9001 · CE', desc: 'Fabricante DELIE con más de 1.000 proyectos en 30 países y doble certificación.' },
  { icon: TrendingUp, title: 'ROI comprobado', desc: 'Retorno de inversión promedio entre 18 y 36 meses según el sector y el volumen.' },
];

export const IndustriasPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Industrias — Automatización ASRS por sector | STOKA Argentina';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img src="/ChatGPT Image 20 may 2026, 00_42_43.png" alt="Industrias STOKA"
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">Sectores que automatizamos · Argentina</p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              Soluciones para<br /><span className="text-cyan-400">tu industria</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Cada sector tiene sus propios desafíos de almacenamiento. Conocé cómo la tecnología DELIE los resuelve con ingeniería local.
            </p>
            <div className="flex flex-wrap gap-6">
              {[{ value: '7', label: 'Industrias' }, { value: '+1.000', label: 'Proyectos globales' }, { value: '24/7', label: 'Operación continua' }].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-black text-white italic">{s.value}</span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* PILARES */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                <p.icon size={18} className="text-cyan-500" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-sm mb-1">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-2">7 sectores · DELIE Argentina</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">Elegí tu industria</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <motion.button
                key={ind.slug}
                onClick={() => navigate(`/industrias/${ind.slug}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ outline: 'none' }}
                className="relative text-left rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Photo */}
                <div className="h-52 relative overflow-hidden">
                  <img src={ind.image} alt={ind.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <ind.icon size={16} className="text-cyan-400" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={16} className="text-cyan-400" />
                  </div>
                  {/* Stats sobre la foto */}
                  <div className="absolute bottom-3 left-4 right-4 flex gap-3">
                    {ind.stats.map((s, j) => (
                      <div key={j}>
                        <p className="text-cyan-400 font-black text-sm leading-none">{s.v}</p>
                        <p className="text-gray-400 text-[10px]">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info debajo */}
                <div className="bg-white border border-gray-200 border-t-0 rounded-b-2xl px-5 py-4 group-hover:border-cyan-300 transition-colors">
                  <h3 className="text-gray-900 font-black text-sm uppercase tracking-tight mb-1">{ind.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{ind.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">¿No encontrás tu sector?</p>
          <h2 className="text-white text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4">
            Trabajamos con <span className="text-cyan-400">cualquier industria</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
            Si tu sector no está en la lista, consultanos igual. Los sistemas DELIE son configurables para prácticamente cualquier tipo de almacenamiento.
          </p>
          <button onClick={() => navigate('/contacto')} style={{ outline: 'none' }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
            Consultar mi caso <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

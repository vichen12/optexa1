import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Factory, ShoppingCart, Truck, Pill, Snowflake, ArrowRight, Globe, CheckCircle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';

const REFERENCIAS = [
  {
    id: 'ecommerce-asia',
    industria: 'E-commerce',
    icon: ShoppingCart,
    region: 'Sudeste Asiático',
    sistema: 'ASRS MiniLoad + Tote Shuttle + WMS/WCS',
    capacidad: '250.000 totes',
    throughput: '12.000 pedidos/día',
    altura: '22 m',
    resumen: 'Centro de distribución e-commerce de gran escala. MiniLoad para repuestos electrónicos + tote shuttle para moda y accesorios. WMS integrado con ERP propio reduce el tiempo de ciclo de pedido de 48 a 6 horas.',
    tecnologias: ['Transelevador MiniLoad', 'Tote Shuttle 4 vías', 'WMS DELIE', 'WCS DELIE'],
  },
  {
    id: 'manufactura-europa',
    industria: 'Manufactura automotriz',
    icon: Factory,
    region: 'Europa Central',
    sistema: 'Transelevador Unit-Load + AGV + WCS',
    capacidad: '18.000 paletas',
    throughput: '800 mov/hora',
    altura: '35 m',
    resumen: 'Almacén de materia prima JIT para planta de componentes automotrices. Transelevadores de 35 m alimentan las líneas en secuencia exacta. AGVs conectan el ASRS con las líneas de producción a 400 m sin intervención humana.',
    tecnologias: ['Transelevador Unit-Load doble mástil', 'AGV 2 t', 'WCS DELIE', 'Integración SAP'],
  },
  {
    id: 'farmaceutica-europa',
    industria: 'Farmacéutica GxP',
    icon: Pill,
    region: 'Europa Occidental',
    sistema: 'ASRS MiniLoad + VLM + WMS GxP',
    capacidad: '80.000 contenedores',
    throughput: '3.500 líneas picking/hora',
    altura: '14 m',
    resumen: 'Centro de distribución regulado bajo normas GxP. WMS con trazabilidad de lote y número de serie. Validación IQ/OQ/PQ completa. Exactitud de inventario: 99,99%.',
    tecnologias: ['Transelevador MiniLoad', 'VLM', 'WMS GxP', 'Trazabilidad lote/serie'],
  },
  {
    id: 'camara-fria',
    industria: 'Cadena de frío',
    icon: Snowflake,
    region: 'América del Sur',
    sistema: 'ASRS Cámara Fría −22 °C + WMS FEFO',
    capacidad: '12.000 paletas',
    throughput: '400 mov/hora',
    altura: '28 m',
    resumen: 'Almacén automático de congelados para exportación de proteínas. Reducción del 80% en exposición al calor al abrir cámaras. Ahorro energético del 35% vs. operación manual. Opera sin personal dentro de la cámara en turno nocturno.',
    tecnologias: ['Transelevador frío −22 °C', 'WMS FEFO estricto', 'Transportadores calefaccionados'],
  },
  {
    id: 'logistica-3pl',
    industria: 'Logística 3PL',
    icon: Truck,
    region: 'Medio Oriente',
    sistema: 'ASRS Multi-cliente + WMS multi-tenant',
    capacidad: '30.000 paletas · 6 clientes',
    throughput: '1.200 mov/hora',
    altura: '30 m',
    resumen: 'Operador 3PL gestiona 6 clientes en el mismo sistema físico con WMS multi-tenant. Cada cliente accede a su propio portal de visibilidad en tiempo real. Capacidad aumentada un 180% sin ampliar footprint.',
    tecnologias: ['Transelevador Unit-Load', 'WMS multi-tenant', 'Portal de clientes', 'Integración TMS'],
  },
  {
    id: 'retail',
    industria: 'Retail / Gran distribución',
    icon: ShoppingCart,
    region: 'Europa del Norte',
    sistema: 'Pallet Shuttle 4 vías + WMS FEFO',
    capacidad: '45.000 paletas',
    throughput: '1.600 mov/hora',
    altura: '20 m',
    resumen: 'Red de distribución de cadena de supermercados con +400 tiendas. Shuttle 4 vías opera FIFO sin pasillos adicionales, +60% densidad vs. racks convencionales. WMS gestiona slotting y FEFO por tienda automáticamente.',
    tecnologias: ['Pallet Shuttle 4 vías', 'Elevadores automáticos', 'WMS FEFO + slotting'],
  },
];

const DIFERENCIADORES = [
  { num: '+1.000', label: 'instalaciones globales activas' },
  { num: '+30',    label: 'países con presencia DELIE' },
  { num: '40 m',   label: 'altura máxima comprobada' },
  { num: 'CMMI 5', label: 'certificación software WMS/WCS' },
];

export const CasosDeExitoPage = () => {
  const canonical = 'https://www.stokagroup.com/casos-de-exito';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Proyectos de referencia", "item": canonical },
    ]
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Helmet>
        <title>Casos de Éxito | Almacenes Automatizados | STOKA</title>
        <meta name="description" content="Portafolio de referencia DELIE: +1.000 instalaciones ASRS en e-commerce, farmacéutica, alimentos, 3PL y manufactura. La tecnología que STOKA implementa en Argentina." />
        <meta property="og:title" content="Proyectos de Referencia DELIE | STOKA Argentina" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-linear-to-b from-slate-950 to-zinc-950 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-400">Proyectos de referencia</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <Globe size={14} className="text-cyan-400" />
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase">DELIE — portafolio global de referencia</p>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            La tecnología que instalamos<br />
            <span className="text-cyan-400">probada en +30 países</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mb-3">
            STOKA es el representante exclusivo de DELIE en Argentina y Chile. Estos son proyectos reales del portafolio global de DELIE — la misma tecnología, los mismos sistemas, disponibles hoy en Argentina.
          </p>
          <p className="text-slate-500 text-sm max-w-2xl mb-10">
            No tenemos casos argentinos publicados todavía: somos un equipo nuevo en un mercado que recién empieza a adoptar ASRS a gran escala. Lo que sí tenemos es acceso directo al fabricante, al soporte técnico y a los componentes que hicieron posibles estos proyectos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DIFERENCIADORES.map((s, i) => (
              <div key={i} className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-center">
                <p className="text-2xl font-black text-cyan-400 leading-none mb-1">{s.num}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referencias grid */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-8">Proyectos representativos por industria</h2>
        <div className="space-y-6">
          {REFERENCIAS.map((ref, i) => (
            <motion.article
              key={ref.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 }}
              className="bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-2xl overflow-hidden transition-colors"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/20 rounded-xl flex items-center justify-center shrink-0">
                      <ref.icon size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{ref.industria}</p>
                      <p className="flex items-center gap-1 text-sm text-slate-400 mt-0.5">
                        <MapPin size={11} />{ref.region}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 border border-slate-700 rounded-full px-3 py-1 shrink-0">{ref.sistema}</span>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">{ref.resumen}</p>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Capacidad', val: ref.capacidad },
                    { label: 'Throughput', val: ref.throughput },
                    { label: 'Altura', val: ref.altura },
                  ].map((s, j) => (
                    <div key={j} className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-center">
                      <p className="text-sm font-black text-white mb-0.5 leading-tight">{s.val}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {ref.tecnologias.map((t, j) => (
                    <span key={j} className="text-xs text-slate-400 border border-slate-700 rounded-full px-3 py-1 bg-slate-950">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-slate-600 text-[10px] mt-6 leading-relaxed">
          Proyectos del portafolio global de instalaciones DELIE. Datos técnicos tomados de la documentación oficial del fabricante. Las implementaciones en Argentina y Chile se diseñan a medida según el layout, throughput y requerimientos específicos de cada operación.
        </p>
      </section>

      {/* Bloque: por qué confiar en DELIE vía STOKA */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Por qué elegir DELIE a través de STOKA</p>
          <h2 className="text-2xl font-black text-white mb-8">Acceso directo al fabricante. Soporte local en Argentina.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Misma tecnología, precio local',
                desc: 'DELIE fabrica sus propios sistemas. Sin revendedores intermediarios europeos — el precio que pagás es 30-50% más bajo que las alternativas del mercado.',
              },
              {
                title: 'Ingeniero en Argentina desde el día 1',
                desc: 'El equipo técnico de STOKA gestiona el proyecto completo en Argentina: ingeniería de detalle, instalación, integración con tu ERP y soporte posventa.',
              },
              {
                title: 'Respaldo de +1.000 instalaciones',
                desc: 'Cada componente que instalamos en Argentina ya fue probado en operaciones industriales reales a escala mundial. No experimentamos con tu depósito.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-950 border border-slate-700 rounded-2xl p-6"
              >
                <CheckCircle size={18} className="text-cyan-400 mb-4" />
                <h3 className="font-black text-white text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 border-t border-slate-800 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">¿Cómo se aplica esto a tu operación?</h2>
          <p className="text-slate-400 mb-8">Analizamos tu almacén, bodega o depósito y te mostramos qué instalación DELIE es más parecida a lo que necesitás. Consulta técnica gratuita con ingeniero especializado.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors flex items-center gap-2 justify-center">
              Solicitar consulta técnica <ArrowRight size={16} />
            </Link>
            <Link to="/catalogo" className="border border-slate-600 hover:border-cyan-400/50 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-colors">
              Ver catálogo de sistemas
            </Link>
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

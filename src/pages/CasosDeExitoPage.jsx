import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Factory, ShoppingCart, Truck, Pill, Snowflake, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const CASOS = [
  {
    id: 'ecommerce-asia',
    industria: 'E-commerce',
    icon: ShoppingCart,
    region: 'Sudeste Asiático',
    pais: 'Indonesia',
    sistema: 'ASRS MiniLoad + Tote Shuttle + WMS/WCS',
    capacidad: '250.000 totes',
    throughput: '12.000 pedidos/día',
    altura: '22 m',
    highlight: 'Uno de los centros de distribución e-commerce más grandes del sudeste asiático. El sistema MiniLoad maneja la zona de almacenamiento de repuestos electrónicos; el tote shuttle gestiona el stock de moda y accesorios. El WMS integrado con el ERP propio reduce el tiempo de ciclo de pedido de 48 a 6 horas.',
    tecnologias: ['Transelevador MiniLoad', 'Tote Shuttle 4 vías', 'WMS DELIE', 'WCS DELIE', 'Transportadores'],
  },
  {
    id: 'manufactura-europa',
    industria: 'Manufactura automotriz',
    icon: Factory,
    region: 'Europa Central',
    pais: 'Alemania',
    sistema: 'Transelevador Unit-Load + AGV + WCS',
    capacidad: '18.000 paletas',
    throughput: '800 mov/hora',
    altura: '35 m',
    highlight: 'Almacén de materia prima y WIP para planta de fabricación de componentes automotrices. Los transelevadores de 35 metros alimentan las líneas de producción en secuencia exacta (JIT). Los AGV conectan el ASRS con las líneas a 400 metros de distancia sin intervención humana. Tiempo de ciclo material → línea: 4 minutos.',
    tecnologias: ['Transelevador Unit-Load (doble mástil)', 'AGV 2 toneladas', 'WCS DELIE', 'Integración SAP', 'Transportadores de cadena'],
  },
  {
    id: 'farmaceutica-europa',
    industria: 'Farmacéutica',
    icon: Pill,
    region: 'Europa Occidental',
    pais: 'Francia',
    sistema: 'ASRS MiniLoad + VLM + WMS GxP',
    capacidad: '80.000 contenedores',
    throughput: '3.500 líneas picking/hora',
    altura: '14 m',
    highlight: 'Centro de distribución farmacéutica regulado bajo normas GxP. El WMS tiene módulo de trazabilidad de lote y número de serie con validación IQ/OQ/PQ completa. El sistema cumple con la Directiva 2011/62/EU (medicamentos falsificados). Exactitud de inventario: 99,99%.',
    tecnologias: ['Transelevador MiniLoad', 'VLM para picking manual', 'WMS con módulo GxP', 'Trazabilidad de lote/serie', 'Integración con sistema REMS'],
  },
  {
    id: 'camara-fria-latam',
    industria: 'Cadena de frío',
    icon: Snowflake,
    region: 'América del Sur',
    pais: 'Brasil',
    sistema: 'ASRS Cámara Fría (-22 °C) + WMS',
    capacidad: '12.000 paletas congeladas',
    throughput: '400 mov/hora',
    altura: '28 m',
    highlight: 'Almacén automático de congelados para exportación de proteínas. La automatización reduce el tiempo de exposición del producto al calor en apertura de cámaras en un 80%. El ahorro energético vs. operación manual es del 35% por menor entrada de calor. El sistema opera sin presencia de operarios dentro de la cámara durante los turnos nocturnos.',
    tecnologias: ['Transelevador Unit-Load frío (-22 °C)', 'Aislamiento térmico de mástil', 'WMS con FEFO estricto', 'Transportadores de rodillos con calefacción de emergencia'],
  },
  {
    id: 'logistica-3pl-medio-oriente',
    industria: 'Logística 3PL',
    icon: Truck,
    region: 'Medio Oriente',
    pais: 'Emiratos Árabes Unidos',
    sistema: 'ASRS Multi-cliente + WMS multi-tenant',
    capacidad: '30.000 paletas (6 clientes)',
    throughput: '1.200 mov/hora',
    altura: '30 m',
    highlight: 'Operador logístico 3PL que usa el WMS multi-tenant de DELIE para gestionar 6 clientes distintos con inventarios separados en el mismo sistema físico. Cada cliente tiene acceso a su propio portal de visibilidad de inventario en tiempo real. El sistema aumentó la capacidad del operador en un 180% sin expansión de footprint.',
    tecnologias: ['Transelevador Unit-Load', 'WMS multi-tenant', 'Portal de clientes', 'WCS DELIE', 'Integración con TMS'],
  },
  {
    id: 'retail-europa',
    industria: 'Retail / Gran distribución',
    icon: ShoppingCart,
    region: 'Europa del Norte',
    pais: 'Países Bajos',
    sistema: 'Pallet Shuttle 4 vías + WMS',
    capacidad: '45.000 paletas',
    throughput: '1.600 mov/hora',
    altura: '20 m',
    highlight: 'Red de distribución de cadena de supermercados con +400 tiendas. El pallet shuttle de 4 vías permite operación FIFO sin pasillos adicionales, aumentando la densidad de almacenamiento un 60% vs. racks convencionales. El WMS gestiona la distribución por tienda y la fecha de vencimiento de cada paleta en modo FEFO automático.',
    tecnologias: ['Pallet Shuttle 4 vías', 'Elevadores automáticos', 'WMS con FEFO y slotting automático', 'Transportadores de cadena'],
  },
];

export const CasosDeExitoPage = () => {
  const canonical = 'https://www.stokagroup.com/casos-de-exito';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Casos de éxito", "item": canonical },
    ]
  };

  const articleSchemas = CASOS.map((c) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Automatización de almacenes ${c.industria} — ${c.pais}`,
    "description": c.highlight,
    "author": { "@id": "https://www.stokagroup.com/#organization" },
    "publisher": { "@id": "https://www.stokagroup.com/#organization" },
    "url": canonical,
    "keywords": `${c.industria}, ${c.sistema}, automatización almacenes, Daifuku, ASRS Argentina`,
  }));

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Helmet>
        <title>Casos de Éxito | Almacenes Automatizados | STOKA</title>
        <meta name="description" content="Proyectos de automatización Daifuku/Wynright implementados: e-commerce, farmacéutica, alimentos, 3PL. Resultados reales." />
        <meta property="og:title" content="Casos de Éxito | Almacenes Automatizados | STOKA" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {articleSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-950 to-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-400">Casos de éxito</span>
          </nav>
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Daifuku · Wynright · DELIE — implementaciones globales de referencia</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Proyectos de automatización<br />
            <span className="text-cyan-400">de referencia global</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Daifuku, Wynright y DELIE son los referentes mundiales en automatización de almacenes. Estos son casos representativos por industria —la misma tecnología que STOKA implementa en Argentina y Chile, probada a escala global.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '+1.000', label: 'Instalaciones activas' },
              { num: '+30', label: 'Países' },
              { num: '40 m', label: 'Altura máx.' },
              { num: 'CMMI 5', label: 'Certificación software' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-center">
                <p className="text-2xl font-black text-cyan-400 leading-none mb-1">{s.num}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases grid */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="space-y-8">
          {CASOS.map((caso, i) => (
            <motion.article
              key={caso.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/20 rounded-xl flex items-center justify-center">
                      <caso.icon size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{caso.industria}</p>
                      <p className="flex items-center gap-1 text-sm text-slate-400 mt-0.5"><MapPin size={11} />{caso.region} · {caso.pais}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 border border-slate-700 rounded-full px-3 py-1">{caso.sistema}</span>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">{caso.highlight}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Capacidad', val: caso.capacidad },
                    { label: 'Throughput', val: caso.throughput },
                    { label: 'Altura', val: caso.altura },
                  ].map((s, j) => (
                    <div key={j} className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-center">
                      <p className="text-sm font-black text-white mb-0.5">{s.val}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {caso.tecnologias.map((t, j) => (
                    <span key={j} className="text-xs text-slate-400 border border-slate-700 rounded-full px-3 py-1 bg-slate-950">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 border-t border-slate-800 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-white mb-4">¿Cómo se vería esto en tu almacén?</h2>
          <p className="text-slate-400 mb-8">Analizamos tu operación y mostramos qué instalación DELIE es más similar a lo que necesitás. Consulta técnica gratuita con ingeniero especializado.</p>
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

      <Footer />
    </div>
  );
};

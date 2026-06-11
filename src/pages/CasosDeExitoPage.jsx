import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  MapPin, Factory, Truck, Pill, Snowflake, ArrowRight,
  FlaskConical, Cog, Shield, Thermometer, ChevronDown, CheckCircle, Globe,
  UtensilsCrossed, Building2,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';

const METRICAS_GLOBALES = [
  { valor: '+1.000', label: 'Proyectos desplegados' },
  { valor: '99,99%', label: 'Precisión de picking' },
  { valor: '5x',     label: 'Mejor uso del espacio' },
  { valor: '+80%',   label: 'Mejora en throughput' },
  { valor: '+30',    label: 'Países con instalaciones' },
  { valor: '24/7',   label: 'Soporte técnico remoto' },
];

const CASOS = [
  {
    id: 'alfombras-tailandia',
    titulo: 'Fabricante Global de Alfombras',
    industria: 'Manufactura · Textil',
    ubicacion: 'Tailandia',
    icon: Factory,
    sistema: 'AS/RS Pallet Shuttle 4 direcciones + Digital Twin',
    desafio: 'Construir un almacén verde e inteligente para respaldar operaciones de pedido a entrega sin fisuras y visibilidad de la cadena de suministro en tiempo real.',
    metricas: [
      { label: 'Multi-SKU optimizado',          sub: 'lotes pequeños, alta eficiencia' },
      { label: 'Digital Twin pre-despliegue',   sub: 'simulación antes de obra' },
      { label: 'Soporte remoto 24/7',           sub: 'diagnóstico online incluido' },
    ],
    tecnologias: ['Pallet Shuttle 4 vías', 'Elevadores de alta velocidad', 'KuRuijia Smart Logistics Cloud', 'Digital Twin', 'IoT + IA'],
    relevancia: 'Proyecto internacional que demuestra la capacidad de DELIE para implementar fuera de China con soporte remoto — exactamente el modelo que STOKA aplica en Argentina.',
    color: 'cyan',
  },
  {
    id: 'licores-china',
    titulo: 'Gran Fabricante de Licores',
    industria: 'Alimentos y Bebidas',
    ubicacion: 'China',
    icon: UtensilsCrossed,
    sistema: 'AS/RS integrado con líneas de producción · multi-equipamiento',
    desafio: 'Transformar operaciones de almacenamiento tradicional ante el crecimiento internacional y demandas logísticas crecientes. +176 millones de libras de licor anuales.',
    metricas: [
      { label: '+550.000 unidades',     sub: 'capacidad de almacenamiento' },
      { label: '50.000 piezas/día',     sub: 'throughput operacional' },
      { label: '3x más rápido',         sub: 'procesamiento en picos estacionales' },
    ],
    tecnologias: ['Stacker Crane Unit-Load', 'Shuttle', 'Brazo robótico', 'RGV', 'WMS integrado'],
    relevancia: 'Directamente aplicable a bodegas vitivinícolas de Mendoza y San Juan, y a la industria cervecera y de bebidas en Argentina y Chile.',
    color: 'amber',
  },
  {
    id: 'farmaceutica-tcm',
    titulo: 'Mayor Fabricante Privado de Medicina Tradicional China',
    industria: 'Farmacéutica',
    ubicacion: 'China',
    icon: Pill,
    sistema: 'AS/RS con totes para +3.000 SKUs · materias primas y productos terminados',
    desafio: 'Gestionar más de 3.000 SKUs de materias primas y productos terminados con alta precisión y trazabilidad.',
    metricas: [
      { label: '450 totes/hora',       sub: 'throughput del sistema' },
      { label: '+80% throughput',      sub: 'vs. operación manual anterior' },
      { label: '99,99% precisión',     sub: 'en picking — cero errores de despacho' },
    ],
    tecnologias: ['AS/RS Tote', 'Transelevador MiniLoad', 'WMS con trazabilidad', 'Integración ERP'],
    relevancia: 'Aplicable a laboratorios farmacéuticos argentinos (Bagó, Roemmers, Richmond) con necesidades de multi-SKU, trazabilidad de lote y precisión ANMAT.',
    color: 'cyan',
  },
  {
    id: 'farmaceutica-temperatura',
    titulo: 'Almacén Farmacéutico con Control Ambiental',
    industria: 'Farmacéutica · Temperatura controlada',
    ubicacion: 'China',
    icon: Thermometer,
    sistema: 'AS/RS cerrado con control de temperatura y humedad personalizado',
    desafio: 'Almacenamiento de materiales y bienes con control estricto de temperatura y humedad para cumplimiento normativo farmacéutico.',
    metricas: [
      { label: '3x capacidad',         sub: 'vs. almacenamiento anterior' },
      { label: 'No tripulado',         sub: 'gestión completamente automatizada' },
      { label: 'Temperatura/humedad',  sub: 'control personalizado multi-zona' },
    ],
    tecnologias: ['AS/RS con sellado ambiental', 'Control temperatura/humedad', 'WMS GxP', 'Monitoreo en tiempo real'],
    relevancia: 'Aplica a cadena de frío (lácteos, cárnicos, biológicos) y a plantas farmacéuticas con control GDP e IQ/OQ/PQ en Argentina.',
    color: 'cyan',
  },
  {
    id: 'quimica-sulfato',
    titulo: 'Empresa de Materiales Químicos — Sulfato de Magnesio',
    industria: 'Química · Nuevos Materiales',
    ubicacion: 'China',
    icon: FlaskConical,
    sistema: 'Automatización de ciclo completo: empaque → paletizado → almacén → carga',
    desafio: 'Automatizar el ciclo completo desde empaque hasta carga de camiones para una empresa líder de materias primas químicas y nuevos materiales de alta tecnología.',
    metricas: [
      { label: '900 toneladas/día',    sub: 'throughput operacional total' },
      { label: 'Ciclo 100% auto',      sub: 'sin intervención manual en planta' },
      { label: 'Carga optimizada',     sub: 'eficiencia mejorada significativamente' },
    ],
    tecnologias: ['Paletizador automático', 'Stacker Crane', 'RGV', 'Conveyor de cadena', 'WCS ciclo completo'],
    relevancia: 'Industria minera y química en Catamarca, San Juan, Jujuy (litio), Neuquén (oil & gas) y proyectos del RIGI con alto volumen por turno.',
    color: 'orange',
  },
  {
    id: 'quimica-peligrosos',
    titulo: 'Almacén Químico Multi-Zona — Materiales Peligrosos',
    industria: 'Química · Materiales peligrosos',
    ubicacion: 'China',
    icon: Shield,
    sistema: 'Pallet Shuttle deep-lane con zonas diferenciadas: inflamable, corrosivo, temperatura',
    desafio: 'Almacenamiento simultáneo de materiales inflamables, corrosivos y sensibles a temperatura en un único almacén automatizado con cumplimiento normativo.',
    metricas: [
      { label: '35-40% más rápido',    sub: 'procesamiento de pedidos' },
      { label: 'Multi-zona',           sub: 'inflamable + corrosivo + temperatura' },
      { label: 'Normativa cumplida',   sub: 'materiales regulados clase I-IV' },
    ],
    tecnologias: ['Pallet Shuttle 4 vías ATEX', 'Deep-lane racking', 'WMS multi-zona', 'Sistema de control de acceso'],
    relevancia: 'Petroquímica de Vaca Muerta, industria minera con materiales peligrosos, empresas de Bahía Blanca y Campana.',
    color: 'orange',
  },
  {
    id: 'titanio',
    titulo: 'Fabricante de Titanio y Aleaciones',
    industria: 'Metalurgia · Manufactura de Precisión',
    ubicacion: 'China',
    icon: Cog,
    sistema: 'Almacén de materias primas pesadas conectado a producción y productos terminados',
    desafio: 'Almacenar y mover esponja de titanio (materia prima pesada) con conexión directa a líneas de producción y almacén de productos terminados.',
    metricas: [
      { label: '+2.000 ton',           sub: 'esponja de titanio almacenada' },
      { label: '5x espacio',           sub: 'utilización vs. almacenamiento tradicional' },
      { label: '+50% eficiencia',      sub: 'en movimientos de producción' },
    ],
    tecnologias: ['Stacker Crane carga pesada', 'RGV', 'WCS integrado a MES', 'Transportadores cadena reforzados'],
    relevancia: 'Gran industria manufacturera argentina: automotriz (Córdoba), siderúrgica (Techint) y proyectos pesados bajo RIGI.',
    color: 'slate',
  },
  {
    id: 'lubricantes',
    titulo: 'Empresa Líder de Aditivos Lubricantes y Papel Químico',
    industria: 'Química · Manufactura',
    ubicacion: 'China',
    icon: Factory,
    sistema: 'Almacén de productos terminados multi-equipamiento de alto throughput',
    desafio: 'Maximizar la velocidad de despacho para una empresa privada líder en aditivos lubricantes y papel sin carbón con demanda creciente.',
    metricas: [
      { label: '160 toneladas/hora',   sub: 'throughput de despacho' },
      { label: '60-70% eficiencia',    sub: 'incremento operacional vs. manual' },
      { label: 'Alto throughput',      sub: 'multi-equipamiento sincronizado' },
    ],
    tecnologias: ['Pallet Shuttle', 'Stacker Crane', 'Conveyor de alta velocidad', 'WMS + WCS sincronizados'],
    relevancia: 'Industria química y petroquímica: YPF, Dow, BASF Argentina, plantas de Bahía Blanca y Campana con alto volumen de despacho.',
    color: 'slate',
  },
  {
    id: 'manufactura-gran-escala',
    titulo: 'Planta Industrial con 18 Stacker Cranes',
    industria: 'Manufactura a Gran Escala',
    ubicacion: 'China',
    icon: Building2,
    sistema: 'Almacén de materia prima + producción + productos terminados · 18 stacker cranes',
    desafio: 'Integrar almacén de materias primas, líneas de producción y almacén de productos terminados en un sistema ASRS unificado de gran escala.',
    metricas: [
      { label: '29.000 posiciones',    sub: 'capacidad de pallet total' },
      { label: '44.800 cajas/día',     sub: 'throughput total del sistema' },
      { label: '18 stacker cranes',    sub: 'operación sincronizada por WCS' },
    ],
    tecnologias: ['18x Stacker Crane Unit-Load', 'WCS unificado', 'Integración MES/ERP', 'Conveyor de ciclo completo'],
    relevancia: 'Comparable con grandes operaciones industriales argentinas: distribuidores nacionales, jugadores de consumo masivo (Arcor, Molinos, etc.).',
    color: 'slate',
  },
];

const colorMap = {
  cyan:   'border-cyan-500/30 bg-cyan-500/5',
  amber:  'border-amber-500/30 bg-amber-500/5',
  orange: 'border-orange-500/30 bg-orange-500/5',
  slate:  'border-slate-600/50 bg-slate-800/30',
};

const tagMap = {
  cyan:   'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  amber:  'text-amber-400 border-amber-400/30 bg-amber-400/10',
  orange: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
  slate:  'text-slate-400 border-slate-600 bg-slate-800',
};

function CasoCard({ caso, index }) {
  const [open, setOpen] = useState(false);
  const ring = colorMap[caso.color];
  const tag  = tagMap[caso.color];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={`border rounded-2xl overflow-hidden transition-colors ${ring}`}
    >
      {/* Header siempre visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 md:p-7"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
              <caso.icon size={18} className="text-cyan-400" />
            </div>
            <div>
              <p className={`text-[10px] font-mono uppercase tracking-widest border rounded-full px-2 py-0.5 inline-block mb-1 ${tag}`}>
                {caso.industria}
              </p>
              <p className="flex items-center gap-1 text-xs text-slate-400">
                <MapPin size={10} className="shrink-0" />{caso.ubicacion}
              </p>
            </div>
          </div>
          <ChevronDown
            size={16}
            className={`text-slate-500 shrink-0 mt-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </div>

        <h3 className="text-base font-black text-white mb-2 leading-tight pr-4">{caso.titulo}</h3>
        <p className="text-xs text-slate-500 leading-relaxed">{caso.sistema}</p>

        {/* Métricas siempre visibles */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          {caso.metricas.map((m, j) => (
            <div key={j} className="bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-3 text-center">
              <p className="text-sm font-black text-white leading-tight mb-0.5">{m.label}</p>
              <p className="text-[10px] text-slate-500 leading-tight">{m.sub}</p>
            </div>
          ))}
        </div>
      </button>

      {/* Detalle expandible */}
      {open && (
        <div className="px-6 md:px-7 pb-6 border-t border-white/5 pt-5 space-y-5">
          <div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Desafío</p>
            <p className="text-sm text-slate-300 leading-relaxed">{caso.desafio}</p>
          </div>

          <div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Tecnologías empleadas</p>
            <div className="flex flex-wrap gap-2">
              {caso.tecnologias.map((t, j) => (
                <span key={j} className="text-xs text-slate-400 border border-slate-700 rounded-full px-3 py-1 bg-slate-950">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
            <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mb-1">Relevancia para Argentina · Chile</p>
            <p className="text-sm text-slate-300 leading-relaxed">{caso.relevancia}</p>
          </div>
        </div>
      )}
    </motion.article>
  );
}

export const CasosDeExitoPage = () => {
  const canonical = 'https://www.stokagroup.com/casos-de-exito';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Casos de éxito DELIE", "item": canonical },
    ],
  };

  const articleSchemas = CASOS.map((c) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${c.titulo} — Automatización ASRS DELIE`,
    "description": c.desafio,
    "author": { "@id": "https://www.stokagroup.com/#organization" },
    "publisher": { "@id": "https://www.stokagroup.com/#organization" },
    "url": canonical,
    "keywords": `${c.industria}, ${c.sistema}, automatización almacenes DELIE Argentina`,
  }));

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Helmet>
        <title>Casos de Éxito | Almacenes Automatizados | STOKA</title>
        <meta name="description" content="9 casos reales de DELIE: e-commerce, farmacéutica, química, licores, titanio y más. Más de 1.000 instalaciones ASRS globales. La tecnología que STOKA implementa en Argentina." />
        <meta property="og:title" content="Casos de Éxito DELIE | ASRS en +30 países | STOKA Argentina" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {articleSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-14 px-6 bg-linear-to-b from-slate-950 to-zinc-950">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-400">Casos de éxito</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <Globe size={13} className="text-cyan-400" />
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase">DELIE — 9 casos reales de implementación</p>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Más de 1.000 instalaciones.<br />
            <span className="text-cyan-400">9 casos que lo demuestran.</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            Estos son proyectos reales de DELIE — el fabricante que STOKA representa en Argentina y Chile. Cada caso incluye métricas verificadas y su relevancia directa para industrias locales.
          </p>

          {/* Métricas globales */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {METRICAS_GLOBALES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-4 text-center"
              >
                <p className="text-xl font-black text-cyan-400 leading-none mb-1">{m.valor}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide leading-tight">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtro de industria — label */}
      <section className="max-w-5xl mx-auto px-6 pb-4">
        <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          Hacé click en cada caso para ver detalle, tecnologías y relevancia para Argentina
        </p>
      </section>

      {/* Grid de casos */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-5">
          {CASOS.map((caso, i) => (
            <CasoCard key={caso.id} caso={caso} index={i} />
          ))}
        </div>
      </section>

      {/* Por qué confiar */}
      <section className="bg-slate-900 border-y border-slate-800 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Lo que esto significa para vos</p>
          <h2 className="text-2xl font-black text-white mb-8">
            La misma tecnología.<br />Soporte local en Argentina.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Componentes probados a escala industrial',
                desc: 'Cada rack, shuttle o transelevador que instalamos en Argentina ya demostró funcionar en condiciones reales de producción — en docenas de plantas similares a la tuya.',
              },
              {
                title: 'Sin intermediarios, precio directo de fábrica',
                desc: 'STOKA accede directamente a DELIE — sin revendedores europeos en el medio. El ahorro del 30-50% es consecuencia directa del canal corto.',
              },
              {
                title: 'Ingeniero en Argentina desde el día 1',
                desc: 'No dependés de soporte remoto de China para la puesta en marcha. El equipo técnico de STOKA gestiona el proyecto completo en Argentina, en español.',
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
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">¿Cuál de estos casos se parece a tu operación?</h2>
          <p className="text-slate-400 mb-8">Contanos qué industria, qué volumen y qué desafíos tenés. Un ingeniero de STOKA identifica qué instalación DELIE es más similar a lo que necesitás — sin costo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors flex items-center gap-2 justify-center">
              Consulta técnica gratuita <ArrowRight size={16} />
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

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin, Factory, Pill, Snowflake, ArrowRight,
  FlaskConical, Cog, Shield, Thermometer, ChevronDown,
  CheckCircle, Building2, UtensilsCrossed,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';

const STATS = [
  { num: '+1.000', label: 'Instalaciones activas' },
  { num: '99,99%', label: 'Precisión de picking' },
  { num: '5x',     label: 'Mejor uso del espacio' },
  { num: '+30',    label: 'Países con proyectos' },
];

const CASOS = [
  {
    id: 'alfombras-tailandia',
    industria: 'Manufactura · Textil',
    icon: Factory,
    ubicacion: 'Tailandia',
    empresa: 'Interface Inc.',
    titulo: 'Fabricante Global de Alfombras',
    sistema: 'AS/RS Pallet Shuttle 4 direcciones + Digital Twin',
    resumen: 'Almacén verde e inteligente para operaciones de pedido a entrega sin fisuras. Software logístico KuRuijia con IA, gemelo digital e IoT. Soporte técnico remoto 24/7 con diagnóstico online.',
    metricas: [
      { val: 'Multi-SKU',     sub: 'lotes pequeños y alta rotación' },
      { val: 'Digital Twin',  sub: 'simulación pre-despliegue' },
      { val: 'Soporte 24/7',  sub: 'diagnóstico remoto online' },
    ],
    tecnologias: ['Pallet Shuttle 4 vías', 'Elevadores de alta velocidad', 'KuRuijia Smart Logistics Cloud', 'IoT + IA + Digital Twin'],
    relevancia: 'Proyecto internacional que demuestra la capacidad de DELIE fuera de China con soporte remoto — exactamente el modelo que STOKA aplica en Argentina y Chile.',
  },
  {
    id: 'licores-china',
    industria: 'Alimentos y Bebidas',
    icon: UtensilsCrossed,
    ubicacion: 'China',
    empresa: 'Luzhou Laojiao Co., Ltd.',
    titulo: 'Gran Fabricante de Licores',
    sistema: 'AS/RS integrado con líneas de producción · multi-equipamiento',
    resumen: '+176 millones de libras de licor anuales. El AS/RS integrado conecta el almacén de productos terminados con las líneas de producción. Procesamiento de pedidos 3x más rápido en temporadas pico.',
    metricas: [
      { val: '+550.000 uds',  sub: 'capacidad de almacenamiento' },
      { val: '50.000 pzas/d', sub: 'throughput diario' },
      { val: '3x más rápido', sub: 'en temporada pico' },
    ],
    tecnologias: ['Stacker Crane Unit-Load', 'Pallet Shuttle', 'Brazo robótico', 'RGV', 'WMS integrado con ERP'],
    relevancia: 'Directamente aplicable a bodegas vitivinícolas de Mendoza y San Juan, y a la industria cervecera y de bebidas de Argentina y Chile.',
  },
  {
    id: 'farmaceutica-tcm',
    industria: 'Farmacéutica',
    icon: Pill,
    ubicacion: 'China',
    empresa: 'Tasly Pharmaceutical Group',
    titulo: 'Mayor Fabricante Privado de Medicina Tradicional China',
    sistema: 'AS/RS con totes · +3.000 SKUs · materias primas y productos terminados',
    resumen: 'Gestión de más de 3.000 SKUs con AS/RS de totes. El sistema mejoró el throughput un 80% y alcanzó una precisión de picking del 99,99%. Utilización del espacio 3x superior vs. almacenamiento tradicional.',
    metricas: [
      { val: '450 totes/h',     sub: 'throughput del sistema' },
      { val: '+80% throughput', sub: 'vs. operación manual anterior' },
      { val: '99,99%',          sub: 'precisión de picking' },
    ],
    tecnologias: ['AS/RS Tote Shuttle', 'Transelevador MiniLoad', 'WMS con trazabilidad de lote', 'Integración ERP'],
    relevancia: 'Aplicable a laboratorios farmacéuticos argentinos (Bagó, Roemmers, Richmond) con necesidades de multi-SKU, trazabilidad y cumplimiento ANMAT.',
  },
  {
    id: 'farmaceutica-temperatura',
    industria: 'Farmacéutica · Temperatura controlada',
    icon: Thermometer,
    ubicacion: 'China',
    empresa: 'CSPC Pharmaceutical Group',
    titulo: 'Almacén Farmacéutico con Control Ambiental',
    sistema: 'AS/RS cerrado con control de temperatura y humedad personalizado',
    resumen: 'Almacenamiento completamente no tripulado con control estricto de temperatura y humedad para cumplimiento normativo. Capacidad incrementada 3x respecto al almacenamiento anterior.',
    metricas: [
      { val: '3x capacidad',  sub: 'vs. almacenamiento previo' },
      { val: 'No tripulado',  sub: 'gestión 100% automatizada' },
      { val: 'T° + Humedad',  sub: 'control multi-zona personalizado' },
    ],
    tecnologias: ['AS/RS con sellado ambiental', 'Control de temperatura/humedad', 'WMS GxP', 'Monitoreo en tiempo real'],
    relevancia: 'Aplica a cadena de frío (lácteos, cárnicos, biológicos) y a plantas farmacéuticas con control GDP, IQ/OQ/PQ en Argentina.',
  },
  {
    id: 'quimica-sulfato',
    industria: 'Química · Nuevos Materiales',
    icon: FlaskConical,
    ubicacion: 'China',
    empresa: 'Haicheng Magnesium Mining Group',
    titulo: 'Empresa de Materiales Químicos — Sulfato de Magnesio',
    sistema: 'Automatización de ciclo completo: empaque → paletizado → almacén → carga de camiones',
    resumen: 'Ciclo 100% automatizado desde el empaque hasta la carga de camiones para una empresa líder de materias primas químicas. 900 toneladas por día sin intervención manual en planta.',
    metricas: [
      { val: '900 ton/día',      sub: 'throughput total automatizado' },
      { val: 'Ciclo 100%',       sub: 'sin operarios en línea' },
      { val: 'Carga optimizada', sub: 'eficiencia de despacho mejorada' },
    ],
    tecnologias: ['Paletizador automático', 'Stacker Crane', 'RGV', 'Conveyor de cadena', 'WCS ciclo completo'],
    relevancia: 'Minería y química en Catamarca, Jujuy (litio), Neuquén (oil & gas) y proyectos de gran escala bajo el RIGI.',
  },
  {
    id: 'quimica-peligrosos',
    industria: 'Química · Materiales Peligrosos',
    icon: Shield,
    ubicacion: 'China',
    empresa: 'Sinochem Holdings',
    titulo: 'Almacén Químico Multi-Zona',
    sistema: 'Pallet Shuttle deep-lane · zonas diferenciadas: inflamable, corrosivo, temperatura controlada',
    resumen: 'Almacenamiento simultáneo de materiales inflamables, corrosivos y sensibles a temperatura en un único sistema automatizado con cumplimiento normativo por zona. Pedidos procesados 35-40% más rápido.',
    metricas: [
      { val: '35-40% más rápido', sub: 'procesamiento de pedidos' },
      { val: '3 zonas',           sub: 'inflamable · corrosivo · temperatura' },
      { val: 'Normativa OK',      sub: 'materiales regulados clase I-IV' },
    ],
    tecnologias: ['Pallet Shuttle deep-lane', 'Configuración ATEX', 'WMS multi-zona', 'Control de acceso por zona'],
    relevancia: 'Petroquímica de Vaca Muerta, industria minera con materiales peligrosos, plantas de Bahía Blanca y Campana.',
  },
  {
    id: 'titanio',
    industria: 'Metalurgia · Manufactura de Precisión',
    icon: Cog,
    ubicacion: 'China',
    empresa: 'Baoji Titanium Industry Co. (BAOTAI)',
    titulo: 'Fabricante de Titanio y Aleaciones',
    sistema: 'Almacén de materias primas pesadas conectado a producción y productos terminados',
    resumen: 'Almacenamiento y movimiento de más de 2.000 toneladas de esponja de titanio con conexión directa a líneas de producción. Utilización del espacio 5x superior y eficiencia incrementada un 50%.',
    metricas: [
      { val: '+2.000 ton',      sub: 'esponja de titanio almacenada' },
      { val: '5x espacio',      sub: 'vs. almacenamiento tradicional' },
      { val: '+50% eficiencia', sub: 'en movimientos de producción' },
    ],
    tecnologias: ['Stacker Crane carga pesada', 'RGV', 'WCS integrado a MES', 'Transportadores de cadena reforzados'],
    relevancia: 'Manufactura pesada argentina: automotriz (Córdoba), siderúrgica (Techint, TERNIUM) y proyectos industriales del RIGI.',
  },
  {
    id: 'lubricantes',
    industria: 'Química · Manufactura',
    icon: Factory,
    ubicacion: 'China',
    empresa: 'Xinxiang Chemical Group',
    titulo: 'Empresa Líder de Aditivos Lubricantes y Papel Químico',
    sistema: 'Almacén de productos terminados multi-equipamiento de alto throughput',
    resumen: 'Empresa privada líder en aditivos lubricantes y papel sin carbón. El sistema AS/RS logra 160 toneladas por hora de despacho con un incremento de eficiencia operacional del 60-70%.',
    metricas: [
      { val: '160 ton/h',             sub: 'throughput de despacho' },
      { val: '60-70% más eficiente',  sub: 'vs. operación manual' },
      { val: 'Multi-equipo',          sub: 'shuttle + conveyor sincronizados' },
    ],
    tecnologias: ['Pallet Shuttle', 'Stacker Crane', 'Conveyor de alta velocidad', 'WMS + WCS sincronizados'],
    relevancia: 'Industria química y petroquímica: YPF, Dow, BASF Argentina — plantas de alto volumen de despacho en Bahía Blanca y Campana.',
  },
  {
    id: 'manufactura-gran-escala',
    industria: 'Manufactura a Gran Escala',
    icon: Building2,
    ubicacion: 'China',
    empresa: 'Midea Group',
    titulo: 'Planta Industrial con 18 Stacker Cranes',
    sistema: '18 stacker cranes Unit-Load · almacén unificado materia prima + producción + productos terminados',
    resumen: 'Sistema ASRS de gran escala que integra el almacén de materias primas, las líneas de producción y el almacén de productos terminados en un WCS unificado. 29.000 posiciones de pallet.',
    metricas: [
      { val: '29.000 pos.',    sub: 'capacidad total de pallet' },
      { val: '44.800 cajas/d', sub: 'throughput diario del sistema' },
      { val: '18 grúas',       sub: 'stacker cranes sincronizados por WCS' },
    ],
    tecnologias: ['18x Stacker Crane Unit-Load', 'WCS unificado', 'Integración MES/ERP', 'Conveyor ciclo completo'],
    relevancia: 'Gran industria argentina: consumo masivo (Arcor, Molinos), distribuidores nacionales y jugadores que califican para financiamiento BICE.',
  },
];

function CasoCard({ caso }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-sm transition-all"
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 bg-cyan-50 border border-cyan-200 rounded-xl flex items-center justify-center shrink-0">
              <caso.icon size={16} className="text-cyan-500" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest leading-tight">{caso.industria}</p>
              <p className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                <MapPin size={10} className="shrink-0" />{caso.ubicacion}
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-base font-black text-gray-900 mb-1 leading-tight">{caso.titulo}</h3>
        <p className="text-xs text-gray-400 font-medium mb-3">{caso.empresa}</p>
        <p className="text-[11px] text-gray-400 font-mono mb-4">{caso.sistema}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{caso.resumen}</p>

        {/* Métricas */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {caso.metricas.map((m, j) => (
            <div key={j} className="bg-white border border-gray-200 rounded-xl px-3 py-3 text-center">
              <p className="text-sm font-black text-gray-900 leading-tight mb-0.5">{m.val}</p>
              <p className="text-[10px] text-gray-400 leading-tight">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-5">
          {caso.tecnologias.map((t, j) => (
            <span key={j} className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1 bg-white">
              {t}
            </span>
          ))}
        </div>

        {/* Toggle relevancia */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-xs font-bold text-cyan-600 hover:text-cyan-500 transition-colors"
        >
          <span>{open ? 'Ocultar relevancia local' : 'Relevancia para Argentina · Chile'}</span>
          <ChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Relevancia expandible */}
      {open && (
        <div className="px-6 md:px-8 pb-6 pt-3 border-t border-gray-200 bg-cyan-50/50">
          <p className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest mb-2">Relevancia para Argentina · Chile</p>
          <p className="text-sm text-gray-600 leading-relaxed">{caso.relevancia}</p>
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
      { "@type": "ListItem", "position": 2, "name": "Casos de éxito", "item": canonical },
    ],
  };

  return (
    <div className="min-h-screen text-gray-900">
      <Helmet>
        <title>Casos de Éxito | Almacenes Automatizados | STOKA</title>
        <meta name="description" content="9 casos reales de DELIE: farmacéutica, química, alimentos y manufactura. +1.000 instalaciones globales. La tecnología que STOKA implementa en Argentina." />
        <meta property="og:title" content="Casos de Éxito DELIE | +1.000 Instalaciones Globales | STOKA" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-slate-950 pt-36 pb-20 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-gray-300">Casos de éxito</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-5">
              DELIE · 9 proyectos verificados · +30 países
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
              +1.000 instalaciones.<br />
              <span className="text-cyan-400">9 casos que lo demuestran.</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-10">
              Proyectos reales del portafolio global de DELIE — el fabricante que STOKA representa en Argentina y Chile. Métricas verificadas por industria, con relevancia directa para operaciones locales.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {STATS.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-center">
                  <p className="text-2xl font-black text-cyan-400 leading-none mb-1">{s.num}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Casos */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Portafolio de referencia DELIE</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">
            La misma tecnología que instalamos en Argentina
          </h2>
          <div className="space-y-5">
            {CASOS.map((caso) => (
              <CasoCard key={caso.id} caso={caso} />
            ))}
          </div>
          <p className="text-gray-400 text-[11px] mt-6 leading-relaxed">
            Proyectos del portafolio global de instalaciones DELIE. Datos técnicos tomados de la documentación oficial del fabricante. Las implementaciones en Argentina y Chile se diseñan a medida según layout, throughput y requerimientos de cada operación.
          </p>
        </div>
      </section>

      {/* Por qué confiar */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Lo que esto significa en Argentina</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Misma tecnología. Soporte local.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Componentes probados a escala', desc: 'Cada rack, shuttle o transelevador que instalamos en Argentina ya funcionó en condiciones reales de producción — en docenas de plantas similares a la tuya.' },
              { title: 'Sin intermediarios europeos',   desc: 'STOKA accede directamente a DELIE. El ahorro del 30-50% vs. alternativas europeas viene del canal corto, no de menor calidad.' },
              { title: 'Ingeniero en Argentina',        desc: 'El equipo técnico de STOKA gestiona ingeniería, instalación e integración con tu ERP completamente en Argentina, en español.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6">
                <CheckCircle size={18} className="text-cyan-500 mb-4" />
                <h3 className="font-black text-gray-900 text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4">¿Listo para empezar?</p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-5">
            ¿Cuál de estos casos<br />
            <span className="text-cyan-500">se parece al tuyo?</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Contanos qué industria, qué volumen y qué desafíos tenés. Un ingeniero de STOKA identifica qué instalación DELIE es más similar a lo que necesitás — sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto"
              className="flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-black text-sm uppercase tracking-widest rounded-xl transition-colors shadow-[0_4px_20px_rgba(6,182,212,0.25)]">
              Consulta técnica gratuita <ArrowRight size={14} />
            </Link>
            <Link to="/catalogo"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
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

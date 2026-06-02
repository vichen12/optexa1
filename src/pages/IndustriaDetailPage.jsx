import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { INDUSTRIES } from './IndustriasPage';
import { ArrowRight, ArrowLeft, CheckCircle, X, ChevronRight } from 'lucide-react';

const INDUSTRY_DATA = {
  'e-commerce-retail': {
    hero: 'Fulfillment automatizado para el pico de demanda.',
    description: 'El e-commerce exige velocidad, exactitud y escalabilidad instantánea. En Black Friday, la demanda puede multiplicarse 5x en horas. Los almacenes manuales no pueden responder — un sistema ASRS sí, sin contratar personal extra.',
    highlight: '"La diferencia entre vender en un pico de demanda y perder ventas está en la velocidad de despacho."',
    benefits: [
      { title: 'Picking 3x más rápido', desc: 'Robots lanzadera y AMR eliminan los recorridos y reducen el tiempo de preparación por orden.' },
      { title: '99,9% exactitud', desc: 'WMS con confirmación automática y pick-to-light elimina errores humanos en selección.' },
      { title: 'Escalado instantáneo', desc: 'Absorbé picos estacionales sin contratar personal adicional. El sistema escala solo.' },
      { title: 'Devoluciones automáticas', desc: 'Gestión de devoluciones con reubicación automática en inventario en tiempo real.' },
    ],
    challenges: ['Picos de demanda extremos imposibles de cubrir con personal', 'Alta tasa de error en picking manual con SKUs similares', 'Devoluciones desorganizadas que generan pérdidas', 'Costo de mano de obra que crece igual que el volumen', 'Falta de espacio para ampliar el catálogo'],
    solutions: ['Robots lanzadera y AMR para picking de alta velocidad', 'WMS con pick-to-light y confirmación automática', 'Gestión automática de devoluciones e inventario en tiempo real', 'Escalabilidad sin nuevas contrataciones', 'Almacenamiento vertical que multiplica la capacidad del m²'],
    stats: [{ value: '3x', label: 'Velocidad de picking' }, { value: '99.9%', label: 'Exactitud de órdenes' }, { value: '-60%', label: 'Costo de labor' }, { value: '5x', label: 'Densidad de almacenaje' }],
    products: [{ name: 'Robots lanzadera totes 4 vías', cat: 'robots' }, { name: 'Transelevador MiniLoad', cat: 'robots' }, { name: 'WMS — Gestión de almacenes', cat: 'sistema' }, { name: 'Módulos VLM', cat: 'vertical' }],
  },
  'logistica-3pl': {
    hero: 'Operación multicliente con máxima eficiencia.',
    description: 'Los operadores 3PL necesitan flexibilidad extrema: múltiples clientes, múltiples tipos de producto y contratos cambiantes. La automatización permite ofrecer más valor a cada cliente sin escalar costos fijos.',
    highlight: '"Un operador 3PL automatizado puede servir el doble de clientes con la misma infraestructura."',
    benefits: [
      { title: 'Multi-cliente en un almacén', desc: 'WMS con segregación lógica y física para múltiples clientes sin mezclas ni errores.' },
      { title: 'Slots dinámicos', desc: 'Reconfigurá asignaciones de espacio sin mover físicamente la mercadería.' },
      { title: 'Reportes por cliente', desc: 'Dashboard en tiempo real con KPIs individuales por cliente para mayor transparencia.' },
      { title: 'Operación 24/7', desc: 'Robots que no se cansan ni varían su productividad en el turno nocturno.' },
    ],
    challenges: ['Gestión de múltiples clientes en el mismo espacio sin mezclas', 'Contratos de corto plazo que requieren reconfiguración rápida', 'Presión de márgenes por competencia creciente', 'Necesidad de reportes por cliente en tiempo real', 'Personal difícil de retener en temporada alta'],
    solutions: ['WMS multicliente con segregación lógica y física', 'Slots dinámicos sin movimiento físico', 'Dashboard por cliente con KPIs en tiempo real', 'Robots que operan 24/7 sin variación de productividad', 'Escalabilidad sin inversión en nuevos m²'],
    stats: [{ value: '40%', label: 'Reducción de espacio' }, { value: '5x', label: 'Densidad de almacenaje' }, { value: '24/7', label: 'Operación continua' }, { value: '-45%', label: 'Costo operativo' }],
    products: [{ name: 'Transelevadores MiniLoad', cat: 'robots' }, { name: 'WMS multicliente', cat: 'sistema' }, { name: 'Estanterías AS/RS alta densidad', cat: 'estanterias' }, { name: 'Transportadores y sorters', cat: 'transport' }],
  },
  manufactura: {
    hero: 'Intralogística sincronizada con tu línea de producción.',
    description: 'En manufactura, cada minuto de parada de línea tiene un costo enorme. La automatización del almacén de insumos garantiza el suministro just-in-time a cada estación sin errores ni demoras.',
    highlight: '"Cada parada de línea por falta de materiales cuesta entre $500 y $5.000 USD por hora."',
    benefits: [
      { title: 'Suministro JIT garantizado', desc: 'Almacén automático sincronizado con MES/ERP para despacho bajo demanda a cada estación.' },
      { title: 'Kanban digital', desc: 'Reposición automática de insumos sin órdenes manuales ni riesgo de quiebre de stock.' },
      { title: 'Trazabilidad de lotes', desc: 'Número de serie y lote registrado en cada movimiento para auditorías de calidad totales.' },
      { title: 'Reducción de WIP', desc: 'Stock en proceso minimizado con despacho preciso y en el momento exacto que la línea lo necesita.' },
    ],
    challenges: ['Paradas de línea por falta de insumos o repuestos', 'Tiempo perdido buscando materiales en el almacén', 'Dificultad para implementar kanban y JIT con stock manual', 'Trazabilidad de lotes de producción incompleta', 'Stock inmovilizado y WIP excesivo'],
    solutions: ['Almacén automático sincronizado con MES/ERP', 'Despacho automático a línea bajo demanda', 'Kanban digital con reposición automática', 'Trazabilidad de número de serie y lote en cada movimiento', 'Reducción de WIP y stock inmovilizado'],
    stats: [{ value: '-35%', label: 'Tiempo de búsqueda' }, { value: '100%', label: 'Trazabilidad de lotes' }, { value: '+20%', label: 'OEE de planta' }, { value: '-25%', label: 'Stock WIP' }],
    products: [{ name: 'Grúa apiladora mástil simple', cat: 'robots' }, { name: 'MiniLoad para partes y componentes', cat: 'robots' }, { name: 'WCS — Control de almacén', cat: 'sistema' }, { name: 'Transportadores a línea', cat: 'transport' }],
  },
  'alimentos-bebidas': {
    hero: 'FIFO garantizado e inocuidad en cada movimiento.',
    description: 'La industria de alimentos y bebidas tiene requisitos de inocuidad no negociables. El FIFO automático, la trazabilidad de lote y las alertas de vencimiento son nativas en los sistemas DELIE.',
    highlight: '"Un retiro de mercado bien gestionado con trazabilidad completa puede ser la diferencia entre una multa y un cierre."',
    benefits: [
      { title: 'FIFO 100% garantizado', desc: 'El WMS asegura que siempre sale primero el producto más antiguo, sin depender del operario.' },
      { title: 'Trazabilidad por lote', desc: 'Rastreá cualquier unidad desde su ingreso hasta su despacho con fecha, lote y destino.' },
      { title: 'Alertas de vencimiento', desc: 'El sistema prioriza automáticamente productos próximos a vencer para eliminar mermas.' },
      { title: 'Audit-ready', desc: 'Registros automáticos en formato GS1 para certificaciones FSSC 22000 y BRC.' },
    ],
    challenges: ['Mantenimiento de FIFO en almacenes manuales con alta rotación', 'Trazabilidad de lote para retiros de mercado', 'Control de temperatura en cámaras frigoríficas', 'Certificaciones que requieren registros exhaustivos', 'Mermas por vencimiento de productos no rotados'],
    solutions: ['FIFO automático garantizado por el WMS en cada salida', 'Trazabilidad completa por lote, elaboración y vencimiento', 'Robots que operan entre -5°C y +10°C', 'Registros automáticos para auditorías', 'Alertas de vencimiento y priorización automática'],
    stats: [{ value: 'FIFO', label: 'Garantizado 100%' }, { value: '0', label: 'Mermas por vencimiento' }, { value: 'GS1', label: 'Compatible' }, { value: 'FSSC', label: 'Audit-ready' }],
    products: [{ name: 'Transelevadores para cámara frigorífica', cat: 'robots' }, { name: 'WMS con gestión FEFO/FIFO', cat: 'sistema' }, { name: 'Transportadores de cadena inox', cat: 'transport' }, { name: 'Módulos VLM para picking', cat: 'vertical' }],
  },
  farmaceutica: {
    hero: 'GMP, FEFO y trazabilidad regulatoria nativa.',
    description: 'La industria farmacéutica opera bajo las regulaciones más exigentes del mundo. Los sistemas DELIE están diseñados para cumplir con GMP, 21 CFR Part 11 y las normativas de ANMAT sin configuración adicional.',
    highlight: '"En farmacéutica, el compliance no es opcional. El sistema tiene que garantizarlo por diseño, no por proceso."',
    benefits: [
      { title: 'GMP by design', desc: 'Registro automático de cada movimiento con usuario, timestamp y ubicación para audit trail completo.' },
      { title: 'FEFO automático', desc: 'El sistema prioriza por fecha de vencimiento en cada egreso sin intervención del operario.' },
      { title: 'Temperatura controlada', desc: 'Zonas de temperatura diferenciada integradas para productos refrigerados y controlados.' },
      { title: 'Control de acceso', desc: 'Acceso por rol a zonas y operaciones, con registro de cada acción para 21 CFR Part 11.' },
    ],
    challenges: ['Cumplimiento GMP con registros de cada movimiento', 'FEFO estricto con múltiples fechas de vencimiento', 'Control de temperatura y humedad para productos sensibles', 'Acceso controlado y trazabilidad de operadores', 'Preparación para auditorías regulatorias'],
    solutions: ['WMS con módulo GMP y trazabilidad de usuario', 'FEFO automático con alertas de vencimiento', 'Zonas de temperatura controlada integradas', 'Control de acceso por rol con audit trail completo', 'Reportes en formato regulatorio para ANMAT y FDA'],
    stats: [{ value: 'GMP', label: 'Compliant' }, { value: 'FEFO', label: 'Automático' }, { value: '21 CFR', label: 'Compatible' }, { value: '100%', label: 'Audit trail' }],
    products: [{ name: 'Almacén automático temperatura controlada', cat: 'robots' }, { name: 'WMS GMP-compliant', cat: 'sistema' }, { name: 'Módulos VLM para controlados', cat: 'vertical' }, { name: 'ECS — Control electrónico', cat: 'sistema' }],
  },
  'mineria-oil-gas': {
    hero: 'Repuestos críticos disponibles en minutos, no horas.',
    description: 'En minería y oil & gas, cada hora de equipo parado puede costar decenas de miles de dólares. La disponibilidad inmediata de repuestos críticos es la diferencia entre una operación rentable y una crisis.',
    highlight: '"Una parada de equipos mineros cuesta entre $10.000 y $100.000 USD por hora. El almacén automatizado lo previene."',
    benefits: [
      { title: 'Búsqueda en segundos', desc: 'El WMS localiza cualquier repuesto entre miles de SKUs en menos de 2 segundos.' },
      { title: 'Stock centralizado', desc: 'Visibilidad en tiempo real de todo el inventario, eliminando duplicados y stock fantasma.' },
      { title: 'Condiciones extremas', desc: 'Sistemas certificados para polvo, vibración y temperaturas extremas propias del sector.' },
      { title: 'Mínimo personal', desc: 'Despacho automatizado que opera con muy poco personal incluso en locaciones remotas.' },
    ],
    challenges: ['Miles de SKUs de repuestos difíciles de localizar', 'Paradas de equipos por repuestos no encontrados a tiempo', 'Stock duplicado por falta de visibilidad centralizada', 'Operación en condiciones climáticas extremas', 'Personal escaso en ubicaciones remotas'],
    solutions: ['WMS con búsqueda de repuesto en menos de 2 segundos', 'Stock centralizado con visibilidad en tiempo real', 'Eliminación de duplicados y stock fantasma', 'Sistemas certificados para entornos severos', 'Despacho automatizado con mínimo personal'],
    stats: [{ value: '0', label: 'Errores de despacho' }, { value: '-30%', label: 'Stock inmovilizado' }, { value: '24/7', label: 'Disponibilidad' }, { value: '<2min', label: 'Tiempo de recupero' }],
    products: [{ name: 'Módulos VLM alta densidad', cat: 'vertical' }, { name: 'Carrusel vertical inteligente', cat: 'vertical' }, { name: 'WMS con gestión de criticidad', cat: 'sistema' }, { name: 'Estanterías AS/RS pesadas', cat: 'estanterias' }],
  },
  'cadena-frio': {
    hero: 'Robots que operan a -30°C sin exposición de personal.',
    description: 'Las cámaras frigoríficas son caras de construir y peligrosas para el personal. Los sistemas DELIE permiten maximizar cada metro cúbico disponible mientras eliminan la exposición de operarios al frío extremo.',
    highlight: '"Cada apertura de puerta de cámara pierde entre 5% y 15% de la energía acumulada. Automatizarlo reduce ese costo un 40%."',
    benefits: [
      { title: 'Operación a -30°C', desc: 'Robots y transelevadores certificados para funcionar en frío extremo sin presencia humana.' },
      { title: 'Máxima densidad', desc: 'Almacenaje vertical que triplica la capacidad del metro cuadrado de cámara existente.' },
      { title: 'Menos aperturas', desc: 'Reducción de aperturas de puerta hasta el 90%, con ahorro energético de hasta 40%.' },
      { title: 'FIFO en frío', desc: 'FIFO automático sin que el operario tenga que ingresar a la cámara para verificar fechas.' },
    ],
    challenges: ['Alto costo energético de cámaras subutilizadas', 'Exposición del personal a temperaturas de -18°C a -30°C', 'Mermas por apertura frecuente de cámaras para verificar stock', 'FIFO imposible de controlar manualmente en frío', 'Costo elevado de construcción de nuevas cámaras'],
    solutions: ['Robots certificados que operan a -30°C sin presencia humana', 'Almacenaje vertical que triplica la capacidad de la cámara existente', 'Reducción de aperturas de puerta hasta el 90%', 'FIFO automático garantizado por el WMS', 'Ahorro energético de hasta 40% por menor intercambio térmico'],
    stats: [{ value: '-30°C', label: 'Temperatura mínima' }, { value: '0', label: 'Personal expuesto' }, { value: '+50%', label: 'Uso de cámara' }, { value: '-40%', label: 'Consumo energético' }],
    products: [{ name: 'Transelevadores temperatura negativa', cat: 'robots' }, { name: 'Robot lanzadera almacén en frío', cat: 'robots' }, { name: 'WMS con FIFO/FEFO cadena de frío', cat: 'sistema' }, { name: 'Estanterías pallet shuttle frío', cat: 'estanterias' }],
  },
};

export const IndustriaDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = INDUSTRY_DATA[slug];
  const ind = INDUSTRIES.find(i => i.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!data || !ind) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400 mb-4">Industria no encontrada</p>
        <button onClick={() => navigate('/industrias')} className="text-cyan-500 underline">Ver todas las industrias</button>
      </div>
    </div>
  );

  const otherIndustries = INDUSTRIES.filter(i => i.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>{ind.label} — Automatización ASRS en Argentina | STOKA</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={`${ind.desc} Representantes oficiales de DELIE en Argentina y Chile. Consultoría y proyecto ASRS llave en mano.`} />
        <meta property="og:title" content={`${ind.label} — Automatización ASRS | STOKA Argentina`} />
        <meta property="og:description" content={ind.desc} />
        <meta property="og:url" content={`https://www.stokagroup.com/industrias/${slug}`} />
        <link rel="canonical" href={`https://www.stokagroup.com/industrias/${slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Industrias", "item": "https://www.stokagroup.com/industrias" },
            { "@type": "ListItem", "position": 3, "name": ind.label, "item": `https://www.stokagroup.com/industrias/${slug}` }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={ind.image} alt={ind.label}
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <button onClick={() => navigate('/industrias')} style={{ outline: 'none' }}
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-xs mb-5">
              <ArrowLeft size={13} /> Todas las industrias
            </button>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <ind.icon size={16} className="text-cyan-400" />
              </div>
              <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em]">{ind.label}</p>
            </div>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black italic uppercase leading-[1.1] tracking-tight max-w-3xl">
              {data.hero}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="text-center py-4">
              <p className="text-3xl md:text-4xl font-black text-cyan-500 leading-none mb-1">{s.value}</p>
              <p className="text-gray-400 text-xs uppercase tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">El desafío</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight">{ind.tagline}</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* HIGHLIGHT BANNER */}
      <section className="bg-slate-900 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 text-xl md:text-2xl font-black italic leading-relaxed">{data.highlight}</p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Por qué automatizar</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Beneficios clave</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mb-4" />
                <h3 className="font-black text-gray-900 text-sm mb-2">{b.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESAFÍOS VS SOLUCIONES */}
      <section className="py-14 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-8">El antes y el después</p>
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-red-500/10 border border-red-400/20 rounded-2xl p-7">
              <p className="text-[10px] font-mono text-red-400 tracking-[0.4em] uppercase mb-5">Sin automatización</p>
              <div className="space-y-3.5">
                {data.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} className="text-red-400" />
                    </div>
                    <p className="text-red-300 text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-7">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase mb-5">Con STOKA · DELIE</p>
              <div className="space-y-3.5">
                {data.solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={11} className="text-cyan-400" />
                    </div>
                    <p className="text-cyan-300 text-sm leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS RECOMENDADOS */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Equipamiento recomendado</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Productos para este sector</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {data.products.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-cyan-300 hover:shadow-sm transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                  <p className="text-gray-700 text-sm font-medium">{p.name}</p>
                </div>
                <ChevronRight size={15} className="text-gray-300 group-hover:text-cyan-500 transition-colors shrink-0" />
              </motion.div>
            ))}
          </div>
          <button onClick={() => navigate('/catalogo')} style={{ outline: 'none' }}
            className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-600 font-semibold transition-colors">
            Ver catálogo completo <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* OTRAS INDUSTRIAS */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Seguir explorando</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Otras industrias</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherIndustries.map((oi, i) => (
              <motion.button key={oi.slug} onClick={() => navigate(`/industrias/${oi.slug}`)}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ outline: 'none' }}
                className="relative text-left rounded-2xl overflow-hidden group h-40 shadow-sm hover:shadow-md transition-all">
                <img src={oi.image} alt={oi.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-black text-sm uppercase tracking-tight leading-tight">{oi.label}</h3>
                  <p className="text-gray-300 text-xs mt-0.5 opacity-80">{oi.tagline}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">¿Listo para automatizar?</p>
          <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-4">
            Consultá sin costo.<br /><span className="text-cyan-400">Respuesta en 24 hs.</span>
          </h2>
          <p className="text-gray-400 text-base mb-8">Un ingeniero especializado te da la primera orientación técnica para tu proyecto.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Solicitar consulta <ArrowRight size={14} />
            </a>
            <button onClick={() => navigate('/catalogo')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all">
              Ver catálogo completo
            </button>
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

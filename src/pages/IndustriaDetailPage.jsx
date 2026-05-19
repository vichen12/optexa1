import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WppFloat } from '../components/WppFloat';
import { ArrowRight, ArrowLeft, CheckCircle, ShoppingBag, Truck, Cog, UtensilsCrossed, FlaskConical, HardHat, Snowflake } from 'lucide-react';

const INDUSTRY_DATA = {
  ecommerce: { icon: ShoppingBag, label: 'E-commerce & Retail', hero: 'Fulfillment automatizado para el pico de demanda.', description: 'El e-commerce exige velocidad, exactitud y escalabilidad instantánea. En Black Friday, la demanda puede multiplicarse 5x en horas. Un almacén manual simplemente no puede responder — un sistema ASRS sí.', challenges: ['Picos de demanda extremos imposibles de cubrir con personal', 'Alta tasa de error en picking manual con SKUs similares', 'Devoluciones desorganizadas y costosas', 'Costo de mano de obra que crece proporcionalmente al volumen', 'Falta de espacio para el crecimiento del catálogo'], solutions: ['Robots lanzadera y AMR para picking a alta velocidad', 'WMS con pick-to-light y confirmación automática', 'Gestión automática de devoluciones con reubicación inmediata', 'Escalabilidad sin contratar personal en picos estacionales', 'Almacenamiento vertical que multiplica la capacidad del m²'], stats: [{ value: '3x', label: 'Velocidad de picking' }, { value: '99.9%', label: 'Exactitud de órdenes' }, { value: '-60%', label: 'Costo de labor' }, { value: '5x', label: 'Densidad de almacenaje' }], products: ['Robots lanzadera para paletas y totes', 'AMR (Robots Móviles Autónomos)', 'Sistema WMS integrado', 'Módulos VLM para almacenamiento compacto'] },
  'logistica-3pl': { icon: Truck, label: 'Logística 3PL', hero: 'Operación multicliente con máxima eficiencia.', description: 'Los operadores 3PL necesitan flexibilidad extrema: múltiples clientes, múltiples tipos de producto y contratos con fechas de vencimiento. La automatización les permite ofrecer más valor sin escalar costos fijos.', challenges: ['Gestión de múltiples clientes en el mismo espacio sin mezclas', 'Contratos de corto plazo que requieren reconfiguración rápida', 'Presión de márgenes por competencia creciente', 'Necesidad de reportes por cliente en tiempo real', 'Personal difícil de mantener en temporada alta'], solutions: ['WMS multicliente con segregación lógica y física', 'Slots dinámicos que se reconfiguran sin movimiento físico', 'Dashboard por cliente con KPIs en tiempo real', 'Robots que operan 24/7 sin variación de productividad', 'Escalabilidad sin inversión en m²'], stats: [{ value: '40%', label: 'Reducción de espacio' }, { value: '5x', label: 'Densidad de almacenaje' }, { value: '24/7', label: 'Operación continua' }, { value: '-45%', label: 'Costo operativo' }], products: ['Transelevadores MiniLoad', 'Sistema WMS multicliente', 'Estanterías AS/RS de alta densidad', 'Transportadores y sorters'] },
  manufactura: { icon: Cog, label: 'Manufactura Industrial', hero: 'Intralogística sincronizada con tu línea de producción.', description: 'En manufactura, cada minuto de parada de línea tiene un costo enorme. La automatización del almacén de insumos garantiza el suministro just-in-time a cada estación de trabajo.', challenges: ['Paradas de línea por falta de insumos o repuestos', 'Tiempo perdido buscando materiales en el almacén', 'Dificultad para implementar kanban y JIT con stock manual', 'Trazabilidad de lotes de producción incompleta', 'Stock inmovilizado y WIP excesivo'], solutions: ['Almacén automático sincronizado con MES/ERP', 'Despacho automático a línea de producción bajo demanda', 'Kanban digital con reposición automática', 'Trazabilidad de número de serie y lote en cada movimiento', 'Reducción de WIP y stock inmovilizado'], stats: [{ value: '-35%', label: 'Tiempo de búsqueda' }, { value: '100%', label: 'Trazabilidad de lotes' }, { value: '+20%', label: 'OEE de planta' }, { value: '-25%', label: 'Stock WIP' }], products: ['Transelevadores unit-load para paletas', 'MiniLoad para partes y componentes', 'Integración MES/ERP bidireccional', 'Transportadores automáticos a línea'] },
  'alimentos-bebidas': { icon: UtensilsCrossed, label: 'Alimentos & Bebidas', hero: 'FIFO garantizado e inocuidad en cada movimiento.', description: 'La industria de alimentos y bebidas tiene requisitos de inocuidad no negociables. El FIFO automático, la trazabilidad de lote y la temperatura controlada son características nativas de los sistemas DELIE.', challenges: ['Mantenimiento de FIFO en almacenes manuales con alta rotación', 'Trazabilidad de lote para retiros de mercado', 'Control de temperatura en cámaras frigoríficas', 'Certificaciones que requieren registros exhaustivos', 'Mermas por vencimiento de productos no rotados'], solutions: ['FIFO automático garantizado por el WMS en cada salida', 'Trazabilidad completa por lote, elaboración y vencimiento', 'Robots que operan a -5°C a +10°C', 'Registros automáticos para auditorías', 'Alertas de vencimiento próximo y priorización automática'], stats: [{ value: 'FIFO', label: 'Garantizado 100%' }, { value: '0', label: 'Mermas por vencimiento' }, { value: 'GS1', label: 'Compatible' }, { value: 'FSSC', label: 'Audit-ready' }], products: ['Transelevadores para cámara frigorífica', 'WMS con gestión FEFO/FIFO', 'Transportadores de cadena inox', 'Módulos VLM para picking'] },
  farmaceutica: { icon: FlaskConical, label: 'Farmacéutica', hero: 'GMP, FEFO y trazabilidad regulatoria nativa.', description: 'La industria farmacéutica opera bajo las regulaciones más exigentes del mundo. Los sistemas DELIE están diseñados para cumplir con GMP, 21 CFR Part 11 y las normativas de ANMAT.', challenges: ['Cumplimiento GMP con registros de cada movimiento', 'FEFO estricto con múltiples fechas de vencimiento', 'Control de temperatura y humedad para productos sensibles', 'Acceso controlado y trazabilidad de operadores', 'Preparación para auditorías regulatorias'], solutions: ['WMS con módulo GMP y trazabilidad de usuario', 'FEFO automático con alertas de vencimiento', 'Zonas de temperatura controlada integradas', 'Control de acceso por rol con audit trail', 'Reportes en formato requerido por reguladores'], stats: [{ value: 'GMP', label: 'Compliant' }, { value: 'FEFO', label: 'Automático' }, { value: '21 CFR', label: 'Compatible' }, { value: '100%', label: 'Audit trail' }], products: ['Almacén automático con control de temperatura', 'WMS GMP-compliant con audit trail', 'Módulos VLM para controlados', 'Integración SAP/Oracle Pharma'] },
  'mineria-oil-gas': { icon: HardHat, label: 'Minería & Oil & Gas', hero: 'Repuestos críticos disponibles en minutos, no horas.', description: 'En minería y oil & gas, cada hora de equipo parado puede costar decenas de miles de dólares. La disponibilidad inmediata de repuestos críticos es la diferencia entre una operación rentable y una crisis.', challenges: ['Miles de SKUs de repuestos difíciles de localizar', 'Paradas de equipos por repuestos no encontrados', 'Stock duplicado por falta de visibilidad', 'Operación en condiciones climáticas extremas', 'Personal escaso en ubicaciones remotas'], solutions: ['Almacén automático con búsqueda en segundos', 'Stock centralizado con visibilidad en tiempo real', 'Eliminación de duplicados y reducción de stock', 'Sistemas para condiciones extremas', 'Despacho automatizado con mínimo personal'], stats: [{ value: '0', label: 'Errores de despacho' }, { value: '-30%', label: 'Stock inmovilizado' }, { value: '24/7', label: 'Disponibilidad' }, { value: '<2min', label: 'Tiempo de recupero' }], products: ['Módulos VLM para repuestos de alta densidad', 'Carruseles horizontales para partes medianas', 'WMS con gestión de criticidad', 'Estanterías AS/RS para paletas pesadas'] },
  'cadena-frio': { icon: Snowflake, label: 'Cadena de Frío', hero: 'Robots que operan a -30°C sin exposición de personal.', description: 'Las cámaras frigoríficas son caras de construir y peligrosas para el personal. Los sistemas DELIE permiten maximizar cada metro cúbico mientras se elimina la exposición de trabajadores al frío extremo.', challenges: ['Alto costo energético de cámaras subutilizadas', 'Exposición del personal a temperaturas de -18°C a -30°C', 'Mermas por apertura frecuente de cámaras', 'Equipos de frío que fallan por uso intensivo', 'FIFO imposible de controlar manualmente'], solutions: ['Robots que operan a -30°C sin presencia humana', 'Maximización del volumen con almacenaje vertical', 'Reducción de aperturas de puerta hasta 90%', 'FIFO automático garantizado', 'Ahorro energético por menor intercambio térmico'], stats: [{ value: '-30°C', label: 'Temperatura mínima' }, { value: '0', label: 'Personal expuesto' }, { value: '+50%', label: 'Uso de cámara' }, { value: '-40%', label: 'Consumo energético' }], products: ['Transelevadores para temperatura negativa', 'Robots lanzadera para frío', 'WMS con FIFO/FEFO cadena de frío', 'Puertas de alta velocidad y aislamiento'] },
};

export const IndustriaDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const industry = INDUSTRY_DATA[slug];

  useEffect(() => {
    if (industry) document.title = `${industry.label} — Automatización ASRS | Optexa Argentina`;
    window.scrollTo(0, 0);
  }, [slug, industry]);

  if (!industry) return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <p className="text-white/35 mb-4">Industria no encontrada</p>
        <button onClick={() => navigate('/industrias')} className="text-cyan-400 underline">Ver todas las industrias</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="pt-28">

        <div className="px-6 pt-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <button onClick={() => navigate('/industrias')} style={{ outline: 'none' }}
              className="flex items-center gap-2 text-white/35 hover:text-cyan-400 transition-colors text-sm mb-8">
              <ArrowLeft size={14} /> Todas las industrias
            </button>
          </div>
        </div>

        <section className="py-10 px-6 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                  <industry.icon size={22} className="text-cyan-400" />
                </div>
                <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase">{industry.label}</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-5">
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
                  {industry.hero}
                </span>
              </h1>
              <p className="text-white/60 text-xl max-w-3xl font-light leading-relaxed">{industry.description}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 px-6 bg-zinc-900 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industry.stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-zinc-950 border border-white/8 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-black text-cyan-400 leading-none mb-1">{s.value}</p>
                  <p className="text-white/60 text-xs">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-red-400/10 border border-red-400/20 rounded-2xl p-7">
              <p className="text-[10px] font-mono text-red-300 tracking-[0.4em] uppercase mb-4">Los desafíos</p>
              <div className="space-y-3">
                {industry.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <p className="text-red-300 text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-7">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase mb-4">Las soluciones</p>
              <div className="space-y-3">
                {industry.solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                    <p className="text-cyan-300 text-sm leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 px-6 pb-16 bg-zinc-900 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-5">Productos recomendados</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {industry.products.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 bg-zinc-950 border border-white/8 rounded-xl px-5 py-3.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <p className="text-white/60 text-sm">{p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">¿Listo para automatizar tu operación?</h2>
            <p className="text-white/60 mb-8">Consultanos sin costo. En 24 horas un ingeniero especializado te da una primera orientación técnica.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contacto"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
                Solicitar consulta técnica <ArrowRight size={14} />
              </a>
              <button onClick={() => navigate('/catalogo')} style={{ outline: 'none' }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all">
                Ver catálogo completo
              </button>
            </div>
          </div>
        </section>
      </main>
      <WppFloat />
      <Footer />
    </div>
  );
};

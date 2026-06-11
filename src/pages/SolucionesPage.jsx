import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { CheckCircle, ArrowRight, Search, FileText, Wrench, HeadphonesIcon } from 'lucide-react';

const FAQ_SOLUCIONES = [
  {
    q: '¿STOKA vende solo equipos o también hace la integración completa?',
    a: 'STOKA entrega proyectos llave en mano: diagnóstico, ingeniería de detalle, suministro del equipo, instalación mecánica y eléctrica, integración con el WMS o ERP existente y soporte posventa. No vendemos cajas sin servicio.',
  },
  {
    q: '¿Pueden trabajar en almacenes, bodegas y depósitos ya existentes?',
    a: 'Sí, la mayoría de los proyectos que hacemos son en instalaciones existentes. Adaptamos el diseño a la estructura disponible: altura libre, tipo de losa, restricciones de carga y accesos. En algunos casos se requieren trabajos de obra civil menores (nivelación de piso, anclajes), que coordinamos con el cliente.',
  },
  {
    q: '¿Cuánto demora el diagnóstico inicial?',
    a: 'La primera reunión técnica dura entre 1 y 2 horas. Con esa información elaboramos un análisis de viabilidad preliminar en menos de una semana. Si la evaluación avanza, la propuesta técnica completa con layout 3D, throughput calculado y TCO a 10 años toma entre 2 y 4 semanas.',
  },
  {
    q: '¿Qué pasa si ya tenemos un WMS o ERP instalado?',
    a: 'El WCS de DELIE se integra con cualquier WMS o ERP vía API REST, SOAP, EDI o archivo plano. Tenemos integraciones certificadas con SAP, Oracle, Microsoft Dynamics, Infor y sistemas propietarios. La integración de software es parte del proyecto llave en mano.',
  },
  {
    q: '¿Se puede automatizar solo una zona del almacén o bodega sin cambiar todo?',
    a: 'Sí. La automatización incremental es la estrategia más común: empezar por la zona de mayor rotación (picking o despacho) y extender el sistema en etapas. Esto reduce el riesgo operativo, permite validar el ROI antes de comprometerse con la inversión total y minimiza la interrupción de la operación existente.',
  },
];

const PROBLEMAS = [
  {
    num: '01',
    problema: 'Espacio físico saturado',
    descripcion: 'El almacén actual no da abasto, ampliar es caro o imposible.',
    solucion: 'ASRS alta densidad: hasta 10x más SKUs en el mismo footprint. Racks de 7 a 40 metros.',
    link: '/catalogo/asrs',
    linkLabel: 'Ver sistemas ASRS',
  },
  {
    num: '02',
    problema: 'Costo laboral en alza',
    descripcion: 'La operación manual no escala. Errores, rotación de personal, picos de demanda inmanejables.',
    solucion: 'Automatización selectiva por zona: picking automatizado + WMS que coordina todo el flujo.',
    link: '/catalogo/robots-manipulacion',
    linkLabel: 'Ver robots de manipulación',
  },
  {
    num: '03',
    problema: 'Inventario sin trazabilidad',
    descripcion: 'Errores de stock, quiebres, productos vencidos, FIFO imposible de garantizar manualmente.',
    solucion: 'WMS/WCS CMMI Nivel 5 con trazabilidad total por lote, número de serie y fecha de vencimiento.',
    link: '/catalogo/software',
    linkLabel: 'Ver software WMS/WCS',
  },
  {
    num: '04',
    problema: 'Sin capacidad de escalar',
    descripcion: 'La operación crece pero la infraestructura no. Temporadas o picos colapsan el despacho.',
    solucion: 'Sistemas modulares DELIE: escalables sin detener la operación. ROI típico 18–36 meses.',
    link: '/catalogo',
    linkLabel: 'Ver catálogo completo',
  },
];

const METODOLOGIA = [
  {
    icon: Search,
    paso: '01',
    titulo: 'Diagnóstico sin costo',
    desc: 'Analizamos tu operación actual: throughput, perfil de SKUs, picos de demanda, layout disponible y restricciones de presupuesto. Sin compromiso.',
  },
  {
    icon: FileText,
    paso: '02',
    titulo: 'Propuesta técnica y TCO',
    desc: 'Entregamos una propuesta con selección de sistema, layout, simulación de flujos, TCO a 10 años y proyección de ROI con supuestos verificables.',
  },
  {
    icon: Wrench,
    paso: '03',
    titulo: 'Instalación certificada',
    desc: 'Equipo de ingeniería en Argentina. Instalación, puesta en marcha e integración con tu ERP/WMS existente. Sin depender de tiempos de fábrica en el exterior.',
  },
  {
    icon: HeadphonesIcon,
    paso: '04',
    titulo: 'Posventa local',
    desc: 'Soporte técnico presencial en Argentina. Mantenimiento preventivo, repuestos y actualizaciones de software. Sin diferencia horaria, sin esperar respuesta de China.',
  },
];

const CASOS_USO = [
  {
    operacion: 'E-commerce · retail',
    desc: 'Picos de demanda estacionales, alta rotación de SKUs, despacho en el día.',
    soluciones: ['Miniload para totes', 'Robots shuttle 4 vías', 'WMS con wave planning'],
    industria: '/industrias/e-commerce-retail',
  },
  {
    operacion: 'Cadena de frío',
    desc: 'Cámara frigorífica de −30 °C a −2 °C. FIFO obligatorio, trazabilidad sanitaria.',
    soluciones: ['ASRS para cámara fría', 'Transelevadores −30 °C', 'WMS con lote y vencimiento'],
    industria: '/industrias/cadena-frio',
  },
  {
    operacion: 'Manufactura industrial',
    desc: 'Alimentación de línea en tiempo real. Kanban automatizado, cero paros por falta de material.',
    soluciones: ['VLM para herramientas', 'AGV/AMR de alimentación', 'WCS integrado al MES'],
    industria: '/industrias/manufactura',
  },
  {
    operacion: 'Farmacéutica · laboratorio',
    desc: 'GMP, trazabilidad por número de serie, temperatura controlada, auditoría ANMAT.',
    soluciones: ['Miniload con temperatura controlada', 'WMS con serialización', 'Integración con LIMS/ERP'],
    industria: '/industrias/farmaceutica',
  },
  {
    operacion: 'Logística 3PL',
    desc: 'Múltiples clientes, múltiples turnos, SLA exigentes.',
    soluciones: ['ASRS multi-cliente', 'WMS multi-tenant', 'Robots shuttle con alta cadencia'],
    industria: '/industrias/logistica-3pl',
  },
  {
    operacion: 'Minería · Oil & Gas',
    desc: 'Repuestos críticos en zonas remotas. Cero tiempo de parada.',
    soluciones: ['VLM compacto', 'WMS con criticidad de repuesto', 'Acceso controlado por rol'],
    industria: '/industrias/mineria-oil-gas',
  },
];

export const SolucionesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Helmet>
        <title>Soluciones ASRS Llave en Mano Argentina | STOKA</title>
        <meta name="description" content="STOKA diseña e instala sistemas ASRS llave en mano en Argentina y Chile. Diagnóstico sin costo, propuesta técnica con TCO y soporte local post-instalación." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Soluciones de Automatización de Almacenes | STOKA Argentina" />
        <meta property="og:description" content="Cómo resolvemos los problemas de almacenamiento industrial: metodología, casos de uso por industria, y soporte técnico 100% local." />
        <meta property="og:url" content="https://www.stokagroup.com/soluciones" />
        <link rel="canonical" href="https://www.stokagroup.com/soluciones" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Soluciones", "item": "https://www.stokagroup.com/soluciones" },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_SOLUCIONES.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Soluciones ASRS Llave en Mano — STOKA Argentina",
          "description": "Diseño, suministro, instalación e integración de sistemas ASRS llave en mano en Argentina y Chile. Diagnóstico sin costo, propuesta técnica con TCO y soporte local.",
          "provider": { "@id": "https://www.stokagroup.com/#organization" },
          "areaServed": [{ "@type": "Country", "name": "Argentina" }, { "@type": "Country", "name": "Chile" }],
          "serviceType": "Integración ASRS Llave en Mano",
          "url": "https://www.stokagroup.com/soluciones"
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="bg-slate-950 pt-36 pb-20 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-gray-300">Soluciones</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-5">
              Proyecto llave en mano · Argentina y Chile
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Cómo resolvemos<br />
              <span className="text-cyan-400">tu problema</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-10">
              No vendemos cajas. Diagnosticamos tu operación, diseñamos la solución correcta e instalamos con equipo propio en Argentina. Soporte técnico local de por vida.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacto"
                className="flex items-center gap-2 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors shadow-[0_4px_20px_rgba(6,182,212,0.35)]">
                Diagnóstico sin costo <ArrowRight size={14} />
              </Link>
              <Link to="/catalogo"
                className="flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 hover:bg-white/15 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors">
                Ver catálogo de productos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMAS QUE RESOLVEMOS */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Los 4 desafíos que resolvemos</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">Tu operación tiene un problema concreto. Tenemos la solución.</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {PROBLEMAS.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                <span className="text-[10px] font-black text-gray-300 font-mono">//{p.num}</span>
                <h3 className="font-black text-gray-900 text-base uppercase tracking-tight mt-2 mb-2">{p.problema}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.descripcion}</p>
                <div className="flex items-start gap-2 bg-cyan-50 border border-cyan-100 rounded-xl p-3 mb-4">
                  <CheckCircle size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-xs leading-relaxed">{p.solucion}</p>
                </div>
                <Link to={p.link} className="text-xs font-bold text-cyan-600 hover:text-cyan-500 flex items-center gap-1 transition-colors">
                  {p.linkLabel} <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Nuestro proceso</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">De la consulta al sistema en producción</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {METODOLOGIA.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                    <m.icon size={18} className="text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-300 font-mono mb-1">Paso {m.paso}</p>
                    <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{m.titulo}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-slate-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.35em] mb-1">Primera consulta</p>
              <p className="text-white font-black text-lg leading-tight">Sin costo · Respuesta en menos de 24 hs</p>
              <p className="text-gray-400 text-xs mt-1">Ingenieros en Argentina disponibles para visita técnica a tu planta.</p>
            </div>
            <Link to="/contacto"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors shrink-0">
              Iniciar diagnóstico <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* CASOS DE USO POR INDUSTRIA */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Por industria</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-3">Cada industria tiene sus propios requerimientos</h2>
          <p className="text-gray-400 text-sm mb-10">El mismo objetivo — automatizar — requiere soluciones distintas según la industria. Esto es lo que resolvemos en cada caso.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CASOS_USO.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 transition-all">
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{c.operacion}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.soluciones.map((s) => (
                    <span key={s} className="text-[10px] font-bold text-cyan-600 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full">{s}</span>
                  ))}
                </div>
                <Link to={c.industria} className="text-[11px] font-bold text-gray-400 hover:text-cyan-500 flex items-center gap-1 transition-colors">
                  Ver solución para esta industria <ArrowRight size={11} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/industrias" className="text-sm font-bold text-cyan-600 hover:text-cyan-500 flex items-center gap-1.5 justify-center transition-colors">
              Ver todas las industrias <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* POR QUÉ STOKA Y NO UN INTEGRADOR EUROPEO */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Por qué STOKA</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">El valor del soporte local de principio a fin</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Ingeniería local',     desc: 'Diseñamos el sistema en Argentina. Sin traducir planos europeos ni esperar correcciones desde el exterior.' },
              { label: 'Sin intermediarios',    desc: 'STOKA es representante exclusivo de DELIE. No hay distribuidores entre vos y el fabricante.' },
              { label: 'Precios LATAM',         desc: 'Tecnología DELIE tiene precios 30–50% menores a los sistemas europeos equivalentes para el mercado latinoamericano.' },
              { label: 'Posventa garantizada',  desc: 'Técnicos certificados en Argentina. Sin esperar vuelos internacionales ni diferencia horaria para resolver una urgencia.' },
            ].map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 text-sm mb-1">{r.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/como-trabajamos" className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
              Cómo trabajamos →
            </Link>
            <Link to="/casos-de-exito" className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
              Casos de éxito →
            </Link>
            <Link to="/catalogo" className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
              Catálogo de productos →
            </Link>
            <Link to="/beneficios-fiscales" className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
              Beneficios fiscales 2026 →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3 text-center">Preguntas frecuentes</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter text-center mb-10">Soluciones de automatización en Argentina</h2>
          <div className="space-y-3">
            {FAQ_SOLUCIONES.map((f, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                  <span className="text-gray-900 font-semibold text-sm">{f.q}</span>
                  <span className="text-gray-400 text-lg font-light shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

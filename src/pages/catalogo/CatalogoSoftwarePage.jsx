import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { ArrowRight, ChevronRight } from 'lucide-react';

const seg = (s) => s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@ ]/gu, c => encodeURIComponent(c)).replace(/ /g, '%20');
const img = (prod, file) => `/productos-delie/software-inteligente/${seg(prod)}/${file}`;

const PRODUCTS = [
  { name: 'WMS — Gestión de almacenes', image: img('(WMS) Sistema de gestión de almacenes', '2025112715331054f3e.webp'), desc: 'Software de gestión de almacén certificado CMMI Nivel 5. Entradas, salidas e inventario en tiempo real. Digital Twin 3D. Reduce efecto látigo hasta 70%. Conecta con ERP, MES, SAP, TMS y OMS.' },
  { name: 'WCS — Control de almacén', image: img('(WCS) Sistema de control de almacén', '202511271540270edaa.webp'), desc: 'Integra y coordina en tiempo real todos los equipos: robots, transelevadores, transportadores, AMR y RGV. Monitoreo 2D y 3D, descomposición automática de tareas y selección de ruta óptima.' },
  { name: 'HMS — Sistema hombre-máquina', image: img('(HMS) Sistema hombre-máquina', '202511271543590186b.webp'), desc: 'Interfaz intuitiva entre operario y equipos para control y supervisión de la instalación logística. Compatible con dispositivos móviles y supervisión en tiempo real.' },
  { name: 'ECS — Control electrónico', image: img('(ECS) Sistema de control electrónico', '202511271547349105f.webp'), desc: 'Gestión integral del funcionamiento de todos los componentes eléctricos. Monitoreo de motores, variadores y sensores con diagnóstico predictivo integrado con WCS y WMS.' },
  { name: 'Interfaz API', image: img('Interfaz API', '20251127155815290ed.webp'), desc: 'Capa de integración para conectar el sistema de almacén con plataformas empresariales externas. APIs RESTful estándar compatibles con ERP, MES, SAP, TMS y OMS.' },
  { name: 'Visualización 3D centralizada', image: img('Sistema de control central de visualización 3D', '20251127160404e52d8.webp'), desc: 'Representación tridimensional en tiempo real de todo el almacén. Digital Twin para simulación y optimización. Dashboards diferenciados por rol de usuario.' },
];

const COMPARISON = [
  { system: 'WMS', full: 'Warehouse Management System', role: 'Gestiona el QUÉ: inventario, ubicaciones, órdenes, trazabilidad.', integra: 'ERP, SAP, TMS, OMS, MES', nivel: 'Negocio' },
  { system: 'WCS', full: 'Warehouse Control System', role: 'Gestiona el CÓMO: coordina robots, transelevadores y conveyors en tiempo real.', integra: 'WMS, robots, transelevadores, AMR, RGV', nivel: 'Operaciones' },
  { system: 'HMS', full: 'Human Machine System', role: 'Interfaz para operarios y supervisores en planta.', integra: 'WCS, WMS', nivel: 'Usuario final' },
  { system: 'ECS', full: 'Electronic Control System', role: 'Control eléctrico de motores, variadores y sensores.', integra: 'WCS, WMS', nivel: 'Hardware' },
];

const FAQ = [
  { q: '¿Cuánto tiempo lleva implementar el WMS en mi almacén, bodega o depósito?', a: 'La implementación base del WMS toma entre 4 y 12 semanas según la complejidad de integración con el ERP. En proyectos con hardware DELIE, el WMS se configura simultáneamente con la instalación mecánica, sin sumar tiempo al cronograma general. STOKA gestiona la implementación de software como parte del proyecto llave en mano.' },
  { q: '¿El WMS puede gestionar un almacén o bodega manual (sin robots)?', a: 'Sí. El WMS puede implementarse en un depósito manual como primer paso de digitalización, antes de automatizar. Gestiona inventario en tiempo real, picking con listas o pick-to-light, FIFO/FEFO y reportes por turno. Este enfoque permite capacitar al equipo con el sistema antes de añadir hardware automatizado.' },
  { q: '¿Cómo es la integración técnica del WMS con SAP o ERP en Argentina?', a: 'DELIE tiene conectores nativos para SAP (BAPI/RFC y SAP EWM), Oracle, Microsoft Dynamics y APIs RESTful para cualquier otro sistema. La integración incluye sincronización de maestros de artículos y ubicaciones, órdenes de entrada/salida y confirmaciones en tiempo real. STOKA entrega documentación técnica completa.' },
  { q: '¿Qué pasa con los datos del depósito si el servidor del WMS se cae?', a: 'El WMS tiene redundancia activa-pasiva: si el servidor principal falla, el servidor de respaldo toma el control en segundos sin pérdida de datos. Los robots y transportadores tienen modo de operación autónoma de corto plazo. Todos los movimientos se registran con timestamp y se sincronizan automáticamente cuando el sistema se recupera.' },
];

const SISTER_CATS = [
  { label: 'AS/RS', href: '/catalogo/asrs', desc: 'Estanterías automatizadas' },
  { label: 'Robots de manipulación', href: '/catalogo/robots-manipulacion', desc: 'Transelevadores, shuttles y AMR' },
  { label: 'Almacenamiento vertical', href: '/catalogo/almacenamiento-vertical', desc: 'VLM y carruseles inteligentes' },
  { label: 'Equipo de transporte', href: '/catalogo/equipo-transporte', desc: 'Conveyors, elevadores y paletizadores' },
];

export const CatalogoSoftwarePage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>Sistema WMS | Warehouse Management System para Almacenes y Bodegas | STOKA Argentina</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Sistema WMS (warehouse management system) y software de gestión de bodegas DELIE. Integración WMS SAP, WMS ERP, WCS. Control total del almacén automatizado en Argentina." />
        <meta property="og:title" content="Software WMS y WCS DELIE | Gestión de Almacén | STOKA Argentina" />
        <meta property="og:description" content="WMS, WCS, HMS y visualización 3D DELIE. Integración SAP, ERP, MES. Control total del almacén automatizado en Argentina." />
        <meta property="og:url" content="https://www.stokagroup.com/catalogo/software" />
        <link rel="canonical" href="https://www.stokagroup.com/catalogo/software" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://www.stokagroup.com/catalogo" },
            { "@type": "ListItem", "position": 3, "name": "Software inteligente", "item": "https://www.stokagroup.com/catalogo/software" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Software de gestión de almacén DELIE — WMS, WCS, HMS",
          "numberOfItems": 6,
          "itemListElement": PRODUCTS.map((p, i) => ({
            "@type": "ListItem", "position": i + 1, "name": p.name, "description": p.desc,
            "url": "https://www.stokagroup.com/catalogo/software"
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img src={img('(WMS) Sistema de gestión de almacenes', '2025112715331054f3e.webp')}
          alt="Software WMS DELIE para gestión de almacenes automatizados"
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
              <button onClick={() => navigate('/')} className="hover:text-cyan-400 transition-colors">Inicio</button>
              <ChevronRight size={12} />
              <button onClick={() => navigate('/catalogo')} className="hover:text-cyan-400 transition-colors">Catálogo</button>
              <ChevronRight size={12} />
              <span className="text-cyan-400">Software inteligente</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">WMS · WCS · HMS · ECS · DELIE</p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              Software inteligente —<br />
              <span className="text-cyan-400">WMS, WCS y control de almacén</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              6 módulos de software DELIE certificados CMMI Nivel 5. Control total del almacén automatizado con integración SAP, Oracle y cualquier ERP. Digital Twin 3D incluido.
            </p>
            <div className="flex flex-wrap gap-6">
              {[{ value: 'CMMI 5', label: 'Certificación' }, { value: '3D', label: 'Digital Twin' }, { value: 'SAP', label: 'Compatible' }].map(s => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-black text-white italic">{s.value}</span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* WMS vs WCS */}
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Entendiendo el software de almacén</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-6">Sistema WMS vs WCS: diferencias y complementariedad en la gestión de almacenes y bodegas</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            En un almacén automatizado moderno, el sistema WMS (warehouse management system) no es una sola pieza sino una arquitectura en capas. El software de gestión de almacenes y bodegas debe diseñarse con la integración WMS ERP —especialmente integración WMS SAP— como requisito desde el inicio, no como adaptación posterior. Entender la diferencia entre WMS, WCS, HMS y ECS es fundamental para maximizar el retorno de la inversión.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {COMPARISON.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-black text-cyan-500">{c.system}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{c.full}</p>
                    <p className="text-xs text-gray-400">Nivel: {c.nivel}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{c.role}</p>
                <p className="text-xs text-gray-400"><span className="font-bold text-gray-600">Integra con:</span> {c.integra}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            El software WMS DELIE (warehouse management system) está certificado en CMMI Nivel 5, el estándar más alto de madurez en desarrollo de software. Como software de gestión de bodegas y almacenes, garantiza procesos controlados y actualizaciones predecibles. La integración WMS SAP se realiza mediante conectores nativos BAPI/RFC; la integración WMS ERP con Oracle, TMS y OMS mediante APIs RESTful estándar, con documentación técnica completa entregada en cada proyecto.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Uno de los errores más comunes en proyectos de automatización de almacenes es implementar el hardware ASRS sin considerar correctamente la capa de software. Un transelevador sin WCS adecuado opera como un equipo manual: eficiente en el movimiento físico pero sin la inteligencia que necesita para coordinar ciclos combinados, gestionar inventario en tiempo real y integrarse con el ERP. El WMS y el WCS de DELIE se diseñaron como un stack integrado: misma base de datos, misma interfaz, misma fuente de verdad para el inventario del almacén, bodega o depósito.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            En Argentina y Chile, muchos operadores de depósitos y almacenes tienen ya un WMS heredado (o el módulo WM del ERP) y buscan agregar un WCS para controlar el equipamiento ASRS. El WCS de DELIE se integra con cualquier WMS externo mediante APIs documentadas. STOKA gestiona la integración técnica con el ERP del cliente como parte del contrato llave en mano, sin costos adicionales por hora de consultoría de integración.
          </p>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Catálogo completo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">6 módulos de software de almacén</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-sm transition-all group">
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img src={p.image} alt={`${p.name} — software DELIE para almacén automatizado`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-base mb-2">{p.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => navigate('/catalogo')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              Ver catálogo completo <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Seguir explorando</p>
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-6">Otras categorías del catálogo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SISTER_CATS.map(c => (
              <button key={c.href} onClick={() => navigate(c.href)}
                className="text-left p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50/50 transition-all group">
                <p className="font-bold text-gray-900 text-sm mb-0.5 group-hover:text-cyan-600 transition-colors">{c.label}</p>
                <p className="text-gray-500 text-xs">{c.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* Explorar por tipo — product child links */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Explorar por tipo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Software disponible</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { nombre: 'WMS — Gestión de almacenes', desc: 'Inventario en tiempo real, picking, expedición. CMMI Nivel 5.', url: '/catalogo/software/wms' },
              { nombre: 'WCS — Control del almacén', desc: 'Control en tiempo real de transelevadores, robots y transportadores.', url: '/catalogo/software/wcs' },
            ].map((item, i) => (
              <motion.a key={i} href={item.url}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-sm transition-all group block">
                <h3 className="font-black text-gray-900 text-sm mb-2 group-hover:text-cyan-600 transition-colors">{item.nombre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-cyan-500 font-bold">
                  Ver detalle <ChevronRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Preguntas frecuentes</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Lo que pregunta un Director de Operaciones</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">Cotizá sin costo</p>
          <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-4">
            Control total de tu almacén<br /><span className="text-cyan-400">desde un solo sistema.</span>
          </h2>
          <p className="text-gray-400 text-base mb-8">Ingenieros especializados evalúan la integración con tu ERP y diseñan la arquitectura de software óptima para tu operación.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contacto')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Solicitar demo técnica <ArrowRight size={14} />
            </button>
            <button onClick={() => navigate('/como-trabajamos')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all">
              Ver nuestra metodología
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

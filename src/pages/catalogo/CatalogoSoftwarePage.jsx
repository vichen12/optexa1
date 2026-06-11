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
  { name: 'WMS — Gestión de almacenes', image: img('(WMS) Sistema de gestión de almacenes', '2025112715331054f3e.webp'), desc: 'Certificado CMMI Nivel 5. Entradas, salidas e inventario en tiempo real. Digital Twin 3D. Reduce efecto látigo hasta 70%. Integración ERP, MES, SAP, TMS y OMS.', link: '/catalogo/software/wms' },
  { name: 'WCS — Control de almacén', image: img('(WCS) Sistema de control de almacén', '202511271540270edaa.webp'), desc: 'Coordina en tiempo real robots, transelevadores, transportadores, AMR y RGV. Monitoreo 2D y 3D, descomposición automática de tareas y ruta óptima.', link: '/catalogo/software/wcs' },
  { name: 'HMS — Sistema hombre-máquina', image: img('(HMS) Sistema hombre-máquina', '202511271543590186b.webp'), desc: 'Interfaz para operarios y supervisores en planta. Control y supervisión en tiempo real compatible con dispositivos móviles y pantallas HMI.', link: '/catalogo/software/hms' },
  { name: 'ECS — Control electrónico', image: img('(ECS) Sistema de control electrónico', '202511271547349105f.webp'), desc: 'Gestión de todos los componentes eléctricos. Monitoreo de motores, variadores y sensores con diagnóstico predictivo integrado con WCS y WMS.', link: '/catalogo/software/ecs' },
  { name: 'Interfaz API', image: img('Interfaz API', '20251127155815290ed.webp'), desc: 'Capa de integración con plataformas empresariales externas. APIs RESTful estándar compatibles con ERP, MES, SAP, TMS y OMS.', link: '/catalogo/software/interfaz-api' },
  { name: 'Visualización 3D centralizada', image: img('Sistema de control central de visualización 3D', '20251127160404e52d8.webp'), desc: 'Digital Twin tridimensional en tiempo real de todo el almacén. Simulación, optimización y dashboards diferenciados por rol de usuario.', link: '/catalogo/software/visualizacion-3d' },
];

const COMPARISON = [
  { system: 'WMS', full: 'Warehouse Management System', role: 'Gestiona el QUÉ: inventario, ubicaciones, órdenes, trazabilidad.', integra: 'ERP, SAP, TMS, OMS, MES', nivel: 'Negocio' },
  { system: 'WCS', full: 'Warehouse Control System', role: 'Gestiona el CÓMO: coordina robots, transelevadores y conveyors en tiempo real.', integra: 'WMS, robots, transelevadores, AMR, RGV', nivel: 'Operaciones' },
  { system: 'HMS', full: 'Human Machine System', role: 'Interfaz para operarios y supervisores en planta.', integra: 'WCS, WMS', nivel: 'Usuario final' },
  { system: 'ECS', full: 'Electronic Control System', role: 'Control eléctrico de motores, variadores y sensores.', integra: 'WCS, WMS', nivel: 'Hardware' },
];

const BENEFITS = [
  'CMMI Nivel 5 certificado',
  'Integración WMS SAP nativa (BAPI/RFC)',
  'WMS + WCS mismo stack integrado',
  'APIs RESTful documentadas',
  'Digital Twin 3D incluido',
  'Sin costo extra de integración ERP',
  'Redundancia activa-pasiva',
  'Soporte técnico posventa local',
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
        <title>Sistema WMS y WCS para Almacenes | Software DELIE | STOKA</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="WMS y WCS DELIE para almacenes en Argentina. Integración con SAP, Oracle y Microsoft Dynamics. Control total del almacén automatizado en tiempo real." />
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
            "url": `https://www.stokagroup.com${p.link}`
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
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Software WMS y WCS para Almacenes DELIE — Argentina",
          "description": "WMS y WCS DELIE certificados CMMI Nivel 5. Integración con SAP, Oracle y Microsoft Dynamics. Control total del almacén automatizado en Argentina y Chile.",
          "provider": { "@id": "https://www.stokagroup.com/#organization" },
          "areaServed": [{ "@type": "Country", "name": "Argentina" }, { "@type": "Country", "name": "Chile" }],
          "serviceType": "Software WMS/WCS — Gestión de Almacenes",
          "url": "https://www.stokagroup.com/catalogo/software"
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO — limpio, sin imagen de fondo */}
      <div className="bg-white border-b border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5">
              <button onClick={() => navigate('/')} className="hover:text-cyan-500 transition-colors">Inicio</button>
              <ChevronRight size={12} />
              <button onClick={() => navigate('/catalogo')} className="hover:text-cyan-500 transition-colors">Catálogo</button>
              <ChevronRight size={12} />
              <span className="text-cyan-500">Software inteligente</span>
            </nav>
            <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.35em] mb-3">WMS · WCS · HMS · ECS · DELIE</p>
            <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              Software inteligente —<br />
              <span className="text-cyan-500">WMS, WCS y control de almacén</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
              6 módulos de software DELIE certificados CMMI Nivel 5. Control total del almacén automatizado con integración SAP, Oracle y cualquier ERP. Digital Twin 3D incluido.
            </p>
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-wrap gap-8 md:gap-16">
            {[
              { value: '6', label: 'Módulos de software' },
              { value: 'CMMI 5', label: 'Certificación máxima' },
              { value: 'SAP / ERP', label: 'Integración nativa' },
              { value: '3D', label: 'Digital Twin incluido' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }}>
                <p className="text-2xl md:text-3xl font-black text-white italic leading-none">{s.value}</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTOS */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Catálogo completo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">6 módulos de software de almacén</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <motion.button key={i} onClick={() => navigate(p.link)}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-400 hover:shadow-md transition-all group cursor-pointer">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img src={p.image} alt={`${p.name} — software DELIE para almacén automatizado`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-base mb-2 group-hover:text-cyan-600 transition-colors">{p.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-cyan-500 font-bold">
                    Ver detalle <ChevronRight size={12} />
                  </span>
                </div>
              </motion.button>
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

      {/* DESCRIPCIÓN SEO */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Entendiendo el software de almacén</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-1">Sistema WMS vs WCS: diferencias y complementariedad</h2>
          <p className="text-gray-400 text-sm mb-8">en la gestión de almacenes y bodegas</p>

          {/* Comparison cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
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

          {/* Benefits chips */}
          <div className="mb-10">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Ventajas clave del stack DELIE</p>
            <div className="flex flex-wrap gap-2">
              {BENEFITS.map((b, i) => (
                <span key={i} className="px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-bold text-cyan-700">{b}</span>
              ))}
            </div>
          </div>

          {/* El error más común — dark card */}
          <div className="bg-slate-900 rounded-2xl p-7 mb-6">
            <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.35em] mb-3">El error más común en proyectos AS/RS</p>
            <p className="text-white text-base font-bold leading-relaxed mb-3">
              Implementar el hardware sin diseñar la capa de software.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Un transelevador sin WCS adecuado opera como equipo manual: eficiente en el movimiento físico pero sin la inteligencia para coordinar ciclos combinados, gestionar inventario en tiempo real e integrarse con el ERP. El WMS y el WCS de DELIE se diseñaron como un stack integrado: misma base de datos, misma interfaz, misma fuente de verdad para el inventario del almacén, bodega o depósito.
            </p>
          </div>

          {/* Contexto Argentina/Chile */}
          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6">
            <p className="text-cyan-700 text-[10px] font-black uppercase tracking-[0.35em] mb-3">Argentina y Chile — WMS heredado</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Muchos operadores de depósitos y almacenes ya tienen un WMS heredado (o el módulo WM del ERP) y buscan agregar un WCS para controlar el equipamiento AS/RS. El WCS de DELIE se integra con cualquier WMS externo mediante APIs documentadas. <strong>STOKA gestiona la integración técnica con el ERP del cliente como parte del contrato llave en mano, sin costos adicionales por hora de consultoría de integración.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Seguir explorando</p>
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-6">Otras categorías del catálogo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SISTER_CATS.map(c => (
              <button key={c.href} onClick={() => navigate(c.href)}
                className="text-left p-4 bg-white border border-gray-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50/50 transition-all group">
                <p className="font-bold text-gray-900 text-sm mb-0.5 group-hover:text-cyan-600 transition-colors">{c.label}</p>
                <p className="text-gray-500 text-xs">{c.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORAR POR TIPO */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Explorar por tipo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Software disponible</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { nombre: 'WMS — Gestión de almacenes', desc: 'Inventario en tiempo real, picking, expedición. CMMI Nivel 5.', url: '/catalogo/software/wms' },
              { nombre: 'WCS — Control del almacén', desc: 'Control en tiempo real de transelevadores, robots y transportadores.', url: '/catalogo/software/wcs' },
            ].map((item, i) => (
              <motion.button key={i} onClick={() => navigate(item.url)}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="text-left bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-sm transition-all group">
                <h3 className="font-black text-gray-900 text-sm mb-2 group-hover:text-cyan-600 transition-colors">{item.nombre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-cyan-500 font-bold">
                  Ver detalle <ChevronRight size={12} />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Preguntas frecuentes</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Lo que pregunta un Director de Operaciones</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
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

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';

const canonical = 'https://www.stokagroup.com/chile';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
    { "@type": "ListItem", "position": 2, "name": "Chile", "item": canonical },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿STOKA opera en Chile para proyectos de automatización de bodegas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. STOKA Group tiene representación para proyectos de automatización de bodegas y almacenes en Chile. Ejecutamos el proyecto llave en mano: ingeniería, instalación, puesta en marcha y soporte técnico post-venta en Chile." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta automatizar una bodega en Chile?",
      "acceptedAnswer": { "@type": "Answer", "text": "El costo varía según el tamaño, throughput y tecnología. Un proyecto de escala media (2 pasillos de transelevadores, 1.000–3.000 posiciones, WCS integrado) puede estar entre USD 800.000 y USD 1.800.000. STOKA realiza el diagnóstico técnico y la estimación sin costo." }
    },
    {
      "@type": "Question",
      "name": "¿Qué sectores en Chile automatizan sus bodegas con mayor frecuencia?",
      "acceptedAnswer": { "@type": "Answer", "text": "Retail y e-commerce, minería (almacenes MRO en el norte), alimentos y bebidas (cadena de frío), farmacéutica y distribución logística 3PL en el Gran Santiago y Valparaíso." }
    },
    {
      "@type": "Question",
      "name": "¿El soporte técnico para bodegas automatizadas en Chile es local?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. STOKA provee soporte técnico local en Chile con repuestos disponibles para resolver la mayoría de las intervenciones en menos de 24 horas." }
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatización de Bodegas y Almacenes en Chile — Sistemas ASRS DELIE",
  "description": "Automatización de bodegas en Chile con ASRS DELIE: transelevadores, robots shuttle y WMS/WCS. Proyecto llave en mano.",
  "provider": { "@id": "https://www.stokagroup.com/#organization" },
  "areaServed": { "@type": "Country", "name": "Chile" },
};

const SECTORS = [
  {
    title: 'Retail y E-commerce',
    desc: 'Centros de distribución automatizados para despacho rápido y gestión de SKUs de alto volumen en Santiago y Valparaíso.',
    url: '/industrias/e-commerce-retail',
    img: '/productos-delie/asrs/Estanter%C3%ADa%20del%20robot%20Tote%20Shuttle/tote-shuttle-robot-racking38678.webp',
  },
  {
    title: 'Alimentos y Cadena de Frío',
    desc: 'Bodegas frigoríficas para exportación de frutas y proteínas. FIFO automático y ahorro energético hasta -25 °C.',
    url: '/industrias/alimentos-bebidas',
    img: '/productos-delie/robots-manipulacion/Robot%20transportador%20de%20paletas%20de%20almacenamiento%20en%20fr%C3%ADo/cold-storage-pallet-shuttle-robot3e9c9.webp',
  },
  {
    title: 'Minería — Almacenes MRO',
    desc: 'Repuestos críticos en el norte minero (I a IV Región). Localización de cualquier pieza en menos de 30 segundos.',
    url: '/industrias/mineria-oil-gas',
    img: '/productos-delie/almacenamiento-vertical/Carrusel%20vertical%20inteligente%20para%20almacenamiento%20automatizado%20de%20alta-densidad/2025112714330825019.webp',
  },
  {
    title: 'Logística 3PL',
    desc: 'WMS multicliente y operación 24/7 para operadores logísticos que sirven al retail y e-commerce chileno.',
    url: '/industrias/logistica-3pl',
    img: '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20paletas%20de%20doble-m%C3%A1stil/double-mast-pallet-stacker-craned111c.webp',
  },
  {
    title: 'Farmacéutica',
    desc: 'Bodegas con cumplimiento GMP, FEFO automático y trazabilidad compatible con el ISP y requisitos internacionales.',
    url: '/industrias/farmaceutica',
    img: '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20minicarga%20profunda-de%20profundidad/single-deep-miniload-stacker-crane41fe7.webp',
  },
  {
    title: 'Manufactura',
    desc: 'Intralogística sincronizada con MES/ERP para plantas en la Región Metropolitana y Maule.',
    url: '/industrias/manufactura',
    img: '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20paletas%20personalizada/customized-pallet-stacker-crane5dc5d.webp',
  },
];

const SYSTEMS = [
  { name: 'Transelevador Unit-Load', desc: 'Para paletas en bodegas de gran altura (hasta 40 m).', url: '/catalogo/asrs/unit-load' },
  { name: 'Transelevador MiniLoad',  desc: 'Para cajas y totes con picking goods-to-person de alta velocidad.', url: '/catalogo/asrs/miniload' },
  { name: 'Robot Lanzadera Shuttle', desc: 'Alta densidad para SKUs ligeros y throughput paralelo.', url: '/catalogo/asrs/shuttle' },
  { name: 'WMS/WCS Software',        desc: 'Sistema de gestión y control integrado con ERP existente.', url: '/catalogo/software/wms' },
];

const STATS = [
  { v: '+35%',   l: 'Alza costo laboral logístico en Chile (3 años)' },
  { v: 'USD 1,8M', l: 'Inversión típica bodega automatizada completa' },
  { v: '< 24 h', l: 'Tiempo de respuesta soporte técnico local' },
  { v: '100%',   l: 'Llave en mano: ingeniería, instalación, puesta en marcha' },
];

export const ChilePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Helmet>
        <title>Automatización de Bodegas en Chile | ASRS DELIE | STOKA</title>
        <meta name="description" content="Automatización de bodegas en Chile con ASRS DELIE: transelevadores, robots shuttle y WMS/WCS. STOKA ejecuta el proyecto llave en mano." />
        <meta property="og:title" content="Automatización de Bodegas en Chile | ASRS DELIE | STOKA" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-white pt-36 pb-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={13} className="text-cyan-500" />
            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.5em]">
              Chile · Región Metropolitana · Norte Minero · Valparaíso
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6"
          >
            Automatización<br />
            <span className="text-cyan-500">de bodegas en Chile</span>
          </motion.h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            STOKA Group ejecuta proyectos llave en mano con sistemas ASRS DELIE: transelevadores, robots shuttle y software WMS/WCS. Ingeniería, instalación y soporte técnico local en Chile.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-[0_4px_20px_rgba(6,182,212,0.25)]"
            >
              <Phone size={15} /> Consultar proyecto en Chile
            </Link>
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-cyan-300 text-gray-600 hover:text-gray-900 font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Ver catálogo completo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-5 text-center"
            >
              <p className="text-3xl font-black text-cyan-500 mb-1">{s.v}</p>
              <p className="text-xs text-gray-500 leading-snug">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photo strip */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
          {[
            '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20un%20solo%20m%C3%A1stil/single-mast-pallet-stacker-crane92251.jpg',
            '/productos-delie/asrs/Transelevador%20Gr%C3%BAa%20+%20Estanter%C3%ADa%20Robot%20Lanzadera/pallet-stacker-crane-shuttle-robot-racking89e90.webp',
            '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20paletas%20de%20doble-m%C3%A1stil/double-mast-pallet-stacker-craned111c.webp',
          ].map((src, i) => (
            <div key={i} className="relative h-44 overflow-hidden rounded-xl border border-gray-100">
              <img src={src} alt="Sistema ASRS DELIE en bodega Chile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/30 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Why STOKA in Chile */}
      <section className="bg-gray-50 border-y border-gray-100 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Propuesta de valor</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Proyecto llave en mano en Chile</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Ingeniería personalizada para la normativa y espacio disponible en Chile',
              'Soporte técnico y repuestos locales — respuesta menor a 24 horas',
              'Integración con ERP existente (SAP, Oracle, Microsoft Dynamics)',
              'Documentación para habilitaciones según normativa chilena',
              'Financiamiento en USD disponible para proyectos en Chile',
              'Referencias verificables en Chile desde la primera reunión técnica',
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-4 py-4">
                <CheckCircle size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Mercado chileno</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Sectores con mayor adopción en Chile</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {SECTORS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={s.url}
                  className="group flex flex-col h-full bg-white border border-gray-200 hover:border-cyan-300 rounded-2xl overflow-hidden transition-colors shadow-sm"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-sm font-black text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed flex-1">{s.desc}</p>
                    <div className="flex items-center gap-1 mt-4 text-cyan-600 text-xs font-medium group-hover:gap-2 transition-all">
                      Ver solución <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Catálogo disponible</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Sistemas para bodegas en Chile</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SYSTEMS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={s.url}
                  className="group flex items-start gap-4 bg-white border border-gray-200 hover:border-cyan-300 rounded-2xl p-5 transition-colors"
                >
                  <ArrowRight size={16} className="text-cyan-500 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <h3 className="text-sm font-black text-gray-900 mb-1">{s.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-gray-900 mb-6">Preguntas frecuentes sobre automatización de bodegas en Chile</h2>
          <div className="space-y-3">
            {[
              { q: '¿STOKA opera en Chile para proyectos de automatización de bodegas?', a: 'Sí. STOKA Group tiene representación para proyectos de automatización de bodegas y almacenes en Chile. Ejecutamos el proyecto llave en mano: ingeniería, instalación, puesta en marcha y soporte técnico post-venta en Chile.' },
              { q: '¿Cuánto cuesta automatizar una bodega en Chile?', a: 'El costo varía según el tamaño, throughput y tecnología. Un proyecto de escala media (2 pasillos de transelevadores, 1.000–3.000 posiciones, WCS integrado) puede estar entre USD 800.000 y USD 1.800.000. STOKA realiza el diagnóstico técnico y la estimación sin costo.' },
              { q: '¿Qué sectores en Chile automatizan sus bodegas con mayor frecuencia?', a: 'En Chile, los sectores con mayor adopción de automatización de bodegas son: retail y e-commerce, minería (almacenes MRO en el norte), alimentos y bebidas (cadena de frío), farmacéutica y distribución logística 3PL en el Gran Santiago y Valparaíso.' },
              { q: '¿El soporte técnico para bodegas automatizadas en Chile es local?', a: 'Sí. STOKA provee soporte técnico local en Chile con repuestos disponibles para resolver la mayoría de las intervenciones en menos de 24 horas. No depende de envíos desde Europa, lo que es crítico para operaciones en el norte minero o en instalaciones de exportación.' },
            ].map((f, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                  <ChevronDown size={16} className="text-cyan-500 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
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

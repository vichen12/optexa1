import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, MapPin } from 'lucide-react';
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
      "acceptedAnswer": { "@type": "Answer", "text": "El costo de un proyecto de automatización de bodega en Chile varía según el tamaño, throughput y tecnología. Un proyecto de escala media (2 pasillos de transelevadores, 1.000-3.000 posiciones, WCS integrado) puede estar entre USD 800.000 y USD 1.800.000. STOKA realiza el diagnóstico técnico y la estimación sin costo." }
    },
    {
      "@type": "Question",
      "name": "¿Qué sectores en Chile automatizan sus bodegas con mayor frecuencia?",
      "acceptedAnswer": { "@type": "Answer", "text": "En Chile, los sectores con mayor adopción de automatización de bodegas son: retail y e-commerce (para centros de distribución de alto throughput), minería (almacenes MRO en el norte), alimentos y bebidas (cadena de frío), farmacéutica y distribución logística 3PL en el Gran Santiago y Valparaíso." }
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatización de Bodegas y Almacenes en Chile — Sistemas ASRS DELIE",
  "description": "Automatización de bodegas y almacenes en Chile con sistemas ASRS DELIE: transelevadores, robots shuttle, WMS/WCS. Proyecto llave en mano.",
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
    desc: 'Bodegas frigoríficas para exportación de frutas y proteínas. FIFO automático y ahorro energético en cámaras hasta -25°C.',
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
    desc: 'Intralogística sincronizada con MES/ERP para plantas de manufactura en la Región Metropolitana y Maule.',
    url: '/industrias/manufactura',
    img: '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20paletas%20personalizada/customized-pallet-stacker-crane5dc5d.webp',
  },
];

const SYSTEMS = [
  { name: 'Transelevador Unit-Load', desc: 'Para paletas en bodegas de gran altura (hasta 40 m).', url: '/catalogo/asrs/unit-load' },
  { name: 'Transelevador MiniLoad', desc: 'Para cajas y totes con picking goods-to-person de alta velocidad.', url: '/catalogo/asrs/miniload' },
  { name: 'Robot Lanzadera Shuttle', desc: 'Alta densidad para SKUs ligeros y throughput paralelo.', url: '/catalogo/asrs/shuttle' },
  { name: 'WMS/WCS Software', desc: 'Sistema de gestión y control integrado con ERP existente.', url: '/catalogo/software/wms' },
];

export const ChilePage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Helmet>
        <title>Automatización de Bodegas en Chile | ASRS DELIE | STOKA</title>
        <meta name="description" content="Automatización de bodegas en Chile con ASRS DELIE: transelevadores, robots shuttle y WMS/WCS. STOKA ejecuta el proyecto llave en mano." />
        <meta property="og:title" content="Automatización de Bodegas en Chile | ASRS DELIE | STOKA" />
        <meta property="og:description" content="Sistemas ASRS para automatización de bodegas en Chile: transelevadores, shuttle y WMS. STOKA Group — proyecto llave en mano." />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20un%20solo%20m%C3%A1stil/single-mast-pallet-stacker-crane92251.jpg"
            alt="Automatización de bodegas en Chile — STOKA Group"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-b from-zinc-950/60 via-zinc-950/85 to-zinc-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={14} className="text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Chile · Región Metropolitana · Norte Minero</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white mb-5"
          >
            Automatización de bodegas<br />
            <span className="text-cyan-400">en Chile</span>
          </motion.h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            STOKA Group ejecuta proyectos llave en mano de automatización de bodegas y almacenes en Chile con sistemas ASRS DELIE: transelevadores, robots shuttle y software WMS/WCS. Ingeniería, instalación y soporte técnico local.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors">
              <Phone size={16} /> Consultar proyecto en Chile
            </Link>
            <Link to="/catalogo" className="inline-flex items-center gap-2 border border-slate-600 hover:border-cyan-400/50 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-colors">
              Ver catálogo completo <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="max-w-4xl mx-auto px-6 pt-14 pb-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { v: '+35%', l: 'Alza costo laboral logístico en Chile (3 años)' },
            { v: 'USD 1.8M', l: 'Inversión típica bodega automatizada completa' },
            { v: '<24h', l: 'Tiempo de respuesta soporte técnico local' },
            { v: '100%', l: 'Llave en mano: ingeniería, instalación, puesta en marcha' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-5"
            >
              <p className="text-3xl font-black text-cyan-400 mb-1">{s.v}</p>
              <p className="text-xs text-slate-400 leading-snug">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photo strip */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-0">
        <div className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
          {[
            '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20un%20solo%20m%C3%A1stil/single-mast-pallet-stacker-crane92251.jpg',
            '/productos-delie/asrs/Transelevador%20Gr%C3%BAa%20+%20Estanter%C3%ADa%20Robot%20Lanzadera/pallet-stacker-crane-shuttle-robot-racking89e90.webp',
            '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20paletas%20de%20doble-m%C3%A1stil/double-mast-pallet-stacker-craned111c.webp',
          ].map((src, i) => (
            <div key={i} className="relative h-44 overflow-hidden rounded-xl">
              <img src={src} alt="Sistema ASRS DELIE en bodega Chile" className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Why STOKA in Chile */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-black text-white mb-6">Proyecto llave en mano en Chile</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            'Ingeniería personalizada para la normativa y espacio disponible en Chile',
            'Soporte técnico y repuestos locales — respuesta menor a 24 horas',
            'Integración con ERP existente (SAP, Oracle, Microsoft Dynamics)',
            'Documentación para habilitaciones según normativa chilena',
            'Financiamiento en USD disponible para proyectos en Chile',
            'Referencias verificables en Chile desde la primera reunión técnica',
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3">
              <CheckCircle size={16} className="text-cyan-400 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-white mb-8">Sectores con mayor adopción en Chile</h2>
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
                  className="group flex flex-col h-full bg-zinc-950 border border-slate-700 hover:border-cyan-400/40 rounded-2xl overflow-hidden transition-colors"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-sm font-black text-white mb-2">{s.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">{s.desc}</p>
                    <div className="flex items-center gap-1 mt-4 text-cyan-400 text-xs font-medium group-hover:gap-2 transition-all">
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
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-white mb-8">Sistemas disponibles para bodegas en Chile</h2>
        <div className="grid sm:grid-cols-2 gap-5">
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
                className="group flex items-start gap-4 bg-slate-900 border border-slate-700 hover:border-cyan-400/40 rounded-2xl p-5 transition-colors"
              >
                <ArrowRight size={16} className="text-cyan-400 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                <div>
                  <h3 className="text-sm font-black text-white mb-1">{s.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-black text-white mb-6">Preguntas frecuentes sobre automatización de bodegas en Chile</h2>
        <div className="space-y-4">
          {[
            { q: '¿STOKA opera en Chile para proyectos de automatización de bodegas?', a: 'Sí. STOKA Group tiene representación para proyectos de automatización de bodegas y almacenes en Chile. Ejecutamos el proyecto llave en mano: ingeniería, instalación, puesta en marcha y soporte técnico post-venta en Chile.' },
            { q: '¿Cuánto cuesta automatizar una bodega en Chile?', a: 'El costo de un proyecto de automatización de bodega en Chile varía según el tamaño, throughput y tecnología. Un proyecto de escala media (2 pasillos de transelevadores, 1.000-3.000 posiciones, WCS integrado) puede estar entre USD 800.000 y USD 1.800.000. STOKA realiza el diagnóstico técnico y la estimación sin costo.' },
            { q: '¿Qué sectores en Chile automatizan sus bodegas con mayor frecuencia?', a: 'En Chile, los sectores con mayor adopción de automatización de bodegas son: retail y e-commerce (para centros de distribución de alto throughput), minería (almacenes MRO en el norte), alimentos y bebidas (cadena de frío), farmacéutica y distribución logística 3PL en el Gran Santiago y Valparaíso.' },
            { q: '¿El soporte técnico para bodegas automatizadas en Chile es local?', a: 'Sí. STOKA provee soporte técnico local en Chile con repuestos disponibles para resolver la mayoría de las intervenciones en menos de 24 horas. No depende de envíos desde Europa, lo que es crítico para operaciones en el norte minero o en instalaciones de exportación.' },
          ].map((f, i) => (
            <details key={i} className="group bg-slate-900 border border-slate-700 rounded-xl">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-semibold text-white pr-4">{f.q}</span>
                <CheckCircle size={16} className="text-cyan-400 shrink-0" />
              </summary>
              <p className="px-5 pb-5 text-slate-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

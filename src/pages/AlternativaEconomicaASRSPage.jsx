import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, Globe, TrendingDown, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';

const COMPARISON = [
  { label: 'Fabricación propia (costo base bajo)',     delie: true,       europeo: false     },
  { label: 'Soporte técnico local en Argentina',       delie: true,       europeo: false     },
  { label: 'WMS/WCS propio integrado sin licencia',    delie: true,       europeo: 'parcial' },
  { label: 'Tiempo de respuesta ≤ 24 h en AR',         delie: true,       europeo: false     },
  { label: 'Experiencia en regulaciones y clima AR',   delie: true,       europeo: false     },
  { label: 'Canal directo sin intermediarios locales', delie: true,       europeo: false     },
];

const PRODUCTS = [
  {
    name: 'ASRS Unit-Load',
    tag: 'Pallets hasta 40 m',
    specs: ['Cargas de 500–3.500 kg', 'Velocidad 3 m/s', 'Hasta 2.000 mov/h'],
    img: '/productos-delie/asrs/Estanterías para grúa apiladora de paletas/pallet-stacker-crane-racking598c7.webp',
    href: '/catalogo/asrs/unit-load',
  },
  {
    name: 'Pallet Shuttle 4 vías',
    tag: 'Alta densidad',
    specs: ['Sin pasillos adicionales', '+60% densidad vs. racks', 'FIFO/LIFO flexible'],
    img: '/productos-delie/asrs/Estanterías robóticas con lanzadera para palés/pallet-shuttle-robot-racking13c59.webp',
    href: '/catalogo/asrs/shuttle',
  },
  {
    name: 'ASRS MiniLoad',
    tag: 'Cajas y totes',
    specs: ['Cargas hasta 50 kg', '12.000 pedidos/día', 'Altura hasta 20 m'],
    img: '/productos-delie/asrs/Estanterías Miniload/miniload-rackinga0ea0.webp',
    href: '/catalogo/asrs/miniload',
  },
  {
    name: 'Transelevador + Shuttle',
    tag: 'Sistema combinado',
    specs: ['Unit-Load + Shuttle integrado', 'WCS unificado', 'Máxima densidad + throughput'],
    img: '/productos-delie/asrs/Transelevador Grúa + Estantería Robot Lanzadera/pallet-stacker-crane-shuttle-robot-racking89e90.webp',
    href: '/catalogo/asrs',
  },
];

const FAQS = [
  {
    q: '¿Cuánto más económico es DELIE vs un sistema ASRS europeo?',
    a: 'En proyectos comparables, los sistemas DELIE tienen un costo 30–50% menor. La diferencia surge del modelo de fabricación (Asia vs. Europa), sin sacrificar calidad ni tecnología — DELIE tiene certificaciones ISO, CMMI 5 en software y más de 1.000 instalaciones globales activas.',
  },
  {
    q: '¿La diferencia de precio significa menor calidad?',
    a: 'No. DELIE es fabricante propio, no revendedor. Diseña y produce sus propios transelevadores, robots lanzadera, transportadores y WMS/WCS. La ventaja de precio viene del costo de fabricación en Asia, no de menor calidad de materiales ni ingeniería.',
  },
  {
    q: '¿Qué pasa si necesito soporte técnico urgente?',
    a: 'STOKA tiene técnicos en Argentina. El tiempo de respuesta es de horas, no días. No dependemos de tiempos de vuelo de ingenieros europeos ni de husos horarios. Para fallas críticas, el objetivo es solución en el mismo día.',
  },
  {
    q: '¿Los sistemas DELIE califican para los beneficios fiscales RIMI?',
    a: 'Sí. Los sistemas ASRS importados como bienes de capital pueden acceder al RIMI (Ley 27.802), amortización acelerada y, en proyectos que califiquen, al RIGI. STOKA acompaña todo el proceso de gestión fiscal y aduanera sin costo adicional.',
  },
  {
    q: '¿Cuánto tarda la instalación de un sistema ASRS en Argentina?',
    a: 'Dependiendo de la complejidad, entre 3 y 9 meses desde la firma del contrato. Los tiempos incluyen diseño de layout, fabricación, transporte, instalación mecánica e integración de software. STOKA gestiona todo localmente.',
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-900 font-semibold text-sm">{q}</span>
        <ChevronDown size={16} className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

export const AlternativaEconomicaASRSPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const canonical = 'https://www.stokagroup.com/alternativa-economica-asrs';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.stokagroup.com/' },
      { '@type': 'ListItem', position: 2, name: 'Alternativa ASRS económica Argentina', item: canonical },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sistemas ASRS económicos en Argentina — DELIE por STOKA',
    description: 'Sistemas de almacenamiento automatizado ASRS de clase mundial con precios 30–50% más accesibles. Tecnología DELIE con soporte local 100% en Argentina.',
    provider: { '@type': 'Organization', name: 'STOKA Group', url: 'https://www.stokagroup.com' },
    areaServed: [
      { '@type': 'Country', name: 'Argentina' },
      { '@type': 'Country', name: 'Chile' },
    ],
    serviceType: 'Sistemas ASRS — Almacenamiento Automatizado',
  };

  return (
    <div className="min-h-screen text-gray-900">
      <Helmet>
        <title>Alternativa ASRS Económica Argentina | DELIE | STOKA</title>
        <meta name="description" content="Tecnología ASRS DELIE al 30–50% del precio de Mecalux o AutoStore. Transelevadores, shuttle y WMS para Argentina. Soporte local. Evaluación gratuita." />
        <meta name="keywords" content="alternativa economica ASRS argentina, alternativa Mecalux Argentina, alternativa AutoStore Argentina, ASRS precio argentina, sistema almacenamiento automatizado accesible, DELIE argentina, ASRS barato argentina, alternativa SSI Schäfer argentina, alternativa Kardex argentina" />
        <meta property="og:title" content="ASRS de clase mundial sin precios europeos | DELIE Argentina | STOKA" />
        <meta property="og:description" content="Tecnología ASRS DELIE: más de 1.000 instalaciones globales, 30–50% más accesible que los sistemas europeos de referencia. Soporte técnico 100% local en Argentina." />
        <meta property="og:url" content={canonical} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-zinc-950 pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-slate-400">ASRS Económico Argentina</span>
            </nav>
            <span className="inline-block text-[10px] font-mono text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-[0.3em] mb-6">
              DELIE · Alternativa económica ASRS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none text-white mb-6">
              ASRS de clase<br />mundial sin<br /><span className="text-cyan-400">costos europeos</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              Los sistemas DELIE ofrecen la misma tecnología que Mecalux, AutoStore o SSI Schäfer — con precios 30–50% más accesibles y soporte técnico 100% local en Argentina.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { n: '-40%',   l: 'vs sistemas europeos'    },
                { n: '+1.000', l: 'instalaciones globales'  },
                { n: '+30',    l: 'países con presencia'    },
                { n: '100%',   l: 'soporte local AR'        },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-center">
                  <p className="text-xl font-black text-cyan-400 leading-none mb-1">{s.n}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide leading-tight">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contacto"
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm">
                Solicitar presupuesto <ArrowRight size={14} />
              </Link>
              <Link to="/catalogo"
                className="border border-slate-600 hover:border-cyan-400/40 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-colors text-sm">
                Ver catálogo DELIE
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-linear-to-l from-zinc-950 via-transparent to-transparent z-10 pointer-events-none rounded-2xl" />
            <img
              src="/productos-delie/asrs/Transelevador Grúa + Estantería Robot Lanzadera/pallet-stacker-crane-shuttle-robot-racking89e90.webp"
              alt="Sistema ASRS DELIE transelevador y shuttle — implementación Argentina"
              className="w-full h-[500px] object-cover rounded-2xl"
              loading="eager"
            />
            <div className="absolute bottom-5 left-5 z-20 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
              <p className="text-white text-xs font-bold">Transelevador + Pallet Shuttle DELIE</p>
              <p className="text-slate-400 text-[10px]">Sistema combinado Unit-Load / alta densidad</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── POR QUÉ CUESTA MÁS ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">El factor precio</p>
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
              ¿Por qué los ASRS europeos cuestan el doble?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Globe,
                title: 'Estructura de costos europea',
                desc: 'Los fabricantes europeos operan con costos laborales, overhead comercial y márgenes de distribución que duplican el costo base de fabricación. Un sistema de idénticas prestaciones puede costar el doble por la geografía del fabricante.',
              },
              {
                icon: Clock,
                title: 'Soporte a distancia = horas caras',
                desc: 'Un ingeniero volando desde Europa para dar soporte implica costos de traslado, alojamiento y jornada que se trasladan al contrato de mantenimiento. Este modelo encarece el TCO a 10 años de cualquier ASRS sin presencia local.',
              },
              {
                icon: TrendingDown,
                title: 'Capas de intermediación',
                desc: 'Muchos sistemas europeos o japoneses llegan a Argentina a través de distribuidores regionales con margen propio. STOKA trabaja directamente con DELIE, sin intermediarios, y traslada ese ahorro al precio final del proyecto.',
              },
            ].map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mb-4">
                  <c.icon size={18} className="text-cyan-500" />
                </div>
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">Comparativa directa</p>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
              DELIE vs ASRS europeos y japoneses
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Misma tecnología de almacenamiento automatizado. Diferente modelo de fabricación, distribución y soporte posventa.
            </p>
          </div>

          {/* Header */}
          <div className="grid grid-cols-3 gap-3 mb-2">
            <div />
            <div className="bg-cyan-400 rounded-xl px-4 py-3 flex items-center justify-center">
              <img src="/image.png" alt="DELIE" className="h-5 object-contain" />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Sistema ASRS<br />europeo / japonés</p>
            </div>
          </div>

          {COMPARISON.map((row, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="grid grid-cols-3 gap-3 mb-2">
              <div className={`flex items-center px-4 py-3 rounded-xl ${i % 2 === 0 ? 'bg-white/5' : 'bg-white/[0.03]'}`}>
                <span className="text-slate-300 text-xs font-medium">{row.label}</span>
              </div>
              <div className={`flex items-center justify-center rounded-xl px-4 py-3 border ${i % 2 === 0 ? 'bg-cyan-400/10 border-cyan-400/20' : 'bg-cyan-400/5 border-cyan-400/10'}`}>
                <CheckCircle2 size={20} className="text-cyan-400" />
              </div>
              <div className={`flex items-center justify-center rounded-xl px-4 py-3 border ${i % 2 === 0 ? 'bg-white/5 border-white/10' : 'bg-white/[0.03] border-white/5'}`}>
                {row.europeo === true
                  ? <CheckCircle2 size={20} className="text-green-400" />
                  : row.europeo === 'parcial'
                    ? <span className="text-yellow-400 text-[10px] font-bold">PARCIAL</span>
                    : <XCircle size={20} className="text-red-400/70" />
                }
              </div>
            </motion.div>
          ))}

          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-slate-500 text-xs leading-relaxed">
              Los sistemas europeos y japoneses de referencia incluyen fabricantes como Mecalux, AutoStore, SSI Schäfer, Kardex y Swisslog. La comparativa es orientativa — los valores exactos dependen del proyecto y proveedor específico.
            </p>
          </div>
        </div>
      </section>

      {/* ── GALERÍA DE PRODUCTOS ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Disponibles en Argentina</p>
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
              Sistemas ASRS DELIE con instalación local
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={p.href}
                  className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-md transition-all">
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <img
                      src={p.img}
                      alt={`${p.name} — sistema ASRS DELIE Argentina`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-cyan-500 px-2 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{p.name}</h3>
                    <div className="flex flex-col gap-1">
                      {p.specs.map((s, j) => (
                        <span key={j} className="text-[10px] text-gray-500 flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/catalogo"
              className="inline-flex items-center gap-2 text-cyan-500 font-bold text-sm hover:text-cyan-400 transition-colors">
              Ver catálogo completo DELIE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TCO CALLOUT ── */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">Costo total de propiedad</p>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-tight text-white mb-5">
                El TCO más bajo<br />del mercado ASRS<br /><span className="text-cyan-400">en Argentina</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                El precio de compra es solo una parte del TCO. El soporte técnico local, la gestión de importación sin intermediarios y los beneficios fiscales disponibles hacen que un sistema DELIE tenga el mejor retorno de inversión del mercado argentino.
              </p>
              <Link to="/beneficios-fiscales"
                className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold hover:text-cyan-300 transition-colors">
                Ver beneficios fiscales disponibles <ArrowRight size={14} />
              </Link>
            </motion.div>

            <div className="flex flex-col gap-4">
              {[
                { num: '30–50%',    desc: 'Ahorro vs. sistemas europeos de prestaciones equivalentes'         },
                { num: 'RIMI 2026', desc: 'Califica como bien de capital importado — amortización acelerada' },
                { num: 'Mismo día', desc: 'Tiempo de respuesta de soporte técnico desde Argentina'            },
              ].map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-5 hover:border-cyan-400/30 transition-colors">
                  <div className="text-2xl font-black text-cyan-400 leading-none whitespace-nowrap">{s.num}</div>
                  <div className="w-px h-10 bg-white/10 flex-shrink-0" />
                  <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3 text-center">Preguntas frecuentes</p>
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter text-center mb-10">
            ASRS económico en Argentina
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => <FAQItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

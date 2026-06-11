import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowRight, Phone } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';

const canonical = 'https://www.stokagroup.com/catalogo/asrs/autostore-alternativa';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
    { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://www.stokagroup.com/catalogo" },
    { "@type": "ListItem", "position": 3, "name": "ASRS", "item": "https://www.stokagroup.com/catalogo/asrs" },
    { "@type": "ListItem", "position": 4, "name": "Alternativa AutoStore", "item": canonical },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿DELIE es una alternativa a AutoStore en Argentina?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. DELIE fabrica sistemas ASRS cube storage, shuttle y transelevadores que compiten directamente con AutoStore. La principal diferencia es el precio: los sistemas DELIE son entre un 30% y un 50% más económicos que AutoStore para proyectos equivalentes, y tienen soporte técnico local en Argentina a través de STOKA." }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia técnica hay entre AutoStore y los sistemas DELIE?",
      "acceptedAnswer": { "@type": "Answer", "text": "AutoStore usa robots de rejilla (grid robots) que operan sobre una grilla modular. DELIE ofrece sistemas shuttle y de transelevadores que en muchas configuraciones logran densidades comparables o superiores, especialmente en depósitos con altura disponible mayor a 8 metros. El sistema DELIE también permite SKUs de mayor tamaño y peso." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un sistema alternativo a AutoStore en Argentina?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un sistema DELIE equivalente a una instalación AutoStore mediana (1.000-3.000 posiciones) en Argentina puede costar entre USD 600.000 y USD 1.500.000 completo (equipos + estanterías + WCS + integración). AutoStore suele costar entre un 30% y 50% más para configuraciones equivalentes, más el costo del soporte técnico importado." }
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Alternativa a AutoStore en Argentina — Sistemas ASRS DELIE",
  "description": "Sistemas ASRS cube storage y shuttle como alternativa a AutoStore en Argentina y Chile. 30-50% más económico, soporte técnico local.",
  "provider": { "@id": "https://www.stokagroup.com/#organization" },
  "areaServed": [
    { "@type": "Country", "name": "Argentina" },
    { "@type": "Country", "name": "Chile" },
  ],
};

const COMPARISON = [
  { feature: 'Soporte técnico local en Argentina', delie: true, autostore: false },
  { feature: 'Repuestos en stock en Argentina', delie: true, autostore: false },
  { feature: 'Proyecto llave en mano local', delie: true, autostore: false },
  { feature: 'Precio competitivo (30-50% menos)', delie: true, autostore: false },
  { feature: 'SKUs hasta 30 kg por unidad', delie: true, autostore: true },
  { feature: 'SKUs hasta 100 kg por unidad', delie: true, autostore: false },
  { feature: 'Almacenamiento hasta 40 m de altura', delie: true, autostore: false },
  { feature: 'Módulo GMP farmacéutico nativo', delie: true, autostore: 'parcial' },
  { feature: 'Cámara de frío hasta -30°C', delie: true, autostore: false },
  { feature: 'Integración WMS/ERP certificada', delie: true, autostore: true },
  { feature: 'Alta densidad en espacio limitado (<5 m)', delie: 'parcial', autostore: true },
];

const PRODUCTS = [
  {
    name: 'Robot Lanzadera Shuttle',
    desc: 'Alta densidad para cajas y contenedores ligeros con throughput paralelo por nivel.',
    img: '/productos-delie/asrs/pallet-shuttle-asrs-robot2d69d.webp',
    url: '/catalogo/asrs/shuttle',
  },
  {
    name: 'Transelevador MiniLoad',
    desc: 'Para SKUs medios y cajas, con velocidades de hasta 400 movimientos/hora por pasillo.',
    img: '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20minicarga%20profunda-de%20profundidad/single-deep-miniload-stacker-crane41fe7.webp',
    url: '/catalogo/asrs/miniload',
  },
  {
    name: 'Transelevador Unit-Load',
    desc: 'Para paletas y cargas pesadas en almacenes de gran altura. Throughput de 200 movimientos/hora.',
    img: '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20un%20solo%20m%C3%A1stil/single-mast-pallet-stacker-crane92251.jpg',
    url: '/catalogo/asrs/unit-load',
  },
];

const CheckIcon = ({ value }) => {
  if (value === true) return <CheckCircle2 size={18} className="text-cyan-400 mx-auto" />;
  if (value === false) return <XCircle size={18} className="text-slate-600 mx-auto" />;
  return <span className="text-yellow-400 text-xs font-mono mx-auto block text-center">parcial</span>;
};

export const AutoStoreAlternativaPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Helmet>
        <title>Alternativa a AutoStore Argentina | ASRS DELIE | STOKA</title>
        <meta name="description" content="Alternativa a AutoStore en Argentina: ASRS DELIE 30-50% más económico, soporte local y proyecto llave en mano. Evaluación técnica gratuita." />
        <meta property="og:title" content="Alternativa a AutoStore en Argentina | ASRS DELIE | STOKA" />
        <meta property="og:description" content="Sistemas ASRS DELIE como alternativa a AutoStore: 30-50% más económico, soporte local en Argentina. Proyecto llave en mano." />
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
            src="/productos-delie/asrs/pallet-shuttle-asrs-robot2d69d.webp"
            alt="Alternativa a AutoStore Argentina — Sistema ASRS DELIE"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-b from-zinc-950/60 via-zinc-950/85 to-zinc-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/catalogo" className="hover:text-cyan-400 transition-colors">Catálogo</Link>
            <span>/</span>
            <Link to="/catalogo/asrs" className="hover:text-cyan-400 transition-colors">ASRS</Link>
            <span>/</span>
            <span className="text-slate-400">Alternativa AutoStore</span>
          </nav>
          <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Alternativa económica · Soporte local
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white mb-5"
          >
            Alternativa a AutoStore<br />
            <span className="text-cyan-400">con soporte local en Argentina</span>
          </motion.h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            Los sistemas ASRS DELIE ofrecen densidad y throughput comparables a AutoStore a un costo 30-50% menor, con ingeniería, instalación y soporte técnico 100% local a través de STOKA.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors">
              <Phone size={16} /> Consultar precio y disponibilidad
            </Link>
            <Link to="/catalogo/asrs" className="inline-flex items-center gap-2 border border-slate-600 hover:border-cyan-400/50 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-colors">
              Ver catálogo ASRS completo <ArrowRight size={15} />
            </Link>
          </div>

          {/* Stats chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
            {[
              { v: '30-50%', l: 'Más económico' },
              { v: 'Local', l: 'Soporte técnico' },
              { v: '100%', l: 'Proyecto llave en mano' },
              { v: '<24h', l: 'Respuesta de repuestos' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 text-center">
                <p className="text-xl font-black text-cyan-400">{s.v}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-black text-white mb-2 text-center">DELIE vs AutoStore</h2>
          <p className="text-slate-400 text-center mb-8">Comparativa técnica para proyectos en Argentina y Chile</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 border-b border-slate-700">
                  <th className="text-left px-5 py-4 text-slate-400 font-semibold">Característica</th>
                  <th className="text-center px-5 py-4 text-cyan-400 font-black">DELIE / STOKA</th>
                  <th className="text-center px-5 py-4 text-slate-500 font-semibold">AutoStore</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-900' : 'bg-zinc-950'}`}>
                    <td className="px-5 py-3.5 text-slate-300">{row.feature}</td>
                    <td className="px-5 py-3.5"><CheckIcon value={row.delie} /></td>
                    <td className="px-5 py-3.5"><CheckIcon value={row.autostore} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Why DELIE over AutoStore */}
      <section className="relative overflow-hidden bg-slate-900 py-16">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/productos-delie/asrs/Transelevador%20Gr%C3%BAa%20+%20Estanter%C3%ADa%20Robot%20Lanzadera/pallet-stacker-crane-shuttle-robot-racking89e90.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-white mb-10">Por qué empresas argentinas eligen DELIE sobre AutoStore</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: '24h',
                label: 'Tiempo de respuesta local',
                title: 'Soporte técnico en Argentina',
                desc: 'AutoStore tiene soporte centralizado en Europa — días o semanas de espera. STOKA resuelve con técnicos y repuestos locales en menos de 24 horas.',
              },
              {
                stat: '40%',
                label: 'Ahorro promedio vs AutoStore',
                title: 'Precio 30-50% menor',
                desc: 'En proyectos de USD 1M, DELIE significa entre USD 300.000 y USD 500.000 de ahorro en la inversión inicial con throughput y capacidad equivalente.',
              },
              {
                stat: '1.500kg',
                label: 'Carga máxima por posición',
                title: 'Sin límite de tamaño de SKU',
                desc: 'AutoStore soporta hasta 30 kg y tamaños fijos de contenedor. DELIE opera con paletas de hasta 1.500 kg y cualquier tipo de unidad de carga.',
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-zinc-950/80 border border-slate-700 rounded-2xl p-6"
              >
                <p className="text-4xl font-black text-cyan-400 mb-0.5">{c.stat}</p>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">{c.label}</p>
                <h3 className="text-sm font-black text-white mb-2">{c.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-white mb-8">Sistemas DELIE que reemplazan a AutoStore</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                to={p.url}
                className="group flex flex-col bg-slate-900 border border-slate-700 hover:border-cyan-400/40 rounded-2xl overflow-hidden transition-colors h-full"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-black text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Ver sistema <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-black text-white mb-6">Preguntas frecuentes sobre alternativas a AutoStore en Argentina</h2>
        <div className="space-y-4">
          {[
            { q: '¿DELIE es una alternativa a AutoStore en Argentina?', a: 'Sí. DELIE fabrica sistemas ASRS cube storage, shuttle y transelevadores que compiten directamente con AutoStore. La principal diferencia es el precio: los sistemas DELIE son entre un 30% y un 50% más económicos que AutoStore para proyectos equivalentes, y tienen soporte técnico local en Argentina a través de STOKA.' },
            { q: '¿Qué diferencia técnica hay entre AutoStore y los sistemas DELIE?', a: 'AutoStore usa robots de rejilla (grid robots) que operan sobre una grilla modular. DELIE ofrece sistemas shuttle y de transelevadores que en muchas configuraciones logran densidades comparables o superiores, especialmente en depósitos con altura disponible mayor a 8 metros. El sistema DELIE también permite SKUs de mayor tamaño y peso.' },
            { q: '¿Cuánto cuesta un sistema alternativo a AutoStore en Argentina?', a: 'Un sistema DELIE equivalente a una instalación AutoStore mediana (1.000-3.000 posiciones) en Argentina puede costar entre USD 600.000 y USD 1.500.000 completo (equipos + estanterías + WCS + integración). AutoStore suele costar entre un 30% y 50% más para configuraciones equivalentes, más el costo del soporte técnico importado.' },
            { q: '¿STOKA tiene experiencia instalando sistemas en operaciones similares a las de AutoStore?', a: 'Sí. STOKA ha instalado sistemas DELIE en operaciones de e-commerce, logística 3PL, farmacéutica y manufactura en Argentina con perfiles de throughput similares a los que suelen automatizarse con AutoStore. Podemos mostrar referencias del sector en la primera reunión técnica.' },
          ].map((f, i) => (
            <details key={i} className="group bg-slate-900 border border-slate-700 rounded-xl">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-semibold text-white pr-4">{f.q}</span>
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
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

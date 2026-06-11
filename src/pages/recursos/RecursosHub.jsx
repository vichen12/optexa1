import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, BookOpen, HelpCircle, BarChart2 } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { ARTICULOS } from '../../data/articulosData';

const RECURSOS_EXTRA = [
  {
    icon: BarChart2,
    title: 'Calculadora de ROI',
    desc: 'Ingresá operarios, movimientos e inversión estimada y obtené el ahorro anual, payback y ROI proyectado en segundos.',
    url: '/recursos/roi-automatizacion',
    tag: 'Herramienta',
  },
  {
    icon: BookOpen,
    title: 'Glosario ASRS',
    desc: 'Más de 60 términos técnicos de automatización y logística con definiciones en español.',
    url: '/recursos/glosario',
    tag: 'Glosario',
  },
  {
    icon: HelpCircle,
    title: 'Comparador de sistemas',
    desc: 'Respondé 5 preguntas sobre tu operación y recibí la recomendación de tecnología DELIE más adecuada.',
    url: '/recursos/comparador-sistemas',
    tag: 'Herramienta',
  },
];

export const RecursosHub = () => {
  const canonical = 'https://www.stokagroup.com/recursos';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Recursos", "item": canonical },
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Helmet>
        <title>Recursos: Guías ASRS y Automatización de Almacenes | STOKA</title>
        <meta name="description" content="Guías técnicas y herramientas sobre automatización de almacenes, ASRS, transelevadores, AGV y WMS. Recursos para logística en Argentina y Chile." />
        <meta property="og:title" content="Recursos de Automatización de Almacenes | STOKA" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-white pt-36 pb-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-cyan-500 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-gray-600">Recursos</span>
          </nav>
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-5">
            Artículos · Herramientas · Glosario · Argentina
          </p>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
            Centro de<br />
            <span className="text-cyan-500">recursos técnicos</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Artículos técnicos, comparativas y herramientas interactivas para tomar mejores decisiones sobre automatización logística en Argentina y Chile.
          </p>
        </div>
      </section>

      <div className="bg-white">
        {/* Tools & extra resources */}
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-10">
          <h2 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-6">Herramientas y referencias</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {RECURSOS_EXTRA.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={r.url}
                  className="group flex flex-col h-full bg-gray-50 border border-gray-200 hover:border-cyan-300 rounded-2xl p-6 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <r.icon size={22} className="text-cyan-500" />
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border border-gray-200 rounded-full px-2 py-0.5">{r.tag}</span>
                  </div>
                  <h3 className="text-base font-black text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{r.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-cyan-600 text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Ver más</span><ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Articles grid */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <h2 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-6">Artículos técnicos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ARTICULOS.map((art, i) => (
              <motion.div
                key={art.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.06 }}
              >
                <Link
                  to={`/recursos/${art.slug}`}
                  className="group flex flex-col h-full bg-white border border-gray-200 hover:border-cyan-300 rounded-2xl overflow-hidden transition-colors shadow-sm"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={art.heroImg}
                      alt={art.h1}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-mono text-cyan-300 uppercase tracking-widest">{art.categoria}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-black text-gray-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">{art.h1}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2">{art.metaDesc}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="flex items-center gap-1 text-xs text-gray-400"><Clock size={11} />{art.readTime}</span>
                      <span className="flex items-center gap-1 text-cyan-600 text-xs font-medium group-hover:gap-2 transition-all">Leer <ArrowRight size={12} /></span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

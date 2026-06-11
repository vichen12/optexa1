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
    <div className="min-h-screen bg-zinc-950 text-white">
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
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-950 to-zinc-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">STOKA · Centro de recursos</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Guías técnicas sobre<br />
            <span className="text-cyan-400">automatización de almacenes</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Artículos técnicos, comparativas y herramientas interactivas para ayudarte a tomar las mejores decisiones sobre automatización logística en Argentina y Chile.
          </p>
        </div>
      </section>

      {/* Tools & extra resources */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-lg font-black text-white uppercase tracking-widest mb-6">Herramientas y referencias</h2>
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
                className="group flex flex-col h-full bg-slate-900 border border-slate-700 hover:border-cyan-400/40 rounded-2xl p-6 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <r.icon size={22} className="text-cyan-400" />
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest border border-slate-700 rounded-full px-2 py-0.5">{r.tag}</span>
                </div>
                <h3 className="text-base font-black text-white mb-2">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{r.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Ver más</span><ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Articles grid */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-lg font-black text-white uppercase tracking-widest mb-6">Artículos técnicos</h2>
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
                className="group flex flex-col h-full bg-slate-900 border border-slate-700 hover:border-cyan-400/40 rounded-2xl overflow-hidden transition-colors"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={art.heroImg}
                    alt={art.h1}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{art.categoria}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-black text-white mb-2 leading-tight group-hover:text-cyan-50 transition-colors">{art.h1}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1 line-clamp-2">{art.metaDesc}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="flex items-center gap-1 text-xs text-slate-500"><Clock size={11} />{art.readTime}</span>
                    <span className="flex items-center gap-1 text-cyan-400 text-xs font-medium group-hover:gap-2 transition-all">Leer <ArrowRight size={12} /></span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

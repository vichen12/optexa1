import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle, Factory, ShoppingCart, Truck, Pill, Snowflake, Mountain } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { PRODUCTOS } from '../../data/productosData';

const INDUSTRY_ICONS = {
  'E-commerce y retail': ShoppingCart,
  'Logística 3PL': Truck,
  'Manufactura': Factory,
  'Alimentos y bebidas': Factory,
  'Farmacéutica': Pill,
  'Minería y Oil & Gas': Mountain,
  'Cadena de frío': Snowflake,
};

const INDUSTRY_SLUGS = {
  'E-commerce y retail': 'e-commerce-retail',
  'Logística 3PL': 'logistica-3pl',
  'Manufactura': 'manufactura',
  'Alimentos y bebidas': 'alimentos-bebidas',
  'Farmacéutica': 'farmaceutica',
  'Minería y Oil & Gas': 'mineria-oil-gas',
  'Cadena de frío': 'cadena-frio',
};

export const ProductoPage = () => {
  const { categoria, producto } = useParams();
  const navigate = useNavigate();
  const key = `${categoria}/${producto}`;
  const data = PRODUCTOS[key];

  useEffect(() => { window.scrollTo(0, 0); }, [key]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <p className="text-cyan-400 font-mono text-sm mb-4">404</p>
          <h1 className="text-3xl font-black mb-4">Producto no encontrado</h1>
          <button onClick={() => navigate('/catalogo')} className="px-6 py-3 bg-cyan-500 rounded-xl font-bold">
            Ver catálogo
          </button>
        </div>
      </div>
    );
  }

  const baseUrl = 'https://www.stokagroup.com';
  const canonicalUrl = `${baseUrl}/catalogo/${data.categoria}/${data.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": `${baseUrl}/catalogo` },
      { "@type": "ListItem", "position": 3, "name": data.categoriaLabel, "item": `${baseUrl}${data.categoriaUrl}` },
      { "@type": "ListItem", "position": 4, "name": data.nombre, "item": canonicalUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.nombre,
    "description": data.metaDesc,
    "provider": { "@id": `${baseUrl}/#organization` },
    "brand": { "@type": "Brand", "name": "Daifuku" },
    "areaServed": [
      { "@type": "Country", "name": "Argentina" },
      { "@type": "Country", "name": "Chile" },
    ],
    "serviceType": "Automatización de almacenes industriales",
    "url": canonicalUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <div className="min-h-screen text-gray-900">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDesc} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDesc} />
        <meta property="og:image" content={data.heroImg} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <img
          src={data.heroImg}
          alt={data.heroAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <ChevronRight size={12} className="text-gray-600" />
            <Link to="/catalogo" className="hover:text-cyan-400 transition-colors">Catálogo</Link>
            <ChevronRight size={12} className="text-gray-600" />
            <Link to={data.categoriaUrl} className="hover:text-cyan-400 transition-colors">{data.categoriaLabel}</Link>
            <ChevronRight size={12} className="text-gray-600" />
            <span className="text-gray-300">{data.nombre}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-3">
              {data.categoriaLabel} · DELIE
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[1.05] mb-4">
              {data.nombre}
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
              {data.tagline}
            </p>
          </motion.div>
        </div>
      </div>

      {/* DESCRIPCIÓN */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Descripción técnica</p>
            <p className="text-gray-700 text-lg leading-relaxed">{data.descripcion}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Representante oficial en Argentina</p>
            <img src="/image.png" alt="DELIE — Fabricante" className="h-8 object-contain mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              STOKA es el representante oficial exclusivo de DELIE en Argentina y Chile. Ingeniería, instalación y soporte técnico 100% local.
            </p>
            <button onClick={() => navigate('/contacto')}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Consultar disponibilidad <ArrowRight size={13} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-slate-900 py-16 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">Funcionamiento</p>
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-10">Cómo funciona</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.comoFunciona.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                  <span className="text-cyan-400 font-black text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-black text-white text-sm uppercase tracking-tight mb-3">{item.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIFICACIONES TÉCNICAS */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Ficha técnica</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Especificaciones técnicas</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                {data.specs.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-bold text-gray-700 w-1/2 border-r border-gray-100">{spec.param}</td>
                    <td className="px-6 py-4 text-gray-600">{spec.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Aplicaciones</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Industrias que lo utilizan</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {data.industrias.map((ind, i) => {
              const Icon = INDUSTRY_ICONS[ind] || Factory;
              const slug = INDUSTRY_SLUGS[ind];
              const card = (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 transition-colors text-center h-full">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-cyan-500" />
                  </div>
                  <p className="text-gray-800 font-bold text-sm">{ind}</p>
                </motion.div>
              );
              return slug ? (
                <Link key={i} to={`/industrias/${slug}`} className="block">{card}</Link>
              ) : (
                <div key={i}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA DAIFUKU */}
      <section className="bg-slate-900 py-16 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">Alternativa en Argentina</p>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Tecnología Daifuku en Argentina</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-5">
            <div className="flex items-start gap-4">
              <CheckCircle size={20} className="text-cyan-400 shrink-0 mt-1" />
              <p className="text-gray-300 text-base leading-relaxed">{data.porQueDelie}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-5">
              ¿Buscabas {data.nombre} Daifuku en Argentina? Los equipos DELIE son técnicamente comparables
              a los sistemas Daifuku, con más de 1.000 instalaciones en 30 países y certificaciones
              internacionales equivalentes. STOKA es el representante exclusivo en Argentina: ingeniería,
              instalación y soporte técnico local sin depender de tiempos de fábrica en el exterior.
              {' '}<Link to="/alternativa-daifuku-argentina" className="text-cyan-400 hover:underline font-medium">
                Ver comparativa DELIE vs. Daifuku →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Preguntas frecuentes</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Lo que pregunta un Director de Operaciones</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.faq.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS RELACIONADOS */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">También te puede interesar</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Productos relacionados</h2>
          <div className="flex flex-wrap gap-3">
            {data.relacionados.map((rel, i) => (
              <Link key={i} to={rel.url}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 text-sm font-bold hover:border-cyan-400 hover:text-cyan-600 transition-all">
                {rel.nombre} <ChevronRight size={14} />
              </Link>
            ))}
            <Link to={data.categoriaUrl}
              className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-50 border border-cyan-200 rounded-xl text-cyan-700 text-sm font-bold hover:bg-cyan-100 transition-all">
              Ver toda la categoría: {data.categoriaLabel} <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4">¿Listo para el siguiente paso?</p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-5">
            Consulta técnica<br />
            <span className="text-cyan-500">sin costo</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Un ingeniero de STOKA analiza tu almacén, bodega o depósito y te responde en menos de 24 horas con orientación técnica inicial y estimación de ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contacto')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Consultar sobre {data.nombre} <ArrowRight size={14} />
            </button>
            <button onClick={() => navigate(data.categoriaUrl)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              Ver categoría completa
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

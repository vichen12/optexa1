import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { getArticulo } from '../../data/articulosData';

export const ArticuloPage = () => {
  const { slug } = useParams();
  const art = getArticulo(slug);

  if (!art) {
    return (
      <div className="min-h-screen text-gray-900 flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <p className="text-5xl font-black text-cyan-500 mb-4">404</p>
          <p className="text-xl text-gray-600 mb-6">Artículo no encontrado</p>
          <Link to="/recursos" className="text-cyan-600 underline">Ver todos los recursos</Link>
        </div>
      </div>
    );
  }

  const canonical = `https://www.stokagroup.com/recursos/${art.slug}`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": art.h1,
    "description": art.metaDesc,
    "datePublished": art.publishDate,
    "dateModified": art.publishDate,
    "author": { "@type": "Organization", "name": "STOKA" },
    "publisher": {
      "@type": "Organization",
      "name": "STOKA",
      "logo": { "@type": "ImageObject", "url": "https://www.stokagroup.com/stoka_deliecn_logo_sin_fondo.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonical },
    "image": `https://www.stokagroup.com${art.heroImg}`,
    "articleSection": art.categoria,
    "wordCount": art.wordCount,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Recursos", "item": "https://www.stokagroup.com/recursos" },
      { "@type": "ListItem", "position": 3, "name": art.h1, "item": canonical },
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": art.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Helmet>
        <title>{art.metaTitle}</title>
        <meta name="description" content={art.metaDesc} />
        <meta property="og:title" content={art.metaTitle} />
        <meta property="og:description" content={art.metaDesc} />
        <meta property="og:image" content={`https://www.stokagroup.com${art.heroImg}`} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-white pt-36 pb-10 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-cyan-500 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/recursos" className="hover:text-cyan-500 transition-colors">Recursos</Link>
            <span>/</span>
            <span className="text-gray-600">{art.categoria}</span>
          </nav>
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-5">
            {art.categoria} · <Clock size={10} className="inline mb-0.5" /> {art.readTime} de lectura
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-gray-900 mb-6"
          >
            {art.h1}
          </motion.h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{art.metaDesc}</p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-14">
          {/* Main content */}
          <div>
            {/* Intro */}
            <p className="text-lg text-gray-700 leading-relaxed mb-10 border-l-2 border-cyan-500 pl-5">
              {art.intro}
            </p>

            {/* Sections */}
            {art.sections.map((sec, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="mb-10"
              >
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-tight">{sec.h2}</h2>
                <p className="text-gray-600 leading-relaxed">{sec.body}</p>
              </motion.section>
            ))}

            {/* Conclusion */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-black text-gray-900 mb-3">{art.conclusionH2}</h2>
              <p className="text-gray-600 leading-relaxed">{art.conclusion}</p>
            </div>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-xl font-black text-gray-900 mb-6">Preguntas frecuentes</h2>
              <div className="space-y-3">
                {art.faq.map((f, i) => (
                  <details key={i} className="group bg-gray-50 border border-gray-200 rounded-xl">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                      <CheckCircle size={16} className="text-cyan-500 shrink-0" />
                    </summary>
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related articles */}
            <section>
              <h2 className="text-lg font-black text-gray-900 mb-4">Artículos relacionados</h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {art.relacionados.map((r, i) => (
                  <Link
                    key={i}
                    to={`/recursos/${r.slug}`}
                    className="group flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-cyan-300 rounded-xl px-4 py-3 transition-colors"
                  >
                    <ArrowRight size={14} className="text-cyan-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors leading-tight">{r.titulo}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA Card */}
            <div className="sticky top-24 bg-cyan-50 border border-cyan-200 rounded-2xl p-6">
              <h3 className="text-base font-black text-gray-900 mb-2 leading-tight">{art.cta.heading}</h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">{art.cta.text}</p>
              <Link
                to={art.cta.btnPrimary.url}
                className="block w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm text-center px-4 py-3 rounded-xl transition-colors mb-3"
              >
                {art.cta.btnPrimary.label}
              </Link>
              <Link
                to={art.cta.btnSecondary.url}
                className="block w-full border border-gray-300 hover:border-cyan-400 text-gray-600 hover:text-gray-900 font-medium text-sm text-center px-4 py-3 rounded-xl transition-colors"
              >
                {art.cta.btnSecondary.label}
              </Link>
            </div>

            {/* Back to resources */}
            <Link
              to="/recursos"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-600 transition-colors"
            >
              <ArrowLeft size={14} />
              Ver todos los recursos
            </Link>
          </aside>
        </div>
        </div>
      </article>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { getArticulo } from '../../data/articulosData';

export const ArticuloPage = () => {
  const { slug } = useParams();
  const art = getArticulo(slug);

  if (!art) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <p className="text-5xl font-black text-cyan-400 mb-4">404</p>
          <p className="text-xl text-slate-300 mb-6">Artículo no encontrado</p>
          <Link to="/recursos" className="text-cyan-400 underline">Ver todos los recursos</Link>
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
    <div className="min-h-screen bg-zinc-950 text-white">
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
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <img src={art.heroImg} alt={art.h1} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/recursos" className="hover:text-cyan-400 transition-colors">Recursos</Link>
            <span>/</span>
            <span className="text-slate-400">{art.categoria}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono px-3 py-1 rounded-full uppercase tracking-widest">{art.categoria}</span>
            <span className="flex items-center gap-1 text-slate-500 text-xs"><Clock size={12} />{art.readTime} de lectura</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white mb-0"
          >
            {art.h1}
          </motion.h1>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Main content */}
          <div>
            {/* Intro */}
            <p className="text-lg text-slate-300 leading-relaxed mb-10 border-l-2 border-cyan-400 pl-5">
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
                <h2 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight">{sec.h2}</h2>
                <p className="text-slate-300 leading-relaxed">{sec.body}</p>
              </motion.section>
            ))}

            {/* Conclusion */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-black text-white mb-3">{art.conclusionH2}</h2>
              <p className="text-slate-300 leading-relaxed">{art.conclusion}</p>
            </div>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-xl font-black text-white mb-6">Preguntas frecuentes</h2>
              <div className="space-y-4">
                {art.faq.map((f, i) => (
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

            {/* Related articles */}
            <section>
              <h2 className="text-lg font-black text-white mb-4">Artículos relacionados</h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {art.relacionados.map((r, i) => (
                  <Link
                    key={i}
                    to={`/recursos/${r.slug}`}
                    className="group flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-cyan-400/50 rounded-xl px-4 py-3 transition-colors"
                  >
                    <ArrowRight size={14} className="text-cyan-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors leading-tight">{r.titulo}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA Card */}
            <div className="sticky top-24 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/20 rounded-2xl p-6">
              <h3 className="text-base font-black text-white mb-2 leading-tight">{art.cta.heading}</h3>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">{art.cta.text}</p>
              <Link
                to={art.cta.btnPrimary.url}
                className="block w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold text-sm text-center px-4 py-3 rounded-xl transition-colors mb-3"
              >
                {art.cta.btnPrimary.label}
              </Link>
              <Link
                to={art.cta.btnSecondary.url}
                className="block w-full border border-slate-600 hover:border-cyan-400/50 text-slate-300 hover:text-white font-medium text-sm text-center px-4 py-3 rounded-xl transition-colors"
              >
                {art.cta.btnSecondary.label}
              </Link>
            </div>

            {/* Back to resources */}
            <Link
              to="/recursos"
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft size={14} />
              Ver todos los recursos
            </Link>
          </aside>
        </div>
      </article>

      <Footer />
    </div>
  );
};

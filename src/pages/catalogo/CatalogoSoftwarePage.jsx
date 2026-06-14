import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLangNavigate } from '../../lib/i18n-utils';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SeoHead } from '../../lib/SeoHead';

const seg = (s) => s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@ ]/gu, c => encodeURIComponent(c)).replace(/ /g, '%20');
const img = (prod, file) => `/productos-delie/software-inteligente/${seg(prod)}/${file}`;

/* Solo imagen + link; name/desc desde i18n por índice. */
const PRODUCT_MEDIA = [
  { image: img('(WMS) Sistema de gestión de almacenes', '2025112715331054f3e.webp'), link: '/catalogo/software/wms' },
  { image: img('(WCS) Sistema de control de almacén', '202511271540270edaa.webp'), link: '/catalogo/software/wcs' },
  { image: img('(HMS) Sistema hombre-máquina', '202511271543590186b.webp'), link: '/catalogo/software/hms' },
  { image: img('(ECS) Sistema de control electrónico', '202511271547349105f.webp'), link: '/catalogo/software/ecs' },
  { image: img('Interfaz API', '20251127155815290ed.webp'), link: '/catalogo/software/interfaz-api' },
  { image: img('Sistema de control central de visualización 3D', '20251127160404e52d8.webp'), link: '/catalogo/software/visualizacion-3d' },
];

const SISTER_HREFS = [
  '/catalogo/asrs',
  '/catalogo/robots-manipulacion',
  '/catalogo/almacenamiento-vertical',
  '/catalogo/equipo-transporte',
];

export const CatalogoSoftwarePage = () => {
  const langNavigate = useLangNavigate();
  const { t, i18n } = useTranslation();
  const p = (k) => t(`pages.catalogoSoftware.${k}`, { returnObjects: true });
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const productsI18n = p('products');
  const PRODUCTS = PRODUCT_MEDIA.map((m, i) => ({ ...m, ...(productsI18n[i] || {}) }));
  const FAQ = p('faq');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SeoHead
        title={p('metaTitle')}
        description={p('metaDesc')}
        basePath={'/catalogo/software'}
      />
      <Helmet>
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
          "name": p('metaTitle'),
          "numberOfItems": PRODUCTS.length,
          "inLanguage": i18n.language,
          "itemListElement": PRODUCTS.map((prod, i) => ({
            "@type": "ListItem", "position": i + 1, "name": prod.name, "description": prod.desc,
            "url": `https://www.stokagroup.com${prod.link}`
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": i18n.language,
          "mainEntity": FAQ.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": p('metaTitle'),
          "description": p('metaDesc'),
          "inLanguage": i18n.language,
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
              <button onClick={() => langNavigate('/')} className="hover:text-cyan-500 transition-colors">{t('nav.home')}</button>
              <ChevronRight size={12} />
              <button onClick={() => langNavigate('/catalogo')} className="hover:text-cyan-500 transition-colors">{t('nav.catalog')}</button>
              <ChevronRight size={12} />
              <span className="text-cyan-500">{p('breadcrumbCat')}</span>
            </nav>
            <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.35em] mb-3">{p('heroTag')}</p>
            <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              {p('heroH1_a')}<br />
              <span className="text-cyan-500">{p('heroH1_b')}</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
              {p('heroSub')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-wrap gap-8 md:gap-16">
            {[
              { value: '6', label: p('stat1Label') },
              { value: 'CMMI 5', label: p('stat2Label') },
              { value: 'SAP / ERP', label: p('stat3Label') },
              { value: '3D', label: p('stat4Label') },
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
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('catalogTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('catalogH2')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((prod, i) => (
              <motion.button key={i} onClick={() => langNavigate(prod.link)}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-400 hover:shadow-md transition-all group cursor-pointer">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img loading="lazy" src={prod.image} alt={`${prod.name} — DELIE`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-base mb-2 group-hover:text-cyan-600 transition-colors">{prod.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{prod.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-cyan-500 font-bold">
                    {p('verDetalle')} <ChevronRight size={12} />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => langNavigate('/catalogo')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              {p('viewFullCatalog')} <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* DESCRIPCIÓN SEO */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('seoTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-1">{p('seoH2')}</h2>
          <p className="text-gray-400 text-sm mb-8">{p('seoSub')}</p>

          {/* Comparison cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {p('comparison').map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-black text-cyan-500">{c.system}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{c.full}</p>
                    <p className="text-xs text-gray-400">{p('nivel')}: {c.nivel}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{c.role}</p>
                <p className="text-xs text-gray-400"><span className="font-bold text-gray-600">{p('integraWith')}:</span> {c.integra}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits chips */}
          <div className="mb-10">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{p('benefitsTag')}</p>
            <div className="flex flex-wrap gap-2">
              {p('benefits').map((b, i) => (
                <span key={i} className="px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-bold text-cyan-700">{b}</span>
              ))}
            </div>
          </div>

          {/* El error más común — dark card */}
          <div className="bg-slate-900 rounded-2xl p-7 mb-6">
            <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.35em] mb-3">{p('errorTag')}</p>
            <p className="text-white text-base font-bold leading-relaxed mb-3">
              {p('errorH3')}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {p('errorBody')}
            </p>
          </div>

          {/* Contexto Argentina/Chile */}
          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6">
            <p className="text-cyan-700 text-[10px] font-black uppercase tracking-[0.35em] mb-3">{p('argTag')}</p>
            <p className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p('argBody') }} />
          </div>
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t('pages.catalogoSoftware.sisterTag', 'Seguir explorando')}</p>
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-6">{t('pages.catalogoSoftware.sisterH2', 'Otras categorías del catálogo')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {p('sisterCats').map((c, i) => (
              <button key={i} onClick={() => langNavigate(SISTER_HREFS[i])}
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
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('explorarTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('explorarH2')}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {p('explorarTipo').map((item, i) => (
              <motion.button key={i} onClick={() => langNavigate(['/catalogo/software/wms', '/catalogo/software/wcs'][i])}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="text-left bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-sm transition-all group">
                <h3 className="font-black text-gray-900 text-sm mb-2 group-hover:text-cyan-600 transition-colors">{item.nombre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-cyan-500 font-bold">
                  {p('verDetalle')} <ChevronRight size={12} />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('faqTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('faqH2')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {p('faq').map((item, i) => (
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

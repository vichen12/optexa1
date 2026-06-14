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
const img = (prod, file) => `/productos-delie/almacenamiento-vertical/${seg(prod)}/${file}`;

/* Solo imagen + link; name/desc/features/best_for desde i18n por índice. */
const PRODUCT_MEDIA = [
  { image: img('Carrusel vertical inteligente para almacenamiento automatizado de alta-densidad', '2025112714330825019.webp'), link: '/catalogo/almacenamiento-vertical/carruseles' },
  { image: img('Solución de elevación vertical automatizada de mercancías-a-personas', '20251127144756e3768.webp'), link: '/catalogo/almacenamiento-vertical/vlm' },
];

const SISTER_HREFS = [
  '/catalogo/asrs',
  '/catalogo/robots-manipulacion',
  '/catalogo/equipo-transporte',
  '/catalogo/software',
];

export const CatalogoVerticalPage = () => {
  const langNavigate = useLangNavigate();
  const { t, i18n } = useTranslation();
  const p = (k) => t(`pages.catalogoVertical.${k}`, { returnObjects: true });
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const productsI18n = p('products');
  const PRODUCTS = PRODUCT_MEDIA.map((m, i) => ({ ...m, ...(productsI18n[i] || {}) }));
  const FAQ = p('faq');
  const fiscal = p('fiscal');
  const explorar = p('explorarTipo');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SeoHead
        title={p('metaTitle')}
        description={p('metaDesc')}
        basePath={'/catalogo/almacenamiento-vertical'}
      />
      <Helmet>
                                        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://www.stokagroup.com/catalogo" },
            { "@type": "ListItem", "position": 3, "name": "Almacenamiento vertical", "item": "https://www.stokagroup.com/catalogo/almacenamiento-vertical" }
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
            "url": "https://www.stokagroup.com/catalogo/almacenamiento-vertical"
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
          "serviceType": "Almacenamiento Vertical — Automatización de Almacenes",
          "url": "https://www.stokagroup.com/catalogo/almacenamiento-vertical"
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="bg-white border-b border-gray-100 mt-20">
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500 mt-20" />
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5">
              <button onClick={() => langNavigate('/')} className="hover:text-cyan-500 transition-colors">{t('nav.home')}</button>
              <ChevronRight size={12} />
              <button onClick={() => langNavigate('/catalogo')} className="hover:text-cyan-500 transition-colors">{t('nav.catalog')}</button>
              <ChevronRight size={12} />
              <span className="text-cyan-500">{p('breadcrumbCat')}</span>
            </nav>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">{p('heroTag')}</p>
            <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              {p('heroH1_a')}<br />
              <span className="text-cyan-500">{p('heroH1_b')}</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
              {p('heroSub')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* STATS — arriba del catálogo */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-6">
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('statsTag')}</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">{p('statsH2')}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '90%', label: p('stat1Label'), sub: p('stat1Sub') },
              { value: '70%', label: p('stat2Label'), sub: p('stat2Sub') },
              { value: '17,5 m', label: p('stat3Label'), sub: p('stat3Sub') },
              { value: '6.000 kg', label: p('stat4Label'), sub: p('stat4Sub') },
            ].map(s => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center">
                <p className="text-2xl font-black text-gray-900 leading-none mb-1">{s.value}</p>
                <p className="text-[11px] font-bold text-cyan-600 uppercase tracking-wide mb-1">{s.label}</p>
                <p className="text-[11px] text-gray-400 leading-tight">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('catalogTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('catalogH2')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PRODUCTS.map((prod, i) => (
              <motion.button key={i} onClick={() => langNavigate(prod.link)}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer group w-full">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img loading="lazy" src={prod.image} alt={`${prod.name} — DELIE`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-cyan-600 transition-colors">{prod.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{prod.desc}</p>
                  <div className="mb-4">
                    {prod.features.map(f => (
                      <div key={f} className="flex items-start gap-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <p className="text-sm text-gray-600">{f}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 flex items-center justify-between">
                    <p className="text-xs text-cyan-700 font-bold">{prod.best_for}</p>
                    <ArrowRight size={14} className="text-cyan-500 shrink-0 ml-2" />
                  </div>
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
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">{p('techTag')}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { ...p('techItems')[0], badgeColor: 'bg-violet-50 text-violet-600 border-violet-200' },
                { ...p('techItems')[1], badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
              ].map(item => (
                <div key={item.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
                  <div>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wide border px-2 py-0.5 rounded-full mb-2 ${item.badgeColor}`}>{item.badge}</span>
                    <p className="text-sm font-black text-gray-900">{item.name}</p>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  <p className="text-[11px] font-bold text-cyan-600 border-t border-gray-200 pt-3 mt-auto">{item.best}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">{p('sharedBenefits')}</p>
              <div className="flex flex-wrap gap-2">
                {p('benefitsList').map(b => (
                  <span key={b} className="text-[11px] bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">{b}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">{p('densityNote')}</p>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase">{p('fiscalTag')}</p>
              <div className="space-y-2.5">
                {fiscal.map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white">{item.label}</span>
                      <span className="text-xs text-gray-400"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => langNavigate('/beneficios-fiscales')} className="mt-auto text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors border-t border-white/10 pt-4">
                {p('fiscalCta')} <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t('pages.catalogoVertical.sisterTag', 'Seguir explorando')}</p>
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-6">{t('pages.catalogoVertical.sisterH2', 'Otras categorías del catálogo')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {p('sisterCats').map((c, i) => (
              <button key={i} onClick={() => langNavigate(SISTER_HREFS[i])}
                className="text-left p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50/50 transition-all group">
                <p className="font-bold text-gray-900 text-sm mb-0.5 group-hover:text-cyan-600 transition-colors">{c.label}</p>
                <p className="text-gray-500 text-xs">{c.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* Explorar por tipo — product child links */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('explorarTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('explorarH2')}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {explorar.map((item, i) => (
              <motion.a key={i} href={['/catalogo/almacenamiento-vertical/vlm', '/catalogo/almacenamiento-vertical/carruseles'][i]}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-sm transition-all group block">
                <h3 className="font-black text-gray-900 text-sm mb-2 group-hover:text-cyan-600 transition-colors">{item.nombre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-cyan-500 font-bold">
                  {p('verDetalle')} <ChevronRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('faqTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('faqH2')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {p('faq').map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
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

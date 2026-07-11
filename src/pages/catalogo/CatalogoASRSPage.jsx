import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLangNavigate, LangLink } from '../../lib/i18n-utils';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { ArrowRight, ChevronRight, Maximize2 } from 'lucide-react';
import { SeoHead } from '../../lib/SeoHead';

const seg = (s) => s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@ ]/gu, c => encodeURIComponent(c)).replace(/ /g, '%20');
const img = (prod, file) => `/productos-delie/asrs/${seg(prod)}/${file}`;

/* Solo imagen + link; name/desc desde i18n por índice. */
const PRODUCT_MEDIA = [
  { image: img('Estanterías robóticas con lanzadera para palés', 'pallet-shuttle-robot-racking13c59.webp'), link: '/catalogo/asrs/pallet-shuttle-racking' },
  { image: img('Estantería del robot Tote Shuttle', 'tote-shuttle-robot-racking38678.webp'), link: '/catalogo/asrs/tote-shuttle-racking' },
  { image: img('Estanterías para grúa apiladora de paletas', 'pallet-stacker-crane-racking598c7.webp'), link: '/catalogo/asrs/pallet-stacker-crane-racking' },
  { image: img('Mini-estantería Flybox', 'mini-flybox-racking93d5a.webp'), link: '/catalogo/asrs/mini-flybox-racking' },
  { image: img('Transelevador Grúa + Estantería Robot Lanzadera', 'pallet-stacker-crane-shuttle-robot-racking89e90.webp'), link: '/catalogo/asrs/stacker-crane-shuttle-racking' },
  { image: img('Estanterías Miniload', 'miniload-rackinga0ea0.webp'), link: '/catalogo/asrs/miniload-racking' },
  { image: img('Estanterías de servicio pesado', 'heavy-duty-racking9a1ae.webp'), link: '/catalogo/asrs/heavy-duty-racking' },
  { image: img('Estanterías push-para almacenamiento-de alta densidad', 'push-in-racking-for-high-density-storage2a4c0.webp'), link: '/catalogo/asrs/push-back-racking' },
  { image: img('Estanterías de entresuelo', 'mezzanine-racking7da1b.webp'), link: '/catalogo/asrs/mezzanine-racking' },
  { image: img('Plataforma de estructura de acero', 'steel-structure-platformfb756.webp'), link: '/catalogo/asrs/steel-platform' },
  { image: img('Plataforma de almacenamiento de acero', 'steel-storage-palletce853.webp'), link: '/catalogo/asrs/steel-pallet' },
  { image: img('Conducir en estanterías', 'drive-in-rackinga817d.webp'), link: '/catalogo/asrs/drive-in-racking' },
];

const SISTER_HREFS = [
  '/catalogo/robots-manipulacion',
  '/catalogo/almacenamiento-vertical',
  '/catalogo/equipo-transporte',
  '/catalogo/software',
];

export const CatalogoASRSPage = () => {
  const langNavigate = useLangNavigate();
  const { t, i18n } = useTranslation();
  const p = (k) => t(`pages.catalogoAsrs.${k}`, { returnObjects: true });
  const FAQ = p('faq');
  const faqList = Array.isArray(FAQ) ? FAQ : [];
  const productsI18n = p('products');
  const PRODUCTS = PRODUCT_MEDIA.map((m, i) => ({ ...m, ...((Array.isArray(productsI18n) ? productsI18n[i] : null) || {}) }));
  const videoRef = useRef(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SeoHead
        title={p('metaTitle')}
        description={p('metaDesc')}
        basePath={'/catalogo/asrs'}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://www.stokagroup.com/catalogo" },
            { "@type": "ListItem", "position": 3, "name": "AS/RS", "item": "https://www.stokagroup.com/catalogo/asrs" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": p('metaTitle'),
          "numberOfItems": PRODUCTS.length,
          "inLanguage": i18n.language,
          "itemListElement": PRODUCTS.map((prod, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": prod.name,
            "description": prod.desc,
            "url": "https://www.stokagroup.com/catalogo/asrs"
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": i18n.language,
          "mainEntity": faqList.map(item => ({
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
          "areaServed": [
            { "@type": "Country", "name": "Argentina" },
            { "@type": "Country", "name": "Chile" }
          ],
          "serviceType": p('serviceType'),
          "url": "https://www.stokagroup.com/catalogo/asrs"
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO — video de fondo */}
      <div className="relative mt-20 h-[70vh] min-h-120 flex items-end overflow-hidden">
        <video
          src="/bannervideo2-compressed.mp4"
          autoPlay muted loop playsInline
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-950/30 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            {/* Breadcrumb visual */}
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
              <button onClick={() => langNavigate('/')} className="hover:text-cyan-400 transition-colors">{t('nav.home')}</button>
              <ChevronRight size={12} />
              <button onClick={() => langNavigate('/catalogo')} className="hover:text-cyan-400 transition-colors">{t('nav.catalog')}</button>
              <ChevronRight size={12} />
              <span className="text-cyan-400">{p('breadcrumbCat')}</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">
              {p('heroTag')}
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              {p('heroH1_a')}<br />
              <span className="text-cyan-400">{p('heroH1_b')}</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              {p('heroSub')}
            </p>
            <div className="flex flex-wrap gap-6">
              {[{ value: '12', label: p('heroStat1Label') }, { value: '40m', label: p('heroStat2Label') }, { value: '±0,1mm', label: p('heroStat3Label') }].map(s => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-black text-white italic">{s.value}</span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* DESCRIPCIÓN SEO */}
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Header */}
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('whatIsTag')}</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">{p('whatIsH2')}</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-3xl mt-4">{t('pages.catalogoAsrs.vocabPara')}</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-3xl mt-3">
              {p('transPre')}
              <LangLink to="/recursos/que-es-un-transelevador" className="text-cyan-600 font-semibold underline underline-offset-2 hover:text-cyan-500">{p('transAnchor')}</LangLink>
              {p('transPost')}
            </p>
          </div>

          {/* Stat badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '40 m', label: p('stat1Label'), sub: p('stat1Sub') },
              { value: '±0,1 mm', label: p('stat2Label'), sub: p('stat2Sub') },
              { value: '30–50%', label: p('stat3Label'), sub: p('stat3Sub') },
              { value: '18–36', label: p('stat4Label'), sub: p('stat4Sub') },
            ].map(s => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center">
                <p className="text-2xl font-black text-gray-900 leading-none mb-1">{s.value}</p>
                <p className="text-[11px] font-bold text-cyan-600 uppercase tracking-wide mb-1">{s.label}</p>
                <p className="text-[11px] text-gray-400 leading-tight">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-black group">
            <video
              ref={videoRef}
              src="/bannervideo1-compressed.mp4"
              autoPlay muted loop playsInline
              className="w-full max-h-90 object-cover"
            />
            <button
              onClick={() => videoRef.current?.requestFullscreen()}
              className="absolute bottom-3 right-3 p-2 bg-black/50 hover:bg-black/80 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Pantalla completa"
            >
              <Maximize2 size={16} className="text-white" />
            </button>
          </div>

          {/* System selection guide */}
          <div>
            <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">{p('guideTag')}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { ...p('guide')[0], badgeColor: 'bg-blue-50 text-blue-600 border-blue-200' },
                { ...p('guide')[1], badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
                { ...p('guide')[2], badgeColor: 'bg-violet-50 text-violet-600 border-violet-200' },
              ].map(s => (
                <div key={s.type} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
                  <div>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wide border px-2 py-0.5 rounded-full mb-2 ${s.badgeColor}`}>{s.badge}</span>
                    <p className="text-base font-black text-gray-900">{s.type}</p>
                    <p className="text-xs text-gray-400">{s.sub}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {s.cases.map(c => (
                      <li key={c} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <span className="text-xs text-gray-600">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-gray-400 border-t border-gray-200 pt-3 mt-auto">{s.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-col: fabricación + fiscal */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fabricación DELIE */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">{p('fabTag')}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Acero de acerías certificadas',
                  'Tolerancia ±0,1 mm',
                  'Anticorrosión silano',
                  '1.000+ instalaciones globales',
                  'Compatible robots shuttle',
                  'Compatible transelevadores',
                  'Compatible AMR',
                  'Apto frío y trabajo pesado',
                ].map(tag => (
                  <span key={tag} className="text-[11px] bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                STOKA garantiza el proyecto llave en mano: ingeniería, importación, instalación y soporte posventa 100% local en Argentina.
              </p>
            </div>

            {/* Fiscal 2026 */}
            <div className="bg-slate-900 rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase">{p('fiscalTag')}</p>
              <div className="space-y-2.5">
                {p('fiscalItems').map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white">{item.label}</span>
                      <span className="text-xs text-gray-400"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm font-black text-white leading-tight border-t border-white/10 pt-4">
                {t('pages.catalogoAsrs.fiscalRoi', { value: '18–36' })}
              </p>
              <button onClick={() => langNavigate('/beneficios-fiscales')} className="mt-auto text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
                {p('fiscalLink')} <ArrowRight size={12} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('catalogTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('catalogH2')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((prod, i) => (
              <motion.button key={i} onClick={() => langNavigate(prod.link)} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-sm transition-all group">
                <div className="aspect-4/3 overflow-hidden bg-gray-100">
                  <img loading="lazy" src={prod.image} alt={`${prod.name} — AS/RS DELIE`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-black text-gray-900 text-sm mb-1.5">{prod.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{prod.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => langNavigate('/catalogo')} className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              {p('viewFullCatalog')} <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('sisterTag')}</p>
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-6">{p('sisterH2')}</h2>
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
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('exploreTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('exploreH2')}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { ...p('exploreItems')[0], url: '/catalogo/asrs/unit-load' },
              { ...p('exploreItems')[1], url: '/catalogo/asrs/miniload' },
              { ...p('exploreItems')[2], url: '/catalogo/asrs/shuttle' },
              { ...p('exploreItems')[3], url: '/catalogo/asrs/camara-frio' },
            ].map((item, i) => (
              <motion.a key={i} href={item.url}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-sm transition-all group block">
                <h3 className="font-black text-gray-900 text-sm mb-2 group-hover:text-cyan-600 transition-colors">{item.nombre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-cyan-500 font-bold">
                  {p('viewDetail')} <ChevronRight size={12} />
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

      {/* Link pills — navegación al pie */}
      <section className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
          {[
            { label: p('footerLinks')[0].label, href: '/beneficios-fiscales' },
            { label: p('footerLinks')[1].label, href: '/catalogo/robots-manipulacion' },
            { label: p('footerLinks')[2].label, href: '/catalogo/software' },
            { label: p('footerLinks')[3].label, href: '/como-trabajamos' },
          ].map(l => (
            <button key={l.href} onClick={() => langNavigate(l.href)}
              className="text-xs font-bold text-gray-600 border border-gray-200 px-4 py-2 rounded-full hover:border-cyan-300 hover:text-cyan-600 transition-all bg-gray-50">
              {l.label}
            </button>
          ))}
        </div>
      </section>

      {/* También te puede interesar */}
      <section className="py-10 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.4em] uppercase mb-4">{p('alsoInterest')}</p>
          <LangLink
            to="/catalogo/asrs/autostore-alternativa"
            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-900 border border-slate-700 hover:border-cyan-400/50 rounded-2xl p-6 transition-colors"
          >
            <div>
              <h3 className="text-base font-black text-white mb-1 group-hover:text-cyan-50 transition-colors">
                {p('autostoreH3')}
              </h3>
              <p className="text-sm text-slate-400">{p('autostoreDesc')}</p>
            </div>
            <span className="shrink-0 flex items-center gap-1 text-cyan-400 text-sm font-bold group-hover:gap-2 transition-all">
              {p('autostoreLink')} <ArrowRight size={15} />
            </span>
          </LangLink>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

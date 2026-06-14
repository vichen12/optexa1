import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/hero';
import { WppFloat } from './components/WppFloat';
import { LeadPopup } from './components/LeadPopup';
import { CatalogPreview } from './components/CatalogPreview';
import { PropuestaDeValor } from './components/PropuestaDeValor';
import { IndustriasPreview } from './components/IndustriasPreview';
import { ROISection } from './components/ROISection';
import { BeneficiosBanner } from './components/BeneficiosBanner';
import { Process } from './components/Process';
import { CTABanner } from './components/CTABanner';
import { LangLink } from './lib/i18n-utils';
import { SeoHead } from './lib/SeoHead';

const CatalogPage = lazy(() => import('./pages/CatalogPage').then(m => ({ default: m.CatalogPage })));
const SolucionesPage = lazy(() => import('./pages/SolucionesPage').then(m => ({ default: m.SolucionesPage })));
const NosotrosPage = lazy(() => import('./pages/NosotrosPage').then(m => ({ default: m.NosotrosPage })));
const ComoTrabajamosPage = lazy(() => import('./pages/ComoTrabajamosPage').then(m => ({ default: m.ComoTrabajamosPage })));
const BeneficiosFiscalesPage = lazy(() => import('./pages/BeneficiosFiscalesPage').then(m => ({ default: m.BeneficiosFiscalesPage })));
const IndustriasPage = lazy(() => import('./pages/IndustriasPage').then(m => ({ default: m.IndustriasPage })));
const IndustriaDetailPage = lazy(() => import('./pages/IndustriaDetailPage').then(m => ({ default: m.IndustriaDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const CatalogoASRSPage = lazy(() => import('./pages/catalogo/CatalogoASRSPage').then(m => ({ default: m.CatalogoASRSPage })));
const CatalogoRobotsPage = lazy(() => import('./pages/catalogo/CatalogoRobotsPage').then(m => ({ default: m.CatalogoRobotsPage })));
const CatalogoVerticalPage = lazy(() => import('./pages/catalogo/CatalogoVerticalPage').then(m => ({ default: m.CatalogoVerticalPage })));
const CatalogoTransportePage = lazy(() => import('./pages/catalogo/CatalogoTransportePage').then(m => ({ default: m.CatalogoTransportePage })));
const CatalogoSoftwarePage = lazy(() => import('./pages/catalogo/CatalogoSoftwarePage').then(m => ({ default: m.CatalogoSoftwarePage })));
const ProductoPage = lazy(() => import('./pages/catalogo/ProductoPage').then(m => ({ default: m.ProductoPage })));
const AlternativaDeliePage = lazy(() => import('./pages/AlternativaDeliePage').then(m => ({ default: m.AlternativaDeliePage })));
const AlternativaEconomicaASRSPage = lazy(() => import('./pages/AlternativaEconomicaASRSPage').then(m => ({ default: m.AlternativaEconomicaASRSPage })));
const RecursosHub = lazy(() => import('./pages/recursos/RecursosHub').then(m => ({ default: m.RecursosHub })));
const ArticuloPage = lazy(() => import('./pages/recursos/ArticuloPage').then(m => ({ default: m.ArticuloPage })));
const GlosarioPage = lazy(() => import('./pages/recursos/GlosarioPage').then(m => ({ default: m.GlosarioPage })));
const ComparadorPage = lazy(() => import('./pages/recursos/ComparadorPage').then(m => ({ default: m.ComparadorPage })));
const CasosDeExitoPage = lazy(() => import('./pages/CasosDeExitoPage').then(m => ({ default: m.CasosDeExitoPage })));
const ROIPage = lazy(() => import('./pages/recursos/ROIPage').then(m => ({ default: m.ROIPage })));
const AutoStoreAlternativaPage = lazy(() => import('./pages/catalogo/AutoStoreAlternativaPage').then(m => ({ default: m.AutoStoreAlternativaPage })));
const ChilePage = lazy(() => import('./pages/ChilePage').then(m => ({ default: m.ChilePage })));

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.stokagroup.com/#organization",
  "name": "STOKA",
  "legalName": "STOKA",
  "description": "Representantes oficiales exclusivos de DELIE en Argentina. Sistemas ASRS, transelevadores, robots AMR y software WMS/WCS para automatización de almacenes industriales.",
  "url": "https://www.stokagroup.com",
  "logo": "https://www.stokagroup.com/stoka_deliecn_logo_sin_fondo.png",
  "image": "https://www.stokagroup.com/stoka_deliecn_logo_sin_fondo.png",
  "telephone": ["+5492615886671", "+5492612071048"],
  "email": "contacto@stokagroup.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carril Rodríguez Peña 35",
    "addressLocality": "Maipú",
    "addressRegion": "Mendoza",
    "postalCode": "5515",
    "addressCountry": "AR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.9468, "longitude": -68.4081 },
  "areaServed": [
    { "@type": "Country", "name": "Argentina" },
    { "@type": "Country", "name": "Chile" }
  ],
  "knowsAbout": ["Sistemas ASRS", "Automatización de almacenes", "Transelevadores", "Robots AMR", "Software WMS", "Software WCS", "VLM", "Carruseles verticales"],
  "foundingDate": "2025",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 2 },
  "priceRange": "$$$$"
};

/* Language layout — reads lang prefix from URL and syncs i18n */
function LangLayout({ lang }) {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const target = lang || (
      location.pathname.startsWith('/en') ? 'en' :
      location.pathname.startsWith('/zh') ? 'zh' : 'es'
    );
    if (i18n.language !== target) i18n.changeLanguage(target);
  }, [lang, location.pathname, i18n]);

  return <Outlet />;
}

export function HomePage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.visibilityState === 'hidden'
        ? t('home.tabAway')
        : t('home.pageTitle');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [t]);

  return (
    <div className="min-h-screen relative text-white selection:bg-cyan-400 selection:text-slate-900 bg-zinc-950">
      <SeoHead
        title={t('home.pageTitle')}
        description={t('home.metaDesc')}
        basePath={'/'}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "STOKA — Automatización de Almacenes",
          "url": "https://www.stokagroup.com",
          "description": "Representantes oficiales exclusivos de DELIE en Argentina.",
          "inLanguage": lang,
          "publisher": { "@type": "Organization", "name": "STOKA" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({ ...ORGANIZATION_SCHEMA, inLanguage: lang })}</script>
      </Helmet>
      <Navbar />

      <main className="relative z-10">
        <section id="inicio">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Hero />
          </motion.div>
        </section>
        <ROISection />
        <CatalogPreview />
        <PropuestaDeValor />
        <IndustriasPreview />
        <BeneficiosBanner />
        <Process />
      </main>

      {/* SEO content block */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto space-y-12">

          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t('home.seoTag')}</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-3 max-w-3xl">{t('home.h2')}</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{t('home.seoPara')}</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mt-3">{t('home.vocabPara')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {[
                { label: '+1.000', desc: t('home.stats.installations') },
                { label: '+30',    desc: t('home.stats.countries') },
                { label: '40 m',   desc: t('home.stats.height') },
                { label: 'CMMI 5', desc: t('home.stats.cert') },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-center">
                  <p className="text-xl font-black text-cyan-500 leading-none mb-1">{s.label}</p>
                  <p className="text-gray-400 text-[11px] leading-tight">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-5">{t('home.challengesTag')}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {t('home.challenges', { returnObjects: true }).map((item) => (
                <div key={item.num} className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
                  <span className="text-[10px] font-black text-gray-300 font-mono">//{item.num}</span>
                  <p className="font-black text-gray-900 text-sm uppercase tracking-tight mt-2 mb-2">{item.challenge}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
              <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">{t('home.systemsTag')}</p>
              <div className="flex flex-wrap gap-2">
                {['ASRS alta densidad 7–40 m', 'Transelevador MiniLoad', 'Transelevador de paletas', 'Robot shuttle 2 vías', 'Robot shuttle 4 vías', 'VLM', 'Carrusel vertical', 'Transportador de cadena', 'Transportador de rodillos', 'Paletizador automático', 'WMS', 'WCS', 'HMS'].map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6 flex flex-col gap-5">
              <div>
                <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase mb-2">{t('home.roiTag')}</p>
                <p className="text-4xl font-black text-white leading-none">18–36 <span className="text-lg font-bold text-gray-400">{t('home.roiMonths')}</span></p>
                <p className="text-gray-400 text-xs mt-1">{t('home.roiSub')}</p>
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <p className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase mb-3">{t('home.processTag')}</p>
                {t('home.processSteps', { returnObjects: true }).map((step, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-black text-xs mt-0.5 shrink-0">{i + 1}.</span>
                    <p className="text-gray-300 text-xs leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-6">
            <p className="text-[10px] font-mono text-cyan-600 tracking-[0.4em] uppercase mb-4">{t('home.fiscalTag')}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {t('home.fiscal', { returnObjects: true }).map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1 rounded-full bg-cyan-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <LangLink to="/beneficios-fiscales" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-500 mt-5 transition-colors">
              {t('home.fiscalLink')} <span>›</span>
            </LangLink>
          </div>

          <div>
            <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-5">{t('home.chileTag')}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {t('home.chile', { returnObjects: true }).map((item, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 p-5">
                  <p className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{item.ind}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">{t('home.chileNote')}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
            {[
              { to: '/casos-de-exito',              label: t('home.links.cases') },
              { to: '/recursos/glosario',            label: t('home.links.glossary') },
              { to: '/recursos/comparador-sistemas', label: t('home.links.comparator') },
              { to: '/beneficios-fiscales',          label: t('home.links.fiscalBenefits') },
            ].map((l) => (
              <LangLink key={l.to} to={l.to}
                className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
                {l.label}
              </LangLink>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ con lenguaje de búsqueda + FAQPage schema */}
      {(() => {
        const faqItems = t('home.faq', { returnObjects: true });
        const list = Array.isArray(faqItems) ? faqItems : [];
        if (list.length === 0) return null;
        return (
          <section className="bg-slate-900 py-16 px-6">
            <Helmet>
              <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "inLanguage": lang,
                "mainEntity": list.map((f) => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
              })}</script>
            </Helmet>
            <div className="max-w-5xl mx-auto">
              <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-3">{t('home.faqTag')}</p>
              <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter mb-10">{t('home.faqH2')}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {list.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-white font-bold text-sm leading-snug mb-2">{item.q}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <CTABanner />
      <WppFloat />
      <Footer />
    </div>
  );
}

function App() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  /* Shared inner routes — reused for /, /en, /zh */
  const inner = [
    <Route key="home" index element={<HomePage />} />,
    <Route key="catalogo" path="catalogo" element={<CatalogPage />} />,
    <Route key="catalogo-asrs" path="catalogo/asrs" element={<CatalogoASRSPage />} />,
    <Route key="catalogo-robots" path="catalogo/robots-manipulacion" element={<CatalogoRobotsPage />} />,
    <Route key="catalogo-vertical" path="catalogo/almacenamiento-vertical" element={<CatalogoVerticalPage />} />,
    <Route key="catalogo-transport" path="catalogo/equipo-transporte" element={<CatalogoTransportePage />} />,
    <Route key="catalogo-software" path="catalogo/software" element={<CatalogoSoftwarePage />} />,
    <Route key="catalogo-producto" path="catalogo/:categoria/:producto" element={<ProductoPage />} />,
    <Route key="soluciones" path="soluciones" element={<SolucionesPage />} />,
    <Route key="industrias" path="industrias" element={<IndustriasPage />} />,
    <Route key="industria-detail" path="industrias/:slug" element={<IndustriaDetailPage />} />,
    <Route key="beneficios" path="beneficios-fiscales" element={<BeneficiosFiscalesPage />} />,
    <Route key="como-trabajamos" path="como-trabajamos" element={<ComoTrabajamosPage />} />,
    <Route key="nosotros" path="nosotros" element={<NosotrosPage />} />,
    <Route key="contacto" path="contacto" element={<ContactPage />} />,
    <Route key="delie-ar" path="delie-argentina" element={<AlternativaDeliePage />} />,
    <Route key="alt-asrs" path="alternativa-economica-asrs" element={<AlternativaEconomicaASRSPage />} />,
    <Route key="alt-delie-redir" path="alternativa-delie-argentina" element={<Navigate to="delie-argentina" replace />} />,
    <Route key="casos" path="casos-de-exito" element={<CasosDeExitoPage />} />,
    <Route key="recursos" path="recursos" element={<RecursosHub />} />,
    <Route key="glosario" path="recursos/glosario" element={<GlosarioPage />} />,
    <Route key="comparador" path="recursos/comparador-sistemas" element={<ComparadorPage />} />,
    <Route key="roi" path="recursos/roi-automatizacion" element={<ROIPage />} />,
    <Route key="articulo" path="recursos/:slug" element={<ArticuloPage />} />,
    <Route key="autostore" path="catalogo/asrs/autostore-alternativa" element={<AutoStoreAlternativaPage />} />,
    <Route key="chile" path="chile" element={<ChilePage />} />,
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({ ...ORGANIZATION_SCHEMA, inLanguage: lang })}</script>
      </Helmet>
      <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
        <Routes>
          {/* Spanish (default) */}
          <Route path="/" element={<LangLayout lang="es" />}>
            {inner}
          </Route>
          {/* English */}
          <Route path="/en" element={<LangLayout lang="en" />}>
            {inner}
          </Route>
          {/* Chinese */}
          <Route path="/zh" element={<LangLayout lang="zh" />}>
            {inner}
          </Route>
        </Routes>
      </Suspense>
      <LeadPopup />
    </>
  );
}

export default App;

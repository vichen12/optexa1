import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
import { CatalogPage } from './pages/CatalogPage';
import { SolucionesPage } from './pages/SolucionesPage';
import { NosotrosPage } from './pages/NosotrosPage';
import { ComoTrabajamosPage } from './pages/ComoTrabajamosPage';
import { BeneficiosFiscalesPage } from './pages/BeneficiosFiscalesPage';
import { IndustriasPage } from './pages/IndustriasPage';
import { IndustriaDetailPage } from './pages/IndustriaDetailPage';
import { ContactPage } from './pages/ContactPage';
import { CatalogoASRSPage } from './pages/catalogo/CatalogoASRSPage';
import { CatalogoRobotsPage } from './pages/catalogo/CatalogoRobotsPage';
import { CatalogoVerticalPage } from './pages/catalogo/CatalogoVerticalPage';
import { CatalogoTransportePage } from './pages/catalogo/CatalogoTransportePage';
import { CatalogoSoftwarePage } from './pages/catalogo/CatalogoSoftwarePage';
import { ProductoPage } from './pages/catalogo/ProductoPage';
import { AlternativaDeliePage } from "./pages/AlternativaDeliePage";
import { RecursosHub } from './pages/recursos/RecursosHub';
import { ArticuloPage } from './pages/recursos/ArticuloPage';
import { GlosarioPage } from './pages/recursos/GlosarioPage';
import { ComparadorPage } from './pages/recursos/ComparadorPage';
import { CasosDeExitoPage } from './pages/CasosDeExitoPage';

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
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
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.9468,
    "longitude": -68.4081
  },
  "areaServed": [
    { "@type": "Country", "name": "Argentina" },
    { "@type": "Country", "name": "Chile" }
  ],

  "knowsAbout": [
    "Sistemas ASRS",
    "Automatización de almacenes",
    "Transelevadores",
    "Robots AMR",
    "Software WMS",
    "Software WCS",
    "VLM",
    "Carruseles verticales"
  ],
  "foundingDate": "2025",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 2 },
  "priceRange": "$$$$"
};

function HomePage() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.visibilityState === 'hidden'
        ? '¡Volvé! Te esperamos 👋'
        : 'Sistemas ASRS y Automatización de Almacenes en Argentina | STOKA';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="min-h-screen relative text-white selection:bg-cyan-400 selection:text-slate-900 bg-zinc-950">
      <Helmet>
        <title>Sistemas ASRS y Automatización de Almacenes en Argentina | STOKA</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Sistemas ASRS, robots y software WMS/WCS para automatización de almacenes en Argentina. Tecnología DELIE, integración local STOKA. 30-50% más económico que Europa." />
        <meta property="og:title" content="Sistemas ASRS y Automatización de Almacenes en Argentina | STOKA" />
        <meta property="og:description" content="Sistemas ASRS, robots y software WMS/WCS para automatización de almacenes en Argentina. Tecnología DELIE, integración local STOKA. 30-50% más económico que Europa." />
        <meta property="og:image" content="https://www.stokagroup.com/stoka_deliecn_logo_sin_fondo.png" />
        <meta property="og:url" content="https://www.stokagroup.com/" />
        <link rel="canonical" href="https://www.stokagroup.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "STOKA — Automatización de Almacenes",
          "url": "https://www.stokagroup.com",
          "description": "Representantes oficiales exclusivos de DELIE en Argentina. Sistemas ASRS y automatización de almacenes.",
          "publisher": { "@type": "Organization", "name": "STOKA" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
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

      {/* SEO content block — home */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Header + stats */}
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">STOKA · Representantes DELIE en Argentina</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-3 max-w-3xl">Automatización de almacenes, bodegas y depósitos industriales en Argentina y Chile</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
              Representante oficial exclusivo de DELIE — uno de los fabricantes de sistemas ASRS de mayor escala global. Ingeniería, instalación y soporte 100% local en Argentina y Chile.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {[
                { label: '+1.000', desc: 'Instalaciones globales DELIE' },
                { label: '+30',    desc: 'Países con presencia' },
                { label: '40 m',   desc: 'Altura máx. de rack' },
                { label: 'CMMI 5', desc: 'Certificación software WMS/WCS' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-center">
                  <p className="text-xl font-black text-cyan-500 leading-none mb-1">{s.label}</p>
                  <p className="text-gray-400 text-[11px] leading-tight">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3 desafíos resueltos */}
          <div>
            <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-5">3 desafíos históricos · 3 soluciones concretas</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { num: '01', challenge: 'Costo de importación', solution: 'El Decreto 513/2025 elimina los aranceles para sistemas ASRS — ahorro del 12% al 18% sobre el valor del equipo.' },
                { num: '02', challenge: 'Sin soporte técnico local', solution: 'El equipo de ingeniería de STOKA está en Argentina para proyecto, instalación y posventa. No hay intermediarios.' },
                { num: '03', challenge: 'Incertidumbre regulatoria', solution: 'El RIGI ofrece 30 años de estabilidad fiscal. El RIMI permite amortizar el 100% del bien en el primer ejercicio.' },
              ].map((item) => (
                <div key={item.num} className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
                  <span className="text-[10px] font-black text-gray-300 font-mono">//{item.num}</span>
                  <p className="font-black text-gray-900 text-sm uppercase tracking-tight mt-2 mb-2">{item.challenge}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Equipos + ROI */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Equipos */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
              <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">Sistemas que instalamos</p>
              <div className="flex flex-wrap gap-2">
                {['ASRS alta densidad 7–40 m', 'Transelevador MiniLoad', 'Transelevador de paletas', 'Robot shuttle 2 vías', 'Robot shuttle 4 vías', 'VLM', 'Carrusel vertical', 'Transportador de cadena', 'Transportador de rodillos', 'Paletizador automático', 'WMS', 'WCS', 'HMS'].map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Proceso y ROI */}
            <div className="rounded-2xl bg-slate-900 p-6 flex flex-col gap-5">
              <div>
                <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase mb-2">Retorno de inversión típico</p>
                <p className="text-4xl font-black text-white leading-none">18–36 <span className="text-lg font-bold text-gray-400">meses</span></p>
                <p className="text-gray-400 text-xs mt-1">Primera consulta sin costo · Respuesta en menos de 24 hs</p>
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <p className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase mb-3">Nuestro proceso</p>
                {['Diagnóstico de throughput y perfil de SKUs', 'Análisis de picos y restricciones de layout', 'TCO a 10 años con supuestos verificables', 'Simulación de flujos y ROI proyectado'].map((step, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-black text-xs mt-0.5 shrink-0">{i + 1}.</span>
                    <p className="text-gray-300 text-xs leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contexto fiscal */}
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-6">
            <p className="text-[10px] font-mono text-cyan-600 tracking-[0.4em] uppercase mb-4">Contexto fiscal · Argentina 2026</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Decreto 513/2025', detail: 'Aranceles reducidos o nulos para equipos ASRS · ahorro del 12% al 18%' },
                { label: 'RIMI · Ley 27.802', detail: 'Amortización del bien de capital en el primer ejercicio fiscal' },
                { label: 'Línea BICE', detail: 'Hasta 80% de financiamiento a 10 años · cuota menor al costo laboral reemplazado' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1 rounded-full bg-cyan-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/beneficios-fiscales" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-500 mt-5 transition-colors">
              Ver guía completa de beneficios fiscales <span>›</span>
            </Link>
          </div>

          {/* Chile */}
          <div>
            <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-5">Operaciones en Chile</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { ind: 'Minería', desc: 'Bodegas de repuestos en zonas remotas con acceso restringido. Alta densidad, inventario crítico.' },
                { ind: 'Vitivinícola', desc: 'Almacenes de alta densidad sin ampliar footprint. FIFO y trazabilidad por lote y añada.' },
                { ind: 'Agroindustria exportadora', desc: 'Cadena de frío con FIFO automático para certificación de origen. Cumplimiento normativa fitosanitaria.' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 p-5">
                  <p className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{item.ind}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">Los sistemas DELIE cumplen normativas locales de Chile en seguridad eléctrica e importación de bienes de capital.</p>
          </div>

          {/* Links útiles */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
            {[
              { to: '/casos-de-exito', label: 'Casos de éxito reales' },
              { to: '/recursos/glosario', label: 'Glosario técnico' },
              { to: '/recursos/comparador-sistemas', label: 'Comparador de sistemas' },
              { to: '/beneficios-fiscales', label: 'Beneficios fiscales 2026' },
            ].map((l) => (
              <Link key={l.to} to={l.to}
                className="text-xs font-bold text-gray-500 hover:text-cyan-600 border border-gray-200 hover:border-cyan-300 px-4 py-2 rounded-full transition-all">
                {l.label}
              </Link>
            ))}
          </div>

        </div>
      </section>

      <CTABanner />
      <WppFloat />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/catalogo/asrs" element={<CatalogoASRSPage />} />
        <Route path="/catalogo/robots-manipulacion" element={<CatalogoRobotsPage />} />
        <Route path="/catalogo/almacenamiento-vertical" element={<CatalogoVerticalPage />} />
        <Route path="/catalogo/equipo-transporte" element={<CatalogoTransportePage />} />
        <Route path="/catalogo/software" element={<CatalogoSoftwarePage />} />
        <Route path="/catalogo/:categoria/:producto" element={<ProductoPage />} />
        <Route path="/soluciones" element={<SolucionesPage />} />
        <Route path="/industrias" element={<IndustriasPage />} />
        <Route path="/industrias/:slug" element={<IndustriaDetailPage />} />
        <Route path="/beneficios-fiscales" element={<BeneficiosFiscalesPage />} />
        <Route path="/como-trabajamos" element={<ComoTrabajamosPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/delie-argentina" element={<AlternativaDeliePage />} />
        <Route path="/alternativa-delie-argentina" element={<AlternativaDeliePage />} />
        <Route path="/casos-de-exito" element={<CasosDeExitoPage />} />
        <Route path="/recursos" element={<RecursosHub />} />
        <Route path="/recursos/glosario" element={<GlosarioPage />} />
        <Route path="/recursos/comparador-sistemas" element={<ComparadorPage />} />
        <Route path="/recursos/:slug" element={<ArticuloPage />} />
      </Routes>
      <LeadPopup />
    </>
  );
}

export default App;

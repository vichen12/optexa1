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
import { AlternativaDaifukuPage } from './pages/AlternativaDaifukuPage';
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
        : 'Automatización de Almacenes Argentina | Sistemas ASRS DELIE | STOKA';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="min-h-screen relative text-white selection:bg-cyan-400 selection:text-slate-900 bg-zinc-950">
      <Helmet>
        <title>Automatización de Almacenes Argentina | Sistemas ASRS DELIE | STOKA</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Representantes oficiales de DELIE en Argentina y Chile. Sistemas ASRS, transelevadores, robots AMR y software WMS/WCS para automatización de almacenes industriales y centros de distribución." />
        <meta property="og:title" content="Automatización de Almacenes Argentina | Sistemas ASRS DELIE | STOKA" />
        <meta property="og:description" content="Representantes oficiales de DELIE en Argentina y Chile. Sistemas ASRS, transelevadores, robots AMR y software WMS/WCS para automatización de almacenes." />
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

      {/* SEO text block — home */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12">
            <div>
              <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">STOKA · Representantes DELIE en Argentina</p>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-6">Automatización de almacenes, bodegas y depósitos industriales en Argentina y Chile</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                STOKA es el representante oficial exclusivo de DELIE en Argentina y Chile. DELIE es uno de los fabricantes de sistemas ASRS de mayor escala global: más de 1.000 instalaciones en 30 países, transelevadores de hasta 40 metros, robots lanzadera de 4 vías, módulos VLM y software WMS/WCS certificado CMMI Nivel 5. STOKA lleva esa tecnología a los almacenes y bodegas industriales de la región con ingeniería, instalación y soporte técnico 100% local.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                La automatización de depósitos y almacenes en Argentina enfrenta tres desafíos históricos: el costo de importación de equipos, la falta de soporte técnico local y la incertidumbre regulatoria. STOKA resuelve los tres: el Decreto 513/2025 elimina los aranceles de importación para sistemas ASRS; el equipo de ingeniería de STOKA está en Argentina para proyecto, instalación y posventa; y el RIGI ofrece 30 años de estabilidad fiscal para proteger la inversión.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los sistemas que instalamos en almacenes, bodegas y depósitos de Argentina y Chile incluyen: estanterías AS/RS de alta densidad de 7 a 40 metros, transelevadores MiniLoad y de paletas, robots lanzadera y shuttle de 2 y 4 vías, módulos de elevación vertical (VLM), carruseles verticales, transportadores de cadena y rodillos, paletizadores automáticos, y software WMS, WCS y HMS para control total de la operación logística.
              </p>
              <p className="text-gray-600 leading-relaxed">
                El ROI típico en proyectos de automatización de almacenes industriales en Argentina está entre 18 y 36 meses. La primera consulta es sin costo: un ingeniero especializado analiza tu operación y te responde en menos de 24 horas con una orientación técnica inicial.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                La decisión de automatizar un almacén, bodega o depósito es estratégica: define la capacidad operativa de la empresa durante 15 a 20 años. Por eso el proceso de venta de STOKA empieza siempre con un diagnóstico, no con una propuesta. Analizamos el throughput real, el perfil de SKUs, los picos de demanda y las restricciones del layout existente antes de recomendar cualquier tecnología. Las soluciones se presentan con TCO a 10 años, simulación de flujos y ROI proyectado con supuestos transparentes y verificables.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                El contexto fiscal de 2025 y 2026 es excepcionalmente favorable para invertir en automatización en Argentina. El Decreto 513/2025 elimina el arancel de importación para equipos ASRS (ahorro del 12% al 18% sobre el valor del equipo). El RIMI (Ley 27.802) permite amortizar el 100% del bien de capital en el primer ejercicio, reduciendo la carga impositiva del año de la inversión. La línea BICE financia hasta el 80% del proyecto a 10 años con tasa preferencial. En proyectos bien estructurados, la cuota mensual del financiamiento queda por debajo del costo laboral mensual que la automatización reemplaza: el sistema se paga solo.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                En Chile, STOKA opera con equipo de ingeniería local en todo el territorio. Las industrias de mayor demanda en Chile son la minera (bodegas de repuestos en zonas remotas), la vitivinícola (almacenes de alta densidad sin ampliar footprint) y la agroindustria exportadora (cadena de frío con FIFO automático para certificación de origen). Los sistemas DELIE cumplen con las normativas locales de Chile tanto en seguridad eléctrica como en requisitos de importación de bienes de capital.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: '+1.000', desc: 'Instalaciones globales DELIE' },
                { label: '+30', desc: 'Países con presencia DELIE' },
                { label: '40m', desc: 'Altura máx. de instalación' },
                { label: '0%', desc: 'Arancel importación (Decreto 513/2025)' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
                  <p className="text-2xl font-black text-cyan-500 leading-none mb-1">{s.label}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">{s.desc}</p>
                </div>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Recursos útiles</p>
                <div className="space-y-2">
                  {[
                    { to: '/casos-de-exito', label: 'Casos de éxito reales' },
                    { to: '/recursos/glosario', label: 'Glosario técnico' },
                    { to: '/recursos/comparador-sistemas', label: 'Comparador de sistemas' },
                    { to: '/beneficios-fiscales', label: 'Beneficios fiscales 2026' },
                  ].map((l) => (
                    <Link key={l.to} to={l.to}
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-cyan-600 transition-colors">
                      <span className="text-cyan-400 text-xs">›</span>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
        <Route path="/catalogo/asrs/unit-load" element={<ProductoPage />} />
        <Route path="/catalogo/asrs/miniload" element={<ProductoPage />} />
        <Route path="/catalogo/asrs/shuttle" element={<ProductoPage />} />
        <Route path="/catalogo/asrs/camara-frio" element={<ProductoPage />} />
        <Route path="/catalogo/robots-manipulacion" element={<CatalogoRobotsPage />} />
        <Route path="/catalogo/robots-manipulacion/paletizado" element={<ProductoPage />} />
        <Route path="/catalogo/robots-manipulacion/picking" element={<ProductoPage />} />
        <Route path="/catalogo/robots-manipulacion/agv-amr" element={<ProductoPage />} />
        <Route path="/catalogo/almacenamiento-vertical" element={<CatalogoVerticalPage />} />
        <Route path="/catalogo/almacenamiento-vertical/vlm" element={<ProductoPage />} />
        <Route path="/catalogo/almacenamiento-vertical/carruseles" element={<ProductoPage />} />
        <Route path="/catalogo/equipo-transporte" element={<CatalogoTransportePage />} />
        <Route path="/catalogo/equipo-transporte/transportadores" element={<ProductoPage />} />
        <Route path="/catalogo/equipo-transporte/sorters" element={<ProductoPage />} />
        <Route path="/catalogo/software" element={<CatalogoSoftwarePage />} />
        <Route path="/catalogo/software/wms" element={<ProductoPage />} />
        <Route path="/catalogo/software/wcs" element={<ProductoPage />} />
        <Route path="/soluciones" element={<SolucionesPage />} />
        <Route path="/industrias" element={<IndustriasPage />} />
        <Route path="/industrias/:slug" element={<IndustriaDetailPage />} />
        <Route path="/beneficios-fiscales" element={<BeneficiosFiscalesPage />} />
        <Route path="/como-trabajamos" element={<ComoTrabajamosPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/alternativa-daifuku-argentina" element={<AlternativaDaifukuPage />} />
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

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Route path="/soluciones" element={<SolucionesPage />} />
        <Route path="/industrias" element={<IndustriasPage />} />
        <Route path="/industrias/:slug" element={<IndustriaDetailPage />} />
        <Route path="/beneficios-fiscales" element={<BeneficiosFiscalesPage />} />
        <Route path="/como-trabajamos" element={<ComoTrabajamosPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <LeadPopup />
    </>
  );
}

export default App;

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

function HomePage() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.visibilityState === 'hidden'
        ? '¡Volvé! Te esperamos 👋'
        : 'STOKA — Automatización de Almacenes DELIE en Argentina';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="min-h-screen relative text-white selection:bg-cyan-400 selection:text-slate-900 bg-zinc-950">
      <Helmet>
        <title>STOKA | Sistemas ASRS y Automatización de Almacenes — Argentina y Chile</title>
        <meta name="description" content="Representantes oficiales de DELIE en Argentina y Chile. Sistemas ASRS, transelevadores, robots AMR y software WMS/WCS para automatización de almacenes industriales y centros de distribución." />
        <meta property="og:title" content="STOKA | Sistemas ASRS y Automatización de Almacenes — Argentina y Chile" />
        <meta property="og:description" content="Representantes oficiales de DELIE en Argentina y Chile. Sistemas ASRS, transelevadores, robots AMR y software WMS/WCS para automatización de almacenes." />
        <meta property="og:image" content="https://www.stokagroup.com/OPTEXACONFONDOBLANCO.png" />
        <meta property="og:url" content="https://www.stokagroup.com/" />
        <link rel="canonical" href="https://www.stokagroup.com/" />
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
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

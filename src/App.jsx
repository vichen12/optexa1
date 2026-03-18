import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from './lib/i18n';
import { Navbar } from './components/Navbar';
import { TrustedBy } from './components/TrustedBy';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';
import { SystemTypes } from './components/SystemTypes';
import { Hero } from './components/hero';
import { Contact } from './components/contact';
import { About } from './components/about';
import { WppFloat } from './components/WppFloat';
import { LangFloat } from './components/LangFloat';
import { ImpactStats } from './components/ImpactStats';
import { ScrollTracker } from './components/ScrollTracker';

function App() {

  useEffect(() => {
    const originalTitle = "STOKA | Tecnología ASRS";
    const handleVisibilityChange = () => {
      document.title = document.visibilityState === 'hidden'
        ? "¡Volvé! Te esperamos"
        : originalTitle;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen relative text-white selection:bg-cyan-500 selection:text-white">

        <div className="fun-bg">
          <div className="light-orb orb-1"></div>
          <div className="light-orb orb-2"></div>
        </div>

        <Navbar />
        <ScrollTracker />

        <main className="relative z-10">
          <section id="inicio">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Hero />
            </motion.div>
          </section>

          {/* Todas las secciones post-hero */}
          <div>
            <section id="impacto">
              <ImpactStats />
            </section>

            <section id="soluciones">
              <Portfolio />
            </section>

            <section id="tecnologia">
              <SystemTypes />
            </section>

            <section id="proceso">
              <Process />
            </section>

            <section id="equipo">
              <About />
            </section>

            <section id="trusted">
              <TrustedBy />
            </section>

            <section id="contacto">
              <Contact />
            </section>
          </div>
        </main>

        <WppFloat />
        <LangFloat />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

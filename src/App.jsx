import { useEffect } from 'react';
import { motion } from 'framer-motion'; 
import { Navbar } from './components/Navbar';
import { TrustedBy } from './components/TrustedBy';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { SolutionsDeck } from './components/SolutionsDeck';
import { Hero } from './components/hero'; 
import { Contact } from './components/contact'; 
import { Services } from './components/services'; 
import { About } from './components/about';
import { WppFloat } from './components/WppFloat';
import { ScrollTracker } from './components/ScrollTracker';

function App() {
  
  useEffect(() => {
    const originalTitle = "Optexa | Ingeniería Robótica";
    
    const handleVisibilityChange = () => {
      document.title = document.visibilityState === 'hidden' 
        ? "¡Volvé! Te extrañamos 🤖" 
        : originalTitle;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="min-h-screen relative text-white selection:bg-cyan-500 selection:text-white">
      
      {/* FONDO DE ORBES ORIGINAL */}
      <div className="fun-bg">
        <div className="light-orb orb-1"></div>
        <div className="light-orb orb-2"></div>
      </div>

      <Navbar />

      {/* Seguidor de Scroll (Telemetría) */}
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

        <section id="trusted">
          <TrustedBy />
        </section>

        <section id="soluciones">
          <SolutionsDeck />
        </section>

        <section id="showcase">
          <Services />
        </section>

        <section id="proceso">
          <Process />
        </section>

        <section id="equipo">
          <About />
        </section>
  
        <section id="contacto">
          <Contact />
        </section>
      </main>

      <WppFloat /> 

      <Footer />
    </div>
  );
}

export default App;
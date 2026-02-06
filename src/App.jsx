import { Navbar } from './components/Navbar';
import { TrustedBy } from './components/TrustedBy';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { SolutionsDeck } from './components/SolutionsDeck';
import { Hero } from './components/hero';
import { Contact } from './components/contact';
import { Services } from './components/services';

function App() {
  return (
    <div className="min-h-screen relative text-white selection:bg-optexa-cyan selection:text-white">
      
      {/* --- EL FONDO ANIMADO --- */}
      <div className="fun-bg">
        {/* Usamos las clases que definimos en el CSS anteriormente */}
        <div className="light-orb orb-1"></div>
        <div className="light-orb orb-2"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        {/* SECCIÓN INICIO */}
        <section id="inicio">
          <Hero />
        </section>

        {/* SECCIÓN EMPRESAS */}
        <section id="trusted">
          <TrustedBy />
        </section>

        {/* SECCIÓN SOLUCIONES (EL MAZO HOLOGRÁFICO) */}
        <section id="soluciones">
          <SolutionsDeck />
        </section>

        {/* SECCIÓN MODELOS (EL CATÁLOGO 3D) */}
        <section id="showcase">
          <Services />
        </section>

        {/* SECCIÓN PROCESO (EL WORKFLOW ACTIVO) */}
        <section id="proceso">
          <Process />
        </section>

        {/* SECCIÓN CONTACTO */}
        <section id="contacto">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
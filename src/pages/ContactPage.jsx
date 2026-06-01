import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Contact } from '../components/contact';
import { WppFloat } from '../components/WppFloat';

export const ContactPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contacto | Consultoría en Automatización de Almacenes ASRS | STOKA Argentina</title>
        <meta name="description" content="Consultá sin costo. Ingenieros especializados en ASRS responden en 24 horas. Soluciones de automatización de almacenes para empresas en Argentina y Chile." />
        <meta property="og:title" content="Contacto | Consultoría ASRS sin costo | STOKA Argentina" />
        <meta property="og:description" content="Ingenieros especializados en ASRS responden en 24 horas. Soluciones de automatización de almacenes para Argentina y Chile." />
        <meta property="og:url" content="https://www.stokagroup.com/contacto" />
        <link rel="canonical" href="https://www.stokagroup.com/contacto" />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <WppFloat />
      <Footer />
    </div>
  );
};

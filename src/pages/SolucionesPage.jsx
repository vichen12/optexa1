import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { ProductCatalog } from '../components/ProductCatalog';
import { WppFloat } from '../components/WppFloat';

export const SolucionesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Helmet>
        <title>Soluciones ASRS | Automatización de Almacenes con Tecnología DELIE | STOKA Argentina</title>
        <meta name="description" content="Soluciones llave en mano para automatización de almacenes: sistemas ASRS, transelevadores, robots shuttle, VLM y software WMS/WCS. Representantes oficiales de DELIE en Argentina y Chile." />
        <meta property="og:title" content="Soluciones ASRS | Automatización de Almacenes | STOKA Argentina y Chile" />
        <meta property="og:description" content="Soluciones llave en mano: sistemas ASRS, transelevadores, robots shuttle, VLM y software WMS/WCS. Representantes DELIE en Argentina y Chile." />
        <meta property="og:url" content="https://www.stokagroup.com/soluciones" />
        <link rel="canonical" href="https://www.stokagroup.com/soluciones" />
      </Helmet>
      <Navbar />
      <div className="pt-28">
        <ProductCatalog />
      </div>
      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Soluciones ASRS | Automatización de Almacenes | STOKA Argentina y Chile" />
        <meta property="og:description" content="Soluciones llave en mano: sistemas ASRS, transelevadores, robots shuttle, VLM y software WMS/WCS. Representantes DELIE en Argentina y Chile." />
        <meta property="og:url" content="https://www.stokagroup.com/soluciones" />
        <link rel="canonical" href="https://www.stokagroup.com/soluciones" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Soluciones", "item": "https://www.stokagroup.com/soluciones" }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      <div className="pt-28 px-6 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-gray-400">Soluciones</span>
        </nav>
      </div>
      <div className="pt-2">
        <ProductCatalog />
      </div>
      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

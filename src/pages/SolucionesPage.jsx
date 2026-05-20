import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { ProductCatalog } from '../components/ProductCatalog';
import { WppFloat } from '../components/WppFloat';

export const SolucionesPage = () => {
  useEffect(() => {
    document.title = 'Soluciones ASRS — Catálogo DELIE | STOKA Argentina';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
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

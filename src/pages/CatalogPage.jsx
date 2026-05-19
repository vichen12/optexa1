import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProductCatalog } from '../components/ProductCatalog';
import { WppFloat } from '../components/WppFloat';

export const CatalogPage = () => {
  useEffect(() => {
    document.title = 'Catálogo de Productos DELIE | Optexa Argentina';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="pt-28">
        <ProductCatalog />
      </div>
      <WppFloat />
      <Footer />
    </div>
  );
};

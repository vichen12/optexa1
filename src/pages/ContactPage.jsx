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
        <title>Cotizar Sistema ASRS Argentina | Presupuesto | STOKA</title>
        <meta name="description" content="Cotizá tu sistema ASRS en Argentina. Ingenieros especializados responden en 24 horas. Presupuesto técnico sin costo para tu almacén, bodega o depósito." />
        <meta property="og:title" content="Cotizar ASRS | Proveedores Automatización Almacenes Argentina | STOKA" />
        <meta property="og:description" content="Cotizá tu proyecto de automatización de almacén con STOKA, integradores WMS y representantes DELIE en Argentina. Respuesta técnica en 24 horas." />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.stokagroup.com/contacto" />
        <link rel="canonical" href="https://www.stokagroup.com/contacto" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://www.stokagroup.com/contacto" }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      <div className="bg-white mt-20">
        <Contact />
      </div>
      <WppFloat />
      <Footer />
    </div>
  );
};

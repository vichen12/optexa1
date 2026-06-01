import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { ProductCatalog } from '../components/ProductCatalog';
import { WppFloat } from '../components/WppFloat';

export const CatalogPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>Catálogo ASRS | Transelevadores, Robots Shuttle, VLM y WMS | STOKA Argentina</title>
        <meta name="description" content="Catálogo completo de sistemas ASRS DELIE: transelevadores de paletas y miniload, robots shuttle 4 vías, almacenamiento vertical (VLM), robots AMR y software WMS/WCS para automatización de almacenes." />
        <meta property="og:title" content="Catálogo ASRS | Transelevadores, Robots Shuttle, VLM y WMS | STOKA Argentina" />
        <meta property="og:description" content="Catálogo completo de sistemas ASRS DELIE: transelevadores, robots shuttle, almacenamiento vertical y software WMS para Argentina y Chile." />
        <meta property="og:url" content="https://www.stokagroup.com/catalogo" />
        <link rel="canonical" href="https://www.stokagroup.com/catalogo" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        {/* Background image */}
        <img
          src="/WhatsApp Image 2026-05-19 at 12.19.03.jpeg"
          alt="Almacén automatizado STOKA"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark gradient overlay — strong left, fades right */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        {/* Extra bottom darkening so text always readable */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />

        {/* Cyan accent line top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">
              Representantes oficiales DELIE · Argentina
            </p>

            {/* Headline */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              Catálogo de<br />
              <span className="text-cyan-400">Automatización</span>
            </h1>

            {/* Subline */}
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Sistemas AS/RS, almacenamiento vertical, robots y software de clase mundial — con soporte local en Argentina.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '5', label: 'Categorías' },
                { value: '+60', label: 'Productos' },
                { value: '+1.000', label: 'Proyectos globales' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-black text-white italic">{s.value}</span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      {/* CATALOG */}
      <ProductCatalog />

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

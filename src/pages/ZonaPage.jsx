import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { LangLink } from '../lib/i18n-utils';
import { SeoHead } from '../lib/SeoHead';

/* Imágenes reutilizables por sector (genéricas DELIE; no son contenido textual). */
const SECTOR_IMAGES = [
  '/productos-delie/asrs/Transelevador%20Gr%C3%BAa%20+%20Estanter%C3%ADa%20Robot%20Lanzadera/pallet-stacker-crane-shuttle-robot-racking89e90.webp',
  '/productos-delie/almacenamiento-vertical/Carrusel%20vertical%20inteligente%20para%20almacenamiento%20automatizado%20de%20alta-densidad/2025112714330825019.webp',
  '/productos-delie/robots-manipulacion/Robot%20transportador%20de%20paletas%20de%20almacenamiento%20en%20fr%C3%ADo/cold-storage-pallet-shuttle-robot3e9c9.webp',
];

const PHOTO_STRIP = [
  '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20un%20solo%20m%C3%A1stil/single-mast-pallet-stacker-crane92251.jpg',
  '/productos-delie/asrs/Estanter%C3%ADas%20robóticas%20con%20lanzadera%20para%20palés/pallet-shuttle-robot-racking13c59.webp',
  '/productos-delie/robots-manipulacion/Gr%C3%BAa%20apiladora%20de%20paletas%20de%20doble-m%C3%A1stil/double-mast-pallet-stacker-crane202510151146372d8c5.webp',
];

/* Cada zona define sus propios system URLs reutilizando el catálogo existente. */
const SYSTEM_URLS = [
  '/catalogo/almacenamiento-vertical',
  '/catalogo/asrs',
  '/catalogo/software',
  '/catalogo/equipo-transporte',
];

/* Página genérica de zona geográfica. El contenido viene de pages.zonas.<zona>,
   propio por región (sin duplicar) en es/en/zh. */
export const ZonaPage = ({ zona }) => {
  const { t, i18n } = useTranslation();
  const ns = `pages.zonas.${zona}`;
  const basePath = `/automatizacion-almacenes-${zona}`;
  const canonical = `https://www.stokagroup.com${basePath}`;

  const stats = t(`${ns}.stats`, { returnObjects: true });
  const whyItems = t(`${ns}.whyItems`, { returnObjects: true });
  const sectors = t(`${ns}.sectors`, { returnObjects: true });
  const systems = t(`${ns}.systems`, { returnObjects: true });
  const faq = t(`${ns}.faq`, { returnObjects: true });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t(`${ns}.breadcrumbHome`), "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": t(`${ns}.breadcrumbLabel`), "item": canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": i18n.language,
    "mainEntity": Array.isArray(faq) ? faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    })) : [],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t(`${ns}.metaTitle`),
    "description": t(`${ns}.metaDesc`),
    "inLanguage": i18n.language,
    "provider": { "@id": "https://www.stokagroup.com/#organization" },
    "areaServed": { "@type": "City", "name": t(`${ns}.areaName`) },
    "serviceType": "Warehouse Automation — ASRS",
    "url": canonical,
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SeoHead
        title={t(`${ns}.metaTitle`)}
        description={t(`${ns}.metaDesc`)}
        basePath={basePath}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-white pt-36 pb-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={13} className="text-cyan-500" />
            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.5em]">
              {t(`${ns}.heroTag`)}
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6"
          >
            {t(`${ns}.heroH1_a`)}<br />
            <span className="text-cyan-500">{t(`${ns}.heroH1_b`)}</span>
          </motion.h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {t(`${ns}.heroSub`)}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <LangLink
              to="/contacto"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-[0_4px_20px_rgba(6,182,212,0.25)]"
            >
              <Phone size={15} /> {t(`${ns}.heroBtnPrimary`)}
            </LangLink>
            <LangLink
              to="/catalogo"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-cyan-300 text-gray-600 hover:text-gray-900 font-medium px-6 py-3 rounded-xl transition-colors"
            >
              {t(`${ns}.heroBtnSecondary`)} <ArrowRight size={14} />
            </LangLink>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.isArray(stats) && stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-5 text-center"
            >
              <p className="text-3xl font-black text-cyan-500 mb-1">{s.v}</p>
              <p className="text-xs text-gray-500 leading-snug">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photo strip */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
          {PHOTO_STRIP.map((src, i) => (
            <div key={i} className="relative h-44 overflow-hidden rounded-xl border border-gray-100">
              <img loading="lazy" src={src} alt={t(`${ns}.breadcrumbLabel`)} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/30 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Intro SEO — texto propio por región */}
      <section className="bg-white pb-4 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-5">{t(`${ns}.introH2`)}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{t(`${ns}.introP1`)}</p>
          <p className="text-gray-600 leading-relaxed">{t(`${ns}.introP2`)}</p>
        </div>
      </section>

      {/* Why STOKA en la zona */}
      <section className="bg-gray-50 border-y border-gray-100 py-14 px-6 mt-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.whyTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{t(`${ns}.whyH2`)}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(whyItems) && whyItems.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-4 py-4">
                <CheckCircle size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.sectorsTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{t(`${ns}.sectorsH2`)}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {Array.isArray(sectors) && sectors.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <LangLink
                  to={s.url}
                  className="group flex flex-col h-full bg-white border border-gray-200 hover:border-cyan-300 rounded-2xl overflow-hidden transition-colors shadow-sm"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img loading="lazy"
                      src={SECTOR_IMAGES[i % SECTOR_IMAGES.length]}
                      alt={s.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-sm font-black text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed flex-1">{s.desc}</p>
                    <div className="flex items-center gap-1 mt-4 text-cyan-600 text-xs font-medium group-hover:gap-2 transition-all">
                      {t(`${ns}.sectorViewSolution`)} <ArrowRight size={12} />
                    </div>
                  </div>
                </LangLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t(`${ns}.systemsTag`)}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{t(`${ns}.systemsH2`)}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.isArray(systems) && systems.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <LangLink
                  to={SYSTEM_URLS[i % SYSTEM_URLS.length]}
                  className="group flex items-start gap-4 bg-white border border-gray-200 hover:border-cyan-300 rounded-2xl p-5 transition-colors"
                >
                  <ArrowRight size={16} className="text-cyan-500 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <h3 className="text-sm font-black text-gray-900 mb-1">{s.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </LangLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-gray-900 mb-6">{t(`${ns}.faqH2`)}</h2>
          <div className="space-y-3">
            {Array.isArray(faq) && faq.map((f, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                  <ChevronDown size={16} className="text-cyan-500 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LangLink, useLangNavigate } from '../../lib/i18n-utils';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle, Factory, ShoppingCart, Truck, Pill, Snowflake, Mountain, X, ZoomIn, ChevronLeft } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { PRODUCTOS, getProducto } from '../../data/productosData';
import { SeoHead } from '../../lib/SeoHead';

const INDUSTRY_ICONS = {
  'E-commerce y retail': ShoppingCart,
  'Logística 3PL': Truck,
  'Manufactura': Factory,
  'Alimentos y bebidas': Factory,
  'Farmacéutica': Pill,
  'Minería y Oil & Gas': Mountain,
  'Cadena de frío': Snowflake,
};

const INDUSTRY_SLUGS = {
  'E-commerce y retail': 'e-commerce-retail',
  'Logística 3PL': 'logistica-3pl',
  'Manufactura': 'manufactura',
  'Alimentos y bebidas': 'alimentos-bebidas',
  'Farmacéutica': 'farmaceutica',
  'Minería y Oil & Gas': 'mineria-oil-gas',
  'Cadena de frío': 'cadena-frio',
};

export const ProductoPage = () => {
  const { t, i18n } = useTranslation();
  const p = (k) => t(`pages.producto.${k}`, { returnObjects: true });
  const { categoria, producto } = useParams();
  const langNavigate = useLangNavigate();
  const key = `${categoria}/${producto}`;
  const data = getProducto(key, i18n.language);
  // Industrias en español (ficha base) para resolver icono/slug por índice,
  // independientemente del idioma en que se muestre el texto.
  const industriasBase = PRODUCTOS[key]?.industrias || [];
  const [lightboxIdx, setLightboxIdx] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [key]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') setLightboxIdx(i => i !== null ? Math.min(i + 1, (PRODUCTOS[key]?.images?.length ?? 0)) : null);
      if (e.key === 'ArrowLeft') setLightboxIdx(i => i !== null ? Math.max(i - 1, 0) : null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [key]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <p className="text-cyan-400 font-mono text-sm mb-4">404</p>
          <h1 className="text-3xl font-black mb-4">{p('notFound')}</h1>
          <button onClick={() => langNavigate('/catalogo')} className="px-6 py-3 bg-cyan-500 rounded-xl font-bold">
            {p('verCatalogo')}
          </button>
        </div>
      </div>
    );
  }

  const baseUrl = 'https://www.stokagroup.com';
  const canonicalUrl = `${baseUrl}/catalogo/${data.categoria}/${data.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": `${baseUrl}/catalogo` },
      { "@type": "ListItem", "position": 3, "name": data.categoriaLabel, "item": `${baseUrl}${data.categoriaUrl}` },
      { "@type": "ListItem", "position": 4, "name": data.nombre, "item": canonicalUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.nombre,
    "description": data.metaDesc,
    "provider": { "@id": `${baseUrl}/#organization` },
    "brand": { "@type": "Brand", "name": "DELIE" },
    "areaServed": [
      { "@type": "Country", "name": "Argentina" },
      { "@type": "Country", "name": "Chile" },
    ],
    "serviceType": "Automatización de almacenes industriales",
    "url": canonicalUrl,
    "inLanguage": i18n.language,
  };

  // URL absoluta de la imagen para Product/OG (heroImg viene como ruta relativa)
  const absImg = data.heroImg
    ? (data.heroImg.startsWith('http') ? data.heroImg : `${baseUrl}${data.heroImg}`)
    : `${baseUrl}/stoka_og_image_1200x630.png`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.nombre,
    "description": data.metaDesc,
    "image": absImg,
    "brand": { "@type": "Brand", "name": "DELIE" },
    "category": data.categoriaLabel,
    "url": canonicalUrl,
    "inLanguage": i18n.language,
    "manufacturer": { "@type": "Organization", "name": "DELIE" },
    // Sin precio público: ofertamos consulta/cotización con priceSpecification.
    // Evita el warning de "missing price" declarando que el precio es a consultar.
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "USD",
      "price": "0",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": false,
      },
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": { "@id": `${baseUrl}/#organization` },
      "areaServed": ["AR", "CL"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": i18n.language,
    "mainEntity": data.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <div className="min-h-screen text-gray-900">
      <SeoHead
        title={data.metaTitle}
        description={data.metaDesc}
        ogImage={data.heroImg}
        basePath={`/catalogo/${data.categoria}/${data.slug}`}
      />
      <Helmet>
                                                        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      {/* HEADER — texto limpio sin imagen de fondo */}
      <div className="bg-white border-b border-gray-100 mt-20">
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500 mt-20" />
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-12">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap">
            <LangLink to="/" className="hover:text-cyan-500 transition-colors">{p('breadcrumbHome')}</LangLink>
            <ChevronRight size={12} className="text-gray-300" />
            <LangLink to="/catalogo" className="hover:text-cyan-500 transition-colors">{p('breadcrumbCatalog')}</LangLink>
            <ChevronRight size={12} className="text-gray-300" />
            <LangLink to={data.categoriaUrl} className="hover:text-cyan-500 transition-colors">{data.categoriaLabel}</LangLink>
            <ChevronRight size={12} className="text-gray-300" />
            <span className="text-gray-600">{data.nombre}</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-3">
              {data.categoriaLabel} · DELIE · Argentina
            </p>
            <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[1.05] mb-4">
              {data.nombre}
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
              {data.tagline}
            </p>
          </motion.div>
        </div>
      </div>

      {/* MAIN 2-COL: foto izquierda / data derecha */}
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_3fr] gap-10 items-start">

          {/* IZQUIERDA — foto + CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-4 md:sticky md:top-24">
            {(() => {
              const allImgs = [data.heroImg, ...(data.images || [])];
              return (
                <>
                  <div
                    className="relative rounded-2xl overflow-hidden border border-gray-200 cursor-zoom-in group"
                    onClick={() => setLightboxIdx(0)}
                  >
                    <img fetchpriority="high" src={allImgs[0]} alt={data.heroAlt} width="800" height="600" className="w-full object-cover" style={{ aspectRatio: '4/3' }} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </div>
                  </div>
                  {allImgs.length > 1 && (
                    <div className="grid grid-cols-3 gap-2">
                      {allImgs.slice(1).map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-gray-200 cursor-zoom-in group aspect-square"
                          onClick={() => setLightboxIdx(i + 1)}>
                          <img loading="lazy" src={img} alt={`${data.nombre} — foto ${i + 2}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <img loading="lazy" src="/image.png" alt="DELIE" className="h-7 object-contain mb-3" />
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                STOKA es el representante oficial exclusivo de DELIE en Argentina y Chile.
              </p>
              <button onClick={() => langNavigate('/contacto')}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
                {p('consultarWpp')} <ArrowRight size={13} />
              </button>
            </div>
            {/* Industrias */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('industrias')}</p>
              <div className="flex flex-wrap gap-2">
                {data.industrias.map((ind, idx) => {
                  // icono/slug por el nombre ES base (índice estable en los 3 idiomas)
                  const indEs = industriasBase[idx] || ind;
                  const Icon = INDUSTRY_ICONS[indEs] || Factory;
                  const slug = INDUSTRY_SLUGS[indEs];
                  const chip = (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:border-cyan-300 hover:text-cyan-600 transition-all">
                      <Icon size={11} className="text-cyan-500 shrink-0" />
                      {ind}
                    </div>
                  );
                  return slug ? (
                    <LangLink key={idx} to={`/industrias/${slug}`}>{chip}</LangLink>
                  ) : (
                    <div key={idx}>{chip}</div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* DERECHA — descripción + cómo funciona + specs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="space-y-10">

            {/* Descripción */}
            <div>
              <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Descripción técnica</p>
              <p className="text-gray-700 text-base leading-relaxed">{data.descripcion}</p>
            </div>

            {/* Cómo funciona */}
            <div>
              <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Funcionamiento</p>
              <div className="space-y-4">
                {data.comoFunciona.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-cyan-500 font-black text-xs">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-sm uppercase tracking-tight mb-1">{item.titulo}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Especificaciones */}
            <div>
              <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Ficha técnica</p>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <tbody>
                    {data.specs.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-5 py-3 font-bold text-gray-700 w-2/5 border-r border-gray-100 text-xs">{spec.param}</td>
                        <td className="px-5 py-3 text-gray-600 text-xs">{spec.valor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Especificaciones técnicas */}
      <section className="bg-slate-900 py-16 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">Tecnología DELIE en Argentina</p>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">DELIE — representación oficial STOKA</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-5">
            <div className="flex items-start gap-4">
              <CheckCircle size={20} className="text-cyan-400 shrink-0 mt-1" />
              <p className="text-gray-300 text-base leading-relaxed">{data.porQueDelie}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-5">
              DELIE fabrica más de 1.000 instalaciones activas en +30 países. STOKA es el representante
              exclusivo en Argentina: ingeniería, instalación y soporte técnico local sin depender de
              tiempos de fábrica en el exterior. Tecnología de clase mundial, precio para el mercado LATAM.
              {' '}<LangLink to="/delie-argentina" className="text-cyan-400 hover:underline font-medium">
                Ver más sobre DELIE en Argentina →
              </LangLink>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('faqH2')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('faqH2')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.faq.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS RELACIONADOS */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">También te puede interesar</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Productos relacionados</h2>
          <div className="flex flex-wrap gap-3">
            {data.relacionados.map((rel, i) => (
              <LangLink key={i} to={rel.url}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 text-sm font-bold hover:border-cyan-400 hover:text-cyan-600 transition-all">
                {rel.nombre} <ChevronRight size={14} />
              </LangLink>
            ))}
            <LangLink to={data.categoriaUrl}
              className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-50 border border-cyan-200 rounded-xl text-cyan-700 text-sm font-bold hover:bg-cyan-100 transition-all">
              Ver toda la categoría: {data.categoriaLabel} <ChevronRight size={14} />
            </LangLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4">¿Listo para el siguiente paso?</p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-5">
            Consulta técnica<br />
            <span className="text-cyan-500">sin costo</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Un ingeniero de STOKA analiza tu almacén, bodega o depósito y te responde en menos de 24 horas con orientación técnica inicial y estimación de ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => langNavigate('/contacto')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Consultar sobre {data.nombre} <ArrowRight size={14} />
            </button>
            <button onClick={() => langNavigate(data.categoriaUrl)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              Ver categoría completa
            </button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIdx !== null && (() => {
        const allImgs = [data.heroImg, ...(data.images || [])];
        const total = allImgs.length;
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightboxIdx(null)}>
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <img loading="lazy"
                src={allImgs[lightboxIdx]}
                alt="Vista ampliada"
                className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              {/* X — dentro del marco, esquina superior derecha */}
              <button
                onClick={() => setLightboxIdx(null)}
                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black/90 rounded-full transition-colors">
                <X size={18} className="text-white" />
              </button>
              {/* Anterior */}
              {lightboxIdx > 0 && (
                <button
                  onClick={() => setLightboxIdx(i => i - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 rounded-full transition-colors">
                  <ChevronLeft size={20} className="text-white" />
                </button>
              )}
              {/* Siguiente */}
              {lightboxIdx < total - 1 && (
                <button
                  onClick={() => setLightboxIdx(i => i + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 rounded-full transition-colors">
                  <ChevronRight size={20} className="text-white" />
                </button>
              )}
              {/* Contador si hay más de una foto */}
              {total > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 rounded-full text-white text-xs font-bold">
                  {lightboxIdx + 1} / {total}
                </div>
              )}
            </div>
          </div>
        );
      })()}

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

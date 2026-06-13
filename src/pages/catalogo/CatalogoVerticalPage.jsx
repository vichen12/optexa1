import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLangNavigate } from '../../lib/i18n-utils';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SeoHead } from '../../lib/SeoHead';

const seg = (s) => s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@ ]/gu, c => encodeURIComponent(c)).replace(/ /g, '%20');
const img = (prod, file) => `/productos-delie/almacenamiento-vertical/${seg(prod)}/${file}`;

const PRODUCTS = [
  {
    name: 'Carrusel vertical inteligente',
    image: img('Carrusel vertical inteligente para almacenamiento automatizado de alta-densidad', '2025112714330825019.webp'),
    desc: 'Sistema vertical automatizado que circula transportadores internamente para llevar materiales al operario. Altura hasta 17.580 mm, carga máx. por transportador: 180 kg, capacidad total: 6.000 kg.',
    features: ['Altura hasta 17.580 mm', 'Carga máx. 180 kg por transportador', 'Capacidad total 6.000 kg', 'Configurable: ligero, medio o pesado', 'Integrable con WMS/WCS'],
    best_for: 'Alta rotación de SKUs similares. Sectores: manufactura, automotriz, retail.',
    link: '/catalogo/almacenamiento-vertical/carruseles',
  },
  {
    name: 'Módulo de elevación vertical (VLM)',
    image: img('Solución de elevación vertical automatizada de mercancías-a-personas', '20251127144756e3768.webp'),
    desc: 'Solución "mercancías a persona" con extractor inteligente que sitúa materiales en la ventanilla del operario. Ahorra hasta el 90% del espacio de suelo. Compatible con ERP y MES.',
    features: ['Ahorra hasta 90% del espacio de suelo', 'Compatible con ERP y MES', 'Alta precisión por posición absoluta', 'Múltiples ventanillas simultáneas', 'Pesaje integrado y escáner opcionales'],
    best_for: 'Alta variedad de SKUs con picking frecuente. Sectores: farmacéutica, e-commerce, repuestos.',
    link: '/catalogo/almacenamiento-vertical/vlm',
  },
];

const FAQ = [
  { q: '¿Cuándo conviene un VLM y cuándo un carrusel vertical para mi depósito o bodega?', a: 'El VLM conviene cuando tenés alta variedad de SKUs y necesitás acceso aleatorio: cada ciclo podés extraer cualquier bandeja del almacén de forma independiente. El carrusel es más eficiente para SKUs de alta rotación con acceso más secuencial. Para depósitos farmacéuticos, repuestos y e-commerce con muchos SKUs distintos, el VLM es generalmente la mejor opción.' },
  { q: '¿Cuánto espacio de suelo ahorro con un VLM en mi almacén o bodega?', a: 'Típicamente entre el 70% y el 90% comparado con estanterías convencionales. Un VLM de 10 metros de altura ocupa 5-8 m² de superficie y almacena lo equivalente a 30-50 m² de estanterías convencionales. En edificios con altura libre, la densidad de almacenaje por m² de suelo se multiplica entre 4 y 8 veces.' },
  { q: '¿Cómo se integra el VLM con mi ERP o WMS actual?', a: 'Mediante APIs estándar RESTful o la interfaz del WMS de DELIE. Si ya tenés un WMS de terceros (SAP EWM, Manhattan, etc.), el VLM puede operar como subsistema esclavo que recibe órdenes de extracción. Si no tenés WMS, el módulo de DELIE gestiona el inventario del depósito de forma autónoma con integración al ERP.' },
  { q: '¿Puede operar el VLM o carrusel vertical en temperatura controlada?', a: 'El carrusel vertical opera entre -5°C y +40°C, compatible con cámaras de frío positivo. El VLM tiene versiones para entornos entre 2°C y 25°C, ideal para farmacéutica y productos refrigerados. Para frío negativo (bodega de congelados), se recomiendan los transelevadores especializados de la línea AS/RS de DELIE.' },
];

const SISTER_CATS = [
  { label: 'AS/RS', href: '/catalogo/asrs', desc: 'Estanterías automatizadas' },
  { label: 'Robots de manipulación', href: '/catalogo/robots-manipulacion', desc: 'Transelevadores, shuttles y AMR' },
  { label: 'Equipo de transporte', href: '/catalogo/equipo-transporte', desc: 'Conveyors, elevadores y paletizadores' },
  { label: 'Software inteligente', href: '/catalogo/software', desc: 'WMS, WCS y control de almacén' },
];

export const CatalogoVerticalPage = () => {
  const langNavigate = useLangNavigate();
  const { t } = useTranslation();
  const p = (k) => t(`pages.catalogoVertical.${k}`, { returnObjects: true });
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SeoHead
        title={p('metaTitle')}
        description={p('metaDesc')}
        basePath={'/catalogo/almacenamiento-vertical'}
      />
      <Helmet>
                                        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://www.stokagroup.com/catalogo" },
            { "@type": "ListItem", "position": 3, "name": "Almacenamiento vertical", "item": "https://www.stokagroup.com/catalogo/almacenamiento-vertical" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Almacenamiento vertical DELIE — VLM y carruseles",
          "numberOfItems": 2,
          "itemListElement": PRODUCTS.map((p, i) => ({
            "@type": "ListItem", "position": i + 1, "name": p.name, "description": p.desc,
            "url": "https://www.stokagroup.com/catalogo/almacenamiento-vertical"
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Almacenamiento Vertical Automático VLM y Carrusel — DELIE Argentina",
          "description": "Módulos VLM y carruseles verticales DELIE para almacenes en Argentina. Hasta 90% menos espacio de suelo. Goods-to-person automatizado con soporte local.",
          "provider": { "@id": "https://www.stokagroup.com/#organization" },
          "areaServed": [{ "@type": "Country", "name": "Argentina" }, { "@type": "Country", "name": "Chile" }],
          "serviceType": "Almacenamiento Vertical — Automatización de Almacenes",
          "url": "https://www.stokagroup.com/catalogo/almacenamiento-vertical"
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="bg-white border-b border-gray-100 mt-20">
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500 mt-20" />
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5">
              <button onClick={() => langNavigate('/')} className="hover:text-cyan-500 transition-colors">{t('nav.home')}</button>
              <ChevronRight size={12} />
              <button onClick={() => langNavigate('/catalogo')} className="hover:text-cyan-500 transition-colors">{t('nav.catalog')}</button>
              <ChevronRight size={12} />
              <span className="text-cyan-500">{p('breadcrumbCat')}</span>
            </nav>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">{p('heroTag')}</p>
            <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              {p('heroH1_a')}<br />
              <span className="text-cyan-500">{p('heroH1_b')}</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
              {p('heroSub')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* STATS — arriba del catálogo */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-6">
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('statsTag')}</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">{p('statsH2')}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '90%', label: p('stat1Label'), sub: p('stat1Sub') },
              { value: '70%', label: p('stat2Label'), sub: p('stat2Sub') },
              { value: '17,5 m', label: p('stat3Label'), sub: p('stat3Sub') },
              { value: '6.000 kg', label: p('stat4Label'), sub: p('stat4Sub') },
            ].map(s => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center">
                <p className="text-2xl font-black text-gray-900 leading-none mb-1">{s.value}</p>
                <p className="text-[11px] font-bold text-cyan-600 uppercase tracking-wide mb-1">{s.label}</p>
                <p className="text-[11px] text-gray-400 leading-tight">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('catalogTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('catalogH2')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PRODUCTS.map((p, i) => (
              <motion.button key={i} onClick={() => langNavigate(p.link)}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer group w-full">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img loading="lazy" src={p.image} alt={`${p.name} — almacenamiento vertical DELIE`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-cyan-600 transition-colors">{p.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="mb-4">
                    {p.features.map(f => (
                      <div key={f} className="flex items-start gap-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <p className="text-sm text-gray-600">{f}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 flex items-center justify-between">
                    <p className="text-xs text-cyan-700 font-bold">{p.best_for}</p>
                    <ArrowRight size={14} className="text-cyan-500 shrink-0 ml-2" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => langNavigate('/catalogo')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              {p('viewFullCatalog')} <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* DESCRIPCIÓN SEO */}
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">{p('techTag')}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { ...p('techItems')[0], badgeColor: 'bg-violet-50 text-violet-600 border-violet-200' },
                { ...p('techItems')[1], badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
              ].map(item => (
                <div key={item.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
                  <div>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wide border px-2 py-0.5 rounded-full mb-2 ${item.badgeColor}`}>{item.badge}</span>
                    <p className="text-sm font-black text-gray-900">{item.name}</p>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  <p className="text-[11px] font-bold text-cyan-600 border-t border-gray-200 pt-3 mt-auto">{item.best}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">{p('sharedBenefits')}</p>
              <div className="flex flex-wrap gap-2">
                {p('benefitsList').map(b => (
                  <span key={b} className="text-[11px] bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">{b}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">Un VLM de 10 m de altura en una huella de 3×3 m almacena el equivalente a 50 m lineales de estantería convencional.</p>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase">Argentina 2026 — Fiscal</p>
              <div className="space-y-2.5">
                {[
                  { label: 'Decreto 513/2025', desc: 'Arancel 0% en importación de VLM y carruseles' },
                  { label: 'RIMI', desc: 'Amortización acelerada del 100% en el 1er ejercicio' },
                  { label: 'BICE', desc: 'Financiamiento a 10 años con período de gracia' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white">{item.label}</span>
                      <span className="text-xs text-gray-400"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => langNavigate('/beneficios-fiscales')} className="mt-auto text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors border-t border-white/10 pt-4">
                Ver todos los beneficios fiscales <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{t('pages.catalogoVertical.sisterTag', 'Seguir explorando')}</p>
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-6">{t('pages.catalogoVertical.sisterH2', 'Otras categorías del catálogo')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {p('sisterCats').map((c, i) => (
              <button key={i} onClick={() => langNavigate(SISTER_CATS[i].href)}
                className="text-left p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50/50 transition-all group">
                <p className="font-bold text-gray-900 text-sm mb-0.5 group-hover:text-cyan-600 transition-colors">{c.label}</p>
                <p className="text-gray-500 text-xs">{c.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* Explorar por tipo — product child links */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Explorar por tipo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Soluciones de almacenamiento vertical</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { nombre: 'Módulo VLM', desc: 'Hasta 90% menos espacio. Lanzadera de acceso aleatorio.', url: '/catalogo/almacenamiento-vertical/vlm' },
              { nombre: 'Carrusel Vertical', desc: 'La solución más compacta para repuestos y piezas pequeñas.', url: '/catalogo/almacenamiento-vertical/carruseles' },
            ].map((item, i) => (
              <motion.a key={i} href={item.url}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-sm transition-all group block">
                <h3 className="font-black text-gray-900 text-sm mb-2 group-hover:text-cyan-600 transition-colors">{item.nombre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-cyan-500 font-bold">
                  Ver detalle <ChevronRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('faqTag')}</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">{p('faqH2')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {p('faq').map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
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

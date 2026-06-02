import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { ArrowRight, ChevronRight } from 'lucide-react';

const seg = (s) => s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@ ]/gu, c => encodeURIComponent(c)).replace(/ /g, '%20');
const img = (prod, file) => `/productos-delie/asrs/${seg(prod)}/${file}`;

const PRODUCTS = [
  { name: 'Estanterías Pallet Shuttle', image: img('Estanterías robóticas con lanzadera para palés', 'pallet-shuttle-robot-racking13c59.webp'), desc: 'Estanterías de alta densidad para robots lanzadera de paletas. 7 a 40 metros de altura, precisión ±0,1 mm.', link: '/catalogo' },
  { name: 'Estantería Tote Shuttle', image: img('Estantería del robot Tote Shuttle', 'tote-shuttle-robot-racking38678.webp'), desc: 'Para robots tote shuttle bidireccionales y 4 vías. Hasta 40 metros, anticorrosión de silano.', link: '/catalogo' },
  { name: 'Estanterías para grúa apiladora', image: img('Estanterías para grúa apiladora de paletas', 'pallet-stacker-crane-racking598c7.webp'), desc: 'Gran altura para transelevadores y grúas apiladoras. Compatible con grúas de 1 y 2 mástiles.', link: '/catalogo' },
  { name: 'Mini-estantería Flybox', image: img('Mini-estantería Flybox', 'mini-flybox-racking93d5a.webp'), desc: 'Distancia ultra estrecha entre contenedores. Altura 550–12.000 mm. Ideal para e-commerce y farmacéutica.', link: '/catalogo' },
  { name: 'Transelevador + Robot lanzadera', image: img('Transelevador Grúa + Estantería Robot Lanzadera', 'pallet-stacker-crane-shuttle-robot-racking89e90.webp'), desc: 'Sistema combinado de transelevadores y robots lanzadera. Máxima flexibilidad y eficiencia.', link: '/catalogo' },
  { name: 'Estanterías Miniload', image: img('Estanterías Miniload', 'miniload-rackinga0ea0.webp'), desc: 'Para transelevadores MiniLoad, simple y doble profundidad. Alta densidad de contenedores y totes.', link: '/catalogo' },
  { name: 'Estanterías de servicio pesado', image: img('Estanterías de servicio pesado', 'heavy-duty-racking9a1ae.webp'), desc: 'Hasta 2.000 kg por palé. Compatible con frío y trabajo pesado. Anticorrosión de silano.', link: '/catalogo' },
  { name: 'Estanterías push-back', image: img('Estanterías push-para almacenamiento-de alta densidad', 'push-in-racking-for-high-density-storage2a4c0.webp'), desc: 'Alta densidad tipo push-back, sistema LIFO. Compatible con carretillas estándar.', link: '/catalogo' },
  { name: 'Estanterías de entresuelo', image: img('Estanterías de entresuelo', 'mezzanine-racking7da1b.webp'), desc: 'Plataforma elevada sobre estanterías para crear niveles adicionales de almacenamiento.', link: '/catalogo' },
  { name: 'Plataforma de estructura de acero', image: img('Plataforma de estructura de acero', 'steel-structure-platformfb756.webp'), desc: 'Plataforma elevada de acero personalizable para espacio adicional de almacenamiento.', link: '/catalogo' },
  { name: 'Palé de almacenamiento de acero', image: img('Plataforma de almacenamiento de acero', 'steel-storage-palletce853.webp'), desc: 'Palé de acero resistente a humedad, frío y químicos. Compatible con sistemas automáticos.', link: '/catalogo' },
  { name: 'Drive-in racking', image: img('Conducir en estanterías', 'drive-in-rackinga817d.webp'), desc: 'La carretilla ingresa dentro. Hasta 80% de utilización del espacio. Sistema LIFO, apto para frío.', link: '/catalogo' },
];

const SISTER_CATS = [
  { label: 'Robots de manipulación', href: '/catalogo/robots-manipulacion', desc: 'Transelevadores, shuttles y AMR' },
  { label: 'Almacenamiento vertical', href: '/catalogo/almacenamiento-vertical', desc: 'VLM y carruseles inteligentes' },
  { label: 'Equipo de transporte', href: '/catalogo/equipo-transporte', desc: 'Conveyors, elevadores y paletizadores' },
  { label: 'Software inteligente', href: '/catalogo/software', desc: 'WMS, WCS y control de almacén' },
];

export const CatalogoASRSPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>Sistemas AS/RS | Estanterías Automatizadas de 7 a 40m | STOKA Argentina</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Estanterías AS/RS DELIE de 7 a 40 metros de altura. Drive-in, shuttle, mezzanine y rack selectivo automatizado. 30-50% más económico que Europa. Cotizá sin costo." />
        <meta property="og:title" content="Sistemas AS/RS | Estanterías Automatizadas | STOKA Argentina" />
        <meta property="og:description" content="Estanterías AS/RS DELIE de 7 a 40 metros. Drive-in, shuttle, mezzanine. Representantes oficiales en Argentina." />
        <meta property="og:url" content="https://www.stokagroup.com/catalogo/asrs" />
        <link rel="canonical" href="https://www.stokagroup.com/catalogo/asrs" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://www.stokagroup.com/catalogo" },
            { "@type": "ListItem", "position": 3, "name": "AS/RS", "item": "https://www.stokagroup.com/catalogo/asrs" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Sistemas AS/RS DELIE — Estanterías automatizadas",
          "numberOfItems": 12,
          "itemListElement": PRODUCTS.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": p.name,
            "description": p.desc,
            "url": "https://www.stokagroup.com/catalogo/asrs"
          }))
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img src="/catalogo-banner-asrs.jpeg" alt="Sistema AS/RS DELIE — estanterías automatizadas de hasta 40 metros"
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            {/* Breadcrumb visual */}
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
              <button onClick={() => navigate('/')} className="hover:text-cyan-400 transition-colors">Inicio</button>
              <ChevronRight size={12} />
              <button onClick={() => navigate('/catalogo')} className="hover:text-cyan-400 transition-colors">Catálogo</button>
              <ChevronRight size={12} />
              <span className="text-cyan-400">AS/RS</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">
              Sistema ASRS · Representantes DELIE · Argentina
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              Sistemas AS/RS —<br />
              <span className="text-cyan-400">Estanterías automatizadas</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Estanterías AS/RS DELIE de 7 a 40 metros de altura. Drive-in, shuttle, mezzanine y rack selectivo automatizado con soporte local en Argentina.
            </p>
            <div className="flex flex-wrap gap-6">
              {[{ value: '12', label: 'Modelos' }, { value: '40m', label: 'Altura máx.' }, { value: '±0,1mm', label: 'Precisión' }].map(s => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-black text-white italic">{s.value}</span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* DESCRIPCIÓN SEO */}
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr] gap-10">
            <div>
              <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Qué son los sistemas AS/RS</p>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-5">Estanterías AS/RS: almacenamiento automatizado de alta densidad</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los sistemas AS/RS (Automated Storage and Retrieval Systems) son estructuras de almacenamiento de alta densidad diseñadas para operar con robots y equipos automatizados: transelevadores, robots lanzadera, robots shuttle y AMR. A diferencia del almacenamiento convencional, maximizan el uso del espacio vertical —hasta 40 metros de altura— y eliminan la necesidad de pasillos anchos para carretillas manuales.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                DELIE fabrica sus estanterías AS/RS con acero de alta resistencia de grandes acerías certificadas, con tolerancias de mecanizado de ±0,1 mm y tratamientos anticorrosión de silano. Esta precisión es fundamental para garantizar la operación continua de robots y transelevadores sin desgaste prematuro ni paradas no planificadas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                En Argentina, los sistemas ASRS de DELIE son entre un 30% y 50% más económicos que sus equivalentes europeos de marca comparable, gracias a la capacidad de fabricación propia en China a escala global. STOKA, como representante oficial exclusivo en Argentina y Chile, garantiza el proyecto llave en mano: ingeniería, importación, instalación y soporte posventa local.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Los beneficios fiscales vigentes en Argentina (Decreto 513/2025 — arancel 0% para equipos ASRS, financiamiento BICE a tasas preferenciales) hacen que 2025 y 2026 sean el momento ideal para invertir en automatización. La estabilidad fiscal del RIGI por 30 años protege la inversión de largo plazo.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-black text-gray-900 uppercase tracking-wide mb-3">Beneficios clave</p>
                {['Hasta 40 metros de altura', 'Densidad 5x vs. almacenamiento convencional', 'Compatible con robots lanzadera y transelevadores', 'Anticorrosión: silano de alta duración', 'Instalación in-situ en Argentina', 'ROI en 18–36 meses'].map(b => (
                  <div key={b} className="flex items-start gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                    <p className="text-sm text-gray-600">{b}</p>
                  </div>
                ))}
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5">
                <p className="text-xs font-black text-cyan-700 uppercase tracking-wide mb-2">Decreto 513/2025</p>
                <p className="text-sm text-cyan-800">Importá estas estanterías con <strong>arancel 0%</strong>. Verificamos la posición arancelaria para tu proyecto sin costo.</p>
                <button onClick={() => navigate('/beneficios-fiscales')} className="mt-3 text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1">
                  Ver beneficios fiscales <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Catálogo completo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">12 modelos de estanterías AS/RS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-sm transition-all group">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src={p.image} alt={`${p.name} — sistema AS/RS DELIE`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-black text-gray-900 text-sm mb-1.5">{p.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => navigate('/catalogo')} className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              Ver catálogo completo <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Seguir explorando</p>
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-6">Otras categorías del catálogo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SISTER_CATS.map(c => (
              <button key={c.href} onClick={() => navigate(c.href)}
                className="text-left p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50/50 transition-all group">
                <p className="font-bold text-gray-900 text-sm mb-0.5 group-hover:text-cyan-600 transition-colors">{c.label}</p>
                <p className="text-gray-500 text-xs">{c.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">Cotizá sin costo</p>
          <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-4">
            ¿Qué sistema AS/RS<br /><span className="text-cyan-400">necesita tu operación?</span>
          </h2>
          <p className="text-gray-400 text-base mb-8">Un ingeniero especializado en sistemas ASRS te responde en menos de 24 horas con la orientación técnica inicial sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contacto')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Solicitar cotización <ArrowRight size={14} />
            </button>
            <button onClick={() => navigate('/beneficios-fiscales')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all">
              Ver beneficios fiscales
            </button>
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

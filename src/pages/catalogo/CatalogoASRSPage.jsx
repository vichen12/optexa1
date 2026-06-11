import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { ArrowRight, ChevronRight, Maximize2 } from 'lucide-react';

const seg = (s) => s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@ ]/gu, c => encodeURIComponent(c)).replace(/ /g, '%20');
const img = (prod, file) => `/productos-delie/asrs/${seg(prod)}/${file}`;

const PRODUCTS = [
  { name: 'Estanterías Pallet Shuttle', image: img('Estanterías robóticas con lanzadera para palés', 'pallet-shuttle-robot-racking13c59.webp'), desc: 'Estanterías de alta densidad para robots lanzadera de paletas. 7 a 40 metros de altura, precisión ±0,1 mm.', link: '/catalogo/asrs/pallet-shuttle-racking' },
  { name: 'Estantería Tote Shuttle', image: img('Estantería del robot Tote Shuttle', 'tote-shuttle-robot-racking38678.webp'), desc: 'Para robots tote shuttle bidireccionales y 4 vías. Hasta 40 metros, anticorrosión de silano.', link: '/catalogo/asrs/tote-shuttle-racking' },
  { name: 'Estanterías para grúa apiladora', image: img('Estanterías para grúa apiladora de paletas', 'pallet-stacker-crane-racking598c7.webp'), desc: 'Gran altura para transelevadores y grúas apiladoras. Compatible con grúas de 1 y 2 mástiles.', link: '/catalogo/asrs/pallet-stacker-crane-racking' },
  { name: 'Mini-estantería Flybox', image: img('Mini-estantería Flybox', 'mini-flybox-racking93d5a.webp'), desc: 'Distancia ultra estrecha entre contenedores. Altura 550–12.000 mm. Ideal para e-commerce y farmacéutica.', link: '/catalogo/asrs/mini-flybox-racking' },
  { name: 'Transelevador + Robot lanzadera', image: img('Transelevador Grúa + Estantería Robot Lanzadera', 'pallet-stacker-crane-shuttle-robot-racking89e90.webp'), desc: 'Sistema combinado de transelevadores y robots lanzadera. Máxima flexibilidad y eficiencia.', link: '/catalogo/asrs/stacker-crane-shuttle-racking' },
  { name: 'Estanterías Miniload', image: img('Estanterías Miniload', 'miniload-rackinga0ea0.webp'), desc: 'Para transelevadores MiniLoad, simple y doble profundidad. Alta densidad de contenedores y totes.', link: '/catalogo/asrs/miniload-racking' },
  { name: 'Estanterías de servicio pesado', image: img('Estanterías de servicio pesado', 'heavy-duty-racking9a1ae.webp'), desc: 'Hasta 2.000 kg por palé. Compatible con frío y trabajo pesado. Anticorrosión de silano.', link: '/catalogo/asrs/heavy-duty-racking' },
  { name: 'Estanterías push-back', image: img('Estanterías push-para almacenamiento-de alta densidad', 'push-in-racking-for-high-density-storage2a4c0.webp'), desc: 'Alta densidad tipo push-back, sistema LIFO. Compatible con carretillas estándar.', link: '/catalogo/asrs/push-back-racking' },
  { name: 'Estanterías de entresuelo', image: img('Estanterías de entresuelo', 'mezzanine-racking7da1b.webp'), desc: 'Plataforma elevada sobre estanterías para crear niveles adicionales de almacenamiento.', link: '/catalogo/asrs/mezzanine-racking' },
  { name: 'Plataforma de estructura de acero', image: img('Plataforma de estructura de acero', 'steel-structure-platformfb756.webp'), desc: 'Plataforma elevada de acero personalizable para espacio adicional de almacenamiento.', link: '/catalogo/asrs/steel-platform' },
  { name: 'Palé de almacenamiento de acero', image: img('Plataforma de almacenamiento de acero', 'steel-storage-palletce853.webp'), desc: 'Palé de acero resistente a humedad, frío y químicos. Compatible con sistemas automáticos.', link: '/catalogo/asrs/steel-pallet' },
  { name: 'Drive-in racking', image: img('Conducir en estanterías', 'drive-in-rackinga817d.webp'), desc: 'La carretilla ingresa dentro. Hasta 80% de utilización del espacio. Sistema LIFO, apto para frío.', link: '/catalogo/asrs/drive-in-racking' },
];

const FAQ = [
  { q: '¿Cuánto espacio vertical aprovecha un sistema AS/RS en mi almacén, bodega o depósito?', a: 'Los sistemas AS/RS DELIE aprovechan desde 7 hasta 40 metros de altura libre. En un almacén con 12 metros de altura, podés almacenar hasta 5 veces más que con estanterías convencionales de 4-5 metros. La clave está en diseñar la estructura según la altura disponible y el tipo de carga.' },
  { q: '¿Cuál es la diferencia entre estanterías drive-in, shuttle y MiniLoad?', a: 'Las estanterías drive-in usan carretillas convencionales: las más económicas, ideales para LIFO de alta densidad. Las shuttle combinan estanterías con robots lanzadera para mayor velocidad y FIFO/LIFO selectivo. Las MiniLoad son para contenedores y totes con transelevadores: máxima velocidad y precisión para e-commerce, farmacéutica y bodega de alta rotación.' },
  { q: '¿Cuánto tiempo lleva instalar un sistema AS/RS en un almacén o depósito existente?', a: 'La instalación mecánica de estanterías AS/RS toma 4 a 10 semanas según el modelo. La adecuación civil previa (losa plana, iluminación) puede añadir 4-6 semanas si el edificio lo requiere. STOKA coordina toda la ingeniería de detalle, el montaje y la puesta en marcha certificada en Argentina.' },
  { q: '¿Las estanterías DELIE aplican al Decreto 513/2025 de arancel 0% en Argentina?', a: 'Sí. Las estanterías AS/RS para sistemas automatizados están incluidas en las posiciones arancelarias del Decreto 513/2025. STOKA verifica la posición arancelaria exacta para cada proyecto sin costo adicional, garantizando que aprovechés el beneficio desde el primer día de importación.' },
];

const SISTER_CATS = [
  { label: 'Robots de manipulación', href: '/catalogo/robots-manipulacion', desc: 'Transelevadores, shuttles y AMR' },
  { label: 'Almacenamiento vertical', href: '/catalogo/almacenamiento-vertical', desc: 'VLM y carruseles inteligentes' },
  { label: 'Equipo de transporte', href: '/catalogo/equipo-transporte', desc: 'Conveyors, elevadores y paletizadores' },
  { label: 'Software inteligente', href: '/catalogo/software', desc: 'WMS, WCS y control de almacén' },
];

export const CatalogoASRSPage = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>Sistemas ASRS | Almacén Automatizado Alta Densidad | Estanterías AS/RS | STOKA Argentina</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Sistemas de almacenamiento y recuperación automatizados (ASRS) DELIE. Almacén automatizado, bodega y depósito de 7 a 40 m. ASRS Argentina y ASRS Chile. 30–50% más económico que Europa." />
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
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO — video de fondo */}
      <div className="relative mt-20 h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <video
          src="/productos-delie/bannervideo2.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-950/30 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
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
              Sistemas AS/RS<br />
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
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Header */}
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Qué son los sistemas AS/RS</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Sistemas de almacenamiento y recuperación automatizados (AS/RS): ASRS de alta densidad</h2>
          </div>

          {/* Stat badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '40 m', label: 'Altura máxima', sub: 'Uso total del espacio vertical' },
              { value: '±0,1 mm', label: 'Precisión de mecanizado', sub: 'Robots sin desgaste ni paradas' },
              { value: '30–50%', label: 'Más económico que Europa', sub: 'Precio directo de fábrica DELIE' },
              { value: '18–36', label: 'Meses de ROI', sub: 'Comprobado en operaciones reales' },
            ].map(s => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center">
                <p className="text-2xl font-black text-gray-900 leading-none mb-1">{s.value}</p>
                <p className="text-[11px] font-bold text-cyan-600 uppercase tracking-wide mb-1">{s.label}</p>
                <p className="text-[11px] text-gray-400 leading-tight">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-black group">
            <video
              ref={videoRef}
              src="/bannervideo1.mp4"
              autoPlay muted loop playsInline
              className="w-full max-h-[360px] object-cover"
            />
            <button
              onClick={() => videoRef.current?.requestFullscreen()}
              className="absolute bottom-3 right-3 p-2 bg-black/50 hover:bg-black/80 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Pantalla completa"
            >
              <Maximize2 size={16} className="text-white" />
            </button>
          </div>

          {/* System selection guide */}
          <div>
            <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">Guía de selección — ¿Qué sistema AS/RS necesitás?</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  type: 'Unit Load',
                  sub: 'Transelevador de paletas',
                  badge: 'Más versátil',
                  badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
                  cases: ['Paletas con muchos SKUs distintos', 'Operaciones FIFO / LIFO mixtas', 'Altura libre desde 12 m'],
                  note: 'Transelevador de 1 o 2 mástiles'
                },
                {
                  type: 'Shuttle',
                  sub: 'Robot lanzadera',
                  badge: 'Mayor densidad',
                  badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
                  cases: ['Alta densidad con producto homogéneo', 'Gran volumen por SKU', 'Máximo aprovechamiento del m²'],
                  note: 'Bidireccional o 4 vías'
                },
                {
                  type: 'MiniLoad',
                  sub: 'Cajas y totes',
                  badge: 'Máxima velocidad',
                  badgeColor: 'bg-violet-50 text-violet-600 border-violet-200',
                  cases: ['E-commerce y farmacéutica', 'Picking goods-to-person', 'SKUs pequeños y medianos'],
                  note: 'Simple o doble profundidad'
                },
              ].map(s => (
                <div key={s.type} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
                  <div>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wide border px-2 py-0.5 rounded-full mb-2 ${s.badgeColor}`}>{s.badge}</span>
                    <p className="text-base font-black text-gray-900">{s.type}</p>
                    <p className="text-xs text-gray-400">{s.sub}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {s.cases.map(c => (
                      <li key={c} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <span className="text-xs text-gray-600">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-gray-400 border-t border-gray-200 pt-3 mt-auto">{s.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-col: fabricación + fiscal */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fabricación DELIE */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase mb-4">Fabricación DELIE</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Acero de acerías certificadas',
                  'Tolerancia ±0,1 mm',
                  'Anticorrosión silano',
                  '1.000+ instalaciones globales',
                  'Compatible robots shuttle',
                  'Compatible transelevadores',
                  'Compatible AMR',
                  'Apto frío y trabajo pesado',
                ].map(tag => (
                  <span key={tag} className="text-[11px] bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                STOKA garantiza el proyecto llave en mano: ingeniería, importación, instalación y soporte posventa 100% local en Argentina.
              </p>
            </div>

            {/* Fiscal 2026 */}
            <div className="bg-slate-900 rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase">Argentina 2026 — Combinación fiscal</p>
              <div className="space-y-2.5">
                {[
                  { label: 'Decreto 513/2025', desc: 'Arancel 0% en importación de equipos ASRS' },
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
              <p className="text-sm font-black text-white leading-tight border-t border-white/10 pt-4">
                ROI en <span className="text-cyan-400">18–36 meses</span> en operaciones de mediana escala.
              </p>
              <button onClick={() => navigate('/beneficios-fiscales')} className="mt-auto text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
                Ver todos los beneficios fiscales <ArrowRight size={12} />
              </button>
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
              <motion.button key={i} onClick={() => navigate(p.link)} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-sm transition-all group">
                <div className="aspect-4/3 overflow-hidden bg-gray-100">
                  <img src={p.image} alt={`${p.name} — sistema AS/RS DELIE`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-black text-gray-900 text-sm mb-1.5">{p.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </motion.button>
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

      {/* FAQ */}
      {/* Explorar por tipo — product child links */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Explorar por tipo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Sistemas AS/RS disponibles</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nombre: 'Transelevador Unit-Load', desc: 'Paletas hasta 40 m de altura', url: '/catalogo/asrs/unit-load' },
              { nombre: 'Transelevador MiniLoad', desc: 'Cajas y totes, picking a alta velocidad', url: '/catalogo/asrs/miniload' },
              { nombre: 'Robot Lanzadera Shuttle', desc: 'Alta densidad con robots autónomos', url: '/catalogo/asrs/shuttle' },
              { nombre: 'AS/RS Cámara Fría', desc: 'Operación desde -30 °C', url: '/catalogo/asrs/camara-frio' },
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
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Preguntas frecuentes</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Lo que pregunta un Director de Operaciones</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Link pills — navegación al pie */}
      <section className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
          {[
            { label: 'Beneficios fiscales 2026', href: '/beneficios-fiscales' },
            { label: 'Robots de manipulación', href: '/catalogo/robots-manipulacion' },
            { label: 'Software WMS/WCS', href: '/catalogo/software' },
            { label: 'Cómo trabajamos', href: '/como-trabajamos' },
          ].map(l => (
            <button key={l.href} onClick={() => navigate(l.href)}
              className="text-xs font-bold text-gray-600 border border-gray-200 px-4 py-2 rounded-full hover:border-cyan-300 hover:text-cyan-600 transition-all bg-gray-50">
              {l.label}
            </button>
          ))}
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

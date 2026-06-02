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
const img = (prod, file) => `/productos-delie/equipo-transporte/${seg(prod)}/${file}`;

const PRODUCTS = [
  { name: 'Elevador de paletas', image: img('Carretilla elevadora-Tipo elevador vertical', 'forklift-type-vertical-lifterbcb8e.webp'), desc: 'Elevación vertical de paletas entre niveles. Plataforma hasta 1.200×1.600 mm, 2.000 kg, hasta 60 m/min, precisión ±2 mm.' },
  { name: 'Elevador de totes alta velocidad', image: img('Elevador de bolsas de alta-velocidad', 'high-speed-tote-lifter042d8.webp'), desc: '150 kg de carga máxima, 5 m/s de velocidad, 3 m/s² de aceleración. Operación 24/7 entre niveles verticales.' },
  { name: 'Máquina de aterrizaje y elevación', image: img('Máquina de aterrizaje y elevación', 'landing-lifting-machine33ba0.webp'), desc: 'Transferencia vertical de paletas dentro de líneas de transporte. Hasta 3.000 kg por palé con variador de frecuencia.' },
  { name: 'Máquina de transferencia 90°', image: img('Máquina de transferencia de 90 grados', '90-degree-transfer-machine95639.webp'), desc: 'Cambia la dirección de paletas a 90° sin interrumpir el flujo. Hasta 3.000 kg por palé, arranque suave.' },
  { name: 'Transferencia de totes', image: img('Máquina de transferencia de bolsas', 'tote-transfer-machine40dd2.webp'), desc: 'Cambio de dirección para contenedores y totes en líneas de alta velocidad. Múltiples tamaños de totes.' },
  { name: 'Paletizador / Despaletizador', image: img('PaletizadorDespaletizador', 'palletizer-depalletizer58a90.webp'), desc: 'Formación automática de paletas a partir de capas de producto. Integración directa WMS/WCS, bajo mantenimiento.' },
  { name: 'Transportador de cadena', image: img('Transportador de cadena', 'chain-conveyor9e540.webp'), desc: '3.000 kg por palé, variador de frecuencia, operable a baja temperatura. Transporte eficiente de paletas.' },
  { name: 'Cinta transportadora de totes', image: img('Transportador de cinta de asas', 'tote-belt-conveyor1b7b5.webp'), desc: 'Cinta modular para totes y contenedores. Línea recta e inclinada, múltiples tamaños, operación 24/7.' },
  { name: 'Transportador de rodillos — paletas', image: img('Transportador de rodillos', 'roller-conveyor4b990.webp'), desc: '3.000 kg por palé, velocidad configurable. Movimiento horizontal de paletas con integración WMS/WCS.' },
  { name: 'Transportador de rodillos — totes', image: img('Transportador de rodillos totalizadores', 'tote-roller-conveyor24f15.webp'), desc: 'Rodillos con zonas de acumulación para gestionar flujo de totes. Compatible con MiniLoad y robots tote.' },
];

const SISTER_CATS = [
  { label: 'AS/RS', href: '/catalogo/asrs', desc: 'Estanterías automatizadas' },
  { label: 'Robots de manipulación', href: '/catalogo/robots-manipulacion', desc: 'Transelevadores, shuttles y AMR' },
  { label: 'Almacenamiento vertical', href: '/catalogo/almacenamiento-vertical', desc: 'VLM y carruseles inteligentes' },
  { label: 'Software inteligente', href: '/catalogo/software', desc: 'WMS, WCS y control de almacén' },
];

export const CatalogoTransportePage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>Equipo de Transporte | Conveyors, Elevadores y Paletizadores | STOKA Argentina</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Transportadores de cadena y rodillos, elevadores de paletas y paletizadores automáticos DELIE. Conectá tu almacén automatizado de punta a punta." />
        <meta property="og:title" content="Equipo de Transporte DELIE | Conveyors y Paletizadores | STOKA Argentina" />
        <meta property="og:description" content="Transportadores de cadena, rodillos, elevadores y paletizadores DELIE. Automatización completa de flujos en Argentina." />
        <meta property="og:url" content="https://www.stokagroup.com/catalogo/equipo-transporte" />
        <link rel="canonical" href="https://www.stokagroup.com/catalogo/equipo-transporte" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://www.stokagroup.com/catalogo" },
            { "@type": "ListItem", "position": 3, "name": "Equipo de transporte", "item": "https://www.stokagroup.com/catalogo/equipo-transporte" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Equipo de transporte DELIE — Conveyors y paletizadores",
          "numberOfItems": 10,
          "itemListElement": PRODUCTS.map((p, i) => ({
            "@type": "ListItem", "position": i + 1, "name": p.name, "description": p.desc,
            "url": "https://www.stokagroup.com/catalogo/equipo-transporte"
          }))
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img src={img('Transportador de cadena', 'chain-conveyor9e540.webp')}
          alt="Transportador de cadena DELIE para logística industrial"
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
              <button onClick={() => navigate('/')} className="hover:text-cyan-400 transition-colors">Inicio</button>
              <ChevronRight size={12} />
              <button onClick={() => navigate('/catalogo')} className="hover:text-cyan-400 transition-colors">Catálogo</button>
              <ChevronRight size={12} />
              <span className="text-cyan-400">Equipo de transporte</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">Conveyors · Elevadores · Paletizadores · DELIE</p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              Equipo de transporte —<br />
              <span className="text-cyan-400">Conveyors, elevadores y paletizadores</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              10 modelos de equipos de transporte para conectar cada punto de tu almacén automatizado. Desde transportadores de cadena hasta paletizadores automáticos con integración WCS.
            </p>
            <div className="flex flex-wrap gap-6">
              {[{ value: '10', label: 'Modelos' }, { value: '3.000kg', label: 'Carga máx.' }, { value: '5m/s', label: 'Velocidad máx.' }].map(s => (
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
              <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Por qué el transporte interno importa</p>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-5">Transportadores automáticos: la columna vertebral del almacén automatizado</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En un sistema de automatización de almacenes completo, los equipos de transporte son el tejido conectivo que une cada componente: los transelevadores, los robots shuttle, los módulos VLM y las estaciones de picking. Sin transportadores adecuados, el throughput del sistema queda limitado por los cuellos de botella en el flujo de materiales.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                DELIE ofrece una gama completa de transportadores modulares diseñados para integrarse perfectamente con el WCS, que coordina y optimiza el flujo en tiempo real. Los transportadores de cadena soportan hasta 3.000 kg por palé, los elevadores de totes alcanzan 5 m/s y los paletizadores automáticos operan las 24/7 sin intervención manual.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La integración de todos los equipos de transporte bajo un sistema WCS centralizado elimina los tiempos de espera entre etapas, maximiza el throughput total y permite optimizar el flujo en tiempo real según la demanda. En Argentina, estos equipos aplican al Decreto 513/2025 para importación con arancel 0%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-black text-gray-900 uppercase tracking-wide mb-3">Tipos disponibles</p>
                {['Transportadores de cadena (paletas)', 'Cintas para totes y contenedores', 'Transportadores de rodillos', 'Elevadores verticales (paletas y totes)', 'Máquinas de transferencia 90°', 'Paletizadores y despaletizadores'].map(b => (
                  <div key={b} className="flex items-start gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                    <p className="text-sm text-gray-600">{b}</p>
                  </div>
                ))}
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5">
                <p className="text-xs font-black text-cyan-700 uppercase tracking-wide mb-2">Decreto 513/2025</p>
                <p className="text-sm text-cyan-800">Los conveyors y paletizadores aplican al arancel 0% para importación.</p>
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
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">10 equipos de transporte automatizado</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-sm transition-all group">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src={p.image} alt={`${p.name} — equipo de transporte DELIE`}
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
            <button onClick={() => navigate('/catalogo')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
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
            Conectá tu almacén<br /><span className="text-cyan-400">de punta a punta.</span>
          </h2>
          <p className="text-gray-400 text-base mb-8">Ingenieros especializados diseñan el sistema de transporte óptimo para tu operación sin costo inicial.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contacto')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Solicitar cotización <ArrowRight size={14} />
            </button>
            <button onClick={() => navigate('/como-trabajamos')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all">
              Ver nuestra metodología
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

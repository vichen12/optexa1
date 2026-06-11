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
  { name: 'Elevador de paletas', image: img('Carretilla elevadora-Tipo elevador vertical', 'forklift-type-vertical-lifterbcb8e.webp'), desc: 'Elevación vertical de paletas entre niveles. Plataforma hasta 1.200×1.600 mm, 2.000 kg, hasta 60 m/min, precisión ±2 mm.', link: '/catalogo/equipo-transporte/elevador-paletas' },
  { name: 'Elevador de totes alta velocidad', image: img('Elevador de bolsas de alta-velocidad', 'high-speed-tote-lifter042d8.webp'), desc: '150 kg de carga máxima, 5 m/s de velocidad, 3 m/s² de aceleración. Operación 24/7 entre niveles verticales.', link: '/catalogo/equipo-transporte/elevador-totes' },
  { name: 'Máquina de aterrizaje y elevación', image: img('Máquina de aterrizaje y elevación', 'landing-lifting-machine33ba0.webp'), desc: 'Transferencia vertical de paletas dentro de líneas de transporte. Hasta 3.000 kg por palé con variador de frecuencia.', link: '/catalogo/equipo-transporte/maquina-aterrizaje-elevacion' },
  { name: 'Máquina de transferencia 90°', image: img('Máquina de transferencia de 90 grados', '90-degree-transfer-machine95639.webp'), desc: 'Cambia la dirección de paletas a 90° sin interrumpir el flujo. Hasta 3.000 kg por palé, arranque suave.', link: '/catalogo/equipo-transporte/maquina-transferencia-90' },
  { name: 'Transferencia de totes', image: img('Máquina de transferencia de bolsas', 'tote-transfer-machine40dd2.webp'), desc: 'Cambio de dirección para contenedores y totes en líneas de alta velocidad. Múltiples tamaños de totes.', link: '/catalogo/equipo-transporte/transferencia-totes' },
  { name: 'Paletizador / Despaletizador', image: img('PaletizadorDespaletizador', 'palletizer-depalletizer58a90.webp'), desc: 'Formación automática de paletas a partir de capas de producto. Integración directa WMS/WCS, bajo mantenimiento.', link: '/catalogo/equipo-transporte/paletizador' },
  { name: 'Transportador de cadena', image: img('Transportador de cadena', 'chain-conveyor9e540.webp'), desc: '3.000 kg por palé, variador de frecuencia, operable a baja temperatura. Transporte eficiente de paletas.', link: '/catalogo/equipo-transporte/transportador-cadena' },
  { name: 'Cinta transportadora de totes', image: img('Transportador de cinta de asas', 'tote-belt-conveyor1b7b5.webp'), desc: 'Cinta modular para totes y contenedores. Línea recta e inclinada, múltiples tamaños, operación 24/7.', link: '/catalogo/equipo-transporte/cinta-totes' },
  { name: 'Transportador de rodillos — paletas', image: img('Transportador de rodillos', 'roller-conveyor4b990.webp'), desc: '3.000 kg por palé, velocidad configurable. Movimiento horizontal de paletas con integración WMS/WCS.', link: '/catalogo/equipo-transporte/transportador-rodillos-paletas' },
  { name: 'Transportador de rodillos — totes', image: img('Transportador de rodillos totalizadores', 'tote-roller-conveyor24f15.webp'), desc: 'Rodillos con zonas de acumulación para gestionar flujo de totes. Compatible con MiniLoad y robots tote.', link: '/catalogo/equipo-transporte/transportador-rodillos-totes' },
];

const FAQ = [
  { q: '¿Qué tipo de transportador necesito para paletas de 3.000 kg en mi depósito?', a: 'Para cargas de 3.000 kg por palé, el transportador de cadena o el de rodillos de DELIE son los indicados. Ambos están dimensionados para esa carga con variador de frecuencia para arranque suave. La elección entre cadena y rodillos depende de la fragilidad de la paleta y si necesitás acumulación por zonas en el almacén o bodega.' },
  { q: '¿Puedo integrar transportadores existentes en mi almacén con el sistema DELIE?', a: 'En muchos casos, sí. El WCS de DELIE puede controlar transportadores de otras marcas con interfaz de control estándar (PLC con Profibus, Profinet o similar). STOKA realiza la auditoría de compatibilidad durante el diagnóstico técnico para determinar qué conveyors existentes podés reutilizar y reducir la inversión total.' },
  { q: '¿Qué mantenimiento requieren los transportadores en el almacén o bodega?', a: 'Los conveyors DELIE tienen mantenimiento preventivo trimestral: lubricación de cadenas o rodillos, verificación de tensores y revisión de sensores. Los componentes de desgaste están normalizados y disponibles en Argentina. El WCS monitorea cada sección del depósito y emite alertas antes de que ocurra una falla.' },
  { q: '¿Los transportadores DELIE funcionan a temperatura negativa en bodegas o cámaras frigoríficas?', a: 'Sí. Los transportadores de cadena para cadena de frío operan hasta -25°C con lubricantes especiales, materiales anticongelantes y diseño hermético. Se integran con los transelevadores y robots lanzadera de la línea de frío para crear un sistema completamente automatizado en el depósito frigorífico.' },
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
        <title>Transportadores y Sorters Industriales | DELIE | STOKA</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Transportadores industriales, conveyor, sorter y clasificador automático DELIE. Sistemas de sortación para almacenes y bodegas en Argentina." />
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
            "url": `https://www.stokagroup.com${p.link}`
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
          "name": "Transportadores y Sorters Industriales DELIE — Argentina",
          "description": "Transportadores de cadena, rodillos, elevadores y paletizadores DELIE para almacenes en Argentina. Integración WMS/WCS con soporte técnico local.",
          "provider": { "@id": "https://www.stokagroup.com/#organization" },
          "areaServed": [{ "@type": "Country", "name": "Argentina" }, { "@type": "Country", "name": "Chile" }],
          "serviceType": "Equipo de Transporte — Automatización de Almacenes",
          "url": "https://www.stokagroup.com/catalogo/equipo-transporte"
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="bg-white border-b border-gray-100 mt-20">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500 mt-20" />
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5">
              <button onClick={() => navigate('/')} className="hover:text-cyan-500 transition-colors">Inicio</button>
              <ChevronRight size={12} />
              <button onClick={() => navigate('/catalogo')} className="hover:text-cyan-500 transition-colors">Catálogo</button>
              <ChevronRight size={12} />
              <span className="text-cyan-500">Equipo de transporte</span>
            </nav>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Conveyors · Elevadores · Paletizadores · DELIE</p>
            <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              Equipo de transporte —<br />
              <span className="text-cyan-500">Conveyors, elevadores y paletizadores</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
              10 modelos de equipos de transporte para conectar cada punto de tu almacén automatizado. Desde transportadores de cadena hasta paletizadores automáticos con integración WCS.
            </p>
          </motion.div>
        </div>
      </div>

      {/* STATS — arriba del catálogo */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-6">
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Equipo de transporte DELIE</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">El tejido conectivo del almacén automatizado — conveyors, elevadores y paletizadores integrados bajo WCS</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '10', label: 'Modelos disponibles', sub: 'Gama completa de transporte' },
              { value: '3.000 kg', label: 'Carga máx. por palé', sub: 'Cadena y rodillos' },
              { value: '5 m/s', label: 'Velocidad máxima', sub: 'Elevador de totes' },
              { value: '-25°C', label: 'Temp. mínima', sub: 'Versión cadena de frío' },
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
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Catálogo completo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">10 equipos de transporte automatizado</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((p, i) => (
              <motion.button key={i} onClick={() => navigate(p.link)}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-md transition-all group w-full cursor-pointer">
                <div className="aspect-4/3 overflow-hidden bg-gray-100">
                  <img src={p.image} alt={`${p.name} — equipo de transporte DELIE`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-black text-gray-900 text-sm mb-1.5 group-hover:text-cyan-600 transition-colors">{p.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </motion.button>
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

      {/* DESCRIPCIÓN SEO */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Comparación */}
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Por qué el transporte interno importa</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">
              La columna vertebral del almacén automatizado
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-black text-gray-900 uppercase tracking-wide mb-4">Transporte de paletas</p>
                {[
                  ['Transportador de cadena', '3.000 kg · variador de frecuencia · frío -25°C'],
                  ['Transportador de rodillos', '3.000 kg · zonas de acumulación · WCS nativo'],
                  ['Máquina de transferencia 90°', 'Cambio de dirección sin interrumpir el flujo'],
                  ['Elevador de paletas', 'Entre niveles · hasta 2.000 kg · ±2 mm'],
                  ['Paletizador / Despaletizador', 'Formación automática · integración WMS/WCS'],
                ].map(([nombre, detalle]) => (
                  <div key={nombre} className="flex items-start gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">{nombre}</p>
                      <p className="text-xs text-gray-500">{detalle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-black text-gray-900 uppercase tracking-wide mb-4">Transporte de totes y contenedores</p>
                {[
                  ['Elevador de totes alta velocidad', '150 kg · 5 m/s · 3 m/s² · operación 24/7'],
                  ['Cinta transportadora de totes', 'Recta e inclinada · múltiples tamaños · 24/7'],
                  ['Transportador de rodillos totes', 'Acumulación por zonas · MiniLoad y robots tote'],
                  ['Transferencia de totes', 'Cambio de dirección en alta velocidad'],
                  ['Máquina de aterrizaje y elevación', 'Hasta 3.000 kg · variador de frecuencia'],
                ].map(([nombre, detalle]) => (
                  <div key={nombre} className="flex items-start gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">{nombre}</p>
                      <p className="text-xs text-gray-500">{detalle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div>
            <p className="text-xs font-black text-gray-900 uppercase tracking-wide mb-4">Por qué automatizar el transporte interno</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'Integración WCS nativa',
                'Sin cuellos de botella entre etapas',
                'Hasta 3.000 kg por palé',
                'Hasta 5 m/s en totes',
                'Operación a -25°C',
                'Modular y escalable',
                'Mantenimiento preventivo trimestral',
                'Simulación de flujos previa',
                'Repuestos disponibles en Argentina',
              ].map(b => (
                <span key={b} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-700">{b}</span>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
              En un almacén automatizado, el transportador es tan crítico como el transelevador: un cuello de botella en el conveyor puede reducir el throughput total del sistema aunque los robots funcionen a máxima capacidad. Por eso el diseño de la red de transporte interno se realiza con simulación de flujos antes de la instalación — el WCS prueba virtualmente el comportamiento del sistema bajo picos de demanda para garantizar que no existan cuellos de botella.
            </p>
          </div>

          {/* Fiscal */}
          <div className="bg-slate-900 rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Decreto 513/2025 — Beneficio fiscal</p>
              <h3 className="text-white font-black text-lg uppercase tracking-tight mb-2">Arancel 0% para importación de conveyors y paletizadores</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Los equipos de transporte industrial DELIE aplican al Decreto 513/2025. Reducción del arancel de importación al 0% para transportadores industriales, elevadores y paletizadores automáticos. STOKA gestiona la importación completa desde China hasta tu planta en Argentina.</p>
            </div>
            <div className="shrink-0">
              <button onClick={() => navigate('/beneficios-fiscales')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
                Ver beneficios fiscales <ArrowRight size={13} />
              </button>
            </div>
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

      {/* EXPLORAR POR TIPO */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Explorar por tipo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Equipo de transporte disponible</h2>
          <div className="grid sm:grid-cols-2 max-w-2xl gap-4">
            {[
              { nombre: 'Transportadores Industriales', desc: 'Cadena, rodillos y banda para flujos continuos en almacenes y depósitos.', url: '/catalogo/equipo-transporte/transportadores' },
              { nombre: 'Sorters y Clasificadores', desc: 'Clasificador automático de paquetes para sistemas de sortación en centros de distribución.', url: '/catalogo/equipo-transporte/sorters' },
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

      {/* FAQ */}
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

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

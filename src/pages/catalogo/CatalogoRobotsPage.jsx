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
const img = (prod, file) => `/productos-delie/robots-manipulacion/${seg(prod)}/${file}`;

const PRODUCTS = [
  { name: 'Grúa apiladora mástil simple', image: img('Grúa apiladora de un solo mástil', 'single-mast-pallet-stacker-crane92251.jpg'), desc: 'Robot AS/RS para productos paletizados. Profundidad simple, doble y múltiple. Apto para frío, antiexplosión y salas limpias. Certificación CE e ISO 9001.' },
  { name: 'Grúa apiladora doble mástil', image: img('Grúa apiladora de paletas de doble-mástil', 'double-mast-pallet-stacker-crane202510151146372d8c5.webp'), desc: 'Configuración de doble mástil para mayor estabilidad en grandes alturas y alta capacidad de carga. Certificación CE e ISO 9001.' },
  { name: 'Grúa apiladora servicio pesado', image: img('Grúa apiladora de paletas-de servicio pesado', 'heavy-duty-pallet-stacker-crane7126b.webp'), desc: 'Versión reforzada para cargas de gran peso en operaciones industriales exigentes. Operación 24/7 con sistemas de seguridad redundantes.' },
  { name: 'Grúa apiladora personalizada', image: img('Grúa apiladora de paletas personalizada', 'customized-pallet-stacker-crane5dc5d.webp'), desc: 'Solución a medida para almacenes con requerimientos específicos de dimensiones, carga o entorno. Integración ERP/WMS/WCS.' },
  { name: 'Transelevador MiniLoad profundidad simple', image: img('Grúa apiladora de minicarga profunda-de profundidad', 'single-deep-miniload-stacker-crane41fe7.webp'), desc: 'Sistema AS/RS de alto rendimiento para contenedores, cajas y totes. Hasta 300 kg, velocidad máx. 360 m/min, precisión ±2 mm.' },
  { name: 'Transelevador MiniLoad doble profundidad', image: img('Transelevador Miniload de doble-profundidad', 'double-deep-miniload-stacker-crane84c33.webp'), desc: 'Doble profundidad que maximiza la densidad de almacenamiento para contenedores y totes. Hasta 300 kg por unidad.' },
  { name: 'Transelevador MiniLoad personalizado', image: img('Grúa apiladora miniload personalizada', 'customized-miniload-stacker-cranec409d.webp'), desc: 'Solución MiniLoad a medida adaptable a múltiples entornos operativos. Integración directa con WMS/WCS.' },
  { name: 'Robot lanzadera 4 vías — paletas', image: img('Robot lanzadera de cuatro direcciones-para paletas', 'pallet-four-way-shuttle-robotb829c.webp'), desc: 'Solo 125 mm de espesor, 1,5 toneladas de capacidad. Operativo a -25°C. Control multi-robot por WCS. Plug-and-play.' },
  { name: 'Robot lanzadera bidireccional — paletas', image: img('Robot lanzadera bidireccional-para paletas', 'pallet-two-way-shuttle-robot5fbef.webp'), desc: 'Robot lanzadera de dos vías para pasillos lineales de alta eficiencia. Bajo consumo energético.' },
  { name: 'Robot lanzadera madre-hijo', image: img('Robot lanzadera para padres e hijos de paletas', 'pallet-parent-child-shuttle-robotdad7c.webp'), desc: 'Sistema combinado: el robot madre transporta robots hijo para acceder a distintos niveles autónomamente. Mayor throughput.' },
  { name: 'Robot lanzadera — almacén en frío', image: img('Robot transportador de paletas de almacenamiento en frío', 'cold-storage-pallet-shuttle-robot3e9c9.webp'), desc: 'Versión para cámaras frigoríficas hasta -25°C. Sellado hermético anticondensación y diagnóstico remoto.' },
  { name: 'Robot lanzadera antiexplosión', image: img('Robot transportador de palés a prueba de explosiones', 'explosion-proof-pallet-shuttle-robot9120d.webp'), desc: 'Versión certificada ATEX para zonas con riesgo de explosión. Materiales especialmente seleccionados.' },
  { name: 'Robot tote lanzadera 4 vías', image: img('Tote Robot de transporte de cuatro-vías', 'tote-four-way-shuttle-robot6428f.webp'), desc: 'Sistema AS/RS de alta velocidad para artículos pequeños. Hasta 50 kg, 5 m/s, precisión ±2 mm. De -25°C a +45°C.' },
  { name: 'Robot tote bidireccional', image: img('Robot transportador bidireccional Tote', 'tote-two-way-shuttle-robot20c07.webp'), desc: 'Robot tote de dos vías para pasillos lineales. Ideal para e-commerce y distribución. Multi-robot bajo WCS.' },
];

const SISTER_CATS = [
  { label: 'AS/RS', href: '/catalogo/asrs', desc: 'Estanterías automatizadas' },
  { label: 'Almacenamiento vertical', href: '/catalogo/almacenamiento-vertical', desc: 'VLM y carruseles inteligentes' },
  { label: 'Equipo de transporte', href: '/catalogo/equipo-transporte', desc: 'Conveyors, elevadores y paletizadores' },
  { label: 'Software inteligente', href: '/catalogo/software', desc: 'WMS, WCS y control de almacén' },
];

export const CatalogoRobotsPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>Robots de Manipulación | Transelevadores, Shuttle, AMR | STOKA Argentina</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Transelevadores MiniLoad, robots lanzadera 4 direcciones, grúas apiladoras y robots AMR DELIE. Picking automatizado para tu almacén. Ingeniería local + soporte 24/7." />
        <meta property="og:title" content="Robots de Manipulación | Transelevadores y Shuttle DELIE | STOKA Argentina" />
        <meta property="og:description" content="Transelevadores MiniLoad, robots lanzadera, grúas apiladoras y AMR DELIE en Argentina. Soporte 24/7." />
        <meta property="og:url" content="https://www.stokagroup.com/catalogo/robots-manipulacion" />
        <link rel="canonical" href="https://www.stokagroup.com/catalogo/robots-manipulacion" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://www.stokagroup.com/catalogo" },
            { "@type": "ListItem", "position": 3, "name": "Robots de manipulación", "item": "https://www.stokagroup.com/catalogo/robots-manipulacion" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Robots de manipulación DELIE — Transelevadores y shuttles",
          "numberOfItems": 14,
          "itemListElement": PRODUCTS.map((p, i) => ({
            "@type": "ListItem", "position": i + 1, "name": p.name, "description": p.desc,
            "url": "https://www.stokagroup.com/catalogo/robots-manipulacion"
          }))
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src={`/productos-delie/robots-manipulacion/${seg('Robot lanzadera de cuatro direcciones-para paletas')}/pallet-four-way-shuttle-robotb829c.webp`}
          alt="Robot lanzadera pallet four-way shuttle DELIE para paletas"
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
              <span className="text-cyan-400">Robots de manipulación</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">Transelevadores · Shuttle · AMR · DELIE</p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              Robots de manipulación —<br />
              <span className="text-cyan-400">Transelevadores, shuttles y AMR</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              14 modelos de robots de almacén DELIE: grúas apiladoras, transelevadores MiniLoad, robots lanzadera 4 vías y robots tote. Soporte técnico 24/7 en Argentina.
            </p>
            <div className="flex flex-wrap gap-6">
              {[{ value: '14', label: 'Modelos' }, { value: '360m/min', label: 'Velocidad máx.' }, { value: '-25°C', label: 'Temp. mín.' }].map(s => (
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
              <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Robots de almacén DELIE</p>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-5">Transelevadores, robots shuttle y AMR para automatización de almacenes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los robots de manipulación son el corazón de cualquier sistema de automatización de almacenes. DELIE ofrece la gama más completa del mercado: desde grúas apiladoras de mástil simple para almacenes convencionales, hasta robots lanzadera de 4 vías para alta densidad y velocidad máxima de throughput.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los transelevadores MiniLoad de DELIE alcanzan velocidades de hasta 360 m/min con precisión de ±2 mm, operando de forma continua sin mantenimiento no planificado gracias a su diseño de componentes modulares independientes. Son ideales para e-commerce, farmacéutica y manufactura donde la velocidad de picking es crítica.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los robots lanzadera 4 vías tienen solo 125 mm de espesor y 1,5 toneladas de carga útil. Pueden operar en cámaras frigoríficas a -25°C, en zonas ATEX certificadas, y bajo control multi-robot coordinado por WCS. Su diseño plug-and-play permite instalaciones rápidas sin obras civiles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                En Argentina, importar estos equipos con el Decreto 513/2025 implica arancel 0% en las posiciones arancelarias de robots industriales. STOKA gestiona toda la importación, la ingeniería de instalación y el soporte técnico local post-venta.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-black text-gray-900 uppercase tracking-wide mb-3">Especificaciones clave</p>
                {['Velocidad máx. 360 m/min (MiniLoad)', 'Carga máx. 1,5 t (shuttle paletas)', 'Precisión ±2 mm', 'Operación a -25°C (cadena de frío)', 'Certificación ATEX disponible', 'Multi-robot bajo WCS', 'Certificación CE e ISO 9001'].map(b => (
                  <div key={b} className="flex items-start gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                    <p className="text-sm text-gray-600">{b}</p>
                  </div>
                ))}
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5">
                <p className="text-xs font-black text-cyan-700 uppercase tracking-wide mb-2">Arancel 0%</p>
                <p className="text-sm text-cyan-800">Los robots de almacén aplican al Decreto 513/2025. Importación sin arancel para tu proyecto.</p>
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
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">14 modelos de robots de manipulación</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-sm transition-all group">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src={p.image} alt={`${p.name} — robot de almacén DELIE`}
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
            ¿Qué robot necesita<br /><span className="text-cyan-400">tu operación?</span>
          </h2>
          <p className="text-gray-400 text-base mb-8">Un ingeniero especializado te responde en menos de 24 horas con la orientación técnica inicial para tu proyecto de automatización.</p>
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

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
const img = (prod, file) => `/productos-delie/almacenamiento-vertical/${seg(prod)}/${file}`;

const PRODUCTS = [
  {
    name: 'Carrusel vertical inteligente',
    image: img('Carrusel vertical inteligente para almacenamiento automatizado de alta-densidad', '2025112714330825019.webp'),
    desc: 'Sistema vertical automatizado que circula transportadores internamente para llevar materiales al operario. Altura hasta 17.580 mm, carga máx. por transportador: 180 kg, capacidad total: 6.000 kg.',
    features: ['Altura hasta 17.580 mm', 'Carga máx. 180 kg por transportador', 'Capacidad total 6.000 kg', 'Configurable: ligero, medio o pesado', 'Integrable con WMS/WCS'],
    best_for: 'Alta rotación de SKUs similares. Sectores: manufactura, automotriz, retail.',
  },
  {
    name: 'Módulo de elevación vertical (VLM)',
    image: img('Solución de elevación vertical automatizada de mercancías-a-personas', '20251127144756e3768.webp'),
    desc: 'Solución "mercancías a persona" con extractor inteligente que sitúa materiales en la ventanilla del operario. Ahorra hasta el 90% del espacio de suelo. Compatible con ERP y MES.',
    features: ['Ahorra hasta 90% del espacio de suelo', 'Compatible con ERP y MES', 'Alta precisión por posición absoluta', 'Múltiples ventanillas simultáneas', 'Pesaje integrado y escáner opcionales'],
    best_for: 'Alta variedad de SKUs con picking frecuente. Sectores: farmacéutica, e-commerce, repuestos.',
  },
];

const SISTER_CATS = [
  { label: 'AS/RS', href: '/catalogo/asrs', desc: 'Estanterías automatizadas' },
  { label: 'Robots de manipulación', href: '/catalogo/robots-manipulacion', desc: 'Transelevadores, shuttles y AMR' },
  { label: 'Equipo de transporte', href: '/catalogo/equipo-transporte', desc: 'Conveyors, elevadores y paletizadores' },
  { label: 'Software inteligente', href: '/catalogo/software', desc: 'WMS, WCS y control de almacén' },
];

export const CatalogoVerticalPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>Almacenamiento Vertical | VLM y Carruseles Verticales | STOKA Argentina</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Módulos VLM y carruseles verticales DELIE. Ahorrá hasta 90% de espacio de suelo. Picking ergonómico a la altura del operador. Cotizá sin costo en Argentina." />
        <meta property="og:title" content="Almacenamiento Vertical VLM y Carruseles | STOKA Argentina" />
        <meta property="og:description" content="VLM y carruseles verticales DELIE. Hasta 90% menos espacio de suelo. Representantes oficiales en Argentina." />
        <meta property="og:url" content="https://www.stokagroup.com/catalogo/almacenamiento-vertical" />
        <link rel="canonical" href="https://www.stokagroup.com/catalogo/almacenamiento-vertical" />
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
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img src={img('Carrusel vertical inteligente para almacenamiento automatizado de alta-densidad', '2025112714330825019.webp')}
          alt="Carrusel vertical VLM DELIE para almacenamiento de alta densidad"
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
              <span className="text-cyan-400">Almacenamiento vertical</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">VLM · Carrusel vertical · DELIE</p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase leading-[1.05] tracking-tight mb-5">
              Almacenamiento vertical —<br />
              <span className="text-cyan-400">VLM y carruseles inteligentes</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Ahorrá hasta el 90% del espacio de suelo. Picking ergonómico "mercancías a persona" a la altura del operador, sin desplazamientos. Integración con ERP y MES.
            </p>
            <div className="flex flex-wrap gap-6">
              {[{ value: '90%', label: 'Ahorro de m²' }, { value: '17,5m', label: 'Altura máx.' }, { value: '6.000kg', label: 'Capacidad total' }].map(s => (
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
              <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">VLM vs Carrusel vertical</p>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-5">Almacenamiento vertical automatizado: VLM y carrusel comparados</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El almacenamiento vertical automatizado maximiza el uso del espacio aéreo disponible en el almacén, aprovechando la altura del techo en lugar de expandir horizontalmente. DELIE ofrece dos tecnologías complementarias: el VLM (Vertical Lift Module) y el carrusel vertical inteligente, cada uno optimizado para un perfil operativo diferente.
              </p>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <p className="font-black text-gray-900 text-sm mb-2">VLM (Módulo de elevación vertical)</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">Extractor inteligente que recupera cualquier bandeja de forma aleatoria. Ideal cuando hay alta variedad de SKUs y el operario necesita acceder a productos distintos en cada ciclo.</p>
                  <p className="text-xs text-cyan-600 font-bold">Mejor para: farmacéutica, repuestos, e-commerce con muchos SKUs.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <p className="font-black text-gray-900 text-sm mb-2">Carrusel vertical inteligente</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">Sistema que circula transportadores internamente. Más adecuado para SKUs repetitivos con alta rotación, donde el acceso secuencial es eficiente.</p>
                  <p className="text-xs text-cyan-600 font-bold">Mejor para: manufactura, automotriz, distribución de alta rotación.</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ambas tecnologías eliminan el tiempo de desplazamiento del operario (que representa hasta el 70% del tiempo en un almacén manual), mejoran la ergonomía, y se integran directamente con WMS y ERP. En Argentina, aplican al Decreto 513/2025 para importación con arancel 0%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-black text-gray-900 uppercase tracking-wide mb-3">Beneficios compartidos</p>
                {['Hasta 90% menos espacio de suelo', 'Picking ergonómico a altura del operador', 'Integración con WMS, ERP y MES', 'Pesaje y escaneado integrados', 'Reducción del 70% en tiempos de búsqueda', 'Trazabilidad de cada extracción'].map(b => (
                  <div key={b} className="flex items-start gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                    <p className="text-sm text-gray-600">{b}</p>
                  </div>
                ))}
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5">
                <p className="text-xs font-black text-cyan-700 uppercase tracking-wide mb-2">Arancel 0%</p>
                <p className="text-sm text-cyan-800">Los módulos VLM y carruseles aplican al Decreto 513/2025. Importación sin arancel.</p>
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
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Catálogo completo</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">2 soluciones de almacenamiento vertical</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PRODUCTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img src={p.image} alt={`${p.name} — almacenamiento vertical DELIE`}
                    className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-black text-gray-900 text-lg mb-2">{p.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="mb-4">
                    {p.features.map(f => (
                      <div key={f} className="flex items-start gap-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <p className="text-sm text-gray-600">{f}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                    <p className="text-xs text-cyan-700 font-bold">{p.best_for}</p>
                  </div>
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
            ¿VLM o carrusel vertical?<br /><span className="text-cyan-400">Te ayudamos a elegir.</span>
          </h2>
          <p className="text-gray-400 text-base mb-8">Ingenieros especializados te orientan sin costo cuál tecnología maximiza el ROI para tu operación específica.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contacto')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Solicitar consulta técnica <ArrowRight size={14} />
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

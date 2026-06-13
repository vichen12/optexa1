import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GS_URL = 'https://script.google.com/macros/s/AKfycbzhg3lF1NXpxytuxno8XakeIYEA_iMEomRYK5jNIdpbM8vGDufWx-MepBKodQEMAhReOw/exec';
import { Helmet } from 'react-helmet-async';
import { LangLink } from '../../lib/i18n-utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { SeoHead } from '../../lib/SeoHead';

const PREGUNTAS = [
  {
    id: 'carga',
    titulo: '¿Qué tipo de carga manejás?',
    subtitulo: 'El tipo de unidad determina la categoría de sistema.',
    opciones: [
      { id: 'paletas', label: 'Paletas completas', desc: '800×1.200 mm, >100 kg por unidad', icon: '📦' },
      { id: 'cajas-totes', label: 'Cajas / Totes', desc: 'Contenedores medianos, 5–50 kg', icon: '🗂️' },
      { id: 'pequenas', label: 'Piezas pequeñas', desc: 'Repuestos, herramientas, <5 kg', icon: '🔩' },
      { id: 'mixta', label: 'Mixta', desc: 'Paletas + cajas en la misma operación', icon: '🔀' },
    ],
  },
  {
    id: 'throughput',
    titulo: '¿Cuál es tu volumen de movimientos diarios?',
    subtitulo: 'Entradas + salidas combinadas.',
    opciones: [
      { id: 'bajo', label: 'Menos de 200 mov/día', desc: 'Operación liviana o deposito secundario', icon: '🟢' },
      { id: 'medio', label: '200–800 mov/día', desc: 'Distribución media, manufactura PyME', icon: '🟡' },
      { id: 'alto', label: '800–3.000 mov/día', desc: 'Distribución activa, e-commerce mediano', icon: '🟠' },
      { id: 'muy-alto', label: 'Más de 3.000 mov/día', desc: 'Gran distribución, e-commerce grande', icon: '🔴' },
    ],
  },
  {
    id: 'altura',
    titulo: '¿Cuánta altura libre tenés disponible?',
    subtitulo: 'La altura de la nave es el factor limitante del sistema.',
    opciones: [
      { id: 'baja', label: 'Menos de 8 m', desc: 'Nave industrial estándar baja', icon: '📏' },
      { id: 'media', label: '8–15 m', desc: 'Nave industrial media', icon: '📐' },
      { id: 'alta', label: '15–30 m', desc: 'Nave alta o edificio clad-rack', icon: '🏗️' },
      { id: 'muy-alta', label: 'Más de 30 m', desc: 'Clad-rack de gran escala', icon: '🏢' },
    ],
  },
  {
    id: 'temperatura',
    titulo: '¿A qué temperatura opera tu almacén?',
    subtitulo: 'Las cámaras frías requieren equipos especiales.',
    opciones: [
      { id: 'ambiente', label: 'Temperatura ambiente', desc: '+10 °C a +40 °C', icon: '🌡️' },
      { id: 'refrigerado', label: 'Refrigerado', desc: '0 °C a +8 °C (frescos, lácteos)', icon: '❄️' },
      { id: 'congelado', label: 'Congelado', desc: '-18 °C a -25 °C', icon: '🧊' },
      { id: 'profundo', label: 'Congelado profundo', desc: '-25 °C a -30 °C', icon: '🌨️' },
    ],
  },
  {
    id: 'skus',
    titulo: '¿Cuántos SKUs distintos tenés activos?',
    subtitulo: 'La variedad de productos influye fuertemente en la elección del sistema.',
    opciones: [
      { id: 'pocos', label: 'Menos de 500 SKUs', desc: 'Producto homogéneo, alta rotación', icon: '🎯' },
      { id: 'medio', label: '500–5.000 SKUs', desc: 'Catálogo medio, mixto', icon: '📋' },
      { id: 'muchos', label: '5.000–30.000 SKUs', desc: 'Catálogo amplio, alta variedad', icon: '📚' },
      { id: 'muyMuchos', label: 'Más de 30.000 SKUs', desc: 'Operación farmacéutica o e-commerce masivo', icon: '🗃️' },
    ],
  },
];

function calcularRecomendacion(respuestas) {
  const { carga, throughput, altura, temperatura, skus } = respuestas;

  const frio = temperatura === 'congelado' || temperatura === 'profundo' || temperatura === 'refrigerado';

  if (carga === 'pequenas' || (carga === 'cajas-totes' && throughput === 'bajo' && skus === 'muchos')) {
    return {
      nombre: 'Módulo de Elevación Vertical (VLM)',
      url: '/catalogo/almacenamiento-vertical/vlm',
      descripcion: 'Para piezas pequeñas, repuestos y herramientas con bajo a medio throughput, el VLM es la solución más eficiente. Aprovecha la altura libre sin necesidad de pasillo y entrega el producto al operario en segundos.',
      alternativa: 'Carrusel Vertical',
      altUrl: '/catalogo/almacenamiento-vertical/carruseles',
      tags: ['Alta densidad', 'Goods-to-person', 'Sin pasillo', 'Fácil integración'],
    };
  }

  if (carga === 'cajas-totes' || (carga === 'mixta' && skus !== 'pocos')) {
    if (throughput === 'bajo' || throughput === 'medio') {
      return {
        nombre: 'Transelevador MiniLoad',
        url: '/catalogo/asrs/miniload',
        descripcion: 'Para cajas y totes con throughput medio, el MiniLoad es el sistema más consolidado. Acceso aleatorio a cualquier posición, alta exactitud de inventario y ROI entre 18 y 36 meses.',
        alternativa: 'Tote Shuttle',
        altUrl: '/catalogo/asrs/shuttle',
        tags: ['Acceso aleatorio', 'FIFO nativo', 'Alta exactitud', 'E-commerce, farmacéutica'],
      };
    }
    return {
      nombre: 'Tote Shuttle (Alta velocidad)',
      url: '/catalogo/asrs/shuttle',
      descripcion: 'Para cajas y totes con alto throughput, el tote shuttle en paralelo supera al MiniLoad convencional. Varios robots operan simultáneamente, alcanzando caudales de 2.000+ movimientos/hora.',
      alternativa: 'Transelevador MiniLoad',
      altUrl: '/catalogo/asrs/miniload',
      tags: ['Alto throughput', 'Varios robots en paralelo', 'E-commerce grande'],
    };
  }

  if (carga === 'paletas' || carga === 'mixta') {
    if (frio) {
      return {
        nombre: 'ASRS Cámara Fría',
        url: '/catalogo/asrs/camara-frio',
        descripcion: 'Para almacenamiento de paletas a temperatura controlada (refrigerado, congelado o congelado profundo), DELIE tiene transelevadores especificados para cámara fría con aislamiento de mástil, lubricantes especiales y baterías calefaccionadas.',
        alternativa: 'Transelevador Unit-Load (con cámara)',
        altUrl: '/catalogo/asrs/unit-load',
        tags: ['Temperatura controlada', 'Hasta -30 °C', 'Ahorro energético', 'Sin operarios en frío'],
      };
    }

    if (skus === 'pocos' && (throughput === 'alto' || throughput === 'muy-alto')) {
      return {
        nombre: 'Pallet Shuttle — Robot Lanzadera',
        url: '/catalogo/asrs/shuttle',
        descripcion: 'Para paletas de producto homogéneo con muy alto throughput, el pallet shuttle es la opción de mayor densidad y velocidad. Múltiples robots en paralelo alcanzan más de 1.500 mov/hora sin ampliar la huella de planta.',
        alternativa: 'Transelevador Unit-Load',
        altUrl: '/catalogo/asrs/unit-load',
        tags: ['Alta densidad', 'Alto throughput', 'Producto homogéneo', 'Retail, consumo masivo'],
      };
    }

    if (altura === 'muy-alta' || altura === 'alta') {
      return {
        nombre: 'Transelevador Unit-Load (doble mástil)',
        url: '/catalogo/asrs/unit-load',
        descripcion: 'Para almacenes de gran altura con paletas y muchos SKUs, el transelevador unit-load de doble mástil es la opción más robusta. Opera a 30–40 metros con cargas de hasta 1.500 kg y MTBF superior a 8.000 horas.',
        alternativa: 'Pallet Shuttle',
        altUrl: '/catalogo/asrs/shuttle',
        tags: ['Gran altura', 'Alta carga', 'Acceso aleatorio', 'Manufactura, 3PL'],
      };
    }

    return {
      nombre: 'Transelevador Unit-Load',
      url: '/catalogo/asrs/unit-load',
      descripcion: 'Para paletas con variedad de SKUs y throughput medio a alto, el transelevador unit-load es la solución más versátil y de mejor relación precio/performance en el mercado argentino. Acceso aleatorio, FIFO nativo y mantenimiento predecible.',
      alternativa: 'Pallet Shuttle',
      altUrl: '/catalogo/asrs/shuttle',
      tags: ['Versátil', 'FIFO nativo', 'Mantenimiento predecible', 'Distribución, manufactura'],
    };
  }

  return {
    nombre: 'Transelevador Unit-Load',
    url: '/catalogo/asrs/unit-load',
    descripcion: 'Basado en tu perfil, el transelevador unit-load es una buena base para empezar. Te recomendamos hablar con un ingeniero de STOKA para afinar la recomendación con tus datos reales.',
    alternativa: 'MiniLoad',
    altUrl: '/catalogo/asrs/miniload',
    tags: ['Versátil', 'Amplio rango de aplicaciones'],
  };
}

export const ComparadorPage = () => {
  const { t } = useTranslation();
  const p = (k) => t(`pages.comparador.${k}`, { returnObjects: true });
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [terminado, setTerminado] = useState(false);
  const canonical = 'https://www.stokagroup.com/recursos/comparador-sistemas';

  const preguntaActual = PREGUNTAS[paso];
  const progreso = Math.round((paso / PREGUNTAS.length) * 100);

  const elegir = (opcionId) => {
    const nuevas = { ...respuestas, [preguntaActual.id]: opcionId };
    setRespuestas(nuevas);
    if (paso + 1 < PREGUNTAS.length) {
      setPaso(p => p + 1);
    } else {
      setTerminado(true);
      const rec = calcularRecomendacion(nuevas);
      fetch(GS_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          source: 'comparador_sistemas',
          message: `Comparador de sistemas — Recomendación: ${rec.nombre}`,
          carga: nuevas.carga ?? '',
          throughput: nuevas.throughput ?? '',
          altura: nuevas.altura ?? '',
          temperatura: nuevas.temperatura ?? '',
          skus: nuevas.skus ?? '',
          sistema_recomendado: rec.nombre,
          timestamp: new Date().toISOString(),
        }).toString(),
      }).catch(() => {});
    }
  };

  const reiniciar = () => {
    setPaso(0);
    setRespuestas({});
    setTerminado(false);
  };

  const recomendacion = terminado ? calcularRecomendacion(respuestas) : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Recursos", "item": "https://www.stokagroup.com/recursos" },
      { "@type": "ListItem", "position": 3, "name": "Comparador de sistemas", "item": canonical },
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SeoHead
        title={p('metaTitle')}
        description={p('metaDesc')}
        basePath={'/recursos/comparador-sistemas'}
      />
      <Helmet>
                                                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      <section className="bg-white pt-36 pb-14 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
            <LangLink to="/" className="hover:text-cyan-500 transition-colors">{t('nav.home')}</LangLink>
            <span>/</span>
            <LangLink to="/recursos" className="hover:text-cyan-500 transition-colors">{t('nav.resources')}</LangLink>
            <span>/</span>
            <span className="text-gray-600">{p('breadcrumb')}</span>
          </nav>
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-5">
            {p('heroTag')}
          </p>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
            {p('heroH1_a')}<br />
            <span className="text-cyan-500">{p('heroH1_b')}</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{p('heroSub')}</p>
        </div>
      </section>

      <div className="bg-white">
        <section className="max-w-3xl mx-auto px-6 py-12 pb-20">
          {!terminado ? (
            <div>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>{p('preguntaLabel')} {paso + 1} {p('de')} {PREGUNTAS.length}</span>
                  <span>{progreso}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-cyan-500 rounded-full"
                    animate={{ width: `${progreso}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={paso}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="text-2xl font-black text-gray-900 mb-2">{preguntaActual.titulo}</h2>
                  <p className="text-gray-500 mb-6">{preguntaActual.subtitulo}</p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {preguntaActual.opciones.map((op) => (
                      <button
                        key={op.id}
                        onClick={() => elegir(op.id)}
                        className="group flex items-start gap-4 bg-gray-50 border border-gray-200 hover:border-cyan-400 hover:bg-cyan-50 rounded-2xl p-5 text-left transition-all"
                      >
                        <span className="text-2xl mt-0.5">{op.icon}</span>
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">{op.label}</p>
                          <p className="text-sm text-gray-500 mt-0.5 leading-tight">{op.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {paso > 0 && (
                    <button
                      onClick={() => setPaso(prev => prev - 1)}
                      className="mt-6 flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-600 transition-colors"
                    >
                      <ChevronLeft size={14} />
                      {p('volverPregunta')}
                    </button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle size={20} className="text-cyan-600" />
                    <p className="text-xs font-mono text-cyan-600 uppercase tracking-widest">{p('recTag')}</p>
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-4">{recomendacion.nombre}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{recomendacion.descripcion}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {recomendacion.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-cyan-700 border border-cyan-300 bg-white rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <LangLink
                      to={recomendacion.url}
                      className="flex items-center gap-2 justify-center bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                      {p('verFicha')} <ArrowRight size={16} />
                    </LangLink>
                    <a
                      href={`https://wa.me/5492612071048?text=${encodeURIComponent(`Hola, completé el comparador de sistemas ASRS de STOKA y me recomendaron: *${recomendacion.nombre}*. Me gustaría recibir más información para mi operación.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 justify-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" className="shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {p('consultarWpp')}
                    </a>
                  </div>
                </div>

                {/* Alternative */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-8">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{p('altTag')}</p>
                  <LangLink
                    to={recomendacion.altUrl}
                    className="flex items-center justify-between group"
                  >
                    <span className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">{recomendacion.alternativa}</span>
                    <ChevronRight size={16} className="text-cyan-500" />
                  </LangLink>
                </div>

                {/* CTA */}
                <div className="text-center bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <p className="text-gray-500 mb-4 text-sm">{p('validarCTA')}</p>
                  <p className="text-gray-900 font-semibold mb-5">{p('validarDesc')}</p>
                  <LangLink to="/contacto" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                    {p('validarBtn')} <ArrowRight size={16} />
                  </LangLink>
                </div>

                <button
                  onClick={reiniciar}
                  className="mt-6 flex items-center gap-2 mx-auto text-sm text-gray-400 hover:text-cyan-600 transition-colors"
                >
                  <ChevronLeft size={14} />
                  {p('empezarNuevo')}
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </section>
      </div>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

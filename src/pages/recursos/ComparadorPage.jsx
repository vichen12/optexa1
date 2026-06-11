import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

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
    <div className="min-h-screen bg-zinc-950 text-white">
      <Helmet>
        <title>Comparador de Sistemas ASRS | ¿Cuál necesitás? | STOKA</title>
        <meta name="description" content="Elegí tipo de carga, altura y throughput y te recomendamos el sistema de almacenamiento automatizado ideal para tu operación." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-950 to-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/recursos" className="hover:text-cyan-400 transition-colors">Recursos</Link>
            <span>/</span>
            <span className="text-slate-400">Comparador</span>
          </nav>
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Herramienta de selección</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Encontrá el sistema<br /><span className="text-cyan-400">ASRS correcto</span>
          </h1>
          <p className="text-slate-400">Respondé 5 preguntas sobre tu operación y recibís la recomendación técnica personalizada.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        {!terminado ? (
          <div>
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-slate-500 mb-2">
                <span>Pregunta {paso + 1} de {PREGUNTAS.length}</span>
                <span>{progreso}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-cyan-400 rounded-full"
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
                <h2 className="text-2xl font-black text-white mb-2">{preguntaActual.titulo}</h2>
                <p className="text-slate-400 mb-6">{preguntaActual.subtitulo}</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {preguntaActual.opciones.map((op) => (
                    <button
                      key={op.id}
                      onClick={() => elegir(op.id)}
                      className="group flex items-start gap-4 bg-slate-900 border border-slate-700 hover:border-cyan-400/60 hover:bg-slate-800 rounded-2xl p-5 text-left transition-all"
                    >
                      <span className="text-2xl mt-0.5">{op.icon}</span>
                      <div>
                        <p className="font-bold text-white group-hover:text-cyan-50 transition-colors">{op.label}</p>
                        <p className="text-sm text-slate-400 mt-0.5 leading-tight">{op.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {paso > 0 && (
                  <button
                    onClick={() => setPaso(p => p - 1)}
                    className="mt-6 flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronLeft size={14} />
                    Volver a la pregunta anterior
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
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/20 rounded-3xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle size={20} className="text-cyan-400" />
                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Tu recomendación</p>
                </div>
                <h2 className="text-3xl font-black text-white mb-4">{recomendacion.nombre}</h2>
                <p className="text-slate-300 leading-relaxed mb-6">{recomendacion.descripcion}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {recomendacion.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-cyan-400 border border-cyan-400/30 rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={recomendacion.url}
                    className="flex items-center gap-2 justify-center bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    Ver ficha técnica <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/contacto"
                    className="flex items-center gap-2 justify-center border border-slate-600 hover:border-cyan-400/50 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-colors"
                  >
                    Hablar con un ingeniero
                  </Link>
                </div>
              </div>

              {/* Alternative */}
              <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 mb-8">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Alternativa a considerar</p>
                <Link
                  to={recomendacion.altUrl}
                  className="flex items-center justify-between group"
                >
                  <span className="font-bold text-white group-hover:text-cyan-400 transition-colors">{recomendacion.alternativa}</span>
                  <ChevronRight size={16} className="text-cyan-400" />
                </Link>
              </div>

              {/* CTA */}
              <div className="text-center bg-slate-950 border border-slate-800 rounded-2xl p-6">
                <p className="text-slate-400 mb-4 text-sm">¿Querés validar esta recomendación con datos reales de tu operación?</p>
                <p className="text-white font-semibold mb-5">Un ingeniero de STOKA analiza tu throughput real y te responde en 24 horas.</p>
                <Link to="/contacto" className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors">
                  Solicitar análisis técnico gratuito <ArrowRight size={16} />
                </Link>
              </div>

              <button
                onClick={reiniciar}
                className="mt-6 flex items-center gap-2 mx-auto text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <ChevronLeft size={14} />
                Empezar de nuevo
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </section>

      <Footer />
    </div>
  );
};

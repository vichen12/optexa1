import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, CheckCircle2, ArrowLeft, LayoutGrid } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

const seg = (s) => s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@ ]/gu, c => encodeURIComponent(c)).replace(/ /g, '%20');
const img = (cat, prod, file) => `/productos-delie/${cat}/${seg(prod)}/${file}`;

const CAT_R = 'robots-manipulacion';
const CAT_V = 'almacenamiento-vertical';
const CAT_T = 'equipo-transporte';
const CAT_S = 'software-inteligente';
const CAT_E = 'asrs';

const CATALOG = [
  {
    id: 'estanterias',
    label: 'AS/RS',
    href: '/catalogo/asrs',
    cover: '/n2025120811423550745.webp',
    desc: 'Estanterías AS/RS de 7 a 40 metros. Drive-in, shuttle, mezzanine.',
    products: [
      { id: 'e1', name: 'Estanterías Pallet Shuttle', image: img(CAT_E, 'Estanterías robóticas con lanzadera para palés', 'pallet-shuttle-robot-racking13c59.webp'), description: 'Estanterías de alta densidad para sistemas de robot lanzadera de paletas. Máxima utilización vertical.', features: ['7 a 40 metros de altura', 'Compatible con lanzaderas 4 y 2 vías', 'Precisión de mecanizado ±0,1 mm', 'Resistente a oxidación y niebla salina', '+1.000 proyectos'] },
      { id: 'e2', name: 'Estantería Tote Shuttle', image: img(CAT_E, 'Estantería del robot Tote Shuttle', 'tote-shuttle-robot-racking38678.webp'), description: 'Estanterías de alta densidad para robots tote shuttle, optimizadas para contenedores pequeños y medianos.', features: ['Robots tote 4 vías y bidireccionales', 'Precisión ±0,1 mm', 'Hasta 40 metros', 'Anticorrosión de silano'] },
      { id: 'e3', name: 'Estanterías para grúa apiladora', image: img(CAT_E, 'Estanterías para grúa apiladora de paletas', 'pallet-stacker-crane-racking598c7.webp'), description: 'Gran altura para transelevadores y grúas apiladoras. Máxima densidad en sistemas AS/RS.', features: ['Hasta 40 metros', 'Compatible con grúas de 1 y 2 mástiles', 'Precisión ±0,1 mm', 'Acero de grandes acerías certificadas'] },
      { id: 'e4', name: 'Mini-estantería Flybox', image: img(CAT_E, 'Mini-estantería Flybox', 'mini-flybox-racking93d5a.webp'), description: 'Estantería compacta con distancia ultra estrecha entre contenedores para máxima densidad en espacios reducidos.', features: ['Distancia ultra estrecha entre contenedores', 'Compatible con robot Mini-Flybox', 'Altura 550–12.000 mm', 'E-commerce, farmacéutica, manufactura'] },
      { id: 'e5', name: 'Transelevador + Robot lanzadera', image: img(CAT_E, 'Transelevador Grúa + Estantería Robot Lanzadera', 'pallet-stacker-crane-shuttle-robot-racking89e90.webp'), description: 'Sistema combinado que integra transelevadores con robots lanzadera para máxima flexibilidad y eficiencia.', features: ['Combina transelevadores y robots lanzadera', 'Flexibilidad para distintos tipos de paleta', 'Optimización vertical y horizontal', 'Gestión coordinada por WCS'] },
      { id: 'e6', name: 'Estanterías Miniload', image: img(CAT_E, 'Estanterías Miniload', 'miniload-rackinga0ea0.webp'), description: 'Para transelevadores MiniLoad, alta densidad de contenedores y totes.', features: ['Compatible con MiniLoad simple y doble profundidad', 'Precisión ±0,1 mm', 'Anticorrosión', 'Farmacéutica, e-commerce y manufactura'] },
      { id: 'e7', name: 'Estanterías de servicio pesado', image: img(CAT_E, 'Estanterías de servicio pesado', 'heavy-duty-racking9a1ae.webp'), description: 'Alta capacidad para almacenamiento manual o semiautomático de paletas de gran peso.', features: ['Hasta 2.000 kg por palé', 'Diseño personalizable', 'Compatible con frío y trabajo pesado', 'Anticorrosión de silano'] },
      { id: 'e8', name: 'Estanterías push-back', image: img(CAT_E, 'Estanterías push-para almacenamiento-de alta densidad', 'push-in-racking-for-high-density-storage2a4c0.webp'), description: 'Alta densidad tipo push-back con mínimos pasillos de acceso. Sistema LIFO.', features: ['Máxima densidad con mínimos pasillos', 'Sistema LIFO', 'Compatible con carretillas estándar', 'Hasta 2.000 kg por palé'] },
      { id: 'e9', name: 'Estanterías de entresuelo', image: img(CAT_E, 'Estanterías de entresuelo', 'mezzanine-racking7da1b.webp'), description: 'Plataforma elevada sobre estanterías para crear niveles adicionales de almacenamiento o trabajo.', features: ['Niveles adicionales sobre estanterías', 'Diseño personalizable', 'Acceso por escaleras y montacargas', 'Acero de alta resistencia'] },
      { id: 'e10', name: 'Plataforma de estructura de acero', image: img(CAT_E, 'Plataforma de estructura de acero', 'steel-structure-platformfb756.webp'), description: 'Plataforma elevada de acero para espacio adicional de almacenamiento o trabajo.', features: ['Acero de alta resistencia', 'Personalizable en dimensiones', 'Cargas ligeras y pesadas', 'Bajo costo de construcción'] },
      { id: 'e11', name: 'Palé de almacenamiento de acero', image: img(CAT_E, 'Plataforma de almacenamiento de acero', 'steel-storage-palletce853.webp'), description: 'Palé de acero para entornos donde los palés de madera no son adecuados.', features: ['Mayor durabilidad', 'Resistente a humedad, frío y químicos', 'Compatible con sistemas automáticos', 'Bajo mantenimiento'] },
      { id: 'e12', name: 'Drive-in racking', image: img(CAT_E, 'Conducir en estanterías', 'drive-in-rackinga817d.webp'), description: 'La carretilla ingresa dentro de la estantería para depositar o retirar paletas. Máxima utilización del espacio.', features: ['Hasta 80% del área de almacenamiento', 'Sistema LIFO', 'Compatible con carretillas estándar', 'Apto para frío y trabajo pesado'] },
    ],
  },
  {
    id: 'vertical',
    label: 'Almacenamiento vertical',
    href: '/catalogo/almacenamiento-vertical',
    cover: img(CAT_V, 'Carrusel vertical inteligente para almacenamiento automatizado de alta-densidad', '2025112714330825019.webp'),
    desc: 'Carruseles verticales y módulos VLM. Hasta 90% menos espacio de suelo.',
    products: [
      { id: 'v1', name: 'Carrusel vertical inteligente', image: img(CAT_V, 'Carrusel vertical inteligente para almacenamiento automatizado de alta-densidad', '2025112714330825019.webp'), description: 'Sistema vertical automatizado que circula transportadores internamente para llevar materiales al operario.', features: ['Altura hasta 17.580 mm', 'Carga máx. por transportador: 180 kg', 'Capacidad total: 6.000 kg', 'Configurable: ligero, medio o pesado'] },
      { id: 'v2', name: 'Módulo de elevación vertical (VLM)', image: img(CAT_V, 'Solución de elevación vertical automatizada de mercancías-a-personas', '20251127144756e3768.webp'), description: 'Solución "mercancías a persona" con extractor inteligente que sitúa materiales en la ventanilla del operario.', features: ['Ahorra hasta el 90% del espacio de suelo', 'Compatible con ERP y MES', 'Alta precisión por posición absoluta', 'Múltiples ventanillas simultáneas', 'Pesaje integrado y escáner opcionales'] },
    ],
  },
  {
    id: 'robots',
    label: 'Robots de manipulación',
    href: '/catalogo/robots-manipulacion',
    cover: img(CAT_R, 'Robot lanzadera de cuatro direcciones-para paletas', 'pallet-four-way-shuttle-robotb829c.webp'),
    desc: 'Grúas apiladoras, transelevadores MiniLoad, robots lanzadera y AMR.',
    products: [
      { id: 'r1', name: 'Grúa apiladora mástil simple', image: img(CAT_R, 'Grúa apiladora de un solo mástil', 'single-mast-pallet-stacker-crane92251.jpg'), description: 'Robot AS/RS que opera con movimientos verticales y horizontales para gestionar productos paletizados.', features: ['Profundidad simple, doble y múltiple', 'Apto para frío, antiexplosión y salas limpias', 'Alta rigidez estructural', 'Compatible con AGV/AMR, RGV y transportadores', 'Certificación CE e ISO 9001'] },
      { id: 'r2', name: 'Grúa apiladora doble mástil', image: img(CAT_R, 'Grúa apiladora de paletas de doble-mástil', 'double-mast-pallet-stacker-crane202510151146372d8c5.webp'), description: 'Configuración de doble mástil para mayor estabilidad en grandes alturas y alta capacidad de carga.', features: ['Mayor estabilidad en alturas elevadas', 'Capacidad de carga superior', 'Compatible con WCS', 'Velocidades optimizadas de elevación', 'Certificación CE e ISO 9001'] },
      { id: 'r3', name: 'Grúa apiladora servicio pesado', image: img(CAT_R, 'Grúa apiladora de paletas-de servicio pesado', 'heavy-duty-pallet-stacker-crane7126b.webp'), description: 'Versión reforzada para cargas de gran peso en operaciones industriales exigentes.', features: ['Capacidad de carga superior', 'Estructura reforzada para 24/7', 'Sistemas de seguridad redundantes', 'Mantenimiento preventivo simplificado'] },
      { id: 'r4', name: 'Grúa apiladora personalizada', image: img(CAT_R, 'Grúa apiladora de paletas personalizada', 'customized-pallet-stacker-crane5dc5d.webp'), description: 'Solución a medida para almacenes con requerimientos específicos de dimensiones, carga o entorno.', features: ['Diseño a medida por proyecto', 'Compatible con almacenes irregulares', 'Integración con ERP, WMS, WCS', 'Producción 100% interna'] },
      { id: 'r5', name: 'Transelevador MiniLoad profundidad simple', image: img(CAT_R, 'Grúa apiladora de minicarga profunda-de profundidad', 'single-deep-miniload-stacker-crane41fe7.webp'), description: 'Sistema AS/RS de alto rendimiento para contenedores, cajas y totes de pequeño y mediano tamaño.', features: ['Hasta 300 kg por unidad', 'Velocidad máx. 360 m/min', 'Precisión ±2 mm', 'Compatible con totes, cartones y bandejas'] },
      { id: 'r6', name: 'Transelevador MiniLoad doble profundidad', image: img(CAT_R, 'Transelevador Miniload de doble-profundidad', 'double-deep-miniload-stacker-crane84c33.webp'), description: 'Doble profundidad que maximiza la densidad de almacenamiento para contenedores y totes.', features: ['Doble profundidad para mayor densidad', 'Hasta 300 kg por unidad', '360 m/min de velocidad', 'Componentes modulares independientes'] },
      { id: 'r7', name: 'Transelevador MiniLoad personalizado', image: img(CAT_R, 'Grúa apiladora miniload personalizada', 'customized-miniload-stacker-cranec409d.webp'), description: 'Solución MiniLoad a medida adaptable a múltiples entornos operativos.', features: ['Diseño personalizado', 'Múltiples tipos de contenedores', 'Integración directa con WMS/WCS'] },
      { id: 'r8', name: 'Robot lanzadera 4 vías — paletas', image: img(CAT_R, 'Robot lanzadera de cuatro direcciones-para paletas', 'pallet-four-way-shuttle-robotb829c.webp'), description: 'Robot de paletas de 4 direcciones con diseño ultradelgado. Alta densidad con gran volumen y pocos SKU.', features: ['Solo 125 mm de espesor', '1,5 toneladas de capacidad', 'Control multi-robot por WCS', 'Operativo a -25°C', 'Plug-and-play, instalación rápida'] },
      { id: 'r9', name: 'Robot lanzadera bidireccional — paletas', image: img(CAT_R, 'Robot lanzadera bidireccional-para paletas', 'pallet-two-way-shuttle-robot5fbef.webp'), description: 'Robot lanzadera de dos vías para pasillos lineales de alta eficiencia.', features: ['Movimiento bidireccional eficiente', '1,5 toneladas de capacidad', 'Integración WCS', 'Bajo consumo energético'] },
      { id: 'r10', name: 'Robot lanzadera madre-hijo', image: img(CAT_R, 'Robot lanzadera para padres e hijos de paletas', 'pallet-parent-child-shuttle-robotdad7c.webp'), description: 'Sistema combinado donde el robot madre transporta robots hijo para acceder a distintos niveles.', features: ['Acceso autónomo a múltiples niveles', 'Mayor throughput en alta densidad', 'Gestión centralizada WCS'] },
      { id: 'r11', name: 'Robot lanzadera — almacén en frío', image: img(CAT_R, 'Robot transportador de paletas de almacenamiento en frío', 'cold-storage-pallet-shuttle-robot3e9c9.webp'), description: 'Versión para cámaras frigoríficas hasta -25°C.', features: ['Operativo hasta -25°C', 'Sellado hermético anticondensación', 'Diagnóstico remoto'] },
      { id: 'r12', name: 'Robot lanzadera antiexplosión', image: img(CAT_R, 'Robot transportador de palés a prueba de explosiones', 'explosion-proof-pallet-shuttle-robot9120d.webp'), description: 'Versión certificada ATEX para zonas con riesgo de explosión.', features: ['Certificación ATEX', 'Materiales especialmente seleccionados', 'Normativas de seguridad industrial'] },
      { id: 'r13', name: 'Robot tote lanzadera 4 vías', image: img(CAT_R, 'Tote Robot de transporte de cuatro-vías', 'tote-four-way-shuttle-robot6428f.webp'), description: 'Sistema AS/RS de alta velocidad para artículos pequeños en contenedores.', features: ['Hasta 50 kg por contenedor', '5 m/s de velocidad', 'Precisión ±2 mm (99,99%)', '-25°C a +45°C'] },
      { id: 'r14', name: 'Robot tote bidireccional', image: img(CAT_R, 'Robot transportador bidireccional Tote', 'tote-two-way-shuttle-robot20c07.webp'), description: 'Robot tote de dos vías para pasillos lineales, ideal para e-commerce y distribución.', features: ['Bidireccional para pasillos lineales', 'Hasta 50 kg por contenedor', 'Multi-robot bajo WCS'] },
    ],
  },
  {
    id: 'transport',
    label: 'Equipo de transporte',
    href: '/catalogo/equipo-transporte',
    cover: img(CAT_T, 'Transportador de cadena', 'chain-conveyor9e540.webp'),
    desc: 'Elevadores, transportadores de cadena, rodillos y paletizadores.',
    products: [
      { id: 't1', name: 'Elevador de paletas', image: img(CAT_T, 'Carretilla elevadora-Tipo elevador vertical', 'forklift-type-vertical-lifterbcb8e.webp'), description: 'Elevación vertical de paletas entre niveles del almacén.', features: ['Plataforma hasta 1.200×1.600 mm', '2.000 kg de carga', 'Hasta 60 m/min', 'Precisión ±2 mm'] },
      { id: 't2', name: 'Elevador de totes alta velocidad', image: img(CAT_T, 'Elevador de bolsas de alta-velocidad', 'high-speed-tote-lifter042d8.webp'), description: 'Elevación de alta velocidad para contenedores y totes entre niveles verticales.', features: ['150 kg de carga máxima', '5 m/s de velocidad', '3 m/s² de aceleración', 'Operación 24/7'] },
      { id: 't3', name: 'Máquina de aterrizaje y elevación', image: img(CAT_T, 'Máquina de aterrizaje y elevación', 'landing-lifting-machine33ba0.webp'), description: 'Componente modular para transferencia vertical de paletas dentro de líneas de transporte.', features: ['Hasta 3.000 kg por palé', 'Variador de frecuencia', 'Integración WMS/WCS'] },
      { id: 't4', name: 'Máquina de transferencia 90°', image: img(CAT_T, 'Máquina de transferencia de 90 grados', '90-degree-transfer-machine95639.webp'), description: 'Cambia la dirección de paletas a 90° sin interrumpir el flujo.', features: ['Cambio a 90° sin interrupciones', 'Hasta 3.000 kg por palé', 'Arranque suave'] },
      { id: 't5', name: 'Transferencia de totes', image: img(CAT_T, 'Máquina de transferencia de bolsas', 'tote-transfer-machine40dd2.webp'), description: 'Cambio de dirección para contenedores y totes en líneas de alta velocidad.', features: ['Alta velocidad de transferencia', 'Múltiples tamaños de totes', 'Diseño modular'] },
      { id: 't6', name: 'Paletizador / Despaletizador', image: img(CAT_T, 'PaletizadorDespaletizador', 'palletizer-depalletizer58a90.webp'), description: 'Formación automática de paletas a partir de capas de producto.', features: ['Paletizado y despaletizado automático', 'Integración directa WMS/WCS', 'Bajo mantenimiento'] },
      { id: 't7', name: 'Transportador de cadena', image: img(CAT_T, 'Transportador de cadena', 'chain-conveyor9e540.webp'), description: 'Transportador de cadena para el movimiento eficiente de paletas.', features: ['3.000 kg por palé', 'Variador de frecuencia', 'Operable a baja temperatura'] },
      { id: 't8', name: 'Cinta transportadora de totes', image: img(CAT_T, 'Transportador de cinta de asas', 'tote-belt-conveyor1b7b5.webp'), description: 'Cinta modular para totes y contenedores entre estaciones de trabajo.', features: ['Línea recta e inclinada', 'Múltiples tamaños de totes', 'Operación 24/7'] },
      { id: 't9', name: 'Transportador de rodillos — paletas', image: img(CAT_T, 'Transportador de rodillos', 'roller-conveyor4b990.webp'), description: 'Transportador de rodillos para movimiento horizontal de paletas.', features: ['3.000 kg por palé', 'Velocidad configurable', 'Integración con WMS/WCS'] },
      { id: 't10', name: 'Transportador de rodillos — totes', image: img(CAT_T, 'Transportador de rodillos totalizadores', 'tote-roller-conveyor24f15.webp'), description: 'Rodillos con zonas de acumulación para gestionar el flujo de totes.', features: ['Acumulación para gestión de flujo', 'Múltiples tamaños de totes', 'Compatible con MiniLoad y robots tote'] },
    ],
  },
  {
    id: 'sistema',
    label: 'Software inteligente',
    href: '/catalogo/software',
    cover: img(CAT_S, '(WMS) Sistema de gestión de almacenes', '2025112715331054f3e.webp'),
    desc: 'WMS, WCS, HMS y visualización 3D para control total del almacén.',
    products: [
      { id: 's1', name: 'WMS — Gestión de almacenes', image: img(CAT_S, '(WMS) Sistema de gestión de almacenes', '2025112715331054f3e.webp'), description: 'Software de gestión de almacén certificado CMMI Nivel 5 con visibilidad y control en tiempo real.', features: ['Entradas, salidas e inventario en tiempo real', 'Conecta con ERP, MES, SAP, TMS y OMS', 'Digital Twin 3D para visibilidad 360°', 'Reduce efecto látigo hasta 70%'] },
      { id: 's2', name: 'WCS — Control de almacén', image: img(CAT_S, '(WCS) Sistema de control de almacén', '202511271540270edaa.webp'), description: 'Integra y coordina en tiempo real todos los equipos: robots, transelevadores, transportadores, AMR y RGV.', features: ['Monitoreo 2D y 3D en tiempo real', 'Descomposición automática de tareas', 'Selección de ruta óptima'] },
      { id: 's3', name: 'HMS — Sistema hombre-máquina', image: img(CAT_S, '(HMS) Sistema hombre-máquina', '202511271543590186b.webp'), description: 'Interfaz entre operario y equipos para control y supervisión de la instalación logística.', features: ['Interfaz intuitiva para operadores', 'Supervisión en tiempo real', 'Compatible con dispositivos móviles'] },
      { id: 's4', name: 'ECS — Control electrónico', image: img(CAT_S, '(ECS) Sistema de control electrónico', '202511271547349105f.webp'), description: 'Gestión integral del funcionamiento coordinado de todos los componentes eléctricos.', features: ['Monitoreo de motores, variadores y sensores', 'Diagnóstico predictivo', 'Integración con WCS y WMS'] },
      { id: 's5', name: 'Interfaz API', image: img(CAT_S, 'Interfaz API', '20251127155815290ed.webp'), description: 'Capa de integración para conectar el sistema de almacén con plataformas empresariales externas.', features: ['Integración con ERP, MES, SAP, TMS, OMS', 'APIs RESTful estándar', 'Documentación técnica completa'] },
      { id: 's6', name: 'Visualización 3D centralizada', image: img(CAT_S, 'Sistema de control central de visualización 3D', '20251127160404e52d8.webp'), description: 'Representación tridimensional en tiempo real de todo el almacén.', features: ['Representación 3D en tiempo real', 'Digital Twin para simulación y optimización', 'Dashboards por rol de usuario'] },
    ],
  },
];

function ProductModal({ product, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  if (!product) return null;

  const images = product.images?.length ? product.images : [product.image];
  const prev = () => setImgIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setImgIdx((i) => (i + 1) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto z-10 flex flex-col"
          initial={{ scale: 0.96, y: 16, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.96, y: 16, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-gray-100 shadow transition-colors"
          >
            <X size={16} className="text-gray-600" />
          </button>

          {/* IMAGE GALLERY */}
          <div className="relative bg-gray-50 rounded-t-2xl overflow-hidden" style={{ minHeight: '280px', maxHeight: '380px' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIdx}
                src={images[imgIdx]}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full object-contain"
                style={{ maxHeight: '380px', minHeight: '280px' }}
              />
            </AnimatePresence>

            {/* Prev / Next — solo si hay más de 1 imagen */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow hover:bg-white transition-colors"
                >
                  <ChevronLeft size={18} className="text-gray-700" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow hover:bg-white transition-colors"
                >
                  <ChevronRight size={18} className="text-gray-700" />
                </button>
                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === imgIdx ? 'bg-cyan-500 w-5' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* THUMBNAILS — solo si hay más de 1 imagen */}
          {images.length > 1 && (
            <div className="flex gap-2 px-5 pt-3 overflow-x-auto scrollbar-none">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    i === imgIdx ? 'border-cyan-500' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt={`${product.name} — imagen ${i + 1}`} className="w-full h-full object-contain bg-gray-50" />
                </button>
              ))}
            </div>
          )}

          {/* INFO */}
          <div className="p-6 pt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.description}</p>

            {product.features?.length > 0 && (
              <ul className="space-y-2 mb-6">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-cyan-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => { onClose(); window.dispatchEvent(new CustomEvent('openLeadForm', { detail: { product: product.name } })); }}
              style={{ outline: 'none' }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm rounded-xl transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Consultar por WhatsApp
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export const ProductCatalog = () => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat');
  const initialCat = catParam ? CATALOG.find(c => c.id === catParam) || null : null;

  const [activeCat, setActiveCat] = useState(initialCat);
  const [selected, setSelected] = useState(null);
  const topRef = useRef(null);

  const goTocat = (cat) => {
    setActiveCat(cat);
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  const goBack = () => {
    setActiveCat(null);
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  /* ── VISTA: CATEGORÍAS ── */
  if (!activeCat) return (
    <section ref={topRef} className="py-20 px-4 sm:px-6 bg-gray-50 min-h-screen scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
            DELIE · Fabricante certificado ISO 9001 · CE
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
            Nuestras{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
              Categorías
            </span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATALOG.map((cat, i) => (
            <motion.button
              key={cat.id}
              onClick={() => goTocat(cat)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              style={{ outline: 'none' }}
              className="text-left rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden bg-gray-100 relative">
                <img
                  src={cat.cover}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(ev) => { ev.currentTarget.style.opacity = '0'; }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 right-3 text-xs font-mono text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {cat.products.length} productos
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 font-black text-base uppercase tracking-tight mb-1">{cat.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{cat.desc}</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-500 group-hover:gap-2 transition-all">
                    Ver productos <ChevronRight size={13} />
                  </span>
                  {cat.href && (
                    <Link to={cat.href} onClick={e => e.stopPropagation()}
                      className="text-[10px] text-gray-400 hover:text-cyan-500 transition-colors underline underline-offset-2">
                      Página dedicada
                    </Link>
                  )}
                </div>
              </div>
            </motion.button>
          ))}

          {/* Card YouTube DELIE */}
          <motion.a
            href="https://www.youtube.com/@DELIECN"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: CATALOG.length * 0.07 }}
            className="text-left rounded-2xl overflow-hidden border border-gray-200 bg-slate-900 shadow-sm hover:shadow-md hover:border-red-500/40 transition-all duration-300 group"
          >
            <div className="aspect-video flex items-center justify-center bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-slate-700 to-slate-900" />
              <img src="/image.png" alt="DELIE — Fabricante de sistemas ASRS" className="relative z-10 w-28 object-contain" />
              <div className="absolute top-3 right-3 w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white font-black text-base uppercase tracking-tight mb-1">DELIE en YouTube</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-3">Instalaciones reales, demostraciones y casos de uso de los sistemas ASRS DELIE en todo el mundo.</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-400 group-hover:gap-2 transition-all">
                Ver canal <ChevronRight size={13} />
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );

  /* ── VISTA: PRODUCTOS ── */
  return (
    <section className="bg-gray-50 min-h-screen" ref={topRef}>

      {/* BREADCRUMB + TÍTULO */}
      <div className="px-4 sm:px-6 pt-10 pb-6 max-w-6xl mx-auto scroll-mt-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap">
          <button
            onClick={goBack}
            style={{ outline: 'none' }}
            className="flex items-center gap-1.5 hover:text-cyan-500 transition-colors font-semibold"
          >
            <LayoutGrid size={13} />
            Todas las categorías
          </button>
          <ChevronRight size={12} className="text-gray-300" />
          <span className="text-gray-700 font-bold uppercase tracking-wide">{activeCat.label}</span>
        </nav>

        <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-2">
          DELIE · {activeCat.products.length} productos
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
          {activeCat.label}
        </h2>
      </div>

      {/* BARRA DE CATEGORÍAS STICKY */}
      <div className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {/* Botón "Todas" */}
          <button
            onClick={goBack}
            style={{ outline: 'none' }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border border-gray-200 bg-white text-gray-500 hover:border-cyan-300 hover:text-gray-800 transition-all shrink-0"
          >
            <LayoutGrid size={12} />
            Todas
          </button>

          <div className="w-px h-5 bg-gray-200 shrink-0" />

          {CATALOG.map((cat) => (
            <button
              key={cat.id}
              onClick={() => goTocat(cat)}
              style={{ outline: 'none' }}
              className={[
                'px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-all shrink-0',
                activeCat.id === cat.id
                  ? 'bg-cyan-500 border-cyan-500 text-white shadow-sm'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-cyan-300 hover:text-gray-800',
              ].join(' ')}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID DE PRODUCTOS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {activeCat.products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelected(product)}
                style={{ outline: 'none' }}
                className="text-left bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                    onError={(ev) => { ev.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="px-3 py-3">
                  <p className="text-sm text-gray-800 font-semibold leading-snug">{product.name}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-cyan-500 mt-1 font-medium">
                    Ver detalle <ChevronRight size={11} />
                  </span>
                </div>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

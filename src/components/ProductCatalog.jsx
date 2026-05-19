import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

// Encodes path segments: spaces→%20, accents→%HH, keeps + as + (valid in URL paths)
const seg = (s) => s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@ ]/gu, c => encodeURIComponent(c)).replace(/ /g, '%20');
const img = (cat, prod, file) => `/${seg('productos deliecn')}/${seg(cat)}/${seg(prod)}/${file}`;

const CAT_R = 'Robot de manipulación de materiales';
const CAT_V = 'Dispositivo de almacenamiento vertical';
const CAT_T = 'Equipo de transporte';
const CAT_S = 'Sistema de almacenamiento inteligente';
const CAT_E = 'Estanterías de almacén';

const CATALOG = [
  {
    id: 'robots',
    label: 'Robots de manipulación',
    products: [
      { id: 'r1', name: 'Grúa apiladora mástil simple', image: img(CAT_R, 'Grúa apiladora de un solo mástil', 'single-mast-pallet-stacker-crane92251.jpg'), description: 'Robot AS/RS que opera con movimientos verticales y horizontales para gestionar productos paletizados.', features: ['Profundidad simple, doble y múltiple', 'Apto para frío, antiexplosión y salas limpias', 'Alta rigidez estructural', 'Compatible con AGV/AMR, RGV y transportadores', 'Certificación CE e ISO 9001'] },
      { id: 'r2', name: 'Grúa apiladora doble mástil', image: img(CAT_R, 'Grúa apiladora de paletas de doble-mástil', 'double-mast-pallet-stacker-crane202510151146372d8c5.webp'), description: 'Configuración de doble mástil para mayor estabilidad en grandes alturas y alta capacidad de carga.', features: ['Mayor estabilidad en alturas elevadas', 'Capacidad de carga superior', 'Compatible con WCS', 'Velocidades optimizadas de elevación', 'Certificación CE e ISO 9001'] },
      { id: 'r3', name: 'Grúa apiladora servicio pesado', image: img(CAT_R, 'Grúa apiladora de paletas-de servicio pesado', 'heavy-duty-pallet-stacker-crane7126b.webp'), description: 'Versión reforzada para cargas de gran peso en operaciones industriales exigentes.', features: ['Capacidad de carga superior', 'Estructura reforzada para 24/7', 'Sistemas de seguridad redundantes', 'Mantenimiento preventivo simplificado'] },
      { id: 'r4', name: 'Grúa apiladora personalizada', image: img(CAT_R, 'Grúa apiladora de paletas personalizada', 'customized-pallet-stacker-crane5dc5d.webp'), description: 'Solución a medida para almacenes con requerimientos específicos de dimensiones, carga o entorno.', features: ['Diseño a medida por proyecto', 'Compatible con almacenes irregulares', 'Integración con ERP, WMS, WCS', 'Producción 100% interna'] },
      { id: 'r5', name: 'Transelevador MiniLoad profundidad simple', image: img(CAT_R, 'Grúa apiladora de minicarga profunda-de profundidad', 'single-deep-miniload-stacker-crane41fe7.webp'), description: 'Sistema AS/RS de alto rendimiento para contenedores, cajas y totes de pequeño y mediano tamaño.', features: ['Hasta 300 kg por unidad', 'Velocidad máx. 360 m/min', 'Precisión ±2 mm', 'Compatible con totes, cartones y bandejas', 'Farmacéutica, e-commerce y fabricación'] },
      { id: 'r6', name: 'Transelevador MiniLoad doble profundidad', image: img(CAT_R, 'Transelevador Miniload de doble-profundidad', 'double-deep-miniload-stacker-crane84c33.webp'), description: 'Doble profundidad que maximiza la densidad de almacenamiento para contenedores y totes.', features: ['Doble profundidad para mayor densidad', 'Hasta 300 kg por unidad', '360 m/min de velocidad', 'Componentes modulares independientes'] },
      { id: 'r7', name: 'Transelevador MiniLoad personalizado', image: img(CAT_R, 'Grúa apiladora miniload personalizada', 'customized-miniload-stacker-cranec409d.webp'), description: 'Solución MiniLoad a medida adaptable a múltiples entornos operativos.', features: ['Diseño personalizado', 'Múltiples tipos de contenedores', 'Integración directa con WMS/WCS', 'Entornos de baja temperatura y polvo'] },
      { id: 'r8', name: 'Robot lanzadera 4 vías — paletas', image: img(CAT_R, 'Robot lanzadera de cuatro direcciones-para paletas', 'pallet-four-way-shuttle-robotb829c.webp'), description: 'Robot de paletas de 4 direcciones con diseño ultradelgado. Alta densidad con gran volumen y pocos SKU.', features: ['Solo 125 mm de espesor', '1,5 toneladas de capacidad', 'Control multi-robot por WCS', 'Operativo a -25°C', 'Plug-and-play, instalación rápida'] },
      { id: 'r9', name: 'Robot lanzadera bidireccional — paletas', image: img(CAT_R, 'Robot lanzadera bidireccional-para paletas', 'pallet-two-way-shuttle-robot5fbef.webp'), description: 'Robot lanzadera de dos vías para pasillos lineales de alta eficiencia.', features: ['Movimiento bidireccional eficiente', '1,5 toneladas de capacidad', 'Compatible con paleta estándar', 'Integración WCS', 'Bajo consumo energético'] },
      { id: 'r10', name: 'Robot lanzadera madre-hijo', image: img(CAT_R, 'Robot lanzadera para padres e hijos de paletas', 'pallet-parent-child-shuttle-robotdad7c.webp'), description: 'Sistema combinado donde el robot madre transporta robots hijo para acceder a distintos niveles.', features: ['Acceso autónomo a múltiples niveles', 'Mayor throughput en alta densidad', 'Gestión centralizada WCS', 'Reducción de pasillos necesarios'] },
      { id: 'r11', name: 'Robot lanzadera — almacén en frío', image: img(CAT_R, 'Robot transportador de paletas de almacenamiento en frío', 'cold-storage-pallet-shuttle-robot3e9c9.webp'), description: 'Versión para cámaras frigoríficas hasta -25°C, maximizando la automatización en cadena de frío.', features: ['Operativo hasta -25°C', 'Sellado hermético anticondensación', 'Diagnóstico remoto', 'Eficiencia energética optimizada'] },
      { id: 'r12', name: 'Robot lanzadera antiexplosión', image: img(CAT_R, 'Robot transportador de palés a prueba de explosiones', 'explosion-proof-pallet-shuttle-robot9120d.webp'), description: 'Versión certificada ATEX para zonas con riesgo de explosión en industrias química y petroquímica.', features: ['Certificación ATEX', 'Materiales especialmente seleccionados', 'Normativas de seguridad industrial', 'Diagnóstico remoto'] },
      { id: 'r13', name: 'Robot tote lanzadera 4 vías', image: img(CAT_R, 'Tote Robot de transporte de cuatro-vías', 'tote-four-way-shuttle-robot6428f.webp'), description: 'Sistema AS/RS de alta velocidad para artículos pequeños en contenedores. Tecnología "mercancías a persona".', features: ['Hasta 50 kg por contenedor', '5 m/s de velocidad', 'Precisión ±2 mm (99,99%)', '-25°C a +45°C', 'Recarga por supercondensador 24/7'] },
      { id: 'r14', name: 'Robot tote bidireccional', image: img(CAT_R, 'Robot transportador bidireccional Tote', 'tote-two-way-shuttle-robot20c07.webp'), description: 'Robot tote de dos vías para pasillos lineales, ideal para e-commerce y distribución de alta rotación.', features: ['Bidireccional para pasillos lineales', 'Hasta 50 kg por contenedor', 'Alto throughput', 'Multi-robot bajo WCS'] },
    ],
  },
  {
    id: 'vertical',
    label: 'Almacenamiento vertical',
    products: [
      { id: 'v1', name: 'Carrusel vertical inteligente', image: img(CAT_V, 'Carrusel vertical inteligente para almacenamiento automatizado de alta-densidad', '2025112714330825019.webp'), description: 'Sistema vertical automatizado que circula transportadores internamente para llevar materiales al operario.', features: ['Altura hasta 17.580 mm', 'Carga máx. por transportador: 180 kg', 'Capacidad total: 6.000 kg', 'Configurable: ligero, medio o pesado'] },
      { id: 'v2', name: 'Módulo de elevación vertical (VLM)', image: img(CAT_V, 'Solución de elevación vertical automatizada de mercancías-a-personas', '20251127144756e3768.webp'), description: 'Solución "mercancías a persona" con extractor inteligente que sitúa materiales en la ventanilla del operario.', features: ['Ahorra hasta el 90% del espacio de suelo', 'Compatible con ERP y MES', 'Alta precisión por posición absoluta', 'Múltiples ventanillas simultáneas', 'Pesaje integrado y escáner opcionales'] },
    ],
  },
  {
    id: 'transport',
    label: 'Equipo de transporte',
    products: [
      { id: 't1', name: 'Elevador de paletas', image: img(CAT_T, 'Carretilla elevadora-Tipo elevador vertical', 'forklift-type-vertical-lifterbcb8e.webp'), description: 'Elevación vertical de paletas entre niveles del almacén, conectando líneas horizontales con sistemas en altura.', features: ['Plataforma hasta 1.200×1.600 mm', '2.000 kg de carga', 'Hasta 60 m/min', 'Precisión ±2 mm', 'Compatible con sistemas AS/RS'] },
      { id: 't2', name: 'Elevador de totes alta velocidad', image: img(CAT_T, 'Elevador de bolsas de alta-velocidad', 'high-speed-tote-lifter042d8.webp'), description: 'Elevación de alta velocidad para contenedores y totes entre niveles verticales en almacenes automatizados.', features: ['150 kg de carga máxima', '5 m/s de velocidad', '3 m/s² de aceleración', 'Correa síncrona doble', 'Operación 24/7'] },
      { id: 't3', name: 'Máquina de aterrizaje y elevación', image: img(CAT_T, 'Máquina de aterrizaje y elevación', 'landing-lifting-machine33ba0.webp'), description: 'Componente modular para transferencia vertical de paletas dentro de líneas de transporte continuas.', features: ['Hasta 3.000 kg por palé', 'Variador de frecuencia', 'Integración WMS/WCS', 'Compatible con europalés e industriales'] },
      { id: 't4', name: 'Máquina de transferencia 90°', image: img(CAT_T, 'Máquina de transferencia de 90 grados', '90-degree-transfer-machine95639.webp'), description: 'Cambia la dirección de paletas a 90° dentro del sistema de transporte sin interrumpir el flujo.', features: ['Cambio a 90° sin interrupciones', 'Hasta 3.000 kg por palé', 'Arranque suave', 'Compatible con rodillos y cadena'] },
      { id: 't5', name: 'Transferencia de totes', image: img(CAT_T, 'Máquina de transferencia de bolsas', 'tote-transfer-machine40dd2.webp'), description: 'Cambio de dirección para contenedores y totes en líneas de transporte automatizadas de alta velocidad.', features: ['Alta velocidad de transferencia', 'Múltiples tamaños de totes', 'Interfaces estándar WMS/WCS', 'Diseño modular', 'Operación 24/7'] },
      { id: 't6', name: 'Paletizador / Despaletizador', image: img(CAT_T, 'PaletizadorDespaletizador', 'palletizer-depalletizer58a90.webp'), description: 'Formación automática de paletas a partir de capas de producto o separación de productos paletizados.', features: ['Paletizado y despaletizado automático', 'Múltiples configuraciones de carga', 'Integración directa WMS/WCS', 'Bajo mantenimiento'] },
      { id: 't7', name: 'Transportador de cadena', image: img(CAT_T, 'Transportador de cadena', 'chain-conveyor9e540.webp'), description: 'Transportador de cadena para el movimiento eficiente de paletas, parte del sistema modular DELIECN.', features: ['3.000 kg por palé', 'Variador de frecuencia', 'Arranque suave', 'Operable a baja temperatura', 'Integración WMS/WCS'] },
      { id: 't8', name: 'Cinta transportadora de totes', image: img(CAT_T, 'Transportador de cinta de asas', 'tote-belt-conveyor1b7b5.webp'), description: 'Cinta modular para totes y contenedores entre estaciones de trabajo y almacenes automatizados.', features: ['Línea recta e inclinada', 'Múltiples tamaños de totes', 'Interfaces WMS/WCS', 'Operación 24/7', '+1.000 proyectos en todo el mundo'] },
      { id: 't9', name: 'Transportador de rodillos — paletas', image: img(CAT_T, 'Transportador de rodillos', 'roller-conveyor4b990.webp'), description: 'Transportador de rodillos para movimiento horizontal de paletas, componente central del sistema DELIECN.', features: ['3.000 kg por palé', 'Velocidad configurable', 'Múltiples longitudes y anchos', 'Integración con WMS/WCS y transelevadores'] },
      { id: 't10', name: 'Transportador de rodillos — totes', image: img(CAT_T, 'Transportador de rodillos totalizadores', 'tote-roller-conveyor24f15.webp'), description: 'Rodillos con zonas de acumulación para gestionar el flujo de totes en sistemas de alta densidad.', features: ['Acumulación para gestión de flujo', 'Múltiples tamaños de totes', 'Interfaces WMS/WCS', 'Compatible con MiniLoad y robots tote'] },
    ],
  },
  {
    id: 'sistema',
    label: 'Software inteligente',
    products: [
      { id: 's1', name: 'WMS — Gestión de almacenes', image: img(CAT_S, '(WMS) Sistema de gestión de almacenes', '2025112715331054f3e.webp'), description: 'Software de gestión de almacén certificado CMMI Nivel 5 con visibilidad y control en tiempo real.', features: ['Entradas, salidas e inventario en tiempo real', 'Conecta con ERP, MES, SAP, TMS y OMS', 'Digital Twin 3D para visibilidad 360°', 'Reduce efecto látigo hasta 70%', 'Mejora utilización de estanterías hasta 90%'] },
      { id: 's2', name: 'WCS — Control de almacén', image: img(CAT_S, '(WCS) Sistema de control de almacén', '202511271540270edaa.webp'), description: 'Integra y coordina en tiempo real todos los equipos: robots, transelevadores, transportadores, AMR y RGV.', features: ['Monitoreo 2D y 3D en tiempo real', 'Descomposición automática de tareas', 'Selección de ruta óptima', 'Estadísticas y gestión de fallos', 'Simulación previa al despliegue'] },
      { id: 's3', name: 'HMS — Sistema hombre-máquina', image: img(CAT_S, '(HMS) Sistema hombre-máquina', '202511271543590186b.webp'), description: 'Interfaz entre operario y equipos para control, supervisión e interacción con la instalación logística.', features: ['Interfaz intuitiva para operadores', 'Supervisión en tiempo real', 'Alertas y notificaciones', 'Compatible con dispositivos móviles'] },
      { id: 's4', name: 'ECS — Control electrónico', image: img(CAT_S, '(ECS) Sistema de control electrónico', '202511271547349105f.webp'), description: 'Gestión integral del funcionamiento coordinado de todos los componentes eléctricos del almacén.', features: ['Monitoreo de motores, variadores y sensores', 'Diagnóstico predictivo', 'Integración con WCS y WMS', 'Comunicación industrial estándar'] },
      { id: 's5', name: 'Interfaz API', image: img(CAT_S, 'Interfaz API', '20251127155815290ed.webp'), description: 'Capa de integración para conectar el sistema de almacén con plataformas empresariales externas.', features: ['Integración con ERP, MES, SAP, TMS, OMS', 'APIs RESTful estándar', 'Comunicación cifrada y segura', 'Documentación técnica completa'] },
      { id: 's6', name: 'Visualización 3D centralizada', image: img(CAT_S, 'Sistema de control central de visualización 3D', '20251127160404e52d8.webp'), description: 'Representación tridimensional en tiempo real de todo el almacén, equipos, flujos y estado operativo.', features: ['Representación 3D en tiempo real', 'Digital Twin para simulación y optimización', 'Dashboards por rol de usuario', 'Integración con WMS y WCS'] },
    ],
  },
  {
    id: 'estanterias',
    label: 'Estanterías',
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
];

function ProductModal({ product, onClose }) {
  if (!product) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          className="relative bg-zinc-900 border border-white/15 rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto z-10"
          initial={{ scale: 0.96, y: 16, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.96, y: 16, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={16} className="text-white/60" />
          </button>

          <div className="aspect-video bg-zinc-800 rounded-t-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-5">{product.description}</p>

            {product.features?.length > 0 && (
              <ul className="space-y-2 mb-6">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle2 size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <a
              href="#contacto"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-sm rounded-xl transition-colors"
            >
              Consultar este producto
              <ChevronRight size={15} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export const ProductCatalog = () => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat');
  const initialIndex = catParam ? Math.max(0, CATALOG.findIndex(c => c.id === catParam)) : 0;

  const [activeCat, setActiveCat] = useState(initialIndex);
  const [selected, setSelected] = useState(null);

  const category = CATALOG[activeCat];

  return (
    <section className="py-20 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] font-mono tracking-[0.4em] uppercase text-cyan-400 mb-3">
            DELIECN · Fabricante certificado ISO 9001 · CE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Catálogo de Productos
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATALOG.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(i)}
              style={{ outline: 'none' }}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150',
                activeCat === i
                  ? 'bg-zinc-900 border-cyan-400/50 text-cyan-300'
                  : 'bg-zinc-900 border-white/10 text-white/50 hover:text-white/80',
              ].join(' ')}
            >
              {cat.label}
              <span className={['ml-2 text-xs px-1.5 py-0.5 rounded-full', activeCat === i ? 'bg-cyan-400/15 text-cyan-400' : 'bg-white/5 text-white/35'].join(' ')}>
                {cat.products.length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {category.products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelected(product)}
                style={{ outline: 'none' }}
                className="text-left bg-zinc-900 rounded-xl overflow-hidden border border-white/8 hover:border-cyan-400/40 transition-all duration-200"
              >
                <div className="aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(ev) => { ev.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-sm text-white/80 font-medium leading-snug">{product.name}</p>
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

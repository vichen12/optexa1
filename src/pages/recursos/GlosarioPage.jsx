import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { LangLink } from '../../lib/i18n-utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { SeoHead } from '../../lib/SeoHead';

const CATS = [
  { id: 'todos',       label: 'Todos' },
  { id: 'sistemas',    label: 'Sistemas ASRS' },
  { id: 'robots',      label: 'Robots y equipos' },
  { id: 'software',    label: 'Software y control' },
  { id: 'operaciones', label: 'Operaciones' },
  { id: 'finanzas',    label: 'Finanzas y legal' },
];

const TERMINOS = [
  // ── SISTEMAS ASRS ──────────────────────────────────────────────
  { term: 'ASRS', id: 'asrs', cat: 'sistemas', def: 'Automated Storage and Retrieval System. Infraestructura que almacena y recupera paletas, cajas o contenedores sin intervención humana directa. Incluye transelevadores, shuttles, VLM y software de control.' },
  { term: 'AS/RS', id: 'as-rs', cat: 'sistemas', def: 'Variante ortográfica de ASRS con barras separadoras. Se usa indistintamente; el estándar ISO prefiere "ASRS" pero "AS/RS" es más frecuente en documentación técnica americana.' },
  { term: 'Transelevador', id: 'transelevador', cat: 'sistemas', def: 'Grúa automatizada que se desplaza dentro de un pasillo de estanterías, en rieles instalados en el piso y el techo, para almacenar y recuperar paletas. Capacidades hasta 1.500 kg y alturas de hasta 40 metros.' },
  { term: 'Unit-Load', id: 'unit-load', cat: 'sistemas', def: 'Transelevador diseñado para manejar unidades de carga completas (paletas). Trabaja entre 500 y 1.500 kg por movimiento. Categoría más pesada de ASRS.' },
  { term: 'MiniLoad', id: 'miniload', cat: 'sistemas', def: 'Transelevador de menor tamaño para contenedores, bandejas, totes y cajas. Opera en pasillos de 700–1.200 mm. Ideal para picking en e-commerce, farmacéutica y manufactura.' },
  { term: 'Pallet Shuttle', id: 'pallet-shuttle', cat: 'sistemas', def: 'Robot autónomo que opera dentro del canal de las estanterías, trasladando paletas hasta las posiciones de almacenamiento en profundidad. Permite densidades muy superiores al transelevador. Versiones de 2 y 4 vías.' },
  { term: 'Tote Shuttle', id: 'tote-shuttle', cat: 'sistemas', def: 'Robot shuttle para contenedores pequeños (totes) en lugar de paletas. Muy usado en e-commerce y farmacéutica para almacenamiento de alta densidad con picking goods-to-person.' },
  { term: 'VLM (Vertical Lift Module)', id: 'vlm', cat: 'sistemas', def: 'Armario automatizado que almacena bandejas en dos columnas verticales y las entrega al operario en una ventana de acceso a nivel del suelo. Ideal para repuestos, herramientas y piezas pequeñas.' },
  { term: 'Carrusel Vertical', id: 'carrusel-vertical', cat: 'sistemas', def: 'Sistema que hace rotar bandejas verticalmente —como una rueda— hasta llevar la posición deseada al punto de acceso del operario. Similar al VLM pero con arquitectura de cadena en lugar de ascensor.' },
  { term: 'Autoportante', id: 'autoportante', cat: 'sistemas', def: 'Estructura en la que las propias estanterías del ASRS actúan como soporte estructural del edificio. Elimina la necesidad de nave previa y reduce el costo total del proyecto un 20–30% en instalaciones de gran altura.' },
  { term: 'Almacén autoportante', id: 'almacen-autoportante', cat: 'sistemas', def: 'Almacén cuya estructura edilicia está integrada con las estanterías ASRS: las vigas de los racks soportan techo, paneles y cargas dinámicas del transelevador. Permite alturas de 20 a 45 m.' },
  { term: 'Almacén de gran altura', id: 'almacen-gran-altura', cat: 'sistemas', def: 'Almacén con altura libre superior a 15 m, generalmente de 20 a 40 m. La gran altura hace económicamente viables los transelevadores: el costo por posición cae drásticamente al aumentar la altura.' },
  { term: 'Dark Warehouse', id: 'dark-warehouse', cat: 'sistemas', def: 'Almacén 100% automatizado que opera sin operarios en el área de almacenamiento. La interacción humana ocurre únicamente en recepción y expedición. Permite operación 24/7 y reduce costos de iluminación y climatización.' },
  { term: 'Cámara fría', id: 'camara-fria', cat: 'sistemas', def: 'Instalación de almacenamiento a temperatura controlada: refrigerada (+2 °C a +8 °C), congelados (-18 °C a -25 °C) o congelado profundo (-30 °C). Los sistemas ASRS para cámara fría llevan equipos especiales de sellado, lubricación y calefacción de baterías.' },
  { term: 'Cámara frigorífica automatizada', id: 'camara-frigorifica-automatizada', cat: 'sistemas', def: 'Instalación de almacenamiento a temperatura controlada equipada con ASRS. Diseño especial: lubricantes de baja temperatura, sellado hermético de cuadros eléctricos y tratamiento anticondensación.' },
  { term: 'Micro-fulfillment', id: 'micro-fulfillment', cat: 'sistemas', def: 'Centro de distribución compacto (400–2.000 m²) ubicado dentro o próximo a una tienda urbana para entregas en pocas horas. Usa ASRS miniaturizados de alta densidad que maximizan SKUs en el espacio mínimo.' },
  { term: 'Mástil (de transelevador)', id: 'mastil', cat: 'sistemas', def: 'Columna vertical del transelevador sobre la que sube y baja la plataforma con la carga. Diseños de un mástil (single mast, hasta ~30 m) y doble mástil (double mast, hasta 40 m para cargas más pesadas).' },

  // ── ROBOTS Y EQUIPOS ──────────────────────────────────────────
  { term: 'AGV', id: 'agv', cat: 'robots', def: 'Automated Guided Vehicle. Robot móvil que sigue rutas predefinidas marcadas en el suelo (cinta magnética, QR, cable inductivo). Trabaja en flujos fijos y repetitivos, como transporte entre línea de producción y almacén.' },
  { term: 'AMR', id: 'amr', cat: 'robots', def: 'Autonomous Mobile Robot. Robot que navega libremente por el almacén usando SLAM con sensores láser y cámaras 3D. A diferencia del AGV, no requiere marcas físicas en el piso y puede adaptarse a cambios de layout.' },
  { term: 'SLAM', id: 'slam', cat: 'robots', def: 'Simultaneous Localization and Mapping. Tecnología que permite a un robot construir un mapa del entorno mientras se localiza dentro de él, en tiempo real. Es la base de la navegación autónoma de los AMR.' },
  { term: 'Cobots', id: 'cobots', cat: 'robots', def: 'Robots colaborativos diseñados para trabajar junto a operarios humanos sin necesidad de jaulas de protección. En almacenes asisten en picking, paletizado y embalaje, aumentando productividad sin reemplazar completamente al personal.' },
  { term: 'Sorter', id: 'sorter', cat: 'robots', def: 'Sistema de clasificación automática de alta velocidad que desvía cajas, paquetes o totes hacia destinos predefinidos (chutes). Los sorters de banda cruzada clasifican hasta 10.000 ítems/hora.' },
  { term: 'Conveyor', id: 'conveyor', cat: 'robots', def: 'Transportador (cinta, cadena, rodillos). En intralogística conecta las distintas zonas del almacén —recepción, ASRS, picking, expedición— en un flujo continuo integrado con el WCS para ruteo dinámico.' },
  { term: 'MHE', id: 'mhe', cat: 'robots', def: 'Material Handling Equipment. Término genérico para todos los equipos que mueven, almacenan y controlan materiales: transelevadores, shuttles, AGVs, AMRs, conveyors, sorters, VLM y paletizadores.' },
  { term: 'Paletizado', id: 'paletizado', cat: 'robots', def: 'Proceso de apilar y organizar cajas sobre una paleta. En almacenes automatizados lo realizan robots paletizadores a velocidades de hasta 2.000 cajas/hora, sin intervención humana.' },
  { term: 'Despaletizado', id: 'despaletizado', cat: 'robots', def: 'Proceso de desapilar las cajas de una paleta para alimentar la zona de picking o el ASRS. Los robots despaletizadores con visión artificial identifican cajas de distintos tamaños automáticamente.' },

  // ── SOFTWARE Y CONTROL ────────────────────────────────────────
  { term: 'WMS', id: 'wms', cat: 'software', def: 'Warehouse Management System. Software que gestiona el inventario en tiempo real, controla la ubicación de cada producto y genera tareas de recepción, almacenamiento, picking y expedición. Se integra con el ERP.' },
  { term: 'WCS', id: 'wcs', cat: 'software', def: 'Warehouse Control System. Software que controla los equipos físicos del almacén —transelevadores, shuttles, transportadores, robots— en tiempo real, con latencias de menos de 50 ms. Convierte misiones del WMS en comandos para los PLC.' },
  { term: 'WES', id: 'wes', cat: 'software', def: 'Warehouse Execution System. Capa de software entre el WMS y el WCS que coordina en tiempo real la asignación de tareas a operarios, AGVs y estaciones. Gestiona prioridades dinámicas y balancea la carga entre recursos.' },
  { term: 'HMS', id: 'hms', cat: 'software', def: 'Host Management System. Sistema de gestión de alto nivel que coordina múltiples instalaciones o niveles jerárquicos de gestión logística. A veces equivalente al WMS en entornos simples.' },
  { term: 'ERP', id: 'erp', cat: 'software', def: 'Enterprise Resource Planning. Sistema de gestión empresarial integral (SAP, Oracle, Dynamics) que gestiona finanzas, compras, ventas, producción e inventario. El WMS se integra con el ERP para recibir órdenes y confirmar movimientos.' },
  { term: 'PLC', id: 'plc', cat: 'software', def: 'Programmable Logic Controller. Computadora industrial que controla los equipos físicos del almacén —motores, sensores, actuadores— a nivel de máquina. El WCS envía comandos al PLC, que los ejecuta en el hardware.' },
  { term: 'Digital Twin', id: 'digital-twin', cat: 'software', def: 'Réplica virtual y dinámica del almacén físico que refleja en tiempo real el estado de todos los equipos, el inventario y los flujos. Permite simular cambios de layout y predecir cuellos de botella antes de implementarlos en el sistema real.' },
  { term: 'Telemetría', id: 'telemetria', cat: 'software', def: 'Transmisión y análisis remoto de datos operativos: posición del transelevador, temperatura de motores, vibración de rodamientos, consumo eléctrico. Permite mantenimiento predictivo y diagnóstico remoto sin visita presencial.' },
  { term: 'RFID', id: 'rfid', cat: 'software', def: 'Radio Frequency Identification. Tecnología que permite leer etiquetas sin línea de vista directa, hasta varios metros de distancia. En almacenes ASRS el RFID permite trazabilidad automática de cada paleta sin escaneo manual.' },
  { term: 'OEE', id: 'oee', cat: 'software', def: 'Overall Equipment Effectiveness. Métrica que combina disponibilidad, rendimiento y calidad para expresar la eficiencia real de un equipo vs. su potencial teórico. En almacenes automatizados el OEE de los transelevadores suele superar el 85%.' },
  { term: 'KPI', id: 'kpi', cat: 'software', def: 'Key Performance Indicator. Métricas que miden el desempeño de la operación logística: throughput, exactitud de inventario, tiempo de ciclo, costo por movimiento, etc. El WMS reporta KPIs en tiempo real.' },
  { term: 'SLA', id: 'sla', cat: 'software', def: 'Service Level Agreement. Compromiso contractual sobre disponibilidad del sistema y tiempos de reparación. STOKA ofrece SLAs con respuesta en horas para su cartera de clientes en Argentina y Chile.' },
  { term: 'MTBF', id: 'mtbf', cat: 'software', def: 'Mean Time Between Failures. Indicador de confiabilidad: cuántas horas opera un equipo en promedio entre una falla y la siguiente. Los transelevadores DELIE tienen MTBF superior a 8.000 horas.' },
  { term: 'MTTR', id: 'mttr', cat: 'software', def: 'Mean Time To Repair. Tiempo promedio que tarda un equipo en restaurarse después de una falla. Junto con el MTBF, determina la disponibilidad operativa del sistema.' },
  { term: 'Uptime', id: 'uptime', cat: 'software', def: 'Porcentaje del tiempo que un sistema está operativo y disponible. Un ASRS de clase industrial tiene uptime superior al 99%. Se calcula como MTBF / (MTBF + MTTR).' },
  { term: 'Redundancia', id: 'redundancia', cat: 'software', def: 'Duplicación de componentes críticos (servidores, PLC, redes) para garantizar continuidad operativa en caso de falla. Los sistemas DELIE tienen servidor WCS redundante con failover automático en menos de 30 segundos.' },
  { term: 'Failover', id: 'failover', cat: 'software', def: 'Conmutación automática al sistema redundante cuando falla el componente principal, sin intervención humana. En sistemas WCS de alta disponibilidad ocurre en menos de 30 segundos.' },
  { term: 'Trazabilidad', id: 'trazabilidad', cat: 'software', def: 'Capacidad de registrar y consultar el historial completo de un producto: quién lo recibió, en qué posición estuvo, cuándo se movió y hacia dónde fue expedido. El WMS mantiene trazabilidad completa por lote y número de serie.' },
  { term: 'Integrador WMS', id: 'integrador-wms', cat: 'software', def: 'Empresa especializada que implementa, configura e integra sistemas WMS con los ERP del cliente. STOKA es integrador de los WMS y WCS de DELIE para instalaciones en Argentina y Chile.' },

  // ── OPERACIONES ───────────────────────────────────────────────
  { term: 'Goods-to-Person (GTP)', id: 'goods-to-person', cat: 'operaciones', def: 'Modelo operativo en el que el sistema automatizado lleva el producto al operario, en lugar de que el operario recorra el almacén. Aumenta la productividad de picking hasta 5 veces respecto al picking manual convencional.' },
  { term: 'Person-to-Goods', id: 'person-to-goods', cat: 'operaciones', def: 'Modelo tradicional en el que el operario se desplaza por el almacén buscando los productos. El operario pasa el 60–70% del tiempo caminando. El modelo goods-to-person elimina ese recorrido.' },
  { term: 'Picking', id: 'picking', cat: 'operaciones', def: 'Proceso de seleccionar y recolectar unidades de producto de sus ubicaciones para completar un pedido. Es la operación de mayor costo en la mayoría de los almacenes (60–70% del costo operativo total).' },
  { term: 'Put-away', id: 'put-away', cat: 'operaciones', def: 'Proceso de almacenar los productos recibidos en sus ubicaciones designadas. El WMS dirige cada unidad a la ubicación óptima según el perfil de rotación del SKU.' },
  { term: 'Batch Picking', id: 'batch-picking', cat: 'operaciones', def: 'Método de picking en el que un operario o robot recoge simultáneamente los productos de múltiples pedidos en un mismo recorrido. Reduce recorridos totales pero requiere una etapa posterior de sorting por pedido.' },
  { term: 'Pick-to-Light', id: 'pick-to-light', cat: 'operaciones', def: 'Indicadores luminosos sobre ubicaciones de almacenamiento que guían al operario en qué posición picar y cuántas unidades tomar. Más rápido y preciso que papel o escáner de mano.' },
  { term: 'Put-to-Light', id: 'put-to-light', cat: 'operaciones', def: 'Indicadores luminosos sobre cubetas o posiciones que guían al operario sobre dónde depositar cada unidad durante el sorting por pedido. Segunda etapa del batch picking.' },
  { term: 'Voice Picking', id: 'voice-picking', cat: 'operaciones', def: 'Picking dirigido por voz: el WMS envía instrucciones de audio al auricular del operario y recibe confirmaciones verbales. Libera ambas manos para el manipuleo del producto.' },
  { term: 'Throughput', id: 'throughput', cat: 'operaciones', def: 'Número de movimientos (entrada + salida) que un sistema puede procesar por hora. Es el indicador más crítico para dimensionar un ASRS y determinar la flota de equipos necesaria.' },
  { term: 'SKU', id: 'sku', cat: 'operaciones', def: 'Stock Keeping Unit. Código único que identifica cada variante distinta de producto. El número de SKUs activos es determinante en la elección entre transelevador y shuttle.' },
  { term: 'FIFO', id: 'fifo', cat: 'operaciones', def: 'First In, First Out. Los productos más antiguos salen primero. Fundamental en alimentos, farmacéutica y cualquier producto con fecha de vencimiento.' },
  { term: 'LIFO', id: 'lifo', cat: 'operaciones', def: 'Last In, First Out. El último producto ingresado sale primero. Modo de operación natural de los canales de shuttle en profundidad; los modelos 4 vías permiten acceso más flexible.' },
  { term: 'FEFO', id: 'fefo', cat: 'operaciones', def: 'First Expired, First Out. La prioridad de salida es la fecha de vencimiento más próxima, no el orden de ingreso. Crítico en farmacéutica y alimentos perecederos.' },
  { term: 'Slotting', id: 'slotting', cat: 'operaciones', def: 'Proceso de asignar cada SKU a su ubicación óptima según frecuencia de picking y características del producto. Un slotting bien diseñado puede reducir el tiempo de picking en un 20–30%.' },
  { term: 'Análisis ABC', id: 'analisis-abc', cat: 'operaciones', def: 'Clasificación del inventario por frecuencia de movimiento: A (20% de SKUs = 80% de movimientos), B (30% = 15%), C (50% = 5%). Determina la ubicación de cada SKU en el almacén.' },
  { term: 'Análisis XYZ', id: 'analisis-xyz', cat: 'operaciones', def: 'Clasificación del inventario por variabilidad de demanda: X (regular y predecible), Y (con variaciones moderadas), Z (irregular o esporádica). Se combina con el análisis ABC para el slotting óptimo.' },
  { term: 'Paleta / Pallet', id: 'pallet', cat: 'operaciones', def: 'Plataforma de madera, plástico o metal sobre la cual se apilan cargas paletizadas. Euro-paleta: 1.200 × 800 mm. Americana: 1.200 × 1.000 mm. El tamaño y peso máximo determina el tipo de transelevador.' },
  { term: 'Tote', id: 'tote', cat: 'operaciones', def: 'Contenedor plástico estandarizado (fondo de rejilla) usado en sistemas MiniLoad y conveyor para almacenar y transportar artículos de pequeño formato. Es la unidad de manipulación en e-commerce y farmacéutica.' },
  { term: 'Bandeja', id: 'bandeja', cat: 'operaciones', def: 'Contenedor plano o perforado usado en sistemas VLM. Cada bandeja ocupa una posición en el módulo vertical y puede contener múltiples SKUs divididos por separadores.' },
  { term: 'Ciclo combinado', id: 'ciclo-combinado', cat: 'operaciones', def: 'Operación en la que un transelevador realiza simultáneamente una tarea de almacenamiento y una de recuperación en el mismo viaje. Aumenta significativamente el throughput vs. ciclos simples.' },
  { term: 'Ciclo simple', id: 'ciclo-simple', cat: 'operaciones', def: 'Operación en la que el transelevador realiza un solo movimiento por viaje: solo almacenamiento o solo recuperación. Menos eficiente que el ciclo combinado.' },
  { term: 'Pasillo', id: 'pasillo', cat: 'operaciones', def: 'Corredor entre dos bloques de estanterías donde opera el transelevador. En sistemas ASRS el pasillo es estrecho (1.000–1.800 mm) y de uso exclusivo del equipo automatizado.' },
  { term: 'Canal', id: 'canal', cat: 'operaciones', def: 'Espacio interior de las estanterías en profundidad donde el robot shuttle almacena paletas en fila. Un canal puede tener entre 2 y 30 posiciones de profundidad según el diseño.' },
  { term: 'Posición', id: 'posicion', cat: 'operaciones', def: 'Celda individual dentro de la estantería donde se almacena exactamente una paleta, tote o contenedor. Se identifica por pasillo, nivel y profundidad.' },
  { term: 'Footprint', id: 'footprint', cat: 'operaciones', def: 'Huella física que ocupa un sistema de almacenamiento en el piso del almacén. Un sistema de alta densidad (shuttle) tiene menor footprint que un sistema convencional para la misma capacidad.' },
  { term: 'Losa', id: 'losa', cat: 'operaciones', def: 'Piso de hormigón del almacén sobre el que se instalan los rieles y la estructura de las estanterías. Para un ASRS, la losa debe estar nivelada dentro de ±5 mm en 5 metros y tener la resistencia a la carga calculada por la ingeniería.' },
  { term: 'Cross-docking', id: 'cross-docking', cat: 'operaciones', def: 'Operativa en la que los productos llegan al almacén y se preparan para expedición sin pasar por almacenamiento permanente. El producto cruza el almacén (docking a docking) directamente.' },
  { term: 'Staging Area', id: 'staging', cat: 'operaciones', def: 'Zona de preparación donde se consolidan los productos de una orden antes de su expedición. El WCS coordina la entrega de los contenedores desde el ASRS al staging para minimizar los tiempos de espera del camión.' },
  { term: 'Consolidación', id: 'consolidacion', cat: 'operaciones', def: 'Proceso de reunir los distintos productos de un mismo pedido, provenientes de diferentes zonas del almacén, en un único contenedor, paleta o zona de expedición.' },
  { term: 'Wave de picking', id: 'wave', cat: 'operaciones', def: 'Agrupación de órdenes de picking que se procesan en un mismo ciclo de trabajo para optimizar los recorridos del ASRS. El WMS genera waves según el tiempo de expedición comprometido y la capacidad del equipo.' },
  { term: 'Centro de Distribución (CD)', id: 'centro-distribucion', cat: 'operaciones', def: 'Instalación logística cuya función principal es recibir productos de proveedores y redistribuirlos eficientemente hacia los puntos de venta o clientes finales.' },
  { term: '3PL', id: '3pl', cat: 'operaciones', def: 'Third Party Logistics. Empresa que ofrece servicios logísticos a terceros: almacenamiento, transporte y gestión de inventario. Los operadores 3PL usan ASRS para mayor capacidad con el mismo footprint.' },
  { term: 'WIP', id: 'wip', cat: 'operaciones', def: 'Work In Progress. Inventario en proceso dentro de la cadena de producción. Los ASRS en manufactura frecuentemente gestionan el WIP entre etapas de producción.' },
  { term: 'Buffer', id: 'buffer', cat: 'operaciones', def: 'Zona o capacidad de almacenamiento temporal que absorbe las diferencias de velocidad entre dos procesos consecutivos. Los buffers de entrada y salida amortiguan los picos de demanda del transelevador.' },
  { term: 'Secuenciación', id: 'secuenciacion', cat: 'operaciones', def: 'Recuperación y entrega de ítems en un orden específico para optimizar el proceso posterior. Los WCS avanzados realizan secuenciación automática coordinando múltiples transelevadores.' },
  { term: 'Layout', id: 'layout', cat: 'operaciones', def: 'Distribución física de los equipos, pasillos, zonas funcionales y flujos dentro de un almacén. STOKA realiza simulaciones 3D con análisis de flujos en cada propuesta de automatización.' },
  { term: 'Lead Time', id: 'lead-time', cat: 'operaciones', def: 'Tiempo desde que se genera un pedido hasta que el cliente lo recibe. En almacenes automatizados el lead time interno se reduce un 60–80% respecto a la operación manual gracias al goods-to-person.' },
  { term: 'Cubicaje', id: 'cubicaje', cat: 'operaciones', def: 'Medición del volumen, peso y dimensiones de los ítems a almacenar. El cubicaje preciso de cada SKU es necesario para dimensionar las posiciones del ASRS y seleccionar los totes correctos.' },
  { term: 'Mezzanine', id: 'mezzanine', cat: 'operaciones', def: 'Estructura metálica elevada que crea un nivel adicional dentro de una nave industrial. Los VLM y MiniLoad se integran frecuentemente con mezzanines para acceso multi-nivel.' },
  { term: 'Zona de expedición', id: 'zona-expedicion', cat: 'operaciones', def: 'Área del almacén destinada a consolidar los pedidos listos para despachar, etiquetar, verificar y cargar en los camiones de distribución.' },
  { term: 'Zona de recepción', id: 'zona-recepcion', cat: 'operaciones', def: 'Área donde se descargan, inspeccionan e identifican los productos que llegan de proveedores. Incluye control de calidad, cubicaje, pesaje y escaneo para el ingreso al WMS.' },
  { term: 'Intralogística', id: 'intralogistica', cat: 'operaciones', def: 'Gestión y optimización de todos los flujos internos de materiales, información y personas dentro de una instalación logística o productiva. Abarca desde la recepción hasta la expedición.' },
  { term: 'Omnicanalidad', id: 'omnicanalidad', cat: 'operaciones', def: 'Modelo en el que el cliente compra y recibe productos por cualquier canal de forma integrada. Los almacenes omnicanal gestionan simultáneamente reposición de tiendas y pedidos online individuales.' },
  { term: 'Last Mile', id: 'last-mile', cat: 'operaciones', def: 'Último tramo de la distribución: desde el centro de distribución hasta el cliente final. Es el segmento más costoso de la logística (40–60% del costo total de distribución).' },

  // ── FINANZAS Y LEGAL ──────────────────────────────────────────
  { term: 'TCO', id: 'tco', cat: 'finanzas', def: 'Total Cost of Ownership. Suma de todos los costos durante la vida útil del sistema: inversión inicial, instalación, mantenimiento, energía, actualizaciones de software y reemplazos. El indicador correcto para comparar alternativas de automatización.' },
  { term: 'ROI', id: 'roi', cat: 'finanzas', def: 'Return on Investment. Tiempo en meses que tarda una inversión en recuperarse con los ahorros que genera. En automatización de almacenes el ROI típico está entre 18 y 48 meses.' },
  { term: 'CAPEX', id: 'capex', cat: 'finanzas', def: 'Capital Expenditure. Inversión en activos fijos: sistemas ASRS, equipos, instalaciones. Se amortiza contablemente durante años. Con el RIMI, puede amortizarse el 100% en el primer ejercicio.' },
  { term: 'OPEX', id: 'opex', cat: 'finanzas', def: 'Operating Expenditure. Gastos operativos recurrentes: mantenimiento, energía, mano de obra y licencias de software. La automatización transforma OPEX variable (mano de obra) en CAPEX + OPEX fijo (mantenimiento).' },
  { term: 'FAT', id: 'fat', cat: 'finanzas', def: 'Factory Acceptance Test. Prueba funcional del sistema ASRS en las instalaciones del fabricante, en presencia del cliente, antes del envío. Verifica que el equipo cumple las especificaciones contractuales.' },
  { term: 'SAT', id: 'sat', cat: 'finanzas', def: 'Site Acceptance Test. Prueba funcional completa del sistema instalado en el almacén del cliente, al finalizar la puesta en marcha. Es el hito que da inicio a la garantía del equipo.' },
  { term: 'RIMI', id: 'rimi', cat: 'finanzas', def: 'Régimen de Incentivo a la Manufactura e Industria (Ley 27.802). Permite amortización acelerada del 100% de bienes de capital en el primer ejercicio y devolución anticipada del IVA en importaciones de equipos productivos.' },
  { term: 'Decreto 513/2025', id: 'decreto-513', cat: 'finanzas', def: 'Decreto del Poder Ejecutivo Nacional que establece arancel 0% para la importación de equipos ASRS y sistemas de automatización logística en Argentina. Vigente desde 2025.' },
  { term: 'BICE', id: 'bice', cat: 'finanzas', def: 'Banco de Inversión y Comercio Exterior. Entidad financiera estatal argentina que ofrece líneas de crédito para modernización industrial y bienes de capital, con tasas preferenciales y plazos de hasta 10 años.' },
  { term: 'Amortización acelerada', id: 'amortizacion-acelerada', cat: 'finanzas', def: 'Mecanismo fiscal que permite deducir el valor total de un bien de capital en el primer año. Disponible en Argentina bajo el RIMI para bienes de capital productivos.' },
  { term: 'Estabilidad fiscal', id: 'estabilidad-fiscal', cat: 'finanzas', def: 'Garantía legal que protege una inversión de cambios impositivos negativos durante un período determinado. El RIGI (Ley 27.742) ofrece estabilidad fiscal por 30 años para proyectos que califican.' },
];

export const GlosarioPage = () => {
  const { t } = useTranslation();
  const p = (k) => t(`pages.glosario.${k}`, { returnObjects: true });
  const [query, setQuery] = useState('');
  const [catActiva, setCatActiva] = useState('todos');
  const canonical = 'https://www.stokagroup.com/recursos/glosario';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Recursos", "item": "https://www.stokagroup.com/recursos" },
      { "@type": "ListItem", "position": 3, "name": "Glosario ASRS", "item": canonical },
    ],
  };

  const buscando = query.length > 1;

  const filtered = TERMINOS.filter(t => {
    const matchCat = catActiva === 'todos' || t.cat === catActiva;
    const matchQuery = !buscando || t.term.toLowerCase().includes(query.toLowerCase()) || t.def.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  const contarCat = (id) => id === 'todos'
    ? TERMINOS.length
    : TERMINOS.filter(t => t.cat === id).length;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SeoHead
        title={p('metaTitle')}
        description={p('metaDesc')}
        basePath={'/recursos/glosario'}
      />
      <Helmet>
                                        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-white pt-36 pb-10 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
            <LangLink to="/" className="hover:text-cyan-500 transition-colors">{t('nav.home')}</LangLink>
            <span>/</span>
            <LangLink to="/recursos" className="hover:text-cyan-500 transition-colors">{t('nav.resources')}</LangLink>
            <span>/</span>
            <span className="text-gray-600">{p('breadcrumb')}</span>
          </nav>
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-5">
            {p('heroTag')} · {TERMINOS.length}+
          </p>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
            {p('heroH1_a')}<br />
            <span className="text-cyan-500">{p('heroH1_b')}</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            {p('heroSub')}
          </p>
          <div className="relative max-w-sm mx-auto">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={p('searchPlaceholder')}
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors text-sm shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Filtros por categoría */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
          {CATS.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setCatActiva(cat.id); setQuery(''); }}
              className={`text-xs font-bold px-4 py-2 rounded-full border transition-colors ${
                catActiva === cat.id && !buscando
                  ? 'bg-cyan-500 border-cyan-500 text-white'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-cyan-300 hover:text-gray-900'
              }`}
            >
              {cat.label}
              <span className={`ml-1.5 text-[10px] font-mono ${catActiva === cat.id && !buscando ? 'text-white/70' : 'text-gray-400'}`}>
                {contarCat(cat.id)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Términos */}
      <div className="bg-white">
        <section className="max-w-4xl mx-auto px-6 py-8 pb-20">
          {buscando && (
            <p className="text-sm text-gray-400 mb-6">
              {filtered.length} resultado{filtered.length !== 1 ? 's' : ''} para "<strong className="text-gray-700">{query}</strong>"
            </p>
          )}

          <AnimatePresence mode="wait">
            <motion.dl
              key={catActiva + query}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((t, i) => (
                <div
                  key={t.id}
                  id={t.id}
                  className={`py-4 ${i < filtered.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-black text-gray-900 text-sm shrink-0">{t.term}</dt>
                    {buscando && (
                      <span className="text-[10px] font-mono text-cyan-600 border border-cyan-200 rounded-full px-2 py-0.5 shrink-0">
                        {CATS.find(c => c.id === t.cat)?.label}
                      </span>
                    )}
                  </div>
                  <dd className="text-gray-500 text-sm leading-relaxed mt-1">{t.def}</dd>
                </div>
              ))}
            </motion.dl>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-gray-400 text-center py-16">{p('noResults')}</p>
          )}
        </section>
      </div>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

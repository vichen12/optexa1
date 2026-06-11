import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const TERMINOS = [
  { term: 'ASRS', id: 'asrs', def: 'Automated Storage and Retrieval System (Sistema Automatizado de Almacenamiento y Recuperación). Infraestructura tecnológica que almacena y recupera paletas, cajas o contenedores sin intervención humana directa. Incluye transelevadores, shuttles, VLM y software de control.' },
  { term: 'AS/RS', id: 'as-rs', def: 'Variante ortográfica de ASRS con barras separadoras. Se usa indistintamente. El estándar ISO prefiere "ASRS" pero "AS/RS" es más común en documentación técnica americana.' },
  { term: 'Transelevador', id: 'transelevador', def: 'Grúa automatizada que se desplaza dentro de un pasillo de estanterías, en rieles instalados en el piso y el techo, para almacenar y recuperar paletas o contenedores. Tiene capacidades de hasta 1.500 kg y puede operar en alturas de hasta 40 metros.' },
  { term: 'Unit-Load', id: 'unit-load', def: 'Transelevador diseñado para manejar unidades de carga completas (paletas). Trabaja con cargas de entre 500 y 1.500 kg por movimiento. Corresponde a la categoría más pesada de ASRS.' },
  { term: 'MiniLoad', id: 'miniload', def: 'Transelevador de menor tamaño diseñado para contenedores, bandejas, totes y cajas. Opera en pasillos estrechos (700–1.200 mm de ancho) y es ideal para picking en e-commerce, farmacéutica y manufactura.' },
  { term: 'Pallet Shuttle', id: 'pallet-shuttle', def: 'Robot autónomo que opera dentro del canal de las estanterías, trasladando paletas desde la entrada hasta las posiciones de almacenamiento en profundidad. Permite densidades de almacenamiento muy superiores al transelevador. Existen versiones de 2 y 4 vías.' },
  { term: 'Tote Shuttle', id: 'tote-shuttle', def: 'Robot shuttle diseñado para contenedores pequeños (totes) en lugar de paletas. Muy usado en e-commerce y farmacéutica para almacenamiento de alta densidad con picking goods-to-person.' },
  { term: 'VLM (Vertical Lift Module)', id: 'vlm', def: 'Módulo de elevación vertical: armario automatizado que almacena bandejas en dos columnas verticales y las entrega al operario en una ventana de acceso a nivel del suelo. Ideal para repuestos, herramientas y piezas pequeñas.' },
  { term: 'Carrusel Vertical', id: 'carrusel-vertical', def: 'Sistema de almacenamiento que hace rotar bandejas o estantes verticalmente, como una rueda, hasta llevar la posición deseada al punto de acceso del operario. Similar al VLM pero con arquitectura de cadena en lugar de ascensor.' },
  { term: 'WMS', id: 'wms', def: 'Warehouse Management System (Sistema de Gestión de Almacenes). Software que gestiona el inventario en tiempo real, controla la ubicación de cada producto, genera las tareas de recepción, almacenamiento, picking y expedición, e interfacea con el ERP.' },
  { term: 'WCS', id: 'wcs', def: 'Warehouse Control System (Sistema de Control del Almacén). Software que controla los equipos físicos del almacén automatizado —transelevadores, shuttles, transportadores, robots— en tiempo real, con latencias de menos de 50 ms. Recibe misiones del WMS y las convierte en comandos para los PLC.' },
  { term: 'HMS', id: 'hms', def: 'Host Management System. Sistema de gestión de alto nivel, a veces equivalente al WMS, que coordina múltiples instalaciones o niveles jerárquicos de gestión logística.' },
  { term: 'ERP', id: 'erp', def: 'Enterprise Resource Planning (Planificación de Recursos Empresariales). Sistema de gestión empresarial integral (SAP, Oracle, Dynamics) que gestiona finanzas, compras, ventas, producción e inventario a nivel corporativo. El WMS se integra con el ERP para recibir órdenes y confirmar movimientos.' },
  { term: 'PLC', id: 'plc', def: 'Programmable Logic Controller (Controlador Lógico Programable). Computadora industrial que controla los equipos físicos del almacén —motores, sensores, actuadores— a nivel de máquina. El WCS envía comandos al PLC, que los ejecuta en el hardware.' },
  { term: 'AGV', id: 'agv', def: 'Automated Guided Vehicle (Vehículo de Guía Automática). Robot móvil que sigue rutas predefinidas marcadas en el suelo (cinta magnética, QR, cable inductivo). Trabaja en flujos fijos y repetitivos, como transporte entre línea de producción y almacén.' },
  { term: 'AMR', id: 'amr', def: 'Autonomous Mobile Robot (Robot Móvil Autónomo). Robot que navega libremente por el almacén usando SLAM (mapeo y localización simultáneos) con sensores láser y cámaras 3D. A diferencia del AGV, no requiere marcas físicas en el piso y puede adaptarse a cambios de layout.' },
  { term: 'SLAM', id: 'slam', def: 'Simultaneous Localization and Mapping. Tecnología de navegación que permite a un robot construir un mapa del entorno mientras se localiza dentro de él, en tiempo real. Es la base de la navegación autónoma de los robots AMR.' },
  { term: 'Goods-to-Person (GTP)', id: 'goods-to-person', def: 'Modelo operativo en el que el sistema automatizado lleva el producto al operario, en lugar de que el operario recorra el almacén buscando el producto. Aumenta la productividad de picking en hasta 5 veces respecto al picking manual convencional.' },
  { term: 'Picking', id: 'picking', def: 'Proceso de seleccionar y recolectar unidades de producto de sus ubicaciones de almacenamiento para completar un pedido. Es la operación de mayor costo en la mayoría de los almacenes (60–70% del costo operativo total).' },
  { term: 'Put-away', id: 'put-away', def: 'Proceso de almacenar los productos recibidos en sus ubicaciones designadas dentro del almacén. El WMS dirige cada unidad a la ubicación óptima según el perfil de rotación del SKU.' },
  { term: 'Throughput', id: 'throughput', def: 'Número de movimientos (entrada + salida) que un sistema de almacenamiento puede procesar por unidad de tiempo, típicamente por hora. Es el indicador más crítico para dimensionar un sistema ASRS y determinar la flota de equipos necesaria.' },
  { term: 'SKU', id: 'sku', def: 'Stock Keeping Unit (Unidad de Mantenimiento de Inventario). Código único que identifica cada variante distinta de producto: un mismo artículo en tallas diferentes tiene SKUs distintos. El número de SKUs activos es determinante en la elección entre transelevador y shuttle.' },
  { term: 'FIFO', id: 'fifo', def: 'First In, First Out (Primero en Entrar, Primero en Salir). Lógica de rotación de inventario donde los productos más antiguos en el almacén son los primeros en salir. Fundamental en alimentos, farmacéutica y cualquier producto con fecha de vencimiento.' },
  { term: 'LIFO', id: 'lifo', def: 'Last In, First Out (Último en Entrar, Primero en Salir). Lógica de rotación donde el último producto ingresado es el primero en recuperarse. Es el modo de operación natural de los canales de shuttle en profundidad, aunque los modelos de 4 vías permiten acceso más flexible.' },
  { term: 'FEFO', id: 'fefo', def: 'First Expired, First Out (Primero en Vencer, Primero en Salir). Variante del FIFO donde la prioridad de salida no es el orden de ingreso sino la fecha de vencimiento más próxima. Crítico en farmacéutica y alimentos perecederos.' },
  { term: 'Slotting', id: 'slotting', def: 'Proceso de asignar cada SKU a su ubicación óptima dentro del almacén según su frecuencia de picking (rotación ABC) y otras características (tamaño, peso, compatibilidad). Un slotting bien diseñado puede reducir el tiempo de picking en un 20–30%.' },
  { term: 'Análisis ABC', id: 'analisis-abc', def: 'Clasificación del inventario en tres categorías por frecuencia de movimiento: A (20% de los SKUs que representan el 80% de los movimientos), B (30% que representan el 15%), C (50% que representan el 5%). Determina la ubicación de cada SKU en el almacén.' },
  { term: 'Análisis XYZ', id: 'analisis-xyz', def: 'Clasificación del inventario por variabilidad de demanda: X (demanda regular y predecible), Y (demanda con variaciones moderadas), Z (demanda irregular o esporádica). Se combina con el análisis ABC para el slotting óptimo.' },
  { term: 'Paleta / Pallet', id: 'pallet', def: 'Plataforma de madera, plástico o metal sobre la cual se apilan y transportan cargas paletizadas. El estándar Euro-paleta mide 1.200 × 800 mm; el americano 1.200 × 1.000 mm. El tamaño y peso máximo de la paleta determina el tipo de transelevador.' },
  { term: 'Tote', id: 'tote', def: 'Contenedor plástico estandarizado (normalmente con fondo de rejilla) usado en sistemas MiniLoad y conveyor para almacenar y transportar artículos de pequeño formato. Los totes son la unidad de manipulación del sistema en operaciones de e-commerce y farmacéutica.' },
  { term: 'Bandeja', id: 'bandeja', def: 'Contenedor plano o perforado usado en sistemas VLM para almacenar grupos de artículos. Cada bandeja ocupa una posición en el módulo vertical y puede contener múltiples SKUs divididos por separadores.' },
  { term: 'Ciclo combinado', id: 'ciclo-combinado', def: 'Operación en la que un transelevador realiza simultáneamente una tarea de almacenamiento y una de recuperación en el mismo viaje, optimizando el recorrido. En ciclo combinado, el throughput es significativamente mayor que en ciclos simples (solo entrada o solo salida).' },
  { term: 'Ciclo simple', id: 'ciclo-simple', def: 'Operación en la que el transelevador realiza un solo movimiento por viaje: solo almacenamiento o solo recuperación. Es menos eficiente que el ciclo combinado pero necesario en ciertos perfiles de operación.' },
  { term: 'Pasillo', id: 'pasillo', def: 'Corredor entre dos bloques de estanterías donde opera el transelevador o por donde circulan los operarios o los AGV. En sistemas ASRS, el pasillo es estrecho (1.000–1.800 mm) y de uso exclusivo del equipo automatizado.' },
  { term: 'Canal', id: 'canal', def: 'Espacio interior de las estanterías en profundidad donde el robot shuttle almacena paletas en fila. Un canal puede tener entre 2 y 30 posiciones de profundidad según el diseño.' },
  { term: 'Posición', id: 'posicion', def: 'Celda individual dentro de la estantería donde se almacena exactamente una paleta, tote o contenedor. La posición se identifica por pasillo, nivel y profundidad.' },
  { term: 'Footprint', id: 'footprint', def: 'Huella física que ocupa un sistema de almacenamiento en el piso del almacén. Un sistema de alta densidad (shuttle, AutoStore) tiene menor footprint que un sistema convencional para la misma capacidad de almacenamiento.' },
  { term: 'Losa', id: 'losa', def: 'Piso de hormigón del almacén sobre el que se instalan los rieles y la estructura de las estanterías. Para un ASRS, la losa debe estar nivelada dentro de ±5 mm en 5 metros y tener la resistencia a la carga específica calculada por la ingeniería.' },
  { term: 'TCO', id: 'tco', def: 'Total Cost of Ownership (Costo Total de Propiedad). Suma de todos los costos asociados a un sistema durante su vida útil: inversión inicial, instalación, mantenimiento, energía, actualizaciones de software y eventuales reemplazos. El TCO a 10 años es el indicador correcto para comparar alternativas de automatización.' },
  { term: 'ROI', id: 'roi', def: 'Return on Investment (Retorno sobre la Inversión). Tiempo en meses que tarda una inversión en recuperarse con los ahorros y beneficios que genera. En automatización de almacenes, el ROI típico está entre 18 y 48 meses según la industria y el volumen de operación.' },
  { term: 'CAPEX', id: 'capex', def: 'Capital Expenditure. Gasto de capital: inversión en activos fijos como sistemas ASRS, equipos, instalaciones. Se amortiza contablemente durante años. Con el RIMI, puede amortizarse el 100% en el primer ejercicio.' },
  { term: 'OPEX', id: 'opex', def: 'Operating Expenditure. Gasto operativo: costos recurrentes de mantenimiento, energía, mano de obra y licencias de software. La automatización transforma OPEX variable (mano de obra) en CAPEX + OPEX fijo (mantenimiento), reduciendo el costo unitario.' },
  { term: 'FAT', id: 'fat', def: 'Factory Acceptance Test (Prueba de Aceptación en Fábrica). Prueba funcional del sistema ASRS en las instalaciones del fabricante, en presencia del cliente, antes del envío. Verifica que el equipo cumple las especificaciones contractuales.' },
  { term: 'SAT', id: 'sat', def: 'Site Acceptance Test (Prueba de Aceptación en Obra). Prueba funcional completa del sistema instalado en el almacén del cliente, al finalizar la puesta en marcha. Es el hito que da inicio a la garantía del equipo.' },
  { term: 'MTBF', id: 'mtbf', def: 'Mean Time Between Failures (Tiempo Medio Entre Fallas). Indicador de confiabilidad que expresa cuántas horas opera un equipo en promedio entre una falla y la siguiente. Los transelevadores DELIE tienen MTBF superior a 8.000 horas.' },
  { term: 'MTTR', id: 'mttr', def: 'Mean Time To Repair (Tiempo Medio de Reparación). Tiempo promedio que tarda un equipo en restaurarse después de una falla. Junto con el MTBF, determina la disponibilidad operativa del sistema.' },
  { term: 'Uptime', id: 'uptime', def: 'Porcentaje del tiempo que un sistema está operativo y disponible para trabajar. Un ASRS de clase industrial tiene uptime superior al 99%. Se calcula como MTBF / (MTBF + MTTR).' },
  { term: 'Redundancia', id: 'redundancia', def: 'Duplicación de componentes críticos (servidores, PLC, redes) para garantizar la continuidad operativa en caso de falla. Los sistemas DELIE tienen servidor WCS redundante con failover automático en menos de 30 segundos.' },
  { term: 'Failover', id: 'failover', def: 'Conmutación automática al sistema redundante cuando falla el componente principal, sin intervención humana. En sistemas WCS de alta disponibilidad, el failover ocurre en menos de 30 segundos.' },
  { term: 'OEE', id: 'oee', def: 'Overall Equipment Effectiveness (Eficiencia Global del Equipo). Métrica que combina disponibilidad, rendimiento y calidad para expresar la eficiencia real de un equipo vs. su potencial teórico. En almacenes automatizados, el OEE de los transelevadores suele superar el 85%.' },
  { term: 'KPI', id: 'kpi', def: 'Key Performance Indicator (Indicador Clave de Rendimiento). Métricas que miden el desempeño de la operación logística: throughput, exactitud de inventario, tiempo de ciclo de pedido, costo por movimiento, etc. El WMS reporta KPIs en tiempo real.' },
  { term: 'SLA', id: 'sla', def: 'Service Level Agreement (Acuerdo de Nivel de Servicio). Compromiso contractual sobre el tiempo de respuesta, disponibilidad del sistema y tiempos de reparación. STOKA ofrece SLAs con respuesta en horas para su cartera de clientes en Argentina y Chile.' },
  { term: 'Cross-docking', id: 'cross-docking', def: 'Operativa logística en la que los productos llegan al almacén y se preparan para expedición sin pasar por almacenamiento permanente. El producto cruza el almacén (docking a docking) directamente. Reduce el tiempo de permanencia y el costo de almacenamiento.' },
  { term: 'Staging Area', id: 'staging', def: 'Zona de preparación dentro del almacén donde se consolidan los productos de una orden antes de su expedición. En sistemas ASRS, el WCS coordina la entrega de los contenedores en el staging para minimizar el tiempo de espera del camión.' },
  { term: 'Consolidación', id: 'consolidacion', def: 'Proceso de reunir los distintos productos de un mismo pedido, que pueden venir de diferentes zonas del almacén, en un único contenedor, paleta o zona de expedición.' },
  { term: 'Wave de picking', id: 'wave', def: 'Agrupación de órdenes de picking que se procesan en un mismo ciclo de trabajo para optimizar los recorridos o los movimientos del ASRS. El WMS genera waves según el tiempo de expedición comprometido, la zona de almacenamiento y la capacidad del equipo.' },
  { term: 'Centro de Distribución (CD)', id: 'centro-distribucion', def: 'Instalación logística cuya función principal es recibir productos de proveedores y redistribuirlos eficientemente hacia los puntos de venta o clientes finales. Diferente de un almacén que almacena para producción o stock estratégico.' },
  { term: '3PL', id: '3pl', def: 'Third Party Logistics (Logística Tercerizada). Empresa que ofrece servicios logísticos a terceros: almacenamiento, transporte y gestión de inventario. Los operadores 3PL usan ASRS para ofrecer mayor capacidad con el mismo footprint y menor costo por pallet almacenado.' },
  { term: 'RFID', id: 'rfid', def: 'Radio Frequency Identification (Identificación por Radiofrecuencia). Tecnología que permite leer etiquetas sin línea de vista directa, a distancias de hasta varios metros. En almacenes ASRS, el RFID en los pasillos permite trazabilidad automática de cada paleta sin escaneo manual.' },
  { term: 'WIP', id: 'wip', def: 'Work In Progress (Trabajo en Proceso). Inventario de materiales y productos que están siendo procesados o en espera de procesamiento dentro de la cadena de producción. Los ASRS en manufactura frecuentemente gestionan el WIP entre etapas de producción.' },
  { term: 'Trazabilidad', id: 'trazabilidad', def: 'Capacidad de registrar y consultar el historial completo de un producto: quién lo recibió, en qué posición estuvo almacenado, cuándo se movió y hacia dónde fue expedido. El WMS mantiene la trazabilidad completa de cada lote y número de serie.' },
  { term: 'RIMI', id: 'rimi', def: 'Régimen de Incentivo a la Manufactura e Industria (Ley 27.802). Régimen fiscal argentino que permite amortización acelerada del 100% de bienes de capital en el primer ejercicio y devolución anticipada del IVA en importaciones de equipos productivos.' },
  { term: 'Decreto 513/2025', id: 'decreto-513', def: 'Decreto del Poder Ejecutivo Nacional que establece arancel 0% para la importación de equipos ASRS y sistemas de automatización logística en Argentina. Vigente desde 2025.' },
  { term: 'BICE', id: 'bice', def: 'Banco de Inversión y Comercio Exterior. Entidad financiera estatal argentina que ofrece líneas de crédito para inversión en modernización industrial y bienes de capital, con tasas preferenciales y plazos de hasta 10 años.' },
  { term: 'Amortización acelerada', id: 'amortizacion-acelerada', def: 'Mecanismo fiscal que permite deducir el valor total de un bien de capital en el primer año en lugar de distribuirlo en múltiples ejercicios. Disponible en Argentina bajo el RIMI para bienes de capital productivos.' },
  { term: 'Integrador WMS', id: 'integrador-wms', def: 'Empresa especializada que implementa, configura e integra sistemas WMS con los ERP del cliente. STOKA es integrador de los WMS y WCS de DELIE para instalaciones en Argentina y Chile.' },
  { term: 'Cámara fría', id: 'camara-fria', def: 'Instalación de almacenamiento a temperatura controlada: refrigerada (+2 °C a +8 °C), de congelados (-18 °C a -25 °C) o de congelado profundo (-30 °C). Los sistemas ASRS para cámara fría tienen equipos especiales de sellado, lubricación y calefacción de baterías.' },
  { term: 'Mástil (de transelevador)', id: 'mastil', def: 'Columna vertical del transelevador sobre la que sube y baja la plataforma con la carga. Existen diseños de un mástil (single mast, hasta ~30 m) y doble mástil (double mast, hasta 40 m y cargas más pesadas).' },

  { term: 'WES', id: 'wes', def: 'Warehouse Execution System (Sistema de Ejecución de Almacén). Capa de software intermedia entre el WMS y el WCS que coordina en tiempo real la asignación de tareas a operarios, AGVs y estaciones de trabajo. El WES gestiona prioridades dinámicas, permite balancear la carga entre recursos humanos y automatizados, y reduce los tiempos de espera en el flujo de picking.' },
  { term: 'Sorter', id: 'sorter', def: 'Sistema de clasificación automática de alta velocidad que desvía cajas, paquetes o totes hacia destinos predefinidos (chutes). Los sorters de banda cruzada, empujadores lineales y transferencia en 90° clasifican hasta 10.000 ítems/hora en centros de distribución de e-commerce, paquetería y 3PL en Argentina.' },
  { term: 'Sistema de clasificación', id: 'sistema-clasificacion', def: 'Conjunto de equipos y software que identifican, dirigen y separan ítems hacia distintos destinos dentro del almacén o centro de distribución. Los sistemas de clasificación incluyen sorters de banda cruzada, empujadores lineales, transferencias en 90° y sistemas de clasificación por bolsas (loop sorter).' },
  { term: 'Conveyor', id: 'conveyor', def: 'Término inglés para transportador (cinta, cadena, rodillos). En intralogística, los conveyors conectan las distintas zonas del almacén —recepción, ASRS, picking, expedición— en un flujo continuo sin intervención humana. Se integran con el WCS para ruteo dinámico según el destino de cada carga.' },
  { term: 'Person-to-Goods', id: 'person-to-goods', def: 'Modelo operativo en el que el operario se desplaza por el almacén buscando los productos para completar el pedido. Es el método tradicional y el de menor productividad: el operario pasa el 60–70% del tiempo caminando. El modelo opuesto, goods-to-person, elimina este recorrido llevando el producto al operario.' },
  { term: 'Batch Picking', id: 'batch-picking', def: 'Método de picking en el que un operario o robot recoge simultáneamente los productos de múltiples pedidos en un mismo recorrido, agrupados en lotes (batches). Reduce los recorridos totales pero requiere una etapa posterior de sorting por pedido. Ideal para almacenes con muchos pedidos de pocas unidades.' },
  { term: 'Put-to-Light', id: 'put-to-light', def: 'Sistema de asistencia donde indicadores luminosos sobre cubetas o posiciones guían al operario sobre dónde depositar cada unidad durante el proceso de sorting por pedido. Usado en la segunda etapa del batch picking para separar los ítems recogidos en conjunto hacia cada pedido individual.' },
  { term: 'Pick-to-Light', id: 'pick-to-light', def: 'Sistema de asistencia donde indicadores luminosos sobre ubicaciones de almacenamiento guían al operario en qué posición picar y cuántas unidades tomar. Más rápido y preciso que el papel o el escáner de mano. Habitual en e-commerce de moda, farmacéutica y distribución de repuestos.' },
  { term: 'Voice Picking', id: 'voice-picking', def: 'Sistema de picking dirigido por voz: el WMS envía instrucciones de audio al auricular del operario y recibe confirmaciones verbales. Libera ambas manos del operario para el manipuleo del producto. Habitual en distribución de alimentos y bebidas con baja temperatura, donde los guantes dificultan el uso de escáneres.' },
  { term: 'Layout', id: 'layout', def: 'Distribución física de los equipos, pasillos, zonas funcionales y flujos dentro de un almacén o depósito. El diseño del layout es crítico para minimizar los recorridos, evitar cruces de flujo y permitir la expansión futura del sistema. STOKA realiza simulaciones de layout 3D con análisis de flujos antes de cualquier propuesta de automatización.' },
  { term: 'Autoportante', id: 'autoportante', def: 'Estructura en la que las propias estanterías del ASRS actúan como soporte estructural del edificio: muros, cubierta y paneles se fijan directamente a la estantería metálica. Elimina la necesidad de nave industrial previa y reduce el costo total del proyecto un 20–30% en instalaciones de gran altura.' },
  { term: 'Almacén autoportante', id: 'almacen-autoportante', def: 'Almacén cuya estructura edilicia está integrada con las estanterías del sistema ASRS: las vigas de los racks soportan el techo, los paneles de cerramiento y las cargas dinámicas del transelevador. Permite alturas de 20 a 45 metros. Es la solución más eficiente en costo por posición de almacenamiento en proyectos de gran escala.' },
  { term: 'Almacén de gran altura', id: 'almacen-gran-altura', def: 'Almacén con altura libre superior a 15 metros, generalmente de 20 a 40 metros. La gran altura hace económicamente viables los sistemas ASRS transelevadores, ya que el costo por posición almacenada cae drásticamente a medida que aumenta la altura. A 30 metros, el costo por posición puede ser un 40% menor que a 10 metros.' },
  { term: 'Paletizado', id: 'paletizado', def: 'Proceso de apilar y organizar cajas, bultos o unidades de carga sobre una paleta para su almacenamiento y transporte. En almacenes automatizados, el paletizado es realizado por robots paletizadores que forman las paletas según patrones óptimos a velocidades de hasta 2.000 cajas/hora, sin intervención humana.' },
  { term: 'Despaletizado', id: 'despaletizado', def: 'Proceso de desapilar las cajas de una paleta para alimentar la zona de picking o el ASRS. Es una de las tareas más físicamente exigentes del almacén. Los robots despaletizadores con visión artificial identifican cajas de distintos tamaños y las descargan automáticamente, reduciendo lesiones y aumentando la cadencia.' },
  { term: 'Dark Warehouse', id: 'dark-warehouse', def: 'Almacén 100% automatizado que opera sin presencia de trabajadores en el área de almacenamiento. Transelevadores, robots shuttle y AGVs trabajan en oscuridad total. La interacción humana ocurre únicamente en las estaciones de recepción y expedición. Reduce costos de iluminación, climatización y seguridad, y permite operación 24/7.' },
  { term: 'Micro-fulfillment', id: 'micro-fulfillment', def: 'Centro de distribución compacto (400–2.000 m²) ubicado dentro o próximo a una tienda urbana para lograr entregas en pocas horas. Usa sistemas ASRS miniaturizados de alta densidad (AutoStore, MiniLoad compacto) que maximizan la cantidad de SKUs disponibles en el espacio mínimo posible.' },
  { term: 'Lead Time', id: 'lead-time', def: 'Tiempo total que transcurre desde que se genera un pedido hasta que el cliente lo recibe. En almacenes automatizados, el lead time interno (recepción del pedido → salida del almacén) se reduce en un 60–80% respecto a la operación manual convencional, gracias a la asignación automática de tareas y el goods-to-person.' },
  { term: 'Cubicaje', id: 'cubicaje', def: 'Medición del volumen, peso y dimensiones de los ítems a almacenar o transportar. El cubicaje preciso de cada SKU es necesario para dimensionar las posiciones de almacenamiento del ASRS, seleccionar los totes y cajas correctos, y optimizar la carga de los camiones de despacho.' },
  { term: 'Mezzanine', id: 'mezzanine', def: 'Estructura metálica elevada que crea un nivel adicional dentro de una nave industrial, aprovechando la altura libre. En almacenes, los mezzanines amplían el área de picking, expedición o recepción. Los VLM y MiniLoad se integran frecuentemente con mezzanines para que el operario acceda en el nivel superior mientras el sistema almacena bajo y sobre ese nivel.' },
  { term: 'Buffer', id: 'buffer', def: 'Zona o capacidad de almacenamiento temporal que absorbe las diferencias de velocidad entre dos procesos consecutivos. En sistemas ASRS, los buffers de entrada y salida amortiguan los picos de demanda del transelevador y evitan bloqueos en el transportador cuando la estación de picking o el muelle de recepción no pueden absorber el flujo inmediato.' },
  { term: 'Secuenciación', id: 'secuenciacion', def: 'Recuperación y entrega de ítems en un orden específico para optimizar el proceso posterior. Ejemplos: cargar un camión de atrás hacia adelante (para que lo primero que debe bajarse quede al frente), o alimentar una línea de ensamblaje en la secuencia exacta del proceso productivo. Los WCS avanzados realizan secuenciación automática coordinando múltiples transelevadores.' },
  { term: 'Telemetría', id: 'telemetria', def: 'Transmisión y análisis remoto de datos operativos de los equipos del almacén: posición GPS/encoder del transelevador, temperatura de motores, vibración de rodamientos, ciclos realizados, consumo eléctrico. La telemetría en tiempo real permite el mantenimiento predictivo y el diagnóstico remoto sin visita técnica presencial.' },
  { term: 'Digital Twin', id: 'digital-twin', def: 'Réplica virtual y dinámica del almacén físico que refleja en tiempo real el estado de todos los equipos, el inventario y los flujos de materiales. Permite simular cambios de layout, optimizar el slotting y predecir cuellos de botella antes de implementarlos en el sistema real. El digital twin reduce el tiempo de comisionado de nuevos proyectos.' },
  { term: 'MHE', id: 'mhe', def: 'Material Handling Equipment (Equipo de Manejo de Materiales). Término genérico para todos los equipos que mueven, almacenan y controlan materiales dentro de un almacén o planta: transelevadores, shuttles, AGVs, AMRs, conveyors, sorters, VLM, carruseles y paletizadores. STOKA distribuye la línea completa de MHE de DELIE para Argentina y Chile.' },
  { term: 'Intralogística', id: 'intralogistica', def: 'Gestión y optimización de todos los flujos internos de materiales, información y personas dentro de una instalación logística o productiva. La intralogística abarca desde la recepción hasta la expedición, incluyendo almacenamiento, picking, paletizado, clasificación y gestión de inventario en tiempo real.' },
  { term: 'Omnicanalidad', id: 'omnicanalidad', def: 'Modelo de negocio en el que el cliente puede comprar y recibir productos por cualquier canal —tienda física, e-commerce, app, click & collect— de forma integrada. Los almacenes omnicanal gestionan simultáneamente órdenes de reposición de tiendas (paletas completas) y pedidos online individuales (pocas unidades), exigiendo sistemas ASRS con alta flexibilidad.' },
  { term: 'Last Mile', id: 'last-mile', def: 'Último tramo de la cadena de distribución: desde el centro de distribución hasta el cliente final. Es el segmento más costoso de la logística (40–60% del costo de distribución total). Los centros de micro-fulfillment urbanos reducen el last mile acercando el inventario al punto de entrega.' },
  { term: 'Cobots', id: 'cobots', def: 'Robots colaborativos diseñados para trabajar junto a operarios humanos sin necesidad de jaulas de protección ni zonas exclusivas. En almacenes, los cobots asisten en tareas de picking, paletizado y embalaje, aumentando la productividad sin reemplazar completamente al personal. Son más flexibles pero de menor velocidad que los robots industriales.' },
  { term: 'Zona de expedición', id: 'zona-expedicion', def: 'Área del almacén destinada a consolidar los pedidos listos para despachar, etiquetar, verificar y cargar en los camiones de distribución. El WMS coordina la llegada de los ítems desde el ASRS a la zona de expedición en el orden de carga del vehículo para minimizar los tiempos de muelle y el costo de transporte.' },
  { term: 'Zona de recepción', id: 'zona-recepcion', def: 'Área del almacén donde se descargan, inspeccionan e identifican los productos que llegan de proveedores. La recepción incluye control de calidad, cubicaje, pesaje y escaneo de códigos de barras o RFID para el ingreso al WMS y la asignación de ubicación en el ASRS.' },
  { term: 'Cámara frigorífica automatizada', id: 'camara-frigorifica-automatizada', def: 'Instalación de almacenamiento a temperatura controlada (0 °C a -30 °C) equipada con sistemas ASRS que operan en frío o congelado. Los equipos llevan diseño especial: lubricantes de baja temperatura, sellado hermético de cuadros eléctricos, calefacción de baterías y motores, y estructura metálica con tratamiento anticondensación.' },
  { term: 'Estabilidad fiscal', id: 'estabilidad-fiscal', def: 'Garantía legal que protege una inversión de cambios negativos en las condiciones impositivas durante un período determinado. En Argentina, el RIGI (Ley 27.742) ofrece estabilidad fiscal por 30 años para proyectos de inversión que califican. Aplica sobre la importación de sistemas ASRS, aranceles, impuesto a las ganancias y otros tributos, protegiendo el ROI proyectado a largo plazo.' },
];

const LETRAS = [...new Set(TERMINOS.map(t => t.term[0].toUpperCase()))].sort();

export const GlosarioPage = () => {
  const [query, setQuery] = useState('');
  const canonical = 'https://www.stokagroup.com/recursos/glosario';

  const filtered = query.length > 1
    ? TERMINOS.filter(t => t.term.toLowerCase().includes(query.toLowerCase()) || t.def.toLowerCase().includes(query.toLowerCase()))
    : TERMINOS;

  const byLetter = LETRAS.reduce((acc, l) => {
    const items = filtered.filter(t => t.term[0].toUpperCase() === l);
    if (items.length) acc[l] = items;
    return acc;
  }, {});

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Recursos", "item": "https://www.stokagroup.com/recursos" },
      { "@type": "ListItem", "position": 3, "name": "Glosario ASRS", "item": canonical },
    ]
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Helmet>
        <title>Glosario de Intralogística y Automatización | STOKA</title>
        <meta name="description" content="60+ términos de automatización de almacenes explicados: ASRS, WMS, transelevador, AGV, shuttle y más. La referencia técnica en español." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-950 to-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/recursos" className="hover:text-cyan-400 transition-colors">Recursos</Link>
            <span>/</span>
            <span className="text-slate-400">Glosario</span>
          </nav>
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-4">Glosario técnico</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Glosario de automatización<br /><span className="text-cyan-400">de almacenes y ASRS</span>
          </h1>
          <p className="text-slate-400 mb-8 max-w-xl">Más de 60 términos técnicos de logística, automatización y sistemas ASRS con definiciones en español.</p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar término..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-sm"
            />
          </div>
        </div>
      </section>

      {/* Letter nav */}
      {!query && (
        <div className="max-w-4xl mx-auto px-6 pb-4 flex flex-wrap gap-1">
          {LETRAS.map(l => (
            <a key={l} href={`#letra-${l}`} className="text-xs font-mono text-cyan-400 hover:text-white border border-cyan-400/30 hover:border-cyan-400 rounded-lg px-2.5 py-1 transition-colors">
              {l}
            </a>
          ))}
        </div>
      )}

      {/* Terms */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        {Object.entries(byLetter).map(([letra, items]) => (
          <div key={letra} id={`letra-${letra}`} className="mb-10">
            <h2 className="text-3xl font-black text-cyan-400 mb-4 border-b border-slate-800 pb-2">{letra}</h2>
            <dl className="space-y-4">
              {items.map(t => (
                <motion.div
                  key={t.id}
                  id={t.id}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4"
                >
                  <dt className="text-base font-black text-white mb-1">{t.term}</dt>
                  <dd className="text-slate-400 text-sm leading-relaxed">{t.def}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-slate-500 text-center py-12">No se encontraron términos para "{query}".</p>
        )}
      </section>

      <Footer />
    </div>
  );
};

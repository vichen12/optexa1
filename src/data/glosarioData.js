/* Glosario multilingüe. term/id/cat son comunes; def tiene variante por idioma.
   getGlosario(lang) y getCats(lang) resuelven el idioma de la página.
   Los anclas (#id) se mantienen idénticos en los 3 idiomas. */

export const GLOSARIO_CATS = [
  { id: 'todos',       label: { es: 'Todos', en: 'All', zh: '全部' } },
  { id: 'sistemas',    label: { es: 'Sistemas ASRS', en: 'ASRS Systems', zh: 'ASRS系统' } },
  { id: 'robots',      label: { es: 'Robots y equipos', en: 'Robots & Equipment', zh: '机器人与设备' } },
  { id: 'software',    label: { es: 'Software y control', en: 'Software & Control', zh: '软件与控制' } },
  { id: 'operaciones', label: { es: 'Operaciones', en: 'Operations', zh: '运营' } },
  { id: 'finanzas',    label: { es: 'Finanzas y legal', en: 'Finance & Legal', zh: '财务与法律' } },
];

export const GLOSARIO = [
  // ── SISTEMAS ASRS ──────────────────────────────────────────────
  { term: 'ASRS', id: 'asrs', cat: 'sistemas', def: {
    es: 'Automated Storage and Retrieval System. Infraestructura que almacena y recupera paletas, cajas o contenedores sin intervención humana directa. Incluye transelevadores, shuttles, VLM y software de control.',
    en: 'Automated Storage and Retrieval System. Infrastructure that stores and retrieves pallets, boxes or containers without direct human intervention. It includes stacker cranes, shuttles, VLM and control software.',
    zh: '自动存储与检索系统（Automated Storage and Retrieval System）。无需直接人工干预即可存储和检索托盘、箱子或容器的基础设施。包括堆垛机、穿梭车、VLM和控制软件。' } },
  { term: 'AS/RS', id: 'as-rs', cat: 'sistemas', def: {
    es: 'Variante ortográfica de ASRS con barras separadoras. Se usa indistintamente; el estándar ISO prefiere "ASRS" pero "AS/RS" es más frecuente en documentación técnica americana.',
    en: 'Spelling variant of ASRS with separating slashes. Used interchangeably; the ISO standard prefers "ASRS" but "AS/RS" is more common in American technical documentation.',
    zh: 'ASRS的拼写变体，带分隔斜杠。可互换使用；ISO标准偏好"ASRS"，但"AS/RS"在美国技术文档中更常见。' } },
  { term: 'Transelevador', id: 'transelevador', cat: 'sistemas', articulo: 'que-es-un-transelevador', def: {
    es: 'Grúa automatizada que se desplaza dentro de un pasillo de estanterías, en rieles instalados en el piso y el techo, para almacenar y recuperar paletas. Capacidades hasta 1.500 kg y alturas de hasta 40 metros.',
    en: 'Automated crane that travels within a racking aisle, on rails installed on the floor and ceiling, to store and retrieve pallets. Capacities up to 1,500 kg and heights up to 40 meters.',
    zh: '堆垛机：在货架巷道内沿地面和顶部安装的导轨行驶，用于存储和检索托盘的自动化起重机。承载能力可达1500公斤，高度可达40米。' } },
  { term: 'Unit-Load', id: 'unit-load', cat: 'sistemas', def: {
    es: 'Transelevador diseñado para manejar unidades de carga completas (paletas). Trabaja entre 500 y 1.500 kg por movimiento. Categoría más pesada de ASRS.',
    en: 'Stacker crane designed to handle full load units (pallets). Works between 500 and 1,500 kg per movement. The heaviest ASRS category.',
    zh: 'Unit-Load（整托盘）：设计用于处理整个载荷单元（托盘）的堆垛机。每次移动处理500至1500公斤。ASRS中最重型的类别。' } },
  { term: 'MiniLoad', id: 'miniload', cat: 'sistemas', def: {
    es: 'Transelevador de menor tamaño para contenedores, bandejas, totes y cajas. Opera en pasillos de 700–1.200 mm. Ideal para picking en e-commerce, farmacéutica y manufactura.',
    en: 'Smaller stacker crane for containers, trays, totes and boxes. Operates in 700–1,200 mm aisles. Ideal for picking in e-commerce, pharma and manufacturing.',
    zh: 'MiniLoad（迷你载荷）：用于容器、料盘、料箱和箱子的小型堆垛机。在700–1200毫米巷道中运行。适用于电商、制药和制造业的拣选。' } },
  { term: 'Pallet Shuttle', id: 'pallet-shuttle', cat: 'sistemas', def: {
    es: 'Robot autónomo que opera dentro del canal de las estanterías, trasladando paletas hasta las posiciones de almacenamiento en profundidad. Permite densidades muy superiores al transelevador. Versiones de 2 y 4 vías.',
    en: 'Autonomous robot that operates inside the racking channel, moving pallets to deep storage positions. Allows much higher densities than the stacker crane. 2-way and 4-way versions.',
    zh: '托盘穿梭车：在货架通道内运行的自主机器人，将托盘移动到纵深存储位置。可实现远高于堆垛机的密度。有2向和4向版本。' } },
  { term: 'Tote Shuttle', id: 'tote-shuttle', cat: 'sistemas', def: {
    es: 'Robot shuttle para contenedores pequeños (totes) en lugar de paletas. Muy usado en e-commerce y farmacéutica para almacenamiento de alta densidad con picking goods-to-person.',
    en: 'Shuttle robot for small containers (totes) instead of pallets. Widely used in e-commerce and pharma for high-density storage with goods-to-person picking.',
    zh: '料箱穿梭车：用于小型容器（料箱）而非托盘的穿梭机器人。广泛用于电商和制药的高密度存储，配合货到人拣选。' } },
  { term: 'VLM (Vertical Lift Module)', id: 'vlm', cat: 'sistemas', def: {
    es: 'Armario automatizado que almacena bandejas en dos columnas verticales y las entrega al operario en una ventana de acceso a nivel del suelo. Ideal para repuestos, herramientas y piezas pequeñas.',
    en: 'Automated cabinet that stores trays in two vertical columns and delivers them to the operator at a ground-level access window. Ideal for spare parts, tools and small parts.',
    zh: 'VLM（垂直升降模块）：将料盘存储在两个垂直立柱中、并在地面高度的取货窗口交给操作员的自动化柜体。适用于备件、工具和小零件。' } },
  { term: 'Carrusel Vertical', id: 'carrusel-vertical', cat: 'sistemas', def: {
    es: 'Sistema que hace rotar bandejas verticalmente —como una rueda— hasta llevar la posición deseada al punto de acceso del operario. Similar al VLM pero con arquitectura de cadena en lugar de ascensor.',
    en: 'System that rotates trays vertically —like a wheel— to bring the desired position to the operator\'s access point. Similar to the VLM but with a chain architecture instead of an elevator.',
    zh: '垂直回转柜：使料盘垂直旋转——像车轮一样——将所需位置带到操作员取货点的系统。类似于VLM，但采用链条结构而非升降机。' } },
  { term: 'Autoportante', id: 'autoportante', cat: 'sistemas', def: {
    es: 'Estructura en la que las propias estanterías del ASRS actúan como soporte estructural del edificio. Elimina la necesidad de nave previa y reduce el costo total del proyecto un 20–30% en instalaciones de gran altura.',
    en: 'Structure in which the ASRS racking itself acts as the building\'s structural support. Eliminates the need for a pre-existing building and reduces total project cost by 20–30% in high-bay installations.',
    zh: '自支撑式：ASRS货架本身充当建筑结构支撑的结构。无需预先建造厂房，在高位安装中可将项目总成本降低20–30%。' } },
  { term: 'Almacén autoportante', id: 'almacen-autoportante', cat: 'sistemas', def: {
    es: 'Almacén cuya estructura edilicia está integrada con las estanterías ASRS: las vigas de los racks soportan techo, paneles y cargas dinámicas del transelevador. Permite alturas de 20 a 45 m.',
    en: 'Warehouse whose building structure is integrated with the ASRS racking: the rack beams support the roof, panels and dynamic loads of the stacker crane. Allows heights of 20 to 45 m.',
    zh: '自支撑式仓库：建筑结构与ASRS货架一体化的仓库：货架横梁支撑屋顶、面板和堆垛机的动态载荷。可实现20至45米的高度。' } },
  { term: 'Almacén de gran altura', id: 'almacen-gran-altura', cat: 'sistemas', def: {
    es: 'Almacén con altura libre superior a 15 m, generalmente de 20 a 40 m. La gran altura hace económicamente viables los transelevadores: el costo por posición cae drásticamente al aumentar la altura.',
    en: 'Warehouse with free height above 15 m, generally 20 to 40 m. The great height makes stacker cranes economically viable: the cost per position drops drastically as height increases.',
    zh: '高位仓库：净高超过15米的仓库，通常为20至40米。高大的高度使堆垛机在经济上可行：随着高度增加，每个库位的成本急剧下降。' } },
  { term: 'Dark Warehouse', id: 'dark-warehouse', cat: 'sistemas', def: {
    es: 'Almacén 100% automatizado que opera sin operarios en el área de almacenamiento. La interacción humana ocurre únicamente en recepción y expedición. Permite operación 24/7 y reduce costos de iluminación y climatización.',
    en: '100% automated warehouse that operates with no operators in the storage area. Human interaction occurs only at receiving and dispatch. Allows 24/7 operation and reduces lighting and climate costs.',
    zh: '黑灯仓库：存储区无操作员的100%自动化仓库。人工交互仅发生在收货和发货环节。可实现24/7运营，并降低照明和空调成本。' } },
  { term: 'Cámara fría', id: 'camara-fria', cat: 'sistemas', def: {
    es: 'Instalación de almacenamiento a temperatura controlada: refrigerada (+2 °C a +8 °C), congelados (-18 °C a -25 °C) o congelado profundo (-30 °C). Los sistemas ASRS para cámara fría llevan equipos especiales de sellado, lubricación y calefacción de baterías.',
    en: 'Temperature-controlled storage facility: refrigerated (+2 °C to +8 °C), frozen (-18 °C to -25 °C) or deep frozen (-30 °C). ASRS systems for cold storage carry special sealing, lubrication and battery-heating equipment.',
    zh: '冷库：温控存储设施：冷藏（+2°C至+8°C）、冷冻（-18°C至-25°C）或深冷（-30°C）。用于冷库的ASRS系统配备特殊的密封、润滑和电池加热设备。' } },
  { term: 'Cámara frigorífica automatizada', id: 'camara-frigorifica-automatizada', cat: 'sistemas', def: {
    es: 'Instalación de almacenamiento a temperatura controlada equipada con ASRS. Diseño especial: lubricantes de baja temperatura, sellado hermético de cuadros eléctricos y tratamiento anticondensación.',
    en: 'Temperature-controlled storage facility equipped with ASRS. Special design: low-temperature lubricants, hermetic sealing of electrical cabinets and anti-condensation treatment.',
    zh: '自动化冷库：配备ASRS的温控存储设施。特殊设计：低温润滑剂、电气柜密封以及防冷凝处理。' } },
  { term: 'Micro-fulfillment', id: 'micro-fulfillment', cat: 'sistemas', def: {
    es: 'Centro de distribución compacto (400–2.000 m²) ubicado dentro o próximo a una tienda urbana para entregas en pocas horas. Usa ASRS miniaturizados de alta densidad que maximizan SKUs en el espacio mínimo.',
    en: 'Compact distribution center (400–2,000 m²) located within or near an urban store for deliveries in a few hours. Uses miniaturized high-density ASRS that maximize SKUs in minimal space.',
    zh: '微型履约中心：位于城市门店内或附近的紧凑型配送中心（400–2000平方米），可在几小时内交付。使用小型高密度ASRS，在最小空间内最大化SKU数量。' } },
  { term: 'Mástil (de transelevador)', id: 'mastil', cat: 'sistemas', def: {
    es: 'Columna vertical del transelevador sobre la que sube y baja la plataforma con la carga. Diseños de un mástil (single mast, hasta ~30 m) y doble mástil (double mast, hasta 40 m para cargas más pesadas).',
    en: 'Vertical column of the stacker crane on which the load platform rises and lowers. Single-mast designs (up to ~30 m) and double-mast designs (up to 40 m for heavier loads).',
    zh: '桅杆（堆垛机）：堆垛机的垂直立柱，载货平台沿其上下移动。单桅设计（single mast，最高约30米）和双桅设计（double mast，最高40米，用于更重载荷）。' } },

  // ── ROBOTS Y EQUIPOS ──────────────────────────────────────────
  { term: 'AGV', id: 'agv', cat: 'robots', def: {
    es: 'Automated Guided Vehicle. Robot móvil que sigue rutas predefinidas marcadas en el suelo (cinta magnética, QR, cable inductivo). Trabaja en flujos fijos y repetitivos, como transporte entre línea de producción y almacén.',
    en: 'Automated Guided Vehicle. Mobile robot that follows predefined routes marked on the floor (magnetic tape, QR, inductive cable). Works in fixed, repetitive flows, such as transport between production line and warehouse.',
    zh: 'AGV（自动导引车）：沿地面标记的预定路线（磁条、二维码、感应电缆）行驶的移动机器人。适用于固定、重复的流程，如生产线与仓库之间的运输。' } },
  { term: 'AMR', id: 'amr', cat: 'robots', def: {
    es: 'Autonomous Mobile Robot. Robot que navega libremente por el almacén usando SLAM con sensores láser y cámaras 3D. A diferencia del AGV, no requiere marcas físicas en el piso y puede adaptarse a cambios de layout.',
    en: 'Autonomous Mobile Robot. Robot that navigates the warehouse freely using SLAM with laser sensors and 3D cameras. Unlike the AGV, it requires no physical floor markings and can adapt to layout changes.',
    zh: 'AMR（自主移动机器人）：使用SLAM、激光传感器和3D摄像头在仓库中自由导航的机器人。与AGV不同，它无需地面物理标记，可适应布局变化。' } },
  { term: 'SLAM', id: 'slam', cat: 'robots', def: {
    es: 'Simultaneous Localization and Mapping. Tecnología que permite a un robot construir un mapa del entorno mientras se localiza dentro de él, en tiempo real. Es la base de la navegación autónoma de los AMR.',
    en: 'Simultaneous Localization and Mapping. Technology that lets a robot build a map of the environment while locating itself within it, in real time. It is the basis of AMR autonomous navigation.',
    zh: 'SLAM（同步定位与地图构建）：让机器人在实时定位自身的同时构建环境地图的技术。它是AMR自主导航的基础。' } },
  { term: 'Cobots', id: 'cobots', cat: 'robots', def: {
    es: 'Robots colaborativos diseñados para trabajar junto a operarios humanos sin necesidad de jaulas de protección. En almacenes asisten en picking, paletizado y embalaje, aumentando productividad sin reemplazar completamente al personal.',
    en: 'Collaborative robots designed to work alongside human operators without protective cages. In warehouses they assist in picking, palletizing and packing, increasing productivity without fully replacing staff.',
    zh: '协作机器人：设计用于与人工操作员并肩工作、无需防护围栏的机器人。在仓库中协助拣选、码垛和包装，在不完全替代人员的情况下提高生产力。' } },
  { term: 'Sorter', id: 'sorter', cat: 'robots', def: {
    es: 'Sistema de clasificación automática de alta velocidad que desvía cajas, paquetes o totes hacia destinos predefinidos (chutes). Los sorters de banda cruzada clasifican hasta 10.000 ítems/hora.',
    en: 'High-speed automatic sorting system that diverts boxes, parcels or totes to predefined destinations (chutes). Cross-belt sorters sort up to 10,000 items/hour.',
    zh: '分拣机：将箱子、包裹或料箱分流到预定目的地（滑槽）的高速自动分拣系统。交叉带分拣机每小时可分拣多达10000件物品。' } },
  { term: 'Conveyor', id: 'conveyor', cat: 'robots', def: {
    es: 'Transportador (cinta, cadena, rodillos). En intralogística conecta las distintas zonas del almacén —recepción, ASRS, picking, expedición— en un flujo continuo integrado con el WCS para ruteo dinámico.',
    en: 'Conveyor (belt, chain, rollers). In intralogistics it connects the warehouse\'s different zones —receiving, ASRS, picking, dispatch— in a continuous flow integrated with the WCS for dynamic routing.',
    zh: '输送机（皮带、链条、滚筒）。在仓内物流中，它将仓库的各个区域——收货、ASRS、拣选、发货——连接成与WCS集成的连续流程，实现动态路由。' } },
  { term: 'MHE', id: 'mhe', cat: 'robots', def: {
    es: 'Material Handling Equipment. Término genérico para todos los equipos que mueven, almacenan y controlan materiales: transelevadores, shuttles, AGVs, AMRs, conveyors, sorters, VLM y paletizadores.',
    en: 'Material Handling Equipment. Generic term for all equipment that moves, stores and controls materials: stacker cranes, shuttles, AGVs, AMRs, conveyors, sorters, VLM and palletizers.',
    zh: 'MHE（物料搬运设备）：所有移动、存储和控制物料的设备的通用术语：堆垛机、穿梭车、AGV、AMR、输送机、分拣机、VLM和码垛机。' } },
  { term: 'Paletizado', id: 'paletizado', cat: 'robots', def: {
    es: 'Proceso de apilar y organizar cajas sobre una paleta. En almacenes automatizados lo realizan robots paletizadores a velocidades de hasta 2.000 cajas/hora, sin intervención humana.',
    en: 'Process of stacking and organizing boxes on a pallet. In automated warehouses it is performed by palletizing robots at speeds of up to 2,000 boxes/hour, with no human intervention.',
    zh: '码垛：在托盘上堆叠和整理箱子的过程。在自动化仓库中，由码垛机器人以高达每小时2000箱的速度完成，无需人工干预。' } },
  { term: 'Despaletizado', id: 'despaletizado', cat: 'robots', def: {
    es: 'Proceso de desapilar las cajas de una paleta para alimentar la zona de picking o el ASRS. Los robots despaletizadores con visión artificial identifican cajas de distintos tamaños automáticamente.',
    en: 'Process of unstacking boxes from a pallet to feed the picking zone or the ASRS. Depalletizing robots with machine vision automatically identify boxes of different sizes.',
    zh: '拆垛：从托盘上拆卸箱子以供应拣选区或ASRS的过程。配备机器视觉的拆垛机器人可自动识别不同尺寸的箱子。' } },

  // ── SOFTWARE Y CONTROL ────────────────────────────────────────
  { term: 'WMS', id: 'wms', cat: 'software', def: {
    es: 'Warehouse Management System. Software que gestiona el inventario en tiempo real, controla la ubicación de cada producto y genera tareas de recepción, almacenamiento, picking y expedición. Se integra con el ERP.',
    en: 'Warehouse Management System. Software that manages inventory in real time, controls the location of each product and generates receiving, storage, picking and dispatch tasks. It integrates with the ERP.',
    zh: 'WMS（仓库管理系统）：实时管理库存、控制每件产品位置并生成收货、存储、拣选和发货任务的软件。与ERP集成。' } },
  { term: 'WCS', id: 'wcs', cat: 'software', def: {
    es: 'Warehouse Control System. Software que controla los equipos físicos del almacén —transelevadores, shuttles, transportadores, robots— en tiempo real, con latencias de menos de 50 ms. Convierte misiones del WMS en comandos para los PLC.',
    en: 'Warehouse Control System. Software that controls the warehouse\'s physical equipment —stacker cranes, shuttles, conveyors, robots— in real time, with latencies under 50 ms. It turns WMS missions into commands for the PLCs.',
    zh: 'WCS（仓库控制系统）：实时控制仓库物理设备——堆垛机、穿梭车、输送机、机器人——的软件，延迟低于50毫秒。它将WMS任务转换为PLC的命令。' } },
  { term: 'WES', id: 'wes', cat: 'software', def: {
    es: 'Warehouse Execution System. Capa de software entre el WMS y el WCS que coordina en tiempo real la asignación de tareas a operarios, AGVs y estaciones. Gestiona prioridades dinámicas y balancea la carga entre recursos.',
    en: 'Warehouse Execution System. Software layer between the WMS and the WCS that coordinates, in real time, task assignment to operators, AGVs and stations. It manages dynamic priorities and balances load across resources.',
    zh: 'WES（仓库执行系统）：WMS与WCS之间的软件层，实时协调将任务分配给操作员、AGV和工作站。管理动态优先级并在资源间平衡负载。' } },
  { term: 'HMS', id: 'hms', cat: 'software', def: {
    es: 'Host Management System. Sistema de gestión de alto nivel que coordina múltiples instalaciones o niveles jerárquicos de gestión logística. A veces equivalente al WMS en entornos simples.',
    en: 'Host Management System. High-level management system that coordinates multiple facilities or hierarchical levels of logistics management. Sometimes equivalent to the WMS in simple environments.',
    zh: 'HMS（主机管理系统）：协调多个设施或物流管理层级的高层管理系统。在简单环境中有时等同于WMS。' } },
  { term: 'ERP', id: 'erp', cat: 'software', def: {
    es: 'Enterprise Resource Planning. Sistema de gestión empresarial integral (SAP, Oracle, Dynamics) que gestiona finanzas, compras, ventas, producción e inventario. El WMS se integra con el ERP para recibir órdenes y confirmar movimientos.',
    en: 'Enterprise Resource Planning. Comprehensive business management system (SAP, Oracle, Dynamics) that manages finance, purchasing, sales, production and inventory. The WMS integrates with the ERP to receive orders and confirm movements.',
    zh: 'ERP（企业资源规划）：管理财务、采购、销售、生产和库存的综合业务管理系统（SAP、Oracle、Dynamics）。WMS与ERP集成以接收订单和确认移动。' } },
  { term: 'PLC', id: 'plc', cat: 'software', def: {
    es: 'Programmable Logic Controller. Computadora industrial que controla los equipos físicos del almacén —motores, sensores, actuadores— a nivel de máquina. El WCS envía comandos al PLC, que los ejecuta en el hardware.',
    en: 'Programmable Logic Controller. Industrial computer that controls the warehouse\'s physical equipment —motors, sensors, actuators— at the machine level. The WCS sends commands to the PLC, which executes them on the hardware.',
    zh: 'PLC（可编程逻辑控制器）：在机器层面控制仓库物理设备——电机、传感器、执行器——的工业计算机。WCS向PLC发送命令，PLC在硬件上执行。' } },
  { term: 'Digital Twin', id: 'digital-twin', cat: 'software', def: {
    es: 'Réplica virtual y dinámica del almacén físico que refleja en tiempo real el estado de todos los equipos, el inventario y los flujos. Permite simular cambios de layout y predecir cuellos de botella antes de implementarlos en el sistema real.',
    en: 'Virtual, dynamic replica of the physical warehouse that reflects, in real time, the state of all equipment, inventory and flows. It lets you simulate layout changes and predict bottlenecks before implementing them in the real system.',
    zh: '数字孪生：物理仓库的虚拟动态副本，实时反映所有设备、库存和流程的状态。可在实际系统中实施前模拟布局变更并预测瓶颈。' } },
  { term: 'Telemetría', id: 'telemetria', cat: 'software', def: {
    es: 'Transmisión y análisis remoto de datos operativos: posición del transelevador, temperatura de motores, vibración de rodamientos, consumo eléctrico. Permite mantenimiento predictivo y diagnóstico remoto sin visita presencial.',
    en: 'Remote transmission and analysis of operational data: stacker crane position, motor temperature, bearing vibration, power consumption. Enables predictive maintenance and remote diagnosis without an on-site visit.',
    zh: '遥测：运营数据的远程传输和分析：堆垛机位置、电机温度、轴承振动、电耗。无需现场访问即可实现预测性维护和远程诊断。' } },
  { term: 'RFID', id: 'rfid', cat: 'software', def: {
    es: 'Radio Frequency Identification. Tecnología que permite leer etiquetas sin línea de vista directa, hasta varios metros de distancia. En almacenes ASRS el RFID permite trazabilidad automática de cada paleta sin escaneo manual.',
    en: 'Radio Frequency Identification. Technology that reads tags without a direct line of sight, up to several meters away. In ASRS warehouses, RFID enables automatic traceability of each pallet without manual scanning.',
    zh: 'RFID（射频识别）：无需直接视线、可在数米外读取标签的技术。在ASRS仓库中，RFID可实现每个托盘的自动可追溯，无需手动扫描。' } },
  { term: 'OEE', id: 'oee', cat: 'software', def: {
    es: 'Overall Equipment Effectiveness. Métrica que combina disponibilidad, rendimiento y calidad para expresar la eficiencia real de un equipo vs. su potencial teórico. En almacenes automatizados el OEE de los transelevadores suele superar el 85%.',
    en: 'Overall Equipment Effectiveness. Metric combining availability, performance and quality to express a machine\'s real efficiency vs. its theoretical potential. In automated warehouses, stacker crane OEE usually exceeds 85%.',
    zh: 'OEE（设备综合效率）：结合可用性、性能和质量来表达设备相对于其理论潜力的实际效率的指标。在自动化仓库中，堆垛机的OEE通常超过85%。' } },
  { term: 'KPI', id: 'kpi', cat: 'software', def: {
    es: 'Key Performance Indicator. Métricas que miden el desempeño de la operación logística: throughput, exactitud de inventario, tiempo de ciclo, costo por movimiento, etc. El WMS reporta KPIs en tiempo real.',
    en: 'Key Performance Indicator. Metrics that measure logistics operation performance: throughput, inventory accuracy, cycle time, cost per movement, etc. The WMS reports KPIs in real time.',
    zh: 'KPI（关键绩效指标）：衡量物流运营绩效的指标：吞吐量、库存准确性、周期时间、每次移动成本等。WMS实时报告KPI。' } },
  { term: 'SLA', id: 'sla', cat: 'software', def: {
    es: 'Service Level Agreement. Compromiso contractual sobre disponibilidad del sistema y tiempos de reparación. STOKA ofrece SLAs con respuesta en horas para su cartera de clientes en Argentina y Chile.',
    en: 'Service Level Agreement. Contractual commitment on system availability and repair times. STOKA offers SLAs with response in hours for its client portfolio in Argentina and Chile.',
    zh: 'SLA（服务级别协议）：关于系统可用性和维修时间的合同承诺。STOKA为其在阿根廷和智利的客户群提供数小时响应的SLA。' } },
  { term: 'MTBF', id: 'mtbf', cat: 'software', def: {
    es: 'Mean Time Between Failures. Indicador de confiabilidad: cuántas horas opera un equipo en promedio entre una falla y la siguiente. Los transelevadores DELIE tienen MTBF superior a 8.000 horas.',
    en: 'Mean Time Between Failures. Reliability indicator: how many hours a machine operates on average between one failure and the next. DELIE stacker cranes have an MTBF over 8,000 hours.',
    zh: 'MTBF（平均故障间隔时间）：可靠性指标：设备平均在两次故障之间运行多少小时。DELIE堆垛机的MTBF超过8000小时。' } },
  { term: 'MTTR', id: 'mttr', cat: 'software', def: {
    es: 'Mean Time To Repair. Tiempo promedio que tarda un equipo en restaurarse después de una falla. Junto con el MTBF, determina la disponibilidad operativa del sistema.',
    en: 'Mean Time To Repair. Average time a machine takes to be restored after a failure. Together with MTBF, it determines the system\'s operational availability.',
    zh: 'MTTR（平均修复时间）：设备在故障后恢复所需的平均时间。与MTBF共同决定系统的运营可用性。' } },
  { term: 'Uptime', id: 'uptime', cat: 'software', def: {
    es: 'Porcentaje del tiempo que un sistema está operativo y disponible. Un ASRS de clase industrial tiene uptime superior al 99%. Se calcula como MTBF / (MTBF + MTTR).',
    en: 'Percentage of time a system is operational and available. An industrial-class ASRS has uptime over 99%. It is calculated as MTBF / (MTBF + MTTR).',
    zh: '正常运行时间：系统运营和可用的时间百分比。工业级ASRS的正常运行时间超过99%。计算公式为MTBF /（MTBF + MTTR）。' } },
  { term: 'Redundancia', id: 'redundancia', cat: 'software', def: {
    es: 'Duplicación de componentes críticos (servidores, PLC, redes) para garantizar continuidad operativa en caso de falla. Los sistemas DELIE tienen servidor WCS redundante con failover automático en menos de 30 segundos.',
    en: 'Duplication of critical components (servers, PLCs, networks) to guarantee operational continuity in case of failure. DELIE systems have a redundant WCS server with automatic failover in under 30 seconds.',
    zh: '冗余：复制关键组件（服务器、PLC、网络）以确保故障时的运营连续性。DELIE系统配备冗余WCS服务器，可在30秒内自动故障切换。' } },
  { term: 'Failover', id: 'failover', cat: 'software', def: {
    es: 'Conmutación automática al sistema redundante cuando falla el componente principal, sin intervención humana. En sistemas WCS de alta disponibilidad ocurre en menos de 30 segundos.',
    en: 'Automatic switch to the redundant system when the main component fails, with no human intervention. In high-availability WCS systems it occurs in under 30 seconds.',
    zh: '故障切换：当主组件发生故障时自动切换到冗余系统，无需人工干预。在高可用性WCS系统中，在30秒内完成。' } },
  { term: 'Trazabilidad', id: 'trazabilidad', cat: 'software', def: {
    es: 'Capacidad de registrar y consultar el historial completo de un producto: quién lo recibió, en qué posición estuvo, cuándo se movió y hacia dónde fue expedido. El WMS mantiene trazabilidad completa por lote y número de serie.',
    en: 'Ability to record and query a product\'s full history: who received it, what position it was in, when it moved and where it was dispatched. The WMS maintains full traceability by batch and serial number.',
    zh: '可追溯性：记录和查询产品完整历史的能力：谁收的货、在什么位置、何时移动以及发往何处。WMS按批次和序列号维护完整可追溯性。' } },
  { term: 'Integrador WMS', id: 'integrador-wms', cat: 'software', def: {
    es: 'Empresa especializada que implementa, configura e integra sistemas WMS con los ERP del cliente. STOKA es integrador de los WMS y WCS de DELIE para instalaciones en Argentina y Chile.',
    en: 'Specialized company that implements, configures and integrates WMS systems with the client\'s ERP. STOKA is the integrator of DELIE\'s WMS and WCS for installations in Argentina and Chile.',
    zh: 'WMS集成商：实施、配置WMS系统并将其与客户ERP集成的专业公司。STOKA是DELIE的WMS和WCS在阿根廷和智利安装的集成商。' } },

  // ── OPERACIONES ───────────────────────────────────────────────
  { term: 'Goods-to-Person (GTP)', id: 'goods-to-person', cat: 'operaciones', def: {
    es: 'Modelo operativo en el que el sistema automatizado lleva el producto al operario, en lugar de que el operario recorra el almacén. Aumenta la productividad de picking hasta 5 veces respecto al picking manual convencional.',
    en: 'Operating model in which the automated system brings the product to the operator, instead of the operator walking the warehouse. Increases picking productivity up to 5 times versus conventional manual picking.',
    zh: '货到人（GTP）：自动化系统将产品送到操作员处、而非操作员在仓库中走动的运营模式。相比传统人工拣选，拣选生产力提升高达5倍。' } },
  { term: 'Person-to-Goods', id: 'person-to-goods', cat: 'operaciones', def: {
    es: 'Modelo tradicional en el que el operario se desplaza por el almacén buscando los productos. El operario pasa el 60–70% del tiempo caminando. El modelo goods-to-person elimina ese recorrido.',
    en: 'Traditional model in which the operator walks the warehouse looking for products. The operator spends 60–70% of the time walking. The goods-to-person model eliminates that travel.',
    zh: '人到货：操作员在仓库中走动寻找产品的传统模式。操作员60–70%的时间用于走动。货到人模式消除了这种行走。' } },
  { term: 'Picking', id: 'picking', cat: 'operaciones', def: {
    es: 'Proceso de seleccionar y recolectar unidades de producto de sus ubicaciones para completar un pedido. Es la operación de mayor costo en la mayoría de los almacenes (60–70% del costo operativo total).',
    en: 'Process of selecting and collecting product units from their locations to complete an order. It is the highest-cost operation in most warehouses (60–70% of total operating cost).',
    zh: '拣选：从库位选择并收集产品单元以完成订单的过程。它是大多数仓库中成本最高的运营（占总运营成本的60–70%）。' } },
  { term: 'Put-away', id: 'put-away', cat: 'operaciones', def: {
    es: 'Proceso de almacenar los productos recibidos en sus ubicaciones designadas. El WMS dirige cada unidad a la ubicación óptima según el perfil de rotación del SKU.',
    en: 'Process of storing received products in their designated locations. The WMS directs each unit to the optimal location based on the SKU rotation profile.',
    zh: '上架：将收到的产品存放到指定库位的过程。WMS根据SKU的周转特征将每个单元引导到最佳库位。' } },
  { term: 'Batch Picking', id: 'batch-picking', cat: 'operaciones', def: {
    es: 'Método de picking en el que un operario o robot recoge simultáneamente los productos de múltiples pedidos en un mismo recorrido. Reduce recorridos totales pero requiere una etapa posterior de sorting por pedido.',
    en: 'Picking method in which an operator or robot simultaneously collects products from multiple orders in a single trip. Reduces total travel but requires a later sorting stage per order.',
    zh: '批量拣选：操作员或机器人在一次行程中同时收集多个订单产品的拣选方法。减少总行走距离，但需要后续按订单分拣的阶段。' } },
  { term: 'Pick-to-Light', id: 'pick-to-light', cat: 'operaciones', def: {
    es: 'Indicadores luminosos sobre ubicaciones de almacenamiento que guían al operario en qué posición picar y cuántas unidades tomar. Más rápido y preciso que papel o escáner de mano.',
    en: 'Light indicators above storage locations that guide the operator on which position to pick and how many units to take. Faster and more accurate than paper or handheld scanner.',
    zh: '灯光拣选：库位上方的灯光指示器，引导操作员在哪个位置拣货以及拿取多少单元。比纸张或手持扫描器更快、更准确。' } },
  { term: 'Put-to-Light', id: 'put-to-light', cat: 'operaciones', def: {
    es: 'Indicadores luminosos sobre cubetas o posiciones que guían al operario sobre dónde depositar cada unidad durante el sorting por pedido. Segunda etapa del batch picking.',
    en: 'Light indicators above bins or positions that guide the operator on where to deposit each unit during per-order sorting. Second stage of batch picking.',
    zh: '灯光播种：料盒或位置上方的灯光指示器，在按订单分拣时引导操作员将每个单元放置在何处。批量拣选的第二阶段。' } },
  { term: 'Voice Picking', id: 'voice-picking', cat: 'operaciones', def: {
    es: 'Picking dirigido por voz: el WMS envía instrucciones de audio al auricular del operario y recibe confirmaciones verbales. Libera ambas manos para el manipuleo del producto.',
    en: 'Voice-directed picking: the WMS sends audio instructions to the operator\'s headset and receives verbal confirmations. Frees both hands for product handling.',
    zh: '语音拣选：WMS向操作员的耳机发送音频指令并接收口头确认。解放双手以便处理产品。' } },
  { term: 'Throughput', id: 'throughput', cat: 'operaciones', def: {
    es: 'Número de movimientos (entrada + salida) que un sistema puede procesar por hora. Es el indicador más crítico para dimensionar un ASRS y determinar la flota de equipos necesaria.',
    en: 'Number of movements (inbound + outbound) a system can process per hour. It is the most critical indicator for sizing an ASRS and determining the required equipment fleet.',
    zh: '吞吐量：系统每小时可处理的移动次数（入库+出库）。它是确定ASRS规模和所需设备数量最关键的指标。' } },
  { term: 'SKU', id: 'sku', cat: 'operaciones', def: {
    es: 'Stock Keeping Unit. Código único que identifica cada variante distinta de producto. El número de SKUs activos es determinante en la elección entre transelevador y shuttle.',
    en: 'Stock Keeping Unit. Unique code that identifies each distinct product variant. The number of active SKUs is decisive in choosing between stacker crane and shuttle.',
    zh: 'SKU（库存单位）：识别每个不同产品变体的唯一代码。活跃SKU的数量决定了在堆垛机和穿梭车之间的选择。' } },
  { term: 'FIFO', id: 'fifo', cat: 'operaciones', def: {
    es: 'First In, First Out. Los productos más antiguos salen primero. Fundamental en alimentos, farmacéutica y cualquier producto con fecha de vencimiento.',
    en: 'First In, First Out. The oldest products leave first. Essential in food, pharma and any product with an expiry date.',
    zh: 'FIFO（先进先出）：最早的产品先出库。在食品、制药及任何有保质期的产品中至关重要。' } },
  { term: 'LIFO', id: 'lifo', cat: 'operaciones', def: {
    es: 'Last In, First Out. El último producto ingresado sale primero. Modo de operación natural de los canales de shuttle en profundidad; los modelos 4 vías permiten acceso más flexible.',
    en: 'Last In, First Out. The last product stored leaves first. Natural operating mode of deep shuttle channels; 4-way models allow more flexible access.',
    zh: 'LIFO（后进先出）：最后入库的产品先出库。纵深穿梭通道的自然运营模式；4向型号可实现更灵活的存取。' } },
  { term: 'FEFO', id: 'fefo', cat: 'operaciones', def: {
    es: 'First Expired, First Out. La prioridad de salida es la fecha de vencimiento más próxima, no el orden de ingreso. Crítico en farmacéutica y alimentos perecederos.',
    en: 'First Expired, First Out. The dispatch priority is the nearest expiry date, not the order of entry. Critical in pharma and perishable foods.',
    zh: 'FEFO（先到期先出）：出库优先级是最近的到期日期，而非入库顺序。在制药和易腐食品中至关重要。' } },
  { term: 'Slotting', id: 'slotting', cat: 'operaciones', def: {
    es: 'Proceso de asignar cada SKU a su ubicación óptima según frecuencia de picking y características del producto. Un slotting bien diseñado puede reducir el tiempo de picking en un 20–30%.',
    en: 'Process of assigning each SKU to its optimal location based on picking frequency and product characteristics. Well-designed slotting can reduce picking time by 20–30%.',
    zh: '库位分配（Slotting）：根据拣选频率和产品特性将每个SKU分配到最佳库位的过程。设计良好的库位分配可将拣选时间减少20–30%。' } },
  { term: 'Análisis ABC', id: 'analisis-abc', cat: 'operaciones', def: {
    es: 'Clasificación del inventario por frecuencia de movimiento: A (20% de SKUs = 80% de movimientos), B (30% = 15%), C (50% = 5%). Determina la ubicación de cada SKU en el almacén.',
    en: 'Inventory classification by movement frequency: A (20% of SKUs = 80% of movements), B (30% = 15%), C (50% = 5%). Determines the location of each SKU in the warehouse.',
    zh: 'ABC分析：按移动频率对库存进行分类：A（20%的SKU = 80%的移动），B（30% = 15%），C（50% = 5%）。决定每个SKU在仓库中的库位。' } },
  { term: 'Análisis XYZ', id: 'analisis-xyz', cat: 'operaciones', def: {
    es: 'Clasificación del inventario por variabilidad de demanda: X (regular y predecible), Y (con variaciones moderadas), Z (irregular o esporádica). Se combina con el análisis ABC para el slotting óptimo.',
    en: 'Inventory classification by demand variability: X (regular and predictable), Y (moderate variations), Z (irregular or sporadic). Combined with ABC analysis for optimal slotting.',
    zh: 'XYZ分析：按需求变异性对库存进行分类：X（规律可预测），Y（中等变化），Z（不规律或零星）。与ABC分析结合实现最佳库位分配。' } },
  { term: 'Paleta / Pallet', id: 'pallet', cat: 'operaciones', def: {
    es: 'Plataforma de madera, plástico o metal sobre la cual se apilan cargas paletizadas. Euro-paleta: 1.200 × 800 mm. Americana: 1.200 × 1.000 mm. El tamaño y peso máximo determina el tipo de transelevador.',
    en: 'Wood, plastic or metal platform on which palletized loads are stacked. Euro-pallet: 1,200 × 800 mm. American: 1,200 × 1,000 mm. Size and maximum weight determine the stacker crane type.',
    zh: '托盘（Pallet）：堆叠码垛货物的木质、塑料或金属平台。欧标托盘：1200×800毫米。美标：1200×1000毫米。尺寸和最大重量决定堆垛机类型。' } },
  { term: 'Tote', id: 'tote', cat: 'operaciones', def: {
    es: 'Contenedor plástico estandarizado (fondo de rejilla) usado en sistemas MiniLoad y conveyor para almacenar y transportar artículos de pequeño formato. Es la unidad de manipulación en e-commerce y farmacéutica.',
    en: 'Standardized plastic container (grid bottom) used in MiniLoad and conveyor systems to store and transport small-format items. It is the handling unit in e-commerce and pharma.',
    zh: '料箱（Tote）：用于MiniLoad和输送系统的标准化塑料容器（网格底部），用于存储和运输小型物品。是电商和制药中的搬运单元。' } },
  { term: 'Bandeja', id: 'bandeja', cat: 'operaciones', def: {
    es: 'Contenedor plano o perforado usado en sistemas VLM. Cada bandeja ocupa una posición en el módulo vertical y puede contener múltiples SKUs divididos por separadores.',
    en: 'Flat or perforated container used in VLM systems. Each tray occupies a position in the vertical module and can hold multiple SKUs divided by separators.',
    zh: '料盘：用于VLM系统的扁平或穿孔容器。每个料盘在垂直模块中占据一个位置，可容纳由隔板分开的多个SKU。' } },
  { term: 'Ciclo combinado', id: 'ciclo-combinado', cat: 'operaciones', def: {
    es: 'Operación en la que un transelevador realiza simultáneamente una tarea de almacenamiento y una de recuperación en el mismo viaje. Aumenta significativamente el throughput vs. ciclos simples.',
    en: 'Operation in which a stacker crane performs a storage task and a retrieval task simultaneously on the same trip. Significantly increases throughput vs. single cycles.',
    zh: '复合循环：堆垛机在同一行程中同时执行存储任务和检索任务的操作。相比单一循环显著提高吞吐量。' } },
  { term: 'Ciclo simple', id: 'ciclo-simple', cat: 'operaciones', def: {
    es: 'Operación en la que el transelevador realiza un solo movimiento por viaje: solo almacenamiento o solo recuperación. Menos eficiente que el ciclo combinado.',
    en: 'Operation in which the stacker crane performs a single movement per trip: storage only or retrieval only. Less efficient than the combined cycle.',
    zh: '单一循环：堆垛机每次行程仅执行一个移动的操作：仅存储或仅检索。效率低于复合循环。' } },
  { term: 'Pasillo', id: 'pasillo', cat: 'operaciones', def: {
    es: 'Corredor entre dos bloques de estanterías donde opera el transelevador. En sistemas ASRS el pasillo es estrecho (1.000–1.800 mm) y de uso exclusivo del equipo automatizado.',
    en: 'Corridor between two racking blocks where the stacker crane operates. In ASRS systems the aisle is narrow (1,000–1,800 mm) and exclusively used by the automated equipment.',
    zh: '巷道：堆垛机运行的两组货架之间的通道。在ASRS系统中，巷道狭窄（1000–1800毫米），专供自动化设备使用。' } },
  { term: 'Canal', id: 'canal', cat: 'operaciones', def: {
    es: 'Espacio interior de las estanterías en profundidad donde el robot shuttle almacena paletas en fila. Un canal puede tener entre 2 y 30 posiciones de profundidad según el diseño.',
    en: 'Inner space of the deep racking where the shuttle robot stores pallets in a row. A channel can have between 2 and 30 depth positions depending on the design.',
    zh: '通道（Canal）：穿梭机器人将托盘成排存储的纵深货架内部空间。根据设计，一个通道可有2至30个纵深位置。' } },
  { term: 'Posición', id: 'posicion', cat: 'operaciones', def: {
    es: 'Celda individual dentro de la estantería donde se almacena exactamente una paleta, tote o contenedor. Se identifica por pasillo, nivel y profundidad.',
    en: 'Individual cell within the racking where exactly one pallet, tote or container is stored. Identified by aisle, level and depth.',
    zh: '库位：货架内存储恰好一个托盘、料箱或容器的单个单元。通过巷道、层和深度来标识。' } },
  { term: 'Footprint', id: 'footprint', cat: 'operaciones', def: {
    es: 'Huella física que ocupa un sistema de almacenamiento en el piso del almacén. Un sistema de alta densidad (shuttle) tiene menor footprint que un sistema convencional para la misma capacidad.',
    en: 'Physical footprint a storage system occupies on the warehouse floor. A high-density system (shuttle) has a smaller footprint than a conventional system for the same capacity.',
    zh: '占地面积（Footprint）：存储系统在仓库地面上占用的物理面积。在相同容量下，高密度系统（穿梭车）的占地面积小于传统系统。' } },
  { term: 'Losa', id: 'losa', cat: 'operaciones', def: {
    es: 'Piso de hormigón del almacén sobre el que se instalan los rieles y la estructura de las estanterías. Para un ASRS, la losa debe estar nivelada dentro de ±5 mm en 5 metros y tener la resistencia a la carga calculada por la ingeniería.',
    en: 'Concrete floor of the warehouse on which the rails and racking structure are installed. For an ASRS, the slab must be level within ±5 mm over 5 meters and have the load resistance calculated by engineering.',
    zh: '地坪：安装导轨和货架结构的仓库混凝土地面。对于ASRS，地坪在5米内必须平整至±5毫米，并具备工程计算的承载能力。' } },
  { term: 'Cross-docking', id: 'cross-docking', cat: 'operaciones', def: {
    es: 'Operativa en la que los productos llegan al almacén y se preparan para expedición sin pasar por almacenamiento permanente. El producto cruza el almacén (docking a docking) directamente.',
    en: 'Operation in which products arrive at the warehouse and are prepared for dispatch without going through permanent storage. The product crosses the warehouse (dock to dock) directly.',
    zh: '越库（Cross-docking）：产品到达仓库后无需经过长期存储即准备发货的运营方式。产品直接穿越仓库（从月台到月台）。' } },
  { term: 'Staging Area', id: 'staging', cat: 'operaciones', def: {
    es: 'Zona de preparación donde se consolidan los productos de una orden antes de su expedición. El WCS coordina la entrega de los contenedores desde el ASRS al staging para minimizar los tiempos de espera del camión.',
    en: 'Preparation zone where the products of an order are consolidated before dispatch. The WCS coordinates container delivery from the ASRS to staging to minimize truck waiting times.',
    zh: '暂存区（Staging Area）：在发货前整合订单产品的准备区。WCS协调将容器从ASRS送至暂存区，以最大限度减少卡车等待时间。' } },
  { term: 'Consolidación', id: 'consolidacion', cat: 'operaciones', def: {
    es: 'Proceso de reunir los distintos productos de un mismo pedido, provenientes de diferentes zonas del almacén, en un único contenedor, paleta o zona de expedición.',
    en: 'Process of gathering the different products of the same order, coming from different warehouse zones, into a single container, pallet or dispatch zone.',
    zh: '合并（Consolidación）：将来自仓库不同区域的同一订单的不同产品汇集到单个容器、托盘或发货区的过程。' } },
  { term: 'Wave de picking', id: 'wave', cat: 'operaciones', def: {
    es: 'Agrupación de órdenes de picking que se procesan en un mismo ciclo de trabajo para optimizar los recorridos del ASRS. El WMS genera waves según el tiempo de expedición comprometido y la capacidad del equipo.',
    en: 'Grouping of picking orders processed in the same work cycle to optimize ASRS travel. The WMS generates waves based on the committed dispatch time and equipment capacity.',
    zh: '拣选波次（Wave）：在同一工作周期内处理的拣选订单分组，以优化ASRS的行程。WMS根据承诺的发货时间和设备能力生成波次。' } },
  { term: 'Centro de Distribución (CD)', id: 'centro-distribucion', cat: 'operaciones', def: {
    es: 'Instalación logística cuya función principal es recibir productos de proveedores y redistribuirlos eficientemente hacia los puntos de venta o clientes finales.',
    en: 'Logistics facility whose main function is to receive products from suppliers and efficiently redistribute them to points of sale or end customers.',
    zh: '配送中心（CD）：主要功能是接收供应商产品并高效地将其重新分配到销售点或最终客户的物流设施。' } },
  { term: '3PL', id: '3pl', cat: 'operaciones', def: {
    es: 'Third Party Logistics. Empresa que ofrece servicios logísticos a terceros: almacenamiento, transporte y gestión de inventario. Los operadores 3PL usan ASRS para mayor capacidad con el mismo footprint.',
    en: 'Third Party Logistics. Company that offers logistics services to third parties: storage, transport and inventory management. 3PL operators use ASRS for greater capacity with the same footprint.',
    zh: '3PL（第三方物流）：向第三方提供物流服务的公司：存储、运输和库存管理。第三方物流运营商使用ASRS在相同占地面积下获得更大容量。' } },
  { term: 'WIP', id: 'wip', cat: 'operaciones', def: {
    es: 'Work In Progress. Inventario en proceso dentro de la cadena de producción. Los ASRS en manufactura frecuentemente gestionan el WIP entre etapas de producción.',
    en: 'Work In Progress. In-process inventory within the production chain. ASRS in manufacturing frequently manage WIP between production stages.',
    zh: 'WIP（在制品）：生产链中处于加工过程的库存。制造业中的ASRS经常管理生产阶段之间的在制品。' } },
  { term: 'Buffer', id: 'buffer', cat: 'operaciones', def: {
    es: 'Zona o capacidad de almacenamiento temporal que absorbe las diferencias de velocidad entre dos procesos consecutivos. Los buffers de entrada y salida amortiguan los picos de demanda del transelevador.',
    en: 'Temporary storage zone or capacity that absorbs speed differences between two consecutive processes. Inbound and outbound buffers cushion stacker crane demand peaks.',
    zh: '缓冲区（Buffer）：吸收两个连续流程之间速度差异的临时存储区域或容量。入库和出库缓冲区缓和堆垛机的需求高峰。' } },
  { term: 'Secuenciación', id: 'secuenciacion', cat: 'operaciones', def: {
    es: 'Recuperación y entrega de ítems en un orden específico para optimizar el proceso posterior. Los WCS avanzados realizan secuenciación automática coordinando múltiples transelevadores.',
    en: 'Retrieval and delivery of items in a specific order to optimize the subsequent process. Advanced WCS perform automatic sequencing by coordinating multiple stacker cranes.',
    zh: '排序（Secuenciación）：以特定顺序检索和交付物品以优化后续流程。先进的WCS通过协调多台堆垛机实现自动排序。' } },
  { term: 'Layout', id: 'layout', cat: 'operaciones', def: {
    es: 'Distribución física de los equipos, pasillos, zonas funcionales y flujos dentro de un almacén. STOKA realiza simulaciones 3D con análisis de flujos en cada propuesta de automatización.',
    en: 'Physical arrangement of equipment, aisles, functional zones and flows within a warehouse. STOKA performs 3D simulations with flow analysis in every automation proposal.',
    zh: '布局（Layout）：仓库内设备、巷道、功能区和流程的物理布置。STOKA在每个自动化方案中进行带流程分析的3D仿真。' } },
  { term: 'Lead Time', id: 'lead-time', cat: 'operaciones', def: {
    es: 'Tiempo desde que se genera un pedido hasta que el cliente lo recibe. En almacenes automatizados el lead time interno se reduce un 60–80% respecto a la operación manual gracias al goods-to-person.',
    en: 'Time from when an order is generated until the customer receives it. In automated warehouses, internal lead time is reduced by 60–80% versus manual operation thanks to goods-to-person.',
    zh: '前置时间（Lead Time）：从生成订单到客户收货的时间。在自动化仓库中，得益于货到人，内部前置时间相比人工运营减少60–80%。' } },
  { term: 'Cubicaje', id: 'cubicaje', cat: 'operaciones', def: {
    es: 'Medición del volumen, peso y dimensiones de los ítems a almacenar. El cubicaje preciso de cada SKU es necesario para dimensionar las posiciones del ASRS y seleccionar los totes correctos.',
    en: 'Measurement of the volume, weight and dimensions of the items to be stored. Accurate cubing of each SKU is necessary to size ASRS positions and select the right totes.',
    zh: '体积测量（Cubicaje）：测量待存储物品的体积、重量和尺寸。每个SKU的精确体积测量对于确定ASRS库位尺寸和选择正确的料箱是必要的。' } },
  { term: 'Mezzanine', id: 'mezzanine', cat: 'operaciones', def: {
    es: 'Estructura metálica elevada que crea un nivel adicional dentro de una nave industrial. Los VLM y MiniLoad se integran frecuentemente con mezzanines para acceso multi-nivel.',
    en: 'Elevated metal structure that creates an additional level within an industrial building. VLM and MiniLoad are frequently integrated with mezzanines for multi-level access.',
    zh: '夹层（Mezzanine）：在工业厂房内创建额外楼层的高架金属结构。VLM和MiniLoad经常与夹层集成以实现多层存取。' } },
  { term: 'Zona de expedición', id: 'zona-expedicion', cat: 'operaciones', def: {
    es: 'Área del almacén destinada a consolidar los pedidos listos para despachar, etiquetar, verificar y cargar en los camiones de distribución.',
    en: 'Warehouse area for consolidating orders ready to dispatch, label, verify and load onto distribution trucks.',
    zh: '发货区：仓库中用于整合待发货订单、贴标、核对并装载到配送卡车的区域。' } },
  { term: 'Zona de recepción', id: 'zona-recepcion', cat: 'operaciones', def: {
    es: 'Área donde se descargan, inspeccionan e identifican los productos que llegan de proveedores. Incluye control de calidad, cubicaje, pesaje y escaneo para el ingreso al WMS.',
    en: 'Area where products arriving from suppliers are unloaded, inspected and identified. Includes quality control, cubing, weighing and scanning for entry into the WMS.',
    zh: '收货区：卸载、检查和识别供应商到货产品的区域。包括质量控制、体积测量、称重和扫描以录入WMS。' } },
  { term: 'Intralogística', id: 'intralogistica', cat: 'operaciones', def: {
    es: 'Gestión y optimización de todos los flujos internos de materiales, información y personas dentro de una instalación logística o productiva. Abarca desde la recepción hasta la expedición.',
    en: 'Management and optimization of all internal flows of materials, information and people within a logistics or production facility. It spans from receiving to dispatch.',
    zh: '仓内物流（Intralogística）：管理和优化物流或生产设施内所有物料、信息和人员的内部流程。涵盖从收货到发货的全过程。' } },
  { term: 'Omnicanalidad', id: 'omnicanalidad', cat: 'operaciones', def: {
    es: 'Modelo en el que el cliente compra y recibe productos por cualquier canal de forma integrada. Los almacenes omnicanal gestionan simultáneamente reposición de tiendas y pedidos online individuales.',
    en: 'Model in which the customer buys and receives products through any channel in an integrated way. Omnichannel warehouses simultaneously manage store replenishment and individual online orders.',
    zh: '全渠道（Omnicanalidad）：客户通过任何渠道以一体化方式购买和接收产品的模式。全渠道仓库同时管理门店补货和单个在线订单。' } },
  { term: 'Last Mile', id: 'last-mile', cat: 'operaciones', def: {
    es: 'Último tramo de la distribución: desde el centro de distribución hasta el cliente final. Es el segmento más costoso de la logística (40–60% del costo total de distribución).',
    en: 'Last leg of distribution: from the distribution center to the end customer. It is the most expensive segment of logistics (40–60% of total distribution cost).',
    zh: '最后一公里（Last Mile）：配送的最后一段：从配送中心到最终客户。它是物流中成本最高的部分（占总配送成本的40–60%）。' } },

  // ── FINANZAS Y LEGAL ──────────────────────────────────────────
  { term: 'TCO', id: 'tco', cat: 'finanzas', def: {
    es: 'Total Cost of Ownership. Suma de todos los costos durante la vida útil del sistema: inversión inicial, instalación, mantenimiento, energía, actualizaciones de software y reemplazos. El indicador correcto para comparar alternativas de automatización.',
    en: 'Total Cost of Ownership. Sum of all costs over the system\'s useful life: initial investment, installation, maintenance, energy, software updates and replacements. The right indicator for comparing automation alternatives.',
    zh: 'TCO（总拥有成本）：系统使用寿命内所有成本的总和：初始投资、安装、维护、能源、软件更新和更换。是比较自动化方案的正确指标。' } },
  { term: 'ROI', id: 'roi', cat: 'finanzas', def: {
    es: 'Return on Investment. Tiempo en meses que tarda una inversión en recuperarse con los ahorros que genera. En automatización de almacenes el ROI típico está entre 18 y 48 meses.',
    en: 'Return on Investment. Time in months it takes an investment to pay back with the savings it generates. In warehouse automation, typical ROI is between 18 and 48 months.',
    zh: 'ROI（投资回报）：投资通过其产生的节省收回所需的月数。在仓库自动化中，典型ROI为18至48个月。' } },
  { term: 'CAPEX', id: 'capex', cat: 'finanzas', def: {
    es: 'Capital Expenditure. Inversión en activos fijos: sistemas ASRS, equipos, instalaciones. Se amortiza contablemente durante años. Con el RIMI, puede amortizarse el 100% en el primer ejercicio.',
    en: 'Capital Expenditure. Investment in fixed assets: ASRS systems, equipment, installations. Depreciated for accounting over years. With RIMI, 100% can be depreciated in the first fiscal year.',
    zh: 'CAPEX（资本支出）：固定资产投资：ASRS系统、设备、安装。在会计上多年折旧。通过RIMI，可在第一个财政年度100%折旧。' } },
  { term: 'OPEX', id: 'opex', cat: 'finanzas', def: {
    es: 'Operating Expenditure. Gastos operativos recurrentes: mantenimiento, energía, mano de obra y licencias de software. La automatización transforma OPEX variable (mano de obra) en CAPEX + OPEX fijo (mantenimiento).',
    en: 'Operating Expenditure. Recurring operating expenses: maintenance, energy, labor and software licenses. Automation transforms variable OPEX (labor) into CAPEX + fixed OPEX (maintenance).',
    zh: 'OPEX（运营支出）：经常性运营费用：维护、能源、人工和软件许可。自动化将可变OPEX（人工）转变为CAPEX + 固定OPEX（维护）。' } },
  { term: 'FAT', id: 'fat', cat: 'finanzas', def: {
    es: 'Factory Acceptance Test. Prueba funcional del sistema ASRS en las instalaciones del fabricante, en presencia del cliente, antes del envío. Verifica que el equipo cumple las especificaciones contractuales.',
    en: 'Factory Acceptance Test. Functional test of the ASRS system at the manufacturer\'s facilities, in the presence of the client, before shipment. Verifies the equipment meets the contractual specifications.',
    zh: 'FAT（工厂验收测试）：在发货前于制造商工厂、在客户在场情况下对ASRS系统进行的功能测试。验证设备符合合同规格。' } },
  { term: 'SAT', id: 'sat', cat: 'finanzas', def: {
    es: 'Site Acceptance Test. Prueba funcional completa del sistema instalado en el almacén del cliente, al finalizar la puesta en marcha. Es el hito que da inicio a la garantía del equipo.',
    en: 'Site Acceptance Test. Complete functional test of the system installed at the client\'s warehouse, upon commissioning completion. It is the milestone that starts the equipment warranty.',
    zh: 'SAT（现场验收测试）：在调试完成时对安装于客户仓库的系统进行的完整功能测试。是启动设备保修的里程碑。' } },
  { term: 'RIMI', id: 'rimi', cat: 'finanzas', def: {
    es: 'Régimen de Incentivo a la Manufactura e Industria (Ley 27.802). Permite amortización acelerada del 100% de bienes de capital en el primer ejercicio y devolución anticipada del IVA en importaciones de equipos productivos.',
    en: 'Manufacturing and Industry Incentive Regime (Ley 27.802). Allows 100% accelerated depreciation of capital goods in the first fiscal year and early VAT refund on imports of productive equipment.',
    zh: 'RIMI（制造业与工业激励制度，Ley 27.802）：允许在第一个财政年度对资本货物进行100%加速折旧，并对生产设备进口提前退还增值税。' } },
  { term: 'Decreto 513/2025', id: 'decreto-513', cat: 'finanzas', def: {
    es: 'Decreto del Poder Ejecutivo Nacional que reduce los aranceles de importación para equipos ASRS y sistemas de automatización logística en Argentina según la clasificación NCM de cada componente. Vigente desde 2025.',
    en: 'National Executive Branch decree that reduces import tariffs for ASRS equipment and logistics automation systems in Argentina based on the NCM classification of each component. In force since 2025.',
    zh: 'Decreto 513/2025：阿根廷国家行政部门法令，根据每个部件的NCM分类降低ASRS设备和物流自动化系统的进口关税。自2025年起生效。' } },
  { term: 'BICE', id: 'bice', cat: 'finanzas', def: {
    es: 'Banco de Inversión y Comercio Exterior. Entidad financiera estatal argentina que ofrece líneas de crédito para modernización industrial y bienes de capital, con tasas preferenciales y plazos de hasta 10 años.',
    en: 'Investment and Foreign Trade Bank. Argentine state financial institution that offers credit lines for industrial modernization and capital goods, with preferential rates and terms of up to 10 years.',
    zh: 'BICE（投资与对外贸易银行）：阿根廷国有金融机构，为工业现代化和资本货物提供信贷额度，利率优惠，期限最长10年。' } },
  { term: 'Amortización acelerada', id: 'amortizacion-acelerada', cat: 'finanzas', def: {
    es: 'Mecanismo fiscal que permite deducir el valor total de un bien de capital en el primer año. Disponible en Argentina bajo el RIMI para bienes de capital productivos.',
    en: 'Tax mechanism that allows deducting the full value of a capital good in the first year. Available in Argentina under RIMI for productive capital goods.',
    zh: '加速折旧：允许在第一年扣除资本货物全部价值的税收机制。在阿根廷的RIMI下可用于生产性资本货物。' } },
  { term: 'Estabilidad fiscal', id: 'estabilidad-fiscal', cat: 'finanzas', def: {
    es: 'Garantía legal que protege una inversión de cambios impositivos negativos durante un período determinado. El RIGI (Ley 27.742) ofrece estabilidad fiscal por 30 años para proyectos que califican.',
    en: 'Legal guarantee that protects an investment from negative tax changes during a set period. RIGI (Ley 27.742) offers tax stability for 30 years for qualifying projects.',
    zh: '税收稳定：在特定期间保护投资免受不利税收变化影响的法律保障。RIGI（Ley 27.742）为符合条件的项目提供30年税收稳定。' } },

  // ── VOCABULARIO DE BÚSQUEDA / LOGÍSTICA MODERNA ──────────────────
  { term: 'Depósito inteligente', id: 'deposito-inteligente', cat: 'operaciones', def: {
    es: 'Almacén que integra automatización, sensores y software de gestión para operar con mínima intervención humana. Combina sistemas de almacenamiento automático, robótica y datos en tiempo real para optimizar el flujo de mercadería, la densidad y la trazabilidad. Es la evolución del depósito tradicional hacia la logística 4.0.',
    en: 'Warehouse that integrates automation, sensors and management software to operate with minimal human intervention. It combines automatic storage systems, robotics and real-time data to optimize goods flow, density and traceability. It is the evolution of the traditional warehouse toward Logistics 4.0.',
    zh: '智能仓库：整合自动化、传感器和管理软件、以最少人工干预运营的仓库。结合自动存储系统、机器人技术和实时数据，优化货物流转、密度和可追溯性。是传统仓库向物流4.0演进的成果。' } },
  { term: 'Logística 4.0', id: 'logistica-4-0', cat: 'operaciones', def: {
    es: 'Aplicación de las tecnologías de la Industria 4.0 —IoT, automatización, inteligencia artificial y análisis de datos— a la cadena de suministro y la operación de almacenes. Permite que depósitos, transelevadores, robots y software se comuniquen entre sí para una operación conectada, autónoma y autooptimizada.',
    en: 'Application of Industry 4.0 technologies —IoT, automation, artificial intelligence and data analytics— to the supply chain and warehouse operations. It lets warehouses, stacker cranes, robots and software communicate with each other for a connected, autonomous and self-optimizing operation.',
    zh: '物流4.0：将工业4.0技术——物联网、自动化、人工智能和数据分析——应用于供应链和仓库运营。让仓库、堆垛机、机器人和软件相互通信，实现互联、自主和自我优化的运营。' } },
  { term: 'Logística inteligente', id: 'logistica-inteligente', cat: 'operaciones', def: {
    es: 'Gestión de la cadena de suministro basada en datos y automatización para tomar decisiones en tiempo real. Abarca desde el almacenamiento robotizado hasta la planificación de inventario predictiva, reduciendo costos, errores y tiempos en centros de distribución y depósitos automáticos.',
    en: 'Data- and automation-based supply chain management to make real-time decisions. It spans from robotized storage to predictive inventory planning, reducing costs, errors and times in distribution centers and automated warehouses.',
    zh: '智能物流：基于数据和自动化、用于实时决策的供应链管理。涵盖从机器人化仓储到预测性库存规划，降低配送中心和自动化仓库的成本、差错和时间。' } },
  { term: 'Almacén 4.0', id: 'almacen-4-0', cat: 'operaciones', def: {
    es: 'Almacén o centro de distribución que opera bajo el paradigma de la Industria 4.0: equipos automatizados interconectados, software de gestión (WMS/WCS) y datos en tiempo real. Sinónimo práctico de depósito inteligente y base de la intralogística moderna.',
    en: 'Warehouse or distribution center operating under the Industry 4.0 paradigm: interconnected automated equipment, management software (WMS/WCS) and real-time data. A practical synonym for smart warehouse and the basis of modern intralogistics.',
    zh: '仓库4.0：在工业4.0范式下运营的仓库或配送中心：互联的自动化设备、管理软件（WMS/WCS）和实时数据。智能仓库的实用同义词，也是现代仓内物流的基础。' } },
  { term: 'Smart warehouse', id: 'smart-warehouse', cat: 'operaciones', def: {
    es: 'Término en inglés para "almacén inteligente". Designa un depósito altamente automatizado y digitalizado donde robots, transelevadores y software coordinan el almacenamiento y la preparación de pedidos con mínima intervención manual. Equivalente a depósito inteligente o almacén 4.0.',
    en: 'A highly automated and digitalized warehouse where robots, stacker cranes and software coordinate storage and order preparation with minimal manual intervention. Equivalent to smart facility or Warehouse 4.0.',
    zh: 'Smart warehouse（智能仓库）：高度自动化和数字化的仓库，机器人、堆垛机和软件以最少人工干预协调存储和订单准备。等同于智能设施或仓库4.0。' } },
  { term: 'Dark warehouse', id: 'dark-warehouse-2', cat: 'operaciones', def: {
    es: 'Almacén oscuro: depósito totalmente automatizado que opera sin iluminación ni personal en planta, porque la totalidad del manejo de mercadería la realizan robots y transelevadores. Representa el grado máximo de automatización logística y reduce drásticamente costos operativos y energéticos.',
    en: 'Dark warehouse: a fully automated facility that operates without lighting or floor staff, because all goods handling is performed by robots and stacker cranes. It represents the maximum degree of logistics automation and drastically reduces operating and energy costs.',
    zh: 'Dark warehouse（黑灯仓库）：完全自动化的设施，无需照明或现场人员，因为所有货物搬运均由机器人和堆垛机完成。代表物流自动化的最高程度，大幅降低运营和能源成本。' } },
  { term: 'Goods to person', id: 'goods-to-person-2', cat: 'operaciones', def: {
    es: 'Modelo de preparación de pedidos "mercancía a persona": el sistema lleva el producto hasta el operario en una estación fija, en lugar de que el operario camine hasta el producto. Multiplica la productividad de picking y es típico de los sistemas ASRS con shuttles y VLM.',
    en: '"Goods to person" order preparation model: the system brings the product to the operator at a fixed station, instead of the operator walking to the product. It multiplies picking productivity and is typical of ASRS systems with shuttles and VLM.',
    zh: '货到人：订单准备模式，系统将产品送到固定工作站的操作员处，而非操作员走向产品。它倍增拣选生产力，是配备穿梭车和VLM的ASRS系统的典型特征。' } },
  { term: 'Person to goods', id: 'person-to-goods-2', cat: 'operaciones', def: {
    es: 'Modelo de preparación de pedidos "persona a mercancía": el operario se desplaza por el almacén hasta cada ubicación para recoger el producto. Es el método tradicional, más lento y con mayor recorrido, que la automatización goods-to-person busca reemplazar.',
    en: '"Person to goods" order preparation model: the operator moves through the warehouse to each location to pick the product. It is the traditional, slower, higher-travel method that goods-to-person automation aims to replace.',
    zh: '人到货：订单准备模式，操作员在仓库中移动到每个库位拣货。这是传统的、较慢的、行走更多的方法，货到人自动化旨在取代它。' } },
  { term: 'Cross docking', id: 'cross-docking-2', cat: 'operaciones', def: {
    es: 'Estrategia logística en la que la mercadería que ingresa al centro de distribución se reexpide casi de inmediato hacia su destino, sin almacenamiento intermedio prolongado. Reduce inventario y tiempos; la automatización del flujo interno la hace mucho más eficiente.',
    en: 'Logistics strategy in which goods entering the distribution center are re-dispatched almost immediately to their destination, without prolonged intermediate storage. Reduces inventory and times; internal flow automation makes it much more efficient.',
    zh: 'Cross docking（越库）：进入配送中心的货物几乎立即重新发往目的地、无需长时间中间存储的物流策略。减少库存和时间；内部流程自动化使其更加高效。' } },
  { term: 'Slotting (optimización)', id: 'slotting-2', cat: 'operaciones', def: {
    es: 'Asignación óptima de ubicaciones a los productos dentro del almacén según rotación, peso, tamaño y demanda. Un buen slotting reduce recorridos y tiempos de picking; los sistemas inteligentes lo recalculan dinámicamente con datos de la operación.',
    en: 'Optimal assignment of locations to products within the warehouse based on rotation, weight, size and demand. Good slotting reduces travel and picking times; intelligent systems recalculate it dynamically with operation data.',
    zh: 'Slotting（库位优化）：根据周转率、重量、尺寸和需求在仓库内为产品最佳分配库位。良好的库位分配减少行走和拣选时间；智能系统利用运营数据动态重新计算。' } },
  { term: 'Densidad de almacenamiento', id: 'densidad-almacenamiento', cat: 'operaciones', def: {
    es: 'Cantidad de mercadería que se puede almacenar por metro cuadrado o cúbico de un depósito. La automatización de alta densidad —ASRS, pallet shuttle, almacenamiento vertical— permite multiplicar la densidad respecto a una estantería convencional y aprovechar la altura de la nave.',
    en: 'Amount of goods that can be stored per square or cubic meter of a warehouse. High-density automation —ASRS, pallet shuttle, vertical storage— multiplies density versus conventional racking and uses the height of the building.',
    zh: '存储密度：仓库每平方米或立方米可存储的货物量。高密度自动化——ASRS、托盘穿梭车、垂直存储——相比传统货架成倍提升密度并利用厂房高度。' } },
  { term: 'Supply chain', id: 'supply-chain', cat: 'operaciones', def: {
    es: 'Cadena de suministro: red de proveedores, fabricantes, almacenes y transporte que lleva un producto desde el origen hasta el cliente final. La automatización de almacenes mejora un eslabón crítico de la supply chain: la velocidad y exactitud del fulfillment.',
    en: 'Supply chain: network of suppliers, manufacturers, warehouses and transport that takes a product from origin to the end customer. Warehouse automation improves a critical link in the supply chain: fulfillment speed and accuracy.',
    zh: 'Supply chain（供应链）：将产品从源头送到最终客户的供应商、制造商、仓库和运输网络。仓库自动化改善供应链的关键环节：履约速度和准确性。' } },
  { term: 'Fulfillment', id: 'fulfillment', cat: 'operaciones', def: {
    es: 'Proceso completo de preparación y envío de un pedido desde el almacén hasta el cliente. En e-commerce, un fulfillment rápido y sin errores es decisivo; los depósitos automáticos con picking goods-to-person reducen drásticamente los tiempos de preparación.',
    en: 'Complete process of preparing and shipping an order from the warehouse to the customer. In e-commerce, fast and error-free fulfillment is decisive; automated warehouses with goods-to-person picking drastically reduce preparation times.',
    zh: 'Fulfillment（履约）：从仓库到客户准备和发送订单的完整过程。在电商中，快速无差错的履约至关重要；配备货到人拣选的自动化仓库大幅减少准备时间。' } },
  { term: 'Centro de distribución automatizado', id: 'centro-distribucion-automatizado', cat: 'operaciones', def: {
    es: 'Centro de distribución (CD) que opera con sistemas automatizados de almacenamiento, transporte y preparación de pedidos. Reemplaza el manejo manual por transelevadores, shuttles, conveyors y software, logrando mayor throughput, densidad y exactitud que un CD tradicional.',
    en: 'Distribution center (DC) operating with automated storage, transport and order preparation systems. It replaces manual handling with stacker cranes, shuttles, conveyors and software, achieving higher throughput, density and accuracy than a traditional DC.',
    zh: '自动化配送中心：以自动化存储、运输和订单准备系统运营的配送中心（CD）。以堆垛机、穿梭车、输送机和软件取代人工操作，实现比传统配送中心更高的吞吐量、密度和准确性。' } },
];

/* Resuelve términos y categorías al idioma de la página. */
export const getGlosario = (lang = 'es') =>
  GLOSARIO.map((t) => ({ term: t.term, id: t.id, cat: t.cat, def: t.def[lang] || t.def.es, articulo: t.articulo }));

export const getGlosarioCats = (lang = 'es') =>
  GLOSARIO_CATS.map((c) => ({ id: c.id, label: c.label[lang] || c.label.es }));

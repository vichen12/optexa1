/* Traducciones EN/ZH de las fichas de producto, por tandas.
   Estructura: PRODUCTOS_I18N["categoria/slug"] = { en: {...}, zh: {...} }
   Solo se incluyen los campos traducibles; los campos comunes (categoria,
   slug, heroImg, urls, specs[].valor, categoriaUrl, relacionados[].url)
   vienen de la ficha ES base en productosData.js.

   Campos traducibles por ficha:
     nombre, metaTitle, metaDesc, heroAlt, tagline, descripcion, porQueDelie,
     categoriaLabel,
     comoFunciona: [{ titulo, texto }],
     specs:        [{ param }]            // valor NO se traduce
     industrias:   [ string ]
     faq:          [{ q, a }]
     relacionados: [{ nombre }]           // url NO se traduce

   El resolvedor combina por índice los arrays traducidos con los de la ficha
   base (para preservar specs[].valor, relacionados[].url, etc.). */

export const PRODUCTOS_I18N = {
  // ═══════════════ TANDA 1 — ASRS (productos estrella) ═══════════════
  'asrs/unit-load': {
    en: {
      categoriaLabel: 'AS/RS Systems',
      nombre: 'Unit-Load Stacker Crane',
      metaTitle: 'Unit Load Stacker Crane for Pallets | Automated Warehouse',
      metaDesc: 'DELIE unit-load stacker crane for pallets: up to 40 m high, 200 pallets/hour per aisle, 24/7 operation. Free assessment for your warehouse.',
      heroAlt: 'Unit-load stacker crane for pallets — DELIE ASRS',
      tagline: 'Automated pallet storage from 7 to 40 m',
      descripcion: 'The unit-load stacker crane is the reference system for high-density automated storage in warehouses, depots and facilities that handle standard pallets. It operates within single- and double-deep racking, reaching heights of up to 40 meters with combined cycles of up to 200 pallets/hour per aisle. The integrated control unit manages travel speeds of 160 m/min and lift speeds of 60 m/min, with absolute-encoder positioning and ±2 mm accuracy. Compatible with EURO, ISO and American pallets, it includes a load-detection system and CANBUS communication with the WCS.',
      porQueDelie: 'DELIE manufactures stacker cranes with more than 1,000 global installations since 2003. The STOKA engineering team sizes the system to the real profile of your operation in Argentina: throughput, SKUs, demand peaks and constraints of your existing warehouse or facility.',
      comoFunciona: [
        { titulo: 'Storage cycle', texto: 'The WCS receives the order from the WMS and assigns the optimal location in the rack. The stacker crane travels to the delivery point, picks up the pallet with the telescopic fork and places it in the indicated cell. The full storage cycle takes between 45 and 90 seconds depending on height and depth.' },
        { titulo: 'Retrieval cycle', texto: 'The dispatch order travels from the WMS to the WCS. The stacker crane navigates to the cell, extracts the pallet and transports it to the extraction point or picking station. Combined cycles (in + out in a single trip) maximize throughput, reducing empty movements by up to 35%.' },
        { titulo: 'Inventory management', texto: 'Every movement is recorded in real time. The WCS synchronizes position and status with the WMS, guaranteeing 100% traceability. The system automatically detects out-of-size or damaged pallets before storing them, preventing operational blockages.' },
      ],
      specs: [
        { param: 'Maximum installation height' }, { param: 'Load capacity per cycle' }, { param: 'Travel speed' }, { param: 'Lift speed' }, { param: 'Throughput per aisle' }, { param: 'Operating temperature' }, { param: 'Positioning accuracy' }, { param: 'Compatible pallet types' },
      ],
      industrias: ['E-commerce & retail', 'Logistics & 3PL', 'Manufacturing', 'Food & beverage'],
      faq: [
        { q: 'How many aisles does my warehouse need to justify a unit-load stacker crane?', a: 'From 2 aisles of 50 meters and a volume of more than 500 movements/day, typical ROI is between 18 and 30 months. With a single high-activity aisle (+300 mov/day) it is also viable. The STOKA team makes the calculation for your warehouse, depot or facility in the first consultation.' },
        { q: 'Can it operate in cold storage or freezer?', a: 'Yes. DELIE unit-load stacker cranes have a cold-storage version (-25 °C to +4 °C) and a freezer version (-30 °C). The galvanized steel design and the electrical components with internal heating guarantee continuous operation without degradation in refrigerated warehouses.' },
        { q: 'Does it integrate with my existing ERP or WMS?', a: 'The DELIE WCS connects to any ERP or WMS via REST API, SOAP, EDI or flat file. Certified integrations with SAP, Oracle, Microsoft Dynamics, Infor and proprietary systems. STOKA handles the complete technical integration as part of the turnkey project.' },
        { q: 'How long does installation take in an existing facility?', a: 'The mechanical and electrical installation of a unit-load aisle takes between 6 and 10 weeks. If the civil works are ready (leveled slab and confirmed free height), the installation + commissioning timeline is 10 to 14 weeks. The full project from purchase order to operational start-up: 5 to 8 months.' },
      ],
      relacionados: [{ nombre: 'MiniLoad Stacker Crane' }, { nombre: 'Pallet Shuttle Robot' }, { nombre: 'WMS — Management Software' }],
    },
    zh: {
      categoriaLabel: 'AS/RS系统',
      nombre: 'Unit-Load堆垛机',
      metaTitle: '托盘Unit Load堆垛机 | 自动化仓库',
      metaDesc: 'DELIE托盘unit-load堆垛机：高达40米，每巷道每小时200托盘，24/7运营。为您的仓库提供免费评估。',
      heroAlt: '托盘unit-load堆垛机 — DELIE ASRS',
      tagline: '7至40米的自动化托盘存储',
      descripcion: 'Unit-load堆垛机是处理标准托盘的仓库、库房和设施进行高密度自动化存储的标杆系统。它在单深和双深货架内运行，高度可达40米，每巷道复合循环最高达每小时200托盘。集成控制单元管理160米/分钟的行驶速度和60米/分钟的提升速度，采用绝对值编码器定位，精度±2毫米。兼容EURO、ISO和美标托盘，配备载荷检测系统和与WCS的CANBUS通信。',
      porQueDelie: 'DELIE自2003年以来制造堆垛机，全球安装超过1000套。STOKA工程团队根据您在阿根廷运营的实际情况确定系统规模：吞吐量、SKU、需求高峰以及现有仓库或设施的限制。',
      comoFunciona: [
        { titulo: '存储循环', texto: 'WCS接收来自WMS的订单并在货架中分配最佳库位。堆垛机行驶到交付点，用伸缩货叉取起托盘并放入指定单元。完整的存储循环根据高度和深度需要45至90秒。' },
        { titulo: '检索循环', texto: '出库订单从WMS传送到WCS。堆垛机导航到单元，取出托盘并运送到取货点或拣选工作站。复合循环（一次行程内入库+出库）通过减少多达35%的空载移动来最大化吞吐量。' },
        { titulo: '库存管理', texto: '每次移动均实时记录。WCS与WMS同步位置和状态，保证100%可追溯性。系统在存储前自动检测超尺寸或损坏的托盘，防止运营阻塞。' },
      ],
      specs: [
        { param: '最大安装高度' }, { param: '每循环载荷能力' }, { param: '行驶速度' }, { param: '提升速度' }, { param: '每巷道吞吐量' }, { param: '运行温度' }, { param: '定位精度' }, { param: '兼容托盘类型' },
      ],
      industrias: ['电商与零售', '物流与3PL', '制造业', '食品与饮料'],
      faq: [
        { q: '我的仓库需要多少条巷道才能证明unit-load堆垛机的合理性？', a: '从2条50米巷道和每天超过500次移动的量起，典型ROI在18至30个月之间。单条高活动巷道（每天+300次移动）也可行。STOKA团队在首次咨询时为您的仓库、库房或设施进行计算。' },
        { q: '它能在冷库或冷冻库运行吗？', a: '可以。DELIE unit-load堆垛机有冷库版本（-25°C至+4°C）和冷冻库版本（-30°C）。镀锌钢设计和带内部加热的电气部件保证在冷藏仓库中连续运行而不降级。' },
        { q: '它能与我现有的ERP或WMS集成吗？', a: 'DELIE的WCS通过REST API、SOAP、EDI或平面文件连接任何ERP或WMS。与SAP、Oracle、Microsoft Dynamics、Infor及专有系统的认证集成。STOKA将完整的技术集成作为交钥匙项目的一部分进行管理。' },
        { q: '在现有设施中安装需要多长时间？', a: '一条unit-load巷道的机械和电气安装需要6至10周。如果土建已就绪（地坪平整且净高确认），安装+调试时间为10至14周。从采购订单到运营启动的完整项目：5至8个月。' },
      ],
      relacionados: [{ nombre: 'MiniLoad堆垛机' }, { nombre: '托盘穿梭机器人' }, { nombre: 'WMS — 管理软件' }],
    },
  },

  'asrs/miniload': {
    en: {
      categoriaLabel: 'AS/RS Systems',
      nombre: 'MiniLoad Stacker Crane',
      metaTitle: 'MiniLoad Stacker Crane for Boxes and Totes | Picking',
      metaDesc: 'DELIE miniload stacker crane for boxes, totes and trays: up to 400 containers/hour per aisle, goods-to-person picking. 99.9% accuracy.',
      heroAlt: 'MiniLoad stacker crane for boxes and totes — DELIE',
      tagline: 'Automatic high-speed picking of boxes and totes',
      descripcion: 'The MiniLoad stacker crane automates the storage and retrieval of boxes, totes and trays in e-commerce, pharma and manufacturing facilities where the number of SKUs is high and picking cycles are intensive. It operates in 600 mm narrow aisles with double-deep racking, reaching travel speeds of 180 m/min and throughput of up to 400 containers/hour per aisle. The double-extension telescopic fork allows double-deep storage without reducing operating speed.',
      porQueDelie: 'DELIE MiniLoad stacker cranes are designed for intensive picking operations where speed and accuracy are critical. With more than 300 MiniLoad installations in pharma and e-commerce, DELIE guarantees uptime over 99% with standard preventive maintenance.',
      comoFunciona: [
        { titulo: 'Container storage', texto: 'The operator places the box or tote at the input station. The MiniLoad captures it, reads the barcode or RFID and deposits it in the cell assigned by the WCS. The process is fully automatic: no human intervention between receiving and storage.' },
        { titulo: 'Goods-to-person picking', texto: 'The WMS generates a picking order. The WCS calculates the optimal route and the MiniLoad retrieves the required containers and delivers them sequentially to the workstation. The operator only handles the product in front of them, eliminating picking travel.' },
        { titulo: 'Multi-SKU management', texto: 'The MiniLoad can manage thousands of different SKUs with no loss of speed. The double-deep system doubles storage density without increasing the footprint. Traceability is complete: each container has its position, movement history and expiry date recorded.' },
      ],
      specs: [
        { param: 'Load type' }, { param: 'Maximum load per container' }, { param: 'Travel speed' }, { param: 'Lift speed' }, { param: 'Throughput per aisle' }, { param: 'Minimum aisle width' }, { param: 'Maximum height' }, { param: 'Storage depth' },
      ],
      industrias: ['E-commerce & retail', 'Pharmaceutical', 'Manufacturing', 'Logistics & 3PL'],
      faq: [
        { q: 'What is the difference between a MiniLoad and a unit-load stacker crane?', a: 'The unit-load moves full pallets (up to 1,500 kg) in high-bay warehouses. The MiniLoad moves small containers (boxes, totes, trays up to 50 kg) in narrower aisles and with higher cycle frequency. The MiniLoad is ideal for piece-picking or case-picking operations with many different SKUs.' },
        { q: 'What tote or box sizes does the system accept?', a: 'The system is configured for the standard container of your operation. The typical range goes from 300×200×150 mm to 600×400×340 mm (standard Eurobox). DELIE can manufacture the fork for any non-standard dimension within the range of up to 600×600 mm base.' },
        { q: 'How many SKUs can the MiniLoad manage simultaneously?', a: 'There is no SKU limit in the system. The WCS manages the location of each container independently. Pharmaceutical installations with more than 50,000 active SKUs operate with DELIE MiniLoad with no performance degradation. Double-deep storage density doubles capacity per square meter vs. conventional racking.' },
        { q: 'Can the system be expanded if my depot or facility grows?', a: 'Yes. The modular architecture of the MiniLoad allows adding aisles without stopping the operation. The WCS scales automatically with no software changes. STOKA plans future expansion from the start so the initial civil works account for the expected growth.' },
      ],
      relacionados: [{ nombre: 'Unit-Load Stacker Crane' }, { nombre: 'Picking Robot' }, { nombre: 'WCS — Control System' }],
    },
    zh: {
      categoriaLabel: 'AS/RS系统',
      nombre: 'MiniLoad堆垛机',
      metaTitle: '箱子和料箱MiniLoad堆垛机 | 拣选',
      metaDesc: 'DELIE箱子、料箱和料盘miniload堆垛机：每巷道每小时高达400个容器，货到人拣选。99.9%准确率。',
      heroAlt: '箱子和料箱MiniLoad堆垛机 — DELIE',
      tagline: '箱子和料箱的自动高速拣选',
      descripcion: 'MiniLoad堆垛机为SKU数量高、拣选循环密集的电商、制药和制造业设施自动化存储和检索箱子、料箱和料盘。它在600毫米窄巷道中配合双深货架运行，行驶速度达180米/分钟，每巷道吞吐量高达每小时400个容器。双伸缩货叉可实现双深存储而不降低运行速度。',
      porQueDelie: 'DELIE MiniLoad堆垛机专为速度和精度至关重要的密集拣选作业设计。在制药和电商领域拥有超过300套MiniLoad安装，DELIE通过标准预防性维护保证99%以上的正常运行时间。',
      comoFunciona: [
        { titulo: '容器存储', texto: '操作员将箱子或料箱放在入口工作站。MiniLoad抓取它，读取条形码或RFID，并将其放入WCS分配的单元。整个过程完全自动：收货与存储之间无需人工干预。' },
        { titulo: '货到人拣选', texto: 'WMS生成拣选订单。WCS计算最佳路径，MiniLoad检索所需容器并依次送到工作站。操作员只处理面前的产品，消除了拣选行走。' },
        { titulo: '多SKU管理', texto: 'MiniLoad可管理数千个不同SKU而不损失速度。双深系统在不增加占地面积的情况下使存储密度翻倍。可追溯性完整：每个容器都记录其位置、移动历史和到期日期。' },
      ],
      specs: [
        { param: '载荷类型' }, { param: '每容器最大载荷' }, { param: '行驶速度' }, { param: '提升速度' }, { param: '每巷道吞吐量' }, { param: '最小巷道宽度' }, { param: '最大高度' }, { param: '存储深度' },
      ],
      industrias: ['电商与零售', '制药', '制造业', '物流与3PL'],
      faq: [
        { q: 'MiniLoad与unit-load堆垛机有什么区别？', a: 'Unit-load在高位仓库中移动整托盘（最高1500公斤）。MiniLoad在更窄的巷道中以更高的循环频率移动小型容器（箱子、料箱、最高50公斤的料盘）。MiniLoad适合具有许多不同SKU的单件拣选或箱拣选作业。' },
        { q: '系统接受什么尺寸的料箱或箱子？', a: '系统根据您运营的标准容器进行配置。典型范围从300×200×150毫米到600×400×340毫米（标准Eurobox）。DELIE可为底面最大600×600毫米范围内的任何非标准尺寸制造货叉。' },
        { q: 'MiniLoad可同时管理多少个SKU？', a: '系统中没有SKU限制。WCS独立管理每个容器的库位。拥有超过50000个活跃SKU的制药安装使用DELIE MiniLoad运行而无性能降级。双深存储密度使每平方米容量比传统货架翻倍。' },
        { q: '如果我的库房或设施增长，系统可以扩展吗？', a: '可以。MiniLoad的模块化架构允许在不停止运营的情况下增加巷道。WCS自动扩展，无需更改软件。STOKA从一开始就规划未来扩展，使初始土建考虑预期增长。' },
      ],
      relacionados: [{ nombre: 'Unit-Load堆垛机' }, { nombre: '拣选机器人' }, { nombre: 'WCS — 控制系统' }],
    },
  },

  'asrs/shuttle': {
    en: {
      categoriaLabel: 'AS/RS Systems',
      nombre: 'Pallet Shuttle — Shuttle Robot',
      metaTitle: 'Pallet Shuttle Systems | STOKA',
      metaDesc: 'DELIE pallet shuttle and multi-level systems for high-rotation warehouses in Argentina. Maximum storage density per channel.',
      heroAlt: 'Pallet shuttle 4-way robot for pallets — DELIE',
      tagline: 'Autonomous high-density pallet shuttle system',
      descripcion: 'The shuttle system combines high-density racking with autonomous shuttle robots that operate inside the rack channels. Unlike the drive-in system, the shuttle does not require the forklift to enter the aisle, eliminating the risk of damage to the racking and maximizing safety. 2-way models operate in a single channel; 4-way models move on both axes of the level, multiplying flexibility. Throughput of up to 300 pallets/hour in multi-aisle configurations with dedicated vertical lifts.',
      porQueDelie: 'The DELIE shuttle system eliminates the racking damage caused by conventional drive-in systems. With 4-way robots, the system adapts to changes in the product mix without physical reconfigurations. The robot fleet is scalable: units are added without stopping the operation.',
      comoFunciona: [
        { titulo: 'Pallet loading', texto: 'The forklift deposits the pallet at the transfer station. The vertical lift takes it to the storage level where the shuttle robot picks it up and navigates to the deepest free position in the channel. The process is automatic from the moment the pallet touches the input station.' },
        { titulo: 'FIFO or LIFO retrieval', texto: 'The WCS determines the rotation mode based on the product: FIFO for food and pharma, LIFO for materials with a long expiry date. The shuttle retrieves the correct pallet regardless of its position in the channel, without moving the others.' },
        { titulo: 'Autonomous operation', texto: 'Shuttle robots operate on a lithium battery with fast charging at a dedicated station. Each robot reports its status, battery and position to the WCS in real time. If a robot fails, the system redistributes the load among available robots without interrupting the operation.' },
      ],
      specs: [
        { param: 'Variants' }, { param: 'Maximum load per pallet' }, { param: 'Travel speed' }, { param: 'Throughput per level' }, { param: 'Channel depth' }, { param: 'Power source' }, { param: 'Operating temperature' }, { param: 'Stock rotation' },
      ],
      industrias: ['Food & beverage', 'Cold chain', 'Manufacturing', 'Logistics & 3PL'],
      faq: [
        { q: 'What is the advantage of the shuttle vs. the traditional drive-in system?', a: 'Drive-in requires the forklift to enter the aisle, which causes frequent damage to the racking and limits operating height for safety reasons. The shuttle eliminates that constraint: the forklift only operates in the outer aisle, while the robot navigates inside the channel. Result: higher density, greater safety and lower maintenance cost in the long term.' },
        { q: 'How many shuttle robots does my warehouse or depot need?', a: 'The number of robots depends on the required throughput and channel depth. As a reference, 1 robot per 2 rack levels is a conservative sizing for medium-density operations. STOKA calculates the optimal quantity based on the flow simulation of your specific facility.' },
        { q: 'Does the shuttle operate in cold storage?', a: 'Yes. DELIE shuttle robots have a temperature-controlled version from -30 °C. The electrical components, batteries and communication systems are specified to operate in cold without degradation. Battery charging is done in a tempered area to extend service life.' },
        { q: 'Can shuttle be mixed with stacker crane in the same warehouse?', a: 'Yes. A common hybrid configuration combines stacker cranes for the highest-movement channels (zone A) with shuttle for the lower-rotation channels (zone B/C). The same WCS manages both systems transparently. STOKA designs the hybrid layout based on the ABC analysis of your SKUs.' },
      ],
      relacionados: [{ nombre: 'Unit-Load Stacker Crane' }, { nombre: 'Cold Storage AS/RS' }, { nombre: 'WCS — Control System' }],
    },
    zh: {
      categoriaLabel: 'AS/RS系统',
      nombre: '托盘穿梭车 — 穿梭机器人',
      metaTitle: '托盘穿梭车系统 | STOKA',
      metaDesc: 'DELIE托盘穿梭车和多层系统，适用于阿根廷高周转仓库。每通道最大存储密度。',
      heroAlt: '托盘四向穿梭机器人 — DELIE',
      tagline: '自主高密度托盘穿梭车系统',
      descripcion: '穿梭车系统将高密度货架与在货架通道内运行的自主穿梭机器人相结合。与驶入式系统不同，穿梭车无需叉车进入巷道，消除了货架损坏风险并最大化安全性。2向型号在单通道运行；4向型号在层的两个轴上移动，成倍提升灵活性。在配备专用垂直提升机的多巷道配置中，吞吐量高达每小时300托盘。',
      porQueDelie: 'DELIE穿梭车系统消除了传统驶入式系统造成的货架损坏。借助4向机器人，系统无需物理重新配置即可适应产品组合的变化。机器人车队可扩展：无需停止运营即可添加单元。',
      comoFunciona: [
        { titulo: '托盘装载', texto: '叉车将托盘放在转移站。垂直提升机将其送到存储层，穿梭机器人取起它并导航到通道中最深的空闲位置。从托盘接触入口站的那一刻起，过程即自动进行。' },
        { titulo: 'FIFO或LIFO检索', texto: 'WCS根据产品确定周转模式：食品和制药采用FIFO，保质期长的材料采用LIFO。穿梭车无论托盘在通道中的位置如何都能检索正确的托盘，无需移动其他托盘。' },
        { titulo: '自主运行', texto: '穿梭机器人采用锂电池，在专用站快速充电。每个机器人实时向WCS报告其状态、电量和位置。如果某个机器人发生故障，系统会在可用机器人之间重新分配负载而不中断运营。' },
      ],
      specs: [
        { param: '型号' }, { param: '每托盘最大载荷' }, { param: '移动速度' }, { param: '每层吞吐量' }, { param: '通道深度' }, { param: '电源' }, { param: '运行温度' }, { param: '库存周转' },
      ],
      industrias: ['食品与饮料', '冷链', '制造业', '物流与3PL'],
      faq: [
        { q: '穿梭车相比传统驶入式系统有什么优势？', a: '驶入式要求叉车进入巷道，这会频繁损坏货架并出于安全原因限制运行高度。穿梭车消除了这一限制：叉车仅在外部巷道运行，而机器人在通道内导航。结果：更高的密度、更高的安全性和长期更低的维护成本。' },
        { q: '我的仓库或库房需要多少台穿梭机器人？', a: '机器人数量取决于所需吞吐量和通道深度。作为参考，每2个货架层1台机器人是中等密度运营的保守配置。STOKA根据您具体设施的流程仿真计算最佳数量。' },
        { q: '穿梭车能在冷库运行吗？', a: '可以。DELIE穿梭机器人有从-30°C起的温控版本。电气部件、电池和通信系统均经过规定可在低温下运行而不降级。电池充电在调温区进行以延长使用寿命。' },
        { q: '同一仓库中可以混用穿梭车和堆垛机吗？', a: '可以。常见的混合配置将堆垛机用于移动量最大的通道（A区）与穿梭车用于周转较低的通道（B/C区）相结合。同一个WCS透明地管理两个系统。STOKA根据您SKU的ABC分析设计混合布局。' },
      ],
      relacionados: [{ nombre: 'Unit-Load堆垛机' }, { nombre: '冷库AS/RS' }, { nombre: 'WCS — 控制系统' }],
    },
  },

  'asrs/camara-frio': {
    en: {
      categoriaLabel: 'AS/RS Systems',
      nombre: 'Cold Storage AS/RS — Automated Cold Warehouse',
      metaTitle: 'ASRS for Cold and Freezer Storage | STOKA',
      metaDesc: 'Automated warehouses for cold and freezer storage down to -30°C. No exposed staff, maximum density. DELIE technology in Argentina.',
      heroAlt: 'Shuttle robot for automated cold warehouse and cold storage — DELIE ASRS',
      tagline: 'Automated cold warehouse: automation from -30 °C for refrigerated chambers',
      descripcion: 'DELIE cold-storage AS/RS systems are specifically designed to operate in temperature-controlled environments between -30 °C and +4 °C with no performance degradation. Automation in cold chambers not only increases storage capacity by 40–60% vs. conventional systems, but also reduces door-opening time and thermal load, lowering the refrigeration system\'s energy consumption by up to 25%. All electrical, mechanical and communication components are certified for continuous cold operation.',
      porQueDelie: 'DELIE has more than 150 installations in refrigerated warehouses in Europe, Asia and America. The cold-specific design is not an adaptation of the standard system: it is a dedicated product line with components certified for temperature-controlled operation. STOKA offers complete sizing including the impact on the existing refrigeration system.',
      comoFunciona: [
        { titulo: 'Design for temperature control', texto: 'Cold stacker cranes and shuttles incorporate heaters in the electrical cabinets, synthetic low-temperature lubricants, special seals on motors and encoders, and low-temperature cables. The control electronics operate in a tempered area outside the chamber.' },
        { titulo: 'Thermal load reduction', texto: 'Automation eliminates the need for operators to remain inside the chamber during long shifts. Access doors only open for pallet movements, and the outer buffer system allows pallets to be prepared at room temperature before entering the refrigerated warehouse.' },
        { titulo: 'Temperature control by zone', texto: 'The WMS records the required storage temperature for each SKU. The system can manage multi-temperature within the same facility: frozen zones (-25 °C), refrigerated (+4 °C) and tempered (+15 °C) with the same control software.' },
      ],
      specs: [
        { param: 'Temperature range' }, { param: 'Available systems' }, { param: 'Thermal load reduction' }, { param: 'Density increase vs. conv.' }, { param: 'Lubrication' }, { param: 'Electronic control' }, { param: 'Certifications' }, { param: 'Guaranteed uptime' },
      ],
      industrias: ['Cold chain', 'Food & beverage', 'Pharmaceutical', 'Logistics & 3PL'],
      faq: [
        { q: 'How much energy does an AS/RS save vs. a conventional cold warehouse?', a: 'The thermal load reduction from shorter door-opening time and fewer people in the chamber generates energy savings of 20 to 30% in the refrigeration system. In a 2,000 m² chamber with two-shift operation, savings can exceed USD 30,000 per year, significantly improving project ROI.' },
        { q: 'Does AS/RS installation in cold storage require special civil works?', a: 'The slab must be level (tolerance ±5 mm over 5 meters) and have adequate load capacity for the stacker crane bases (calculated from the system weight). If the chamber already exists, STOKA evaluates on-site feasibility. The installation is coordinated to minimize the chamber\'s out-of-cold time.' },
        { q: 'How many operators are needed in an automated cold chamber?', a: 'An automated cold chamber with AS/RS runs with 1 operator per shift in the outer buffer zone (room temperature). Without automation, the same chamber requires 3 to 5 operators working in the cold with special clothing. Reduced cold exposure eliminates the risk of occupational illness and the high staff turnover typical of this environment.' },
        { q: 'Does the ASRS system apply to my facility if I already have cold chambers running?', a: 'Yes. DELIE designs the AS/RS to integrate into existing cold chambers. The STOKA team makes a technical visit to measure the chamber, evaluate the slab, the refrigeration system and access constraints, and then presents a proposal adapted to the available space.' },
      ],
      relacionados: [{ nombre: 'Pallet Shuttle Robot' }, { nombre: 'Unit-Load Stacker Crane' }, { nombre: 'WMS — Management Software' }],
    },
    zh: {
      categoriaLabel: 'AS/RS系统',
      nombre: '冷库AS/RS — 自动化冷藏仓库',
      metaTitle: '冷藏和冷冻ASRS | STOKA',
      metaDesc: '低至-30°C的冷藏和冷冻自动化仓库。无人员暴露，最大密度。阿根廷DELIE技术。',
      heroAlt: '自动化冷藏仓库和冷库穿梭机器人 — DELIE ASRS',
      tagline: '自动化冷藏仓库：冷藏室从-30°C起的自动化',
      descripcion: 'DELIE冷库AS/RS系统专门设计用于在-30°C至+4°C的温控环境中运行而无性能降级。冷藏室自动化不仅使存储容量比传统系统增加40–60%，还减少开门时间和热负荷，使制冷系统的能耗降低高达25%。所有电气、机械和通信部件均经过认证可在低温下连续运行。',
      porQueDelie: 'DELIE在欧洲、亚洲和美洲的冷藏仓库拥有超过150套安装。冷库专用设计不是标准系统的改装：而是一条专用产品线，部件经过温控运行认证。STOKA提供完整的规模设计，包括对现有制冷系统的影响。',
      comoFunciona: [
        { titulo: '温控设计', texto: '冷库堆垛机和穿梭车在电气柜中配备加热器、合成低温润滑剂、电机和编码器上的特殊密封，以及低温电缆。控制电子设备在冷藏室外的调温区运行。' },
        { titulo: '降低热负荷', texto: '自动化消除了操作员在长时间班次内待在冷藏室内的需要。出入门仅在托盘移动时打开，外部缓冲系统允许托盘在进入冷藏仓库前在室温下准备。' },
        { titulo: '按区域温度控制', texto: 'WMS记录每个SKU所需的存储温度。系统可在同一设施内管理多温度：冷冻区（-25°C）、冷藏（+4°C）和调温（+15°C），使用同一控制软件。' },
      ],
      specs: [
        { param: '温度范围' }, { param: '可用系统' }, { param: '热负荷降低' }, { param: '密度增加（对比传统）' }, { param: '润滑' }, { param: '电子控制' }, { param: '认证' }, { param: '保证正常运行时间' },
      ],
      industrias: ['冷链', '食品与饮料', '制药', '物流与3PL'],
      faq: [
        { q: 'AS/RS相比传统冷藏仓库节省多少能源？', a: '更短的开门时间和更少人员在冷藏室内带来的热负荷降低，使制冷系统节省20%至30%的能源。在双班运营的2000平方米冷藏室中，每年节省可超过USD 30.000，显著改善项目ROI。' },
        { q: '在冷库安装AS/RS需要特殊土建吗？', a: '地坪必须平整（5米内公差±5毫米）并具备适合堆垛机底座的载荷能力（根据系统重量计算）。如果冷藏室已存在，STOKA进行现场可行性评估。安装经过协调以最大限度减少冷藏室脱离低温的时间。' },
        { q: '自动化冷藏室需要多少操作员？', a: '配备AS/RS的自动化冷藏室每班用1名操作员在外部缓冲区（室温）运行。没有自动化，同一冷藏室需要3至5名操作员穿着特殊服装在低温中工作。减少低温暴露消除了职业病风险以及这种环境典型的高人员流动率。' },
        { q: '如果我已有运行中的冷藏室，ASRS系统适用于我的设施吗？', a: '适用。DELIE设计AS/RS以集成到现有冷藏室。STOKA团队进行技术访问以测量冷藏室、评估地坪、制冷系统和出入限制，然后提出适应可用空间的方案。' },
      ],
      relacionados: [{ nombre: '托盘穿梭机器人' }, { nombre: 'Unit-Load堆垛机' }, { nombre: 'WMS — 管理软件' }],
    },
  },
};

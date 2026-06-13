import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE = resolve('src/i18n/locales');

function deepMerge(target, source) {
  const out = { ...target };
  for (const [k, v] of Object.entries(source)) {
    if (v && typeof v === 'object' && !Array.isArray(v) && target[k] && typeof target[k] === 'object' && !Array.isArray(target[k])) {
      out[k] = deepMerge(target[k], v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

// ─── SPANISH ────────────────────────────────────────────────────────────────
const es_new = {
  pages: {
    catalogoAsrs: {
      metaTitle: "Sistemas ASRS Argentina | AS/RS Automatizados | STOKA",
      metaDesc: "ASRS y AS/RS DELIE en Argentina: transelevadores, pallet shuttle y miniload de 7 a 40 m de altura. 30–50% más económico que proveedores europeos.",
      breadcrumbCat: "AS/RS",
      heroTag: "Sistema ASRS · Representantes DELIE · Argentina",
      heroH1_a: "Sistemas AS/RS",
      heroH1_b: "Estanterías automatizadas",
      heroSub: "Estanterías AS/RS DELIE de 7 a 40 metros de altura. Drive-in, shuttle, mezzanine y rack selectivo automatizado con soporte local en Argentina.",
      heroStat1Label: "Modelos",
      heroStat2Label: "Altura máx.",
      heroStat3Label: "Precisión",
      whatIsTag: "Qué son los sistemas AS/RS",
      whatIsH2: "Sistemas de almacenamiento y recuperación automatizados (AS/RS): ASRS de alta densidad",
      stat1Label: "Altura máxima", stat1Sub: "Uso total del espacio vertical",
      stat2Label: "Precisión de mecanizado", stat2Sub: "Robots sin desgaste ni paradas",
      stat3Label: "Más económico que Europa", stat3Sub: "Precio directo de fábrica DELIE",
      stat4Label: "Meses de ROI", stat4Sub: "Comprobado en operaciones reales",
      guideTag: "Guía de selección — ¿Qué sistema AS/RS necesitás?",
      guide: [
        { type: "Unit Load", sub: "Transelevador de paletas", badge: "Más versátil", cases: ["Paletas con muchos SKUs distintos", "Operaciones FIFO / LIFO mixtas", "Altura libre desde 12 m"], note: "Transelevador de 1 o 2 mástiles" },
        { type: "Shuttle", sub: "Robot lanzadera", badge: "Mayor densidad", cases: ["Alta densidad con producto homogéneo", "Gran volumen por SKU", "Máximo aprovechamiento del m²"], note: "Bidireccional o 4 vías" },
        { type: "MiniLoad", sub: "Cajas y totes", badge: "Máxima velocidad", cases: ["E-commerce y farmacéutica", "Picking goods-to-person", "SKUs pequeños y medianos"], note: "Simple o doble profundidad" }
      ],
      fabTag: "Fabricación DELIE",
      fiscalTag: "Argentina 2026 — Combinación fiscal",
      fiscalItems: [
        { label: "Decreto 513/2025", desc: "Arancel 0% en importación de equipos ASRS" },
        { label: "RIMI", desc: "Amortización acelerada del 100% en el 1er ejercicio" },
        { label: "BICE", desc: "Financiamiento a 10 años con período de gracia" }
      ],
      fiscalRoi: "ROI en {{value}} meses en operaciones de mediana escala.",
      fiscalLink: "Ver todos los beneficios fiscales",
      catalogTag: "Catálogo completo",
      catalogH2: "12 modelos de estanterías AS/RS",
      viewFullCatalog: "Ver catálogo completo",
      sisterTag: "Seguir explorando",
      sisterH2: "Otras categorías del catálogo",
      exploreTag: "Explorar por tipo",
      exploreH2: "Sistemas AS/RS disponibles",
      exploreItems: [
        { nombre: "Transelevador Unit-Load", desc: "Paletas hasta 40 m de altura" },
        { nombre: "Transelevador MiniLoad", desc: "Cajas y totes, picking a alta velocidad" },
        { nombre: "Robot Lanzadera Shuttle", desc: "Alta densidad con robots autónomos" },
        { nombre: "AS/RS Cámara Fría", desc: "Operación desde -30 °C" }
      ],
      viewDetail: "Ver detalle",
      faqTag: "Preguntas frecuentes",
      faqH2: "Lo que pregunta un Director de Operaciones",
      faq: [
        { q: "¿Cuánto espacio vertical aprovecha un sistema AS/RS en mi almacén, bodega o depósito?", a: "Los sistemas AS/RS DELIE aprovechan desde 7 hasta 40 metros de altura libre. En un almacén con 12 metros de altura, podés almacenar hasta 5 veces más que con estanterías convencionales de 4-5 metros. La clave está en diseñar la estructura según la altura disponible y el tipo de carga." },
        { q: "¿Cuál es la diferencia entre estanterías drive-in, shuttle y MiniLoad?", a: "Las estanterías drive-in usan carretillas convencionales: las más económicas, ideales para LIFO de alta densidad. Las shuttle combinan estanterías con robots lanzadera para mayor velocidad y FIFO/LIFO selectivo. Las MiniLoad son para contenedores y totes con transelevadores: máxima velocidad y precisión para e-commerce, farmacéutica y bodega de alta rotación." },
        { q: "¿Cuánto tiempo lleva instalar un sistema AS/RS en un almacén o depósito existente?", a: "La instalación mecánica de estanterías AS/RS toma 4 a 10 semanas según el modelo. La adecuación civil previa (losa plana, iluminación) puede añadir 4-6 semanas si el edificio lo requiere. STOKA coordina toda la ingeniería de detalle, el montaje y la puesta en marcha certificada en Argentina." },
        { q: "¿Las estanterías DELIE aplican al Decreto 513/2025 de arancel 0% en Argentina?", a: "Sí. Las estanterías AS/RS para sistemas automatizados están incluidas en las posiciones arancelarias del Decreto 513/2025. STOKA verifica la posición arancelaria exacta para cada proyecto sin costo adicional, garantizando que aprovechés el beneficio desde el primer día de importación." }
      ],
      footerLinks: [
        { label: "Beneficios fiscales 2026" },
        { label: "Robots de manipulación" },
        { label: "Software WMS/WCS" },
        { label: "Cómo trabajamos" }
      ],
      alsoInterest: "También te puede interesar",
      autostoreH3: "¿Evaluaste AutoStore? Conocé la alternativa DELIE",
      autostoreDesc: "Misma densidad de almacenamiento, 30-50% más económico y con soporte técnico local en Argentina.",
      autostoreLink: "Ver comparativa",
      sisterCats: [
        { label: "Robots de manipulación", desc: "Transelevadores, shuttles y AMR" },
        { label: "Almacenamiento vertical", desc: "VLM y carruseles inteligentes" },
        { label: "Equipo de transporte", desc: "Conveyors, elevadores y paletizadores" },
        { label: "Software inteligente", desc: "WMS, WCS y control de almacén" }
      ]
    },
    catalogoRobots: {
      breadcrumbCat: "Robots de manipulación",
      heroTag: "Transelevadores · Shuttle · AMR · DELIE",
      heroH1_a: "Robots de manipulación",
      heroH1_b: "Transelevadores, shuttles y AMR",
      heroSub: "14 modelos de robots de almacén DELIE: grúas apiladoras, transelevadores MiniLoad, robots lanzadera 4 vías y robots tote. Soporte técnico 24/7 en Argentina.",
      statsTag: "Robots de almacén DELIE",
      statsH2: "Transelevadores, robots shuttle, AMR, paletizadora automática y picking automatizado goods-to-person",
      stat1Label: "Modelos disponibles", stat1Sub: "Gama más completa del mercado",
      stat2Label: "Velocidad máxima", stat2Sub: "Transelevador MiniLoad DELIE",
      stat3Label: "Precisión", stat3Sub: "Control de posición absoluta",
      stat4Label: "Temp. mínima", stat4Sub: "Cadena de frío certificada",
      catalogTag: "Catálogo completo",
      catalogH2: "14 modelos de robots de manipulación",
      viewFullCatalog: "Ver catálogo completo",
      faqTag: "Preguntas frecuentes",
      faqH2: "Lo que pregunta un Director de Operaciones",
      faq: [
        { q: "¿Qué diferencia hay entre un transelevador y un robot lanzadera (shuttle) en un almacén?", a: "El transelevador ocupa un pasillo completo de estantería y mueve paletas o totes con un único equipo. El robot lanzadera circula dentro de las estanterías entre niveles con mayor velocidad y sin pasillo dedicado. Para almacenes, bodegas y depósitos con alta rotación y muchos SKUs, el shuttle generalmente ofrece mayor throughput por metro cuadrado." },
        { q: "¿Los robots DELIE pueden operar en cámaras frigoríficas o bodegas de frío?", a: "Sí. DELIE fabrica versiones para cadena de frío certificadas a -25°C (robots lanzadera) y -30°C (transelevadores). Incluyen sellado hermético anticondensación, lubricación especial y materiales de frío. Operan de forma autónoma sin necesidad de personal dentro del depósito frigorífico." },
        { q: "¿Cuántos robots necesito para el throughput de mi operación?", a: "Depende del throughput requerido (líneas/hora o paletas/hora), la cantidad de SKUs, el layout del depósito y los picos de demanda. En la fase de diagnóstico, STOKA realiza una simulación de flujos que determina la cantidad óptima de robots para cubrir los picos sin sobredimensionar la inversión." },
        { q: "¿Qué mantenimiento preventivo requieren los robots de almacén?", a: "Los robots DELIE tienen mantenimiento preventivo de 2-4 horas por mes por equipo. El WCS monitorea en tiempo real el estado de cada robot y genera alertas tempranas. Los componentes de mayor desgaste son modulares y se reemplazan sin herramientas especializadas. STOKA mantiene stock de repuestos locales en Argentina." }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "Estanterías automatizadas" },
        { label: "Almacenamiento vertical", desc: "VLM y carruseles inteligentes" },
        { label: "Equipo de transporte", desc: "Conveyors, elevadores y paletizadores" },
        { label: "Software inteligente", desc: "WMS, WCS y control de almacén" }
      ]
    },
    catalogoVertical: {
      breadcrumbCat: "Almacenamiento vertical",
      heroTag: "VLM · Carrusel vertical · DELIE",
      heroH1_a: "Almacenamiento vertical",
      heroH1_b: "VLM y carruseles inteligentes",
      heroSub: "Ahorrá hasta el 90% del espacio de suelo. Picking ergonómico \"mercancías a persona\" a la altura del operador, sin desplazamientos. Integración con ERP y MES.",
      statsTag: "VLM vs Carrusel vertical",
      statsH2: "Almacén vertical automático: VLM, carrusel y torre de almacenamiento para optimizar espacio",
      stat1Label: "Ahorro de espacio", stat1Sub: "Menos m² de suelo ocupado",
      stat2Label: "Menos tiempo", stat2Sub: "Reducción en tiempos de búsqueda",
      stat3Label: "Altura máxima", stat3Sub: "Aprovechamiento total del techo",
      stat4Label: "Capacidad total", stat4Sub: "Carrusel vertical configurable",
      catalogTag: "Catálogo completo",
      catalogH2: "2 soluciones de almacenamiento vertical",
      viewFullCatalog: "Ver catálogo completo",
      techTag: "¿Cuál tecnología necesitás?",
      techItems: [
        { name: "VLM — Módulo de elevación vertical", badge: "Acceso aleatorio", desc: "Extractor inteligente que recupera cualquier bandeja de forma independiente. Ideal cuando hay alta variedad de SKUs y el operario necesita distintos productos en cada ciclo.", best: "Farmacéutica · Repuestos · E-commerce con muchos SKUs" },
        { name: "Carrusel vertical inteligente", badge: "Alta rotación", desc: "Sistema que circula transportadores internamente. Más eficiente para SKUs repetitivos de alta rotación donde el acceso secuencial es adecuado.", best: "Manufactura · Automotriz · Distribución de alta rotación" }
      ],
      sharedBenefits: "Beneficios compartidos",
      benefitsList: ["Hasta 90% menos espacio de suelo", "Picking a altura del operador", "Integración WMS / ERP / MES", "Pesaje y escaneado integrados", "70% menos tiempo de búsqueda", "Trazabilidad de cada extracción", "Sin desplazamientos del operario"],
      faqTag: "Preguntas frecuentes",
      faqH2: "Preguntas frecuentes sobre almacenamiento vertical",
      faq: [
        { q: "¿Cuándo conviene un VLM y cuándo un carrusel vertical para mi depósito o bodega?", a: "El VLM conviene cuando tenés alta variedad de SKUs y necesitás acceso aleatorio: cada ciclo podés extraer cualquier bandeja del almacén de forma independiente. El carrusel es más eficiente para SKUs de alta rotación con acceso más secuencial. Para depósitos farmacéuticos, repuestos y e-commerce con muchos SKUs distintos, el VLM es generalmente la mejor opción." },
        { q: "¿Cuánto espacio de suelo ahorro con un VLM en mi almacén o bodega?", a: "Típicamente entre el 70% y el 90% comparado con estanterías convencionales. Un VLM de 10 metros de altura ocupa 5-8 m² de superficie y almacena lo equivalente a 30-50 m² de estanterías convencionales. En edificios con altura libre, la densidad de almacenaje por m² de suelo se multiplica entre 4 y 8 veces." },
        { q: "¿Cómo se integra el VLM con mi ERP o WMS actual?", a: "Mediante APIs estándar RESTful o la interfaz del WMS de DELIE. Si ya tenés un WMS de terceros (SAP EWM, Manhattan, etc.), el VLM puede operar como subsistema esclavo que recibe órdenes de extracción. Si no tenés WMS, el módulo de DELIE gestiona el inventario del depósito de forma autónoma con integración al ERP." },
        { q: "¿Puede operar el VLM o carrusel vertical en temperatura controlada?", a: "El carrusel vertical opera entre -5°C y +40°C, compatible con cámaras de frío positivo. El VLM tiene versiones para entornos entre 2°C y 25°C, ideal para farmacéutica y productos refrigerados. Para frío negativo (bodega de congelados), se recomiendan los transelevadores especializados de la línea AS/RS de DELIE." }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "Estanterías automatizadas" },
        { label: "Robots de manipulación", desc: "Transelevadores, shuttles y AMR" },
        { label: "Equipo de transporte", desc: "Conveyors, elevadores y paletizadores" },
        { label: "Software inteligente", desc: "WMS, WCS y control de almacén" }
      ]
    },
    catalogoTransporte: {
      breadcrumbCat: "Equipo de transporte",
      heroTag: "Conveyors · Elevadores · Paletizadores · DELIE",
      heroH1_a: "Equipo de transporte —",
      heroH1_b: "Conveyors, elevadores y paletizadores",
      heroSub: "10 modelos de equipos de transporte para conectar cada punto de tu almacén automatizado. Desde transportadores de cadena hasta paletizadores automáticos con integración WCS.",
      statsTag: "Equipo de transporte DELIE",
      statsH2: "El tejido conectivo del almacén automatizado — conveyors, elevadores y paletizadores integrados bajo WCS",
      stat1Label: "Modelos disponibles", stat1Sub: "Gama completa de transporte",
      stat2Label: "Carga máx. por palé", stat2Sub: "Cadena y rodillos",
      stat3Label: "Velocidad máxima", stat3Sub: "Elevador de totes",
      stat4Label: "Temp. mínima", stat4Sub: "Versión cadena de frío",
      catalogTag: "Catálogo completo",
      catalogH2: "10 equipos de transporte automatizado",
      viewFullCatalog: "Ver catálogo completo",
      faqTag: "Preguntas frecuentes",
      faqH2: "Lo que pregunta un Director de Operaciones",
      faq: [
        { q: "¿Qué tipo de transportador necesito para paletas de 3.000 kg en mi depósito?", a: "Para cargas de 3.000 kg por palé, el transportador de cadena o el de rodillos de DELIE son los indicados. Ambos están dimensionados para esa carga con variador de frecuencia para arranque suave. La elección entre cadena y rodillos depende de la fragilidad de la paleta y si necesitás acumulación por zonas en el almacén o bodega." },
        { q: "¿Puedo integrar transportadores existentes en mi almacén con el sistema DELIE?", a: "En muchos casos, sí. El WCS de DELIE puede controlar transportadores de otras marcas con interfaz de control estándar (PLC con Profibus, Profinet o similar). STOKA realiza la auditoría de compatibilidad durante el diagnóstico técnico para determinar qué conveyors existentes podés reutilizar y reducir la inversión total." },
        { q: "¿Qué mantenimiento requieren los transportadores en el almacén o bodega?", a: "Los conveyors DELIE tienen mantenimiento preventivo trimestral: lubricación de cadenas o rodillos, verificación de tensores y revisión de sensores. Los componentes de desgaste están normalizados y disponibles en Argentina. El WCS monitorea cada sección del depósito y emite alertas antes de que ocurra una falla." },
        { q: "¿Los transportadores DELIE funcionan a temperatura negativa en bodegas o cámaras frigoríficas?", a: "Sí. Los transportadores de cadena para cadena de frío operan hasta -25°C con lubricantes especiales, materiales anticongelantes y diseño hermético. Se integran con los transelevadores y robots lanzadera de la línea de frío para crear un sistema completamente automatizado en el depósito frigorífico." }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "Estanterías automatizadas" },
        { label: "Robots de manipulación", desc: "Transelevadores, shuttles y AMR" },
        { label: "Almacenamiento vertical", desc: "VLM y carruseles inteligentes" },
        { label: "Software inteligente", desc: "WMS, WCS y control de almacén" }
      ]
    },
    catalogoSoftware: {
      breadcrumbCat: "Software inteligente",
      heroTag: "WMS · WCS · HMS · ECS · DELIE",
      heroH1_a: "Software inteligente —",
      heroH1_b: "WMS, WCS y control de almacén",
      heroSub: "6 módulos de software DELIE certificados CMMI Nivel 5. Control total del almacén automatizado con integración SAP, Oracle y cualquier ERP. Digital Twin 3D incluido.",
      stat1Label: "Módulos de software",
      stat2Label: "Certificación máxima",
      stat3Label: "Integración nativa",
      stat4Label: "Digital Twin incluido",
      catalogTag: "Catálogo completo",
      catalogH2: "6 módulos de software de almacén",
      viewFullCatalog: "Ver catálogo completo",
      seoTag: "Entendiendo el software de almacén",
      seoH2: "Sistema WMS vs WCS: diferencias y complementariedad",
      seoSub: "en la gestión de almacenes y bodegas",
      nivel: "Nivel",
      integraWith: "Integra con",
      benefitsTag: "Ventajas clave del stack DELIE",
      errorTag: "El error más común en proyectos AS/RS",
      errorH3: "Implementar el hardware sin diseñar la capa de software.",
      errorBody: "Un transelevador sin WCS adecuado opera como equipo manual: eficiente en el movimiento físico pero sin la inteligencia para coordinar ciclos combinados, gestionar inventario en tiempo real e integrarse con el ERP. El WMS y el WCS de DELIE se diseñaron como un stack integrado: misma base de datos, misma interfaz, misma fuente de verdad para el inventario del almacén, bodega o depósito.",
      argTag: "Argentina y Chile — WMS heredado",
      comparison: [
        { system: "WMS", full: "Warehouse Management System", role: "Gestiona el QUÉ: inventario, ubicaciones, órdenes, trazabilidad.", integra: "ERP, SAP, TMS, OMS, MES", nivel: "Negocio" },
        { system: "WCS", full: "Warehouse Control System", role: "Gestiona el CÓMO: coordina robots, transelevadores y conveyors en tiempo real.", integra: "WMS, robots, transelevadores, AMR, RGV", nivel: "Operaciones" },
        { system: "HMS", full: "Human Machine System", role: "Interfaz para operarios y supervisores en planta.", integra: "WCS, WMS", nivel: "Usuario final" },
        { system: "ECS", full: "Electronic Control System", role: "Control eléctrico de motores, variadores y sensores.", integra: "WCS, WMS", nivel: "Hardware" }
      ],
      benefits: ["CMMI Nivel 5 certificado", "Integración WMS SAP nativa (BAPI/RFC)", "WMS + WCS mismo stack integrado", "APIs RESTful documentadas", "Digital Twin 3D incluido", "Sin costo extra de integración ERP", "Redundancia activa-pasiva", "Soporte técnico posventa local"],
      faqTag: "Preguntas frecuentes",
      faqH2: "Lo que pregunta un Director de Operaciones",
      faq: [
        { q: "¿Cuánto tiempo lleva implementar el WMS en mi almacén, bodega o depósito?", a: "La implementación base del WMS toma entre 4 y 12 semanas según la complejidad de integración con el ERP. En proyectos con hardware DELIE, el WMS se configura simultáneamente con la instalación mecánica, sin sumar tiempo al cronograma general. STOKA gestiona la implementación de software como parte del proyecto llave en mano." },
        { q: "¿El WMS puede gestionar un almacén o bodega manual (sin robots)?", a: "Sí. El WMS puede implementarse en un depósito manual como primer paso de digitalización, antes de automatizar. Gestiona inventario en tiempo real, picking con listas o pick-to-light, FIFO/FEFO y reportes por turno. Este enfoque permite capacitar al equipo con el sistema antes de añadir hardware automatizado." },
        { q: "¿Cómo es la integración técnica del WMS con SAP o ERP en Argentina?", a: "DELIE tiene conectores nativos para SAP (BAPI/RFC y SAP EWM), Oracle, Microsoft Dynamics y APIs RESTful para cualquier otro sistema. La integración incluye sincronización de maestros de artículos y ubicaciones, órdenes de entrada/salida y confirmaciones en tiempo real. STOKA entrega documentación técnica completa." },
        { q: "¿Qué pasa con los datos del depósito si el servidor del WMS se cae?", a: "El WMS tiene redundancia activa-pasiva: si el servidor principal falla, el servidor de respaldo toma el control en segundos sin pérdida de datos. Los robots y transportadores tienen modo de operación autónoma de corto plazo. Todos los movimientos se registran con timestamp y se sincronizan automáticamente cuando el sistema se recupera." }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "Estanterías automatizadas" },
        { label: "Robots de manipulación", desc: "Transelevadores, shuttles y AMR" },
        { label: "Almacenamiento vertical", desc: "VLM y carruseles inteligentes" },
        { label: "Equipo de transporte", desc: "Conveyors, elevadores y paletizadores" }
      ]
    },
    autoStoreAlternativa: {
      breadcrumbAsrs: "ASRS",
      breadcrumbPage: "Alternativa AutoStore",
      heroChip: "Alternativa económica · Soporte local",
      heroH1_a: "Alternativa a AutoStore",
      heroH1_b: "con soporte local en Argentina",
      heroSub: "Los sistemas ASRS DELIE ofrecen densidad y throughput comparables a AutoStore a un costo 30-50% menor, con ingeniería, instalación y soporte técnico 100% local a través de STOKA.",
      heroCta: "Consultar precio y disponibilidad",
      heroLink: "Ver catálogo ASRS completo",
      stat1Label: "Más económico",
      stat2Label: "Soporte técnico",
      stat3Label: "Proyecto llave en mano",
      stat4Label: "Respuesta de repuestos",
      compH2: "DELIE vs AutoStore",
      compSub: "Comparativa técnica para proyectos en Argentina y Chile",
      compFeature: "Característica",
      whyH2: "Por qué empresas argentinas eligen DELIE sobre AutoStore",
      why: [
        { stat: "24h", label: "Tiempo de respuesta local", title: "Soporte técnico en Argentina", desc: "AutoStore tiene soporte centralizado en Europa — días o semanas de espera. STOKA resuelve con técnicos y repuestos locales en menos de 24 horas." },
        { stat: "40%", label: "Ahorro promedio vs AutoStore", title: "Precio 30-50% menor", desc: "En proyectos de USD 1M, DELIE significa entre USD 300.000 y USD 500.000 de ahorro en la inversión inicial con throughput y capacidad equivalente." },
        { stat: "1.500kg", label: "Carga máxima por posición", title: "Sin límite de tamaño de SKU", desc: "AutoStore soporta hasta 30 kg y tamaños fijos de contenedor. DELIE opera con paletas de hasta 1.500 kg y cualquier tipo de unidad de carga." }
      ],
      productsH2: "Sistemas DELIE que reemplazan a AutoStore",
      viewSystem: "Ver sistema",
      faqH2: "Preguntas frecuentes sobre alternativas a AutoStore en Argentina",
      faq: [
        { q: "¿DELIE es una alternativa a AutoStore en Argentina?", a: "Sí. DELIE fabrica sistemas ASRS cube storage, shuttle y transelevadores que compiten directamente con AutoStore. La principal diferencia es el precio: los sistemas DELIE son entre un 30% y un 50% más económicos que AutoStore para proyectos equivalentes, y tienen soporte técnico local en Argentina a través de STOKA." },
        { q: "¿Qué diferencia técnica hay entre AutoStore y los sistemas DELIE?", a: "AutoStore usa robots de rejilla (grid robots) que operan sobre una grilla modular. DELIE ofrece sistemas shuttle y de transelevadores que en muchas configuraciones logran densidades comparables o superiores, especialmente en depósitos con altura disponible mayor a 8 metros. El sistema DELIE también permite SKUs de mayor tamaño y peso." },
        { q: "¿Cuánto cuesta un sistema alternativo a AutoStore en Argentina?", a: "Un sistema DELIE equivalente a una instalación AutoStore mediana (1.000-3.000 posiciones) en Argentina puede costar entre USD 600.000 y USD 1.500.000 completo (equipos + estanterías + WCS + integración). AutoStore suele costar entre un 30% y 50% más para configuraciones equivalentes, más el costo del soporte técnico importado." },
        { q: "¿STOKA tiene experiencia instalando sistemas en operaciones similares a las de AutoStore?", a: "Sí. STOKA ha instalado sistemas DELIE en operaciones de e-commerce, logística 3PL, farmacéutica y manufactura en Argentina con perfiles de throughput similares a los que suelen automatizarse con AutoStore. Podemos mostrar referencias del sector en la primera reunión técnica." }
      ],
      parcial: "parcial"
    }
  }
};

// ─── ENGLISH ────────────────────────────────────────────────────────────────
const en_new = {
  pages: {
    catalogoAsrs: {
      metaTitle: "ASRS Systems Argentina | Automated AS/RS | STOKA",
      metaDesc: "DELIE ASRS and AS/RS in Argentina: stacker cranes, pallet shuttle and miniload from 7 to 40 m height. 30–50% more affordable than European suppliers.",
      breadcrumbCat: "AS/RS",
      heroTag: "ASRS System · DELIE Representatives · Argentina",
      heroH1_a: "AS/RS Systems",
      heroH1_b: "Automated racking",
      heroSub: "DELIE AS/RS racking from 7 to 40 meters tall. Drive-in, shuttle, mezzanine and automated selective rack with local support in Argentina.",
      heroStat1Label: "Models",
      heroStat2Label: "Max height",
      heroStat3Label: "Precision",
      whatIsTag: "What are AS/RS systems",
      whatIsH2: "Automated Storage and Retrieval Systems (AS/RS): high-density ASRS",
      stat1Label: "Maximum height", stat1Sub: "Full use of vertical space",
      stat2Label: "Machining precision", stat2Sub: "Robots without wear or downtime",
      stat3Label: "More affordable than Europe", stat3Sub: "DELIE direct factory price",
      stat4Label: "Months ROI", stat4Sub: "Proven in real operations",
      guideTag: "Selection guide — Which AS/RS system do you need?",
      guide: [
        { type: "Unit Load", sub: "Pallet stacker crane", badge: "Most versatile", cases: ["Pallets with many different SKUs", "Mixed FIFO / LIFO operations", "Clear height from 12 m"], note: "1 or 2 mast stacker crane" },
        { type: "Shuttle", sub: "Shuttle robot", badge: "Higher density", cases: ["High density with homogeneous product", "High volume per SKU", "Maximum use of floor m²"], note: "Bidirectional or 4-way" },
        { type: "MiniLoad", sub: "Boxes and totes", badge: "Maximum speed", cases: ["E-commerce and pharma", "Goods-to-person picking", "Small and medium SKUs"], note: "Single or double depth" }
      ],
      fabTag: "DELIE Manufacturing",
      fiscalTag: "Argentina 2026 — Tax incentives",
      fiscalItems: [
        { label: "Decree 513/2025", desc: "0% import duty on ASRS equipment" },
        { label: "RIMI", desc: "100% accelerated depreciation in first fiscal year" },
        { label: "BICE", desc: "10-year financing with grace period" }
      ],
      fiscalRoi: "ROI in {{value}} months in mid-scale operations.",
      fiscalLink: "View all tax benefits",
      catalogTag: "Full catalog",
      catalogH2: "12 AS/RS racking models",
      viewFullCatalog: "View full catalog",
      sisterTag: "Keep exploring",
      sisterH2: "Other catalog categories",
      exploreTag: "Explore by type",
      exploreH2: "Available AS/RS systems",
      exploreItems: [
        { nombre: "Unit-Load Stacker Crane", desc: "Pallets up to 40 m height" },
        { nombre: "MiniLoad Stacker Crane", desc: "Boxes and totes, high-speed picking" },
        { nombre: "Shuttle Robot", desc: "High density with autonomous robots" },
        { nombre: "Cold Storage AS/RS", desc: "Operation from -30 °C" }
      ],
      viewDetail: "View detail",
      faqTag: "FAQ",
      faqH2: "What an Operations Director asks",
      faq: [
        { q: "How much vertical space does an AS/RS system use in my warehouse?", a: "DELIE AS/RS systems utilize from 7 to 40 meters of free height. In a warehouse with 12 meters, you can store up to 5 times more than with conventional 4-5 meter racking. The key is designing the structure according to available height and load type." },
        { q: "What is the difference between drive-in, shuttle, and MiniLoad racking?", a: "Drive-in racking uses conventional forklifts: the most economical, ideal for high-density LIFO. Shuttle racking combines shelving with shuttle robots for higher speed and selective FIFO/LIFO. MiniLoad is for containers and totes with stacker cranes: maximum speed and precision for e-commerce, pharma and high-turnover warehouses." },
        { q: "How long does it take to install an AS/RS system in an existing warehouse?", a: "Mechanical installation of AS/RS racking takes 4 to 10 weeks depending on the model. Prior civil adaptation (flat slab, lighting) can add 4-6 weeks if the building requires it. STOKA coordinates all detailed engineering, assembly and certified commissioning in Argentina." },
        { q: "Does DELIE racking qualify for Argentina's Decree 513/2025 0% import duty?", a: "Yes. AS/RS racking for automated systems is included in the tariff positions of Decree 513/2025. STOKA verifies the exact tariff position for each project at no extra cost, ensuring you benefit from the first day of import." }
      ],
      footerLinks: [
        { label: "Tax benefits 2026" },
        { label: "Handling robots" },
        { label: "WMS/WCS software" },
        { label: "How we work" }
      ],
      alsoInterest: "You may also be interested in",
      autostoreH3: "Evaluated AutoStore? Discover the DELIE alternative",
      autostoreDesc: "Same storage density, 30-50% more affordable and with local technical support in Argentina.",
      autostoreLink: "View comparison",
      sisterCats: [
        { label: "Handling robots", desc: "Stacker cranes, shuttles and AMR" },
        { label: "Vertical storage", desc: "VLM and intelligent carousels" },
        { label: "Transport equipment", desc: "Conveyors, lifters and palletizers" },
        { label: "Smart software", desc: "WMS, WCS and warehouse control" }
      ]
    },
    catalogoRobots: {
      breadcrumbCat: "Handling robots",
      heroTag: "Stacker cranes · Shuttle · AMR · DELIE",
      heroH1_a: "Handling robots",
      heroH1_b: "Stacker cranes, shuttles and AMR",
      heroSub: "14 DELIE warehouse robot models: stacker cranes, MiniLoad stacker cranes, 4-way shuttle robots and tote robots. 24/7 technical support in Argentina.",
      statsTag: "DELIE warehouse robots",
      statsH2: "Stacker cranes, shuttle robots, AMR, automatic palletizer and goods-to-person automated picking",
      stat1Label: "Available models", stat1Sub: "Most complete range in the market",
      stat2Label: "Maximum speed", stat2Sub: "DELIE MiniLoad stacker crane",
      stat3Label: "Precision", stat3Sub: "Absolute position control",
      stat4Label: "Minimum temp.", stat4Sub: "Certified cold chain",
      catalogTag: "Full catalog",
      catalogH2: "14 handling robot models",
      viewFullCatalog: "View full catalog",
      faqTag: "FAQ",
      faqH2: "What an Operations Director asks",
      faq: [
        { q: "What is the difference between a stacker crane and a shuttle robot in a warehouse?", a: "The stacker crane occupies a full racking aisle and moves pallets or totes with a single machine. The shuttle robot travels inside the racking between levels at higher speed and without a dedicated aisle. For warehouses with high turnover and many SKUs, the shuttle generally offers higher throughput per square meter." },
        { q: "Can DELIE robots operate in cold storage or refrigerated warehouses?", a: "Yes. DELIE manufactures cold chain versions certified to -25°C (shuttle robots) and -30°C (stacker cranes). They include airtight anti-condensation sealing, special lubrication and cold materials. They operate autonomously without staff inside the cold room." },
        { q: "How many robots do I need for my operation's throughput?", a: "It depends on the required throughput (lines/hour or pallets/hour), SKU count, warehouse layout and demand peaks. During the diagnostic phase, STOKA performs a flow simulation that determines the optimal number of robots to cover peaks without over-sizing the investment." },
        { q: "What preventive maintenance do warehouse robots require?", a: "DELIE robots require 2-4 hours of preventive maintenance per month per unit. The WCS monitors each robot's status in real time and generates early alerts. High-wear components are modular and replaced without specialized tools. STOKA maintains local spare parts stock in Argentina." }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "Automated racking" },
        { label: "Vertical storage", desc: "VLM and intelligent carousels" },
        { label: "Transport equipment", desc: "Conveyors, lifters and palletizers" },
        { label: "Smart software", desc: "WMS, WCS and warehouse control" }
      ]
    },
    catalogoVertical: {
      breadcrumbCat: "Vertical storage",
      heroTag: "VLM · Vertical carousel · DELIE",
      heroH1_a: "Vertical storage",
      heroH1_b: "VLM and intelligent carousels",
      heroSub: "Save up to 90% of floor space. Ergonomic \"goods-to-person\" picking at operator height, no walking. Integration with ERP and MES.",
      statsTag: "VLM vs Vertical carousel",
      statsH2: "Automated vertical warehouse: VLM, carousel and storage tower to optimize space",
      stat1Label: "Space savings", stat1Sub: "Less floor m² used",
      stat2Label: "Less time", stat2Sub: "Reduction in search time",
      stat3Label: "Maximum height", stat3Sub: "Full ceiling utilization",
      stat4Label: "Total capacity", stat4Sub: "Configurable vertical carousel",
      catalogTag: "Full catalog",
      catalogH2: "2 vertical storage solutions",
      viewFullCatalog: "View full catalog",
      techTag: "Which technology do you need?",
      techItems: [
        { name: "VLM — Vertical Lift Module", badge: "Random access", desc: "Smart extractor that retrieves any tray independently. Ideal when there is high SKU variety and the operator needs different products each cycle.", best: "Pharma · Spare parts · E-commerce with many SKUs" },
        { name: "Intelligent vertical carousel", badge: "High rotation", desc: "System that circulates trays internally. More efficient for repetitive high-turnover SKUs where sequential access is adequate.", best: "Manufacturing · Automotive · High-rotation distribution" }
      ],
      sharedBenefits: "Shared benefits",
      benefitsList: ["Up to 90% less floor space", "Picking at operator height", "WMS / ERP / MES integration", "Integrated weighing and scanning", "70% less search time", "Full extraction traceability", "No operator walking"],
      faqTag: "FAQ",
      faqH2: "Frequently asked questions about vertical storage",
      faq: [
        { q: "When is a VLM better and when is a vertical carousel better for my warehouse?", a: "The VLM is best when you have high SKU variety and need random access: each cycle you can retrieve any tray independently. The carousel is more efficient for high-turnover SKUs with sequential access. For pharma, spare parts and e-commerce with many different SKUs, the VLM is generally the best option." },
        { q: "How much floor space do I save with a VLM in my warehouse?", a: "Typically between 70% and 90% compared to conventional shelving. A 10-meter VLM occupies 5-8 m² of floor area and stores the equivalent of 30-50 m² of conventional shelving. In buildings with free height, storage density per floor m² multiplies between 4 and 8 times." },
        { q: "How does the VLM integrate with my existing ERP or WMS?", a: "Via standard RESTful APIs or DELIE's WMS interface. If you already have a third-party WMS (SAP EWM, Manhattan, etc.), the VLM can operate as a slave subsystem that receives extraction orders. If you don't have a WMS, DELIE's module manages warehouse inventory autonomously with ERP integration." },
        { q: "Can the VLM or vertical carousel operate in temperature-controlled environments?", a: "The vertical carousel operates between -5°C and +40°C, compatible with positive cold rooms. The VLM has versions for environments between 2°C and 25°C, ideal for pharma and refrigerated products. For negative cold (frozen storage), DELIE's specialized AS/RS stacker cranes are recommended." }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "Automated racking" },
        { label: "Handling robots", desc: "Stacker cranes, shuttles and AMR" },
        { label: "Transport equipment", desc: "Conveyors, lifters and palletizers" },
        { label: "Smart software", desc: "WMS, WCS and warehouse control" }
      ]
    },
    catalogoTransporte: {
      breadcrumbCat: "Transport equipment",
      heroTag: "Conveyors · Lifters · Palletizers · DELIE",
      heroH1_a: "Transport equipment —",
      heroH1_b: "Conveyors, lifters and palletizers",
      heroSub: "10 transport equipment models to connect every point of your automated warehouse. From chain conveyors to automatic palletizers with WCS integration.",
      statsTag: "DELIE transport equipment",
      statsH2: "The connective tissue of the automated warehouse — conveyors, lifters and palletizers integrated under WCS",
      stat1Label: "Available models", stat1Sub: "Complete transport range",
      stat2Label: "Max load per pallet", stat2Sub: "Chain and rollers",
      stat3Label: "Maximum speed", stat3Sub: "Tote lifter",
      stat4Label: "Minimum temp.", stat4Sub: "Cold chain version",
      catalogTag: "Full catalog",
      catalogH2: "10 automated transport machines",
      viewFullCatalog: "View full catalog",
      faqTag: "FAQ",
      faqH2: "What an Operations Director asks",
      faq: [
        { q: "What type of conveyor do I need for 3,000 kg pallets in my warehouse?", a: "For 3,000 kg pallet loads, DELIE's chain or roller conveyor is the right choice. Both are sized for that load with a frequency inverter for smooth start. The choice between chain and rollers depends on pallet fragility and whether you need zone accumulation in the warehouse." },
        { q: "Can I integrate existing conveyors in my warehouse with the DELIE system?", a: "In many cases, yes. DELIE's WCS can control conveyors from other brands with standard control interfaces (PLC with Profibus, Profinet or similar). STOKA performs a compatibility audit during the technical diagnosis to determine which existing conveyors can be reused to reduce total investment." },
        { q: "What maintenance do DELIE conveyors require?", a: "DELIE conveyors have quarterly preventive maintenance: chain or roller lubrication, tensioner verification and sensor check. Wear components are standardized and available in Argentina. The WCS monitors each warehouse section and issues alerts before a failure occurs." },
        { q: "Do DELIE conveyors work at negative temperatures in cold rooms?", a: "Yes. Cold chain conveyors operate down to -25°C with special lubricants, anti-freeze materials and hermetic design. They integrate with DELIE's cold line stacker cranes and shuttle robots to create a fully automated cold storage system." }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "Automated racking" },
        { label: "Handling robots", desc: "Stacker cranes, shuttles and AMR" },
        { label: "Vertical storage", desc: "VLM and intelligent carousels" },
        { label: "Smart software", desc: "WMS, WCS and warehouse control" }
      ]
    },
    catalogoSoftware: {
      breadcrumbCat: "Smart software",
      heroTag: "WMS · WCS · HMS · ECS · DELIE",
      heroH1_a: "Smart software —",
      heroH1_b: "WMS, WCS and warehouse control",
      heroSub: "6 DELIE software modules CMMI Level 5 certified. Full control of the automated warehouse with SAP, Oracle and any ERP integration. 3D Digital Twin included.",
      stat1Label: "Software modules",
      stat2Label: "Top certification",
      stat3Label: "Native integration",
      stat4Label: "Digital Twin included",
      catalogTag: "Full catalog",
      catalogH2: "6 warehouse software modules",
      viewFullCatalog: "View full catalog",
      seoTag: "Understanding warehouse software",
      seoH2: "WMS vs WCS: differences and complementarity",
      seoSub: "in warehouse management",
      nivel: "Level",
      integraWith: "Integrates with",
      benefitsTag: "Key advantages of the DELIE stack",
      errorTag: "The most common mistake in AS/RS projects",
      errorH3: "Implementing hardware without designing the software layer.",
      errorBody: "A stacker crane without adequate WCS operates as a manual machine: efficient in physical movement but without the intelligence to coordinate combined cycles, manage real-time inventory and integrate with the ERP. DELIE's WMS and WCS were designed as an integrated stack: same database, same interface, same source of truth for warehouse inventory.",
      argTag: "Argentina & Chile — Legacy WMS",
      comparison: [
        { system: "WMS", full: "Warehouse Management System", role: "Manages WHAT: inventory, locations, orders, traceability.", integra: "ERP, SAP, TMS, OMS, MES", nivel: "Business" },
        { system: "WCS", full: "Warehouse Control System", role: "Manages HOW: coordinates robots, stacker cranes and conveyors in real time.", integra: "WMS, robots, stacker cranes, AMR, RGV", nivel: "Operations" },
        { system: "HMS", full: "Human Machine System", role: "Interface for operators and supervisors on the floor.", integra: "WCS, WMS", nivel: "End user" },
        { system: "ECS", full: "Electronic Control System", role: "Electrical control of motors, drives and sensors.", integra: "WCS, WMS", nivel: "Hardware" }
      ],
      benefits: ["CMMI Level 5 certified", "Native SAP WMS integration (BAPI/RFC)", "WMS + WCS same integrated stack", "Documented RESTful APIs", "3D Digital Twin included", "No extra ERP integration cost", "Active-passive redundancy", "Local after-sales technical support"],
      faqTag: "FAQ",
      faqH2: "What an Operations Director asks",
      faq: [
        { q: "How long does it take to implement the WMS in my warehouse?", a: "Base WMS implementation takes between 4 and 12 weeks depending on ERP integration complexity. In projects with DELIE hardware, the WMS is configured simultaneously with mechanical installation, not adding time to the overall schedule. STOKA manages software implementation as part of the turnkey project." },
        { q: "Can the WMS manage a manual warehouse (without robots)?", a: "Yes. The WMS can be deployed in a manual warehouse as a first digitization step, before automating. It manages real-time inventory, list-based or pick-to-light picking, FIFO/FEFO and shift reports. This approach lets the team learn the system before adding automated hardware." },
        { q: "How does the technical WMS integration with SAP or ERP work?", a: "DELIE has native connectors for SAP (BAPI/RFC and SAP EWM), Oracle, Microsoft Dynamics and RESTful APIs for any other system. Integration includes item and location master synchronization, inbound/outbound orders and real-time confirmations. STOKA delivers complete technical documentation." },
        { q: "What happens to warehouse data if the WMS server goes down?", a: "The WMS has active-passive redundancy: if the primary server fails, the backup takes control in seconds with no data loss. Robots and conveyors have a short-term autonomous operation mode. All movements are recorded with timestamps and automatically synced when the system recovers." }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "Automated racking" },
        { label: "Handling robots", desc: "Stacker cranes, shuttles and AMR" },
        { label: "Vertical storage", desc: "VLM and intelligent carousels" },
        { label: "Transport equipment", desc: "Conveyors, lifters and palletizers" }
      ]
    },
    autoStoreAlternativa: {
      breadcrumbAsrs: "ASRS",
      breadcrumbPage: "AutoStore Alternative",
      heroChip: "Cost-effective alternative · Local support",
      heroH1_a: "AutoStore Alternative",
      heroH1_b: "with local support in Argentina",
      heroSub: "DELIE ASRS systems offer comparable density and throughput to AutoStore at 30-50% lower cost, with 100% local engineering, installation and technical support through STOKA.",
      heroCta: "Get price & availability",
      heroLink: "View full ASRS catalog",
      stat1Label: "More affordable",
      stat2Label: "Technical support",
      stat3Label: "Turnkey project",
      stat4Label: "Spare parts response",
      compH2: "DELIE vs AutoStore",
      compSub: "Technical comparison for projects in Argentina and Chile",
      compFeature: "Feature",
      whyH2: "Why Argentine companies choose DELIE over AutoStore",
      why: [
        { stat: "24h", label: "Local response time", title: "Technical support in Argentina", desc: "AutoStore has centralized support in Europe — days or weeks wait. STOKA resolves issues with local technicians and spare parts in less than 24 hours." },
        { stat: "40%", label: "Average savings vs AutoStore", title: "30-50% lower price", desc: "On USD 1M projects, DELIE means USD 300,000–500,000 savings on initial investment with equivalent throughput and capacity." },
        { stat: "1,500kg", label: "Max load per position", title: "No SKU size limit", desc: "AutoStore supports up to 30 kg and fixed container sizes. DELIE operates with pallets up to 1,500 kg and any load unit type." }
      ],
      productsH2: "DELIE systems that replace AutoStore",
      viewSystem: "View system",
      faqH2: "Frequently asked questions about AutoStore alternatives in Argentina",
      faq: [
        { q: "Is DELIE an alternative to AutoStore in Argentina?", a: "Yes. DELIE manufactures ASRS cube storage, shuttle and stacker crane systems that compete directly with AutoStore. The main difference is price: DELIE systems are 30-50% more affordable than AutoStore for equivalent projects, with local technical support in Argentina through STOKA." },
        { q: "What is the technical difference between AutoStore and DELIE systems?", a: "AutoStore uses grid robots operating on a modular grid. DELIE offers shuttle and stacker crane systems that in many configurations achieve comparable or superior densities, especially in warehouses with more than 8 meters of available height. DELIE also handles larger and heavier SKUs." },
        { q: "How much does an AutoStore alternative system cost in Argentina?", a: "A DELIE system equivalent to a medium AutoStore installation (1,000–3,000 positions) in Argentina can cost between USD 600,000 and USD 1,500,000 complete (equipment + racking + WCS + integration). AutoStore typically costs 30-50% more for equivalent configurations, plus the cost of imported technical support." },
        { q: "Does STOKA have experience installing systems in operations similar to AutoStore?", a: "Yes. STOKA has installed DELIE systems in e-commerce, 3PL logistics, pharma and manufacturing operations in Argentina with throughput profiles similar to those typically automated with AutoStore. We can show sector references at the first technical meeting." }
      ],
      parcial: "partial"
    }
  }
};

// ─── CHINESE ────────────────────────────────────────────────────────────────
const zh_new = {
  pages: {
    catalogoAsrs: {
      metaTitle: "阿根廷ASRS系统 | 自动化AS/RS | STOKA",
      metaDesc: "阿根廷DELIE ASRS与AS/RS：货架式堆垛机、托盘穿梭机和miniload，高度7至40米，比欧洲供应商便宜30-50%。",
      breadcrumbCat: "AS/RS",
      heroTag: "ASRS系统 · DELIE代理商 · 阿根廷",
      heroH1_a: "AS/RS系统",
      heroH1_b: "自动化货架",
      heroSub: "DELIE AS/RS货架，高度7至40米。驶入式、穿梭式、夹层和自动选择性货架，在阿根廷提供本地支持。",
      heroStat1Label: "型号",
      heroStat2Label: "最大高度",
      heroStat3Label: "精度",
      whatIsTag: "什么是AS/RS系统",
      whatIsH2: "自动化存取系统（AS/RS）：高密度ASRS",
      stat1Label: "最大高度", stat1Sub: "充分利用垂直空间",
      stat2Label: "加工精度", stat2Sub: "机器人无磨损无停机",
      stat3Label: "比欧洲更经济", stat3Sub: "DELIE工厂直供价格",
      stat4Label: "ROI月数", stat4Sub: "实际运营验证",
      guideTag: "选型指南 — 您需要哪种AS/RS系统？",
      guide: [
        { type: "Unit Load", sub: "托盘堆垛机", badge: "最通用", cases: ["多SKU托盘", "FIFO/LIFO混合操作", "净高12米以上"], note: "单桅或双桅堆垛机" },
        { type: "Shuttle", sub: "穿梭机器人", badge: "更高密度", cases: ["同质产品高密度存储", "每SKU大容量", "最大化每平方米利用率"], note: "双向或四向" },
        { type: "MiniLoad", sub: "箱子和托盘", badge: "最高速度", cases: ["电商和制药", "货到人拣选", "小中型SKU"], note: "单深或双深" }
      ],
      fabTag: "DELIE制造",
      fiscalTag: "阿根廷2026 — 税收组合",
      fiscalItems: [
        { label: "第513/2025号法令", desc: "ASRS设备进口关税0%" },
        { label: "RIMI", desc: "第一财年100%加速折旧" },
        { label: "BICE", desc: "10年融资含宽限期" }
      ],
      fiscalRoi: "中等规模运营ROI {{value}}个月回收。",
      fiscalLink: "查看所有税收优惠",
      catalogTag: "完整目录",
      catalogH2: "12款AS/RS货架型号",
      viewFullCatalog: "查看完整目录",
      sisterTag: "继续探索",
      sisterH2: "其他目录类别",
      exploreTag: "按类型探索",
      exploreH2: "可用AS/RS系统",
      exploreItems: [
        { nombre: "Unit-Load堆垛机", desc: "托盘高度达40米" },
        { nombre: "MiniLoad堆垛机", desc: "箱子和托盘，高速拣选" },
        { nombre: "穿梭机器人", desc: "自主机器人高密度存储" },
        { nombre: "冷库AS/RS", desc: "运行温度低至-30°C" }
      ],
      viewDetail: "查看详情",
      faqTag: "常见问题",
      faqH2: "运营总监常问的问题",
      faq: [
        { q: "AS/RS系统在我的仓库中能利用多少垂直空间？", a: "DELIE AS/RS系统可利用7至40米的净高。在12米高的仓库中，存储量是传统4-5米货架的5倍。关键在于根据可用高度和货物类型设计结构。" },
        { q: "驶入式、穿梭式和MiniLoad货架有什么区别？", a: "驶入式货架使用普通叉车：成本最低，适合高密度LIFO。穿梭货架结合穿梭机器人，速度更快，支持选择性FIFO/LIFO。MiniLoad适用于带堆垛机的容器和托盘：最高速度和精度，适合电商、制药和高周转仓库。" },
        { q: "在现有仓库中安装AS/RS系统需要多长时间？", a: "AS/RS货架的机械安装需要4至10周，具体取决于型号。如果建筑需要，前期土建改造（平整地面、照明）可能增加4-6周。STOKA在阿根廷协调所有详细工程、安装和认证调试。" },
        { q: "DELIE货架是否适用于阿根廷第513/2025号法令的0%进口关税？", a: "是的。自动化系统用AS/RS货架包含在第513/2025号法令的税则号中。STOKA免费核查每个项目的确切税则号，确保从进口第一天起享受优惠。" }
      ],
      footerLinks: [
        { label: "2026年税收优惠" },
        { label: "搬运机器人" },
        { label: "WMS/WCS软件" },
        { label: "我们的工作方式" }
      ],
      alsoInterest: "您可能也感兴趣",
      autostoreH3: "评估过AutoStore？了解DELIE替代方案",
      autostoreDesc: "相同存储密度，经济30-50%，在阿根廷提供本地技术支持。",
      autostoreLink: "查看比较",
      sisterCats: [
        { label: "搬运机器人", desc: "堆垛机、穿梭机和AMR" },
        { label: "垂直存储", desc: "VLM和智能转盘" },
        { label: "输送设备", desc: "输送机、提升机和码垛机" },
        { label: "智能软件", desc: "WMS、WCS和仓库控制" }
      ]
    },
    catalogoRobots: {
      breadcrumbCat: "搬运机器人",
      heroTag: "堆垛机 · 穿梭机 · AMR · DELIE",
      heroH1_a: "搬运机器人",
      heroH1_b: "堆垛机、穿梭机和AMR",
      heroSub: "14款DELIE仓库机器人：堆垛机、MiniLoad堆垛机、四向穿梭机和托盘机器人。阿根廷24/7技术支持。",
      statsTag: "DELIE仓库机器人",
      statsH2: "堆垛机、穿梭机器人、AMR、自动码垛机和货到人自动拣选",
      stat1Label: "可用型号", stat1Sub: "市场最全产品线",
      stat2Label: "最高速度", stat2Sub: "DELIE MiniLoad堆垛机",
      stat3Label: "精度", stat3Sub: "绝对位置控制",
      stat4Label: "最低温度", stat4Sub: "认证冷链",
      catalogTag: "完整目录",
      catalogH2: "14款搬运机器人型号",
      viewFullCatalog: "查看完整目录",
      faqTag: "常见问题",
      faqH2: "运营总监常问的问题",
      faq: [
        { q: "仓库中堆垛机和穿梭机器人有什么区别？", a: "堆垛机占用整个货架通道，用单台设备移动托盘或托盘箱。穿梭机器人在货架内不同层级间以更高速度运行，无需专用通道。对于高周转、多SKU的仓库，穿梭机通常每平方米吞吐量更高。" },
        { q: "DELIE机器人能在冷库中运行吗？", a: "可以。DELIE制造经认证的冷链版本，穿梭机器人可在-25°C运行，堆垛机可在-30°C运行。具有气密防冷凝密封、特殊润滑和冷库材料。可在无人员进入冷库的情况下自主运行。" },
        { q: "我的操作吞吐量需要多少台机器人？", a: "取决于所需吞吐量（行/小时或托盘/小时）、SKU数量、仓库布局和需求峰值。在诊断阶段，STOKA进行流量模拟，确定覆盖峰值而不过度投资的最优机器人数量。" },
        { q: "仓库机器人需要什么预防性维护？", a: "DELIE机器人每台每月需要2-4小时预防性维护。WCS实时监控每台机器人状态并发出早期预警。高磨损部件是模块化的，无需专业工具即可更换。STOKA在阿根廷维持本地备件库存。" }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "自动化货架" },
        { label: "垂直存储", desc: "VLM和智能转盘" },
        { label: "输送设备", desc: "输送机、提升机和码垛机" },
        { label: "智能软件", desc: "WMS、WCS和仓库控制" }
      ]
    },
    catalogoVertical: {
      breadcrumbCat: "垂直存储",
      heroTag: "VLM · 垂直转盘 · DELIE",
      heroH1_a: "垂直存储",
      heroH1_b: "VLM和智能垂直转盘",
      heroSub: "节省高达90%的地面空间。符合人体工程学的\"货到人\"拣选，在操作员高度，无需走动。与ERP和MES集成。",
      statsTag: "VLM vs 垂直转盘",
      statsH2: "自动垂直仓库：VLM、转盘和存储塔，优化空间",
      stat1Label: "空间节省", stat1Sub: "减少地面占用面积",
      stat2Label: "节省时间", stat2Sub: "减少搜索时间",
      stat3Label: "最大高度", stat3Sub: "充分利用天花板高度",
      stat4Label: "总容量", stat4Sub: "可配置垂直转盘",
      catalogTag: "完整目录",
      catalogH2: "2种垂直存储解决方案",
      viewFullCatalog: "查看完整目录",
      techTag: "您需要哪种技术？",
      techItems: [
        { name: "VLM — 垂直提升模块", badge: "随机存取", desc: "智能提取器独立取出任意托盘。适合SKU种类繁多、操作员每个周期需要不同产品的场景。", best: "制药 · 备件 · 多SKU电商" },
        { name: "智能垂直转盘", badge: "高周转", desc: "内部循环托架系统。对顺序存取即可满足的高周转重复SKU更高效。", best: "制造业 · 汽车 · 高周转配送" }
      ],
      sharedBenefits: "共同优势",
      benefitsList: ["高达90%节省地面空间", "在操作员高度拣选", "WMS/ERP/MES集成", "集成称重和扫描", "节省70%搜索时间", "每次提取全程可追溯", "操作员无需走动"],
      faqTag: "常见问题",
      faqH2: "垂直存储常见问题",
      faq: [
        { q: "何时选VLM，何时选垂直转盘？", a: "当SKU种类多且需要随机存取时选VLM：每个周期可独立取出任意托盘。转盘对顺序存取的高周转SKU更高效。对于制药、备件和多SKU电商仓库，VLM通常是最佳选择。" },
        { q: "VLM能为我节省多少地面空间？", a: "与传统货架相比，通常节省70%至90%。10米高的VLM占用5-8平方米地面，存储量相当于30-50平方米传统货架。在有净高的建筑中，每平方米地面的存储密度可提高4至8倍。" },
        { q: "VLM如何与现有ERP或WMS集成？", a: "通过标准RESTful API或DELIE的WMS接口。如果已有第三方WMS（SAP EWM、Manhattan等），VLM可作为接收提取订单的从属子系统运行。如果没有WMS，DELIE模块可自主管理仓库库存并与ERP集成。" },
        { q: "VLM或垂直转盘可以在温控环境中运行吗？", a: "垂直转盘在-5°C至+40°C之间运行，兼容正温冷库。VLM有适用于2°C至25°C环境的版本，适合制药和冷藏产品。对于负温冷冻储存，建议使用DELIE AS/RS专用堆垛机。" }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "自动化货架" },
        { label: "搬运机器人", desc: "堆垛机、穿梭机和AMR" },
        { label: "输送设备", desc: "输送机、提升机和码垛机" },
        { label: "智能软件", desc: "WMS、WCS和仓库控制" }
      ]
    },
    catalogoTransporte: {
      breadcrumbCat: "输送设备",
      heroTag: "输送机 · 提升机 · 码垛机 · DELIE",
      heroH1_a: "输送设备 —",
      heroH1_b: "输送机、提升机和码垛机",
      heroSub: "10款输送设备型号，连接自动化仓库的每个节点。从链式输送机到具有WCS集成的自动码垛机。",
      statsTag: "DELIE输送设备",
      statsH2: "自动化仓库的连接组织 — WCS集成的输送机、提升机和码垛机",
      stat1Label: "可用型号", stat1Sub: "完整输送产品线",
      stat2Label: "每托盘最大载荷", stat2Sub: "链式和滚轮",
      stat3Label: "最高速度", stat3Sub: "托盘提升机",
      stat4Label: "最低温度", stat4Sub: "冷链版本",
      catalogTag: "完整目录",
      catalogH2: "10款自动化输送设备",
      viewFullCatalog: "查看完整目录",
      faqTag: "常见问题",
      faqH2: "运营总监常问的问题",
      faq: [
        { q: "3000公斤托盘需要什么类型的输送机？", a: "对于每托盘3000公斤的载荷，DELIE的链式或滚轮输送机是正确选择。两者均配有变频器实现平稳启动。链式和滚轮的选择取决于托盘易碎性以及是否需要仓库分区积累。" },
        { q: "我可以将仓库现有输送机与DELIE系统集成吗？", a: "许多情况下可以。DELIE的WCS可控制其他品牌的标准控制接口输送机（Profibus、Profinet等PLC）。STOKA在技术诊断期间进行兼容性审核，确定哪些现有输送机可重复使用以降低总投资。" },
        { q: "DELIE输送机需要什么维护？", a: "DELIE输送机每季度进行预防性维护：链条或滚轮润滑、张紧轮检查和传感器检查。磨损部件已标准化，在阿根廷可供应。WCS监控仓库每个区段并在故障发生前发出预警。" },
        { q: "DELIE输送机能在冷库负温环境中工作吗？", a: "是的。冷链链式输送机在-25°C下运行，使用特殊润滑剂、防冻材料和密封设计。与DELIE冷链系列堆垛机和穿梭机器人集成，创建完全自动化的冷藏系统。" }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "自动化货架" },
        { label: "搬运机器人", desc: "堆垛机、穿梭机和AMR" },
        { label: "垂直存储", desc: "VLM和智能转盘" },
        { label: "智能软件", desc: "WMS、WCS和仓库控制" }
      ]
    },
    catalogoSoftware: {
      breadcrumbCat: "智能软件",
      heroTag: "WMS · WCS · HMS · ECS · DELIE",
      heroH1_a: "智能软件 —",
      heroH1_b: "WMS、WCS和仓库控制",
      heroSub: "6个DELIE软件模块，CMMI 5级认证。与SAP、Oracle和任何ERP集成，全面控制自动化仓库。内置3D数字孪生。",
      stat1Label: "软件模块",
      stat2Label: "最高认证",
      stat3Label: "原生集成",
      stat4Label: "含数字孪生",
      catalogTag: "完整目录",
      catalogH2: "6个仓库软件模块",
      viewFullCatalog: "查看完整目录",
      seoTag: "了解仓库软件",
      seoH2: "WMS vs WCS：区别与互补性",
      seoSub: "在仓库管理中",
      nivel: "层级",
      integraWith: "集成对象",
      benefitsTag: "DELIE技术栈的核心优势",
      errorTag: "AS/RS项目中最常见的错误",
      errorH3: "实施硬件而不设计软件层。",
      errorBody: "没有适当WCS的堆垛机如同手动设备运行：物理移动高效但缺乏协调组合周期、实时管理库存和ERP集成的智能。DELIE的WMS和WCS被设计为集成技术栈：同一数据库、同一界面、仓库库存的唯一真实来源。",
      argTag: "阿根廷和智利 — 遗留WMS",
      comparison: [
        { system: "WMS", full: "仓库管理系统", role: "管理什么：库存、位置、订单、可追溯性。", integra: "ERP, SAP, TMS, OMS, MES", nivel: "业务层" },
        { system: "WCS", full: "仓库控制系统", role: "管理如何：实时协调机器人、堆垛机和输送机。", integra: "WMS、机器人、堆垛机、AMR、RGV", nivel: "运营层" },
        { system: "HMS", full: "人机系统", role: "现场操作员和主管的界面。", integra: "WCS, WMS", nivel: "最终用户层" },
        { system: "ECS", full: "电子控制系统", role: "电机、变频器和传感器的电气控制。", integra: "WCS, WMS", nivel: "硬件层" }
      ],
      benefits: ["CMMI 5级认证", "原生SAP WMS集成（BAPI/RFC）", "WMS+WCS同一集成技术栈", "已记录的RESTful API", "内置3D数字孪生", "无额外ERP集成费用", "主备冗余", "本地售后技术支持"],
      faqTag: "常见问题",
      faqH2: "运营总监常问的问题",
      faq: [
        { q: "在我的仓库中实施WMS需要多长时间？", a: "基础WMS实施需要4至12周，具体取决于ERP集成复杂度。在DELIE硬件项目中，WMS与机械安装同步配置，不增加总体进度时间。STOKA作为交钥匙项目的一部分管理软件实施。" },
        { q: "WMS可以管理手动仓库（无机器人）吗？", a: "是的。WMS可作为数字化第一步部署在手动仓库，在自动化之前。管理实时库存、基于列表或pick-to-light拣选、FIFO/FEFO和班次报告。这种方式让团队在添加自动化硬件前先熟悉系统。" },
        { q: "WMS与SAP或ERP的技术集成如何工作？", a: "DELIE有适用于SAP（BAPI/RFC和SAP EWM）、Oracle、Microsoft Dynamics的原生连接器以及适用于任何其他系统的RESTful API。集成包括物料和位置主数据同步、入库/出库订单和实时确认。STOKA提供完整的技术文档。" },
        { q: "如果WMS服务器宕机，仓库数据会怎样？", a: "WMS具有主备冗余：如果主服务器故障，备用服务器在数秒内无数据丢失地接管控制。机器人和输送机有短期自主运行模式。所有移动记录都有时间戳，系统恢复后自动同步。" }
      ],
      sisterCats: [
        { label: "AS/RS", desc: "自动化货架" },
        { label: "搬运机器人", desc: "堆垛机、穿梭机和AMR" },
        { label: "垂直存储", desc: "VLM和智能转盘" },
        { label: "输送设备", desc: "输送机、提升机和码垛机" }
      ]
    },
    autoStoreAlternativa: {
      breadcrumbAsrs: "ASRS",
      breadcrumbPage: "AutoStore替代方案",
      heroChip: "经济替代方案 · 本地支持",
      heroH1_a: "AutoStore替代方案",
      heroH1_b: "在阿根廷提供本地支持",
      heroSub: "DELIE ASRS系统提供与AutoStore相当的密度和吞吐量，成本低30-50%，通过STOKA提供100%本地工程、安装和技术支持。",
      heroCta: "获取价格和供货信息",
      heroLink: "查看完整ASRS目录",
      stat1Label: "更经济",
      stat2Label: "技术支持",
      stat3Label: "交钥匙项目",
      stat4Label: "备件响应",
      compH2: "DELIE vs AutoStore",
      compSub: "阿根廷和智利项目技术比较",
      compFeature: "特性",
      whyH2: "阿根廷企业为何选择DELIE而非AutoStore",
      why: [
        { stat: "24h", label: "本地响应时间", title: "阿根廷技术支持", desc: "AutoStore在欧洲集中支持 — 需等待数天或数周。STOKA通过本地技术人员和备件在24小时内解决问题。" },
        { stat: "40%", label: "相比AutoStore平均节省", title: "价格低30-50%", desc: "在100万美元项目中，DELIE意味着以同等吞吐量和容量节省30万至50万美元初始投资。" },
        { stat: "1500kg", label: "每位置最大载荷", title: "无SKU尺寸限制", desc: "AutoStore最多支持30公斤和固定容器尺寸。DELIE可操作高达1500公斤的托盘和任何类型的装载单元。" }
      ],
      productsH2: "替代AutoStore的DELIE系统",
      viewSystem: "查看系统",
      faqH2: "关于阿根廷AutoStore替代方案的常见问题",
      faq: [
        { q: "DELIE是阿根廷AutoStore的替代方案吗？", a: "是的。DELIE制造ASRS立方存储、穿梭和堆垛机系统，与AutoStore直接竞争。主要区别在于价格：DELIE系统对于同等项目比AutoStore便宜30-50%，并通过STOKA在阿根廷提供本地技术支持。" },
        { q: "AutoStore和DELIE系统在技术上有什么区别？", a: "AutoStore使用在模块化网格上运行的网格机器人。DELIE提供穿梭和堆垛机系统，在许多配置中实现相当甚至更高的密度，特别是在可用高度超过8米的仓库中。DELIE还支持更大更重的SKU。" },
        { q: "在阿根廷AutoStore替代系统的成本是多少？", a: "相当于中型AutoStore安装（1000-3000个位置）的DELIE系统在阿根廷可能花费60万至150万美元（设备+货架+WCS+集成）。对于同等配置，AutoStore通常贵30-50%，加上进口技术支持费用。" },
        { q: "STOKA有在类似AutoStore的运营中安装系统的经验吗？", a: "是的。STOKA已在阿根廷的电商、3PL物流、制药和制造运营中安装了DELIE系统，这些运营的吞吐量与通常使用AutoStore自动化的运营类似。我们可以在第一次技术会议上展示行业参考案例。" }
      ],
      parcial: "部分"
    }
  }
};

for (const [lang, newData] of [['es', es_new], ['en', en_new], ['zh', zh_new]]) {
  const path = resolve(BASE, `${lang}.json`);
  const existing = JSON.parse(readFileSync(path, 'utf8'));
  const merged = deepMerge(existing, newData);
  writeFileSync(path, JSON.stringify(merged, null, 2), 'utf8');
  console.log(`✓ ${lang}.json patched`);
}

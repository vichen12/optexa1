// OBSOLETO - no re-ejecutar: revierte los cambios de "aliado estratégico". Ver informe-maestro-reposicionamiento-stoka.md
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

// ─────────────────────────────────────────────────────────────────────────────
// ESPAÑOL
// ─────────────────────────────────────────────────────────────────────────────
const es_new = {
  pages: {
    soluciones: {
      metaTitle: "Soluciones de Automatización Logística | STOKA",
      metaDesc: "Descubrí todas las soluciones de automatización de almacenes de STOKA: ASRS, robots, software WMS y más. Implementación con soporte técnico local en Argentina y Chile.",
      breadcrumbHome: "Inicio",
      breadcrumb: "Soluciones",
      heroTag: "SOLUCIONES INTEGRALES",
      heroH1_a: "AUTOMATIZACIÓN",
      heroH1_b: "A MEDIDA",
      heroSub: "Desde el diagnóstico hasta la puesta en marcha: diseñamos, integramos y soportamos sistemas que transforman la logística de tu operación.",
      heroBtnPrimary: "Consultar mi caso",
      heroBtnSecondary: "Ver catálogo",
      problemasTag: "DIAGNÓSTICO",
      problemasH2: "¿QUÉ PROBLEMA RESOLVEMOS?",
      problemas: [
        { num: "01", problema: "Espacio insuficiente", descripcion: "El crecimiento del stock supera la capacidad del depósito y ampliar no es viable.", solucion: "Sistemas ASRS de alta densidad que multiplican la capacidad sin ampliar superficie.", link: "/catalogo/asrs", linkLabel: "Ver sistemas ASRS" },
        { num: "02", problema: "Errores de picking", descripcion: "Los errores en preparación de pedidos generan devoluciones, pérdidas y clientes insatisfechos.", solucion: "Robots y software WMS con control en tiempo real y trazabilidad total de cada movimiento.", link: "/catalogo/software/wms", linkLabel: "Ver WMS" },
        { num: "03", problema: "Costos laborales en alza", descripcion: "El personal para operaciones manuales representa el mayor costo variable del depósito.", solucion: "Automatización de movimientos repetitivos que libera a tu equipo para tareas de mayor valor.", link: "/como-trabajamos", linkLabel: "Ver metodología" },
        { num: "04", problema: "Trazabilidad nula", descripcion: "Sin visibilidad en tiempo real, la gestión de inventario depende de procesos manuales lentos.", solucion: "Integración WMS + ERP con visibilidad total desde recepción hasta expedición.", link: "/catalogo/software", linkLabel: "Ver software" }
      ],
      metodologiaTag: "METODOLOGÍA",
      metodologiaH2: "CÓMO LO IMPLEMENTAMOS",
      stepLabel: "Paso",
      metodologia: [
        { paso: "01", titulo: "Diagnóstico", desc: "Relevamiento de tu operación actual: flujos, volúmenes, SKUs, picos de demanda y restricciones del edificio." },
        { paso: "02", titulo: "Diseño", desc: "Ingeniería de solución a medida: layout, selección de tecnologías, simulación de flujos y ROI proyectado." },
        { paso: "03", titulo: "Implementación", desc: "Instalación, integración con tus sistemas existentes y puesta en marcha con capacitación del equipo operativo." },
        { paso: "04", titulo: "Soporte", desc: "Mantenimiento preventivo y correctivo, actualizaciones de software y soporte 24/7 en Argentina y Chile." }
      ],
      ctaTag: "EMPEZÁ HOY",
      ctaBannerTitle: "¿LISTO PARA AUTOMATIZAR?",
      ctaBannerSub: "Nuestro equipo de ingenieros evalúa tu operación y te presenta una solución a medida sin costo.",
      ctaBannerBtn: "Agendar diagnóstico gratuito",
      casosTag: "CASOS DE USO",
      casosH2: "SOLUCIONES POR INDUSTRIA",
      casosSub: "Implementaciones reales en distintos sectores con resultados medibles.",
      casosViewSolution: "Ver solución →",
      casosViewAll: "Ver todos los casos de éxito →",
      casosUso: [
        { operacion: "Farmacéutica y laboratorios", desc: "Control de temperatura, lotes y vencimientos con trazabilidad total.", soluciones: ["Miniload ASRS", "WMS Farma"], industria: "Farmacia" },
        { operacion: "Alimentos y bebidas", desc: "Cámaras frigoríficas automatizadas, FIFO y gestión de perecederos.", soluciones: ["Pallet Shuttle", "Cold Storage"], industria: "Alimentos" },
        { operacion: "Industria química", desc: "Almacenamiento seguro de materiales peligrosos con segregación automática.", soluciones: ["ASRS Unit-Load", "Racks"], industria: "Química" },
        { operacion: "E-commerce y retail", desc: "Picking masivo de alto volumen con exactitud superior al 99,9%.", soluciones: ["Tote Shuttle", "Pick-to-light"], industria: "Retail" },
        { operacion: "Automotriz y manufactura", desc: "Gestión de componentes just-in-time para líneas de producción.", soluciones: ["AGV", "Miniload"], industria: "Automotriz" },
        { operacion: "Textil y calzado", desc: "Almacenamiento de SKUs con alta variabilidad de tamaños y rotación.", soluciones: ["Almacenamiento Vertical", "WMS"], industria: "Textil" }
      ],
      whyTag: "POR QUÉ STOKA",
      whyH2: "VENTAJAS DIFERENCIALES",
      whyItems: [
        { label: "Representación oficial DELIE", desc: "Acceso directo al fabricante: sin intermediarios, con garantía de fábrica y piezas originales." },
        { label: "Ingeniería local", desc: "Equipo de ingenieros en Argentina y Chile para diseño, implementación y soporte post-venta." },
        { label: "Financiamiento en pesos", desc: "Estructuramos cada proyecto con las herramientas financieras disponibles en el mercado local." },
        { label: "Integración total", desc: "Conectamos el sistema con tu ERP/WMS existente sin interrumpir las operaciones." }
      ],
      linkHowWeWork: "/como-trabajamos",
      linkCases: "/casos-de-exito",
      linkCatalog: "/catalogo",
      linkFiscal: "/beneficios-fiscales",
      faqTag: "PREGUNTAS FRECUENTES",
      faqH2: "RESOLVEMOS TUS DUDAS",
      faq: [
        { q: "¿Cuánto tiempo demora implementar un sistema ASRS?", a: "Depende de la escala. Un sistema mediano (5.000–20.000 posiciones) generalmente lleva entre 6 y 12 meses desde la firma del contrato hasta la puesta en marcha. Proyectos más grandes pueden requerir 18–24 meses." },
        { q: "¿Necesito cambiar mi ERP para implementar un sistema automatizado?", a: "No. Nuestros sistemas se integran con los principales ERP del mercado (SAP, Oracle, Microsoft Dynamics, etc.) a través de APIs estándar. La integración es parte del alcance del proyecto." },
        { q: "¿Qué pasa si se corta la luz o hay una falla técnica?", a: "Los sistemas DELIE tienen protocolos de operación de emergencia, UPS y generadores opcionales. El WMS preserva el estado de inventario y los equipos retoman automáticamente desde donde estaban." },
        { q: "¿Pueden financiar el proyecto en Argentina?", a: "Sí. Trabajamos con herramientas de financiamiento local: leasing, créditos bancarios y en algunos casos accedemos a líneas de fomento a la inversión productiva." }
      ]
    },

    casosDeExito: {
      metaTitle: "Casos de Éxito | Automatización Logística | STOKA",
      metaDesc: "Conocé implementaciones reales de sistemas ASRS DELIE en industrias farmacéutica, química, textil y más. Resultados medibles en eficiencia y ROI.",
      breadcrumbHome: "Inicio",
      breadcrumb: "Casos de Éxito",
      heroTag: "RESULTADOS REALES",
      heroH1_a: "CASOS DE",
      heroH1_b: "ÉXITO",
      heroSub: "Implementaciones reales de sistemas DELIE en distintos países e industrias, con métricas verificadas y resultados concretos.",
      stats: [
        { num: "9+", label: "Casos documentados" },
        { num: "5", label: "Países" },
        { num: "7", label: "Industrias" },
        { num: "99%", label: "Exactitud promedio" }
      ],
      portfolioTag: "PORTFOLIO",
      portfolioH2: "IMPLEMENTACIONES DESTACADAS",
      portfolioNote: "Los datos de clientes son referenciales. Algunos detalles pueden variar por acuerdos de confidencialidad.",
      trustTag: "CONFIANZA",
      trustH2: "POR QUÉ CONFIAR EN ESTOS RESULTADOS",
      trustItems: [
        { title: "Datos verificados", desc: "Todas las métricas son reportadas por el propio cliente o validadas por nuestro equipo de ingeniería post-implementación." },
        { title: "Tecnología probada globalmente", desc: "DELIE opera en más de 30 países con más de 2.000 proyectos instalados, lo que garantiza robustez y predictibilidad." },
        { title: "Soporte continuo", desc: "El acompañamiento post-venta nos permite documentar y medir el impacto real de cada implementación a lo largo del tiempo." }
      ],
      ctaTag: "SIGUIENTE PASO",
      ctaH2_a: "¿QUERÉS SER EL",
      ctaH2_b: "PRÓXIMO CASO?",
      ctaSub: "Evaluamos tu operación y te presentamos una solución con proyección de ROI sin costo ni compromiso.",
      ctaBtnPrimary: "Consultá ahora",
      ctaBtnSecondary: "Ver catálogo",
      showRelevance: "Ver relevancia para LATAM",
      hideRelevance: "Ocultar relevancia",
      relevanceLabel: "RELEVANCIA PARA ARGENTINA / LATAM",
      casos: [
        {
          id: "alfombras-tailandia",
          industria: "Textil / Alfombras",
          ubicacion: "Tailandia",
          titulo: "Almacén automatizado para fabricante de alfombras de alto volumen",
          empresa: "Fabricante líder textil · Asia Pacífico",
          sistema: "AS/RS Unit-Load + Transelevador DELIE",
          resumen: "Un fabricante de alfombras de gran escala necesitaba triplicar su capacidad de almacenamiento sin expandir superficie. Se implementó un sistema ASRS con 4 transelevadores de doble mástil y WMS integrado al ERP existente.",
          metricas: [{ val: "×3", sub: "Capacidad" }, { val: "99.7%", sub: "Exactitud" }, { val: "-60%", sub: "M² utilizados" }],
          tecnologias: ["Transelevador DELIE", "WMS integrado", "Pallets standard"],
          relevancia: "La industria textil argentina, especialmente en Córdoba y Buenos Aires, enfrenta los mismos desafíos de densidad. Este caso demuestra viabilidad para bodegas de 2.000–8.000 m²."
        },
        {
          id: "licores-china",
          industria: "Bebidas / Licores",
          ubicacion: "China",
          titulo: "Centro de distribución automatizado para bodega de licores premium",
          empresa: "Productor de licores premium · China",
          sistema: "Pallet Shuttle + Miniload DELIE",
          resumen: "Integración de sistema ASRS combinado (Pallet Shuttle para stock masivo y Miniload para picking de cajas) en un centro de distribución de 15.000 m². Reducción del 75% en tiempos de despacho.",
          metricas: [{ val: "-75%", sub: "Tiempo despacho" }, { val: "15K", sub: "Posiciones" }, { val: "24/7", sub: "Operación" }],
          tecnologias: ["Pallet Shuttle DELIE", "Miniload", "Conveyor", "WMS"],
          relevancia: "El sector vitivinícola y de bebidas en Mendoza, San Juan y Cuyo puede replicar este modelo para distribución de alta estacionalidad."
        },
        {
          id: "farmaceutica-tcm",
          industria: "Farmacéutica / Medicina Tradicional",
          ubicacion: "China",
          titulo: "Almacén automatizado para laboratorio de medicina tradicional",
          empresa: "Laboratorio farmacéutico certificado · China",
          sistema: "Miniload AS/RS + WMS Farma DELIE",
          resumen: "Implementación de Miniload con control de lotes y vencimientos bajo normativa GMP. Trazabilidad total desde ingreso de materia prima hasta despacho de producto terminado.",
          metricas: [{ val: "100%", sub: "Trazabilidad" }, { val: "-40%", sub: "Errores" }, { val: "GMP", sub: "Compliance" }],
          tecnologias: ["Miniload ASRS", "WMS GMP", "Trazabilidad lotes", "Control de temperatura"],
          relevancia: "Los laboratorios farmacéuticos argentinos (ANMAT) necesitan trazabilidad equivalente. El sistema es adaptable a normativa local sin rediseño mayor."
        },
        {
          id: "farmaceutica-temperatura",
          industria: "Farmacéutica / Cadena de frío",
          ubicacion: "Europa",
          titulo: "Depósito de cadena de frío para distribución farmacéutica",
          empresa: "Distribuidor farmacéutico multinacional · Europa",
          sistema: "ASRS Cold Storage DELIE",
          resumen: "Sistema ASRS específico para almacenamiento a 2–8°C con control de temperatura en tiempo real por posición. Reducción del 45% en consumo energético respecto al almacenamiento manual equivalente.",
          metricas: [{ val: "2–8°C", sub: "Control exacto" }, { val: "-45%", sub: "Energía" }, { val: "99.9%", sub: "Disponibilidad" }],
          tecnologias: ["Cold Storage ASRS", "Monitoreo IoT", "WMS Farma"],
          relevancia: "La cadena de frío farmacéutica en Argentina es crítica. Este caso aplica directamente a distribuidoras y laboratorios en CABA, GBA y Córdoba."
        },
        {
          id: "quimica-sulfato",
          industria: "Química Industrial",
          ubicacion: "China",
          titulo: "Gestión automatizada de materias primas químicas a granel",
          empresa: "Productor de sulfatos industriales · China",
          sistema: "AS/RS Unit-Load Heavy Duty DELIE",
          resumen: "Almacenamiento automatizado de materias primas en formato big-bag y pallets para producción continua. El sistema gestiona FIFO automático y reabastecimiento de línea sin intervención manual.",
          metricas: [{ val: "-50%", sub: "Tiempo ciclo" }, { val: "FIFO", sub: "Automático" }, { val: "+35%", sub: "Throughput" }],
          tecnologias: ["Unit-Load ASRS", "Big-bag handling", "WMS integrado"],
          relevancia: "La industria petroquímica y química en Bahía Blanca y Rosario puede implementar este modelo para gestión de materias primas y despacho a producción."
        },
        {
          id: "quimica-peligrosos",
          industria: "Química / Materiales Peligrosos",
          ubicacion: "Europa",
          titulo: "Almacén automatizado para productos peligrosos bajo ATEX",
          empresa: "Fabricante de especialidades químicas · Europa",
          sistema: "ASRS ATEX DELIE + Sistema de segregación",
          resumen: "Sistema ASRS certificado ATEX para almacenamiento de productos inflamables y tóxicos. Incluye segregación automática por clase de peligrosidad y gestión de incompatibilidades.",
          metricas: [{ val: "ATEX", sub: "Certificado" }, { val: "0", sub: "Incidentes" }, { val: "-70%", sub: "Riesgo operario" }],
          tecnologias: ["ASRS ATEX", "Segregación automática", "WMS HAZMAT"],
          relevancia: "La normativa argentina para materiales peligrosos (IRAM, APN) exige controles similares. Industria química, pinturas y agroquímicos en GBA y Córdoba."
        },
        {
          id: "titanio",
          industria: "Metalurgia / Materiales especiales",
          ubicacion: "Asia",
          titulo: "Almacén automatizado para gestión de titanio y aleaciones",
          empresa: "Proveedor de materiales aeroespaciales · Asia",
          sistema: "Almacenamiento vertical + ASRS DELIE",
          resumen: "Gestión de perfiles, tubos y chapas de titanio y aleaciones especiales con rastreabilidad por certificado de material. Control de condiciones ambientales y trazabilidad total de cada pieza.",
          metricas: [{ val: "100%", sub: "Trazabilidad" }, { val: "-55%", sub: "Tiempo búsqueda" }, { val: "∞", sub: "Seguridad" }],
          tecnologias: ["Almacenamiento Vertical", "Código QR/RFID", "WMS materiales"],
          relevancia: "Para la industria metalúrgica argentina (Tenaris, etc.) y proveedores aeroespaciales: trazabilidad de materiales con certificado de calidad."
        },
        {
          id: "lubricantes",
          industria: "Lubricantes / Petroquímica",
          ubicacion: "Asia",
          titulo: "Centro de distribución automatizado para lubricantes industriales",
          empresa: "Distribuidor de lubricantes industrial · Asia",
          sistema: "Pallet Shuttle + Conveyor DELIE",
          resumen: "Distribución de alta velocidad de lubricantes en envases de múltiples formatos (bidones, tambores, IBC). El sistema gestiona 1.200 movimientos/hora con exactitud de 99.8%.",
          metricas: [{ val: "1.200", sub: "Mov/hora" }, { val: "99.8%", sub: "Exactitud" }, { val: "-40%", sub: "Personal" }],
          tecnologias: ["Pallet Shuttle", "Conveyor system", "WMS multi-formato"],
          relevancia: "Distribuidores de lubricantes y petroquímicos en Argentina con operaciones de mediana y alta escala."
        },
        {
          id: "manufactura-gran-escala",
          industria: "Manufactura / Producción masiva",
          ubicacion: "China",
          titulo: "Almacén central para manufactura de gran escala just-in-time",
          empresa: "Fabricante multinacional de componentes · China",
          sistema: "AS/RS completo + AGV + WMS DELIE",
          resumen: "Centro logístico integrado que abastece 12 líneas de producción just-in-time. El WMS coordina AGVs, ASRS y conveyors para garantizar componentes en línea con latencia inferior a 15 minutos.",
          metricas: [{ val: "<15min", sub: "Latencia JIT" }, { val: "12", sub: "Líneas JIT" }, { val: "-65%", sub: "WIP" }],
          tecnologias: ["ASRS Unit-Load", "AGV fleet", "Conveyor integrado", "WMS JIT"],
          relevancia: "Parques industriales de Buenos Aires, Córdoba y Rosario con producción en serie pueden implementar este modelo para reducir WIP y mejorar OEE."
        }
      ]
    },

    chile: {
      metaTitle: "Automatización de Bodegas en Chile | Sistemas ASRS DELIE | STOKA",
      metaDesc: "Sistemas de automatización logística DELIE para bodegas en Chile. ASRS, robots de manipulación y software WMS con soporte técnico local. Solicite diagnóstico gratuito.",
      breadcrumbHome: "Inicio",
      breadcrumb: "Chile",
      heroTag: "CHILE · AUTOMATIZACIÓN DE BODEGAS",
      heroH1_a: "AUTOMATIZACIÓN",
      heroH1_b: "PARA CHILE",
      heroSub: "Sistemas ASRS y robots de manipulación DELIE para bodegas chilenas. Diagnóstico, ingeniería e implementación con soporte técnico en el país.",
      heroBtnPrimary: "Agendar diagnóstico",
      heroBtnSecondary: "Ver catálogo",
      stats: [
        { v: "2+", l: "Proyectos en Chile" },
        { v: "24/7", l: "Soporte técnico" },
        { v: "-60%", l: "Reducción de costos" },
        { v: "10+", l: "Años de experiencia" }
      ],
      whyTag: "VENTAJAS LOCALES",
      whyH2: "¿POR QUÉ ELEGIR STOKA EN CHILE?",
      whyItems: [
        "Diagnóstico y proyecto de ingeniería completamente en español, sin intermediarios internacionales.",
        "Importación directa desde fábrica DELIE con gestión aduanera local y sin sobrecostos.",
        "Soporte técnico presencial disponible en Santiago, Valparaíso, Concepción y otras ciudades.",
        "Adaptación a normativa chilena (SUSESO, ARICA, etc.) en seguridad industrial.",
        "Integración con sistemas ERP y WMS utilizados en Chile (SAP, Oracle, local).",
        "Financiamiento compatible con Ley de Fomento a la Inversión Productiva."
      ],
      sectorsTag: "SECTORES",
      sectorsH2: "INDUSTRIAS QUE AUTOMATIZAMOS EN CHILE",
      sectorViewSolution: "Ver solución",
      sectors: [
        { title: "Minería y suministros", desc: "Gestión de repuestos, insumos y EPP para operaciones mineras de gran escala.", url: "/industrias/manufactura" },
        { title: "Alimentos y retail", desc: "Centros de distribución de alimentos frescos, congelados y productos de consumo masivo.", url: "/industrias/alimentos-bebidas" },
        { title: "Farmacéutica y salud", desc: "Control de lotes, vencimientos y cadena de frío para medicamentos y dispositivos médicos.", url: "/industrias/farmaceutica" },
        { title: "Logística y distribución", desc: "Operadores logísticos que buscan automatizar sus instalaciones para múltiples clientes.", url: "/industrias/distribucion" },
        { title: "Manufactura industrial", desc: "Almacenes de MP, PT y WIP para plantas de manufactura continua.", url: "/industrias/manufactura" },
        { title: "Vitivinícola y bebidas", desc: "Almacenes de botellas, cajas y granel para industria del vino y bebidas.", url: "/industrias/alimentos-bebidas" }
      ],
      systemsTag: "SISTEMAS DISPONIBLES",
      systemsH2: "TECNOLOGÍA DISPONIBLE EN CHILE",
      systems: [
        { name: "AS/RS Unit-Load (Transelevadores)", desc: "Para pallets estándar. Alta densidad y throughput en bodegas de mediana y gran escala." },
        { name: "Miniload AS/RS", desc: "Para cajas, bandejas y picking de alto volumen. Ideal para farmacéutica, e-commerce y repuestos." },
        { name: "Pallet Shuttle System", desc: "Almacenamiento de alta densidad para productos homogéneos. FIFO o LIFO según operación." },
        { name: "WMS / Software de gestión", desc: "Software de gestión de almacenes integrable con SAP, Oracle y otros ERP del mercado." }
      ],
      faqH2: "PREGUNTAS FRECUENTES — CHILE",
      faq: [
        { q: "¿STOKA tiene presencia física en Chile?", a: "Sí. Contamos con representación comercial y técnica en Chile para diagnóstico, venta, instalación y soporte post-venta. No es necesario gestionar desde Argentina." },
        { q: "¿Los sistemas DELIE cumplen con normativa chilena?", a: "Sí. Los sistemas se adaptan a las normativas de seguridad industrial y construcción vigentes en Chile, incluyendo requerimientos sísmicos específicos para instalaciones permanentes." },
        { q: "¿Cuál es el tiempo de entrega para proyectos en Chile?", a: "Depende de la escala. Proyectos medianos (5.000–20.000 posiciones) tienen un plazo de entrega de 8–14 meses desde firma de contrato, incluyendo fabricación, importación e instalación." },
        { q: "¿Se puede financiar un proyecto de automatización en Chile?", a: "Sí. Trabajamos con opciones de leasing, crédito bancario y en algunos casos con líneas de fomento a la inversión de CORFO y otros organismos públicos." }
      ]
    },

    delie: {
      metaTitle: "DELIE Argentina | Representante Oficial | STOKA",
      metaDesc: "STOKA es el representante exclusivo de DELIE en Argentina y Chile. Sistemas ASRS líderes globales con soporte técnico local, financiamiento en pesos y garantía de fábrica.",
      breadcrumbHome: "Inicio",
      breadcrumb: "DELIE Argentina",
      heroTag: "DELIE EN ARGENTINA · REPRESENTACIÓN EXCLUSIVA",
      heroH1_a: "TECNOLOGÍA DELIE",
      heroH1_b: "CON SOPORTE LOCAL",
      heroSub: "Importamos, implementamos y soportamos los sistemas ASRS de DELIE en Argentina y Chile. Acceso directo al fabricante con acompañamiento técnico local de primer nivel.",
      metrics: [
        { value: "30+", label: "Países con DELIE" },
        { value: "2.000+", label: "Proyectos instalados" },
        { value: "30 años", label: "De experiencia global" },
        { value: "100%", label: "Soporte local" }
      ],
      capacidadesTag: "CAPACIDADES DELIE",
      capacidadesH2: "UNA LÍNEA COMPLETA DE AUTOMATIZACIÓN",
      capacidadesSub: "DELIE fabrica y diseña soluciones para todo el espectro de la automatización logística.",
      capacidades: [
        { title: "AS/RS Pallets y Cajas", desc: "Transelevadores, Pallet Shuttle y Miniload para almacenamiento automatizado de alta densidad en cualquier escala." },
        { title: "Software WMS integrado", desc: "WMS propio integrable con SAP, Oracle y cualquier ERP. Control en tiempo real de inventario, lotes y trazabilidad." },
        { title: "Presencia global certificada", desc: "Instalaciones certificadas en Europa, Asia, América y Oceanía. Más de 2.000 proyectos con disponibilidad superior al 99%." },
        { title: "Soluciones temperatura controlada", desc: "Sistemas ASRS para frío positivo y negativo, cadena de frío farmacéutica y almacenamiento criogénico." }
      ],
      globalTag: "PRESENCIA GLOBAL",
      globalPresence: "DELIE opera en más de 30 países en 5 continentes",
      globalStats: [
        { value: "30+", label: "Países" },
        { value: "2.000+", label: "Proyectos" },
        { value: "30 años", label: "Experiencia" },
        { value: "5", label: "Continentes" }
      ],
      whyTag: "VENTAJA LOCAL",
      whyH2: "POR QUÉ ELEGIR DELIE CON SOPORTE LOCAL",
      whyItems: [
        { label: "Sin intermediarios internacionales", desc: "Comprá directo al representante exclusivo. Sin markups de distribuidores, con precio de fábrica y soporte directo." },
        { label: "Ingeniería en tu idioma", desc: "Todo el proceso —diagnóstico, ingeniería, instalación y soporte— en español, con ingenieros locales." },
        { label: "Piezas y repuestos en stock", desc: "Mantenemos inventario de repuestos críticos en Argentina para minimizar el tiempo de parada ante cualquier falla." },
        { label: "Integración con sistemas locales", desc: "Experiencia integrando con los ERP y sistemas contables más utilizados en Argentina y Chile (SAP, Oracle, Tango, etc.)." }
      ],
      tcoTag: "TCO / RETORNO DE INVERSIÓN",
      tcoText: "El costo total de propiedad (TCO) de un sistema DELIE con soporte local es significativamente menor que el de sistemas europeos o norteamericanos equivalentes, especialmente considerando tiempos de respuesta, costos de traslado de técnicos y disponibilidad de repuestos.",
      comparativaTag: "COMPARATIVA",
      comparativaH2: "DELIE VS. ALTERNATIVAS GLOBALES",
      comparativaColAspect: "Aspecto",
      comparativaColDelie: "DELIE + STOKA",
      comparativaColOther: "Otras marcas",
      comparativaNote: "* Basado en proyectos implementados en LATAM. Los resultados pueden variar según escala y tipo de operación.",
      comparativa: [
        { aspecto: "Soporte técnico local en Argentina", delie: true, otro: false },
        { aspecto: "Repuestos en stock local", delie: true, otro: false },
        { aspecto: "Ingeniería en español", delie: true, otro: "Parcial" },
        { aspecto: "Financiamiento en pesos", delie: true, otro: false },
        { aspecto: "Garantía de fábrica directa", delie: true, otro: "Parcial" },
        { aspecto: "Integración ERP local (SAP, Tango)", delie: true, otro: "Parcial" },
        { aspecto: "Precio competitivo para LATAM", delie: true, otro: false },
        { aspecto: "Adaptación normativa IRAM/local", delie: true, otro: "Parcial" },
        { aspecto: "Más de 2.000 proyectos instalados", delie: true, otro: "Varía" },
        { aspecto: "Capacitación operarios en planta", delie: true, otro: false }
      ],
      faqTag: "PREGUNTAS FRECUENTES",
      faqH2: "DELIE EN ARGENTINA — DUDAS COMUNES",
      faq: [
        { q: "¿STOKA es el único representante de DELIE en Argentina?", a: "Sí. STOKA Group es el representante y distribuidor exclusivo de DELIE para Argentina y Chile. Cualquier cotización de sistemas DELIE en estos países debe pasar por STOKA." },
        { q: "¿Los sistemas DELIE tienen garantía de fábrica en Argentina?", a: "Sí. Al comprar a través de STOKA obtenés garantía de fábrica con respaldo local. Gestionamos cualquier reclamo de garantía directamente con DELIE sin intermediarios adicionales." },
        { q: "¿Puedo visitar una instalación de referencia en Argentina?", a: "Contamos con referencias de proyectos en Latinoamérica y Asia disponibles para visita. Dependiendo del cliente y su NDA, coordinamos visitas técnicas para que puedas ver el sistema en operación real." },
        { q: "¿Qué diferencia a DELIE de otras marcas asiáticas?", a: "DELIE tiene más de 30 años de historia, certificaciones internacionales (CE, ISO) y presencia en mercados exigentes como Europa y Japón. No es una marca nueva: es un fabricante establecido con trayectoria comprobada." }
      ]
    },

    alternativaEconomica: {
      metaTitle: "Alternativa Económica a Sistemas ASRS Europeos | STOKA",
      metaDesc: "Sistemas ASRS DELIE con la misma tecnología que marcas europeas pero a precio competitivo para Argentina y LATAM. Financiamiento local y soporte técnico incluido.",
      breadcrumbHome: "Inicio",
      breadcrumb: "Alternativa Económica ASRS",
      heroTag: "ALTERNATIVA AL ASRS EUROPEO",
      heroH1_a: "MISMA TECNOLOGÍA",
      heroH1_b: "MENOR",
      heroH1_c: "COSTO TOTAL",
      heroSub: "Los sistemas ASRS DELIE ofrecen la misma funcionalidad y confiabilidad que las marcas europeas líderes, a un costo de adquisición hasta un 40% menor, con soporte técnico local en Argentina.",
      heroStats: [
        { n: "-40%", l: "vs. marcas europeas" },
        { n: "99%+", l: "Disponibilidad" },
        { n: "30+", l: "Países" },
        { n: "2.000+", l: "Proyectos" }
      ],
      heroBtnPrimary: "Solicitar cotización",
      heroBtnSecondary: "Ver catálogo",
      whyTag: "POR QUÉ CUESTA MÁS",
      whyH2: "¿POR QUÉ LOS SISTEMAS EUROPEOS SON MÁS CAROS EN ARGENTINA?",
      whyCosts: [
        { title: "Distribución indirecta", desc: "Muchas marcas europeas venden a través de distribuidores regionales con márgenes adicionales que encarecen el precio final." },
        { title: "Logística y aranceles", desc: "El costo de importación desde Europa incluye aranceles elevados, seguros de largo plazo y fletes más costosos." },
        { title: "Soporte de alto costo", desc: "El soporte post-venta implica traer técnicos desde Europa o pagar a representantes locales sin expertise real en el sistema." }
      ],
      comparisonTag: "COMPARATIVA TÉCNICA",
      comparisonH2: "DELIE VS. MARCAS EUROPEAS",
      comparisonSub: "Comparativa de características técnicas y comerciales para proyectos en Argentina y LATAM.",
      comparisonColOther: "Marca europea",
      comparisonPartial: "Parcial",
      comparisonNote: "* Basado en proyectos comparables en LATAM. Los resultados varían según escala y tipo de operación.",
      comparison: [
        { label: "Disponibilidad >99%", europeo: true },
        { label: "Soporte técnico local 24/7", europeo: false },
        { label: "Precio competitivo para LATAM", europeo: false },
        { label: "Repuestos en stock en Argentina", europeo: false },
        { label: "Financiamiento en moneda local", europeo: false },
        { label: "Integración ERP local (SAP, Tango)", europeo: "parcial" }
      ],
      productsTag: "PRODUCTOS",
      productsH2: "SISTEMAS DISPONIBLES EN ARGENTINA",
      productsViewAll: "Ver catálogo completo →",
      products: [
        { name: "Unit-Load AS/RS", tag: "Pallets", specs: ["Hasta 30m de altura", "Doble profundidad", "Alta velocidad"] },
        { name: "Pallet Shuttle", tag: "Alta densidad", specs: ["FIFO / LIFO", "Múltiples profundidades", "Sin pasillos intermedios"] },
        { name: "Miniload AS/RS", tag: "Cajas / Picking", specs: ["Picking automático", "Alta precisión", "Farmacéutica y e-com"] },
        { name: "Ver catálogo completo", tag: "Todos", specs: ["Vertical", "AGV", "Software WMS", "Consultar"] }
      ],
      tcoTag: "TCO / ROI",
      tcoH2_a: "EL MENOR",
      tcoH2_b: "COSTO TOTAL",
      tcoH2_c: "DE PROPIEDAD",
      tcoSub: "No solo el precio de compra: considerá el costo total durante 15–20 años de operación. Con soporte local y repuestos en stock, el TCO de un sistema DELIE es significativamente menor.",
      tcoLinkLabel: "Ver beneficios fiscales disponibles →",
      tcoStats: [
        { num: "-40%", desc: "Precio de adquisición vs. marcas europeas equivalentes para proyectos en Argentina" },
        { num: "-60%", desc: "Costo de soporte post-venta: técnicos locales vs. traslado desde Europa" },
        { num: "+20%", desc: "ROI adicional por financiamiento en pesos y beneficios fiscales locales disponibles" }
      ],
      faqTag: "PREGUNTAS FRECUENTES",
      faqH2: "DUDAS SOBRE LA COMPARATIVA",
      faq: [
        { q: "¿DELIE es de la misma calidad que marcas europeas como SSI Schäfer o Mecalux?", a: "Sí. DELIE tiene más de 30 años de historia, certificaciones CE e ISO, y opera en mercados europeos y japoneses que exigen los mismos estándares que las marcas europeas tradicionales. La diferencia está en la estructura de costos, no en la calidad técnica." },
        { q: "¿Qué pasa con el soporte técnico a largo plazo?", a: "STOKA mantiene un equipo de ingenieros locales certificados por DELIE, con stock de repuestos críticos en Argentina. El soporte post-venta está garantizado localmente sin depender de técnicos del exterior." },
        { q: "¿Puedo ver una instalación de referencia antes de decidir?", a: "Sí. Podemos coordinar visitas técnicas a instalaciones de referencia en Argentina y Latinoamérica, con acuerdo previo del cliente. También contamos con referencias de proyectos en Europa y Asia." },
        { q: "¿Los beneficios fiscales argentinos aplican a sistemas DELIE?", a: "Sí. Los sistemas DELIE califican para los regímenes de amortización acelerada, leasing y en muchos casos para créditos fiscales de la ley de bienes de capital. Nuestro equipo asesora sobre las opciones disponibles en cada caso." },
        { q: "¿Cuál es el proceso para obtener una cotización?", a: "El proceso comienza con un diagnóstico gratuito de tu operación (flujos, volúmenes, SKUs). Con esa información, preparamos una propuesta técnico-comercial detallada con ROI proyectado, sin costo ni compromiso." }
      ]
    }
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
const en_new = {
  pages: {
    soluciones: {
      metaTitle: "Logistics Automation Solutions | STOKA",
      metaDesc: "Discover STOKA's warehouse automation solutions: ASRS, robots, WMS software and more. Implementation with local technical support in Argentina and Chile.",
      breadcrumbHome: "Home",
      breadcrumb: "Solutions",
      heroTag: "COMPREHENSIVE SOLUTIONS",
      heroH1_a: "AUTOMATION",
      heroH1_b: "TAILORED",
      heroSub: "From diagnosis to startup: we design, integrate, and support systems that transform your logistics operation.",
      heroBtnPrimary: "Consult my case",
      heroBtnSecondary: "View catalog",
      problemasTag: "DIAGNOSIS",
      problemasH2: "WHAT PROBLEM DO WE SOLVE?",
      problemas: [
        { num: "01", problema: "Insufficient space", descripcion: "Stock growth exceeds warehouse capacity and expansion is not viable.", solucion: "High-density ASRS systems that multiply capacity without expanding floor area.", link: "/catalogo/asrs", linkLabel: "View ASRS systems" },
        { num: "02", problema: "Picking errors", descripcion: "Order preparation errors generate returns, losses, and dissatisfied customers.", solucion: "Robots and WMS software with real-time control and full traceability of every movement.", link: "/catalogo/software/wms", linkLabel: "View WMS" },
        { num: "03", problema: "Rising labor costs", descripcion: "Staff for manual operations represents the largest variable cost of the warehouse.", solucion: "Automation of repetitive movements that frees your team for higher-value tasks.", link: "/como-trabajamos", linkLabel: "View methodology" },
        { num: "04", problema: "Zero traceability", descripcion: "Without real-time visibility, inventory management depends on slow manual processes.", solucion: "WMS + ERP integration with full visibility from receiving to shipping.", link: "/catalogo/software", linkLabel: "View software" }
      ],
      metodologiaTag: "METHODOLOGY",
      metodologiaH2: "HOW WE IMPLEMENT IT",
      stepLabel: "Step",
      metodologia: [
        { paso: "01", titulo: "Diagnosis", desc: "Survey of your current operation: flows, volumes, SKUs, demand peaks, and building constraints." },
        { paso: "02", titulo: "Design", desc: "Custom solution engineering: layout, technology selection, flow simulation, and projected ROI." },
        { paso: "03", titulo: "Implementation", desc: "Installation, integration with your existing systems, and startup with operational team training." },
        { paso: "04", titulo: "Support", desc: "Preventive and corrective maintenance, software updates, and 24/7 support in Argentina and Chile." }
      ],
      ctaTag: "GET STARTED",
      ctaBannerTitle: "READY TO AUTOMATE?",
      ctaBannerSub: "Our engineering team evaluates your operation and presents a custom solution at no cost.",
      ctaBannerBtn: "Schedule free diagnosis",
      casosTag: "USE CASES",
      casosH2: "SOLUTIONS BY INDUSTRY",
      casosSub: "Real implementations across different sectors with measurable results.",
      casosViewSolution: "View solution →",
      casosViewAll: "View all success cases →",
      casosUso: [
        { operacion: "Pharmaceutical & labs", desc: "Temperature control, batch and expiry management with full traceability.", soluciones: ["Miniload ASRS", "Pharma WMS"], industria: "Pharma" },
        { operacion: "Food & beverages", desc: "Automated cold rooms, FIFO, and perishable management.", soluciones: ["Pallet Shuttle", "Cold Storage"], industria: "Food" },
        { operacion: "Chemical industry", desc: "Safe storage of hazardous materials with automatic segregation.", soluciones: ["ASRS Unit-Load", "Racks"], industria: "Chemical" },
        { operacion: "E-commerce & retail", desc: "High-volume mass picking with accuracy above 99.9%.", soluciones: ["Tote Shuttle", "Pick-to-light"], industria: "Retail" },
        { operacion: "Automotive & manufacturing", desc: "Just-in-time component management for production lines.", soluciones: ["AGV", "Miniload"], industria: "Automotive" },
        { operacion: "Textile & footwear", desc: "SKU storage with high size variability and turnover.", soluciones: ["Vertical Storage", "WMS"], industria: "Textile" }
      ],
      whyTag: "WHY STOKA",
      whyH2: "DIFFERENTIATING ADVANTAGES",
      whyItems: [
        { label: "Official DELIE representation", desc: "Direct access to the manufacturer: no intermediaries, with factory warranty and original parts." },
        { label: "Local engineering", desc: "Team of engineers in Argentina and Chile for design, implementation, and after-sales support." },
        { label: "Local financing", desc: "We structure each project with financial tools available in the local market." },
        { label: "Full integration", desc: "We connect the system to your existing ERP/WMS without interrupting operations." }
      ],
      linkHowWeWork: "/como-trabajamos",
      linkCases: "/casos-de-exito",
      linkCatalog: "/catalogo",
      linkFiscal: "/beneficios-fiscales",
      faqTag: "FREQUENTLY ASKED QUESTIONS",
      faqH2: "WE ANSWER YOUR QUESTIONS",
      faq: [
        { q: "How long does it take to implement an ASRS system?", a: "It depends on scale. A medium system (5,000–20,000 positions) generally takes 6–12 months from contract signing to startup. Larger projects may require 18–24 months." },
        { q: "Do I need to change my ERP to implement an automated system?", a: "No. Our systems integrate with the main ERPs on the market (SAP, Oracle, Microsoft Dynamics, etc.) through standard APIs. Integration is part of the project scope." },
        { q: "What happens if there's a power outage or technical failure?", a: "DELIE systems have emergency operation protocols, UPS, and optional generators. The WMS preserves inventory state and equipment automatically resumes from where they were." },
        { q: "Can you finance the project in Argentina?", a: "Yes. We work with local financing tools: leasing, bank credit, and in some cases access to productive investment promotion lines." }
      ]
    },

    casosDeExito: {
      metaTitle: "Success Cases | Logistics Automation | STOKA",
      metaDesc: "Real ASRS DELIE system implementations in pharmaceutical, chemical, textile and other industries. Measurable results in efficiency and ROI.",
      breadcrumbHome: "Home",
      breadcrumb: "Success Cases",
      heroTag: "REAL RESULTS",
      heroH1_a: "SUCCESS",
      heroH1_b: "CASES",
      heroSub: "Real DELIE system implementations across different countries and industries, with verified metrics and concrete results.",
      stats: [
        { num: "9+", label: "Documented cases" },
        { num: "5", label: "Countries" },
        { num: "7", label: "Industries" },
        { num: "99%", label: "Average accuracy" }
      ],
      portfolioTag: "PORTFOLIO",
      portfolioH2: "FEATURED IMPLEMENTATIONS",
      portfolioNote: "Client data is referenced for illustration. Some details may vary due to confidentiality agreements.",
      trustTag: "TRUST",
      trustH2: "WHY TRUST THESE RESULTS",
      trustItems: [
        { title: "Verified data", desc: "All metrics are reported by the client themselves or validated by our post-implementation engineering team." },
        { title: "Globally proven technology", desc: "DELIE operates in over 30 countries with more than 2,000 installed projects, guaranteeing robustness and predictability." },
        { title: "Ongoing support", desc: "After-sales accompaniment allows us to document and measure the real impact of each implementation over time." }
      ],
      ctaTag: "NEXT STEP",
      ctaH2_a: "WANT TO BE THE",
      ctaH2_b: "NEXT CASE?",
      ctaSub: "We evaluate your operation and present a solution with ROI projection at no cost or commitment.",
      ctaBtnPrimary: "Consult now",
      ctaBtnSecondary: "View catalog",
      showRelevance: "View LATAM relevance",
      hideRelevance: "Hide relevance",
      relevanceLabel: "RELEVANCE FOR ARGENTINA / LATAM",
      casos: [
        {
          id: "alfombras-tailandia",
          industria: "Textile / Carpets",
          ubicacion: "Thailand",
          titulo: "Automated warehouse for high-volume carpet manufacturer",
          empresa: "Leading textile manufacturer · Asia Pacific",
          sistema: "AS/RS Unit-Load + DELIE Stacker Crane",
          resumen: "A large-scale carpet manufacturer needed to triple storage capacity without expanding floor area. A 4-crane double-mast ASRS with WMS integrated to the existing ERP was implemented.",
          metricas: [{ val: "×3", sub: "Capacity" }, { val: "99.7%", sub: "Accuracy" }, { val: "-60%", sub: "Floor area" }],
          tecnologias: ["DELIE Stacker Crane", "Integrated WMS", "Standard pallets"],
          relevancia: "The Argentine textile industry, especially in Córdoba and Buenos Aires, faces the same density challenges. This case demonstrates viability for warehouses of 2,000–8,000 m²."
        },
        {
          id: "licores-china",
          industria: "Beverages / Spirits",
          ubicacion: "China",
          titulo: "Automated distribution center for premium spirits warehouse",
          empresa: "Premium spirits producer · China",
          sistema: "Pallet Shuttle + Miniload DELIE",
          resumen: "Integration of a combined ASRS system (Pallet Shuttle for bulk stock and Miniload for box picking) in a 15,000 m² distribution center. 75% reduction in dispatch times.",
          metricas: [{ val: "-75%", sub: "Dispatch time" }, { val: "15K", sub: "Positions" }, { val: "24/7", sub: "Operation" }],
          tecnologias: ["DELIE Pallet Shuttle", "Miniload", "Conveyor", "WMS"],
          relevancia: "The wine and beverage sector in Mendoza, San Juan and Cuyo can replicate this model for high-seasonality distribution."
        },
        {
          id: "farmaceutica-tcm",
          industria: "Pharmaceutical / Traditional Medicine",
          ubicacion: "China",
          titulo: "Automated warehouse for traditional medicine laboratory",
          empresa: "Certified pharmaceutical laboratory · China",
          sistema: "Miniload AS/RS + DELIE Pharma WMS",
          resumen: "Miniload implementation with batch and expiry control under GMP regulations. Full traceability from raw material intake to finished product dispatch.",
          metricas: [{ val: "100%", sub: "Traceability" }, { val: "-40%", sub: "Errors" }, { val: "GMP", sub: "Compliance" }],
          tecnologias: ["Miniload ASRS", "GMP WMS", "Batch traceability", "Temperature control"],
          relevancia: "Argentine pharmaceutical laboratories (ANMAT) require equivalent traceability. The system is adaptable to local regulations without major redesign."
        },
        {
          id: "farmaceutica-temperatura",
          industria: "Pharmaceutical / Cold Chain",
          ubicacion: "Europe",
          titulo: "Cold chain depot for pharmaceutical distribution",
          empresa: "Multinational pharmaceutical distributor · Europe",
          sistema: "DELIE Cold Storage ASRS",
          resumen: "ASRS system specific for 2–8°C storage with real-time temperature control per position. 45% reduction in energy consumption compared to equivalent manual storage.",
          metricas: [{ val: "2–8°C", sub: "Precise control" }, { val: "-45%", sub: "Energy" }, { val: "99.9%", sub: "Availability" }],
          tecnologias: ["Cold Storage ASRS", "IoT monitoring", "Pharma WMS"],
          relevancia: "The pharmaceutical cold chain in Argentina is critical. This case directly applies to distributors and laboratories in CABA, Greater Buenos Aires and Córdoba."
        },
        {
          id: "quimica-sulfato",
          industria: "Industrial Chemical",
          ubicacion: "China",
          titulo: "Automated management of bulk industrial chemical raw materials",
          empresa: "Industrial sulfate producer · China",
          sistema: "DELIE Heavy Duty Unit-Load AS/RS",
          resumen: "Automated storage of raw materials in big-bag and pallet format for continuous production. The system manages automatic FIFO and line replenishment without manual intervention.",
          metricas: [{ val: "-50%", sub: "Cycle time" }, { val: "FIFO", sub: "Automatic" }, { val: "+35%", sub: "Throughput" }],
          tecnologias: ["Unit-Load ASRS", "Big-bag handling", "Integrated WMS"],
          relevancia: "The petrochemical and chemical industry in Bahía Blanca and Rosario can implement this model for raw material management and production dispatch."
        },
        {
          id: "quimica-peligrosos",
          industria: "Chemical / Hazardous Materials",
          ubicacion: "Europe",
          titulo: "Automated warehouse for hazardous products under ATEX",
          empresa: "Chemical specialties manufacturer · Europe",
          sistema: "DELIE ATEX ASRS + Segregation system",
          resumen: "ATEX-certified ASRS system for storage of flammable and toxic products. Includes automatic segregation by hazard class and incompatibility management.",
          metricas: [{ val: "ATEX", sub: "Certified" }, { val: "0", sub: "Incidents" }, { val: "-70%", sub: "Worker risk" }],
          tecnologias: ["ATEX ASRS", "Automatic segregation", "HAZMAT WMS"],
          relevancia: "Argentine regulations for hazardous materials (IRAM, APN) require similar controls. Chemical, paint and agrochemical industry in Greater Buenos Aires and Córdoba."
        },
        {
          id: "titanio",
          industria: "Metallurgy / Special Materials",
          ubicacion: "Asia",
          titulo: "Automated warehouse for titanium and alloy management",
          empresa: "Aerospace materials supplier · Asia",
          sistema: "Vertical Storage + DELIE ASRS",
          resumen: "Management of titanium and special alloy profiles, tubes and sheets with traceability by material certificate. Control of environmental conditions and full traceability of each piece.",
          metricas: [{ val: "100%", sub: "Traceability" }, { val: "-55%", sub: "Search time" }, { val: "∞", sub: "Safety" }],
          tecnologias: ["Vertical Storage", "QR/RFID code", "Materials WMS"],
          relevancia: "For the Argentine metallurgical industry (Tenaris, etc.) and aerospace suppliers: material traceability with quality certificate."
        },
        {
          id: "lubricantes",
          industria: "Lubricants / Petrochemical",
          ubicacion: "Asia",
          titulo: "Automated distribution center for industrial lubricants",
          empresa: "Industrial lubricants distributor · Asia",
          sistema: "Pallet Shuttle + DELIE Conveyor",
          resumen: "High-speed distribution of lubricants in multi-format containers (jerry cans, drums, IBC). The system handles 1,200 movements/hour with 99.8% accuracy.",
          metricas: [{ val: "1,200", sub: "Moves/hour" }, { val: "99.8%", sub: "Accuracy" }, { val: "-40%", sub: "Staff" }],
          tecnologias: ["Pallet Shuttle", "Conveyor system", "Multi-format WMS"],
          relevancia: "Lubricant and petrochemical distributors in Argentina with medium and large-scale operations."
        },
        {
          id: "manufactura-gran-escala",
          industria: "Manufacturing / Mass production",
          ubicacion: "China",
          titulo: "Central warehouse for large-scale just-in-time manufacturing",
          empresa: "Multinational component manufacturer · China",
          sistema: "Full AS/RS + AGV + DELIE WMS",
          resumen: "Integrated logistics center supplying 12 production lines just-in-time. The WMS coordinates AGVs, ASRS and conveyors to guarantee components on line with latency below 15 minutes.",
          metricas: [{ val: "<15min", sub: "JIT latency" }, { val: "12", sub: "JIT lines" }, { val: "-65%", sub: "WIP" }],
          tecnologias: ["ASRS Unit-Load", "AGV fleet", "Integrated conveyor", "JIT WMS"],
          relevancia: "Industrial parks in Buenos Aires, Córdoba and Rosario with serial production can implement this model to reduce WIP and improve OEE."
        }
      ]
    },

    chile: {
      metaTitle: "Warehouse Automation in Chile | ASRS DELIE Systems | STOKA",
      metaDesc: "DELIE logistics automation systems for warehouses in Chile. ASRS, manipulation robots, and WMS software with local technical support. Request a free diagnosis.",
      breadcrumbHome: "Home",
      breadcrumb: "Chile",
      heroTag: "CHILE · WAREHOUSE AUTOMATION",
      heroH1_a: "AUTOMATION",
      heroH1_b: "FOR CHILE",
      heroSub: "DELIE ASRS systems and manipulation robots for Chilean warehouses. Diagnosis, engineering and implementation with in-country technical support.",
      heroBtnPrimary: "Schedule diagnosis",
      heroBtnSecondary: "View catalog",
      stats: [
        { v: "2+", l: "Projects in Chile" },
        { v: "24/7", l: "Technical support" },
        { v: "-60%", l: "Cost reduction" },
        { v: "10+", l: "Years of experience" }
      ],
      whyTag: "LOCAL ADVANTAGES",
      whyH2: "WHY CHOOSE STOKA IN CHILE?",
      whyItems: [
        "Diagnosis and engineering project entirely in Spanish, without international intermediaries.",
        "Direct import from DELIE factory with local customs management and no extra costs.",
        "On-site technical support available in Santiago, Valparaíso, Concepción and other cities.",
        "Adaptation to Chilean industrial safety regulations (SUSESO, ARICA, etc.).",
        "Integration with ERP and WMS systems used in Chile (SAP, Oracle, local).",
        "Financing compatible with the Productive Investment Promotion Law."
      ],
      sectorsTag: "SECTORS",
      sectorsH2: "INDUSTRIES WE AUTOMATE IN CHILE",
      sectorViewSolution: "View solution",
      sectors: [
        { title: "Mining & supplies", desc: "Management of spare parts, supplies and PPE for large-scale mining operations.", url: "/industrias/manufactura" },
        { title: "Food & retail", desc: "Distribution centers for fresh, frozen and mass consumer products.", url: "/industrias/alimentos-bebidas" },
        { title: "Pharmaceutical & health", desc: "Batch, expiry, and cold chain control for medicines and medical devices.", url: "/industrias/farmaceutica" },
        { title: "Logistics & distribution", desc: "Logistics operators looking to automate their facilities for multiple clients.", url: "/industrias/distribucion" },
        { title: "Industrial manufacturing", desc: "Raw material, finished product and WIP warehouses for continuous manufacturing plants.", url: "/industrias/manufactura" },
        { title: "Wine & beverages", desc: "Warehouses for bottles, cases and bulk for wine and beverage industry.", url: "/industrias/alimentos-bebidas" }
      ],
      systemsTag: "AVAILABLE SYSTEMS",
      systemsH2: "TECHNOLOGY AVAILABLE IN CHILE",
      systems: [
        { name: "AS/RS Unit-Load (Stacker Cranes)", desc: "For standard pallets. High density and throughput in medium and large-scale warehouses." },
        { name: "Miniload AS/RS", desc: "For boxes, trays and high-volume picking. Ideal for pharmaceutical, e-commerce and spare parts." },
        { name: "Pallet Shuttle System", desc: "High-density storage for homogeneous products. FIFO or LIFO according to operation." },
        { name: "WMS / Management software", desc: "Warehouse management software integrable with SAP, Oracle and other market ERPs." }
      ],
      faqH2: "FREQUENTLY ASKED QUESTIONS — CHILE",
      faq: [
        { q: "Does STOKA have a physical presence in Chile?", a: "Yes. We have commercial and technical representation in Chile for diagnosis, sales, installation and after-sales support. No need to manage from Argentina." },
        { q: "Do DELIE systems comply with Chilean regulations?", a: "Yes. The systems are adapted to the industrial safety and construction standards in force in Chile, including specific seismic requirements for permanent installations." },
        { q: "What is the delivery time for projects in Chile?", a: "It depends on scale. Medium projects (5,000–20,000 positions) have a delivery time of 8–14 months from contract signing, including manufacturing, import and installation." },
        { q: "Can an automation project be financed in Chile?", a: "Yes. We work with leasing options, bank credit, and in some cases with CORFO and other public agency investment promotion lines." }
      ]
    },

    delie: {
      metaTitle: "DELIE Argentina | Official Representative | STOKA",
      metaDesc: "STOKA is the exclusive representative of DELIE in Argentina and Chile. Leading global ASRS systems with local technical support, local financing and factory warranty.",
      breadcrumbHome: "Home",
      breadcrumb: "DELIE Argentina",
      heroTag: "DELIE IN ARGENTINA · EXCLUSIVE REPRESENTATION",
      heroH1_a: "DELIE TECHNOLOGY",
      heroH1_b: "WITH LOCAL SUPPORT",
      heroSub: "We import, implement and support DELIE ASRS systems in Argentina and Chile. Direct access to the manufacturer with first-class local technical support.",
      metrics: [
        { value: "30+", label: "Countries with DELIE" },
        { value: "2,000+", label: "Installed projects" },
        { value: "30 years", label: "Global experience" },
        { value: "100%", label: "Local support" }
      ],
      capacidadesTag: "DELIE CAPABILITIES",
      capacidadesH2: "A COMPLETE LINE OF AUTOMATION",
      capacidadesSub: "DELIE manufactures and designs solutions for the full spectrum of logistics automation.",
      capacidades: [
        { title: "Pallet & Box AS/RS", desc: "Stacker cranes, Pallet Shuttle and Miniload for automated high-density storage at any scale." },
        { title: "Integrated WMS software", desc: "Proprietary WMS integrable with SAP, Oracle and any ERP. Real-time control of inventory, batches and traceability." },
        { title: "Certified global presence", desc: "Certified installations in Europe, Asia, America and Oceania. Over 2,000 projects with availability above 99%." },
        { title: "Temperature-controlled solutions", desc: "ASRS systems for positive and negative cold, pharmaceutical cold chain and cryogenic storage." }
      ],
      globalTag: "GLOBAL PRESENCE",
      globalPresence: "DELIE operates in over 30 countries on 5 continents",
      globalStats: [
        { value: "30+", label: "Countries" },
        { value: "2,000+", label: "Projects" },
        { value: "30 years", label: "Experience" },
        { value: "5", label: "Continents" }
      ],
      whyTag: "LOCAL ADVANTAGE",
      whyH2: "WHY CHOOSE DELIE WITH LOCAL SUPPORT",
      whyItems: [
        { label: "No international intermediaries", desc: "Buy directly from the exclusive representative. No distributor markups, with factory pricing and direct support." },
        { label: "Engineering in your language", desc: "The entire process—diagnosis, engineering, installation and support—in Spanish, with local engineers." },
        { label: "Parts and spares in stock", desc: "We maintain critical spare parts inventory in Argentina to minimize downtime in case of any failure." },
        { label: "Integration with local systems", desc: "Experience integrating with the most widely used ERPs and accounting systems in Argentina and Chile (SAP, Oracle, Tango, etc.)." }
      ],
      tcoTag: "TCO / RETURN ON INVESTMENT",
      tcoText: "The total cost of ownership (TCO) of a DELIE system with local support is significantly lower than equivalent European or North American systems, especially considering response times, technician travel costs, and spare parts availability.",
      comparativaTag: "COMPARISON",
      comparativaH2: "DELIE VS. GLOBAL ALTERNATIVES",
      comparativaColAspect: "Aspect",
      comparativaColDelie: "DELIE + STOKA",
      comparativaColOther: "Other brands",
      comparativaNote: "* Based on projects implemented in LATAM. Results may vary by scale and operation type.",
      comparativa: [
        { aspecto: "Local technical support in Argentina", delie: true, otro: false },
        { aspecto: "Local spare parts in stock", delie: true, otro: false },
        { aspecto: "Engineering in Spanish", delie: true, otro: "Partial" },
        { aspecto: "Local currency financing", delie: true, otro: false },
        { aspecto: "Direct factory warranty", delie: true, otro: "Partial" },
        { aspecto: "Local ERP integration (SAP, Tango)", delie: true, otro: "Partial" },
        { aspecto: "Competitive price for LATAM", delie: true, otro: false },
        { aspecto: "IRAM/local regulation compliance", delie: true, otro: "Partial" },
        { aspecto: "Over 2,000 installed projects", delie: true, otro: "Varies" },
        { aspecto: "On-site operator training", delie: true, otro: false }
      ],
      faqTag: "FREQUENTLY ASKED QUESTIONS",
      faqH2: "DELIE IN ARGENTINA — COMMON QUESTIONS",
      faq: [
        { q: "Is STOKA the only DELIE representative in Argentina?", a: "Yes. STOKA Group is the exclusive representative and distributor of DELIE for Argentina and Chile. Any DELIE system quotation in these countries must go through STOKA." },
        { q: "Do DELIE systems have factory warranty in Argentina?", a: "Yes. When purchasing through STOKA you get a factory warranty with local backing. We handle any warranty claims directly with DELIE without additional intermediaries." },
        { q: "Can I visit a reference installation in Argentina?", a: "We have project references in Latin America and Asia available for visits. Depending on the client and their NDA, we coordinate technical visits so you can see the system in real operation." },
        { q: "What differentiates DELIE from other Asian brands?", a: "DELIE has over 30 years of history, international certifications (CE, ISO) and presence in demanding markets like Europe and Japan. It is not a new brand: it is an established manufacturer with proven track record." }
      ]
    },

    alternativaEconomica: {
      metaTitle: "Cost-Effective Alternative to European ASRS Systems | STOKA",
      metaDesc: "DELIE ASRS systems with the same technology as European brands but at competitive pricing for Argentina and LATAM. Local financing and technical support included.",
      breadcrumbHome: "Home",
      breadcrumb: "Cost-Effective ASRS Alternative",
      heroTag: "ALTERNATIVE TO EUROPEAN ASRS",
      heroH1_a: "SAME TECHNOLOGY",
      heroH1_b: "LOWER",
      heroH1_c: "TOTAL COST",
      heroSub: "DELIE ASRS systems offer the same functionality and reliability as leading European brands, at an acquisition cost up to 40% lower, with local technical support in Argentina.",
      heroStats: [
        { n: "-40%", l: "vs. European brands" },
        { n: "99%+", l: "Availability" },
        { n: "30+", l: "Countries" },
        { n: "2,000+", l: "Projects" }
      ],
      heroBtnPrimary: "Request quote",
      heroBtnSecondary: "View catalog",
      whyTag: "WHY IT COSTS MORE",
      whyH2: "WHY ARE EUROPEAN SYSTEMS MORE EXPENSIVE IN ARGENTINA?",
      whyCosts: [
        { title: "Indirect distribution", desc: "Many European brands sell through regional distributors with additional margins that increase the final price." },
        { title: "Logistics and tariffs", desc: "The cost of importing from Europe includes high tariffs, long-term insurance, and more expensive freight." },
        { title: "High-cost support", desc: "After-sales support involves bringing technicians from Europe or paying local representatives without real system expertise." }
      ],
      comparisonTag: "TECHNICAL COMPARISON",
      comparisonH2: "DELIE VS. EUROPEAN BRANDS",
      comparisonSub: "Comparison of technical and commercial features for projects in Argentina and LATAM.",
      comparisonColOther: "European brand",
      comparisonPartial: "Partial",
      comparisonNote: "* Based on comparable projects in LATAM. Results vary by scale and operation type.",
      comparison: [
        { label: "Availability >99%", europeo: true },
        { label: "Local 24/7 technical support", europeo: false },
        { label: "Competitive price for LATAM", europeo: false },
        { label: "Spare parts in stock in Argentina", europeo: false },
        { label: "Local currency financing", europeo: false },
        { label: "Local ERP integration (SAP, Tango)", europeo: "parcial" }
      ],
      productsTag: "PRODUCTS",
      productsH2: "SYSTEMS AVAILABLE IN ARGENTINA",
      productsViewAll: "View full catalog →",
      products: [
        { name: "Unit-Load AS/RS", tag: "Pallets", specs: ["Up to 30m height", "Double depth", "High speed"] },
        { name: "Pallet Shuttle", tag: "High density", specs: ["FIFO / LIFO", "Multiple depths", "No intermediate aisles"] },
        { name: "Miniload AS/RS", tag: "Boxes / Picking", specs: ["Automatic picking", "High precision", "Pharma & e-com"] },
        { name: "View full catalog", tag: "All", specs: ["Vertical", "AGV", "WMS Software", "Consult"] }
      ],
      tcoTag: "TCO / ROI",
      tcoH2_a: "THE LOWEST",
      tcoH2_b: "TOTAL COST",
      tcoH2_c: "OF OWNERSHIP",
      tcoSub: "Not just the purchase price: consider the total cost over 15–20 years of operation. With local support and in-stock spare parts, the TCO of a DELIE system is significantly lower.",
      tcoLinkLabel: "View available tax benefits →",
      tcoStats: [
        { num: "-40%", desc: "Acquisition price vs. equivalent European brands for projects in Argentina" },
        { num: "-60%", desc: "After-sales support cost: local technicians vs. travel from Europe" },
        { num: "+20%", desc: "Additional ROI from local currency financing and available local tax benefits" }
      ],
      faqTag: "FREQUENTLY ASKED QUESTIONS",
      faqH2: "QUESTIONS ABOUT THE COMPARISON",
      faq: [
        { q: "Is DELIE the same quality as European brands like SSI Schäfer or Mecalux?", a: "Yes. DELIE has over 30 years of history, CE and ISO certifications, and operates in European and Japanese markets that demand the same standards as traditional European brands. The difference is in cost structure, not technical quality." },
        { q: "What about long-term technical support?", a: "STOKA maintains a team of DELIE-certified local engineers, with critical spare parts stock in Argentina. After-sales support is guaranteed locally without depending on overseas technicians." },
        { q: "Can I see a reference installation before deciding?", a: "Yes. We can coordinate technical visits to reference installations in Argentina and Latin America, with prior client agreement. We also have project references in Europe and Asia." },
        { q: "Do Argentine tax benefits apply to DELIE systems?", a: "Yes. DELIE systems qualify for accelerated depreciation regimes, leasing, and in many cases for capital goods law tax credits. Our team advises on available options in each case." },
        { q: "What is the process for getting a quote?", a: "The process starts with a free diagnosis of your operation (flows, volumes, SKUs). With that information, we prepare a detailed technical-commercial proposal with projected ROI, at no cost or commitment." }
      ]
    }
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// CHINESE
// ─────────────────────────────────────────────────────────────────────────────
const zh_new = {
  pages: {
    soluciones: {
      metaTitle: "物流自动化解决方案 | STOKA",
      metaDesc: "探索STOKA的仓库自动化解决方案：ASRS、机器人、WMS软件等。在阿根廷和智利提供本地技术支持的实施服务。",
      breadcrumbHome: "首页",
      breadcrumb: "解决方案",
      heroTag: "综合解决方案",
      heroH1_a: "定制化",
      heroH1_b: "自动化",
      heroSub: "从诊断到启动：我们设计、集成并支持改变您物流运营的系统。",
      heroBtnPrimary: "咨询我的案例",
      heroBtnSecondary: "查看产品目录",
      problemasTag: "诊断",
      problemasH2: "我们解决什么问题？",
      problemas: [
        { num: "01", problema: "空间不足", descripcion: "库存增长超过仓库容量，扩建不可行。", solucion: "高密度ASRS系统，无需扩建面积即可成倍提升容量。", link: "/catalogo/asrs", linkLabel: "查看ASRS系统" },
        { num: "02", problema: "拣选错误", descripcion: "订单准备错误导致退货、损失和客户不满。", solucion: "机器人和WMS软件，实时控制，完整追踪每个动作。", link: "/catalogo/software/wms", linkLabel: "查看WMS" },
        { num: "03", problema: "劳动力成本上升", descripcion: "手动操作人员代表仓库最大的可变成本。", solucion: "重复性动作自动化，解放团队专注更高价值的任务。", link: "/como-trabajamos", linkLabel: "查看方法论" },
        { num: "04", problema: "零可追溯性", descripcion: "没有实时可见性，库存管理依赖缓慢的手动流程。", solucion: "WMS + ERP集成，从收货到发货全程可见。", link: "/catalogo/software", linkLabel: "查看软件" }
      ],
      metodologiaTag: "方法论",
      metodologiaH2: "我们如何实施",
      stepLabel: "步骤",
      metodologia: [
        { paso: "01", titulo: "诊断", desc: "调查您当前的运营：流程、数量、SKU、需求峰值和建筑限制。" },
        { paso: "02", titulo: "设计", desc: "定制解决方案工程：布局、技术选择、流程仿真和预计ROI。" },
        { paso: "03", titulo: "实施", desc: "安装、与现有系统集成，以及运营团队培训下的启动。" },
        { paso: "04", titulo: "支持", desc: "预防性和纠正性维护、软件更新，在阿根廷和智利提供24/7支持。" }
      ],
      ctaTag: "立即开始",
      ctaBannerTitle: "准备好自动化了吗？",
      ctaBannerSub: "我们的工程师团队评估您的运营并免费提供定制解决方案。",
      ctaBannerBtn: "预约免费诊断",
      casosTag: "应用案例",
      casosH2: "按行业的解决方案",
      casosSub: "不同行业的真实实施案例，具有可衡量的成果。",
      casosViewSolution: "查看解决方案 →",
      casosViewAll: "查看所有成功案例 →",
      casosUso: [
        { operacion: "制药与实验室", desc: "温度控制、批次和有效期管理，全程可追溯。", soluciones: ["迷你货架ASRS", "制药WMS"], industria: "制药" },
        { operacion: "食品饮料", desc: "自动化冷藏室、FIFO和易腐品管理。", soluciones: ["托盘穿梭", "冷链存储"], industria: "食品" },
        { operacion: "化工行业", desc: "危险材料安全存储，自动隔离。", soluciones: ["ASRS单元负载", "货架"], industria: "化工" },
        { operacion: "电商零售", desc: "高精度大批量分拣，准确率超过99.9%。", soluciones: ["料箱穿梭", "亮灯拣选"], industria: "零售" },
        { operacion: "汽车与制造", desc: "生产线零件准时制管理。", soluciones: ["AGV", "迷你货架"], industria: "汽车" },
        { operacion: "纺织服装", desc: "高SKU变化性和周转率的存储。", soluciones: ["垂直存储", "WMS"], industria: "纺织" }
      ],
      whyTag: "为什么选择STOKA",
      whyH2: "差异化优势",
      whyItems: [
        { label: "DELIE官方代表处", desc: "直接访问制造商：无中间商，享有工厂保修和原装零件。" },
        { label: "本地工程", desc: "在阿根廷和智利的工程师团队，负责设计、实施和售后支持。" },
        { label: "本地融资", desc: "利用当地市场可用的金融工具为每个项目构建方案。" },
        { label: "完整集成", desc: "不中断运营地将系统连接到您现有的ERP/WMS。" }
      ],
      linkHowWeWork: "/como-trabajamos",
      linkCases: "/casos-de-exito",
      linkCatalog: "/catalogo",
      linkFiscal: "/beneficios-fiscales",
      faqTag: "常见问题",
      faqH2: "我们解答您的疑问",
      faq: [
        { q: "实施ASRS系统需要多长时间？", a: "这取决于规模。中型系统（5,000–20,000个位置）通常从签订合同到启动需要6-12个月。大型项目可能需要18-24个月。" },
        { q: "实施自动化系统需要更换ERP吗？", a: "不需要。我们的系统通过标准API与市场上主要的ERP（SAP、Oracle、Microsoft Dynamics等）集成。集成是项目范围的一部分。" },
        { q: "停电或技术故障怎么办？", a: "DELIE系统具有紧急操作协议、UPS和可选发电机。WMS保留库存状态，设备自动从中断处恢复。" },
        { q: "可以在阿根廷为项目融资吗？", a: "可以。我们使用本地融资工具：租赁、银行信贷，以及在某些情况下获得生产投资促进信贷额度。" }
      ]
    },

    casosDeExito: {
      metaTitle: "成功案例 | 物流自动化 | STOKA",
      metaDesc: "了解DELIE ASRS系统在制药、化工、纺织等行业的真实实施案例。效率和ROI方面的可衡量结果。",
      breadcrumbHome: "首页",
      breadcrumb: "成功案例",
      heroTag: "真实成果",
      heroH1_a: "成功",
      heroH1_b: "案例",
      heroSub: "DELIE系统在不同国家和行业的真实实施案例，具有经过验证的指标和具体结果。",
      stats: [
        { num: "9+", label: "记录案例" },
        { num: "5", label: "国家" },
        { num: "7", label: "行业" },
        { num: "99%", label: "平均准确率" }
      ],
      portfolioTag: "案例集",
      portfolioH2: "精选实施案例",
      portfolioNote: "客户数据仅供参考。部分细节可能因保密协议而有所不同。",
      trustTag: "信任",
      trustH2: "为什么信任这些结果",
      trustItems: [
        { title: "经过验证的数据", desc: "所有指标均由客户自行报告或由我们的售后工程团队验证。" },
        { title: "全球验证的技术", desc: "DELIE在30多个国家运营，安装了2,000多个项目，确保了可靠性和可预测性。" },
        { title: "持续支持", desc: "售后陪伴使我们能够记录和衡量每个实施方案随时间产生的真实影响。" }
      ],
      ctaTag: "下一步",
      ctaH2_a: "想成为",
      ctaH2_b: "下一个案例？",
      ctaSub: "我们评估您的运营并免费提供带有ROI预测的解决方案。",
      ctaBtnPrimary: "立即咨询",
      ctaBtnSecondary: "查看产品目录",
      showRelevance: "查看对LATAM的相关性",
      hideRelevance: "隐藏相关性",
      relevanceLabel: "对阿根廷/拉丁美洲的相关性",
      casos: [
        {
          id: "alfombras-tailandia",
          industria: "纺织/地毯",
          ubicacion: "泰国",
          titulo: "大型地毯制造商自动化仓库",
          empresa: "领先纺织制造商·亚太地区",
          sistema: "AS/RS单元负载 + DELIE堆垛机",
          resumen: "一家大型地毯制造商需要在不扩建面积的情况下将存储容量提高三倍。实施了配备4台双柱堆垛机的ASRS系统，并集成到现有ERP的WMS。",
          metricas: [{ val: "×3", sub: "容量" }, { val: "99.7%", sub: "准确率" }, { val: "-60%", sub: "占地面积" }],
          tecnologias: ["DELIE堆垛机", "集成WMS", "标准托盘"],
          relevancia: "阿根廷纺织业，尤其是科尔多瓦和布宜诺斯艾利斯，面临同样的密度挑战。此案例证明了2,000-8,000平方米仓库的可行性。"
        },
        {
          id: "licores-china",
          industria: "饮料/烈酒",
          ubicacion: "中国",
          titulo: "高端烈酒仓库自动化配送中心",
          empresa: "高端烈酒生产商·中国",
          sistema: "托盘穿梭 + DELIE迷你货架",
          resumen: "在15,000平方米配送中心整合了组合ASRS系统（大批量库存用托盘穿梭，箱拣选用迷你货架）。发货时间减少75%。",
          metricas: [{ val: "-75%", sub: "发货时间" }, { val: "15K", sub: "位置" }, { val: "24/7", sub: "运营" }],
          tecnologias: ["DELIE托盘穿梭", "迷你货架", "输送机", "WMS"],
          relevancia: "门多萨、圣胡安和库约的葡萄酒和饮料行业可以复制此模式，用于高季节性分销。"
        },
        {
          id: "farmaceutica-tcm",
          industria: "制药/传统医学",
          ubicacion: "中国",
          titulo: "传统医学实验室自动化仓库",
          empresa: "认证制药实验室·中国",
          sistema: "迷你货架AS/RS + DELIE制药WMS",
          resumen: "在GMP法规下实施带有批次和有效期控制的迷你货架。从原材料入库到成品发货的全程可追溯。",
          metricas: [{ val: "100%", sub: "可追溯性" }, { val: "-40%", sub: "错误" }, { val: "GMP", sub: "合规" }],
          tecnologias: ["迷你货架ASRS", "GMP WMS", "批次追踪", "温度控制"],
          relevancia: "阿根廷制药实验室（ANMAT）需要同等的可追溯性。该系统无需重大重新设计即可适应当地法规。"
        },
        {
          id: "farmaceutica-temperatura",
          industria: "制药/冷链",
          ubicacion: "欧洲",
          titulo: "制药配送冷链仓库",
          empresa: "跨国制药分销商·欧洲",
          sistema: "DELIE冷链ASRS",
          resumen: "专为2-8°C存储设计的ASRS系统，每个位置实时温度控制。与同等手动存储相比，能耗减少45%。",
          metricas: [{ val: "2–8°C", sub: "精确控制" }, { val: "-45%", sub: "能耗" }, { val: "99.9%", sub: "可用性" }],
          tecnologias: ["冷链ASRS", "物联网监控", "制药WMS"],
          relevancia: "阿根廷制药冷链至关重要。此案例直接适用于布宜诺斯艾利斯市、大布宜诺斯艾利斯和科尔多瓦的分销商和实验室。"
        },
        {
          id: "quimica-sulfato",
          industria: "工业化工",
          ubicacion: "中国",
          titulo: "散装工业化工原料自动化管理",
          empresa: "工业硫酸盐生产商·中国",
          sistema: "DELIE重型单元负载AS/RS",
          resumen: "大包和托盘格式原材料的自动化存储，用于连续生产。系统管理自动FIFO和无需手动干预的生产线补货。",
          metricas: [{ val: "-50%", sub: "周期时间" }, { val: "FIFO", sub: "自动" }, { val: "+35%", sub: "吞吐量" }],
          tecnologias: ["单元负载ASRS", "大包处理", "集成WMS"],
          relevancia: "巴伊亚布兰卡和罗萨里奥的石化和化工行业可以实施此模式，用于原材料管理和向生产的发货。"
        },
        {
          id: "quimica-peligrosos",
          industria: "化工/危险材料",
          ubicacion: "欧洲",
          titulo: "ATEX危险品自动化仓库",
          empresa: "化工特种品制造商·欧洲",
          sistema: "DELIE ATEX ASRS + 隔离系统",
          resumen: "ATEX认证的ASRS系统，用于储存易燃和有毒产品。包括按危险等级自动隔离和不相容性管理。",
          metricas: [{ val: "ATEX", sub: "认证" }, { val: "0", sub: "事故" }, { val: "-70%", sub: "操作员风险" }],
          tecnologias: ["ATEX ASRS", "自动隔离", "危险品WMS"],
          relevancia: "阿根廷危险材料法规（IRAM、APN）需要类似控制。大布宜诺斯艾利斯和科尔多瓦的化工、油漆和农化行业。"
        },
        {
          id: "titanio",
          industria: "冶金/特种材料",
          ubicacion: "亚洲",
          titulo: "钛和合金管理自动化仓库",
          empresa: "航空航天材料供应商·亚洲",
          sistema: "垂直存储 + DELIE ASRS",
          resumen: "按材料证书追踪的钛和特种合金型材、管材和板材的管理。控制环境条件，每件产品全程可追溯。",
          metricas: [{ val: "100%", sub: "可追溯性" }, { val: "-55%", sub: "搜索时间" }, { val: "∞", sub: "安全性" }],
          tecnologias: ["垂直存储", "二维码/RFID", "材料WMS"],
          relevancia: "对于阿根廷冶金行业（Tenaris等）和航空航天供应商：带有质量证书的材料可追溯性。"
        },
        {
          id: "lubricantes",
          industria: "润滑油/石化",
          ubicacion: "亚洲",
          titulo: "工业润滑油自动化配送中心",
          empresa: "工业润滑油分销商·亚洲",
          sistema: "托盘穿梭 + DELIE输送机",
          resumen: "多格式容器（桶、铁桶、IBC）润滑油高速分销。系统以99.8%的准确率处理每小时1,200次移动。",
          metricas: [{ val: "1,200", sub: "次/小时" }, { val: "99.8%", sub: "准确率" }, { val: "-40%", sub: "人员" }],
          tecnologias: ["托盘穿梭", "输送系统", "多格式WMS"],
          relevancia: "阿根廷中大型规模润滑油和石化产品分销商。"
        },
        {
          id: "manufactura-gran-escala",
          industria: "制造/大规模生产",
          ubicacion: "中国",
          titulo: "大规模准时制制造中央仓库",
          empresa: "跨国零部件制造商·中国",
          sistema: "完整AS/RS + AGV + DELIE WMS",
          resumen: "集成物流中心为12条生产线提供准时制供应。WMS协调AGV、ASRS和输送机，确保生产线零部件的延迟低于15分钟。",
          metricas: [{ val: "<15分钟", sub: "JIT延迟" }, { val: "12", sub: "JIT生产线" }, { val: "-65%", sub: "在制品" }],
          tecnologias: ["ASRS单元负载", "AGV车队", "集成输送机", "JIT WMS"],
          relevancia: "布宜诺斯艾利斯、科尔多瓦和罗萨里奥的串行生产工业园区可以实施此模式，减少在制品并改善OEE。"
        }
      ]
    },

    chile: {
      metaTitle: "智利仓库自动化 | ASRS DELIE系统 | STOKA",
      metaDesc: "适用于智利仓库的DELIE物流自动化系统。ASRS、操控机器人和WMS软件，提供本地技术支持。申请免费诊断。",
      breadcrumbHome: "首页",
      breadcrumb: "智利",
      heroTag: "智利·仓库自动化",
      heroH1_a: "智利",
      heroH1_b: "自动化",
      heroSub: "适用于智利仓库的DELIE ASRS系统和操控机器人。在国内提供诊断、工程和实施技术支持。",
      heroBtnPrimary: "预约诊断",
      heroBtnSecondary: "查看产品目录",
      stats: [
        { v: "2+", l: "智利项目" },
        { v: "24/7", l: "技术支持" },
        { v: "-60%", l: "成本降低" },
        { v: "10+", l: "年经验" }
      ],
      whyTag: "本地优势",
      whyH2: "为什么在智利选择STOKA？",
      whyItems: [
        "全程西班牙语诊断和工程项目，无需国际中间商。",
        "直接从DELIE工厂进口，本地清关管理，无额外费用。",
        "圣地亚哥、瓦尔帕莱索、康塞普西翁等城市提供现场技术支持。",
        "符合智利工业安全法规（SUSESO等）要求。",
        "与智利使用的ERP和WMS系统（SAP、Oracle、本地系统）集成。",
        "与生产投资促进法兼容的融资方案。"
      ],
      sectorsTag: "行业",
      sectorsH2: "我们在智利自动化的行业",
      sectorViewSolution: "查看解决方案",
      sectors: [
        { title: "矿业与供应", desc: "大型矿业运营的备件、耗材和PPE管理。", url: "/industrias/manufactura" },
        { title: "食品零售", desc: "新鲜、冷冻和大众消费品配送中心。", url: "/industrias/alimentos-bebidas" },
        { title: "制药健康", desc: "药品和医疗器械的批次、有效期和冷链控制。", url: "/industrias/farmaceutica" },
        { title: "物流配送", desc: "寻求为多个客户自动化其设施的物流运营商。", url: "/industrias/distribucion" },
        { title: "工业制造", desc: "连续制造工厂的原材料、成品和在制品仓库。", url: "/industrias/manufactura" },
        { title: "葡萄酒饮料", desc: "葡萄酒和饮料行业的瓶装、箱装和散装仓库。", url: "/industrias/alimentos-bebidas" }
      ],
      systemsTag: "可用系统",
      systemsH2: "智利可用技术",
      systems: [
        { name: "AS/RS单元负载（堆垛机）", desc: "适用于标准托盘。中大型仓库的高密度和吞吐量。" },
        { name: "迷你货架AS/RS", desc: "适用于箱子、托盘和大批量拣选。制药、电商和备件的理想选择。" },
        { name: "托盘穿梭系统", desc: "同质产品的高密度存储。根据运营选择FIFO或LIFO。" },
        { name: "WMS/管理软件", desc: "可与SAP、Oracle和其他市场ERP集成的仓库管理软件。" }
      ],
      faqH2: "常见问题——智利",
      faq: [
        { q: "STOKA在智利有实体存在吗？", a: "是的。我们在智利拥有商业和技术代表处，负责诊断、销售、安装和售后支持。无需从阿根廷管理。" },
        { q: "DELIE系统是否符合智利法规？", a: "是的。系统适应智利现行工业安全和建筑标准，包括永久性装置的特定抗震要求。" },
        { q: "智利项目的交货时间是多少？", a: "取决于规模。中型项目（5,000-20,000个位置）从签订合同到交货需要8-14个月，包括制造、进口和安装。" },
        { q: "可以在智利为自动化项目融资吗？", a: "可以。我们提供租赁、银行信贷选项，以及在某些情况下提供CORFO和其他公共机构的投资促进信贷额度。" }
      ]
    },

    delie: {
      metaTitle: "DELIE阿根廷 | 官方代表 | STOKA",
      metaDesc: "STOKA是DELIE在阿根廷和智利的独家代理商。全球领先的ASRS系统，提供本地技术支持、本地融资和工厂质保。",
      breadcrumbHome: "首页",
      breadcrumb: "DELIE阿根廷",
      heroTag: "DELIE在阿根廷·独家代理",
      heroH1_a: "DELIE技术",
      heroH1_b: "本地支持",
      heroSub: "我们在阿根廷和智利进口、实施并支持DELIE ASRS系统。直接访问制造商，提供一流的本地技术支持。",
      metrics: [
        { value: "30+", label: "DELIE所在国家" },
        { value: "2,000+", label: "已安装项目" },
        { value: "30年", label: "全球经验" },
        { value: "100%", label: "本地支持" }
      ],
      capacidadesTag: "DELIE能力",
      capacidadesH2: "完整自动化产品线",
      capacidadesSub: "DELIE为物流自动化全领域制造和设计解决方案。",
      capacidades: [
        { title: "托盘和箱子AS/RS", desc: "堆垛机、托盘穿梭和迷你货架，用于任何规模的自动化高密度存储。" },
        { title: "集成WMS软件", desc: "可与SAP、Oracle和任何ERP集成的专有WMS。实时控制库存、批次和可追溯性。" },
        { title: "经认证的全球存在", desc: "在欧洲、亚洲、美洲和大洋洲获得认证的装置。超过2,000个项目，可用性超过99%。" },
        { title: "温控解决方案", desc: "用于正负冷、制药冷链和低温存储的ASRS系统。" }
      ],
      globalTag: "全球存在",
      globalPresence: "DELIE在5大洲30多个国家运营",
      globalStats: [
        { value: "30+", label: "国家" },
        { value: "2,000+", label: "项目" },
        { value: "30年", label: "经验" },
        { value: "5", label: "大洲" }
      ],
      whyTag: "本地优势",
      whyH2: "为什么选择有本地支持的DELIE",
      whyItems: [
        { label: "无国际中间商", desc: "直接从独家代理商购买。无分销商加价，享有工厂价格和直接支持。" },
        { label: "用您的语言进行工程", desc: "整个过程——诊断、工程、安装和支持——全程西班牙语，由本地工程师操作。" },
        { label: "备件库存充足", desc: "我们在阿根廷保持关键备件库存，以最小化任何故障造成的停机时间。" },
        { label: "与本地系统集成", desc: "拥有与阿根廷和智利最广泛使用的ERP和会计系统（SAP、Oracle、Tango等）集成的经验。" }
      ],
      tcoTag: "TCO/投资回报",
      tcoText: "具有本地支持的DELIE系统的总拥有成本（TCO）明显低于同等的欧洲或北美系统，特别是考虑到响应时间、技术人员差旅费和备件可用性。",
      comparativaTag: "比较",
      comparativaH2: "DELIE与全球替代品对比",
      comparativaColAspect: "方面",
      comparativaColDelie: "DELIE + STOKA",
      comparativaColOther: "其他品牌",
      comparativaNote: "* 基于在拉美实施的项目。结果可能因规模和运营类型而异。",
      comparativa: [
        { aspecto: "阿根廷本地技术支持", delie: true, otro: false },
        { aspecto: "本地备件库存", delie: true, otro: false },
        { aspecto: "西班牙语工程服务", delie: true, otro: "部分" },
        { aspecto: "本地货币融资", delie: true, otro: false },
        { aspecto: "直接工厂质保", delie: true, otro: "部分" },
        { aspecto: "本地ERP集成（SAP、Tango）", delie: true, otro: "部分" },
        { aspecto: "对拉美有竞争力的价格", delie: true, otro: false },
        { aspecto: "符合IRAM/本地法规", delie: true, otro: "部分" },
        { aspecto: "超过2,000个已安装项目", delie: true, otro: "不定" },
        { aspecto: "现场操作员培训", delie: true, otro: false }
      ],
      faqTag: "常见问题",
      faqH2: "DELIE在阿根廷——常见问题",
      faq: [
        { q: "STOKA是DELIE在阿根廷的唯一代理商吗？", a: "是的。STOKA集团是DELIE在阿根廷和智利的独家代理和分销商。这些国家中任何DELIE系统的报价都必须通过STOKA进行。" },
        { q: "DELIE系统在阿根廷有工厂质保吗？", a: "是的。通过STOKA购买可获得本地支持的工厂质保。我们直接与DELIE处理任何质保索赔，无需额外中间商。" },
        { q: "我可以参观阿根廷的参考装置吗？", a: "我们在拉丁美洲和亚洲有可供参观的项目参考。根据客户及其NDA，我们协调技术参观，让您可以看到系统的实际运行情况。" },
        { q: "DELIE与其他亚洲品牌有什么区别？", a: "DELIE有30多年的历史，拥有国际认证（CE、ISO），并在欧洲和日本等苛刻市场运营，这些市场要求与传统欧洲品牌相同的标准。差异在于成本结构，而非技术质量。" }
      ]
    },

    alternativaEconomica: {
      metaTitle: "欧洲ASRS系统经济替代品 | STOKA",
      metaDesc: "DELIE ASRS系统与欧洲品牌技术相同，但对阿根廷和拉美地区价格更具竞争力。含本地融资和技术支持。",
      breadcrumbHome: "首页",
      breadcrumb: "ASRS经济替代品",
      heroTag: "欧洲ASRS替代品",
      heroH1_a: "相同技术",
      heroH1_b: "更低",
      heroH1_c: "总成本",
      heroSub: "DELIE ASRS系统提供与欧洲领先品牌相同的功能和可靠性，采购成本低至40%，并在阿根廷提供本地技术支持。",
      heroStats: [
        { n: "-40%", l: "相比欧洲品牌" },
        { n: "99%+", l: "可用性" },
        { n: "30+", l: "国家" },
        { n: "2,000+", l: "项目" }
      ],
      heroBtnPrimary: "申请报价",
      heroBtnSecondary: "查看产品目录",
      whyTag: "为什么更贵",
      whyH2: "为什么欧洲系统在阿根廷更贵？",
      whyCosts: [
        { title: "间接分销", desc: "许多欧洲品牌通过区域分销商销售，额外加价使最终价格上涨。" },
        { title: "物流和关税", desc: "从欧洲进口的成本包括高关税、长期保险和更昂贵的运费。" },
        { title: "高成本支持", desc: "售后支持需要从欧洲带来技术人员，或向对系统没有真正专业知识的本地代表付费。" }
      ],
      comparisonTag: "技术比较",
      comparisonH2: "DELIE与欧洲品牌对比",
      comparisonSub: "阿根廷和拉美项目的技术和商业特点比较。",
      comparisonColOther: "欧洲品牌",
      comparisonPartial: "部分",
      comparisonNote: "* 基于拉美可比项目。结果因规模和运营类型而异。",
      comparison: [
        { label: "可用性>99%", europeo: true },
        { label: "本地24/7技术支持", europeo: false },
        { label: "对拉美有竞争力的价格", europeo: false },
        { label: "阿根廷备件库存", europeo: false },
        { label: "本地货币融资", europeo: false },
        { label: "本地ERP集成（SAP、Tango）", europeo: "parcial" }
      ],
      productsTag: "产品",
      productsH2: "阿根廷可用系统",
      productsViewAll: "查看完整产品目录 →",
      products: [
        { name: "单元负载AS/RS", tag: "托盘", specs: ["最高30米", "双深度", "高速"] },
        { name: "托盘穿梭", tag: "高密度", specs: ["FIFO / LIFO", "多深度", "无中间通道"] },
        { name: "迷你货架AS/RS", tag: "箱子/拣选", specs: ["自动拣选", "高精度", "制药和电商"] },
        { name: "查看完整产品目录", tag: "全部", specs: ["垂直", "AGV", "WMS软件", "咨询"] }
      ],
      tcoTag: "TCO/ROI",
      tcoH2_a: "最低",
      tcoH2_b: "总",
      tcoH2_c: "拥有成本",
      tcoSub: "不只是购买价格：考虑15-20年运营的总成本。有本地支持和现货备件，DELIE系统的TCO明显更低。",
      tcoLinkLabel: "查看可用税收优惠 →",
      tcoStats: [
        { num: "-40%", desc: "与阿根廷项目同等欧洲品牌相比的采购价格" },
        { num: "-60%", desc: "售后支持成本：本地技术人员vs.从欧洲差旅" },
        { num: "+20%", desc: "本地货币融资和可用本地税收优惠带来的额外ROI" }
      ],
      faqTag: "常见问题",
      faqH2: "关于比较的问题",
      faq: [
        { q: "DELIE与SSI Schäfer或Mecalux等欧洲品牌质量相同吗？", a: "是的。DELIE有30多年历史，拥有CE和ISO认证，并在欧洲和日本等市场运营，这些市场要求与传统欧洲品牌相同的标准。差异在于成本结构，而非技术质量。" },
        { q: "长期技术支持怎么样？", a: "STOKA在阿根廷维持一支经DELIE认证的本地工程师团队，并备有关键备件库存。售后支持在本地得到保障，无需依赖海外技术人员。" },
        { q: "决定之前可以参观参考装置吗？", a: "可以。我们可以协调在阿根廷和拉丁美洲参考装置的技术参观，需事先与客户达成协议。我们也有欧洲和亚洲的项目参考。" },
        { q: "阿根廷税收优惠适用于DELIE系统吗？", a: "是的。DELIE系统符合加速折旧制度、租赁资格，很多情况下还符合资本货物法的税收抵免。我们的团队就每种情况下的可用选项提供建议。" },
        { q: "获得报价的流程是什么？", a: "流程从对您的运营进行免费诊断开始（流程、数量、SKU）。有了这些信息，我们准备详细的技术商业提案，含预计ROI，无需任何费用或承诺。" }
      ]
    }
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Apply patches
// ─────────────────────────────────────────────────────────────────────────────
for (const [lang, newData] of [['es', es_new], ['en', en_new], ['zh', zh_new]]) {
  const path = resolve(BASE, `${lang}.json`);
  const existing = JSON.parse(readFileSync(path, 'utf8'));
  const merged = deepMerge(existing, newData);
  writeFileSync(path, JSON.stringify(merged, null, 2), 'utf8');
  console.log(`✓ ${lang}.json patched`);
}

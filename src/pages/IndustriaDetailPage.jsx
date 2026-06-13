import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { INDUSTRIES } from './IndustriasPage';
import { ArrowRight, ArrowLeft, CheckCircle, X, ChevronRight } from 'lucide-react';
import { LangLink, useLangNavigate } from '../lib/i18n-utils';
import { SeoHead } from '../lib/SeoHead';

const INDUSTRY_DATA = {
  'e-commerce-retail': {
    hero: 'Fulfillment automatizado para el pico de demanda.',
    description: 'El e-commerce exige velocidad, exactitud y escalabilidad instantánea. En Black Friday, la demanda puede multiplicarse 5x en horas. Los almacenes manuales no pueden responder — un sistema ASRS sí, sin contratar personal extra.',
    highlight: '"La diferencia entre vender en un pico de demanda y perder ventas está en la velocidad de despacho."',
    benefits: [
      { title: 'Picking 3x más rápido', desc: 'Robots lanzadera y AMR eliminan los recorridos y reducen el tiempo de preparación por orden.' },
      { title: '99,9% exactitud', desc: 'WMS con confirmación automática y pick-to-light elimina errores humanos en selección.' },
      { title: 'Escalado instantáneo', desc: 'Absorbé picos estacionales sin contratar personal adicional. El sistema escala solo.' },
      { title: 'Devoluciones automáticas', desc: 'Gestión de devoluciones con reubicación automática en inventario en tiempo real.' },
    ],
    challenges: ['Picos de demanda extremos imposibles de cubrir con personal', 'Alta tasa de error en picking manual con SKUs similares', 'Devoluciones desorganizadas que generan pérdidas', 'Costo de mano de obra que crece igual que el volumen', 'Falta de espacio para ampliar el catálogo'],
    solutions: ['Robots lanzadera y AMR para picking de alta velocidad', 'WMS con pick-to-light y confirmación automática', 'Gestión automática de devoluciones e inventario en tiempo real', 'Escalabilidad sin nuevas contrataciones', 'Almacenamiento vertical que multiplica la capacidad del m²'],
    stats: [{ value: '3x', label: 'Velocidad de picking' }, { value: '99.9%', label: 'Exactitud de órdenes' }, { value: '-60%', label: 'Costo de labor' }, { value: '5x', label: 'Densidad de almacenaje' }],
    products: [
      { name: 'Robot Lanzadera Shuttle', url: '/catalogo/asrs/shuttle' },
      { name: 'Transelevador MiniLoad', url: '/catalogo/asrs/miniload' },
      { name: 'Sistema de Picking Goods-to-Person', url: '/catalogo/robots-manipulacion/picking' },
      { name: 'WMS — Software de gestión', url: '/catalogo/software/wms' },
    ],
  },
  'logistica-3pl': {
    hero: 'Operación multicliente con máxima eficiencia.',
    description: 'Los operadores 3PL necesitan flexibilidad extrema: múltiples clientes, múltiples tipos de producto y contratos cambiantes. La automatización permite ofrecer más valor a cada cliente sin escalar costos fijos.',
    highlight: '"Un operador 3PL automatizado puede servir el doble de clientes con la misma infraestructura."',
    benefits: [
      { title: 'Multi-cliente en un almacén', desc: 'WMS con segregación lógica y física para múltiples clientes sin mezclas ni errores.' },
      { title: 'Slots dinámicos', desc: 'Reconfigurá asignaciones de espacio sin mover físicamente la mercadería.' },
      { title: 'Reportes por cliente', desc: 'Dashboard en tiempo real con KPIs individuales por cliente para mayor transparencia.' },
      { title: 'Operación 24/7', desc: 'Robots que no se cansan ni varían su productividad en el turno nocturno.' },
    ],
    challenges: ['Gestión de múltiples clientes en el mismo espacio sin mezclas', 'Contratos de corto plazo que requieren reconfiguración rápida', 'Presión de márgenes por competencia creciente', 'Necesidad de reportes por cliente en tiempo real', 'Personal difícil de retener en temporada alta'],
    solutions: ['WMS multicliente con segregación lógica y física', 'Slots dinámicos sin movimiento físico', 'Dashboard por cliente con KPIs en tiempo real', 'Robots que operan 24/7 sin variación de productividad', 'Escalabilidad sin inversión en nuevos m²'],
    stats: [{ value: '40%', label: 'Reducción de espacio' }, { value: '5x', label: 'Densidad de almacenaje' }, { value: '24/7', label: 'Operación continua' }, { value: '-45%', label: 'Costo operativo' }],
    products: [
      { name: 'Transelevador MiniLoad', url: '/catalogo/asrs/miniload' },
      { name: 'Pallet Shuttle — Robot Lanzadera', url: '/catalogo/asrs/shuttle' },
      { name: 'WMS — Gestión multicliente', url: '/catalogo/software/wms' },
      { name: 'Transportadores y Sorters', url: '/catalogo/equipo-transporte/transportadores' },
    ],
  },
  manufactura: {
    hero: 'Intralogística sincronizada con tu línea de producción.',
    description: 'En manufactura, cada minuto de parada de línea tiene un costo enorme. La automatización del almacén de insumos garantiza el suministro just-in-time a cada estación sin errores ni demoras.',
    highlight: '"Cada parada de línea por falta de materiales cuesta entre $500 y $5.000 USD por hora."',
    benefits: [
      { title: 'Suministro JIT garantizado', desc: 'Almacén automático sincronizado con MES/ERP para despacho bajo demanda a cada estación.' },
      { title: 'Kanban digital', desc: 'Reposición automática de insumos sin órdenes manuales ni riesgo de quiebre de stock.' },
      { title: 'Trazabilidad de lotes', desc: 'Número de serie y lote registrado en cada movimiento para auditorías de calidad totales.' },
      { title: 'Reducción de WIP', desc: 'Stock en proceso minimizado con despacho preciso y en el momento exacto que la línea lo necesita.' },
    ],
    challenges: ['Paradas de línea por falta de insumos o repuestos', 'Tiempo perdido buscando materiales en el almacén', 'Dificultad para implementar kanban y JIT con stock manual', 'Trazabilidad de lotes de producción incompleta', 'Stock inmovilizado y WIP excesivo'],
    solutions: ['Almacén automático sincronizado con MES/ERP', 'Despacho automático a línea bajo demanda', 'Kanban digital con reposición automática', 'Trazabilidad de número de serie y lote en cada movimiento', 'Reducción de WIP y stock inmovilizado'],
    stats: [{ value: '-35%', label: 'Tiempo de búsqueda' }, { value: '100%', label: 'Trazabilidad de lotes' }, { value: '+20%', label: 'OEE de planta' }, { value: '-25%', label: 'Stock WIP' }],
    products: [
      { name: 'Transelevador Unit-Load', url: '/catalogo/asrs/unit-load' },
      { name: 'Transelevador MiniLoad', url: '/catalogo/asrs/miniload' },
      { name: 'WCS — Control de almacén', url: '/catalogo/software/wcs' },
      { name: 'Transportadores Industriales', url: '/catalogo/equipo-transporte/transportadores' },
    ],
  },
  'alimentos-bebidas': {
    hero: 'FIFO garantizado e inocuidad en cada movimiento.',
    description: 'La industria de alimentos y bebidas tiene requisitos de inocuidad no negociables. El FIFO automático, la trazabilidad de lote y las alertas de vencimiento son nativas en los sistemas DELIE.',
    highlight: '"Un retiro de mercado bien gestionado con trazabilidad completa puede ser la diferencia entre una multa y un cierre."',
    benefits: [
      { title: 'FIFO 100% garantizado', desc: 'El WMS asegura que siempre sale primero el producto más antiguo, sin depender del operario.' },
      { title: 'Trazabilidad por lote', desc: 'Rastreá cualquier unidad desde su ingreso hasta su despacho con fecha, lote y destino.' },
      { title: 'Alertas de vencimiento', desc: 'El sistema prioriza automáticamente productos próximos a vencer para eliminar mermas.' },
      { title: 'Audit-ready', desc: 'Registros automáticos en formato GS1 para certificaciones FSSC 22000 y BRC.' },
    ],
    challenges: ['Mantenimiento de FIFO en almacenes manuales con alta rotación', 'Trazabilidad de lote para retiros de mercado', 'Control de temperatura en cámaras frigoríficas', 'Certificaciones que requieren registros exhaustivos', 'Mermas por vencimiento de productos no rotados'],
    solutions: ['FIFO automático garantizado por el WMS en cada salida', 'Trazabilidad completa por lote, elaboración y vencimiento', 'Robots que operan entre -5°C y +10°C', 'Registros automáticos para auditorías', 'Alertas de vencimiento y priorización automática'],
    stats: [{ value: 'FIFO', label: 'Garantizado 100%' }, { value: '0', label: 'Mermas por vencimiento' }, { value: 'GS1', label: 'Compatible' }, { value: 'FSSC', label: 'Audit-ready' }],
    products: [
      { name: 'AS/RS Cámara Fría', url: '/catalogo/asrs/camara-frio' },
      { name: 'WMS con FEFO/FIFO automático', url: '/catalogo/software/wms' },
      { name: 'Transportadores Industriales', url: '/catalogo/equipo-transporte/transportadores' },
      { name: 'Módulos VLM para picking', url: '/catalogo/almacenamiento-vertical/vlm' },
    ],
  },
  farmaceutica: {
    hero: 'GMP, FEFO y trazabilidad regulatoria nativa.',
    description: 'La industria farmacéutica opera bajo las regulaciones más exigentes del mundo. Los sistemas DELIE están diseñados para cumplir con GMP, 21 CFR Part 11 y las normativas de ANMAT sin configuración adicional.',
    highlight: '"En farmacéutica, el compliance no es opcional. El sistema tiene que garantizarlo por diseño, no por proceso."',
    benefits: [
      { title: 'GMP by design', desc: 'Registro automático de cada movimiento con usuario, timestamp y ubicación para audit trail completo e inmutable.' },
      { title: 'FEFO automático', desc: 'El sistema prioriza por fecha de vencimiento en cada egreso sin intervención del operario. Cumplimiento garantizado 100%.' },
      { title: 'Temperatura controlada', desc: 'Zonas diferenciadas para refrigerados (2-8°C), controlados (15-25°C) y congelados (-20°C) dentro del mismo depósito.' },
      { title: 'Control de acceso por rol', desc: 'Acceso restringido por zona y tipo de operación con segundo factor para productos controlados. Compatible con 21 CFR Part 11.' },
      { title: 'Serialización ANMAT', desc: 'Módulo de trazabilidad unitaria que cumple los requisitos de serialización farmacéutica de ANMAT en Argentina.' },
      { title: 'Documentación IQ/OQ/PQ', desc: 'DELIE entrega DQ, FS y DS preelaborados. STOKA acompaña el proceso de calificación para cumplir plazos regulatorios.' },
    ],
    challenges: ['Cumplimiento GMP con audit trail inmutable en cada movimiento', 'FEFO estricto con múltiples lotes y fechas de vencimiento', 'Control de temperatura y humedad con registros continuos', 'Acceso controlado y trazabilidad de operadores para 21 CFR', 'Serialización por unidad para trazabilidad ANMAT', 'Proceso de calificación IQ/OQ/PQ largo y costoso'],
    solutions: ['WMS GMP-compliant con audit trail de usuario y timestamp', 'FEFO automático con alertas de vencimiento por lote', 'Zonas de temperatura diferenciada con monitoreo continuo', 'Control de acceso por rol con segundo factor para controlados', 'Módulo de serialización unitaria compatible con ANMAT', 'Documentación de validación DQ/FS/DS preelaborada por DELIE'],
    stats: [{ value: 'GMP', label: 'Compliant' }, { value: 'FEFO', label: 'Automático' }, { value: 'IQ/OQ/PQ', label: 'Documentado' }, { value: '100%', label: 'Audit trail' }],
    products: [
      { name: 'AS/RS Cámara Fría (GxP)', url: '/catalogo/asrs/camara-frio' },
      { name: 'Transelevador MiniLoad', url: '/catalogo/asrs/miniload' },
      { name: 'WMS con módulo GMP', url: '/catalogo/software/wms' },
      { name: 'Módulos VLM para controlados', url: '/catalogo/almacenamiento-vertical/vlm' },
    ],
  },
  'mineria-oil-gas': {
    hero: 'Repuestos críticos disponibles en minutos, no horas.',
    description: 'En minería y oil & gas, cada hora de equipo parado puede costar decenas de miles de dólares. La disponibilidad inmediata de repuestos críticos es la diferencia entre una operación rentable y una crisis.',
    highlight: '"Una parada de equipos mineros cuesta entre $10.000 y $100.000 USD por hora. El almacén automatizado lo previene."',
    benefits: [
      { title: 'Búsqueda en segundos', desc: 'El WMS localiza cualquier repuesto entre miles de SKUs en menos de 2 segundos.' },
      { title: 'Stock centralizado', desc: 'Visibilidad en tiempo real de todo el inventario, eliminando duplicados y stock fantasma.' },
      { title: 'Condiciones extremas', desc: 'Sistemas certificados para polvo, vibración y temperaturas extremas propias del sector.' },
      { title: 'Mínimo personal', desc: 'Despacho automatizado que opera con muy poco personal incluso en locaciones remotas.' },
    ],
    challenges: ['Miles de SKUs de repuestos difíciles de localizar', 'Paradas de equipos por repuestos no encontrados a tiempo', 'Stock duplicado por falta de visibilidad centralizada', 'Operación en condiciones climáticas extremas', 'Personal escaso en ubicaciones remotas'],
    solutions: ['WMS con búsqueda de repuesto en menos de 2 segundos', 'Stock centralizado con visibilidad en tiempo real', 'Eliminación de duplicados y stock fantasma', 'Sistemas certificados para entornos severos', 'Despacho automatizado con mínimo personal'],
    stats: [{ value: '0', label: 'Errores de despacho' }, { value: '-30%', label: 'Stock inmovilizado' }, { value: '24/7', label: 'Disponibilidad' }, { value: '<2min', label: 'Tiempo de recupero' }],
    products: [
      { name: 'Módulos VLM — alta densidad', url: '/catalogo/almacenamiento-vertical/vlm' },
      { name: 'Carrusel Vertical automatizado', url: '/catalogo/almacenamiento-vertical/carruseles' },
      { name: 'WMS para gestión de repuestos', url: '/catalogo/software/wms' },
      { name: 'Transelevador Unit-Load', url: '/catalogo/asrs/unit-load' },
    ],
  },
  'cadena-frio': {
    hero: 'Robots que operan a -30°C sin exposición de personal.',
    description: 'Las cámaras frigoríficas son caras de construir y peligrosas para el personal. Los sistemas DELIE permiten maximizar cada metro cúbico disponible mientras eliminan la exposición de operarios al frío extremo.',
    highlight: '"Cada apertura de puerta de cámara pierde entre 5% y 15% de la energía acumulada. Automatizarlo reduce ese costo un 40%."',
    benefits: [
      { title: 'Operación a -30°C', desc: 'Robots y transelevadores certificados para funcionar en frío extremo sin presencia humana.' },
      { title: 'Máxima densidad', desc: 'Almacenaje vertical que triplica la capacidad del metro cuadrado de cámara existente.' },
      { title: 'Menos aperturas', desc: 'Reducción de aperturas de puerta hasta el 90%, con ahorro energético de hasta 40%.' },
      { title: 'FIFO en frío', desc: 'FIFO automático sin que el operario tenga que ingresar a la cámara para verificar fechas.' },
    ],
    challenges: ['Alto costo energético de cámaras subutilizadas', 'Exposición del personal a temperaturas de -18°C a -30°C', 'Mermas por apertura frecuente de cámaras para verificar stock', 'FIFO imposible de controlar manualmente en frío', 'Costo elevado de construcción de nuevas cámaras'],
    solutions: ['Robots certificados que operan a -30°C sin presencia humana', 'Almacenaje vertical que triplica la capacidad de la cámara existente', 'Reducción de aperturas de puerta hasta el 90%', 'FIFO automático garantizado por el WMS', 'Ahorro energético de hasta 40% por menor intercambio térmico'],
    stats: [{ value: '-30°C', label: 'Temperatura mínima' }, { value: '0', label: 'Personal expuesto' }, { value: '+50%', label: 'Uso de cámara' }, { value: '-40%', label: 'Consumo energético' }],
    products: [
      { name: 'AS/RS Cámara Fría (-30°C)', url: '/catalogo/asrs/camara-frio' },
      { name: 'Pallet Shuttle — Robot Lanzadera', url: '/catalogo/asrs/shuttle' },
      { name: 'WMS con FIFO/FEFO automático', url: '/catalogo/software/wms' },
      { name: 'Transelevador Unit-Load', url: '/catalogo/asrs/unit-load' },
    ],
  },
};

const INDUSTRY_SEO = {
  'e-commerce-retail': `El canal online en Argentina y Chile creció más del 40% anual entre 2020 y 2024. Ese crecimiento no es solo oportunidad: es presión sobre los centros de fulfillment automatizados y los centros de distribución que tienen que despachar pedidos cada vez más rápido y a un costo por unidad cada vez menor. La preparación de pedidos automatizada —el proceso más intensivo en labor del e-commerce— es la que más se beneficia de la automatización: un sistema ASRS con robots lanzadera y transelevadores MiniLoad permite multiplicar el throughput sin multiplicar el plantel.

Los sistemas DELIE para e-commerce incluyen gestión de devoluciones automática —uno de los mayores dolores del canal online—, slotting dinámico que optimiza la ubicación de SKUs según el historial de ventas en tiempo real, y una interfaz WMS que se integra directamente con las plataformas de e-commerce más usadas en la región. Para empresas que operan un micro fulfillment center o una dark store automatizada, el sistema DELIE ofrece la densidad y velocidad que esos formatos exigen. El resultado: la bodega o depósito procesa el mismo volumen con menos personal, menos errores y más velocidad de despacho. En picos estacionales como Hot Sale o Black Friday, el sistema escala sin contratar personal de refuerzo.`,
  'logistica-3pl': `Los operadores logísticos 3PL en Argentina y Chile enfrentan una presión constante: los clientes exigen más servicios, más visibilidad y menores costos, mientras los márgenes se comprimen. La diferenciación competitiva real de un operador 3PL en este contexto viene de la tecnología para 3PL: el warehouse automation 3PL —visibilidad de inventario en tiempo real, reportes por cliente y operación 24/7— tiene una propuesta de valor que el resto no puede igualar con infraestructura manual.

La automatización del almacén o depósito 3PL permite además ofrecer servicios de valor agregado que antes eran inaccesibles: picking unitario a alta velocidad, gestión de devoluciones e-commerce, picking por temperatura para productos frescos o farmacéuticos, y automatización cross docking para flujos de alta rotación sin almacenaje intermedio. El WMS multicliente de DELIE permite que una misma bodega atienda simultáneamente a clientes con perfiles operativos muy distintos —consumo masivo, farmacéutica, textil— con inventarios completamente segregados y sin mezclas. Esta flexibilidad convierte al operador 3PL en un socio estratégico del cliente, no en un simple proveedor de espacio.`,
  manufactura: `En la industria manufacturera de Argentina y Chile, la intralogística industrial —la logística interna de la planta— es el cuello de botella que más impacta la eficiencia productiva. El almacén de materia prima automatizado y el abastecimiento a línea automatizado eliminan las paradas: una línea de producción que para por falta de insumos pierde entre USD 500 y USD 5.000 por hora. El buffer de producción sincronizado con el MES elimina ese riesgo.

El almacén o bodega de producto terminado automatizado resuelve el otro extremo: el despacho ágil y exacto de pedidos al canal de distribución. Con la logística interna de planta sincronizada con el ERP vía WCS, la preparación de cargas se inicia automáticamente sin intervención humana. La trazabilidad de lote y número de serie queda registrada en cada movimiento del depósito, agilizando auditorías y retiros de mercado.`,
  'alimentos-bebidas': `La industria de alimentos y bebidas en Argentina y Chile opera bajo una tensión permanente entre el costo de almacenamiento y los requisitos de inocuidad. Las grandes cadenas exigen trazabilidad alimentaria completa, fechas de vencimiento garantizadas y cero errores de identificación. El almacén automatizado de alimentos y la bodega automatizada de bebidas son la única forma de garantizar eso de forma consistente a escala industrial.

Los sistemas ASRS de DELIE para alimentos y bebidas incluyen módulo FEFO (First Expired, First Out) nativo en el WMS: en cada salida, el sistema elige automáticamente el producto con vencimiento más próximo sin depender del criterio del operario. Esto elimina las mermas por vencimiento, reduce el riesgo de recall y garantiza el cumplimiento de los requisitos de los grandes compradores.`,
  farmaceutica: `El almacén farmacéutico es el entorno más regulado de la industria logística. Las normativas nacionales (ANMAT en Argentina) e internacionales (FDA, EMA, WHO GDP) exigen trazabilidad completa de cada unidad desde su recepción hasta su despacho, control de temperatura y humedad con registros continuos, y acceso controlado por rol con audit trail inmutable.

El WMS GMP-compliant de DELIE cumple con 21 CFR Part 11, EU GMP Annex 11 y los requisitos de ANMAT. Para laboratorios, droguerías y distribuidores farmacéuticos en Argentina y Chile, la automatización de la droguería con STOKA incluye documentación IQ/OQ/PQ preelaborada que reduce significativamente el tiempo y el costo del proceso de calificación regulatoria.`,
  'mineria-oil-gas': `La industria minera y de oil & gas en Argentina (Vaca Muerta, minería en Mendoza, San Juan, Catamarca) y en Chile (norte minero: I a IV Región) comparte un desafío logístico específico: almacenes MRO automatizados y bodegas de insumos de la minera en ubicaciones remotas, con personal escaso y rotación alta. La gestión de repuestos en minería es crítica: una parada de equipo por falta de pieza puede costar USD 10.000 a USD 100.000 por hora.

Los sistemas VLM y carrusel vertical de DELIE para almacén MRO automatizado resuelven tres problemas simultáneamente: densifican el almacenamiento en el espacio disponible, reducen el personal necesario para operar el depósito, y localizan cualquier repuesto entre miles de SKUs en menos de 30 segundos.`,
  'cadena-frio': `La cadena de frío es uno de los sectores de más rápido crecimiento en automatización logística. El almacén frigorífico automatizado y la bodega refrigerada automatizada son la respuesta al costo creciente de la mano de obra en frío extremo.

El ASRS congelado de DELIE —el sistema para almacén a -30 grados— opera sin presencia de operarios dentro de la cámara. Los transelevadores y robots lanzadera tienen diseño especial: sellado hermético anticondensación, lubricación para frío extremo y calefacción interna de la electrónica.`,
};

const INDUSTRY_FAQ = {
  'e-commerce-retail': [
    { q: '¿Cuánto tiempo lleva implementar un sistema ASRS para e-commerce?', a: 'Un proyecto de automatización de almacén o bodega para e-commerce toma entre 4 y 8 meses desde la consulta inicial hasta el arranque operativo. La fase de ingeniería es simultánea a la fabricación del equipo, lo que comprime los plazos. STOKA gestiona el proyecto llave en mano desde el diseño hasta la capacitación del personal.' },
    { q: '¿Cómo maneja el sistema los picos de demanda como Black Friday?', a: 'El ASRS no requiere contratar personal adicional para absorber picos. El throughput se incrementa activando más robots o estaciones de picking. Un depósito automatizado puede gestionar 5x el volumen habitual sin cambios de infraestructura, algo imposible de lograr con operación manual en el mismo plazo.' },
    { q: '¿Qué velocidad de picking real puedo esperar en mi depósito?', a: 'Dependiendo del perfil de SKUs, los sistemas DELIE alcanzan entre 800 y 1.200 líneas por hora por estación, comparado con 150-200 líneas en picking manual.' },
    { q: '¿El WMS de DELIE se integra con mi ERP o plataforma de e-commerce?', a: 'Sí. El WMS tiene conectores nativos para SAP, Oracle, Microsoft Dynamics y APIs RESTful para cualquier sistema. La integración con plataformas como Shopify, VTEX o Magento es posible mediante middleware estándar.' },
  ],
  'logistica-3pl': [
    { q: '¿Puedo gestionar múltiples clientes en el mismo almacén o bodega automatizada?', a: 'Sí. El WMS soporta segregación lógica y física multi-cliente en el mismo depósito. Cada cliente tiene su propio inventario, reportes y KPIs separados sin necesidad de separar físicamente las zonas.' },
    { q: '¿Qué pasa si pierdo un cliente o cambia el contrato?', a: 'Los slots son dinámicos: podés reasignar espacio entre clientes sin mover físicamente la mercadería. Si un cliente disminuye su volumen, ese espacio queda disponible automáticamente.' },
    { q: '¿Cómo facturo el espacio y los movimientos a cada cliente en el depósito?', a: 'El WMS genera reportes detallados por cliente: posiciones ocupadas, entradas, salidas y órdenes procesadas. Estos datos se exportan en formatos estándar para facturación.' },
    { q: '¿Cuánto reduce la automatización el costo operativo en un depósito 3PL?', a: 'En operaciones 3PL típicas, la automatización reduce el costo de labor entre 40% y 55%. El sistema opera 24/7 sin variación de productividad ni costo adicional en temporada alta.' },
  ],
  manufactura: [
    { q: '¿Puedo integrar el almacén o bodega directamente con mi línea de producción?', a: 'Sí. Los sistemas DELIE se integran con el MES (Manufacturing Execution System) de la planta. Cuando la línea necesita un insumo, el MES envía la orden al WCS del depósito automáticamente.' },
    { q: '¿Qué pasa si hay un corte de energía durante la operación?', a: 'Los sistemas DELIE cuentan con UPS integrada y protocolos de recuperación automática. En caso de corte, el sistema registra la posición exacta de cada robot y se recupera desde el punto de interrupción sin pérdida de datos.' },
    { q: '¿Puedo implementar el sistema por fases sin parar la producción?', a: 'Sí. La implementación por fases es la estrategia habitual: primero el almacén de materias primas o el de producto terminado, sin tocar la línea de producción.' },
    { q: '¿Qué nivel de mantenimiento requiere el sistema en planta?', a: 'El mantenimiento preventivo equivale a 2-4 horas por mes para un sistema estándar. El WCS monitorea el estado de cada componente y emite alertas tempranas antes de que ocurra una falla.' },
  ],
  'alimentos-bebidas': [
    { q: '¿El sistema garantiza el FIFO automático en almacenes o bodegas de alimentos?', a: 'Sí, el FIFO es nativo. El WMS registra fecha de elaboración y vencimiento de cada lote al ingreso. En cada salida, el sistema elige automáticamente el producto con fecha de ingreso más antigua sin depender del criterio del operario.' },
    { q: '¿A qué temperaturas operan los robots para cámara frigorífica?', a: 'Los transelevadores y robots lanzadera de DELIE operan entre -5°C y +10°C en formato refrigerado y hasta -25°C en formato congelado. Cuentan con sellado hermético anticondensación y lubricación especial para frío.' },
    { q: '¿Cómo agiliza el sistema un retiro de mercado (recall)?', a: 'Con trazabilidad completa, un recall que normalmente toma días se ejecuta en minutos. El WMS localiza todos los depósitos con mercadería del lote afectado y bloquea automáticamente las salidas del stock comprometido.' },
    { q: '¿Qué certificaciones de calidad tiene el sistema para la industria alimentaria?', a: 'Los sistemas DELIE son compatibles con GS1, FSSC 22000 y BRC. El WMS genera registros en formato audit-ready que cumplen los requisitos de estas certificaciones.' },
  ],
  farmaceutica: [
    { q: '¿El sistema cumple con GMP y las normativas de ANMAT para almacenes farmacéuticos?', a: 'Sí. El WMS incluye módulo GMP que registra cada movimiento con usuario, timestamp, ubicación de origen y destino. Este audit trail cumple con 21 CFR Part 11, EU GMP Annex 11 y los requisitos de ANMAT.' },
    { q: '¿Cómo funciona el control de acceso por rol en la bodega o almacén farmacéutico?', a: 'Cada operario tiene credenciales únicas con permisos por zona, tipo de operación y producto. El sistema registra quién hizo qué y cuándo en cada movimiento.' },
    { q: '¿Se pueden crear zonas de temperatura diferenciada en el mismo depósito?', a: 'Sí. El sistema permite definir zonas lógicas con requisitos de temperatura específicos (2-8°C, 15-25°C, -20°C) dentro del mismo almacén. El monitoreo de temperatura es continuo con alertas automáticas ante desvíos.' },
    { q: '¿Cuánto tiempo lleva validar el sistema para GMP en un depósito farmacéutico?', a: 'La validación IQ/OQ/PQ toma entre 3 y 6 meses post-instalación. DELIE entrega documentación de validación (DQ, FS, DS) con el sistema.' },
    { q: '¿El sistema gestiona la serialización unitaria requerida por ANMAT?', a: 'Sí. El módulo de serialización del WMS lee y registra el código de barras o DataMatrix 2D de cada unidad en las operaciones de recepción, almacenamiento y despacho.' },
    { q: '¿Puede usarse el sistema en una droguería con habilitación GDP?', a: 'Sí. El WMS de DELIE ha sido calificado en instalaciones con habilitación GDP en Latinoamérica.' },
    { q: '¿Cómo se maneja la devolución de medicamentos vencidos o retirados del mercado?', a: 'El WMS tiene flujo específico de cuarentena y destrucción: los productos bloqueados se segregan lógicamente, con bloqueo de despacho automático y notificación al responsable regulatorio.' },
  ],
  'mineria-oil-gas': [
    { q: '¿El sistema funciona en ambientes con polvo, vibración y temperaturas extremas?', a: 'Sí. Los equipos DELIE para minería y oil & gas tienen grado de protección IP54 a IP65, están certificados para vibración conforme a IEC y operan entre -20°C y +50°C. Para zonas con riesgo de explosión, existe la versión ATEX certificada.' },
    { q: '¿Cuánto tarda en localizar un repuesto crítico entre 50.000 SKUs en el depósito?', a: 'El WMS localiza cualquier repuesto en menos de 2 segundos. Para los VLM y carruseles verticales, el material llega a la ventanilla del operario en menos de 30 segundos desde la solicitud.' },
    { q: '¿Cuánto stock inmovilizado puedo reducir en mi bodega de repuestos?', a: 'Con visibilidad total del inventario en tiempo real, los clientes reducen el stock inmovilizado entre 25% y 40%.' },
    { q: '¿Se puede instalar el sistema en una ubicación remota sin soporte técnico cercano?', a: 'Sí. El WCS incluye monitoreo remoto 24/7. La mayoría de los problemas se diagnostican y resuelven sin visita in-situ. STOKA mantiene repuestos locales en Argentina.' },
  ],
  'cadena-frio': [
    { q: '¿A qué temperatura mínima operan los robots de DELIE en la bodega frigorífica?', a: 'Los transelevadores y robots lanzadera para cadena de frío están certificados hasta -30°C. Cuentan con sellado hermético anticondensación, lubricantes especiales y diagnóstico remoto.' },
    { q: '¿Cuánto ahorro energético real puedo esperar al automatizar mi cámara?', a: 'El ahorro energético típico es del 30% al 40%. La principal fuente es la reducción de aperturas de puerta: un almacén manual requiere 50-100 aperturas por turno, mientras que el sistema automatizado trabaja internamente.' },
    { q: '¿Cuánto espacio adicional gano al automatizar una cámara frigorífica existente?', a: 'Con almacenamiento vertical automatizado, podés triplicar la capacidad de la cámara sin construir nuevas instalaciones. El sistema opera en pasillos de 900 mm (vs. 3-4 metros para autoelevadores).' },
    { q: '¿Cómo elimino la exposición del personal al frío extremo en el depósito?', a: 'El sistema opera de forma autónoma dentro de la cámara. Los operarios trabajan en estaciones a temperatura ambiente, donde la mercadería llega a través de una ventanilla aislada.' },
  ],
};

const INDUSTRY_META = {
  'e-commerce-retail': {
    title: 'Almacén E-commerce Automatizado | Fulfillment | STOKA',
    desc: 'Fulfillment automatizado para e-commerce y retail en Argentina. Pedidos 3x más rápido, 99,9% de exactitud. Robots shuttle, WMS y ASRS llave en mano.',
  },
  'logistica-3pl': {
    title: 'Automatización 3PL | WMS Multicliente Argentina | STOKA',
    desc: 'Automatización 3PL en Argentina: WMS multicliente, cross docking, operación 24/7. Sistemas ASRS y robots DELIE con soporte técnico local.',
  },
  manufactura: {
    title: 'Intralogística Industrial Automatizada | JIT | STOKA',
    desc: 'Intralogística automatizada para manufactura en Argentina. Suministro JIT, kanban digital y trazabilidad de lotes para cero paradas de línea.',
  },
  'alimentos-bebidas': {
    title: 'Almacén Alimentos Automatizado | FIFO FEFO | STOKA',
    desc: 'Almacén automatizado para alimentos y bebidas en Argentina. FIFO/FEFO automático, trazabilidad alimentaria, compatible GS1 y FSSC 22000. Sistemas ASRS DELIE.',
  },
  farmaceutica: {
    title: 'Almacén Farmacéutico GMP | Serialización ANMAT | STOKA',
    desc: 'Almacén farmacéutico GMP: FEFO automático, serialización ANMAT y zonas de temperatura. Documentación IQ/OQ/PQ incluida. DELIE Argentina.',
  },
  'mineria-oil-gas': {
    title: 'Almacén MRO Minería y Oil & Gas Automatizado | STOKA',
    desc: 'Almacenes de repuestos para minería y oil & gas en Argentina: VLM y WMS para MRO, IP54-IP65. Localización de repuesto crítico en menos de 2 segundos.',
  },
  'cadena-frio': {
    title: 'ASRS Cámara Frigorífica −30°C | Cadena de Frío | STOKA',
    desc: 'ASRS para cámara frigorífica hasta −30°C en Argentina. Transelevadores y robots shuttle para congelado. FIFO automático, ahorro energético del 30–40%.',
  },
};

export const IndustriaDetailPage = () => {
  const { slug } = useParams();
  const langNavigate = useLangNavigate();
  const { t } = useTranslation();
  const data = INDUSTRY_DATA[slug];
  const ind = INDUSTRIES.find(i => i.slug === slug);
  const faq = INDUSTRY_FAQ[slug];
  const seoText = INDUSTRY_SEO[slug];

  /* Etiquetas visibles resueltas desde i18n (industriesList[slug]) */
  const industriesList = t('pages.industrias.industriesList', { returnObjects: true }) || {};
  const info = industriesList[slug] || {};
  const label = info.name || '';
  const tagline = info.tagline || '';
  const desc = info.desc || '';
  const metaTitle = `Automatización ASRS para ${label} — STOKA`;
  const metaDesc = desc;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!data || !ind) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400 mb-4">{t('pages.industriaDetail.notFound')}</p>
        <button onClick={() => langNavigate('/industrias')} className="text-cyan-500 underline">
          {t('pages.industriaDetail.viewAll')}
        </button>
      </div>
    </div>
  );

  const otherIndustries = INDUSTRIES.filter(i => i.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SeoHead
        title={metaTitle}
        description={metaDesc}
        basePath={`/industrias/${slug}`}
      />
      <Helmet>
                                        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": t('pages.industriaDetail.breadcrumbHome'), "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": t('pages.industriaDetail.breadcrumbIndustrias'), "item": "https://www.stokagroup.com/industrias" },
            { "@type": "ListItem", "position": 3, "name": label, "item": `https://www.stokagroup.com/industrias/${slug}` },
          ],
        })}</script>
        {faq && <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faq.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a },
          })),
        })}</script>}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `Automatización ASRS para ${label} — STOKA Argentina`,
          "description": `${desc} Representantes oficiales de DELIE en Argentina y Chile. Proyecto llave en mano.`,
          "provider": { "@id": "https://www.stokagroup.com/#organization" },
          "areaServed": [{ "@type": "Country", "name": "Argentina" }, { "@type": "Country", "name": "Chile" }],
          "serviceType": "Sistemas ASRS — Automatización de Almacenes por Industria",
          "url": `https://www.stokagroup.com/industrias/${slug}`,
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[55vh] min-h-90 flex items-end overflow-hidden">
        <img src={ind.image} alt={label}
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <button onClick={() => langNavigate('/industrias')} style={{ outline: 'none' }}
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-xs mb-5">
              <ArrowLeft size={13} /> {t('pages.industriaDetail.backToAll')}
            </button>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <ind.icon size={16} className="text-cyan-400" />
              </div>
              <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em]">{label}</p>
            </div>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black italic uppercase leading-[1.1] tracking-tight max-w-3xl">
              {data.hero}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="text-center py-4">
              <p className="text-3xl md:text-4xl font-black text-cyan-500 leading-none mb-1">{s.value}</p>
              <p className="text-gray-400 text-xs uppercase tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
              {t('pages.industriaDetail.challengeLabel')}
            </p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight">{tagline}</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* HIGHLIGHT BANNER */}
      <section className="bg-slate-900 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 text-xl md:text-2xl font-black italic leading-relaxed">{data.highlight}</p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
            {t('pages.industriaDetail.whyAutomate')}
          </p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">
            {t('pages.industriaDetail.keyBenefits')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mb-4" />
                <h3 className="font-black text-gray-900 text-sm mb-2">{b.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESAFÍOS VS SOLUCIONES */}
      <section className="py-14 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-8">
            {t('pages.industriaDetail.beforeAfter')}
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-red-500/10 border border-red-400/20 rounded-2xl p-7">
              <p className="text-[10px] font-mono text-red-400 tracking-[0.4em] uppercase mb-5">
                {t('pages.industriaDetail.withoutAutomation')}
              </p>
              <div className="space-y-3.5">
                {data.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} className="text-red-400" />
                    </div>
                    <p className="text-red-300 text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-7">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase mb-5">
                {t('pages.industriaDetail.withStoka')}
              </p>
              <div className="space-y-3.5">
                {data.solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={11} className="text-cyan-400" />
                    </div>
                    <p className="text-cyan-300 text-sm leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO EXTENDIDO */}
      {seoText && (
        <section className="py-14 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
              {t('pages.industriaDetail.automationContext')}
            </p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-6">
              {t('pages.industriaDetail.automationH2', { industry: label.toLowerCase() })}
            </h2>
            <div className="grid md:grid-cols-[3fr_1fr] gap-10 items-start">
              <div className="space-y-4">
                {seoText.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="space-y-3">
                {data.stats.map((s, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                    <p className="text-2xl font-black text-cyan-500 leading-none mb-0.5">{s.value}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PRODUCTOS RECOMENDADOS */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
            {t('pages.industriaDetail.recommendedTag')}
          </p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">
            {t('pages.industriaDetail.recommendedH2')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {data.products.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <LangLink to={p.url}
                  className="flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-cyan-300 hover:shadow-sm transition-all group w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                    <p className="text-gray-700 text-sm font-medium group-hover:text-cyan-600 transition-colors">{p.name}</p>
                  </div>
                  <ChevronRight size={15} className="text-gray-300 group-hover:text-cyan-500 transition-colors shrink-0" />
                </LangLink>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <LangLink to="/catalogo"
              className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-600 font-semibold transition-colors">
              {t('pages.industriaDetail.viewCatalog')} <ArrowRight size={14} />
            </LangLink>
            <LangLink to="/beneficios-fiscales"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors border border-gray-200 rounded-lg px-4 py-2 hover:border-cyan-300 bg-white">
              {t('pages.industriaDetail.taxBenefits')} →
            </LangLink>
            <LangLink to="/casos-de-exito"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors border border-gray-200 rounded-lg px-4 py-2 hover:border-cyan-300 bg-white">
              {t('pages.industriaDetail.successCases')} →
            </LangLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq && (
        <section className="py-14 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
              {t('pages.industriaDetail.faqTag')}
            </p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">
              {t('pages.industriaDetail.faqH2')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faq.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                  <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTRAS INDUSTRIAS */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
            {t('pages.industriaDetail.exploreMore')}
          </p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">
            {t('pages.industriaDetail.otherIndustries')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherIndustries.map((oi, i) => {
              const oiInfo = industriesList[oi.slug] || {};
              return (
              <motion.button key={oi.slug} onClick={() => langNavigate(`/industrias/${oi.slug}`)}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ outline: 'none' }}
                className="relative text-left rounded-2xl overflow-hidden group h-40 shadow-sm hover:shadow-md transition-all">
                <img src={oi.image} alt={oiInfo.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-black text-sm uppercase tracking-tight leading-tight">{oiInfo.name}</h3>
                  <p className="text-gray-300 text-xs mt-0.5 opacity-80">{oiInfo.tagline}</p>
                </div>
              </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">
            {t('pages.industriaDetail.ctaTag')}
          </p>
          <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-4">
            {t('pages.industriaDetail.ctaH2_a')}<br />
            <span className="text-cyan-400">{t('pages.industriaDetail.ctaH2_b')}</span>
          </h2>
          <p className="text-gray-400 text-base mb-8">{t('pages.industriaDetail.ctaSub')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LangLink to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              {t('pages.industriaDetail.ctaBtn')} <ArrowRight size={14} />
            </LangLink>
            <button onClick={() => langNavigate('/catalogo')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all">
              {t('pages.industriaDetail.viewCatalogBtn')}
            </button>
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

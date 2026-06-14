/* SPRINT 1.3 — FAQs con lenguaje de búsqueda natural + FAQPage schema.
   - home.faq: nueva (no existía) — 3 preguntas
   - pages.soluciones.faq: AÑADIR 3 preguntas al array existente
   - pages.beneficiosFiscales.faqItems: AÑADIR 2 preguntas al array existente
   En los 3 idiomas. */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// FAQs nuevas para la HOME (array completo, no existía)
const HOME_FAQ = {
  es: [
    { q: '¿Qué es un depósito inteligente?', a: 'Un depósito inteligente es un almacén que integra automatización, robótica y software de gestión para operar con mínima intervención humana. Combina sistemas de almacenamiento automático (ASRS), transelevadores, robots y datos en tiempo real para maximizar la densidad, la trazabilidad y la velocidad. Es la evolución del depósito tradicional hacia la logística 4.0.' },
    { q: '¿Qué diferencia hay entre un almacén automatizado y uno tradicional?', a: 'Un almacén tradicional depende del trabajo manual: operarios que caminan, montacargas y estanterías estáticas. Un almacén automatizado reemplaza esos recorridos por transelevadores, robots y software que llevan la mercadería hasta el operario (goods-to-person). El resultado es más densidad por metro cuadrado, hasta 99,9% de exactitud, operación 24/7 y un aprovechamiento del espacio vertical imposible de lograr manualmente.' },
    { q: '¿La automatización conviene para pymes?', a: 'Sí. Existen soluciones de automatización escalables desde USD 150.000, y en Argentina las pymes acceden a beneficios fiscales (RIMI, arancel reducido según NCM, IVA 10,5%, financiamiento BICE) que mejoran el ROI. No hace falta automatizar todo de golpe: se puede empezar por un módulo —un VLM, un miniload o un sistema de picking— y escalar según crece la operación.' },
  ],
  en: [
    { q: 'What is a smart warehouse?', a: 'A smart warehouse is a facility that integrates automation, robotics and management software to operate with minimal human intervention. It combines automatic storage systems (ASRS), stacker cranes, robots and real-time data to maximize density, traceability and speed. It is the evolution of the traditional warehouse toward Logistics 4.0.' },
    { q: 'What is the difference between an automated warehouse and a traditional one?', a: 'A traditional warehouse relies on manual work: operators walking, forklifts and static racking. An automated warehouse replaces those journeys with stacker cranes, robots and software that bring goods to the operator (goods-to-person). The result is higher density per square meter, up to 99.9% accuracy, 24/7 operation and vertical space utilization impossible to achieve manually.' },
    { q: 'Is automation worthwhile for SMEs?', a: 'Yes. There are scalable automation solutions from USD 150,000, and in Argentina SMEs access tax benefits (RIMI, reduced tariff by NCM, 10.5% VAT, BICE financing) that improve ROI. You don\'t need to automate everything at once: you can start with one module —a VLM, a miniload or a picking system— and scale as the operation grows.' },
  ],
  zh: [
    { q: '什么是智能仓库？', a: '智能仓库是整合自动化、机器人技术和管理软件、以最少人工干预运营的设施。它结合自动存储系统（ASRS）、堆垛机、机器人和实时数据，以最大化密度、可追溯性和速度。它是传统仓库向物流4.0演进的成果。' },
    { q: '自动化仓库与传统仓库有什么区别？', a: '传统仓库依赖人工：操作员步行、叉车和静态货架。自动化仓库以堆垛机、机器人和软件取代这些行走，将货物送到操作员处（货到人）。其结果是每平方米密度更高、准确率高达99.9%、24/7运营，以及人工无法实现的垂直空间利用。' },
    { q: '自动化适合中小企业吗？', a: '适合。有从USD 150.000起的可扩展自动化解决方案，在阿根廷，中小企业可享受改善投资回报的税收优惠（RIMI、按NCM减免关税、10.5%增值税、BICE融资）。无需一次性全部自动化：可以从一个模块开始——VLM、miniload或拣选系统——随运营增长而扩展。' },
  ],
};

// FAQs a AÑADIR al array de SOLUCIONES
const SOLUCIONES_ADD = {
  es: [
    { q: '¿Qué es la logística 4.0?', a: 'La logística 4.0 es la aplicación de las tecnologías de la Industria 4.0 —automatización, IoT, inteligencia artificial y análisis de datos— a la operación de almacenes y la cadena de suministro. Permite que depósitos, transelevadores, robots y software se comuniquen entre sí para una operación conectada, autónoma y autooptimizada. En la práctica, transforma un almacén tradicional en un depósito inteligente.' },
    { q: '¿Cuánto espacio ahorra un sistema ASRS?', a: 'Un sistema ASRS aprovecha la altura de la nave —de 7 hasta 40 metros— y elimina los pasillos anchos que requieren los montacargas. En la práctica, un depósito automático de alta densidad puede almacenar entre 3 y 5 veces más mercadería en el mismo metro cuadrado que una estantería convencional, liberando espacio o evitando una ampliación edilicia.' },
    { q: '¿Qué es la intralogística?', a: 'La intralogística es el conjunto de procesos de flujo de materiales e información dentro de un almacén o planta: recepción, almacenamiento, preparación de pedidos y expedición. La intralogística automatizada —con transelevadores, robots y software de gestión— es el corazón de la logística inteligente y del almacén 4.0.' },
  ],
  en: [
    { q: 'What is Logistics 4.0?', a: 'Logistics 4.0 is the application of Industry 4.0 technologies —automation, IoT, artificial intelligence and data analytics— to warehouse operations and the supply chain. It lets warehouses, stacker cranes, robots and software communicate with each other for a connected, autonomous and self-optimizing operation. In practice, it turns a traditional warehouse into a smart warehouse.' },
    { q: 'How much space does an ASRS system save?', a: 'An ASRS system uses the height of the building —from 7 up to 40 meters— and eliminates the wide aisles forklifts require. In practice, a high-density automated warehouse can store 3 to 5 times more goods in the same square meter than conventional racking, freeing up space or avoiding a building expansion.' },
    { q: 'What is intralogistics?', a: 'Intralogistics is the set of material and information flow processes inside a warehouse or plant: receiving, storage, order picking and dispatch. Automated intralogistics —with stacker cranes, robots and management software— is the heart of smart logistics and the Warehouse 4.0.' },
  ],
  zh: [
    { q: '什么是物流4.0？', a: '物流4.0是将工业4.0技术——自动化、物联网、人工智能和数据分析——应用于仓库运营和供应链。它让仓库、堆垛机、机器人和软件相互通信，实现互联、自主和自我优化的运营。实际上，它将传统仓库转变为智能仓库。' },
    { q: 'ASRS系统能节省多少空间？', a: 'ASRS系统利用厂房高度——从7米到40米——并消除叉车所需的宽通道。实际上，高密度自动化仓库在相同平方米内的存储量可达传统货架的3至5倍，释放空间或避免厂房扩建。' },
    { q: '什么是仓内物流？', a: '仓内物流是仓库或工厂内部物料和信息流转过程的总称：收货、存储、订单拣选和发货。自动化仓内物流——配备堆垛机、机器人和管理软件——是智能物流和仓库4.0的核心。' },
  ],
};

// FAQs a AÑADIR al array faqItems de BENEFICIOS FISCALES
const BENEFICIOS_ADD = {
  es: [
    { q: '¿Cuánto cuesta automatizar un depósito?', a: 'Depende de la tecnología, el throughput requerido y el tamaño del depósito. Como referencia: un módulo VLM o un sistema de picking puede arrancar desde USD 150.000; un sistema shuttle compacto ronda los USD 600.000; y un ASRS unit-load completo con software puede superar los USD 3.000.000. En Argentina, los beneficios fiscales (RIMI, arancel reducido según NCM, IVA 10,5% y financiamiento BICE) pueden reducir el costo real entre un 15% y un 40%.' },
    { q: '¿Conviene automatizar mi almacén ahora o esperar?', a: 'La combinación de beneficios vigentes en 2025–2026 hace de este momento una ventana favorable: el RIGI ofrece estabilidad fiscal por 30 años, el Decreto 513/2025 reduce los aranceles de importación según la clasificación NCM, y la línea BICE financia hasta el 80% del proyecto a 10 años. Esta convergencia de estabilidad, reducción arancelaria y financiamiento preferencial no siempre está disponible en simultáneo.' },
  ],
  en: [
    { q: 'How much does it cost to automate a warehouse?', a: 'It depends on the technology, the required throughput and the warehouse size. As a reference: a VLM module or a picking system can start from USD 150,000; a compact shuttle system is around USD 600,000; and a complete unit-load ASRS with software can exceed USD 3,000,000. In Argentina, tax benefits (RIMI, reduced tariff by NCM, 10.5% VAT and BICE financing) can reduce the real cost by 15% to 40%.' },
    { q: 'Should I automate my warehouse now or wait?', a: 'The combination of benefits in force in 2025–2026 makes this a favorable window: RIGI offers 30 years of tax stability, Decreto 513/2025 reduces import tariffs based on NCM classification, and the BICE line finances up to 80% of the project over 10 years. This convergence of stability, tariff reduction and preferential financing is not always available simultaneously.' },
  ],
  zh: [
    { q: '仓库自动化的成本是多少？', a: '取决于技术、所需吞吐量和仓库规模。作为参考：VLM模块或拣选系统可从USD 150.000起；紧凑型shuttle系统约USD 600.000；配备软件的完整unit-load ASRS可超过USD 3.000.000。在阿根廷，税收优惠（RIMI、按NCM减免关税、10.5%增值税和BICE融资）可将实际成本降低15%至40%。' },
    { q: '我应该现在还是以后再实施仓库自动化？', a: '2025–2026年现行优惠的组合使此刻成为有利窗口：RIGI提供30年税收稳定，Decreto 513/2025根据NCM分类降低进口关税，BICE贷款为项目提供最长10年、最高80%的融资。这种稳定性、关税减免和优惠融资的汇聚并不总是同时具备。' },
  ],
};

for (const lang of ['es', 'en', 'zh']) {
  const file = join('src/i18n/locales', `${lang}.json`);
  const json = JSON.parse(readFileSync(file, 'utf8'));

  // 1. home.faq (nueva)
  json.home = json.home || {};
  if (!json.home.faq) json.home.faq = HOME_FAQ[lang];
  if (!json.home.faqTag) json.home.faqTag = lang === 'es' ? 'Preguntas frecuentes' : lang === 'en' ? 'Frequently asked questions' : '常见问题';
  if (!json.home.faqH2) json.home.faqH2 = lang === 'es' ? 'Preguntas frecuentes sobre automatización de almacenes' : lang === 'en' ? 'Frequently asked questions about warehouse automation' : '关于仓库自动化的常见问题';

  // 2. pages.soluciones.faq (añadir, evitando duplicar por pregunta)
  const sol = json.pages.soluciones;
  if (Array.isArray(sol.faq)) {
    const existing = new Set(sol.faq.map(f => f.q));
    for (const item of SOLUCIONES_ADD[lang]) if (!existing.has(item.q)) sol.faq.push(item);
  }

  // 3. pages.beneficiosFiscales.faqItems (añadir)
  const ben = json.pages.beneficiosFiscales;
  if (Array.isArray(ben.faqItems)) {
    const existing = new Set(ben.faqItems.map(f => f.q));
    for (const item of BENEFICIOS_ADD[lang]) if (!existing.has(item.q)) ben.faqItems.push(item);
  }

  writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`✓ ${lang}.json — home.faq(${json.home.faq.length}) soluciones.faq(${sol.faq.length}) beneficios.faqItems(${ben.faqItems.length})`);
}

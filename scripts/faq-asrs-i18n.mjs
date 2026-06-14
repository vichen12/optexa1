/* Mueve las 6 FAQ de /catalogo/asrs a i18n (pages.catalogoAsrs.faq) en es/en/zh. */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const FAQ = {
  es: [
    { q: '¿Cuánto espacio vertical aprovecha un sistema AS/RS en mi almacén, bodega o depósito?', a: 'Los sistemas AS/RS DELIE aprovechan desde 7 hasta 40 metros de altura libre. En un almacén con 12 metros de altura, podés almacenar hasta 5 veces más que con estanterías convencionales de 4-5 metros. La clave está en diseñar la estructura según la altura disponible y el tipo de carga.' },
    { q: '¿Cuál es la diferencia entre estanterías drive-in, shuttle y MiniLoad?', a: 'Las estanterías drive-in usan carretillas convencionales: las más económicas, ideales para LIFO de alta densidad. Las shuttle combinan estanterías con robots lanzadera para mayor velocidad y FIFO/LIFO selectivo. Las MiniLoad son para contenedores y totes con transelevadores: máxima velocidad y precisión para e-commerce, farmacéutica y bodega de alta rotación.' },
    { q: '¿Cuánto tiempo lleva instalar un sistema AS/RS en un almacén o depósito existente?', a: 'La instalación mecánica de estanterías AS/RS toma 4 a 10 semanas según el modelo. La adecuación civil previa (losa plana, iluminación) puede añadir 4-6 semanas si el edificio lo requiere. STOKA coordina toda la ingeniería de detalle, el montaje y la puesta en marcha certificada en Argentina.' },
    { q: '¿Las estanterías DELIE aplican al Decreto 513/2025 de arancel reducido en Argentina?', a: 'Sí. Las estanterías AS/RS para sistemas automatizados están incluidas en las posiciones arancelarias del Decreto 513/2025, que reduce los aranceles de importación según la clasificación NCM de cada componente. STOKA verifica la posición arancelaria exacta para cada proyecto sin costo adicional, garantizando que aprovechés el beneficio desde el primer día de importación.' },
    { q: '¿Qué es un depósito inteligente y en qué se diferencia de un almacén tradicional?', a: 'Un depósito inteligente es un almacén automatizado que integra sistemas ASRS, robótica y software de gestión para operar con mínima intervención humana. A diferencia de un almacén tradicional —con operarios, montacargas y estanterías estáticas—, el depósito inteligente lleva la mercadería hasta el operario (goods-to-person), multiplica la densidad por metro cuadrado y opera 24/7 con trazabilidad total. Es la base de la logística 4.0 y la intralogística moderna.' },
    { q: '¿Cuánto espacio ahorra un sistema ASRS en un centro de distribución?', a: 'Un sistema ASRS aprovecha la altura de la nave —de 7 a 40 metros— y elimina los pasillos anchos de los montacargas. En la práctica, un almacén robotizado de alta densidad puede almacenar entre 3 y 5 veces más mercadería en el mismo metro cuadrado que una estantería convencional, liberando superficie o evitando una ampliación edilicia del centro de distribución.' },
  ],
  en: [
    { q: 'How much vertical space does an AS/RS system use in my warehouse or facility?', a: 'DELIE AS/RS systems use from 7 to 40 meters of free height. In a warehouse with 12 meters of height, you can store up to 5 times more than with conventional 4-5 meter racking. The key is designing the structure based on the available height and the type of load.' },
    { q: 'What is the difference between drive-in, shuttle and MiniLoad racking?', a: 'Drive-in racking uses conventional forklifts: the most economical, ideal for high-density LIFO. Shuttle racking combines racking with shuttle robots for higher speed and selective FIFO/LIFO. MiniLoad is for containers and totes with stacker cranes: maximum speed and precision for e-commerce, pharma and high-rotation facilities.' },
    { q: 'How long does it take to install an AS/RS system in an existing warehouse?', a: 'The mechanical installation of AS/RS racking takes 4 to 10 weeks depending on the model. Prior civil works (flat slab, lighting) can add 4-6 weeks if the building requires it. STOKA coordinates all detailed engineering, assembly and certified commissioning in Argentina.' },
    { q: 'Does DELIE racking qualify for the reduced tariff under Decreto 513/2025 in Argentina?', a: 'Yes. AS/RS racking for automated systems is included in the tariff positions of Decreto 513/2025, which reduces import tariffs based on the NCM classification of each component. STOKA verifies the exact tariff position for each project at no additional cost, ensuring you benefit from the first day of importation.' },
    { q: 'What is a smart warehouse and how does it differ from a traditional one?', a: 'A smart warehouse is an automated warehouse that integrates ASRS systems, robotics and management software to operate with minimal human intervention. Unlike a traditional warehouse —with operators, forklifts and static racking—, the smart warehouse brings goods to the operator (goods-to-person), multiplies density per square meter and operates 24/7 with full traceability. It is the basis of Logistics 4.0 and modern intralogistics.' },
    { q: 'How much space does an ASRS system save in a distribution center?', a: 'An ASRS system uses the height of the building —from 7 to 40 meters— and eliminates the wide forklift aisles. In practice, a high-density robotized warehouse can store 3 to 5 times more goods in the same square meter than conventional racking, freeing up floor space or avoiding a building expansion of the distribution center.' },
  ],
  zh: [
    { q: 'AS/RS系统在我的仓库或设施中利用多少垂直空间？', a: 'DELIE的AS/RS系统利用7至40米的净高。在12米高的仓库中，您可以比传统4-5米货架多存储多达5倍。关键在于根据可用高度和载荷类型设计结构。' },
    { q: '驶入式、穿梭式和MiniLoad货架有什么区别？', a: '驶入式货架使用传统叉车：最经济，适合高密度后进先出（LIFO）。穿梭式货架将货架与穿梭机器人结合，实现更高速度和选择性的先进先出/后进先出。MiniLoad用于配备堆垛机的容器和料箱：为电商、制药和高周转设施提供最高速度和精度。' },
    { q: '在现有仓库安装AS/RS系统需要多长时间？', a: 'AS/RS货架的机械安装根据型号需要4至10周。如果建筑需要，前期土建（平整地坪、照明）可能增加4-6周。STOKA在阿根廷协调所有详细工程、装配和认证调试。' },
    { q: 'DELIE货架是否符合阿根廷Decreto 513/2025的关税减免？', a: '是的。用于自动化系统的AS/RS货架包含在Decreto 513/2025的关税税目中，该法令根据每个部件的NCM分类降低进口关税。STOKA免费为每个项目核实确切的关税税目，确保您从进口第一天起就享受优惠。' },
    { q: '什么是智能仓库，它与传统仓库有何不同？', a: '智能仓库是整合ASRS系统、机器人技术和管理软件、以最少人工干预运营的自动化仓库。与传统仓库（配备操作员、叉车和静态货架）不同，智能仓库将货物送到操作员处（货到人），成倍提升每平方米密度，并24/7运营且完整可追溯。它是物流4.0和现代仓内物流的基础。' },
    { q: 'ASRS系统在配送中心能节省多少空间？', a: 'ASRS系统利用厂房高度——从7到40米——并消除宽阔的叉车通道。实际上，高密度机器人化仓库在相同平方米内的存储量可达传统货架的3至5倍，释放占地面积或避免配送中心的建筑扩建。' },
  ],
};

for (const lang of ['es', 'en', 'zh']) {
  const file = join('src/i18n/locales', `${lang}.json`);
  const json = JSON.parse(readFileSync(file, 'utf8'));
  json.pages.catalogoAsrs = json.pages.catalogoAsrs || {};
  json.pages.catalogoAsrs.faq = FAQ[lang];
  writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`✓ ${lang}.json — pages.catalogoAsrs.faq (${FAQ[lang].length} preguntas)`);
}

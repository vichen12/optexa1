/* SPRINT 1.1 — Párrafos de vocabulario diversificado (natural, no stuffing).
   Cada página objetivo recibe UN párrafo nuevo que introduce sinónimos reales
   del rubro. Se inyecta como clave i18n; el JSX lo renderiza aparte. */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// clave => { es, en, zh } — párrafo de vocabulario por página
const VOCAB = {
  // HOME → home.vocabPara
  'home.vocabPara': {
    es: 'Las soluciones de STOKA abarcan la logística inteligente de extremo a extremo: desde depósitos automáticos de alta densidad hasta centros de distribución 4.0 con robótica industrial y software de gestión. Transformamos almacenes tradicionales y naves industriales en operaciones automatizadas e inteligentes —depósitos inteligentes, almacenes robotizados y plantas logísticas digitalizadas— combinando transelevadores, vehículos autónomos (AGV/AMR) y sistemas de almacenamiento automático para maximizar el aprovechamiento del espacio.',
    en: 'STOKA\'s solutions cover smart logistics end to end: from high-density automated warehouses to Logistics 4.0 distribution centers with industrial robotics and management software. We turn traditional warehouses and industrial facilities into automated, intelligent operations —smart warehouses, robotized storage and digitalized logistics plants— combining stacker cranes, autonomous vehicles (AGV/AMR) and automatic storage systems to maximize space utilization.',
    zh: 'STOKA的解决方案涵盖端到端的智能物流：从高密度自动化仓库到配备工业机器人和管理软件的物流4.0配送中心。我们将传统仓库和工业厂房转变为自动化、智能化的运营——智能仓库、机器人化仓储和数字化物流工厂——结合堆垛机、自主车辆（AGV/AMR）和自动存储系统，最大化空间利用率。',
  },
  // CATALOGO ASRS → pages.catalogoAsrs.vocabPara
  'pages.catalogoAsrs.vocabPara': {
    es: 'Un sistema ASRS —también llamado depósito automático, almacén robotizado o sistema de almacenamiento automático— reemplaza el manejo manual por transelevadores (grúas de almacén), robots logísticos y software de control. Es el núcleo de la intralogística moderna y de cualquier proyecto de almacén 4.0: permite operar un depósito inteligente con máxima densidad, trazabilidad total y aprovechamiento vertical del espacio en naves industriales y centros de distribución.',
    en: 'An ASRS system —also called an automated warehouse, robotized warehouse or automatic storage system— replaces manual handling with stacker cranes (warehouse cranes), logistics robots and control software. It is the core of modern intralogistics and of any Warehouse 4.0 project: it lets you run a smart warehouse with maximum density, full traceability and vertical use of space in industrial facilities and distribution centers.',
    zh: 'ASRS系统——也称为自动化仓库、机器人化仓库或自动存储系统——以堆垛机（仓库起重机）、物流机器人和控制软件取代人工操作。它是现代仓内物流和任何仓库4.0项目的核心：让您以最大密度、完整可追溯性和垂直空间利用率运营智能仓库，适用于工业厂房和配送中心。',
  },
  // SOLUCIONES → pages.soluciones.vocabPara
  'pages.soluciones.vocabPara': {
    es: 'Diseñamos soluciones de logística 4.0 e intralogística a medida: automatización logística para centros de distribución, depósitos inteligentes y plantas logísticas que buscan digitalización y eficiencia. Integramos almacenamiento robotizado, vehículos autónomos y software de gestión para convertir cualquier almacén o nave industrial en una operación de logística inteligente, escalable y conectada.',
    en: 'We design tailored Logistics 4.0 and intralogistics solutions: logistics automation for distribution centers, smart warehouses and logistics plants seeking digitalization and efficiency. We integrate robotized storage, autonomous vehicles and management software to turn any warehouse or industrial facility into a smart, scalable and connected logistics operation.',
    zh: '我们设计量身定制的物流4.0和仓内物流解决方案：为配送中心、智能仓库和寻求数字化与效率的物流工厂提供物流自动化。我们整合机器人化仓储、自主车辆和管理软件，将任何仓库或工业厂房转变为智能、可扩展和互联的物流运营。',
  },
  // CATALOGO general → pages.catalog.vocabPara
  'pages.catalog.vocabPara': {
    es: 'Nuestro catálogo cubre toda la cadena de la automatización logística: depósitos automáticos, almacenes robotizados, transelevadores y grúas de almacén, robots logísticos (AGV/AMR), almacenamiento vertical y software de gestión. Soluciones de intralogística y almacén 4.0 para centros de distribución, depósitos inteligentes y naves industriales de cualquier escala.',
    en: 'Our catalog covers the entire logistics automation chain: automated warehouses, robotized storage, stacker cranes and warehouse cranes, logistics robots (AGV/AMR), vertical storage and management software. Intralogistics and Warehouse 4.0 solutions for distribution centers, smart warehouses and industrial facilities of any scale.',
    zh: '我们的目录涵盖物流自动化的整个链条：自动化仓库、机器人化仓储、堆垛机和仓库起重机、物流机器人（AGV/AMR）、垂直存储和管理软件。为各种规模的配送中心、智能仓库和工业厂房提供仓内物流和仓库4.0解决方案。',
  },
};

for (const lang of ['es', 'en', 'zh']) {
  const file = join('src/i18n/locales', `${lang}.json`);
  const json = JSON.parse(readFileSync(file, 'utf8'));
  let n = 0;
  for (const [path, byLang] of Object.entries(VOCAB)) {
    const parts = path.split('.');
    let obj = json;
    for (let i = 0; i < parts.length - 1; i++) {
      obj[parts[i]] = obj[parts[i]] || {};
      obj = obj[parts[i]];
    }
    const leaf = parts[parts.length - 1];
    if (!obj[leaf]) { obj[leaf] = byLang[lang]; n++; }
  }
  writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`✓ ${lang}.json — +${n} párrafos de vocabulario`);
}

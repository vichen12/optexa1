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

const es_new = {
  pages: {
    industriaDetail: {
      notFound: "Industria no encontrada.",
      viewAll: "Ver todas las industrias",
      backToAll: "Todas las industrias",
      breadcrumbHome: "Inicio",
      breadcrumbIndustrias: "Industrias",
      challengeLabel: "El desafío",
      whyAutomate: "Por qué automatizar",
      keyBenefits: "Beneficios clave",
      beforeAfter: "Antes y después",
      withoutAutomation: "Sin automatización",
      withStoka: "Con STOKA · DELIE",
      automationContext: "Contexto de automatización",
      automationH2: "Automatización de almacenes en {{industry}}",
      recommendedTag: "Equipamiento recomendado",
      recommendedH2: "Productos para este sector",
      viewCatalog: "Ver catálogo completo",
      taxBenefits: "Beneficios fiscales vigentes →",
      successCases: "Ver casos de éxito →",
      faqTag: "Preguntas frecuentes",
      faqH2: "Preguntas frecuentes sobre automatización",
      exploreMore: "Seguir explorando",
      otherIndustries: "Otras industrias",
      ctaTag: "¿Listo para automatizar?",
      ctaH2_a: "Consultá sin costo.",
      ctaH2_b: "Respuesta en 24 hs.",
      ctaSub: "Nuestro equipo técnico analiza tu operación y te propone la solución más adecuada sin compromiso.",
      ctaBtn: "Solicitar consulta",
      viewCatalogBtn: "Ver catálogo completo"
    }
  }
};

const en_new = {
  pages: {
    industriaDetail: {
      notFound: "Industry not found.",
      viewAll: "View all industries",
      backToAll: "All industries",
      breadcrumbHome: "Home",
      breadcrumbIndustrias: "Industries",
      challengeLabel: "The challenge",
      whyAutomate: "Why automate",
      keyBenefits: "Key benefits",
      beforeAfter: "Before & after",
      withoutAutomation: "Without automation",
      withStoka: "With STOKA · DELIE",
      automationContext: "Automation context",
      automationH2: "Warehouse automation in {{industry}}",
      recommendedTag: "Recommended equipment",
      recommendedH2: "Products for this sector",
      viewCatalog: "View full catalog",
      taxBenefits: "Available tax benefits →",
      successCases: "View success cases →",
      faqTag: "FAQ",
      faqH2: "Frequently asked questions about automation",
      exploreMore: "Keep exploring",
      otherIndustries: "Other industries",
      ctaTag: "Ready to automate?",
      ctaH2_a: "Free consultation.",
      ctaH2_b: "Response in 24 hrs.",
      ctaSub: "Our technical team analyzes your operation and proposes the most suitable solution with no commitment.",
      ctaBtn: "Request consultation",
      viewCatalogBtn: "View full catalog"
    }
  }
};

const zh_new = {
  pages: {
    industriaDetail: {
      notFound: "未找到该行业。",
      viewAll: "查看所有行业",
      backToAll: "所有行业",
      breadcrumbHome: "首页",
      breadcrumbIndustrias: "行业",
      challengeLabel: "挑战",
      whyAutomate: "为何自动化",
      keyBenefits: "核心优势",
      beforeAfter: "前后对比",
      withoutAutomation: "无自动化",
      withStoka: "使用 STOKA · DELIE",
      automationContext: "自动化背景",
      automationH2: "{{industry}}仓库自动化",
      recommendedTag: "推荐设备",
      recommendedH2: "适用本行业的产品",
      viewCatalog: "查看完整目录",
      taxBenefits: "可用税收优惠 →",
      successCases: "查看成功案例 →",
      faqTag: "常见问题",
      faqH2: "自动化常见问题解答",
      exploreMore: "继续探索",
      otherIndustries: "其他行业",
      ctaTag: "准备好自动化了吗？",
      ctaH2_a: "免费咨询。",
      ctaH2_b: "24小时内回复。",
      ctaSub: "我们的技术团队分析您的运营并提出最合适的解决方案，无需承诺。",
      ctaBtn: "申请咨询",
      viewCatalogBtn: "查看完整目录"
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

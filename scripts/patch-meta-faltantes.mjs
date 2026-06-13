/* Agrega metaTitle + metaDesc faltantes a 6 páginas (catálogo + landings)
   en es/en/zh. Sin estas claves, SeoHead mostraba la clave i18n cruda
   (ej. "pages.catalogoVertical.metaDesc") en el <meta description>.
   Títulos ≤60 chars, descripciones ~120-158 chars. */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DIR = 'src/i18n/locales';

const META = {
  alternativeDelie: {
    es: {
      metaTitle: 'DELIE en Argentina | Sistemas ASRS DELIE | STOKA',
      metaDesc: 'Representantes oficiales de DELIE en Argentina. Sistemas ASRS, transelevadores, robots y software WMS/WCS con ingeniería y soporte 100% local de STOKA.',
    },
    en: {
      metaTitle: 'DELIE in Argentina | DELIE ASRS Systems | STOKA',
      metaDesc: 'Official DELIE representatives in Argentina. ASRS systems, stacker cranes, robots and WMS/WCS software with 100% local engineering and support by STOKA.',
    },
    zh: {
      metaTitle: '阿根廷DELIE | DELIE自动化立体仓库系统 | STOKA',
      metaDesc: 'STOKA是DELIE在阿根廷的官方代表。提供ASRS系统、堆垛机、机器人及WMS/WCS软件，配备100%本地工程与技术支持。',
    },
  },
  autoStoreAlternativa: {
    es: {
      metaTitle: 'Alternativa a AutoStore en Argentina | ASRS DELIE | STOKA',
      metaDesc: 'Alternativa a AutoStore con densidad y throughput comparables a menor costo. Sistemas ASRS DELIE con ingeniería y soporte local en Argentina por STOKA.',
    },
    en: {
      metaTitle: 'AutoStore Alternative in Argentina | DELIE ASRS | STOKA',
      metaDesc: 'AutoStore alternative with comparable density and throughput at a lower cost. DELIE ASRS systems with local engineering and support in Argentina by STOKA.',
    },
    zh: {
      metaTitle: '阿根廷AutoStore替代方案 | DELIE ASRS | STOKA',
      metaDesc: '密度和吞吐量可媲美AutoStore，成本更低的替代方案。DELIE自动化立体仓库系统，由STOKA提供阿根廷本地工程与技术支持。',
    },
  },
  catalogoRobots: {
    es: {
      metaTitle: 'Robots de Manipulación | Transelevadores y AMR | STOKA',
      metaDesc: 'Catálogo de robots de almacén DELIE: grúas apiladoras, transelevadores MiniLoad, robots shuttle y AMR. 14 modelos con soporte local de STOKA en Argentina.',
    },
    en: {
      metaTitle: 'Handling Robots | Stacker Cranes & AMR | STOKA',
      metaDesc: 'DELIE warehouse robot catalog: stacker cranes, MiniLoad cranes, shuttle robots and AMR. 14 models with local STOKA support in Argentina and Chile.',
    },
    zh: {
      metaTitle: '搬运机器人 | 堆垛机与AMR | STOKA',
      metaDesc: 'DELIE仓储机器人目录：堆垛机、MiniLoad堆垛机、穿梭机器人和AMR。14款机型，STOKA提供阿根廷与智利本地技术支持。',
    },
  },
  catalogoSoftware: {
    es: {
      metaTitle: 'Software de Almacén | WMS, WCS y Control | STOKA',
      metaDesc: 'Software DELIE certificado CMMI Nivel 5: WMS, WCS, HMS y control de almacén automatizado. 6 módulos integrados con soporte local de STOKA en Argentina.',
    },
    en: {
      metaTitle: 'Warehouse Software | WMS, WCS & Control | STOKA',
      metaDesc: 'CMMI Level 5 certified DELIE software: WMS, WCS, HMS and automated warehouse control. 6 integrated modules with local STOKA support in Argentina.',
    },
    zh: {
      metaTitle: '仓储软件 | WMS、WCS与控制系统 | STOKA',
      metaDesc: 'DELIE软件通过CMMI五级认证：WMS、WCS、HMS及自动化仓库控制。6个集成模块，STOKA提供阿根廷本地技术支持。',
    },
  },
  catalogoTransporte: {
    es: {
      metaTitle: 'Equipo de Transporte | Conveyors y Elevadores | STOKA',
      metaDesc: 'Catálogo de transporte DELIE: transportadores, elevadores, paletizadores y máquinas de transferencia. 10 modelos con ingeniería local de STOKA en Argentina.',
    },
    en: {
      metaTitle: 'Conveying Equipment | Conveyors & Lifts | STOKA',
      metaDesc: 'DELIE conveying catalog: conveyors, lifts, palletizers and transfer machines. 10 models with local STOKA engineering in Argentina and Chile.',
    },
    zh: {
      metaTitle: '输送设备 | 输送机与提升机 | STOKA',
      metaDesc: 'DELIE输送设备目录：输送机、提升机、码垛机和移载机。10款机型，STOKA提供阿根廷与智利本地工程支持。',
    },
  },
  catalogoVertical: {
    es: {
      metaTitle: 'Almacenamiento Vertical | VLM y Carruseles | STOKA',
      metaDesc: 'Sistemas de almacenamiento vertical DELIE: VLM y carruseles inteligentes. Ahorrá hasta 90% de espacio con picking goods-to-person. Soporte local STOKA.',
    },
    en: {
      metaTitle: 'Vertical Storage | VLM & Carousels | STOKA',
      metaDesc: 'DELIE vertical storage systems: VLM and smart carousels. Save up to 90% floor space with goods-to-person picking. Local STOKA support in Argentina.',
    },
    zh: {
      metaTitle: '垂直存储 | VLM与智能回转柜 | STOKA',
      metaDesc: 'DELIE垂直存储系统：VLM和智能回转柜。采用货到人拣选，节省高达90%的占地空间。STOKA提供阿根廷本地技术支持。',
    },
  },
};

for (const lang of ['es', 'en', 'zh']) {
  const file = join(DIR, `${lang}.json`);
  const json = JSON.parse(readFileSync(file, 'utf8'));
  json.pages = json.pages || {};
  let added = 0;
  for (const [ns, byLang] of Object.entries(META)) {
    json.pages[ns] = json.pages[ns] || {};
    const m = byLang[lang];
    if (!json.pages[ns].metaTitle) { json.pages[ns].metaTitle = m.metaTitle; added++; }
    if (!json.pages[ns].metaDesc) { json.pages[ns].metaDesc = m.metaDesc; added++; }
  }
  writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`✓ ${lang}.json — ${added} claves meta agregadas`);
}

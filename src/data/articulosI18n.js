/* Traducciones EN/ZH de los artículos monolingües de articulosData.js (Sprint 4).
   Se fusionan como .i18n[lang] sobre el artículo base ES. Generado por subagentes. */
export const ARTICULOS_I18N = {
  "que-es-un-sistema-asrs": {
    "en": {
      "metaTitle": "What Is an ASRS System? Complete 2026 Guide | STOKA",
      "metaDesc": "Complete guide to ASRS systems (Automated Storage and Retrieval System): types, components, how a stacker crane works, and when to automate.",
      "h1": "What an ASRS system is and how it works",
      "categoria": "ASRS Fundamentals",
      "readTime": "7 min",
      "intro": "An ASRS (Automated Storage and Retrieval System) is the technology infrastructure that lets a warehouse or distribution center store and retrieve pallets, cases, and containers with no direct human involvement. Instead of operators driving forklifts through aisles of racking, an ASRS uses stacker cranes, shuttle robots, or shuttle carts that move automatically inside the rack, guided by WCS software that receives orders from the WMS. The payoff: higher storage density, faster operations, lower error rates, and reduced labor costs over the long term.",
      "sections": [
        {
          "h2": "Core components of an ASRS system",
          "body": "A complete ASRS has four layers. The first is the storage layer: high-density racking engineered to bear the handling equipment and to maximize the available height of the warehouse. The second is the handling layer: the stacker cranes (cranes that travel within the aisle) or the shuttle robots (shuttles that operate inside the rack channel). The third is the transport layer: the chain, roller, or belt conveyors that connect the storage zone with the workstations. The fourth is the software layer: the WMS manages inventory and orders, while the WCS turns those orders into commands for the physical equipment."
        },
        {
          "h2": "Types of ASRS: stacker crane, shuttle, and mini-load",
          "body": "The unit-load stacker crane operates in aisles and handles full pallets of up to 1,500 kg at heights of up to 40 meters. It is the best fit for high-bay warehouses with high pallet-movement volumes. The mini-load stacker crane handles containers, cases, and totes in narrower aisles: ideal for intensive picking in e-commerce, pharmaceuticals, or manufacturing. The shuttle system (pallet shuttle or tote shuttle) uses autonomous robots that operate inside the rack channel, delivering maximum storage density with a smaller footprint. The VLM (Vertical Lift Module) is an alternative for workshops and spare-parts warehouses: it takes advantage of clear height without needing an aisle, with goods-to-person deliveries in under 15 seconds."
        },
        {
          "h2": "How a stacker crane works, step by step",
          "body": "The process starts in the ERP or sales system: when an outbound order is generated, the WMS receives and processes it. The WMS sends the retrieval mission to the WCS, which calculates the product's location, the availability of the nearest stacker crane, and the optimal route. The stacker crane travels to the correct position within the rack, extracts the pallet or container with its telescopic fork, and carries it to the outbound station. The full cycle-from order to delivery at the station-takes between 45 and 120 seconds, depending on storage height and depth. Every movement is logged in real time in the WMS, updating inventory with no manual intervention."
        },
        {
          "h2": "When it makes sense to install an ASRS in your warehouse",
          "body": "An ASRS is justified when at least three of these conditions are met: the warehouse handles more than 500 movements per day; available floor space is limited but there is clear height to exploit; labor costs are significant or staff turnover is high; picking or inventory errors create operational or reputational impact; and operating volume is high enough to amortize the investment within 18 to 36 months. In Argentina, Decree 513/2025 (0% tariff on ASRS equipment) and the RIMI regime (accelerated depreciation of capital goods) significantly improve the projected ROI."
        }
      ],
      "conclusionH2": "First step: a free technical consultation",
      "conclusion": "An ASRS is not just technology-it is a strategic decision that shapes a warehouse's layout, processes, and operating model for decades. Before making any investment decision, the STOKA team runs a free technical assessment: throughput analysis, SKU profiling, and a 10-year ROI simulation for your specific warehouse or distribution center. The first consultation carries no cost and no obligation.",
      "faq": [
        {
          "q": "What is the difference between ASRS and warehouse automation?",
          "a": "Warehouse automation is the broad concept: it includes ASRS, AMR robots, conveyors, automated picking systems, and WMS/WCS software. The ASRS is the automated storage and retrieval portion, which can be the core of a fully automated warehouse or a targeted technology for a specific zone."
        },
        {
          "q": "How long does it take to install an ASRS?",
          "a": "A complete ASRS installation project runs from 5 to 10 months, from purchase order to operational go-live: 2-3 months of detailed engineering, 3-4 months of manufacturing, and 4-10 weeks of installation, integration, and commissioning at the warehouse."
        },
        {
          "q": "Does an ASRS require changes to the warehouse structure?",
          "a": "It depends on the design. If the warehouse has enough clear height and a level floor slab, the ASRS can be installed without major construction. Projects that require more height do call for building a new facility or expanding vertically. STOKA assesses technical feasibility on site before submitting a proposal."
        },
        {
          "q": "What happens if the ASRS stops due to a fault?",
          "a": "Modern ASRS systems have redundancy in their control equipment and manual emergency operating modes. If a stacker crane fails, the aisle can be operated manually with a forklift in emergency mode. The MTBF (mean time between failures) of DELIE stacker cranes exceeds 8,000 hours of continuous operation."
        }
      ],
      "cta": {
        "heading": "See how an ASRS would work in your specific operation",
        "text": "Free first consultation with a specialized engineer. Throughput analysis and ROI estimate included.",
        "btnPrimary": {
          "label": "Request a technical consultation",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "View ASRS systems",
          "url": "/catalogo/asrs"
        }
      },
      "relacionados": [
        {
          "titulo": "Stacker Crane vs. Shuttle: Which One Fits",
          "slug": "transelevador-vs-shuttle"
        },
        {
          "titulo": "How Much Does It Cost to Automate a Warehouse",
          "slug": "cuanto-cuesta-automatizar-almacen"
        },
        {
          "titulo": "WMS vs. WCS: What Each Software Does",
          "slug": "wms-vs-wcs"
        }
      ]
    },
    "zh": {
      "metaTitle": "什么是ASRS系统？2026完整指南 | STOKA",
      "metaDesc": "ASRS（自动化存储与检索系统）完整指南：系统类型、组成部件、堆垛机工作原理，以及何时值得实现仓库自动化。",
      "h1": "什么是ASRS系统及其工作原理",
      "categoria": "ASRS基础知识",
      "readTime": "7 分钟",
      "intro": "ASRS（Automated Storage and Retrieval System，自动化存储与检索系统）是一套技术基础设施，使仓库或配送中心无需人工直接干预即可完成托盘、纸箱和容器的存取。它不再依靠操作员驾驶叉车穿行于货架通道，而是采用堆垛机、穿梭机器人或穿梭车在货架内自动运行，并由WCS软件根据WMS下达的指令进行调度。由此带来的成效是：更高的存储密度、更快的作业速度、更低的差错率，以及长期的人工成本下降。",
      "sections": [
        {
          "h2": "ASRS系统的主要组成部件",
          "body": "一套完整的ASRS由四个层级构成。第一层是存储层：高密度货架，其设计既要承载搬运设备，又要最大限度地利用仓库的可用高度。第二层是搬运层：堆垛机（在通道内行驶的起重设备）或穿梭机器人（在货架巷道内运行的穿梭车）。第三层是输送层：链式、辊式或带式输送机，将存储区与工作站连接起来。第四层是软件层：WMS负责管理库存与订单，WCS则将这些订单转化为物理设备可执行的指令。"
        },
        {
          "h2": "ASRS系统的类型：堆垛机、穿梭车与轻载（MiniLoad）",
          "body": "单元载荷（unit-load）堆垛机在通道内运行，可搬运重达1,500公斤的整托盘，作业高度最高可达40米，最适合托盘周转量大的高位仓库。MiniLoad堆垛机在更窄的通道内搬运容器、纸箱和料箱，非常适合电商、医药或制造业中的高强度拣选作业。穿梭车系统（托盘穿梭车或料箱穿梭车）采用在货架巷道内运行的自主机器人，能以更小的占地面积实现最高的存储密度。VLM（Vertical Lift Module，垂直升降模块）则是车间和备件仓库的一种替代方案：无需通道即可充分利用净空高度，并可在15秒内完成货到人（goods-to-person）交付。"
        },
        {
          "h2": "堆垛机的工作原理（分步解析）",
          "body": "整个流程始于ERP或销售系统：当生成一笔出库订单时，WMS会接收并处理该订单。WMS将检索任务下达给WCS，WCS随即计算货物所在位置、最近可用堆垛机的状态以及最优路径。堆垛机行驶至货架内的正确位置，用其伸缩货叉取出托盘或容器，并将其运送至出库工作站。从下单到在工作站完成交付的整个循环，视存储高度和深度而定，用时在45至120秒之间。每一次动作都会实时记录在WMS中，无需人工干预即可更新库存。"
        },
        {
          "h2": "何时值得在仓库中安装ASRS系统",
          "body": "当满足以下条件中至少三项时，安装ASRS便具有合理性：仓库日均作业量超过500次；可用面积有限，但具备可加以利用的净空高度；人工成本较高或人员流动率较大；拣选或库存差错会造成运营或声誉方面的影响；以及作业量足以在18至36个月内收回投资。在阿根廷，第513/2025号法令（ASRS设备零关税）和RIMI制度（资本货物加速折旧）都显著改善了预期的投资回报率（ROI）。"
        }
      ],
      "conclusionH2": "第一步：免费技术咨询",
      "conclusion": "ASRS不仅仅是一项技术，更是一项战略决策，将在数十年间影响仓库的布局、流程和运营模式。在做出任何投资决策之前，STOKA团队都会提供免费的技术诊断：吞吐量分析、SKU结构分析，以及针对您具体仓库或配送中心的10年投资回报（ROI）模拟。首次咨询不收取任何费用，也不附带任何义务。",
      "faq": [
        {
          "q": "ASRS与仓库自动化有什么区别？",
          "a": "仓库自动化是一个总体概念，涵盖ASRS、AMR机器人、输送机、自动拣选系统以及WMS/WCS软件。ASRS则是其中的自动化存取环节，它既可以是一座全自动仓库的核心，也可以是针对某个特定区域的单点技术方案。"
        },
        {
          "q": "安装一套ASRS需要多长时间？",
          "a": "一个完整的ASRS安装项目从下达采购订单到投入运营，历时约5至10个月：详细工程设计2至3个月，设备制造3至4个月，现场安装、集成与调试投产4至10周。"
        },
        {
          "q": "ASRS是否需要改动仓库结构？",
          "a": "这取决于设计方案。如果仓库具备足够的净空高度和平整的地坪，ASRS无需大规模施工即可安装。若项目对高度要求更高，则确实需要新建厂房或进行垂直扩建。STOKA会在提交方案之前进行现场技术可行性评估。"
        },
        {
          "q": "如果ASRS系统因故障停机怎么办？",
          "a": "现代ASRS系统在控制设备上具备冗余设计，并配有手动应急运行模式。若某台堆垛机发生故障，该通道可在应急模式下改用叉车手动作业。DELIE堆垛机的MTBF（平均无故障工作时间）超过8,000小时的连续运行。"
        }
      ],
      "cta": {
        "heading": "了解ASRS在您具体运营场景中的运作方式",
        "text": "由专业工程师提供免费首次咨询，含吞吐量分析与投资回报（ROI）估算。",
        "btnPrimary": {
          "label": "预约技术咨询",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "查看ASRS系统",
          "url": "/catalogo/asrs"
        }
      },
      "relacionados": [
        {
          "titulo": "堆垛机与穿梭车：如何取舍",
          "slug": "transelevador-vs-shuttle"
        },
        {
          "titulo": "仓库自动化的成本是多少",
          "slug": "cuanto-cuesta-automatizar-almacen"
        },
        {
          "titulo": "WMS与WCS：各自负责什么",
          "slug": "wms-vs-wcs"
        }
      ]
    }
  },
  "cuanto-cuesta-automatizar-almacen": {
    "en": {
      "metaTitle": "How Much Does Warehouse Automation Cost in 2026? | STOKA",
      "metaDesc": "Cost guide for warehouse automation in Argentina 2026. Investment ranges by technology, plus the impact of RIMI and Decree 513/2025 on real cost.",
      "h1": "How much does it cost to automate a warehouse in 2026",
      "categoria": "Investment & ROI",
      "readTime": "8 min",
      "intro": "The most common question in the first technical meeting is always the same: how much does it cost to automate my warehouse? The honest answer is that it depends on many factors—chosen technology, throughput, height, number of SKUs and level of integration—but reference ranges by project type do exist. In Argentina, the automation cost landscape changed substantially in 2025 and 2026: Decree 513/2025 reduces the import tariff for ASRS equipment based on its NCM classification, and the RIMI (Law 27.802) allows accelerated depreciation in the first fiscal year, improving the ROI of every automation project across warehouses, storage facilities and industrial depots.",
      "sections": [
        {
          "h2": "Investment ranges by type of automation system",
          "body": "A basic automation project—a VLM or vertical carousel for spare parts in a workshop or storeroom—starts at USD 80,000 to USD 200,000. A MiniLoad system for automated picking in e-commerce or pharmaceuticals (1 aisle, up to 5,000 SKUs) ranges from USD 300,000 to USD 700,000. A unit-load stacker crane system for pallets (1 to 2 aisles, mid-scale warehouse) runs between USD 800,000 and USD 2,000,000. A fully automated warehouse with 4+ aisles, integrated conveyors and WMS/WCS starts at USD 3,000,000 and can exceed USD 10,000,000 in large-scale projects. These figures are CIF + installation, excluding civil works."
        },
        {
          "h2": "Impact of Decree 513/2025 and RIMI on the real cost",
          "body": "Before Decree 513/2025, importing ASRS equipment carried a tariff of 12% to 18% on the CIF value. For a USD 1,000,000 project, that surcharge amounted to USD 120,000 to USD 180,000. With the decree in force, that outlay disappears. The RIMI (Law 27.802) adds another benefit: accelerated depreciation of 100% of the capital asset in the first fiscal year reduces the tax burden in the year of the investment. For a company taxed at 35%, a USD 1,000,000 project generates a tax reduction of ~USD 350,000 spread over time. Combined, both benefits can reduce the net cost of a project by 25% to 35%."
        },
        {
          "h2": "Typical ROI by industry and project type",
          "body": "The ROI of an automation project depends mainly on how much the current manual operation costs and how much the automation saves. In high-order-volume e-commerce (>500/day), the typical ROI is between 18 and 30 months because the savings in picking labor are significant. In a 3PL distribution warehouse running 2 shifts, the ROI ranges from 24 to 36 months. In manufacturing with WIP and spare parts, the ROI can be longer (36–48 months) but includes savings in search time, production errors and freed-up space. In cold storage, the additional energy savings from fewer door openings can cut the ROI by 6 to 12 months."
        },
        {
          "h2": "How to finance the investment: BICE and available options",
          "body": "The BICE line for industrial modernization finances up to 80% of the project value over 10 years with a 2-year grace period. For a USD 1,000,000 project, this means an initial outlay of USD 200,000 and monthly installments of ~USD 8,500 for 8 years (post-grace), using current preferential rates. Many operations directors compare this installment directly with the monthly labor cost the system replaces: in well-sized projects, the automation finances the loan with its own operational savings. The STOKA team prepares the business plan and technical justification for the bank submission at no additional cost."
        }
      ],
      "conclusionH2": "The right price is calculated for your operation",
      "conclusion": "There is no standard price for warehouse automation because every operation is unique. Calculating the 10-year TCO (Total Cost of Ownership) requires knowing the current throughput, labor cost, SKU profile and the constraints of the existing warehouse or storage facility. STOKA performs that calculation free of charge during the first consultation, delivering a technical report that includes the comparison of options, the projected ROI and the tax benefits applicable to your specific case.",
      "faq": [
        {
          "q": "Does the ASRS price include installation?",
          "a": "STOKA's quotes are turnkey: they include the equipment, transport, detailed engineering, mechanical and electrical installation, integration with the existing WMS/ERP and training. What is not included is civil works (if required) and the client's ERP software."
        },
        {
          "q": "What is the minimum investment to justify an ASRS?",
          "a": "A VLM or vertical carousel can be justified with an investment of USD 80,000 if the savings in search time and inventory errors are sufficient. For a MiniLoad or stacker crane, the reasonable minimum is usually from USD 300,000 with a minimum throughput of 300 movements/day."
        },
        {
          "q": "How does RIMI impact the real price of a project?",
          "a": "The RIMI (Law 27.802) allows depreciating 100% of the capital asset in the first fiscal year, reducing the income tax base. For a company taxed at 35%, a USD 500,000 project generates a tax reduction of USD 175,000 in the year of the investment. Combined with the 0% tariff under Decree 513/2025, the net cost can be 25-30% lower than the list price."
        },
        {
          "q": "How much does technical support cost after installation?",
          "a": "The annual preventive maintenance contract typically represents 3% to 5% of the value of the installed equipment. It includes biannual preventive maintenance visits, wear parts and phone/remote technical support. STOKA has a support team in Argentina for response in hours, not days."
        }
      ],
      "cta": {
        "heading": "Calculate the ROI of your automation project",
        "text": "We send the technical-financial analysis at no cost. Response within 24 hours.",
        "btnPrimary": {
          "label": "Request ROI analysis",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "See 2026 tax benefits",
          "url": "/beneficios-fiscales"
        }
      },
      "relacionados": [
        {
          "titulo": "RIMI 2026: how it finances your automation",
          "slug": "rimi-2026-automatizacion"
        },
        {
          "titulo": "What is an ASRS system",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "Stacker Crane vs Shuttle",
          "slug": "transelevador-vs-shuttle"
        }
      ]
    },
    "zh": {
      "metaTitle": "2026年仓库自动化成本要多少？| STOKA",
      "metaDesc": "2026年阿根廷仓库自动化成本指南：按技术类型划分的投资区间，以及RIMI与513/2025号法令对实际成本的影响。",
      "h1": "2026年仓库自动化的成本是多少",
      "categoria": "投资与ROI",
      "readTime": "8 分钟",
      "intro": "在首次技术洽谈中，最常被问到的问题始终如一：将我的仓库自动化需要多少成本？坦率地说，这取决于诸多因素——所选技术、吞吐量、货架高度、SKU 数量以及集成程度——但按项目类型仍然存在可供参考的投资区间。在阿根廷，自动化成本格局在 2025 年和 2026 年发生了重大变化：513/2025 号法令根据 ASRS 设备的 NCM 归类降低其进口关税，而 RIMI（第 27.802 号法律）允许在首个财政年度进行加速折旧，从而提升了所有仓库、库房及工业货仓自动化项目的投资回报率。",
      "sections": [
        {
          "h2": "按自动化系统类型划分的投资区间",
          "body": "基础自动化项目——用于车间或库房存放备件的 VLM 或垂直旋转货柜——起价为 USD 80,000 至 USD 200,000。用于电商或制药行业自动拣选的 MiniLoad 系统（1 条巷道，最多 5,000 个 SKU）的价格区间为 USD 300,000 至 USD 700,000。用于托盘的单元载荷堆垛机系统（1 至 2 条巷道，中等规模仓库）的价格介于 USD 800,000 与 USD 2,000,000 之间。配备 4 条以上巷道、集成输送系统以及 WMS/WCS 的全自动化仓库起价为 USD 3,000,000，在大规模项目中可超过 USD 10,000,000。上述数值为 CIF 加安装费用，不含土建工程。"
        },
        {
          "h2": "513/2025 号法令与 RIMI 对实际成本的影响",
          "body": "在 513/2025 号法令出台之前，进口 ASRS 设备须按 CIF 价值缴纳 12% 至 18% 的关税。对于一个 USD 1,000,000 的项目，这笔额外成本高达 USD 120,000 至 USD 180,000。该法令生效后，这笔支出不复存在。RIMI（第 27.802 号法律）带来了另一项优惠：在首个财政年度对资本资产进行 100% 加速折旧，可降低投资当年的税负。对于按 35% 税率纳税的企业而言，一个 USD 1,000,000 的项目可带来约 USD 350,000 的税负减免，并分摊于各年度。两项优惠叠加，可使项目的净成本降低 25% 至 35%。"
        },
        {
          "h2": "按行业与项目类型划分的典型投资回报率",
          "body": "自动化项目的投资回报率主要取决于当前人工作业的成本，以及自动化所能节省的费用。在订单量较高（每日 >500 单）的电商领域，典型的投资回报期为 18 至 30 个月，因为拣选环节的人工成本节省十分可观。在采用两班制的 3PL 配送库房中，投资回报期介于 24 至 36 个月。在涉及 WIP 与备件的制造业中，投资回报期可能更长（36–48 个月），但涵盖了查找时间、生产差错以及腾出空间等方面的节省。在冷库中，因减少开门次数而额外节省的能耗可将投资回报期缩短 6 至 12 个月。"
        },
        {
          "h2": "如何为投资融资：BICE 及可用方案",
          "body": "面向工业现代化的 BICE 贷款可为项目价值提供最高 80% 的融资，期限 10 年，并设有 2 年的宽限期。对于一个 USD 1,000,000 的项目，这意味着初始投入为 USD 200,000，在宽限期后的 8 年内按当前优惠利率每月还款约 USD 8,500。许多运营总监会将这笔月供与该系统所替代的每月人工成本直接进行比较：在规模设计合理的项目中，自动化能够以自身的运营节省来偿还贷款。STOKA 团队将免费编制商业计划书与技术论证，用于向银行提交申请。"
        }
      ],
      "conclusionH2": "正确的价格需针对您的运营量身计算",
      "conclusion": "仓库自动化并无标准价格，因为每一项运营都是独一无二的。计算 10 年期的 TCO（总拥有成本）需要了解当前的吞吐量、人工成本、SKU 结构以及现有仓库或库房的限制条件。STOKA 在首次咨询中免费完成该项计算，并提供一份技术报告，其中包括各方案的对比、预测的投资回报率以及适用于您具体情况的税收优惠。",
      "faq": [
        {
          "q": "ASRS 的价格是否包含安装？",
          "a": "STOKA 的报价为交钥匙工程：涵盖设备、运输、详细工程设计、机械与电气安装、与现有 WMS/ERP 的集成以及培训。不包含的部分为土建工程（如有需要）以及客户的 ERP 软件。"
        },
        {
          "q": "使 ASRS 项目具备合理性的最低投资是多少？",
          "a": "如果查找时间与库存差错方面的节省足够可观，VLM 或垂直旋转货柜的投资在 USD 80,000 时即可具备合理性。对于 MiniLoad 或堆垛机而言，合理的最低投资通常自 USD 300,000 起，且日吞吐量不低于 300 次作业。"
        },
        {
          "q": "RIMI 如何影响项目的实际价格？",
          "a": "RIMI（第 27.802 号法律）允许在首个财政年度对资本资产进行 100% 折旧，从而降低所得税税基。对于按 35% 税率纳税的企业而言，一个 USD 500,000 的项目可在投资当年带来 USD 175,000 的税负减免。若再叠加 513/2025 号法令的 0% 关税，净成本可比标价低 25-30%。"
        },
        {
          "q": "安装完成后的技术支持费用是多少？",
          "a": "年度预防性维护合同的费用通常相当于已安装设备价值的 3% 至 5%。其中包括每半年一次的预防性维护上门服务、易损备件以及电话/远程技术支持。STOKA 在阿根廷设有支持团队，可在数小时内响应，而非数天。"
        }
      ],
      "cta": {
        "heading": "计算您自动化项目的投资回报率",
        "text": "我们将免费提供技术财务分析，24 小时内回复。",
        "btnPrimary": {
          "label": "申请投资回报率分析",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "查看 2026 年税收优惠",
          "url": "/beneficios-fiscales"
        }
      },
      "relacionados": [
        {
          "titulo": "RIMI 2026：如何为您的自动化融资",
          "slug": "rimi-2026-automatizacion"
        },
        {
          "titulo": "什么是 ASRS 系统",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "堆垛机 vs 穿梭车",
          "slug": "transelevador-vs-shuttle"
        }
      ]
    }
  },
  "transelevador-vs-shuttle": {
    "en": {
      "metaTitle": "Stacker Crane vs Shuttle: Which to Choose | STOKA",
      "metaDesc": "Technical comparison of unit-load stacker crane vs pallet shuttle: throughput, density, cost and operation. Which suits your warehouse best.",
      "h1": "Stacker crane vs shuttle: which is right for your operation",
      "categoria": "Technical comparisons",
      "readTime": "6 min",
      "intro": "Stacker crane or pallet shuttle: this is the first major technical decision in any pallet warehouse automation project. Both systems store and retrieve pallets automatically, but their throughput, density and cost profiles are very different. Getting it wrong can be expensive: a stacker crane in a warehouse that needed a shuttle delivers limited throughput; a shuttle in a warehouse that needed a stacker crane carries higher maintenance costs than necessary. This guide breaks down the concrete technical differences to help you determine which one is right for your warehouse.",
      "sections": [
        {
          "h2": "How each system works: architectural differences",
          "body": "The stacker crane is a crane that moves within a single aisle: it travels horizontally on floor and ceiling rails and raises a telescopic fork that retrieves the pallet from its cell. Each aisle has a dedicated stacker crane, and operation is sequential—one pallet at a time. The pallet shuttle, by contrast, operates inside the rack channel: an autonomous robot enters the channel, picks up the pallet and moves it. Vertical lifts carry the pallets between levels. A single aisle can hold multiple robots working in parallel on different levels. This parallel architecture is the shuttle's fundamental advantage over the stacker crane."
        },
        {
          "h2": "Throughput compared: when the shuttle wins and when it loses",
          "body": "A unit-load stacker crane handles up to 200 pallets/hour in combined cycles per aisle. A shuttle system can exceed 400 pallets/hour in the same aisle when enough robots operate in parallel. On raw throughput, the shuttle wins. However, the stacker crane is more efficient for operations with strict FIFO rotation and high SKU variability: because every cell is directly accessible, it can retrieve any pallet in any position without moving the others. The shuttle operates in LIFO mode within the channels (the last pallet in is the first one out), although 4-way models allow greater access flexibility."
        },
        {
          "h2": "Storage density and footprint",
          "body": "The shuttle is the density champion: deep storage channels let you hold 10, 20 or even 30 pallets deep within the same aisle width a stacker crane occupies. For homogeneous products with a long shelf life (non-perishable foods, raw materials), a shuttle warehouse can store 40-60% more pallets in the same footprint than one built around stacker cranes. For operations with many different SKUs (high heterogeneity), the stacker crane makes better use of the space because every cell is individually accessible with no loss of density."
        },
        {
          "h2": "Total cost of ownership: which is cheaper over 10 years",
          "body": "The stacker crane has a higher upfront investment cost and a more predictable maintenance cost: it is a robust mechanical machine with few moving components. The shuttle has a lower initial cost per aisle but more robots to maintain—across a large fleet, maintenance costs are proportionally higher. Over 10 years, for operations of up to 2 aisles with moderate throughput, the stacker crane usually has a lower TCO. For high-density, high-throughput operations (3+ aisles, more than 800 moves/hour), the shuttle is competitive on TCO and superior on performance."
        }
      ],
      "conclusionH2": "The choice depends on your operating profile, not the technology",
      "conclusion": "There is no universal winner between the stacker crane and the shuttle. The right choice depends on the number of distinct SKUs, the throughput required, inventory rotation and the space available. STOKA simulates both options using the real data from your warehouse and shows you the comparative 10-year TCO before you make any investment decision.",
      "faq": [
        {
          "q": "Can a stacker crane and a shuttle be combined in the same warehouse?",
          "a": "Yes. A very common hybrid configuration uses stacker cranes for zone A aisles (high rotation, many SKUs) and shuttles for zones B/C (low rotation, homogeneous products). The same WCS manages both types of equipment transparently."
        },
        {
          "q": "Can the pallet shuttle operate in cold storage?",
          "a": "Yes. DELIE shuttle robots have a cold-storage version (-30 °C). The lithium batteries operate in cold conditions thanks to internal heating systems. Battery charging takes place in a temperature-controlled area to extend the life of the pack."
        },
        {
          "q": "How many aisles are needed for a shuttle to be cost-effective?",
          "a": "In general, the shuttle starts to be more cost-effective than the stacker crane in configurations of 2+ aisles with homogeneous products and low SKU variability. For single aisles with a high product mix, the stacker crane is usually the better technical and economic option."
        },
        {
          "q": "Does the stacker crane require special civil works?",
          "a": "The floor slab must be level to within ±5 mm over 5 meters and have the load capacity required for the stacker crane rails. It needs no special structural work if the warehouse already has the necessary clear height."
        }
      ],
      "cta": {
        "heading": "We simulate stacker crane vs shuttle for your operation",
        "text": "A comparative 10-year TCO based on your warehouse data. Free, with no commitment.",
        "btnPrimary": {
          "label": "Request a technical simulation",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "View AS/RS systems",
          "url": "/catalogo/asrs"
        }
      },
      "relacionados": [
        {
          "titulo": "What is an ASRS system",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "How much does it cost to automate a warehouse",
          "slug": "cuanto-cuesta-automatizar-almacen"
        },
        {
          "titulo": "AGV vs AMR: the differences",
          "slug": "agv-vs-amr"
        }
      ]
    },
    "zh": {
      "metaTitle": "堆垛机 vs 穿梭车：如何选择 | STOKA",
      "metaDesc": "单元载荷堆垛机与托盘穿梭车的技术对比：吞吐量、存储密度、成本与运营。哪种更适合您的仓库。",
      "h1": "堆垛机 vs 穿梭车：根据您的运营选择合适方案",
      "categoria": "技术对比",
      "readTime": "6 分钟",
      "intro": "堆垛机还是托盘穿梭车：这是任何托盘仓库自动化项目中的第一个重大技术决策。两种系统都能自动存取托盘，但在吞吐量、存储密度和成本方面的特性截然不同。选错代价高昂：在本需要穿梭车的仓库中使用堆垛机，吞吐量会受到限制；在本需要堆垛机的仓库中使用穿梭车，则会产生高于必要水平的维护成本。本指南将阐明具体的技术差异，帮助您确定哪种方案最适合您的仓库。",
      "sections": [
        {
          "h2": "各系统的工作原理：架构差异",
          "body": "堆垛机是一种在单一巷道内运行的起重设备：它沿地面和顶部的导轨水平移动，并升降伸缩货叉，从货位中取出托盘。每条巷道配备一台专用堆垛机，作业方式为顺序作业——每次处理一个托盘。托盘穿梭车则在货架通道内作业：一台自主机器人进入通道，抓取托盘并将其移动。垂直提升机负责在各层之间运送托盘。同一条巷道可容纳多台机器人在不同层并行作业。这种并行架构正是穿梭车相较于堆垛机的根本优势。"
        },
        {
          "h2": "吞吐量对比：穿梭车何时占优、何时逊色",
          "body": "单元载荷堆垛机在每条巷道的复合作业循环中最多可处理 200 个托盘/小时。当有足够的机器人并行作业时，穿梭车系统在同一条巷道内可超过 400 个托盘/小时。就纯吞吐量而言，穿梭车占优。然而，对于要求严格 FIFO 轮转且 SKU 变化多的运营，堆垛机效率更高：由于每个货位均可直接存取，它无需移动其他托盘即可取出任意位置的任意托盘。穿梭车在通道内以 LIFO 模式作业（最后入库的托盘最先出库），不过四向车型可提供更高的存取灵活性。"
        },
        {
          "h2": "存储密度与占地面积",
          "body": "穿梭车是密度之王：深通道存储可在堆垛机所占的相同巷道宽度内实现 10、20 乃至 30 个托盘的纵深存储。对于保质期长的同质化产品（非易腐食品、原材料），穿梭车仓库在相同占地面积下可比采用堆垛机的仓库多存储 40-60% 的托盘。而对于 SKU 种类繁多（高度异质）的运营，堆垛机对空间的利用更佳，因为每个货位均可单独存取，不会损失密度。"
        },
        {
          "h2": "总拥有成本：十年内哪种更经济",
          "body": "堆垛机的初始投资成本较高，但维护成本更可预测：它是一种结构坚固、活动部件较少的机械设备。穿梭车的每巷道初始成本较低，但需要维护的机器人更多——在大型机队中，维护成本按比例更高。就十年而言，对于最多 2 条巷道、吞吐量适中的运营，堆垛机的 TCO 通常更低。而对于高密度、高吞吐量的运营（3 条以上巷道、每小时超过 800 次移动），穿梭车在 TCO 上具有竞争力，在性能上更胜一筹。"
        }
      ],
      "conclusionH2": "选择取决于您的运营特征，而非技术本身",
      "conclusion": "在堆垛机与穿梭车之间不存在普遍适用的赢家。正确的选择取决于不同 SKU 的数量、所需吞吐量、库存轮转以及可用空间。STOKA 会使用您仓库的真实数据对两种方案进行模拟，并在您做出任何投资决策之前，向您展示十年期的 TCO 对比。",
      "faq": [
        {
          "q": "堆垛机和穿梭车可以在同一仓库中组合使用吗？",
          "a": "可以。一种非常常见的混合配置是：A 区巷道（高轮转、多 SKU）使用堆垛机，B/C 区（低轮转、同质化产品）使用穿梭车。同一套 WCS 可透明地管理这两类设备。"
        },
        {
          "q": "托盘穿梭车能在冷库中运行吗？",
          "a": "可以。DELIE 穿梭车机器人配有冷库版本（-30 °C）。锂电池借助内部加热系统可在低温环境下运行。电池充电在恒温区域进行，以延长电池组的使用寿命。"
        },
        {
          "q": "穿梭车需要多少条巷道才能具备经济效益？",
          "a": "一般而言，在配置 2 条以上巷道、产品同质化且 SKU 变化较少的情况下，穿梭车开始比堆垛机更具经济效益。对于产品组合复杂的单巷道，堆垛机通常是更优的技术与经济选择。"
        },
        {
          "q": "堆垛机需要特殊的土建工程吗？",
          "a": "地坪必须在 5 米范围内将平整度控制在 ±5 mm 以内，并具备堆垛机导轨所需的承载能力。如果仓库已具备所需的净高，则无需特殊的结构工程。"
        }
      ],
      "cta": {
        "heading": "我们为您的运营模拟堆垛机 vs 穿梭车",
        "text": "基于您仓库数据的十年期 TCO 对比。免费，无需承诺。",
        "btnPrimary": {
          "label": "申请技术模拟",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "查看 AS/RS 系统",
          "url": "/catalogo/asrs"
        }
      },
      "relacionados": [
        {
          "titulo": "什么是 ASRS 系统",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "自动化仓库需要多少成本",
          "slug": "cuanto-cuesta-automatizar-almacen"
        },
        {
          "titulo": "AGV vs AMR：区别",
          "slug": "agv-vs-amr"
        }
      ]
    }
  },
  "rimi-2026-automatizacion": {
    "en": {
      "metaTitle": "RIMI 2026: How It Funds Your Warehouse Automation | STOKA",
      "metaDesc": "Practical guide to RIMI (Law 27.802): accelerated depreciation of capital goods, early IVA refunds and tax benefits for SMEs automating warehouses.",
      "h1": "RIMI 2026: how the new regime funds your automation",
      "categoria": "Tax benefits",
      "readTime": "7 min",
      "intro": "RIMI (the Manufacturing and Industry Incentive Regime, Law 27.802) is the most relevant tax instrument of 2026 for SMEs and mid-sized companies looking to automate their warehouses and storage facilities in Argentina. Unlike RIGI — which requires investments of USD 200 million or more — RIMI was designed for standard industrial-scale projects, without such a high minimum threshold. Its main benefit: 100% accelerated depreciation of capital goods acquired in the first fiscal year, plus an early IVA refund on imported equipment. For a USD 500.000 warehouse automation project, these two benefits cut the tax burden in the investment year by up to USD 200.000.",
      "sections": [
        {
          "h2": "What RIMI is and who qualifies",
          "body": "RIMI (Law 27.802) is a special incentive regime for manufacturing and industrial investments in Argentina. It is designed for companies that do not qualify for RIGI because they fall short of the minimum investment threshold or do not operate in that regime's eligible sectors. RIMI's benefits apply to: the acquisition of new capital goods (machinery, automation equipment, industrial robotics), the import of equipment for productive use, and industrial process modernization projects. To apply, a company must submit an investment project to AFIP together with the technical and commercial documentation for the equipment to be acquired. STOKA supports this process with the project's technical documentation."
        },
        {
          "h2": "Accelerated depreciation of capital goods: how it works",
          "body": "Normally, an ASRS system or a stacker crane is depreciated over 10 years for accounting purposes (10% per year). With RIMI, you can depreciate 100% of the asset in the first fiscal year. What does that mean in cash terms? For a company paying Income Tax at 35%, a USD 500.000 system counts as the equivalent amount in ARS as a fixed asset. With accelerated depreciation, that full amount is deducted in year 1, reducing the Income Tax base by USD 500.000. The tax saving in the first fiscal year is USD 175.000 (35% × USD 500.000) instead of USD 17.500 (35% × 10% × USD 500.000) under normal depreciation. The difference is USD 157.500 of additional liquidity in the first year."
        },
        {
          "h2": "Early IVA refund: impact on cash flow",
          "body": "When importing ASRS equipment, the company pays IVA at customs. Normally, that IVA is recovered through the tax credit within AFIP's standard processing period, which can stretch from 6 to 18 months. RIMI enables an early IVA refund on capital goods imports within a much shorter timeframe — usually 90 to 120 days — significantly improving the project's cash flow. For a USD 800.000 system (with 21% IVA = USD 168.000), recovering that amount in 3 months instead of 12-18 months represents a financial benefit equal to the cost of money over that period."
        },
        {
          "h2": "Combining RIMI + Decreto 513/2025 + BICE: the optimal scenario",
          "body": "The three instruments are compatible and reinforce one another. Decreto 513/2025 reduces the import tariff based on the NCM classification (savings vary by NCM). RIMI cuts the first-year tax burden through accelerated depreciation and early IVA refunds. The BICE credit line finances up to 80% of the project over 10 years at a preferential rate. In a representative USD 1.000.000 project: the 0% tariff saves USD 150.000, RIMI's accelerated depreciation generates USD 350.000 in tax deductions in year 1, and BICE brings the upfront outlay down to USD 200.000. The impact on first-year cash flow is dramatic: a company can launch a million-dollar system with a net initial outlay that competes with the labor cost it is replacing."
        }
      ],
      "conclusionH2": "2026 won't come around again",
      "conclusion": "RIMI, Decreto 513/2025 and BICE have aligned at an unusual moment. There is no guarantee this tax environment will hold beyond 2026-2027: decrees are reviewed annually and tax regimes change. Companies that structure their automation projects within this window of opportunity capture benefits that those who wait may no longer have available. STOKA analyzes which combination of benefits maximizes savings for your specific project, free of charge.",
      "faq": [
        {
          "q": "How does RIMI differ from RIGI?",
          "a": "RIGI (Law 27.742) requires investments of USD 200 million or more and offers 30 years of full tax stability. RIMI (Law 27.802) is designed for standard industrial-scale projects — without such a high minimum threshold — and offers accelerated depreciation and early IVA refunds. For most warehouse and storage-facility automation projects in Argentina, RIMI is the more accessible and applicable instrument."
        },
        {
          "q": "What documentation do I need to access RIMI?",
          "a": "Essentially you need: a pro forma invoice or purchase contract for the capital good, a technical description of the equipment and its productive function, and formal enrollment in the regime through AFIP. STOKA provides all the technical documentation for the ASRS system required by the regime."
        },
        {
          "q": "Does RIMI apply to WMS/WCS software as well as hardware?",
          "a": "Warehouse management and control software (WMS/WCS) acquired as part of an integrated automation system can qualify as a capital good under RIMI. The specific categorization depends on how the contract is structured. STOKA recommends consulting your tax advisor before signing the contract."
        },
        {
          "q": "When is a RIGI route preferable to RIMI?",
          "a": "RIGI is worthwhile when the project exceeds USD 200 million and the company seeks 30-year tax stability with free availability of foreign currency. For smaller projects — practically all standard warehouse, storage-facility and industrial distribution-center automation projects — RIMI + Decreto 513 + BICE is the most accessible combination with the greatest short-term impact."
        }
      ],
      "cta": {
        "heading": "We analyze which tax benefits apply to your project",
        "text": "Free tax assessment: RIMI, Decreto 513 and BICE for your specific case.",
        "btnPrimary": {
          "label": "Request a tax analysis",
          "url": "/beneficios-fiscales"
        },
        "btnSecondary": {
          "label": "View ASRS systems",
          "url": "/catalogo/asrs"
        }
      },
      "relacionados": [
        {
          "titulo": "How much it costs to automate a warehouse",
          "slug": "cuanto-cuesta-automatizar-almacen"
        },
        {
          "titulo": "What is an ASRS system",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "WMS vs WCS: what each software does",
          "slug": "wms-vs-wcs"
        }
      ]
    },
    "zh": {
      "metaTitle": "RIMI 2026：新税制如何为您的仓库自动化融资 | STOKA",
      "metaDesc": "RIMI（第27.802号法律）实用指南：资本货物加速折旧、IVA 提前退税，以及为自动化仓库的中小企业提供的税收优惠。",
      "h1": "RIMI 2026：新税制如何为您的自动化项目融资",
      "categoria": "税收优惠",
      "readTime": "7 分钟",
      "intro": "RIMI（制造业与工业激励制度，第27.802号法律）是 2026 年对希望在阿根廷实现仓库及货栈自动化的中小企业和中型企业而言最重要的税收工具。与要求投资达 2 亿美元或以上的 RIGI 不同，RIMI 专为标准工业规模的项目设计，没有如此之高的最低门槛。其核心优惠在于：对首个财政年度购置的资本货物给予 100% 加速折旧，并对进口设备提供 IVA 提前退税。对于一个 USD 500.000 的仓库自动化项目而言，这两项优惠可将投资当年的税负最多降低 USD 200.000。",
      "sections": [
        {
          "h2": "什么是 RIMI，谁可以申请",
          "body": "RIMI（第27.802号法律）是阿根廷针对制造业和工业投资的一项特别激励制度。它专为因未达到最低投资门槛、或不属于 RIGI 合格行业而无法适用 RIGI 的企业而设计。RIMI 的优惠适用于：购置全新的资本货物（机械、自动化设备、工业机器人）、进口用于生产的设备，以及工业流程现代化项目。企业若要申请，须向 AFIP 提交投资项目，并附上拟购置设备的技术与商业文件。STOKA 会以项目的技术文件全程协助这一流程。"
        },
        {
          "h2": "资本货物加速折旧：运作方式",
          "body": "通常情况下，一套 ASRS 系统或一台堆垛机在会计上按 10 年折旧（每年 10%）。而借助 RIMI，可在首个财政年度对该资产计提 100% 折旧。这在现金层面意味着什么？对于一家按 35% 缴纳所得税的企业，一套 USD 500.000 的系统即为等值的阿根廷比索（ARS）固定资产。采用加速折旧后，该笔金额可在第 1 年全额扣除，使所得税税基减少 USD 500.000。首个财政年度的税收节省为 USD 175.000（35% × USD 500.000），而非普通折旧下的 USD 17.500（35% × 10% × USD 500.000）。两者相差 USD 157.500，即第一年可多出这笔流动资金。"
        },
        {
          "h2": "IVA 提前退税：对现金流的影响",
          "body": "在进口 ASRS 设备时，企业需在海关缴纳 IVA。通常，这笔 IVA 会通过进项税抵扣、在 AFIP 常规处理周期内收回，而该周期可能长达 6 至 18 个月。RIMI 允许对资本货物进口的 IVA 提前退税，退税周期大幅缩短——通常为 90 至 120 天——从而显著改善项目的现金流。以一套 USD 800.000 的系统为例（21% 的 IVA = USD 168.000），在 3 个月内而非 12-18 个月内收回这笔款项，其带来的财务收益相当于该期间的资金成本。"
        },
        {
          "h2": "RIMI + Decreto 513/2025 + BICE 组合：最优方案",
          "body": "这三项工具彼此兼容，并能相互增强。Decreto 513/2025 根据 NCM 分类降低进口关税（节省额因 NCM 而异）。RIMI 通过加速折旧和 IVA 提前退税降低第一年的税负。BICE 信贷额度可为项目提供最高 80% 的融资，期限 10 年，利率优惠。在一个具代表性的 USD 1.000.000 项目中：0% 关税可节省 USD 150.000，RIMI 的加速折旧在第 1 年产生 USD 350.000 的税前扣除，而 BICE 将初始支出降至 USD 200.000。对第一年现金流的影响十分显著：企业能够以与其所替代的人力成本相当的净初始支出，启动一套价值百万美元的系统。"
        }
      ],
      "conclusionH2": "2026 年的机会窗口不会再现",
      "conclusion": "RIMI、Decreto 513/2025 与 BICE 在一个不寻常的时刻实现了对齐。无法保证这一税收环境会延续至 2026-2027 年之后：各项法令每年都会复审，税收制度也会随之变化。在这一机会窗口内构建自动化项目的企业，将获得那些观望者日后可能无法享有的优惠。STOKA 免费为您分析何种优惠组合能为您的具体项目实现最大化节省。",
      "faq": [
        {
          "q": "RIMI 与 RIGI 有何区别？",
          "a": "RIGI（第27.742号法律）要求投资达 2 亿美元或以上，并提供 30 年的完全税收稳定性。RIMI（第27.802号法律）专为标准工业规模的项目设计——没有如此之高的最低门槛——并提供加速折旧和 IVA 提前退税。对于阿根廷绝大多数仓库和货栈自动化项目而言，RIMI 是更易获得、更适用的工具。"
        },
        {
          "q": "申请 RIMI 需要哪些文件？",
          "a": "基本上您需要：资本货物的形式发票或采购合同、设备的技术说明及其生产用途，以及通过 AFIP 正式加入该制度。STOKA 会提供该制度所要求的 ASRS 系统全部技术文件。"
        },
        {
          "q": "除硬件外，RIMI 是否也适用于 WMS/WCS 软件？",
          "a": "作为集成自动化系统一部分而购置的仓库管理与控制软件（WMS/WCS），可在 RIMI 下被认定为资本货物。具体归类取决于合同的结构方式。STOKA 建议在签署合同前咨询税务顾问。"
        },
        {
          "q": "在什么情况下 RIGI 路线比 RIMI 更合适？",
          "a": "当项目超过 2 亿美元、且企业寻求 30 年税收稳定性和外汇自由支配时，RIGI 更为合适。对于规模较小的项目——几乎所有标准的仓库、货栈和工业物流中心自动化项目——RIMI + Decreto 513 + BICE 是最易获得、短期影响最大的组合。"
        }
      ],
      "cta": {
        "heading": "我们为您分析哪些税收优惠适用于您的项目",
        "text": "免费税务诊断：针对您的具体情况解析 RIMI、Decreto 513 与 BICE。",
        "btnPrimary": {
          "label": "申请税务分析",
          "url": "/beneficios-fiscales"
        },
        "btnSecondary": {
          "label": "查看 ASRS 系统",
          "url": "/catalogo/asrs"
        }
      },
      "relacionados": [
        {
          "titulo": "自动化一座仓库需要多少成本",
          "slug": "cuanto-cuesta-automatizar-almacen"
        },
        {
          "titulo": "什么是 ASRS 系统",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "WMS 与 WCS：各自负责什么",
          "slug": "wms-vs-wcs"
        }
      ]
    }
  },
  "agv-vs-amr": {
    "en": {
      "metaTitle": "AGV vs AMR: Key Differences and When to Use Each",
      "metaDesc": "Technical comparison of AGV and AMR robots for warehouses: navigation, flexibility, cost and use cases. Find out which fits your operation best.",
      "h1": "AGV vs AMR: the differences and when to use each in your warehouse",
      "categoria": "Technical comparisons",
      "readTime": "6 min",
      "intro": "AGVs and AMRs are two types of mobile robots used for internal transport in warehouses and industrial facilities. Both replace the work of a forklift or an operator pushing a cart, but they go about it in very different ways. Choosing between an AGV and an AMR is more than a technical call: it has real consequences for operational flexibility, installation costs, maintenance and your ability to scale. This guide breaks down the concrete differences so you can pick the right option for your operation in Argentina.",
      "sections": [
        {
          "h2": "How each one navigates: the fundamental difference",
          "body": "An AGV (Automated Guided Vehicle) follows predefined routes that are physically marked on the floor: magnetic tape, QR codes or inductive wires. The route is fixed, so if the warehouse layout changes, the guidance system has to be physically reconfigured. Its strength is high repeatability and precision on constant routes, which makes it ideal for production lines where the flow is always the same. An AMR (Autonomous Mobile Robot) builds a map of the warehouse and navigates freely using SLAM (Simultaneous Localization And Mapping). It detects obstacles in real time with laser sensors and 3D cameras, and recalculates its route within milliseconds. It needs no floor markings and no physical changes to the layout."
        },
        {
          "h2": "Flexibility vs. repeatability: which matters more for you",
          "body": "If your warehouse has fixed, predictable flows — the same route from the production line to storage, day in and day out — the AGV is the more robust option with lower maintenance costs. If your operation changes frequently (seasonal layouts, a variable product mix, picking zones that rotate), the AMR comes out ahead because its map updates without any physical intervention. An operator can add restricted areas, variable speeds and preferred routes directly from software. AMRs also adapt better to environments where people and equipment move around in unplanned ways."
        },
        {
          "h2": "Implementation and maintenance costs",
          "body": "An AGV is generally cheaper to purchase than an equivalent AMR. However, the AGV carries additional installation costs: the physical guidance (magnetic tape, floor QR codes, etc.) has an upfront cost and requires periodic maintenance. AGVs also call for more detailed layout engineering before installation. AMRs have a higher purchase price but a lower installation cost: the initial mapping takes 1 to 2 days and requires no construction work. For operations with stable layouts lasting 5 years or more, the AGV can come out cheaper on total cost of ownership. For operations with frequent changes or spaces shared with people, the AMR delivers a lower TCO."
        },
        {
          "h2": "When to combine AGVs and AMRs in the same operation",
          "body": "Many mid-size and large facilities in Argentina use both types of robots in different zones. AGVs handle the routes from the production line to storage: fixed, repetitive flows with heavy loads. AMRs work the picking and dispatch zones: variable flows, coexistence with people, and a need to adapt. The same WCS can manage both fleets seamlessly, assigning missions dynamically so each robot gets the job best suited to its capabilities. STOKA designs the optimal mixed-fleet architecture for every installation."
        }
      ],
      "conclusionH2": "The right choice depends on your real layout and flows",
      "conclusion": "There is no universal winner between AGV and AMR. The AGV is the best option for fixed, predictable flows; the AMR is the better fit for dynamic environments shared with people. In many warehouses, combining the two maximizes ROI. The STOKA team maps the flows of your current operation and recommends the optimal combination during a free initial consultation.",
      "faq": [
        {
          "q": "How long does it take to deploy an AMR fleet?",
          "a": "Mapping the warehouse takes 1 to 2 days. Integration with the WCS and operator training add another 1 to 2 weeks. An AMR fleet can be up and running within 4 to 8 weeks of the equipment arriving at the warehouse, with no civil works or physical modifications."
        },
        {
          "q": "Can AMRs operate alongside people without risk?",
          "a": "Yes. DELIE AMRs are certified for environments with people. Their sensors detect obstacles at 5 meters and brake at 0.5 meters. In high-traffic zones, the WCS sets up virtual traffic lights to prevent congestion."
        },
        {
          "q": "How many AMRs does my warehouse need?",
          "a": "It depends on throughput, the average distance of each trip and the load/unload speed. STOKA simulates the optimal fleet using data from your operation. As a reference, a 2,000 m² warehouse handling 200 missions per hour can run on 8 to 12 medium-capacity AMRs."
        },
        {
          "q": "Can the AMR system integrate with my current ERP or WMS?",
          "a": "Yes. DELIE AMRs integrate via REST API with any WMS or ERP. The WCS acts as middleware between the management system and the robots, making the integration transparent for the client's system."
        }
      ],
      "cta": {
        "heading": "We analyze which robots are right for your operation",
        "text": "Free flow study and technical fleet recommendation within 24 hours.",
        "btnPrimary": {
          "label": "Request a fleet analysis",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "View AGV / AMR robots",
          "url": "/catalogo/robots-manipulacion/agv-amr"
        }
      },
      "relacionados": [
        {
          "titulo": "What is an ASRS system",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "Stacker crane vs. shuttle",
          "slug": "transelevador-vs-shuttle"
        },
        {
          "titulo": "WMS vs. WCS",
          "slug": "wms-vs-wcs"
        }
      ]
    },
    "zh": {
      "metaTitle": "AGV 与 AMR：核心区别及各自适用场景",
      "metaDesc": "面向仓库的 AGV 与 AMR 机器人技术对比：导航方式、灵活性、成本与应用场景，帮助您判断哪种更适合自己的运营。",
      "h1": "AGV 与 AMR：两者的区别以及在仓库中如何选择",
      "categoria": "技术对比",
      "readTime": "6 分钟",
      "intro": "AGV 和 AMR 是两类用于仓库及工业场所内部搬运的移动机器人。两者都能替代叉车或人工推车的作业，但实现方式截然不同。在 AGV 与 AMR 之间做选择，绝不仅仅是一项技术决策：它直接关系到运营的灵活性、安装成本、维护费用以及运营的扩展能力。本指南将梳理两者之间的具体差异，帮助您为在阿根廷的运营选出合适的方案。",
      "sections": [
        {
          "h2": "两者如何导航：最根本的区别",
          "body": "AGV（自动导引车，Automated Guided Vehicle）沿着预先设定、并在地面上以物理方式标记的路线行驶：磁条、二维码或感应电缆。其路线是固定的，因此一旦仓库布局发生变化，就必须对导引系统进行物理层面的重新配置。它的优势在于在固定路线上具有高度的可重复性和精度，非常适合流程始终不变的生产线。AMR（自主移动机器人，Autonomous Mobile Robot）则会构建仓库地图，并借助 SLAM（同步定位与建图，Simultaneous Localization And Mapping）自由导航。它通过激光传感器和 3D 摄像头实时检测障碍物，并在毫秒之间重新规划路线，无需在地面上做任何标记，也无需对布局进行物理改造。"
        },
        {
          "h2": "灵活性还是可重复性：哪一点对您的运营更重要",
          "body": "如果您的仓库拥有固定且可预测的流程——每天都是从生产线到仓储的同一条路线——那么 AGV 是更稳健、维护成本更低的选择。如果您的运营经常变化（季节性布局、产品组合多变、拣选区域轮换），AMR 则更胜一筹，因为它的地图无需任何物理干预即可更新。操作人员可以直接在软件中添加禁行区、设置可变速度和优先路线。在人员和设备以非计划方式往来的环境中，AMR 也能更好地适应。"
        },
        {
          "h2": "实施与维护成本",
          "body": "购置一台 AGV 通常比购置一台同等的 AMR 更便宜。不过，AGV 会带来额外的安装成本：物理导引装置（磁条、地面二维码等）既有前期投入，也需要定期维护。AGV 在安装前还需要更为细致的布局工程设计。AMR 的购置成本较高，但安装成本较低：初次建图仅需 1 至 2 天，无需任何施工。对于布局稳定、可维持 5 年以上的运营而言，AGV 在总拥有成本（TCO）上可能更划算；而对于变化频繁、或与人员共用空间的运营，AMR 的 TCO 更低。"
        },
        {
          "h2": "何时在同一运营中将 AGV 与 AMR 结合使用",
          "body": "阿根廷许多中大型场所会在不同区域同时使用这两类机器人。AGV 负责从生产线到仓储的路线：流程固定、重复、载重较大。AMR 则负责拣选和出库区域：流程多变、需与人员共处、需要灵活适应。同一套 WCS 可以透明地管理两支机队：任务分配是动态进行的，每台机器人都会领到与其能力相匹配的工作。STOKA 会为每一个项目设计最优的混合机队架构。"
        }
      ],
      "conclusionH2": "正确的选择取决于您真实的布局与流程",
      "conclusion": "在 AGV 与 AMR 之间并没有放之四海而皆准的赢家。AGV 最适合固定且可预测的流程；AMR 则更适合动态、且与人员共享的环境。在许多仓库中，将两者结合使用能够实现投资回报率（ROI）的最大化。STOKA 团队会在免费的初步咨询中梳理您当前运营的流程，并推荐最优的组合方案。",
      "faq": [
        {
          "q": "部署一支 AMR 机队需要多长时间？",
          "a": "仓库建图需要 1 至 2 天。与 WCS 的集成以及操作人员的培训再需要 1 至 2 周。从设备抵达仓库算起，一支 AMR 机队可在 4 至 8 周内投入运行，无需任何土建工程或物理改造。"
        },
        {
          "q": "AMR 能否与人员一同作业而不带来风险？",
          "a": "可以。DELIE 系列 AMR 已通过在有人环境中作业的认证。传感器可在 5 米处检测到障碍物，并在 0.5 米处刹停。在交通密度较高的区域，WCS 会设置虚拟信号灯以避免拥堵。"
        },
        {
          "q": "我的仓库需要多少台 AMR？",
          "a": "这取决于吞吐量、每次运输的平均距离以及装卸速度。STOKA 会依据您运营的数据模拟出最优机队规模。作为参考，一个 2,000 平方米、每小时 200 次任务的仓库，可由 8 至 12 台中等载重的 AMR 来完成作业。"
        },
        {
          "q": "AMR 系统能否与我现有的 ERP 或 WMS 集成？",
          "a": "可以。DELIE 系列 AMR 通过 REST API 与任何 WMS 或 ERP 集成。WCS 作为管理系统与机器人之间的中间件，使集成对客户系统而言完全透明。"
        }
      ],
      "cta": {
        "heading": "我们为您分析哪种机器人最适合您的运营",
        "text": "24 小时内提供免费的流程研究与机队技术推荐方案。",
        "btnPrimary": {
          "label": "申请机队分析",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "查看 AGV / AMR 机器人",
          "url": "/catalogo/robots-manipulacion/agv-amr"
        }
      },
      "relacionados": [
        {
          "titulo": "什么是 ASRS 系统",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "堆垛机与穿梭车对比",
          "slug": "transelevador-vs-shuttle"
        },
        {
          "titulo": "WMS 与 WCS 对比",
          "slug": "wms-vs-wcs"
        }
      ]
    }
  },
  "wms-vs-wcs": {
    "en": {
      "metaTitle": "WMS vs WCS: Warehouse Software Roles Explained",
      "metaDesc": "The difference between WMS and WCS in automated warehouses: what each system does, how they connect to your ERP, and why an ASRS needs both.",
      "h1": "WMS vs WCS: what each software does in an automated warehouse",
      "categoria": "Logistics software",
      "readTime": "6 min",
      "intro": "WMS and WCS are two software systems that work side by side in any automated warehouse, yet they do completely different jobs. The two are often confused — an expensive mistake when it leads a company to deploy only one. The WMS manages inventory and business operations: what you have, where it is, when it comes in and when it goes out. The WCS controls the physical equipment in real time: which stacker crane moves, at what speed and in what sequence. Without a WMS, the warehouse doesn't know what products it holds. Without a WCS, the ASRS never receives its instructions. You need both.",
      "sections": [
        {
          "h2": "What the WMS (Warehouse Management System) does",
          "body": "The WMS is the warehouse management layer: it takes purchase and sales orders from the ERP, tracks inventory in real time, manages where each product is stored (slotting), and generates the tasks for receiving, put-away, picking, replenishment and dispatch. The WMS makes the business decisions: where to place a new pallet, how to distribute picking work across operators, when to replenish a pick face. It does not control the physical equipment directly — that is the WCS's job. The WMS talks to the ERP (SAP, Oracle, Dynamics), sending back movement confirmations, stock updates and order statuses."
        },
        {
          "h2": "What the WCS (Warehouse Control System) does",
          "body": "The WCS is the real-time brain that drives the physical equipment in an automated warehouse: stacker cranes, shuttles, conveyors, AMR robots, VLMs and palletizers. It receives missions from the WMS (store pallet X in location Y) and breaks them down into low-level commands for each machine's PLC. The WCS runs with latencies under 50 ms: it coordinates several machines at once to avoid deadlocks and maximize throughput. It also monitors the status of every machine at a 100 ms frequency, detects alarms and executes automatic recovery procedures before a fault turns into a stoppage."
        },
        {
          "h2": "How WMS, WCS and ERP integrate in practice",
          "body": "The chain of information in an automated warehouse works like this: the ERP receives a customer order and passes it to the WMS. The WMS checks stock, generates the picking orders and sends them to the WCS. The WCS assigns the missions to the equipment (stacker crane 1, retrieve the pallet in aisle A, location 15). The machines execute and report back to the WCS. The WCS confirms to the WMS. The WMS confirms to the ERP. The whole cycle can take under 2 minutes, from the moment the order arrives to the moment the pallet reaches the dispatch station. The WCS latency is the technical bottleneck: in DELIE systems, it is under 50 ms."
        },
        {
          "h2": "Do I need a WMS, a WCS or both: how to decide",
          "body": "If your warehouse has no automated equipment (stacker cranes, robots, conveyors), you probably only need a WMS to manage inventory and manual tasks. If you run ASRS equipment or robots, you need a WCS to control them even without a dedicated WMS (many companies use the WMS built into their ERP and add a WCS for the ASRS). If you want maximum efficiency and visibility, a fully integrated WMS + WCS stack is the optimal solution: it eliminates integration latency and gives you a unified, real-time view of the warehouse. DELIE's WMS and WCS were designed as an integrated stack, sharing the same database and a single interface."
        }
      ],
      "conclusionH2": "The right software is the one that integrates with your ERP without friction",
      "conclusion": "Deploying an ASRS without the right WCS is like buying a Formula 1 car with no steering wheel: the hardware simply can't run without its control software. And a WCS that doesn't communicate cleanly with your ERP's WMS creates inventory inconsistencies that can cost more than the system itself. At STOKA, the software implementation project is part of the turnkey contract: the technical integration with the client's ERP is our responsibility, not yours.",
      "faq": [
        {
          "q": "Can DELIE's WCS integrate with my SAP?",
          "a": "Yes. The DELIE WCS ships with certified connectors for SAP (IDoc, BAPI and RFC), Oracle, Microsoft Dynamics, Infor and proprietary systems. The two-way integration updates inventory in SAP in real time."
        },
        {
          "q": "How long does it take to implement the WMS/WCS?",
          "a": "The WCS on its own (without a WMS) is implemented in 4 to 8 weeks, alongside the ASRS installation. The full WMS + WCS stack takes between 12 and 20 weeks, including data migration, training and acceptance testing."
        },
        {
          "q": "Does DELIE's WMS replace the WMS in my ERP?",
          "a": "It can run as the primary system or as a satellite system for the automated zone, interfaced with your ERP's WMS. The choice depends on how complex your processes are and on how far the company wants to consolidate systems. STOKA lays out both options, with their pros and cons, before submitting the proposal."
        },
        {
          "q": "What happens to inventory if the WCS fails?",
          "a": "The WCS runs on a redundant server with automatic failover in under 30 seconds. The physical equipment has local PLCs with an emergency mode that allows manual operation while the WCS is restored. Inventory is locked in read-only mode during recovery."
        }
      ],
      "cta": {
        "heading": "We'll help you design the right software stack",
        "text": "Free WMS/WCS integration analysis with your existing ERP.",
        "btnPrimary": {
          "label": "Ask about software integration",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "See WMS and WCS software",
          "url": "/catalogo/software"
        }
      },
      "relacionados": [
        {
          "titulo": "What is an ASRS system",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "AGV vs AMR",
          "slug": "agv-vs-amr"
        },
        {
          "titulo": "Stacker crane vs shuttle",
          "slug": "transelevador-vs-shuttle"
        }
      ]
    },
    "zh": {
      "metaTitle": "WMS 与 WCS：仓库软件的区别与功能",
      "metaDesc": "自动化仓库中 WMS 与 WCS 的区别：两套软件各自的职责、如何与 ERP 集成，以及为何 ASRS 系统两者缺一不可。",
      "h1": "WMS 与 WCS：自动化仓库中两套软件各自的作用",
      "categoria": "物流软件",
      "readTime": "6 分钟",
      "intro": "WMS 和 WCS 是任何自动化仓库中协同运作的两套软件系统，但二者的职责截然不同。人们常常将它们混为一谈——而当这种混淆导致企业只部署其中一套时，代价往往十分高昂。WMS 负责库存管理和业务运营：有什么货、货在哪里、何时入库、何时出库。WCS 则实时控制物理设备：哪台堆垛机在运行、以什么速度、按什么顺序作业。没有 WMS，仓库就无从知晓自己拥有哪些商品；没有 WCS，ASRS 就无法接收指令。两者缺一不可。",
      "sections": [
        {
          "h2": "WMS（仓库管理系统）的职责",
          "body": "WMS 是仓库的管理系统：它从 ERP 接收采购订单和销售订单，实时管控库存，管理每件商品的存放位置（库位分配），并生成收货、上架、拣选、补货和发货等作业任务。WMS 负责业务层面的决策：新托盘应放到哪里、如何在操作员之间分配拣选工作、何时对某个拣选位进行补货。它并不直接控制物理设备——那是 WCS 的工作。WMS 与 ERP（SAP、Oracle、Dynamics）对接，向其回传移动确认、库存更新和订单状态。"
        },
        {
          "h2": "WCS（仓库控制系统）的职责",
          "body": "WCS 是实时运作的中枢，负责驱动自动化仓库中的物理设备：堆垛机、穿梭车、输送机、AMR 机器人、VLM 垂直升降柜和码垛机。它从 WMS 接收任务（将 X 号托盘存入 Y 号库位），并将其拆解为下发给各设备 PLC 的底层指令。WCS 以低于 50 毫秒的时延运行：它同时协调多台设备，以避免堵塞并最大化吞吐量。它还以 100 毫秒的频率监控每台设备的状态，检测报警，并在故障演变为停机之前执行自动恢复流程。"
        },
        {
          "h2": "WMS、WCS 与 ERP 在实践中如何集成",
          "body": "自动化仓库中的信息链条是这样运作的：ERP 接收到客户订单后将其下发给 WMS。WMS 核对库存、生成拣选指令并发送给 WCS。WCS 将任务分配给设备（1 号堆垛机，取回 A 巷道 15 号库位的托盘）。设备执行任务并向 WCS 反馈。WCS 向 WMS 确认，WMS 再向 ERP 确认。从订单进入系统到托盘抵达发货工位，整个流程可在 2 分钟以内完成。WCS 的时延是技术上的瓶颈：在 DELIE 系统中，该时延低于 50 毫秒。"
        },
        {
          "h2": "我需要 WMS、WCS 还是两者兼备：如何决策",
          "body": "如果您的仓库没有自动化设备（堆垛机、机器人、输送机），那么您可能只需要一套 WMS 来管理库存和人工作业。如果您拥有 ASRS 设备或机器人，即便没有自己的 WMS，也需要 WCS 来对其加以控制（许多企业使用其 ERP 自带的 WMS，再为 ASRS 加装 WCS）。如果您追求最高的效率和可视化程度，那么深度集成的 WMS + WCS 完整技术栈才是最优方案：它消除了集成带来的时延，并提供仓库的实时统一视图。DELIE 的 WMS 与 WCS 从设计之初就是一套集成技术栈，共享同一个数据库和统一的界面。"
        }
      ],
      "conclusionH2": "正确的软件，是能够与您的 ERP 无缝集成的软件",
      "conclusion": "部署 ASRS 却没有配套合适的 WCS，就像买了一辆没有方向盘的 F1 赛车：没有控制软件，硬件根本无法运转。而一套无法与您 ERP 中的 WMS 顺畅通信的 WCS，会造成库存数据不一致，其代价可能比系统本身还要高。在 STOKA，软件实施项目是交钥匙合同的一部分：与客户 ERP 的技术集成由我们负责，而非由您承担。",
      "faq": [
        {
          "q": "DELIE 的 WCS 能否与我的 SAP 集成？",
          "a": "可以。DELIE WCS 配备了面向 SAP（IDoc、BAPI 和 RFC）、Oracle、Microsoft Dynamics、Infor 以及各类专有系统的认证连接器。双向集成可实时更新 SAP 中的库存数据。"
        },
        {
          "q": "实施 WMS/WCS 需要多长时间？",
          "a": "仅实施 WCS（不含 WMS）可与 ASRS 安装同步进行，耗时 4 至 8 周。完整的 WMS + WCS 技术栈则需 12 至 20 周，其中包括数据迁移、培训和验收测试。"
        },
        {
          "q": "DELIE 的 WMS 会取代我 ERP 中的 WMS 吗？",
          "a": "它既可以作为主系统运行，也可以作为自动化区域的卫星系统，与 ERP 的 WMS 对接。具体如何取舍，取决于业务流程的复杂程度，以及企业整合系统的意愿。STOKA 会在提交方案之前，列明两种选项各自的利弊。"
        },
        {
          "q": "如果 WCS 发生故障，库存会怎样？",
          "a": "WCS 采用冗余服务器，可在 30 秒内自动完成故障切换。物理设备配有本地 PLC 和应急模式，能够在 WCS 恢复期间进行人工操作。在恢复过程中，库存将被锁定为只读模式。"
        }
      ],
      "cta": {
        "heading": "我们助您设计正确的软件技术栈",
        "text": "免费分析 WMS/WCS 与您现有 ERP 的集成方案。",
        "btnPrimary": {
          "label": "咨询软件集成",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "查看 WMS 与 WCS 软件",
          "url": "/catalogo/software"
        }
      },
      "relacionados": [
        {
          "titulo": "什么是 ASRS 系统",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "AGV 与 AMR 对比",
          "slug": "agv-vs-amr"
        },
        {
          "titulo": "堆垛机与穿梭车对比",
          "slug": "transelevador-vs-shuttle"
        }
      ]
    }
  },
  "automatizacion-bodegas-chile": {
    "en": {
      "metaTitle": "Warehouse Automation in Chile: 2026 Guide | STOKA",
      "metaDesc": "How to automate your warehouse in Chile: systems, costs and benefits. DELIE technology with local support. Cut space and errors in your operation.",
      "h1": "Warehouse automation in Chile: the opportunity in mining and agribusiness",
      "categoria": "Regional markets",
      "readTime": "7 min",
      "intro": "Chile has unique characteristics that make warehouse automation especially relevant: a mining industry operating in extreme zones (high plateau, desert, far south), a world-class wine industry with logistically complex wineries, and an export-driven agribusiness that needs precision cold-chain management. Across all of these sectors, the challenge is not only throughput or storage density: it is operating with few specialized workers, in areas with high staff turnover and extreme weather conditions. DELIE's ASRS systems, which STOKA integrates as a strategic partner in Chile and Argentina, are especially well suited to these conditions.",
      "sections": [
        {
          "h2": "Mining warehouse automation in Chile: the challenge of the north",
          "body": "Mining operations in northern Chile (Regions II through IV) need spare-parts, materials and supplies warehouses that can run with minimal staff under extreme-altitude conditions. Staff turnover in these areas is high and labor costs are steep. An ASRS or VLM system for mining spare parts solves three problems at once: it reduces the headcount needed in the warehouse, minimizes inventory errors (critical when a single missing part can shut down a multimillion-dollar production line) and shields inventory from the extreme dust and temperature conditions of the environment. DELIE's VLMs and vertical carousels come in versions certified for airborne-dust environments (IP6X)."
        },
        {
          "h2": "Automated winery warehouses: more capacity, less space",
          "body": "Chile's wine industry faces a particular challenge: production in areas such as Maipo, Colchagua or Casablanca is strongly seasonal, and wineries need to maximize storage capacity during harvest. High-density AS/RS racking makes it possible to store vertically without expanding the warehouse footprint, preserving the architectural character of the property and keeping land free for the vineyards. A shuttle system with controlled temperature (+10 °C to +18 °C) is the optimal solution for precision winemaking: it holds a constant temperature in the barrel or bottle store without the cost of an industrial-scale refrigerated chamber."
        },
        {
          "h2": "Cold chain in Chile: fruit and protein exports",
          "body": "Chile is the world's second-largest exporter of fresh fruit and one of the leading exporters of seafood. Both industries depend on an unbroken cold chain from harvest or catch all the way to the export container. DELIE's ASRS systems for cold rooms operate from -30 °C (frozen) to +4 °C (chilled) with the same equipment. For the refrigerated distribution centers at the ports of Valparaíso, San Antonio and Mejillones, automation reduces the warehouse's thermal load (fewer door openings, fewer people working in the cold) and increases capacity within the same footprint."
        },
        {
          "h2": "Why STOKA for automation projects in Chile",
          "body": "STOKA operates as a strategic partner in Chile, with an engineering team that serves projects across the entire country: from Arica to Punta Arenas. This is essential for mining projects in the north and operations in remote areas of the south: technical support does not depend on response times from Argentina or Asia. Chile's tax framework for imported capital goods also offers benefits: the VAT exemption on the import of capital goods for certain productive sectors applies to ASRS systems. As part of the project, STOKA handles the import permits and technical documentation in Chile."
        }
      ],
      "conclusionH2": "Chile: the opportunity most automation providers are missing",
      "conclusion": "Most warehouse automation providers have no local presence in Chile. STOKA does. If your mining, wine or agribusiness operation in Chile needs to automate a warehouse, the STOKA Chile team can visit your facilities, assess the operation and present a turnkey technical proposal on the same terms as in Argentina.",
      "faq": [
        {
          "q": "Does STOKA offer technical service in Chile?",
          "a": "Yes. STOKA operates as an official strategic partner in Chile with a local engineering team for sales, installation and after-sales technical support. Projects in Chile are managed from Chile, not from Argentina."
        },
        {
          "q": "Do DELIE systems qualify for Chile's VAT exemptions on capital goods?",
          "a": "ASRS systems imported for productive use in Chile qualify as capital goods. The VAT exemption for imported capital goods applies in certain sectors and under certain conditions. STOKA Chile handles the technical documentation required to certify the equipment's productive use."
        },
        {
          "q": "Can an ASRS system operate at high altitude, such as at a mine?",
          "a": "Electrical and electronic equipment requires adaptation to operate above 3,000 m of altitude (lower atmospheric pressure affects motor cooling and heat dissipation). DELIE manufactures versions of its equipment specified for high altitude. The specific design is confirmed during detailed engineering."
        },
        {
          "q": "How long does a project in Chile take vs. in Argentina?",
          "a": "The execution timeline is equivalent: 5 to 10 months from purchase order to start-up. Import logistics are handled through the port of Valparaíso or San Antonio. Integration with the local ERP (SAP, Oracle, etc.) follows the same process as in Argentina."
        }
      ],
      "cta": {
        "heading": "Automation projects in Chile: get a quote for your warehouse",
        "text": "Local engineering team in Chile. Free consultation at your facility.",
        "btnPrimary": {
          "label": "Ask about a project in Chile",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "See cold-chain systems",
          "url": "/catalogo/asrs/camara-frio"
        }
      },
      "relacionados": [
        {
          "titulo": "AS/RS Cold Room",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "How much does it cost to automate a warehouse",
          "slug": "cuanto-cuesta-automatizar-almacen"
        },
        {
          "titulo": "AGV / AMR Robots",
          "slug": "agv-vs-amr"
        }
      ]
    },
    "zh": {
      "metaTitle": "智利仓库自动化：2026 年指南 | STOKA",
      "metaDesc": "如何实现智利仓库自动化：系统、成本与效益。采用 DELIE 技术并提供本地支持，减少占地面积与操作差错。",
      "h1": "智利仓库自动化：矿业与农业产业的发展机遇",
      "categoria": "区域市场",
      "readTime": "7 分钟",
      "intro": "智利拥有一些独特的条件，使仓库与货仓自动化显得尤为重要：矿业在极端地区（高原、沙漠、南部极地）开展作业，世界一流的葡萄酒产业拥有物流高度复杂的酒庄，而以出口为导向的农业产业则需要精准的冷链管理。在所有这些行业中，挑战不仅在于吞吐量或存储密度，更在于如何在专业操作人员稀缺、人员流动率高且气候条件恶劣的地区维持运营。STOKA 作为智利与阿根廷的战略合作伙伴所集成的 DELIE ASRS 系统，尤其适合应对这些条件。",
      "sections": [
        {
          "h2": "智利矿业仓库自动化：北部地区的挑战",
          "body": "智利北部（第二至第四大区）的矿业作业需要备件、材料与耗材仓库能够在极端高海拔条件下以最少的人员运转。这些地区的人员流动率很高，劳动力成本也十分高昂。面向矿用备件的 ASRS 或 VLM 系统可同时解决三个问题：减少仓库所需人员，最大限度降低库存差错（当某个缺失部件可能导致价值数百万的生产线停产时，这一点至关重要），并保护库存免受粉尘与温度等极端环境条件的影响。DELIE 的 VLM 与垂直回转柜提供已通过认证、适用于悬浮粉尘环境（IP6X）的版本。"
        },
        {
          "h2": "自动化葡萄酒仓库：容量更大，占地更少",
          "body": "智利葡萄酒产业面临一项特殊挑战：Maipo、Colchagua 或 Casablanca 等产区的生产具有明显的季节性，酒庄需要在采收季最大限度地提升存储容量。高密度 AS/RS 货架能够向高处存储，而无需扩大仓库占地面积，从而保留建筑外观并将土地留给葡萄园。带温控功能（+10 °C 至 +18 °C）的穿梭车系统是精准酿酒的最佳方案：它能在橡木桶或瓶储仓库中保持恒定温度，而无需承担工业级冷藏库的成本。"
        },
        {
          "h2": "智利冷链：水果与蛋白类产品出口",
          "body": "智利是全球第二大鲜果出口国，也是主要的海产品出口国之一。这两个行业都依赖从采收或捕捞直至出口集装箱全程不间断的冷链。DELIE 的冷库 ASRS 系统可使用同一套设备，在 -30 °C（冷冻）至 +4 °C（冷藏）之间运行。对于 Valparaíso、San Antonio 与 Mejillones 港口的冷藏配送中心而言，自动化可降低仓库的热负荷（减少开门次数、减少人员在低温环境中的停留），并在相同占地面积内提升容量。"
        },
        {
          "h2": "为何选择 STOKA 承接智利的自动化项目",
          "body": "STOKA 作为智利的战略合作伙伴运营，拥有覆盖全国的工程团队：从 Arica 到 Punta Arenas。这对于北部的矿业项目以及南部偏远地区的作业至关重要：技术支持无需依赖来自阿根廷或亚洲的响应时间。智利针对进口资本货物的税收框架同样带来益处：面向特定生产性行业进口资本货物的增值税免税政策适用于 ASRS 系统。作为项目的一部分，STOKA 负责在智利办理进口许可与技术文件。"
        }
      ],
      "conclusionH2": "智利：大多数自动化供应商尚未把握的机遇",
      "conclusion": "大多数仓库自动化供应商在智利没有本地布局，而 STOKA 有。如果您在智利的矿业、葡萄酒或农业产业作业需要实现仓库自动化，STOKA 智利团队可实地考察您的设施、诊断作业情况，并按照与阿根廷相同的条件提交一份交钥匙技术方案。",
      "faq": [
        {
          "q": "STOKA 在智利提供技术服务吗？",
          "a": "是的。STOKA 作为智利的官方战略合作伙伴运营，配备本地工程团队，负责销售、安装与售后技术支持。智利的项目在智利本地管理，而非从阿根廷管理。"
        },
        {
          "q": "DELIE 设备是否适用智利资本货物的增值税免税政策？",
          "a": "为在智利用于生产用途而进口的 ASRS 系统符合资本货物的认定。进口资本货物的增值税免税政策在特定行业与条件下适用。STOKA 智利负责办理证明设备生产性用途所需的技术文件。"
        },
        {
          "q": "ASRS 系统能否在矿区等高海拔地区运行？",
          "a": "电气与电子设备在海拔 3,000 米以上运行时需要进行调整（大气压力降低会影响电机散热与热量耗散）。DELIE 可制造针对高海拔专门设计的设备版本。具体设计将在详细工程阶段确认。"
        },
        {
          "q": "在智利实施一个项目相比阿根廷需要多长时间？",
          "a": "执行周期相当：从采购订单到投产为 5 至 10 个月。进口物流通过 Valparaíso 或 San Antonio 港口办理。与本地 ERP（SAP、Oracle 等）的集成遵循与阿根廷相同的流程。"
        }
      ],
      "cta": {
        "heading": "智利自动化项目：为您的仓库获取报价",
        "text": "智利本地工程团队。可在您的设施现场提供免费咨询。",
        "btnPrimary": {
          "label": "咨询智利项目",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "查看冷链系统",
          "url": "/catalogo/asrs/camara-frio"
        }
      },
      "relacionados": [
        {
          "titulo": "AS/RS 冷库",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "仓库自动化的成本是多少",
          "slug": "cuanto-cuesta-automatizar-almacen"
        },
        {
          "titulo": "AGV / AMR 机器人",
          "slug": "agv-vs-amr"
        }
      ]
    }
  },
  "asrs-vs-autostore": {
    "en": {
      "metaTitle": "ASRS vs AutoStore: Which Fits Your Warehouse?",
      "metaDesc": "Honest comparison of traditional ASRS (stacker crane, shuttle) vs AutoStore grid robotics: throughput, density, cost, scalability and support.",
      "h1": "ASRS vs AutoStore: An Honest Technical Comparison",
      "categoria": "Technical Comparisons",
      "readTime": "8 min",
      "intro": "AutoStore is one of the most visible robotic storage technologies of recent years: robots that run across a three-dimensional grid, retrieving stacked bins. Traditional ASRS — stacker cranes, MiniLoad, shuttles — has been on the market for decades, with reference installations worldwide. Which one is better? It depends entirely on your operation. This comparison isn't trying to sell you either one: it aims to give you the technical data to decide which technology best fits your warehouse and your budget.",
      "sections": [
        {
          "h2": "Technical architecture: how each system works",
          "body": "AutoStore uses a three-dimensional metal grid in which bins are stacked vertically. Compact robots move across the top layer of the grid, lower a gripper to pick up the right bin, and deliver it to port stations at the operator's level. Density is extreme: bins are stacked with no space between them. Traditional ASRS use racking with individual cells and stacker cranes or robots that navigate within the aisle or channel. Each storage unit is directly accessible without moving any others. The key difference: AutoStore stacks bins (sequential access), while traditional ASRS offers direct random access to every cell."
        },
        {
          "h2": "Storage density: who wins?",
          "body": "AutoStore wins on volumetric density: bins stacked with no aisle space allow 4 to 5 times more units per cubic meter than conventional racking. A double-deep MiniLoad ASRS reaches 2 to 3 times the density of conventional racking. However, AutoStore's density comes at a cost: when you need to retrieve a bin sitting at the bottom of a stack, the robot must first move every bin above it (overhead movement). In operations with high SKU variability, this overhead can significantly degrade effective throughput."
        },
        {
          "h2": "Throughput: which one moves more units per hour",
          "body": "AutoStore throughput depends on the number of robots and the number of output ports. A system of 100 robots and 10 ports can reach 1,000 bins/hour under optimal conditions. A 2-aisle DELIE MiniLoad running 400 bins/hour/aisle reaches 800 bins/hour. Similar in raw throughput. The difference lies in consistency: AutoStore can degrade its throughput when the most-requested bins are buried under many less-requested ones (the burial effect). The MiniLoad ASRS keeps its throughput constant regardless of where a bin is stored, because access is always direct."
        },
        {
          "h2": "Cost, scalability and availability in Argentina",
          "body": "AutoStore is significantly more expensive than an equivalent traditional ASRS: the metal grid and the robots carry a higher cost per storage position than the racking of a MiniLoad. On top of that, AutoStore is a proprietary brand with active patents and exclusive distributors: in Argentina, the availability of local technical support is limited or dependent on agreements with international distributors. The DELIE ASRS systems represented by STOKA offer full local technical support, spare parts held in Argentina, and competitive pricing across the Latin American market. For operations above 20,000 storage positions, AutoStore may be technically superior; below that threshold, traditional ASRS delivers a better price/performance ratio in the Argentine market."
        }
      ],
      "conclusionH2": "AutoStore or ASRS: the right technology depends on your scale and operation",
      "conclusion": "AutoStore is an excellent technology for large-scale e-commerce operations with many small-format SKUs. For industrial warehouses handling pallets, medium-sized cases, or a mix of volumes, traditional ASRS — stacker crane, shuttle, or MiniLoad — is more suitable, more cost-effective, and better supported locally in Argentina and Chile. If you're evaluating AutoStore vs. DELIE for your operation, STOKA can run the comparative analysis using your real data.",
      "faq": [
        {
          "q": "Does AutoStore have distributors in Argentina?",
          "a": "AutoStore operates through authorized distributors. In Argentina, the availability of local AutoStore technical support is limited compared with markets like Europe or the US. DELIE stacker cranes and MiniLoad systems have full local technical support through STOKA."
        },
        {
          "q": "What kind of operation is AutoStore best suited for?",
          "a": "AutoStore is best suited for e-commerce operations with many small-format SKUs (electronics, pharmaceuticals, accessories), high order variability, and a need for extreme density in very limited space. For pallets, medium-sized cases, and mixed volumes, traditional ASRS is technically superior."
        },
        {
          "q": "Which one has higher operational availability (uptime)?",
          "a": "Both systems have a theoretical uptime above 99%. The practical difference lies in local support: an AutoStore robot that fails in Argentina can take weeks to source a spare part. A DELIE stacker crane with STOKA on the ground is repaired in hours, using spare-parts stock held in Argentina."
        },
        {
          "q": "Is it possible to migrate from AutoStore to traditional ASRS or vice versa?",
          "a": "A full migration requires dismantling the existing system and a new installation. In expansions, however, you can keep the existing system for one zone and add complementary technology for growth. The initial technology decision matters because it shapes decades of operation."
        }
      ],
      "cta": {
        "heading": "We compare DELIE ASRS vs AutoStore for your operation",
        "text": "A comparative technical analysis using your real data. Free, no obligation.",
        "btnPrimary": {
          "label": "Request a comparative analysis",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "View MiniLoad stacker cranes",
          "url": "/catalogo/asrs/miniload"
        }
      },
      "relacionados": [
        {
          "titulo": "Stacker Crane vs Shuttle",
          "slug": "transelevador-vs-shuttle"
        },
        {
          "titulo": "What is an ASRS system",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "How much does it cost to automate a warehouse",
          "slug": "cuanto-cuesta-automatizar-almacen"
        }
      ]
    },
    "zh": {
      "metaTitle": "ASRS 与 AutoStore 技术对比：哪种更适合您的仓库",
      "metaDesc": "对传统 ASRS 系统（堆垛机、穿梭车）与 AutoStore（网格机器人）进行客观对比：吞吐量、存储密度、成本、可扩展性与本地支持。",
      "h1": "ASRS 与 AutoStore：客观的技术对比",
      "categoria": "技术对比",
      "readTime": "8 分钟",
      "intro": "AutoStore 是近年来最受关注的机器人存储技术之一：机器人在三维网格上行进，抓取堆叠的料箱。而传统 ASRS——堆垛机、MiniLoad、穿梭车——已在市场上运行数十年，并在全球拥有众多标杆项目。哪一种更好？这完全取决于您的运营需求。本文的对比无意推销其中任何一方，而是为您提供技术数据，帮助您判断哪种技术最契合您的仓库与预算。",
      "sections": [
        {
          "h2": "技术架构：两套系统各自如何运作",
          "body": "AutoStore 采用三维金属网格，料箱在其中垂直堆叠。紧凑型机器人在网格顶层行进，放下抓手取出目标料箱，并将其送至操作员所在高度的工作站端口。其密度极高：料箱之间毫无间隙地堆叠在一起。传统 ASRS 则使用带独立货位的货架，配合堆垛机或在巷道、通道内行驶的机器人。每个存储单元均可直接存取，无需移动其他货物。关键区别在于：AutoStore 采用料箱堆叠（顺序存取），而传统 ASRS 对每个货位实现直接的随机存取。"
        },
        {
          "h2": "存储密度：谁更胜一筹？",
          "body": "在容积密度上，AutoStore 更占优势：料箱无需巷道间隙即可堆叠，单位立方米可容纳的数量是普通货架的 4 至 5 倍。而采用双深位的 MiniLoad ASRS，其密度可达普通货架的 2 至 3 倍。不过，AutoStore 的高密度也有代价：当需要取出位于堆垛底部的料箱时，机器人必须先搬走其上方的所有料箱（翻箱作业）。在 SKU 变化频繁的运营场景中，这类翻箱作业会显著拉低有效吞吐量。"
        },
        {
          "h2": "吞吐量：谁每小时处理的件数更多",
          "body": "AutoStore 的吞吐量取决于机器人数量与出库端口数量。一套配备 100 台机器人和 10 个端口的系统，在理想条件下每小时可处理 1,000 个料箱。而一套双巷道的 DELIE MiniLoad，按每巷道每小时 400 个料箱计算，可达每小时 800 个料箱。就单纯吞吐量而言二者相近。差异在于稳定性：当最热门的料箱被大量冷门料箱压在下方时，AutoStore 的吞吐量可能下降（埋箱效应）。而 MiniLoad ASRS 无论料箱存放在何处都能保持恒定的吞吐量，因为其存取始终是直接的。"
        },
        {
          "h2": "成本、可扩展性与在阿根廷的可获得性",
          "body": "AutoStore 明显比同等规模的传统 ASRS 更为昂贵：金属网格与机器人的单个存储货位成本高于 MiniLoad 的货架。此外，AutoStore 属于拥有有效专利和独家经销商的专有品牌：在阿根廷，其本地技术支持的可获得性有限，或需依赖与国际经销商的合作协议。由 STOKA 代理的 DELIE ASRS 系统则提供完善的本地技术支持、在阿根廷备有的备品备件，以及在拉美市场具有竞争力的价格。对于超过 20,000 个存储货位的运营，AutoStore 在技术上可能更胜一筹；但在该规模以下，传统 ASRS 在阿根廷市场提供更优的性价比。"
        }
      ],
      "conclusionH2": "AutoStore 还是 ASRS：正确的技术取决于您的规模与运营",
      "conclusion": "对于拥有大量小尺寸 SKU 的大规模电商运营，AutoStore 是一项出色的技术。而对于处理托盘、中型纸箱或多种规格混合的工业仓库，传统 ASRS——堆垛机、穿梭车或 MiniLoad——则更为适用、更经济，且在阿根廷和智利拥有更完善的本地支持。如果您正在为自己的运营评估 AutoStore 与 DELIE 之间的选择，STOKA 可以基于您的真实数据进行对比分析。",
      "faq": [
        {
          "q": "AutoStore 在阿根廷有经销商吗？",
          "a": "AutoStore 通过授权经销商运营。在阿根廷，AutoStore 本地技术支持的可获得性相较欧洲或美国等市场较为有限。而 DELIE 堆垛机与 MiniLoad 则可通过 STOKA 获得完善的本地技术支持。"
        },
        {
          "q": "AutoStore 适合哪类运营？",
          "a": "AutoStore 更适合拥有大量小尺寸 SKU（电子产品、医药、配件）、订单波动大、且需要在极为有限的空间内实现超高密度的电商运营。对于托盘、中型纸箱及多种规格混合的场景，传统 ASRS 在技术上更胜一筹。"
        },
        {
          "q": "哪种系统的运营可用率（uptime）更高？",
          "a": "两套系统的理论可用率均高于 99%。实际差异在于本地支持：在阿根廷，一台发生故障的 AutoStore 机器人可能需要数周才能获得备件。而配备 STOKA 本地支持的 DELIE 堆垛机，凭借在阿根廷储备的备件，可在数小时内完成维修。"
        },
        {
          "q": "是否可以从 AutoStore 迁移到传统 ASRS，或反向迁移？",
          "a": "彻底迁移需要拆除现有系统并重新安装。不过，在扩容时，可以保留现有系统用于某一区域，并为增长部分增添互补技术。最初的技术选型至关重要，因为它将影响未来数十年的运营。"
        }
      ],
      "cta": {
        "heading": "我们为您的运营对比 DELIE ASRS 与 AutoStore",
        "text": "基于您的真实数据进行对比技术分析。免费，无任何承诺。",
        "btnPrimary": {
          "label": "申请对比分析",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "查看 MiniLoad 堆垛机",
          "url": "/catalogo/asrs/miniload"
        }
      },
      "relacionados": [
        {
          "titulo": "堆垛机与穿梭车对比",
          "slug": "transelevador-vs-shuttle"
        },
        {
          "titulo": "什么是 ASRS 系统",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "自动化仓库的成本是多少",
          "slug": "cuanto-cuesta-automatizar-almacen"
        }
      ]
    }
  },
  "que-es-un-transelevador": {
    "en": {
      "metaTitle": "What Is a Stacker Crane? Types, Function & Cost",
      "metaDesc": "Complete guide to stacker cranes: types (unit-load, miniload), how they work, shuttle vs. crane, and when to install one in your warehouse.",
      "h1": "What a stacker crane is and how it works in an automated warehouse",
      "categoria": "AS/RS Fundamentals",
      "readTime": "7 min read",
      "intro": "A stacker crane is the central component of most AS/RS systems (automated storage and retrieval systems). It is an automated crane that travels within a rack aisle, picking up and depositing pallets, boxes, or containers with millimeter precision. If you have ever seen images of a modern warehouse with 20- or 30-meter-high racking and machines moving between them without operators, that is a stacker crane. In Argentina and Chile, the growing adoption of industrial automation is leading more and more companies in logistics, manufacturing, food, and pharmaceuticals to evaluate this technology for their warehouses and storage facilities.",
      "sections": [
        {
          "h2": "In plain terms: what a stacker crane does and why it matters",
          "body": "Think of a stacker crane as a robot that does the work of both a forklift and an operator, but on its own, nonstop, and without making mistakes. It moves down an aisle between tall racks, rises to the exact position, grabs the pallet or box, and delivers it to wherever you need to assemble the order. You don't send anyone to fetch goods or climb 15 meters on a machine: the system brings the product to the operator (this is known as goods-to-person). What does this mean in practice? It solves the three things that hurt in any warehouse. You gain space (storing vertically, up to 3 times more in the same square meters), you gain time (the robot doesn't walk kilometers the way an operator does), and you stop making errors (every movement is controlled by software, with accuracy above 99,9%). That is why the stacker crane is the heart of most automated warehouses: it turns a building full of racking into an operation that runs on its own, 24 hours a day."
        },
        {
          "h2": "Types of stacker crane: unit-load and miniload",
          "body": "There are two main families of stacker cranes. The unit-load (or pallet) stacker crane is designed to handle heavy load units: EURO, ISO, or American pallets weighing up to 1.500 kg. It operates in high-bay warehouse aisles (7 to 40 meters), with travel speeds of up to 160 meters per minute. It is the reference system for distributors, 3PL operators, and manufacturing plants that handle large pallet volumes. The miniload stacker crane, in turn, is optimized for smaller loads: boxes, totes, and trays weighing up to 50 kg. It operates in narrower aisles (600 to 800 mm) and reaches travel speeds of up to 180 meters per minute. It is the standard system for high-speed picking in e-commerce, pharmaceuticals, and manufacturing with many SKUs. Both share the same basic architecture but have completely different structural, fork, and control specifications."
        },
        {
          "h2": "How a stacker crane works, step by step",
          "body": "The operating cycle begins in the software. The WMS (warehouse management system) receives the order — either a storage or a retrieval request — and passes it to the WCS (warehouse control system). The WCS calculates the exact position of the product in the rack and assigns the mission to the most efficient available stacker crane. The stacker crane moves simultaneously in the horizontal plane (on rails on the floor and ceiling) and the vertical plane (raising the load platform) until it reaches the correct cell. The telescopic fork extends, captures the pallet or container, and retracts. The stacker crane travels to the delivery point — a load/unload station or a conveyor — and sets down the load. The entire cycle, from mission to delivery, takes between 45 and 90 seconds in a 20-meter-high warehouse. Every movement is automatically recorded in the WMS: inventory 100% tracked in real time."
        },
        {
          "h2": "Stacker crane vs. shuttle: when to use each",
          "body": "The choice between a stacker crane and a shuttle depends mainly on two variables: the required throughput and the storage density needed. A stacker crane operates in a single aisle with one machine: it is sequential, running one cycle at a time. This makes it well suited when throughput is not extremely high but the available height is considerable (10+ meters). A shuttle, on the other hand, can have multiple robots on different levels of the same aisle, operating in parallel — which gives it potentially much higher throughput per aisle. However, a shuttle requires more investment per aisle and has greater maintenance complexity. The rule of thumb: a warehouse with moderate throughput (up to 200 movements/hour per aisle), great height, and many positions — stacker crane. A warehouse with very high throughput, lower height, and high density — shuttle. For many operations, combining the two in the same facility is the most efficient solution."
        },
        {
          "h2": "How much a stacker crane costs and its ROI in Argentina",
          "body": "The cost of a DELIE unit-load stacker crane for a mid-scale warehouse aisle (15 meters high, 500 pallet positions) runs between USD 180.000 and USD 280.000, not including the racking or the WCS. A complete 2-aisle project with conveyors, racking, WCS, and integration with the existing ERP in a warehouse in Argentina ranges from USD 800.000 to USD 1.500.000. With Decree 513/2025 (0% tariff on AS/RS equipment) and RIMI (100% accelerated depreciation in the first fiscal year), the net cost of a project drops by 25% to 35%. The typical ROI of a stacker crane project in Argentina is between 18 and 36 months, depending on the current labor cost of the manual operation it replaces."
        },
        {
          "h2": "Is a stacker crane worth it for a small or mid-size warehouse?",
          "body": "This is one of the most common questions, and the short answer is: height matters more than floor area. A stacker crane needs at least 7 meters of clear height to be worthwhile; if you have that height, the warehouse doesn't need to be huge. For small or mid-size operations that handle boxes rather than pallets, the miniload is the entry point: it fits in narrow aisles and starts at a more accessible scale than a full pallet system. And you don't have to automate everything at once — you can start with a single aisle or module and grow later, adding aisles as the operation expands. The rule of thumb is simple: if your warehouse has run out of floor space but you have height to take advantage of, a stacker crane — or a miniload — almost always belongs in the conversation. STOKA's free assessment tells you in the first consultation whether your case makes sense or not."
        }
      ],
      "conclusionH2": "The first step is a free assessment",
      "conclusion": "The decision to install a stacker crane in your warehouse doesn't start with the budget: it starts with understanding whether the system is the right fit for your operation. STOKA carries out the technical assessment — throughput analysis, SKU profile, available height, and ROI projection — at no cost and with no obligation. If a stacker crane isn't what you need, we'll tell you. If it is, we build the complete technical proposal in 2 to 4 weeks.",
      "faq": [
        {
          "q": "Can a stacker crane operate in an existing warehouse, or only in new construction?",
          "a": "It can be installed in existing facilities as long as there is enough clear height (a minimum of 7 meters) and the floor slab can support the structural loads. Most of STOKA's projects are in existing warehouses. It requires floor leveling and minor civil anchoring work."
        },
        {
          "q": "What happens if the stacker crane fails in the middle of operations?",
          "a": "DELIE stacker cranes have an MTBF (mean time between failures) of over 8.000 operating hours. If a failure occurs, the aisle can be run in emergency manual mode with a forklift while the issue is resolved. STOKA keeps spare parts in Argentina to resolve most failures in under 24 hours."
        },
        {
          "q": "How many stacker crane aisles does my operation need?",
          "a": "The number of aisles depends on the required throughput (movements per hour) and the storage capacity needed (number of pallet or container positions). With those two figures, STOKA sizes the system in the first free technical consultation."
        },
        {
          "q": "Does the stacker crane integrate with my existing WMS or ERP?",
          "a": "Yes. The DELIE WCS connects to any WMS or ERP via REST API, SOAP, or EDI. Certified integrations with SAP, Oracle, Microsoft Dynamics, and Infor. STOKA manages the technical integration as part of the turnkey project at no additional cost."
        },
        {
          "q": "What is the difference between a stacker crane and a forklift?",
          "a": "A forklift is operated by a person and is used to move pallets one at a time, at low height. A stacker crane is automatic: no one drives it, it operates within a fixed rack aisle, reaches heights of up to 40 meters, and works 24 hours a day without errors or breaks. In short: a forklift is a tool used by an operator; a stacker crane is a robot that replaces the manual travel and stores at heights far beyond a forklift's reach."
        },
        {
          "q": "How much does a stacker crane cost?",
          "a": "It depends on the type and scale, so it comes as a range rather than a fixed figure: a mid-scale unit-load (pallet) stacker crane runs between USD 180.000 and USD 280.000 without racking or software. A complete multi-aisle project — with racking, controls, and integration — usually ranges from USD 800.000 to USD 1.500.000. With the reduced tariff (Decree 513/2025) and RIMI, the net cost drops considerably. The figure for YOUR case comes out of the free assessment, based on your operation."
        },
        {
          "q": "Is it worth it for a small warehouse?",
          "a": "Yes, as long as you have clear height (ideally 7 meters or more): what matters is not the square meters but the height you can take advantage of. For small or mid-size warehouses that handle boxes, the miniload is the most accessible option, and you can start with a single aisle and grow later. If you've run out of floor space but have height, it almost certainly belongs in the conversation."
        }
      ],
      "cta": {
        "heading": "We assess whether a stacker crane is right for your operation",
        "text": "Free technical assessment including throughput analysis and ROI estimate.",
        "btnPrimary": {
          "label": "Request a free assessment",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "View unit-load stacker cranes",
          "url": "/catalogo/asrs/unit-load"
        }
      },
      "relacionados": [
        {
          "titulo": "Stacker Crane vs. Shuttle: Which One Is Right for You",
          "slug": "transelevador-vs-shuttle"
        },
        {
          "titulo": "What Is an AS/RS System",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "How Much It Costs to Automate a Warehouse",
          "slug": "cuanto-cuesta-automatizar-almacen"
        }
      ]
    },
    "zh": {
      "metaTitle": "什么是堆垛机？类型、工作原理与成本",
      "metaDesc": "堆垛机完全指南：类型（unit-load、miniload）、工作原理、与穿梭车的区别，以及何时适合在仓库中安装堆垛机。",
      "h1": "什么是堆垛机，它在自动化仓库中如何工作",
      "categoria": "ASRS 基础",
      "readTime": "7 分钟阅读",
      "intro": "堆垛机是大多数 ASRS（自动化存储与检索系统）的核心部件。它是一种在货架巷道内运行的自动化起重机，能够以毫米级精度抓取和存放托盘、箱子或货柜。如果您曾见过现代化仓库的画面——20 或 30 米高的货架，机器在其间穿行而无需操作人员——那就是堆垛机。在阿根廷和智利，随着工业自动化的日益普及，越来越多的物流、制造、食品和制药企业开始为其仓库评估这项技术。",
      "sections": [
        {
          "h2": "通俗地说：堆垛机做什么，对您有什么用",
          "body": "可以把堆垛机想象成一个机器人，它同时完成叉车和操作人员的工作，却能独立运行、不间断、且不出错。它在高货架之间的巷道中移动，升到精确的位置，抓取托盘或箱子，并将其送到您需要拣配订单的地方。您无需派人去取货，也无需让人操作机器爬升 15 米：系统会把货物送到操作人员面前（这被称为货到人 goods-to-person）。具体有什么用？它能解决任何仓库都头疼的三件事：您获得空间（向高处存储，在相同的平方米内最多可多存 3 倍），您节省时间（机器人不像操作人员那样要走上数公里），您不再出错（每一个动作都由软件控制，准确率超过 99,9%）。正因如此，堆垛机是大多数自动化仓库的核心：它把一座堆满货架的厂房，变成一套 24 小时自主运转的作业系统。"
        },
        {
          "h2": "堆垛机的类型：unit-load 与 miniload",
          "body": "堆垛机主要分为两大类。unit-load（托盘式）堆垛机专为处理重型载荷单元而设计：EURO、ISO 或美式托盘，重量可达 1.500 kg。它在高层仓库巷道（7 至 40 米）中作业，行走速度最高可达 160 米每分钟。它是分销商、3PL 运营商以及处理大量托盘的制造工厂的首选系统。miniload 堆垛机则针对较小的载荷进行了优化：箱子、料箱和托盘，重量可达 50 kg。它在更窄的巷道（600 至 800 mm）中作业，行走速度最高可达 180 米每分钟。它是电商、制药以及拥有大量 SKU 的制造业中高速拣选的常用系统。两者共享相同的基本架构，但在结构、货叉和控制方面的规格完全不同。"
        },
        {
          "h2": "堆垛机的工作流程详解",
          "body": "作业周期始于软件。WMS（仓库管理系统）接收指令——可以是入库或出库——并将其传递给 WCS（设备控制系统）。WCS 计算产品在货架中的精确位置，并将任务分配给最高效的可用堆垛机。堆垛机同时在水平方向（沿地面和顶部的轨道）和垂直方向（升降载货平台）移动，直到到达正确的货位。伸缩式货叉伸出，抓取托盘或货柜，再收回。堆垛机行驶至交付点——出入库站台或输送机——并放下载荷。整个周期，从下达任务到完成交付，在一座 20 米高的仓库中需要 45 到 90 秒。每一个动作都会自动记录在 WMS 中：库存 100% 实时追踪。"
        },
        {
          "h2": "堆垛机与穿梭车：何时该用哪一种",
          "body": "在堆垛机与穿梭车之间做选择，主要取决于两个变量：所需的吞吐量和所需的存储密度。堆垛机在单条巷道中以一台设备运行：它是顺序作业的，一次只完成一个周期。因此，当吞吐量并非极高、但可用高度很大（10+ 米）时，它非常合适。穿梭车则可以在同一条巷道的不同层级布置多台机器人，并行作业——这使它每条巷道的吞吐量有可能高得多。不过，穿梭车每条巷道的投资更高，维护也更为复杂。经验法则是：吞吐量适中（每条巷道每小时最多 200 次作业）、高度大、货位多的仓库——选堆垛机；吞吐量极高、高度较低、密度高的仓库——选穿梭车。对许多作业而言，在同一仓库中将两者结合使用才是最高效的方案。"
        },
        {
          "h2": "堆垛机的成本以及在阿根廷的投资回报率",
          "body": "一台用于中等规模仓库巷道（15 米高、500 个托盘货位）的 DELIE unit-load 堆垛机，价格约在 USD 180.000 至 USD 280.000 之间，不含货架和 WCS。在阿根廷的一座仓库中，一个包含输送机、货架、WCS 以及与现有 ERP 集成的完整 2 条巷道项目，价格介于 USD 800.000 至 USD 1.500.000 之间。凭借第 513/2025 号法令（ASRS 设备关税为 0%）和 RIMI（首个财政年度 100% 加速折旧），项目的净成本可降低 25% 至 35%。在阿根廷，堆垛机项目的典型投资回报周期为 18 至 36 个月，具体取决于其所替代的人工作业当前的用工成本。"
        },
        {
          "h2": "堆垛机适合中小型仓库吗？",
          "body": "这是最常见的问题之一，简短的回答是：高度比占地面积更重要。堆垛机至少需要 7 米的净高才值得投入；只要您有这样的高度，仓库就不必很大。对于处理箱子而非托盘的中小型作业，miniload 是入门之选：它占用狭窄的巷道，起步规模也比一套完整的托盘系统更容易接受。而且您不必一次性实现全部自动化——可以从一条巷道或一个模块开始，日后再随着业务增长逐步增加巷道。经验法则很简单：如果您的仓库在水平方向上已经没有空间，但纵向仍有高度可利用，那么堆垛机——或 miniload——几乎总是值得纳入考虑。STOKA 的免费诊断会在首次咨询时告诉您，您的情况是否适合。"
        }
      ],
      "conclusionH2": "第一步是免费诊断",
      "conclusion": "在您的仓库中安装堆垛机的决定，并非始于预算，而是始于弄清这套系统是否适合您的作业。STOKA 提供技术诊断——吞吐量分析、SKU 画像、可用高度以及投资回报率预测——免费且无任何约束。如果堆垛机不是您所需要的，我们会如实相告；如果它正是您所需要的，我们会在 2 到 4 周内完成完整的技术方案。",
      "faq": [
        {
          "q": "堆垛机可以在现有仓库中运行，还是只能用于新建工程？",
          "a": "只要有足够的净高（至少 7 米），且地面楼板能够承受结构载荷，堆垛机就可以安装在现有设施中。STOKA 的大多数项目都是在现有仓库中实施的。这需要进行地面找平和小规模的锚固土建工程。"
        },
        {
          "q": "如果堆垛机在作业中途发生故障怎么办？",
          "a": "DELIE 堆垛机的 MTBF（平均无故障时间）超过 8.000 个运行小时。如果发生故障，可在问题解决期间以叉车的应急手动模式运行该巷道。STOKA 在阿根廷备有备件，能够在 24 小时内解决大多数故障。"
        },
        {
          "q": "我的作业需要多少条堆垛机巷道？",
          "a": "巷道数量取决于所需的吞吐量（每小时作业次数）和所需的存储容量（托盘或货柜货位的数量）。凭借这两项数据，STOKA 会在首次免费技术咨询中为系统进行规格设计。"
        },
        {
          "q": "堆垛机能否与我现有的 WMS 或 ERP 集成？",
          "a": "可以。DELIE 的 WCS 可通过 REST API、SOAP 或 EDI 连接到任何 WMS 或 ERP。已通过与 SAP、Oracle、Microsoft Dynamics 和 Infor 的认证集成。STOKA 将技术集成作为交钥匙项目的一部分进行管理，不收取额外费用。"
        },
        {
          "q": "堆垛机和叉车有什么区别？",
          "a": "叉车由人操作，用于以低高度一次搬运一个托盘。堆垛机是自动化的：无需人驾驶，它在固定的货架巷道内作业，可达到最高 40 米的高度，并 24 小时不间断工作，不出错也不休息。简而言之：叉车是操作人员使用的工具；堆垛机则是一个机器人，取代了人工的往返行走，并在远超叉车可及高度的位置存储货物。"
        },
        {
          "q": "堆垛机要多少钱？",
          "a": "这取决于类型和规模，因此给出的是一个区间而非固定数字：一台中等规模的 unit-load（托盘式）堆垛机价格约在 USD 180.000 至 USD 280.000 之间，不含货架和软件。一个包含货架、控制系统和集成的完整多巷道项目，通常介于 USD 800.000 至 USD 1.500.000 之间。凭借降低的关税（第 513/2025 号法令）和 RIMI，净成本会大幅下降。适合您具体情况的数字，将根据您的作业情况在免费诊断中得出。"
        },
        {
          "q": "它适合小型仓库吗？",
          "a": "适合，只要您有净高（最好 7 米或以上）：关键不在于平方米，而在于您能利用的高度。对于处理箱子的中小型仓库，miniload 是最容易接受的选择，而且您可以从单条巷道起步，日后再扩展。如果您在水平方向上已经没有空间，但仍有高度，它几乎肯定值得纳入考虑。"
        }
      ],
      "cta": {
        "heading": "我们评估堆垛机是否适合您的作业",
        "text": "免费技术诊断，含吞吐量分析和投资回报率估算。",
        "btnPrimary": {
          "label": "申请免费诊断",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "查看 unit-load 堆垛机",
          "url": "/catalogo/asrs/unit-load"
        }
      },
      "relacionados": [
        {
          "titulo": "堆垛机与穿梭车：如何选择",
          "slug": "transelevador-vs-shuttle"
        },
        {
          "titulo": "什么是 ASRS 系统",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "自动化一座仓库要花多少钱",
          "slug": "cuanto-cuesta-automatizar-almacen"
        }
      ]
    }
  },
  "que-es-un-wms": {
    "en": {
      "metaTitle": "What Is a WMS? Warehouse Management System Explained",
      "metaDesc": "A complete guide to WMS (Warehouse Management System): what it does, how it differs from WCS and ERP, its core functions and how to choose the right one.",
      "h1": "What a WMS Is and Why It Is the Brain of the Automated Warehouse",
      "categoria": "Software and Technology",
      "readTime": "6 min",
      "intro": "The WMS (Warehouse Management System) is the software that turns a warehouse into a controlled, fully traceable operation. It knows exactly what sits in every location, where it came from, when it arrived and which customer it belongs to. Without a WMS, physical automation — stacker cranes, robots, conveyors — cannot run with precision. With a WMS, the warehouse knows and decides; without one, someone has to guess. In Argentina, the WMS has become a requirement in regulated industries such as pharmaceuticals and food, and the anchor of any serious warehouse automation project.",
      "sections": [
        {
          "h2": "What a WMS Does Exactly",
          "body": "A WMS manages three major areas of warehouse operations. The first is inventory: every product has an exact location, quantity, batch, expiration date and owner. There is no phantom stock and no gap between the system and physical reality — because every movement is recorded in real time. The second area is operations: receiving, put-away, picking, order preparation and dispatch. The WMS automatically assigns the best location to each product on arrival (dynamic slotting), selects the correct unit for each outbound order (automatic FIFO or FEFO) and sequences picking orders to minimize travel. The third area is traceability: every movement is audited with the user, a timestamp and the origin and destination locations. For pharmaceuticals, food and automotive, this audit trail is a regulatory requirement; for 3PL logistics providers, it is the basis for service-based billing."
        },
        {
          "h2": "WMS vs. WCS vs. ERP: What Each One Does",
          "body": "The ERP (SAP, Oracle, Microsoft Dynamics) manages business processes: finance, purchasing, sales and production. It knows there are 100 pallets of product X in the warehouse, but not which location each one occupies. The WMS lives between the ERP and the physical warehouse: it receives orders from the ERP and translates them into storage and picking instructions, knowing exactly where each product sits in the warehouse. The WCS (Warehouse Control System) is the next level of control: it turns the WMS instructions into real-time commands for the physical equipment — stacker cranes, robots and conveyors. In a fully automated warehouse, all three systems work in a cascade: ERP to WMS to WCS to physical equipment. In DELIE systems, the WMS and WCS are integrated into a single platform, reducing integration complexity."
        },
        {
          "h2": "Key Functions of a Modern WMS for Warehouses in Argentina",
          "body": "The WMS of a modern warehouse in Argentina should include at least the following functions: real-time inventory control with exact location; automatic FIFO and FEFO for food and pharmaceuticals; batch and serial-number traceability for ANMAT and FDA compliance; returns management with inspection and controlled re-entry; dynamic slotting that optimizes location based on turnover history; reporting for billing and audits; and two-way integration with the existing ERP. For 3PL operators, multi-client management with segregated inventories is added. For pharmaceuticals, the WMS must include a GMP module with IQ/OQ/PQ validation and 21 CFR Part 11 compliance."
        },
        {
          "h2": "When the ERP's WMS Is Not Enough and a Dedicated WMS Is Needed",
          "body": "The inventory modules of ERP systems (SAP MM, Oracle Inventory) manage stock at the warehouse level, not at the location level. They know there are 100 pallets in the warehouse, but not the exact location of each one. For a warehouse with numbered locations, a picking operation and FEFO processes, the ERP inventory module is not enough: you need a dedicated WMS that integrates with the ERP. The usual tipping point comes when the warehouse exceeds 500 storage positions and 300 daily movements, or when automated equipment (stacker cranes, robots) that requires real-time location control is introduced. DELIE delivers its own WMS, integrated with the WCS, as part of STOKA's turnkey project."
        }
      ],
      "conclusionH2": "The WMS: The Investment With the Greatest Long-Term Impact",
      "conclusion": "In a warehouse automation project, the WMS is the technology with the greatest long-term impact on operations: it remains the central system long after the physical equipment has been depreciated. Choosing a WMS with room to grow — multi-client, multi-site, scalable in regulatory functions — avoids costly replacement projects down the road. STOKA delivers the DELIE WMS as part of the project, with full integration to the existing ERP and training for the operations team included.",
      "faq": [
        {
          "q": "Does the DELIE WMS integrate with SAP?",
          "a": "Yes. The WMS has a certified connector for SAP S/4HANA and SAP ECC via RFC/BAPI and REST API. The two-way integration synchronizes inbound and outbound orders from the ERP with the physical warehouse locations in real time. STOKA manages the technical integration with the client's IT team."
        },
        {
          "q": "How long does it take to implement a WMS in an existing warehouse?",
          "a": "For a warehouse with no prior WMS, a full implementation (configuration, ERP integration, master data loading and training) takes between 8 and 14 weeks. If an existing WMS is being replaced, the project includes data migration and can extend to 4 to 6 months."
        },
        {
          "q": "Does the WMS keep working if the connection to the ERP goes down?",
          "a": "Yes. The WMS operates autonomously with its own database. If the ERP goes down, the warehouse keeps running and transactions are synchronized automatically once the connection is restored. There is no data loss and no need for retroactive manual entry."
        },
        {
          "q": "What happens when the warehouse grows or more SKUs are added?",
          "a": "The DELIE WMS is scalable without architectural changes. You can add more storage positions, more users, more physical equipment and more regulatory functions incrementally. The license includes software updates and new features throughout the support period."
        }
      ],
      "cta": {
        "heading": "We assess whether your operation needs a dedicated WMS or whether the ERP's is enough",
        "text": "Free technical consultation with an analysis of your current operational flow.",
        "btnPrimary": {
          "label": "Talk to a specialist",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "View WMS/WCS software",
          "url": "/catalogo/software/wms"
        }
      },
      "relacionados": [
        {
          "titulo": "WMS vs. WCS: What Each Software Does",
          "slug": "wms-vs-wcs"
        },
        {
          "titulo": "What Is an ASRS System",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "How Much It Costs to Automate a Warehouse",
          "slug": "cuanto-cuesta-automatizar-almacen"
        }
      ]
    },
    "zh": {
      "metaTitle": "什么是WMS？仓库管理系统详解",
      "metaDesc": "WMS（仓库管理系统）完整指南：它的作用、与WCS和ERP的区别、核心功能，以及如何为您的仓库选择合适的WMS。",
      "h1": "什么是WMS，以及为什么它是自动化仓库的大脑",
      "categoria": "软件与技术",
      "readTime": "6 分钟",
      "intro": "WMS（仓库管理系统）是一款能将仓库转变为可控、可全程追溯运营的软件。它精确掌握每个货位存放着什么、来自何处、何时入库以及归属哪位客户。没有WMS，物理自动化设备——堆垛机、机器人、输送机——就无法精准运行。有了WMS，仓库便能知晓并决策；没有它，一切只能靠人来猜测。在阿根廷，WMS已成为制药、食品等受监管行业的必备条件，也是所有正规仓库自动化项目的核心基石。",
      "sections": [
        {
          "h2": "WMS的具体作用",
          "body": "WMS管理仓库运营的三大领域。第一是库存：每件产品都有精确的货位、数量、批次、有效期和所有者。不存在幽灵库存，系统数据与物理实况之间也没有偏差——因为每一次移动都被实时记录。第二个领域是作业：收货、上架、拣选、订单备货和发货。WMS在产品入库时自动分配最佳货位（动态货位分配），为每笔出库订单选取正确的产品（自动FIFO或FEFO），并对拣选订单进行排序以缩短行走路径。第三个领域是可追溯性：每一次移动都会记录操作用户、时间戳以及起始和目标货位以供审计。对于制药、食品和汽车行业，这一审计追踪是监管要求；对于3PL物流服务商，它是按服务计费的基础。"
        },
        {
          "h2": "WMS、WCS与ERP：各自的职责",
          "body": "ERP（SAP、Oracle、Microsoft Dynamics）负责管理业务流程：财务、采购、销售和生产。它知道仓库里有100托盘的X产品，却不知道每一托盘具体存放在哪个货位。WMS位于ERP与物理仓库之间：它接收来自ERP的订单，并将其转化为存储和拣选指令，同时精确掌握每件产品在仓库中的位置。WCS（仓库控制系统）则是更下一层的控制：它将WMS的指令实时转化为对物理设备——堆垛机、机器人、输送机——的操作命令。在一座完全自动化的仓库中，这三套系统层层衔接运行：ERP → WMS → WCS → 物理设备。在DELIE系统中，WMS与WCS集成于同一平台，从而降低了集成的复杂度。"
        },
        {
          "h2": "阿根廷现代仓库对WMS的关键功能要求",
          "body": "阿根廷一座现代仓库的WMS至少应包含以下功能：具备精确货位的实时库存控制；面向食品和制药的自动FIFO与FEFO；满足ANMAT和FDA合规要求的批次与序列号追溯；带检验和受控二次入库的退货管理；根据周转历史优化货位的动态货位分配；用于计费和审计的报表；以及与现有ERP的双向集成。对于3PL运营商，还需增加库存隔离的多客户管理。对于制药行业，WMS须配备GMP模块，具备IQ/OQ/PQ验证和21 CFR Part 11合规能力。"
        },
        {
          "h2": "何时ERP自带的WMS不够用，需要专用WMS",
          "body": "ERP系统的库存模块（SAP MM、Oracle Inventory）在仓库层面而非货位层面管理库存。它们知道仓库里有100托盘，却不知道每一托盘具体在哪个货位。对于设有编号货位、进行拣选作业并采用FEFO流程的仓库，ERP的库存模块并不够用：您需要一套与ERP集成的专用WMS。通常的转折点出现在仓库存储货位超过500个、日移动量超过300次时，或引入需要实时货位控制的自动化设备（堆垛机、机器人）时。作为STOKA交钥匙项目的一部分，DELIE会交付其自有的、与WCS集成的WMS。"
        }
      ],
      "conclusionH2": "WMS：长期影响最大的投资",
      "conclusion": "在仓库自动化项目中，WMS是对运营产生长期影响最大的技术：即便物理设备折旧完毕，它依然是核心系统。选择一套具备成长空间的WMS——支持多客户、多站点、监管功能可扩展——可避免日后代价高昂的更换项目。STOKA将DELIE的WMS作为项目的一部分交付，包含与现有ERP的完整集成以及运营团队的培训。",
      "faq": [
        {
          "q": "DELIE的WMS能与SAP集成吗？",
          "a": "可以。该WMS配有面向SAP S/4HANA和SAP ECC的认证连接器，通过RFC/BAPI和REST API对接。双向集成可将ERP的入库和出库订单与物理仓库货位实时同步。STOKA负责与客户IT团队协作完成技术集成。"
        },
        {
          "q": "在现有仓库中实施WMS需要多长时间？",
          "a": "对于此前没有WMS的仓库，完整实施（配置、与ERP集成、主数据加载和培训）需要8至14周。如果需要替换现有的WMS，项目还包含数据迁移，周期可能延长至4至6个月。"
        },
        {
          "q": "如果与ERP的连接中断，WMS还能运行吗？",
          "a": "可以。WMS拥有自己的数据库，可独立自主运行。一旦ERP宕机，仓库仍可继续作业，连接恢复后交易数据会自动同步。不会丢失数据，也无需事后手动补录。"
        },
        {
          "q": "当仓库规模扩大或新增更多SKU时会怎样？",
          "a": "DELIE的WMS无需变更架构即可扩展。您可以逐步增加更多存储货位、更多用户、更多物理设备以及更多监管功能。许可证在支持期内包含软件更新和新功能。"
        }
      ],
      "cta": {
        "heading": "我们帮您评估：您的运营需要专用WMS，还是ERP自带的就已足够",
        "text": "免费技术咨询，并对您当前的运营流程进行分析。",
        "btnPrimary": {
          "label": "咨询专家",
          "url": "/contacto"
        },
        "btnSecondary": {
          "label": "查看WMS/WCS软件",
          "url": "/catalogo/software/wms"
        }
      },
      "relacionados": [
        {
          "titulo": "WMS与WCS：各自负责什么软件功能",
          "slug": "wms-vs-wcs"
        },
        {
          "titulo": "什么是ASRS系统",
          "slug": "que-es-un-sistema-asrs"
        },
        {
          "titulo": "自动化一座仓库需要多少成本",
          "slug": "cuanto-cuesta-automatizar-almacen"
        }
      ]
    }
  }
};

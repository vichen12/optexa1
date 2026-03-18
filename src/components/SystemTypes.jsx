import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Zap, Grid3x3, ArrowUp, RotateCcw, Truck, ChevronRight, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const SYSTEMS = [
  {
    id: '01', icon: Truck, color: 'cyan',
    name_es: 'Unit-Load AS/RS', name_en: 'Unit-Load AS/RS', name_zh: 'Unit-Load AS/RS',
    sub_es: 'Grúas de pasillo fijo — cargas pesadas', sub_en: 'Fixed-aisle stacker cranes — heavy loads', sub_zh: '固定通道堆垛机',
    desc_es: 'Grúas-apiladoras sobre rieles dedicados para pallets de gran volumen (500–2.500 kg). Velocidad horizontal hasta 180 m/min, elevación 60 m/min. Única solución viable para cámaras frigoríficas a −28°C con operación continua sin personal en la zona fría. Operación dual-cycle maximiza eficiencia.',
    desc_en: 'Fixed-aisle stacker cranes for heavy pallet loads (500–2,500 kg). Horizontal speed up to 180 m/min, lifting 60 m/min. Only viable solution for cold storage at −28°C with continuous operation. Dual-cycle maximizes efficiency.',
    desc_zh: '固定通道堆垛机，适用于重型托盘货物（500–2,500公斤）。水平速度可达180米/分钟，提升60米/分钟。是唯一适用于-28°C冷库持续运营的解决方案。',
    specs: [
      { label_es: 'Carga máx.', label_en: 'Max load', label_zh: '最大载重', val: '500–2.500 kg' },
      { label_es: 'Ciclos/hora', label_en: 'Cycles/hour', label_zh: '每小时循环', val: '20–50 / grúa' },
      { label_es: 'Altura máx.', label_en: 'Max height', label_zh: '最大高度', val: 'Hasta 45 m' },
      { label_es: 'Ahorro espacio', label_en: 'Space saving', label_zh: '节省空间', val: 'Hasta 85%' },
    ],
    sectors_es: ['Manufactura', 'Cold Chain', 'Distribución pesada', 'Automotriz'],
    sectors_en: ['Manufacturing', 'Cold Chain', 'Heavy Distribution', 'Automotive'],
    sectors_zh: ['制造业', '冷链', '重型配送', '汽车'],
    stat: '85%', statLabel_es: 'ahorro espacio', statLabel_en: 'space saving', statLabel_zh: '节省空间',
    payback_es: '24–48 meses', payback_en: '24–48 months', payback_zh: '24–48个月',
    source: 'Kardex Technical Documentation; Dematic Cold Storage Case Studies, 2024',
  },
  {
    id: '02', icon: Package, color: 'blue',
    name_es: 'Mini-Load AS/RS', name_en: 'Mini-Load AS/RS', name_zh: 'Mini-Load AS/RS',
    sub_es: 'Grúas para cajas, totes y bandejas', sub_en: 'Cranes for boxes, totes & trays', sub_zh: '箱体托盘堆垛机',
    desc_es: 'Orientados a totes, cajas y bandejas de hasta 75 kg. Mástiles de aluminio con drives servo alcanzan 360 m/min horizontal y aceleraciones de 2 m/s². Tiempos de ciclo 10–20 segundos. Solución predominante en e-commerce de alto volumen y distribución farmacéutica.',
    desc_en: 'For totes, boxes and trays up to 75 kg. Aluminum masts with servo drives reach 360 m/min horizontal, 2 m/s² acceleration. Cycle times 10–20 seconds. Dominant solution in high-volume e-commerce and pharma distribution.',
    desc_zh: '适用于最重75公斤的周转箱、箱体和托盘。铝制桅杆配伺服驱动，水平速度360米/分钟，加速度2米/秒²。广泛应用于高产量电商和制药配送。',
    specs: [
      { label_es: 'Carga máx.', label_en: 'Max load', label_zh: '最大载重', val: 'Hasta 75 kg' },
      { label_es: 'Throughput', label_en: 'Throughput', label_zh: '吞吐量', val: '150–500 ciclos/h' },
      { label_es: 'Altura máx.', label_en: 'Max height', label_zh: '最大高度', val: 'Hasta 30 m' },
      { label_es: 'Ahorro espacio', label_en: 'Space saving', label_zh: '节省空间', val: 'Hasta 80%' },
    ],
    sectors_es: ['E-commerce', 'Farmacéutica', 'Autopartes', 'Micro-fulfillment'],
    sectors_en: ['E-commerce', 'Pharma', 'Auto Parts', 'Micro-fulfillment'],
    sectors_zh: ['电商', '制药', '汽配', '微型履单中心'],
    stat: '500', statLabel_es: 'ciclos/hora', statLabel_en: 'cycles/hour', statLabel_zh: '每小时循环',
    payback_es: '18–36 meses', payback_en: '18–36 months', payback_zh: '18–36个月',
    source: 'Spacedas, VLM vs Miniload Technical Comparison, 2025; Swisslog, 2025',
  },
  {
    id: '03', icon: Zap, color: 'emerald',
    name_es: 'Shuttle System', name_en: 'Shuttle System', name_zh: 'Shuttle系统',
    sub_es: 'Vehículos robóticos por nivel', sub_en: 'Level-based robotic vehicles', sub_zh: '分层机器人穿梭车',
    desc_es: 'Plataformas robóticas autónomas sobre rieles por cada nivel del rack. Mayor throughput de la familia AS/RS: 300–1.000 ciclos/hora. Batería Li-Ion con recarga automática. Velocidades hasta 5 m/s. Modulares: se agregan shuttles sin modificar infraestructura. Soporta almacenamiento single, double, triple y quadruple-deep.',
    desc_en: 'Autonomous robotic platforms on per-level rails. Highest throughput in the AS/RS family: 300–1,000 cycles/hour. Li-Ion battery with auto-charging. Up to 5 m/s speed. Modular: add shuttles without modifying infrastructure.',
    desc_zh: '在每层货架导轨上运行的自主机器人平台。AS/RS家族吞吐量最高：300–1,000次/小时。锂电池自动充电，速度可达5 m/s。模块化设计，无需改造基础设施即可增加穿梭车。',
    specs: [
      { label_es: 'Carga máx.', label_en: 'Max load', label_zh: '最大载重', val: '15–1.500 kg' },
      { label_es: 'Throughput', label_en: 'Throughput', label_zh: '吞吐量', val: '300–1.000 ciclos/h' },
      { label_es: 'Velocidad', label_en: 'Speed', label_zh: '速度', val: 'Hasta 5 m/s' },
      { label_es: 'Ahorro espacio', label_en: 'Space saving', label_zh: '节省空间', val: 'Hasta 85%' },
    ],
    sectors_es: ['E-commerce', 'Alimentación', 'Retail', 'Logística 3PL'],
    sectors_en: ['E-commerce', 'Food & Beverage', 'Retail', '3PL Logistics'],
    sectors_zh: ['电商', '食品饮料', '零售', '第三方物流'],
    stat: '1.000', statLabel_es: 'ciclos/hora', statLabel_en: 'cycles/hour', statLabel_zh: '每小时循环',
    payback_es: '24–60 meses', payback_en: '24–60 months', payback_zh: '24–60个月',
    source: 'Addverb, ASRS Types and Applications, 2024; Grand View Research, 2024',
  },
  {
    id: '04', icon: Grid3x3, color: 'violet',
    name_es: 'Cube Storage', name_en: 'Cube Storage', name_zh: '立方体存储',
    sub_es: 'Robots sobre grilla 3D — AutoStore', sub_en: '3D grid robots — AutoStore type', sub_zh: '3D网格机器人 — AutoStore型',
    desc_es: 'Robots operan sobre una grilla tridimensional de bins normalizados. Densidad 4× superior al racking convencional. Sin pasillos. AutoStore procesa más de 1.000 pedidos/hora en menos de 1.000 m². Los robots se autorecargan. Mayor CAPEX pero máxima densidad: ideal para micro-fulfillment urbano.',
    desc_en: 'Robots on a 3D grid of standardized bins. 4× density vs conventional racking. No aisles needed. AutoStore processes 1,000+ orders/hour in under 1,000 m². Self-charging robots. Highest CAPEX but maximum density: ideal for urban micro-fulfillment.',
    desc_zh: '机器人在标准化货箱的三维网格上运作，密度是传统货架的4倍，无需通道。AutoStore在不足1,000平方米内每小时可处理1,000+订单，机器人自动充电。CAPEX最高但存储密度最大。',
    specs: [
      { label_es: 'Carga máx.', label_en: 'Max load', label_zh: '最大载重', val: 'Hasta 30 kg/bin' },
      { label_es: 'Throughput', label_en: 'Throughput', label_zh: '吞吐量', val: '1.000+ ped/h' },
      { label_es: 'Densidad', label_en: 'Density', label_zh: '存储密度', val: '4× convencional' },
      { label_es: 'Pasillos req.', label_en: 'Aisles required', label_zh: '所需通道', val: 'Ninguno' },
    ],
    sectors_es: ['Micro-fulfillment', 'E-commerce intensivo', 'Farmacéutica', 'Retail urbano'],
    sectors_en: ['Micro-fulfillment', 'Intensive E-commerce', 'Pharma', 'Urban Retail'],
    sectors_zh: ['微型履单', '高强度电商', '制药', '城市零售'],
    stat: '4×', statLabel_es: 'densidad vs racks', statLabel_en: 'density vs racking', statLabel_zh: '密度 vs 货架',
    payback_es: '24–60 meses', payback_en: '24–60 months', payback_zh: '24–60个月',
    source: 'Element Logic, Six Types of ASRS, 2024; AutoStore Official Documentation, 2025',
  },
  {
    id: '05', icon: ArrowUp, color: 'fuchsia',
    name_es: 'VLM — Módulo de Elevación Vertical', name_en: 'VLM — Vertical Lift Module', name_zh: '垂直提升模块',
    sub_es: 'Dos columnas de bandejas con extractor central', sub_en: 'Dual column trays with central extractor', sub_zh: '双列托盘与中央提取器',
    desc_es: 'Dos columnas de bandejas con extractor central. Mide el alto de cada ítem al ingresarlo y reubica bandejas con separaciones de 25 mm. Bandejas hasta 1.000 kg. Throughput estándar: 125–350 ítems/hora. Hasta 100 pies de altura aprovechando el cubo total de la nave. Payback de 6–18 meses en operaciones con alta rotación.',
    desc_en: 'Two columns of trays with central extractor. Measures item height at intake and repositions trays in 25mm increments. Trays up to 1,000 kg. Standard throughput: 125–350 items/hour. Up to 100ft height. Payback 6–18 months in high-turnover operations.',
    desc_zh: '双列托盘配中央提取器，进货时测量物品高度并以25毫米为增量重新定位托盘。托盘最重1,000公斤，标准吞吐量125–350件/小时。最高可达30米。高周转运营回报期6–18个月。',
    specs: [
      { label_es: 'Carga/bandeja', label_en: 'Load/tray', label_zh: '每托盘载重', val: 'Hasta 1.000 kg' },
      { label_es: 'Throughput', label_en: 'Throughput', label_zh: '吞吐量', val: '125–350 ítems/h' },
      { label_es: 'Ahorro espacio', label_en: 'Space saving', label_zh: '节省空间', val: 'Hasta 85%' },
      { label_es: 'Payback', label_en: 'Payback', label_zh: '投资回收期', val: '6–18 meses' },
    ],
    sectors_es: ['E-commerce', 'Repuestos', 'Farmacéutica', 'MRO'],
    sectors_en: ['E-commerce', 'Spare Parts', 'Pharma', 'MRO'],
    sectors_zh: ['电商', '备件', '制药', 'MRO'],
    stat: '6', statLabel_es: 'meses payback mín.', statLabel_en: 'months min payback', statLabel_zh: '个月最短回报期',
    payback_es: '6–18 meses', payback_en: '6–18 months', payback_zh: '6–18个月',
    source: 'Kardex, ASRS Types Deep Dive, 2024; Modula Quick ROI of ASRS, 2025',
  },
  {
    id: '06', icon: RotateCcw, color: 'amber',
    name_es: 'Carrusel Horizontal', name_en: 'Horizontal Carousel', name_zh: '水平旋转货架',
    sub_es: 'Bins rotantes en circuito oval', sub_en: 'Oval circuit rotating bins', sub_zh: '椭圆循环旋转货箱',
    desc_es: 'Bins rotantes en circuito horizontal oval. En configuración pod (3–4 unidades con pick-to-light y batching) alcanzan hasta 600 líneas/hora. Bajo costo de mantenimiento. Ideal para espacios de bajo techo con alta densidad de picking. Mientras un operador pickea de uno, los demás giran a posición.',
    desc_en: 'Bins rotating in horizontal oval circuit. In pod configuration (3–4 units with pick-to-light and batching) reach up to 600 lines/hour. Low maintenance cost. Ideal for low-ceiling spaces with high picking density.',
    desc_zh: '货箱在水平椭圆轨道上旋转。以3–4台联机（配拣选指示灯和批次拣选）可达600行/小时。维护成本低，适合净高较低但拣选密度高的空间。',
    specs: [
      { label_es: 'Carga máx.', label_en: 'Max load', label_zh: '最大载重', val: 'Hasta 900 kg' },
      { label_es: 'Throughput (pod)', label_en: 'Throughput (pod)', label_zh: '吞吐量（联机）', val: 'Hasta 600 líns/h' },
      { label_es: 'Ahorro espacio', label_en: 'Space saving', label_zh: '节省空间', val: '60–70%' },
      { label_es: 'Techo mín.', label_en: 'Min ceiling', label_zh: '最低净高', val: 'Bajo techo OK' },
    ],
    sectors_es: ['MRO', 'Herramientas', 'Manufactura', 'Archivos'],
    sectors_en: ['MRO', 'Tools', 'Manufacturing', 'Archives'],
    sectors_zh: ['MRO', '工具', '制造业', '档案'],
    stat: '600', statLabel_es: 'líneas/hora (pod)', statLabel_en: 'lines/hour (pod)', statLabel_zh: '行/小时（联机）',
    payback_es: '6–18 meses', payback_en: '6–18 months', payback_zh: '6–18个月',
    source: 'Kardex, 8 Types of ASRS, 2024; B2E Automation ASRS Overview, 2024',
  },
];

const CC = {
  cyan:    { bg: 'rgba(6,182,212,.1)',    border: '#06b6d4',  text: '#22d3ee', glow: 'rgba(34,211,238,0.15)' },
  blue:    { bg: 'rgba(59,130,246,.1)',   border: '#3b82f6',  text: '#60a5fa', glow: 'rgba(96,165,250,0.15)' },
  emerald: { bg: 'rgba(16,185,129,.1)',   border: '#10b981',  text: '#34d399', glow: 'rgba(52,211,153,0.15)' },
  violet:  { bg: 'rgba(139,92,246,.1)',   border: '#8b5cf6',  text: '#a78bfa', glow: 'rgba(167,139,250,0.15)' },
  fuchsia: { bg: 'rgba(217,70,239,.1)',   border: '#d946ef',  text: '#e879f9', glow: 'rgba(232,121,249,0.15)' },
  amber:   { bg: 'rgba(245,158,11,.1)',   border: '#f59e0b',  text: '#fbbf24', glow: 'rgba(251,191,36,0.15)' },
};

const TITLES = {
  es: { badge: 'Clasificación técnica · AS/RS', t1: 'TIPOS DE', t2: 'SISTEMAS AS/RS', sub: '6 tecnologías de almacenamiento automatizado — seleccioná para ver especificaciones técnicas' },
  en: { badge: 'Technical classification · AS/RS', t1: 'AS/RS SYSTEM', t2: 'TYPES', sub: '6 automated storage technologies — select to view technical specifications' },
  zh: { badge: '技术分类 · AS/RS', t1: 'AS/RS', t2: '系统类型', sub: '6种自动化仓储技术 — 点击查看技术规格' },
};

export const SystemTypes = () => {
  const [active, setActive] = useState(null);
  const { lang } = useLanguage();
  const T = TITLES[lang] || TITLES.es;

  return (
    <section id="tecnologia" className="relative py-28 px-6 z-20 bg-transparent overflow-hidden">
      {/* Subtle dark veil so cards read over the gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/10 pointer-events-none" />
      {/* circuit-board background texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{ backgroundImage: "url('/circuit-board.svg')", backgroundSize: '400px', backgroundRepeat: 'repeat' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">

        {/* HEADER — left aligned with vertical accent */}
        <div className="mb-16 flex gap-6 items-start">
          <div className="hidden md:flex flex-col items-center gap-1 pt-3 shrink-0">
            <div className="w-px h-10 bg-gradient-to-b from-transparent to-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="w-px h-10 bg-gradient-to-b from-cyan-400 to-transparent" />
          </div>
          <div className="flex-grow">
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">{T.badge}</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                {T.t1}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {T.t2}
                </span>
              </h2>
              <p className="text-white/40 text-sm font-light max-w-sm md:text-right">{T.sub}</p>
            </div>
          </div>
        </div>

        {/* 3×2 GRID OF SYSTEM CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {SYSTEMS.map((sys, i) => {
            const c = CC[sys.color];
            const isActive = active === i;
            const Icon = sys.icon;
            const name = lang === 'zh' ? sys.name_zh : lang === 'en' ? sys.name_en : sys.name_es;
            const sub = lang === 'zh' ? sys.sub_zh : lang === 'en' ? sys.sub_en : sys.sub_es;
            return (
              <motion.button
                key={i}
                onClick={() => setActive(isActive ? null : i)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                style={isActive ? { background: c.bg, borderColor: c.border, boxShadow: `0 0 30px ${c.glow}` } : {}}
                className={`relative text-left p-6 rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                  isActive
                    ? 'shadow-lg'
                    : 'bg-black/25 border-white/12 hover:bg-black/35 hover:border-white/22'
                }`}
              >
                {/* Subtle glow when active */}
                {isActive && (
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                       style={{ background: c.glow }} />
                )}

                {/* ID + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    style={isActive ? { color: c.text, borderColor: `${c.border}40`, background: c.bg } : {}}
                    className={`text-[10px] font-black font-mono tracking-widest px-2.5 py-1 rounded-lg border ${
                      !isActive ? 'text-white/30 border-white/10 bg-white/5' : ''
                    }`}
                  >
                    {sys.id}
                  </span>
                  <div
                    style={isActive ? { background: c.bg, color: c.text } : {}}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${!isActive ? 'bg-white/8 text-white/30' : ''}`}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                {/* Name */}
                <h3
                  style={isActive ? { color: c.text } : {}}
                  className={`text-base font-black uppercase tracking-tight leading-tight mb-1 ${!isActive ? 'text-white/70' : ''}`}
                >
                  {name}
                </h3>
                <p className="text-white/30 text-[10px] leading-tight mb-4">{sub}</p>

                {/* Key stat */}
                <div className="flex items-end gap-2">
                  <span
                    style={isActive ? { color: c.text } : {}}
                    className={`text-3xl font-black leading-none ${!isActive ? 'text-white/50' : ''}`}
                  >
                    {sys.stat}
                  </span>
                  <span className="text-white/30 text-[10px] leading-tight pb-1">
                    {lang === 'zh' ? sys.statLabel_zh : lang === 'en' ? sys.statLabel_en : sys.statLabel_es}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* EXPANDABLE DETAIL PANEL */}
        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ borderColor: `${CC[SYSTEMS[active].color].border}30` }}
              className="bg-black/40 backdrop-blur-md border rounded-3xl overflow-hidden"
            >
              {(() => {
                const sys = SYSTEMS[active];
                const c = CC[sys.color];
                const Icon = sys.icon;
                const name = lang === 'zh' ? sys.name_zh : lang === 'en' ? sys.name_en : sys.name_es;
                const sub = lang === 'zh' ? sys.sub_zh : lang === 'en' ? sys.sub_en : sys.sub_es;
                const desc = lang === 'zh' ? sys.desc_zh : lang === 'en' ? sys.desc_en : sys.desc_es;
                const sectors = lang === 'zh' ? sys.sectors_zh : lang === 'en' ? sys.sectors_en : sys.sectors_es;
                const payback = lang === 'zh' ? sys.payback_zh : lang === 'en' ? sys.payback_en : sys.payback_es;
                return (
                  <div className="p-8 md:p-10">
                    <div className="grid lg:grid-cols-5 gap-10 items-start">

                      {/* LEFT — info 3/5 */}
                      <div className="lg:col-span-3">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            style={{ background: c.bg, borderColor: `${c.border}40`, color: c.text }}
                            className="w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0"
                          >
                            <Icon size={26} />
                          </div>
                          <div>
                            <p style={{ color: c.text }} className="text-[10px] font-bold uppercase tracking-widest mb-1">
                              {lang === 'zh' ? `${sys.id} / 06` : lang === 'en' ? `System ${sys.id} of 06` : `Sistema ${sys.id} de 06`}
                            </p>
                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">{name}</h3>
                            <p style={{ color: c.text }} className="text-xs font-bold uppercase tracking-widest mt-0.5 opacity-80">{sub}</p>
                          </div>
                        </div>

                        <p className="text-white/65 text-base leading-relaxed font-light mb-8">{desc}</p>

                        {/* Sectors */}
                        <div className="mb-4">
                          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <MapPin size={10} />
                            {lang === 'zh' ? '适用行业' : lang === 'en' ? 'Key Sectors' : 'Sectores clave'}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {sectors.map((s, idx) => (
                              <span
                                key={idx}
                                style={{ background: c.bg, borderColor: `${c.border}30`, color: c.text }}
                                className="px-3 py-1.5 rounded-lg border text-[11px] font-bold uppercase tracking-wider"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* RIGHT — specs 2/5 */}
                      <div className="lg:col-span-2">
                        {/* Big stat */}
                        <div
                          style={{ background: c.bg, borderColor: `${c.border}30` }}
                          className="border rounded-2xl p-6 mb-4 text-center"
                        >
                          <p style={{ color: c.text }} className="text-6xl font-black leading-none mb-1">{sys.stat}</p>
                          <p className="text-white/50 text-xs font-mono uppercase tracking-widest">
                            {lang === 'zh' ? sys.statLabel_zh : lang === 'en' ? sys.statLabel_en : sys.statLabel_es}
                          </p>
                        </div>

                        {/* 2×2 specs grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {sys.specs.map((spec, idx) => (
                            <div
                              key={idx}
                              style={{ borderColor: `${c.border}20` }}
                              className="bg-white/3 border rounded-xl p-4"
                            >
                              <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest mb-1">
                                {lang === 'zh' ? spec.label_zh : lang === 'en' ? spec.label_en : spec.label_es}
                              </p>
                              <p style={{ color: c.text }} className="text-base font-black">{spec.val}</p>
                            </div>
                          ))}
                        </div>

                        {/* Payback */}
                        <div className="flex items-center gap-3 bg-white/3 border border-white/8 rounded-xl px-4 py-3">
                          <Clock size={14} className="text-white/30 shrink-0" />
                          <div>
                            <p className="text-white/25 text-[9px] font-bold uppercase tracking-widest">
                              {lang === 'zh' ? '投资回收期' : lang === 'en' ? 'Typical Payback' : 'Payback típico'}
                            </p>
                            <p className="text-white font-black text-sm">{payback}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Source */}
                    <div className="mt-6 pt-5 border-t border-white/5">
                      <p className="text-white/20 text-[10px] font-mono">
                        {lang === 'zh' ? '来源：' : lang === 'en' ? 'Source: ' : 'Fuente: '}{sys.source}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

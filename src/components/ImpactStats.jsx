import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, DollarSign, Zap, ShieldCheck, BarChart2, Package } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const COMPARE = [
  { metric_es: 'Picking rate (líns/h/op)', metric_en: 'Picking rate (lines/h/op)', metric_zh: '拣选率（行/时/人）', trad: '40–80', asrs: '200–600', gain: '+400%', color: 'cyan' },
  { metric_es: 'Tasa de error de picking', metric_en: 'Picking error rate', metric_zh: '拣选错误率', trad: '0.5–2%', asrs: '0.01–0.1%', gain: '−99%', color: 'emerald' },
  { metric_es: 'Ciclo de pedido', metric_en: 'Order cycle time', metric_zh: '订单周期时间', trad: '2–8 h', asrs: '15–90 min', gain: '−80%', color: 'violet' },
  { metric_es: 'Costo mano de obra', metric_en: 'Labor cost', metric_zh: '人工成本', trad: 'Base', asrs: '−66%', gain: '−66%', color: 'blue' },
];

const CHART = [
  { year: '1', trad: 38, asrs: 55 },
  { year: '2', trad: 40, asrs: 68 },
  { year: '3', trad: 41, asrs: 78 },
  { year: '4', trad: 42, asrs: 87 },
  { year: '5', trad: 43, asrs: 95 },
];

const TITLES = {
  es: {
    t1: 'EL IMPACTO', t2: 'EN NÚMEROS',
    sub: 'Benchmarks operativos documentados · Industria logística global',
    chart: 'Índice de productividad operativa',
    trad: 'Operación Manual', asrs: 'Con Sistema ASRS',
    compare: 'Comparativa directa · KPIs documentados',
    spaceTitle: 'Ahorro de Espacio',
    spaceSub: 'reducción vs racks convencionales',
    accTitle: 'Precisión de Picking',
    accSub: 'exactitud documentada',
    accComp: 'Operación manual: 95–97%',
    opsTitle: 'Operación',
    opsSub: '365 días · sin turnos obligatorios',
    marketTitle: 'Mercado Global ASRS',
    marketSub: 'proyección 2033',
    marketCagr: 'CAGR 7.41%',
    laborTitle: 'Reducción Laboral',
    laborSub: 'mano de obra directa',
    speedTitle: 'Incremento Throughput',
    speedSub: 'de 40–80 a 200–600 líns/h',
    roiTitle: 'Payback Promedio',
    roiSub: 'retorno de inversión',
    energyTitle: 'Ahorro Energético',
    energySub: 'sistema KERS integrado',
    src: 'Datos: benchmarks internacionales de la industria logística y de automatización 2024–2025',
  },
  en: {
    t1: 'THE IMPACT', t2: 'IN NUMBERS',
    sub: 'Documented operational benchmarks · Global logistics industry',
    chart: 'Operational productivity index',
    trad: 'Manual Operation', asrs: 'With ASRS System',
    compare: 'Direct comparison · Documented KPIs',
    spaceTitle: 'Space Savings',
    spaceSub: 'reduction vs conventional racking',
    accTitle: 'Picking Accuracy',
    accSub: 'documented accuracy',
    accComp: 'Manual operation: 95–97%',
    opsTitle: 'Operation',
    opsSub: '365 days · no mandatory shifts',
    marketTitle: 'Global ASRS Market',
    marketSub: '2033 projection',
    marketCagr: 'CAGR 7.41%',
    laborTitle: 'Labor Reduction',
    laborSub: 'direct labor costs',
    speedTitle: 'Throughput Increase',
    speedSub: 'from 40–80 to 200–600 lines/h',
    roiTitle: 'Average Payback',
    roiSub: 'return on investment',
    energyTitle: 'Energy Savings',
    energySub: 'integrated KERS system',
    src: 'Data: international benchmarks from the global logistics and automation industry 2024–2025',
  },
  zh: {
    t1: '量化', t2: '业务影响',
    sub: '已记录运营基准数据 · 全球物流行业',
    chart: '运营生产力指数',
    trad: '人工操作', asrs: '采用ASRS系统',
    compare: '直接对比 · 已记录KPI',
    spaceTitle: '空间节省',
    spaceSub: '相比传统货架的减少量',
    accTitle: '拣选精度',
    accSub: '已记录精度',
    accComp: '人工操作：95–97%',
    opsTitle: '运营',
    opsSub: '365天 · 无强制班次',
    marketTitle: '全球ASRS市场',
    marketSub: '2033年预测',
    marketCagr: '年复合增长率7.41%',
    laborTitle: '劳动力降低',
    laborSub: '直接人工成本',
    speedTitle: '吞吐量增加',
    speedSub: '从40–80提升至200–600行/时',
    roiTitle: '平均回报期',
    roiSub: '投资回报',
    energyTitle: '节能',
    energySub: '集成KERS系统',
    src: '数据：全球物流与自动化行业国际基准 2024–2025',
  },
};

export const ImpactStats = () => {
  const { lang } = useLanguage();
  const T = TITLES[lang] || TITLES.es;

  return (
    <section id="impacto" className="relative py-28 px-6 z-20 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-cyan-400/60 text-[10px] font-mono tracking-[0.5em] uppercase mb-2">— DATA</p>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              {T.t1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {T.t2}
              </span>
            </h2>
          </div>
          <p className="text-white/30 text-sm font-mono tracking-wide md:text-right max-w-xs">{T.sub}</p>
        </div>

        {/* ── BENTO GRID ROW 1 ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

          {/* 85% SPACE — 2 cols, tall */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 bg-[#02040a]/90 border border-cyan-500/15 rounded-3xl p-8 relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
            <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">{T.spaceTitle}</p>
            <p className="text-[88px] font-black text-white leading-none">85%</p>
            <p className="text-white/40 text-sm mb-6">{T.spaceSub}</p>

            {/* Visual density comparison */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[11px] text-white/30 mb-1">
                  <span>{lang === 'zh' ? '传统货架' : lang === 'en' ? 'Conv. racking' : 'Racks conv.'}</span>
                  <span>25–40%</span>
                </div>
                <div className="w-full bg-white/8 rounded-full h-2">
                  <div className="h-full bg-white/20 rounded-full" style={{ width: '40%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] text-cyan-400 mb-1">
                  <span>AS/RS</span>
                  <span>85%+</span>
                </div>
                <div className="w-full bg-white/8 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 99.9% ACCURACY — 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="bg-[#02040a]/90 border border-emerald-500/15 rounded-2xl p-7 relative overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
            <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2">{T.accTitle}</p>
            <p className="text-5xl font-black text-white leading-none mb-1">99.9%</p>
            <p className="text-white/35 text-xs mb-5">{T.accSub}</p>
            {/* Mini bar comparison */}
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[10px] text-white/30 mb-1">
                  <span>{lang === 'zh' ? '人工' : lang === 'en' ? 'Manual' : 'Manual'}</span><span>95–97%</span>
                </div>
                <div className="w-full bg-white/8 rounded-full h-1.5">
                  <div className="h-full bg-white/20 rounded-full" style={{ width: '96%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-emerald-400 mb-1">
                  <span>AS/RS</span><span>99.9%</span>
                </div>
                <div className="w-full bg-white/8 rounded-full h-1.5">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: '99.9%' }} viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                  />
                </div>
              </div>
            </div>
            <p className="text-white/20 text-[10px] mt-4 italic">{T.accComp}</p>
          </motion.div>

          {/* 24/7 OPERATION — 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="bg-[#02040a]/90 border border-violet-500/15 rounded-2xl p-7 relative overflow-hidden"
          >
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl" />
            <p className="text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-2">{T.opsTitle}</p>
            <p className="text-5xl font-black text-white leading-none mb-1">24/7</p>
            <p className="text-white/35 text-xs mb-5">{T.opsSub}</p>
            {/* Week grid */}
            <div className="grid grid-cols-7 gap-1">
              {['L','M','X','J','V','S','D'].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-full aspect-square rounded-md bg-violet-400/70" />
                  <span className="text-white/20 text-[8px]">{d}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-violet-400 text-[11px] font-bold">ONLINE</span>
            </div>
          </motion.div>
        </div>

        {/* ── BENTO GRID ROW 2 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">

          {/* BAR CHART — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-[#02040a]/90 border border-white/8 rounded-2xl p-7"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-white font-bold mb-1">{T.chart}</p>
                <p className="text-white/25 text-xs font-mono">
                  Base 100 — {lang === 'zh' ? '按年度（5年期）' : lang === 'en' ? 'by year (5-year period)' : 'por año (período 5 años)'}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
                <TrendingUp size={13} className="text-cyan-400" />
                <span className="text-cyan-400 font-black text-sm">
                  +120% {lang === 'zh' ? '提升' : lang === 'en' ? 'gain' : 'mejora'}
                </span>
              </div>
            </div>
            {/* Legend */}
            <div className="flex gap-5 mb-5">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-white/20" /><span className="text-white/40 text-xs">{T.trad}</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-cyan-400" /><span className="text-white/80 text-xs font-bold">{T.asrs}</span></div>
            </div>
            {/* Bars */}
            <div className="flex items-end gap-4 h-40">
              {CHART.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end gap-1 h-32 relative">
                    {i === 0 && [25, 50, 75, 100].map(v => (
                      <div key={v} className="absolute left-0 right-0 border-t border-white/5" style={{ bottom: `${v}%` }} />
                    ))}
                    <motion.div
                      initial={{ height: 0 }} whileInView={{ height: `${d.trad}%` }} viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className="flex-1 bg-white/12 rounded-t"
                    />
                    <motion.div
                      initial={{ height: 0 }} whileInView={{ height: `${d.asrs}%` }} viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 + 0.1 }}
                      className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                    />
                  </div>
                  <span className="text-white/25 text-[9px]">
                    {lang === 'zh' ? `第${d.year}年` : `Yr ${d.year}`}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* USD 17B MARKET — 1 col */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#02040a]/90 border border-blue-500/15 rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
            <div>
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2">{T.marketTitle}</p>
              <p className="text-4xl font-black text-white leading-none">USD</p>
              <p className="text-6xl font-black text-blue-400 leading-none">19.7B</p>
              <p className="text-white/30 text-xs mt-2">{T.marketSub}</p>
            </div>
            <div>
              <div className="border-t border-white/5 pt-4 mt-4">
                <p className="text-blue-400 font-black text-lg">{T.marketCagr}</p>
                <p className="text-white/30 text-xs">{lang === 'zh' ? '全球市场预测' : lang === 'en' ? 'Global market forecast' : 'Proyección mercado global'}</p>
              </div>
              {/* Mini trend line */}
              <div className="mt-4 flex items-end gap-1 h-10">
                {[20, 30, 38, 50, 62, 75, 88, 100].map((h, i) => (
                  <motion.div key={i}
                    initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex-1 rounded-t"
                    style={{ background: `rgba(96,165,250,${0.2 + i * 0.1})` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── BENTO GRID ROW 3: 4 small cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[
            { icon: Users, value: '−66%', title: T.laborTitle, sub: T.laborSub, color: 'blue', delay: 0 },
            { icon: TrendingUp, value: '+400%', title: T.speedTitle, sub: T.speedSub, color: 'cyan', delay: 0.06 },
            { icon: DollarSign, value: lang === 'zh' ? '6–36月' : lang === 'en' ? '6–36 mo' : '6–36 m', title: T.roiTitle, sub: T.roiSub, color: 'fuchsia', delay: 0.12 },
            { icon: Zap, value: '−30%', title: T.energyTitle, sub: T.energySub, color: 'amber', delay: 0.18 },
          ].map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.35, delay: m.delay }}
              className="bg-[#02040a]/90 border border-white/8 rounded-2xl p-5 hover:border-white/16 transition-all duration-300"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 small-icon-${m.color}`}>
                <m.icon size={18} />
              </div>
              <p className="text-3xl font-black text-white mb-1">{m.value}</p>
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 small-text-${m.color}`}>{m.title}</p>
              <p className="text-white/30 text-xs leading-snug">{m.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* ── COMPARISON TABLE — full width ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#02040a]/80 border border-white/8 rounded-2xl p-7"
        >
          <p className="text-white font-bold mb-6">{T.compare}</p>

          <div className="grid grid-cols-4 gap-2 mb-3 text-[10px] font-bold uppercase tracking-widest text-white/25 px-2">
            <span className="col-span-2">{lang === 'zh' ? '指标' : lang === 'en' ? 'Metric' : 'Métrica'}</span>
            <span className="text-center">{lang === 'zh' ? '人工' : lang === 'en' ? 'Manual' : 'Manual'}</span>
            <span className="text-center text-cyan-400">AS/RS</span>
          </div>

          <div className="space-y-2">
            {COMPARE.map((row, i) => {
              const metric = lang === 'en' ? row.metric_en : lang === 'zh' ? row.metric_zh : row.metric_es;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="grid grid-cols-4 gap-2 bg-white/3 border border-white/5 rounded-xl px-4 py-3 items-center"
                >
                  <span className="col-span-2 text-white/60 text-xs font-medium">{metric}</span>
                  <span className="text-center text-white/35 text-sm font-bold">{row.trad}</span>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className={`text-sm font-black compare-val-${row.color}`}>{row.asrs}</span>
                    <span className={`text-[9px] font-bold compare-gain-${row.color}`}>{row.gain}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-5 text-white/20 text-[10px] leading-relaxed border-t border-white/5 pt-4">{T.src}</p>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .small-icon-blue    { background: rgba(59,130,246,.08);  color: #60a5fa; }
        .small-icon-cyan    { background: rgba(34,211,238,.08);  color: #22d3ee; }
        .small-icon-fuchsia { background: rgba(217,70,239,.08);  color: #e879f9; }
        .small-icon-amber   { background: rgba(245,158,11,.08);  color: #fbbf24; }
        .small-text-blue    { color: #60a5fa; }
        .small-text-cyan    { color: #22d3ee; }
        .small-text-fuchsia { color: #e879f9; }
        .small-text-amber   { color: #fbbf24; }
        .compare-val-cyan    { color: #22d3ee; }
        .compare-val-emerald { color: #34d399; }
        .compare-val-blue    { color: #60a5fa; }
        .compare-val-violet  { color: #a78bfa; }
        .compare-gain-cyan   { color: rgba(34,211,238,.45); }
        .compare-gain-emerald{ color: rgba(52,211,153,.45); }
        .compare-gain-blue   { color: rgba(96,165,250,.45); }
        .compare-gain-violet { color: rgba(167,139,250,.45); }
      `}} />
    </section>
  );
};

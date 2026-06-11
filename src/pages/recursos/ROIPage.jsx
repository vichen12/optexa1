import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Clock, DollarSign, Users, ChevronDown } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';

const canonical = 'https://www.stokagroup.com/recursos/roi-automatizacion';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
    { "@type": "ListItem", "position": 2, "name": "Recursos", "item": "https://www.stokagroup.com/recursos" },
    { "@type": "ListItem", "position": 3, "name": "Calculadora de ROI", "item": canonical },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿En cuánto tiempo se amortiza un sistema ASRS en Argentina?",
      "acceptedAnswer": { "@type": "Answer", "text": "El período de recupero típico en Argentina es de 18 a 36 meses, dependiendo del costo laboral actual, el número de turnos y el volumen de movimientos. Con el Decreto 513/2025 y el RIMI (amortización acelerada 100% en el primer año), el ahorro fiscal puede reducir el costo neto del proyecto entre un 25% y un 35%." }
    },
    {
      "@type": "Question",
      "name": "¿Qué ahorros concretos genera la automatización de un almacén?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los principales ahorros son: reducción de personal operativo (40-60%), eliminación de errores de picking (0,1% vs 0,5-2% en manual), reducción de horas extra y ausentismo, ahorro energético en cámaras de frío (30-40%), y recupero de espacio para más capacidad sin nuevas instalaciones." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calcula el ROI de automatizar un almacén?",
      "acceptedAnswer": { "@type": "Answer", "text": "El ROI básico = (Ahorro anual – Costo de mantenimiento anual) / Inversión total × 100. El ahorro anual incluye reducción de nómina, reducción de errores, ahorro energético y aumento de productividad. STOKA ofrece un análisis de ROI personalizado sin costo en la primera consulta técnica." }
    },
  ],
};

const ASSUMPTIONS = {
  costoLaboral: 1800,
  errorRate: 0.015,
  costoError: 45,
  mantenimientoPct: 0.025,
};

function calcROI({ operarios, turnosPorDia, movimientosDia, costoPorOperario, inversionEstimada }) {
  const ahorroLaboral = operarios * 0.45 * costoPorOperario * 12;
  const ahorroErrores = movimientosDia * 365 * ASSUMPTIONS.errorRate * ASSUMPTIONS.costoError * 0.85;
  const ahorroTotal = ahorroLaboral + ahorroErrores;
  const costoMant = inversionEstimada * ASSUMPTIONS.mantenimientoPct;
  const ahorroNeto = ahorroTotal - costoMant;
  const roi = ahorroNeto > 0 ? (ahorroNeto / inversionEstimada) * 100 : 0;
  const payback = ahorroNeto > 0 ? inversionEstimada / ahorroNeto : null;
  return { ahorroLaboral, ahorroErrores, ahorroTotal, ahorroNeto, roi, payback };
}

const formatUSD = (n) => {
  if (n >= 1_000_000) return `USD ${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `USD ${Math.round(n / 1_000)}K`;
  return `USD ${Math.round(n)}`;
};

export const ROIPage = () => {
  const [operarios, setOperarios] = useState(12);
  const [turnosPorDia, setTurnosPorDia] = useState(2);
  const [movimientosDia, setMovimientosDia] = useState(500);
  const [costoPorOperario, setCostoPorOperario] = useState(ASSUMPTIONS.costoLaboral);
  const [inversionEstimada, setInversionEstimada] = useState(900000);
  const [showFormula, setShowFormula] = useState(false);

  const result = calcROI({ operarios, turnosPorDia, movimientosDia, costoPorOperario, inversionEstimada });

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Helmet>
        <title>Calculadora ROI Automatización de Almacén | STOKA</title>
        <meta name="description" content="Calculá el ROI de automatizar tu almacén en Argentina. Ahorro anual, período de recupero y beneficio fiscal RIMI estimados en segundos." />
        <meta property="og:title" content="Calculadora ROI Automatización de Almacén | STOKA Argentina" />
        <meta property="og:description" content="Calculá el ROI de automatizar tu almacén, bodega o depósito. Ahorro anual y período de recupero estimados en segundos." />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/productos-delie/asrs/Estanter%C3%ADas%20para%20gr%C3%BAa%20apiladora%20de%20paletas/pallet-stacker-crane-racking598c7.webp"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-zinc-950/90 to-zinc-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/recursos" className="hover:text-cyan-400 transition-colors">Recursos</Link>
            <span>/</span>
            <span className="text-slate-400">Calculadora ROI</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            <Calculator size={13} /> Herramienta interactiva
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white mb-5">
            Calculadora de ROI para<br />
            <span className="text-cyan-400">automatización de almacenes</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ingresá los datos de tu operación actual y obtené una estimación del ahorro anual, período de recupero y ROI proyectado para tu almacén, bodega o depósito en Argentina.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-8 space-y-7"
          >
            <h2 className="text-lg font-black text-white">Tu operación actual</h2>

            {/* Operarios */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center gap-2"><Users size={14} className="text-cyan-400" />Operarios en almacén</label>
                <span className="text-cyan-400 font-black text-lg">{operarios}</span>
              </div>
              <input type="range" min={3} max={80} value={operarios} onChange={e => setOperarios(+e.target.value)}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400" />
              <div className="flex justify-between text-xs text-slate-600 mt-1"><span>3</span><span>80</span></div>
            </div>

            {/* Movimientos */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center gap-2"><TrendingUp size={14} className="text-cyan-400" />Movimientos diarios</label>
                <span className="text-cyan-400 font-black text-lg">{movimientosDia.toLocaleString('es-AR')}</span>
              </div>
              <input type="range" min={100} max={5000} step={50} value={movimientosDia} onChange={e => setMovimientosDia(+e.target.value)}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400" />
              <div className="flex justify-between text-xs text-slate-600 mt-1"><span>100</span><span>5.000</span></div>
            </div>

            {/* Costo por operario */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center gap-2"><DollarSign size={14} className="text-cyan-400" />Costo mensual por operario (USD)</label>
                <span className="text-cyan-400 font-black text-lg">{costoPorOperario.toLocaleString('es-AR')}</span>
              </div>
              <input type="range" min={600} max={4000} step={100} value={costoPorOperario} onChange={e => setCostoPorOperario(+e.target.value)}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400" />
              <div className="flex justify-between text-xs text-slate-600 mt-1"><span>USD 600</span><span>USD 4.000</span></div>
              <p className="text-xs text-slate-500 mt-1">Incluí salario + cargas sociales + indemnización estimada</p>
            </div>

            {/* Inversión estimada */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center gap-2"><Calculator size={14} className="text-cyan-400" />Inversión estimada en ASRS (USD)</label>
                <span className="text-cyan-400 font-black text-lg">{formatUSD(inversionEstimada)}</span>
              </div>
              <input type="range" min={200000} max={3000000} step={50000} value={inversionEstimada} onChange={e => setInversionEstimada(+e.target.value)}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400" />
              <div className="flex justify-between text-xs text-slate-600 mt-1"><span>USD 200K</span><span>USD 3M</span></div>
              <p className="text-xs text-slate-500 mt-1">Equipo + estanterías + WCS + integración. STOKA precisa esto gratis.</p>
            </div>

            {/* Formula toggle */}
            <button
              onClick={() => setShowFormula(!showFormula)}
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <ChevronDown size={13} className={`transition-transform ${showFormula ? 'rotate-180' : ''}`} />
              ¿Cómo calculamos esto?
            </button>
            {showFormula && (
              <div className="bg-slate-800 rounded-xl p-4 text-xs text-slate-400 space-y-1.5">
                <p><span className="text-cyan-400 font-mono">Ahorro laboral</span> = Operarios × 45% × Costo mensual × 12</p>
                <p><span className="text-cyan-400 font-mono">Ahorro errores</span> = Movimientos/año × 1,5% × USD 45/error × 85%</p>
                <p><span className="text-cyan-400 font-mono">Costo mantenimiento</span> = Inversión × 2,5% anual</p>
                <p><span className="text-cyan-400 font-mono">ROI</span> = (Ahorro neto / Inversión) × 100</p>
                <p className="text-slate-600 pt-1">Estimación orientativa. El análisis real puede variar ±30% según perfil de operación.</p>
              </div>
            )}
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {/* Main metric */}
            <div className="bg-linear-to-br from-cyan-400/15 to-cyan-400/5 border border-cyan-400/30 rounded-2xl p-6 text-center">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">Ahorro neto anual estimado</p>
              <p className="text-5xl font-black text-white mb-1">{formatUSD(result.ahorroNeto)}</p>
              <p className="text-sm text-slate-400">después de costos de mantenimiento</p>
            </div>

            {/* Payback */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={18} className="text-cyan-400" />
                <p className="text-sm font-semibold text-slate-300">Período de recupero</p>
              </div>
              {result.payback ? (
                <p className="text-3xl font-black text-white">
                  {result.payback < 1 ? `${Math.round(result.payback * 12)} meses` : `${result.payback.toFixed(1)} años`}
                </p>
              ) : (
                <p className="text-xl font-black text-red-400">Revisar parámetros</p>
              )}
            </div>

            {/* ROI */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
              <p className="text-sm font-semibold text-slate-300 mb-1">ROI anual</p>
              <p className="text-3xl font-black text-cyan-400">{result.roi.toFixed(0)}%</p>
            </div>

            {/* Breakdown */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 space-y-3">
              <p className="text-sm font-semibold text-white">Desglose del ahorro</p>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Reducción de personal (45%)</span>
                <span className="text-white font-medium">{formatUSD(result.ahorroLaboral)}/año</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Reducción de errores (85%)</span>
                <span className="text-white font-medium">{formatUSD(result.ahorroErrores)}/año</span>
              </div>
              <div className="border-t border-slate-700 pt-3 flex justify-between text-sm">
                <span className="text-slate-400">Mantenimiento anual</span>
                <span className="text-red-400 font-medium">−{formatUSD(inversionEstimada * ASSUMPTIONS.mantenimientoPct)}/año</span>
              </div>
            </div>

            {/* RIMI */}
            <div className="bg-slate-800 border border-slate-600 rounded-2xl p-5">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">Beneficio fiscal RIMI 2025</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Con el RIMI (Decreto 513/2025), podés amortizar el 100% de la inversión en el primer año fiscal, reduciendo el costo neto entre{' '}
                <span className="text-white font-semibold">USD {Math.round(inversionEstimada * 0.25 / 1000)}K y USD {Math.round(inversionEstimada * 0.35 / 1000)}K</span>.
              </p>
            </div>

            <Link
              to="/contacto"
              className="block w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold text-center px-6 py-4 rounded-xl transition-colors"
            >
              Obtener análisis preciso gratuito
            </Link>
            <p className="text-xs text-slate-600 text-center">
              Esta calculadora es orientativa (±30%). STOKA realiza el análisis real sin costo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-black text-white mb-6">Preguntas frecuentes sobre el ROI de la automatización</h2>
        <div className="space-y-4">
          {[
            { q: '¿En cuánto tiempo se amortiza un sistema ASRS en Argentina?', a: 'El período de recupero típico en Argentina es de 18 a 36 meses, dependiendo del costo laboral actual, el número de turnos y el volumen de movimientos. Con el Decreto 513/2025 y el RIMI (amortización acelerada 100% en el primer año), el ahorro fiscal puede reducir el costo neto del proyecto entre un 25% y un 35%.' },
            { q: '¿Qué ahorros concretos genera la automatización de un almacén?', a: 'Los principales ahorros son: reducción de personal operativo (40-60%), eliminación de errores de picking (0,1% vs 0,5-2% en manual), reducción de horas extra y ausentismo, ahorro energético en cámaras de frío (30-40%), y recupero de espacio para más capacidad sin nuevas instalaciones.' },
            { q: '¿Cómo se calcula el ROI de automatizar un almacén?', a: 'El ROI básico = (Ahorro anual – Costo de mantenimiento anual) / Inversión total × 100. El ahorro anual incluye reducción de nómina, reducción de errores, ahorro energético y aumento de productividad. STOKA ofrece un análisis de ROI personalizado sin costo en la primera consulta técnica.' },
          ].map((f, i) => (
            <details key={i} className="group bg-slate-900 border border-slate-700 rounded-xl">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-semibold text-white pr-4">{f.q}</span>
                <ChevronDown size={16} className="text-cyan-400 shrink-0 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="px-5 pb-5 text-slate-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const GS_URL = 'https://script.google.com/macros/s/AKfycbzhg3lF1NXpxytuxno8XakeIYEA_iMEomRYK5jNIdpbM8vGDufWx-MepBKodQEMAhReOw/exec';
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
      "acceptedAnswer": { "@type": "Answer", "text": "El período de recupero típico en Argentina es de 18 a 36 meses, dependiendo del costo laboral actual, el número de turnos y el volumen de movimientos." }
    },
    {
      "@type": "Question",
      "name": "¿Qué ahorros concretos genera la automatización de un almacén?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los principales ahorros son: reducción de personal operativo (40-60%), eliminación de errores de picking (0,1% vs 0,5-2% en manual), reducción de horas extra y ausentismo, y ahorro energético en cámaras de frío (30-40%)." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calcula el ROI de automatizar un almacén?",
      "acceptedAnswer": { "@type": "Answer", "text": "ROI = (Ahorro anual – Costo de mantenimiento anual) / Inversión total × 100. STOKA ofrece un análisis de ROI personalizado sin costo en la primera consulta técnica." }
    },
  ],
};

const ASSUMPTIONS = { errorRate: 0.015, costoError: 45, mantenimientoPct: 0.025 };

const OPTS_OPERARIOS = [
  { label: '3–5', value: 4 },
  { label: '6–10', value: 8 },
  { label: '11–20', value: 15 },
  { label: '21–40', value: 30 },
  { label: '40+', value: 55 },
];

const OPTS_MOVIMIENTOS = [
  { label: '< 200 / día', value: 150 },
  { label: '200–500 / día', value: 350 },
  { label: '500–1.000 / día', value: 750 },
  { label: '1.000–2.000 / día', value: 1500 },
  { label: '+ 2.000 / día', value: 3000 },
];

const OPTS_COSTO = [
  { label: 'USD 900', value: 900 },
  { label: 'USD 1.400', value: 1400 },
  { label: 'USD 2.000', value: 2000 },
  { label: 'USD 3.000', value: 3000 },
];

const OPTS_INVERSION = [
  { label: 'USD 300K', value: 300000 },
  { label: 'USD 600K', value: 600000 },
  { label: 'USD 1M', value: 1000000 },
  { label: 'USD 1,5M', value: 1500000 },
  { label: 'USD 2,5M+', value: 2500000 },
];

function Selector({ label, sublabel, options, value, onChange }) {
  return (
    <div>
      <p className="text-sm font-black text-gray-900 mb-1">{label}</p>
      {sublabel && <p className="text-xs text-gray-400 mb-3">{sublabel}</p>}
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
              value === opt.value
                ? 'bg-cyan-500 border-cyan-500 text-white shadow-sm'
                : 'bg-white border-gray-200 text-gray-700 hover:border-cyan-300 hover:text-gray-900'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function calcROI({ operarios, movimientosDia, costoPorOperario, inversionEstimada }) {
  const ahorroLaboral = operarios * 0.45 * costoPorOperario * 12;
  const ahorroErrores = movimientosDia * 365 * ASSUMPTIONS.errorRate * ASSUMPTIONS.costoError * 0.85;
  const ahorroTotal = ahorroLaboral + ahorroErrores;
  const costoMant = inversionEstimada * ASSUMPTIONS.mantenimientoPct;
  const ahorroNeto = ahorroTotal - costoMant;
  const roi = ahorroNeto > 0 ? (ahorroNeto / inversionEstimada) * 100 : 0;
  const payback = ahorroNeto > 0 ? inversionEstimada / ahorroNeto : null;
  return { ahorroLaboral, ahorroErrores, ahorroTotal, ahorroNeto, roi, payback };
}

const fmt = (n) => {
  if (n >= 1_000_000) return `USD ${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `USD ${Math.round(n / 1_000)}K`;
  return `USD ${Math.round(n)}`;
};

export const ROIPage = () => {
  const [operarios, setOperarios] = useState(8);
  const [movimientosDia, setMovimientosDia] = useState(750);
  const [costoPorOperario, setCostoPorOperario] = useState(1400);
  const [inversionEstimada, setInversionEstimada] = useState(1000000);
  const [showFormula, setShowFormula] = useState(false);

  const result = calcROI({ operarios, movimientosDia, costoPorOperario, inversionEstimada });

  const handleCTA = () => {
    const labelOp  = OPTS_OPERARIOS.find(o => o.value === operarios)?.label ?? operarios;
    const labelMov = OPTS_MOVIMIENTOS.find(o => o.value === movimientosDia)?.label ?? movimientosDia;
    const paybackStr = result.payback
      ? (result.payback < 1 ? `${Math.round(result.payback * 12)} meses` : `${result.payback.toFixed(1)} años`)
      : 'a calcular';

    const texto =
      `Hola, acabo de usar la calculadora de ROI de STOKA y me gustaría un análisis más preciso:\n` +
      `• Operarios en almacén: ${labelOp}\n` +
      `• Movimientos/día: ${labelMov}\n` +
      `• Inversión estimada: ${fmt(inversionEstimada)}\n` +
      `• Ahorro neto anual estimado: ${fmt(result.ahorroNeto)}\n` +
      `• Período de recupero: ${paybackStr}\n` +
      `• ROI anual: ${result.roi.toFixed(0)}%`;

    // Fire and forget — no await para que WhatsApp abra instantáneo
    fetch(GS_URL, {
      method: 'POST', mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        source: 'roi_calculator',
        operarios: labelOp,
        movimientos_dia: labelMov,
        costo_operario_usd: costoPorOperario,
        inversion_estimada_usd: inversionEstimada,
        ahorro_neto_anual_usd: Math.round(result.ahorroNeto),
        payback: paybackStr,
        roi_pct: result.roi.toFixed(0),
        whatsapp_mensaje: texto,
        timestamp: new Date().toISOString(),
      }).toString(),
    }).catch(() => {});

    window.open(`https://wa.me/5492612071048?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Helmet>
        <title>Calculadora ROI Automatización de Almacén | STOKA</title>
        <meta name="description" content="Calculá el ROI de automatizar tu almacén en Argentina. Ahorro anual, período de recupero y beneficio fiscal RIMI estimados en segundos." />
        <meta property="og:title" content="Calculadora ROI Automatización de Almacén | STOKA Argentina" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-white pt-36 pb-14 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-cyan-500 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/recursos" className="hover:text-cyan-500 transition-colors">Recursos</Link>
            <span>/</span>
            <span className="text-gray-600">Calculadora ROI</span>
          </nav>
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-5">
            ROI · Payback · RIMI · Ahorro anual · Herramienta interactiva
          </p>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
            Calculadora de<br />
            <span className="text-cyan-500">ROI de automatización</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Elegí los parámetros de tu operación y obtené el ahorro anual estimado, período de recupero y ROI proyectado.
          </p>
        </div>
      </section>

      <div className="bg-white">
        <section className="max-w-5xl mx-auto px-6 py-12 pb-16">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">

            {/* Inputs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-8"
            >
              <div>
                <h2 className="text-lg font-black text-gray-900 mb-1">Tu operación actual</h2>
                <p className="text-sm text-gray-400">Seleccioná la opción más cercana a tu situación.</p>
              </div>

              <Selector
                label="Operarios en almacén"
                sublabel="Personal de picking, recepción y expedición"
                options={OPTS_OPERARIOS}
                value={operarios}
                onChange={setOperarios}
              />

              <Selector
                label="Movimientos diarios"
                sublabel="Entradas + salidas combinadas"
                options={OPTS_MOVIMIENTOS}
                value={movimientosDia}
                onChange={setMovimientosDia}
              />

              <Selector
                label="Costo mensual por operario"
                sublabel="Salario + cargas sociales + indemnización estimada"
                options={OPTS_COSTO}
                value={costoPorOperario}
                onChange={setCostoPorOperario}
              />

              <Selector
                label="Inversión estimada en ASRS"
                sublabel="Equipo + estanterías + WCS + integración"
                options={OPTS_INVERSION}
                value={inversionEstimada}
                onChange={setInversionEstimada}
              />

              <button
                onClick={() => setShowFormula(!showFormula)}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-cyan-600 transition-colors"
              >
                <ChevronDown size={13} className={`transition-transform ${showFormula ? 'rotate-180' : ''}`} />
                ¿Cómo calculamos esto?
              </button>
              {showFormula && (
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-xs text-gray-600 space-y-1.5">
                  <p><span className="text-cyan-600 font-mono">Ahorro laboral</span> = Operarios × 45% × Costo mensual × 12</p>
                  <p><span className="text-cyan-600 font-mono">Ahorro errores</span> = Movimientos/año × 1,5% × USD 45 × 85%</p>
                  <p><span className="text-cyan-600 font-mono">Mantenimiento</span> = Inversión × 2,5% anual</p>
                  <p><span className="text-cyan-600 font-mono">ROI</span> = (Ahorro neto / Inversión) × 100</p>
                  <p className="text-gray-400 pt-1">Estimación orientativa ±30%. El análisis real puede variar según perfil de operación.</p>
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
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6 text-center">
                <p className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest mb-3">Ahorro neto anual estimado</p>
                <p className="text-5xl font-black text-gray-900 mb-1">{fmt(result.ahorroNeto)}</p>
                <p className="text-xs text-gray-500">después de costos de mantenimiento</p>
              </div>

              {/* Payback */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Período de recupero</p>
                {result.payback ? (
                  <p className="text-3xl font-black text-gray-900">
                    {result.payback < 1
                      ? `${Math.round(result.payback * 12)} meses`
                      : `${result.payback.toFixed(1)} años`}
                  </p>
                ) : (
                  <p className="text-base font-bold text-gray-400">Ajustá los parámetros</p>
                )}
              </div>

              {/* ROI */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">ROI anual</p>
                <p className="text-3xl font-black text-cyan-600">{result.roi.toFixed(0)}%</p>
              </div>

              {/* Breakdown */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-3">
                <p className="text-xs font-black text-gray-900 uppercase tracking-widest">Desglose del ahorro</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Reducción de personal (45%)</span>
                  <span className="text-gray-900 font-semibold">{fmt(result.ahorroLaboral)}/año</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Reducción de errores (85%)</span>
                  <span className="text-gray-900 font-semibold">{fmt(result.ahorroErrores)}/año</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between text-sm">
                  <span className="text-gray-500">Mantenimiento anual</span>
                  <span className="text-red-400 font-semibold">−{fmt(inversionEstimada * ASSUMPTIONS.mantenimientoPct)}/año</span>
                </div>
              </div>

              {/* RIMI */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-[10px] font-mono text-amber-700 uppercase tracking-widest mb-2">Beneficio fiscal RIMI 2025</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Con el RIMI podés amortizar el 100% en el primer año fiscal, reduciendo el costo neto entre{' '}
                  <span className="font-semibold text-gray-900">
                    USD {Math.round(inversionEstimada * 0.25 / 1000)}K y USD {Math.round(inversionEstimada * 0.35 / 1000)}K
                  </span>.
                </p>
              </div>

              <button
                onClick={handleCTA}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-4 rounded-xl transition-colors"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Consultar por WhatsApp con mis datos
              </button>
              <p className="text-xs text-gray-400 text-center">
                Estimación orientativa ±30%. STOKA realiza el análisis real sin costo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 pb-20">
          <h2 className="text-xl font-black text-gray-900 mb-6">Preguntas frecuentes sobre el ROI de la automatización</h2>
          <div className="space-y-3">
            {[
              { q: '¿En cuánto tiempo se amortiza un sistema ASRS en Argentina?', a: 'El período de recupero típico en Argentina es de 18 a 36 meses, dependiendo del costo laboral actual, el número de turnos y el volumen de movimientos. Con el Decreto 513/2025 y el RIMI (amortización acelerada 100% en el primer año), el ahorro fiscal puede reducir el costo neto del proyecto entre un 25% y un 35%.' },
              { q: '¿Qué ahorros concretos genera la automatización de un almacén?', a: 'Los principales ahorros son: reducción de personal operativo (40-60%), eliminación de errores de picking (0,1% vs 0,5-2% en manual), reducción de horas extra y ausentismo, ahorro energético en cámaras de frío (30-40%), y recupero de espacio para más capacidad sin nuevas instalaciones.' },
              { q: '¿Cómo se calcula el ROI de automatizar un almacén?', a: 'ROI básico = (Ahorro anual – Costo de mantenimiento anual) / Inversión total × 100. El ahorro anual incluye reducción de nómina, reducción de errores, ahorro energético y aumento de productividad. STOKA ofrece un análisis de ROI personalizado sin costo en la primera consulta técnica.' },
            ].map((f, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                  <ChevronDown size={16} className="text-cyan-500 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

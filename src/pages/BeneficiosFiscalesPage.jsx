import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { Shield, Percent, Building2, Factory, CheckCircle, ArrowRight, FileText, TrendingDown, Landmark } from 'lucide-react';

const HERRAMIENTAS = [
  {
    num: '01',
    icon: Factory,
    tag: 'RIMI — Ley 27.802',
    subtitle: 'Régimen de Incentivo a la Manufactura e Industria',
    title: 'Amortización Acelerada y Devolución Anticipada de IVA',
    monto: 'Desde USD 150.000',
    perfil: 'PyMEs y medianas empresas',
    description: 'El RIMI es el principal instrumento de incentivos fiscales para empresas que invierten en automatización y no alcanzan el umbral del RIGI. Permite amortizar en 2 años (en lugar de la vida útil del bien) el valor del bien de capital e incluye un mecanismo de devolución anticipada del IVA pagado en la importación o adquisición del equipo — mejorando radicalmente el flujo de caja del año de la inversión.',
    items: [
      'Amortización acelerada en 2 años (en lugar de la vida útil completa del bien)',
      'Devolución anticipada del IVA en compras e importaciones de maquinaria',
      'Aplicable desde USD 150.000 de inversión en bienes de capital',
      'Aplicable a PyMEs y empresas medianas bajo Ley 27.802',
      'Compatible con Decreto 513/2025 (arancel 0%) en la misma operación',
      'Incentivos específicos para industria 4.0 y automatización de procesos',
      'Gestión vía AFIP con acompañamiento contable estándar',
    ],
    dark: false,
  },
  {
    num: '02',
    icon: Shield,
    tag: 'RIGI — Ley 27.742',
    subtitle: 'Régimen de Incentivo para Grandes Inversiones',
    monto: 'Inversiones ≥ USD 200 M',
    perfil: 'Grandes empresas y proyectos industriales',
    title: 'Estabilidad Fiscal por 30 Años',
    description: 'El RIGI ofrece una de las garantías de estabilidad normativa más largas del mundo para grandes proyectos industriales. Las empresas que adhieren quedan protegidas de cambios impositivos por tres décadas — un horizonte de previsibilidad que transforma la ecuación del TCO a largo plazo para cualquier proyecto de automatización de almacenes a gran escala.',
    items: [
      'Estabilidad fiscal, cambiaria y regulatoria por 30 años desde la adhesión',
      'Tasa de Impuesto a las Ganancias reducida: 25% (vs. 35% general)',
      'Amortización acelerada: 100% de bienes de capital en el primer ejercicio',
      'Deducción inmediata del IVA de las importaciones habilitadas',
      'Libre disponibilidad de divisas a partir del tercer año',
      'Exención del Impuesto a los Débitos y Créditos Bancarios',
    ],
    dark: true,
  },
  {
    num: '03',
    icon: Percent,
    tag: 'Decreto 513/2025',
    subtitle: 'Decreto del Ejecutivo Nacional — vigente 2025/2026',
    monto: '12–18% sobre valor CIF',
    perfil: 'Toda empresa importadora de sistemas ASRS',
    title: 'Arancel 0% para Equipos de Automatización',
    description: 'El Decreto 513/2025 eliminó los aranceles de importación para robots industriales, sistemas ASRS y equipamiento de automatización logística. Para una empresa que importa un sistema por USD 800.000, el ahorro directo es de entre USD 96.000 y USD 144.000 en el desembolso inicial, sin ningún trámite adicional por parte de la empresa compradora.',
    items: [
      'Arancel 0% para posiciones arancelarias de robots industriales y ASRS',
      'Aplicable a transelevadores, robots lanzadera, AMR y VLM',
      'Transportadores industriales, sorters y sistemas de conveyors incluidos',
      'Software WMS/WCS y hardware de control también beneficiado',
      'Sin gestión adicional: aplica automáticamente al importar',
      'Vigencia sujeta a revisión anual por el Ejecutivo Nacional',
    ],
    dark: false,
  },
  {
    num: '04',
    icon: TrendingDown,
    tag: 'IVA 10.5%',
    subtitle: 'Ley 23.966 art. 28 — Alícuota diferencial bienes de capital',
    monto: '10,5 pp de ahorro vs. alícuota general',
    perfil: 'Toda empresa inscripta en IVA',
    title: 'Tasa Reducida de IVA en Bienes de Capital',
    description: 'La Ley de IVA argentina establece una alícuota diferencial del 10,5% (en lugar del 21% general) para determinados bienes de capital, incluyendo muchas categorías de maquinaria y equipamiento industrial. En la práctica, esto reduce a la mitad el impuesto al valor agregado que la empresa paga al adquirir equipos de automatización de almacenes que califiquen bajo esta categoría.',
    items: [
      'Alícuota de IVA 10,5% en lugar del 21% general para bienes de capital clasificados',
      'Aplica a la adquisición local e importación definitiva de ciertos equipos industriales',
      'El crédito fiscal de IVA se acumula a menor ritmo, reduciendo el capital inmovilizado',
      'Compatible con devolución anticipada de IVA del RIMI para maximizar el beneficio',
      'Verificación de posición arancelaria requerida para confirmar aplicabilidad',
      'Aplica a la mayoría de los equipos DELIE bajo las categorías ASRS y robótica industrial',
    ],
    dark: true,
  },
  {
    num: '05',
    icon: Landmark,
    tag: 'Leasing — Ley 25.248',
    subtitle: 'Leasing financiero de bienes de capital',
    monto: 'Hasta 100% del valor del equipo',
    perfil: 'Empresas de cualquier escala',
    title: 'Leasing de Bienes de Capital: Cuotas Deducibles',
    description: 'El leasing financiero de bienes de capital permite que la empresa tome el equipo en uso pagando cuotas periódicas, con opción de compra al final del contrato. A diferencia de la compra directa, las cuotas del leasing son deducibles del Impuesto a las Ganancias como gasto del ejercicio — lo que puede ser más conveniente fiscalmente que la amortización para ciertos perfiles impositivos.',
    items: [
      'Cuotas del leasing 100% deducibles de Impuesto a las Ganancias como gasto corriente',
      'No requiere desembolso de capital propio en el momento de la inversión',
      'Opción de compra al final del contrato a valor residual acordado',
      'Plazos habituales de 3 a 7 años para equipos industriales',
      'Compatible con amortización acelerada del RIMI tras ejercer la opción de compra',
      'Disponible en bancos y compañías financieras habilitadas por BCRA',
      'Permite renovar el equipo al vencimiento del contrato (capacidad de actualización)',
    ],
    dark: false,
  },
  {
    num: '06',
    icon: Building2,
    tag: 'Línea BICE',
    subtitle: 'Banco de Inversión y Comercio Exterior',
    monto: 'Hasta 80% del proyecto',
    perfil: 'PyMEs y grandes empresas',
    title: 'Financiamiento Preferencial para Automatización Industrial',
    description: 'El BICE ofrece una línea específica para proyectos de modernización y automatización de procesos productivos y logísticos. Con plazos de hasta 10 años y período de gracia de 2 años, es el instrumento de financiamiento más conveniente del mercado argentino para proyectos de inversión en bienes de capital productivos.',
    items: [
      'Financiamiento de hasta el 80% del valor total del proyecto',
      'Plazos de hasta 10 años para proyectos de automatización industrial',
      'Período de gracia de hasta 2 años sobre el capital',
      'Tasa de interés preferencial según perfil crediticio del proyecto',
      'Aplicable a PyMEs y grandes empresas vía banco comercial adherido',
      'STOKA acompaña la elaboración del proyecto técnico requerido por el banco',
      'Compatible con arancel 0% del Decreto 513/2025 y RIMI en la misma operación',
    ],
    dark: true,
  },
];

const FAQ = [
  {
    q: '¿Un sistema ASRS importado califica como bien de capital para el RIMI?',
    a: 'Sí. El Decreto 242/2026 incluye bienes muebles nuevos importados clasificados como Bienes de Capital (BK). Un sistema ASRS (transelevadores, robots, conveyors) encaja en esta definición. El software WMS/WCS podría clasificar como Bien de Informática y Telecomunicaciones (BIT).',
  },
  {
    q: '¿Cuánto puedo ahorrar realmente?',
    a: 'Depende del monto, la estructura fiscal de tu empresa y los regímenes aplicables. Como referencia: en un proyecto de USD 2M, la amortización acelerada del RIMI puede representar un ahorro financiero estimado de USD 280.000 en los primeros 2 años, y la tasa reducida de IVA un ahorro directo de USD 210.000 si aplica el 10,5%.',
  },
  {
    q: '¿STOKA hace el trámite fiscal?',
    a: 'No. STOKA acompaña con la documentación técnica del equipo (fichas técnicas, posiciones NCM, clasificación como bien de capital). La adhesión al RIMI/RIGI y los trámites fiscales los gestiona tu contador o asesor impositivo.',
  },
  {
    q: '¿Puedo combinar RIMI + Leasing?',
    a: 'Es una zona gris jurídica. El RIMI exige que el bien esté en el patrimonio del beneficiario 2 años; en leasing la propiedad es del banco. Recomendamos consultarlo con tu asesor fiscal para definir la estructura óptima.',
  },
  {
    q: '¿Qué pasa si mi empresa no es PyME?',
    a: 'Si no sos PyME y tu proyecto no llega a USD 200M (RIGI), igual podés aprovechar: aranceles reducidos, IVA 10,5% (si la NCM califica), leasing y beneficios provinciales según tu ubicación.',
  },
  {
    q: '¿Los beneficios del RIGI aplican al ASRS dentro de un proyecto minero o petrolero?',
    a: 'Sí. Si tu empresa tiene un proyecto adherido al RIGI, los bienes de capital del proyecto (incluido un ASRS) gozan de exención total de derechos de importación, IVA con certificados de crédito fiscal y amortización acelerada.',
  },
];

const MONTOS = ['USD 150.000 – 600.000', 'USD 600.000 – 2.000.000', 'USD 2.000.000 – 9.000.000', 'Más de USD 9.000.000', 'Aún no lo tengo definido'];
const PROVINCIAS = ['Buenos Aires (Provincia)', 'CABA', 'Córdoba', 'Santa Fe', 'Mendoza', 'San Juan', 'Neuquén', 'Salta', 'Tucumán', 'Chubut', 'Santa Cruz', 'Otra'];

const EvaluacionForm = ({ navigate }) => {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', monto: '', provincia: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola STOKA! Quiero evaluar beneficios fiscales.\n\nNombre: ${form.nombre}\nEmpresa: ${form.empresa}\nEmail: ${form.email}\nTeléfono: ${form.telefono}\nMonto estimado: ${form.monto}\nProvincia: ${form.provincia}`;
    window.open(`https://wa.me/5491140000000?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  if (sent) return (
    <div className="p-8 rounded-2xl bg-cyan-50 border border-cyan-200 text-center">
      <CheckCircle size={32} className="text-cyan-500 mx-auto mb-3" />
      <p className="font-black text-gray-900 text-lg mb-1">¡Gracias!</p>
      <p className="text-gray-500 text-sm">Te redirigimos a WhatsApp. Si no se abrió, escribinos a <strong>consultas@stokagroup.com</strong></p>
      <button onClick={() => navigate('/catalogo')} className="mt-5 text-xs text-cyan-600 font-bold underline underline-offset-2">Ver catálogo de sistemas →</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
      {[
        { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre completo', required: true },
        { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Razón social o nombre comercial', required: true },
        { name: 'email', label: 'Email corporativo', type: 'email', placeholder: 'nombre@empresa.com', required: true },
        { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+54 11 xxxx-xxxx', required: false },
      ].map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-700">{field.label}{field.required && <span className="text-cyan-500 ml-0.5">*</span>}</label>
          <input name={field.name} type={field.type} placeholder={field.placeholder} required={field.required}
            value={form[field.name]} onChange={handleChange}
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors" />
        </div>
      ))}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-gray-700">Monto estimado de inversión<span className="text-cyan-500 ml-0.5">*</span></label>
        <select name="monto" required value={form.monto} onChange={handleChange}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-cyan-400 transition-colors bg-white">
          <option value="">Seleccioná un rango</option>
          {MONTOS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-gray-700">Provincia donde opera<span className="text-cyan-500 ml-0.5">*</span></label>
        <select name="provincia" required value={form.provincia} onChange={handleChange}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-cyan-400 transition-colors bg-white">
          <option value="">Seleccioná una provincia</option>
          {PROVINCIAS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <button type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
          Solicitar evaluación gratuita <ArrowRight size={14} />
        </button>
        <p className="text-center text-gray-400 text-[11px] mt-2">Sin compromiso · Respondemos en 24 hs hábiles</p>
      </div>
    </form>
  );
};

export const BeneficiosFiscalesPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Beneficios Fiscales", "item": "https://www.stokagroup.com/beneficios-fiscales" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <div className="min-h-screen text-gray-900">
      <Helmet>
        <title>Beneficios Fiscales para Automatizar tu Almacén | STOKA</title>
        <meta name="description" content="RIMI, RIGI, aranceles reducidos, leasing y más: hasta 6 herramientas fiscales para reducir el costo de tu sistema ASRS en Argentina. Evaluación sin cargo." />
        <meta property="og:title" content="Beneficios Fiscales para Automatizar tu Almacén en Argentina | STOKA" />
        <meta property="og:description" content="RIMI, RIGI, aranceles reducidos, leasing y más. Hasta 6 herramientas fiscales que reducen el costo real de tu sistema ASRS." />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.stokagroup.com/beneficios-fiscales" />
        <link rel="canonical" href="https://www.stokagroup.com/beneficios-fiscales" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      {/* ── HERO ── */}
      <div className="relative mt-20 min-h-[420px] flex items-end overflow-hidden">
        <img
          src="/bandera4-cropped.jpg"
          alt="Beneficios fiscales Argentina para automatización de almacenes"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20 pt-32">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-slate-400">Beneficios Fiscales</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em]">Marco normativo · Argentina</p>
              <span className="text-[10px] font-black uppercase tracking-widest bg-cyan-400 text-slate-950 px-3 py-1 rounded-full">
                Actualizado junio 2026
              </span>
            </div>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[1.05] mb-5 max-w-4xl">
              Beneficios Fiscales para<br />
              <span className="text-cyan-400">Automatizar tu Almacén</span><br />
              en Argentina
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              Argentina tiene al menos <strong className="text-white">6 herramientas fiscales</strong> que pueden reducir entre un 15% y un 40% el costo real de tu <Link to="/catalogo/asrs" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-2">sistema ASRS</Link>. No es solo el RIGI — hay opciones desde USD 150.000 de inversión.
            </p>
            <div className="flex flex-wrap gap-2">
              {['RIMI — Ley 27.802', 'RIGI — Ley 27.742', 'Arancel 0%', 'IVA 10,5%', 'Leasing', 'Línea BICE', 'Economía del Conocimiento', 'Regímenes provinciales'].map((tag) => (
                <span key={tag} className="text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── RESUMEN — tabla mapa de beneficios ── */}
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-2">Referencia rápida · junio 2026</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Mapa de beneficios disponibles</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wide">Herramienta</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wide">Monto mínimo</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wide">Para quién</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wide text-cyan-400">Beneficio principal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { herramienta: 'RIMI',                   monto: 'Desde USD 150.000',  quien: 'PyMEs',                    beneficio: 'Amortización acelerada en 2 años + devolución IVA',   highlight: true },
                  { herramienta: 'RIGI',                   monto: 'USD 200.000.000',    quien: 'Grandes inversiones',      beneficio: 'Ganancias al 25% + exención total aranceles importación', highlight: false },
                  { herramienta: 'Aranceles reducidos',    monto: 'Sin mínimo',         quien: 'Cualquier importador',     beneficio: 'Arancel 0%–14% para bienes de capital',               highlight: true },
                  { herramienta: 'IVA reducido',           monto: 'Sin mínimo',         quien: 'Compradores de BK',        beneficio: 'IVA al 10,5% en vez del 21%',                         highlight: false },
                  { herramienta: 'Leasing',                monto: 'Sin mínimo',         quien: 'Cualquier empresa',        beneficio: 'IVA diferido + cánones deducibles',                   highlight: true },
                  { herramienta: 'Economía del Conocimiento', monto: 'Sin mínimo',      quien: 'Compradores de tecnología',beneficio: 'Crédito fiscal FONPEC',                               highlight: false },
                  { herramienta: 'Regímenes provinciales', monto: 'Variable',           quien: 'Según ubicación',          beneficio: 'Exenciones IIBB, Inmobiliario, Sellos',               highlight: true },
                ].map((row, i) => (
                  <motion.tr key={i}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className={row.highlight ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 font-black text-gray-900 border-r border-gray-100">{row.herramienta}</td>
                    <td className="px-5 py-4 text-gray-600 border-r border-gray-100 whitespace-nowrap">{row.monto}</td>
                    <td className="px-5 py-4 text-gray-600 border-r border-gray-100">{row.quien}</td>
                    <td className="px-5 py-4 text-cyan-700 font-semibold">{row.beneficio}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-3">* Esta tabla es orientativa. La aplicabilidad de cada herramienta depende del perfil impositivo de la empresa y la estructura del proyecto.</p>
        </div>
      </section>

      {/* ── SECCIÓN 3: RIMI EN DETALLE ── */}
      <section id="rimi" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                01 — RIMI · Ley 27.802
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              RIMI — Amortizá tu sistema ASRS en 2 años y recuperá el IVA
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-10 max-w-3xl">
              El <strong className="text-gray-800">Régimen de Incentivo a la Manufactura e Industria (RIMI)</strong>, creado por la Ley 27.802 Título XXIII y reglamentado por el Decreto 242/2026 y la RG Conjunta ARCA 5849/2026, permite a las PyMEs argentinas amortizar bienes de capital en <strong className="text-gray-800">2 años</strong> (en lugar de su vida útil contable) y recuperar el IVA abonado en forma anticipada. Aplica a empresas con <strong className="text-gray-800">certificado MiPyME vigente</strong>.
            </p>

            {/* Montos por categoría */}
            <div className="mb-12">
              <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-4">Montos máximos por categoría MiPyME</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-5 py-3 text-left font-bold">Categoría</th>
                      <th className="px-5 py-3 text-left font-bold">Inversión máxima acumulable</th>
                      <th className="px-5 py-3 text-left font-bold">Equivalente aprox.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { cat: 'Micro', monto: 'USD 150.000', equiv: '~1 miniload básico o VLM industrial' },
                      { cat: 'Pequeña', monto: 'USD 600.000', equiv: '~1 sistema shuttle compacto' },
                      { cat: 'Mediana Tramo 1', monto: 'USD 3.500.000', equiv: '~1 ASRS unit-load de 2 pasillos' },
                      { cat: 'Mediana Tramo 2', monto: 'USD 9.000.000', equiv: '~proyecto ASRS completo con WCS' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                        <td className="px-5 py-3.5 font-semibold text-gray-800 border-r border-gray-100">{row.cat}</td>
                        <td className="px-5 py-3.5 text-cyan-700 font-bold border-r border-gray-100">{row.monto}</td>
                        <td className="px-5 py-3.5 text-gray-500 text-xs">{row.equiv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-xs mt-2">Las inversiones son acumulables dentro del período de 2 años fiscales consecutivos.</p>
            </div>

            {/* H3 — ¿Califica? */}
            <div className="mb-12 p-6 rounded-2xl bg-cyan-50 border border-cyan-100">
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-3">¿Un sistema ASRS importado califica?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sí. Los sistemas ASRS —transelevadores, shuttles, miniloads, carruseles y robots de paletizado— encuadran como <strong className="text-gray-800">Bienes de Capital (BK)</strong> o <strong className="text-gray-800">Bienes de Infraestructura Tecnológica (BIT)</strong> según el nomenclador RIMI. El <Link to="/catalogo/software" className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2">software de gestión de almacén (WMS) y el sistema de control de almacén (WCS)</Link> califica como <strong className="text-gray-800">BIT</strong> cuando se adquiere como parte integral del proyecto.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                {[
                  { label: 'Transelevadores / Shuttles / Miniloads', tipo: 'BK' },
                  { label: 'Robots de paletizado y picking', tipo: 'BK' },
                  { label: 'WMS / WCS integrado al proyecto', tipo: 'BIT' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-cyan-100">
                    <CheckCircle size={14} className="text-cyan-500 shrink-0" />
                    <span className="text-gray-700">{item.label}</span>
                    <span className="ml-auto text-[10px] font-black text-cyan-600 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full">{item.tipo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* H3 — Beneficio 1: Amortización */}
            <div className="mb-12">
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4">Beneficio 1 — Amortización acelerada en Ganancias</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                En lugar de amortizar el bien durante su vida útil contable (típicamente 5 a 10 años), el RIMI permite deducir el <strong className="text-gray-800">100% del valor de adquisición en 2 cuotas anuales iguales</strong> del Impuesto a las Ganancias. El ahorro efectivo depende de la alícuota aplicable a la empresa.
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-5 py-3 text-left font-bold">Escenario</th>
                      <th className="px-5 py-3 text-left font-bold">Plazo amortización</th>
                      <th className="px-5 py-3 text-left font-bold">Deducción año 1</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-gray-50/50">
                      <td className="px-5 py-3.5 text-gray-600 border-r border-gray-100">Sin RIMI (régimen general)</td>
                      <td className="px-5 py-3.5 text-gray-600 border-r border-gray-100">5–10 años</td>
                      <td className="px-5 py-3.5 text-gray-500">10–20% del valor</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-5 py-3.5 font-semibold text-gray-800 border-r border-gray-100">Con RIMI</td>
                      <td className="px-5 py-3.5 font-semibold text-cyan-700 border-r border-gray-100">2 cuotas anuales</td>
                      <td className="px-5 py-3.5 font-bold text-cyan-700">50% del valor</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-2">Ejemplo numérico</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Inversión en sistema ASRS: <strong className="text-white">USD 2.000.000</strong>.<br />
                  <span className="text-cyan-400 font-semibold">Con RIMI:</span> se deducen USD 1.000.000 en el primer año fiscal (alícuota 35% → ahorro ~USD 350.000 en Ganancias).<br />
                  <span className="text-gray-500">Sin RIMI:</span> deducción de USD 200.000/año → ahorro ~USD 70.000 en Ganancias en el mismo período.
                </p>
              </div>
            </div>

            {/* H3 — Beneficio 2: IVA */}
            <div className="mb-12">
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4">Beneficio 2 — Devolución anticipada del IVA</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                El IVA abonado en la importación o compra local de los bienes de capital puede recuperarse en un plazo de <strong className="text-gray-800">9 meses</strong>: ARCA/AFIP tiene 3 meses para procesar la solicitud y 6 meses adicionales para efectuar la devolución. El crédito puede aplicarse contra otros impuestos nacionales, cobrarse en efectivo o transferirse a terceros.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-2">Ejemplo numérico</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Importación de un sistema ASRS por <strong className="text-white">USD 2.000.000</strong>.<br />
                  IVA al 21% sobre valor CIF: <strong className="text-cyan-400">≈ USD 420.000</strong> recuperables en ≤9 meses.<br />
                  Sin RIMI, ese crédito fiscal queda absorbido gradualmente contra débitos futuros, inmovilizando capital de trabajo durante años.
                </p>
              </div>
            </div>

            {/* H3 — Limitaciones */}
            <div className="mb-8 p-6 rounded-2xl bg-amber-50 border border-amber-200">
              <h3 className="text-xl font-black uppercase tracking-tight text-amber-900 mb-4">Limitaciones del RIMI a considerar</h3>
              <div className="space-y-3">
                {[
                  { title: 'Cupo presupuestario', desc: 'El RIMI opera con cupo anual asignado por ARCA. El 50% del cupo está reservado para proyectos aprobados en rondas previas; el 50% restante se asigna por orden de presentación. Recomendamos iniciar el trámite en el primer trimestre del año fiscal.' },
                  { title: 'SGI (Sistema de Gestión de Incentivos)', desc: 'La plataforma de carga de expedientes puede tener períodos de cierre o mantenimiento. Verificar la ventana de apertura actual en la web de ARCA antes de iniciar la documentación.' },
                  { title: 'Antigüedad patrimonial', desc: 'La empresa debe acreditar al menos 2 años de actividad con patrimonio neto positivo al momento de la presentación. Empresas de reciente constitución pueden no calificar.' },
                ].map((lim, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-amber-500 font-black text-lg leading-none mt-0.5">!</span>
                    <div>
                      <p className="font-bold text-amber-900 text-sm">{lim.title}</p>
                      <p className="text-amber-800/80 text-sm leading-relaxed">{lim.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal citations */}
            <p className="text-gray-400 text-xs border-t border-gray-100 pt-4">
              Normativa: Ley 27.802 Título XXIII · Decreto 242/2026 · RG Conjunta ARCA 5849/2026. La aplicabilidad depende del perfil impositivo y estructura del proyecto. Consulte con su contador.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 4: RIGI EN DETALLE ── */}
      <section id="rigi" className="py-20 px-6 bg-slate-900 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-400/10 border-cyan-400/20 text-cyan-400">
                02 — RIGI · Ley 27.742
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-white mb-4">
              RIGI — Si tu proyecto supera los USD 200 millones
            </h2>
            <p className="text-base leading-relaxed text-gray-400 mb-4 max-w-3xl">
              El <strong className="text-white">Régimen de Incentivo para Grandes Inversiones (RIGI)</strong>, creado por la Ley 27.742 y reglamentado por el Decreto 749/2024, está diseñado para proyectos estratégicos de <strong className="text-white">USD 200 M o más</strong> en minería, petróleo y gas, energía, tecnología e infraestructura. Un sistema ASRS típico (USD 500K–5M) no alcanza ese umbral por sí solo — pero si tu empresa ya tiene <strong className="text-cyan-400">un proyecto adherido al RIGI</strong>, el componente de automatización de almacenes puede ingresar como parte de la inversión promovida aprobada.
            </p>
            <p className="text-sm text-gray-500 mb-10 max-w-3xl">
              Al momento, se presentaron <strong className="text-gray-300">27 proyectos por más de USD 25.000 M</strong>. El régimen fue prorrogado hasta <strong className="text-gray-300">julio 2027</strong>. Provincias adheridas incluyen: Mendoza, San Juan, Neuquén, Salta, Río Negro, Chubut, Santa Cruz, CABA, Córdoba y Buenos Aires, entre otras.
            </p>

            {/* Beneficios table */}
            <div className="mb-12">
              <h3 className="text-lg font-black uppercase tracking-tight text-white mb-4">Beneficios para proyectos adheridos</h3>
              <div className="overflow-x-auto rounded-xl border border-white/10 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/5 text-gray-300">
                      <th className="px-5 py-3 text-left font-bold border-r border-white/10">Beneficio</th>
                      <th className="px-5 py-3 text-left font-bold border-r border-white/10">Con RIGI</th>
                      <th className="px-5 py-3 text-left font-bold">Régimen general</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { beneficio: 'Impuesto a las Ganancias', rigi: '25%', general: '35%' },
                      { beneficio: 'Derechos de importación', rigi: 'Exención total', general: '0–18% (Decreto 513 ≠ exención)' },
                      { beneficio: 'IVA en importaciones', rigi: 'Certificados de Crédito Fiscal', general: 'Crédito fiscal diferido' },
                      { beneficio: 'Estabilidad normativa', rigi: '30 años desde adhesión', general: 'Sin garantía' },
                      { beneficio: 'Dividendos distribuidos', rigi: '7% (3,5% tras 7 años)', general: '13%' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white/2' : 'bg-transparent'}>
                        <td className="px-5 py-3.5 text-gray-300 font-semibold border-r border-white/5">{row.beneficio}</td>
                        <td className="px-5 py-3.5 text-cyan-400 font-bold border-r border-white/5">{row.rigi}</td>
                        <td className="px-5 py-3.5 text-gray-500 text-xs">{row.general}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mensaje clave CTA */}
            <div className="p-6 rounded-2xl bg-white/5 border border-cyan-400/20">
              <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-2">Mensaje clave para grandes industrias</p>
              <p className="text-gray-200 text-base leading-relaxed">
                Si tu empresa tiene un proyecto adherido al RIGI, tu <Link to="/catalogo/asrs" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-2">sistema ASRS</Link> entra dentro del paquete de inversión promovida. <Link to="/como-trabajamos" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-2"><strong className="text-white">Te ayudamos a estructurar la documentación técnica del componente de automatización</strong></Link> para que quede correctamente incluido en el expediente aprobado.
              </p>
            </div>

            {/* Legal citations */}
            <p className="text-gray-600 text-xs border-t border-white/5 pt-4 mt-8">
              Normativa: Ley 27.742 · Decreto 749/2024. La adhesión al RIGI es voluntaria e implica compromisos de inversión mínima. Verificar elegibilidad con asesor legal especializado.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 5: ARANCELES DE IMPORTACIÓN ── */}
      <section id="aranceles" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                03 — Decreto 513/2025
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              Aranceles de importación reducidos para bienes de capital
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-8 max-w-3xl">
              El Decreto 513/2025 estableció la reducción arancelaria para <strong className="text-gray-800">27 categorías de bienes de capital</strong>, entre las que se incluyen los sistemas de automatización logística e industrial. El arancel general para maquinaria nueva importada se ubica entre el <strong className="text-gray-800">0% y el 14%</strong>, dependiendo de la posición NCM del componente.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-100">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-3">Punto clave para sistemas ASRS</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-800">No existen fabricantes argentinos de transelevadores ni de sistemas ASRS.</strong> Eso habilita el argumento de "bien de capital no producido localmente" para clasificar el equipo en la posición NCM con arancel 0%, siempre que la clasificación sea validada por el despachante de aduana antes de la importación.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-3">Referencia de aranceles</p>
                <div className="space-y-2 text-sm">
                  {[
                    { desc: 'Sistemas de automatización (Decreto 513)', arancel: '12,6% reducido' },
                    { desc: 'Bienes de capital no producidos localmente', arancel: '0% (NCM específico)' },
                    { desc: 'Maquinaria general importada', arancel: '0%–14%' },
                    { desc: 'Partes y componentes ASRS', arancel: 'Variable por NCM' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-gray-400 text-xs">{row.desc}</span>
                      <span className="text-cyan-400 font-bold text-xs whitespace-nowrap ml-4">{row.arancel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3">
              <span className="text-amber-500 font-black text-lg leading-none mt-0.5 shrink-0">!</span>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>El arancel exacto depende de la posición NCM de cada componente.</strong> Te ayudamos a verificarlo con tu despachante de aduana antes de la importación para maximizar el beneficio.
              </p>
            </div>

            <p className="text-gray-400 text-xs border-t border-gray-100 pt-4 mt-8">
              Normativa: Decreto 513/2025 (Poder Ejecutivo Nacional). Vigencia sujeta a revisión anual. Verificar posición NCM con despachante habilitado.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 6: IVA 10,5% ── */}
      <section id="iva-reducido" className="py-20 px-6 bg-slate-900 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-400/10 border-cyan-400/20 text-cyan-400">
                04 — IVA 10,5% · Ley 23.966
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-white mb-4">
              IVA reducido al 10,5% para bienes de capital
            </h2>
            <p className="text-base leading-relaxed text-gray-400 mb-8 max-w-3xl">
              La Ley de IVA (art. 28, Ley 23.966) establece una <strong className="text-white">alícuota diferencial del 10,5%</strong> —en lugar del 21% general— para bienes de capital incluidos en el listado específico del Poder Ejecutivo. La aplicabilidad depende de la <strong className="text-white">posición arancelaria NCM</strong> del equipo importado o adquirido localmente.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-4">Impacto en un proyecto de USD 2.000.000</p>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-gray-500 text-xs mb-1">IVA general (21%)</p>
                  <p className="text-2xl font-black text-gray-400">USD 420.000</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                  <p className="text-cyan-400 text-xs mb-1 font-bold">IVA reducido (10,5%)</p>
                  <p className="text-2xl font-black text-cyan-400">USD 210.000</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-green-400/20">
                  <p className="text-green-400 text-xs mb-1 font-bold">Ahorro directo</p>
                  <p className="text-2xl font-black text-green-400">USD 210.000</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-500/20 flex gap-3">
              <span className="text-amber-400 font-black text-lg leading-none mt-0.5 shrink-0">!</span>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                <strong className="text-amber-200">No aplica si se estructura la operación vía leasing.</strong> Cuando la adquisición se canaliza a través de un contrato de leasing, el IVA sobre los cánones se liquida a la alícuota general del 21%.
              </p>
            </div>

            <p className="text-gray-600 text-xs border-t border-white/5 pt-4 mt-8">
              Normativa: Ley 23.966 art. 28 · Anexo de bienes de capital con alícuota reducida. La aplicabilidad depende de la clasificación NCM del equipo.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 7: LEASING ── */}
      <section id="leasing" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                05 — Leasing · Ley 25.248
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              Leasing de bienes de capital: financiá sin inmovilizar capital
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-10 max-w-3xl">
              El leasing financiero (Ley 25.248) permite adquirir un <Link to="/catalogo/asrs" className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2">sistema ASRS</Link> <strong className="text-gray-800">financiando el 100% del valor del bien, incluido el IVA</strong>, a través de cánones periódicos. Es la alternativa para empresas que prefieren preservar liquidez y no comprometer líneas de crédito convencionales.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { title: 'Financiación 100%', desc: 'Cubre el valor total del bien más IVA. Sin adelanto ni pago inicial obligatorio.' },
                { title: 'Cánones deducibles', desc: 'Cada canon se deduce como gasto en Ganancias, generando ahorro fiscal desde el primer mes.' },
                { title: 'IVA diferido', desc: 'El IVA se fracciona a lo largo de los cánones, evitando el desembolso concentrado al inicio.' },
                { title: 'Sin deuda contable', desc: 'El bien no figura como deuda en el balance hasta el ejercicio de la opción de compra.' },
                { title: 'Flexibilidad tecnológica', desc: 'Posibilidad de devolver el equipo o renovarlo si la tecnología evoluciona antes del vencimiento.' },
                { title: 'Amortización de facto', desc: 'El esquema de cánones replica el efecto de la amortización acelerada en el flujo de caja.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 mb-6">
              <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-3">Entidades financiadoras</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { ent: 'BICE', detalle: 'Tasa fija desde 19,45% anual en USD' },
                  { ent: 'Banco Nación', detalle: 'Líneas PyME con tasas subsidiadas' },
                  { ent: 'BBVA', detalle: 'Leasing para bienes de capital' },
                ].map((e, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                    <CheckCircle size={13} className="text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm">{e.ent}</p>
                      <p className="text-gray-500 text-[11px]">{e.detalle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3">
              <span className="text-amber-500 font-black text-lg leading-none mt-0.5 shrink-0">!</span>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Compatibilidad con RIMI:</strong> el RIMI exige mantener el bien en el patrimonio de la empresa por al menos 2 años desde la inversión. En el leasing, la propiedad jurídica del bien es del banco hasta el ejercicio de la opción de compra. Consultá con tu asesor fiscal la estructura óptima antes de combinar ambos regímenes.
              </p>
            </div>

            <p className="text-gray-400 text-xs border-t border-gray-100 pt-4 mt-8">
              Normativa: Ley 25.248 de Leasing. Las tasas y condiciones son referenciales y sujetas a actualización por cada entidad.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 8: ECONOMÍA DEL CONOCIMIENTO ── */}
      <section id="economia-conocimiento" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                Ley 27.506 — Economía del Conocimiento
              </span>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-amber-50 border-amber-300 text-amber-700">
                En proceso de inscripción
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              Economía del Conocimiento: beneficio fiscal al comprarnos
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-8 max-w-3xl">
              STOKA, como integrador de tecnología de automatización industrial (Industria 4.0), está en proceso de inscripción en el <strong className="text-gray-800">Régimen de Economía del Conocimiento (Ley 27.506)</strong>. Una vez inscripta, las empresas que adquieran soluciones de transformación digital e Industria 4.0 a proveedores certificados pueden acceder al <strong className="text-gray-800">FONPEC</strong>: un crédito fiscal acreditado directamente en ARCA, conforme a la Resolución 8/2026.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-100">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-3">¿Qué es el FONPEC?</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  El Fondo de Promoción de la Economía del Conocimiento (FONPEC) es un crédito fiscal equivalente a un porcentaje del contrato, acreditado en la cuenta ARCA del cliente. Puede aplicarse contra el pago de impuestos nacionales: Ganancias, IVA, contribuciones patronales. Es un beneficio que recibe el <em>comprador</em> por contratar con un proveedor inscrito.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-3">Por qué importa para tu decisión de compra</p>
                <div className="space-y-2">
                  {[
                    'Comprar a un proveedor inscrito en EC genera crédito fiscal extra para tu empresa',
                    'Resolución 8/2026: instrumento para promover la inversión en Industria 4.0',
                    'El mismo proyecto puede combinar FONPEC + RIMI + Decreto 513',
                    'Diferenciador: proveedor EC inscrito vs. no inscrito = costo real diferente',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-xs leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs border-t border-gray-100 pt-4">
              Normativa: Ley 27.506 de Economía del Conocimiento · Resolución FONPEC 8/2026. Estado: STOKA en proceso de inscripción. Consultá la vigencia del beneficio al momento de la operación.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 9: BENEFICIOS PROVINCIALES ── */}
      <section id="beneficios-provinciales" className="py-20 px-6 bg-slate-900 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-400/10 border-cyan-400/20 text-cyan-400">
                Regímenes Provinciales
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-white mb-4">
              Beneficios fiscales por provincia
            </h2>
            <p className="text-base leading-relaxed text-gray-400 mb-10 max-w-3xl">
              Los beneficios provinciales son <strong className="text-white">complementarios a los nacionales</strong> (RIMI, RIGI, aranceles). La combinación óptima depende de la provincia donde opera tu empresa. Te ayudamos a mapear los incentivos disponibles para tu caso.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {[
                {
                  prov: 'Buenos Aires (Provincia)',
                  badge: 'RPIE · Ley 15.510',
                  color: 'border-cyan-400/30',
                  items: [
                    'Proyectos desde USD 5 millones',
                    'USD 5–50M: 30% exención IIBB, Inmobiliario y Sellos por 5 años',
                    'USD 50–200M: 25% de exención por 4 años',
                    '+USD 200M: 20% por 3 años + estabilidad fiscal hasta 30 años',
                    'Beneficios adicionales por innovación tecnológica y sustitución de importaciones',
                  ],
                },
                {
                  prov: 'CABA',
                  badge: 'Leyes 6.949 y 6.950',
                  color: 'border-cyan-400/30',
                  items: [
                    'Adhesión al RIGI nacional (Ley 6.949)',
                    'RIMI local (Ley 6.950): desde USD 100.000 de inversión',
                    'Exención de Sellos y ABL para proyectos promovidos',
                    'Hasta 25% de crédito fiscal en Ingresos Brutos',
                  ],
                },
                {
                  prov: 'Córdoba',
                  badge: 'Leyes 5.319 y 10.792',
                  color: 'border-white/10',
                  items: [
                    'Ley de Promoción Industrial provincial',
                    'Exenciones impositivas para proyectos de inversión en bienes de capital',
                    'Subsidios monetarios para industrias radicadas en zonas promovidas',
                  ],
                },
                {
                  prov: 'Santa Fe',
                  badge: 'Régimen de Promoción Industrial',
                  color: 'border-white/10',
                  items: [
                    'Beneficios para nuevas unidades productivas',
                    'Exenciones por ampliaciones de activo fijo',
                    'Incentivos por incremento de dotación de personal',
                  ],
                },
                {
                  prov: 'Mendoza',
                  badge: 'Adherida al RIGI',
                  color: 'border-white/10',
                  items: [
                    'Adherida al RIGI nacional',
                    'Plan plurianual de reducción de alícuotas de Ingresos Brutos',
                    'Impuesto de Sellos: 1% en 2026, objetivo 0% en 2030',
                  ],
                },
                {
                  prov: 'San Juan',
                  badge: 'Adherida al RIGI · Minería',
                  color: 'border-white/10',
                  items: [
                    'USD 6.278M en proyectos RIGI aprobados solo en minería',
                    'Beneficios fiscales para proveedores del sector minero',
                    'Oportunidad directa: automatización de almacenes en operaciones mineras',
                  ],
                },
                {
                  prov: 'Neuquén',
                  badge: 'Adherida al RIGI · Vaca Muerta',
                  color: 'border-white/10',
                  items: [
                    'Proyectos RIGI aprobados: Vaca Muerta Sur (USD 2.486M), oleoducto, plantas',
                    'Promoción de inversiones en cuenca Vaca Muerta',
                    'Alta demanda de automatización en logística de operaciones upstream',
                  ],
                },
              ].map((prov, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className={`p-5 rounded-2xl bg-white/5 border ${prov.color}`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <p className="font-black text-white text-base">{prov.prov}</p>
                    <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap border border-white/10 px-2 py-0.5 rounded-full">{prov.badge}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {prov.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle size={12} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Link a industria minera */}
            <p className="text-gray-500 text-xs mb-6">
              ¿Operás en minería o petróleo? <Link to="/industrias/mineria-oil-gas" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">Ver beneficios específicos para el sector minero-energético →</Link>
            </p>

            {/* Otras provincias RIGI */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Otras provincias adheridas al RIGI</p>
              <div className="flex flex-wrap gap-2">
                {['Catamarca','Chaco','Chubut','Corrientes','Entre Ríos','Jujuy','Misiones','Río Negro','Salta','San Luis','Santa Cruz','Tucumán'].map((p) => (
                  <span key={p} className="text-xs text-gray-400 border border-white/10 bg-white/5 px-3 py-1 rounded-full">{p}</span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── 1 HERRAMIENTA ADICIONAL EN DETALLE (Línea BICE) ── */}
      {HERRAMIENTAS.map((h, i) => {
        if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4) return null;
        return (
        <section key={i} className={`py-20 px-6 border-b ${h.dark ? 'bg-slate-900 border-white/5' : 'bg-white border-gray-100'}`}>
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

              {/* LEFT */}
              <div className="flex flex-col gap-5">
                <span className={`text-[80px] font-black italic leading-none select-none ${h.dark ? 'text-white/10' : 'text-gray-100'}`}>
                  {h.num}
                </span>
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${h.dark ? 'bg-white/10 border-white/20' : 'bg-cyan-50 border-cyan-200'}`}>
                  <h.icon size={26} className={h.dark ? 'text-cyan-400' : 'text-cyan-500'} />
                </div>
                <div>
                  <span className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full ${h.dark ? 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-600'}`}>
                    {h.tag}
                  </span>
                  <p className={`text-[11px] font-mono mt-2 ${h.dark ? 'text-gray-500' : 'text-gray-400'}`}>{h.subtitle}</p>
                  <div className={`mt-4 space-y-1 ${h.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <p className="text-xs"><span className="font-bold text-cyan-400">Ahorro/monto:</span> {h.monto}</p>
                    <p className="text-xs"><span className={`font-bold ${h.dark ? 'text-gray-300' : 'text-gray-700'}`}>Perfil:</span> {h.perfil}</p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-5 ${h.dark ? 'text-white' : 'text-gray-900'}`}>
                  {h.title}
                </h2>
                <p className={`text-base leading-relaxed mb-8 ${h.dark ? 'text-gray-400' : 'text-gray-500'}`}>{h.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {h.items.map((item, j) => (
                    <motion.div key={j} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.05 }}
                      className="flex items-start gap-2.5">
                      <CheckCircle size={14} className={`mt-0.5 shrink-0 ${h.dark ? 'text-cyan-400' : 'text-cyan-500'}`} />
                      <p className={`text-sm leading-relaxed ${h.dark ? 'text-gray-300' : 'text-gray-600'}`}>{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        );
      })}

      {/* ── SECCIÓN 10: BENEFICIOS PYME GENERALES ── */}
      <section id="beneficios-pyme" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                Beneficios PyME Generales
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              Beneficios adicionales para PyMEs registradas
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-8 max-w-3xl">
              Más allá de los regímenes de inversión, las PyMEs con <strong className="text-gray-800">certificado MiPyME vigente</strong> acceden a una serie de beneficios operativos que mejoran el flujo de caja durante y después de la importación.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'IVA computable a 90 días',
                  desc: 'El crédito fiscal del IVA pagado en la importación puede computarse a los 90 días, mejorando la posición de caja en el trimestre de la operación.',
                },
                {
                  title: 'Anticipo del 20% en importaciones de bienes de capital',
                  desc: 'Pago anticipado reducido al 20% del valor del bien sobre el total de la importación, en lugar del porcentaje estándar.',
                },
                {
                  title: 'Certificado de no retención IVA simplificado',
                  desc: 'Proceso simplificado para obtener el certificado que evita retenciones en la fuente, reduciendo el trabajo administrativo.',
                },
                {
                  title: 'Exención de percepciones en importaciones',
                  desc: 'Exención temporal de percepciones de IVA e IIBB en importaciones para PyMEs calificadas. Verificar vigencia con ARCA al momento de la operación.',
                },
                {
                  title: 'Impuesto al cheque como pago a cuenta',
                  desc: 'Las micro empresas pueden computar el 30% del Impuesto a los Débitos y Créditos Bancarios como pago a cuenta de contribuciones patronales, reduciendo la carga laboral mensual.',
                },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex gap-3">
                  <CheckCircle size={15} className="text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 11: TABLA ¿QUÉ APLICA PARA VOS? ── */}
      <section id="que-aplica" className="py-20 px-6 bg-slate-900 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-400/10 border-cyan-400/20 text-cyan-400">
                Guía rápida de aplicabilidad
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-white mb-10">
              ¿Qué beneficios aplican según tu empresa?
            </h2>

            <div className="overflow-x-auto rounded-xl border border-white/10 shadow-sm">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-5 py-3.5 text-left font-bold text-gray-400 border-r border-white/10 w-40">Beneficio</th>
                    <th className="px-4 py-3.5 text-center font-bold text-gray-300 border-r border-white/10">
                      <span className="block text-xs">PyME micro</span>
                      <span className="block text-[10px] text-gray-500 font-normal">USD 150K–600K</span>
                    </th>
                    <th className="px-4 py-3.5 text-center font-bold text-gray-300 border-r border-white/10">
                      <span className="block text-xs">PyME mediana</span>
                      <span className="block text-[10px] text-gray-500 font-normal">USD 600K–9M</span>
                    </th>
                    <th className="px-4 py-3.5 text-center font-bold text-gray-300 border-r border-white/10">
                      <span className="block text-xs">Gran empresa</span>
                      <span className="block text-[10px] text-gray-500 font-normal">Sin límite</span>
                    </th>
                    <th className="px-4 py-3.5 text-center font-bold text-gray-300">
                      <span className="block text-xs">Proyecto RIGI</span>
                      <span className="block text-[10px] text-gray-500 font-normal">+USD 200M</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { beneficio: 'RIMI', cols: ['✅', '✅', '—', '—'] },
                    { beneficio: 'RIGI', cols: ['—', '—', '—', '✅'] },
                    { beneficio: 'Aranceles reducidos', cols: ['✅', '✅', '✅', '✅ Exención total'] },
                    { beneficio: 'IVA 10,5%', cols: ['✅', '✅', '✅', '✅'] },
                    { beneficio: 'Leasing', cols: ['✅', '✅', '✅', 'Puede'] },
                    { beneficio: 'EdC / FONPEC', cols: ['✅', '✅', '✅', '✅'] },
                    { beneficio: 'PyME generales', cols: ['✅', '✅', '—', '—'] },
                    { beneficio: 'Provinciales', cols: ['Según ubicación', 'Según ubicación', 'Según ubicación', '✅ + provinciales'] },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white/2' : 'bg-transparent'}>
                      <td className="px-5 py-3.5 font-semibold text-gray-200 border-r border-white/5 text-sm">{row.beneficio}</td>
                      {row.cols.map((cell, j) => (
                        <td key={j} className={`px-4 py-3.5 text-center text-xs border-r border-white/5 last:border-0 ${cell === '—' ? 'text-gray-600' : cell.startsWith('✅') ? 'text-cyan-400 font-semibold' : 'text-gray-400'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-xs mt-4">— = no aplica directamente · ✅ = aplica · La combinación óptima depende del perfil impositivo, estructura societaria y ubicación de la empresa.</p>

          </motion.div>
        </div>
      </section>

      {/* ── CASO PRÁCTICO — bg: gray-50 ── */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Caso práctico</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">¿Cuánto se reduce el costo real con todos los beneficios combinados?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Valor del proyecto', value: 'USD 1.000.000', desc: 'Sistema ASRS completo: transelevadores, robots lanzadera, WMS y transportadores para bodega de distribución.' },
              { label: 'Ahorro arancel 0%', value: '− USD 150.000', desc: 'Decreto 513/2025 elimina el 15% de arancel sobre valor CIF. Ahorro directo en el desembolso inicial.' },
              { label: 'IVA 10,5% vs 21%', value: '− USD 52.500', desc: 'IVA diferencial sobre la base imponible del equipo (ahorro de 10,5 puntos porcentuales sobre USD 500.000 de componentes calificados).' },
              { label: 'Financiamiento BICE', value: 'USD 800.000', desc: '80% del proyecto a 10 años. Cuota estimada: USD 8.500/mes, inferior al costo de labor mensual reemplazado.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 hover:shadow-sm transition-all">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono mb-2">{item.label}</p>
                <p className="text-2xl font-black text-cyan-500 leading-none mb-3">{item.value}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white border border-cyan-100 rounded-2xl p-8">
            <h3 className="text-gray-900 font-black text-lg uppercase tracking-tight mb-4">El resultado en flujo de caja del primer año</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Con arancel 0% y financiamiento BICE del 80%, la empresa desembolsa <strong>USD 50.000 de capital propio en el primer año</strong> (USD 200.000 de aporte neto del ahorro arancelario de USD 150.000). Las cuotas mensuales del BICE son inferiores al costo de labor que el sistema reemplaza.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Sobre ese escenario, el RIMI permite deducir el 100% del valor del bien en el primer ejercicio fiscal, reduciendo la base imponible de Ganancias del año de la inversión. En empresas con alta carga impositiva, este beneficio puede equivaler a un ahorro fiscal adicional de USD 80.000 a USD 120.000.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Capital propio neto primer año', val: '~ USD 50.000', note: 'Después de ahorro arancelario' },
                  { label: 'Reducción base imponible Ganancias', val: 'USD 1.000.000', note: 'Amortización acelerada RIMI 100%' },
                  { label: 'Ahorro fiscal estimado (Ganancias 35%)', val: '~ USD 120.000', note: 'Varía según perfil impositivo' },
                  { label: 'Reducción total sobre costo de lista', val: '15% – 40%', note: 'Combinando todos los beneficios' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="text-gray-700 font-semibold text-sm">{row.label}</p>
                      <p className="text-gray-400 text-xs">{row.note}</p>
                    </div>
                    <p className="text-cyan-600 font-black text-sm whitespace-nowrap ml-4">{row.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-6">* Los valores son estimaciones orientativas. El beneficio real depende del perfil impositivo de la empresa, la estructura del proyecto y los regímenes a los que adhiera. STOKA analiza gratuitamente el caso específico de cada proyecto.</p>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ AHORA — bg: white ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">El contexto 2026</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
              Por qué 2026 es una ventana de oportunidad para automatizar
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              La convergencia de tres factores hace de 2025–2026 una ventana única para invertir en automatización de almacenes en Argentina. Por primera vez en décadas se combinan <strong>estabilidad normativa de largo plazo</strong>, <strong>eliminación de aranceles de importación</strong> y <strong>acceso a financiamiento preferencial</strong> en simultáneo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              El <strong>RIGI</strong> ofrece 30 años de estabilidad fiscal: Ganancias al 25%, aranceles fijos y libre disponibilidad de divisas desde el tercer año. Para empresas que automatizan hoy, este horizonte de certeza facilita el cálculo del TCO a 10 años y la presentación del proyecto ante directorio o financiadores.
            </p>
            <p className="text-gray-600 leading-relaxed">
              El <strong>Decreto 513/2025</strong> elimina el 15% de arancel: en un proyecto de USD 800.000, eso son USD 120.000 menos de desembolso inicial. Sin gestión adicional por parte de la empresa: aplica automáticamente al importar los equipos DELIE.
            </p>
            <p className="text-gray-600 leading-relaxed">
              La combinación de <strong>BICE + RIMI + arancel 0%</strong> transforma la ecuación de inversión: la cuota mensual del financiamiento queda por debajo del costo laboral mensual que se reemplaza, haciendo que el sistema se financie a sí mismo desde el primer año de operación.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ — bg: slate-900 ── */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-3">Preguntas frecuentes</p>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter">Preguntas frecuentes sobre beneficios fiscales para automatización</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <FileText size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <h3 className="text-white font-bold text-sm leading-snug">{item.q}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pl-5">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 13: CTA FINAL ── */}
      <section id="evaluacion" className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4">Evaluación sin cargo</p>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-black uppercase tracking-tighter mb-5">
              Evaluá los beneficios fiscales<br />
              <span className="text-cyan-500">para tu proyecto de automatización</span>
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              Cada empresa tiene una estructura fiscal distinta. Nuestro equipo te acompaña con la documentación técnica del <Link to="/catalogo/asrs" className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2">sistema ASRS</Link> y <Link to="/como-trabajamos" className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2">te conectamos con los beneficios que aplican a tu caso</Link>. El asesoramiento impositivo final lo define tu contador — nosotros ponemos la ingeniería.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
            {/* Formulario */}
            <EvaluacionForm navigate={navigate} />

            {/* Alternativa directa */}
            <div className="flex flex-col gap-4 min-w-[220px]">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400">O contactanos directo</p>
              <a href="https://wa.me/5491140000000?text=Hola%20STOKA%2C%20quiero%20evaluar%20los%20beneficios%20fiscales%20para%20mi%20proyecto%20de%20automatizaci%C3%B3n"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 text-white font-black text-sm rounded-xl hover:bg-green-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="mailto:consultas@stokagroup.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                consultas@stokagroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 14: DISCLAIMER LEGAL ── */}
      <section className="bg-gray-50 py-10 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="p-5 rounded-xl border border-amber-200 bg-amber-50">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">Aviso legal importante</p>
            <p className="text-amber-900/80 text-xs leading-relaxed">
              La información contenida en esta página es de carácter general y se basa en la normativa vigente a <strong>junio de 2026</strong>. No constituye asesoramiento impositivo, legal ni financiero. Los beneficios fiscales están sujetos a la reglamentación vigente, cupos presupuestarios y requisitos de elegibilidad que pueden variar. Consultá con tu contador o asesor fiscal la aplicabilidad a tu caso particular. <strong>Última actualización: junio 2026.</strong> STOKA no es responsable por decisiones tomadas en base a esta información sin asesoramiento profesional independiente.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 15: NORMATIVA CITADA ── */}
      <section className="bg-gray-50 py-10 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <details className="group">
            <summary className="cursor-pointer flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors list-none select-none">
              <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] group-open:rotate-90 transition-transform">›</span>
              Normativa citada
            </summary>
            <div className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-1">
              {[
                { ref: 'Ley 27.802, Título XXIII (RIMI)', fecha: 'Marzo 2026' },
                { ref: 'Decreto 242/2026 (Reglamentación RIMI)', fecha: 'Abril 2026' },
                { ref: 'RG Conjunta ARCA 5849/2026 (Procedimiento RIMI)', fecha: 'Mayo 2026' },
                { ref: 'Ley 27.742, Título VII (RIGI)', fecha: 'Julio 2024' },
                { ref: 'Decreto 749/2024 (Reglamentación RIGI)', fecha: 'Septiembre 2024' },
                { ref: 'Decreto 105/2026 (Prórroga RIGI)', fecha: 'Febrero 2026' },
                { ref: 'Decreto 513/2025 (Reducción aranceles bienes de capital)', fecha: '2025' },
                { ref: 'Decreto 557/23, Anexo I (Listado BK y BIT)', fecha: '2023' },
                { ref: 'Ley 25.248 (Leasing)', fecha: '' },
                { ref: 'Ley 23.349, art. 28 (IVA tasa reducida)', fecha: '' },
                { ref: 'Ley 27.264 (Beneficios PyME)', fecha: '' },
                { ref: 'Ley 27.506 + 27.570 (Economía del Conocimiento)', fecha: '' },
                { ref: 'Resolución 8/2026 Sec. Industria (FONPEC)', fecha: '2026' },
                { ref: 'Leyes 6.949 y 6.950 CABA (RIGI y RIMI local)', fecha: '' },
                { ref: 'Ley 15.510 Buenos Aires (RPIE)', fecha: '' },
                { ref: 'Leyes 5.319 y 10.792 Córdoba (Promoción Industrial)', fecha: '' },
              ].map((item, i) => (
                <p key={i} className="text-gray-400 text-[11px] py-1 border-b border-gray-100 last:border-0">
                  {item.ref}{item.fecha && <span className="text-gray-300 ml-1">— {item.fecha}</span>}
                </p>
              ))}
            </div>
          </details>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

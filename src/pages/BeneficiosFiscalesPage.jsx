import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { Shield, Percent, Building2, CheckCircle, ArrowRight, FileText } from 'lucide-react';

const BENEFICIOS = [
  {
    num: '01',
    icon: Shield,
    tag: 'RIGI',
    subtitle: 'Ley 27.742 — Vigente',
    title: 'Régimen de Incentivo para Grandes Inversiones',
    description: 'El RIGI establece un régimen unificado para grandes inversiones en Argentina que ofrece estabilidad fiscal, cambiaria y regulatoria a largo plazo. Los proyectos de automatización industrial que califiquen acceden a beneficios impositivos significativos.',
    items: [
      'Estabilidad fiscal por 30 años desde la adhesión',
      'Amortización acelerada de bienes de capital: 100% en el primer ejercicio',
      'Deducción inmediata del IVA de las importaciones habilitadas',
      'Libre disponibilidad de divisas a partir del tercer año',
      'Tasa de Impuesto a las Ganancias reducida: 25% (vs. 35% general)',
      'Exención del Impuesto a los Débitos y Créditos Bancarios',
    ],
    accent: 'from-blue-50 to-white',
    iconBg: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-500',
    tagStyle: 'bg-blue-50 border-blue-200 text-blue-600',
  },
  {
    num: '02',
    icon: Percent,
    tag: 'Decreto 513/2025',
    subtitle: 'Decreto del Ejecutivo Nacional — 2025',
    title: 'Importación de Equipos con Arancel 0%',
    description: 'El Decreto 513/2025 establece la eliminación de aranceles de importación para sistemas de automatización de almacenes y robótica industrial. Permite importar los equipos DELIE sin el costo adicional del arancel.',
    items: [
      'Arancel 0% para posiciones arancelarias de robots industriales y ASRS',
      'Aplicable a transelevadores, robots lanzadera, AMR y VLM',
      'Transportadores, elevadores y sistemas de conveyors incluidos',
      'Software WMS/WCS y hardware de control también beneficiado',
      'Vigencia sujeta a revisión anual por el Ejecutivo',
    ],
    accent: 'from-cyan-50 to-white',
    iconBg: 'bg-cyan-50 border-cyan-200',
    iconColor: 'text-cyan-500',
    tagStyle: 'bg-cyan-50 border-cyan-200 text-cyan-600',
  },
  {
    num: '03',
    icon: Building2,
    tag: 'Línea BICE',
    subtitle: 'Banco de Inversión y Comercio Exterior',
    title: 'Financiamiento para Automatización Industrial',
    description: 'El BICE ofrece una línea específica para proyectos de modernización y automatización de procesos productivos y logísticos con condiciones preferenciales.',
    items: [
      'Plazos de hasta 10 años para proyectos de automatización',
      'Tasa de interés preferencial según perfil del proyecto',
      'Financiamiento de hasta el 80% del valor total del proyecto',
      'Período de gracia de hasta 2 años sobre el capital',
      'Aplicable a empresas PYME y grandes empresas',
      'Gestión a través de bancos comerciales adheridos',
    ],
    accent: 'from-emerald-50 to-white',
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-500',
    tagStyle: 'bg-emerald-50 border-emerald-200 text-emerald-600',
  },
];


const FAQ = [
  { q: '¿Mi empresa puede acceder al RIGI?', a: 'El RIGI aplica a proyectos de inversión mayores a USD 200 millones. Para proyectos más pequeños, existen esquemas provinciales y municipales con beneficios similares. Consultanos por tu caso específico.' },
  { q: '¿El Decreto 513/2025 aplica a todos los equipos DELIE?', a: 'Aplica a las posiciones arancelarias específicas de robots industriales y sistemas automatizados de almacenamiento. La mayoría de los productos del catálogo DELIE están incluidos. Verificamos esto para cada proyecto.' },
  { q: '¿Cómo accedo a la línea BICE?', a: 'A través de un banco comercial adherido (Banco Nación, Banco Provincia, entre otros). STOKA puede acompañarte en la elaboración del proyecto técnico requerido por el banco.' },
  { q: '¿Se pueden combinar los beneficios?', a: 'Sí, en muchos casos es posible acceder simultáneamente a la importación con arancel 0% y al financiamiento BICE. La compatibilidad con el RIGI depende del perfil del proyecto.' },
];

export const BeneficiosFiscalesPage = () => {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen text-gray-900">
      <Helmet>
        <title>Beneficios Fiscales 2025 — RIGI, Decreto 513/2025, BICE | STOKA Argentina</title>
        <meta name="description" content="Invertí en automatización con el Estado a favor. RIGI: 30 años de estabilidad fiscal. Decreto 513/2025: arancel 0% en equipos DELIE. Línea BICE: financiamiento hasta 10 años a tasas preferenciales." />
        <meta property="og:title" content="Beneficios Fiscales 2025 para Automatización | RIGI, Decreto 513, BICE | STOKA" />
        <meta property="og:description" content="RIGI: 30 años de estabilidad. Decreto 513/2025: arancel 0% en equipos DELIE. BICE: financiamiento hasta 10 años. Invertí en automatización con el Estado a favor." />
        <meta property="og:url" content="https://www.stokagroup.com/beneficios-fiscales" />
        <link rel="canonical" href="https://www.stokagroup.com/beneficios-fiscales" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Mi empresa puede acceder al RIGI?", "acceptedAnswer": { "@type": "Answer", "text": "El RIGI aplica a proyectos de inversión mayores a USD 200 millones. Para proyectos más pequeños, existen esquemas provinciales y municipales con beneficios similares." } },
            { "@type": "Question", "name": "¿El Decreto 513/2025 aplica a todos los equipos DELIE?", "acceptedAnswer": { "@type": "Answer", "text": "Aplica a las posiciones arancelarias específicas de robots industriales y sistemas automatizados de almacenamiento. La mayoría de los productos del catálogo DELIE están incluidos." } },
            { "@type": "Question", "name": "¿Cómo accedo a la línea BICE?", "acceptedAnswer": { "@type": "Answer", "text": "A través de un banco comercial adherido (Banco Nación, Banco Provincia, entre otros). STOKA puede acompañarte en la elaboración del proyecto técnico requerido por el banco." } },
            { "@type": "Question", "name": "¿Se pueden combinar los beneficios?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, en muchos casos es posible acceder simultáneamente a la importación con arancel 0% y al financiamiento BICE. La compatibilidad con el RIGI depende del perfil del proyecto." } }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* ── HERO — foto de fondo ── */}
      <div className="relative mt-20 h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src="/bandera4-cropped.jpg"
          alt="Beneficios fiscales Argentina"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-4">
              Marco normativo · Argentina 2025
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[1.05] mb-5">
              Invertí con el<br />
              <span className="text-cyan-400">Estado a favor</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              El contexto normativo actual crea condiciones únicas para automatizar operaciones logísticas en Argentina: arancel cero, estabilidad fiscal y financiamiento preferencial.
            </p>
            <div className="flex flex-wrap gap-3">
              {['RIGI — Ley 27.742', 'Decreto 513/2025', 'Línea BICE'].map((tag) => (
                <span key={tag} className="text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

{/* ── BENEFICIOS — alternando bg: white / gray-50 / white ── */}
      {BENEFICIOS.map((b, i) => {
        const dark = i % 2 !== 0;
        return (
          <section key={i} className={`py-20 px-6 border-b ${dark ? 'bg-slate-900 border-white/5' : 'bg-white border-gray-100'}`}>
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

                {/* LEFT */}
                <div className="flex flex-col gap-5">
                  <span className={`text-[80px] font-black italic leading-none select-none ${dark ? 'text-white/10' : 'text-gray-100'}`}>
                    {b.num}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${dark ? 'bg-white/10 border-white/20' : b.iconBg}`}>
                    <b.icon size={26} className={dark ? 'text-cyan-400' : b.iconColor} />
                  </div>
                  <div>
                    <span className={`inline-block text-[11px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full ${dark ? 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400' : b.tagStyle}`}>
                      {b.tag}
                    </span>
                    <p className={`text-xs mt-2 font-mono ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{b.subtitle}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-5 ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {b.title}
                  </h2>
                  <p className={`text-base leading-relaxed mb-8 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{b.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {b.items.map((item, j) => (
                      <motion.div key={j} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.06 }}
                        className="flex items-start gap-2.5">
                        <CheckCircle size={15} className={`mt-0.5 shrink-0 ${dark ? 'text-cyan-400' : b.iconColor}`} />
                        <p className={`text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* ── FAQ — bg: slate-900 ── */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-3">Preguntas frecuentes</p>
            <h2 className="text-white text-3xl md:text-4xl font-black italic uppercase tracking-tighter">FAQ</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <FileText size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                  <h3 className="text-white font-bold text-sm leading-snug">{item.q}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pl-6">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — bg: white ── */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4">¿Qué aplica a tu proyecto?</p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-5">
            Te ayudamos a<br />
            <span className="text-cyan-500">aprovechar cada beneficio</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Nuestro equipo analiza gratuitamente qué beneficios podés aprovechar según el tipo y escala de tu proyecto de automatización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contacto')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Consultá con nuestro equipo <ArrowRight size={14} />
            </button>
            <button onClick={() => navigate('/catalogo')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
              Ver catálogo completo
            </button>
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

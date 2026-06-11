import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { CheckCircle, X, ArrowRight, Globe } from 'lucide-react';

const COMPARATIVA = [
  { aspecto: 'Presencia local Argentina',   delie: true,  otro: false },
  { aspecto: 'Soporte técnico en español',  delie: true,  otro: false },
  { aspecto: 'Ingeniería in-situ Argentina',delie: true,  otro: false },
  { aspecto: 'Arancel 0% Decreto 513/2025', delie: true,  otro: true  },
  { aspecto: 'Instalaciones globales',       delie: '+1.000', otro: '+10.000' },
  { aspecto: 'Sistemas hasta 40 m',         delie: true,  otro: true  },
  { aspecto: 'Robots shuttle 4 vías',       delie: true,  otro: true  },
  { aspecto: 'Software WMS/WCS propio',     delie: true,  otro: true  },
  { aspecto: 'CMMI Nivel 5 (software)',     delie: true,  otro: false },
  { aspecto: 'Precio para mercado LATAM',   delie: '30–50% menor', otro: 'Alto (importación directa)' },
];

const FAQ = [
  {
    q: '¿Daifuku tiene representante oficial o distribuidor en Argentina?',
    a: 'Daifuku no tiene representación comercial activa ni distribuidor oficial para venta directa de sistemas ASRS al mercado industrial argentino. Los proyectos que se realizan en la región suelen gestionarse desde oficinas en Brasil o EEUU con largos tiempos de respuesta y soporte técnico limitado. STOKA, en cambio, representa a DELIE con equipo de ingeniería e instalación 100% en Argentina.',
  },
  {
    q: '¿Wynright opera en Argentina o Latinoamérica?',
    a: 'Wynright fue adquirida por Daifuku en 2013 y opera principalmente en el mercado norteamericano. No tiene presencia comercial directa en Argentina ni en el resto de Latinoamérica. Si tu búsqueda era "Wynright Argentina" o "representante Wynright", STOKA ofrece tecnología DELIE equivalente con soporte local completo.',
  },
  {
    q: '¿En qué se compara DELIE con Daifuku en términos técnicos?',
    a: 'Ambas empresas fabrican sistemas ASRS completos: transelevadores de hasta 40 metros, robots lanzadera, robots AMR, software WMS/WCS y transportadores industriales. DELIE tiene más de 1.000 instalaciones en +30 países, incluyendo Europa, Medio Oriente, Asia y América, con la misma calidad de fabricación y los mismos estándares de certificación (CE, ISO 9001). La diferencia para Argentina es que DELIE llega a través de STOKA con soporte local, precios adaptados al mercado LATAM y todos los beneficios del Decreto 513/2025.',
  },
  {
    q: '¿Por qué elegir DELIE a través de STOKA en lugar de gestionar una compra directa a Daifuku?',
    a: 'Una compra directa a un fabricante japonés sin representante local implica: soporte posventa en husos horarios diferentes, sin técnicos en Argentina para resolver fallas, comunicación en inglés o japonés, y sin optimización fiscal local (aunque el arancel 0% aplica a ambos). A través de STOKA, el proyecto ASRS incluye ingeniería local, instalación con equipo certificado en Argentina, integración con ERP/WMS locales y soporte técnico presencial. El TCO a 5 años de un proyecto con soporte local vs. sin soporte local puede diferir en un 20% o más.',
  },
];

export const AlternativaDaifukuPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Alternativa a Daifuku en Argentina", "item": "https://www.stokagroup.com/alternativa-daifuku-argentina" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <div className="min-h-screen text-gray-900">
      <Helmet>
        <title>Alternativa a Daifuku en Argentina | Sistemas ASRS DELIE | STOKA</title>
        <meta name="description" content="¿Buscabas Daifuku Argentina o Wynright Argentina? STOKA representa DELIE: sistemas ASRS de clase mundial con +1.000 instalaciones globales y soporte técnico 100% local en Argentina y Chile." />
        <meta property="og:title" content="Alternativa a Daifuku en Argentina | DELIE ASRS | STOKA" />
        <meta property="og:description" content="Buscabas Daifuku Argentina o Wynright? DELIE a través de STOKA ofrece la misma clase de tecnología ASRS con ingeniería y soporte 100% local en Argentina." />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.stokagroup.com/alternativa-daifuku-argentina" />
        <link rel="canonical" href="https://www.stokagroup.com/alternativa-daifuku-argentina" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="bg-slate-950 pt-36 pb-20 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-5">
              ¿Buscabas Daifuku Argentina o Wynright Argentina?
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Encontraste<br />
              <span className="text-cyan-400">la alternativa</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-10">
              STOKA representa a <strong className="text-white">DELIE</strong> en Argentina y Chile: un fabricante global de sistemas ASRS con más de 1.000 instalaciones en +30 países, soporte técnico 100% local y precios 30–50% más competitivos que las alternativas europeas o japonesas.
            </p>
            <div className="flex flex-wrap gap-3">
              {['+1.000 instalaciones globales', '+30 países', 'Soporte local Argentina', 'Decreto 513/2025 — Arancel 0%'].map((tag) => (
                <span key={tag} className="text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* POR QUÉ NO DAIFUKU EN ARGENTINA */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">El contexto</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
              Daifuku y Wynright no tienen representante en Argentina
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed">
              Daifuku es el fabricante de sistemas de automatización de almacenes más grande del mundo, con sede en Japón y operaciones en todo el mundo. Wynright es una división de Daifuku enfocada en el mercado norteamericano. Ambas son referencias globales en ASRS, transelevadores y robótica de almacenes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sin embargo, ni Daifuku ni Wynright tienen representación comercial activa ni servicio técnico local en Argentina. Para las empresas argentinas que buscan esa clase de tecnología, la única opción directa era importar con tiempos de respuesta de meses, sin soporte local, con costos de mantenimiento elevados y sin optimización fiscal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              STOKA resuelve esa brecha. Representamos a <strong>DELIE</strong>, un fabricante global de sistemas ASRS con el mismo nivel técnico que los líderes japoneses y europeos, con oficina y equipo de ingeniería en Argentina para el proyecto completo: diseño, instalación, integración y posventa.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Comparativa</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">DELIE / STOKA vs. grandes fabricantes ASRS sin presencia local</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left font-black text-xs uppercase tracking-wide w-1/2">Aspecto</th>
                  <th className="px-6 py-4 text-center font-black text-xs uppercase tracking-wide text-cyan-400">DELIE · STOKA</th>
                  <th className="px-6 py-4 text-center font-black text-xs uppercase tracking-wide text-gray-400">Fabricantes sin rep. local</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIVA.map((row, i) => (
                  <motion.tr key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 text-gray-700 font-semibold border-r border-gray-100">{row.aspecto}</td>
                    <td className="px-6 py-4 text-center">
                      {row.delie === true
                        ? <CheckCircle size={18} className="text-cyan-500 mx-auto" />
                        : row.delie === false
                          ? <X size={18} className="text-red-400 mx-auto" />
                          : <span className="font-bold text-cyan-600 text-xs">{row.delie}</span>
                      }
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.otro === true
                        ? <CheckCircle size={18} className="text-gray-400 mx-auto" />
                        : row.otro === false
                          ? <X size={18} className="text-red-400 mx-auto" />
                          : <span className="text-gray-500 text-xs">{row.otro}</span>
                      }
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-4">* La comparativa refleja la situación general del mercado, no afirmaciones sobre capacidades específicas de terceros.</p>
        </div>
      </section>

      {/* DELIE GLOBALES */}
      <section className="bg-slate-900 py-20 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="/image.png" alt="DELIE — Fabricante global de sistemas ASRS" className="h-10 object-contain mb-6" />
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">El fabricante</p>
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-5">
              DELIE — Clase mundial<br />
              <span className="text-cyan-400">con soporte local</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              Fundada en 2003, DELIE es uno de los principales fabricantes globales de sistemas ASRS. Sus transelevadores alcanzan 40 metros de altura, sus robots shuttle operan en cámaras frías de -30 °C, y su software WMS/WCS está certificado CMMI Nivel 5 — el mismo nivel que los mejores fabricantes del mundo. Con más de 1.000 instalaciones en Asia, Europa, América y Medio Oriente, DELIE entrega el mismo nivel tecnológico que Daifuku o SSI Schaefer, con la ventaja competitiva de precios más accesibles para el mercado latinoamericano.
            </p>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
              <Globe size={14} />
              <span>Asia · Europa · América · Medio Oriente</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '+1.000', label: 'Instalaciones globales' },
              { value: '+30',    label: 'Países con presencia' },
              { value: '40m',    label: 'Altura máx. transelevador' },
              { value: '2003',   label: 'Fundación de DELIE' },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-colors">
                <p className="text-3xl font-black text-cyan-400 leading-none mb-2">{s.value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Preguntas frecuentes</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Daifuku, Wynright y DELIE en Argentina</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-4">¿Querés cotizar?</p>
          <h2 className="text-white text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-5">
            Tecnología de clase mundial<br />
            <span className="text-cyan-400">con soporte en Argentina</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            No necesitás gestionar la compra directamente con un fabricante japonés. STOKA te entrega el proyecto ASRS completo: ingeniería, instalación, integración y soporte — todo desde Argentina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contacto')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Solicitar propuesta técnica <ArrowRight size={14} />
            </button>
            <button onClick={() => navigate('/catalogo')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all">
              Ver catálogo DELIE
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

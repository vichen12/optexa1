import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { CheckCircle, X, Globe, Thermometer, Layers, Cpu } from 'lucide-react';

const COMPARATIVA = [
  { aspecto: 'Presencia local Argentina',    delie: true,  otro: false },
  { aspecto: 'Soporte técnico en español',   delie: true,  otro: false },
  { aspecto: 'Ingeniería in-situ Argentina', delie: true,  otro: false },
  { aspecto: 'Arancel 0% Decreto 513/2025',  delie: true,  otro: true  },
  { aspecto: 'Instalaciones globales',        delie: '+1.000', otro: '+10.000' },
  { aspecto: 'Sistemas hasta 40 m',          delie: true,  otro: true  },
  { aspecto: 'Robots shuttle 4 vías',        delie: true,  otro: true  },
  { aspecto: 'Software WMS/WCS propio',      delie: true,  otro: true  },
  { aspecto: 'CMMI Nivel 5 (software)',      delie: true,  otro: false },
  { aspecto: 'Precio para mercado LATAM',    delie: '30–50% menor', otro: 'Alto (importación directa)' },
];

const CAPACIDADES = [
  { icon: Layers,       title: 'Transelevadores hasta 40 m',     desc: 'Unit-load y mini-load para paletas y totes. Altura máxima 40 metros, ciclos combinados optimizados por WCS propio.' },
  { icon: Cpu,          title: 'Robots shuttle 4 vías',         desc: 'Lanzaderas, pallet shuttles y tote shuttles. Operación en frío hasta −30 °C. Algoritmo ECBS para scheduling.' },
  { icon: Globe,        title: '+1.000 instalaciones globales', desc: 'Asia, Europa, América y Medio Oriente. Certificación CE e ISO 9001. Más de 20 años de trayectoria.' },
  { icon: Thermometer, title: 'Cadena de frío −30 °C',        desc: 'Equipos diseñados para cámaras frigoríficas. Materiales y lubricantes específicos para bajas temperaturas.' },
];

const FAQ = [
  {
    q: '¿Qué es DELIE y qué sistemas fabrica?',
    a: 'DELIE es un fabricante global de sistemas de almacenamiento automatizado (ASRS) fundado en 2003. Fabrica transelevadores unit-load y mini-load de hasta 40 metros, robots shuttle 4 vías, robots AMR/AGV, VLM (Vertical Lift Modules), transportadores industriales y software WMS/WCS certificado CMMI Nivel 5. Con más de 1.000 instalaciones en +30 países, incluyendo Europa, Medio Oriente, Asia y América.',
  },
  {
    q: '¿DELIE tiene representación oficial en Argentina?',
    a: 'Sí. STOKA es el representante exclusivo y oficial de DELIE en Argentina y Chile. Contamos con equipo de ingeniería, instalación y soporte técnico 100% local — desde el diseño del proyecto hasta la posventa. No hace falta gestionar nada con China directamente: manejamos el proyecto completo en español.',
  },
  {
    q: '¿Qué nivel técnico tienen los sistemas ASRS de DELIE?',
    a: 'DELIE fabrica sistemas ASRS completos: transelevadores de hasta 40 metros, robots shuttle 4 vías, robots AMR, software WMS/WCS certificado CMMI Nivel 5 y transportadores industriales. Con certificaciones CE e ISO 9001, es tecnología de primer nivel mundial con precios 30–50% más competitivos que las alternativas europeas o japonesas para el mercado latinoamericano.',
  },
  {
    q: '¿Por qué elegir DELIE a través de STOKA y no importar directamente?',
    a: 'Porque con STOKA el proyecto es llave en mano: ingeniería local, instalación con equipo certificado en Argentina, integración con tu ERP/WMS y soporte técnico presencial cuando lo necesitás. Sin diferencia horaria, sin barreras de idioma, sin quedarte solo después de la instalación. El TCO a 5 años con soporte local vs. sin soporte local puede diferir un 20% o más.',
  },
];

export const AlternativaDeliePage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Helmet>
        <title>DELIE en Argentina — Sistemas ASRS con Soporte Local | STOKA</title>
        <meta name="description" content="Representantes exclusivos de DELIE en Argentina y Chile. Sistemas ASRS, transelevadores, robots shuttle y WMS/WCS. Ingeniería y soporte técnico 100% local." />
        <meta property="og:title" content="DELIE en Argentina — Representación Oficial STOKA | Sistemas ASRS" />
        <meta property="og:description" content="STOKA representa oficialmente a DELIE en Argentina: transelevadores hasta 40 m, robots shuttle, WMS/WCS CMMI Nivel 5. Soporte técnico 100% local." />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.stokagroup.com/delie-argentina" />
        <link rel="canonical" href="https://www.stokagroup.com/delie-argentina" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "DELIE en Argentina", "item": "https://www.stokagroup.com/delie-argentina" },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Sistemas ASRS DELIE en Argentina — Representación Oficial STOKA",
          "description": "Representantes exclusivos de DELIE en Argentina y Chile. Transelevadores hasta 40 m, robots shuttle, WMS/WCS CMMI Nivel 5. Ingeniería y soporte 100% local.",
          "provider": { "@id": "https://www.stokagroup.com/#organization" },
          "areaServed": [{ "@type": "Country", "name": "Argentina" }, { "@type": "Country", "name": "Chile" }],
          "serviceType": "Sistemas ASRS DELIE — Representación y Distribución",
          "url": "https://www.stokagroup.com/delie-argentina"
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO — ESTÉTICA CALCADA DE LA CAPTURA */}
      <section className="bg-white pt-36 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            
            {/* COLUMNA IZQUIERDA: TEXTOS Y METRICAS */}
            <motion.div className="flex-1 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                <button onClick={() => navigate('/')} className="hover:text-cyan-500 transition-colors">Inicio</button>
                <span>/</span>
                <span className="text-gray-600">DELIE en Argentina</span>
              </nav>
              
              <div className="w-12 h-1 bg-cyan-500 mb-6" />

              <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Representación oficial · Argentina y Chile
              </p>
              
              <h1 className="text-slate-900 text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                DELIE<br />
                <span className="text-cyan-500">en Argentina</span>
              </h1>
              
              <p className="text-gray-500 text-base leading-relaxed mb-10">
                STOKA es el representative exclusivo de <strong className="text-slate-900">DELIE</strong> en Argentina y Chile: fabricante global de sistemas ASRS con más de 1.000 instalaciones en +30 países, soporte técnico 100% local y precios 30–50% más competitivos que las alternativas europeas.
              </p>

              <div className="w-full h-[1px] bg-gray-100 mb-8" />

              {/* GRILLA DE METRICAS */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-2xl font-black italic text-slate-900 leading-none mb-1">+1.000</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">instalaciones globales</p>
                </div>
                <div>
                  <p className="text-2xl font-black italic text-slate-900 leading-none mb-1">+30</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">países</p>
                </div>
                <div>
                  <p className="text-2xl font-black italic text-slate-900 leading-none mb-1">Representación</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">exclusiva Argentina</p>
                </div>
                <div>
                  <p className="text-2xl font-black italic text-slate-900 leading-none mb-1">Decreto 513/2025</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Arancel 0%</p>
                </div>
              </div>
            </motion.div>

            {/* COLUMNA DERECHA: TARJETA DE LOGO */}
            <motion.div 
              className="w-full lg:w-auto flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-full max-w-[360px] bg-slate-50 border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center aspect-[4/3]">
                <img 
                  src="/image.png" 
                  alt="DELIE Logo" 
                  className="w-full h-auto object-contain max-h-[140px]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CAPACIDADES DELIE */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">El fabricante</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-2">DELIE — tecnología ASRS de primer nivel mundial</h2>
          <p className="text-gray-400 text-sm mb-10">Fundada en 2003 · +1.000 instalaciones · +30 países · CE · ISO 9001</p>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {CAPACIDADES.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mb-4">
                  <c.icon size={18} className="text-cyan-500" />
                </div>
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Presencia global */}
          <div className="bg-slate-900 rounded-2xl p-7">
            <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.35em] mb-3">Presencia global</p>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold mb-4">
              <Globe size={14} />
              <span>Asia · Europa · América · Medio Oriente</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: '+1.000', label: 'Instalaciones globales' },
                { value: '+30',    label: 'Países con presencia' },
                { value: '40 m',   label: 'Altura máx. transelevador' },
                { value: '2003',   label: 'Año de fundación' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-black text-cyan-400 leading-none mb-1">{s.value}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ CON SOPORTE LOCAL */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Por qué STOKA</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">La diferencia de tener representación local</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Ingeniería in-situ',         desc: 'Diseño del layout, cálculo de ROI y propuesta técnica con ingenieros en Argentina, sin depender de fábrica.' },
              { label: 'Instalación local',           desc: 'Equipo certificado en Argentina. Sin vuelos internacionales ni demoras por diferencia horaria.' },
              { label: 'Soporte técnico presencial',  desc: 'Técnicos en el país para resolver cualquier falla el mismo día. Sin esperar respuesta de China.' },
              { label: 'Gestión fiscal y aduanera',   desc: 'Decreto 513/2025 — arancel 0%. STOKA gestiona la importación y la optimización fiscal del proyecto.' },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 text-sm mb-1">{r.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6">
            <p className="text-cyan-700 text-[10px] font-black uppercase tracking-[0.35em] mb-2">TCO a 5 años</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              El costo total de propiedad de un sistema ASRS con soporte local vs. sin soporte local puede diferir <strong>un 20% o más</strong>. STOKA entrega el proyecto DELIE completo — ingeniería, instalación, integración ERP y posventa — desde Argentina, en español y con tiempos de respuesta locales.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Comparativa</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">DELIE · STOKA vs. fabricantes ASRS sin presencia local</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left font-black text-xs uppercase tracking-wide w-1/2">Aspecto</th>
                  <th className="px-6 py-4 text-center font-black text-xs uppercase tracking-wide text-cyan-400">DELIE · STOKA</th>
                  <th className="px-6 py-4 text-center font-black text-xs uppercase tracking-wide text-gray-400">Sin rep. local</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIVA.map((row, i) => (
                  <motion.tr key={i}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-semibold border-r border-gray-100">{row.aspecto}</td>
                    <td className="px-6 py-4 text-center">
                      {row.delie === true
                        ? <CheckCircle size={18} className="text-cyan-500 mx-auto" />
                        : row.delie === false
                          ? <X size={18} className="text-red-400 mx-auto" />
                          : <span className="font-bold text-cyan-600 text-xs">{row.delie}</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.otro === true
                        ? <CheckCircle size={18} className="text-gray-400 mx-auto" />
                        : row.otro === false
                          ? <X size={18} className="text-red-400 mx-auto" />
                          : <span className="text-gray-500 text-xs">{row.otro}</span>}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-4">* La comparativa refleja la situación general del mercado, no afirmaciones sobre capacidades específicas de terceros.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Preguntas frecuentes</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">DELIE en Argentina</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 transition-colors">
                <h3 className="font-black text-gray-900 text-sm mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};
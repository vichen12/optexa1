import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { ArrowRight, Globe, Target, Shield, Zap } from 'lucide-react';

const DELIE_STATS = [
  { value: '2003',   label: 'Año de fundación DELIE' },
  { value: '+1.000', label: 'Instalaciones globales'  },
  { value: '+30',    label: 'Países con presencia'    },
  { value: '40m',    label: 'Altura máx. instalación' },
];

const VALORES = [
  { icon: Target,  title: 'Ingeniería aplicada',   desc: 'No vendemos cajas. Diseñamos soluciones a medida para cada operación, con cálculo de ROI y layout 3D antes de cualquier inversión.' },
  { icon: Shield,  title: 'Transparencia total',   desc: 'Precios claros, plazos reales y TCO a 10 años desde la propuesta. Sin sorpresas en la instalación ni en el soporte posventa.' },
  { icon: Zap,     title: 'Respuesta local',        desc: 'Soporte técnico en Argentina. Sin depender de tiempos de fábrica ni husos horarios para resolver cualquier problema.' },
  { icon: Globe,   title: 'Tecnología de clase mundial', desc: 'Acceso a la misma tecnología que usan las grandes multinacionales globales, con precios 30–50% más accesibles que las alternativas europeas.' },
];



export const NosotrosPage = () => {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen text-gray-900">
      <Helmet>
        <title>Nosotros | Representantes Oficiales DELIE en Argentina y Chile | STOKA Group</title>
        <meta name="description" content="STOKA es el integrador ASRS en Argentina y Chile, representante exclusivo DELIE. Alternativa a Daifuku Argentina y Wynright Argentina. Ingeniería y soporte 100% local para automatización de almacenes." />
        <meta property="og:title" content="Nosotros | Representantes Oficiales DELIE — Argentina y Chile | STOKA Group" />
        <meta property="og:description" content="Representante oficial exclusivo de DELIE en Argentina y Chile. Ingeniería y soporte 100% local para sistemas ASRS y automatización de almacenes." />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.stokagroup.com/nosotros" />
        <link rel="canonical" href="https://www.stokagroup.com/nosotros" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Nosotros", "item": "https://www.stokagroup.com/nosotros" }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* ── HERO — bg: white con acento cyan ── */}
      <section className="bg-white pt-40 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <Link to="/" className="hover:text-cyan-500 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-gray-600">Nosotros</span>
            </nav>
            <div className="w-12 h-1 bg-cyan-500 mb-8 rounded-full" />
            <p className="text-gray-400 text-[11px] font-black uppercase tracking-[0.4em] mb-5">Quiénes somos</p>
            <h1 className="text-gray-900 text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8">
              STOKA<br />
              <span className="text-cyan-500">Argentina</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl leading-relaxed mb-12">
              Representantes oficiales exclusivos de DELIE en Argentina. Tecnología de automatización de almacenes de clase mundial, con ingeniería y soporte 100% local.
            </p>
            <div className="flex flex-wrap gap-10 border-t border-gray-100 pt-10">
              {[
                { value: '+1.000', label: 'Instalaciones globales DELIE' },
                { value: '+30',    label: 'Países con presencia' },
                { value: '100%',   label: 'Ingeniería y soporte local' },
                { value: '2003',   label: 'Año de fundación DELIE' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-gray-900 text-3xl font-black italic leading-none mb-1">{s.value}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex flex-col items-center gap-4 mt-8">
            <div className="border border-gray-100 rounded-2xl px-10 py-8 bg-gray-50 flex flex-col items-center gap-4 shadow-sm">
              <img src="/image.png" alt="DELIE — Fabricante de sistemas ASRS" className="w-56 object-contain" />
              <div className="w-8 h-px bg-gray-300" />
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em] text-center leading-relaxed">Representación oficial<br />Argentina</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MISIÓN — bg: slate-900 ── */}
      <section className="bg-slate-900 py-20 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">Nuestra misión</p>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">
              Democratizar la automatización logística en Argentina
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              Que ninguna empresa pierda competitividad por no poder acceder a tecnología que hasta hoy estaba reservada para las multinacionales. Los sistemas ASRS de clase mundial ya son accesibles para la industria argentina: tanto para almacenes de distribución como para bodegas de manufactura y depósitos 3PL.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Representamos a DELIE porque creemos que la combinación de fabricación asiática de primer nivel con ingeniería y soporte local es la forma más inteligente de automatizar una operación en Argentina: máxima tecnología, mínimo riesgo.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mt-4">
              El mercado de automatización en Argentina tiene una particularidad que los proveedores internacionales suelen ignorar: no alcanza con vender el equipo. La empresa que automatiza su almacén, bodega o depósito necesita un socio que entienda el contexto regulatorio local (aranceles, AFIP, beneficios fiscales vigentes), que pueda gestionar la importación, que tenga técnicos que lleguen el mismo día cuando hay un problema, y que conozca las restricciones de la industria nacional. STOKA fue creada para ser exactamente eso.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mt-4">
              En Argentina, muchas empresas buscan tecnología de Daifuku Argentina o Wynright Argentina para automatizar sus almacenes industriales. STOKA es el integrador ASRS en Argentina equivalente: ofrecemos tecnología técnicamente comparable con la ventaja del precio DELIE —30–50% más accesible que marcas japonesas o europeas— y soporte técnico local que los proveedores internacionales no garantizan directamente en el mercado argentino. Como representante exclusivo de DELIE y distribuidor ASRS Argentina, STOKA es la alternativa real para empresas que evalúan automatizar su almacén, bodega o depósito industrial.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALORES — bg: gray-50 ── */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">Cómo trabajamos</p>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-10">Nuestros valores</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALORES.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mb-4">
                  <v.icon size={18} className="text-cyan-500" />
                </div>
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIE — bg: slate-900 ── */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="/image.png" alt="DELIE — Fabricante de sistemas ASRS" className="h-10 object-contain mb-5" />
            <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">Nuestro fabricante</p>
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-tight text-white mb-5">
              DELIE —<br /><span className="text-cyan-400">Fabricante global ASRS</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Fundada en 2003, DELIE es uno de los principales fabricantes de sistemas de almacenamiento automatizado del mundo. Con más de 1.000 instalaciones en más de 30 países, combina robustez industrial, software propio WMS/WCS y una línea completa de productos: transelevadores, robots lanzadera, AMR, VLM, transportadores y estanterías de hasta 40 metros.
            </p>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
              <Globe size={14} />
              <span>Asia · Europa · América · Medio Oriente</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {DELIE_STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-colors">
                <p className="text-3xl font-black text-cyan-400 leading-none mb-2">{s.value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA — bg: slate-900 ── */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-4">¿Trabajamos juntos?</p>
          <h2 className="text-white text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-5">
            Hablemos de<br /><span className="text-cyan-400">tu proyecto</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            La primera consulta es sin costo. En 24 horas tenés una respuesta técnica de nuestro equipo de ingeniería.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contacto')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Consultar ahora <ArrowRight size={14} />
            </button>
            <button onClick={() => navigate('/catalogo')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 rounded-xl text-white/70 text-sm font-bold hover:border-cyan-400/50 hover:text-white transition-all">
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

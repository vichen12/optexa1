import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { Search, FileText, Cpu, Wrench, Rocket, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    tag: 'Fase 01',
    icon: Search,
    title: 'Consulta inicial',
    subtitle: 'Sin costo · Respuesta en 24 horas',
    detail: 'Completás el formulario de contacto o nos escribís directamente. En menos de 24 horas un ingeniero te responde para entender tu operación a alto nivel: tipo de almacén, bodega o depósito, volumen de SKUs, throughput y objetivos de automatización.',
    logs: [
      'Reunión o llamada de 30 minutos con el equipo técnico',
      'Cuestionario técnico inicial enviado por mail',
      'Primera orientación tecnológica sin compromiso ni costo',
    ],
  },
  {
    tag: 'Fase 02',
    icon: FileText,
    title: 'Diagnóstico técnico',
    subtitle: 'Relevamiento in-situ o remoto',
    detail: 'Analizamos datos históricos de movimientos, catálogo de SKUs, picos de demanda y layout existente del almacén, bodega o depósito. Medimos los KPIs actuales para establecer la línea base del proyecto y detectar los cuellos de botella reales.',
    logs: [
      'Análisis de histórico de SKUs y throughput diario',
      'Medición de KPIs actuales: errores, tiempos, espacio usado',
      'Documentación de restricciones del layout existente',
    ],
  },
  {
    tag: 'Fase 03',
    icon: Cpu,
    title: 'Diseño y propuesta',
    subtitle: 'Selección tecnológica + ROI proyectado',
    detail: 'Evaluamos alternativas tecnológicas según el perfil de la operación. Calculamos el TCO a 10 años y el retorno de inversión proyectado para seleccionar la solución óptima. La propuesta incluye layout 3D y simulación de flujos.',
    logs: [
      'Evaluación de tecnologías ASRS aplicables al caso',
      'Cálculo TCO 10 años y ROI proyectado con supuestos transparentes',
      'Propuesta técnica y comercial con layout 3D incluido',
    ],
  },
  {
    tag: 'Fase 04',
    icon: Wrench,
    title: 'Instalación',
    subtitle: 'Ingeniería de detalle + montaje certificado',
    detail: 'Coordinamos la ingeniería de detalle, la instalación mecánica y eléctrica, la integración con el ERP/WMS existente y las pruebas de aceptación FAT (en fábrica) y SAT (en sitio) antes del arranque.',
    logs: [
      'Instalación mecánica y eléctrica con equipo certificado',
      'Integración con ERP/WMS del cliente (SAP, Oracle y otros)',
      'FAT en fábrica y SAT en sitio antes del arranque operativo',
    ],
  },
  {
    tag: 'Fase 05',
    icon: Rocket,
    title: 'Puesta en marcha',
    subtitle: 'Arranque operativo asistido',
    detail: 'Acompañamos el arranque con soporte técnico directo y ajuste de parámetros en tiempo real. Los primeros días estamos presentes in-situ para garantizar una transición sin fricciones y capacitar al personal.',
    logs: [
      'Soporte in-situ durante los primeros días operativos',
      'Ajuste de parámetros y calibración fina del sistema',
      'Capacitación final del personal operativo y supervisores',
    ],
  },
  {
    tag: 'Fase 06',
    icon: HeadphonesIcon,
    title: 'Soporte y optimización',
    subtitle: 'Servicio posventa permanente',
    detail: 'Monitoreo remoto de KPIs, mantenimiento preventivo programado y soporte técnico local 24/7. Análisis continuo de datos reales para optimizar el sistema y maximizar el retorno a lo largo de toda la vida útil del equipo.',
    logs: [
      'Monitoreo remoto de KPIs y alertas tempranas 24/7',
      'Mantenimiento preventivo programado con piezas locales',
      'Optimización continua basada en datos reales de la operación',
    ],
  },
];

/* White → slate-900 alternando */
const BG = ['bg-white', 'bg-slate-900'];
const isDark = (i) => i % 2 !== 0;

export const ComoTrabajamosPage = () => {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen text-gray-900">
      <Helmet>
        <title>Cómo Trabajamos | Proyecto ASRS Llave en Mano | STOKA</title>
        <meta name="description" content="Metodología de 6 pasos: consulta, ingeniería, instalación y soporte posventa. Proyectos ASRS llave en mano en Argentina y Chile." />
        <meta property="og:title" content="Cómo Trabajamos | Proyecto ASRS Llave en Mano | STOKA Argentina" />
        <meta property="og:description" content="Metodología de 6 pasos para proyectos ASRS llave en mano: consulta, ingeniería, fabricación, instalación, integración y soporte." />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.stokagroup.com/como-trabajamos" />
        <link rel="canonical" href="https://www.stokagroup.com/como-trabajamos" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Cómo trabajamos", "item": "https://www.stokagroup.com/como-trabajamos" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Implementación de Sistemas ASRS Llave en Mano — STOKA Argentina",
          "description": "Metodología de 6 fases para automatizar tu almacén: consulta, diagnóstico, diseño, instalación, puesta en marcha y soporte posventa continuo en Argentina y Chile.",
          "provider": { "@id": "https://www.stokagroup.com/#organization" },
          "areaServed": [{ "@type": "Country", "name": "Argentina" }, { "@type": "Country", "name": "Chile" }],
          "serviceType": "Integración ASRS Llave en Mano",
          "url": "https://www.stokagroup.com/como-trabajamos"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Cómo implementar un proyecto ASRS llave en mano con STOKA",
          "description": "Proceso de 6 fases para automatizar tu almacén: desde la consulta inicial hasta el soporte posventa continuo.",
          "totalTime": "P6M",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Consulta inicial", "text": "Completás el formulario de contacto o nos escribís directamente. En menos de 24 horas un ingeniero te responde para entender tu operación: tipo de almacén, volumen de SKUs, throughput y objetivos." },
            { "@type": "HowToStep", "position": 2, "name": "Diagnóstico técnico", "text": "Analizamos datos históricos de movimientos, catálogo de SKUs, picos de demanda y layout existente. Medimos los KPIs actuales para establecer la línea base del proyecto." },
            { "@type": "HowToStep", "position": 3, "name": "Diseño y propuesta", "text": "Evaluamos alternativas tecnológicas según el perfil de la operación. Calculamos el TCO a 10 años y el ROI proyectado. La propuesta incluye layout 3D y simulación de flujos." },
            { "@type": "HowToStep", "position": 4, "name": "Instalación", "text": "Coordinamos ingeniería de detalle, instalación mecánica y eléctrica, integración con ERP/WMS existente y pruebas de aceptación FAT y SAT." },
            { "@type": "HowToStep", "position": 5, "name": "Puesta en marcha", "text": "Acompañamos el arranque con soporte técnico directo, ajuste de parámetros en tiempo real y capacitación del personal operativo." },
            { "@type": "HowToStep", "position": 6, "name": "Soporte y optimización", "text": "Monitoreo remoto de KPIs, mantenimiento preventivo programado y soporte técnico local 24/7. Optimización continua basada en datos reales." }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <div className="relative mt-20 h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src="/gxo-2023.jpg"
          alt="Almacén automatizado STOKA"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-slate-400">Cómo trabajamos</span>
            </nav>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-4">
              Metodología · 6 fases
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[1.05] mb-5">
              De la consulta<br />
              <span className="text-cyan-400">al arranque</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Un proceso estructurado en 6 fases que garantiza resultados predecibles, sin sorpresas y con soporte técnico local en cada etapa.
            </p>
            <div className="flex flex-wrap gap-3">
              {STEPS.map((s, i) => (
                <span key={i} className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                  <s.icon size={12} className="text-cyan-400" />
                  {s.tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* STEPS */}
      {STEPS.map((s, i) => {
        const dark = isDark(i);
        return (
          <section key={i} className={`py-20 px-6 border-b ${dark ? 'bg-slate-900 border-white/5' : 'bg-white border-gray-100'}`}>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className="grid md:grid-cols-[200px_1fr] gap-10 items-start"
              >
                {/* LEFT — número + icono + tag */}
                <div className="flex flex-col gap-4">
                  <span className={`text-[88px] font-black italic leading-none select-none ${dark ? 'text-white/8' : 'text-gray-100'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${dark ? 'bg-cyan-400/10 border-cyan-400/20' : 'bg-cyan-50 border-cyan-200'}`}>
                    <s.icon size={24} className={dark ? 'text-cyan-400' : 'text-cyan-500'} />
                  </div>
                  <div>
                    <span className={`inline-block text-[11px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full ${dark ? 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-600'}`}>
                      {s.tag}
                    </span>
                    <p className={`text-xs mt-2 font-mono ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{s.subtitle}</p>
                  </div>
                </div>

                {/* RIGHT — contenido */}
                <div className="pt-2">
                  <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-5 ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {s.title}
                  </h2>
                  <p className={`text-base leading-relaxed mb-8 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {s.detail}
                  </p>
                  <div className={`border-t pt-6 space-y-3 ${dark ? 'border-white/8' : 'border-gray-100'}`}>
                    {s.logs.map((log, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle size={15} className={`mt-0.5 shrink-0 ${dark ? 'text-cyan-400' : 'text-cyan-500'}`} />
                        <p className={`text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{log}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4">¿Listo para empezar?</p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-5">
            Consulta<br />
            <span className="text-cyan-500">sin costo</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            En 24 horas tenés una respuesta técnica de nuestro equipo de ingeniería, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contacto')} style={{ outline: 'none' }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Solicitar consulta técnica <ArrowRight size={14} />
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

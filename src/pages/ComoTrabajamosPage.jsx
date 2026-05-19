import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WppFloat } from '../components/WppFloat';
import { Search, FileText, Cpu, Wrench, Rocket, HeadphonesIcon, ArrowRight } from 'lucide-react';

const STEPS = [
  { icon: Search,          tag: 'FASE 01', title: 'Consulta inicial',           subtitle: 'Sin costo — en 24 horas',         detail: 'Completás el formulario de contacto o nos escribís directamente. En menos de 24 horas un ingeniero te responde para entender tu operación a alto nivel: tipo de almacén, volumen de SKUs, throughput y objetivos.', logs: ['Reunión/llamada de 30 minutos con el equipo', 'Cuestionario técnico inicial enviado', 'Primera orientación tecnológica sin costo'] },
  { icon: FileText,        tag: 'FASE 02', title: 'Diagnóstico técnico',        subtitle: 'Relevamiento in-situ o remoto',    detail: 'Analizamos datos históricos de movimientos, catálogo de SKUs, picos de demanda y layout existente. Medimos KPIs actuales para establecer la línea base del proyecto.', logs: ['Análisis de histórico de SKUs y throughput', 'Medición de KPIs actuales: errores, tiempos, espacio', 'Documentación de restricciones del layout existente'] },
  { icon: Cpu,             tag: 'FASE 03', title: 'Diseño y propuesta',         subtitle: 'Selección tecnológica + ROI',      detail: 'Evaluamos alternativas tecnológicas según el perfil de la operación. Calculamos el TCO a 10 años y el retorno de inversión proyectado para seleccionar la solución óptima.', logs: ['Evaluación de tecnologías ASRS aplicables', 'Cálculo TCO 10 años y ROI proyectado', 'Propuesta técnica y comercial con layout 3D'] },
  { icon: Wrench,          tag: 'FASE 04', title: 'Instalación',                subtitle: 'Ingeniería de detalle + montaje',  detail: 'Coordinamos la ingeniería de detalle, la instalación mecánica y eléctrica, la integración con el ERP/WMS del cliente y las pruebas de aceptación FAT y SAT.', logs: ['Instalación mecánica y eléctrica certificada', 'Integración con ERP/WMS del cliente', 'FAT en fábrica y SAT en sitio completados'] },
  { icon: Rocket,          tag: 'FASE 05', title: 'Puesta en marcha',           subtitle: 'Arranque operativo asistido',      detail: 'Acompañamos el arranque operativo con soporte técnico directo y ajuste de parámetros. Los primeros días estamos presentes in-situ para garantizar una transición sin fricciones.', logs: ['Soporte in-situ durante los primeros días', 'Ajuste de parámetros y calibración del sistema', 'Capacitación final del personal operativo'] },
  { icon: HeadphonesIcon,  tag: 'FASE 06', title: 'Soporte y optimización',     subtitle: 'Servicio posventa permanente',     detail: 'Monitoreo remoto de KPIs, mantenimiento preventivo programado y soporte técnico local 24/7. Análisis continuo para maximizar el retorno a lo largo de la vida útil del equipo.', logs: ['Monitoreo remoto de KPIs 24/7', 'Mantenimiento preventivo programado', 'Optimización continua basada en datos reales'] },
];

export const ComoTrabajamosPage = () => {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  useEffect(() => {
    document.title = 'Cómo Trabajamos — Metodología ASRS | Optexa Argentina';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="pt-28">

        <section className="py-16 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">Metodología de trabajo</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-5">
                De la consulta al{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
                  arranque operativo
                </span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl font-light leading-relaxed">
                Un proceso estructurado en 6 fases que garantiza resultados predecibles, sin sorpresas y con soporte en cada etapa.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 px-6 pb-24 bg-zinc-900 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-start">

              <div className="lg:col-span-2 flex flex-col gap-2">
                {STEPS.map((s, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{ outline: 'none' }}
                    className={['w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200',
                      active === i ? 'bg-zinc-900 border-cyan-400/50' : 'bg-transparent border-white/10 hover:border-white/20 hover:bg-zinc-900/50',
                    ].join(' ')}>
                    <div className={['w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all',
                      active === i ? 'bg-cyan-400/10 border border-cyan-400/20 text-cyan-400' : 'bg-white/5 border border-white/10 text-white/35',
                    ].join(' ')}><s.icon size={18} /></div>
                    <div className="text-left min-w-0">
                      <p className={['text-[10px] font-bold uppercase tracking-widest mb-0.5', active === i ? 'text-cyan-400' : 'text-white/35'].join(' ')}>{s.tag}</p>
                      <p className={['font-black uppercase tracking-tight text-sm truncate', active === i ? 'text-white' : 'text-white/60'].join(' ')}>{s.title}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                  <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}
                    className="bg-zinc-950 border border-cyan-400/20 rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                          <step.icon size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">{step.tag} — {step.subtitle}</p>
                          <h3 className="text-xl font-black text-white uppercase tracking-tight">{step.title}</h3>
                        </div>
                      </div>
                      <span className="text-5xl font-black text-white/10 leading-none">0{active + 1}</span>
                    </div>
                    <p className="text-white/60 leading-relaxed text-base mb-6 font-light">{step.detail}</p>
                    <div className="space-y-2.5 border-t border-white/8 pt-5">
                      {step.logs.map((log, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <p className="text-white/60 text-sm">{log}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-1.5">
                      {STEPS.map((_, i) => (
                        <button key={i} onClick={() => setActive(i)} style={{ outline: 'none' }}
                          className={['flex-1 h-1 rounded-full transition-all duration-300', i === active ? 'bg-cyan-400' : 'bg-white/10'].join(' ')} />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">¿Listo para empezar?</h2>
            <p className="text-white/60 mb-8">La primera consulta es sin costo. En 24 horas tenés una respuesta técnica de nuestro equipo.</p>
            <a href="/#contacto"
              className="inline-flex items-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Solicitar consulta técnica <ArrowRight size={14} />
            </a>
          </div>
        </section>
      </main>
      <WppFloat />
      <Footer />
    </div>
  );
};

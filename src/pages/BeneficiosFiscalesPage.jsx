import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WppFloat } from '../components/WppFloat';
import { Shield, Percent, Building2, CheckCircle, ArrowRight, FileText } from 'lucide-react';

const BENEFICIOS = [
  {
    icon: Shield, tag: 'RIGI', subtitle: 'Ley 27.742 — Vigente',
    title: 'Régimen de Incentivo para Grandes Inversiones',
    description: 'El RIGI establece un régimen unificado para grandes inversiones en Argentina que ofrece estabilidad fiscal, cambiaria y regulatoria a largo plazo. Los proyectos de automatización industrial que califiquen acceden a beneficios impositivos significativos.',
    items: ['Estabilidad fiscal por 30 años desde la adhesión', 'Amortización acelerada de bienes de capital: 100% en el primer ejercicio', 'Deducción inmediata del IVA de las importaciones habilitadas', 'Libre disponibilidad de divisas a partir del tercer año', 'Tasa de Impuesto a las Ganancias reducida: 25% (vs. 35% general)', 'Exención del Impuesto a los Débitos y Créditos Bancarios'],
  },
  {
    icon: Percent, tag: 'Decreto 513/2025', subtitle: 'Decreto del Ejecutivo Nacional — 2025',
    title: 'Importación de Equipos con Arancel 0%',
    description: 'El Decreto 513/2025 establece la eliminación de aranceles de importación para sistemas de automatización de almacenes y robótica industrial. Permite importar los equipos DELIE sin el costo adicional del arancel.',
    items: ['Arancel 0% para posiciones arancelarias de robots industriales y ASRS', 'Aplicable a transelevadores, robots lanzadera, AMR y VLM', 'Transportadores, elevadores y sistemas de conveyors incluidos', 'Software WMS/WCS y hardware de control también beneficiado', 'Vigencia sujeta a revisión anual por el Ejecutivo'],
  },
  {
    icon: Building2, tag: 'Línea BICE', subtitle: 'Banco de Inversión y Comercio Exterior',
    title: 'Financiamiento para Automatización Industrial',
    description: 'El BICE ofrece una línea específica para proyectos de modernización y automatización de procesos productivos y logísticos con condiciones preferenciales.',
    items: ['Plazos de hasta 10 años para proyectos de automatización', 'Tasa de interés preferencial según perfil del proyecto', 'Financiamiento de hasta el 80% del valor total del proyecto', 'Período de gracia de hasta 2 años sobre el capital', 'Aplicable a empresas PYME y grandes empresas', 'Gestión a través de bancos comerciales adheridos'],
  },
];

const FAQ = [
  { q: '¿Mi empresa puede acceder al RIGI?', a: 'El RIGI aplica a proyectos de inversión mayores a USD 200 millones. Para proyectos más pequeños, existen esquemas provinciales y municipales con beneficios similares. Consultanos por tu caso específico.' },
  { q: '¿El Decreto 513/2025 aplica a todos los equipos DELIE?', a: 'Aplica a las posiciones arancelarias específicas de robots industriales y sistemas automatizados de almacenamiento. La mayoría de los productos del catálogo DELIE están incluidos. Verificamos esto para cada proyecto.' },
  { q: '¿Cómo accedo a la línea BICE?', a: 'A través de un banco comercial adherido (Banco Nación, Banco Provincia, entre otros). Optexa puede acompañarte en la elaboración del proyecto técnico requerido por el banco.' },
  { q: '¿Se pueden combinar los beneficios?', a: 'Sí, en muchos casos es posible acceder simultáneamente a la importación con arancel 0% y al financiamiento BICE. La compatibilidad con el RIGI depende del perfil del proyecto.' },
];

export const BeneficiosFiscalesPage = () => {
  useEffect(() => {
    document.title = 'Beneficios Fiscales 2025 — RIGI, Decreto 513, BICE | Optexa Argentina';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="pt-28">

        <section className="py-20 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">Marco normativo · Argentina 2025</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Invertí con el{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
                  Estado a favor
                </span>
              </h1>
              <p className="text-white/60 text-xl max-w-3xl font-light leading-relaxed">
                El contexto normativo actual crea condiciones únicas para automatizar operaciones logísticas en Argentina.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 px-6 bg-zinc-900 border-t border-white/5">
          <div className="max-w-5xl mx-auto space-y-6">
            {BENEFICIOS.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-950 border border-white/8 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                    <b.icon size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-full">{b.tag}</span>
                      <span className="text-[11px] text-white/35 font-mono">{b.subtitle}</span>
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">{b.title}</h2>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed mb-6">{b.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {b.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">Preguntas frecuentes</p>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white">FAQ</h2>
            </div>
            <div className="space-y-4">
              {FAQ.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-zinc-900 border border-white/8 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                    <h3 className="text-white font-bold text-sm">{item.q}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed pl-7">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-900 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">¿Qué aplica a tu proyecto?</h2>
            <p className="text-white/60 mb-8 leading-relaxed">Nuestro equipo analiza gratuitamente qué beneficios podés aprovechar según el tipo y escala de tu proyecto.</p>
            <a href="/#contacto" className="inline-flex items-center gap-2 px-10 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Consultá con nuestro equipo <ArrowRight size={14} />
            </a>
          </div>
        </section>
      </main>
      <WppFloat />
      <Footer />
    </div>
  );
};

import { motion } from 'framer-motion';
import { Shield, Percent, Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ITEMS = [
  {
    icon: Shield,
    tag: 'RIGI',
    title: 'Estabilidad fiscal 30 años',
    body: 'Amortización acelerada, estabilidad tributaria por 3 décadas y deducción inmediata de IVA para proyectos de automatización industrial.',
  },
  {
    icon: Percent,
    tag: 'Decreto 513/2025',
    title: 'Importación de equipos arancel 0%',
    body: 'Sistemas ASRS, robots y equipos de automatización de almacenes ingresan sin aranceles de importación bajo este régimen.',
  },
  {
    icon: Building2,
    tag: 'Línea BICE',
    title: 'Financiamiento hasta 10 años',
    body: 'Línea del Banco de Inversión con tasas preferenciales y plazos de hasta 10 años para proyectos de automatización industrial.',
  },
];

export const BeneficiosBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 z-20 bg-slate-900 overflow-hidden">
      {/* Subtle cyan glow */}
      <div className="absolute top-0 left-1/4 w-96 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        <div className="mb-12 text-center">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">
            Beneficios fiscales · Argentina 2025
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Invertí con el{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
            >
              Estado a favor
            </span>
          </h2>
          <p className="mt-5 text-white/50 max-w-xl mx-auto font-light leading-relaxed">
            El marco normativo argentino en 2025 crea condiciones únicas para automatizar tu operación logística.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-400/25 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-cyan-400" />
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-white font-bold text-sm leading-tight mb-2 uppercase tracking-tight">{item.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Concrete savings example */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 border border-cyan-400/20 rounded-2xl p-6 bg-white/5 text-center"
        >
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase mb-4">Ejemplo · Proyecto de USD 1.8M</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div>
              <p className="text-4xl md:text-5xl font-black text-white leading-none">USD 604.800</p>
              <p className="text-white/50 text-sm mt-2">en beneficios fiscales combinados</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                Decreto 513: <span className="text-white font-semibold">arancel 0% en equipos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                RIGI: <span className="text-white font-semibold">Ganancias al 25% (vs. 35%)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                BICE: <span className="text-white font-semibold">financiamiento hasta 10 años</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <button
            onClick={() => navigate('/beneficios-fiscales')}
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 rounded-xl text-white/80 text-sm font-bold hover:bg-white/10 hover:text-white transition-all group"
          >
            Ver guía completa de beneficios
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

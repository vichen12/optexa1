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
    title: 'Aranceles reducidos para bienes de capital',
    body: 'Los sistemas ASRS y equipos de automatización pueden acceder a aranceles reducidos o nulos según su clasificación arancelaria (Decreto 513/2025).',
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
    <section className="relative py-24 px-6 z-20 bg-white overflow-hidden">

      <div className="max-w-6xl mx-auto relative">

        <div className="mb-12 text-center">
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
            Beneficios fiscales · Argentina 2026
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
            Invertí con el{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
            >
              Estado a favor
            </span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
            El marco normativo argentino en 2026 crea condiciones únicas para automatizar tu operación logística.
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
              className="border border-gray-200 rounded-2xl p-6 bg-gray-100 hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-cyan-500" />
                </div>
                <span className="text-[10px] font-mono text-cyan-600 bg-cyan-50 border border-cyan-200 px-2 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-gray-900 font-bold text-sm leading-tight mb-2 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Concrete savings example */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 border border-gray-200 rounded-2xl p-6 bg-gray-100 text-center"
        >
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.4em] uppercase mb-4">Beneficios combinables en el mismo proyecto</p>
          <p className="text-gray-600 text-base leading-relaxed mb-2">El ahorro real depende de la estructura fiscal de cada empresa.</p>
          <p className="text-gray-400 text-sm">Te ayudamos a evaluarlo sin cargo.</p>
        </motion.div>

        <div className="text-center">
          <button
            onClick={() => navigate('/beneficios-fiscales')}
            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-xl text-gray-600 text-sm font-bold hover:bg-gray-200 hover:text-gray-900 transition-all group"
          >
            Ver guía completa de beneficios
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

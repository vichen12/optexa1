import { motion } from 'framer-motion';
import { Factory, CircleDollarSign, Wrench } from 'lucide-react';

const PILLARS = [
  {
    icon: Factory,
    tag: '01',
    title: 'Fabricante directo',
    body: 'DELIE es fabricante, no revendedor. Garantía directa, soporte técnico de primera línea y acceso a piezas originales sin intermediarios ni demoras.',
    stat: '1.000+',
    statLabel: 'instalaciones en el mundo',
  },
  {
    icon: CircleDollarSign,
    tag: '02',
    title: '30–50% más económico',
    body: 'Misma tecnología que Europa y EE.UU., con los costos de manufactura china y comercialización local. El precio deja de ser la barrera.',
    stat: '30–50%',
    statLabel: 'vs. soluciones europeas',
  },
  {
    icon: Wrench,
    tag: '03',
    title: 'Ingeniería local',
    body: 'Equipo en Argentina. Proyectos llave en mano: diseño, instalación, integración WMS/WCS, capacitación y soporte posventa en tu idioma.',
    stat: '24/7',
    statLabel: 'soporte técnico local',
  },
];

export const PropuestaDeValor = () => (
  <section className="relative py-24 px-6 z-20 bg-zinc-900">
    <div className="max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">
          Por qué Optexa
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
          La diferencia que{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
          >
            importa
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative bg-zinc-950 border border-white/8 rounded-2xl p-8 hover:border-cyan-400/35 transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute top-4 right-4 text-[10px] font-mono text-white/15">//{p.tag}</div>

            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6">
              <p.icon size={22} className="text-cyan-400" />
            </div>

            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{p.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6">{p.body}</p>

            <div className="pt-5 border-t border-white/8">
              <p className="text-2xl font-black text-cyan-400 leading-none">{p.stat}</p>
              <p className="text-[11px] text-white/35 mt-1">{p.statLabel}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

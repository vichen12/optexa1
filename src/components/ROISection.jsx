import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, Layers3, ArrowRight } from 'lucide-react';

const METRICS = [
  { icon: TrendingUp, value: '40%',    label: 'Reducción de costos',       desc: 'Menos errores, menos labor intensiva, menos mermas.' },
  { icon: Target,     value: '99.9%',  label: 'Exactitud de inventario',   desc: 'Trazabilidad total por lote, FIFO garantizado.' },
  { icon: Layers3,    value: '3x',     label: 'Densidad de almacenamiento', desc: 'Mismo espacio físico, hasta 3 veces más SKUs.' },
  { icon: Clock,      value: '18–36',  label: 'Meses de payback',          desc: 'Retorno de inversión comprobado en operaciones reales.' },
];

export const ROISection = () => (
  <section className="relative py-24 px-6 z-20 bg-zinc-950 border-t border-white/5">
    <div className="max-w-6xl mx-auto">

      <div className="mb-16 text-center">
        <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">
          Retorno de inversión
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
          La automatización{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
          >
            se paga sola
          </span>
        </h2>
        <p className="mt-5 text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Los números reales de una operación que automatizó con DELIE.
        </p>
      </div>

      {/* CONCRETE EXAMPLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 bg-zinc-900 border border-white/8 rounded-3xl p-8 md:p-10"
      >
        <p className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase mb-6">Ejemplo real · Almacén de distribución</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center bg-zinc-950 border border-white/8 rounded-2xl p-6">
            <p className="text-[11px] font-bold text-white/35 uppercase tracking-widest mb-4">Espacio utilizado</p>
            <div className="flex items-center justify-center gap-3">
              <div>
                <p className="text-3xl font-black text-white/25 line-through leading-none">10.000</p>
                <p className="text-[11px] text-white/30 mt-1">m² antes</p>
              </div>
              <ArrowRight size={18} className="text-cyan-400 shrink-0" />
              <div>
                <p className="text-3xl font-black text-cyan-400 leading-none">1.500</p>
                <p className="text-[11px] text-white/50 mt-1">m² después</p>
              </div>
            </div>
            <div className="mt-4 inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              <p className="text-[11px] font-bold text-cyan-300">–85% de superficie</p>
            </div>
          </div>

          <div className="text-center bg-zinc-950 border border-white/8 rounded-2xl p-6">
            <p className="text-[11px] font-bold text-white/35 uppercase tracking-widest mb-4">Ahorro mensual en alquiler</p>
            <p className="text-4xl font-black text-cyan-400 leading-none">USD 68.000</p>
            <p className="text-[11px] text-white/40 mt-2">por mes</p>
            <div className="mt-4 inline-block px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
              <p className="text-[11px] font-bold text-emerald-300">USD 816.000 / año</p>
            </div>
          </div>

          <div className="text-center bg-zinc-950 border border-white/8 rounded-2xl p-6">
            <p className="text-[11px] font-bold text-white/35 uppercase tracking-widest mb-4">Payback de la inversión</p>
            <p className="text-4xl font-black text-cyan-400 leading-none">18–36</p>
            <p className="text-[11px] text-white/40 mt-2">meses</p>
            <div className="mt-4 inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              <p className="text-[11px] font-bold text-cyan-300">Sin ampliar la planta</p>
            </div>
          </div>
        </div>

        <p className="text-center text-white/35 text-sm">
          Basado en tarifa de alquiler industrial de <span className="font-semibold text-white/60">USD 8/m²/mes</span> y operación 24/7.
        </p>
      </motion.div>

      {/* Metric cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-zinc-900 border border-white/8 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-4">
              <m.icon size={22} className="text-cyan-400" />
            </div>
            <p className="text-4xl font-black text-cyan-400 leading-none mb-2">{m.value}</p>
            <p className="text-white font-bold text-sm uppercase tracking-tight mb-3">{m.label}</p>
            <p className="text-white/45 text-xs leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

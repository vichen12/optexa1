import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, Layers3, ArrowRight } from 'lucide-react';

const METRICS = [
  { icon: TrendingUp, value: '40%',    label: 'Reducción de costos',       desc: 'Menos errores, menos labor intensiva, menos mermas.' },
  { icon: Target,     value: '99.9%',  label: 'Exactitud de inventario',   desc: 'Trazabilidad total por lote, FIFO garantizado.' },
  { icon: Layers3,    value: '3x',     label: 'Densidad de almacenamiento', desc: 'Mismo espacio físico, hasta 3 veces más SKUs.' },
  { icon: Clock,      value: '18–36',  label: 'Meses de payback',          desc: 'Retorno de inversión comprobado en operaciones reales.' },
];

export const ROISection = () => (
  <section className="relative py-24 px-6 z-20 bg-white border-t border-gray-100">
    <div className="max-w-6xl mx-auto">

      <div className="mb-16 text-center">
        <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">
          Retorno de inversión
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
          La automatización{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}
          >
            se paga sola
          </span>
        </h2>
        <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Los números reales de una operación que automatizó con DELIE.
        </p>
      </div>

      {/* CONCRETE EXAMPLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10"
      >
        <p className="text-[10px] font-mono text-cyan-500 tracking-[0.4em] uppercase mb-6">Ejemplo real · Almacén de distribución</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Espacio utilizado</p>
            <div className="flex items-center justify-center gap-3">
              <div>
                <p className="text-3xl font-black text-slate-300 line-through leading-none">10.000</p>
                <p className="text-[11px] text-slate-400 mt-1">m² antes</p>
              </div>
              <ArrowRight size={18} className="text-cyan-500 shrink-0" />
              <div>
                <p className="text-3xl font-black text-slate-900 leading-none">1.500</p>
                <p className="text-[11px] text-slate-500 mt-1">m² después</p>
              </div>
            </div>
            <div className="mt-4 inline-block px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full">
              <p className="text-[11px] font-bold text-cyan-600">–85% de superficie</p>
            </div>
          </div>

          <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Ahorro mensual en alquiler</p>
            <p className="text-4xl font-black text-slate-900 leading-none">USD 68.000</p>
            <p className="text-[11px] text-slate-400 mt-2">por mes</p>
            <div className="mt-4 inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full">
              <p className="text-[11px] font-bold text-emerald-600">USD 816.000 / año</p>
            </div>
          </div>

          <div className="text-center bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Payback de la inversión</p>
            <p className="text-4xl font-black text-slate-900 leading-none">18–36</p>
            <p className="text-[11px] text-slate-400 mt-2">meses</p>
            <div className="mt-4 inline-block px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full">
              <p className="text-[11px] font-bold text-cyan-600">Sin ampliar la planta</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm">
          Basado en tarifa de alquiler industrial de <span className="font-semibold text-gray-600">USD 8/m²/mes</span> y operación 24/7.
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
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto mb-4">
              <m.icon size={22} className="text-cyan-500" />
            </div>
            <p className="text-4xl font-black text-slate-900 leading-none mb-2">{m.value}</p>
            <p className="text-slate-700 font-bold text-sm uppercase tracking-tight mb-3">{m.label}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

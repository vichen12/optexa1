import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, FileText, Wrench, HeadphonesIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../lib/i18n';

const ICONS = [Scan, FileText, Wrench, HeadphonesIcon];
const ACCENT = ['cyan', 'blue', 'emerald', 'violet'];

export const Process = () => {
  const [active, setActive] = useState(0);
  const { t, lang } = useLanguage();
  const p = t.process;

  const steps = p.steps.map((s, i) => ({ ...s, icon: ICONS[i], accent: ACCENT[i] }));

  return (
    <section
      id="proceso"
      className="py-28 px-6 relative z-10 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">{p.badge}</p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            {p.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {p.titleGrad}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* LISTA DE PASOS — columna izquierda */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-250",
                    isActive
                      ? `bg-[#02040a]/90 border-${step.accent}-500/40 shadow-lg`
                      : "bg-transparent border-white/5 hover:border-white/15 hover:bg-white/3"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-250",
                    isActive
                      ? `bg-${step.accent}-500/15 text-${step.accent}-400`
                      : "bg-white/5 text-white/30"
                  )}>
                    <step.icon size={18} />
                  </div>
                  <div className="text-left">
                    <p className={cn(
                      "text-[10px] font-bold uppercase tracking-widest mb-0.5",
                      isActive ? `text-${step.accent}-400` : "text-white/25"
                    )}>
                      {String(i + 1).padStart(2, '0')} — {step.tag}
                    </p>
                    <p className={cn(
                      "font-black uppercase tracking-tight text-sm",
                      isActive ? "text-white" : "text-white/50"
                    )}>
                      {step.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* DETALLE — columna derecha */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className={`bg-[#02040a]/80 border border-${steps[active].accent}-500/20 rounded-3xl p-8 shadow-xl`}
              >
                {/* Número de paso */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex items-center gap-3`}>
                    <div className={`w-11 h-11 rounded-xl bg-${steps[active].accent}-500/10 border border-${steps[active].accent}-500/20 flex items-center justify-center text-${steps[active].accent}-400`}>
                      {(() => { const Icon = steps[active].icon; return <Icon size={20} />; })()}
                    </div>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-widest text-${steps[active].accent}-400`}>
                        {lang === 'zh' ? `第${active + 1}步 / 共${steps.length}步` : lang === 'en' ? `Step ${active + 1} of ${steps.length}` : `Paso ${active + 1} de ${steps.length}`}
                      </p>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight">
                        {steps[active].title}
                      </h3>
                    </div>
                  </div>
                  <span className={`text-5xl font-black text-${steps[active].accent}-500/15 leading-none`}>
                    0{active + 1}
                  </span>
                </div>

                <p className="text-white/65 leading-relaxed text-base mb-6 font-light">
                  {steps[active].detail}
                </p>

                {/* Puntos clave */}
                <div className="space-y-2.5 border-t border-white/5 pt-5">
                  {steps[active].logs.map((log, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${steps[active].accent}-400 shrink-0`} />
                      <p className="text-white/50 text-sm">{log.replace(/^>\s*/, '')}</p>
                    </div>
                  ))}
                </div>

                {/* Barra de progreso de pasos */}
                <div className="mt-6 flex gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={cn(
                        "flex-1 h-1 rounded-full transition-all duration-300",
                        i === active ? `bg-${steps[active].accent}-400` : "bg-white/10"
                      )}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --cyan-400: #22d3ee; --cyan-500: #06b6d4;
          --blue-400: #60a5fa; --blue-500: #3b82f6;
          --emerald-400: #34d399; --emerald-500: #10b981;
          --violet-400: #a78bfa; --violet-500: #8b5cf6;
        }
      ` }} />
    </section>
  );
};

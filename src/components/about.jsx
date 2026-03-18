import { motion } from 'framer-motion';
import { GraduationCap, Linkedin } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export const About = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="nosotros" className="relative py-28 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div className="text-right md:text-right w-full">
            <p className="text-emerald-400/60 text-[10px] font-mono tracking-[0.5em] uppercase mb-2">
              TEAM —
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              {a.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {a.titleGrad}
              </span>
            </h2>
          </div>
        </motion.div>

        {/* FOUNDERS GRID */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {a.founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
              className="relative rounded-3xl overflow-hidden group cursor-default h-[480px] md:h-[520px]"
            >
              {/* Full-bleed photo */}
              <img
                src={founder.image}
                alt={founder.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

              {/* LinkedIn icon — top right, appears on hover */}
              <a
                href={founder.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { if (!founder.linkedin) e.preventDefault(); }}
                className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 hover:text-white hover:bg-white/20"
                aria-label={`LinkedIn de ${founder.name}`}
              >
                <Linkedin size={16} />
              </a>

              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                {/* Role badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-3
                    ${founder.color === 'emerald'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/25'
                      : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/25'
                    }`}
                >
                  {founder.role}
                </span>

                {/* Name */}
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                  {founder.name}
                </h3>

                {/* Status */}
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={12} className="text-white/35 shrink-0" />
                  <span className="text-white/35 text-[11px] font-mono">{founder.status}</span>
                </div>

                {/* Bio */}
                <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-sm">
                  {founder.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {founder.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/12 text-white/55 text-[10px] font-bold uppercase tracking-wider rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MANIFESTO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#02040a]/70 backdrop-blur-sm border border-emerald-500/15 rounded-3xl p-10 md:p-14 relative overflow-hidden"
        >
          {/* Giant decorative quote mark */}
          <span className="absolute -top-4 left-8 text-[10rem] font-black text-emerald-400/6 leading-none select-none pointer-events-none">
            "
          </span>

          <p className="relative text-2xl md:text-4xl text-white font-black leading-snug tracking-tight max-w-3xl italic">
            {a.manifesto}
          </p>

          {/* Emerald accent bar */}
          <div className="mt-8 w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
        </motion.div>

      </div>
    </section>
  );
};

import { Mail, Linkedin, Instagram, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  const f = t.footer;

  const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=stokkamza@gmail.com&su=Consulta%20desde%20la%20web';
  const devLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=vichendallape@gmail.com&su=Propuesta%20Web';

  return (
    <>
      {/* Gradient fade from page content into footer */}
      <div className="h-56 bg-gradient-to-b from-transparent via-[#070d1b]/70 to-[#070d1b] pointer-events-none" />
      <footer className="relative pt-4 pb-0 px-6 bg-[#070d1b] z-20 border-t border-white/4 overflow-hidden">
      {/* STOKA watermark background */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <p className="text-[22vw] font-black italic text-white/[0.03] tracking-tighter leading-none text-center whitespace-nowrap">
          STOKA
        </p>
      </div>

      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <Zap size={22} className="text-cyan-400" />
              </div>
              <span className="text-2xl font-black italic text-white uppercase tracking-tight">STOKA</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed">{f.tagline}</p>
            <a href={gmailLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-cyan-400 transition-colors text-sm font-mono">
              <Mail size={14} />stokkamza@gmail.com
            </a>
            <div className="flex gap-3">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">{f.systemsLabel}</p>
            <ul className="space-y-3">
              {f.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href}
                    className="flex items-center gap-2 text-white/45 hover:text-white transition-colors text-sm group">
                    <span className="w-1 h-1 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">Mendoza, Argentina</p>
            <a href="#contacto"
              className="flex items-center justify-between gap-4 px-5 py-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 font-bold text-sm uppercase tracking-wide hover:bg-cyan-500/15 transition-all group">
              {f.requestQuote}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/20 pb-10">
          <span>© {year} {f.rights}</span>
          <a href={devLink} target="_blank" rel="noopener noreferrer"
            className="hover:text-white/40 transition-colors font-mono">
            {f.webCredit}
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

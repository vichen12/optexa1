import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PAGE_LINKS = [
  { label: 'Catálogo de productos',  href: '/catalogo'            },
  { label: 'Industrias',             href: '/industrias'           },
  { label: 'Beneficios fiscales',    href: '/beneficios-fiscales'  },
  { label: 'Cómo trabajamos',        href: '/como-trabajamos'      },
  { label: 'Nosotros',               href: '/nosotros'             },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=dallapevincenzo@gmail.com&su=Consulta%20desde%20Optexa';

  const handlePageNav = (href) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-0 px-6 bg-zinc-950 z-20 border-t border-white/8 overflow-hidden">

      {/* OPTEXA watermark */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <p className="text-[22vw] font-black italic text-white/2.5 tracking-tighter leading-none text-center whitespace-nowrap">
          OPTEXA
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src="/OPTEXACONFONDOBLANCO.png" alt="Optexa" className="w-10 h-10 rounded-xl object-contain" />
              <span className="text-2xl font-black italic text-white uppercase tracking-tight">OPTEXA</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Representantes oficiales exclusivos de DELIE en Argentina. Automatización de almacenes ASRS de clase mundial con precios locales.
            </p>
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/45 hover:text-cyan-400 transition-colors text-sm font-mono"
            >
              <Mail size={14} />
              dallapevincenzo@gmail.com
            </a>
            <div className="flex gap-3">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* NAV LINKS */}
          <div>
            <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">Navegación</p>
            <ul className="space-y-3">
              {PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handlePageNav(link.href)}
                    style={{ outline: 'none' }}
                    className="flex items-center gap-2 text-white/45 hover:text-white transition-colors text-sm group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">Argentina · DELIE Official Rep.</p>
            <a
              href="/#contacto"
              className="flex items-center justify-between gap-4 px-5 py-4 bg-cyan-500 rounded-xl text-white font-bold text-sm uppercase tracking-wide hover:bg-cyan-400 transition-all group mb-4 shadow-[0_4px_20px_rgba(6,182,212,0.25)]"
            >
              Solicitar consulta técnica
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-white/30 text-xs leading-relaxed">
              Mendoza, Argentina. Proyectos llave en mano en todo el país.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/25 pb-10">
          <span>© {year} Optexa — Representación oficial DELIE en Argentina</span>
          <a href={gmailLink} target="_blank" rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors font-mono">
            Desarrollo web // Vincenzo Dallapé
          </a>
        </div>
      </div>
    </footer>
  );
};

import { Mail, ArrowRight, MapPin, Phone, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PAGE_LINKS = [
  { label: 'Catálogo de productos',  href: '/catalogo'            },
  { label: 'Industrias',             href: '/industrias'           },
  { label: 'Beneficios fiscales',    href: '/beneficios-fiscales'  },
  { label: 'Cómo trabajamos',        href: '/como-trabajamos'      },
  { label: 'Nosotros',               href: '/nosotros'             },
];

const MAPS_EMBED = "https://maps.google.com/maps?q=Carril+Rodr%C3%ADguez+Pe%C3%B1a+35+Maip%C3%BA+Mendoza+Argentina&output=embed";
const MAPS_LINK  = "https://maps.google.com/maps?q=Carril+Rodr%C3%ADguez+Pe%C3%B1a+35+Maip%C3%BA+Mendoza+Argentina";

export const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=stokamza.consultas@gmail.com&su=Consulta%20desde%20Stoka';

  const handlePageNav = (href) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gray-200 z-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 40%, #f8fafc 70%, #e0f2fe 100%)' }}>

      {/* STOKA watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <p className="text-[20vw] font-black italic tracking-tighter leading-none text-cyan-400/15 whitespace-nowrap">
          STOKA
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative">
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-12 mb-14">

          {/* BRAND + CONTACT */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/stoka_deliecn_logo_sin_fondo.png" alt="Stoka" className="w-56 h-28 object-contain" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Representantes oficiales exclusivos de DELIE en Argentina. Automatización de almacenes ASRS de clase mundial con precios locales.
            </p>

            <div className="space-y-2.5">
              <a href="tel:+5492615886671" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <Phone size={14} className="text-cyan-500 shrink-0" />
                +54 9 2615 88-6671
              </a>
              <a href="tel:+5492612071048" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <Phone size={14} className="text-cyan-500 shrink-0" />
                +54 9 261 207-1048
              </a>
              <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm font-mono">
                <Mail size={14} className="text-cyan-500 shrink-0" />
                stokamza.consultas@gmail.com
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <MapPin size={14} className="text-cyan-500 shrink-0" />
                Carril Rodríguez Peña 35, Maipú
              </a>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.linkedin.com/in/anuk-vilarasau-9b138237b/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={13} />
                Anuk Vilarasau
              </a>
              <span className="text-gray-200">·</span>
              <a href="https://www.linkedin.com/in/vincenzo-dallape/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={13} />
                Vincenzo Dallapé
              </a>
            </div>

          </div>

          {/* MAP — columna ancha */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">Ubicación</p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex-1 min-h-[260px]">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '260px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stoka ubicación"
              />
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-cyan-500 transition-colors"
            >
              <MapPin size={12} />
              Carril Rodríguez Peña 35, Maipú, Mendoza
              <ArrowRight size={12} />
            </a>
          </div>

          {/* NAV + CTA */}
          <div className="space-y-10">
            <div>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">Navegación</p>
              <ul className="space-y-3">
                {PAGE_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handlePageNav(link.href)}
                      style={{ outline: 'none' }}
                      className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm group"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-400/50 group-hover:bg-cyan-500 transition-colors" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Argentina · DELIE Official Rep.</p>
              <a
                href="/contacto"
                className="flex items-center justify-between gap-4 px-5 py-4 bg-cyan-500 rounded-xl text-white font-bold text-sm uppercase tracking-wide hover:bg-cyan-400 transition-all group shadow-[0_4px_20px_rgba(6,182,212,0.2)]"
              >
                Solicitar consulta técnica
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400">
          <span>© {year} Stoka — Representación oficial DELIE en Argentina</span>
          <span>Carril Rodríguez Peña 35, Maipú, Argentina</span>
          <a href={gmailLink} target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors font-mono">
            Desarrollo web // Vincenzo Dallapé
          </a>
        </div>
      </div>
    </footer>
  );
};

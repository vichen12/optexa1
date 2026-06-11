import { Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATALOGO_LINKS = [
  { label: 'Sistemas AS/RS',          href: '/catalogo/asrs' },
  { label: 'Robots de manipulación',  href: '/catalogo/robots-manipulacion' },
  { label: 'Almacenamiento vertical', href: '/catalogo/almacenamiento-vertical' },
  { label: 'Equipo de transporte',    href: '/catalogo/equipo-transporte' },
  { label: 'Software WMS / WCS',      href: '/catalogo/software' },
];

const INDUSTRIAS_LINKS = [
  { label: 'E-commerce y retail',  href: '/industrias/e-commerce-retail' },
  { label: 'Logística 3PL',        href: '/industrias/logistica-3pl' },
  { label: 'Manufactura',          href: '/industrias/manufactura' },
  { label: 'Alimentos y bebidas',  href: '/industrias/alimentos-bebidas' },
  { label: 'Farmacéutica',         href: '/industrias/farmaceutica' },
  { label: 'Minería y Oil & Gas',  href: '/industrias/mineria-oil-gas' },
  { label: 'Cadena de frío',       href: '/industrias/cadena-frio' },
];

const RECURSOS_LINKS = [
  { label: 'Glosario técnico',       href: '/recursos/glosario' },
  { label: 'Comparador de sistemas', href: '/recursos/comparador-sistemas' },
  { label: 'Blog y artículos',       href: '/recursos' },
  { label: 'Casos de éxito',         href: '/casos-de-exito' },
];

const EMPRESA_LINKS = [
  { label: 'Nosotros',              href: '/nosotros' },
  { label: 'Cómo trabajamos',       href: '/como-trabajamos' },
  { label: 'Beneficios fiscales',   href: '/beneficios-fiscales' },
  { label: 'Contacto',              href: '/contacto' },
  { label: 'DELIE en Argentina',     href: '/delie-argentina' },
];

const MAPS_EMBED = "https://maps.google.com/maps?q=Carril+Rodr%C3%ADguez+Pe%C3%B1a+35+Maip%C3%BA+Mendoza+Argentina&output=embed";
const MAPS_LINK  = "https://maps.google.com/maps?q=Carril+Rodr%C3%ADguez+Pe%C3%B1a+35+Maip%C3%BA+Mendoza+Argentina";

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <p className="text-gray-900 text-[10px] font-black uppercase tracking-[0.3em] mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="flex items-center gap-1.5 text-gray-500 hover:text-cyan-600 transition-colors text-sm group"
            >
              <ChevronRight size={11} className="text-gray-300 group-hover:text-cyan-500 transition-colors shrink-0" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 z-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 40%, #f8fafc 70%, #e0f2fe 100%)' }}>

      {/* STOKA watermark — muy sutil */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <p className="text-[18vw] font-black italic tracking-tighter leading-none text-cyan-400/10 whitespace-nowrap">
          STOKA
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10 relative">

        {/* BRAND + LINKS */}
        <div className="flex flex-col lg:flex-row gap-10 mb-10">

          {/* BRAND */}
          <div className="space-y-4 lg:w-64 shrink-0">
            <img
              src="/stoka_deliecn_logo_sin_fondo.png"
              alt="Logo STOKA — Representantes DELIE en Argentina"
              className="w-56 h-auto object-contain"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Representantes oficiales exclusivos de DELIE en Argentina y Chile. Soporte técnico 100% local.
            </p>
            <div className="space-y-2">
              <a href="tel:+5492615886671" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <Phone size={13} className="text-cyan-500 shrink-0" />
                +54 9 2615 88-6671
              </a>
              <a href="tel:+5492612071048" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <Phone size={13} className="text-cyan-500 shrink-0" />
                +54 9 261 207-1048
              </a>
              <a href="mailto:contacto@stokagroup.com" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <Mail size={13} className="text-cyan-500 shrink-0" />
                contacto@stokagroup.com
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors text-sm">
                <MapPin size={13} className="text-cyan-500 shrink-0" />
                Carril Rodríguez Peña 35, Maipú
              </a>
            </div>
          </div>

          {/* LINK GROUPS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
            <FooterLinkGroup title="Catálogo"   links={CATALOGO_LINKS} />
            <FooterLinkGroup title="Industrias" links={INDUSTRIAS_LINKS} />
            <FooterLinkGroup title="Recursos"   links={RECURSOS_LINKS} />
            <FooterLinkGroup title="Empresa"    links={EMPRESA_LINKS} />
          </div>
        </div>

        {/* MAP — compacto */}
        <div className="mb-8">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Ubicación — Mendoza, Argentina</p>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: '160px' }}>
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="160"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stoka ubicación"
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400">
          <span>© {year} STOKA — Representación oficial DELIE en Argentina</span>
          <span>Carril Rodríguez Peña 35, Maipú, Mendoza</span>
        </div>
      </div>
    </footer>
  );
};

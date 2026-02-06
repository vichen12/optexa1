import { motion } from 'framer-motion';
import { Zap, Github, Linkedin, Twitter, Instagram, Send, MapPin, Activity, ArrowRight, Cpu } from 'lucide-react';

// Componente para los links con animación
const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="group flex items-center gap-2 text-gray-400 hover:text-optexa-cyan transition-colors duration-300">
      <span className="w-0 h-[2px] bg-optexa-cyan transition-all duration-300 group-hover:w-3" />
      <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
    </a>
  </li>
);

// Componente para botones sociales
const SocialButton = ({ icon: Icon, href }) => (
  <motion.a 
    href={href}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-optexa-cyan hover:text-black hover:border-optexa-cyan transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
  >
    <Icon size={18} />
  </motion.a>
);

export const Footer = () => {
  return (
    <footer className="relative bg-[#020410] pt-20 pb-10 overflow-hidden font-sans border-t border-white/5">
      
      {/* --- DECORACIÓN DE FONDO --- */}
      {/* Luz ambiental inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-optexa-main/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Línea Superior Gradiente */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-optexa-cyan/50 to-transparent" />

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. MARCA E IDENTIDAD (4 columnas) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-optexa-main to-optexa-dark rounded-xl border border-white/10 shadow-lg shadow-blue-900/20">
                <Zap size={24} className="text-white fill-current" />
              </div>
              <span className="text-2xl font-black italic tracking-tighter text-white">
                OPTEXA
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Ingeniería robótica de precisión. Automatizando el ecosistema industrial desde el corazón de los Andes hacia el mercado global.
            </p>

            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg w-fit">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute opacity-75" />
                <div className="w-2 h-2 bg-green-500 rounded-full relative" />
              </div>
              <span className="text-xs font-mono text-green-400 font-bold uppercase tracking-wider">
                Sistemas Operativos
              </span>
            </div>
          </div>

          {/* 2. LINKS DE NAVEGACIÓN (2 columnas) */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
              <Cpu size={14} className="text-optexa-cyan"/> Explorar
            </h4>
            <ul className="space-y-4 text-sm">
              <FooterLink href="#servicios">Tecnología ASRS</FooterLink>
              <FooterLink href="#servicios">Robótica de Servicio</FooterLink>
              <FooterLink href="#software">Core Software</FooterLink>
              <FooterLink href="#casos">Casos de Éxito</FooterLink>
            </ul>
          </div>

          {/* 3. LEGAL & EMPRESA (2 columnas) */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
               <Activity size={14} className="text-optexa-cyan"/> Compañía
            </h4>
            <ul className="space-y-4 text-sm">
              <FooterLink href="#nosotros">Sobre Optexa</FooterLink>
              <FooterLink href="#">Carreras <span className="text-[9px] bg-optexa-cyan text-black px-1 rounded ml-1 font-bold">HIRING</span></FooterLink>
              <FooterLink href="#">Privacidad</FooterLink>
              <FooterLink href="#">Términos</FooterLink>
            </ul>
          </div>

          {/* 4. NEWSLETTER & SOCIAL (4 columnas) */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Actualizaciones de Sistema
            </h4>
            
            <div className="relative group mb-8">
              <input 
                type="email" 
                placeholder="ingrese_email_acceso..." 
                className="w-full bg-[#0B1C3E]/50 border border-white/10 rounded-xl py-4 pl-5 pr-14 text-white placeholder:text-gray-600 focus:outline-none focus:border-optexa-cyan/50 focus:bg-[#0B1C3E] transition-all font-mono text-sm"
              />
              <button className="absolute right-2 top-2 p-2 bg-optexa-cyan text-black rounded-lg hover:bg-white transition-colors shadow-lg shadow-cyan-500/20">
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex gap-3">
              <SocialButton href="#" icon={Linkedin} />
              <SocialButton href="#" icon={Instagram} />
              <SocialButton href="#" icon={Twitter} />
              <SocialButton href="#" icon={Github} />
            </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
          
          <div className="flex items-center gap-2">
            <span>© 2026 OPTEXA SOLUTIONS S.A.</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline">TODOS LOS DERECHOS RESERVADOS</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-help">
               <MapPin size={14} className="text-optexa-cyan group-hover:animate-bounce" />
               <span className="group-hover:text-white transition-colors">MENDOZA, ARG [NODE_01]</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="hover:text-white transition-colors cursor-pointer">v.3.5.0 (STABLE)</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
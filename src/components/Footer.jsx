import { motion } from 'framer-motion';
import { 
  Zap, Github, Linkedin, Twitter, Instagram, MapPin, 
  Activity, ArrowRight, Cpu, Terminal, Globe, ShieldCheck 
} from 'lucide-react';
import { cn } from '../lib/utils';

// Componente para los links con micro-interacción HUD
const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="group flex items-center gap-3 text-gray-500 hover:text-cyan-400 transition-all duration-300">
      <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#22d3ee] transition-all" />
      <span className="font-mono text-[13px] tracking-tight group-hover:translate-x-1 transition-transform">
        {children}
      </span>
    </a>
  </li>
);

// Botones sociales con efecto de cristal
const SocialButton = ({ icon: Icon, href }) => (
  <motion.a 
    href={href}
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.9 }}
    className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md"
  >
    <Icon size={18} />
  </motion.a>
);

export const Footer = () => {
  return (
    <footer className="relative bg-[#02040a] pt-24 pb-12 overflow-hidden border-t border-white/5 font-sans">
      
      {/* --- ELEMENTOS DE DISEÑO DE FONDO --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none" />
      
      {/* Ruido digital sutil para textura tech */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* 1. BRANDING & STATUS MONITOR */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
                  <Zap size={24} className="text-cyan-400 fill-cyan-400/20" />
                </div>
                <span className="text-2xl font-black italic tracking-tighter text-white uppercase">
                  Optexa
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm max-w-xs font-light">
                Ingeniería robótica y software ASRS de alta precisión. Automatizando el ecosistema industrial desde los Andes.
              </p>
            </div>
            
            {/* Indicador de Estado de Red */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
               <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Estado del Sistema</span>
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-tighter italic leading-none">Global_Stable_v3.5.0</span>
               </div>
            </div>
          </div>

          {/* 2. ÁREAS DE DESPLIEGUE */}
          <div className="md:col-span-2">
            <h4 className="font-black text-white/90 mb-8 uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 italic">
              <Cpu size={14} className="text-cyan-400"/> Áreas_ID
            </h4>
            <ul className="space-y-4">
              <FooterLink href="#servicios">Almacenes ASRS</FooterLink>
              <FooterLink href="#servicios">Robótica de Servicio</FooterLink>
              <FooterLink href="#software">Core Software</FooterLink>
              <FooterLink href="#nosotros">Ingeniería Colectiva</FooterLink>
            </ul>
          </div>

          {/* 3. DOCUMENTACIÓN / SISTEMA */}
          <div className="md:col-span-2">
            <h4 className="font-black text-white/90 mb-8 uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 italic">
               <Terminal size={14} className="text-cyan-400"/> Sistema
            </h4>
            <ul className="space-y-4">
              <FooterLink href="#">Whitepapers</FooterLink>
              <FooterLink href="#">Privacidad</FooterLink>
              <FooterLink href="#">SLA Industrial</FooterLink>
              <FooterLink href="#">Protocolos</FooterLink>
            </ul>
          </div>

          {/* 4. NEWSLETTER / UPLINK ENLACE */}
          <div className="md:col-span-4">
            <h4 className="font-black text-white/90 mb-8 uppercase tracking-[0.2em] text-[10px] italic">
              Establecer_Enlace
            </h4>
            
            <div className="relative mb-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative flex">
                <input 
                  type="email" 
                  placeholder="ingrese_acceso_email..." 
                  className="w-full bg-black/50 border border-white/10 rounded-l-xl py-4 px-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-sm"
                />
                <button className="bg-white hover:bg-cyan-400 text-black px-6 rounded-r-xl transition-all flex items-center justify-center border-l border-black">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <SocialButton href="#" icon={Linkedin} />
              <SocialButton href="#" icon={Instagram} />
              <SocialButton href="#" icon={Twitter} />
              <SocialButton href="#" icon={Github} />
            </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR: METADATA TÉCNICA --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] font-mono text-gray-600">
            <span className="flex items-center gap-2">
               <ShieldCheck size={12} className="text-cyan-500/50" />
               © 2026 OPTEXA SOLUTIONS S.A.
            </span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <span className="uppercase tracking-widest italic">Mendoza, Argentina</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end gap-1 group">
               <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400/70 group-hover:text-cyan-400 transition-colors">
                  <MapPin size={12} />
                  <span className="tracking-tighter uppercase italic">MENDOZA_NODE_01</span>
               </div>
               <span className="text-[9px] font-mono text-gray-700 tracking-tighter italic">COORDS: -32.889, -68.845</span>
            </div>
            
            <div className="flex flex-col items-end gap-1">
               <div className="flex items-center gap-2 text-[10px] font-mono text-white/20">
                  <Globe size={12} />
                  <span className="tracking-tighter">TIMEZONE: GMT-3</span>
               </div>
               <span className="text-[9px] font-mono text-cyan-500/30 uppercase font-black italic tracking-[0.2em]">Stable_Link</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
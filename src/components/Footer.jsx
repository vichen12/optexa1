import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Linkedin, Instagram, MapPin, 
  Activity, ShieldCheck, Terminal, Cpu, ArrowRight, Mail, Compass
} from 'lucide-react';

// Componente para links con visibilidad mejorada
const NavLink = ({ href, children }) => (
  <li>
    <a href={href} className="group flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-all duration-300">
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-900 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee] transition-all" />
      <span className="text-[11px] font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform italic">
        {children}
      </span>
    </a>
  </li>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // LINKS DIRECTOS A GMAIL
  const companyGmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=optexamza@gmail.com&su=Consulta%20desde%20la%20web&body=Hola!%20Vengo%20de%20la%20página,%20me%20interesaría%20una%20cotización.";
  const personalGmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=vichendallape@gmail.com&su=Propuesta%20Desarrollo%20Web&body=Hola%20Vincenzo!%20Me%20gustó%20tu%20página,%20¿me%20harías%20una%20igual?";

  return (
    <footer className="relative pt-32 pb-10 px-6 bg-transparent overflow-hidden font-sans z-20">
      
      {/* --- INTEGRACIÓN DE FONDO --- */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#02040a] via-[#02040a]/80 to-transparent -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Grilla técnica Blueprint sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 items-start">
          
          {/* 1. BRANDING & CONTACTO CORPORATIVO */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  <Zap size={28} className="text-cyan-400 fill-cyan-400/20" />
                </div>
                <span className="text-3xl font-black italic tracking-tighter text-white uppercase">
                  Optexa<span className="text-cyan-500">_</span>
                </span>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-medium italic border-l-2 border-cyan-500/30 pl-6">
                Ingeniería híbrida de alta precisión. Sincronizando el ecosistema industrial desde Mendoza para el mercado global.
              </p>

              <div className="space-y-4">
                 <h4 className="text-[10px] font-black text-cyan-500/50 uppercase tracking-[0.3em]">Canal_Ventas</h4>
                 <a href={companyGmailLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-200 hover:text-cyan-400 transition-colors">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-all">
                        <Mail size={16} className="text-cyan-400" />
                    </div>
                    <span className="font-mono text-sm tracking-tighter italic">optexamza@gmail.com</span>
                 </a>
              </div>
            </div>
            
            <div className="flex gap-4">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all backdrop-blur-md">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. SISTEMAS // ID */}
          <div className="lg:col-span-3 space-y-8 lg:pl-12">
            <div className="flex items-center gap-3 text-cyan-400">
               <Cpu size={16} />
               <h4 className="text-xs font-mono font-black uppercase tracking-[0.4em]">Sistemas // ID</h4>
            </div>
            <ul className="space-y-5">
              <NavLink href="#servicios">Almacenes_ASRS</NavLink>
              <NavLink href="#showcase">Robótica_AMR</NavLink>
              <NavLink href="#proceso">Ecosistema_IA</NavLink>
              <NavLink href="#nosotros">Ingeniería_Labs</NavLink>
            </ul>
          </div>

          {/* 3. NODO MENDOZA */}
          <div className="lg:col-span-5">
             <div className="p-8 rounded-[2.5rem] bg-cyan-950/10 backdrop-blur-2xl border border-cyan-500/20 relative overflow-hidden group shadow-2xl h-full flex flex-col justify-between italic text-white">
                
                <div className="space-y-1 mb-10">
                    <h3 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">
                        Mendoza<span className="text-cyan-500 text-2xl">.AR</span>
                    </h3>
                </div>
                
                <a href="#contacto" className="group/btn w-full flex items-center justify-center gap-4 px-6 py-5 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-xl hover:bg-white transition-all duration-700 shadow-[0_10px_30px_rgba(34,211,238,0.2)] mt-auto">
                   Solicitar Cotización
                   <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </a>
             </div>
          </div>

        </div>

        {/* --- BARRA DE FIRMA TÉCNICA (CRÉDITOS) --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-6 text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-cyan-900" />
              © {currentYear} OPTEXA SOLUTIONS S.A.
            </span>
          </div>

          <div className="flex items-center gap-12">
            {/* FIRMA VINCENZO */}
            <div className="flex flex-col items-end gap-2 group cursor-pointer">
               <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-cyan-900 group-hover:w-12 group-hover:bg-cyan-400 transition-all" />
                  <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest italic group-hover:text-cyan-400 transition-colors">
                    Ingeniería Web // Vincenzo Dallapé
                  </span>
               </div>
               <a href={personalGmailLink} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-2 font-mono">
                  <Terminal size={12} className="text-cyan-600" /> vichendallape@gmail.com
               </a>
            </div>

          

            {/* INDUSTRIAL LEAD */}
            
          </div>

        </div>
      </div>
    </footer>
  );
};
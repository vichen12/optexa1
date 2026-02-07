import { motion } from 'framer-motion';
import { Cpu, Factory, GraduationCap, Code2, Terminal, Info, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const founders = [
  {
    name: "Anuk Vilarasau",
    role: "Ingeniería Industrial",
    status: "5to Año - Universidad de Mendoza",
    specialty: "Optimización de Procesos & ASRS",
    bio: "Especialista en flujos logísticos y eficiencia de planta. Enfocado en la integración física de sistemas automatizados y densidad de almacenamiento.",
    image: "/anuk.png",
    color: "emerald",
    icon: Factory,
    tag: "PROCESOS_ID",
    skills: ["Logística 4.0", "Simulación", "Lean Mfg"]
  },
  {
    name: "Vincenzo Dallapé",
    role: "Ingeniería en Sistemas",
    status: "5to Año - UTN",
    specialty: "Arquitectura de Software & IoT",
    bio: "Desarrollador Full Stack apasionado por la ciberseguridad y la domótica. Encargado de la inteligencia digital y la conectividad del ecosistema Optexa.",
    image: "/vincenzo.png",
    color: "cyan",
    icon: Code2,
    tag: "SYSTEM_ID",
    skills: ["React / Next.js", "Ciberseguridad", "Cloud"]
  }
];

export const About = () => {
  return (
    <section id="nosotros" className="relative py-32 px-6 overflow-hidden bg-transparent">
      
      {/* --- DECORACIÓN DE FONDO --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none -z-10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER TIPO HUD */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
             <Terminal size={12} className="text-cyan-400" />
             <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em] font-bold">Protocolo_Fundadores_v1.0</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            EL NÚCLEO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-emerald-400 animate-gradient-x">
               DE OPTEXA
            </span>
          </h2>
        </div>

        {/* GRID DE SOCIOS - CONTENEDORES INNOVADORES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {founders.map((founder, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* 1. LAYER DE FONDO: EFECTO GLOW REACTIVO */}
              <div className={cn(
                "absolute -inset-1 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700",
                founder.color === 'emerald' ? "bg-emerald-500" : "bg-cyan-500"
              )} />
              
              {/* 2. CHASSIS PRINCIPAL */}
              <div className="relative bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl">
                
                {/* Estructura Tech Interna (Dots Grid) */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                
                {/* Brackets de Esquina */}
                <div className={cn("absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 rounded-tr-[3rem] opacity-20 group-hover:opacity-100 transition-opacity duration-500", `border-${founder.color}-500`)} />
                <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20" />

                {/* --- CONTENIDO --- */}
                <div className="relative z-10 flex flex-col gap-10">
                   
                   {/* FILA SUPERIOR: FOTO Y TAGS */}
                   <div className="flex flex-col md:flex-row items-center gap-10">
                      
                      {/* Avatar con Scanner */}
                      <div className="relative shrink-0">
                         {/* Anillo de energía */}
                         <div className={cn("absolute -inset-3 rounded-full border border-dashed animate-[spin_10s_linear_infinite] opacity-20", `border-${founder.color}-500`)} />
                         
                         <div className={cn("relative w-44 h-44 rounded-full border-2 overflow-hidden bg-zinc-900 group-hover:scale-105 transition-transform duration-700", `border-${founder.color}-500/50`)}>
                            <img 
                               src={founder.image} 
                               alt={founder.name} 
                               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Láser de escaneo dinámico */}
                            <div className={cn("absolute top-0 left-0 w-full h-[2px] shadow-[0_0_15px_currentColor] animate-[scan_3s_linear_infinite] opacity-50", `bg-${founder.color}-400 text-${founder.color}-400`)} />
                         </div>
                      </div>

                      {/* Info Rápida */}
                      <div className="flex-grow text-center md:text-left">
                         <div className="flex flex-col gap-1 mb-4">
                            <span className={cn("text-[10px] font-mono font-bold tracking-[0.4em] uppercase", `text-${founder.color}-400`)}>
                               {founder.tag}
                            </span>
                            <h3 className="text-4xl font-black text-white uppercase tracking-tight italic leading-none">
                               {founder.name}
                            </h3>
                         </div>
                         
                         <div className="flex flex-col gap-2 font-mono text-[11px] text-white/40 tracking-widest mb-6">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                               <GraduationCap size={14} className={cn(`text-${founder.color}-500`)} />
                               <span>{founder.status}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                               <Zap size={14} className={cn(`text-${founder.color}-500`)} />
                               <span>{founder.role}</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* DESCRIPCIÓN TÉCNICA */}
                   <div className="relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                      <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                         {founder.bio}
                      </p>
                   </div>

                   {/* SKILLS CON ESTILO "MODULAR" */}
                   <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      {founder.skills.map((skill, i) => (
                        <div key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 group/skill hover:bg-white/10 transition-colors">
                           <div className={cn("w-1 h-1 rounded-full animate-pulse", `bg-${founder.color}-400`)} />
                           <span className="text-[10px] text-white/60 font-mono uppercase tracking-widest font-bold">
                              {skill}
                           </span>
                        </div>
                      ))}
                   </div>

                   {/* FOOTER DE TARJETA: ESPECIALIDAD HUD */}
                   <div className="mt-4 pt-8 border-t border-white/5 flex items-center gap-6">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border border-white/10", `bg-${founder.color}-500/10 text-${founder.color}-400`)}>
                         <founder.icon size={24} />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[8px] text-white/20 uppercase tracking-[0.4em] font-bold mb-1">Foco_Operativo</span>
                         <span className="text-sm font-black text-white/90 uppercase tracking-wider italic">{founder.specialty}</span>
                      </div>
                   </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MANIFIESTO FINAL: ESTÉTICA DE TERMINAL --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 relative group"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10 blur-3xl opacity-30" />
           <div className="relative p-12 md:p-20 rounded-[4rem] bg-[#02050a]/80 backdrop-blur-xl border border-white/5 text-center overflow-hidden">
              
              {/* Decoraciones de borde Tech */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              
              <h4 className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] uppercase mb-10 font-bold opacity-50">Master_Mission_Protocol</h4>
              
              <p className="text-3xl md:text-5xl text-white font-light leading-tight tracking-tighter max-w-5xl mx-auto italic">
                "Nuestra misión es fusionar la <span className="text-cyan-400 font-bold">inteligencia artificial de sistemas</span> con la <span className="text-emerald-400 font-bold">eficiencia industrial</span> para crear el futuro de la logística autónoma."
              </p>

              <div className="mt-12 flex justify-center gap-2">
                 {[...Array(3)].map((_, i) => (
                   <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
                 ))}
              </div>
           </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: -5%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 105%; opacity: 0; }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}} />
    </section>
  );
};
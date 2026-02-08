import { motion } from 'framer-motion';
import { Cpu, Factory, GraduationCap, Code2, Terminal, Info, Zap, Activity, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

const founders = [
  {
    name: "Anuk Vilarasau",
    role: "Ingeniería Industrial",
    status: "5to Año - Universidad de Mendoza",
    specialty: "Optimización de Procesos & ASRS",
    bio: "Especialista en flujos logísticos y eficiencia de planta. Enfocado en la integración física de sistemas automatizados y densidad de almacenamiento de alta frecuencia.",
    image: "/anuk.png",
    color: "emerald",
    icon: Factory,
    tag: "INDUSTRIAL_CORE",
    skills: ["Logística 4.0", "Simulación", "Lean Mfg", "ASRS Design"]
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
    tag: "SYSTEMS_CORE",
    skills: ["React / Next.js", "Ciberseguridad", "Cloud Computing"]
  }
];

export const About = () => {
  return (
    <section id="nosotros" className="relative py-32 px-6 overflow-hidden bg-transparent font-sans">
      
      {/* --- FX: ATMÓSFERA TÉCNICA --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none -z-10">
         <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER TIPO HUD INTERACTIVO */}
        <div className="flex flex-col items-center text-center mb-32">
         
          
        
           <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_5px_10px_rgba(0,0,0,1)]">
            EL NÚCLEO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 animate-gradient-x font-outline-2">
              DE OPTEXA
            </span>
          </h2>
        </div>

        {/* GRID DE SOCIOS: CONTENEDORES "HARDWARE-STYLE" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {founders.map((founder, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Resplandor reactivo detrás del contenedor */}
              <div className={cn(
                "absolute -inset-2 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700",
                founder.color === 'emerald' ? "bg-emerald-500" : "bg-cyan-500"
              )} />
              
              {/* CHASSIS PRINCIPAL (CONTENEDOR) */}
              <div className="relative bg-[#02050a]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl">
                
                {/* Textura de Grilla Técnica */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] group-hover:opacity-[0.06] transition-opacity duration-500" />
                
                {/* Esquinas de Anclaje Industrial */}
                <div className={cn("absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 rounded-tr-[3rem] opacity-30 group-hover:opacity-100 transition-opacity duration-500", `border-${founder.color}-500`)} />
                <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20" />

                <div className="relative z-10 flex flex-col gap-10">
                   
                   {/* CABECERA: FOTO BIOMÉTRICA */}
                   <div className="flex flex-col md:flex-row items-center gap-10">
                      
                      <div className="relative shrink-0">
                         {/* Anillo Orbital */}
                         <div className={cn("absolute -inset-4 rounded-full border border-dashed animate-[spin_15s_linear_infinite] opacity-10", `border-${founder.color}-500`)} />
                         
                         <div className={cn("relative w-44 h-44 rounded-full border-2 overflow-hidden bg-zinc-900 group-hover:scale-105 transition-all duration-700", `border-${founder.color}-500/40 shadow-[0_0_30px_rgba(34,211,238,0.1)]`)}>
                            <img 
                               src={founder.image} 
                               alt={founder.name} 
                               className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                            />
                            {/* Láser de Escaneo */}
                            <div className={cn("absolute top-0 left-0 w-full h-[2px] shadow-[0_0_15px_currentColor] animate-[scan_4s_linear_infinite] opacity-60", `bg-${founder.color}-400 text-${founder.color}-400`)} />
                         </div>
                      </div>

                      <div className="flex-grow text-center md:text-left">
                         
                         <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic leading-none mb-6">
                            {founder.name}
                         </h3>
                         
                         <div className="space-y-2 font-mono text-[11px] text-white/30 tracking-widest">
                            <div className="flex items-center justify-center md:justify-start gap-3 bg-white/5 py-2 px-3 rounded-lg border border-white/5">
                               <GraduationCap size={14} className={cn(`text-${founder.color}-500`)} />
                               <span className="text-white/60">{founder.status}</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* DESCRIPCIÓN TÉCNICA */}
                   <div className="relative pt-4">
                      <div className="absolute left-0 top-0 w-12 h-[1px] bg-cyan-500/50" />
                      <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                         {founder.bio}
                      </p>
                   </div>

                   {/* SKILLS MODULARES */}
                   <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      {founder.skills.map((skill, i) => (
                        <div key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 hover:bg-white/10 transition-colors group/skill">
                           <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", `bg-${founder.color}-400 shadow-[0_0_8px_currentColor]`)} />
                           <span className="text-[10px] text-white/50 font-black uppercase tracking-widest">
                              {skill}
                           </span>
                        </div>
                      ))}
                   </div>

                   {/* FOOTER: ESPECIALIDAD HUD */}
                   <div className="mt-4 pt-8 border-t border-white/5 flex items-center gap-6">
                      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md", `bg-${founder.color}-500/10 text-${founder.color}-400 shadow-inner`)}>
                         <founder.icon size={26} />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[8px] text-white/20 uppercase tracking-[0.4em] font-black mb-1 italic">Área_Especialización</span>
                         <span className="text-sm font-black text-white/90 uppercase tracking-tight italic">{founder.specialty}</span>
                      </div>
                   </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MANIFIESTO: ESTÉTICA DE TERMINAL INDUSTRIAL --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 relative"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5 blur-3xl" />
           <div className="relative p-12 md:p-20 rounded-[4rem] bg-[#02050a]/90 backdrop-blur-3xl border border-white/5 text-center overflow-hidden shadow-2xl">
              
            
              
            
              
              <p className="text-3xl md:text-5xl text-white font-light leading-[1.1] tracking-tighter max-w-5xl mx-auto italic">
                "Fusionamos la <span className="text-cyan-400 font-black">inteligencia algorítmica</span> de sistemas con la <span className="text-emerald-400 font-black">eficiencia física</span> industrial para liderar el cambio hacia la logística autónoma."
              </p>

              <div className="mt-16 flex justify-center gap-4">
                 {[...Array(5)].map((_, i) => (
                   <div key={i} className="w-1 h-1 rounded-full bg-white/10" />
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
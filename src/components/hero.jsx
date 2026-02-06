import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { ChevronRight, Bot, Box } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      
      {/* Decoración Flotante (Iconos 3D simulados) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] text-optexa-dark/20 hidden md:block"
      >
        <Bot size={80} />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] text-optexa-cyan/30 hidden md:block"
      >
        <Box size={100} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Badge "Innovación" */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-optexa-dark/10 shadow-lg mb-8">
          <span className="w-2 h-2 rounded-full bg-optexa-cyan animate-pulse"></span>
          <span className="text-xs font-bold text-optexa-dark uppercase tracking-widest">Innovación Argentina 🇦🇷</span>
        </div>

        {/* TÍTULO GIGANTE ESTILO IMAGEN */}
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.9]">
          <span className="block text-optexa-dark">TU EMPRESA,</span>
          
          {/* "PERO EN 2050" con efecto Glow */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">
            PERO EN 2050
          </span>
        </h1>

        {/* Subtítulo Typewriter */}
        <div className="text-xl md:text-2xl font-mono text-white/80 h-[40px] mb-12 flex items-center justify-center gap-2">
          <span>&gt; Implementamos:</span>
          <span className="font-bold text-optexa-cyan bg-optexa-dark/30 px-2 rounded">
            <Typewriter
              options={{
                strings: ['Robots de Stock.', 'Mozos Autónomos.', 'Futuro Hoy.'],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span>
        </div>

        {/* Botones de Alto Contraste */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          
          {/* Botón Principal Azul Oscuro */}
          <button className="group relative px-8 py-4 bg-optexa-dark text-white font-bold rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(9,42,83,0.4)] transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(9,42,83,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              Ver Robots en Acción <ChevronRight size={20} />
            </span>
          </button>
          
          {/* Botón Secundario Transparente/Borde Blanco */}
          <button className="px-8 py-4 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
            Agendar Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
};
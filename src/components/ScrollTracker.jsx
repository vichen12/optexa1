import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const ScrollTracker = () => {
  const { scrollYProgress } = useScroll();

  // Inercia ultra-suave para sensación de peso mecánico
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const height = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-0 top-0 h-full w-[4px] z-[100] pointer-events-none">
      
      {/* 1. EL RIEL TÉCNICO: Ahora con textura de regla de medición */}
      <div className="absolute inset-0 border-l border-white/5 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      {/* 2. LA ESTELA (FILAMENTO): Con efecto de barrido láser */}
      <motion.div 
        style={{ height }}
        className="absolute top-0 right-0 w-[2px] bg-gradient-to-b from-cyan-950 via-cyan-500 to-white overflow-hidden"
      >
        {/* Animación de pulso interno que recorre la línea dibujada */}
        <motion.div 
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-full h-40 bg-gradient-to-b from-transparent via-white/40 to-transparent"
        />
      </motion.div>

      {/* 3. EL CABEZAL (NÚCLEO DE PODER): El punto de contacto */}
      <motion.div 
        style={{ top: height }}
        className="absolute right-0 -translate-y-1/2 flex items-center"
      >
        {/* Haz de luz de alta intensidad (más largo y agresivo) */}
        <div className="relative">
          {/* El núcleo blanco */}
          <div className="w-[3px] h-[35vh] bg-gradient-to-b from-transparent via-white to-transparent" />
          
          {/* El aura cian de choque */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[15vh] bg-cyan-400 blur-[4px] opacity-70" />
          
          {/* Destello de punta (Crosspoint) */}
          <div className="absolute top-1/2 right-0 w-4 h-4 bg-white rounded-full blur-[10px] opacity-50" />
        </div>
        
        {/* Glow ambiental que se proyecta sobre la web */}
        <div className="absolute right-0 w-32 h-[50vh] bg-cyan-500/[0.07] blur-[80px] -z-10" />
      </motion.div>

      {/* 4. MARCAS DE TELEMETRÍA FIJAS (Look de Ingeniería) */}
      {[...Array(10)].map((_, i) => (
        <div 
          key={i} 
          className="absolute right-0 w-2 h-[1px] bg-white/10" 
          style={{ top: `${i * 10}%` }} 
        />
      ))}
    </div>
  );
};
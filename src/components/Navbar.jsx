import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Zap, ChevronRight, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Quitamos el '#' si viene en el id para el selector
    const targetId = id.startsWith('#') ? id : `#${id}`;
    const element = document.querySelector(targetId);
    
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // DIRECCIONES TOTALES DE LA PÁGINA
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Empresas', href: '#trusted' },   // Carrusel de marcas
    { name: 'Soluciones', href: '#soluciones' }, // El mazo de cartas (SolutionsDeck)
    { name: 'Modelos', href: '#showcase' },   // El catálogo de robots
    { name: 'Proceso', href: '#proceso' },    // El workflow de 4 pasos
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div 
          className={cn(
            "flex justify-between items-center transition-all duration-500 w-full relative",
            scrolled 
              ? "max-w-6xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-full px-8 py-3 mx-4" 
              : "max-w-7xl px-8 bg-transparent"
          )}
        >
          
          {/* LOGO */}
          <a 
            href="#inicio" 
            onClick={(e) => handleScrollTo(e, '#inicio')}
            className="group flex items-center gap-2 select-none cursor-pointer"
          >
            <div className="w-10 h-10 bg-optexa-dark rounded-full flex items-center justify-center text-optexa-cyan shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-black tracking-tighter italic text-optexa-dark">
              OPTEXA
            </span>
          </a>

          {/* LINKS ESCRITORIO */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="relative px-4 py-2 text-[11px] font-black uppercase tracking-widest text-optexa-dark/60 hover:text-optexa-main transition-all group rounded-full"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full bg-optexa-cyan group-hover:w-4 transition-all" />
              </a>
            ))}
          </div>

          {/* BOTÓN DE ACCIÓN */}
          <div className="hidden md:block">
            <button
              onClick={(e) => handleScrollTo(e, '#contacto')}
              className="bg-optexa-dark text-white px-6 py-2.5 rounded-full font-bold text-xs shadow-lg hover:bg-optexa-main transition-all flex items-center gap-2 active:scale-95"
            >
              COTIZAR <ChevronRight size={14} />
            </button>
          </div>

          {/* HAMBURGUESA MOVIL */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-optexa-dark p-2 hover:bg-black/5 rounded-full"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MENÚ MOVIL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[60] bg-optexa-dark flex flex-col items-center justify-center p-8"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white"
            >
              <X size={40} />
            </button>

            <div className="flex flex-col gap-6 text-center">
               {navLinks.map((item, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-4xl font-black text-white uppercase tracking-tighter hover:text-optexa-cyan transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <button 
                onClick={(e) => handleScrollTo(e, '#contacto')}
                className="mt-8 bg-optexa-cyan text-optexa-dark px-10 py-5 rounded-2xl font-black text-xl"
              >
                EMPEZAR AHORA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
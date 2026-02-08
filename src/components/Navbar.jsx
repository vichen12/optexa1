import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronRight, X } from 'lucide-react';

const classes = (...btns) => btns.filter(Boolean).join(' ');

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = id.startsWith('#') ? id : `#${id}`;
    const element = document.querySelector(targetId);
    
    if (element) {
      const yOffset = scrolled ? -80 : -120; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Modelos', href: '#showcase' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": navLinks.map(l => l.name),
          "url": navLinks.map(l => `https://optexa.com.ar/${l.href}`)
        })}
      </script>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={classes(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 lg:px-6",
          scrolled ? "py-3 lg:py-4" : "py-6 lg:py-8"
        )}
      >
        <div 
          className={classes(
            "flex justify-between items-center transition-all duration-500 w-full relative",
            scrolled 
              ? "max-w-6xl bg-[#02040a]/95 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.2)] rounded-2xl lg:rounded-3xl px-6 lg:px-10 py-2 lg:py-3 mx-2 lg:mx-4" 
              : "max-w-7xl px-4 lg:px-8 bg-transparent"
          )}
        >
          
          {/* LOGO ADAPTATIVO */}
          <a 
            href="#inicio" 
            onClick={(e) => handleScrollTo(e, '#inicio')}
            className="group flex items-center select-none cursor-pointer"
          >
              <img 
                src="/OPTEXACONFONDOBLANCO.png" 
                alt="Optexa Logo" 
                className={classes(
                  "object-contain rounded-xl lg:rounded-2xl shadow-2xl transition-all duration-700 bg-white p-1",
                  "group-hover:scale-110 active:scale-95", 
                  scrolled 
                    ? "w-10 h-10 lg:w-16 lg:h-16" 
                    : "w-14 h-14 lg:w-24 lg:h-24" 
                )}
              />
          </a>

          {/* DESKTOP NAV CON TRANSICIÓN DE COLOR */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={classes(
                    "relative px-4 py-2 text-[13px] font-black uppercase tracking-[0.2em] transition-colors duration-500 group italic",
                    // LÓGICA DE COLOR: Negro arriba, Blanco con scroll
                    scrolled ? "text-white" : "text-black"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-500 shadow-[0_0_15px_#22d3ee] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </a>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <button
              onClick={(e) => handleScrollTo(e, '#contacto')}
              className="relative group overflow-hidden bg-cyan-500 text-black px-8 py-3 rounded-xl font-black text-[11px] tracking-[0.1em] shadow-[0_10px_30px_rgba(34,211,238,0.3)] hover:shadow-cyan-400/60 transition-all active:scale-95 italic border-b-4 border-cyan-700 hover:border-cyan-400"
            >
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
              <span className="flex items-center gap-2">
                COTIZAR AHORA <ChevronRight size={18} />
              </span>
            </button>
          </div>

          {/* MOBILE TRIGGER ADAPTATIVO */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={classes(
                "lg:hidden p-2 rounded-xl transition-colors duration-500",
                scrolled ? "text-white" : "text-black"
            )}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? "text-cyan-400" : "text-black"} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#02040a]/95 backdrop-blur-3xl flex flex-col items-center justify-center p-8 overflow-hidden font-sans"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-cyan-500 p-2"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col gap-8 text-center relative z-10">
               {navLinks.map((item, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-5xl font-black text-white uppercase tracking-tighter hover:text-cyan-400 transition-all italic flex flex-col items-center group"
                >
                  <span className="text-[10px] font-mono text-cyan-500/60 tracking-[0.5em] mb-2">// 0{i+1}</span>
                  {item.name}
                </motion.a>
              ))}
              
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={(e) => handleScrollTo(e, '#contacto')}
                className="mt-10 bg-cyan-500 text-black px-12 py-5 rounded-2xl font-black text-xl italic shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              >
                COTIZAR
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
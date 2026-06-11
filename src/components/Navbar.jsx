import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronRight, ChevronDown, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const cx = (...cls) => cls.filter(Boolean).join(" ");

const CATALOG_CATEGORIES = [
  { name: "Sistemas AS/RS",          href: "/catalogo/asrs" },
  { name: "Robots de Manipulación",  href: "/catalogo/robots-manipulacion" },
  { name: "Almacenamiento Vertical", href: "/catalogo/almacenamiento-vertical" },
  { name: "Equipo de Transporte",    href: "/catalogo/equipo-transporte" },
  { name: "Software Inteligente",    href: "/catalogo/software" },
];

const ALL_NAV = [
  { name: "Inicio",          href: "#inicio",              type: "scroll"   },
  { name: "Catálogo",        href: "/catalogo",            type: "dropdown" },
  { name: "Industrias",      href: "/industrias",          type: "page"     },
  { name: "Beneficios",      href: "/beneficios-fiscales", type: "page"     },
  { name: "Cómo Trabajamos", href: "/como-trabajamos",     type: "page"     },
  { name: "Nosotros",        href: "/nosotros",            type: "page"     },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const catalogRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (catalogRef.current && !catalogRef.current.contains(e.target)) {
        setCatalogOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const anchor = id.startsWith("#") ? id : `#${id}`;
    if (isHome) {
      const el = document.querySelector(anchor);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset + (scrolled ? -80 : -120);
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const handlePageNav = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setCatalogOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, item) => {
    if (item.type === "scroll") handleScrollTo(e, item.href);
    else if (item.type === "dropdown") {
      e.preventDefault();
      setCatalogOpen((v) => !v);
    } else handlePageNav(e, item.href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 lg:px-6",
          scrolled ? "py-2" : "py-3",
        )}
      >
        <div
          className={cx(
            "flex justify-between items-center transition-all duration-500 w-full relative",
            scrolled
              ? "max-w-6xl bg-white/95 backdrop-blur-xl shadow-lg border border-gray-200 rounded-2xl lg:rounded-3xl px-6 lg:px-10 py-2 lg:py-3 mx-2 lg:mx-4"
              : "max-w-7xl px-4 lg:px-8 bg-white/80 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-gray-200/60 shadow-sm",
          )}
        >
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, "#inicio")}
            className="group flex items-center select-none cursor-pointer"
          >
            <div className={cx(
              "overflow-hidden transition-all duration-500 flex items-center justify-center",
              scrolled ? "w-24 h-12" : "w-32 h-14",
            )}>
              <img
                src="/stoka_logo_sin_fondo.png"
                alt="STOKA — Representantes oficiales DELIE en Argentina"
                className="w-full h-full object-contain scale-[2] group-hover:scale-[2.1] active:scale-[1.9] transition-transform duration-300"
              />
            </div>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-1">
            {ALL_NAV.map((item) => (
              <li key={item.name} className="relative" ref={item.type === "dropdown" ? catalogRef : undefined}>
                {item.type === "dropdown" ? (
                  <>
                    <button
                      onClick={(e) => handleNavClick(e, item)}
                      className={cx(
                        "relative px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-300 group italic whitespace-nowrap flex items-center gap-1",
                        scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-600 hover:text-gray-900",
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown size={11} className={cx("transition-transform duration-200", catalogOpen ? "rotate-180" : "")} />
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </button>

                    <AnimatePresence>
                      {catalogOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-60"
                        >
                          <div className="p-2">
                            <a
                              href="/catalogo"
                              onClick={(e) => handlePageNav(e, "/catalogo")}
                              className="block px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-cyan-500 transition-colors rounded-xl hover:bg-gray-50"
                            >
                              Ver catálogo completo →
                            </a>
                            <div className="border-t border-gray-100 my-1" />
                            {CATALOG_CATEGORIES.map((cat) => (
                              <a
                                key={cat.href}
                                href={cat.href}
                                onClick={(e) => handlePageNav(e, cat.href)}
                                className="flex items-center justify-between px-4 py-2.5 text-[11px] font-bold text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-colors group"
                              >
                                <span>{cat.name}</span>
                                <ChevronRight size={12} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={cx(
                      "relative px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-300 group italic whitespace-nowrap",
                      scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-600 hover:text-gray-900",
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => { navigate('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="relative group overflow-hidden bg-cyan-500 text-white px-7 py-3 rounded-xl font-black text-[11px] tracking-widest shadow-[0_4px_16px_rgba(6,182,212,0.35)] hover:bg-cyan-400 transition-all active:scale-95 italic"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              <span className="flex items-center gap-2">
                Consultar <ChevronRight size={16} />
              </span>
            </button>
          </div>

          {/* MOBILE TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cx(
              "lg:hidden p-2 rounded-xl transition-colors",
              scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-600 hover:text-gray-900",
            )}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="fixed inset-0 z-60 bg-white flex flex-col items-center justify-center p-8 overflow-hidden font-sans"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 p-2 transition-colors"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col gap-6 text-center relative z-10">
              {ALL_NAV.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={item.href}
                  onClick={(e) => item.type === "dropdown" ? handlePageNav(e, item.href) : handleNavClick(e, item)}
                  className="text-4xl font-black text-slate-900 uppercase tracking-tighter hover:text-cyan-500 transition-all italic flex flex-col items-center"
                >
                  <span className="text-[10px] font-mono text-slate-300 tracking-[0.5em] mb-1">
                    // 0{i + 1}
                  </span>
                  {item.name}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => { setMobileMenuOpen(false); navigate('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ outline: "none" }}
                className="mt-6 bg-cyan-500 text-white px-12 py-5 rounded-2xl font-black text-xl italic shadow-[0_4px_24px_rgba(6,182,212,0.3)]"
              >
                Consultar
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

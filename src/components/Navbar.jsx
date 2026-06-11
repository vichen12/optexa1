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

const RECURSOS_ITEMS = [
  { name: "Calculadora ROI",        href: "/recursos/roi-automatizacion" },
  { name: "Comparador de sistemas", href: "/recursos/comparador-sistemas" },
  { name: "Blog y artículos",       href: "/recursos" },
  { name: "Casos de éxito",         href: "/casos-de-exito" },
  { name: "Glosario técnico",       href: "/recursos/glosario" },
];

const ALL_NAV = [
  { name: "Inicio",             href: "#inicio",              type: "scroll"            },
  { name: "Catálogo",           href: "/catalogo",            type: "dropdown-catalogo" },
  { name: "Industrias",         href: "/industrias",          type: "page"              },
  { name: "Beneficios fiscales", href: "/beneficios-fiscales", type: "page"             },
  { name: "Cómo Trabajamos",    href: "/como-trabajamos",     type: "page"              },
  { name: "Nosotros",           href: "/nosotros",            type: "page"              },
  { name: "Recursos",           href: "/recursos",            type: "dropdown-recursos" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);
  const catalogRef = useRef(null);
  const recursosRef = useRef(null);
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
      if (catalogRef.current && !catalogRef.current.contains(e.target)) setCatalogOpen(false);
      if (recursosRef.current && !recursosRef.current.contains(e.target)) setRecursosOpen(false);
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
    setRecursosOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, item) => {
    if (item.type === "scroll") handleScrollTo(e, item.href);
    else if (item.type === "dropdown-catalogo") {
      e.preventDefault();
      setCatalogOpen((v) => !v);
      setRecursosOpen(false);
    } else if (item.type === "dropdown-recursos") {
      e.preventDefault();
      setRecursosOpen((v) => !v);
      setCatalogOpen(false);
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
              ? "max-w-7xl bg-white/95 backdrop-blur-xl shadow-lg border border-gray-200 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-2 lg:py-3 mx-2 lg:mx-4"
              : "max-w-7xl px-4 lg:px-6 bg-white/80 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-gray-200/60 shadow-sm",
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
              scrolled ? "w-32 h-14" : "w-40 h-16",
            )}>
              <img
                src="/stoka_logo_sin_fondo.png"
                alt="STOKA — Representantes oficiales DELIE en Argentina"
                fetchpriority="high"
                className="w-full h-full object-contain scale-[2] group-hover:scale-[2.1] active:scale-[1.9] transition-transform duration-300"
              />
            </div>
          </a>

          {/* DESKTOP NAV — "Inicio" se omite, el logo lo cubre */}
          <ul className="hidden lg:flex items-center gap-0">
            {ALL_NAV.filter(i => i.type !== "scroll").map((item) => {
              const isCatalog = item.type === "dropdown-catalogo";
              const isRecursos = item.type === "dropdown-recursos";
              const isDropdown = isCatalog || isRecursos;
              const isOpen = isCatalog ? catalogOpen : isRecursos ? recursosOpen : false;
              const itemRef = isCatalog ? catalogRef : isRecursos ? recursosRef : undefined;
              return (
                <li key={item.name} className="relative flex items-center" ref={itemRef}>
                  {isDropdown ? (
                    <>
                      <button
                        onClick={(e) => handleNavClick(e, item)}
                        className="relative px-2.5 h-9 text-[10.5px] font-black uppercase tracking-[0.06em] transition-colors duration-300 group italic whitespace-nowrap flex items-center gap-1 text-gray-600 hover:text-gray-900"
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown size={10} className={cx("transition-transform duration-200", isOpen ? "rotate-180" : "")} />
                        <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-60"
                          >
                            <div className="p-2">
                              {isCatalog && (
                                <>
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
                                </>
                              )}
                              {isRecursos && RECURSOS_ITEMS.map((rec) => (
                                <a
                                  key={rec.href}
                                  href={rec.href}
                                  onClick={(e) => handlePageNav(e, rec.href)}
                                  className="flex items-center justify-between px-4 py-2.5 text-[11px] font-bold text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-colors group"
                                >
                                  <span>{rec.name}</span>
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
                      className="relative flex items-center px-2.5 h-9 text-[10.5px] font-black uppercase tracking-[0.06em] transition-colors duration-300 group italic whitespace-nowrap text-gray-600 hover:text-gray-900"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => { navigate('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="relative group overflow-hidden bg-cyan-500 text-white px-5 py-2.5 rounded-xl font-black text-[10.5px] tracking-[0.08em] shadow-[0_4px_16px_rgba(6,182,212,0.35)] hover:bg-cyan-400 transition-all active:scale-95 italic"
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
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
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
                  onClick={(e) => (item.type === "dropdown-catalogo" || item.type === "dropdown-recursos") ? handlePageNav(e, item.href) : handleNavClick(e, item)}
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

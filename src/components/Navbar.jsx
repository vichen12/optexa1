import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronRight, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const cx = (...cls) => cls.filter(Boolean).join(" ");

const ALL_NAV = [
  { name: "Inicio",           href: "#inicio",             type: "scroll" },
  { name: "Catálogo",         href: "/catalogo",           type: "page"   },
  { name: "Industrias",       href: "/industrias",         type: "page"   },
  { name: "Beneficios",       href: "/beneficios-fiscales",type: "page"   },
  { name: "Cómo Trabajamos",  href: "/como-trabajamos",    type: "page"   },
  { name: "Nosotros",         href: "/nosotros",           type: "page"   },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, item) => {
    if (item.type === "scroll") handleScrollTo(e, item.href);
    else handlePageNav(e, item.href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 lg:px-6",
          scrolled ? "py-3 lg:py-4" : "py-6 lg:py-8",
        )}
      >
        <div
          className={cx(
            "flex justify-between items-center transition-all duration-500 w-full relative",
            scrolled
              ? "max-w-6xl bg-zinc-950/95 backdrop-blur-xl shadow-xl border border-white/10 rounded-2xl lg:rounded-3xl px-6 lg:px-10 py-2 lg:py-3 mx-2 lg:mx-4"
              : "max-w-7xl px-4 lg:px-8 bg-transparent",
          )}
        >
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, "#inicio")}
            className="group flex items-center select-none cursor-pointer"
          >
            <img
              src="/OPTEXACONFONDOBLANCO.png"
              alt="Optexa Logo"
              className={cx(
                "object-contain rounded-xl lg:rounded-2xl transition-all duration-700",
                "group-hover:scale-110 active:scale-95",
                scrolled ? "w-10 h-10 lg:w-16 lg:h-16" : "w-14 h-14 lg:w-24 lg:h-24",
              )}
            />
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-1">
            {ALL_NAV.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cx(
                    "relative px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-300 group italic whitespace-nowrap",
                    scrolled ? "text-white/75 hover:text-white" : "text-white/85 hover:text-white",
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <button
              onClick={(e) => handleScrollTo(e, "#contacto")}
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
              scrolled ? "text-white/75 hover:text-white" : "text-white/85 hover:text-white",
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
                  onClick={(e) => handleNavClick(e, item)}
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
                onClick={(e) => handleScrollTo(e, "#contacto")}
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

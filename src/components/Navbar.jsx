import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronRight, ChevronDown, X, Globe } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLangNavigate, useLangPath } from "../lib/i18n-utils";

const cx = (...cls) => cls.filter(Boolean).join(" ");

const LANGS = [
  { code: 'es', label: 'ES', full: 'Español' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'zh', label: '中文', full: '中文' },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const langNavigate = useLangNavigate();
  const langPath = useLangPath();
  const location = useLocation();

  const [scrolled, setScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen]   = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);
  const [langOpen, setLangOpen]         = useState(false);
  const catalogRef  = useRef(null);
  const recursosRef = useRef(null);
  const langRef     = useRef(null);

  const isHome = location.pathname === "/" ||
    location.pathname === "/en" || location.pathname === "/en/" ||
    location.pathname === "/zh" || location.pathname === "/zh/";

  const CATALOG_CATEGORIES = [
    { name: t('nav.catalogCategories.asrs'),      href: "/catalogo/asrs" },
    { name: t('nav.catalogCategories.robots'),    href: "/catalogo/robots-manipulacion" },
    { name: t('nav.catalogCategories.vertical'),  href: "/catalogo/almacenamiento-vertical" },
    { name: t('nav.catalogCategories.transport'), href: "/catalogo/equipo-transporte" },
    { name: t('nav.catalogCategories.software'),  href: "/catalogo/software" },
  ];

  const RECURSOS_ITEMS = [
    { name: t('nav.resourcesItems.roi'),        href: "/recursos/roi-automatizacion" },
    { name: t('nav.resourcesItems.comparator'), href: "/recursos/comparador-sistemas" },
    { name: t('nav.resourcesItems.blog'),       href: "/recursos" },
    { name: t('nav.resourcesItems.cases'),      href: "/casos-de-exito" },
    { name: t('nav.resourcesItems.glossary'),   href: "/recursos/glosario" },
  ];

  const ALL_NAV = [
    { name: t('nav.home'),       href: "#inicio",              type: "scroll"            },
    { name: t('nav.catalog'),    href: "/catalogo",            type: "dropdown-catalogo" },
    { name: t('nav.industries'), href: "/industrias",          type: "page"              },
    { name: t('nav.taxBenefits'), href: "/beneficios-fiscales", type: "page"             },
    { name: t('nav.howWeWork'),  href: "/como-trabajamos",     type: "page"              },
    { name: t('nav.aboutUs'),    href: "/nosotros",            type: "page"              },
    { name: t('nav.resources'),  href: "/recursos",            type: "dropdown-recursos" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (catalogRef.current  && !catalogRef.current.contains(e.target))  setCatalogOpen(false);
      if (recursosRef.current && !recursosRef.current.contains(e.target)) setRecursosOpen(false);
      if (langRef.current     && !langRef.current.contains(e.target))     setLangOpen(false);
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
      langNavigate("/");
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
    langNavigate(href);
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

  /* URL equivalente de la página actual en OTRO idioma.
     Se usa como href real del <a> del selector para que Googlebot la siga sin ejecutar JS. */
  const langSwitchHref = (newLang) => {
    let currentPath = location.pathname;
    if (currentPath.startsWith('/en')) currentPath = currentPath.slice(3) || '/';
    else if (currentPath.startsWith('/zh')) currentPath = currentPath.slice(3) || '/';
    if (!currentPath.startsWith('/')) currentPath = '/' + currentPath;
    return newLang === 'es' ? currentPath : `/${newLang}${currentPath === '/' ? '' : currentPath}`;
  };

  /* Click en el selector: navegación SPA, conservando el href real del <a>. */
  const handleLangClick = (e, newLang) => {
    setLangOpen(false);
    setMobileMenuOpen(false);
    if (i18n.language === newLang) { e.preventDefault(); return; }
    // dejar que clics modificados (ctrl/cmd/nueva pestaña) usen el href nativo
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    i18n.changeLanguage(newLang);
    window.location.assign(langSwitchHref(newLang));
  };

  const currentLang = LANGS.find(l => l.code === i18n.language) || LANGS[0];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
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
                src="/stoka_logo_sin_fondo.webp"
                alt="STOKA — Representantes oficiales DELIE en Argentina"
                width="160" height="64"
                fetchpriority="high"
                className="w-full h-full object-contain scale-[2] group-hover:scale-[2.1] active:scale-[1.9] transition-transform duration-300"
              />
            </div>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-0">
            {ALL_NAV.filter(i => i.type !== "scroll").map((item) => {
              const isCatalog  = item.type === "dropdown-catalogo";
              const isRecursos = item.type === "dropdown-recursos";
              const isDropdown = isCatalog || isRecursos;
              const isOpen     = isCatalog ? catalogOpen : isRecursos ? recursosOpen : false;
              const itemRef    = isCatalog ? catalogRef  : isRecursos ? recursosRef  : undefined;
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
                                    href={langPath("/catalogo")}
                                    onClick={(e) => handlePageNav(e, "/catalogo")}
                                    className="block px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-cyan-500 transition-colors rounded-xl hover:bg-gray-50"
                                  >
                                    {t('nav.viewCatalog')}
                                  </a>
                                  <div className="border-t border-gray-100 my-1" />
                                  {CATALOG_CATEGORIES.map((cat) => (
                                    <a
                                      key={cat.href}
                                      href={langPath(cat.href)}
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
                                  href={langPath(rec.href)}
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
                      href={langPath(item.href)}
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

          {/* DESKTOP RIGHT: LANG SWITCHER + CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(v => !v)}
                aria-label={t('nav.language')}
                aria-expanded={langOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[10.5px] font-black text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all italic tracking-[0.06em]"
              >
                <Globe size={13} />
                <span>{currentLang.label}</span>
                <ChevronDown size={9} className={cx("transition-transform duration-200", langOpen ? "rotate-180" : "")} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.13 }}
                    className="absolute top-full right-0 mt-2 w-36 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-60"
                  >
                    <div className="p-1.5">
                      {LANGS.map((lang) => (
                        <a
                          key={lang.code}
                          href={langSwitchHref(lang.code)}
                          onClick={(e) => handleLangClick(e, lang.code)}
                          lang={lang.code}
                          hrefLang={lang.code}
                          aria-current={i18n.language === lang.code ? 'true' : undefined}
                          className={cx(
                            "w-full text-left flex items-center justify-between px-3 py-2 text-[11px] font-bold rounded-xl transition-colors",
                            i18n.language === lang.code
                              ? "text-cyan-600 bg-cyan-50"
                              : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                          )}
                        >
                          <span>{lang.full}</span>
                          {i18n.language === lang.code && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          )}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA button */}
            <button
              onClick={() => { langNavigate('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="relative group overflow-hidden bg-cyan-500 text-white px-5 py-2.5 rounded-xl font-black text-[10.5px] tracking-[0.08em] shadow-[0_4px_16px_rgba(6,182,212,0.35)] hover:bg-cyan-400 transition-all active:scale-95 italic"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              <span className="flex items-center gap-2">
                {t('nav.consult')} <ChevronRight size={16} />
              </span>
            </button>
          </div>

          {/* MOBILE TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileMenuOpen}
            className={cx(
              "lg:hidden p-2 rounded-xl transition-colors",
              "text-gray-600 hover:text-gray-900",
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
            role="dialog"
            aria-modal="true"
            aria-label={t('nav.menu')}
            className="fixed inset-0 z-60 bg-white flex flex-col items-center justify-center p-8 overflow-hidden font-sans"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t('nav.closeMenu')}
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
                  href={langPath(item.href)}
                  onClick={(e) => (item.type === "dropdown-catalogo" || item.type === "dropdown-recursos") ? handlePageNav(e, item.href) : handleNavClick(e, item)}
                  className="text-4xl font-black text-slate-900 uppercase tracking-tighter hover:text-cyan-500 transition-all italic flex flex-col items-center"
                >
                  <span className="text-[10px] font-mono text-slate-300 tracking-[0.5em] mb-1">
                    // 0{i + 1}
                  </span>
                  {item.name}
                </motion.a>
              ))}

              {/* Language switcher mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 mt-2"
              >
                {LANGS.map((lang) => (
                  <a
                    key={lang.code}
                    href={langSwitchHref(lang.code)}
                    onClick={(e) => handleLangClick(e, lang.code)}
                    lang={lang.code}
                    hrefLang={lang.code}
                    aria-current={i18n.language === lang.code ? 'true' : undefined}
                    className={cx(
                      "px-4 py-2 rounded-xl text-sm font-black transition-all",
                      i18n.language === lang.code
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    {lang.label}
                  </a>
                ))}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => { setMobileMenuOpen(false); langNavigate('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ outline: "none" }}
                className="mt-6 bg-cyan-500 text-white px-12 py-5 rounded-2xl font-black text-xl italic shadow-[0_4px_24px_rgba(6,182,212,0.3)]"
              >
                {t('nav.consult')}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

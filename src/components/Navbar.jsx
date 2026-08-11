import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronRight, ChevronDown, X, Globe } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLangNavigate, useLangPath } from "../lib/i18n-utils";
import { delocalizePath, localizePath } from "../lib/slugMap";

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

  const [scrolled, setScrolled]             = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen]       = useState(false);
  const [recursosOpen, setRecursosOpen]     = useState(false);
  const [langOpen, setLangOpen]             = useState(false);
  const [mobCatOpen, setMobCatOpen]         = useState(false);
  const [mobRecOpen, setMobRecOpen]         = useState(false);
  const catalogRef  = useRef(null);
  const recursosRef = useRef(null);
  const langRef     = useRef(null);
  const closeTimer  = useRef(null);

  /* Ruta actual sin prefijo de idioma y con slugs en ES, para el estado activo */
  const basePath = (() => {
    let p = location.pathname;
    if (p.startsWith('/en')) p = p.slice(3) || '/';
    else if (p.startsWith('/zh')) p = p.slice(3) || '/';
    return delocalizePath(p || '/');
  })();
  const isHome = basePath === '/';

  const CATALOG_CATEGORIES = [
    { name: t('nav.catalogCategories.asrs'),      href: "/catalogo/asrs" },
    { name: t('nav.catalogCategories.robots'),    href: "/catalogo/robots-manipulacion" },
    { name: t('nav.catalogCategories.vertical'),  href: "/catalogo/almacenamiento-vertical" },
    { name: t('nav.catalogCategories.transport'), href: "/catalogo/equipo-transporte" },
    { name: t('nav.catalogCategories.software'),  href: "/catalogo/software" },
  ];

  /* Recursos: herramientas primero, empresa/cobertura después del divisor */
  const RECURSOS_ITEMS = [
    { name: t('footer.resourcesLinks.faq'),       href: "/preguntas-frecuentes" },
    { name: t('nav.resourcesItems.roi'),          href: "/recursos/roi-automatizacion" },
    { name: t('nav.resourcesItems.comparator'),   href: "/recursos/comparador-sistemas" },
    { name: t('nav.resourcesItems.blog'),         href: "/recursos" },
    { name: t('nav.resourcesItems.cases'),        href: "/casos-de-exito" },
    { name: t('nav.resourcesItems.glossary'),     href: "/recursos/glosario" },
    { divider: true },
    { name: t('nav.howWeWork'),                   href: "/como-trabajamos" },
    { name: t('footer.companyLinks.chile'),       href: "/chile" },
  ];

  /* 6 ítems, mismos en desktop y mobile — Recursos al final, después de Contacto */
  const ALL_NAV = [
    { name: t('nav.catalog'),                 href: "/catalogo",  type: "dropdown-catalogo" },
    { name: t('nav.industries'),              href: "/industrias", type: "page" },
    { name: t('nav.taxBenefits'),             href: "/beneficios-fiscales", type: "page" },
    { name: t('nav.aboutUs'),                 href: "/nosotros",  type: "page" },
    { name: t('footer.companyLinks.contact'), href: "/contacto",  type: "page" },
    { name: t('nav.resources'),               href: "/recursos",  type: "dropdown-recursos" },
  ];

  /* Un ítem está activo si la ruta actual cae bajo su sección */
  const isActive = (item) => {
    if (item.type === "dropdown-catalogo") return basePath.startsWith("/catalogo");
    if (item.type === "dropdown-recursos") {
      return ["/recursos", "/preguntas-frecuentes", "/casos-de-exito", "/como-trabajamos", "/chile"]
        .some(p => basePath === p || basePath.startsWith(p + "/"));
    }
    return basePath === item.href || basePath.startsWith(item.href + "/");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Bloquear el scroll del body con el menú mobile abierto */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (catalogRef.current  && !catalogRef.current.contains(e.target))  setCatalogOpen(false);
      if (recursosRef.current && !recursosRef.current.contains(e.target)) setRecursosOpen(false);
      if (langRef.current     && !langRef.current.contains(e.target))     setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Hover con retardo de cierre (150 ms) para poder cruzar el mouse al panel */
  const openDrop = useCallback((which) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setCatalogOpen(which === 'catalogo');
    setRecursosOpen(which === 'recursos');
  }, []);
  const delayedClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => { setCatalogOpen(false); setRecursosOpen(false); }, 150);
  }, []);

  const handlePageNav = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setCatalogOpen(false);
    setRecursosOpen(false);
    langNavigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = (e) => {
    if (isHome) {
      e.preventDefault();
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handlePageNav(e, "/");
    }
  };

  const handleNavClick = (e, item) => {
    if (item.type === "dropdown-catalogo") {
      // Click navega al catálogo completo; el dropdown se abre con hover.
      handlePageNav(e, "/catalogo");
    } else if (item.type === "dropdown-recursos") {
      e.preventDefault();
      setRecursosOpen((v) => !v);
      setCatalogOpen(false);
    } else handlePageNav(e, item.href);
  };

  /* URL equivalente de la página actual en OTRO idioma (href real rastreable),
     traduciendo los slugs: /en/tax-benefits ↔ /beneficios-fiscales ↔ /zh/tax-benefits. */
  const langSwitchHref = (newLang) => {
    let currentPath = location.pathname;
    if (currentPath.startsWith('/en')) currentPath = currentPath.slice(3) || '/';
    else if (currentPath.startsWith('/zh')) currentPath = currentPath.slice(3) || '/';
    if (!currentPath.startsWith('/')) currentPath = '/' + currentPath;
    const esPath = delocalizePath(currentPath);
    if (newLang === 'es') return esPath;
    return esPath === '/' ? `/${newLang}` : `/${newLang}${localizePath(esPath, newLang)}`;
  };

  const handleLangClick = (e, newLang) => {
    setLangOpen(false);
    setMobileMenuOpen(false);
    if (i18n.language === newLang) { e.preventDefault(); return; }
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    i18n.changeLanguage(newLang);
    window.location.assign(langSwitchHref(newLang));
  };

  const currentLang = LANGS.find(l => l.code === i18n.language) || LANGS[0];

  const dropItemCls = "flex items-center justify-between px-4 py-2.5 text-[12px] font-semibold text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-colors group";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 lg:px-6 py-2.5"
      >
        <div
          className={cx(
            "flex justify-between items-center w-full max-w-7xl relative rounded-2xl lg:rounded-3xl border px-4 lg:px-6 transition-[background-color,box-shadow,border-color,padding] duration-300",
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-lg border-gray-200 py-2"
              : "bg-white/80 backdrop-blur-md shadow-sm border-gray-200/60 py-2.5",
          )}
        >
          {/* LOGO — link normal a la home */}
          <a
            href={langPath("/")}
            onClick={handleLogoClick}
            aria-label="STOKA"
            className="group flex items-center select-none cursor-pointer shrink-0 py-1"
          >
            <img
              src="/stoka-logo.png"
              alt={t('nav.logoAlt')}
              width="720" height="227"
              fetchpriority="high"
              className={cx(
                "w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] active:scale-95",
                scrolled ? "h-9 lg:h-10" : "h-10 lg:h-11",
              )}
            />
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-1">
            {ALL_NAV.map((item) => {
              const isCatalog  = item.type === "dropdown-catalogo";
              const isRecursos = item.type === "dropdown-recursos";
              const isDropdown = isCatalog || isRecursos;
              const isOpen     = isCatalog ? catalogOpen : isRecursos ? recursosOpen : false;
              const itemRef    = isCatalog ? catalogRef  : isRecursos ? recursosRef  : undefined;
              const active     = isActive(item);
              const linkCls    = cx(
                "relative flex items-center gap-1 px-3 h-9 text-[12px] font-bold uppercase tracking-[0.04em] whitespace-nowrap transition-colors duration-200 group",
                active ? "text-slate-900" : "text-gray-500 hover:text-slate-900",
              );
              const underline = (
                <span className={cx(
                  "absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-500 transition-opacity duration-200",
                  active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                )} />
              );
              return (
                <li
                  key={item.name}
                  className="relative flex items-center"
                  ref={itemRef}
                  onMouseEnter={isDropdown ? () => openDrop(isCatalog ? 'catalogo' : 'recursos') : undefined}
                  onMouseLeave={isDropdown ? delayedClose : undefined}
                >
                  {isDropdown ? (
                    <>
                      <button
                        onClick={(e) => handleNavClick(e, item)}
                        aria-expanded={isOpen}
                        aria-haspopup="menu"
                        aria-current={active ? "page" : undefined}
                        className={linkCls}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown size={11} className={cx("transition-transform duration-200", isOpen ? "rotate-180" : "")} />
                        {underline}
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-60"
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
                                    <a key={cat.href} href={langPath(cat.href)} onClick={(e) => handlePageNav(e, cat.href)} className={dropItemCls}>
                                      <span>{cat.name}</span>
                                      <ChevronRight size={12} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
                                    </a>
                                  ))}
                                </>
                              )}
                              {isRecursos && RECURSOS_ITEMS.map((rec, ri) => (
                                rec.divider
                                  ? <div key={'div' + ri} className="border-t border-gray-100 my-1" />
                                  : (
                                    <a key={rec.href} href={langPath(rec.href)} onClick={(e) => handlePageNav(e, rec.href)} className={dropItemCls}>
                                      <span>{rec.name}</span>
                                      <ChevronRight size={12} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
                                    </a>
                                  )
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
                      aria-current={active ? "page" : undefined}
                      className={linkCls}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {underline}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* DESKTOP RIGHT: LANG + CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(v => !v)}
                aria-label={t('nav.language')}
                aria-expanded={langOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-bold text-gray-500 hover:text-slate-900 hover:bg-gray-100 transition-all tracking-[0.04em]"
              >
                <Globe size={13} />
                <span>{currentLang.label}</span>
                <ChevronDown size={10} className={cx("transition-transform duration-200", langOpen ? "rotate-180" : "")} />
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
                            "w-full text-left flex items-center justify-between px-3 py-2 text-[12px] font-semibold rounded-xl transition-colors",
                            i18n.language === lang.code
                              ? "text-cyan-600 bg-cyan-50"
                              : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                          )}
                        >
                          <span>{lang.full}</span>
                          {i18n.language === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => { langNavigate('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="relative group overflow-hidden bg-cyan-500 text-white px-5 py-2.5 rounded-xl font-bold text-[12px] uppercase tracking-[0.06em] shadow-[0_4px_16px_rgba(6,182,212,0.35)] hover:bg-cyan-400 transition-all active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              <span className="flex items-center gap-1.5">
                {t('nav.consult')} <ChevronRight size={15} />
              </span>
            </button>
          </div>

          {/* MOBILE TRIGGER — área táctil de 44px */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-gray-100 text-slate-700 hover:bg-gray-200 active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU — panel lateral */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={t('nav.menu')}
            className="fixed inset-0 z-60 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="absolute top-0 right-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Header del panel */}
              <div className="flex items-center justify-between pl-5 pr-3 pt-4 pb-3 border-b border-gray-100">
                <a href={langPath("/")} onClick={handleLogoClick}>
                  <img src="/stoka-logo.png" alt={t('nav.logoAlt')} className="h-9 w-auto object-contain" />
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={t('nav.closeMenu')}
                  className="flex items-center justify-center w-11 h-11 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-gray-100 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navegación */}
              <nav className="flex-1 overflow-y-auto px-3 py-3">
                {ALL_NAV.map((item, i) => {
                  const isCatalog  = item.type === "dropdown-catalogo";
                  const isRecursos = item.type === "dropdown-recursos";
                  const isDropdown = isCatalog || isRecursos;
                  const accOpen    = isCatalog ? mobCatOpen : isRecursos ? mobRecOpen : false;
                  const active     = isActive(item);
                  const rowCls = cx(
                    "flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-[15px] font-bold transition-colors",
                    active ? "text-cyan-700 bg-cyan-50" : "text-slate-800 hover:bg-gray-50 active:bg-gray-100",
                  );
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.2 }}
                    >
                      {isDropdown ? (
                        <>
                          {/* Acordeón: cerrado por defecto */}
                          <button
                            onClick={() => isCatalog ? setMobCatOpen(v => !v) : setMobRecOpen(v => !v)}
                            aria-expanded={accOpen}
                            className={rowCls}
                          >
                            <span>{item.name}</span>
                            <ChevronDown size={16} className={cx("text-gray-400 transition-transform duration-200", accOpen ? "rotate-180" : "")} />
                          </button>
                          <AnimatePresence initial={false}>
                            {accOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 pl-3 border-l border-gray-100 mb-1 py-1">
                                  {isCatalog && (
                                    <a href={langPath("/catalogo")} onClick={(e) => handlePageNav(e, "/catalogo")}
                                      className="block px-3 py-2 rounded-lg text-[13px] font-bold text-cyan-600 hover:bg-cyan-50 transition-colors">
                                      {t('nav.viewCatalog')}
                                    </a>
                                  )}
                                  {(isCatalog ? CATALOG_CATEGORIES : RECURSOS_ITEMS.filter(r => !r.divider)).map((sub) => (
                                    <a key={sub.href} href={langPath(sub.href)} onClick={(e) => handlePageNav(e, sub.href)}
                                      className="block px-3 py-2 rounded-lg text-[13px] font-medium text-gray-500 hover:text-cyan-600 hover:bg-cyan-50 transition-colors">
                                      {sub.name}
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
                          aria-current={active ? "page" : undefined}
                          className={rowCls}
                        >
                          <span>{item.name}</span>
                          <ChevronRight size={16} className="text-gray-300" />
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              {/* Pie: idioma + CTA */}
              <div className="px-5 pb-6 pt-4 border-t border-gray-100 space-y-3"
                style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}>
                <div className="grid grid-cols-3 gap-1 p-1 bg-gray-100 rounded-xl">
                  {LANGS.map((lang) => (
                    <a
                      key={lang.code}
                      href={langSwitchHref(lang.code)}
                      onClick={(e) => handleLangClick(e, lang.code)}
                      lang={lang.code}
                      hrefLang={lang.code}
                      aria-current={i18n.language === lang.code ? 'true' : undefined}
                      className={cx(
                        "text-center px-2 py-2 rounded-lg text-[13px] font-black transition-all",
                        i18n.language === lang.code
                          ? "bg-white text-cyan-600 shadow-sm"
                          : "text-gray-500 hover:text-gray-800"
                      )}
                    >
                      {lang.label}
                    </a>
                  ))}
                </div>
                <button
                  onClick={() => { setMobileMenuOpen(false); langNavigate('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ outline: "none" }}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-3.5 rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_4px_16px_rgba(6,182,212,0.3)] transition-colors flex items-center justify-center gap-2"
                >
                  {t('nav.consult')} <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { LangLink } from '../../lib/i18n-utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CTABanner } from '../../components/CTABanner';
import { WppFloat } from '../../components/WppFloat';
import { SeoHead } from '../../lib/SeoHead';
import { getGlosario, getGlosarioCats } from '../../data/glosarioData';

export const GlosarioPage = () => {
  const { t, i18n } = useTranslation();
  const p = (k) => t(`pages.glosario.${k}`, { returnObjects: true });
  const [query, setQuery] = useState('');
  const [catActiva, setCatActiva] = useState('todos');
  const canonical = 'https://www.stokagroup.com/recursos/glosario';

  /* Términos y categorías resueltos al idioma de la página (es/en/zh). */
  const TERMINOS = getGlosario(i18n.language);
  const CATS = getGlosarioCats(i18n.language);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Recursos", "item": "https://www.stokagroup.com/recursos" },
      { "@type": "ListItem", "position": 3, "name": "Glosario ASRS", "item": canonical },
    ],
  };

  const buscando = query.length > 1;

  const filtered = TERMINOS.filter(t => {
    const matchCat = catActiva === 'todos' || t.cat === catActiva;
    const matchQuery = !buscando || t.term.toLowerCase().includes(query.toLowerCase()) || t.def.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  const contarCat = (id) => id === 'todos'
    ? TERMINOS.length
    : TERMINOS.filter(t => t.cat === id).length;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SeoHead
        title={p('metaTitle')}
        description={p('metaDesc')}
        basePath={'/recursos/glosario'}
      />
      <Helmet>
                                        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-white pt-36 pb-10 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
            <LangLink to="/" className="hover:text-cyan-500 transition-colors">{t('nav.home')}</LangLink>
            <span>/</span>
            <LangLink to="/recursos" className="hover:text-cyan-500 transition-colors">{t('nav.resources')}</LangLink>
            <span>/</span>
            <span className="text-gray-600">{p('breadcrumb')}</span>
          </nav>
          <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-5">
            {p('heroTag')} · {TERMINOS.length}+
          </p>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
            {p('heroH1_a')}<br />
            <span className="text-cyan-500">{p('heroH1_b')}</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            {p('heroSub')}
          </p>
          <div className="relative max-w-sm mx-auto">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={p('searchPlaceholder')}
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors text-sm shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Filtros por categoría */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
          {CATS.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setCatActiva(cat.id); setQuery(''); }}
              className={`text-xs font-bold px-4 py-2 rounded-full border transition-colors ${
                catActiva === cat.id && !buscando
                  ? 'bg-cyan-500 border-cyan-500 text-white'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-cyan-300 hover:text-gray-900'
              }`}
            >
              {cat.label}
              <span className={`ml-1.5 text-[10px] font-mono ${catActiva === cat.id && !buscando ? 'text-white/70' : 'text-gray-400'}`}>
                {contarCat(cat.id)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Términos */}
      <div className="bg-white">
        <section className="max-w-4xl mx-auto px-6 py-8 pb-20">
          {buscando && (
            <p className="text-sm text-gray-400 mb-6">
              {t('pages.glosario.resultsFor', { count: filtered.length })} "<strong className="text-gray-700">{query}</strong>"
            </p>
          )}

          <AnimatePresence mode="wait">
            <motion.dl
              key={catActiva + query}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((t, i) => (
                <div
                  key={t.id}
                  id={t.id}
                  className={`py-4 ${i < filtered.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-black text-gray-900 text-sm shrink-0">{t.term}</dt>
                    {buscando && (
                      <span className="text-[10px] font-mono text-cyan-600 border border-cyan-200 rounded-full px-2 py-0.5 shrink-0">
                        {CATS.find(c => c.id === t.cat)?.label}
                      </span>
                    )}
                  </div>
                  <dd className="text-gray-500 text-sm leading-relaxed mt-1">{t.def}</dd>
                  {t.articulo && i18n.language === 'es' && (
                    <dd className="mt-1.5">
                      <LangLink to={`/recursos/${t.articulo}`} className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 hover:text-cyan-500">
                        Leé la guía completa: qué es un transelevador →
                      </LangLink>
                    </dd>
                  )}
                </div>
              ))}
            </motion.dl>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-gray-400 text-center py-16">{p('noResults')}</p>
          )}
        </section>
      </div>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

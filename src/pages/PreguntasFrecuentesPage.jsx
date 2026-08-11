import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { LangLink } from '../lib/i18n-utils';
import { SeoHead } from '../lib/SeoHead';

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-200 rounded-2xl hover:border-cyan-300 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 text-left p-6"
        style={{ outline: 'none' }}
      >
        <h3 className="font-black text-gray-900 text-sm leading-snug">{item.q}</h3>
        <ChevronDown size={16} className={`shrink-0 mt-0.5 text-cyan-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <p className={`px-6 pb-6 -mt-2 text-gray-600 text-sm leading-relaxed faq-answer ${open ? 'block' : 'hidden'}`}>{item.a}</p>
    </div>
  );
}

export const PreguntasFrecuentesPage = () => {
  const { t, i18n } = useTranslation();
  const ns = 'pages.faq';
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const groups = t(`${ns}.groups`, { returnObjects: true });
  const list = Array.isArray(groups) ? groups : [];
  const allItems = list.flatMap(g => Array.isArray(g.items) ? g.items : []);
  const canonical = 'https://www.stokagroup.com/preguntas-frecuentes';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SeoHead
        title={t(`${ns}.metaTitle`)}
        description={t(`${ns}.metaDesc`)}
        basePath={'/preguntas-frecuentes'}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": i18n.language,
          "mainEntity": allItems.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": t(`${ns}.h1`), "item": canonical },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": canonical,
          "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".faq-answer"] },
        })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="bg-slate-950 pt-36 pb-16 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <LangLink to="/" className="hover:text-cyan-400 transition-colors">{t('pages.breadcrumb.home')}</LangLink>
            <span>/</span>
            <span className="text-gray-300">{t(`${ns}.h1`)}</span>
          </nav>
          <h1 className="text-white text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-5">
            {t(`${ns}.h1`)}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            {t(`${ns}.heroSub`)}
          </p>
        </div>
      </section>

      {/* GRUPOS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {list.map((group, gi) => (
            <motion.div key={gi} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.05 }}>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-5">{group.title}</h2>
              <div className="space-y-3">
                {(group.items || []).map((item, i) => (
                  <FaqItem key={i} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

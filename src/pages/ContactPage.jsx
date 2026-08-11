import { useEffect } from 'react';
import { SeoHead } from '../lib/SeoHead';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Contact } from '../components/contact';
import { WppFloat } from '../components/WppFloat';
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  return (
    <div className="min-h-screen bg-white">
      <SeoHead
        title={t('pages.contactPage.metaTitle')}
        description={t('pages.contactPage.metaDesc')}
        basePath={'/contacto'}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://www.stokagroup.com/contacto" },
          ]
        })}</script>
      </Helmet>
      <Navbar />
      <div className="bg-white mt-20">
        <Contact />
      </div>
      <WppFloat />
      <Footer />
    </div>
  );
};

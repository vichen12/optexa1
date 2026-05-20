import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Contact } from '../components/contact';
import { WppFloat } from '../components/WppFloat';

export const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contacto — Stoka';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <WppFloat />
      <Footer />
    </div>
  );
};

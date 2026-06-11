import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Contact } from '../components/contact';
import { WppFloat } from '../components/WppFloat';
import { CheckCircle } from 'lucide-react';

const PROMESAS = [
  'Respuesta técnica en menos de 24 horas',
  'Ingeniero especializado en ASRS asignado a tu consulta',
  'Orientación técnica inicial sin costo ni compromiso',
  'Estimación de ROI incluida en la primera propuesta',
];

export const ContactPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cotizar Sistema ASRS | Presupuesto Automatización Almacén Argentina | STOKA</title>
        <meta name="description" content="Cotizá tu sistema ASRS con los principales proveedores de automatización de almacenes en Argentina. Ingenieros especializados responden en 24 horas. Presupuesto sin costo para tu almacén, bodega o depósito." />
        <meta property="og:title" content="Cotizar ASRS | Proveedores Automatización Almacenes Argentina | STOKA" />
        <meta property="og:description" content="Cotizá tu proyecto de automatización de almacén con STOKA, integradores WMS y representantes DELIE en Argentina. Respuesta técnica en 24 horas." />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.stokagroup.com/contacto" />
        <link rel="canonical" href="https://www.stokagroup.com/contacto" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://www.stokagroup.com/contacto" }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* SEO header — transactional keywords */}
      <section className="bg-slate-950 pt-32 pb-12 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 items-start">
          <div>
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-4">
              Proveedores de automatización logística · Argentina y Chile
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-tight mb-5">
              Cotizá tu sistema<br />
              <span className="text-cyan-400">ASRS sin costo</span>
            </h1>
            <p className="text-gray-300 text-base leading-relaxed max-w-xl">
              STOKA es una de las principales empresas de automatización logística en Argentina. Como integradores WMS y representantes oficiales de DELIE, entregamos presupuestos técnicos para sistemas ASRS, transelevadores, robots AMR y software WMS/WCS. El precio de cada proyecto depende del layout, throughput y equipamiento. La consulta inicial es siempre sin costo.
            </p>
          </div>
          <div className="space-y-3 mt-2">
            {PROMESAS.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-snug">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Contact />
      </div>
      <WppFloat />
      <Footer />
    </div>
  );
};

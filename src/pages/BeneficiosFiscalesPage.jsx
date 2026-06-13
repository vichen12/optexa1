import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { LangLink, useLangNavigate } from '../lib/i18n-utils';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { WppFloat } from '../components/WppFloat';
import { Shield, Percent, Building2, Factory, CheckCircle, ArrowRight, FileText, TrendingDown, Landmark } from 'lucide-react';
import { SeoHead } from '../lib/SeoHead';

const MONTOS = ['USD 150.000 – 600.000', 'USD 600.000 – 2.000.000', 'USD 2.000.000 – 9.000.000', 'Más de USD 9.000.000', 'Aún no lo tengo definido'];
const PROVINCIAS = ['Buenos Aires (Provincia)', 'CABA', 'Córdoba', 'Santa Fe', 'Mendoza', 'San Juan', 'Neuquén', 'Salta', 'Tucumán', 'Chubut', 'Santa Cruz', 'Otra'];

const EvaluacionForm = () => {
  const { t } = useTranslation();
  const fp = (k) => t(`pages.beneficiosFiscales.${k}`, { returnObjects: true });
  const langNavigate = useLangNavigate();
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', monto: '', provincia: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola STOKA! Quiero evaluar beneficios fiscales.\n\nNombre: ${form.nombre}\nEmpresa: ${form.empresa}\nEmail: ${form.email}\nTeléfono: ${form.telefono}\nMonto estimado: ${form.monto}\nProvincia: ${form.provincia}`;
    window.open(`https://wa.me/5491140000000?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  if (sent) return (
    <div className="p-8 rounded-2xl bg-cyan-50 border border-cyan-200 text-center">
      <CheckCircle size={32} className="text-cyan-500 mx-auto mb-3" />
      <p className="font-black text-gray-900 text-lg mb-1">{fp('formThanks')}</p>
      <p className="text-gray-500 text-sm">{fp('formThanksSub')}</p>
      <button onClick={() => langNavigate('/catalogo')} className="mt-5 text-xs text-cyan-600 font-bold underline underline-offset-2">{fp('formVerCatalogo')}</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
      {[
        { name: 'nombre', label: fp('formNombre'), type: 'text', placeholder: fp('formNombre'), required: true },
        { name: 'empresa', label: fp('formEmpresa'), type: 'text', placeholder: fp('formEmpresa'), required: true },
        { name: 'email', label: fp('formEmail'), type: 'email', placeholder: 'nombre@empresa.com', required: true },
        { name: 'telefono', label: fp('formTelefono'), type: 'tel', placeholder: '+54 11 xxxx-xxxx', required: false },
      ].map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-700">{field.label}{field.required && <span className="text-cyan-500 ml-0.5">*</span>}</label>
          <input name={field.name} type={field.type} placeholder={field.placeholder} required={field.required}
            value={form[field.name]} onChange={handleChange}
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors" />
        </div>
      ))}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-gray-700">{fp('formMonto')}<span className="text-cyan-500 ml-0.5">*</span></label>
        <select name="monto" required value={form.monto} onChange={handleChange}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-cyan-400 transition-colors bg-white">
          <option value="">{fp('formSelectMonto')}</option>
          {MONTOS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-gray-700">{fp('formProvincia')}<span className="text-cyan-500 ml-0.5">*</span></label>
        <select name="provincia" required value={form.provincia} onChange={handleChange}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-cyan-400 transition-colors bg-white">
          <option value="">{fp('formSelectProvincia')}</option>
          {PROVINCIAS.map(prov => <option key={prov} value={prov}>{prov}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <button type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
          {fp('formBtn')} <ArrowRight size={14} />
        </button>
        <p className="text-center text-gray-400 text-[11px] mt-2">{fp('formDisclaimer')}</p>
      </div>
    </form>
  );
};

export const BeneficiosFiscalesPage = () => {
  const { t } = useTranslation();
  const p = (k) => t(`pages.beneficiosFiscales.${k}`, { returnObjects: true });
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqItems = p('faqItems');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.stokagroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Beneficios Fiscales", "item": "https://www.stokagroup.com/beneficios-fiscales" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (Array.isArray(faqItems) ? faqItems : []).map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <div className="min-h-screen text-gray-900">
      <SeoHead
        title={p('metaTitle')}
        description={p('metaDesc')}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      {/* ── HERO ── */}
      <div className="relative mt-20 min-h-105 flex items-end overflow-hidden">
        <img
          src="/bandera4-cropped.webp"
          alt="Beneficios fiscales Argentina para automatización de almacenes"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-500" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20 pt-32">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <LangLink to="/" className="hover:text-cyan-400 transition-colors">{t('nav.home')}</LangLink>
              <span>/</span>
              <span className="text-slate-400">{p('breadcrumb')}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em]">{p('heroTagNorm')}</p>
              <span className="text-[10px] font-black uppercase tracking-widest bg-cyan-400 text-slate-950 px-3 py-1 rounded-full">
                {p('heroUpdated')}
              </span>
            </div>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[1.05] mb-5 max-w-4xl">
              {p('heroH1_a')}<br />
              <span className="text-cyan-400">{p('heroH1_b')}</span><br />
              {p('heroH1_c')}
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              {p('heroSubA')} <strong className="text-white">{p('heroSubBold')}</strong> {p('heroSubB')} <LangLink to="/catalogo/asrs" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-2">{p('heroSubLink')}</LangLink>{p('heroSubC')}
            </p>
            <div className="flex flex-wrap gap-2">
              {(p('heroChips') || []).map((tag) => (
                <span key={tag} className="text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── RESUMEN — tabla mapa de beneficios ── */}
      <section className="bg-white py-14 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-2">{p('mapaTag')}</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">{p('mapaH2')}</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm min-w-160">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wide">{p('colHerramienta')}</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wide">{p('colMonto')}</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wide">{p('colQuien')}</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wide text-cyan-400">{p('colBeneficio')}</th>
                </tr>
              </thead>
              <tbody>
                {(p('mapaRows') || []).map((row, i) => (
                  <motion.tr key={i}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 font-black text-gray-900 border-r border-gray-100">{row.herramienta}</td>
                    <td className="px-5 py-4 text-gray-600 border-r border-gray-100 whitespace-nowrap">{row.monto}</td>
                    <td className="px-5 py-4 text-gray-600 border-r border-gray-100">{row.quien}</td>
                    <td className="px-5 py-4 text-cyan-700 font-semibold">{row.beneficio}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-3">{p('mapaDisclaimer')}</p>
        </div>
      </section>

      {/* ── SECCIÓN 3: RIMI EN DETALLE ── */}
      <section id="rimi" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                01 — RIMI · Ley 27.802
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              {p('rimiSectionH2')}
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-10 max-w-3xl">
              {p('rimiIntro')}
            </p>

            {/* Montos por categoría */}
            <div className="mb-12">
              <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-4">{p('rimiMontosH3')}</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-5 py-3 text-left font-bold">{p('rimiTableCat')}</th>
                      <th className="px-5 py-3 text-left font-bold">{p('rimiTableMonto')}</th>
                      <th className="px-5 py-3 text-left font-bold">{p('rimiTableEquiv')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {(p('rimiMontosRows') || []).map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                        <td className="px-5 py-3.5 font-semibold text-gray-800 border-r border-gray-100">{row.cat}</td>
                        <td className="px-5 py-3.5 text-cyan-700 font-bold border-r border-gray-100">{row.monto}</td>
                        <td className="px-5 py-3.5 text-gray-500 text-xs">{row.equiv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-xs mt-2">{p('rimiTableNote')}</p>
            </div>

            {/* H3 — ¿Califica? */}
            <div className="mb-12 p-6 rounded-2xl bg-cyan-50 border border-cyan-100">
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-3">{p('rimiCalificaH3')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {p('rimiCalificaP')}
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                {(p('rimiCalificaItems') || []).map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-cyan-100">
                    <CheckCircle size={14} className="text-cyan-500 shrink-0" />
                    <span className="text-gray-700">{item.label}</span>
                    <span className="ml-auto text-[10px] font-black text-cyan-600 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full">{item.tipo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* H3 — Beneficio 1: Amortización */}
            <div className="mb-12">
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4">{p('rimiB1H3')}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {p('rimiB1P')}
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-5 py-3 text-left font-bold">{p('rimiB1ColEscenario')}</th>
                      <th className="px-5 py-3 text-left font-bold">{p('rimiB1ColPlazo')}</th>
                      <th className="px-5 py-3 text-left font-bold">{p('rimiB1ColDed')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-gray-50/50">
                      {(p('rimiB1Row1') || []).map((cell, i) => (
                        <td key={i} className={`px-5 py-3.5 ${i === 0 ? 'text-gray-600 border-r border-gray-100' : i === 1 ? 'text-gray-600 border-r border-gray-100' : 'text-gray-500'}`}>{cell}</td>
                      ))}
                    </tr>
                    <tr className="bg-white">
                      {(p('rimiB1Row2') || []).map((cell, i) => (
                        <td key={i} className={`px-5 py-3.5 ${i === 0 ? 'font-semibold text-gray-800 border-r border-gray-100' : i === 1 ? 'font-semibold text-cyan-700 border-r border-gray-100' : 'font-bold text-cyan-700'}`}>{cell}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-2">{p('ejemploNum')}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {p('rimiB1Ej1')}<br />
                  <span className="text-cyan-400 font-semibold">{p('rimiB1Ej2Label')}</span> {p('rimiB1Ej2')}<br />
                  <span className="text-gray-500">{p('rimiB1Ej3Label')}</span> {p('rimiB1Ej3')}
                </p>
              </div>
            </div>

            {/* H3 — Beneficio 2: IVA */}
            <div className="mb-12">
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4">{p('rimiB2H3')}</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                {p('rimiB2P')}
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-2">{p('ejemploNum')}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {p('rimiB2Ej1')}<br />
                  {p('rimiB2Ej2')}<br />
                  {p('rimiB2Ej3')}
                </p>
              </div>
            </div>

            {/* H3 — Limitaciones */}
            <div className="mb-8 p-6 rounded-2xl bg-amber-50 border border-amber-200">
              <h3 className="text-xl font-black uppercase tracking-tight text-amber-900 mb-4">{p('rimiLimitH3')}</h3>
              <div className="space-y-3">
                {(p('rimiLimits') || []).map((lim, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-amber-500 font-black text-lg leading-none mt-0.5">!</span>
                    <div>
                      <p className="font-bold text-amber-900 text-sm">{lim.title}</p>
                      <p className="text-amber-800/80 text-sm leading-relaxed">{lim.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-xs border-t border-gray-100 pt-4">
              {p('rimiLegal')}
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 4: RIGI EN DETALLE ── */}
      <section id="rigi" className="py-20 px-6 bg-slate-900 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-400/10 border-cyan-400/20 text-cyan-400">
                02 — RIGI · Ley 27.742
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-white mb-4">
              {p('rigiH2')}
            </h2>
            <p className="text-base leading-relaxed text-gray-400 mb-4 max-w-3xl">
              {p('rigiIntro')}
            </p>
            <p className="text-sm text-gray-500 mb-10 max-w-3xl">
              {p('rigiIntro2')}
            </p>

            <div className="mb-12">
              <h3 className="text-lg font-black uppercase tracking-tight text-white mb-4">{p('rigiTableH3')}</h3>
              <div className="overflow-x-auto rounded-xl border border-white/10 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/5 text-gray-300">
                      <th className="px-5 py-3 text-left font-bold border-r border-white/10">{p('rigiColBen')}</th>
                      <th className="px-5 py-3 text-left font-bold border-r border-white/10">{p('rigiColRigi')}</th>
                      <th className="px-5 py-3 text-left font-bold">{p('rigiColGen')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {(p('rigiRows') || []).map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white/2' : 'bg-transparent'}>
                        <td className="px-5 py-3.5 text-gray-300 font-semibold border-r border-white/5">{row.beneficio}</td>
                        <td className="px-5 py-3.5 text-cyan-400 font-bold border-r border-white/5">{row.rigi}</td>
                        <td className="px-5 py-3.5 text-gray-500 text-xs">{row.general}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-cyan-400/20">
              <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-2">{p('rigiKeyTag')}</p>
              <p className="text-gray-200 text-base leading-relaxed">
                {p('rigiKeyP')}
              </p>
            </div>

            <p className="text-gray-600 text-xs border-t border-white/5 pt-4 mt-8">
              {p('rigiLegal')}
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 5: ARANCELES DE IMPORTACIÓN ── */}
      <section id="aranceles" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                03 — Decreto 513/2025
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              {p('arancelH2')}
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-8 max-w-3xl">
              {p('arancelIntro')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-100">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-3">{p('arancelKeyTag')}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p('arancelKeyP')}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-3">{p('arancelRefTag')}</p>
                <div className="space-y-2 text-sm">
                  {(p('arancelRefRows') || []).map((row, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-gray-400 text-xs">{row.desc}</span>
                      <span className="text-cyan-400 font-bold text-xs whitespace-nowrap ml-4">{row.arancel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3">
              <span className="text-amber-500 font-black text-lg leading-none mt-0.5 shrink-0">!</span>
              <p className="text-amber-800 text-sm leading-relaxed">
                {p('arancelWarn')}
              </p>
            </div>

            <p className="text-gray-400 text-xs border-t border-gray-100 pt-4 mt-8">
              {p('arancelLegal')}
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 6: IVA 10,5% ── */}
      <section id="iva-reducido" className="py-20 px-6 bg-slate-900 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-400/10 border-cyan-400/20 text-cyan-400">
                04 — IVA 10,5% · Ley 23.966
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-white mb-4">
              {p('ivaH2')}
            </h2>
            <p className="text-base leading-relaxed text-gray-400 mb-8 max-w-3xl">
              {p('ivaIntro')}
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-4">{p('ivaImpactTag')}</p>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-gray-500 text-xs mb-1">{p('ivaGenLabel')}</p>
                  <p className="text-2xl font-black text-gray-400">USD 420.000</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                  <p className="text-cyan-400 text-xs mb-1 font-bold">{p('ivaRedLabel')}</p>
                  <p className="text-2xl font-black text-cyan-400">USD 210.000</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-green-400/20">
                  <p className="text-green-400 text-xs mb-1 font-bold">{p('ivaSaveLabel')}</p>
                  <p className="text-2xl font-black text-green-400">USD 210.000</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-500/20 flex gap-3">
              <span className="text-amber-400 font-black text-lg leading-none mt-0.5 shrink-0">!</span>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                {p('ivaWarn')}
              </p>
            </div>

            <p className="text-gray-600 text-xs border-t border-white/5 pt-4 mt-8">
              {p('ivaLegal')}
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 7: LEASING ── */}
      <section id="leasing" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                05 — Leasing · Ley 25.248
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              {p('leasingH2')}
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-10 max-w-3xl">
              {p('leasingIntro')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {(p('leasingCards') || []).map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 mb-6">
              <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-3">{p('leasingEntTag')}</p>
              <div className="flex flex-wrap gap-3">
                {(p('leasingEnt') || []).map((e, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                    <CheckCircle size={13} className="text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm">{e.ent}</p>
                      <p className="text-gray-500 text-[11px]">{e.detalle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3">
              <span className="text-amber-500 font-black text-lg leading-none mt-0.5 shrink-0">!</span>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>{p('leasingWarnLabel')}</strong> {p('leasingWarn')}
              </p>
            </div>

            <p className="text-gray-400 text-xs border-t border-gray-100 pt-4 mt-8">
              {p('leasingLegal')}
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 8: ECONOMÍA DEL CONOCIMIENTO ── */}
      <section id="economia-conocimiento" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                {p('ecBadge')}
              </span>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-amber-50 border-amber-300 text-amber-700">
                {p('ecBadge2')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              {p('ecH2')}
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-8 max-w-3xl">
              {p('ecIntro')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-100">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-3">{p('ecFonpecTag')}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p('ecFonpecP')}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-3">{p('ecWhyTag')}</p>
                <div className="space-y-2">
                  {(p('ecWhyItems') || []).map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-xs leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs border-t border-gray-100 pt-4">
              {p('ecLegal')}
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 9: BENEFICIOS PROVINCIALES ── */}
      <section id="beneficios-provinciales" className="py-20 px-6 bg-slate-900 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-400/10 border-cyan-400/20 text-cyan-400">
                {p('provTag')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-white mb-4">
              {p('provH2')}
            </h2>
            <p className="text-base leading-relaxed text-gray-400 mb-10 max-w-3xl">
              {p('provIntro')}
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {(p('provCards') || []).map((prov, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className={`p-5 rounded-2xl bg-white/5 border ${i < 2 ? 'border-cyan-400/30' : 'border-white/10'}`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <p className="font-black text-white text-base">{prov.prov}</p>
                    <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap border border-white/10 px-2 py-0.5 rounded-full">{prov.badge}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {(prov.items || []).map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle size={12} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-500 text-xs mb-6">
              <LangLink to="/industrias/mineria-oil-gas" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">{p('provMineLink')}</LangLink>
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">{p('provOtrasTag')}</p>
              <div className="flex flex-wrap gap-2">
                {(p('provOtras') || []).map((prov) => (
                  <span key={prov} className="text-xs text-gray-400 border border-white/10 bg-white/5 px-3 py-1 rounded-full">{prov}</span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── LÍNEA BICE EN DETALLE ── */}
      <section className="py-20 px-6 border-b bg-slate-900 border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

            <div className="flex flex-col gap-5">
              <span className="text-[80px] font-black italic leading-none select-none text-white/10">06</span>
              <div className="w-14 h-14 rounded-2xl border flex items-center justify-center bg-white/10 border-white/20">
                <Building2 size={26} className="text-cyan-400" />
              </div>
              <div>
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-400/10 border-cyan-400/20 text-cyan-400">
                  {p('biceTag')}
                </span>
                <p className="text-[11px] font-mono mt-2 text-gray-500">{p('biceSubtitle')}</p>
                <div className="mt-4 space-y-1 text-gray-400">
                  <p className="text-xs"><span className="font-bold text-cyan-400">{p('biceAhorroLabel')}</span> {p('biceMonto')}</p>
                  <p className="text-xs"><span className="font-bold text-gray-300">{p('bicePerfilLabel')}</span> {p('bicePerfil')}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-5 text-white">
                {p('biceTitle')}
              </h2>
              <p className="text-base leading-relaxed mb-8 text-gray-400">{p('biceDesc')}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {(p('biceItems') || []).map((item, j) => (
                  <motion.div key={j} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.05 }}
                    className="flex items-start gap-2.5">
                    <CheckCircle size={14} className="mt-0.5 shrink-0 text-cyan-400" />
                    <p className="text-sm leading-relaxed text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 10: BENEFICIOS PYME GENERALES ── */}
      <section id="beneficios-pyme" className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-50 border-cyan-200 text-cyan-600">
                {p('pymeTag')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 mb-4">
              {p('pymeH2')}
            </h2>
            <p className="text-base leading-relaxed text-gray-500 mb-8 max-w-3xl">
              {p('pymeIntro')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(p('pymeCards') || []).map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex gap-3">
                  <CheckCircle size={15} className="text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 11: TABLA ¿QUÉ APLICA PARA VOS? ── */}
      <section id="que-aplica" className="py-20 px-6 bg-slate-900 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] border px-3 py-1 rounded-full bg-cyan-400/10 border-cyan-400/20 text-cyan-400">
                {p('aplicaTag')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-white mb-10">
              {p('aplicaH2')}
            </h2>

            <div className="overflow-x-auto rounded-xl border border-white/10 shadow-sm">
              <table className="w-full text-sm min-w-160">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-5 py-3.5 text-left font-bold text-gray-400 border-r border-white/10 w-40">{p('aplicaColBen')}</th>
                    <th className="px-4 py-3.5 text-center font-bold text-gray-300 border-r border-white/10">
                      <span className="block text-xs">{p('aplicaColMicro')}</span>
                      <span className="block text-[10px] text-gray-500 font-normal">{p('aplicaColMicroSub')}</span>
                    </th>
                    <th className="px-4 py-3.5 text-center font-bold text-gray-300 border-r border-white/10">
                      <span className="block text-xs">{p('aplicaColMed')}</span>
                      <span className="block text-[10px] text-gray-500 font-normal">{p('aplicaColMedSub')}</span>
                    </th>
                    <th className="px-4 py-3.5 text-center font-bold text-gray-300 border-r border-white/10">
                      <span className="block text-xs">{p('aplicaColGran')}</span>
                      <span className="block text-[10px] text-gray-500 font-normal">{p('aplicaColGranSub')}</span>
                    </th>
                    <th className="px-4 py-3.5 text-center font-bold text-gray-300">
                      <span className="block text-xs">{p('aplicaColRigi')}</span>
                      <span className="block text-[10px] text-gray-500 font-normal">{p('aplicaColRigiSub')}</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {(p('aplicaRows') || []).map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white/2' : 'bg-transparent'}>
                      <td className="px-5 py-3.5 font-semibold text-gray-200 border-r border-white/5 text-sm">{row.beneficio}</td>
                      {(row.cols || []).map((cell, j) => (
                        <td key={j} className={`px-4 py-3.5 text-center text-xs border-r border-white/5 last:border-0 ${cell === '—' ? 'text-gray-600' : cell.startsWith('✅') ? 'text-cyan-400 font-semibold' : 'text-gray-400'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-xs mt-4">{p('aplicaNote')}</p>

          </motion.div>
        </div>
      </section>

      {/* ── CASO PRÁCTICO — bg: gray-50 ── */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('casoTag')}</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">{p('casoH2')}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {(p('casoCards') || []).map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 hover:shadow-sm transition-all">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono mb-2">{item.label}</p>
                <p className="text-2xl font-black text-cyan-500 leading-none mb-3">{item.value}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white border border-cyan-100 rounded-2xl p-8">
            <h3 className="text-gray-900 font-black text-lg uppercase tracking-tight mb-4">{p('casoResH3')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {p('casoResP1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {p('casoResP2')}
                </p>
              </div>
              <div className="space-y-3">
                {(p('casoResRows') || []).map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="text-gray-700 font-semibold text-sm">{row.label}</p>
                      <p className="text-gray-400 text-xs">{row.note}</p>
                    </div>
                    <p className="text-cyan-600 font-black text-sm whitespace-nowrap ml-4">{row.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-6">{p('casoNote')}</p>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ AHORA — bg: white ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase mb-3">{p('ctx2026Tag')}</p>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
              {p('ctx2026H2')}
            </h2>
          </div>
          <div className="space-y-4">
            {(p('ctx2026P') || []).map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — bg: slate-900 ── */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] mb-3">{p('faqTag')}</p>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter">{p('faqH2')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {(Array.isArray(faqItems) ? faqItems : []).map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <FileText size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <h3 className="text-white font-bold text-sm leading-snug">{item.q}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pl-5">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 13: CTA FINAL ── */}
      <section id="evaluacion" className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4">{p('ctaTag')}</p>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-black uppercase tracking-tighter mb-5">
              {p('formH2')}
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              {p('ctaP')}
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
            <EvaluacionForm />

            <div className="flex flex-col gap-4 min-w-55">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400">{p('ctaDirectTag')}</p>
              <a href="https://wa.me/5491140000000?text=Hola%20STOKA%2C%20quiero%20evaluar%20los%20beneficios%20fiscales%20para%20mi%20proyecto%20de%20automatizaci%C3%B3n"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 text-white font-black text-sm rounded-xl hover:bg-green-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="mailto:consultas@stokagroup.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm font-bold hover:border-cyan-300 hover:text-gray-900 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                consultas@stokagroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 14: DISCLAIMER LEGAL ── */}
      <section className="bg-gray-50 py-10 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="p-5 rounded-xl border border-amber-200 bg-amber-50">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">{p('disclaimerTag')}</p>
            <p className="text-amber-900/80 text-xs leading-relaxed">
              {p('disclaimerP')}
            </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 15: NORMATIVA CITADA ── */}
      <section className="bg-gray-50 py-10 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <details className="group">
            <summary className="cursor-pointer flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors list-none select-none">
              <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] group-open:rotate-90 transition-transform">›</span>
              {p('normativaTag')}
            </summary>
            <div className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-1">
              {(p('normativaItems') || []).map((item, i) => (
                <p key={i} className="text-gray-400 text-[11px] py-1 border-b border-gray-100 last:border-0">
                  {item.ref}{item.fecha && <span className="text-gray-300 ml-1">— {item.fecha}</span>}
                </p>
              ))}
            </div>
          </details>
        </div>
      </section>

      <WppFloat />
      <CTABanner />
      <Footer />
    </div>
  );
};

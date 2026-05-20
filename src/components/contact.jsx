import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, Building2, User, MessageSquare, Send, Loader2, Phone, MapPin, Briefcase, HelpCircle, Globe, Linkedin, ArrowRight } from 'lucide-react';

const SECTORES = [
  'E-commerce & Retail', 'Logística 3PL', 'Manufactura Industrial',
  'Alimentos & Bebidas', 'Farmacéutica', 'Minería & Oil & Gas',
  'Cadena de Frío', 'Otro',
];
const TIPOS_CONSULTA = [
  'Cotización de sistema ASRS', 'Consulta técnica general',
  'Integración WMS/WCS con mi ERP', 'Visita técnica a mi planta',
  'Información sobre beneficios fiscales', 'Financiamiento BICE', 'Otro',
];
const COMO_CONOCIO = [
  'Google / búsqueda web', 'LinkedIn', 'Referido por un colega',
  'Feria o evento industrial', 'Redes sociales', 'Otro',
];

const inp = "w-full bg-white border border-gray-200 rounded-lg pl-8 pr-3 py-2 text-gray-900 text-xs placeholder:text-gray-400 focus:outline-none focus:border-slate-400 transition-all";
const sel = "w-full bg-white border border-gray-200 rounded-lg pl-8 pr-3 py-2 text-gray-900 text-xs focus:outline-none focus:border-slate-400 transition-all appearance-none";

export const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    const data = {
      name: e.target.name.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      country: e.target.country.value,
      province: e.target.province.value,
      sector: e.target.sector.value,
      tipo_consulta: e.target.tipo_consulta.value,
      como_conocio: e.target.como_conocio.value,
      message: e.target.message.value,
      source: 'contact_page',
    };
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzhg3lF1NXpxytuxno8XakeIYEA_iMEomRYK5jNIdpbM8vGDufWx-MepBKodQEMAhReOw/exec',
        { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() },
      );
      setTimeout(() => { setStatus('ok'); setSending(false); e.target.reset(); }, 1200);
    } catch { setStatus('err'); setSending(false); }
  };

  return (
    <section className="relative py-16 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] font-mono text-slate-400 tracking-[0.4em] uppercase mb-2">Contacto</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">
            Iniciá tu{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
              Proyecto
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-5">

          {/* LEFT — contacto */}
          <div className="lg:col-span-2 flex flex-col gap-3">

            {/* WhatsApp — destacado */}
            <div className="rounded-2xl overflow-hidden border border-[#25D366]/40 bg-white">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.626 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#25D366] text-[10px] font-black uppercase tracking-widest">WhatsApp directo</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-gray-400 text-[10px]">En línea ahora</span>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/5492615886671?text=Hola%2C%20quiero%20iniciar%20una%20consulta%20express%20con%20STOKA."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between group px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-[#25D366]/8 border border-gray-200 hover:border-[#25D366]/30 transition-all"
                >
                  <div>
                    <p className="text-gray-400 text-[9px] uppercase tracking-wider font-bold mb-0.5">Anuk Vilarasau</p>
                    <p className="text-gray-800 font-mono text-xs font-bold">+54 9 2615 88-6671</p>
                  </div>
                  <ArrowRight size={12} className="text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://wa.me/5492612071048?text=Hola%2C%20quiero%20iniciar%20una%20consulta%20express%20con%20STOKA."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between group px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-[#25D366]/8 border border-gray-200 hover:border-[#25D366]/30 transition-all"
                >
                  <div>
                    <p className="text-gray-400 text-[9px] uppercase tracking-wider font-bold mb-0.5">Vincenzo Dallapé</p>
                    <p className="text-gray-800 font-mono text-xs font-bold">+54 9 261 207-1048</p>
                  </div>
                  <ArrowRight size={12} className="text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
              <div className="px-5 pb-4">
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <Clock size={11} className="text-gray-400" />
                  <span className="text-gray-400 text-[10px]">Respuesta en menos de 2 horas</span>
                </div>
              </div>
            </div>

            {/* Email */}
            <a href="mailto:stokamza.consultas@gmail.com"
              className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                <Mail size={13} className="text-gray-500" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">Email</p>
                <p className="text-gray-700 text-xs font-mono truncate">stokamza.consultas@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/vincenzo-dallape/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#0A66C2]/40 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-[#0A66C2] flex items-center justify-center shrink-0">
                <Linkedin size={13} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">LinkedIn</p>
                <p className="text-gray-700 text-xs">Vincenzo Dallapé</p>
              </div>
            </a>

            <p className="text-gray-400 text-[11px] leading-relaxed px-1">
              Primera consulta técnica sin costo. Nuestros ingenieros analizan cada caso de forma personalizada.
            </p>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3">

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Nombre</label>
                  <div className="relative">
                    <User size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input name="name" type="text" required placeholder="Tu nombre" className={inp} />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Empresa</label>
                  <div className="relative">
                    <Building2 size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input name="company" type="text" placeholder="Tu organización" className={inp} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Email</label>
                  <div className="relative">
                    <Mail size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input name="email" type="email" required placeholder="ejemplo@correo.com" className={inp} />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Teléfono</label>
                  <div className="relative">
                    <Phone size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input name="phone" type="tel" placeholder="+54 9 261..." className={inp} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">País</label>
                  <div className="relative">
                    <MapPin size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input name="country" type="text" placeholder="Argentina" className={inp} />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Provincia</label>
                  <div className="relative">
                    <MapPin size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input name="province" type="text" placeholder="Mendoza" className={inp} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Sector</label>
                  <div className="relative">
                    <Briefcase size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select name="sector" className={sel} defaultValue="">
                      <option value="" disabled>Seleccioná</option>
                      {SECTORES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Tipo consulta</label>
                  <div className="relative">
                    <HelpCircle size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select name="tipo_consulta" className={sel} defaultValue="">
                      <option value="" disabled>¿Qué necesitás?</option>
                      {TIPOS_CONSULTA.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">¿En qué podemos ayudarte?</label>
                <div className="relative">
                  <MessageSquare size={12} className="absolute left-2.5 top-3 text-gray-400" />
                  <textarea name="message" rows="3" required
                    placeholder="Describí tu operación, volumen de SKUs, m² disponibles..."
                    className="w-full bg-white border border-gray-200 rounded-lg pl-8 pr-3 py-2 text-gray-900 text-xs placeholder:text-gray-400 focus:outline-none focus:border-slate-400 transition-all resize-none" />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">¿Cómo nos conociste?</label>
                <div className="relative">
                  <Globe size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select name="como_conocio" className={sel} defaultValue="">
                    <option value="" disabled>Seleccioná una opción</option>
                    {COMO_CONOCIO.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <button type="submit" disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all bg-cyan-500 hover:bg-cyan-400 text-white shadow-[0_4px_20px_rgba(6,182,212,0.3)] active:scale-[0.99] disabled:opacity-50 disabled:cursor-wait">
                {sending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                {sending ? 'Enviando...' : 'Enviar consulta'}
              </button>

              <AnimatePresence>
                {status === 'ok' && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-3 px-4 py-4 bg-emerald-500 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.35)]">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-4 h-4">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-black text-sm leading-none mb-0.5">¡Consulta recibida!</p>
                      <p className="text-white/75 text-xs">Nuestro equipo te responde en menos de 2 hs.</p>
                    </div>
                  </motion.div>
                )}
                {status === 'err' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-center text-red-500 text-xs font-medium py-2.5 bg-red-50 border border-red-200 rounded-xl">
                    ✕ Error al enviar. Por favor, reintentá más tarde.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

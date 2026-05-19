import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, Clock, Building2, User, MessageSquare, Send, Loader2, Phone, MapPin, Briefcase, HelpCircle, Linkedin } from 'lucide-react';

const SECTORES = [
  'E-commerce & Retail', 'Logística 3PL', 'Manufactura Industrial',
  'Alimentos & Bebidas', 'Farmacéutica', 'Minería & Oil & Gas',
  'Cadena de Frío', 'Otro',
];
const TIPOS_CONSULTA = [
  'Cotización de sistema ASRS', 'Consulta técnica general',
  'Integración WMS/WCS con mi ERP', 'Visita técnica a mi planta',
  'Información sobre beneficios fiscales (RIGI, Decreto 513)',
  'Financiamiento BICE', 'Otro',
];
const COMO_CONOCIO = [
  'Google / búsqueda web', 'LinkedIn', 'Referido por un colega',
  'Feria o evento industrial', 'Redes sociales', 'Otro',
];

const inputBase = "w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan-400/60 transition-all";
const selectBase = "w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/60 transition-all appearance-none";

export const Contact = () => {
  const [focused, setFocused] = useState(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const labelCls = (field) =>
    `text-[11px] font-bold uppercase tracking-wider block mb-2 transition-colors ${focused === field ? 'text-cyan-400' : 'text-white/40'}`;
  const iconCls = (field) =>
    `absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focused === field ? 'text-cyan-400' : 'text-white/25'}`;

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
    };
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyrZ3qHI2SwTu0BslxrUEmLjK_M1lujE95EZxApSfH2DHhmVwAHsc4vj8ntxskrEYO7Lw/exec',
        { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() },
      );
      setTimeout(() => { setStatus('ok'); setSending(false); e.target.reset(); }, 1400);
    } catch { setStatus('err'); setSending(false); }
  };

  return (
    <section id="contacto" className="relative py-28 px-6 bg-zinc-900 border-t border-white/5">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Iniciá tu{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
              Proyecto
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-sm font-light md:text-right">
            Contanos tu operación y te preparamos una propuesta técnica a medida.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* INFO PANEL */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Equipo disponible</span>
              </div>
              <div className="space-y-3">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5492612071048?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Optexa."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-400/8 border border-emerald-400/20 hover:bg-emerald-400/12 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.626 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-300 font-bold text-xs uppercase tracking-wider">WhatsApp directo</p>
                    <p className="text-emerald-200/80 text-sm font-mono">+54 9 261 207-1048</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:dallapevincenzo@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white/40 font-bold text-xs uppercase tracking-wider">Email</p>
                    <p className="text-white/70 text-xs font-mono truncate">dallapevincenzo@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/optexa"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center shrink-0">
                    <Linkedin size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 font-bold text-xs uppercase tracking-wider">LinkedIn</p>
                    <p className="text-white/70 text-sm">Optexa Argentina</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 pt-1">
                  <Clock size={14} className="text-cyan-400 shrink-0" />
                  <span className="text-white/35 text-xs">Respuesta garantizada en &lt; 2 horas</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5 grow">
              <p className="text-white/25 text-[11px] leading-relaxed">
                Nuestros ingenieros analizan cada consulta de forma personalizada. La primera consulta técnica no tiene costo.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-zinc-950 border border-white/10 rounded-3xl p-8 space-y-5">

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls('name')}>Nombre y apellido</label>
                  <div className="relative">
                    <User size={14} className={iconCls('name')} />
                    <input name="name" type="text" required onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} placeholder="Tu nombre" className={inputBase} />
                  </div>
                </div>
                <div>
                  <label className={labelCls('company')}>Empresa</label>
                  <div className="relative">
                    <Building2 size={14} className={iconCls('company')} />
                    <input name="company" type="text" onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} placeholder="Tu organización" className={inputBase} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls('email')}>Email</label>
                  <div className="relative">
                    <Mail size={14} className={iconCls('email')} />
                    <input name="email" type="email" required onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} placeholder="ejemplo@correo.com" className={inputBase} />
                  </div>
                </div>
                <div>
                  <label className={labelCls('phone')}>Teléfono</label>
                  <div className="relative">
                    <Phone size={14} className={iconCls('phone')} />
                    <input name="phone" type="tel" onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} placeholder="+54 9 261..." className={inputBase} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls('country')}>País</label>
                  <div className="relative">
                    <MapPin size={14} className={iconCls('country')} />
                    <input name="country" type="text" onFocus={() => setFocused('country')} onBlur={() => setFocused(null)} placeholder="Argentina" className={inputBase} />
                  </div>
                </div>
                <div>
                  <label className={labelCls('province')}>Provincia / Estado</label>
                  <div className="relative">
                    <MapPin size={14} className={iconCls('province')} />
                    <input name="province" type="text" onFocus={() => setFocused('province')} onBlur={() => setFocused(null)} placeholder="Mendoza" className={inputBase} />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelCls('sector')}>Sector / Industria</label>
                <div className="relative">
                  <Briefcase size={14} className={iconCls('sector')} />
                  <select name="sector" onFocus={() => setFocused('sector')} onBlur={() => setFocused(null)} className={selectBase} defaultValue="">
                    <option value="" disabled className="bg-zinc-900">Seleccioná tu sector</option>
                    {SECTORES.map((s) => <option key={s} value={s} className="bg-zinc-900">{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls('tipo_consulta')}>Tipo de consulta</label>
                <div className="relative">
                  <HelpCircle size={14} className={iconCls('tipo_consulta')} />
                  <select name="tipo_consulta" onFocus={() => setFocused('tipo_consulta')} onBlur={() => setFocused(null)} className={selectBase} defaultValue="">
                    <option value="" disabled className="bg-zinc-900">¿Qué necesitás?</option>
                    {TIPOS_CONSULTA.map((t) => <option key={t} value={t} className="bg-zinc-900">{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls('msg')}>¿En qué podemos ayudarte?</label>
                <div className="relative">
                  <MessageSquare size={14} className="absolute left-3 top-4 text-white/25" />
                  <textarea name="message" rows="4" required onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)}
                    placeholder="Describí tu operación, volumen de SKUs, m² disponibles, tipo de producto..."
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan-400/60 transition-all resize-none" />
                </div>
              </div>

              <div>
                <label className={labelCls('como_conocio')}>¿Cómo nos conociste?</label>
                <div className="relative">
                  <Globe size={14} className={iconCls('como_conocio')} />
                  <select name="como_conocio" onFocus={() => setFocused('como_conocio')} onBlur={() => setFocused(null)} className={selectBase} defaultValue="">
                    <option value="" disabled className="bg-zinc-900">Seleccioná una opción</option>
                    {COMO_CONOCIO.map((c) => <option key={c} value={c} className="bg-zinc-900">{c}</option>)}
                  </select>
                </div>
              </div>

              <button type="submit" disabled={sending}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all bg-cyan-500 text-white hover:bg-cyan-400 shadow-[0_4px_20px_rgba(6,182,212,0.25)] active:scale-95 disabled:opacity-50 disabled:cursor-wait">
                {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {sending ? 'Enviando...' : 'Enviar Consulta'}
              </button>

              <AnimatePresence>
                {status === 'ok' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-center text-emerald-300 text-sm font-medium py-3 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                    ✓ Recibimos tu consulta. Nuestro equipo te responderá a la brevedad.
                  </motion.p>
                )}
                {status === 'err' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-center text-red-300 text-sm font-medium py-3 bg-red-400/10 border border-red-400/20 rounded-xl">
                    ✕ Error en el envío. Por favor, reintentá más tarde.
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

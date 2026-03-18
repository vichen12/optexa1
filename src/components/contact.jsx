import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, Clock, Building2, User, MessageSquare, Send, Loader2, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export const Contact = () => {
  const [focused, setFocused] = useState(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const { t } = useLanguage();
  const c = t.contact;

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
      message: e.target.message.value,
    };
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyrZ3qHI2SwTu0BslxrUEmLjK_M1lujE95EZxApSfH2DHhmVwAHsc4vj8ntxskrEYO7Lw/exec', {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setTimeout(() => { setStatus('ok'); setSending(false); e.target.reset(); }, 1400);
    } catch { setStatus('err'); setSending(false); }
  };

  return (
    <section id="contacto" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            {c.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {c.titleGrad}
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-sm font-light md:text-right">{c.tagline}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* INFO PANEL */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-[#02040a]/80 border border-white/8 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">{c.statusLine}</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Globe size={14} className="text-cyan-400 shrink-0" />
                  <span className="text-white/60">{c.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={14} className="text-cyan-400 shrink-0" />
                  <span className="text-white/60 font-mono text-xs">stokamza.consultas@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock size={14} className="text-cyan-400 shrink-0" />
                  <span className="text-white/60">{c.responseTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#02040a]/60 border border-white/5 rounded-2xl p-6 flex-grow">
              <p className="text-white/25 text-[11px] leading-relaxed">{c.disclaimer}</p>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#02040a]/80 border border-white/8 rounded-3xl p-8 space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Nombre */}
                <div>
                  <label className={`text-[11px] font-bold uppercase tracking-wider block mb-2 transition-colors ${focused === 'name' ? 'text-cyan-400' : 'text-white/40'}`}>
                    {c.fieldName}
                  </label>
                  <div className="relative">
                    <User size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focused === 'name' ? 'text-cyan-400' : 'text-white/20'}`} />
                    <input
                      name="name" type="text" required
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      placeholder={c.placeholderName}
                      className="w-full bg-white/4 border border-white/8 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Empresa */}
                <div>
                  <label className={`text-[11px] font-bold uppercase tracking-wider block mb-2 transition-colors ${focused === 'company' ? 'text-blue-400' : 'text-white/40'}`}>
                    {c.fieldCompany}
                  </label>
                  <div className="relative">
                    <Building2 size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focused === 'company' ? 'text-blue-400' : 'text-white/20'}`} />
                    <input
                      name="company" type="text"
                      onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
                      placeholder={c.placeholderCompany}
                      className="w-full bg-white/4 border border-white/8 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email + Teléfono */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`text-[11px] font-bold uppercase tracking-wider block mb-2 transition-colors ${focused === 'email' ? 'text-purple-400' : 'text-white/40'}`}>
                    {c.fieldEmail}
                  </label>
                  <div className="relative">
                    <Mail size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focused === 'email' ? 'text-purple-400' : 'text-white/20'}`} />
                    <input
                      name="email" type="email" required
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      placeholder={c.placeholderEmail}
                      className="w-full bg-white/4 border border-white/8 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className={`text-[11px] font-bold uppercase tracking-wider block mb-2 transition-colors ${focused === 'phone' ? 'text-emerald-400' : 'text-white/40'}`}>
                    {c.fieldPhone}
                  </label>
                  <div className="relative">
                    <Phone size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focused === 'phone' ? 'text-emerald-400' : 'text-white/20'}`} />
                    <input
                      name="phone" type="tel"
                      onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                      placeholder={c.placeholderPhone}
                      className="w-full bg-white/4 border border-white/8 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* País + Provincia */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`text-[11px] font-bold uppercase tracking-wider block mb-2 transition-colors ${focused === 'country' ? 'text-amber-400' : 'text-white/40'}`}>
                    {c.fieldCountry}
                  </label>
                  <div className="relative">
                    <MapPin size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focused === 'country' ? 'text-amber-400' : 'text-white/20'}`} />
                    <input
                      name="country" type="text"
                      onFocus={() => setFocused('country')} onBlur={() => setFocused(null)}
                      placeholder={c.placeholderCountry}
                      className="w-full bg-white/4 border border-white/8 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-amber-500/50 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className={`text-[11px] font-bold uppercase tracking-wider block mb-2 transition-colors ${focused === 'province' ? 'text-amber-400' : 'text-white/40'}`}>
                    {c.fieldProvince}
                  </label>
                  <div className="relative">
                    <MapPin size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focused === 'province' ? 'text-amber-400' : 'text-white/20'}`} />
                    <input
                      name="province" type="text"
                      onFocus={() => setFocused('province')} onBlur={() => setFocused(null)}
                      placeholder={c.placeholderProvince}
                      className="w-full bg-white/4 border border-white/8 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-amber-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className={`text-[11px] font-bold uppercase tracking-wider block mb-2 transition-colors ${focused === 'msg' ? 'text-emerald-400' : 'text-white/40'}`}>
                  {c.fieldMessage}
                </label>
                <div className="relative">
                  <MessageSquare size={14} className={`absolute left-3 top-4 transition-colors ${focused === 'msg' ? 'text-emerald-400' : 'text-white/20'}`} />
                  <textarea
                    name="message" rows="4" required
                    onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)}
                    placeholder={c.placeholderMessage}
                    className="w-full bg-white/4 border border-white/8 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit" disabled={sending}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all bg-white text-black hover:bg-cyan-400 active:scale-98 disabled:opacity-50 disabled:cursor-wait"
              >
                {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {sending ? c.sending : c.submitBtn}
              </button>

              <AnimatePresence>
                {status === 'ok' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-center text-emerald-400 text-sm font-medium py-3 bg-emerald-500/8 border border-emerald-500/20 rounded-xl">
                    ✓ {c.successMsg}
                  </motion.p>
                )}
                {status === 'err' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-center text-red-400 text-sm font-medium py-3 bg-red-500/8 border border-red-500/20 rounded-xl">
                    ✕ {c.errorMsg}
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

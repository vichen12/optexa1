import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Briefcase, Loader2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzhg3lF1NXpxytuxno8XakeIYEA_iMEomRYK5jNIdpbM8vGDufWx-MepBKodQEMAhReOw/exec';

export const LeadPopup = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', sector: '' });

  const sectors = t('contact.sectors', { returnObjects: true });

  useEffect(() => {
    const handler = (e) => {
      setProduct(e.detail?.product || '');
      setDone(false);
      setSending(false);
      setForm({ name: '', email: '', sector: '' });
      setOpen(true);
    };
    window.addEventListener('openLeadForm', handler);
    return () => window.removeEventListener('openLeadForm', handler);
  }, []);

  const close = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const data = {
      name: form.name,
      email: form.email,
      sector: form.sector,
      product: product || '—',
      source: `Express: ${form.name}`,
      message: product
        ? `Consulta express — interesado en: ${product}`
        : 'Consulta express desde el sitio web',
    };
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setTimeout(() => {
        setDone(true);
        setSending(false);
        const msg = product
          ? `Hola! Soy ${form.name}, me interesa el producto *${product}* de STOKA. Ya completé el formulario en el sitio.`
          : `Hola! Soy ${form.name}, me interesa saber más sobre STOKA. Mi email es ${form.email}.`;
        window.open(`https://wa.me/5492615886671?text=${encodeURIComponent(msg)}`, '_blank');
        setTimeout(close, 2500);
      }, 1200);
    } catch {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-110 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t('leadPopup.title')}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-120 w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          >
            {/* Header */}
            <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.626 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p className="text-white font-black text-sm leading-none">{t('leadPopup.title')}</p>
                  <p className="text-white/70 text-[10px]">{t('leadPopup.sub')}</p>
                </div>
              </div>
              <button onClick={close} aria-label={t('leadPopup.close')} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <X size={14} className="text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-5">
              {product && (
                <div className="bg-cyan-50 border border-cyan-200 rounded-xl px-3 py-2 mb-4">
                  <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-wider mb-0.5">{t('leadPopup.selectedProduct')}</p>
                  <p className="text-gray-800 text-xs font-semibold leading-snug">{product}</p>
                </div>
              )}

              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-center py-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" className="w-6 h-6">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-gray-900 font-bold text-sm mb-1">{t('leadPopup.done')}</p>
                    <p className="text-gray-500 text-xs">{t('leadPopup.opening')}</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <User size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text" required placeholder={t('leadPopup.namePlaceholder')}
                        value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email" required placeholder={t('leadPopup.emailPlaceholder')}
                        value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Briefcase size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        required value={form.sector}
                        onChange={(e) => setForm(f => ({ ...f, sector: e.target.value }))}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-cyan-400 transition-all appearance-none"
                      >
                        <option value="" disabled>{t('leadPopup.sectorPlaceholder')}</option>
                        {Array.isArray(sectors) && sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <button type="submit" disabled={sending}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm uppercase tracking-wider rounded-xl transition-colors disabled:opacity-60">
                      {sending
                        ? <Loader2 size={15} className="animate-spin" />
                        : <><span>{t('leadPopup.submit')}</span><ArrowRight size={14} /></>
                      }
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

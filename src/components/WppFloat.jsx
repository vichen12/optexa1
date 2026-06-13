import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GS_URL = 'https://script.google.com/macros/s/AKfycbzhg3lF1NXpxytuxno8XakeIYEA_iMEomRYK5jNIdpbM8vGDufWx-MepBKodQEMAhReOw/exec';
const WPP_NUMBER = '5492612071048';
const EMAIL = 'contacto@stokagroup.com';

const WaIcon = ({ size = 32 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const WppFloat = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [name, setName] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setEmailOpen(false);
      }
    };
    if (open || emailOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, emailOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(GS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        source: 'wpp_float',
        name,
        empresa: empresa || '',
        phone,
        message: msg || '',
        timestamp: new Date().toISOString(),
      }).toString(),
    }).catch(() => {});

    const empresaStr = empresa ? ` (${empresa})` : '';
    const texto = msg
      ? `Hola, soy ${name}${empresaStr}. ${msg}`
      : `Hola, soy ${name}${empresaStr}. Quiero consultar sobre automatización de almacenes.`;

    window.open(`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');

    setOpen(false);
    setName('');
    setEmpresa('');
    setPhone('');
    setMsg('');
  };

  return (
    <div ref={ref} className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-100">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-[72px] right-0 w-72 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.18)] border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#25D366] px-4 py-3">
              <div className="flex items-center gap-2">
                <WaIcon size={18} />
                <span className="text-white font-black text-sm">{t('wpp.writeUs')}</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label={t('leadPopup.close')}
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <input
                type="text"
                placeholder={t('wpp.namePlaceholder')}
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#25D366] transition-colors"
              />
              <input
                type="text"
                placeholder={t('wpp.companyPlaceholder')}
                value={empresa}
                onChange={e => setEmpresa(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#25D366] transition-colors"
              />
              <input
                type="tel"
                placeholder={t('wpp.phonePlaceholder')}
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#25D366] transition-colors"
              />
              <textarea
                placeholder={t('wpp.msgPlaceholder')}
                value={msg}
                onChange={e => setMsg(e.target.value)}
                rows={2}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#25D366] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm py-2.5 rounded-xl transition-colors"
              >
                <Send size={14} /> {t('wpp.openWhatsApp')}
              </button>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail size={11} />
                {EMAIL}
              </a>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="flex flex-col items-end gap-3"
      >
        {/* Email button */}
        <div className="relative flex items-center justify-end">
          <AnimatePresence>
            {emailOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 8 }}
                transition={{ duration: 0.15 }}
                className="absolute right-14 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 w-52"
              >
                <p className="text-[11px] text-gray-400 mb-1">{t('wpp.writeEmail')}</p>
                <p className="text-xs font-bold text-gray-700 mb-3">{EMAIL}</p>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(t('wpp.emailSubject'))}&body=${encodeURIComponent(t('wpp.emailBody'))}`}
                  className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold py-2 rounded-xl transition-colors"
                  onClick={() => setEmailOpen(false)}
                >
                  <Mail size={12} /> {t('wpp.openGmail')}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onClick={() => { setEmailOpen(o => !o); setOpen(false); }}
            aria-label={t('wpp.writeEmail')}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, type: 'spring', stiffness: 260, damping: 20 }}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white p-3 rounded-full shadow-[0_8px_24px_rgba(59,130,246,0.4)] transition-all duration-300 active:scale-90"
          >
            <Mail size={22} />
          </motion.button>
        </div>

        {/* WhatsApp button */}
        <div className="group relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:opacity-40 transition-opacity duration-1000" />
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Contactar por WhatsApp"
            className="relative flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[#25D366]/60 transition-all duration-500 active:scale-90"
          >
            <WaIcon size={32} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-black uppercase text-[10px] tracking-widest whitespace-nowrap italic px-0 group-hover:px-2">
              {t('wpp.directWpp')}
            </span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full shadow-[0_0_10px_#4ade80]" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

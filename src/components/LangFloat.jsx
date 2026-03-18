import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const LANGS = [
  { code: 'es', label: 'ES', flag: '🇦🇷' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'zh', label: '中', flag: '🇨🇳' },
];

export const LangFloat = () => {
  const { lang, setLang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.8, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-6 lg:bottom-10 lg:left-10 z-[100] flex flex-col gap-2"
    >
      {LANGS.map((opt) => (
        <button
          key={opt.code}
          onClick={() => setLang(opt.code)}
          title={opt.flag}
          className={`
            w-12 h-12 rounded-full font-black text-[11px] uppercase tracking-wider
            transition-all duration-300 shadow-lg backdrop-blur-md border
            flex items-center justify-center
            ${lang === opt.code
              ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] scale-110'
              : 'bg-[#02040a]/80 text-white/60 border-white/10 hover:text-white hover:border-white/30'
            }
          `}
        >
          {opt.label}
        </button>
      ))}
    </motion.div>
  );
};

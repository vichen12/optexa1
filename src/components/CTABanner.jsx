import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLangNavigate } from '../lib/i18n-utils';

export const CTABanner = () => {
  const { t } = useTranslation();
  const langNavigate = useLangNavigate();

  return (
    <section className="relative py-6 px-6 overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/8" />

      <div className="relative max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <div className="hidden sm:block w-px h-10 bg-white/15" />
          <div>
            <p className="text-white/30 text-[9px] font-mono uppercase tracking-[0.45em] mb-0.5">{t('cta.ready')}</p>
            <h2 className="text-white text-xl md:text-2xl font-black italic uppercase tracking-tighter leading-none">
              {t('cta.heading')} <span className="text-white/70">{t('cta.headingAccent')}</span>
            </h2>
            <p className="text-white/30 text-xs mt-0.5">{t('cta.sub')}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
          <button
            onClick={() => { langNavigate('/contacto'); window.scrollTo(0, 0); }}
            style={{ outline: 'none' }}
            className="inline-flex items-center gap-2 px-7 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-[11px] uppercase tracking-widest rounded-lg transition-colors"
          >
            {t('cta.btn1')} <ArrowRight size={12} />
          </button>
          <button
            onClick={() => { langNavigate('/catalogo'); window.scrollTo(0, 0); }}
            style={{ outline: 'none' }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/4 border border-white/10 rounded-lg text-white/40 text-[11px] font-bold hover:border-white/20 hover:text-white/60 transition-all"
          >
            {t('cta.btn2')}
          </button>
        </div>
      </div>
    </section>
  );
};

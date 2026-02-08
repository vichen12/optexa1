import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, MapPin, Mail, Phone, Wifi, ShieldAlert, Fingerprint, 
  Building2, User, MessageSquare, Zap, Loader2, Activity, Globe, Clock, Cpu 
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzNqYHsdO8efyG19WOlLwW0R-SanfNZ-XXfsx1E61a5LKRexdXzEFO64Xse98kdXsmpxA/exec', {
        method: 'POST',
        mode: 'no-cors', 
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      setTimeout(() => {
        setStatus('success');
        setIsSending(false);
        e.target.reset();
      }, 1500);

    } catch (error) {
      console.error("Falla de enlace:", error);
      setStatus('error');
      setIsSending(false);
    }
  };

  const getGlowColor = () => {
    switch(focusedField) {
      case 'name': return 'rgba(34, 211, 238, 0.15)'; 
      case 'company': return 'rgba(59, 130, 246, 0.15)'; 
      case 'email': return 'rgba(167, 139, 250, 0.15)'; 
      case 'message': return 'rgba(52, 211, 153, 0.15)'; 
      default: return 'rgba(255, 255, 255, 0.02)';
    }
  };

  return (
    <section id="contacto" className="relative py-32 px-6 bg-transparent overflow-hidden font-sans">
      
      {/* --- FONDO DE ENERGÍA --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-24 flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_5px_10px_rgba(0,0,0,1)] text-center">
            Solicitá tu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 animate-gradient-x font-outline-2">
              Cotización
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* --- PANEL IZQUIERDO: TELEMETRÍA Y MÉTRICAS --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-[#050a14]/80 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] relative shadow-2xl overflow-hidden">
               <div className="absolute top-0 right-0 p-6">
                  <Activity size={20} className="text-cyan-400 animate-pulse" />
               </div>
               
               <h3 className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
                 <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                 Estado de línea
               </h3>

               <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light italic border-l-2 border-cyan-500/30 pl-6">
                 "Ingeniería avanzada desde Mendoza. Protocolos listos para ejecución global."
               </p>

               <div className="space-y-4">
                  <div className="flex justify-between items-center text-[11px] text-white/50 bg-white/5 p-4 rounded-xl border border-white/5">
                     <span className="flex items-center gap-3"><Globe size={14} className="text-cyan-400"/> Mendoza, Argentina</span>
                  </div>
               </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
               <h3 className="text-gray-600 text-[9px] font-bold tracking-[0.3em] uppercase mb-6">Métricas de Atención</h3>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                     <Clock className="text-cyan-400 mb-2" size={20} />
                     <p className="text-[10px] text-white/30 uppercase mb-1 tracking-widest">Respuesta</p>
                     <p className="text-white font-bold tracking-tight">{'<'} 2 Horas</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                     <Cpu className="text-blue-400 mb-2" size={20} />
                     <p className="text-[10px] text-white/30 uppercase mb-1 tracking-widest">Soporte</p>
                     <p className="text-white font-bold tracking-tight">Directo</p>
                  </div>
               </div>
               
               <p className="mt-6 text-gray-600 text-[13px] leading-relaxed italic">
                  *Nuestros ingenieros analizan cada solicitud de forma personalizada para ofrecer la solución técnica óptima.
               </p>
            </div>
          </motion.div>

          {/* --- PANEL DERECHO: FORMULARIO OPTIMIZADO --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative group/hud h-full">
               <motion.div 
                  className="absolute inset-0 blur-[100px] rounded-[3rem] -z-10 transition-colors duration-700"
                  style={{ backgroundColor: getGlowColor() }}
               />

               <form onSubmit={handleSubmit} className="relative h-full bg-[#02040a]/90 backdrop-blur-3xl rounded-[3rem] p-10 md:p-14 border border-white/10 shadow-2xl overflow-hidden">
                  
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                       style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                  <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8 relative z-10">
                     <div className="flex flex-col">
                        <span className="text-xs text-cyan-400 tracking-[0.2em] font-bold uppercase mb-1">Configuración de Proyecto</span>
                        <span className="text-[10px] text-white/20 font-mono tracking-widest uppercase italic">Ingreso de Datos</span>
                     </div>
                     <Fingerprint size={32} className={cn("transition-all duration-500", isSending ? "text-cyan-400 animate-pulse scale-110" : "text-cyan-500/20")} />
                  </div>

                  <div className="space-y-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* INPUT NOMBRE */}
                        <div className="relative group">
                           <label htmlFor="name" className={cn("text-[11px] font-bold tracking-wider transition-colors mb-3 block", focusedField === 'name' ? 'text-cyan-400' : 'text-white')}>
                             Nombre y apellido
                           </label>
                           <div className="relative">
                              <User className={cn("absolute left-0 top-1/2 -translate-y-1/2 transition-colors", focusedField === 'name' ? 'text-cyan-400' : 'text-white/10')} size={18} />
                              <input 
                                id="name"
                                name="name"
                                aria-label="Ingresá tu nombre completo"
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                type="text" 
                                required
                                className="w-full bg-transparent border-b border-white/10 py-3 pl-10 text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-white/5 font-light text-base"
                                placeholder="Tu nombre"
                              />
                           </div>
                        </div>

                        {/* INPUT EMPRESA */}
                        <div className="relative group">
                           <label htmlFor="company" className={cn("text-[11px] font-bold tracking-wider transition-colors mb-3 block", focusedField === 'company' ? 'text-blue-400' : 'text-white')}>
                             Empresa
                           </label>
                           <div className="relative">
                              <Building2 className={cn("absolute left-0 top-1/2 -translate-y-1/2 transition-colors", focusedField === 'company' ? 'text-blue-400' : 'text-white/10')} size={18} />
                              <input 
                                id="company"
                                name="company"
                                aria-label="Ingresá el nombre de tu empresa"
                                onFocus={() => setFocusedField('company')}
                                onBlur={() => setFocusedField(null)}
                                type="text" 
                                className="w-full bg-transparent border-b border-white/10 py-3 pl-10 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/5 font-light text-base"
                                placeholder="Tu organización"
                              />
                           </div>
                        </div>
                    </div>

                    {/* INPUT EMAIL */}
                    <div className="relative group">
                       <label htmlFor="email" className={cn("text-[11px] font-bold tracking-wider transition-colors mb-3 block", focusedField === 'email' ? 'text-purple-400' : 'text-white')}>
                         Email de contacto
                       </label>
                       <div className="relative">
                          <Mail className={cn("absolute left-0 top-1/2 -translate-y-1/2 transition-colors", focusedField === 'email' ? 'text-purple-400' : 'text-white/10')} size={18} />
                          <input 
                            id="email"
                            name="email"
                            aria-label="Ingresá tu correo electrónico"
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            type="email" 
                            required
                            className="w-full bg-transparent border-b border-white/10 py-3 pl-10 text-white focus:outline-none focus:border-purple-500 transition-all placeholder:text-white/5 font-light text-base"
                            placeholder="ejemplo@correo.com"
                          />
                       </div>
                    </div>

                    {/* TEXTAREA MENSAJE */}
                    <div className="relative group">
                       <label htmlFor="message" className={cn("text-[11px] font-bold tracking-wider transition-colors mb-3 block", focusedField === 'message' ? 'text-emerald-400' : 'text-white')}>
                         ¿En qué podemos ayudarte?
                       </label>
                       <div className="relative">
                          <MessageSquare className={cn("absolute left-0 top-4 transition-colors", focusedField === 'message' ? 'text-emerald-400' : 'text-white/10')} size={18} />
                          <textarea 
                            id="message"
                            name="message"
                            aria-label="Escribí tu consulta o detalles del proyecto"
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            rows="4" 
                            required
                            className="w-full bg-transparent border-b border-white/10 py-3 pl-10 text-white focus:outline-none focus:border-emerald-500 transition-all resize-none placeholder:text-white/5 font-light text-base"
                            placeholder="Describí tu necesidad técnica..."
                          />
                       </div>
                    </div>

                    <div className="pt-6 space-y-6">
                      <button 
                        type="submit" 
                        disabled={isSending}
                        className={cn(
                          "w-full group relative py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-sm transition-all active:scale-95 overflow-hidden",
                          isSending 
                            ? "bg-gray-800 text-gray-400 cursor-wait" 
                            : "bg-white text-black shadow-xl hover:bg-cyan-400 transition-colors"
                        )}
                      >
                         <div className="flex items-center justify-center gap-4 relative z-10">
                            {isSending ? <Loader2 size={20} className="animate-spin" /> : <Zap size={20} />}
                            {isSending ? "Enviando..." : "Enviar Parámetros"}
                         </div>
                      </button>

                      <AnimatePresence>
                        {status === 'success' && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-sm font-bold shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                          >
                             <p className="mb-1 italic tracking-widest uppercase text-[10px] opacity-60">Enlace establecido</p>
                             ✓ Recibimos tu solicitud correctamente. Nuestro equipo de ingeniería analizará los datos y te responderá a la brevedad.
                          </motion.div>
                        )}
                        {status === 'error' && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-center text-xs font-bold"
                          >
                            ✕ Error en el envío. Por favor, reintente más tarde.
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
               </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}} />
    </section>
  );
};
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Wifi, Lock, Globe, Radio } from 'lucide-react';
import { cn } from '../lib/utils';

const ContactNode = ({ icon: Icon, title, value, color }) => (
  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-[#0B1C3E]/40 border border-white/5 hover:border-white/20 hover:bg-[#0B1C3E]/60 transition-all duration-300">
    <div className={cn("p-3 rounded-xl bg-black/30 border border-white/10 group-hover:scale-110 transition-transform", color)}>
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1">{title}</h4>
      <p className="text-white font-medium tracking-wide group-hover:text-optexa-cyan transition-colors">{value}</p>
    </div>
  </div>
);

export const Contact = () => {
  return (
    <section id="contacto" className="relative py-24 px-6 bg-transparent overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#020410] via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
             <Wifi size={12} className="text-green-500 animate-pulse" />
             <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">Canal Seguro Abierto</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none">
            INICIAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-optexa-light to-optexa-cyan">TRANSMISIÓN</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* --- IZQUIERDA: DATOS + RADAR MENDOZA --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="prose prose-invert mb-8">
              <p className="text-lg text-blue-100/80 leading-relaxed font-light">
                Desde Mendoza para el mundo. Nuestros ingenieros están listos para recibir tus parámetros. 
                Despliegue en <span className="text-white font-bold">48 horas</span>.
              </p>
            </div>

            {/* Grid de Contacto */}
            <div className="space-y-4">
              <ContactNode icon={Mail} title="Frecuencia Email" value="contacto@optexa.com.ar" color="text-blue-400" />
              <ContactNode icon={Phone} title="Línea Directa" value="+54 9 261 123 4567" color="text-green-400" />
              <ContactNode icon={MapPin} title="Base Operativa" value="Mendoza, Argentina" color="text-red-400" />
            </div>

            {/* SIMULACIÓN DE RADAR ANDINO */}
            <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0B1C3E]/30 group">
                <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center invert filter brightness-0" />
                
                {/* Radar Scan */}
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(34,211,238,0.2)_360deg)] animate-[spin_4s_linear_infinite] rounded-full scale-[2]" />
                
                {/* Punto Mendoza */}
                <div className="absolute top-[60%] left-[28%] w-3 h-3 bg-optexa-cyan rounded-full animate-ping" />
                <div className="absolute top-[60%] left-[28%] w-3 h-3 bg-white rounded-full shadow-[0_0_20px_#22d3ee]" />
                
                {/* Overlay de texto */}
                <div className="absolute bottom-4 left-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-optexa-cyan">
                            <Globe size={14} />
                            <span>SECTOR: ANDES_SUR</span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-400">COORDS: -32.89, -68.84</span>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* --- DERECHA: FORMULARIO HUD --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form className="relative p-8 rounded-[2.5rem] bg-[#092a53]/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Decoración HUD */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-optexa-cyan/30" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-optexa-cyan/30" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-optexa-cyan/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-optexa-cyan/30" />

                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-mono uppercase">
                        <Lock size={12} className="text-optexa-light" />
                        <span>Conexión Segura SSL</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-16 h-1 bg-green-500/50 rounded-full animate-pulse" />
                        <div className="w-4 h-1 bg-green-500/30 rounded-full" />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <label className="block text-[10px] font-mono text-optexa-cyan mb-2 uppercase tracking-widest ml-1">ID / Nombre</label>
                            <input 
                            type="text" 
                            name="name" // Importante para Google Sheets despues
                            className="w-full bg-[#020410]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-optexa-light focus:bg-[#020410]/80 transition-all font-mono text-sm"
                            placeholder="Ej: Juan Pérez"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-[10px] font-mono text-optexa-cyan mb-2 uppercase tracking-widest ml-1">Frecuencia / Email</label>
                            <input 
                            type="email" 
                            name="email" // Importante
                            className="w-full bg-[#020410]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-optexa-light focus:bg-[#020410]/80 transition-all font-mono text-sm"
                            placeholder="juan@empresa.com"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label className="block text-[10px] font-mono text-optexa-cyan mb-2 uppercase tracking-widest ml-1">Datos de Misión</label>
                        <textarea 
                        name="message" // Importante
                        rows="4" 
                        className="w-full bg-[#020410]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-optexa-light focus:bg-[#020410]/80 transition-all resize-none font-mono text-sm"
                        placeholder="Necesito información sobre los robots..."
                        />
                    </div>

                    <button type="submit" className="w-full group relative overflow-hidden bg-white hover:bg-optexa-cyan text-black font-black py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                        <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                            <Radio size={18} className="animate-pulse" />
                            Transmitir Solicitud
                        </span>
                    </button>
                </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
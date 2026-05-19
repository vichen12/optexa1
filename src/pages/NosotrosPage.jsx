import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WppFloat } from '../components/WppFloat';
import { ArrowRight, Globe, Zap } from 'lucide-react';

const DELIE_STATS = [
  { value: '2003',   label: 'Año de fundación'         },
  { value: '1.000+', label: 'Instalaciones globales'   },
  { value: '+15',    label: 'Países con presencia'      },
  { value: '40m+',   label: 'Altura máx. de instalación' },
];

const TEAM = [
  {
    name: 'Anuk Vilarasau',
    role: 'Ingeniería Industrial',
    status: '5to Año — Universidad de Mendoza',
    bio: 'Especialista en flujos logísticos y eficiencia de planta. Responsable del análisis técnico, diseño de layouts y dimensionamiento de cada proyecto ASRS.',
    image: '/anuk.png',
    skills: ['Logística 4.0', 'Simulación', 'Lean Mfg', 'ASRS Design'],
    color: 'emerald',
  },
  {
    name: 'Vincenzo Dallapé',
    role: 'Ingeniería en Sistemas',
    status: '5to Año — UTN',
    bio: 'Desarrollador Full Stack con foco en integración de sistemas industriales. A cargo de la conectividad del ecosistema ASRS con los sistemas de gestión del cliente.',
    image: '/vincenzo.png',
    skills: ['React / Next.js', 'IoT Industrial', 'Cloud Computing'],
    color: 'cyan',
  },
];

export const NosotrosPage = () => {
  useEffect(() => {
    document.title = 'Nosotros — Optexa | Representación oficial DELIE en Argentina';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="pt-28">

        {/* HERO */}
        <section className="py-20 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">Quiénes somos</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Optexa —{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
                  Argentina
                </span>
              </h1>
              <p className="text-xl text-white/60 max-w-3xl font-light leading-relaxed">
                Somos los representantes oficiales exclusivos de DELIE en Argentina. Llevamos tecnología de automatización de almacenes de clase mundial a empresas argentinas con precios 30–50% más accesibles que las alternativas europeas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* DELIE */}
        <section className="py-16 px-6 bg-zinc-900 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-4">Nuestro fabricante</p>
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-5">
                  DELIE — Fabricante{' '}
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
                    global ASRS
                  </span>
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Fundada en 2003, DELIE es una de las principales fabricantes de sistemas de almacenamiento automatizado (ASRS) del mundo. Con más de 1.000 instalaciones en más de 15 países, DELIE combina robustez industrial, software propio WMS/WCS y una línea completa de productos: transelevadores, robots lanzadera, AMR, VLM, transportadores y estanterías de hasta 40 metros.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
                  <Globe size={14} />
                  <span>Presencia en Asia, Europa, América y Medio Oriente</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {DELIE_STATS.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="bg-zinc-950 border border-white/8 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-black text-cyan-400 leading-none mb-1">{s.value}</p>
                    <p className="text-white/60 text-xs">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section className="py-16 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] uppercase mb-3">El equipo</p>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
                Ingeniería local,{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa)' }}>
                  resultados reales
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {TEAM.map((member, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900 border border-white/8 rounded-3xl p-7">
                  <div className="flex items-start gap-4 mb-5">
                    <img src={member.image} alt={member.name} className="w-16 h-16 rounded-2xl object-cover bg-zinc-800" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    <div>
                      <h3 className="text-white font-black text-lg">{member.name}</h3>
                      <p className="text-cyan-400 text-sm font-semibold">{member.role}</p>
                      <p className="text-white/35 text-xs mt-0.5">{member.status}</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="text-[11px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-full">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MISIÓN */}
        <section className="py-16 px-6 bg-zinc-900 border-t border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-6">
                <Zap size={26} className="text-cyan-400" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mb-5 text-white">Nuestra misión</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Democratizar la automatización de almacenes en Argentina. Que ninguna empresa pierda competitividad por no poder acceder a tecnología que hasta hoy estaba reservada para las multinacionales.
              </p>
              <a href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
                Hablemos de tu proyecto <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <WppFloat />
      <Footer />
    </div>
  );
};

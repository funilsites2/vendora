import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    { name: "Lucas Mendes", role: "Web Designer", text: "Antes eu perdia horas no design. Agora só colo o bloco pronto. Consigo entregar projetos em metade do tempo e lucrar mais." },
    { name: "Juliana Rocha", role: "Gestora de Tráfego", text: "O PACK removeu o bloqueio da criação de LPs. Agora uso os blocos de alta conversão direto nas campanhas e o ROI aumentou absurdo." },
    { name: "Caio Fernandes", role: "InfoProdutor", text: "O tempo de criação caiu pela metade. O Pack me permitiu focar mais na estratégia do produto e menos em apertar botão no Elementor." },
    { name: "Marina Souza", role: "Designer Gráfico", text: "Mesmo sendo designer, ter esses blocos prontos escala muito meu trabalho. Tudo moderno e responsivo de fábrica. Adoro o suporte!" },
  ];

  return (
    <motion.section 
      id="depoimentos" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 relative overflow-hidden border-b border-zinc-900/50"
    >
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(132,204,22,0.1)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-1.5 h-1.5 bg-zinc-700"></div>
             <span className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase">PROVA SOCIAL</span>
             <div className="w-1.5 h-1.5 bg-zinc-700"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center tracking-tight mb-2">
             RESULTADOS QUE <span className="text-lime-500 italic font-serif">FALAM.</span>
          </h2>
          <p className="text-zinc-400 text-sm mb-16 max-w-md text-center">Junte-se a centenas de profissionais que transformaram sua velocidade de entrega com o Pack.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-24">
             {testimonials.map((t, i) => (
                <div key={i} className="bg-zinc-950/80  border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between hover:bg-zinc-900 transition-colors">
                   <div>
                      <div className="flex gap-1 mb-4">
                         {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-lime-500 text-lime-500" />)}
                      </div>
                      <p className="text-zinc-300 text-xs italic mb-8 leading-relaxed">"{t.text}"</p>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zinc-800/50 rounded-full flex items-center justify-center text-zinc-500 font-bold border border-zinc-700">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                         <div className="text-white font-bold text-xs">{t.name}</div>
                         <div className="text-zinc-500 text-[9px] uppercase tracking-wider">{t.role}</div>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          {/* Big Purple Banner */}
          <div className="w-full max-w-4xl bg-gradient-to-br from-[#0f1f0b] to-[#1b2b0e] rounded-[40px] py-16 px-8 text-center border border-lime-500/30 shadow-[0_0_50px_rgba(132,204,22,0.15)] relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <h3 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 tracking-tight leading-tight">PROJETADO PARA QUEM<br/>NÃO ACEITA O COMUM.</h3>
             <p className="text-lime-300 text-xs tracking-[0.2em] font-semibold uppercase relative z-10 flex items-center justify-center gap-2">
                <span className="w-4 h-[1px] bg-lime-400"></span>
                DESTRAVE O SEU POTENCIAL
                <span className="w-4 h-[1px] bg-lime-400"></span>
             </p>
          </div>
       </div>
    </motion.section>
  )
}

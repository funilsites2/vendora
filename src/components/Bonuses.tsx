import { Crown, Sparkles, Settings, Zap, Image, Copy, LayoutTemplate, Bot, Puzzle } from 'lucide-react';
import { motion } from 'motion/react';

export function Bonuses() {
  const bonuses = [
    { icon: LayoutTemplate, title: "ATIVOS PRÓPRIOS", desc: "Desenvolvo meus próprios sites e LPs para atração.", tag: "INDEPENDENTE" },
    { title: "TRÁFEGO PRÓPRIO", desc: "Invisto meu próprio orçamento em anúncios.", icon: Zap },
    { title: "ZERO RISCO", desc: "Sem investimento inicial por parte da distribuidora.", icon: Crown },
    { title: "FOCO NA ENTREGA", desc: "Vocês focam apenas na entrega do produto.", icon: Puzzle },
    { title: "MODELO DE COMISSÃO", desc: "Sou remunerado apenas por venda 100% concluída.", icon: Sparkles },
    { title: "SEM CONFLITOS", desc: "Sem interferência com as campanhas oficiais.", icon: Settings }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-zinc-950 border-y border-zinc-900 relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-lime-500 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
         <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-zinc-700"></div>
            <span className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase">PROJETO OPCIONAL</span>
            <div className="w-1.5 h-1.5 bg-zinc-700"></div>
         </div>
         <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4 tracking-tight">
            MODELO DE <span className="italic text-zinc-500 font-serif font-light">PARCERIA.</span>
         </h2>
         <p className="text-zinc-400 text-center mb-16 text-sm max-w-lg leading-relaxed">Em paralelo aos serviços, atuo como um parceiro de vendas. Eu capto, qualifico e você só entrega.</p>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-12">
           {bonuses.map((b, i) => (
              <div key={i} className="bg-black border border-zinc-800/80 p-6 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors group relative overflow-hidden">
                 <div className="flex items-center justify-between mb-4">
                     <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:border-lime-500/50 transition-colors">
                        <b.icon className="w-5 h-5 text-zinc-400 group-hover:text-lime-400 transition-colors" />
                     </div>
                     {b.tag && (
                       <span className="bg-lime-500/10 text-lime-400 border border-lime-500/20 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">{b.tag}</span>
                     )}
                 </div>
                 <h3 className="text-white font-bold text-xs uppercase mb-2 tracking-wide">{b.title}</h3>
                 <p className="text-zinc-500 text-xs leading-relaxed">{b.desc}</p>
                 <div className="absolute right-0 bottom-0 text-[100px] text-zinc-900/20 font-black leading-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none translate-x-4 translate-y-4">
                    {i + 1}
                 </div>
              </div>
           ))}
         </div>

         <a href="#investimento" className="bg-[#0a1a0b] border border-lime-500/30 hover:bg-lime-900/50 text-lime-300 font-bold py-4 px-8 rounded-xl flex items-center gap-3 transition-colors text-sm tracking-wider">
           IR PARA O INVESTIMENTO <span className="transform -rotate-45">→</span>
         </a>
      </div>
    </motion.section>
  )
}

import { XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Comparison() {
  const negative = [
    { title: "DESPERDÍCIO DE VERBA", desc: "Cliques de pessoas que não querem comprar baterias ou estão fora da sua região." },
    { title: "CLIQUES DESQUALIFICADOS", desc: "Seu anúncio aparece para pesquisas irrelevantes, queimando seu orçamento diário." },
    { title: "ZERO ACOMPANHAMENTO", desc: "Você não sabe qual campanha traz venda e qual campanha dá prejuízo." },
    { title: "PÁGINAS DESATUALIZADAS", desc: "Seu site não acompanha as mudanças de mercado e perde posições no Google." },
    { title: "FALTA DE DADOS", desc: "Decisões baseadas em achismos, sem métricas claras de conversão." }
  ];

  const positive = [
    { title: "GESTÃO GOOGLE ADS", desc: "Campanhas criadas e gerenciadas por especialistas no segmento automotivo." },
    { title: "OTIMIZAÇÃO SEMANAL", desc: "Ajustes constantes para reduzir o custo por clique e aumentar o lucro." },
    { title: "SEO CONTÍNUO", desc: "Trabalho mensal para colocar e manter seu site nas primeiras posições orgânicas." },
    { title: "ATUALIZAÇÃO DE LPs", desc: "Suas Landing Pages estão sempre otimizadas para as melhores taxas de conversão." },
    { title: "RELATÓRIOS PRECISOS", desc: "Acompanhamento transparente de cada centavo investido e retornado." }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="trafego"
      className="py-24 max-w-5xl mx-auto px-6 space-y-32"
    >
      {/* Negative State */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 tracking-tight">
          <span className="text-zinc-500 text-[10px] tracking-widest font-bold uppercase flex justify-center items-center gap-2 mb-4">
             <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> 
             O CENÁRIO AMADOR 
             <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </span>
          SEM UMA <span className="text-red-500">GESTÃO PROFISSIONAL</span> <br/>
          SEU DINHEIRO ESCOA.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {negative.map((item, i) => (
            <div key={i} className="bg-[#0f0404] border border-red-900/30 p-6 rounded-2xl hover:border-red-500/50 transition-colors">
               <XCircle className="w-5 h-5 text-red-500 mb-4 opacity-50" />
               <h3 className="text-white font-bold text-xs uppercase mb-2">{item.title}</h3>
               <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Positive State */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 tracking-tight">
          <span className="text-zinc-500 text-[10px] tracking-widest font-bold uppercase flex justify-center items-center gap-2 mb-4">
             <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> 
             A SOLUÇÃO DEFINITIVA 
             <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
          </span>
          COM <span className="text-emerald-400">3. TRÁFEGO E SEO</span> <br/>
          SEU RESULTADO É PREVISÍVEL.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-24">
          {positive.map((item, i) => (
            <div key={i} className="bg-[#020b06] border border-emerald-900/30 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors">
               <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-4 opacity-70" />
               <h3 className="text-white font-bold text-xs uppercase mb-2">{item.title}</h3>
               <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature Highlights  */}
        <div className="w-full flex-col items-center pt-24 border-t border-zinc-900 border-dashed">
            <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12 tracking-tight">
               O QUE ESTÁ <span className="text-lime-500">INCLUSO NA MENSALIDADE</span>:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
               <div className="bg-gradient-to-br from-[#1c0836] to-black border border-lime-900/40 p-8 rounded-3xl text-center flex flex-col items-center gap-4 relative overflow-hidden group shadow-2xl">
                  <div className="absolute w-32 h-32 bg-[radial-gradient(circle,rgba(132,204,22,0.2)_0%,transparent_70%)] rounded-full "></div>
                  <h3 className="text-white font-black text-base uppercase relative z-10">GOOGLE ADS</h3>
                  <div className="w-16 h-16 bg-black border border-zinc-800 rounded-xl flex items-center justify-center text-3xl font-serif text-zinc-600 relative z-10 group-hover:scale-110 transition-transform shadow-inner">G</div>
               </div>
               
               <div className="bg-gradient-to-br from-[#1c0836] to-black border border-lime-900/40 p-8 rounded-3xl text-center flex flex-col items-center gap-4 relative overflow-hidden group shadow-2xl">
                  <div className="absolute w-32 h-32 bg-[radial-gradient(circle,rgba(132,204,22,0.2)_0%,transparent_70%)] rounded-full "></div>
                  <h3 className="text-white font-black text-base uppercase relative z-10">OTIMIZAÇÃO LPs</h3>
                  <div className="w-16 h-16 bg-black border border-zinc-800 rounded-xl flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 transition-transform shadow-inner">⚡</div>
               </div>

               <div className="bg-gradient-to-br from-[#1c0836] to-black border border-lime-900/40 p-8 rounded-3xl text-center flex flex-col items-center gap-4 relative overflow-hidden group shadow-2xl">
                  <div className="absolute w-32 h-32 bg-[radial-gradient(circle,rgba(132,204,22,0.2)_0%,transparent_70%)] rounded-full "></div>
                  <h3 className="text-white font-black text-base uppercase relative z-10">DASHBOARD ROI</h3>
                  <div className="w-16 h-16 bg-black border border-zinc-800 rounded-xl flex items-center justify-center text-3xl relative z-10 group-hover:scale-110 transition-transform shadow-inner text-emerald-400">R$</div>
               </div>
            </div>
        </div>
      </div>
    </motion.section>
  )
}

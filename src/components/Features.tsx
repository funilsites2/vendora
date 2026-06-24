import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const steps = [
    {
      title: "SITE OFICIAL",
      description: "Site principal otimizado para a sua distribuidora, transmitindo autoridade e focado em vendas.",
      icon: "🌐"
    },
    {
      title: "20 LPs REGIONAIS",
      description: "4 sites principais e 16 páginas específicas para dominar as buscas locais nas localidades.",
      icon: "📍"
    },
    {
      title: "SEO E DADOS",
      description: "Otimização completa para o Google, integrada ao Analytics e Search Console.",
      icon: "📈"
    }
  ];

  return (
    <motion.section 
      id="estrutura" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
          <div className="flex-1 space-y-8">
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-500" />
                 <span className="text-[10px] tracking-widest text-lime-500 font-bold uppercase">1. ESTRUTURA DIGITAL</span>
             </div>
             
             <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
               O ALICERCE DO <br/>
               <span className="text-lime-500">CRESCIMENTO.</span><br/>
             </h2>
             
             <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
               Desenvolvemos seus ativos digitais focados 100% em conversão e atração de clientes pelo Google.
             </p>

             <ul className="space-y-4 pt-4">
                 {['4 Sites Principais', '16 Landing Pages Extras', 'Google Analytics e Search Console', 'Integração Nativa WhatsApp'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                       <div className="w-1.5 h-1.5 rounded-full bg-lime-600"></div>
                       {item}
                    </li>
                 ))}
             </ul>

             <div className="pt-8">
               <a href="#investimento" className="inline-flex bg-lime-900/30 border border-lime-500/50 hover:bg-lime-900/50 text-white font-bold py-4 px-8 rounded items-center gap-3 transition-colors">
                  VER INVESTIMENTO <span className="transform -rotate-45">→</span>
               </a>
             </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden relative group">
                {/* Mock Interface Details */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-950 border-b border-zinc-800 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                
                <div className="pt-16 p-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
                     {[...Array(6)].map((_, i) => (
                         <div key={i} className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg aspect-square p-4 flex flex-col items-center justify-center gap-2 group/card hover:bg-zinc-800 transition-colors">
                            <div className="w-12 h-12 bg-lime-500/20 rounded shadow-[0_0_15px_rgba(132,204,22,0.2)] mb-2"></div>
                            <div className="w-full h-2 bg-zinc-700 rounded-full"></div>
                            <div className="w-2/3 h-2 bg-zinc-700 rounded-full"></div>
                         </div>
                     ))}
                </div>
                
                {/* floating "Ctrl" key indicator */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-pink-500 rounded-2xl rotate-12 flex items-center justify-center shadow-lg border border-pink-400">
                    <span className="text-white font-black text-xl">Ctrl</span>
                </div>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-1 relative pt-20 border-t border-zinc-800">
             {steps.map((step, i) => (
               <div key={i} className="bg-black border border-zinc-800 p-12 text-center flex flex-col items-center gap-6 relative group overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:bg-lime-900/20 transition-colors">
                     {step.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl tracking-tight">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
               </div>
             ))}
        </div>
      </div>
    </motion.section>
  );
}

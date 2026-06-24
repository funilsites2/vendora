import { motion } from 'motion/react';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-48 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(132,204,22,0.1)_0%,transparent_70%)] rounded-full pointer-events-none"></div>
      
      {/* Text Content */}
      <div className="w-[327px] md:w-auto md:flex-1 space-y-8 z-10 relative mx-auto md:mx-0">
        <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-px bg-lime-500"></div>
            <span className="text-[10px] tracking-widest text-lime-500 font-bold uppercase">PROPOSTA COMERCIAL</span>
        </div>

        <h1 className="text-[43px] md:text-[63px] font-black text-white leading-[1.1] tracking-tight">
          AGÊNCIA <span className="text-[#b1f616] block">VENDORA</span>
        </h1>
        
        <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
          Vendas - Marketing - Resultados
        </p>

        <div className="pt-4 flex flex-col gap-4 max-w-sm">
            <a href="#investimento" className="w-full bg-lime-600 hover:bg-lime-500 text-white font-bold py-4 px-8 rounded flex items-center justify-between transition-colors shadow-[0_0_20px_rgba(132,204,22,0.4)] group">
              VER INVESTIMENTO
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
        </div>
      </div>

      {/* Visual / Image Side */}
      <div className="flex-1 relative z-10 w-full max-w-lg hidden md:block">
         {/* Mock 3D Box or Interface Representation */}
         <div className="w-full aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden shadow-2xl p-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDExNSwwLDAuMDgpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]"></div>

            <div className="relative group">
                <div className="absolute -inset-4 bg-lime-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-9xl text-zinc-600 font-serif opacity-50 mix-blend-overlay">ADS</div>
            </div>

            {/* floating cards */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-24 bg-black/80  border border-zinc-800 rounded-lg p-3 space-y-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-zinc-500 font-bold">SEO</div>
                <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-zinc-500 font-bold">CRM</div>
                <div className="text-[10px] font-bold text-green-500 mt-2 text-center leading-tight">VENDAS<br/>GERADAS</div>
            </div>
         </div>
      </div>
    </motion.section>
  );
}

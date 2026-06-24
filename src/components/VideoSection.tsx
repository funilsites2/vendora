import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export function VideoSection() {
  return (
    <motion.section 
      id="como-funciona" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 relative flex flex-col items-center max-w-5xl mx-auto px-6"
    >
      {/* Small top label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-lime-600"></div>
        <span className="text-[10px] tracking-widest text-lime-600 font-bold uppercase">UM RESUMO DETALHADO DO PROJETO</span>
        <div className="w-1.5 h-1.5 rounded-full bg-lime-600"></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 tracking-tight">
        A APRESENTAÇÃO DA <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">PROPOSTA</span>
      </h2>

      {/* Video Container */}
      <div className="relative w-full aspect-video rounded-3xl bg-zinc-950 border border-zinc-900/50 shadow-2xl overflow-hidden group cursor-pointer group hover:border-lime-500/30 transition-colors duration-500">
        
        {/* Glow effect behind video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[radial-gradient(circle,rgba(101,163,13,0.15)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

        {/* Mock Content */}
        <div className="absolute inset-0 flex items-center justify-between p-12 opacity-40 mix-blend-screen mix-blend-overlay">
           <h3 className="text-8xl font-serif text-white opacity-50 tracking-widest leading-none">ASSISTA O<br/>VÍDEO</h3>
           <div className="w-64 h-64 bg-zinc-800 rounded-3xl rotate-12 flex items-center justify-center text-zinc-900">
              <span className="text-9xl font-black">W</span>
           </div>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-black/50  flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-12 h-12 sm:w-16 sm:h-16 text-zinc-300 fill-zinc-300 group-hover:text-white group-hover:fill-white ml-2 transition-colors" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

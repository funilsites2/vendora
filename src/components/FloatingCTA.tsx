import { MessageCircle } from 'lucide-react';

export function FloatingCTA() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-md border border-zinc-800 rounded-full p-2 flex items-center shadow-[0_0_30px_rgba(0,0,0,0.8)]">
        <a href="#investimento" className="flex items-center gap-3 px-4 py-2 hover:bg-zinc-900 rounded-full transition-colors group">
          <div className="w-8 h-8 rounded-full bg-lime-500/20 flex items-center justify-center relative">
             <div className="absolute inset-0 rounded-full bg-lime-500/30 animate-ping"></div>
             <div className="w-4 h-4 rounded-full bg-lime-400 shadow-[0_0_10px_#a855f7]"></div>
          </div>
          <span className="text-white text-sm font-semibold tracking-wide group-hover:text-lime-400 transition-colors">APROVAR PROPOSTA</span>
        </a>
        
        <div className="w-px h-8 bg-zinc-800 mx-2"></div>
        
        <button className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-700 transition-all text-zinc-400 hover:text-white">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

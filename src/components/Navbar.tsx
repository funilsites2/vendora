export function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 absolute top-0 left-0 right-0 z-50">
      <div className="relative border border-dashed border-zinc-800 bg-black/50 backdrop-blur-sm p-4 flex items-center justify-between">
        {/* Corner Decorators */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></div>

        {/* Logo */}
        <div className="flex items-center">
          <img src="https://i.imgur.com/hCYARTz.png" alt="Logo" className="h-16 object-contain" />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#estrutura" className="text-xs font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">Estrutura</a>
          <a href="#crm" className="text-xs font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">CRM & IA</a>
          <a href="#trafego" className="text-xs font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">Tráfego</a>
          <a href="#investimento" className="text-xs font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">Investimento</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="bg-white hover:bg-zinc-200 text-black text-xs font-bold py-3 px-6 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            APROVAR PROPOSTA
          </button>
        </div>
      </div>
    </nav>
  );
}

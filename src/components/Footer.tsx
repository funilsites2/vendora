import { Lock, Headset, Check, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-black pt-32 pb-8 relative overflow-hidden"
    >
        {/* Final CTA Banner */}
       <div className="max-w-4xl mx-auto px-6 relative z-10 mb-32">
          <div className="bg-gradient-to-br from-[#0b1205] to-black border border-lime-500/20 rounded-[40px] p-12 md:p-16 text-center flex flex-col items-center relative overflow-hidden shadow-[0_0_100px_rgba(132,204,22,0.15)] group">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(101,163,13,0.1)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,rgba(101,163,13,0.2)_0%,transparent_70%)] transition-colors duration-700"></div>
             
             <div className="inline-flex items-center gap-2 bg-lime-500/10 text-lime-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-lime-500/20 mb-8 uppercase tracking-widest shadow-inner">
                <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-ping"></span> PASSO FINAL
             </div>

             <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                VAMOS INICIAR <br/>O PROJETO <span className="text-lime-500 italic font-serif font-light">HOJE?</span>
             </h2>

             <p className="text-zinc-400 max-w-sm mx-auto mb-10 text-sm leading-relaxed">
               Aproveite as condições descritas nesta proposta e comece a escalar as vendas da sua distribuidora de forma automática e previsível.
             </p>

             <a href="#investimento" className="bg-[#0b240a] border border-lime-500/50 hover:bg-lime-600 text-white font-black text-sm py-5 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(132,204,22,0.4)] flex items-center justify-center gap-3 w-full sm:w-auto">
                REVER INVESTIMENTO
                <span className="transform -rotate-45 block">→</span>
             </a>
             
             <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Parceria Sólida</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-lime-500" /> Resultados Previsíveis</span>
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-lime-500" /> Estrutura Própria</span>
             </div>
          </div>
       </div>

       {/* Footer Links */}
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-zinc-900 pt-16">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center mb-6">
                <img src="https://i.imgur.com/hCYARTz.png" alt="Logo" className="h-20 object-contain" />
             </div>
             <p className="text-zinc-500 text-xs w-full max-w-xs leading-loose">
                Proposta Comercial de implantação de Máquina de Vendas, CRM, Inteligência Artificial e Gestão de Tráfego Automotivo.
             </p>
          </div>

          <div>
             <h4 className="text-white font-bold text-xs mb-6 uppercase tracking-wider">Links da Proposta</h4>
             <ul className="space-y-4 text-xs text-zinc-500 font-semibold">
                <li><a href="#estrutura" className="hover:text-lime-400 transition-colors">Estrutura Digital</a></li>
                <li><a href="#crm" className="hover:text-lime-400 transition-colors">CRM e IA</a></li>
                <li><a href="#trafego" className="hover:text-lime-400 transition-colors">Gestão de Tráfego</a></li>
                <li><a href="#investimento" className="hover:text-lime-400 transition-colors">Investimento e Parceria</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-bold text-xs mb-6 uppercase tracking-wider">Contato & Dúvidas</h4>
             <ul className="space-y-4 text-xs text-zinc-500 font-semibold">
                <li className="flex items-center gap-2"><Headset className="w-4 h-4 text-lime-500" /> Reunião de Alinhamento</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-lime-500" /> Assinatura de Contrato</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Sigilo e Confidencialidade</li>
             </ul>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between text-[10px] text-zinc-600 font-semibold uppercase tracking-wider gap-4">
          <p>© 2026 ADS Loja de Baterias. Todos os direitos reservados.</p>
          <p>Proposta confidencial e intransferível.</p>
       </div>
    </motion.footer>
  );
}

import { MessageSquare, Zap, Bot } from 'lucide-react';
import { motion } from 'motion/react';

export function TargetAudience() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="crm"
      className="py-24 relative max-w-7xl mx-auto px-6 border-t border-zinc-900"
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
         <div className="flex-1 space-y-6 md:pr-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-lime-600"></div>
              <span className="text-[10px] tracking-widest text-lime-600 font-bold uppercase">2. INTELIGÊNCIA ARTIFICIAL</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              CRM COMERCIAL + <br/> AGENTE VIRTUAL DE <br/> ATENDIMENTO.
            </h2>
            <div className="flex items-center gap-4 pt-4">
               <div className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wider">Follow-up Automático</div>
               <div className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wider">Dashboard de Vendas</div>
            </div>
         </div>
         
         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="bg-zinc-900/40 border-t border-zinc-800 p-6 rounded-2xl hover:bg-zinc-800/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-zinc-700"></div>
              <MessageSquare className="w-6 h-6 text-zinc-500 mb-4 group-hover:text-lime-500 transition-colors" />
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Qualificação de Leads</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">A IA identifica a região, modelo do veículo e bateria correta antes do humano intervir.</p>
           </div>
           
           <div className="bg-zinc-900/40 border-t border-zinc-800 p-6 rounded-2xl hover:bg-zinc-800/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-zinc-700"></div>
              <Bot className="w-6 h-6 text-zinc-500 mb-4 group-hover:text-lime-500 transition-colors" />
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Agente de Retenção</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Respostas instantâneas e recuperação de clientes inativos do WhatsApp automaticamente.</p>
           </div>

           <div className="bg-zinc-900/40 border-t border-zinc-800 p-6 rounded-2xl hover:bg-zinc-800/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-zinc-700"></div>
              <Zap className="w-6 h-6 text-zinc-500 mb-4 group-hover:text-lime-500 transition-colors" />
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Funil Sem Falhas</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">A IA encaminha apenas os clientes prontos para compra diretamente para a equipe comercial.</p>
           </div>

           <a href="#investimento" className="bg-lime-600 p-6 rounded-2xl flex flex-col justify-between items-start group cursor-pointer hover:bg-lime-500 transition-colors shadow-[0_0_30px_rgba(132,204,22,0.3)] relative overflow-hidden block">
              <h3 className="text-white font-black text-xl leading-tight uppercase relative z-10">VER<br/>INVESTIMENTO</h3>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors mt-8 relative z-10">
                 <span className="text-white font-black transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[radial-gradient(circle,rgba(163,230,53,0.3)_0%,transparent_70%)] group-hover:opacity-80 transition-opacity"></div>
           </a>
         </div>
      </div>
    </motion.section>
  )
}

import { Check, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Pricing() {
  const [isPartnershipRevealed, setIsPartnershipRevealed] = useState(false);

  return (
    <motion.section 
      id="investimento" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 relative overflow-hidden flex flex-col items-center"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle,rgba(132,204,22,0.15)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-lime-500"></div>
            <span className="text-[10px] tracking-widest text-lime-500 font-bold uppercase">PROPOSTA FINANCEIRA</span>
            <div className="w-1.5 h-1.5 bg-lime-500"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          INVESTIMENTO NO <span className="text-lime-500 italic">PROJETO.</span>
        </h2>
        <p className="text-zinc-400">Valores transparentes para o setup inicial e a gestão recorrente.</p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Default Pricing Card */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full z-20 tracking-wider">
                 VALORES DO PROJETO
              </div>

              {/* Setup Section */}
              <div className="mb-8 pb-8 border-b border-zinc-800">
                  <h3 className="text-xl font-bold text-white mb-4">1. IMPLANTAÇÃO (PAGAMENTO ÚNICO)</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>4 Sites Principais (4 Domínios) + 16 LPs (R$ 997/cada)</span>
                      <span className="text-white">R$ 19.940</span>
                    </div>
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Implantação CRM + IA (Whitelabel/Domínio Próprio)</span>
                      <span className="text-white">R$ 8.000</span>
                    </div>
                  </div>

                  <div className="flex flex-col mb-2">
                    <span className="text-zinc-500 text-xs font-semibold tracking-wider">TOTAL DO SETUP</span>
                    <span className="text-4xl font-black text-white">R$ 27.940</span>
                  </div>
              </div>

              {/* Monthly Section */}
              <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">2. RECORRÊNCIA MENSAL</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Gestão Google Ads (R$ 897/cada site)</span>
                      <span className="text-white">R$ 17.940/mês</span>
                    </div>
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>SEO Mensal 20 Sites + Hospedagem VPS</span>
                      <span className="text-white">R$ 2.500/mês</span>
                    </div>
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Mensalidade CRM</span>
                      <span className="text-white">R$ 497/mês</span>
                    </div>
                  </div>

                  <div className="flex flex-col mb-2">
                    <span className="text-zinc-500 text-xs font-semibold tracking-wider">TOTAL MENSAL</span>
                    <span className="text-4xl font-black text-white">R$ 20.937<span className="text-xl text-zinc-500">/mês</span></span>
                  </div>
                  <p className="text-xs text-zinc-500 italic mt-2">* Verba de anúncios gerida no Google Ads é paga separadamente.</p>
              </div>

              <button className="w-full mt-auto bg-lime-600 hover:bg-lime-500 text-white font-black text-sm py-5 rounded-xl transition-colors shadow-[0_0_20px_rgba(132,204,22,0.3)] flex items-center justify-center gap-2 group">
                 APROVAR PROPOSTA
                 <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
          </div>

          {/* Partnership Pricing Card */}
          <div className="bg-[#0a0a0a] border border-lime-900/50 rounded-3xl p-8 md:p-10 shadow-2xl relative group flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full z-40 tracking-wider flex items-center gap-2 whitespace-nowrap">
                 <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                 PROJETO DE PARCERIA
              </div>

              {!isPartnershipRevealed ? (
                 <div className="absolute inset-0 z-30 flex flex-col items-center justify-center backdrop-blur-xl bg-black/60 p-8 text-center border border-zinc-800 rounded-3xl">
                     <Lock className="w-12 h-12 text-zinc-500 mb-6" />
                     <h3 className="text-2xl font-black text-white mb-4">Desbloquear Oferta de Parceria</h3>
                     <p className="text-zinc-400 text-sm mb-8">
                       Uma proposta alternativa com redução drástica de custos iniciais e zero custo mensal, em troca de parceria.
                     </p>
                     <button 
                       onClick={() => setIsPartnershipRevealed(true)}
                       className="bg-white text-black hover:bg-zinc-200 font-bold py-4 px-8 rounded-xl transition-colors tracking-wide text-sm flex items-center justify-center gap-2"
                     >
                       REVELAR CONDIÇÕES
                     </button>
                 </div>
              ) : null}

              <div className={`transition-all duration-700 flex flex-col flex-1 ${!isPartnershipRevealed ? 'opacity-20 blur-md select-none pointer-events-none' : 'opacity-100 blur-0'}`}>
                  {/* Setup Section */}
                  <div className="mb-8 pb-8 border-b border-zinc-800">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        1. IMPLANTAÇÃO <span className="text-green-400 text-xs py-1 px-2 bg-green-400/10 rounded-md">-50% OFF</span>
                      </h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm text-zinc-400 line-through opacity-50">
                          <span>4 Sites Principais (4 Domínios) + 16 LPs (R$ 997/cada)</span>
                          <span>R$ 19.940</span>
                        </div>
                        <div className="flex justify-between text-sm text-zinc-400 line-through opacity-50">
                          <span>Implantação CRM + IA (Whitelabel/Domínio Próprio)</span>
                          <span>R$ 8.000</span>
                        </div>
                      </div>

                      <div className="flex flex-col mb-2 relative">
                        <div className="absolute -right-4 top-0 rotate-12 bg-red-600/20 text-red-400 text-xs px-2 py-1 rounded font-bold border border-red-500/20">CUSTO SUBSIDIADO</div>
                        <span className="text-zinc-500 text-xs font-semibold tracking-wider">TOTAL DO SETUP (50% DESCONTO)</span>
                        <span className="text-4xl font-black text-white">R$ 13.970 <span className="text-sm font-normal text-zinc-500 line-through">R$ 27.940</span></span>
                      </div>
                  </div>

                  {/* Monthly Section */}
                  <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">2. RECORRÊNCIA MENSAL</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm text-zinc-400">
                          <span>Gestão Google Ads (R$ 897/cada site)</span>
                          <span className="text-green-400 font-bold">R$ 0/mês</span>
                        </div>
                        <div className="flex justify-between text-sm text-zinc-400">
                          <span>SEO Mensal 20 Sites + Hospedagem VPS</span>
                          <span className="text-green-400 font-bold">R$ 0/mês</span>
                        </div>
                        <div className="flex justify-between text-sm text-zinc-400">
                          <span>Mensalidade CRM</span>
                          <span className="text-green-400 font-bold">R$ 0/mês</span>
                        </div>
                        <div className="flex justify-between text-sm text-lime-400 font-bold bg-lime-500/10 p-3 rounded-lg border border-lime-500/20 mt-2">
                          <span>Comissionamento por Venda</span>
                          <span>15% a 25%</span>
                        </div>
                      </div>

                      <div className="flex flex-col mb-2">
                        <span className="text-zinc-500 text-xs font-semibold tracking-wider">TOTAL MENSAL</span>
                        <span className="text-4xl font-black text-green-400">ZERO CUSTO FIXO</span>
                      </div>
                      <p className="text-xs text-zinc-500 italic mt-2">* Meu lucro vem 100% dos resultados gerados (inteligência, anúncios e automações).</p>
                  </div>

                  <button className="w-full mt-auto bg-white hover:bg-zinc-200 text-black font-black text-sm py-5 rounded-xl transition-colors mb-4 flex items-center justify-center gap-2 group">
                     APROVAR PARCERIA
                     <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
              </div>
          </div>

          {/* Expansion Pack Pricing Card */}
          <div className="bg-gradient-to-br from-[#0a1a0b] to-[#0a0a0a] border border-orange-500/30 rounded-3xl p-8 md:p-10 shadow-2xl relative group flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full z-40 tracking-wider flex items-center gap-2 whitespace-nowrap">
                 <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                 PROJETO AMBICIOSO: IFOOD BATERIAS
              </div>

              {/* Setup Section */}
              <div className="mb-8 pb-8 border-b border-zinc-800">
                  <h3 className="text-xl font-bold text-white mb-4">DOMINAÇÃO ESTADUAL</h3>
                  <p className="text-sm text-zinc-400 mb-6">Implantação do modelo "iFood de Baterias" em grandes cidades do estado, criando um monopólio de buscas locais.</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Cidades Alvo (7 Praças)</span>
                      <span className="text-white text-right max-w-[150px]">Goiânia, Anápolis, Rio Verde, Uruaçu, Formosa, Cristalina, Luziânia</span>
                    </div>
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Rede com 50 Landing Pages (R$ 997/cada)</span>
                      <span className="text-white">R$ 49.850</span>
                    </div>
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Aplicativo Próprio + CRM Whitelabel</span>
                      <span className="text-white">R$ 15.000</span>
                    </div>
                  </div>

                  <div className="flex flex-col mb-2">
                     <span className="text-zinc-500 text-xs font-semibold tracking-wider">INVESTIMENTO DO SETUP</span>
                     <span className="text-4xl font-black text-white">R$ 64.850</span>
                  </div>
              </div>

              {/* Monthly Section */}
              <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">RECORRÊNCIA MENSAL</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Gestão Multi-Praças Ads (50 LPs x R$ 897)</span>
                      <span className="text-white">R$ 44.850/mês</span>
                    </div>
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>SEO Avançado + 50 Sites + Cloud Dedicada</span>
                      <span className="text-white">R$ 3.500/mês</span>
                    </div>
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Manutenção App e Licenças CRM</span>
                      <span className="text-white">R$ 1.500/mês</span>
                    </div>
                    <div className="flex justify-between text-sm text-orange-400 font-bold bg-orange-500/10 p-3 rounded-lg border border-orange-500/20 mt-2">
                      <span>Modelo de Sociedade</span>
                      <span>Equity em Negociação</span>
                    </div>
                  </div>

                  <div className="flex flex-col mb-2">
                    <span className="text-zinc-500 text-xs font-semibold tracking-wider">APORTE MENSAL</span>
                    <span className="text-4xl font-black text-white">R$ 49.850<span className="text-xl text-zinc-500">/mês</span></span>
                  </div>
                  <p className="text-xs text-zinc-500 italic mt-2">* Para distribuidoras com alta capacidade de entrega e logística bem definida em múltiplas operações.</p>
              </div>

              <button className="w-full mt-auto bg-orange-600 hover:bg-orange-500 text-white font-black text-sm py-5 rounded-xl transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2 group">
                 APROVAR PROJETO ESTADUAL
                 <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
          </div>
      </div>
    </motion.section>
  );
}
